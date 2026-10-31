import { describe, expect, test } from 'bun:test';

import { CLIPS } from '../src/shared/config/clip-manifest';
import { CHAINS, currentLevels, PLAN_META, planMeta, type Equipment } from '../src/entities/program/model/plan/catalogue-meta';
import { doseFor, doseSeconds } from '../src/entities/program/model/plan/dose';
import { allowed, playableId, pogoAllowed, type EligibilityContext } from '../src/entities/program/model/plan/eligibility';
import { advanceGoals, painGoalReached, pickFocus, startingGoals, type Goal } from '../src/entities/program/model/plan/goals';
import { adjustToday, twoMinuteVersion } from '../src/entities/program/model/plan/today';
import {
  addDays,
  buildWeek,
  DEFAULT_LEVELS,
  type WeekInput,
  type WeekPlan,
} from '../src/entities/program/model/plan/week';

const MONDAY = '2026-09-28';

function goal(type: Goal['type'], current: number | null = null, status: Goal['status'] = 'active'): Goal {
  return { type, status, baseline: current, current, since: MONDAY };
}

function input(patch: Partial<WeekInput> = {}): WeekInput {
  return {
    weekStart: MONDAY,
    weekIndex: 3,
    today: MONDAY,
    planStart: '2026-09-01',
    goals: [goal('arch_hold', 20), goal('calf_raises', 12)],
    daysPerWeek: 5,
    defaultMinutes: 5,
    eligibility: {
      clips: new Set(Object.keys(CLIPS)),
      equipmentMissing: [],
      cantDo: new Set(),
      painLast14: Array(14).fill(3),
      shortFootStandingSessions: 0,
    },
    levels: { ...DEFAULT_LEVELS },
    lastWeekFeedback: [],
    painLastWeek: Array(7).fill(3),
    painWeekBefore: Array(7).fill(3),
    painStart: 5,
    previousFocus: 'arch_hold',
    seenBefore: new Set(),
    testDue: null,
    ...patch,
  };
}

const ids = (plan: WeekPlan) => plan.days.flatMap((d) => d.exercises.map((e) => e.id));

/** Seconds a day's doses take, as the player counts them down. */
const daySeconds = (exercises: readonly { dose: Parameters<typeof doseSeconds>[0] }[]) =>
  exercises.reduce((sum, e) => sum + doseSeconds(e.dose), 0);

/** A day fits its minutes, or has nothing left to take off: one set of each. */
function fitsOrFloored(exercises: readonly { dose: Parameters<typeof doseSeconds>[0] }[], minutes: number) {
  return daySeconds(exercises) <= minutes * 60 || exercises.every((e) => e.dose.sets === 1);
}

function everyWeek(check: (plan: WeekPlan) => void, patch: Partial<WeekInput> = {}) {
  for (const daysPerWeek of [3, 5, 7] as const) {
    for (const weekIndex of [1, 2, 3, 6]) {
      for (const levels of [DEFAULT_LEVELS, { calf: 5, arch: 4, balance: 2, hip: 1, mobility: 0, recovery: 0 }]) {
        check(buildWeek(input({ daysPerWeek, weekIndex, levels, ...patch })));
      }
    }
  }
}

describe('the catalogue and the manifest', () => {
  test('1 · only exercises with a clip in the manifest are ever scheduled', () => {
    everyWeek((plan) => {
      for (const id of ids(plan)) expect(CLIPS[id]).toBeDefined();
    });
    // And with most of the manifest gone, still nothing without a clip.
    const few = new Set(['heel_raise_double', 'short_foot_seated', 'fascia_stretch']);
    const plan = buildWeek(input({ eligibility: { ...input().eligibility, clips: few } }));
    for (const id of ids(plan)) expect(few.has(id)).toBe(true);
  });

  test('2 · a missing clip (heel_raise_plain) resolves to heel_raise_double, never to nothing', () => {
    const ctx = { clips: new Set(Object.keys(CLIPS)), equipmentMissing: [] as Equipment[] };
    const without = { ...ctx, clips: new Set(Object.keys(CLIPS).filter((id) => id !== 'heel_raise_plain')) };
    expect(playableId('heel_raise_plain', ctx)).toBe('heel_raise_plain');
    expect(playableId('heel_raise_plain', without)).toBe('heel_raise_double');
    expect(playableId('single_leg_mini_squat', { ...ctx, equipmentMissing: ['step'] })).toBe('hip_abduction');
    expect(playableId('single_leg_mini_squat', ctx)).toBe('step_down');
  });

  test('every plannable exercise has a clip today', () => {
    for (const row of PLAN_META) expect(CLIPS[row.id]).toBeDefined();
  });
});

