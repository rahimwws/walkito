import { describe, expect, test } from 'bun:test';

// The module itself, not the entity's barrel, which loads React Native.
import { symmetryPct } from '@/entities/program/model/levels';

import {
  CALF_PACE_MS,
  NOTHING_TAKEN,
  STATIONS,
  balanceLeg,
  clampEntry,
  clockLabel,
  fullMeasure,
  gapPct,
  goalValuesOf,
  legOrder,
  legsOf,
  measuredAt,
  meetsTarget,
  nextStation,
  raisesToShowGap,
  remainingFraction,
  repPhaseAt,
  resultRows,
  secondsLeftAt,
  segmentsFor,
  testWindowMs,
  toMeasurements,
  withTaken,
  type GoalTargets,
} from './test-day';

/** The program's targets as they stand — `GOAL_SPECS`, the measured four. */
const TARGETS: GoalTargets = {
  arch_hold: { target: 60, lowerIsBetter: false },
  calf_raises: { target: 25, lowerIsBetter: false },
  balance: { target: 30, lowerIsBetter: false },
  symmetry: { target: 10, lowerIsBetter: true },
};

describe('windows', () => {
  test('each test runs exactly as long as reaching its goal takes', () => {
    expect(testWindowMs('calf', TARGETS)).toBe(25 * CALF_PACE_MS);
    expect(testWindowMs('arch', TARGETS)).toBe(60_000);
    expect(testWindowMs('balance', TARGETS)).toBe(30_000);
  });

  test('a test run to the end reports the goal', () => {
    expect(fullMeasure('calf', testWindowMs('calf', TARGETS))).toBe(25);
    expect(fullMeasure('arch', testWindowMs('arch', TARGETS))).toBe(60);
    expect(fullMeasure('balance', testWindowMs('balance', TARGETS))).toBe(30);
  });

  test('the second calf set runs far enough to show the gap, and no further', () => {
    const second = (first: number) => fullMeasure('calf', testWindowMs('calf', TARGETS, first));
    // Well short of the goal: the goal already shows any gap worth reading.
    expect(second(15)).toBe(25);
    expect(second(22)).toBe(25);
    // Close to it: 23 against a leg cut off at 25 read as 8%, under the target.
    expect(second(23)).toBe(26);
    expect(second(24)).toBe(27);
    // The first set ran out the goal: both legs at it read as level.
    expect(second(25)).toBe(25);
  });

  test('a second leg that runs out its window never reads as level', () => {
    for (let first = 0; first < 25; first += 1) {
      const max = fullMeasure('calf', testWindowMs('calf', TARGETS, first));
      expect(meetsTarget('symmetry', symmetryPct(first, max), TARGETS)).toBe(false);
    }
  });

  test('the gap is worked out the way the program works it out', () => {
    for (const [a, b] of [[0, 0], [0, 7], [23, 25], [23, 26], [40, 23], [18, 20]] as const) {
      expect(gapPct(a, b)).toBe(symmetryPct(a, b));
    }
    expect(raisesToShowGap(23, 10)).toBe(26);
    expect(raisesToShowGap(0, 10)).toBe(1);
  });
});

describe('measuring', () => {
  const calf = testWindowMs('calf', TARGETS);
  const arch = testWindowMs('arch', TARGETS);

  test('a raise counts once it is complete, never the one in progress', () => {
    expect(measuredAt('calf', 0, calf)).toBe(0);
    expect(measuredAt('calf', 1_999, calf)).toBe(0);
    expect(measuredAt('calf', 2_000, calf)).toBe(1);
    expect(measuredAt('calf', 13_900, calf)).toBe(6);
  });

  test('a hold counts whole seconds', () => {
    expect(measuredAt('arch', 999, arch)).toBe(0);
    expect(measuredAt('arch', 24_600, arch)).toBe(24);
  });

  test('clamped at both ends', () => {
    expect(measuredAt('arch', -500, arch)).toBe(0);
    expect(measuredAt('arch', Number.NaN, arch)).toBe(0);
    expect(measuredAt('arch', 90_000, arch)).toBe(60);
    expect(measuredAt('calf', 80_000, calf)).toBe(25);
  });

  test('the countdown reads like a countdown', () => {
    const balance = testWindowMs('balance', TARGETS);
    expect(secondsLeftAt(0, balance)).toBe(30);
    expect(secondsLeftAt(100, balance)).toBe(30);
    expect(secondsLeftAt(1_000, balance)).toBe(29);
    expect(secondsLeftAt(29_100, balance)).toBe(1);
    expect(secondsLeftAt(30_000, balance)).toBe(0);
    expect(secondsLeftAt(45_000, balance)).toBe(0);
  });

  test('the calf countdown reads as a clock', () => {
    expect(clockLabel(50)).toBe('0:50');
    expect(clockLabel(7)).toBe('0:07');
    expect(clockLabel(60)).toBe('1:00');
    expect(clockLabel(-3)).toBe('0:00');
  });

  test('the ring empties from full to nothing', () => {
    expect(remainingFraction(0, arch)).toBe(1);
    expect(remainingFraction(30_000, arch)).toBe(0.5);
    expect(remainingFraction(70_000, arch)).toBe(0);
  });

  test('a paced raise is up for the first second and down for the second', () => {
    expect(repPhaseAt(0)).toBe('up');
    expect(repPhaseAt(999)).toBe('up');
    expect(repPhaseAt(1_000)).toBe('down');
    expect(repPhaseAt(2_000)).toBe('up');
  });

  test('a corrected figure stays inside what the test could measure', () => {
    expect(clampEntry(-1, 25)).toBe(0);
    expect(clampEntry(26, 25)).toBe(25);
    expect(clampEntry(12.4, 25)).toBe(12);
  });
});

