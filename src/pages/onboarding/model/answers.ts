/**
 * Reading what the user picked, without dragging the step table along.
 *
 * Its own file because `steps.ts` imports icon components, which makes it a
 * React Native module and therefore unloadable under `bun test`. The rule for
 * answers is arithmetic on strings and belongs somewhere a test can reach it —
 * the last thing that hid in `steps.ts` was a comparison that was false for
 * every possible input, and nothing could have caught it there.
 */

/**
 * Whether a choice step's answer is one of `wanted`.
 *
 * Choice answers are stored as arrays — the page's `canAdvance` checks
 * `Array.isArray(answer)` — and the watch step's `skipWhen` compared that array
 * against a string: `answers.watch !== 'whoop'`. An array is never equal to a
 * string, so both halves of that condition held for every answer and the sync
 * guide was skipped for everybody, whatever they picked. Nothing threw and
 * nothing logged; the screen simply never appeared, which is why it read as a
 * missing video rather than as a broken condition.
 *
 * A function rather than a corrected comparison, so the next `skipWhen` written
 * against an answer cannot make the same mistake by hand.
 */
export function chose(
  answers: Readonly<Record<string, unknown>>,
  key: string,
  ...wanted: readonly string[]
): boolean {
  const answer = answers[key];
  const values = Array.isArray(answer) ? answer : [answer];
  return values.some((value) => typeof value === 'string' && wanted.includes(value));
}
