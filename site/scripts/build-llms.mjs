/**
 * Regenerates `public/llms.txt` and `public/llms-full.txt` from the site's own
 * data: the plan's numbers (`lib/site.ts`), the page table (`lib/i18n.ts`), the
 * six guides, the About page, the FAQ and the citations.
 *
 * Wired into `prebuild` rather than run by hand, because it was run by hand
 * once and immediately went stale: eight clinical answers were added to
 * `lib/faq.ts` and the published file still carried the previous eighteen. It
 * went stale a second time when the plan stopped having a length — both files
 * kept describing a fixed-length program to every AI engine that read them,
 * weeks after the app had dropped it. A file that claims to be the full text and is
 * not is worse than no file: it is the version an AI engine reads.
 *
 * It imports the TypeScript sources directly. Node runs `.ts` natively from
 * 22.18 / 23.6 by stripping the types; the hook below teaches it the two things
 * the bundler normally does — the `@/` alias and extensionless imports. Under
 * Bun neither is needed, so the hook is only registered where it exists.
 *
 * It throws rather than writing a short or a wrong file: a guide with no text,
 * an FAQ that parsed empty, or a plan-length phrase anywhere in the output
 * stops the build. Silently shipping any of those is the staleness this script
 * exists to prevent.
 */
import { existsSync, writeFileSync } from 'node:fs';
import * as nodeModule from 'node:module';
import { dirname, join, resolve as resolvePath } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolvePath(dirname(fileURLToPath(import.meta.url)), '..');

/** `@/lib/site` → `<root>/lib/site.ts`; `./en` → `./en.ts`. */
function tsFile(base) {
  for (const candidate of [base, `${base}.ts`, join(base, 'index.ts')]) {
    if (candidate.endsWith('.ts') && existsSync(candidate)) return candidate;
  }
  return null;
}

if (typeof nodeModule.registerHooks === 'function') {
  nodeModule.registerHooks({
    resolve(specifier, context, nextResolve) {
      let file = null;
      if (specifier.startsWith('file:') && specifier.endsWith('.ts')) {
        // Stated rather than detected, so Node does not parse each file as
        // CommonJS first and warn that the package has no "type".
        file = fileURLToPath(specifier);
      } else if (specifier.startsWith('@/')) {
        file = tsFile(join(ROOT, specifier.slice(2)));
      } else if (specifier.startsWith('.') && context.parentURL?.endsWith('.ts')) {
        file = tsFile(fileURLToPath(new URL(specifier, context.parentURL)));
      }
      if (file) {
        return { url: pathToFileURL(file).href, format: 'module-typescript', shortCircuit: true };
      }
      return nextResolve(specifier, context);
    },
  });
}

async function load(path) {
  try {
    return await import(pathToFileURL(join(ROOT, path)).href);
  } catch (error) {
    throw new Error(
      `llms: could not import ${path}. This script reads the TypeScript sources directly, ` +
        `which needs Node 22.18+ or 23.6+ (found ${process.version}) or Bun.\n${error.stack ?? error}`,
    );
  }
}

const { SITE_URL, SITE_NAME, PROGRAM, PAGE_UPDATED, SUPPORT_EMAIL } = await load('lib/site.ts');
const { TRANSLATED, EN_ONLY, ES_ARTICLES, RU_ARTICLES } = await load('lib/i18n.ts');
const { GUIDES, ARTICLES_EN, ARTICLES_ES, ARTICLES_RU } = await load('lib/guides/index.ts');
const ARTICLES = Object.values(ARTICLES_EN);
/** A guide's path, translated or English-only. */
const pathOf = (g) =>
  TRANSLATED[g.page] ? TRANSLATED[g.page][g.lang] : g.lang === 'es' ? ES_ARTICLES[g.page] : g.lang === 'ru' ? RU_ARTICLES[g.page] : EN_ONLY[g.page];
const { ABOUT } = await load('lib/about/index.ts');
const { FAQ } = await load('lib/faq.ts');
const { CITATIONS } = await load('lib/citations.ts');

// ─── Helpers ────────────────────────────────────────────────────────────────

const url = (path) => `${SITE_URL}${path}`;

