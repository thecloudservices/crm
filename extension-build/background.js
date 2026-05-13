// background.js — MapLeads Pro v2

const SKIP_DOMAINS = new Set([
  'sentry.io','wixpress.com','example.com','yourdomain.com','domain.com',
  'email.com','test.com','shopify.com','wordpress.com','squarespace.com',
  'wix.com','amazonaws.com','cloudflare.com','googletagmanager.com',
  'facebook.com','twitter.com','instagram.com','google.com','apple.com',
  'microsoft.com','adobe.com','jquery.com','bootstrap.com'
]);

const SOCIAL = {
  facebook:  /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?!sharer|share|dialog|plugins|tr\b)([A-Za-z0-9._\-\/]+)/gi,
  instagram: /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([A-Za-z0-9._]+)/gi,
  twitter:   /(?:https?:\/\/)?(?:www\.)?(?:twitter|x)\.com\/(?!intent|share|home|i\/web)([A-Za-z0-9_]+)/gi,
  linkedin:  /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:company|in|pub)\/([A-Za-z0-9._\-]+)/gi,
  tiktok:    /(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@([A-Za-z0-9._]+)/gi,
  youtube:   /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:channel|user|c|@)([A-Za-z0-9._\-]+)/gi,
  pinterest: /(?:https?:\/\/)?(?:www\.)?pinterest\.com\/([A-Za-z0-9._]+)/gi,
  whatsapp:  /(?:https?:\/\/)?(?:wa\.me|api\.whatsapp\.com\/send\?phone=)([0-9+]+)/gi
};

const SKIP_HANDLES = new Set([
  'sharer','share','dialog','home','profile','pages','intent','login','signup',
  'help','about','legal','privacy','terms','support','contact','ads','business',
  'undefined','null','true','false','page','user','web','www','http','https',
  'feed','reel','story','reels','explore','discover','search','hashtag','tag'
]);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'FETCH_WEBSITE') {
    scrapeWebsite(msg.url)
      .then(result => sendResponse(result))
      .catch(() => sendResponse({ emails: [], social: {} }));
    return true;
  }
});

async function scrapeWebsite(rawUrl) {
  let url = rawUrl.trim();
  if (!url.startsWith('http')) url = 'https://' + url;

  const { emails: e1, social: s1 } = await fetchPage(url);
  let emails = e1, social = s1;

  // Try /contact page if no emails found
  if (!emails.length) {
    try {
      const contactUrl = new URL('/contact', url).href;
      const { emails: e2, social: s2 } = await fetchPage(contactUrl);
      emails = e2;
      Object.assign(social, s2);
    } catch (_) {}
  }

  // Try /contact-us
  if (!emails.length) {
    try {
      const { emails: e3 } = await fetchPage(new URL('/contact-us', url).href);
      emails = e3;
    } catch (_) {}
  }

  return {
    emails: [...new Set(emails)].slice(0, 5),
    social
  };
}

async function fetchPage(url) {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)', 'Accept': 'text/html' },
    signal: AbortSignal.timeout(8000)
  });
  if (!res.ok) return { emails: [], social: {} };
  const html = await res.text();
  return { emails: extractEmails(html), social: extractSocial(html) };
}

function extractEmails(html) {
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  const found = new Set();

  // Priority: mailto: links
  const mlRe = /mailto:([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,7})/gi;
  let m;
  while ((m = mlRe.exec(clean)) !== null) found.add(m[1].toLowerCase());

  // General email regex
  const eRe = /\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,7}\b/g;
  while ((m = eRe.exec(clean)) !== null) found.add(m[0].toLowerCase());

  return [...found].filter(email => {
    const domain = email.split('@')[1];
    if (!domain || SKIP_DOMAINS.has(domain)) return false;
    if (email.includes('..') || email.split('@')[0].length < 2) return false;
    if (/\.(png|jpg|gif|svg|js|css|woff|ttf)$/i.test(domain)) return false;
    return true;
  });
}

function extractSocial(html) {
  const decoded = html
    .replace(/\\u0026/g,'&').replace(/\\u003d/g,'=')
    .replace(/%2F/gi,'/').replace(/&amp;/g,'&');

  const social = {};
  for (const [platform, re] of Object.entries(SOCIAL)) {
    re.lastIndex = 0;
    const m = re.exec(decoded);
    if (!m) continue;
    const handle = m[1]?.split(/[?#]/)[0]?.replace(/\/+$/,'');
    if (!handle || handle.length < 2 || SKIP_HANDLES.has(handle.toLowerCase())) continue;
    switch (platform) {
      case 'facebook':  social.facebook  = `https://facebook.com/${handle}`; break;
      case 'instagram': social.instagram = `https://instagram.com/${handle}`; break;
      case 'twitter':   social.twitter   = `https://x.com/${handle}`; break;
      case 'linkedin':  social.linkedin  = `https://linkedin.com/company/${handle}`; break;
      case 'tiktok':    social.tiktok    = `https://tiktok.com/@${handle}`; break;
      case 'youtube':   social.youtube   = `https://youtube.com/${handle}`; break;
      case 'pinterest': social.pinterest = `https://pinterest.com/${handle}`; break;
      case 'whatsapp':  social.whatsapp  = `https://wa.me/${handle}`; break;
    }
  }
  return social;
}
