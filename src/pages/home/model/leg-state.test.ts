import { describe, expect, test } from 'bun:test';

import { legState, type LegStateInput } from './readiness';

const base: LegStateInput = { pain: 2, painYesterday: null, stepsYesterday: null, stepsUsual: null, sleepMinutes: null };

describe('legState', () => {
  test('no check-in asks, whatever else is known', () => {
    expect(legState({ ...base, pain: null, sleepMinutes: 200, stepsYesterday: 20000, stepsUsual: 8000 }).id).toBe('unknown');
  });

  test('a sore morning comes before any trend', () => {
    expect(legState({ ...base, pain: 7, painYesterday: 9 }).id).toBe('sore');
  });

  test('a change of 2 against yesterday', () => {
    expect(legState({ ...base, pain: 3, painYesterday: 5 }).id).toBe('calmer');
    expect(legState({ ...base, pain: 5, painYesterday: 3 }).id).toBe('tender');
    expect(legState({ ...base, pain: 3, painYesterday: 4 }).id).toBe('fine');
  });

  test('a big day yesterday, then a short night', () => {
    expect(legState({ ...base, stepsYesterday: 11200, stepsUsual: 8000, sleepMinutes: 300 }).id).toBe('worked');
    expect(legState({ ...base, stepsYesterday: 9000, stepsUsual: 8000, sleepMinutes: 300 }).id).toBe('tired');
    expect(legState({ ...base, stepsYesterday: 20000, stepsUsual: 0 }).id).toBe('fine');
  });

  test('the morning reading on its own', () => {
    expect(legState({ ...base, pain: 5 }).id).toBe('achy');
    expect(legState({ ...base, pain: 1 }).id).toBe('fine');
    expect(legState({ ...base, pain: 0, sleepMinutes: 480 }).id).toBe('fresh');
  });

  test('returns the values it read', () => {
    expect(legState({ ...base, pain: 3, painYesterday: 6, stepsYesterday: 4000, stepsUsual: 8000, sleepMinutes: 420 })).toEqual({
      id: 'calmer',
      pain: 3,
      painChange: -3,
      stepsRatio: 0.5,
      sleepMinutes: 420,
    });
  });
});
