import { beforeEach, describe, expect, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

import { afterDayOneDue, takeAfterDayOne } from './after-day-one-rule';

const KEY = 'offer/after-day1-shown';
const due = { looking: true, dayOneDone: true, tourDone: true };

beforeEach(() => kv.remove(KEY));

describe('the offer after Day 1', () => {
  test('due only while looking around, with Day 1 done and the tour over, and never twice', () => {
    expect(afterDayOneDue({ ...due, shown: false })).toBe(true);
    expect(afterDayOneDue({ ...due, looking: false, shown: false })).toBe(false);
    expect(afterDayOneDue({ ...due, dayOneDone: false, shown: false })).toBe(false);
    expect(afterDayOneDue({ ...due, tourDone: false, shown: false })).toBe(false);
    expect(afterDayOneDue({ ...due, shown: true })).toBe(false);
  });

  test('asks once per person, and remembers it on the phone', () => {
    const asked: string[] = [];
    const ask = () => asked.push('after_day1');
    expect(takeAfterDayOne(due, ask)).toBe(true);
    expect(kv.getBoolean(KEY)).toBe(true);
    // A second "Not now", a relaunch, another finished session: only a tap on
    // something locked raises the plans from now on.
    expect(takeAfterDayOne(due, ask)).toBe(false);
    expect(asked).toEqual(['after_day1']);
  });

  test('not before Day 1, not during the tour, not for somebody who bought: and nothing is spent', () => {
    const asked: string[] = [];
    const ask = () => asked.push('after_day1');
    expect(takeAfterDayOne({ ...due, dayOneDone: false }, ask)).toBe(false);
    expect(takeAfterDayOne({ ...due, tourDone: false }, ask)).toBe(false);
    expect(takeAfterDayOne({ ...due, looking: false }, ask)).toBe(false);
    expect(asked).toEqual([]);
    expect(kv.getBoolean(KEY)).toBeUndefined();
    expect(takeAfterDayOne(due, ask)).toBe(true);
  });
});
