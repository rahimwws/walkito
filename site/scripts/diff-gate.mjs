/**
 * Diff gate: before a rewrite goes live, list everything a page LOST.
 *
 * An edit that improves a page can quietly drop the one thing it existed for:
 * a table, a video, a tool, the app buttons, an internal link. (An SEO team
 * we read about lost its rankings that way: an AI rewrite removed the ranking
 * tables with no error.) This compares two builds page by page and reports,
 * for every page whose content changed, what the new version no longer has.
 * New things are not reported: only losses. Show the report to Rahman before
 * shipping; a loss can be intended, but it should never be a surprise.
 *
 *   node scripts/diff-gate.mjs <old out/> <new out/> [path-filter]
 *
 * <old out/> is a build of what is live (e.g. origin/main in another worktree),
 * <new out/> this branch's build. Exit code 1 when anything was lost, so it can
 * gate a deploy; 0 when every changed page kept everything.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const [OLD, NEW, filter] = process.argv.slice(2);
if (!OLD || !NEW || !existsSync(OLD) || !existsSync(NEW)) {
  console.error('usage: node scripts/diff-gate.mjs <old out/> <new out/> [path-filter]');
  process.exit(2);
}

const pages = (base, dir = base, list = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== '_next') pages(base, p, list);
    } else if (name === 'index.html') list.push(p.slice(base.length).replace(/\/?index\.html$/, '/') || '/');
  }
  return list;
};

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;|\u00A0/g, ' ');
const strip = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

/** What a page contains, as countable sets. Body only (no head, scripts). */
function inventory(html) {
  const body = (html.match(/<body[\s\S]*<\/body>/) || [html])[0].replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const all = (re, f = (m) => m[1]) => [...body.matchAll(re)].map(f);
  const hrefs = all(/<a\b[^>]*href="([^"#][^"]*)"/g).map(decode);
  const text = strip(body);
  const schemaTypes = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(([, j]) => {
    try { const o = JSON.parse(j); return [String(o['@type'])]; } catch { return ['(unparseable)']; }
  });
  return {
    tables: all(/<table\b/g, () => 'table'),
    lists: all(/<(ul|ol)\b/g, (m) => m[1]),
    'list items': all(/<li\b[^>]*>([\s\S]*?)<\/li>/g, (m) => strip(m[1]).slice(0, 80)),
    videos: all(/<video\b[^>]*?(?:src="([^"]*)")?[^>]*>/g, (m) => m[1] || 'video'),
    images: all(/<img\b[^>]*src="([^"]*)"/g),
    headings: all(/<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/g, (m) => `h${m[1]}: ${strip(m[2])}`),
    // The number badge ("1", "2") is not part of the question: adding a
    // question renumbers the rest without losing any.
    'FAQ questions': all(/<summary\b[^>]*>([\s\S]*?)<\/summary>/g, (m) => strip(m[1]).replace(/^\d+\s+/, '')),
    'internal links': hrefs.filter((h) => h.startsWith('/') || h.includes('walkito.site')),
    'external links (sources)': hrefs.filter((h) => /^https?:/.test(h) && !h.includes('walkito.site') && !/apps\.apple\.com|play\.google\.com/.test(h)),
    'app buttons': hrefs.filter((h) => /apps\.apple\.com|play\.google\.com|\/get\//.test(h)).map((h) => h.replace(/[?&](ct|campaign|referrer|pt|mt)=[^&]*/g, '')),
    forms: all(/<form\b/g, () => 'form'),
    numbers: text.match(/\d+(?:[.,]\d+)?\s?%?/g) || [],
    'structured data': schemaTypes,
  };
}

/** Items in a that b has fewer of (a multiset difference). */
function lost(a, b) {
  const left = new Map();
  for (const x of b) left.set(x, (left.get(x) || 0) + 1);
  const out = [];
  for (const x of a) {
    const n = left.get(x) || 0;
    if (n > 0) left.set(x, n - 1);
    else out.push(x);
  }
  return out;
}

const oldPages = new Set(pages(OLD));
const newPages = new Set(pages(NEW));
const file = (base, p) => join(base, p === '/' ? 'index.html' : `${p}index.html`);
let changed = 0;
let withLosses = 0;
const report = [];

for (const p of [...oldPages].sort()) {
  if (filter && !p.includes(filter)) continue;
  if (!newPages.has(p)) {
    report.push(`\n${p}\n  PAGE REMOVED`);
    withLosses++;
    continue;
  }
  const a = readFileSync(file(OLD, p), 'utf8');
  const b = readFileSync(file(NEW, p), 'utf8');
  if (a === b) continue;
  const ia = inventory(a);
  const ib = inventory(b);
  if (strip(a) === strip(b) && JSON.stringify(ia) === JSON.stringify(ib)) continue;
  changed++;
  const lines = [];
  for (const key of Object.keys(ia)) {
    const gone = lost(ia[key], ib[key]);
    if (gone.length) lines.push(`  - ${key}: ${gone.length} lost${gone.length <= 6 ? `: ${gone.map((g) => JSON.stringify(g)).join(', ')}` : ` (e.g. ${gone.slice(0, 4).map((g) => JSON.stringify(g)).join(', ')})`}`);
  }
  if (lines.length) {
    withLosses++;
    report.push(`\n${p}\n${lines.join('\n')}`);
  }
}

console.log(`diff-gate: ${changed} page(s) with changed content, ${withLosses} lost something.`);
if (report.length) console.log(report.join('\n'));
process.exit(withLosses ? 1 : 0);