/** The guides' inline marks, made self-contained: `**bold**` stays (this is
 * Markdown), and site-relative links become absolute, because a reader of this
 * file has no page to resolve `/science/` against. */
const inline = (text) => text.replace(/\]\((\/[^)]*)\)/g, (_, path) => `](${url(path)})`);

/** Plain text, for the one-line descriptions in `llms.txt`. */
const plain = (text) => text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

const list = (items) => items.map((item) => `- ${inline(item)}`).join('\n');

/** A placeholder page (`title: 'TODO'`) is not content. */
const isPlaceholder = (page) =>
  !page || /^\s*TODO\s*$/i.test(page.title ?? '') || /^\s*TODO\s*$/i.test(page.lede ?? '');

const LANG_LABEL = { en: 'English', ru: 'Russian (Русский)', es: 'Spanish (Español)' };

const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;
const minutes = PROGRAM.sessionMinutes;
const days = PROGRAM.daysPerWeek;
const or = (xs) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

const newest = [
  ...Object.values(PAGE_UPDATED),
  ...Object.values(GUIDES).flatMap((byLang) => Object.values(byLang).map((g) => g.updated)),
  ...ARTICLES.map((g) => g.updated),
]
  .filter(Boolean)
  .sort()
  .at(-1);

// ─── Checks on the sources ──────────────────────────────────────────────────

const guides = [
  ...Object.values(GUIDES).flatMap((byLang) => ['en', 'ru', 'es'].map((lang) => byLang[lang])),
  ...ARTICLES,
];
for (const g of guides) {
  if (isPlaceholder(g) || !g.lede || !g.sections?.length) {
    throw new Error(`llms: guide ${g?.page}/${g?.lang} has no text — refusing to write a short file`);
  }
}
if (!Array.isArray(FAQ) || FAQ.length === 0) throw new Error('llms: the FAQ imported empty');

const aboutEn = ABOUT.en;
const aboutReady = !isPlaceholder(aboutEn) && aboutEn.sections?.length > 0;
if (!aboutReady) console.warn('llms: the About page is still a placeholder; its text is left out of llms-full.txt');

// ─── Shared blocks ──────────────────────────────────────────────────────────

const SUMMARY = `> An exercise plan on iPhone for runners with heel pain (often linked to
> plantar fasciitis or a heel spur), arch pain or flexible flat feet. It is built
> one week at a time around a goal that can be measured, adapts each day to
> the morning's pain, and checks progress with physical tests. It has no fixed
> length: a goal that is reached moves to maintaining, and the next takes its
> place.`;

const NOTICE = `Walkito provides exercise programming. It does not diagnose and does not
treat any condition. Pain that follows an injury, comes with numbness,
tingling, swelling or warmth, wakes you at night, or is sharp or getting worse
should be seen by a clinician.`;

const KEY_FACTS = [
  'No fixed length. The plan is built one week at a time around a focus goal; a goal that is reached moves to "maintaining" (kept up at a lower dose) and the next goal takes its place, for as long as the plan is used.',
  `Five measured goals: easier mornings (morning pain at or under 1/10 for ${PROGRAM.painFreeDays} days running); an arch hold of ${archHoldSeconds} seconds; ${calfRaises} single-leg calf raises; single-leg balance for ${balanceSeconds} seconds; a left/right difference under ${gapPercent}%.`,
  'A new user starts with at most three goals, pain first. The app does not ask whether a flat foot is flexible or rigid; the randomized trial of arch exercise was run on flexible flat feet, so if the arch stays flat even with no weight on the foot, check with a clinician before arch work.',
  `Training days: ${or(days)} a week. Sessions: ${or(minutes)} minutes (default ${PROGRAM.defaultMinutes}), each 2 to 4 exercises; the focus exercise is never cut.`,
  'Week one "settles in": nothing that loads the plantar fascia and nothing above level 2.',
  'Each morning the day adapts: a high-pain morning, a big step day yesterday or a short night shrinks or softens the session. Pain of 6/10 or more during a session ends it and steps the next two sessions back.',
  'Progression: exercises sit on chains (calf, arch, balance, hip, mobility) at levels 1 to 5, and the focus goal\'s chain moves up one level at a time.',
  `Tests: ${PROGRAM.retestTests} physical measurements (calf raises to failure, arch hold, single-leg balance) in about ${PROGRAM.retestMinutes} minutes, every ${PROGRAM.testEveryDays} days until the first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal} days.`,
  'Available on iPhone now, on the App Store (https://apps.apple.com/app/id6813076846); Android is planned. In English, Russian and Spanish.',
  `Contact: ${SUPPORT_EMAIL}`,
];

