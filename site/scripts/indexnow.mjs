/**
 * Tells Bing (and through it ChatGPT's live search) that the site changed.
 *
 * Run after a deploy, not before: IndexNow fetches the key file from the live
 * site to prove ownership, and it re-crawls what it is told about straight
 * away, so submitting ahead of the upload gets the old page indexed.
 *
 *   node scripts/indexnow.mjs
 *
 * URLs come from the live sitemap rather than a list here, so a page added to
 * `app/sitemap.ts` is submitted without anyone remembering to add it twice.
 */
const HOST = 'walkito.site';
const KEY = 'b12b80b67ebf6ee0111493fef69eb7de'; // must match INDEXNOW_KEY in lib/site.ts

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
if (urlList.length === 0) throw new Error('indexnow: no URLs in the live sitemap');

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
console.log(`indexnow: ${res.status} for ${urlList.length} URLs`);
if (!res.ok) process.exit(1);
