// content.js — MapLeads Pro v2 — Google Maps DOM Scraper

(function () {
  'use strict';
  if (window.__mlp2) return;
  window.__mlp2 = true;

  let state = { running: false, settings: {}, seen: new Set() };

  // ─── MESSAGES ──────────────────────────────────────────────────────────────
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'START_SCRAPING') {
      state.settings = msg.settings;
      state.seen.clear();
      run().catch(err => {
        notify({ type: 'ERROR', message: err.message || 'Scraping failed' });
        state.running = false;
      });
      sendResponse({ ok: true });
    } else if (msg.type === 'STOP_SCRAPING') {
      state.running = false;
      sendResponse({ ok: true });
    }
    return true;
  });

  // ─── MAIN ──────────────────────────────────────────────────────────────────
  async function run() {
    state.running = true;
    const S = state.settings;

    notify({ type: 'STATUS', message: 'Looking for search results…' });

    const feed = await waitFor([
      'div[role="feed"]',
      'div[aria-label][role="main"] div[tabindex]',
      '.m6QErb[aria-label]'
    ], 9000);

    if (!feed) {
      throw new Error('No results found. Please search for a business type on Google Maps first.');
    }

    notify({ type: 'STATUS', message: 'Collecting all listings (scrolling)…' });
    const items = await gatherItems(feed, S.maxLeads);

    if (!items.length) {
      throw new Error('No business listings detected on this page.');
    }

    notify({ type: 'STATUS', message: `Found ${items.length} listings. Extracting…` });

    for (let i = 0; i < items.length && state.running; i++) {
      notify({ type: 'PROGRESS', current: i + 1, total: items.length, label: 'Extracting details…' });
      try {
        const lead = await processItem(items[i], S);
        if (!lead) continue;

        // Duplicate removal
        if (S.dedup) {
          const key = dedupeKey(lead);
          if (state.seen.has(key)) { continue; }
          state.seen.add(key);
        }

        // Rating filter
        if (S.minRating > 0 && parseFloat(lead.rating || 0) < S.minRating) continue;

        // Website enrichment
        if (lead.website && (S.scrapeEmails || S.scrapeSocial)) {
          notify({ type: 'STATUS', message: `Fetching website: ${lead.name}…` });
          try {
            const extra = await fetchSite(lead.website);
            if (S.scrapeEmails)  lead.emails = extra.emails;
            if (S.scrapeSocial)  lead.social = extra.social;
          } catch (e) {}
        }

        notify({ type: 'LEAD', lead });
      } catch (e) {
        console.warn('[MLPro]', e);
      }
      await sleep(S.delay + Math.random() * 600);
    }

    state.running = false;
    window.__mlp2 = false;
    notify({ type: 'COMPLETE', total: state.seen.size || 0 });
  }

  // ─── GATHER ALL ITEMS ──────────────────────────────────────────────────────
  async function gatherItems(feed, max) {
    const seen  = new WeakSet();
    const items = [];
    let stale   = 0;

    while (items.length < max && stale < 4 && state.running) {
      const before = items.length;
      getCards(feed).forEach(el => {
        if (!seen.has(el) && items.length < max) {
          seen.add(el); items.push(el);
        }
      });

      stale = items.length === before ? stale + 1 : 0;

      const endMsgVisible = !!document.querySelector(
        '[class*="HlvSq"],[class*="section-result-end"],[class*="eKbjU"]'
      );
      if (endMsgVisible) break;

      feed.scrollTop = feed.scrollHeight;
      await sleep(1300);
      notify({ type: 'STATUS', message: `Collecting listings: ${items.length} found…` });
    }

    return items;
  }

  function getCards(feed) {
    const strategies = [
      'div[role="feed"] > div > div > a',
      'div[role="article"]',
      'a[href*="/maps/place/"]',
      '.Nv2PK',
      '.lI9IFe',
      '[data-result-index]'
    ];
    for (const sel of strategies) {
      try {
        const found = [...document.querySelectorAll(sel)].filter(el =>
          el.innerText?.trim().length > 4
        );
        if (found.length > 1) return found;
      } catch (e) {}
    }
    return [...feed.children].filter(el => el.innerText?.length > 5);
  }

  // ─── PROCESS A SINGLE LISTING ──────────────────────────────────────────────
  async function processItem(el, S) {
    // Click to open detail panel
    const clickable = el.querySelector?.('a[href*="maps/place"]') ||
                      el.querySelector?.('[jsaction*="click"]') || el;
    try { clickable.click(); } catch (e) {}

    await sleep(2000);

    // Wait for detail panel
    const panel = await waitFor([
      'h1.DUwDvf','h1[class*="DUwDvf"]',
      '[data-attrid="title"]',
      'div[class*="fontHeadlineLarge"]',
      'div[role="main"][aria-label]'
    ], 4500);

    return panel ? extractDetail(S) : extractCard(el);
  }

  // ─── EXTRACT DETAIL PANEL ──────────────────────────────────────────────────
  function extractDetail(S) {
    const lead = {
      name:'', category:'', rating:'', reviewCount:'',
      address:'', phone:'', website:'',
      emails:[], social:{}, reviews:[], hours:'',
      scrapedAt: new Date().toISOString()
    };

    // Name
    lead.name = txt([
      'h1.DUwDvf','h1[class*="DUwDvf"]',
      '[data-attrid="title"] span',
      'div[class*="fontHeadlineLarge"]'
    ]);

    // Category
    lead.category = txt([
      'button.DkEaL','span.DkEaL',
      '[jsaction*="category"]',
      '.fontBodyMedium button:first-child'
    ]);

    // Rating
    const rEl = qs([
      'div.F7nice span[aria-hidden="true"]',
      'span[aria-label*="star"]',
      'div[class*="F7nice"] > span',
      'span.ceNzKf'
    ]);
    if (rEl) {
      const m = (rEl.getAttribute('aria-label')||rEl.textContent).match(/[\d.]+/);
      if (m) lead.rating = m[0];
    }

    // Review count
    const rvEl = qs([
      'button[aria-label*="review"]',
      'span[aria-label*="review"]',
      'button[jsaction*="review"] span'
    ]);
    if (rvEl) {
      const m = (rvEl.getAttribute('aria-label')||rvEl.textContent).match(/[\d,]+/);
      if (m) lead.reviewCount = m[0].replace(/,/g,'');
    }

    // Address
    if (S.scrapeAddress !== false) {
      const aEl = qs([
        'button[data-item-id="address"]',
        '[aria-label^="Address:"]',
        '[data-tooltip="Copy address"]'
      ]);
      if (aEl) lead.address = (aEl.getAttribute('aria-label')||'').replace(/^Address:\s*/i,'') ||
                               aEl.querySelector('.Io6YTe')?.textContent || '';
    }

    // Phone
    const pEl = qs([
      'button[data-item-id*="phone"]',
      'a[href^="tel:"]',
      '[aria-label^="Phone:"]',
      '[data-tooltip="Copy phone number"]'
    ]);
    if (pEl) {
      lead.phone = (pEl.getAttribute('aria-label')||'').replace(/^Phone:\s*/i,'') ||
                   (pEl.href||'').replace('tel:','') ||
                   pEl.querySelector('.Io6YTe')?.textContent || '';
      lead.phone = lead.phone.trim();
    }

    // Website
    const wEl = qs([
      'a[data-item-id="authority"]',
      '[aria-label*="website" i]:not([aria-label*="Google"])',
      '[data-tooltip="Open website"]',
      'a[href]:not([href*="google.com"])[aria-label]'
    ]);
    if (wEl) {
      let href = wEl.href || '';
      if (href.includes('google.com/url')) {
        try { href = new URL(href).searchParams.get('q') || href; } catch (e) {}
      }
      lead.website = href;
    }

    // Reviews
    if (S.scrapeReviews) {
      lead.reviews = [...document.querySelectorAll('.wiI7pd,[class*="wiI7pd"]')]
        .slice(0, 3)
        .map(el => ({ text: el.textContent.trim().slice(0, 200) }))
        .filter(r => r.text);
    }

    // Hours
    if (S.scrapeHours) {
      const hEl = qs([
        '[data-item-id*="oh"] .Io6YTe',
        '[aria-label*="hours" i] span',
        '.t39EBf .Io6YTe'
      ]);
      if (hEl) lead.hours = hEl.textContent.trim();
    }

    if (!lead.name) lead.name = 'Unknown Business';
    return lead;
  }

  // ─── EXTRACT CARD FALLBACK ────────────────────────────────────────────────
  function extractCard(el) {
    const nEl = el.querySelector?.('.qBF1Pd,.fontHeadlineSmall,a[aria-label],[role="heading"]');
    const rEl = el.querySelector?.('.MW4etd');
    const vEl = el.querySelector?.('.UY7F9');
    return {
      name: nEl?.getAttribute('aria-label') || nEl?.textContent?.trim() || '',
      category:'', rating: rEl?.textContent?.trim() || '',
      reviewCount: vEl?.textContent?.replace(/[()]/g,'')?.trim() || '',
      address:'', phone:'', website:'',
      emails:[], social:{}, reviews:[],
      scrapedAt: new Date().toISOString()
    };
  }

  // ─── WEBSITE ENRICHMENT ───────────────────────────────────────────────────
  function fetchSite(url) {
    return new Promise(resolve => {
      chrome.runtime.sendMessage({ type: 'FETCH_WEBSITE', url }, res => {
        resolve(chrome.runtime.lastError || !res ? { emails:[], social:{} } : res);
      });
    });
  }

  // ─── DEDUP KEY ────────────────────────────────────────────────────────────
  function dedupeKey(lead) {
    return (lead.name + '|' + (lead.address || lead.phone || '')).toLowerCase().replace(/\s+/g,' ').trim();
  }

  // ─── HELPERS ─────────────────────────────────────────────────────────────
  function qs(selectors) {
    for (const s of selectors) {
      try { const e = document.querySelector(s); if (e) return e; } catch (e) {}
    }
    return null;
  }
  function txt(selectors) {
    for (const s of selectors) {
      try {
        const e = document.querySelector(s);
        if (e) return (e.getAttribute('aria-label') || e.textContent || '').trim();
      } catch (e) {}
    }
    return '';
  }
  async function waitFor(selectors, ms) {
    const deadline = Date.now() + ms;
    while (Date.now() < deadline) {
      for (const s of selectors) {
        try { const e = document.querySelector(s); if (e) return e; } catch (e) {}
      }
      await sleep(200);
    }
    return null;
  }
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  function notify(msg) { try { chrome.runtime.sendMessage(msg); } catch (e) {} }
})();