const FINDINGS = [
  'High-load strength training scored 29 points lower on the Foot Function Index than plantar-specific stretching at 3 months (randomized trial, n=48, 95% CI 6-52, p=0.016); at 12 months the two groups had converged, so the effect is faster improvement rather than a larger one.',
  'In people with *flexible* flat feet, a six-week exercise program in a randomized trial (n=52) improved navicular drop by 0.4 cm and arch angle by 16 degrees more than control. Rigid flat feet are structural and exercise will not change them.',
  'In a 2024 meta-analysis, only short-foot programs longer than six weeks improved navicular drop; shorter ones showed no measurable effect.',
  'The 2023 JOSPT heel pain guideline, written for physical therapists, grades among its recommendations: manual therapy A, plantar fascia and calf stretching A, taping alongside other physical therapy A, night splints A, and resistance training B. It recommends against orthotics as a stand-alone treatment (grade B; alongside other treatment they may be used, grade C) and against adding therapeutic ultrasound to stretching (grade A). Its education advice (grade E, expert opinion) is to modify weight-bearing load.',
];

// ─── llms.txt ───────────────────────────────────────────────────────────────

const guideLine = (g) => `- [${g.h1}](${url(pathOf(g))}): ${plain(g.description)}`;

const otherLanguage = (lang) => {
  const heel = GUIDES.heelPain[lang];
  const flat = GUIDES.flatFeet[lang];
  const about = ABOUT[lang];
  const aboutLabel = isPlaceholder(about) ? (lang === 'ru' ? 'О проекте' : 'Sobre Walkito') : about.h1;
  const home = lang === 'ru' ? 'Главная' : 'Inicio';
  return [
    `### ${LANG_LABEL[lang]}`,
    `- [${home}](${url(TRANSLATED.home[lang])})`,
    guideLine(heel),
    guideLine(flat),
    ...(lang === 'es' ? Object.values(ARTICLES_ES).map(guideLine) : []),
    ...(lang === 'ru' ? Object.values(ARTICLES_RU).map(guideLine) : []),
    `- [${aboutLabel}](${url(TRANSLATED.about[lang])})`,
  ].join('\n');
};

const llms = `# ${SITE_NAME}

${SUMMARY}

${NOTICE}

Last updated: ${newest}

## Guides
${guideLine(GUIDES.heelPain.en)}
${guideLine(GUIDES.flatFeet.en)}
${ARTICLES.map(guideLine).join('\n')}

## The app and the evidence
- [Home](${url('/')}): what Walkito is and how the plan works, in brief
- [How the plan works](${url('/program/')}): the weekly plan, the goals, how
  each day adapts, and what the tests measure
- [Evidence](${url('/science/')}): the trials and the 2023 clinical guideline the
  plan follows, with stated limitations
- [Questions](${url('/faq/')}): sessions, goals, tests, Apple Health,
  notifications, the streak, and the clinical questions people ask
- [About Walkito](${url(TRANSLATED.about.en)}): ${
  aboutReady
    ? plain(aboutEn.description)
    : 'who makes the site, how the guides are written and checked, and what the app does not do'
}

## Support and legal
- [Support](${url('/support/')}): notifications, Apple Health permissions,
  subscriptions, deleting your data
- [Privacy](${url('/privacy/')}): what stays on the device and what leaves it
- [Terms of use](${url('/terms/')}): the license, App Store billing and
  cancellation, health and safety, and what the app does not promise

## Other languages
The home page, both guides and the About page are written in Russian and
Spanish as well. The plan, evidence, FAQ and legal pages are English only.

${otherLanguage('ru')}

${otherLanguage('es')}

## Key facts
${list(KEY_FACTS)}

## Key findings the plan follows
${list(FINDINGS)}

## Full text
The text of every guide in all three languages, the plan, the evidence and
the FAQ is at ${url('/llms-full.txt')}

## Not published
There is no aggregate user-outcome data on this site. It does not exist
rather than being withheld.
`;

