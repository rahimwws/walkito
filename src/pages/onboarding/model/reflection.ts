import type { Translate } from '@/shared/lib/i18n';

import { loadQuestionFor, type SportKey } from './personalise';
import type { Phrase } from './steps';

/**
 * The three lines the building screen says while it waits.
 *
 * This is the flow's only payoff. There is no scan and no physical test, so the
 * one thing that can make the pause feel earned is the user reading their own
 * answers back and recognising themselves in them — which is why the lines are
 * assembled here rather than written as constants.
 *
 * The shape is fixed at three: same component, same timings, same animation as
 * the static version it replaces. Only the strings became dynamic.
 */
export type BuildingLines = readonly [string, string, string];

/**
 * The static fallback, and what every line degrades to individually.
 *
 * A user who skipped the pain question still has to see three lines of
 * something — the screen holds for 5.44 seconds either way, and two of them
 * blank would read as a failure rather than as a pause.
 */
export function defaultBuildingLines(t: Translate): BuildingLines {
  return [
    t('onboarding.building.line1'),
    t('onboarding.building.title'),
    t('onboarding.building.line3'),
  ];
}

/**
 * Which complaint speaks for the set.
 *
 * Ordered by how much the programme can say about each, not by the order they
 * appear in the question: heel is the most common and the most responsive, so
 * a user who ticked heel *and* hip is told about the heel. `none` sorts last
 * because it is the absence of the others, and only speaks when nothing else
 * was picked.
 */
const PRIMARY_ORDER = ['heel', 'foot', 'achilles', 'shin', 'knee', 'hip', 'none'] as const;

type PainKey = (typeof PRIMARY_ORDER)[number];

/** How each complaint is named in the reflection line. `none` has no noun —
 * there is no pain to name — so it drops out of line one entirely. */
export const PAIN_NOUN: Record<PainKey, Phrase | null> = {
  heel: (t) => t('onboarding.reflection.painHeel'),
  foot: (t) => t('onboarding.reflection.painFoot'),
  achilles: (t) => t('onboarding.reflection.painAchilles'),
  shin: (t) => t('onboarding.reflection.painShin'),
  knee: (t) => t('onboarding.reflection.painKnee'),
  hip: (t) => t('onboarding.reflection.painHip'),
  none: null,
};

/**
 * What the programme knows about each complaint, in one sentence.
 *
 * Each line names the mechanism rather than the symptom, because the mechanism
 * is the part the user has not heard before — and being told something true
 * they did not already know is the whole reason this screen exists.
 */
const PATTERN: Record<PainKey, Phrase> = {
  heel: (t) => t('onboarding.pattern.heel'),
  foot: (t) => t('onboarding.pattern.foot'),
  achilles: (t) => t('onboarding.pattern.achilles'),
  shin: (t) => t('onboarding.pattern.shin'),
  knee: (t) => t('onboarding.pattern.knee'),
  hip: (t) => t('onboarding.pattern.hip'),
  none: (t) => t('onboarding.pattern.none'),
};

/**
 * The promise, and the only claim in the flow with a number on it.
 *
 * Day 12–16, not twelve weeks. Subjective relief in the strength arm of
 * Rathleff's trial began inside the first fortnight; twelve weeks is how long
 * the programme runs, and quoting it here would hand the user an exit date
 * instead of a reason to start.
 */
const PROMISE: Phrase = (t) => t('onboarding.building.promise');

/**
 * The load band with the cadence it was asked in — "30–50 km a week".
 *
 * One whole template per cadence rather than a band with " a week" stuck on
 * the end. The join was English-only: Russian wants «в неделю» after the
 * figure, Spanish «por semana», and hiking's month is a different word again
 * in all three. Taken from the load question's own blurb, which is the wording
 * the user just read.
 */
export function volumeLine(
  t: Translate,
  sport: SportKey | null,
  load: readonly string[],
): string | null {
  const band = loadLabel(t, sport, load);
  if (band == null) return null;
  return sport === 'hiking'
    ? t('onboarding.reflection.volumeMonthly', { band })
    : t('onboarding.reflection.volumeWeekly', { band });
}

export function primaryPain(pain: readonly string[]): PainKey | null {
  return PRIMARY_ORDER.find((key) => pain.includes(key)) ?? null;
}

/** The load band as the user saw it — "30–50 km", "3–5 hours" — looked up by
 * value so the reflection quotes the label rather than re-deriving it. */
export function loadLabel(
  t: Translate,
  sport: SportKey | null,
  load: readonly string[],
): string | null {
  const value = load[0];
  if (value == null) return null;
  const option = loadQuestionFor(sport).options.find((o) => o.value === value);
  return option != null ? option.label(t) : null;
}

/**
 * Line one: their answers, back to them.
 *
 * Only the facts the flow actually collects. The obvious third clause — how
 * long it has been going on — is deliberately absent, because no step asks for
 * it, and inventing a duration on the one screen whose job is to prove the app
 * was listening would undo exactly what the screen is for.
 *
 * Three templates rather than a join and a full stop: the separator between the
 * two facts and the punctuation that closes them are a language's business, and
 * `parts.join(', ')` was quietly deciding both for every language at once.
 */
function reflection(
  t: Translate,
  sport: SportKey | null,
  pain: readonly string[],
  load: readonly string[],
): string | null {
  const key = primaryPain(pain);
  const noun = key != null ? PAIN_NOUN[key] : null;
  const volume = volumeLine(t, sport, load);

  if (noun != null && volume != null) {
    return t('onboarding.building.reflectionBoth', { pain: noun(t), volume });
  }
  if (noun != null) return t('onboarding.building.reflectionPain', { pain: noun(t) });
  if (volume != null) return t('onboarding.building.reflectionVolume', { volume });
  return null;
}

export type ReflectionInput = {
  t: Translate;
  sport: SportKey | null;
  /** Values from the pain step, e.g. `['heel', 'shin']`. */
  pain: readonly string[];
  /** Values from the load step, e.g. `['30-50']`. */
  load: readonly string[];
};

/**
 * The three lines, each falling back on its own.
 *
 * Per-line rather than all-or-nothing: a user who answered the pain question
 * but skipped the load one should still be told what their pattern is, and
 * the promise is true regardless of what anyone answered.
 */
export function buildingLines({ t, sport, pain, load }: ReflectionInput): BuildingLines {
  const primary = primaryPain(pain);
  const fallback = defaultBuildingLines(t);
  return [
    reflection(t, sport, pain, load) ?? fallback[0],
    primary != null ? PATTERN[primary](t) : fallback[1],
    PROMISE(t),
  ];
}
