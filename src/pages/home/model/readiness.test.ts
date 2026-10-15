import { describe, expect, test } from 'bun:test';

import { readinessBand, readinessParts, readinessScore } from './readiness';

const none = { pain: null, sleepHours: null, stepsYesterday: null, stepsUsual: null };

describe('readinessScore', () => {
  test('nothing known is null', () => {
    expect(readinessScore(none)).toBeNull();
    expect(readinessScore({ ...none, stepsYesterday: 5000, stepsUsual: 0 })).toBeNull();
  });

  test('pain alone carries the whole score', () => {
    expect(readinessScore({ ...none, pain: 0 })).toBe(100);
    expect(readinessScore({ ...none, pain: 3 })).toBe(70);
    expect(readinessScore({ ...none, pain: 10 })).toBe(0);
  });

  test('everything good is 100', () => {
    expect(readinessScore({ pain: 0, sleepHours: 8, stepsYesterday: 8000, stepsUsual: 8000 })).toBe(100);
  });

  test('missing inputs re-weight the others', () => {
    // pain 4 -> 60 (w .5), sleep 6 h -> 50 (w .25): (30 + 12.5) / .75
    expect(readinessScore({ ...none, pain: 4, sleepHours: 6 })).toBe(57);
  });

  test('a quiet day is no penalty, a big one takes some room', () => {
    expect(readinessScore({ ...none, stepsYesterday: 2000, stepsUsual: 8000 })).toBe(100);
    expect(readinessScore({ ...none, stepsYesterday: 16000, stepsUsual: 8000 })).toBe(40);
    expect(readinessScore({ ...none, stepsYesterday: 40000, stepsUsual: 8000 })).toBe(40);
  });

  test('clamped and rounded', () => {
    expect(readinessScore({ ...none, pain: -3, sleepHours: 14 })).toBe(100);
    expect(Number.isInteger(readinessScore({ ...none, pain: 3, sleepHours: 7.3 }))).toBe(true);
  });
});

describe('readinessBand', () => {
  test('bands', () => {
    expect(readinessBand(0)).toBe('easy');
    expect(readinessBand(39)).toBe('easy');
    expect(readinessBand(40)).toBe('steady');
    expect(readinessBand(60)).toBe('ready');
    expect(readinessBand(80)).toBe('push');
  });
});

describe('readinessParts', () => {
  test('each input as its own part, null when unknown', () => {
    expect(readinessParts(none)).toEqual({ pain: null, sleep: null, steps: null });
    expect(readinessParts({ pain: 3, sleepHours: 6, stepsYesterday: 16000, stepsUsual: 8000 })).toEqual({
      pain: 70,
      sleep: 50,
      steps: 40,
    });
  });
});
