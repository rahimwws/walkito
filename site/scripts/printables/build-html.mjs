import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync('/tmp/pdfdata.json', 'utf8'));
const plain = (t = '') => t.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const esc = (t = '') => plain(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const LABEL = { strong: 'Strong', moderate: 'Moderate', early: 'Early', unsupported: 'Not supported' };
const sheets = {
  'plantar-fasciitis-exercises': { d: d.pf, title: 'Plantar fasciitis exercises', sub: 'Stretches and calf strength for heel pain. A printable sheet from walkito.site.', url: 'walkito.site/plantar-fasciitis-exercises' },
  'flat-feet-exercises': { d: d.flat, title: 'Flat feet exercises', sub: 'Arch and foot strength, step by step. A printable sheet from walkito.site.', url: 'walkito.site/flat-feet-exercises' },
  'standing-all-day-exercises': { d: d.standing, title: 'Exercises for feet that hurt from standing', sub: 'For long shifts on your feet. A printable sheet from walkito.site.', url: 'walkito.site/feet-hurt-standing-all-day' },
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
for (const [slug, s] of Object.entries(sheets)) {
  const ex = s.d.exercises;
  const cards = ex.map(e => `<div class="card">${e.media ? `<img src="/img/${e.media}.jpg" alt="">` : ''}<div><h2>${esc(e.name)}</h2><p class="dose">${esc(e.dose)}</p>${e.often ? `<p class="often">${esc(e.often)}</p>` : ''}<p class="txt">${esc(e.how)}</p>${e.stop ? `<p class="stop">Stop if: ${esc(e.stop)}</p>` : ''}${e.evidence ? `<p class="ev">Evidence: ${LABEL[e.evidence.level]}. ${esc(e.evidence.why)}</p>` : ''}</div></div>`).join('');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const log = `<div class="log"><table><tr><th>Week log: tick what you did</th>${days.map(x => `<th>${x}</th>`).join('')}</tr>${ex.slice(0, 6).map(e => `<tr><td>${esc(e.name)}</td>${days.map(() => '<td></td>').join('')}</tr>`).join('')}<tr><td>Morning pain (0 to 10)</td>${days.map(() => '<td></td>').join('')}</tr></table></div>`;
  const flags = `<div class="flags"><h3>${esc(s.d.redFlags.h2)}</h3><ul>${s.d.redFlags.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div>`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${s.title} (printable) | Walkito</title><style>${css}</style></head><body>
<header><img src="https://walkito.site/icon.png" alt=""><div><h1>${s.title}</h1><p class="sub">${s.sub}</p></div></header>
<p class="how"><b>How to use this sheet:</b> start with the easier exercises and the lower dose. Mild discomfort is fine; sharp pain is not. If an exercise makes the pain worse the next morning, drop back a step. The doses are Walkito's starting doses, not a prescription. Full guide with videos and the studies: <b>${s.url}</b></p>
<div class="grid">${cards}</div>${log}${flags}
<footer>Walkito Research · walkito.site · This sheet is general exercise information. It does not diagnose and does not replace a clinician. Updated October 2026.</footer></body></html>`;
  fs.writeFileSync(`${slug}.html`, html);
}
console.log('built', Object.keys(sheets).join(', '));
