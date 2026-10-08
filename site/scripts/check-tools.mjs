// Checks that the numbers the interactive tools use match the tables and text
// on the pages they sit on. Run from site/: bun scripts/check-tools.mjs
import { readFileSync } from 'node:fs';

let failed = 0;
const norms = readFileSync('lib/tools/calf-norms.ts', 'utf8');
const male = norms.match(/male: \[([^\]]+)\]/)[1].split(',').map(Number);
const female = norms.match(/female: \[([^\]]+)\]/)[1].split(',').map(Number);
for (const dir of ['articles', 'articles-es', 'articles-ru']) {
  const src = readFileSync(`lib/guides/${dir}/calf-raise-test.ts`, 'utf8');
  const rows = [...src.matchAll(/\['(\d+)', '(\d+)', '(\d+)'\]/g)].map((m) => m.slice(1).map(Number));
  const ok = rows.length === 7 && rows.every(([, m, f], i) => m === male[i] && f === female[i]);
  console.log(`${dir}/calf-raise-test.ts norms table: ${ok ? 'matches' : 'DIFFERS'}`);
  if (!ok) failed++;
}
process.exit(failed ? 1 : 0);