// ─── llms-full.txt ──────────────────────────────────────────────────────────

const citation = (i) => {
  const c = CITATIONS[i];
  if (!c) throw new Error(`llms: citation index ${i} does not exist`);
  return c.text;
};

function guideText(g) {
  const out = [
    `## ${g.h1}`,
    '',
    [
      `Language: ${LANG_LABEL[g.lang]}`,
      url(pathOf(g)),
      g.published && `published ${g.published}`,
      g.updated && `updated ${g.updated}`,
    ]
      .filter(Boolean)
      .join(' · '),
    '',
    inline(g.lede),
  ];
  if (g.takeaways?.length) out.push('', list(g.takeaways));
  for (const s of g.sections) {
    out.push('', `### ${s.h2}`);
    for (const p of s.paragraphs ?? []) out.push('', inline(p));
    if (s.exercises?.length) {
      out.push('', s.exercises.map((e) => `- **${e.name}** (${e.dose}): ${inline(e.how)}`).join('\n'));
    }
    if (s.bullets?.length) out.push('', list(s.bullets));
    if (s.cites?.length) out.push('', s.cites.map((i) => `Source: ${citation(i)}`).join('\n'));
  }
  out.push('', `### ${g.redFlags.h2}`, '', list(g.redFlags.bullets));
  out.push('', `### ${g.program.h2}`, '', inline(g.program.text));
  if (g.faq?.length) {
    for (const f of g.faq) out.push('', `#### ${f.q}`, '', inline(f.a));
  }
  return out.join('\n');
}

function aboutText(a) {
  const out = [`## ${a.h1}`, '', url(TRANSLATED.about[a.lang]), '', inline(a.lede)];
  for (const s of a.sections) {
    out.push('', `### ${s.h2}`);
    for (const p of s.paragraphs ?? []) out.push('', inline(p));
    if (s.bullets?.length) out.push('', list(s.bullets));
  }
  return out.join('\n');
}

const ARTICLES_RU_ALL = Object.values(ARTICLES_RU).filter(Boolean);
const guideOrder = [
  GUIDES.heelPain.en,
  GUIDES.flatFeet.en,
  ...ARTICLES,
  ...['ru', 'es'].flatMap((lang) => [GUIDES.heelPain[lang], GUIDES.flatFeet[lang]]),
  ...ARTICLES_RU_ALL,
];

const full = `# ${SITE_NAME}: full text

${SUMMARY}

Source: ${SITE_URL}
Last updated: ${newest}

${NOTICE}

## How the plan works

${list(KEY_FACTS)}

## The evidence

${list(FINDINGS)}

Sources:
${CITATIONS.map((c) => `- ${c.text}`).join('\n')}

${guideOrder.map(guideText).join('\n\n')}
${aboutReady ? `\n${aboutText(aboutEn)}\n` : ''}
## Questions (${url('/faq/')})

${FAQ.map((e) => `### ${e.q}\n\n${inline(e.a)}`).join('\n\n')}

## Not published

