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

import { arr, RULES } from './schema-rules.mjs';

const OUT = process.argv[2] || 'out';
const walk = (dir, list = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== '_next') walk(p, list); }
    else if (name === 'index.html') list.push(p);
  }
  return list;
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
