// popup.js — MapLeads Pro v2

'use strict';

let allLeads   = [];
let currentTab = null;
let isDark     = false;
let selectedNiche = '';

// ─── BOOT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  await loadStorage();
  await checkCurrentTab();
  populateCountries();
  buildNicheDropdown();
  bindUI();
  bindSyncUI();
  loadSyncSettings();
  renderTable();
  updateStats();
  updateLeadsTabBadge();
});

async function loadStorage() {
  const data = await chrome.storage.local.get(['leads','theme','syncStats']);
  allLeads = data.leads || [];
  isDark   = data.theme === 'dark';
  syncStats = data.syncStats || { total: 0, ok: 0, fail: 0 };
  applyTheme();
}

let syncStats = { total: 0, ok: 0, fail: 0 };

// ─── THEME ───────────────────────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('iconSun').style.display  = isDark ? 'block' : 'none';
  document.getElementById('iconMoon').style.display = isDark ? 'none'  : 'block';
}

// ─── TAB CHECK ───────────────────────────────────────────────────────────────
async function checkCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  currentTab = tab;
  const onMaps = tab?.url?.includes('google.com/maps');
  document.getElementById('mainContent').style.display = onMaps ? 'block' : 'none';
  document.getElementById('notOnMaps').style.display   = onMaps ? 'none'  : 'block';
}

// ─── COUNTRY / STATE / CITY DROPDOWNS ───────────────────────────────────────
function populateCountries() {
  const sel = document.getElementById('selCountry');
  WORLD_DATA.forEach(c => {
    const o = document.createElement('option');
    o.value = c.code; o.textContent = c.name;
    sel.appendChild(o);
  });
}

function onCountryChange() {
  const code     = document.getElementById('selCountry').value;
  const stateEl  = document.getElementById('selState');
  const cityEl   = document.getElementById('selCity');

  stateEl.innerHTML = '<option value="">Select State</option>';
  cityEl.innerHTML  = '<option value="">Select City</option>';
  stateEl.disabled  = true;
  cityEl.disabled   = true;

  if (!code) return;
  const country = WORLD_DATA.find(c => c.code === code);
  if (!country || !country.states.length) return;

  country.states.forEach(s => {
    const o = document.createElement('option');
    o.value = s.name; o.textContent = s.name;
    stateEl.appendChild(o);
  });
  stateEl.disabled = false;
}

function onStateChange() {
  const code     = document.getElementById('selCountry').value;
  const stateName= document.getElementById('selState').value;
  const cityEl   = document.getElementById('selCity');

  cityEl.innerHTML = '<option value="">Select City</option>';
  cityEl.disabled  = true;

  if (!stateName) return;
  const country = WORLD_DATA.find(c => c.code === code);
  if (!country) return;
  const state = country.states.find(s => s.name === stateName);
  if (!state || !state.cities.length) return;

  state.cities.forEach(city => {
    const o = document.createElement('option');
    o.value = city; o.textContent = city;
    cityEl.appendChild(o);
  });
  cityEl.disabled = false;
}

// ─── NICHE SEARCHABLE DROPDOWN ───────────────────────────────────────────────
function buildNicheDropdown(filter = '') {
  const dd    = document.getElementById('nicheDropdown');
  const query = filter.toLowerCase().trim();
  dd.innerHTML = '';

  let count = 0;
  let lastCat = '';
  const grouped = {};

  NICHE_LIST.forEach(n => {
    if (query && !n.name.toLowerCase().includes(query) && !n.category.toLowerCase().includes(query)) return;
    if (!grouped[n.category]) grouped[n.category] = [];
    grouped[n.category].push(n.name);
    count++;
  });

  if (count === 0) {
    const el = document.createElement('div');
    el.className = 'dd-empty'; el.textContent = 'No niches found for "' + filter + '"';
    dd.appendChild(el); return;
  }

  // Update badge
  document.getElementById('nicheCountBadge').textContent = count;

  for (const [cat, names] of Object.entries(grouped)) {
    const lbl = document.createElement('div');
    lbl.className = 'dd-group-label'; lbl.textContent = cat;
    dd.appendChild(lbl);
    names.forEach(name => {
      const item = document.createElement('div');
      item.className = 'dd-option';
      item.textContent = name;
      if (name === selectedNiche) item.classList.add('selected');
      item.addEventListener('mousedown', e => {
        e.preventDefault();
        selectNiche(name);
      });
      dd.appendChild(item);
    });
  }
}

