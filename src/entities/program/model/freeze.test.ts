import { beforeEach, describe, expect, test } from 'bun:test';

import {
  FREEZE_MAX,
  RESTORE_WINDOW_HOURS,
  canRestore,
  freezeUsedThisWeek,
  freezesEarned,
  freezesLeft,
  resetFreezes,
  spendFreeze,
} from './streak';

beforeEach(() => {
  resetFreezes();
});

describe('earning', () => {
  test('one a week', () => {
    expect(freezesEarned(0)).toBe(0);
    expect(freezesEarned(6)).toBe(0);
    expect(freezesEarned(7)).toBe(1);
    expect(freezesEarned(14)).toBe(2);
  });

  /** Someone returning after two months must not arrive holding eight. The
   * point is to absorb a bad week, not to make the number unbreakable. */
  test('capped however long you have been on the plan', () => {
    expect(freezesEarned(70)).toBe(FREEZE_MAX);
    expect(freezesEarned(365)).toBe(FREEZE_MAX);
  });

  test('a negative elapsed count is zero, not a crash', () => {
    expect(freezesEarned(-5)).toBe(0);
  });
});

describe('spending', () => {
  /**
   * The ledger that did not exist. `freezesEarned` was arithmetic over the
   * calendar with nothing underneath it, so "how many are left" and "has this
   * week been covered" were both unanswerable — and the second is a condition
   * the streak notification is not allowed to fire without.
   */
  test('a spent freeze comes off the balance', () => {
    expect(freezesLeft(14)).toBe(2);
    spendFreeze('2026-03-10');
    expect(freezesLeft(14)).toBe(1);
  });

  test('spending twice on one day counts once', () => {
    spendFreeze('2026-03-10');
    spendFreeze('2026-03-10');
    expect(freezesLeft(14)).toBe(1);
  });

  test('the balance never goes below zero', () => {
    spendFreeze('2026-03-10');
    spendFreeze('2026-03-11');
    spendFreeze('2026-03-12');
    expect(freezesLeft(7)).toBe(0);
  });
});

describe('covering a week', () => {
  test('a freeze covers the seven days after it', () => {
    spendFreeze('2026-03-10');
    expect(freezeUsedThisWeek('2026-03-10')).toBe(true);
    expect(freezeUsedThisWeek('2026-03-16')).toBe(true);
  });

  test('and stops covering on the eighth', () => {
    spendFreeze('2026-03-10');
    expect(freezeUsedThisWeek('2026-03-17')).toBe(false);
  });

  test('a freeze in the future does not cover today', () => {
    spendFreeze('2026-03-20');
    expect(freezeUsedThisWeek('2026-03-10')).toBe(false);
  });

  test('nothing spent, nothing covered', () => {
    expect(freezeUsedThisWeek('2026-03-10')).toBe(false);
  });
});

describe('restoring a break', () => {
  test('inside the window', () => {
    expect(canRestore(0)).toBe(true);
    expect(canRestore(RESTORE_WINDOW_HOURS)).toBe(true);
  });

  test('and outside it', () => {
    expect(canRestore(RESTORE_WINDOW_HOURS + 1)).toBe(false);
    expect(canRestore(-1)).toBe(false);
  });
});
