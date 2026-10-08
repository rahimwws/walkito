import { ARTICLES_EN } from './lib/guides/articles-en';
import { ARTICLES_RU } from './lib/guides/articles-ru';
import { HEEL_PAIN_EN, FLAT_FEET_EN } from './lib/guides/en';
import { HEEL_PAIN_RU, FLAT_FEET_RU } from './lib/guides/ru';
import fs from 'node:fs';
const en: any = { heelPain: HEEL_PAIN_EN, flatFeet: FLAT_FEET_EN, ...ARTICLES_EN }, ru: any = { heelPain: HEEL_PAIN_RU, flatFeet: FLAT_FEET_RU, ...ARTICLES_RU };
const oldText = fs.readFileSync('/tmp/en-old.ts', 'utf8') + fs.readdirSync('/tmp/oldart').map((f) => fs.readFileSync('/tmp/oldart/' + f, 'utf8')).join('\n');
const out: string[] = []; let n = 0;
for (const k of Object.keys(en)) { const ni = en[k].faq.filter((f: any) => !(oldText.includes(f.q.slice(0, 40)) || oldText.includes(f.q.replace(/'/g, "\\'").slice(0, 40)))); if (!ni.length) continue;
  const tail = ru[k].faq.slice(-ni.length); ni.forEach((f: any, i: number) => { n++; out.push(`${n}. [${k}] EN: ${f.q}\n   RU: ${tail[i].q}\n   ${tail[i].a}`); }); }
const half = Math.ceil(out.length / 2);
console.log((process.argv[2] === '2' ? out.slice(half) : out.slice(0, half)).join('\n'));