function selectNiche(name) {
  selectedNiche = name;
  document.getElementById('nicheInput').value = name;
  document.getElementById('nicheDropdown').classList.remove('open');
  buildNicheDropdown(name);
}

// ─── OPEN IN GOOGLE MAPS ─────────────────────────────────────────────────────
function openInGoogleMaps() {
  const country = document.getElementById('selCountry');
  const state   = document.getElementById('selState');
  const city    = document.getElementById('selCity');
  const niche   = selectedNiche || document.getElementById('nicheInput').value.trim();
  const radius  = document.getElementById('selRadius').value;

  if (!country.value) {
    showAlert('alertSearch', 'error', 'Please select a Country first.');
    return;
  }
  if (!niche) {
    showAlert('alertSearch', 'error', 'Please enter or select a Search Query (niche).');
    return;
  }

  clearAlert('alertSearch');

  const countryName = country.options[country.selectedIndex]?.text || '';
  const stateName   = state.value || '';
  const cityName    = city.value  || '';

  // Build query string: "niche in city, state, country"
  const parts = [niche];
  if (cityName)    parts.push(cityName);
  if (stateName)   parts.push(stateName);
  if (countryName) parts.push(countryName);

  const query = parts.join(', ');
  const url   = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  chrome.tabs.create({ url });
}

// ─── SCRAPING ────────────────────────────────────────────────────────────────
async function startScraping() {
  if (!currentTab) return;

  const settings = getSettings();
  setStatus('running', 'Starting scrape…');
  document.getElementById('btnStart').disabled = true;
  document.getElementById('btnStop').disabled  = false;
  document.getElementById('progressWrap').style.display = 'block';
  clearAlert('alertScrape');

  try {
    await chrome.tabs.sendMessage(currentTab.id, { type: 'START_SCRAPING', settings });
  } catch (e) {
    await chrome.scripting.executeScript({ target: { tabId: currentTab.id }, files: ['content.js'] });
    setTimeout(() => chrome.tabs.sendMessage(currentTab.id, { type: 'START_SCRAPING', settings }), 800);
  }
}

async function stopScraping() {
  if (currentTab) {
    try { await chrome.tabs.sendMessage(currentTab.id, { type: 'STOP_SCRAPING' }); } catch (e) {}
  }
  setStatus('', 'Stopped by user.');
  document.getElementById('btnStart').disabled = false;
  document.getElementById('btnStop').disabled  = true;
}

// ─── MESSAGES FROM CONTENT SCRIPT ────────────────────────────────────────────
chrome.runtime.onMessage.addListener(msg => {
  switch (msg.type) {
    case 'STATUS':
      setStatus('running', msg.message); break;
    case 'PROGRESS':
      updateProgress(msg.current, msg.total, msg.label); break;
    case 'LEAD':
      addLead(msg.lead); break;
    case 'COMPLETE':
      setStatus('done', `Done! Scraped ${msg.total} leads.`);
      document.getElementById('btnStart').disabled = false;
      document.getElementById('btnStop').disabled  = true;
      document.getElementById('progressWrap').style.display = 'none';
      showAlert('alertScrape', 'ok', `Successfully scraped ${msg.total} leads!`);
      renderTable(); break;
    case 'ERROR':
      setStatus('error', msg.message);
      document.getElementById('btnStart').disabled = false;
      document.getElementById('btnStop').disabled  = true;
      document.getElementById('progressWrap').style.display = 'none';
      showAlert('alertScrape', 'error', msg.message); break;
  }
});

// ─── LEADS ────────────────────────────────────────────────────────────────────
function addLead(lead) {
  // Dedup check (by name + address or name + phone)
  const settings = getSettings();
  if (settings.dedup) {
    const key = (lead.name + '|' + (lead.address || lead.phone || '')).toLowerCase().trim();
    const exists = allLeads.some(l =>
      (l.name + '|' + (l.address || l.phone || '')).toLowerCase().trim() === key
    );
    if (exists) return;
  }
  allLeads.push(lead);
  chrome.storage.local.set({ leads: allLeads });
  updateStats();
  updateLeadsTabBadge();
  addToFeed(lead);
}

