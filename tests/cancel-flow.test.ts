import { describe, expect, test } from 'bun:test';

import {
  SHORTEST_MINUTES,
  firstStepChange,
  lighterPlan,
  testChanges,
  yourChanges,
  type FirstStep,
} from '../src/pages/settings/model/cancel-math';

/**
 * The cancel flow's arithmetic: how much lighter "Make my plan lighter" makes
 * the plan, and which of somebody's own numbers "My feet are better" may
 * quote. The second is the one that matters: a card that congratulates
 * somebody on an improvement their log does not show is the app claiming
 * something it cannot stand behind.
 */

/** A morning reading on each of `days`, all at `score`. */
function mornings(days: readonly number[], score: number): FirstStep[] {
  return days.map((day) => ({ day, score }));
}

const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

describe('lighterPlan', () => {
  test('shorter sessions first', () => {
    expect(lighterPlan({ daysPerWeek: 7, defaultMinutes: 10 })).toEqual({ defaultMinutes: 5 });
    expect(lighterPlan({ daysPerWeek: 7, defaultMinutes: 5 })).toEqual({ defaultMinutes: 3 });
  });

  test('then fewer of them, once they are as short as they go', () => {
    expect(lighterPlan({ daysPerWeek: 7, defaultMinutes: 3 })).toEqual({ daysPerWeek: 5 });
    expect(lighterPlan({ daysPerWeek: 5, defaultMinutes: 3 })).toEqual({ daysPerWeek: 3 });
  });

  test('nothing when the plan is already as light as it goes', () => {
    expect(lighterPlan({ daysPerWeek: 3, defaultMinutes: SHORTEST_MINUTES })).toBeNull();
  });
});

describe('firstStepChange', () => {
  test('the first logged week against the last seven days, when it came down', () => {
    const readings = [...mornings(range(1, 7), 6), ...mornings(range(22, 28), 3)];
    expect(firstStepChange(readings, 28)).toEqual({ metric: 'pain', from: 6, to: 3 });
  });

  test('the first week starts at the first reading, not at day one', () => {
    const readings = [...mornings(range(5, 11), 7), ...mornings(range(24, 30), 4)];
    expect(firstStepChange(readings, 30)).toEqual({ metric: 'pain', from: 7, to: 4 });
  });

  test('to a tenth of a point, as the card shows it', () => {
    const readings = [
      { day: 1, score: 6 },
      { day: 2, score: 7 },
      { day: 3, score: 6 },
      ...mornings([20, 21, 22], 3),
    ];
    expect(firstStepChange(readings, 22)).toEqual({ metric: 'pain', from: 6.3, to: 3 });
  });

  test('less than a point is a good week, not a change', () => {
    const readings = [...mornings(range(1, 7), 5), ...mornings(range(22, 28), 4.5)];
    expect(firstStepChange(readings, 28)).toBeNull();
  });

  test('worse, or the same, is never quoted', () => {
    expect(firstStepChange([...mornings(range(1, 7), 3), ...mornings(range(22, 28), 5)], 28)).toBeNull();
    expect(firstStepChange([...mornings(range(1, 7), 4), ...mornings(range(22, 28), 4)], 28)).toBeNull();
  });

  test('two weeks that overlap are one week, and say nothing', () => {
    const readings = mornings(range(1, 12), 5).map((reading) => ({ ...reading, score: reading.day <= 6 ? 7 : 2 }));
    expect(firstStepChange(readings, 12)).toBeNull();
  });

  test('a week needs three mornings to be quoted', () => {
    const thin = [...mornings([1, 2], 7), ...mornings(range(22, 28), 2)];
    expect(firstStepChange(thin, 28)).toBeNull();
    const thinNow = [...mornings(range(1, 7), 7), ...mornings([27, 28], 2)];
    expect(firstStepChange(thinNow, 28)).toBeNull();
  });

  test('no readings, no change', () => {
    expect(firstStepChange([], 30)).toBeNull();
  });
});

describe('testChanges', () => {
  const first = { calf: 9, arch: 20, balance: 12 };

  test('the first test against the latest, past each test’s own margin', () => {
    expect(testChanges([first, { calf: 15, arch: 21, balance: 20 }])).toEqual([
      { metric: 'calf', from: 9, to: 15 },
      { metric: 'balance', from: 12, to: 20 },
    ]);
  });

  test('a gain inside the margin is not quoted', () => {
    expect(testChanges([first, { calf: 10, arch: 24, balance: 16 }])).toEqual([]);
  });

  test('the latest test, not the one in between', () => {
    expect(testChanges([first, { calf: 30, arch: 20, balance: 12 }, { calf: 11, arch: 20, balance: 12 }])).toEqual([
      { metric: 'calf', from: 9, to: 11 },
    ]);
  });

  test('a first figure of zero is a test not done, never a starting point', () => {
    expect(testChanges([{ calf: 0, arch: 0, balance: 0 }, { calf: 15, arch: 30, balance: 20 }])).toEqual([]);
  });

  test('one test is nothing to compare', () => {
    expect(testChanges([first])).toEqual([]);
  });
});

describe('yourChanges', () => {
  test('the mornings first, at most three rows', () => {
    const readings = [...mornings(range(1, 7), 6), ...mornings(range(22, 28), 2)];
    const tests = [
      { calf: 9, arch: 20, balance: 12 },
      { calf: 15, arch: 30, balance: 20 },
    ];
    expect(yourChanges(readings, 28, tests).map((change) => change.metric)).toEqual(['pain', 'calf', 'balance']);
  });

  test('nothing improved, nothing quoted', () => {
    expect(yourChanges([], 28, [])).toEqual([]);
  });
});
