/**
 * Tells Bing (and through it ChatGPT's live search) which pages changed.
 *
 * Only English pages whose content really changed (decision with Rahman,
 * 2026-10-09). This used to send all 490 URLs of the live sitemap on every
 * deploy, about 4,500 pings in ten hours on a busy day, for a domain Bing had
 * not crawled at all yet: noise that reads as spam to a search engine deciding
 * whether to trust a new site.
 *
 * "Changed" comes from the sitemaps' lastmod, which carry each page's real
 * edit date (never the build time): `deploy.mjs` reads the live sitemaps
 * before the upload and the new ones in `out/`, and passes the English URLs
 * that are new or have a newer date. A change that does not touch a page's
 * date (code, layout) is left to Bing's normal crawl.
 *
 * Run after the upload: IndexNow fetches the key file from the live site to
 * prove ownership, and re-crawls straight away.
 *
 *   node scripts/indexnow.mjs <file.json>      URLs from a JSON array (deploy)
 *   node scripts/indexnow.mjs <url> [<url>...] by hand, e.g. after a fix
 */
import { readFileSync } from 'node:fs';

const HOST = 'walkito.site';
const KEY = 'b12b80b67ebf6ee0111493fef69eb7de'; // must match INDEXNOW_KEY in lib/site.ts
const MAX = 100; // a real edit day is a handful of pages; more means something is wrong

const args = process.argv.slice(2);
const urlList = args.length === 1 && args[0].endsWith('.json') ? JSON.parse(readFileSync(args[0], 'utf8')) : args;

const isEnglish = (url) => !/^https:\/\/walkito\.site\/(es|ru|pt|fr|it|de)\//.test(url);
const bad = urlList.filter((u) => !u.startsWith(`https://${HOST}/`) || !isEnglish(u));
if (bad.length) throw new Error(`indexnow: not English walkito.site URLs: ${bad.slice(0, 5).join(', ')}`);

if (urlList.length === 0) {
  console.log('indexnow: no English page changed, nothing sent');
  process.exit(0);
}
if (urlList.length > MAX) {
  console.log(`indexnow: ${urlList.length} URLs is more than ${MAX}; not sending. Check the sitemap dates, or send by hand.`);
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// 200 and 202 both mean accepted; anything else is worth reading.
console.log(`indexnow: ${res.status} for ${urlList.length} URLs: ${urlList.join(' ')}`);
if (!res.ok) process.exit(1);