function addToFeed(lead) {
  const feed = document.getElementById('feedContent');
  feed.querySelector('.feed-empty')?.remove();

  const item = document.createElement('div');
  item.className = 'feed-item';

  const pills = [];
  if (lead.phone) pills.push(`<span class="pill pill-phone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.4h3a2 2 0 0 1 2 1.72c.13 1 .37 1.96.72 2.9a2 2 0 0 1-.45 2.11L7.91 9.1a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.94.35 1.9.59 2.9.72A2 2 0 0 1 21.73 17z"/></svg>${esc(lead.phone)}</span>`);
  if (lead.emails?.length) pills.push(`<span class="pill pill-email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>${esc(lead.emails[0])}</span>`);
  if (lead.website) pills.push(`<span class="pill pill-web"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Web</span>`);
  if (lead.social && Object.keys(lead.social).length) pills.push(`<span class="pill pill-social"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>${Object.keys(lead.social).join(', ')}</span>`);

  item.innerHTML = `
    <div class="fi-name">${esc(lead.name)}</div>
    <div class="fi-meta">${esc(lead.category||'')}${lead.rating ? ' · ⭐ ' + lead.rating : ''}${lead.reviewCount ? ' (' + lead.reviewCount + ')' : ''}</div>
    ${pills.length ? `<div class="fi-pills">${pills.join('')}</div>` : ''}`;

  feed.appendChild(item);
  feed.scrollTop = feed.scrollHeight;
}

function updateStats() {
  document.getElementById('sTotal').textContent = allLeads.length;
  document.getElementById('sEmail').textContent = allLeads.filter(l => l.emails?.length).length;
  document.getElementById('sPhone').textContent = allLeads.filter(l => l.phone).length;
}

function updateLeadsTabBadge() {
  const badge = document.getElementById('leadsCount');
  if (allLeads.length > 0) {
    badge.textContent = allLeads.length;
    badge.style.display = 'inline';
  } else {
    badge.style.display = 'none';
  }
}

async function clearLeads() {
  if (!confirm(`Clear all ${allLeads.length} leads? This cannot be undone.`)) return;
  allLeads = [];
  await chrome.storage.local.set({ leads: [] });
  updateStats();
  updateLeadsTabBadge();
  renderTable();
  document.getElementById('feedContent').innerHTML = '<div class="feed-empty">No leads yet — start scraping to see live results.</div>';
  setStatus('', 'Leads cleared.');
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
function renderTable() {
  const q = document.getElementById('searchLeads').value.toLowerCase();
  const filtered = allLeads.filter(l =>
    !q || [l.name,l.category,l.address,l.phone].some(v => v?.toLowerCase().includes(q))
  );

  const tbody = document.getElementById('tableBody');
  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="7" class="no-data">${allLeads.length ? 'No results for "'+q+'"' : 'No leads scraped yet'}</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((l, i) => `
    <tr>
      <td>${i+1}</td>
      <td title="${esc(l.name)}">${esc(l.name)}</td>
      <td title="${esc(l.category||'')}">${esc(l.category||'—')}</td>
      <td>${l.rating ? '⭐ '+l.rating : '—'}</td>
      <td title="${esc(l.phone||'')}">${esc(l.phone||'—')}</td>
      <td title="${l.emails?.join(', ')||''}">${l.emails?.length ? l.emails[0] : '—'}</td>
      <td>${l.social && Object.keys(l.social).length ? Object.keys(l.social).map(k=>socialIcon(k)).join(' ') : '—'}</td>
    </tr>`).join('');
}

function socialIcon(p) {
  const m = {facebook:'FB',instagram:'IG',twitter:'𝕏',linkedin:'LI',tiktok:'TT',youtube:'YT',pinterest:'PT',whatsapp:'WA'};
  return `<abbr title="${p}" style="text-decoration:none;opacity:.7;font-size:10px;font-weight:700">${m[p]||p}</abbr>`;
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
function exportCSV() {
  if (!allLeads.length) return alert('No leads to export.');
  const headers = ['Name','Category','Rating','Reviews','Address','Phone','Website','Email(s)','Facebook','Instagram','Twitter','LinkedIn','TikTok','YouTube','WhatsApp','Latest Review','Hours','Scraped At'];
  const rows = allLeads.map(l => [
    l.name||'', l.category||'', l.rating||'', l.reviewCount||'', l.address||'', l.phone||'',
    l.website||'', (l.emails||[]).join('; '),
    l.social?.facebook||'', l.social?.instagram||'', l.social?.twitter||'',
    l.social?.linkedin||'', l.social?.tiktok||'', l.social?.youtube||'', l.social?.whatsapp||'',
    l.reviews?.[0]?.text?.replace(/"/g,"'") || '', l.hours||'', l.scrapedAt||''
  ].map(v => `"${String(v).replace(/"/g,'""')}"`));

  const csv = [headers.map(h=>`"${h}"`).join(','), ...rows.map(r=>r.join(','))].join('\n');
  dlFile(csv, `mapleads_${stamp()}.csv`, 'text/csv');
}

function exportJSON() {
  if (!allLeads.length) return alert('No leads to export.');
  dlFile(JSON.stringify(allLeads, null, 2), `mapleads_${stamp()}.json`, 'application/json');
}

function dlFile(content, name, type) {
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([content],{type})), download: name
  });
  a.click(); URL.revokeObjectURL(a.href);
}