describe('sides', () => {
  test('the sore leg goes first; both or unknown is left then right', () => {
    expect(legOrder('right')).toEqual(['right', 'left']);
    expect(legOrder('left')).toEqual(['left', 'right']);
    expect(legOrder('both')).toEqual(['left', 'right']);
    expect(legOrder(null)).toEqual(['left', 'right']);
    expect(balanceLeg('right')).toBe('right');
    expect(balanceLeg(undefined)).toBe('left');
  });

  test('a result stored sore-side first is read back by real leg', () => {
    const result = { calf: { left: 14, right: 18 } };
    expect(legsOf(result, 'left')).toEqual({ left: 14, right: 18 });
    // Right leg sore: its 14 was stored in the first column.
    expect(legsOf(result, 'right')).toEqual({ left: 18, right: 14 });
  });
});

describe('the order of the day', () => {
  test('calf left and right, then the arch, then balance, then nothing', () => {
    const visited = [STATIONS[0]];
    for (let next = nextStation(STATIONS[0]); next != null; next = nextStation(next)) visited.push(next);
    expect(visited).toEqual([
      { kind: 'calf', leg: 0 },
      { kind: 'calf', leg: 1 },
      { kind: 'arch', leg: 0 },
      { kind: 'balance', leg: 0 },
    ]);
  });

  test('segments fill as tests are confirmed', () => {
    expect(segmentsFor(null)).toEqual(['todo', 'todo', 'todo']);
    expect(segmentsFor('calf')).toEqual(['active', 'todo', 'todo']);
    expect(segmentsFor('balance')).toEqual(['done', 'done', 'active']);
    expect(segmentsFor('results')).toEqual(['done', 'done', 'done']);
  });

  test('measurements exist only once every figure is in, sore leg as calf', () => {
    let taken = withTaken(NOTHING_TAKEN, { kind: 'calf', leg: 0 }, 11);
    taken = withTaken(taken, { kind: 'calf', leg: 1 }, 17);
    taken = withTaken(taken, { kind: 'arch', leg: 0 }, 24);
    expect(toMeasurements(taken)).toBeNull();
    taken = withTaken(taken, { kind: 'balance', leg: 0 }, 9);
    expect(toMeasurements(taken)).toEqual({ calf: 11, otherCalf: 17, arch: 24, balance: 9 });
  });
});

describe('results', () => {
  const stored = (calf: [number, number], arch: number, balance: number, symmetryPct: number) => ({
    calf: { left: calf[0], right: calf[1] },
    arch: { left: arch, right: arch },
    balance: { left: balance, right: balance },
    symmetryPct,
  });

  test('read the way the plan reads them: calf is the weaker leg', () => {
    expect(goalValuesOf(stored([18, 14], 24, 9, 22))).toEqual({
      arch_hold: 24,
      calf_raises: 14,
      balance: 9,
      symmetry: 22,
    });
  });

  test('in a stable order, with change signed so up is better', () => {
    const rows = resultRows(
      goalValuesOf(stored([16, 20], 30, 12, 20)),
      goalValuesOf(stored([12, 20], 24, 14, 40)),
      [],
      TARGETS,
    );
    expect(rows.map((row) => row.type)).toEqual(['arch_hold', 'calf_raises', 'balance', 'symmetry']);
    const by = Object.fromEntries(rows.map((row) => [row.type, row]));
    expect(by.arch_hold.change).toBe(6);
    expect(by.calf_raises.change).toBe(4);
    // A dip is a negative change, never hidden.
    expect(by.balance.change).toBe(-2);
    // The gap went from 40 to 20: smaller is the improvement.
    expect(by.symmetry.change).toBe(20);
    expect(by.arch_hold.toGo).toBe(30);
    expect(by.arch_hold.fill).toBe(0.5);
    // Under 10 means 9 or less: 20 has 11 points still to come down.
    expect(by.symmetry.toGo).toBe(11);
    expect(by.symmetry.fill).toBe(0.5);
  });

  test('a first test has nothing to change from', () => {
    const rows = resultRows(goalValuesOf(stored([10, 12], 20, 8, 17)), null, [], TARGETS);
    expect(rows.every((row) => row.change === null)).toBe(true);
  });

  test('reached from the outcome or already past the target; never full before it', () => {
    const rows = resultRows(
      goalValuesOf(stored([25, 26], 59, 30, 4)),
      null,
      ['calf_raises'],
      TARGETS,
    );
    const by = Object.fromEntries(rows.map((row) => [row.type, row]));
    expect(by.calf_raises.reached).toBe(true);
    expect(by.calf_raises.fill).toBe(1);
    expect(by.calf_raises.toGo).toBe(0);
    expect(by.balance.reached).toBe(true);
    expect(by.symmetry.reached).toBe(true);
    // 59 of 60 is not the goal, and the bar does not pretend it is.
    expect(by.arch_hold.reached).toBe(false);
    expect(by.arch_hold.fill).toBeLessThan(1);
    expect(by.arch_hold.toGo).toBe(1);
  });

  test('the gap has to be under its target, not at it', () => {
    expect(meetsTarget('symmetry', 10, TARGETS)).toBe(false);
    expect(meetsTarget('symmetry', 9, TARGETS)).toBe(true);
    expect(meetsTarget('arch_hold', 60, TARGETS)).toBe(true);
  });
});
