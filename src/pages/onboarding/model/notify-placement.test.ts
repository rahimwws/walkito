import { afterEach, describe, expect, test } from 'bun:test';

import { decideNotifyPlacement, notifyAfterDayOne, resetNotifyPlacement, withNotifyAfterDayOne } from './notify-placement';

/** The keys of `STEPS` from the act-2 questions to the end, in their order,
 * with their acts. (The table itself cannot load under the test runner: it
 * names the store by platform.) */
const TABLE = [
  ['midway', 2], ['source', 2], ['why', 2], ['notify', 3], ['habit', 3], ['planDays', 3], ['planMinutes', 3],
  ['equipment', 3], ['life', 2], ['wake', 2], ['test-toe', 3], ['test-result', 3], ['first-move', 3], ['felt', 3],
  ['felt-answer', 3], ['praise', 3], ['routine', 3], ['sign', 3], ['building', 3], ['plan-peek', 3],
].map(([key, act]) => ({ key: key as string, act: act as number }));

const keys = (steps: readonly { key: string }[]) => steps.map((step) => step.key);

describe('the notification ask after Day 1', () => {
  afterEach(() => resetNotifyPlacement());

  test('moves only the ask, to after the first move and its praise', () => {
    const moved = keys(withNotifyAfterDayOne(TABLE));
    expect(moved.length).toBe(TABLE.length);
    expect(moved.indexOf('notify')).toBe(moved.indexOf('praise') + 1);
    expect(moved.indexOf('routine')).toBe(moved.indexOf('notify') + 1);
    expect(moved.filter((key) => key !== 'notify')).toEqual(keys(TABLE).filter((key) => key !== 'notify'));
  });

  test('both orders are the same up to the question the decision is made on', () => {
    const moved = keys(withNotifyAfterDayOne(TABLE));
    const at = keys(TABLE).indexOf('source');
    expect(moved.slice(0, at + 2)).toEqual(keys(TABLE).slice(0, at + 2));
  });

  test('a table without the ask or its anchor is left as it is', () => {
    const noAsk = TABLE.filter((step) => step.key !== 'notify');
    expect(withNotifyAfterDayOne(noAsk)).toBe(noAsk);
    const noAnchor = TABLE.filter((step) => step.key !== 'praise');
    expect(withNotifyAfterDayOne(noAnchor)).toBe(noAnchor);
  });

  test('undecided until the flow decides; no flag means the current order, kept', () => {
    expect(notifyAfterDayOne()).toBeNull();
    // No analytics under the test runner: the flag reads as null, the control.
    expect(decideNotifyPlacement()).toBe(false);
    expect(notifyAfterDayOne()).toBe(false);
  });
});
