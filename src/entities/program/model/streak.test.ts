import { describe, expect, test } from 'bun:test';

import { streakThrough } from './streak';

/**
 * A fortnight written as a string, one character per day.
 *
 * `x` is attended, `.` is not. Day 1 is the first character, so the pattern
 * reads left to right the way a calendar does.
 */
function pattern(days: string): (dayNumber: number) => boolean {
  return (dayNumber) => days[dayNumber - 1] === 'x';
}

describe('streakThrough', () => {
  test('counts an unbroken run ending today', () => {
    const streak = streakThrough(5, pattern('xxxxx'));
    expect(streak.current).toBe(5);
    expect(streak.longest).toBe(5);
    expect(streak.total).toBe(5);
  });

  test('breaks the run on a missed day', () => {
    //                                    1234567
    const streak = streakThrough(7, pattern('xxx.xxx'));
    expect(streak.current).toBe(3);
    expect(streak.longest).toBe(3);
    expect(streak.total).toBe(6);
  });

  test('keeps the best run after it has been broken', () => {
    //                                    12345678
    const streak = streakThrough(8, pattern('xxxxx.xx'));
    expect(streak.current).toBe(2);
    expect(streak.longest).toBe(5);
    expect(streak.total).toBe(7);
  });

  /**
   * The rule that makes the number usable at nine in the morning.
   *
   * Nothing has been logged today yet. That is not a broken streak — it is a
   * day that has not finished. Counting it as a break would show a zero for
   * most of every day and then silently repair itself, which reads as a bug and
   * punishes the user for the hour they opened the app.
   */
  test('an empty today does not break the run', () => {
    const streak = streakThrough(4, pattern('xxx.'));
    expect(streak.current).toBe(3);
  });

  /** Yesterday, by contrast, is settled. A gap there is a real gap. */
  test('an empty yesterday does break the run', () => {
    const streak = streakThrough(4, pattern('xx.x'));
    expect(streak.current).toBe(1);
  });

  test('an empty today after an empty yesterday leaves nothing', () => {
    const streak = streakThrough(4, pattern('xx..'));
    expect(streak.current).toBe(0);
    expect(streak.longest).toBe(2);
  });

  test('longest is never smaller than current', () => {
    const streak = streakThrough(3, pattern('xxx'));
    expect(streak.longest).toBeGreaterThanOrEqual(streak.current);
  });

  test('a plan with nothing logged reads zero rather than throwing', () => {
    const streak = streakThrough(10, pattern('..........'));
    expect(streak).toEqual({ current: 0, longest: 0, total: 0 });
  });

  test('day one, attended', () => {
    expect(streakThrough(1, pattern('x')).current).toBe(1);
  });

  test('day one, nothing logged yet', () => {
    // Day 1 is still open, and there is no yesterday to fall back to.
    expect(streakThrough(1, pattern('.')).current).toBe(0);
  });
});
