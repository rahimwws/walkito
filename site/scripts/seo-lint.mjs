/**
 * The search engine's view of the whole build, offline: reads every page in
 * out/ and fails on what would cost the site its indexing, before it merges.
 *
 *   node scripts/seo-lint.mjs [out/]
 *
 * Plain Node, no dependencies: the HTML is Next's own output, so a few
 * regular expressions read it reliably. Exit code 1 on any ERROR; warnings
 * are printed and never fail. Runs in .github/workflows/site-checks.yml after
 * the build.
 *
 * Errors:
 * - JSON-LD that does not parse, or lacks a property Google requires
 *   (the ERROR rules of scripts/schema-rules.mjs, shared with schema-check).
 * - An internal href (a, link, area) that does not resolve to a file in out/.
 * - A canonical or og:url that is not the page itself.
 * - robots that does not match the sitemaps: an indexable page in no sitemap,
 *   a noindex page in one, a sitemap URL with no page, a sitemap the index
 *   lists that is not in out/.
 * - A page with no h1 or more than one.
 * - The sitemap lastmod, the visible "Updated" date and dateModified
 *   disagreeing.
 * - An anatomy figure (/anatomy/...) that a page references and out/ lacks.
 * - reviewedBy or lastReviewed on anything but a WebPage.
 * - More than one full Organization on a page. "Full" is anything beyond a
 *   reference: a reference carries only @type, @id, name and url.
 * - A heading whose text runs together words its aria-label has apart
 *   ("Triedeverything?" for "Tried everything?"): search engines read the
 *   text, not the aria-label. Any h1-h6 whose aria-label has two words or
 *   more; the text may hold more than the label (a hidden section number).
 *
 * Warnings, on indexable pages: a title over 60 characters (TITLE_MAX in
 * lib/site.ts), a description over 160, an Article with fewer than 5 other
 * pages linking to it from their <main> (text and related cards), a first
 * heading that is not the h1. On every page: an internal href that only
 * works through the trailing-slash redirect, and any other file a page
 * references (src, srcset, poster, og:image, a JSON-LD URL) that out/ lacks.
 *
 * Pages marked noindex and nofollow (get/, open/, subscribed/, unsubscribe/:
 * redirects and email confirmations) skip the canonical, h1, date, title and
 * inbound checks; the 404 page gets the href check alone.
 *
 * Not run by scripts/deploy.mjs, on purpose: a deploy must never fail over a
 * date (lib/site.ts, PAGE_UPDATED). Only schema-check guards the deploy.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

import { arr, RULES } from './schema-rules.mjs';

const OUT = process.argv[2] || 'out';
const SITE = 'https://walkito.site';
const HOST = 'walkito.site';
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;
const MIN_INBOUND = 5;
// Served by nginx itself (the MCP server, the /p/ proxy) or added by
// Cloudflare, never files in out/.
const SERVER_PATHS = [/^\/mcp($|\/|-health)/, /^\/p\//, /^\/cdn-cgi\//];
// What a reference to an Organization may carry; anything more makes it a
// second full Organization beside the sitewide one (components/RootDocument.tsx).
const REFERENCE_KEYS = new Set(['@context', '@type', '@id', 'name', 'url']);

if (!existsSync(join(OUT, 'index.html'))) {
  console.error(`seo-lint: no ${join(OUT, 'index.html')}; build first (bun run build)`);
  process.exit(1);
}

/* ------------------------------------------------------------------------ *
 * Reading HTML
 * ------------------------------------------------------------------------ */

const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
    e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : (NAMED[e] ?? m),
  );

