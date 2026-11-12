import { describe, expect, test } from 'bun:test';

import { ankleGap, countMeasured, remeasureAt, remeasureDue } from './summary';

const DAY = 86_400_000;
const START = new Date(2026, 10, 12, 20, 0).getTime();

describe('countMeasured', () => {
  test('counts what the onboarding measured', () => {
    expect(countMeasured(true, true, false)).toBe(2);
    expect(countMeasured(true, true, true)).toBe(3);
    expect(countMeasured(false, true, false)).toBe(1);
  });
});

describe('ankleGap', () => {
  test('names the ankle that bends less', () => {
    expect(ankleGap(31, 38)).toEqual({ side: 'left', diff: 7 });
    expect(ankleGap(40, 33)).toEqual({ side: 'right', diff: 7 });
  });

  test('a gap inside the noise of the reading is no gap', () => {
    expect(ankleGap(35, 37).side).toBeNull();
    expect(ankleGap(36, 36).side).toBeNull();
    expect(ankleGap(34, 37).side).toBe('left');
  });
});

describe('remeasureAt', () => {
  test('the first progress check, before any test is on the calendar', () => {
    expect(remeasureAt(START, null)).toBe(START + 15 * DAY);
  });

  test('the day of the next test, when that comes first', () => {
    const test = START + 14 * DAY;
    expect(remeasureAt(START, test)).toBe(test);
  });

  test('a test done without the ankles does not push them a fortnight out', () => {
    expect(remeasureAt(START, START + 29 * DAY)).toBe(START + 15 * DAY);
  });

  test('a test in the next few days is too soon to measure again', () => {
    expect(remeasureAt(START, START + 2 * DAY)).toBe(START + 15 * DAY);
  });
});

describe('remeasureDue', () => {
  test('due from the first minute of the day', () => {
    const at = new Date(2026, 10, 27, 20, 0).getTime();
    expect(remeasureDue(at, new Date(2026, 10, 26, 23, 59).getTime())).toBe(false);
    expect(remeasureDue(at, new Date(2026, 10, 27, 0, 1).getTime())).toBe(true);
    expect(remeasureDue(at, new Date(2026, 10, 30, 9, 0).getTime())).toBe(true);
  });
});
