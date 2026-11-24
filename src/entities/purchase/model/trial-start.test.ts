import { describe, expect, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

import { noteTrial, trialDay, trialDayOf } from './trial-start';

describe('trial days', () => {
  const start = new Date(2026, 10, 10, 21, 30).getTime();

  test('the start is day 1, by calendar day', () => {
    expect(trialDayOf(start, new Date(2026, 10, 10, 23, 59).getTime())).toBe(1);
    expect(trialDayOf(start, new Date(2026, 10, 11, 0, 5).getTime())).toBe(2);
    expect(trialDayOf(start, new Date(2026, 10, 12, 9, 0).getTime())).toBe(3);
    expect(trialDayOf(start, new Date(2026, 10, 16, 9, 0).getTime())).toBe(7);
  });

  test('read only while the trial runs', () => {
    kv.remove('purchase/trial-started-at');
    noteTrial(start);
    expect(trialDay(new Date(2026, 10, 11, 8, 0).getTime())).toBe(2);
    noteTrial(null);
    expect(trialDay(new Date(2026, 10, 11, 8, 0).getTime())).toBeNull();
    kv.remove('purchase/trial-started-at');
    kv.remove('purchase/trial-running');
  });
});