describe('the week', () => {
  test('3 · week one has no fascia-loading exercise and nothing above level 2', () => {
    for (const daysPerWeek of [3, 5, 7] as const) {
      const plan = buildWeek(input({ weekIndex: 1, daysPerWeek, levels: { ...DEFAULT_LEVELS, calf: 5, arch: 4 } }));
      for (const id of ids(plan)) {
        expect(planMeta(id)?.fascia).toBe(false);
        expect(planMeta(id)!.level).toBeLessThanOrEqual(2);
      }
    }
  });

  test('4 · band_inversion waits only for week one, then is on every arch strength day', () => {
    const ctx: EligibilityContext = { ...input().eligibility, settling: false, shortFootStandingSessions: 0 };
    expect(allowed('band_inversion', ctx)).toBe(true);
    expect(allowed('band_inversion', { ...ctx, settling: true })).toBe(false);
    const plan = buildWeek(input({ weekIndex: 2, daysPerWeek: 5, defaultMinutes: 10 }));
    for (const day of plan.days.filter((d) => d.type === 'strength')) expect(day.exercises.map((e) => e.id)).toContain('band_inversion');
  });

  test('5 · pogo_hops never appears if any pain above 2 in the last 14 days', () => {
    const pains = Array(14).fill(1);
    pains[9] = 3;
    everyWeek((plan) => expect(ids(plan)).not.toContain('pogo_hops'), {
      eligibility: { ...input().eligibility, painLast14: pains },
      goals: [goal('calf_raises', 10)],
    });
    expect(pogoAllowed(Array(14).fill(2))).toBe(true);
    expect(pogoAllowed(pains)).toBe(false);
  });

  test('6 · no step → never heel_raise_towel, heel_drop_straight or step_down', () => {
    everyWeek(
      (plan) => {
        for (const id of ['heel_raise_towel', 'heel_drop_straight', 'step_down']) expect(ids(plan)).not.toContain(id);
      },
      {
        eligibility: { ...input().eligibility, equipmentMissing: ['step'] },
        goals: [goal('calf_raises', 10), goal('symmetry', 25)],
      },
    );
  });

  test('8 · every day fits its minutes, cutting sets but never below one', () => {
    for (const defaultMinutes of [3, 5, 10] as const) {
      everyWeek(
        (plan) => {
          for (const day of plan.days) {
            if (day.exercises.length === 0) continue;
            expect(fitsOrFloored(day.exercises, day.minutes)).toBe(true);
            for (const e of day.exercises) expect(e.dose.sets).toBeGreaterThanOrEqual(1);
          }
        },
        { defaultMinutes, toeWork: true },
      );
    }
  });

  test('8 · a three-minute day is close to three minutes, not six', () => {
    // The day that ran "3 min · 2 moves" with a six-minute towel scrunch in it.
    everyWeek(
      (plan) => {
        for (const day of plan.days) {
          if (day.exercises.length === 0) continue;
          expect(daySeconds(day.exercises)).toBeLessThanOrEqual(3 * 60 * 1.15);
        }
      },
      { defaultMinutes: 3, toeWork: true },
    );
  });

  test('8 · two sessions done, neither "hard", pain not rising → the focus exercise moves up one level', () => {
    const base = input({ goals: [goal('arch_hold', 10)], levels: { ...DEFAULT_LEVELS, arch: 1 } });
    const done = (feedback: 'easy' | 'ok' | 'hard') => [
      { date: '2026-09-22', feedback, exerciseIds: ['short_foot_seated'] },
      { date: '2026-09-24', feedback: 'ok' as const, exerciseIds: ['short_foot_seated'] },
    ];
    const up = buildWeek({ ...base, lastWeekFeedback: done('easy') });
    expect(up.levels.arch).toBe(2);
    expect(up.days.find((d) => d.type === 'strength')!.exercises[0].id).toBe('short_foot_double');
    expect(buildWeek({ ...base, lastWeekFeedback: done('ok') }).levels.arch).toBe(2);
    expect(buildWeek({ ...base, lastWeekFeedback: done('hard') }).levels.arch).toBe(0);
    expect(buildWeek(base).levels.arch).toBe(1);
    const sore = buildWeek({ ...base, lastWeekFeedback: done('ok'), painWeekBefore: Array(7).fill(2), painLastWeek: Array(7).fill(3) });
    expect(sore.levels.arch).toBe(1);
  });

  test('9 · a second goal climbs its own chain too', () => {
    const plan = buildWeek(
      input({
        goals: [goal('arch_hold', 10), goal('calf_raises', 12)],
        levels: { ...DEFAULT_LEVELS, arch: 1, calf: 0 },
        lastWeekFeedback: [
          { date: '2026-09-22', feedback: 'ok', exerciseIds: ['heel_raise_double'] },
          { date: '2026-09-24', feedback: 'ok', exerciseIds: ['heel_raise_double'] },
        ],
      }),
    );
    expect(plan.levels.calf).toBe(1);
    expect(plan.levels.arch).toBe(1);
  });

  test('heel pain climbs to the single-leg raise on a towel, never to drops or hops', () => {
    const towel = CHAINS.calf.indexOf('heel_raise_towel');
    const at = (calf: number, id: string) =>
      buildWeek(
        input({
          goals: [goal('pain_free_mornings', 5)],
          painStart: 5,
          levels: { ...DEFAULT_LEVELS, calf },
          lastWeekFeedback: [
            { date: '2026-09-22', feedback: 'ok', exerciseIds: [id] },
            { date: '2026-09-24', feedback: 'ok', exerciseIds: [id] },
          ],
        }),
      );
    expect(at(towel - 1, 'heel_raise_plain').levels.calf).toBe(towel);
    expect(at(towel, 'heel_raise_towel').levels.calf).toBe(towel);
  });

  test('heel pain: the plantar stretch is in every session, as ten-second holds', () => {
    for (const defaultMinutes of [3, 5, 10] as const) {
      for (const weekIndex of [1, 2, 6]) {
        const plan = buildWeek(input({ goals: [goal('pain_free_mornings', 5)], painStart: 5, weekIndex, defaultMinutes, daysPerWeek: 7 }));
        for (const day of plan.days) {
          if (day.exercises.length === 0) continue;
          const stretch = day.exercises.find((e) => e.id === 'fascia_stretch');
          expect(stretch?.dose.holdSec).toBe(10);
        }
      }
    }
  });

  test('9 · pain up two points over the week → the focus exercise moves down one level', () => {
    const plan = buildWeek(
      input({
        goals: [goal('arch_hold', 10)],
        levels: { ...DEFAULT_LEVELS, arch: 3 },
        painWeekBefore: Array(7).fill(2),
        painLastWeek: Array(7).fill(4),
      }),
    );
    expect(plan.levels.arch).toBe(2);
    expect(plan.rationale.kind).toBe('painUp');
  });

  test('10 · strength days are never on consecutive days', () => {
    everyWeek((plan) => {
      for (let i = 1; i < plan.days.length; i += 1) {
        expect(plan.days[i].type === 'strength' && plan.days[i - 1].type === 'strength').toBe(false);
      }
    });
  });

  test('every session holds two to four exercises and at least one for the focus goal', () => {
    everyWeek((plan) => {
      for (const day of plan.days) {
        if (day.type === 'rest' || day.type === 'test') continue;
        expect(day.exercises.length).toBeGreaterThanOrEqual(2);
        expect(day.exercises.length).toBeLessThanOrEqual(4);
        expect(day.exercises.some((e) => e.focus)).toBe(true);
      }
    });
  });

  test('11 · a test goes on the day it is due, inside the week', () => {
    const plan = buildWeek(input({ testDue: addDays(MONDAY, 3) }));
    expect(plan.days[3].type).toBe('test');
    expect(plan.days.filter((d) => d.type === 'test')).toHaveLength(1);
    // Overdue: today, not a day already gone.
    const late = buildWeek(input({ today: addDays(MONDAY, 2), testDue: '2026-09-20' }));
    expect(late.days[2].type).toBe('test');
    // Due next week: no test this week.
    expect(buildWeek(input({ testDue: addDays(MONDAY, 9) })).days.some((d) => d.type === 'test')).toBe(false);
  });

  test('the first week says it is settling; a new focus says so', () => {
    expect(buildWeek(input({ weekIndex: 1 })).rationale.kind).toBe('first');
    expect(buildWeek(input({ previousFocus: 'calf_raises', painLastWeek: Array(7).fill(4), painWeekBefore: Array(7).fill(4) })).rationale.kind).toBe(
      'newFocus',
    );
  });

  test('a big toe that will not lift, or a bunion, puts toe work on strength days', () => {
    const calf = { goals: [goal('calf_raises', 12)], previousFocus: 'calf_raises' as const };
    const toe = (plan: WeekPlan) =>
      plan.days
        .filter((d) => d.type === 'strength')
        .map((d) => d.exercises.some((e) => e.id === 'big_toe_lift'));
    expect(toe(buildWeek(input({ ...calf, toeWork: true }))).every(Boolean)).toBe(true);
    expect(toe(buildWeek(input(calf))).some(Boolean)).toBe(false);
  });

  test('new exercises are named once', () => {
    const plan = buildWeek(input({ seenBefore: new Set(['short_foot_seated']) }));
    expect(plan.newThisWeek).not.toContain('short_foot_seated');
    expect(plan.newThisWeek.length).toBeGreaterThan(0);
  });
});

