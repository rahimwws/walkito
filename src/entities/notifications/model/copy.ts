/**
 * What each notification actually says.
 *
 * Pure: a kind plus the day's facts in, a title and body out. Kept apart from
 * the ladder so the wording can be argued over without touching the rules that
 * decide whether anything is said at all.
 *
 * The wording itself lives in `@/shared/lib/i18n`, one `notifications.ts` per
 * language, and the two constraints that run through it are restated there,
 * where a translator will actually read them. In short: **nothing cheerful
 * after pain**, and **no streak number outside its own row**.
 *
 * **No hook runs here.** Notifications are planned from the scheduler, which is
 * driven by an `AppState` listener and has no React tree above it, so the
 * translator is asked for by language — `translatorFor(getLanguage())` — rather
 * than taken from context. `getLanguage()` reads the persisted preference
 * synchronously.
 *
 * **The language is resolved when the week is planned, not when a message is
 * delivered.** iOS holds the finished text, so switching language leaves the
 * pending week in the old one until `refresh()` rebuilds it. It does that on
 * every foreground; see the note on `planWindow`.
 */

import { MORNING_STRETCH_COPY } from '@/entities/program';
import { getLanguage, translatorFor, type Language, type Translate } from '@/shared/lib/i18n';

import type { DaySignals, NotificationKind } from './ladder';

export type Message = { title: string; body: string };

/**
 * The title on every plan notification.
 *
 * Not a catalogue entry. It is the product's name, and the one thing a
 * translator must not be invited to render differently — the same reasoning
 * that keeps the language endonyms in `LANGUAGE_META` out of the catalogue.
 */
const APP_NAME = 'Walkito';

/**
 * Which line of a set to use today.
 *
 * Hashed off the date rather than counted, so it survives a reinstall and does
 * not need storing — and mixed with the set's length so two different sets do
 * not move in lockstep and betray the trick. The spec asks that the same line
 * not come round twice in a fortnight; with the smallest set here at two lines
 * and a day-granularity hash, that holds for every set of four or more and is
 * close enough below that.
 *
 * The modulo is taken against the array it is handed, never a constant, so a
 * language that ships a different number of variants rotates over its own.
 */
export function rotate<T>(lines: readonly T[], dateKey: string, salt = 0): T {
  let hash = salt;
  for (let i = 0; i < dateKey.length; i += 1) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return lines[hash % lines.length];
}

/**
 * The day's facts, already formatted for the language.
 *
 * `steps` is the grouped string a sentence renders and `stepCount` the same
 * number raw; Russian needs both, because "14 201" takes a different form of
 * "шаг" from "14 205" and only the unformatted number can say which.
 */
type Facts = {
  day: number;
  minutes: number;
  kind: string;
  pain: number | string;
  steps: string;
  stepCount: number;
  percent: string;
  days: number;
  block: string;
  streak: number;
};

/**
 * One variant of a rotation set.
 *
 * A closure rather than a bare catalogue key, so every `t()` call is made
 * against a single literal key and keeps its compile-time parameter checking. A
 * union of keys would lose it: `ParamsOf` collapses to `never` the moment a
 * union mixes a plural entry with a plain one, and the call site would then
 * accept no parameters at all.
 */
type Line = (t: Translate, facts: Facts) => string;

const SESSION_LINES: readonly Line[] = [
  (t, f) => t('notifications.sessionStrength', { count: f.minutes }),
  (t, f) => t('notifications.sessionDay', { day: f.day, kind: f.kind, count: f.minutes }),
  (t, f) => t('notifications.sessionShort', { count: f.minutes }),
  (t) => t('notifications.sessionHeelRaises'),
  (t, f) => t('notifications.sessionCalves', { count: f.minutes }),
  (t) => t('notifications.sessionMobility'),
];

