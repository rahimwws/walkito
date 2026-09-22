import {
  BLOCK_LENGTH,
  MINUTES_BY_KIND,
  OFFLOAD_MINUTES,
  PROGRAM,
  PROGRAM_LENGTH,
  RETEST_MINUTES,
  RETEST_TESTS,
  blockName,
  movesFor,
  type SessionKind,
} from '@/entities/program';
import { NO_SIGNALS } from '@/entities/health/model/metrics';
import { translatorFor, type Language, type Translate } from '@/shared/lib/i18n';
import { BRIEF_EN } from '@/shared/lib/i18n/catalogue/en/home';
import { BRIEF_ES } from '@/shared/lib/i18n/catalogue/es/home';
import { BRIEF_RU } from '@/shared/lib/i18n/catalogue/ru/home';
// Runtime helpers straight from `template`, types from the barrel.
//
// The barrel re-exports the component, which imports React Native — a package
// the test runner cannot parse, and the reason the old inline token building
// left this file untestable. `template.ts` is type-only against the renderer
// for exactly this purpose, and the `import type` below is erased, so nothing
// here reaches a component at runtime.
import { buildBrief, pickVariant } from '@/shared/ui/daily-brief/template';
import type { BriefToken, BriefVariants } from '@/shared/ui/daily-brief';

import {
  readBrief,
  type BriefInput,
  type BriefReading,
  type BriefState,
} from './brief-state';

export {
  BRIEF_STATES,
  briefState,
  quietTopic,
  readBrief,
  type BriefInput,
  type BriefReading,
  type BriefState,
} from './brief-state';

/**
 * The morning line, as tokens.
 *
 * Grey frame words carry the sentence, emphasised values carry the facts, and
 * the only colour is on the one thing worth acting on.
 *
 * **This file no longer decides anything.** Which sentence today gets is
 * `brief-state.ts`'s answer and nothing else's; what the sentence says is the
 * catalogue's, one arrangement per language. What is left here is the join:
 * turning the day's numbers into finished noun phrases and handing them to a
 * template. There is one lookup and no `switch`.
 *
 * Every health-derived line compares the person to themselves and never to a
 * norm. There is no population baseline for walking asymmetry, Apple labels its
 * mobility metrics *estimated*, and inferring a physical condition from an
 * estimate is diagnostic-adjacent — so the words are "vs your usual", never
 * "high", never "limping", never "compensating". That constraint travels with
 * the copy: see the note at the top of each `catalogue/*\/home.ts`.
 */

/** Stands in for a figure the phone never supplied. An em dash, in every
 * language — it is punctuation rather than a word. */
const DASH = '—';

/**
 * The digit separators, per language, written out rather than asked of `Intl`.
 *
 * `toLocaleString('en-US')` was the old answer and it was wrong twice: it
 * pinned every language to US conventions, and it leans on a part of Intl whose
 * presence in Hermes depends on how the engine was compiled — see the note at
 * the top of `plural.ts`, which is hand-written for the same reason. A degraded
 * `Intl` does not throw here, it silently prints "8.4 km" to a Russian reader.
 *
 * Both are language facts rather than copy, so they live beside the formatter
 * instead of in the catalogue: a translator has nothing to decide about them.
 */
const GROUP: Readonly<Record<Language, string>> = { en: ',', ru: ' ', es: '.' };
const DECIMAL: Readonly<Record<Language, string>> = { en: '.', ru: ',', es: ',' };

/** Thousands separated the way this language separates them. */
function grouped(value: number, language: Language): string {
  const digits = String(Math.abs(Math.round(value)));
  let out = '';
  for (let i = 0; i < digits.length; i += 1) {
    if (i > 0 && (digits.length - i) % 3 === 0) out += GROUP[language];
    out += digits[i];
  }
  return value < 0 ? `-${out}` : out;
}

/** One decimal, with this language's decimal mark. `toFixed` always writes a
 * point, which is the wrong character in both of the other two. */
function oneDecimal(value: number, language: Language): string {
  return value.toFixed(1).replace('.', DECIMAL[language]);
}

/**
 * One decimal only where it earns one: "8%" reads, "8.4%" implies a precision
 * an estimated metric does not have.
 */
function pct(value: number | null, t: Translate): string {
  return value == null ? DASH : t('home.percent', { value: String(Math.round(value)) });
}

/** "5h 20m", the way a person says it — and "5 ч 20 мин" the way another one
 * does. The unit letters are catalogue text, not string literals. */
function duration(min: number | null, t: Translate): string {
  if (min == null) return DASH;
  return t('home.duration', {
    hours: String(Math.floor(min / 60)),
    minutes: String(Math.round(min % 60)).padStart(2, '0'),
  });
}

/** Which catalogue line names the kind of work a day is. */
const WORK_KEY = {
  strength: 'home.workStrength',
  mobility: 'home.workMobility',
  balance: 'home.workBalance',
  recovery: 'home.workRecovery',
} as const satisfies Record<SessionKind, string>;

/** The kind a day defaults to when the plan has run out of days to read. */
const FALLBACK_KIND: SessionKind = 'mobility';

/** The hour count the on-feet line falls back to when this person's own
 * threshold has not been learned yet. */
const FALLBACK_ON_FEET_LIMIT = 7;

/** How far above normal the cadence tip asks for, in percent. Held here rather
 * than written into three sentences, so the three cannot disagree. */
const CADENCE_LIFT = 5;