describe('today', () => {
  const ctx: EligibilityContext = { ...input().eligibility, settling: false };
  const signals = {
    painToday: 3,
    pain7Avg: 3,
    stepsYesterday: 6000,
    steps28Avg: 6000,
    sleepHours: 7,
    stepDownOwed: 0,
    minutesChoice: null,
    defaultMinutes: 5 as const,
  };
  const strengthDay = () =>
    buildWeek(input({ goals: [goal('calf_raises', 10)], levels: { ...DEFAULT_LEVELS, calf: 3 } })).days.find(
      (d) => d.type === 'strength',
    )!;

  test('health · a big workout yesterday turns a strength day into recovery', () => {
    const day = adjustToday(strengthDay(), { ...signals, bigWorkoutYesterday: true }, ctx);
    expect(day.reason).toBe('big-workout');
    expect(day.type).toBe('recovery');
  });

  test('health · past the personal on-feet limit turns a strength day into recovery', () => {
    const day = adjustToday(strengthDay(), { ...signals, onFeetYesterday: 10, onFeetThreshold: 8 }, ctx);
    expect(day.reason).toBe('on-feet');
    expect(day.type).toBe('recovery');
    const under = adjustToday(strengthDay(), { ...signals, onFeetYesterday: 6, onFeetThreshold: 8 }, ctx);
    expect(under.reason).toBeNull();
  });

  test('health · sleep is a week, not a night, when the week is known', () => {
    const oneNight = adjustToday(strengthDay(), { ...signals, sleepHours: 5, sleepShort: false }, ctx);
    expect(oneNight.reason).toBeNull();
    const week = adjustToday(strengthDay(), { ...signals, sleepHours: 7.5, sleepShort: true }, ctx);
    expect(week.reason).toBe('short-sleep');
    expect(week.steppedDown).toBe(true);
    // Without the week, the old one-night rule stands.
    expect(adjustToday(strengthDay(), { ...signals, sleepHours: 5 }, ctx).reason).toBe('short-sleep');
  });

  test('health · resting heart rate up steps a strength day down, keeping it strength', () => {
    const day = adjustToday(strengthDay(), { ...signals, restingHRElevated: true }, ctx);
    expect(day.reason).toBe('resting-hr');
    expect(day.type).toBe('strength');
    expect(day.steppedDown).toBe(true);
  });

  test('health · pain outranks every Health signal', () => {
    const day = adjustToday(
      strengthDay(),
      { ...signals, painToday: 8, bigWorkoutYesterday: true, restingHRElevated: true },
      ctx,
    );
    expect(day.reason).toBe('flare');
  });

  test('7 · pain 8 → seated only, 3 minutes, nothing that loads the fascia', () => {
    const day = adjustToday(strengthDay(), { ...signals, painToday: 8 }, ctx);
    expect(day.minutes).toBe(3);
    expect(day.reason).toBe('flare');
    expect(day.exercises.length).toBeGreaterThan(0);
    for (const e of day.exercises) {
      expect(planMeta(e.id)?.position).toBe('seated');
      expect(planMeta(e.id)?.fascia).toBe(false);
    }
  });

  test('a pain spike steps every exercise down a level', () => {
    const day = strengthDay();
    const adjusted = adjustToday(day, { ...signals, painToday: 7 - 0.5, pain7Avg: 2 }, ctx);
    expect(adjusted.reason).toBe('spike');
    expect(adjusted.exercises[0].level).toBeLessThan(day.exercises[0].level);
  });

  test('a heavy day on the feet turns strength into recovery', () => {
    const adjusted = adjustToday(strengthDay(), { ...signals, stepsYesterday: 12000 }, ctx);
    expect(adjusted.type).toBe('recovery');
  });

  test('three minutes keeps the focus exercise', () => {
    const adjusted = adjustToday(strengthDay(), { ...signals, minutesChoice: 3 }, ctx);
    expect(adjusted.exercises.some((e) => e.focus)).toBe(true);
    expect(adjusted.exercises.length).toBeLessThanOrEqual(2);
  });

  test('the two-minute version is the focus exercise alone', () => {
    const short = twoMinuteVersion(strengthDay());
    expect(short.exercises).toHaveLength(1);
    expect(short.exercises[0].focus).toBe(true);
    expect(fitsOrFloored(short.exercises, 2)).toBe(true);
  });

  test('a day stored at full doses is cut to its minutes when it is opened', () => {
    // Weeks built before the week fitted its doses are still in storage.
    const day = strengthDay();
    const stored = { ...day, minutes: 3, exercises: day.exercises.map((e) => ({ ...e, dose: { ...e.dose, sets: 4 } })) };
    expect(daySeconds(stored.exercises)).toBeGreaterThan(3 * 60);
    const adjusted = adjustToday(stored, signals, ctx);
    expect(adjusted.minutes).toBe(3);
    expect(fitsOrFloored(adjusted.exercises, 3)).toBe(true);
    expect(adjusted.exercises.map((e) => e.id)).toEqual(stored.exercises.map((e) => e.id));
  });
});

