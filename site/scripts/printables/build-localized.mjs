/**
 * Spanish and Russian printable sheets (public/downloads/walkito-<slug>.pdf and
 * a 420 px page-one preview .webp), from the same guide data as the pages, so
 * paper and page agree. Same layout as the English sheets (build-html.mjs).
 *
 *   bun run scripts/printables/export-data.ts > /tmp/pdfdata.json   (from /site)
 *   node scripts/printables/build-localized.mjs                      (from /site)
 *
 * CHROMIUM_PATH can point at a local Chromium if Playwright's own is missing.
 * Words on the sheet itself (title, how-to, labels, footer) are here; the
 * how-to box repeats the "how to use a sheet" list of each printables page.
 */
import fs from 'node:fs';
import sharp from 'sharp';
import { chromium } from 'playwright';

const d = JSON.parse(fs.readFileSync('/tmp/pdfdata.json', 'utf8'));
const plain = (t = '') => t.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const esc = (t = '') => plain(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const L = {
  es: {
    evidence: 'Evidencia',
    level: { strong: 'Sólida', moderate: 'Moderada', early: 'Inicial', unsupported: 'Sin respaldo' },
    stop: 'Detente si',
    log: 'Registro semanal: marca lo que hiciste',
    days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    pain: 'Dolor por la mañana (0 a 10)',
    howLabel: 'Cómo usar esta hoja',
    how: 'empieza con los ejercicios más fáciles y la dosis más baja. Una molestia leve está bien. Un dolor agudo no. Si el dolor es peor a la mañana siguiente, baja un paso por unos días. Las dosis son las dosis de inicio de Walkito, no una indicación médica para ti. Guía completa con videos y estudios',
    footer: 'Walkito Research · walkito.site · Esta hoja es información general sobre ejercicio. No hace diagnósticos ni sustituye a un profesional de la salud. Actualizada en octubre de 2026.',
    printable: 'para imprimir',
    sheets: {
      'walkito-ejercicios-fascitis-plantar': { key: 'pf', title: 'Ejercicios para la fascitis plantar', sub: 'Estiramientos y fuerza de pantorrilla para el dolor de talón. Una hoja para imprimir de walkito.site.', url: 'walkito.site/es/ejercicios-fascitis-plantar' },
      'walkito-ejercicios-pie-plano': { key: 'flat', title: 'Ejercicios para pie plano', sub: 'Fuerza del arco y del pie, paso a paso. Una hoja para imprimir de walkito.site.', url: 'walkito.site/es/ejercicios-pie-plano' },
      'walkito-ejercicios-pies-cansados-de-estar-de-pie': { key: 'standing', title: 'Ejercicios para pies cansados de estar de pie', sub: 'Para turnos largos de pie. Una hoja para imprimir de walkito.site.', url: 'walkito.site/es/dolor-de-pies-por-estar-de-pie' },
    },
  },
  ru: {
    evidence: 'Доказательства',
    level: { strong: 'Сильные', moderate: 'Умеренные', early: 'Ранние', unsupported: 'Не подтверждено' },
    stop: 'Остановитесь, если',
    log: 'Журнал недели: отмечайте, что сделали',
    days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    pain: 'Утренняя боль (от\u00A00 до\u00A010)',
    howLabel: 'Как пользоваться листом',
    how: 'начните с\u00A0более лёгких упражнений и\u00A0меньшей дозировки. Лёгкий дискомфорт допустим. Острая боль нет. Если на\u00A0следующее утро стало хуже, снизьте нагрузку на\u00A0несколько дней. Это стартовые дозировки Walkito, а\u00A0не\u00A0назначение для вас. Полный гайд с\u00A0видео и\u00A0исследованиями',
    footer: 'Walkito Research · walkito.site · Этот лист содержит общую информацию об\u00A0упражнениях. Он не\u00A0ставит диагноз и\u00A0не\u00A0заменяет врача. Обновлено в\u00A0октябре 2026\u00A0года.',
    printable: 'для печати',
    sheets: {
      'walkito-uprazhneniya-plantarnyy-fastsiit': { key: 'pf', title: 'Упражнения при плантарном фасциите', sub: 'Растяжка и\u00A0укрепление икр при боли в\u00A0пятке. Лист для печати с\u00A0walkito.site.', url: 'walkito.site/ru/bol-v-pyatke-uprazhneniya' },
      'walkito-uprazhneniya-ploskostopie': { key: 'flat', title: 'Упражнения при плоскостопии', sub: 'Укрепление свода и\u00A0мышц стопы, шаг за\u00A0шагом. Лист для печати с\u00A0walkito.site.', url: 'walkito.site/ru/ploskostopie-uprazhneniya' },
      'walkito-uprazhneniya-dlya-stoyachey-raboty': { key: 'standing', title: 'Упражнения для стоп при стоячей работе', sub: 'Для долгих смен на\u00A0ногах. Лист для печати с\u00A0walkito.site.', url: 'walkito.site/ru/bolyat-nogi-ot-stoyaniya' },
    },
  },
};

const css = `@page{size:Letter;margin:14mm 13mm 16mm}*{box-sizing:border-box}body{font-family:-apple-system,"Helvetica Neue",Arial,sans-serif;color:#141418;font-size:10.5pt;line-height:1.4;margin:0}
header{display:flex;align-items:center;gap:12px;border-bottom:2px solid #8b5cf6;padding-bottom:10px;margin-bottom:12px}header img{width:38px;height:38px;border-radius:9px}
h1{font-size:20pt;margin:0;line-height:1.1}.sub{color:#555;margin:2px 0 0;font-size:10pt}
.how{background:#f5f3ff;border-radius:8px;padding:8px 12px;margin:0 0 12px;font-size:9.5pt}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.card{border:1px solid #e3e1ea;border-radius:10px;padding:9px;display:flex;gap:9px;break-inside:avoid;page-break-inside:avoid}
.card img{width:86px;height:108px;object-fit:cover;border-radius:7px;flex:none;background:#f2f2f2}
.card h2{font-size:11.5pt;margin:0 0 2px}.dose{font-weight:700;color:#5b21b6;font-size:9.5pt;margin:0 0 3px}.often{color:#666;font-size:8.5pt;margin:0 0 4px}
.card p{margin:0}.txt{font-size:9pt}.stop{font-size:8.5pt;color:#9a3412;margin-top:4px!important}.ev{font-size:8pt;color:#555;margin-top:4px!important}
.log{margin-top:14px;break-inside:avoid}.log table{width:100%;border-collapse:collapse;font-size:9pt}.log th,.log td{border:1px solid #d8d6e0;padding:5px 6px;text-align:center}.log td:first-child,.log th:first-child{text-align:left;width:34%}
.flags{margin-top:12px;border:1.5px solid #f59e0b;border-radius:10px;padding:8px 12px;break-inside:avoid;font-size:9pt}.flags h3{margin:0 0 4px;font-size:10.5pt}.flags ul{margin:0;padding-left:16px;columns:2;column-gap:18px}
footer{margin-top:12px;font-size:8pt;color:#666;border-top:1px solid #e3e1ea;padding-top:6px}`;

const imgCache = new Map();
async function still(id) {
  if (!imgCache.has(id)) {
    const src = fs.existsSync(`public/exercises/${id}@2x.webp`) ? `public/exercises/${id}@2x.webp` : `public/exercises/${id}.webp`;
    const jpg = await sharp(src).resize({ width: 260 }).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
    imgCache.set(id, `data:image/jpeg;base64,${jpg.toString('base64')}`);
  }
  return imgCache.get(id);
}
const icon = `data:image/png;base64,${(await sharp('public/icon-128.webp').png().toBuffer()).toString('base64')}`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--disable-gpu'] });
const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
const made = [];
for (const [lang, t] of Object.entries(L)) {
  for (const [slug, s] of Object.entries(t.sheets)) {
    const g = d[lang][s.key];
    const ex = g.exercises;
    const cards = (
      await Promise.all(
        ex.map(
          async (e) =>
            `<div class="card">${e.media ? `<img src="${await still(e.media)}" alt="">` : ''}<div><h2>${esc(e.name)}</h2><p class="dose">${esc(e.dose)}</p>${e.often ? `<p class="often">${esc(e.often)}</p>` : ''}<p class="txt">${esc(e.how)}</p>${e.stop ? `<p class="stop">${t.stop}: ${esc(e.stop)}</p>` : ''}${e.evidence ? `<p class="ev">${t.evidence}: ${t.level[e.evidence.level]}. ${esc(e.evidence.why)}</p>` : ''}</div></div>`,
        ),
      )
    ).join('');
    const log = `<div class="log"><table><tr><th>${t.log}</th>${t.days.map((x) => `<th>${x}</th>`).join('')}</tr>${ex.slice(0, 6).map((e) => `<tr><td>${esc(e.name)}</td>${t.days.map(() => '<td></td>').join('')}</tr>`).join('')}<tr><td>${t.pain}</td>${t.days.map(() => '<td></td>').join('')}</tr></table></div>`;
    const flags = `<div class="flags"><h3>${esc(g.redFlags.h2)}</h3><ul>${g.redFlags.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div>`;
    const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>${s.title} (${t.printable}) | Walkito</title><style>${css}</style></head><body>
<header><img src="${icon}" alt=""><div><h1>${s.title}</h1><p class="sub">${s.sub}</p></div></header>
<p class="how"><b>${t.howLabel}:</b> ${t.how}: <b>${s.url}</b></p>
<div class="grid">${cards}</div>${log}${flags}
<footer>${t.footer}</footer></body></html>`;
    await page.setContent(html, { waitUntil: 'load' });
    const pdf = await page.pdf({ format: 'Letter', printBackground: true, margin: { top: '14mm', right: '13mm', bottom: '16mm', left: '13mm' } });
    fs.writeFileSync(`public/downloads/${slug}.pdf`, pdf);
    await page.emulateMedia({ media: 'print' });
    const shot = await page.screenshot({ clip: { x: 0, y: 0, width: 816, height: 1056 } });
    await page.emulateMedia({ media: 'screen' });
    await sharp(shot).resize({ width: 420 }).webp({ quality: 80 }).toFile(`public/downloads/${slug}.webp`);
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    made.push(`${slug}.pdf ${Math.round(pdf.length / 1024)} KB, ${pages} pages`);
  }
}
await browser.close();
console.log(made.join('\n'));
