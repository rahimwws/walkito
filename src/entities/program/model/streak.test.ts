import { describe, expect, test } from 'bun:test';

import { attendanceLevel, streakThrough } from './streak';

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
    expect({ current: streak.current, longest: streak.longest, total: streak.total }).toEqual({
      current: 0,
      longest: 0,
      total: 0,
    });
  });

  test('day one, attended', () => {
    expect(streakThrough(1, pattern('x')).current).toBe(1);
  });

  test('day one, nothing logged yet', () => {
    // Day 1 is still open, and there is no yesterday to fall back to.
    expect(streakThrough(1, pattern('.')).current).toBe(0);
  });
});

describe('freezes', () => {
  test('a banked freeze bridges one missed day and is counted as spent', () => {
    // Day 8 banks the first freeze; day 9 is missed and covered.
    //                                     1234567890
    const streak = streakThrough(10, pattern('xxxxxxxx.x'), true);
    expect(streak.current).toBe(9);
    expect(streak.frozen).toEqual([9]);
    expect(streak.freezes).toBe(0);
  });

  test('a freeze neither breaks the run nor adds to it', () => {
    const streak = streakThrough(10, pattern('xxxxxxxx.x'), true);
    expect(streak.total).toBe(9);
  });

  test('nothing banked in the first week, so a gap there is a gap', () => {
    const streak = streakThrough(5, pattern('xx.xx'), true);
    expect(streak.current).toBe(2);
    expect(streak.frozen).toEqual([]);
  });

  test('an empty today spends nothing', () => {
    const streak = streakThrough(9, pattern('xxxxxxxx.'), true);
    expect(streak.current).toBe(8);
    expect(streak.frozen).toEqual([]);
    expect(streak.freezes).toBe(1);
  });

  test('two banked at most', () => {
    const streak = streakThrough(30, () => true, true);
    expect(streak.freezes).toBe(2);
  });
});

/**
 * The rule itself: what a day did for the feet, never what the plan said
 * about it. A rest day counts on its own only before the cutover, so the runs
 * people had when the rule changed stay whole.
 */
describe('attendanceLevel', () => {
  const nothing = { painMorning: null, sessionCompleted: false, libraryDone: false };

  test('a plan session is a full day', () => {
    expect(attendanceLevel({ log: { ...nothing, sessionCompleted: true }, rest: false, beforeCutover: false })).toBe('full');
  });

  test('a Library routine is a full day', () => {
    expect(attendanceLevel({ log: { ...nothing, libraryDone: true }, rest: false, beforeCutover: false })).toBe('full');
  });

  test('a check-in alone is a check-in day, and 0 is a check-in', () => {
    expect(attendanceLevel({ log: { ...nothing, painMorning: 4 }, rest: false, beforeCutover: false })).toBe('checkin');
    expect(attendanceLevel({ log: { ...nothing, painMorning: 0 }, rest: false, beforeCutover: false })).toBe('checkin');
  });

  test('a check-in and a session is full', () => {
    expect(
      attendanceLevel({ log: { ...nothing, painMorning: 2, sessionCompleted: true }, rest: false, beforeCutover: false }),
    ).toBe('full');
  });

  test('from the cutover, a rest day with nothing on it does not count', () => {
    expect(attendanceLevel({ log: null, rest: true, beforeCutover: false })).toBe('none');
    expect(attendanceLevel({ log: nothing, rest: true, beforeCutover: false })).toBe('none');
  });

  test('from the cutover, a check-in is enough on a rest day', () => {
    expect(attendanceLevel({ log: { ...nothing, painMorning: 0 }, rest: true, beforeCutover: false })).toBe('checkin');
  });

  test('before the cutover, a rest day still counts on its own', () => {
    expect(attendanceLevel({ log: null, rest: true, beforeCutover: true })).toBe('checkin');
  });

  test('a day that is not rest, with nothing on it, never counts', () => {
    expect(attendanceLevel({ log: null, rest: false, beforeCutover: true })).toBe('none');
    expect(attendanceLevel({ log: nothing, rest: false, beforeCutover: false })).toBe('none');
  });
});
