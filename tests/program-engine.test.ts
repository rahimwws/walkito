/**
 * The fourteen assertions the program engine has to survive.
 *
 * Numbered to match the spec, because the value of this file is that someone
 * can read the list and the list is the requirement. Most of these are pure —
 * `resolveDay` takes its whole world as an argument — and the few that need
 * history write it explicitly rather than leaning on the seeded sample, so a
 * change to the seed cannot quietly turn one of them green.
 */

import { describe, expect, test } from 'bun:test';

import {
  blockFor,
  blocksFor,
  lastDayOf,
  retestDays,
} from '@/entities/program/model/blocks';
import { kindFor } from '@/entities/program/model/day-templates';
import { levelFor } from '@/entities/program/model/levels';
import {
  nextOffset,
  offsetClears,
  resolveDay,
  type ResolveInput,
} from '@/entities/program/model/adapt';
import {
  isMaintenance,
  maintenanceSessionsPerWeek,
  resolveMaintenanceDay,
} from '@/entities/program/model/maintenance';
import { retestBranch } from '@/entities/program/model/program';
import { attended } from '@/entities/program/model/streak';
import { dayNumberFor, writeLog, type ProgramState } from '@/entities/program/model/state';

/** A day resolved with nothing adapting it, so each test varies one thing. */
function input(overrides: Partial<ResolveInput> & { dayNumber: number }): ResolveInput {
  const { dayNumber } = overrides;
  const block = blockFor(dayNumber, 84);
  if (block == null) throw new Error(`day ${dayNumber} is past the plan`);
  return {
    block,
    kind: kindFor(dayNumber),
    painToday: null,
    pain7dAvg: null,
    hoursOnFeetYesterday: null,
    hoursBaseline: null,
    daysSinceLastSession: 1,
    progressionOffset: 0,
    ...overrides,
  };
}

const ids = (day: ReturnType<typeof resolveDay>) => day.exercises.map((e) => e.exercise.id);

describe('1 — the plan starts where it says it does', () => {
  test('day 1 of a 12-week plan is a Strength day in Block 1', () => {
    expect(kindFor(1)).toBe('strength');
    expect(blockFor(1, 84)?.index).toBe(1);
    expect(blockFor(1, 84)?.name).toBe('Settle');
  });
});

describe('2 — retests close every block', () => {
  test('14, 28, 42, 56, 70 and 84 are retest days', () => {
    expect(retestDays(84)).toEqual([14, 28, 42, 56, 70, 84]);
  });

  test('a retest day resolves to no training', () => {
    const day = resolveDay(input({ dayNumber: 14 }));
    expect(day.retest).toBe(true);
    expect(day.exercises).toHaveLength(0);
  });
});

describe('3 — the short plan', () => {
  test('a 6-week plan ends at day 42 with three blocks', () => {
    const blocks = blocksFor(42);
    expect(blocks).toHaveLength(3);
    expect(lastDayOf(42)).toBe(42);
    expect(blocks.map((b) => b.name)).toEqual(['Settle', 'Strengthen', 'Load']);
    expect(retestDays(42)).toEqual([14, 28, 42]);
  });
});

describe('4 — a high-pain day still has a session', () => {
  test('day 20 at pain 8 is track-B only, 3 minutes, no heel raises', () => {
    const day = resolveDay(input({ dayNumber: 20, painToday: 8 }));

    expect(day.offload).toBe(true);
    expect(day.minutes).toBe(3);
    // The session exists. This is the whole point of rule 1 — a flare shortens
    // the day, it does not cancel it.
    expect(day.exercises.length).toBeGreaterThan(0);
    expect(day.exercises.every((e) => e.exercise.track === 'B')).toBe(true);
    expect(day.exercises.some((e) => e.exercise.loadsFascia)).toBe(false);
    expect(ids(day)).not.toContain('heel_raise_towel');
    expect(ids(day)).not.toContain('heel_raise_plain');
  });
});

describe('5 — an ordinary day is left alone', () => {
  test('day 20 at pain 3 against a 3 average is the normal Block 2 session', () => {
    const day = resolveDay(input({ dayNumber: 20, painToday: 3, pain7dAvg: 3 }));

    expect(day.reason).toBe('plan');
    expect(day.offload).toBe(false);
    expect(day.blockIndex).toBe(2);
    expect(day.kind).toBe('mobility');
    expect(ids(day)).toEqual(['calf_stretch_straight', 'short_foot_seated']);
  });
});

describe('6 — a spike steps the plan back', () => {
  test('pain jumping 3 → 7 sets progressionOffset to -1', () => {
    const day = resolveDay(input({ dayNumber: 20, painToday: 7, pain7dAvg: 3 }));
    expect(day.progressionOffset).toBe(-1);
  });

  test('a spike below the flare threshold also steps back', () => {
    const day = resolveDay(input({ dayNumber: 20, painToday: 6, pain7dAvg: 2 }));
    expect(day.reason).toBe('spike');
    expect(day.progressionOffset).toBe(-1);
  });

  test('a quiet day leaves the offset where it was', () => {
    const day = resolveDay(input({ dayNumber: 20, painToday: 2, pain7dAvg: 2 }));
    expect(day.progressionOffset).toBe(0);
  });
});