/** Never cheerful, no emoji, no encouragement. Just the smaller ask. */
const FLARE_LINES: readonly Line[] = [
  (t, f) => t('notifications.flareRough', { count: f.minutes }),
  (t, f) => t('notifications.flarePain', { pain: f.pain, count: f.minutes }),
  (t) => t('notifications.flareNothingHeavy'),
];

/** The first names a figure, which is why it is first: `bodyFor` drops it by
 * slicing when HealthKit has given us no step count. */
const LOAD_LINES: readonly Line[] = [
  (t, f) =>
    t('notifications.loadSteps', { steps: f.steps, percent: f.percent, count: f.stepCount }),
  (t) => t('notifications.loadBigDay'),
  (t) => t('notifications.loadBackOff'),
];

/**
 * Change against the person's own baseline, and nothing more.
 *
 * Forbidden here and enforced by review rather than by code: "you're limping",
 * "you're compensating", any claim about injury risk, any population norm.
 * Walking asymmetry does not predict injury — a secondary analysis of an RCT
 * with 800+ runners found it did not raise risk — so the only defensible
 * sentence is that something changed relative to how this person usually walks.
 */
const GAIT_LINES: readonly Line[] = [
  (t, f) => t('notifications.gaitUneven', { count: f.days }),
  (t) => t('notifications.gaitChanged'),
];

const RETEST_LINES: readonly Line[] = [
  (t) => t('notifications.retestTwoWeeks'),
  (t) => t('notifications.retestCheckpoint'),
  (t, f) => t('notifications.retestDay', { day: f.day }),
];

const BLOCK_LINES: readonly Line[] = [
  (t, f) => t('notifications.blockNew', { block: f.block }),
  (t, f) => t('notifications.blockLoadUp', { block: f.block }),
  (t, f) => t('notifications.blockOpens', { block: f.block }),
];

/** One line per reason, because the whole value of this row is that it explains
 * a specific change rather than announcing that something changed. */
const PLAN_LINES: Readonly<Record<string, Line>> = {
  flare: (t) => t('notifications.planFlare'),
  spike: (t) => t('notifications.planSpike'),
  'heavy-day': (t) => t('notifications.planHeavyDay'),
  return: (t) => t('notifications.planReturn'),
  plan: (t) => t('notifications.planBackUp'),
};

const CHECKIN_LINES: readonly Line[] = [
  (t) => t('notifications.checkinHow'),
  (t) => t('notifications.checkinOneTap'),
  (t) => t('notifications.checkinLog'),
];

/** The only place a streak number may appear. Both lines are a statement of
 * what one tap does, never of what is about to be lost. */
const STREAK_LINES: readonly Line[] = [
  (t, f) => t('notifications.streakKeep', { count: f.streak }),
  (t, f) => t('notifications.streakTap', { count: f.streak }),
];

const MAINTENANCE_LINES: readonly Line[] = [
  (t, f) => t('notifications.maintenanceDay', { count: f.minutes }),
  (t) => t('notifications.maintenanceCheckpoint'),
  (t) => t('notifications.maintenanceFourWeeks'),
];

/** Three, then silence for good. Keyed by how long they have been away. */
const WINBACK_LINES: Readonly<Record<number, Line>> = {
  3: (t, f) => t('notifications.winbackDay3', { day: f.day }),
  10: (t, f) => t('notifications.winbackDay10', { day: f.day }),
  30: (t) => t('notifications.winbackDay30'),
};

/** The day's kind as a whole noun phrase. English can write "{kind} work" and
 * substitute an adjective; Russian cannot, so the catalogue holds the finished
 * phrase and the sentence holds a slot. */
const KIND_KEYS = {
  strength: 'notifications.kindStrength',
  mobility: 'notifications.kindMobility',
  balance: 'notifications.kindBalance',
  recovery: 'notifications.kindRecovery',
} as const;

