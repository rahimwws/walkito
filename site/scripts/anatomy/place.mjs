// Writes the `figure` fields from placements.mjs into the guide files.
// Idempotent: a section that already has a figure line gets it replaced.
// Run from site/: bun scripts/anatomy/place.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { PLACEMENTS } from './placements.mjs';

const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\u00A0/g, '\\u00A0')}'`;

const files = new Map();
for (const p of PLACEMENTS) {
  const lines = files.get(p.file) ?? readFileSync(p.file, 'utf8').split('\n');
  files.set(p.file, lines);

  let i = 0;
  if (p.guide) {
    i = lines.findIndex((l) => l.startsWith(`export const ${p.guide}:`));
    if (i < 0) throw new Error(`${p.file}: no ${p.guide}`);
  }
  while (i < lines.length && !/^\s*sections: \[/.test(lines[i])) i++;
  if (i >= lines.length) throw new Error(`${p.file}: no sections`);
  const first = lines.slice(i).findIndex((l) => /^\s+h2: /.test(l)) + i;
  const indent = lines[first].match(/^\s+/)[0];
  let n = -1;
  let at = -1;
  for (let j = first; j < lines.length; j++) {
    if (lines[j].startsWith(indent + 'h2: ')) {
      n++;
      if (n === p.section) {
        at = j;
        break;
      }
    }
    if (/^\s{0,4}\],?$/.test(lines[j]) && lines[j].length - lines[j].trimStart().length < indent.length - 2) break;
  }
  if (at < 0) throw new Error(`${p.file}: section ${p.section} not found`);
  if (!/[',"]\s*,\s*$/.test(lines[at]) && !/',$|",$/.test(lines[at])) throw new Error(`${p.file}: multi-line h2 at ${at + 1}`);

  const fig = `${indent}figure: { id: ${q(p.figure.id)}, caption: ${q(p.figure.caption)}, alt: ${q(p.figure.alt)} },`;
  if (lines[at + 1]?.startsWith(indent + 'figure: ')) lines[at + 1] = fig;
  else lines.splice(at + 1, 0, fig);
  console.log(`${p.file}${p.guide ? ' ' + p.guide : ''} [${p.section}] ${lines[at].trim().slice(0, 70)}  <- ${p.figure.id}`);
}
for (const [file, lines] of files) writeFileSync(file, lines.join('\n'));
