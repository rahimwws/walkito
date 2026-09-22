#!/usr/bin/env node
/**
 * Finds user-facing English still hardcoded in the app.
 *
 * This exists because eyeballing did not work. Three separate hand-written
 * sweeps over this codebase each missed things a screenshot then found in
 * seconds — the tab bar labels, the weekday strip, the "Gift" capsule. A regex
 * someone writes fresh each time keeps a different blind spot every time, so
 * the sweep is written down once, here, and run by `bun run verify`.
 *
 * It is deliberately noisy in one direction only: it would rather flag a
 * technical string that turns out to be fine than stay quiet about a label a
 * user reads. Anything genuinely not copy goes in `ALLOW` below with a reason.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, 'src');

/** Files whose strings are the source of truth, not consumers of it. */
const SKIP_FILES = [
  'src/shared/lib/i18n/catalogue/', // the catalogue *is* the strings
  'src/shared/lib/i18n/languages.ts', // endonyms, deliberately untranslated
];

/**
 * Strings that look like copy but are not.
 *
 * Each needs a reason. "It is fine" is not a reason — the point of the list is
 * that the next person can tell a considered exemption from an unreviewed one.
 */
const ALLOW = new Map([
  ['Walkito', 'the brand'],
  ['Walkito Premium', 'brand plus tier'],
  ['Continue with Apple', 'Apple requires this exact wording per its HIG'],
  ['Sign in with Apple', 'Apple requires this exact wording per its HIG'],
  [
    'The RevenueCat native module could not be loaded.',
    'storeDiagnosis is documented "for the developer, not the user"; no screen renders it',
  ],
  [
    'A Test Store key is configured in the production build and has been ignored.',
    'same — a developer diagnostic, never shown to a user',
  ],
]);

/** Props whose string value is read aloud or displayed. */
const TEXT_PROPS =
  /\b(accessibilityLabel|accessibilityHint|accessibilityValue|label|title|placeholder|headline|blurb|ctaLabel|hint|caption|subtitle|message)\s*=\s*["']([^"']{2,})["']/g;

/** A bare JSX text node: `>Some words<`. */
const JSX_TEXT = />\s*([A-Z][A-Za-z][^<>{}\n]{2,})\s*</g;

/**
 * An object/array literal value that reads like a sentence.
 *
 * Applied per line rather than to the whole file. Run across the source it
 * pairs an apostrophe in one comment with an apostrophe in another and reports
 * whatever code sits between them — which is how `Math.abs(v - baseline)` once
 * came back as an untranslated string, with a line number a hundred lines off.
 */
const LITERAL = /(?<![\w.])['"]([A-Z][a-z]+(?:[ ,'’-][A-Za-z][A-Za-z'’-]*){1,}[.!?]?)['"]/g;

/** Code that slipped through the quote matching anyway. */
const LOOKS_LIKE_CODE = /[(){}[\]=<>;]|\w\.\w/;

/** Technical vocabulary that trips `LITERAL` without being copy. */
const TECHNICAL =
  /^(Expo|React|Apple|Health|HealthKit|RevenueCat|Supabase|StoreKit|Live Activity|Dynamic Island|iOS|Android|Object|Array|Error|Promise|Date|Intl|JSON|Map|Set|Number|String|Boolean|Infinity|NaN|GET|POST|PUT|DELETE|Bearer|Content Type|User Agent|Cache Control|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/;

/** Values that are plainly style, layout or config rather than words. */
const NOT_COPY =
  /^(#|rgba?\(|https?:|mailto:|[a-z-]+\/[a-z-]+$|[0-9.]+$)|^(Regular|Medium|SemiBold|Bold|Heavy|Black|Light|Thin)$/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === 'node_modules') continue;
      walk(full, out);
      continue;
    }
    if (/\.(ts|tsx)$/.test(entry) && !/\.test\.tsx?$/.test(entry)) out.push(full);
  }
  return out;
}

/**
 * Blanks out comments and import lines so their prose is not mistaken for copy.
 *
 * This file's own subjects are heavily commented — the doc comments explain
 * why a string is worded as it is, and they quote the string to do it. Scanning
 * them would flag every explanation as a finding.
 */
function stripNoise(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (m) => ' '.repeat(m.length))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m) => ' '.repeat(m.length))
    .replace(/^import[\s\S]*?from\s+['"][^'"]+['"];?$/gm, (m) => ' '.repeat(m.length));
}

const findings = [];

for (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (SKIP_FILES.some((skip) => rel.startsWith(skip))) continue;

  const source = stripNoise(readFileSync(file, 'utf8'));
  const seen = new Set();

  const record = (text, line) => {
    const trimmed = text.trim();
    if (trimmed.length < 3) return;
    if (ALLOW.has(trimmed)) return;
    if (TECHNICAL.test(trimmed)) return;
    if (NOT_COPY.test(trimmed)) return;
    if (LOOKS_LIKE_CODE.test(trimmed)) return;
    // Needs at least one lowercase run — screaming constants and single
    // capitalised tokens are almost always identifiers.
    if (!/[a-z]{2}/.test(trimmed)) return;
    const key = `${line}:${trimmed}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push({ rel, line, text: trimmed });
  };

  const lineOf = (index) => source.slice(0, index).split('\n').length;

  for (const m of source.matchAll(TEXT_PROPS)) record(m[2], lineOf(m.index));
  for (const m of source.matchAll(JSX_TEXT)) record(m[1], lineOf(m.index));

  // Line by line, so a quote can only ever pair with one on its own line.
  source.split('\n').forEach((line, index) => {
    for (const m of line.matchAll(LITERAL)) record(m[1], index + 1);
  });
}

if (findings.length === 0) {
  console.log('No hardcoded user-facing English found.');
  process.exit(0);
}

const byFile = new Map();
for (const f of findings) {
  if (!byFile.has(f.rel)) byFile.set(f.rel, []);
  byFile.get(f.rel).push(f);
}

console.log(`${findings.length} possible untranslated string(s) in ${byFile.size} file(s):\n`);
for (const [rel, items] of [...byFile].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${rel}`);
  for (const item of items.slice(0, 8)) {
    console.log(`    ${String(item.line).padStart(4)}  ${item.text.slice(0, 72)}`);
  }
  if (items.length > 8) console.log(`    …and ${items.length - 8} more`);
}

// Reports rather than fails. Some findings are judgement calls, and a check
// that blocks every commit on a false positive is a check people delete.
console.log('\nReview each: translate it, or add it to ALLOW with a reason.');
