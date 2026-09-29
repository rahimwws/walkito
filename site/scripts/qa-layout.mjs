// Layout test: every page in the sitemap at six widths.
//
//   bun run build && (serve out/ on a port) && bun run qa
//   QA_BASE=http://localhost:3002 node scripts/qa-layout.mjs [path-filter]
//
// Reports, per page and width:
// - horizontal-scroll   the page is wider than the window
// - text-outside-view   a word sits past the edge of the window
// - text-overflows-box  a word sticks out of the box it is in (button, card, nav item, heading)
// - word-split          one word drawn on two lines; hyphenated-word-split when it broke at a hyphen
// - heading-lone-word   a heading of several lines with a line holding a single word
//
// Every <details> is opened first, so FAQ answers are measured too. Full-page
// screenshots go to qa/<lang>/<page>-<width>.png (gitignored), the findings to
// qa/report.json. Exits 1 if there is anything to report.
//
// Runs the installed Google Chrome (`channel: 'chrome'`), so there is no
// browser download; set QA_CHANNEL= to use Playwright's own Chromium instead.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium } from 'playwright';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const BASE = process.env.QA_BASE ?? 'http://localhost:3002';
const WIDTHS = [320, 375, 390, 768, 1024, 1440];
const filter = process.argv[2];

const sitemap = readFileSync(join(root, 'out/sitemap.xml'), 'utf8');
const paths = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)]
  .map((m) => m[1] || '/')
  .filter((p) => !filter || p.includes(filter));