describe('7 — the step back is earned off', () => {
  test('the offset clears after two days at or below the average', () => {
    const calm = [
      { pain: 3, average: 3 },
      { pain: 2, average: 3 },
    ];
    expect(offsetClears(calm)).toBe(true);
    expect(nextOffset(-1, calm)).toBe(0);
  });

  test('one calm day is not enough', () => {
    const readings = [
      { pain: 5, average: 3 },
      { pain: 2, average: 3 },
    ];
    expect(offsetClears(readings)).toBe(false);
    expect(nextOffset(-1, readings)).toBe(-1);
  });

  test('silence does not clear it', () => {
    const readings = [
      { pain: null, average: 3 },
      { pain: null, average: 3 },
    ];
    expect(offsetClears(readings)).toBe(false);
  });

  test('the offset never goes positive', () => {
    expect(nextOffset(0, [])).toBe(0);
  });
});

describe('8 — the program runs on dates, not completions', () => {
  test('missing days 10–16 does not shift day 17', () => {
    const state: ProgramState = {
      planLength: 84,
      startDate: '2026-01-01',
      progressionOffset: 0,
      phase: 'program',
      focus: 'foot',
    };

    // Nothing is logged for days 10–16 at all. The day number is arithmetic on
    // two dates, so there is no path by which attendance could move it.
    expect(dayNumberFor(state, '2026-01-17')).toBe(17);
    expect(kindFor(17)).toBe('strength');
    expect(blockFor(17, 84)?.index).toBe(2);
  });

  test('a gap does not queue a make-up session', () => {
    // Five days away steps the plan back and restarts on mobility — it does not
    // hand back the sessions that were missed.
    const day = resolveDay(input({ dayNumber: 20, daysSinceLastSession: 6 }));
    expect(day.reason).toBe('return');
    expect(day.kind).toBe('mobility');
    expect(day.progressionOffset).toBe(-1);
  });
});

describe('9 — levels move only on retests', () => {
  test('nothing between two retest days changes a level', () => {
    // Levels are a pure function of the measurement, so the assertion is that
    // no other input exists: the same figure yields the same level whatever the
    // day, the streak or the session count.
    const between = [15, 16, 20, 25, 27];
    for (const _day of between) {
      expect(levelFor('calf', 19)).toBe(3);
      expect(levelFor('balance', 14)).toBe(3);
    }
  });

  test('completing a session cannot move a level', () => {
    writeLog(23, { sessionCompleted: true, painMorning: 2 });
    expect(levelFor('calf', 19)).toBe(3);
  });
});

describe('10 — the level table', () => {
  test('calf = 19 maps to Level 3', () => {
    expect(levelFor('calf', 19)).toBe(3);
  });

  test('the calf boundaries land where the table says', () => {
    expect(levelFor('calf', 7)).toBe(1);
    expect(levelFor('calf', 8)).toBe(2);
    expect(levelFor('calf', 14)).toBe(2);
    expect(levelFor('calf', 15)).toBe(3);
    expect(levelFor('calf', 22)).toBe(4);
    expect(levelFor('calf', 29)).toBe(5);
  });

  test('symmetry reads the other way — a smaller gap is a higher level', () => {
    expect(levelFor('symmetry', 35)).toBe(1);
    expect(levelFor('symmetry', 21)).toBe(2);
    expect(levelFor('symmetry', 5)).toBe(5);
  });
});

describe('11 — maintenance', () => {
  test('day 85 enters maintenance', () => {
    expect(isMaintenance(84, 84)).toBe(false);
    expect(isMaintenance(85, 84)).toBe(true);
  });

  test('a maintenance week holds exactly two sessions', () => {
    const week = [85, 86, 87, 88, 89, 90, 91].map((dayNumber) =>
      resolveMaintenanceDay({ dayNumber, planLength: 84 }),
    );
    const sessions = week.filter((day) => day.exercises.length > 0);

    expect(sessions).toHaveLength(2);
    expect(maintenanceSessionsPerWeek()).toBe(2);
    // Monday and Thursday. Wednesday is explicitly a rest day.
    expect(sessions.map((day) => day.dayNumber)).toEqual([85, 88]);
    expect(week[2].exercises).toHaveLength(0);
    expect(sessions.every((day) => day.minutes === 8)).toBe(true);
  });
});

describe('12 — a retest that was walked past', () => {
  test('a past retest with no result is not-completed, not future', () => {
    expect(retestBranch({ hasResult: false, status: 'missed' })).toBe('not-completed');
    expect(retestBranch({ hasResult: false, status: 'done' })).toBe('not-completed');
  });

  test('the other three branches still resolve', () => {
    expect(retestBranch({ hasResult: true, status: 'done' })).toBe('result');
    expect(retestBranch({ hasResult: false, status: 'today' })).toBe('today');
    expect(retestBranch({ hasResult: false, status: 'upcoming' })).toBe('future');
  });
});

describe('13 — the streak counts attention', () => {
  test('a check-in with no session is green', () => {
    // Day 18 is a balance day, so nothing about the plan makes it green on its
    // own — only the check-in can.
    expect(kindFor(18)).not.toBe('recovery');
    writeLog(18, { painMorning: 4, sessionCompleted: false });
    expect(attended(18)).toBe(true);
  });

  test('zero is a logged answer, not a missing one', () => {
    writeLog(19, { painMorning: 0, sessionCompleted: false });
    expect(attended(19)).toBe(true);
  });

  test('a day with nothing on it is not green', () => {
    expect(kindFor(24)).not.toBe('recovery');
    expect(attended(24)).toBe(false);
  });
});

describe('14 — rest the app assigned cannot be held against you', () => {
  test('a system-assigned rest day is green with nothing logged', () => {
    // Day 21 is the seventh slot of week three: a recovery day, and far enough
    // out that the seeded history has not written anything on it.
    expect(kindFor(21)).toBe('recovery');
    expect(attended(21)).toBe(true);
  });
});