describe('goals', () => {
  test('pain first, then arch for plantar pain, calf for runners, at most three', () => {
    const goals = startingGoals(
      { painReported: true, footType: 'unknown', plantarPain: true, loadsFeet: true, firstGapPct: 30 },
      MONDAY,
    );
    expect(goals.map((g) => g.type)).toEqual(['pain_free_mornings', 'arch_hold', 'calf_raises']);
  });

  test('a rigid foot never gets the arch goal', () => {
    const goals = startingGoals(
      { painReported: true, footType: 'rigid', plantarPain: true, loadsFeet: false, firstGapPct: null },
      MONDAY,
    );
    expect(goals.map((g) => g.type)).not.toContain('arch_hold');
  });

  test('from week 3 a two-point drop in pain moves the focus off pain', () => {
    const goals = [goal('pain_free_mornings', 4), goal('arch_hold', 50)];
    expect(pickFocus(goals, { weekIndex: 2, painStart: 6, painRecent: 3 })).toBe('pain_free_mornings');
    expect(pickFocus(goals, { weekIndex: 3, painStart: 6, painRecent: 3 })).toBe('arch_hold');
  });

  test('a reached goal moves to maintaining and the next one joins', () => {
    const { goals, reached, added } = advanceGoals([goal('arch_hold', 60), goal('calf_raises', 10)], ['arch_hold'], MONDAY);
    expect(reached).toEqual(['arch_hold']);
    expect(goals.find((g) => g.type === 'arch_hold')?.status).toBe('maintaining');
    expect(added).toEqual(['pain_free_mornings']);
  });
});

