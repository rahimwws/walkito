/**
 * Structured data check over the whole build, offline.
 *
 * Google's Rich Results Test checks one URL at a time and has no API, so this
 * reads every JSON-LD block in out/ and checks it against Google's documented
 * required (ERROR) and recommended (warn) properties for the types the site
 * uses. Then check one page per template by hand in the Rich Results Test.
 *
 *   node scripts/schema-check.mjs [out/]
 *
 * Exit code 1 on any ERROR (missing required property or unparseable JSON).
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.argv[2] || 'out';
const walk = (dir, list = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== '_next') walk(p, list); }
    else if (name === 'index.html') list.push(p);
  }
  return list;
};

const has = (o, path) => path.split('.').reduce((v, k) => (v == null ? v : Array.isArray(v) ? v[0]?.[k] : v[k]), o) != null;
const arr = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

/** type -> (object) => [{ level, msg }] */
const RULES = {
  Article: (o) => [
    ...['headline', 'datePublished', 'dateModified', 'image'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
    ...arr(o.author).flatMap((a, i) => (a?.name ? [] : [{ level: 'warn', msg: `author[${i}] has no name` }])),
    ...(arr(o.author).length ? [] : [{ level: 'warn', msg: 'recommended "author" missing' }]),
    ...['datePublished', 'dateModified'].filter((k) => o[k] && !/T\d\d:\d\d(:\d\d)?([+-]\d\d:\d\d|Z)$/.test(o[k])).map((k) => ({ level: 'warn', msg: `${k} has no time and timezone` })),
  ],
  BreadcrumbList: (o) => {
    const items = arr(o.itemListElement);
    if (!items.length) return [{ level: 'ERROR', msg: 'itemListElement missing' }];
    return items.flatMap((it, i) => [
      ...(it.position == null ? [{ level: 'ERROR', msg: `item ${i + 1}: position missing` }] : []),
      ...(!it.name ? [{ level: 'ERROR', msg: `item ${i + 1}: name missing` }] : []),
      ...(!it.item && i < items.length - 1 ? [{ level: 'ERROR', msg: `item ${i + 1}: item (URL) missing` }] : []),
    ]);
  },
  FAQPage: (o) => {
    const qs = arr(o.mainEntity);
    if (!qs.length) return [{ level: 'ERROR', msg: 'mainEntity (questions) missing' }];
    return qs.flatMap((q, i) => [
      ...(!q.name ? [{ level: 'ERROR', msg: `question ${i + 1}: name missing` }] : []),
      ...(!q.acceptedAnswer?.text ? [{ level: 'ERROR', msg: `question ${i + 1}: acceptedAnswer.text missing` }] : []),
    ]);
  },
  VideoObject: (o) => [
    ...['name', 'thumbnailUrl', 'uploadDate'].filter((k) => !has(o, k)).map((k) => ({ level: 'ERROR', msg: `required "${k}" missing` })),
    ...(o.uploadDate && !/T\d\d:\d\d(:\d\d)?([+-]\d\d:\d\d|Z)$/.test(o.uploadDate) ? [{ level: 'warn', msg: `uploadDate "${o.uploadDate}" has no time and timezone` }] : []),
    ...['description', 'duration'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
    ...(!o.contentUrl && !o.embedUrl ? [{ level: 'warn', msg: 'recommended contentUrl or embedUrl missing' }] : []),
  ],
  ImageObject: (o) => [
    ...(!o.contentUrl ? [{ level: 'ERROR', msg: 'required "contentUrl" missing' }] : []),
    ...(!o.creator && !o.creditText && !o.copyrightNotice && !o.license ? [{ level: 'ERROR', msg: 'needs one of creator, creditText, copyrightNotice, license' }] : []),
    ...(!o.license || !o.acquireLicensePage ? [{ level: 'warn', msg: 'license / acquireLicensePage missing (image metadata)' }] : []),
  ],
  Organization: (o) => ['name', 'url', 'logo'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
  AboutPage: (o) => (o.dateModified && !/T\d\d:\d\d(:\d\d)?([+-]\d\d:\d\d|Z)$/.test(o.dateModified) ? [{ level: 'warn', msg: 'dateModified has no time and timezone' }] : []),
  WebSite: (o) => ['name', 'url'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `"${k}" missing` })),
  SoftwareApplication: (o) => [
    ...(!o.name ? [{ level: 'ERROR', msg: 'required "name" missing' }] : []),
    ...(!has(o, 'offers.price') ? [{ level: 'warn', msg: '"offers.price" missing (needed for an app rich result)' }] : []),
    ...(!o.aggregateRating && !o.review ? [{ level: 'info', msg: 'no aggregateRating/review: not eligible for an app rich result until there are real ratings (never add fake ones)' }] : []),
    ...['operatingSystem', 'applicationCategory'].filter((k) => !o[k]).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
  ],
};

const tally = {};
const problems = new Map(); // "type | level | msg" -> [pages]
let blocks = 0;
for (const file of walk(OUT)) {
  const page = file.slice(OUT.length).replace(/index\.html$/, '') || '/';
  const html = readFileSync(file, 'utf8');
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    blocks++;
    let o;
    try { o = JSON.parse(json); } catch { const k = '(json) | ERROR | unparseable JSON-LD'; problems.set(k, [...(problems.get(k) || []), page]); continue; }
    for (const node of arr(o['@graph'] ?? o)) {
      const types = arr(node['@type']);
      for (const t of types) {
        tally[t] = (tally[t] || 0) + 1;
        const rule = RULES[t] || (t === 'MobileApplication' ? null : undefined);
        if (!rule) continue;
        for (const { level, msg } of rule(node)) {
          const k = `${t} | ${level} | ${msg}`;
          problems.set(k, [...(problems.get(k) || []), page]);
        }
      }
    }
  }
}

console.log(`schema-check: ${blocks} JSON-LD blocks; types: ${JSON.stringify(tally)}`);
let errors = 0;
for (const [k, list] of [...problems].sort()) {
  if (k.includes('| ERROR |')) errors += list.length;
  console.log(`${k}  (${list.length} pages, e.g. ${[...new Set(list)].slice(0, 3).join(' ')})`);
}
if (!problems.size) console.log('no problems found');
process.exit(errors ? 1 : 0);