// ─── UI HELPERS ───────────────────────────────────────────────────────────────
function bindUI() {
  // Tabs
  document.querySelectorAll('.tab').forEach(tab =>
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab,.tab-panel').forEach(el => el.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-'+tab.dataset.tab).classList.add('active');
    })
  );

  // Theme toggle
  document.getElementById('btnTheme').addEventListener('click', () => {
    isDark = !isDark;
    applyTheme();
    chrome.storage.local.set({ theme: isDark ? 'dark' : 'light' });
  });

  // Country / State
  document.getElementById('selCountry').addEventListener('change', onCountryChange);
  document.getElementById('selState').addEventListener('change', onStateChange);

  // Niche dropdown
  const nicheInput = document.getElementById('nicheInput');
  const nicheDd    = document.getElementById('nicheDropdown');

  nicheInput.addEventListener('focus', () => {
    buildNicheDropdown(nicheInput.value);
    nicheDd.classList.add('open');
  });
  nicheInput.addEventListener('input', () => {
    selectedNiche = '';
    buildNicheDropdown(nicheInput.value);
    nicheDd.classList.add('open');
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown-wrap')) nicheDd.classList.remove('open');
  });

  // Open in Maps
  document.getElementById('btnOpenMaps').addEventListener('click', openInGoogleMaps);

  // Scraper controls
  document.getElementById('btnStart').addEventListener('click', startScraping);
  document.getElementById('btnStop').addEventListener('click', stopScraping);

  // Export / clear
  document.getElementById('btnCsv').addEventListener('click', exportCSV);
  document.getElementById('btnJson').addEventListener('click', exportJSON);
  document.getElementById('btnClear').addEventListener('click', clearLeads);

  // Table search
  document.getElementById('searchLeads').addEventListener('input', renderTable);
}

function setStatus(state, msg) {
  const dot  = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  dot.className  = 'status-dot' + (state ? ' '+state : '');
  text.innerHTML = msg;
}

function updateProgress(cur, tot, label) {
  document.getElementById('progressLabel').textContent = label || 'Processing…';
  document.getElementById('progressCount').textContent = `${cur} / ${tot}`;
  document.getElementById('progressFill').style.width  = (tot > 0 ? Math.round(cur/tot*100) : 0) + '%';
}