describe('the exercise review fixes', () => {
  const calm = { painLast14: Array(14).fill(0) };
  const easyWith = (id: string) => [
    { date: '2026-09-22', feedback: 'easy' as const, exerciseIds: [id] },
    { date: '2026-09-24', feedback: 'easy' as const, exerciseIds: [id] },
  ];
  const noStep = (patch: Partial<WeekInput> = {}) =>
    input({
      goals: [goal('calf_raises', 10)],
      painLastWeek: Array(7).fill(0),
      painWeekBefore: Array(7).fill(0),
      eligibility: { ...input().eligibility, ...calm, equipmentMissing: ['step'] },
      ...patch,
    });

  test('the single-leg floor raise comes after the two-foot hold', () => {
    const hold = CHAINS.calf.indexOf('heel_raise_hold');
    expect(CHAINS.calf[hold + 1]).toBe('heel_raise_plain');
    const plan = buildWeek(noStep({ levels: { ...DEFAULT_LEVELS, calf: hold }, lastWeekFeedback: easyWith('heel_raise_hold') }));
    expect(CHAINS.calf[plan.levels.calf]).toBe('heel_raise_plain');
  });

  test('with no step the calf work never jumps from the floor raise to hops', () => {
    const plain = CHAINS.calf.indexOf('heel_raise_plain');
    const plan = buildWeek(noStep({ levels: { ...DEFAULT_LEVELS, calf: plain }, lastWeekFeedback: easyWith('heel_raise_plain') }));
    expect(CHAINS.calf[plan.levels.calf]).toBe('heel_raise_plain');
    expect(ids(plan)).not.toContain('pogo_hops');
  });

  test('hops never carry a backpack; the slow work on a step does', () => {
    expect(doseFor('pogo_hops', 5, true).addWeight).toBeUndefined();
    expect(doseFor('heel_drop_straight', 4, true).addWeight).toBe(true);
    expect(doseFor('heel_raise_plain').tempo).toBeDefined();
  });

  test('no towel still gets arch work, from the step above at the same level', () => {
    const plan = buildWeek(
      input({
        goals: [goal('arch_hold', 10)],
        levels: { ...DEFAULT_LEVELS, arch: 0 },
        eligibility: { ...input().eligibility, equipmentMissing: ['towel'] },
      }),
    );
    expect(plan.days.find((d) => d.type === 'strength')!.exercises[0].id).toBe('big_toe_lift');
  });

  test('numb feet or diabetes: no hops and no eyes-closed balance, ever', () => {
    const ctx: EligibilityContext = { ...input().eligibility, ...calm, settling: false, protectFeet: true };
    expect(allowed('pogo_hops', ctx)).toBe(false);
    expect(allowed('eyes_closed_stand', ctx)).toBe(false);
    expect(allowed('pogo_hops', { ...ctx, protectFeet: false })).toBe(true);
  });

  test('stored levels from the old calf chain land on the same exercise', () => {
    // Old layout: seated, double, hold, towel, drop, hops. Index 3 was the towel raise.
    const moved = currentLevels({ ...DEFAULT_LEVELS, _chains: undefined, calf: 3 });
    expect(CHAINS.calf[moved.calf]).toBe('heel_raise_towel');
    expect(currentLevels(moved)).toBe(moved);
    expect(currentLevels({ ...DEFAULT_LEVELS, calf: 3 }).calf).toBe(3);
  });

  test('stored arch levels from the chain that began with the towel scrunch land on the same exercise', () => {
    const moved = currentLevels({ ...DEFAULT_LEVELS, _chains: 2, arch: 3 });
    expect(CHAINS.arch[moved.arch]).toBe('short_foot_double');
    expect(CHAINS.arch[currentLevels({ ...DEFAULT_LEVELS, _chains: 2, arch: 0 }).arch]).toBe('big_toe_lift');
    expect(CHAINS.calf[currentLevels({ ...DEFAULT_LEVELS, _chains: 2, calf: 4 }).calf]).toBe('heel_raise_towel');
  });

  test('stored calf levels from the chain that began seated land on the same exercise', () => {
    const moved = currentLevels({ ...DEFAULT_LEVELS, _chains: 3, calf: 4 });
    expect(CHAINS.calf[moved.calf]).toBe('heel_raise_towel');
    // The seated raise itself is gone: it lands on the first step, standing.
    expect(CHAINS.calf[currentLevels({ ...DEFAULT_LEVELS, _chains: 3, calf: 0 }).calf]).toBe('heel_raise_double');
    expect(CHAINS.calf).not.toContain('heel_raise_seated');
  });

  test('pain-free mornings: 14 of the last 16 logged at 1 or under', () => {
    const fine = Array(16).fill(1);
    expect(painGoalReached(fine)).toBe(true);
    expect(painGoalReached([...fine.slice(0, 14), null, null])).toBe(true);
    expect(painGoalReached([...fine.slice(0, 13), null, null, null])).toBe(false);
    expect(painGoalReached([...fine.slice(0, 15), 2])).toBe(false);
  });
});
