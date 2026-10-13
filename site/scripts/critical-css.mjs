/**
 * Critical CSS: every page carries the rules its own markup uses in a <style>
 * in <head>, and the full stylesheets load without holding up the first paint.
 *
 * Why: each page linked 3-5 render-blocking stylesheets (about 100-175 KB raw),
 * most of it rules for other pages (home hero on an article, guide widgets on
 * home). On a phone the first paint waited for all of them
 * (walkito-seo/research/speed/w2-6-diagnosis.md).
 *
 * Not the same as Next's `experimental.inlineCss` (PR #13, removed): that put
 * every rule of every stylesheet in every page, twice (a <style> plus the RSC
 * payload). Here only the rules that match the page's own elements are inlined,
 * once, and the stylesheet links stay (`media="print"` swapped to `all` on load),
 * so the files are still cached across pages and React still finds them.
 *
 * Runs as part of `postbuild`, after stable-build-id.mjs, so local and CI builds
 * match. Deterministic: the same page and CSS give the same output, so unchanged
 * pages stay byte-identical and are not re-uploaded.
 */
import Beasties from 'beasties';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../out', import.meta.url));

const walk = (dir, files = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== '_next') walk(p, files);
    } else if (name.endsWith('.html')) files.push(p);
  }
  return files;
};

const beasties = new Beasties({
  path: OUT,
  publicPath: '/',
  // Keep rel="stylesheet" (React matches its links by href and precedence);
  // load them as media="print" and switch to "all" once loaded.
  preload: 'media',
  noscriptFallback: true,
  // The stylesheet files are shared and cached; never strip rules from them.
  pruneSource: false,
  // Fonts are handled by next/font (one preloaded face per page).
  // @font-face rules (and the size-matched fallbacks) are inlined so the
  // first paint uses the right metrics; next/font already preloads the one
  // face a page needs, so no extra preloads.
  inlineFonts: true,
  preloadFonts: false,
  // The CSS minifier rewrites selector lists as :is(... :has(...)), which
  // Beasties cannot match and silently drops (the phone layout of exercise
  // cards went missing). Rules using these are always kept.
  allowRules: [/:is\(/, /:has\(/, /:where\(/],
  keyframes: 'critical',
  compress: true,
  logLevel: 'warn',
});

// Beasties keeps only the @font-face rules it can tie to a family used in the
// inlined rules; families set through var(--font-display) are missed, and a
// headline painted in the wrong face reflows when the stylesheet arrives
// (layout shift 0.22 on home). So every @font-face rule of the page's own
// stylesheets goes into the inlined block. They are small (1-2 KB).
const cssCache = new Map();
const fontFacesFor = (html) => {
  const hrefs = [...html.matchAll(/<link rel="stylesheet" href="(\/_next\/static\/[^"]+\.css)"/g)].map((m) => m[1]);
  const rules = [];
  for (const href of hrefs) {
    if (!cssCache.has(href)) {
      const css = readFileSync(join(OUT, href), 'utf8');
      // Relative font URLs (../media/x.woff2) resolve against the stylesheet;
      // inlined in the page they must be absolute.
      const base = href.slice(0, href.lastIndexOf('/') + 1);
      const faces = (css.match(/@font-face\{[^}]*\}/g) || []).map((rule) =>
        rule.replace(/url\((?!["']?(?:\/|data:|https?:))(["']?)/g, (_, q) => `url(${q}${base}`),
      );
      cssCache.set(href, faces);
    }
    for (const rule of cssCache.get(href)) if (!rules.includes(rule)) rules.push(rule);
  }
  return rules.join('');
};

const files = walk(OUT);
let before = 0;
let after = 0;
let done = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('rel="stylesheet"')) continue;
  let result = await beasties.process(html);
  const faces = fontFacesFor(html);
  if (faces) {
    // Beasties' own copies of these rules are dropped; one set, first.
    result = result.replace(/<style>([\s\S]*?)<\/style>/, (_, css) => `<style>${faces}${css.replace(/@font-face\{[^}]*\}/g, '')}</style>`);
    if (!result.includes(faces)) throw new Error(`critical-css: no inlined <style> in ${relative(OUT, file)}`);
  }
  before += html.length;
  after += result.length;
  writeFileSync(file, result);
  done++;
}
if (done === 0) throw new Error('critical-css: no pages processed');
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(`critical-css: ${done} pages, HTML ${kb(before)} -> ${kb(after)} (${relative(process.cwd(), OUT)})`);
