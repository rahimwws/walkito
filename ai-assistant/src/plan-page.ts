/**
 * `walkito.site/p/<CODE>`: where "Continue this plan in Walkito" lands.
 *
 * With the app installed, the universal link opens it before this page loads
 * (once the app handles `/p/` and the site's apple-app-site-association lists
 * it). Otherwise this page: what the plan is, the App Store button, the code to
 * copy, and a link that opens the app if it is there after all. The store
 * button and the code work without JavaScript; only "copy" needs it.
 */
import { decodePlanCode, type PlanCodeParams } from '@/shared/lib/plan-code';

import type { Lang } from './content';
import { COPY } from './copy';

const APP_STORE = 'https://apps.apple.com/app/id6813076846';

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function storeLink(source: PlanCodeParams['source']): string {
  const url = new URL(APP_STORE);
  url.searchParams.set('pt', '126870927');
  url.searchParams.set('ct', `ai-${source}`);
  url.searchParams.set('mt', '8');
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', 'ai_app');
  url.searchParams.set('utm_campaign', 'plan_code');
  return url.toString();
}

const STYLE = `
:root{color-scheme:dark;--bg:#111113;--card:#1c1c1f;--ink:#fff;--muted:rgba(255,255,255,.62);--line:rgba(255,255,255,.1);--primary:#8b5cf6}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--ink);font-family:ui-rounded,-apple-system,"SF Pro Rounded",system-ui,"Nunito",sans-serif}
main{max-width:520px;margin:0 auto;padding:40px 16px 48px;display:grid;gap:16px}
.brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:20px}.brand img{width:40px;height:40px;border-radius:11px}
h1{margin:8px 0 0;font-size:30px;line-height:1.1;letter-spacing:-.5px}
.card{background:var(--card);border-radius:24px;padding:18px 20px;display:grid;gap:10px}
.row{display:flex;justify-content:space-between;gap:12px;font-size:16px}.row span:first-child{color:var(--muted)}
.btn{display:flex;align-items:center;justify-content:center;gap:10px;min-height:56px;border-radius:18px;font-size:17px;font-weight:700;text-decoration:none}
.btn-store{background:#fff;color:#111114}.btn-open{background:var(--primary);color:#fff}
.code{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:20px;font-weight:700;letter-spacing:1px}
.code button{min-height:44px;padding:0 16px;border:0;border-radius:14px;background:rgba(255,255,255,.1);color:#fff;font:inherit;font-size:15px;letter-spacing:0;cursor:pointer}
p{margin:0;color:var(--muted);font-size:15px;line-height:1.5}.small{font-size:13px}
@supports (corner-shape:superellipse(1.5)){.card,.btn,.code button{corner-shape:superellipse(1.5)}}`;

const APPLE =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.36 12.73c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.2-2.48-.03-.01-2.3-.88-2.33-3.5zM14.2 6.1c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.58-1.21z"/></svg>';

function shell(lang: Lang, title: string, body: string): string {
  return `<!doctype html><html lang="${COPY[lang].page.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)}</title><link rel="icon" href="/favicon.png"><style>${STYLE}</style></head><body><main><div class="brand"><img src="/icon-96.webp" alt="" width="40" height="40">Walkito</div>${body}<p class="small">${esc(COPY[lang].disclaimer)}</p></main></body></html>`;
}

/** The page for a code, in the chat's language (`?l=` from the button, else
 * the browser's), English by default. */
export function planPage(raw: string, lang: Lang = 'en'): { status: number; html: string; source?: string } {
  const c = COPY[lang].page;
  const plan = decodePlanCode(raw);
  if (!plan) {
    return {
      status: 404,
      html: shell(
        lang,
        `${c.notFoundTitle} · Walkito`,
        `<h1>${esc(c.notFoundTitle)}</h1><p>${esc(c.notFoundBody)}</p><a class="btn btn-store" href="${esc(storeLink('other'))}">${APPLE}${esc(c.store)}</a>`,
      ),
    };
  }
  const code = `WK-${raw.replace(/^WK-?/i, '').toUpperCase()}`;
  const kit = plan.equipment.length ? plan.equipment.map((e) => c.kit[e]).join(', ') : c.none;
  const body = `
<h1>${esc(c.ready)}</h1>
<div class="card">
  <div class="row"><span>${esc(c.areaRow)}</span><span>${esc(COPY[lang].area[plan.area])}</span></div>
  <div class="row"><span>${esc(c.eachDay)}</span><span>${esc(c.minutes(plan.minutes))}</span></div>
  <div class="row"><span>${esc(c.daysRow)}</span><span>${plan.days}</span></div>
  <div class="row"><span>${esc(c.kitRow)}</span><span>${esc(kit)}</span></div>
  <div class="row"><span>${esc(c.sideRow)}</span><span>${esc(c.side[plan.side])}</span></div>
</div>
<a class="btn btn-store" href="${esc(storeLink(plan.source))}">${APPLE}${esc(c.store)}</a>
<a class="btn btn-open" href="walkito://plan?code=${encodeURIComponent(code)}">${esc(c.open)}</a>
<div class="card">
  <div class="code"><span id="code">${esc(code)}</span><button type="button" id="copy">${esc(c.copy)}</button></div>
  <p>${esc(c.howTo)}</p>
</div>
<p class="small">${esc(c.android)}</p>
<script>document.getElementById('copy').onclick=function(){var b=this;navigator.clipboard&&navigator.clipboard.writeText(${JSON.stringify(code)}).then(function(){b.textContent=${JSON.stringify(c.copied)}})};</script>`;
  return { status: 200, html: shell(lang, `${c.title} · ${code}`, body), source: plan.source };
}
