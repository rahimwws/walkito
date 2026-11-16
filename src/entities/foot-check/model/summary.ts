import { kv } from '@/shared/lib/storage';

/**
 * The Foot Check as a whole: five things about a pair of feet, of which the
 * onboarding does two sitting down (which heel lifts first, the big toe lift)
 * and the plan's first test, on day 2, the rest (calves, arch, balance). The
 * count is what the result card and the paywall's first screen show, and it
 * is kept on the phone. Under 1.0.13 it counted what the phone measured; the
 * key is the same, and "done" is true of both.
 */
export const FOOT_CHECK_TOTAL = 5;

const KEY = 'foot-check/measured';

/** How many of the five are done, or 0 before the check. */
export function footCheckMeasured(): number {
  return Math.max(0, Math.min(FOOT_CHECK_TOTAL, kv.getNumber(KEY) ?? 0));
}

export function setFootCheckMeasured(count: number): void {
  if (count <= 0) kv.remove(KEY);
  else kv.set(KEY, Math.min(FOOT_CHECK_TOTAL, count));
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
