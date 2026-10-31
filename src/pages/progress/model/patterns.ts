import type { DailyMetric } from '@/entities/health/model/metrics';

/**
 * What this person's own days say about their mornings.
 *
 * Each pattern compares the morning after one kind of day with the morning
 * after the others, inside this person's history only. A pattern is said
 * only when both sides hold enough days and the gap clears the smallest
 * change in pain that means anything (one point), the same bar the on-feet
 * threshold uses. No pattern is a fine answer, and a made-up one is worse
 * than silence: it would be the app inventing a cause for someone's pain.
 *
 * Never sent anywhere: it is made of pain, sleep, steps and workouts.
 */
export type Pattern =
  | { id: 'on-feet'; limit: number }
  | { id: 'short-sleep'; gap: number }
  | { id: 'workout'; gap: number }
  | { id: 'big-steps'; gap: number };

/** Fewest days on each side of a comparison. */
export const PATTERN_MIN_SIDE = 4;
/** The smallest gap in morning pain worth a sentence. */
export const PATTERN_MIN_GAP = 1;
/** Days of history before "still learning" gives way to "nothing stands out". */
export const PATTERN_LEARN_DAYS = 14;

const SHORT_NIGHT_MIN = 390;
const FULL_NIGHT_MIN = 420;
const WORKOUT_SPORT_MIN = 45;
const BIG_STEPS_RATIO = 1.3;

export type PatternsInput = {
  /** Oldest first. */
  days: readonly DailyMetric[];
  /** This morning's pain, for a date (`YYYY-MM-DD`). */
  painOn: (date: string) => number | null;
  /** The date after this one. */
  nextDate: (date: string) => string;
  /** The learned on-feet limit (`HealthSignals.onFeetThreshold`). */
  onFeetThreshold: number | null;
};

export type Patterns = {
  found: Pattern[];
  /** Days that carry both a Health reading and a morning to compare. */
  pairedDays: number;
};

const mean = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;

/** The gap between the two sides' mean pain, when both are big enough. */
function gapOf(yes: readonly number[], no: readonly number[]): number | null {
  if (yes.length < PATTERN_MIN_SIDE || no.length < PATTERN_MIN_SIDE) return null;
  return mean(yes) - mean(no);
}

export function patternsFrom(input: PatternsInput): Patterns {
  const { days, painOn, nextDate } = input;
  const found: Pattern[] = [];
  if (input.onFeetThreshold != null) found.push({ id: 'on-feet', limit: input.onFeetThreshold });

  // Sleep is stored on the date of the morning it ended, so it pairs with
  // that same morning's pain.
  const short: number[] = [];
  const full: number[] = [];
  // Load pairs with the morning after.
  const trained: number[] = [];
  const rested: number[] = [];
  const bigSteps: number[] = [];
  const usualSteps: number[] = [];
  const stepValues = days.map((d) => d.steps).filter((v): v is number => v != null);
  const stepsMean = stepValues.length > 0 ? mean(stepValues) : null;
  let paired = 0;

  for (const day of days) {
    const sameMorning = painOn(day.date);
    if (sameMorning != null && day.sleepMin != null) {
      if (day.sleepMin < SHORT_NIGHT_MIN) short.push(sameMorning);
      else if (day.sleepMin >= FULL_NIGHT_MIN) full.push(sameMorning);
    }
    const after = painOn(nextDate(day.date));
    if (after == null) continue;
    if (day.steps != null || day.sleepMin != null || day.longestRunKm != null || day.sportMin != null) paired += 1;
    const workout = (day.longestRunKm ?? 0) > 0 || (day.sportMin ?? 0) >= WORKOUT_SPORT_MIN;
    (workout ? trained : rested).push(after);
    if (day.steps != null && stepsMean != null && stepsMean > 0) {
      (day.steps >= stepsMean * BIG_STEPS_RATIO ? bigSteps : usualSteps).push(after);
    }
  }

  const sleepGap = gapOf(short, full);
  if (sleepGap != null && sleepGap >= PATTERN_MIN_GAP) found.push({ id: 'short-sleep', gap: sleepGap });
  const workoutGap = gapOf(trained, rested);
  if (workoutGap != null && Math.abs(workoutGap) >= PATTERN_MIN_GAP) found.push({ id: 'workout', gap: workoutGap });
  // Only when the on-feet limit has not already said it in hours.
  const stepsGap = gapOf(bigSteps, usualSteps);
  if (input.onFeetThreshold == null && stepsGap != null && stepsGap >= PATTERN_MIN_GAP) {
    found.push({ id: 'big-steps', gap: stepsGap });
  }
  return { found: found.slice(0, 3), pairedDays: paired };
}
