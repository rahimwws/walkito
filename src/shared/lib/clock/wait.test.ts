import { describe, expect, test } from 'bun:test';

import { nextTickIn, splitWait } from './wait';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

describe('splitWait', () => {
  test('whole hours and minutes', () => {
    expect(splitWait(2 * HOUR + 15 * MINUTE)).toEqual({ hours: 2, minutes: 15 });
  });

  /** The reason it rounds up: "0h 0m" must never show while the session is still shut. */
  test('anything left at all is at least a minute', () => {
    expect(splitWait(1)).toEqual({ hours: 0, minutes: 1 });
    expect(splitWait(40 * SECOND)).toEqual({ hours: 0, minutes: 1 });
  });

  test('a part-minute rounds up, and can carry into the hour', () => {
    expect(splitWait(5 * MINUTE + 1)).toEqual({ hours: 0, minutes: 6 });
    expect(splitWait(59 * MINUTE + 30 * SECOND)).toEqual({ hours: 1, minutes: 0 });
  });

  test('over, or nonsense, is zero rather than negative', () => {
    expect(splitWait(0)).toEqual({ hours: 0, minutes: 0 });
    expect(splitWait(-5 * MINUTE)).toEqual({ hours: 0, minutes: 0 });
    expect(splitWait(Number.NaN)).toEqual({ hours: 0, minutes: 0 });
  });
});

describe('nextTickIn', () => {
  test('lands just past the next whole minute left, where the shown minute changes', () => {
    const left = 5 * MINUTE + 30 * SECOND;
    const wait = nextTickIn(left);
    expect(wait).toBeGreaterThanOrEqual(30 * SECOND);
    expect(wait).toBeLessThan(31 * SECOND);
    expect(splitWait(left - wait).minutes).toBe(5);
  });

  test('on a whole minute, waits the full minute', () => {
    expect(Math.floor(nextTickIn(10 * MINUTE) / SECOND)).toBe(60);
  });

  test('every second in the last minute', () => {
    expect(Math.floor(nextTickIn(45 * SECOND + 200) / 100)).toBe(2);
    expect(Math.floor(nextTickIn(30 * SECOND) / SECOND)).toBe(1);
  });
});