There is no aggregate user-outcome data on this site. It does not exist
rather than being withheld.
`;

// ─── Guards: no holes, and no plan length, anywhere ─────────────────────────

/**
 * A template that reads a field the source no longer has prints "undefined"
 * rather than failing — which is how "a undefined-week plan" would reach an AI
 * engine the day a `PROGRAM` field is renamed.
 */
for (const [name, text] of [['llms.txt', llms], ['llms-full.txt', full]]) {
  const holes = text.split('\n').filter((line) => /\bundefined\b|\bNaN\b|\[object Object\]/.test(line));
  if (holes.length) {
    throw new Error(
      `llms: ${name} has values missing from its sources. Fix the source these lines come from:\n` +
        holes.map((h) => `  ${h.trim()}`).join('\n'),
    );
  }
}

/**
 * The plan has no length, and these files are what an AI engine quotes. Any
 * phrase that gives it one — whichever source file it came from — stops the
 * build here rather than shipping. Trial durations ("a six-week programme",
 * "12-month follow-up") are findings, not the plan, and are not matched.
 *
 * Cyrillic stems use `[а-яё]*`, not `\w*`: without the `u` flag `\w` is ASCII
 * only, so `двенадцат\w* недел` never matched "двенадцати недель".
 */
const PLAN_LENGTH = new RegExp(
  [
    // The old twelve-week, six-block plan.
    String.raw`\b(?:12|twelve)[-\s]weeks?\b`,
    String.raw`\b84[-\s]days?\b`,
    String.raw`\bsix blocks\b`,
    String.raw`\bblocks? of (?:14|fourteen)\b`,
    'after the twelve weeks',
    String.raw`six-week (?:version|plan)`,
    String.raw`\b12[-\s]недел`,
    'двенадцат[а-яё]* недел',
    String.raw`\b84 дн`,
    'шест[а-яё]* блок',
    String.raw`\b12 semanas`,
    'doce semanas',
    String.raw`\b84 d[ií]as`,
    'seis bloques',
    // The old program as it was also described (ten weeks), and the 90-day
    // store pass, which is no longer sold and read as the plan's length anyway.
    String.raw`\b(?:10|ten)[-\s]weeks?\b`,
    String.raw`\b(?:90|ninety)[-\s]days?\b`,
    String.raw`\b10[-\s]недел`,
    'десят[а-яё]* недел',
    String.raw`\b90[-\s]дн`,
    'девяност[а-яё]* дн',
    String.raw`\b10 semanas`,
    'diez semanas',
    String.raw`\b90 d[ií]as`,
    'noventa d[ií]as',
  ].join('|'),
  'i',
);

/**
 * Walkito is sold as two auto-renewing subscriptions, yearly and weekly. The
 * pass paid for once and the monthly subscription are no longer sold, so a
 * line that still offers either stops the build too. `\s`, not a space, because
 * the Russian and Spanish text still carries its non-breaking spaces here.
 */
const RETIRED_PRODUCT = new RegExp(
  [
    String.raw`\bone[-\s]time\s(?:purchase|payment)`,
    String.raw`\bpaid\sonce\b`,
    String.raw`\bmonthly\ssubscription`,
    String.raw`разов[а-яё]*\s(?:оплат|покупк|плат)`,
    String.raw`ежемесячн[а-яё]*\sподписк`,
    String.raw`pago\súnico`,
    String.raw`compras?\súnicas?`,
    String.raw`suscripción\smensual`,
  ].join('|'),
  'i',
);

for (const [name, text] of [['llms.txt', llms], ['llms-full.txt', full]]) {
  const lines = text.split('\n');
  // A reference line (Vancouver "2020;78") quotes a paper title such as "a 12-week ... intervention": a finding, not the plan.
  const hits = lines.filter((line) => PLAN_LENGTH.test(line) && !/\b(?:19|20)\d{2};\d/.test(line));
  if (hits.length) {
    throw new Error(
      `llms: ${name} would describe the plan by length, which it no longer has. ` +
        `Fix the source these lines come from:\n${hits.map((h) => `  ${h.trim()}`).join('\n')}`,
    );
  }
  const retired = lines.filter((line) => RETIRED_PRODUCT.test(line));
  if (retired.length) {
    throw new Error(
      `llms: ${name} would offer a product that is no longer sold. ` +
        `Fix the source these lines come from:\n${retired.map((h) => `  ${h.trim()}`).join('\n')}`,
    );
  }
}

// Plain text for machines: the non-breaking spaces that hold Russian and
// Spanish lines together on a page (scripts/typeset.mjs) are ordinary spaces here.
const spaces = (text) => text.replaceAll('\u00a0', ' ');
writeFileSync(join(ROOT, 'public/llms.txt'), spaces(llms));
writeFileSync(join(ROOT, 'public/llms-full.txt'), spaces(full));
console.log(
  `llms.txt: ${llms.length} chars · llms-full.txt: ${full.length} chars, ` +
    `${guides.length} guides, ${FAQ.length} FAQ answers${aboutReady ? ', About' : ''}`,
);
