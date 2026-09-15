import { loadQuestionFor, type SportKey } from './personalise';

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
export const DEFAULT_BUILDING_LINES: BuildingLines = [
  'Getting to know you',
  'Building your plan',
  'Your plan is ready',
];

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
const PAIN_NOUN: Record<PainKey, string | null> = {
  heel: 'Heel pain',
  foot: 'Foot pain',
  achilles: 'Achilles pain',
  shin: 'Shin pain',
  knee: 'Knee pain',
  hip: 'Hip pain',
  none: null,
};

/**
 * What the programme knows about each complaint, in one sentence.
 *
 * Each line names the mechanism rather than the symptom, because the mechanism
 * is the part the user has not heard before — and being told something true
 * they did not already know is the whole reason this screen exists.
 */
const PATTERN: Record<PainKey, string> = {
  heel: 'This is the most common pattern there is. It also responds fastest.',
  foot: 'The arch isn’t weak on its own. What holds it up is.',
  achilles: 'Load built faster than the tendon adapted. That’s fixable.',
  shin: 'Volume outran your legs. The plan walks that back, then builds.',
  knee: 'The knee is where it hurts. It’s rarely where it started.',
  hip: 'Something below the hip stopped carrying its share.',
  none: 'You’re here before it hurts. That’s the cheap way to do this.',
};

/**
 * The promise, and the only claim in the flow with a number on it.
 *
 * Day 12–16, not twelve weeks. Subjective relief in the strength arm of
 * Rathleff's trial began inside the first fortnight; twelve weeks is how long
 * the programme runs, and quoting it here would hand the user an exit date
 * instead of a reason to start.
 */
const PROMISE = 'First changes: day 12 to 16.';

/** Hiking is asked by the month; everything else by the week. Taken from the
 * load question's own blurb, which is the wording the user just read. */
function cadence(sport: SportKey | null): string {
  return sport === 'hiking' ? 'a month' : 'a week';
}

function primaryPain(pain: readonly string[]): PainKey | null {
  return PRIMARY_ORDER.find((key) => pain.includes(key)) ?? null;
}

/** The load band as the user saw it — "30–50 km", "3–5 hours" — looked up by
 * value so the reflection quotes the label rather than re-deriving it. */
function loadLabel(sport: SportKey | null, load: readonly string[]): string | null {
  const value = load[0];
  if (value == null) return null;
  return loadQuestionFor(sport).options.find((option) => option.value === value)?.label ?? null;
}

/**
 * Line one: their answers, back to them.
 *
 * Only the facts the flow actually collects. The obvious third clause — how
 * long it has been going on — is deliberately absent, because no step asks for
 * it, and inventing a duration on the one screen whose job is to prove the app
 * was listening would undo exactly what the screen is for.
 */
function reflection(sport: SportKey | null, pain: readonly string[], load: readonly string[]): string | null {
  const parts = [
    primaryPain(pain) != null ? PAIN_NOUN[primaryPain(pain) as PainKey] : null,
    loadLabel(sport, load) != null ? `${loadLabel(sport, load)} ${cadence(sport)}` : null,
  ].filter((part): part is string => part != null);

  return parts.length > 0 ? `${parts.join(', ')}.` : null;
}

export type ReflectionInput = {
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
export function buildingLines({ sport, pain, load }: ReflectionInput): BuildingLines {
  const primary = primaryPain(pain);
  return [
    reflection(sport, pain, load) ?? DEFAULT_BUILDING_LINES[0],
    primary != null ? PATTERN[primary] : DEFAULT_BUILDING_LINES[1],
    PROMISE,
  ];
}
