#!/usr/bin/env node
/**
 * Build, upload, and tell the search engines — in that order, every time.
 *
 * IndexNow used to be a separate step somebody had to remember, so it was
 * mostly not run. It is the step that gets a changed page re-crawled by Bing
 * (and through Bing, ChatGPT's search) and by Yandex in hours instead of weeks,
 * so it is part of the deploy rather than a note in the README.
 *
 * It runs last on purpose: IndexNow fetches the key file and the sitemap from
 * the live host, so the upload has to have landed first, and Cloudflare's copy
 * of the site has to have been emptied (see purgeCloudflare below).
 *
 *   bun run deploy
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
// From a laptop: root, as it always was. From GitHub Actions (`.github/
// workflows/deploy-site.yml`): the `deploy` user, whose key can only rsync
// into /var/www/walkito (rrsync), set through DEPLOY_TARGET and DEPLOY_SSH.
const TARGET = process.env.DEPLOY_TARGET || 'root@161.35.52.54:/var/www/walkito/';
const SSH = process.env.DEPLOY_SSH;

const run = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit' });

run('bun', ['run', 'build']);
// file.br and file.gz beside every text file, served as they are by nginx
// (brotli_static / gzip_static): compressed once here, at the strongest
// levels, rather than on every request.
run('node', ['scripts/precompress.mjs']);

// Which English pages changed, by their sitemap lastmod: read the live
// sitemaps now, before the upload replaces them. A page is "changed" when it
// is new or its date moved. Works with the old single sitemap and the new
// index alike. If the live sitemaps cannot be read, nothing is pinged.
const lastmods = (xmlByFile) => {
  const map = new Map();
  for (const xml of xmlByFile) {
    for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
      const mod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
      // The video sitemap lists exercise pages without a date: never let a
      // missing date overwrite the page's real one.
      if (loc && (mod || !map.has(loc))) map.set(loc, mod ?? '');
    }
  }
  return map;
};
const childLocs = (xml) => (xml.includes('<sitemapindex') ? [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, u]) => u) : null);
async function liveSitemaps() {
  const get = (u) => fetch(u).then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${u}: ${r.status}`))));
  const root = await get('https://walkito.site/sitemap.xml');
  const kids = childLocs(root);
  return kids ? Promise.all(kids.map(get)) : [root];
}
function localSitemaps() {
  const root = readFileSync(join(ROOT, 'out', 'sitemap.xml'), 'utf8');
  const kids = childLocs(root);
  return kids ? kids.map((u) => readFileSync(join(ROOT, 'out', new URL(u).pathname), 'utf8')) : [root];
}
const CHANGED = join(ROOT, '.indexnow-urls.json');
let changedEnglish = null;
try {
  const before = lastmods(await liveSitemaps());
  const after = lastmods(localSitemaps());
  changedEnglish = [...after]
    .filter(([url, mod]) => !/^https:\/\/walkito\.site\/(es|ru|pt|fr|it|de)\//.test(url) && before.get(url) !== mod)
    .map(([url]) => url)
    .filter((url) => !url.endsWith('.xml'));
  writeFileSync(CHANGED, JSON.stringify(changedEnglish));
  console.log(`deploy: ${changedEnglish.length} English page(s) new or changed by date`);
} catch (e) {
  console.log(`deploy: could not compare sitemaps (${e.message}); IndexNow skipped`);
}
// `--delete` keeps the server an exact copy of `out/`. Anything that must
// survive — the Search Console, Bing and Yandex verification files — lives in
// `public/` for exactly this reason.
// Compare by content (--checksum) and do not copy timestamps (no -t, so not
// -a): every build re-creates every file "now", and copying that date made
// the server stamp unchanged images and videos as new on each deploy, which
// changed their Last-Modified/ETag and sent returning visitors to download
// them again. Now an unchanged file is skipped and keeps its date; a changed
// file gets the upload time. -rlp = recursive, symlinks, permissions.
run('rsync', ['-rlpz', '--checksum', '--delete', ...(SSH ? ['-e', SSH] : []), 'out/', TARGET]);
// A root upload leaves the files owned by whoever built them; hand them back
// to `deploy`, or the next upload from GitHub Actions cannot replace them.
if (TARGET.startsWith('root@')) {
  run('ssh', [TARGET.split(':')[0], 'chown -R deploy:deploy /var/www/walkito']);
}
await purgeCloudflare();
if (changedEnglish && existsSync(CHANGED)) run('node', ['scripts/indexnow.mjs', CHANGED]);

/**
 * Empties Cloudflare's cache of the site, so a deploy shows at once.
 *
 * walkito.site is behind Cloudflare (since 2026-10-13), which keeps pages for
 * 10 minutes and unhashed images for an hour (the origin's
 * Cloudflare-CDN-Cache-Control headers). Without this a deploy still shows,
 * only within those times; so a missing token or a failed purge is reported
 * and never fails the deploy.
 *
 * Needs CLOUDFLARE_API_TOKEN: a token with only Zone > Cache Purge > Purge on
 * walkito.site (the GitHub secret of that name, or the environment on a
 * laptop). Purge everything rather than a list of changed files: the site is
 * small, and the edges refill it on the next visits.
 */
async function purgeCloudflare() {
  const ZONE = process.env.CLOUDFLARE_ZONE_ID || 'a1069e77fad2cf52f5bd746a9c6dd79d';
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    console.log('deploy: no CLOUDFLARE_API_TOKEN, Cloudflare cache not purged (pages refresh within 10 minutes)');
    return;
  }
  try {
    const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE}/purge_cache`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ purge_everything: true }),
    });
    const body = await res.json().catch(() => ({}));
    if (res.ok && body.success) console.log('deploy: Cloudflare cache purged');
    else console.log(`deploy: Cloudflare purge failed (${res.status}): ${JSON.stringify(body.errors ?? body)}`);
  } catch (e) {
    console.log(`deploy: Cloudflare purge failed: ${e.message}`);
  }
}
