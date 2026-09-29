/**
 * The count before a move starts: three, two, one, go.
 *
 * Pure arithmetic over wall-clock time, kept apart from the overlay that draws
 * it for the same reason `tempo.ts` is kept apart from the player: a number
 * derived from elapsed time is something a test can pin down, and the same
 * number derived inside an interval callback is something that can only be
 * watched.
 *
 * Wall-clock rather than counted ticks. The overlay re-reads this ten times a
 * second, and a count that decremented once per interval would drift the moment
 * a frame ran late — or stop dead while the app was in the background and pick
 * up at "2" when it came back, when the three seconds were long gone.
 */

/** Where the count starts. Three is the number every gym class, starting gun
 * and video timer uses — long enough to get a foot into position, short enough
 * not to feel like waiting. */
export const COUNT_IN_FROM = 3;

/** One number per second. */
export const COUNT_IN_TICK_MS = 1000;

/** The whole count, from the first number to go. */
export const COUNT_IN_MS = COUNT_IN_FROM * COUNT_IN_TICK_MS;

/**
 * The number showing `elapsedMs` into the count: 3, 2, 1, then 0 for go.
 *
 * Clamped at both ends. A negative elapsed — a clock that moved backwards, or a
 * `from` stamped a moment in the future — still reads as the first number
 * rather than as four, and anything past the end is go however long ago it was.
 */
export function countInAt(elapsedMs: number): number {
  if (!Number.isFinite(elapsedMs) || elapsedMs <= 0) return COUNT_IN_FROM;
  return Math.max(0, COUNT_IN_FROM - Math.floor(elapsedMs / COUNT_IN_TICK_MS));
}
