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
 * utility pages an email or a QR code links to. A stripped page's RSC payload
 * files (index.txt, __next.*.txt) are deleted with it.
 *
 * Fails the build if a stripped page still holds any Next runtime, so a Next
 * upgrade that changes its output cannot ship half-stripped pages.
 * Runs last in `postbuild`, under Bun (for Bun.build). Deterministic: same
 * input, same output.
 */
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative, sep } from 'node:path';
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

/**
 * Next's RSC payload files beside each page's index.html: `index.txt` and the
 * segment files `__next._full.txt`, `__next._tree.txt`, `__next.<segment>.txt`.
 * Only the Next router reads them, so once a page has no React they are dead
 * weight that the server still answers with 200 (/flat-feet/index.txt was
 * 116 KB), and the deploy uploads and precompresses them for nothing. The
 * pages that keep React keep theirs.
 */
const PAYLOAD = /^(?:index|__next\..+)\.txt$/;
const strippedDirs = new Set();

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
  // The payload files in a folder belong to its index.html (out/ itself is the
  // home page's), so 404.html stripping does not touch the home page's.
  if (basename(file) === 'index.html') strippedDirs.add(dirname(file));
}
if (stripped < 400) throw new Error(`strip-js: only ${stripped} pages stripped; expected the whole site`);

let payloads = 0;
let payloadBytes = 0;
for (const dir of strippedDirs) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!PAYLOAD.test(name) || !statSync(p).isFile()) continue;
    payloadBytes += statSync(p).size;
    rmSync(p);
    payloads++;
  }
}
// Next 16 writes them for every page; none found means its output changed.
if (payloads === 0) console.warn('strip-js: no RSC payload files found beside the stripped pages; check the Next output format');

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(`strip-js: ${stripped} pages without React (HTML ${kb(before)} -> ${kb(after)}), ${kept} kept, ${payloads} payload files removed (${kb(payloadBytes)}), ${siteJs}, ${toolsJs} (${toolsCode.length} bytes)`);
if (!existsSync(join(OUT, siteJs))) throw new Error('strip-js: site.js missing');