/** Attributes of one opening tag, names lowercased, values decoded. */
function attrs(source) {
  const out = {};
  for (const [, name, dq, sq, bare] of source.matchAll(/([^\s=/>"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>"']+)))?/g)) {
    out[name.toLowerCase()] = decode(dq ?? sq ?? bare ?? '');
  }
  return out;
}
const tags = (html, names) => [...html.matchAll(new RegExp(`<(${names})\\b([^>]*)>`, 'gi'))].map(([, tag, a]) => ({ tag: tag.toLowerCase(), ...attrs(a) }));
/** Text as a crawler reads it: tags dropped (not turned into spaces), entities decoded. */
const text = (html) => decode(html.replace(/<[^>]*>/g, ''));
// \s takes in the no-break spaces too: a crawler reads them as spaces.
const squash = (s) => s.replace(/\s+/g, ' ').trim();
const chars = (s) => [...s].length;

/** Script bodies, styles, templates and comments out; script tags themselves stay (their src counts). */
const clean = (html) =>
  html
    .replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<template\b[\s\S]*?<\/template>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

/* ------------------------------------------------------------------------ *
 * Resolving URLs against out/
 * ------------------------------------------------------------------------ */

const isFile = (p) => {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
};
const resolved = new Map();
/** 'ok', 'slash' (works only through the trailing-slash redirect), 'server' or 'missing'. */
function resolvePath(path) {
  if (resolved.has(path)) return resolved.get(path);
  let r;
  if (SERVER_PATHS.some((re) => re.test(path))) r = 'server';
  else if (path.endsWith('/')) r = isFile(join(OUT, path, 'index.html')) ? 'ok' : 'missing';
  else if (isFile(join(OUT, path))) r = 'ok';
  else r = isFile(join(OUT, path, 'index.html')) ? 'slash' : 'missing';
  resolved.set(path, r);
  return r;
}
/** The path of a URL on this site, or null for anything external, a fragment or a scheme like mailto:. */
function internalPath(raw, base) {
  const v = raw.trim();
  if (!v || v.startsWith('#')) return null;
  let u;
  try {
    u = new URL(v, base);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(u.protocol) || (u.hostname !== HOST && u.hostname !== `www.${HOST}`)) return null;
  try {
    return decodeURIComponent(u.pathname);
  } catch {
    return u.pathname;
  }
}

/* ------------------------------------------------------------------------ *
 * Findings, grouped like schema-check's: one line per problem, its pages after.
 * ------------------------------------------------------------------------ */

const findings = new Map(); // "LEVEL | check | detail" -> Set(pages)
const report = (level, check, detail, page) => {
  const k = `${level} | ${check} | ${detail}`;
  if (!findings.has(k)) findings.set(k, new Set());
  findings.get(k).add(page);
};
const error = (check, detail, page) => report('ERROR', check, detail, page);
const warn = (check, detail, page) => report('warn', check, detail, page);

/* ------------------------------------------------------------------------ *
 * Sitemaps
 * ------------------------------------------------------------------------ */

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, u]) => decode(u.trim()));
const sitemapDates = new Map(); // page URL -> Set(lastmod), every sitemap in out/
const sitemapFiles = new Set();
const indexXml = isFile(join(OUT, 'sitemap.xml')) ? readFileSync(join(OUT, 'sitemap.xml'), 'utf8') : '';
if (!indexXml) error('sitemap', 'no sitemap.xml in out/', '/sitemap.xml');
for (const loc of indexXml.includes('<sitemapindex') ? locs(indexXml) : []) {
  const path = new URL(loc).pathname;
  if (isFile(join(OUT, path))) sitemapFiles.add(path);
  else error('sitemap', `the index lists ${path}, which is not in out/`, '/sitemap.xml');
}
if (indexXml && !indexXml.includes('<sitemapindex')) sitemapFiles.add('/sitemap.xml');
// Not in the index (submitted to Bing by hand), but every URL in it must be indexable too.
if (isFile(join(OUT, 'sitemap-priority.xml'))) sitemapFiles.add('/sitemap-priority.xml');
for (const file of sitemapFiles) {
  const xml = readFileSync(join(OUT, file), 'utf8');
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    const url = decode(loc.trim());
    const mod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if (!sitemapDates.has(url)) sitemapDates.set(url, new Set());
    if (mod) sitemapDates.get(url).add(mod.trim().slice(0, 10));
    const path = internalPath(url, SITE);
    if (path == null) error('sitemap', `${file} lists ${url}, which is not on ${HOST}`, file);
    else if (resolvePath(path) !== 'ok') error('sitemap', `${file} lists ${path}, which is not a page in out/`, file);
  }
}

/* ------------------------------------------------------------------------ *
 * Pages
 * ------------------------------------------------------------------------ */

const walk = (dir, list = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== '_next') walk(p, list);
    } else if (name.endsWith('.html')) list.push(p);
  }
  return list;
};

const pages = []; // { url, path, indexable, articles }
const inbound = new Map(); // page URL -> Set(source page URLs)

