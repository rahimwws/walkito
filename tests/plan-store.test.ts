import { afterAll, beforeAll, describe, expect, test } from 'bun:test';

import {
  buildUpcomingWeek,
  planSessionDone,
  planSettings,
  recordSession,
  setPlanSettings,
  weekPlan,
} from '@/entities/program/model/plan/store';
import { WEEK_SHAPES } from '@/entities/program/model/plan/week';
import { dayNumberFor, programState, startProgram } from '@/entities/program/model/state';
import { attended } from '@/entities/program/model/streak';
import { kv } from '@/shared/lib/storage';

// A Wednesday two weeks into a plan that began on a Monday.
const START = new Date(2026, 8, 14, 9, 0).getTime();
const WEDNESDAY = new Date(2026, 8, 30, 10, 0).getTime();
const WEDNESDAY_KEY = '2026-09-30';

const before = programState();

beforeAll(() => {
  for (const key of ['plan/settings', 'plan/weeks', 'plan/sessions', 'plan/goals', 'plan/prefs']) kv.remove(key);
  startProgram({ planLength: 84, progressionOffset: 0, focus: 'foot' }, START);
});

afterAll(() => {
  startProgram({ planLength: before.planLength, progressionOffset: 0, focus: before.focus });
});

describe('the plan store', () => {
  test('15 · changing days per week rebuilds the rest of the week, and only the rest', () => {
    setPlanSettings({ daysPerWeek: 5 }, WEDNESDAY);
    const was = weekPlan(WEDNESDAY);
    expect(was.days.map((d) => d.type)).toEqual([...WEEK_SHAPES[5]].map((t, i) => (was.days[i].type === 'test' ? 'test' : t)));

    setPlanSettings({ daysPerWeek: 3 }, WEDNESDAY);
    const now = weekPlan(WEDNESDAY);
    expect(planSettings().daysPerWeek).toBe(3);
    // Monday and Tuesday were lived: they stay as they were.
    expect(now.days[0]).toEqual(was.days[0]);
    expect(now.days[1]).toEqual(was.days[1]);
    // From Wednesday on, the three-day shape: Thursday is rest now, not balance.
    expect(was.days[3].type).toBe('balance');
    expect(now.days[3].type).toBe('rest');
  });

  test('13 · a finished Library routine counts for the streak and leaves the plan session open', () => {
    recordSession({
      date: WEDNESDAY_KEY,
      source: 'library',
      routineId: 'flare',
      minutes: 3,
      exercises: [{ id: 'fascia_stretch', status: 'done' }],
      feedback: null,
      inSessionPain: null,
      completedAt: WEDNESDAY,
    });
    expect(attended(dayNumberFor(programState(), WEDNESDAY_KEY))).toBe(true);
    expect(planSessionDone(WEDNESDAY_KEY)).toBe(false);
  });

  test('next week is built and kept on Sunday evening, and not before', () => {
    const sundayAfternoon = new Date(2026, 9, 4, 17, 0).getTime();
    const sundayEvening = new Date(2026, 9, 4, 19, 0).getTime();
    expect(buildUpcomingWeek(WEDNESDAY)).toBe(false);
    expect(buildUpcomingWeek(sundayAfternoon)).toBe(false);
    expect(buildUpcomingWeek(sundayEvening)).toBe(true);
    // Kept: the second call finds it already there.
    expect(buildUpcomingWeek(sundayEvening)).toBe(false);
    expect(JSON.parse(kv.getString('plan/weeks') ?? '{}')['2026-10-05']).toBeDefined();
  });
});
