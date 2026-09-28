import { beforeEach, describe, expect, test } from 'bun:test';

import { NO_SIGNALS } from '@/entities/health/model/metrics';
import { BRIEF_EN } from '@/shared/lib/i18n/catalogue/en/home';
import { kv } from '@/shared/lib/storage';

import { readBrief } from './brief-state';

// Other files log pain into the shared store; this file owns it.
beforeEach(() => {
  kv.clearAll();
});

const base = {
  name: '',
  cursor: 20,
  todayPain: 1,
  doneToday: false,
  streak: 5,
  health: { ...NO_SIGNALS, availability: 'ready' as const },
};

describe('the weekly plan in the morning line', () => {
  test('12 · a missed day → the next morning says "let’s not make it two"', () => {
    expect(readBrief({ ...base, missedYesterday: true }).state).toBe('missed-yesterday');
    const copy = JSON.stringify(BRIEF_EN['missed-yesterday']);
    expect(copy).toContain('Let’s not make it two');
    // Never a count of days missed.
    expect(copy).not.toMatch(/\{days\}|\d+ days/);
  });

  test('a test three days out is named; four days out is not', () => {
    expect(readBrief({ ...base, daysToTest: 3 }).state).toBe('test-soon');
    expect(readBrief({ ...base, daysToTest: 4 }).state).not.toBe('test-soon');
  });

  test('a reached goal outranks the rest of the plan’s lines, but never pain', () => {
    const goalReached = { goal: 'Strong arch', next: 'Strong calves' };
    expect(readBrief({ ...base, goalReached, missedYesterday: true }).state).toBe('goal-reached');
    expect(readBrief({ ...base, goalReached, todayPain: 8 }).state).toBe('flare');
  });

  test('something new this week is said until the session is done', () => {
    expect(readBrief({ ...base, newThisWeek: 'Heel drops' }).state).toBe('new-this-week');
    expect(readBrief({ ...base, newThisWeek: 'Heel drops', doneToday: true }).state).not.toBe('new-this-week');
  });

  test('the weekly plan’s test day replaces the fixed program’s checkpoints', () => {
    expect(readBrief({ ...base, testToday: true }).state).toBe('retest');
    expect(readBrief({ ...base, cursor: 13, testToday: false }).state).not.toBe('retest');
  });
});
