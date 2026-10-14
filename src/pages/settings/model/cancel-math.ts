import type { DaysPerWeek, SessionMinutes } from '@/entities/program';

/**
 * The cancel flow's arithmetic, with nothing native in it, so it can be
 * tested under plain bun (`tests/cancel-flow.test.ts`): how much lighter the
 * plan gets, and which of somebody's own numbers may be quoted back to them
 * when they say their feet are better.
 *
 * Those numbers are health data. They are shown to the person they belong to
 * and go nowhere else: not to analytics, not into a recording (the card is
 * masked).
 */

/** The shortest session the plan has: "Switch to 3-minute sessions". */
export const SHORTEST_MINUTES: SessionMinutes = 3;

/** The two plan settings that set how much there is to do. */
export type Load = { daysPerWeek: DaysPerWeek; defaultMinutes: SessionMinutes };

/**
 * The plan one step lighter, for "It isn't helping, or it hurts": shorter
 * sessions first (10 to 5, 5 to 3 minutes), then, once they are as short as
 * they go, fewer of them (7 to 5, 5 to 3 days). The same two settings
 * Settings → Your plan changes, so it is undone there the same way. Null when
 * the plan is already as light as it goes.
 */
export function lighterPlan(load: Load): Partial<Load> | null {
  if (load.defaultMinutes === 10) return { defaultMinutes: 5 };
  if (load.defaultMinutes === 5) return { defaultMinutes: 3 };
  if (load.daysPerWeek === 7) return { daysPerWeek: 5 };
  if (load.daysPerWeek === 5) return { daysPerWeek: 3 };
  return null;
}

export type ChangeMetric = 'pain' | 'calf' | 'arch' | 'balance';

/** One of their numbers, then and now. */
export type Change = { metric: ChangeMetric; from: number; to: number };

/** A first-step pain reading: the plan day it was logged on, and 0 to 10. */
export type FirstStep = { day: number; score: number };

/** A test's figures on the side being worked on: calf raises, the arch hold
 * and the balance in seconds. */
export type TestFigures = { calf: number; arch: number; balance: number };

/** A week of mornings, on each side of the comparison. */
const WEEK = 7;
/** Mornings in a week that make an average worth quoting. */
const MIN_READINGS = 3;
/** The least drop in first-step pain that is quoted as one: a whole point on
 * the 0 to 10 scale, after rounding. Less is a good week, not a change. */
const PAIN_DROP = 1;
/**
 * The least gain in a test that is quoted: two calf raises, five seconds of
 * hold or balance. Below that, two attempts at the same test can differ on
 * their own, and a card saying "look how far you've come" over it would be
 * claiming more than was measured.
 */
const TEST_GAIN: Readonly<Record<Exclude<ChangeMetric, 'pain'>, number>> = { calf: 2, arch: 5, balance: 5 };
/** At most this many rows on the card. */
const MAX_CHANGES = 3;

const tenths = (value: number) => Math.round(value * 10) / 10;

/**
 * First-step pain in the first week it was logged against the last seven
 * days, when both weeks have at least three mornings, they do not overlap,
 * and it came down by at least a point. Null otherwise: no improvement is
 * claimed that the log does not show.
 */
export function firstStepChange(readings: readonly FirstStep[], today: number): Change | null {
  if (readings.length === 0) return null;
  const first = Math.min(...readings.map((reading) => reading.day));
  const firstEnd = first + WEEK - 1;
  const lastStart = today - WEEK + 1;
  if (lastStart <= firstEnd) return null;
  const mean = (from: number, to: number): number | null => {
    const scores = readings.filter((reading) => reading.day >= from && reading.day <= to).map((reading) => reading.score);
    return scores.length >= MIN_READINGS ? scores.reduce((sum, score) => sum + score, 0) / scores.length : null;
  };
  const start = mean(first, firstEnd);
  const now = mean(lastStart, today);
  if (start == null || now == null) return null;
  const from = tenths(start);
  const to = tenths(now);
  return from - to >= PAIN_DROP ? { metric: 'pain', from, to } : null;
}

/**
 * The tests that came back better, first test against the latest: calf
 * raises, balance, the arch hold, each only past its `TEST_GAIN` and from a
 * first figure above zero (a zero is a test not done, not a starting point).
 */
export function testChanges(tests: readonly TestFigures[]): Change[] {
  if (tests.length < 2) return [];
  const first = tests[0];
  const latest = tests[tests.length - 1];
  return (['calf', 'balance', 'arch'] as const)
    .filter((metric) => first[metric] > 0 && latest[metric] - first[metric] >= TEST_GAIN[metric])
    .map((metric) => ({ metric, from: first[metric], to: latest[metric] }));
}

/** Everything worth quoting, the mornings first, at most three rows. Empty
 * when nothing improved enough to say so. */
export function yourChanges(readings: readonly FirstStep[], today: number, tests: readonly TestFigures[]): Change[] {
  const pain = firstStepChange(readings, today);
  return [...(pain != null ? [pain] : []), ...testChanges(tests)].slice(0, MAX_CHANGES);
}