function showAlert(id, type, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type} show`;
  const icons = {
    error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    ok:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    info:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="8"/><line x1="12" y1="12" x2="12" y2="16"/></svg>'
  };
  el.innerHTML = (icons[type]||'') + msg;
}

function clearAlert(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}

function getSettings() {
  return {
    scrapeEmails:  document.getElementById('opt-emails')?.checked ?? true,
    scrapeSocial:  document.getElementById('opt-social')?.checked ?? true,
    scrapeReviews: document.getElementById('opt-reviews')?.checked ?? true,
    scrapeHours:   document.getElementById('opt-hours')?.checked  ?? false,
    dedup:         document.getElementById('opt-dedup')?.checked  ?? true,
    maxLeads:      parseInt(document.getElementById('opt-max')?.value)    || 100,
    minRating:     parseFloat(document.getElementById('opt-rating')?.value) || 0,
    delay:         parseInt(document.getElementById('opt-delay')?.value)  || 1500
  };
}

function esc(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function stamp() {
  return new Date().toISOString().slice(0,10);
}

// ─── CRM SYNC ────────────────────────────────────────────────────────────────
const DEFAULT_CRM = 'https://oneexpandcrm.lovable.app/api/public/ingest-leads';

async function loadSyncSettings() {
  const d = await chrome.storage.local.get(['crmKey','crmUrl','sheetUrl','autoSync','mirrorSheet']);
  document.getElementById('crmKey').value     = d.crmKey || '';
  document.getElementById('crmUrl').value     = d.crmUrl || DEFAULT_CRM;
  document.getElementById('sheetUrl').value   = d.sheetUrl || '';
  document.getElementById('autoSync').checked = !!d.autoSync;
  document.getElementById('mirrorSheet').checked = !!d.mirrorSheet;
  renderSyncStats();
}

function renderSyncStats() {
  document.getElementById('syncTotal').textContent = syncStats.total;
  document.getElementById('syncOk').textContent    = syncStats.ok;
  document.getElementById('syncFail').textContent  = syncStats.fail;
}

async function saveSyncSettings() {
  await chrome.storage.local.set({
    crmKey:      document.getElementById('crmKey').value.trim(),
    crmUrl:      document.getElementById('crmUrl').value.trim() || DEFAULT_CRM,
    sheetUrl:    document.getElementById('sheetUrl').value.trim(),
    autoSync:    document.getElementById('autoSync').checked,
    mirrorSheet: document.getElementById('mirrorSheet').checked
  });
  showAlert('alertSync','ok','Settings saved.');
  setTimeout(()=>clearAlert('alertSync'), 2000);
}

function leadToPayload(l) {
  return {
    name: l.name, phone: l.phone || null,
    emails: l.emails || [], website: l.website || null,
    social: l.social || {}, address: l.address || null,
    rating: l.rating ? parseFloat(l.rating) : null,
    reviews_count: l.reviewCount ? parseInt(String(l.reviewCount).replace(/[^\d]/g,'')) : null,
    category: l.category || null, source: 'extension',
    external_id: ((l.name||'')+'|'+(l.address||l.phone||'')).toLowerCase().trim()
  };
}

async function pushToCrm(leads) {
  const d = await chrome.storage.local.get(['crmKey','crmUrl','sheetUrl','mirrorSheet']);
  const key = d.crmKey?.trim();
  const url = (d.crmUrl?.trim()) || DEFAULT_CRM;
  if (!key) { showAlert('alertSync','error','Add your CRM API key first.'); return { ok:0, fail:leads.length }; }
  if (!leads.length) return { ok:0, fail:0 };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 'x-api-key': key },
      body: JSON.stringify({
        leads: leads.map(leadToPayload),
        sheet_webhook_url: d.mirrorSheet ? (d.sheetUrl || null) : null
      })
    });
    const j = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(j.error || ('HTTP '+res.status));
    const ok = j.count ?? leads.length;
    syncStats.total += leads.length;
    syncStats.ok    += ok;
    syncStats.fail  += (leads.length - ok);
    await chrome.storage.local.set({ syncStats });
    renderSyncStats();
    return { ok, fail: leads.length - ok };
  } catch (e) {
    syncStats.total += leads.length;
    syncStats.fail  += leads.length;
    await chrome.storage.local.set({ syncStats });
    renderSyncStats();
    showAlert('alertSync','error','Sync failed: '+e.message);
    return { ok:0, fail:leads.length };
  }
}

async function pushAllToCrm() {
  if (!allLeads.length) { showAlert('alertSync','error','No leads to push.'); return; }
  showAlert('alertSync','info',`Pushing ${allLeads.length} leads…`);
  const r = await pushToCrm(allLeads);
  if (r.ok) showAlert('alertSync','ok',`Pushed ${r.ok}/${allLeads.length} to CRM.`);
}

function bindSyncUI() {
  document.getElementById('btnSaveSync').addEventListener('click', saveSyncSettings);
  document.getElementById('btnSyncCrm').addEventListener('click', pushAllToCrm);
}

// Hook auto-sync into addLead
const _origAddLead = addLead;
addLead = async function(lead) {
  const before = allLeads.length;
  _origAddLead(lead);
  if (allLeads.length === before) return; // dedup'd
  const d = await chrome.storage.local.get(['autoSync']);
  if (d.autoSync) pushToCrm([lead]);
};