function kindLabel(t: Translate, kind: string | null): string {
  const key = KIND_KEYS[kind as keyof typeof KIND_KEYS] as
    | (typeof KIND_KEYS)[keyof typeof KIND_KEYS]
    | undefined;
  return t(key ?? 'notifications.kindFoot');
}

function factsFor(signals: DaySignals, t: Translate, language: Language): Facts {
  return {
    day: signals.dayNumber,
    minutes: signals.minutes,
    kind: kindLabel(t, signals.kind),
    pain: signals.painYesterday ?? '',
    steps: signals.stepsYesterday == null ? '' : group(signals.stepsYesterday, language),
    stepCount: signals.stepsYesterday ?? 0,
    percent:
      signals.stepRatio == null ? '' : `${Math.round((signals.stepRatio - 1) * 100)}`,
    days: signals.asymmetryDays,
    block: signals.opensBlock ?? '',
    streak: signals.streak,
  };
}

/** Thousands separated the way the reader's language does it: a comma in
 * English, a thin space in Russian, a full stop in Spanish. */
function group(value: number, language: Language): string {
  return value.toLocaleString(language);
}

/**
 * The message for a decision, or null when the set has nothing to say.
 *
 * The title is the app's name on every row. iOS shows it above the body anyway,
 * and a second line of our own would spend the only glance this gets on
 * restating what the user can already see.
 *
 * `language` defaults to the stored preference and is taken as a parameter so a
 * caller planning a whole week resolves it once — and so a test can ask for a
 * language instead of inheriting whatever the device reports.
 */
export function messageFor(
  kind: NotificationKind,
  signals: DaySignals,
  language: Language = getLanguage(),
): Message | null {
  const t = translatorFor(language);
  const body = bodyFor(kind, signals, t, language);
  if (body == null) return null;
  return { title: APP_NAME, body };
}

/** The retest tail, six hours after the morning nudge. Lives here rather than
 * in the scheduler because it is copy, and the scheduler should own no words. */
export function retestFollowUpBody(language: Language = getLanguage()): string {
  return translatorFor(language)('notifications.retestFollowUp');
}

function bodyFor(
  kind: NotificationKind,
  signals: DaySignals,
  t: Translate,
  language: Language,
): string | null {
  const facts = factsFor(signals, t, language);

  switch (kind) {
    case 'flare':
      return rotate(FLARE_LINES, signals.dateKey, 11)(t, facts);
    case 'load':
      // The first line names a figure, so it is only usable when there is one.
      return rotate(
        signals.stepsYesterday == null ? LOAD_LINES.slice(1) : LOAD_LINES,
        signals.dateKey,
        23,
      )(t, facts);
    case 'gait':
      return rotate(GAIT_LINES, signals.dateKey, 31)(t, facts);
    case 'retest':
      return rotate(RETEST_LINES, signals.dateKey, 43)(t, facts);
    case 'block':
      return signals.opensBlock == null
        ? null
        : rotate(BLOCK_LINES, signals.dateKey, 53)(t, facts);
    case 'plan':
      return (PLAN_LINES[signals.planReason ?? 'plan'] ?? PLAN_LINES.plan)(t, facts);
    case 'session':
      if (signals.maintenance) return rotate(MAINTENANCE_LINES, signals.dateKey, 71)(t, facts);
      return rotate(SESSION_LINES, signals.dateKey, 61)(t, facts);
    case 'checkin':
      return rotate(CHECKIN_LINES, signals.dateKey, 83)(t, facts);
    case 'streak':
      return rotate(STREAK_LINES, signals.dateKey, 97)(t, facts);
    case 'winback':
      return (WINBACK_LINES[signals.daysAway] ?? WINBACK_LINES[30])(t, facts);
    default:
      return null;
  }
}

/** The one-line stretch the morning nudge can carry on days that have one.
 * Shared with the screen rather than written twice, so they cannot drift.
 * Still English-only: it is owned by `@/entities/program`. */
export { MORNING_STRETCH_COPY };