for (const file of walk(OUT)) {
  const rel = relative(OUT, file).split(sep).join('/');
  const top = rel.split('/')[0];
  const isPage = rel.endsWith('index.html') && top !== '_not-found' && top !== '404';
  const path = `/${rel.replace(/index\.html$/, '')}`;
  const url = `${SITE}${path}`;
  const raw = readFileSync(file, 'utf8');
  const html = clean(raw);

  // Internal hrefs, on every HTML file (404 included).
  for (const t of tags(html, 'a|link|area')) {
    if (t.href == null) continue;
    const target = internalPath(t.href, url);
    if (target == null) continue;
    const r = resolvePath(target);
    if (r === 'missing') error('href', `<${t.tag}> to ${target}, which is not in out/`, path);
    else if (r === 'slash') warn('href', `<${t.tag}> to ${target} works only through the redirect to ${target}/`, path);
  }
  if (!isPage) continue;

  const metas = tags(html, 'meta');
  const links = tags(html, 'link');
  const robots = metas
    .filter((m) => ['robots', 'googlebot'].includes((m.name ?? '').toLowerCase()))
    .map((m) => (m.content ?? '').toLowerCase());
  const noindex = robots.some((c) => /\b(noindex|none)\b/.test(c));
  const nofollow = robots.some((c) => /\b(nofollow|none)\b/.test(c));
  const utility = noindex && nofollow;
  const indexable = !noindex;

  // robots against the sitemaps.
  if (indexable && !sitemapDates.has(url)) error('robots', 'indexable (no noindex) but in no sitemap', path);
  if (!indexable && sitemapDates.has(url)) error('robots', 'noindex but listed in a sitemap', path);

  // JSON-LD: parses, has Google's required properties, reviewer only on a
  // WebPage, one full Organization.
  const ld = [];
  for (const [, json] of raw.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      ld.push(JSON.parse(json));
    } catch {
      error('json-ld', 'does not parse', path);
    }
  }
  const nodes = ld.flatMap((o) => arr(o['@graph'] ?? o));
  for (const node of nodes) {
    for (const t of arr(node['@type'])) {
      for (const { level, msg } of RULES[t]?.(node) ?? []) if (level === 'ERROR') error('json-ld', `${t}: ${msg}`, path);
    }
  }
  let fullOrgs = 0;
  const ldUrls = [];
  const visit = (v) => {
    if (typeof v === 'string') {
      if (v.startsWith(`${SITE}/`)) ldUrls.push(v);
      return;
    }
    if (!v || typeof v !== 'object') return;
    if (Array.isArray(v)) return v.forEach(visit);
    const types = arr(v['@type']);
    if (('reviewedBy' in v || 'lastReviewed' in v) && !types.includes('WebPage')) {
      error('json-ld', `reviewedBy or lastReviewed on ${types.join('/') || 'a node with no @type'}, not on a WebPage`, path);
    }
    if (types.includes('Organization') && Object.keys(v).some((k) => !REFERENCE_KEYS.has(k))) fullOrgs++;
    Object.values(v).forEach(visit);
  };
  ld.forEach(visit);
  if (fullOrgs > 1) error('json-ld', 'more than one full Organization (a reference carries only @type, @id, name and url)', path);

  // Files the page references: an anatomy figure missing is an error, any other file a warning.
  const refs = [...ldUrls];
  for (const t of tags(html, 'img|source|video|audio|track|embed|iframe|script|link')) {
    for (const k of ['src', 'poster']) if (t[k]) refs.push(t[k]);
    for (const k of ['srcset', 'imagesrcset']) if (t[k]) refs.push(...t[k].split(',').map((s) => s.trim().split(/\s+/)[0]));
  }
  for (const m of metas) if (/^(og:image|og:video|twitter:image)(:url|:secure_url)?$/i.test(m.property ?? m.name ?? '') && m.content) refs.push(m.content);
  for (const ref of refs) {
    const target = internalPath(ref, url);
    if (target == null || target.endsWith('/') || resolvePath(target) !== 'missing') continue;
    if (target.startsWith('/anatomy/')) error('anatomy', `${target} is referenced but not in out/`, path);
    else warn('file', `${target} is referenced but not in out/`, path);
  }

  // Headings whose words run together in the text a crawler reads.
  const headings = [...html.matchAll(/<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi)];
  for (const [, tag, a, inner] of headings) {
    const label = squash(attrs(a)['aria-label'] ?? '');
    if (!/\s/.test(label)) continue;
    // The aria-label's letters are all in the text, but not its spaces.
    const said = squash(text(inner));
    const nospace = (s) => s.replace(/\s+/g, '');
    if (nospace(said).includes(nospace(label)) && !said.includes(label)) {
      error('heading', `<${tag.toLowerCase()}> reads "${said}" for aria-label "${label}"`, path);
    }
  }

  if (utility) {
    pages.push({ url, path, indexable, articles: 0 });
    continue;
  }

  // canonical and og:url.
  const canonicals = links.filter((l) => (l.rel ?? '').toLowerCase().split(/\s+/).includes('canonical')).map((l) => l.href ?? '');
  if (canonicals.length > 1) error('canonical', 'more than one canonical', path);
  if (canonicals.length === 0 && indexable) error('canonical', 'no canonical', path);
  for (const c of canonicals) if (c !== url) error('canonical', `canonical is ${c}, not the page itself`, path);
  const ogUrl = metas.find((m) => (m.property ?? '').toLowerCase() === 'og:url')?.content;
  if (ogUrl != null && ogUrl !== url) error('canonical', `og:url is ${ogUrl}, not the page itself`, path);

  // One h1, and it comes first.
  const h1s = headings.filter(([, tag]) => tag.toLowerCase() === 'h1').length;
  if (h1s !== 1) error('h1', `${h1s} h1 elements`, path);
  else if (indexable && headings[0][1].toLowerCase() !== 'h1') warn('h1', `the first heading is an ${headings[0][1].toLowerCase()}, not the h1`, path);

  // One date: sitemap lastmod, the visible "Updated" line, dateModified.
  const dates = new Map(); // date -> where it was found
  const saw = (date, where) => dates.set(date, [...(dates.get(date) ?? []), where]);
  for (const d of sitemapDates.get(url) ?? []) saw(d, 'sitemap lastmod');
  for (const [, cls, inner] of html.matchAll(/<p\b[^>]*\bclass="([^"]*)"[^>]*>([\s\S]*?)<\/p>/gi)) {
    if (!/(^|\s)(updated-line|updated|byline)(\s|$)/.test(cls)) continue;
    for (const [, d] of inner.matchAll(/<time\b[^>]*\bdatetime="([^"]+)"/gi)) saw(d.slice(0, 10), 'visible date');
  }
  for (const node of nodes) if (typeof node.dateModified === 'string') saw(node.dateModified.slice(0, 10), `${arr(node['@type']).join('/')} dateModified`);
  if (dates.size > 1) error('dates', [...dates].map(([d, where]) => `${[...new Set(where)].join(' and ')} ${d}`).join(', '), path);

  // Indexable pages: what the result looks like in search.
  if (indexable) {
    // The document's <title>, not an inline SVG's.
    const rawTitle = html.replace(/<svg\b[\s\S]*?<\/svg>/gi, '').match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
    const title = rawTitle == null ? null : decode(rawTitle).trim();
    if (title == null) warn('title', 'no <title>', path);
    else if (chars(title) > TITLE_MAX) warn('title', `${chars(title)} characters (max ${TITLE_MAX})`, path);
    const description = metas.find((m) => (m.name ?? '').toLowerCase() === 'description')?.content;
    if (description == null) warn('description', 'no meta description', path);
    else if (chars(description) > DESCRIPTION_MAX) warn('description', `${chars(description)} characters (max ${DESCRIPTION_MAX})`, path);
  }

  // Links out of <main>, for the inbound count.
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? '';
  for (const t of tags(main, 'a')) {
    const target = t.href == null ? null : internalPath(t.href, url);
    if (target == null) continue;
    const r = resolvePath(target);
    const to = r === 'ok' && target.endsWith('/') ? `${SITE}${target}` : r === 'slash' ? `${SITE}${target}/` : null;
    if (!to || to === url) continue;
    if (!inbound.has(to)) inbound.set(to, new Set());
    inbound.get(to).add(url);
  }
  pages.push({ url, path, indexable, articles: nodes.filter((n) => arr(n['@type']).includes('Article')).length });
}

for (const p of pages) {
  const n = inbound.get(p.url)?.size ?? 0;
  if (p.indexable && p.articles && n < MIN_INBOUND) warn('inbound', `Article linked from ${n} other page(s) (min ${MIN_INBOUND})`, p.path);
}

/* ------------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------------ */

let errors = 0;
let warnings = 0;
const sorted = [...findings].sort(([a], [b]) => (a.startsWith('ERROR') === b.startsWith('ERROR') ? a.localeCompare(b) : a.startsWith('ERROR') ? -1 : 1));
for (const [k, list] of sorted) {
  const all = [...list];
  if (k.startsWith('ERROR')) errors += all.length;
  else warnings += all.length;
  console.log(`${k}  (${all.length} page${all.length === 1 ? '' : 's'}: ${all.slice(0, 5).join(' ')}${all.length > 5 ? ' ...' : ''})`);
}
const indexed = pages.filter((p) => p.indexable).length;
console.log(`seo-lint: ${pages.length} pages (${indexed} indexable), ${sitemapDates.size} sitemap URLs; ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
