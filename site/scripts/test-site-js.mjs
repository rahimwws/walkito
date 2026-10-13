/**
 * Browser tests for pages served without React (scripts/strip-js.mjs +
 * public/site.js). Serves out/ on a local port and checks every interactive
 * piece in headless Chromium. Run after a build:
 *
 *   bun run build && node scripts/test-site-js.mjs
 *   BASE_URL=https://walkito.site node scripts/test-site-js.mjs   (the live site)
 *
 * CHROMIUM_PATH can point at a local Chromium if Playwright's own is missing.
 * Exits 1 on the first failed check.
 */
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const OUT = process.env.OUT_DIR || fileURLToPath(new URL('../out', import.meta.url));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.mp4': 'video/mp4', '.webm': 'video/webm', '.txt': 'text/plain' };
const server = process.env.BASE_URL ? null : createServer((req, res) => {
  let p = join(OUT, decodeURIComponent(req.url.split('?')[0]));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p)) {
    res.statusCode = 404;
    return res.end(readFileSync(join(OUT, '404.html')));
  }
  res.setHeader('Content-Type', TYPES[extname(p)] || 'application/octet-stream');
  res.end(readFileSync(p));
}).listen(0);
const BASE = process.env.BASE_URL ? process.env.BASE_URL.replace(/\/$/, '') : `http://localhost:${server.address().port}`;

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--disable-gpu', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'],
});
const UA = {
  desktop: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0 Safari/537.36',
  android: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0 Mobile Safari/537.36',
  iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
};
let passed = 0;
const failures = [];
const check = (name, ok, detail = '') => {
  if (ok) passed++;
  else failures.push(`${name}${detail ? `: ${detail}` : ''}`);
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail && !ok ? ` (${detail})` : ''}`);
};
async function open(path, { width = 390, height = 844, ua = UA.android, motion = 'no-preference' } = {}) {
  const ctx = await browser.newContext({ viewport: { width, height }, userAgent: ua, reducedMotion: motion, isMobile: width < 700, hasTouch: width < 700 });
  const page = await ctx.newPage();
  const errors = [];
  const nextChunks = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && !/Failed to load resource/.test(m.text()) && errors.push(m.text()));
  page.on('request', (r) => /\/_next\/static\/chunks\/.*\.js/.test(r.url()) && nextChunks.push(r.url()));
  await page.goto(BASE + path, { waitUntil: 'load' });
  await page.waitForTimeout(300);
  return { ctx, page, errors, nextChunks };
}
const scrollTo = (page, y) => page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);

try {
  // 1. No errors, no React chunks, site.js present, on each page type.
  for (const path of ['/', '/plantar-fasciitis-exercises/', '/exercises/calf-raises/', '/ru/', '/es/ejercicios-fascitis-plantar/', '/printable-exercise-sheets/', '/about/', '/walkito-vs-exakt-health/', '/foot-pain-identifier/', '/no-such-page/']) {
    const { ctx, page, errors, nextChunks } = await open(path);
    const site = await page.locator('script[src*="/_next/static/site-"]').count();
    check(`${path} loads without React and without errors`, errors.length === 0 && nextChunks.length === 0 && site === 1, JSON.stringify({ errors, nextChunks: nextChunks.length, site }));
    await ctx.close();
  }

  // 2. Mobile menu.
  {
    const { ctx, page } = await open('/plantar-fasciitis-exercises/');
    const toggle = page.locator('.menu-toggle');
    const panel = page.locator('.menu-panel');
    const label0 = await toggle.getAttribute('aria-label');
    await toggle.click();
    const opened = (await toggle.getAttribute('aria-expanded')) === 'true' && (await panel.isVisible()) && (await toggle.getAttribute('aria-label')) !== label0;
    await page.keyboard.press('Escape');
    const closedByKey = (await toggle.getAttribute('aria-expanded')) === 'false' && !(await panel.isVisible());
    await toggle.click();
    await page.mouse.click(200, 800);
    const closedByTap = !(await panel.isVisible());
    check('mobile menu opens, Escape and outside tap close it', opened && closedByKey && closedByTap, JSON.stringify({ opened, closedByKey, closedByTap }));
    await ctx.close();
  }

  // 3. Language picker: header links go to this page's translation.
  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: UA.desktop });
    const page = await ctx.newPage();
    // As the live site: the picker only uses same-origin hreflang links.
    if (!BASE.startsWith('https://walkito.site')) await page.route('https://walkito.site/**', async (r) => {
      const res = await fetch(BASE + new URL(r.request().url()).pathname);
      r.fulfill({ status: res.status, headers: { 'content-type': res.headers.get('content-type') || 'text/html' }, body: Buffer.from(await res.arrayBuffer()) });
    });
    await page.goto('https://walkito.site/plantar-fasciitis-exercises/', { waitUntil: 'load' });
    await page.waitForTimeout(500);
    const es = await page.locator('details.lp-down a.lp-item[hreflang="es"]').first().getAttribute('href');
    const expected = await page.locator('link[rel="alternate"][hreflang="es"]').getAttribute('href');
    check('language picker links to the translated page', es && expected && expected.endsWith(es), `${es} vs ${expected}`);
    const picker = page.locator('details.lp-down').first();
    await picker.locator('summary').click();
    const opened = await picker.evaluate((d) => d.open);
    await page.mouse.click(640, 700);
    const closed = !(await picker.evaluate((d) => d.open));
    check('language picker opens and closes on outside click', opened && closed, JSON.stringify({ opened, closed }));
    await ctx.close();
  }

  // 4. Get the app: computer -> QR dialog; Android -> Google Play; iPhone -> App Store.
  {
    const { ctx, page } = await open('/', { width: 1280, height: 900, ua: UA.desktop });
    await page.locator('a[data-get-app]:visible').first().click();
    const open1 = await page.locator('dialog#get-app').evaluate((d) => d.open);
    await page.mouse.click(10, 10);
    const closed = !(await page.locator('dialog#get-app').evaluate((d) => d.open));
    check('computer: Get the app opens the QR dialog, backdrop click closes it', open1 && closed, JSON.stringify({ open1, closed }));
    await ctx.close();
  }
  for (const [who, ua, host] of [['Android', UA.android, 'play.google.com'], ['iPhone', UA.iphone, 'apps.apple.com']]) {
    const { ctx, page } = await open('/plantar-fasciitis-exercises/', { ua });
    const android = await page.locator('a[data-get-app]').first().getAttribute('data-android');
    let went = '';
    await page.route(/(play\.google\.com|apps\.apple\.com)/, (r) => {
      went = r.request().url();
      r.fulfill({ status: 200, body: 'store' });
    });
    await page.locator('.menu-toggle').click();
    await page.locator('.menu-panel a[data-get-app]').click();
    await page.waitForTimeout(500);
    const ok = who === 'Android' && !android ? went.includes('apps.apple.com') : went.includes(host);
    check(`${who}: Get the app goes to the right store`, ok, went || 'no navigation');
    await ctx.close();
  }

  // 5. Floating header and back to top.
  {
    const { ctx, page } = await open('/plantar-fasciitis-exercises/');
    await scrollTo(page, 1200);
    await page.waitForTimeout(200);
    const scrolled = await page.evaluate(() => 'scrolled' in document.documentElement.dataset);
    const headH = await page.evaluate(() => document.documentElement.style.getPropertyValue('--head-h'));
    await scrollTo(page, 100000);
    await page.waitForTimeout(300);
    await page.locator('a[data-back-to-top]').click();
    // Smooth scroll up a long page: wait up to 4 s for it to arrive.
    let top = -1;
    for (let i = 0; i < 20 && top !== 0; i++) {
      await page.waitForTimeout(200);
      top = await page.evaluate(() => Math.round(window.scrollY));
    }
    await page.waitForTimeout(200);
    const unscrolled = await page.evaluate(() => !('scrolled' in document.documentElement.dataset));
    check('floating header turns into the capsule on scroll', scrolled && !!headH, JSON.stringify({ scrolled, headH }));
    check('back to top scrolls to the top', top < 5 && unscrolled, `scrollY ${top}`);
    await ctx.close();
  }

  // 6. Home: InView, ScrollProgress, FeatureScroller.
  {
    const { ctx, page } = await open('/');
    const sections = await page.locator('[data-inview]').count();
    const js = await page.locator('[data-inview][data-js]').count();
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 500) {
      await scrollTo(page, y);
      await page.waitForTimeout(40);
    }
    await page.waitForTimeout(300);
    const seen = await page.locator('[data-inview][data-seen]').count();
    check(`home: ${sections} reveal sections are all marked seen after scrolling`, sections > 3 && js === sections && seen === sections, JSON.stringify({ sections, js, seen }));
    const p = await page.locator('[data-scroll-progress]').evaluate((el) => el.style.getPropertyValue('--p'));
    check('home: story section progress runs to the end', p === '1.0000', `--p ${p}`);

    const feat = page.locator('section.feat-scroll');
    const top = await feat.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
    const travel = await feat.evaluate((el) => el.offsetHeight - window.innerHeight);
    const titles = [];
    const shots = [];
    for (const f of [0.1, 0.45, 0.8]) {
      await scrollTo(page, top + travel * f);
      await page.waitForTimeout(250);
      titles.push(await page.locator('.feat-current .feat-title').textContent());
      shots.push(await page.locator('.feat-shot-card > [data-on]:not(.feat-extras)').count());
    }
    const pressed = await page.locator('.feat-item[aria-pressed="true"]').count();
    const expected = await page.locator('.feat-item').evaluateAll((b) => b.map((x) => x.dataset.title));
    check('home: feature scroller swaps title and screenshot with the scroll', JSON.stringify(titles) === JSON.stringify([0.1, 0.45, 0.8].map((f) => expected[Math.min(expected.length - 1, Math.floor(f * expected.length))])) && shots.every((n) => n === 1) && pressed === 1, JSON.stringify({ titles, expected, shots, pressed }));
    await scrollTo(page, top);
    await page.waitForTimeout(200);
    await page.locator('.feat-item').nth(2).click();
    await page.waitForTimeout(1500);
    const jumped = await page.locator('.feat-current .feat-title').textContent();
    check('home: feature buttons jump to their feature', jumped === expected[2], `${jumped} vs ${expected[2]}`);
    await ctx.close();
  }

  // 7. Exercise clips start when scrolled near.
  {
    const { ctx, page } = await open('/plantar-fasciitis-exercises/');
    const figures = await page.locator('figure[data-exercise]').count();
    const before = await page.locator('figure[data-exercise] video').count();
    await page.locator('figure[data-exercise]').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const video = page.locator('figure[data-exercise] video').first();
    const after = await page.locator('figure[data-exercise] video').count();
    const src = await video.locator('source').first().getAttribute('src');
    const muted = await video.evaluate((v) => v.muted && v.loop && v.autoplay);
    check('exercise clips appear when scrolled near (muted, looping)', figures > 0 && before === 0 && after >= 1 && /\/exercises\/.+\.webm$/.test(src) && muted, JSON.stringify({ figures, before, after, src, muted }));
    await ctx.close();
    const r = await open('/plantar-fasciitis-exercises/', { motion: 'reduce' });
    await r.page.locator('figure[data-exercise]').first().scrollIntoViewIfNeeded();
    await r.page.waitForTimeout(400);
    check('exercise clips stay still with reduced motion', (await r.page.locator('figure[data-exercise] video').count()) === 0);
    await r.ctx.close();
  }

  // 8. Email signup: success, already, too many, error.
  for (const [name, status, body, expect] of [
    ['success', 200, { ok: true }, 'Check your inbox for a confirmation email.'],
    ['already', 200, { ok: true, already: true }, 'You are already signed up. Check your inbox.'],
    ['too many', 429, { ok: false }, 'Too many attempts. Try again tomorrow.'],
    ['error', 500, { ok: false }, 'Something went wrong. Try again, or email us at '],
  ]) {
    const { ctx, page } = await open('/printable-exercise-sheets/');
    const url = await page.locator('[data-email-signup]').getAttribute('data-url');
    let sent = null;
    await page.route(url, (r) => {
      sent = JSON.parse(r.request().postData());
      r.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });
    });
    await page.locator('[data-email-signup] input[name="email"]').fill('test@example.com');
    await page.locator('[data-email-signup] button[type="submit"]').click();
    await page.waitForTimeout(400);
    const text = await page.locator('.email-signup').first().innerText();
    const payloadOk = sent && sent.email === 'test@example.com' && sent.locale === 'en' && sent.source === 'printables' && sent.page === '/printable-exercise-sheets/';
    check(`email signup: ${name}`, payloadOk && text.includes(expect.trim()), JSON.stringify({ sent, text: text.slice(0, 120) }));
    await ctx.close();
  }

  // 9. Guide tools (lib/vanilla/tools.ts).
  {
    const { ctx, page, errors, nextChunks } = await open('/calf-raise-test/?utm_source=chatgpt.com');
    const t = page.locator('[data-tool="calf-calc"]');
    await t.locator('input[name="age"]').fill('40');
    await t.locator('input[name="left"]').fill('20');
    await t.locator('input[name="right"]').fill('25');
    await t.locator('form button').click();
    const text = (await t.locator('[data-tool-result]').innerText()).replace(/\s+/g, ' ');
    const ct = await t.locator('[data-tool-result] a[href*="apps.apple.com"]').evaluateAll((a) => a.map((x) => new URL(x.href).searchParams.get('ct')));
    check(
      'calf raise calculator gives the result, balance and App Store badge',
      text.includes('Typical count for a moderately active woman aged 40: about 25 raises per leg.') && text.includes('Left leg: 20, below the typical count') && text.includes('Left-right balance: 80%.') && ct.length === 1 && ct[0] === 'ai-chatgpt' && errors.length === 0 && nextChunks.length === 0,
      JSON.stringify({ text: text.slice(0, 160), ct, errors, nextChunks: nextChunks.length }),
    );
    await t.locator('input[name="age"]').fill('15');
    await t.locator('form button').click();
    const young = await t.locator('[data-tool-result]').innerText();
    check('calf raise calculator refuses under 18', young.includes('starts at age 18'), young.slice(0, 80));
    await t.locator('input[type="radio"][value="male"]').check({ force: true });
    const on = await t.locator('label.on input').getAttribute('value');
    check('calf raise calculator sex switch highlights the choice', on === 'male', on);
    await ctx.close();
  }
  {
    const { ctx, page, errors } = await open('/how-long-does-plantar-fasciitis-last/');
    const t = page.locator('[data-tool="pf-timeline"]');
    await t.locator('button[data-stage="years"]').click();
    const text = await t.locator('[data-tool-result]').innerText();
    const pressed = await t.locator('button[aria-pressed="true"]').getAttribute('data-stage');
    const lit = await t.locator('.pf-timeline-chart li').evaluateAll((l) => l.map((x) => x.className === 'is-lit'));
    check('recovery timeline shows the stage, presses its button, lights years 1 and 5', text.includes('80.5 percent at one year') && pressed === 'years' && JSON.stringify(lit) === '[true,true,false,false]' && errors.length === 0, JSON.stringify({ pressed, lit, errors }));
    await t.locator('button[data-stage="early"]').click();
    const latt = await t.locator('.pf-timeline-latt').getAttribute('class');
    check('recovery timeline lights the 3-6 month note for early stages', latt.includes('is-lit'), latt);
    await ctx.close();
  }

  // 10. AI referral tags App Store links.
  {
    const { ctx, page } = await open('/?utm_source=chatgpt.com');
    const hrefs = await page.locator('a[href*="apps.apple.com"][href*="ct="]').evaluateAll((a) => a.map((x) => new URL(x.href).searchParams.get('ct')));
    check('AI referral tags App Store links', hrefs.length > 0 && hrefs.every((c) => c === 'ai-chatgpt'), JSON.stringify(hrefs.slice(0, 3)));
    await ctx.close();
  }
} finally {
  await browser.close();
  server?.close();
}
console.log(`\n${passed} passed, ${failures.length} failed`);
if (failures.length) {
  for (const f of failures) console.log(`  - ${f}`);
  process.exit(1);
}