/** Runs in the page: every finding for the current layout. */
function measure() {
  const found = [];
  const W = document.documentElement.clientWidth;
  const doc = document.documentElement;
  if (doc.scrollWidth > W + 1) found.push({ type: 'horizontal-scroll', text: `${doc.scrollWidth}px wide in a ${W}px window` });

  const label = (el) => {
    const cls = [...el.classList].slice(0, 2).map((c) => `.${c}`).join('');
    return `${el.tagName.toLowerCase()}${cls}`;
  };
  const scrollerOf = (el) => {
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
      if (/(auto|scroll)/.test(getComputedStyle(a).overflowX)) return a;
    }
    return null;
  };
  const blockOf = (el) => {
    let b = el;
    while (b.parentElement && getComputedStyle(b).display.startsWith('inline')) b = b.parentElement;
    return b;
  };
  const WORD = /[\p{L}\p{N}][\p{L}\p{N}'’‑-]*[\p{L}\p{N}]|[\p{L}\p{N}]/gu;

  /** Rects of each word in a text node, as [{ word, rects }]. */
  const wordsIn = (node) =>
    [...node.data.matchAll(WORD)].map((m) => {
      const range = document.createRange();
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      return { word: m[0], rects: [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0) };
    });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const el = node.parentElement;
    if (!el || !node.data.trim() || el.closest('script, style, noscript, svg')) continue;
    if (!el.getClientRects().length || getComputedStyle(el).visibility === 'hidden') continue;
    const box = blockOf(el);
    const b = box.getBoundingClientRect();
    if (b.width <= 2 || b.height <= 2) continue; // visually hidden text
    const scroller = scrollerOf(el);
    for (const { word, rects } of wordsIn(node)) {
      if (rects.length === 0) continue;
      if (new Set(rects.map((r) => Math.round(r.top))).size > 1) {
        found.push({ type: /[-‑]/.test(word) ? 'hyphenated-word-split' : 'word-split', text: word, where: label(box) });
      }
      for (const r of rects) {
        if (!scroller && (r.right > W + 0.5 || r.left < -0.5)) {
          found.push({ type: 'text-outside-view', text: word, where: label(box) });
          break;
        }
        if (r.right > b.right + 1 || r.left < b.left - 1) {
          found.push({ type: 'text-overflows-box', text: word, where: label(box) });
          break;
        }
      }
    }
  }

  // Headings. A line holding one word is a widow, but only when some other set
  // of breaks would avoid it: the heading's own units (words, or words glued
  // by non-breaking spaces) are measured, and a lone word is reported only if
  // they can be laid out at this width with at least two words on every line.
  // Otherwise it is listed as unavoidable (a two-word heading wider than the
  // column, or a long word next to a long glued phrase), not as an issue.
  const probe = (h, text) => {
    const s = document.createElement('span');
    s.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;left:0;top:0';
    s.textContent = text;
    h.appendChild(s);
    const w = s.getBoundingClientRect().width;
    s.remove();
    return w;
  };
  const feasible = (h, text, width) => {
    const units = text.split(/[ \n\t]+/).filter(Boolean);
    if (units.length === 0) return true;
    const words = units.map((u) => u.split('\u00a0').filter(Boolean).length);
    if (words.reduce((a, b) => a + b, 0) < 2) return true;
    const w = units.map((u) => probe(h, u));
    const space = probe(h, 'x x') - probe(h, 'xx');
    const ok = new Array(units.length + 1).fill(false);
    ok[units.length] = true;
    for (let i = units.length - 1; i >= 0; i--) {
      let line = -space;
      let count = 0;
      for (let j = i; j < units.length; j++) {
        line += space + w[j];
        count += words[j];
        if (line > width + 0.5) break;
        if ((count >= 2 || (i === 0 && j === units.length - 1)) && ok[j + 1]) ok[i] = true;
      }
    }
    return ok[0];
  };
  for (const h of document.querySelectorAll('h1, h2, h3')) {
    if (!h.getClientRects().length) continue;
    const lines = [];
    const hw = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    for (let node = hw.nextNode(); node; node = hw.nextNode()) {
      for (const { word, rects } of wordsIn(node)) {
        for (const r of rects) {
          const line = lines.find((l) => Math.abs(l.top - r.top) < r.height / 2);
          if (line) line.words.push(word);
          else lines.push({ top: r.top, words: [word] });
        }
      }
    }
    const lone = lines.length > 1 ? lines.filter((l) => l.words.length === 1) : [];
    if (lone.length === 0) continue;
    // Blocks inside the heading (the hero's second line is a block span) break separately.
    const cs = getComputedStyle(h);
    const width = h.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const blocks = [''];
    for (const child of h.childNodes) {
      if (child.nodeType === 1 && getComputedStyle(child).display === 'block') blocks.push(child.textContent, '');
      else blocks[blocks.length - 1] += child.textContent;
    }
    const avoidable = blocks.every((b) => feasible(h, b.trim(), width));
    for (const line of lone) {
      found.push({
        type: avoidable ? 'heading-lone-word' : 'note-unavoidable-lone-word',
        text: line.words[0],
        where: `${label(h)}: ${h.textContent.trim().slice(0, 60)}`,
      });
    }
  }

  // One entry per distinct finding.
  const seen = new Set();
  return found.filter((f) => {
    const key = `${f.type}|${f.text}|${f.where}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const browser = await chromium.launch(process.env.QA_CHANNEL === '' ? {} : { channel: process.env.QA_CHANNEL ?? 'chrome' });
const report = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  for (const path of paths) {
    const lang = path.startsWith('/ru/') ? 'ru' : path.startsWith('/es/') ? 'es' : 'en';
    const slug = path.replace(/^\/(ru|es)\//, '/').replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (const d of document.querySelectorAll('details')) d.open = true;
    });
    const findings = await page.evaluate(measure);
    mkdirSync(join(root, 'qa', lang), { recursive: true });
    await page.screenshot({ path: join(root, 'qa', lang, `${slug}-${width}.png`), fullPage: true });
    for (const f of findings) report.push({ path, width, ...f });
    const count = findings.filter((f) => !f.type.startsWith('note-')).length;
    process.stdout.write(count ? `\n${path} @${width}: ${count} issue(s)` : '.');
  }
  await context.close();
}
await browser.close();

writeFileSync(join(root, 'qa/report.json'), JSON.stringify(report, null, 2));
const issues = report.filter((f) => !f.type.startsWith('note-'));
const notes = report.filter((f) => f.type.startsWith('note-'));
console.log(`\n\n${paths.length} pages x ${WIDTHS.length} widths = ${paths.length * WIDTHS.length} layouts, ${issues.length} issues, ${notes.length} notes`);
for (const [type, list] of Object.entries(Object.groupBy(report, (f) => f.type))) console.log(`  ${type}: ${list.length}`);
for (const f of [...issues, ...notes].slice(0, 120)) console.log(`  ${f.path} @${f.width} ${f.type} "${f.text}" ${f.where ?? ''}`);
process.exit(issues.length ? 1 : 0);
