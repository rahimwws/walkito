import { describe, expect, test } from 'bun:test';

import { FOLLOW_UP_HOURS } from './ladder';
import { QUIET_FROM_MINUTES } from './limits';

/**
 * The retest tail, as arithmetic.
 *
 * The scheduler itself talks to `expo-notifications` and cannot be exercised
 * here, so what is pinned down is the rule that decides whether the second
 * message exists at all — which is the part with a judgement call in it.
 *
 * The spec forbids this message twice in its own NEVER SEND table ("Two in one
 * day — Full stop", "A second reminder for the same event — One ask, then let
 * it go") and asks for it once in the retest section. It was settled in favour
 * of sending, narrowly: it is the one event the user is provably waiting on an
 * answer from, it recurs fortnightly rather than daily, and any app open
 * rebuilds the window and drops it.
 */
function followUpAt(wakeAt: number): number {
  return wakeAt + FOLLOW_UP_HOURS * 60;
}

function allowed(wakeAt: number): boolean {
  return followUpAt(wakeAt) < QUIET_FROM_MINUTES;
}

describe('the retest follow-up', () => {
  test('lands six hours after the morning nudge', () => {
    const wake = 7 * 60 + 45;
    expect(followUpAt(wake)).toBe(13 * 60 + 45);
  });

  test('is allowed for any ordinary wake time', () => {
    for (const wake of [5 * 60, 7 * 60 + 30, 9 * 60, 11 * 60]) {
      expect(allowed(wake + 15)).toBe(true);
    }
  });

  /**
   * Quiet hours are absolute and outrank this. A very late riser pushes the
   * tail past half nine at night, and the correct outcome there is no second
   * message at all rather than one delivered in the evening.
   */
  test('is dropped rather than moved when it would fall in quiet hours', () => {
    const veryLate = 16 * 60;
    expect(followUpAt(veryLate)).toBeGreaterThanOrEqual(QUIET_FROM_MINUTES);
    expect(allowed(veryLate)).toBe(false);
  });

  test('the boundary is exclusive, not inclusive', () => {
    const exact = QUIET_FROM_MINUTES - FOLLOW_UP_HOURS * 60;
    expect(allowed(exact)).toBe(false);
    expect(allowed(exact - 1)).toBe(true);
  });
});