/**
 * Every sentence the brief can say, in every language it ships.
 *
 * Typed as `Record<BriefState, BriefVariants>` on the way in, which is what
 * makes a state added to the ladder a compile error in all three catalogues
 * rather than a crash on the morning it first fires. The annotation lives here
 * because `BriefState` belongs to this page and a shared catalogue file may not
 * import upward to reach it.
 */
const BRIEFS: Readonly<Record<Language, Record<BriefState, BriefVariants>>> = {
  en: BRIEF_EN,
  ru: BRIEF_RU,
  es: BRIEF_ES,
};

/**
 * The day's figures, as finished noun phrases.
 *
 * Every number the brief prints passes through here and comes out already
 * agreed with its noun in the language that owns it — "3 moves", "3 упражнения",
 * "3 ejercicios". The templates only decide where the phrase sits, which is why
 * "1 days in a row" and "1 flights" are not bugs that can be reintroduced: the
 * count never reaches a template as a bare number.
 *
 * The defaults for missing data live here too. A template asking for `{work}`
 * on a day the plan has no entry for gets a real phrase rather than a hole,
 * and the decision about *which* phrase is a data decision, made once.
 *
 * Exported for the test that asserts the join exhaustively — every placeholder
 * in every phrasing of every state against the bag, which is a property of all
 * three catalogues at once and cannot be reached by driving the ladder to one
 * state at a time.
 */
export function briefParams(
  input: BriefInput,
  reading: BriefReading,
  t: Translate,
  language: Language,
): Record<string, string> {
  const { cursor, streak, health = NO_SIGNALS } = input;
  const day = PROGRAM[cursor];

  const kind: SessionKind = day?.kind ?? FALLBACK_KIND;
  const minutes = day?.minutes ?? MINUTES_BY_KIND[kind];
  const moves = day != null ? movesFor(day) : [];

  return {
    // --- the programme ---------------------------------------------------
    // `blockName` and the exercise titles are the programme entity's own copy,
    // resolved through its public API rather than restated here.
    block: blockName(day?.block ?? 1),
    work: t(WORK_KEY[kind]),
    move: moves[0] ?? t('home.fallbackMove'),
    moves: t('home.moves', { count: moves.length }),
    minutes: t('home.minutes', { count: minutes }),
    planDay: t('home.dayNumber', { count: cursor + 1 }),
    dayOfPlan: t('home.dayOfPlan', { day: cursor + 1, total: PROGRAM_LENGTH }),

    // --- fixed doses, read from the engine rather than written out -------
    restMinutes: t('home.minutes', { count: OFFLOAD_MINUTES }),
    testMinutes: t('home.minutes', { count: RETEST_MINUTES }),
    tests: t('home.tests', { count: RETEST_TESTS }),
    // A block, in weeks. Spelled "four weeks" in the old copy, which stopped
    // being true the day a block became fourteen days long.
    weeks: t('home.weeks', { count: BLOCK_LENGTH / 7 }),

    // --- pain, compared to the person's own history ----------------------
    jump: t('home.points', { count: reading.jump }),
    drop: t('home.points', { count: reading.drop }),

    // --- the streak ------------------------------------------------------
    days: t('home.daysInARow', { count: streak }),
    streakDay: t('home.dayNumber', { count: streak }),

    // --- what the phone noticed ------------------------------------------
    hours: t('home.hoursOnFeet', { count: Math.floor(input.hoursOnFeet ?? 0) }),
    limit: t('home.thresholdHours', {
      count: Math.round(input.onFeetThreshold ?? FALLBACK_ON_FEET_LIMIT),
    }),
    // Pluralised rather than grouped: a low enough baseline can meet the spike
    // ratio at a single flight, and no one ever climbs a thousand.
    flights:
      health.flightsYesterday == null
        ? DASH
        : t('home.flights', { count: Math.round(health.flightsYesterday) }),
    // The opposite case: steps always want a thousands separator and never want
    // a plural surprise, so the formatted figure and the count travel together.
    steps:
      health.stepsYesterday == null
        ? DASH
        : t('home.steps', {
            count: Math.round(health.stepsYesterday),
            steps: grouped(health.stepsYesterday, language),
          }),
    distance:
      health.longestRunYesterdayKm == null
        ? DASH
        : t('home.km', { value: oneDecimal(health.longestRunYesterdayKm, language) }),
    sleep: duration(health.sleepMeanMin, t),
    today: pct(health.asymmetryToday, t),
    usual: pct(health.asymmetryBaseline, t),
    cadence: t('home.percent', { value: String(CADENCE_LIFT) }),
  };
}

/**
 * Today's sentence, in `language`.
 *
 * The language is passed rather than read, so a caller that re-renders on a
 * language change gets a new line in the same commit — and so a test can ask
 * for all three without touching the store.
 */
export function briefTokens(input: BriefInput, language: Language): readonly BriefToken[] {
  const t = translatorFor(language);
  const reading = readBrief(input);

  // The name opens the line when there is one. With no name the sentence simply
  // starts, and `buildBrief` restores the capital the templates are authored
  // without — which is why no template capitalises its own first word.
  const addressed = input.name.length > 0;

  // Built as a literal rather than through the `value` helper, for the same
  // reason `buildBrief` does: the helpers live in the UI module and importing
  // them would pull React Native into this file's module graph.
  const lead: readonly BriefToken[] = addressed
    ? [{ kind: 'value', text: input.name, tail: ',' }]
    : [];

  const segments = pickVariant(BRIEFS[language][reading.state], input.cursor);
  const params = briefParams(input, reading, t, language);

  return [...lead, ...buildBrief(segments, params, { capitalise: !addressed })];
}
