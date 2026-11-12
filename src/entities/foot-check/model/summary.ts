import { kv } from '@/shared/lib/storage';

/**
 * The Foot Check as a whole: five things about a pair of feet, of which the
 * onboarding measures two or three (the ankle bend, the big toe lift and, on
 * a quiet morning, one leg) and the plan's first test the rest (calves, arch,
 * balance). The count is what the result card and the paywall's first screen
 * show, and it is kept on the phone.
 */
export const FOOT_CHECK_TOTAL = 5;

const KEY = 'foot-check/measured';

/** How many of the five have been measured, or 0 before the check. */
export function footCheckMeasured(): number {
  return Math.max(0, Math.min(FOOT_CHECK_TOTAL, kv.getNumber(KEY) ?? 0));
}

export function setFootCheckMeasured(count: number): void {
  if (count <= 0) kv.remove(KEY);
  else kv.set(KEY, Math.min(FOOT_CHECK_TOTAL, count));
}

/** What the onboarding's part of the check came to. */
export function countMeasured(ankle: boolean, toe: boolean, balance: boolean): number {
  return [ankle, toe, balance].filter(Boolean).length;
}

/** Two readings of the same ankle differ by a degree or two, so a gap
 * smaller than this is not said to be one. */
const SAME_WITHIN = 3;

/**
 * Which ankle bends less, and by how much; `side` null when they bend about
 * the same. An observation, in degrees: never which one is "the bad one".
 */
export function ankleGap(left: number, right: number): { side: 'left' | 'right' | null; diff: number } {
  const diff = Math.abs(left - right);
  if (diff < SAME_WITHIN) return { side: null, diff };
  return { side: left < right ? 'left' : 'right', diff };
}

const DAY_MS = 86_400_000;
/** The first progress check: the first test is the day after the plan
 * starts, and the next a fortnight after it. */
const REMEASURE_DAYS = 15;

/**
 * When the ankles are measured again, epoch ms: with the plan's next test
 * when there is one a week or more ahead of the last measurement, and never
 * later than a fortnight and a day after it, so a test done without the
 * ankles does not push them another fortnight out.
 */
export function remeasureAt(lastAt: number, nextTestAt: number | null): number {
  const own = lastAt + REMEASURE_DAYS * DAY_MS;
  if (nextTestAt == null || nextTestAt - lastAt < 7 * DAY_MS) return own;
  return Math.min(own, nextTestAt);
}

/** Whether that day has come: from its first minute, local time. */
export function remeasureDue(at: number, now: number): boolean {
  return now >= new Date(at).setHours(0, 0, 0, 0);
}
