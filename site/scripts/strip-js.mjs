/**
 * Pages without React: removes Next's runtime from the built HTML and loads
 * one small plain script (public/site.js) instead.
 *
 * Why: every page shipped about 150-167 KB of compressed JavaScript (React,
 * the Next router, page chunks) plus an inline copy of the page as data
 * (`self.__next_f`, about 60% of each HTML file), to make interactive a page
 * whose only interactive parts are a menu, a language picker, a dialog and a
 * few scroll effects. A local test (walkito-seo/research/speed/w2-8) moved the
 * main content on phones from 2.4-2.9 s to about 1.7 s with the same text.
 *
 * Pages with a guide tool (calf raise calculator, recovery timeline) also get
 * lib/vanilla/tools.ts, bundled here with Bun. What stays on React: the four
 * utility pages an email or a QR code links to.
 *
 * Fails the build if a stripped page still holds any Next runtime, so a Next
 * upgrade that changes its output cannot ship half-stripped pages.
 * Runs last in `postbuild`, under Bun (for Bun.build). Deterministic: same
 * input, same output.
 */
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../out', import.meta.url));
const SRC = join(OUT, 'site.js');

// Utility pages (email and QR targets) keep React: each is one small client component.
const KEEP_PATHS = ['get', 'open', 'subscribed', 'unsubscribe'];

const walk = (dir, files = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== '_next') walk(p, files);
    } else if (name.endsWith('.html')) files.push(p);
  }
  return files;
};

// site.js under /_next/static/ with a content hash: cached for a year by the
// same server rule as Next's own files, and a new name whenever it changes.
const code = readFileSync(SRC);
const hash = createHash('sha256').update(code).digest('hex').slice(0, 12);
const siteJs = `/_next/static/site-${hash}.js`;
writeFileSync(join(OUT, siteJs), code);
rmSync(SRC);

const built = await Bun.build({
  entrypoints: [fileURLToPath(new URL('../lib/vanilla/tools.ts', import.meta.url))],
  target: 'browser',
  format: 'iife',
  minify: true,
});
if (!built.success) throw new Error(`strip-js: tools bundle failed: ${built.logs.join('; ')}`);
const toolsCode = Buffer.from(await built.outputs[0].arrayBuffer());
const toolsJs = `/_next/static/tools-${createHash('sha256').update(toolsCode).digest('hex').slice(0, 12)}.js`;
writeFileSync(join(OUT, toolsJs), toolsCode);

const strip = (html) =>
  html
    // Next's chunk scripts (async and nomodule polyfills).
    .replace(/<script\b[^>]*\bsrc="\/_next\/[^"]*"[^>]*><\/script>/g, '')
    // The inline RSC payload and Next's inline bootstrap.
    .replace(/<script>\(?self\.__next_f[\s\S]*?<\/script>/g, '')
    .replace(/<script>\$R[CSX]?[\s\S]*?<\/script>/g, '')
    // Preloads for scripts that no longer load.
    .replace(/<link\b(?=[^>]*\bas="script")[^>]*>/g, '')
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/g, '');

const LEFTOVER = [/\/_next\/static\/chunks\/[^"']*\.js/, /__next_f/, /<link\b[^>]*rel="modulepreload"/];

let stripped = 0;
let kept = 0;
let before = 0;
let after = 0;
for (const file of walk(OUT)) {
  const rel = relative(OUT, file);
  const html = readFileSync(file, 'utf8');
  const keepPath = KEEP_PATHS.includes(rel.split(sep)[0]);
  if (keepPath || !html.includes('__next_f')) {
    kept++;
    continue;
  }
  let out = strip(html);
  for (const re of LEFTOVER) {
    if (re.test(out)) throw new Error(`strip-js: Next runtime left in ${rel} (${re}); check the Next output format`);
  }
  if (!out.includes('</body>')) throw new Error(`strip-js: no </body> in ${rel}`);
  const tools = out.includes('data-tool="') ? `<script src="${toolsJs}" defer></script>` : '';
  out = out.replace('</body>', `<script src="${siteJs}" defer></script>${tools}</body>`);
  before += html.length;
  after += out.length;
  writeFileSync(file, out);
  stripped++;
}
if (stripped < 400) throw new Error(`strip-js: only ${stripped} pages stripped; expected the whole site`);
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(`strip-js: ${stripped} pages without React (HTML ${kb(before)} -> ${kb(after)}), ${kept} kept, ${siteJs}, ${toolsJs} (${toolsCode.length} bytes)`);
if (!existsSync(join(OUT, siteJs))) throw new Error('strip-js: site.js missing');
