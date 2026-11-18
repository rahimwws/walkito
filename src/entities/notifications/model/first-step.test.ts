import { describe, expect, test } from 'bun:test';

import { EARLY_MS, clampWake, firstStepAt, firstStepDueInApp, wakeLabel } from './first-step';

const at = (y: number, m: number, d: number, h = 0, min = 0) => new Date(y, m - 1, d, h, min, 0, 0).getTime();

describe('clampWake', () => {
  test('whole minutes inside one day', () => {
    expect(clampWake(420)).toBe(420);
    expect(clampWake(420.4)).toBe(420);
    expect(clampWake(1440)).toBe(0);
    expect(clampWake(-30)).toBe(1410);
    expect(clampWake(Number.NaN)).toBe(420);
  });
});

describe('firstStepAt', () => {
  test('tomorrow at her wake time, never a quarter of an hour before it', () => {
    expect(firstStepAt(at(2026, 11, 18, 21, 40), 420)).toBe(at(2026, 11, 19, 7, 0));
    expect(firstStepAt(at(2026, 11, 18, 21, 40), 6 * 60 + 15)).toBe(at(2026, 11, 19, 6, 15));
  });
  test('always tomorrow, even finished before her wake time', () => {
    expect(firstStepAt(at(2026, 11, 18, 5, 0), 420)).toBe(at(2026, 11, 19, 7, 0));
  });
  test('across the end of a month and a year', () => {
    expect(firstStepAt(at(2026, 11, 30, 12), 480)).toBe(at(2026, 12, 1, 8, 0));
    expect(firstStepAt(at(2026, 12, 31, 23, 59), 420)).toBe(at(2027, 1, 1, 7, 0));
  });
});

describe('firstStepDueInApp', () => {
  const due = at(2026, 11, 19, 7, 0);
  test('the first open that morning, from two hours before her wake time', () => {
    expect(firstStepDueInApp(due - EARLY_MS, due, false)).toBe(true);
    expect(firstStepDueInApp(at(2026, 11, 19, 7, 5), due, false)).toBe(true);
    expect(firstStepDueInApp(at(2026, 11, 19, 12, 59), due, false)).toBe(true);
  });
  test('not before then, not past noon or six hours after waking, not another day', () => {
    expect(firstStepDueInApp(due - EARLY_MS - 60_000, due, false)).toBe(false);
    expect(firstStepDueInApp(at(2026, 11, 19, 13, 0), due, false)).toBe(false);
    const early = at(2026, 11, 19, 5, 0);
    expect(firstStepDueInApp(at(2026, 11, 19, 11, 59), early, false)).toBe(true);
    expect(firstStepDueInApp(at(2026, 11, 19, 12, 0), early, false)).toBe(false);
    expect(firstStepDueInApp(at(2026, 11, 18, 22, 0), due, false)).toBe(false);
    expect(firstStepDueInApp(at(2026, 11, 20, 7, 30), due, false)).toBe(false);
  });
  test('a late riser gets six hours after her wake time', () => {
    const late = at(2026, 11, 19, 10, 30);
    expect(firstStepDueInApp(at(2026, 11, 19, 16, 0), late, false)).toBe(true);
    expect(firstStepDueInApp(at(2026, 11, 19, 16, 30), late, false)).toBe(false);
  });
  test('once: handled, or nothing laid, is never due', () => {
    expect(firstStepDueInApp(at(2026, 11, 19, 7, 5), due, true)).toBe(false);
    expect(firstStepDueInApp(at(2026, 11, 19, 7, 5), null, false)).toBe(false);
  });
});

describe('wakeLabel', () => {
  test('as the language writes a time of day', () => {
    expect(wakeLabel(420, 'en')).toBe('7:00 AM');
    expect(wakeLabel(420, 'de')).toMatch(/^0?7:00$/);
    expect(wakeLabel(18 * 60 + 5, 'en')).toBe('6:05 PM');
  });
});
