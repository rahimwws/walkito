import type { RetestResult } from '@/entities/program';

/**
 * The numbers the Progress screen shows, worked out from what is on file.
 *
 * Pure, so the rules — what "since your first test" compares, when a mean is
 * drawn — can be tested without a screen.
 */

/** A mean needs this many mornings in its seven days, or it is not drawn. */
export const MIN_READINGS_FOR_MEAN = 4;
const MEAN_WINDOW = 7;

/**
 * The 7-day rolling mean of first-step pain, one value per day, null where the
 * seven days ending there hold fewer than `MIN_READINGS_FOR_MEAN` readings.
 */
export function rollingMean(series: readonly (number | null)[]): (number | null)[] {
  return series.map((_, end) => {
    const window = series.slice(Math.max(0, end - MEAN_WINDOW + 1), end + 1).filter((p): p is number => p != null);
    if (window.length < MIN_READINGS_FOR_MEAN) return null;
    return window.reduce((sum, p) => sum + p, 0) / window.length;
  });
}

export type StrengthRow = { key: 'calf' | 'balance' | 'arch'; from: number; to: number | null };

/**
 * The tests, first against latest: "Calf raises 11 → 18".
 *
 * The weaker leg for the calf, as the goal reads it; the sore side for the
 * holds. `to` is null while there has been only the one test.
 */
export function strengthRows(results: readonly RetestResult[]): StrengthRow[] {
  if (results.length === 0) return [];
  const first = results[0];
  const latest = results.length > 1 ? results[results.length - 1] : null;
  const calf = (r: RetestResult) => Math.min(r.calf.left, r.calf.right);
  return [
    { key: 'calf', from: calf(first), to: latest == null ? null : calf(latest) },
    { key: 'balance', from: first.balance.left, to: latest?.balance.left ?? null },
    { key: 'arch', from: first.arch.left, to: latest?.arch.left ?? null },
  ];
}
