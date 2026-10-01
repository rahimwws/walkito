// Non-breaking spaces for the Russian and Spanish text, written into the
// sources so the pages carry them with no runtime step.
//
//   node scripts/typeset.mjs          rewrite the files, print what changed
//   node scripts/typeset.mjs --check  change nothing, exit 1 if anything would
//
// Run it after pasting new Russian or Spanish text. It is idempotent: a space
// it has already replaced is a U+00A0 and no longer matches.
//
// Russian: a number stays with the word or % after it (14 дней, 10 %), and a
// short word stays with the word after it (в пятке, не выше). Spanish: a number
// stays with its unit (60 segundos, 10 %). The Russian rules only ever match
// Cyrillic, so they are safe on files that mix languages. The Spanish ones are
// not (English has "10 min" too), so in mixed files they run only inside the
// `es` block.

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const NBSP = ' ';

/** Every file under a directory, recursively. */
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const RU_FILES = [
  ...walk(join(root, 'app/ru')),
  'lib/guides/ru.ts',
  'lib/about/ru.ts',
].map((f) => resolve(root, f));
const ES_FILES = [
  ...walk(join(root, 'app/es')),
  'lib/guides/es.ts',
  'lib/about/es.ts',
].map((f) => resolve(root, f));
/** Files with all three languages in them: Russian rules everywhere, Spanish in the `es` block. */
const MIXED = ['components/Home.tsx', 'components/Founders.tsx', 'components/Byline.tsx', 'lib/i18n.ts'].map((f) =>
  resolve(root, f),
);

// A number (or a `${…}` holding one) and the Cyrillic word or % after it.
const RU_NUMBER = /(\d|\})[ ](?=[\p{Script=Cyrillic}%])/gu;
// Short Russian words that should not end a line.
const SHORT = 'в|во|с|со|к|ко|и|о|об|а|но|не|ни|на|по|у|из|за|от|до';
const RU_SHORT = new RegExp(`(?<![\\p{L}\\p{N}-])(${SHORT})[ ](?=[\\p{L}\\p{N}«(])`, 'giu');
// The same word at the end of a JSX text line: move it down to the word it belongs to.
const RU_SHORT_EOL = new RegExp(`(?<![\\p{L}\\p{N}-])(${SHORT})\\n(\\s*)(?=[\\p{L}\\p{N}«(])`, 'giu');

const ES_UNITS =
  'segundos?|minutos?|min|horas?|días?|semanas?|meses|mes|años?|veces|vez|elevaciones|pruebas|repeticiones|series|pasos|sesiones|ejercicios|cm|mm|km|kg|%';
const ES_NUMBER = new RegExp(`(\\d|\\})[ ](?=(?:${ES_UNITS})(?![\\p{L}]))`, 'gu');

function russian(text) {
  return text
    .replace(RU_NUMBER, `$1${NBSP}`)
    .replace(RU_SHORT_EOL, `\n$2$1${NBSP}`)
    .replace(RU_SHORT, `$1${NBSP}`);
}

function spanish(text) {
  return text.replace(ES_NUMBER, `$1${NBSP}`);
}

/** Runs `fn` over the `es` block of a mixed file: from `es: {` / `const es… = {` to its closing line. */
function inSpanishBlock(text, fn) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => /^(\s*)(?:const )?es(?::\s*\w+)?\s*[:=]\s*[{[]/.test(l));
  if (start === -1) return text;
  const indent = lines[start].match(/^\s*/)[0];
  let end = start;
  if (!/[}\]],?;?\s*$/.test(lines[start])) {
    end = lines.findIndex((l, i) => i > start && l.startsWith(`${indent}}`) || (i > start && l.startsWith(`${indent}]`)));
  }
  const block = lines.slice(start, end + 1).join('\n');
  return [...lines.slice(0, start), fn(block), ...lines.slice(end + 1)].join('\n');
}

const check = process.argv.includes('--check');
let changed = 0;

for (const file of [...RU_FILES, ...ES_FILES, ...MIXED]) {
  const before = readFileSync(file, 'utf8');
  let after = before;
  if (RU_FILES.includes(file) || MIXED.includes(file)) after = russian(after);
  if (ES_FILES.includes(file)) after = spanish(after);
  if (MIXED.includes(file)) after = inSpanishBlock(after, spanish);
  if (after === before) continue;
  const count = [...after].filter((ch) => ch === NBSP).length - [...before].filter((ch) => ch === NBSP).length;
  changed += 1;
  console.log(`${relative(root, file)}: ${count} non-breaking spaces`);
  if (!check) writeFileSync(file, after);
}

if (check && changed > 0) process.exit(1);
console.log(changed === 0 ? 'typeset: nothing to change' : `typeset: ${changed} files ${check ? 'would change' : 'changed'}`);
