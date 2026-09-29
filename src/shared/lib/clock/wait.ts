/**
 * Waits, as people read them.
 *
 * Pure arithmetic, apart from the hook that drives it (`use-countdown.ts`), so
 * the rounding is tested on its own.
 */

const MINUTE_MS = 60_000;
const SECOND_MS = 1000;
/** How far past a crossing a tick lands. See `nextTickIn`. */
const TICK_SLACK_MS = 5;

/**
 * A wait as whole hours and minutes, the minutes rounded up.
 *
 * Up, never down or to the nearest: something 40 seconds away is "1m", not
 * "0h 0m". A countdown that reads zero while the thing it counts to is still
 * shut is a countdown that has lied, and whoever taps through on it finds a
 * padlock. Rounded up, zero only ever shows once the wait is over.
 */
export function splitWait(ms: number): { hours: number; minutes: number } {
  if (!(ms > 0)) return { hours: 0, minutes: 0 };
  const total = Math.ceil(ms / MINUTE_MS);
  return { hours: Math.floor(total / 60), minutes: total % 60 };
}

/**
 * How long until what `splitWait` shows next changes.
 *
 * The rounded-up minute moves when the time left crosses a whole minute, so
 * the next tick is lined up on that crossing rather than on the wall clock's —
 * a countdown started at 5m 30s left changes 30 seconds later, not 60. Under a
 * minute a screen may want the seconds, so it ticks every second, lined up the
 * same way. A little past the crossing, not on it: a timer that lands a
 * millisecond early would read the old minute and wait another full one.
 */
export function nextTickIn(left: number): number {
  const step = left <= MINUTE_MS ? SECOND_MS : MINUTE_MS;
  return (left % step || step) + TICK_SLACK_MS;
}

