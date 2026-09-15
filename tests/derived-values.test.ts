/**
 * The derived numbers, and the promises attached to them.
 *
 * Part 7 of the spec replaces a screenful of hand-written figures with computed
 * ones, and the risk in that trade is a formula that produces something
 * plausible from nothing — a score out of an unmeasured user, a percentage out
 * of a division by zero. Most of what follows checks the floors and the guards
 * rather than the happy path.
 */

import { describe, expect, test } from 'bun:test';

import {
  maintenanceTransitionLines,
  regressionDetected,
  REGRESSION_COPY,
} from '@/entities/program/model/maintenance';
import {
  computeScore,
  consistencyNormalised,
  levelsAvgNormalised,
  painTrendNormalised,
} from '@/entities/program/model/score';
import {
  canRestore,
  freezesEarned,
  FREEZE_MAX,
  RESTORE_WINDOW_HOURS,
} from '@/entities/program/model/streak';
import { effectiveBlock, heelRaisePrescription } from '@/entities/program/model/prescription';
import { inSessionPain } from '@/entities/program/model/adapt';

describe('the score is total and honest', () => {
  test('an unmeasured user scores the floor, not a flattering default', () => {
    const score = computeScore({
      levels: null,
      painEarlier: null,
      painRecent: null,
      checkInsLast14: 0,
    });
    expect(score).toBe(0);
  });

  test('level 1 across the board is zero of the levels term, not a fifth of it', () => {
    expect(levelsAvgNormalised({ calf: 1, arch: 1, balance: 1, symmetry: 1 })).toBe(0);
    expect(levelsAvgNormalised({ calf: 5, arch: 5, balance: 5, symmetry: 5 })).toBe(1);
  });

  test('every term is finite for every degenerate input', () => {
    const inputs = [
      { earlier: 0, recent: 0 },
      { earlier: 0, recent: 5 },
      { earlier: -1, recent: 3 },
      { earlier: 3, recent: 9 },
    ];
    for (const { earlier, recent } of inputs) {
      const value = painTrendNormalised(earlier, recent);
      expect(Number.isFinite(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    }
  });

  test('pain going down scores, pain going up does not go negative', () => {
    expect(painTrendNormalised(6, 3)).toBeCloseTo(0.5, 5);
    expect(painTrendNormalised(3, 6)).toBe(0);
  });

  test('consistency is capped at the window', () => {
    expect(consistencyNormalised(0)).toBe(0);
    expect(consistencyNormalised(14)).toBe(1);
    expect(consistencyNormalised(99)).toBe(1);
  });

  test('a perfect user scores 100 and nobody scores more', () => {
    const score = computeScore({
      levels: { calf: 5, arch: 5, balance: 5, symmetry: 5 },
      painEarlier: 8,
      painRecent: 0,
      checkInsLast14: 14,
    });
    expect(score).toBe(100);
  });
});

describe('the plan steps back, never forward', () => {
  test('an offset walks the heel raise to the previous block', () => {
    expect(heelRaisePrescription(3, 0)?.label).toBe('4 × 10');
    expect(heelRaisePrescription(3, -1)?.label).toBe('3 × 12');
  });

  test('it never falls below the first loaded block', () => {
    expect(effectiveBlock(2, -1)).toBe(2);
    expect(effectiveBlock(2, -5)).toBe(2);
  });

  test('it never accelerates', () => {
    expect(effectiveBlock(3, 2)).toBe(3);
  });

  test('Block 1 prescribes no heel raise at all', () => {
    expect(heelRaisePrescription(1)).toBeNull();
  });
});

describe('a mid-session pain report', () => {
  test('below five, the session continues', () => {
    const outcome = inSessionPain(4, 0);
    expect(outcome.stop).toBe(false);
    expect(outcome.progressionOffset).toBe(0);
    expect(outcome.copy).toBeNull();
  });

  test('at five it ends — and it ends complete', () => {
    const outcome = inSessionPain(5, 0);
    expect(outcome.stop).toBe(true);
    // Stopping early is not failing. The day is not taken away from them.
    expect(outcome.markComplete).toBe(true);
    expect(outcome.progressionOffset).toBe(-1);
    expect(outcome.copy).toBe('Stopping here. Tomorrow starts one step back.');
  });
});

describe('freezes forgive a bad week', () => {
  test('one a week, banked to a maximum of two', () => {
    expect(freezesEarned(0)).toBe(0);
    expect(freezesEarned(6)).toBe(0);
    expect(freezesEarned(7)).toBe(1);
    expect(freezesEarned(14)).toBe(2);
    // Two months away does not arrive holding eight of them.
    expect(freezesEarned(60)).toBe(FREEZE_MAX);
  });

  test('a break can be put back inside the window and not after it', () => {
    expect(canRestore(0)).toBe(true);
    expect(canRestore(RESTORE_WINDOW_HOURS)).toBe(true);
    expect(canRestore(RESTORE_WINDOW_HOURS + 1)).toBe(false);
  });
});

describe('the maintenance handover', () => {
  test('it is a retention line, not a congratulation', () => {
    const lines = maintenanceTransitionLines({ name: 'Sam', calfBefore: 11, calfAfter: 24 });
    const text = lines.join(' ');

    expect(text).toContain('Sam');
    expect(text).toContain('11');
    expect(text).toContain('24');
    // The framing is the whole point of the screen and must survive edits.
    expect(text).toContain('About half of people lose this again within five years.');
    expect(text).toContain('Two sessions a week is how you stay in the other half.');
  });

  test('with no name it still reads as a sentence', () => {
    const lines = maintenanceTransitionLines({ name: '', calfBefore: 11, calfAfter: 24 });
    expect(lines[0].startsWith('You’re through.')).toBe(true);
  });

  test('an unmeasured calf drops the claim rather than inventing one', () => {
    const lines = maintenanceTransitionLines({ name: 'Sam', calfBefore: null, calfAfter: null });
    expect(lines.join(' ')).not.toContain('↗');
  });
});

describe('regression watch', () => {
  test('a dropped level offers the way back', () => {
    expect(
      regressionDetected({
        levelsNow: { calf: 2, arch: 3, balance: 3, symmetry: 2 },
        levelsBefore: { calf: 3, arch: 3, balance: 3, symmetry: 2 },
        painAboveBaselineDays: 0,
      }),
    ).toBe(true);
  });

  test('a week above baseline does too', () => {
    expect(
      regressionDetected({
        levelsNow: { calf: 3, arch: 3, balance: 3, symmetry: 2 },
        levelsBefore: { calf: 3, arch: 3, balance: 3, symmetry: 2 },
        painAboveBaselineDays: 7,
      }),
    ).toBe(true);
  });

  test('holding steady is not a regression', () => {
    expect(
      regressionDetected({
        levelsNow: { calf: 3, arch: 3, balance: 3, symmetry: 2 },
        levelsBefore: { calf: 3, arch: 3, balance: 3, symmetry: 2 },
        painAboveBaselineDays: 2,
      }),
    ).toBe(false);
  });

  test('the offer is phrased as a question, not a verdict', () => {
    expect(REGRESSION_COPY).toBe('Your numbers slipped. Want to run Build again?');
  });
});
