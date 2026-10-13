import { describe, expect, test } from 'bun:test';

import { adjustToday } from '@/entities/program/model/plan/today';
import type { Goal } from '@/entities/program/model/plan/goals';
import type { PlanDay, WeekPlan } from '@/entities/program/model/plan/week';
import { CLIPS } from '@/shared/config/clip-manifest';
import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';
import { en as EN } from '@/shared/lib/i18n/catalogue/en';

import {
  doneTitle,
  earnedToday,
  outcomeView,
  pathReached,
  rationaleLine,
  splitLead,
  testLine,
  todayTitle,
  todayVariant,
  upcomingTitle,
  weekLabel,
  weekLine,
  weekPath,
  weekTitle,
  type PathNode,
  type PathWeek,
} from './plan-view';

const t = translatorFor('en');
const goal = (type: Goal['type'], current: number | null, baseline: number | null = current): Goal => ({
  type,
  status: 'active',
  baseline,
  current,
  since: '2026-09-01',
});

const day = (date: string, type: PlanDay['type'], exercises: PlanDay['exercises'] = []): PlanDay => ({
  date,
  weekday: 0,
  type,
  exercises,
  minutes: type === 'test' ? 4 : 5,
});

const WEEK: PlanDay[] = [
  day('2026-09-28', 'strength'),
  day('2026-09-29', 'mobility'),
  day('2026-09-30', 'strength'),
  day('2026-10-01', 'test'),
  day('2026-10-02', 'strength'),
  day('2026-10-03', 'rest'),
  day('2026-10-04', 'rest'),
];

describe('the plan screen', () => {
  test('1 · nothing on the screen says "Week N" or draws an arrow', () => {
    const planKeys = Object.entries(EN).filter(([key]) => key.startsWith('pages.plan.'));
    for (const [, value] of planKeys) {
      const text = JSON.stringify(value);
      expect(text).not.toMatch(/Week \{|→/);
    }
  });

  test('6 · the rationale is hidden when it only restates the goal', () => {
    expect(rationaleLine(t, { kind: 'default' }, null)).toBeNull();
    expect(rationaleLine(t, { kind: 'newFocus' }, null)).toBeNull();
    expect(rationaleLine(t, { kind: 'default' }, 'Heel drops')).toBe('New this week: Heel drops');
    expect(rationaleLine(t, { kind: 'painUp' }, null)).not.toBeNull();
    // A calm week says pain stayed low, never the figure it stayed at.
    for (const lang of LANGUAGES) {
      expect(rationaleLine(translatorFor(lang), { kind: 'painLow', n: 2 }, null)).not.toMatch(/\d/);
    }
  });

  test('7 · the test day says what and why: three timed tests, about 4 min', () => {
    expect(t('pages.plan.testBody', { count: 3, minutes: 4 })).toBe(
      '3 short timed tests, about 4 min in all. They show what your training has built, and the plan adjusts to the results.',
    );
    const test = { ...day('2026-10-01', 'test'), reason: null, steppedDown: false } as const;
    expect(todayVariant(test, false)).toBe('test');
    expect(todayTitle(t, test, 'arch_hold', 'test')).toBe('Test day');
  });

  test('9 · pain 8 → "Easy day · seated"', () => {
    const planned: PlanDay = {
      ...day('2026-09-30', 'strength'),
      exercises: [{ id: 'heel_raise_hold', level: 2, dose: { sets: 3, holdSec: 20, perSide: false }, focus: true }],
    };
    const ctx = {
      clips: new Set(Object.keys(CLIPS)),
      equipmentMissing: [],
      cantDo: new Set<string>(),
      painLast14: Array(14).fill(3),
      shortFootStandingSessions: 0,
      settling: false,
    };
    const adjusted = adjustToday(
      planned,
      { painToday: 8, pain7Avg: 3, stepsYesterday: null, steps28Avg: null, sleepHours: null, stepDownOwed: 0, minutesChoice: null, defaultMinutes: 5 },
      ctx,
    );
    const variant = todayVariant(adjusted, false);
    expect(variant).toBe('easy');
    expect(todayTitle(t, adjusted, 'arch_hold', variant)).toBe('Easy day · seated');
  });

  test('a strength day is titled by its kind and the goal’s short name', () => {
    const today = { ...day('2026-09-30', 'strength'), reason: null, steppedDown: false } as const;
    expect(todayTitle(t, today, 'arch_hold', 'session')).toBe('Strength · arch');
  });

  test('tomorrow is titled the way today is', () => {
    expect(upcomingTitle(t, 'mobility', 'calf_raises')).toBe('Mobility · calves');
    expect(upcomingTitle(t, 'strength', null)).toBe('Strength');
    expect(upcomingTitle(t, 'test', 'arch_hold')).toBe('Test day');
    expect(upcomingTitle(t, 'rest', 'arch_hold')).toBe('Rest day');
  });

  test('a finished day earns what its records say, at the dose, each move once', () => {
    const record = (date: string, minutes: number, ids: string[]) => ({
      date,
      minutes,
      exercises: ids.map((id) => ({ id, status: 'done' as const })),
    });
    const records = [
      record('2026-10-12', 5, ['a', 'b', 'c']),
      record('2026-10-12', 3, ['c', 'd']),
      record('2026-10-11', 10, ['e']),
    ];
    expect(earnedToday(records, '2026-10-12', { minutes: 5, moves: 0 })).toEqual({ minutes: 8, moves: 4 });
    // Finished by ticks alone: the plan's minutes and the ticked moves.
    expect(earnedToday([], '2026-10-12', { minutes: 5, moves: 3 })).toEqual({ minutes: 5, moves: 3 });
    // A test files no moves; the page counts tests there, and no tile is zero.
    expect(earnedToday([record('2026-10-12', 4, [])], '2026-10-12', { minutes: 4, moves: 0 })).toEqual({
      minutes: 4,
      moves: 1,
    });
  });


  test('the big goal leads, with the step being worked for its colour', () => {
    const outcome = {
      kind: 'painfree' as const,
      sport: 'tennis' as const,
      area: 'achilles' as const,
      steps: ['pain_free_mornings', 'calf_raises', 'balance', 'symmetry'] as Goal['type'][],
      since: '2026-09-01',
    };
    const goals: Goal[] = [
      { ...goal('pain_free_mornings', 1, 5), status: 'maintaining' },
      goal('calf_raises', 12.5),
      goal('balance', null),
    ];
    const view = outcomeView(t, outcome, goals, 'calf_raises');
    expect(view.headline).toEqual({ before: '', lead: 'Pain-free', after: 'tennis' });
    expect(view.current).toBe('calf_raises');
  });

  test('every step done leaves no step being worked', () => {
    const outcome = { kind: 'flat_feet' as const, sport: null, area: null, steps: ['arch_hold'] as Goal['type'][], since: '' };
    const view = outcomeView(t, outcome, [{ ...goal('arch_hold', 60), status: 'maintaining' }], null);
    expect(view.current).toBeNull();
    expect(view.headline.lead).toBe('support');
  });

  test('the lead is found wherever a language puts it', () => {
    expect(splitLead('Теннис [без боли]')).toEqual({ before: 'Теннис', lead: 'без боли', after: '' });
    expect(splitLead('Piernas [más fuertes] para correr')).toEqual({ before: 'Piernas', lead: 'más fuertes', after: 'para correr' });
  });

  test('every outcome sentence marks exactly one lead in every language', () => {
    for (const lang of LANGUAGES) {
      const say = translatorFor(lang);
      for (const kind of ['painfree', 'injury_free', 'stronger'] as const) {
        const line = say(`pages.plan.outcome.${kind}`, { sport: 'x' });
        expect(splitLead(line).lead.length).toBeGreaterThan(0);
      }
      expect(splitLead(say('pages.plan.outcome.flat_feet')).lead.length).toBeGreaterThan(0);
    }
  });

  // ── The weeks ahead ────────────────────────────────────────────────────────

  const LEVELS: WeekPlan['levels'] = { calf: 0, arch: 0, balance: 0, hip: 0, mobility: 0, recovery: 0 };
  const move = (id: string, focus = false): PlanDay['exercises'][number] => ({
    id,
    level: 1,
    dose: { sets: 2, holdSec: 30, perSide: false },
    focus,
  });
  const weekOf = (weekStart: string, weekIndex: number, focus: Goal['type'] | null, extra: Partial<WeekPlan> = {}): WeekPlan => {
    const date = (offset: number) => {
      const [y, m, d] = weekStart.split('-').map(Number);
      const at = new Date(y, m - 1, d + offset);
      return `${at.getFullYear()}-${String(at.getMonth() + 1).padStart(2, '0')}-${String(at.getDate()).padStart(2, '0')}`;
    };
    return {
      weekStart,
      weekIndex,
      focus,
      days: [
        day(date(0), 'strength', [move('heel_raise_seated', true), move('short_foot_seated')]),
        day(date(1), 'mobility', [move('fascia_stretch', true), move('calf_stretch_straight')]),
        day(date(2), 'strength', [move('heel_raise_seated', true), move('calf_stretch_straight')]),
        day(date(3), 'balance', [move('single_leg_hold'), move('ankle_rocks')]),
        day(date(4), 'strength', [move('heel_raise_seated', true), move('short_foot_seated')]),
        day(date(5), 'rest'),
        day(date(6), 'rest'),
      ],
      rationale: { kind: weekIndex === 1 ? 'first' : 'default' },
      newThisWeek: [],
      levels: LEVELS,
      ...extra,
    };
  };
  const THIS = weekOf('2026-10-12', 1, 'pain_free_mornings');
  const NEXT = weekOf('2026-10-19', 2, 'pain_free_mornings');
  const path = (input: Partial<Parameters<typeof weekPath>[0]> = {}) =>
    weekPath({
      thisWeek: THIS,
      lastWeek: null,
      nextWeek: NEXT,
      today: '2026-10-12',
      lastTest: '2026-10-12',
      nextTest: '2026-10-26',
      seatedStart: false,
      ...input,
    });
  const shape = (nodes: PathNode[]) =>
    nodes.map((node) => (node.kind === 'test' ? `test:${node.state}` : `week:${node.when}`));
  const weeks = (nodes: PathNode[]) => nodes.filter((node): node is PathWeek => node.kind === 'week');
  const byId = (id: string) => id;

  test('the path is this week and next, and the test sits where it falls', () => {
    // Taken today, the next a fortnight on: after both weeks.
    expect(shape(path())).toEqual(['test:done', 'week:this', 'week:next', 'test:next']);
    // Today's, not taken yet: it opens the path.
    expect(shape(path({ lastTest: null, nextTest: '2026-10-12' }))).toEqual(['test:next', 'week:this', 'week:next']);
    // Later this week: between the two.
    expect(shape(path({ lastTest: null, nextTest: '2026-10-15' }))).toEqual(['week:this', 'test:next', 'week:next']);
    // Inside next week, even on its Monday: after next week's card, in date order.
    expect(shape(path({ lastTest: '2026-10-05', nextTest: '2026-10-21' }))).toEqual([
      'week:this',
      'week:next',
      'test:next',
    ]);
    expect(shape(path({ lastTest: '2026-10-05', nextTest: '2026-10-19' }))).toEqual([
      'week:this',
      'week:next',
      'test:next',
    ]);
  });

  test('a week reads its days, minutes and moves off the plan', () => {
    const [now, next] = weeks(path());
    expect(now).toMatchObject({ when: 'this', weekStart: '2026-10-12', days: 5, minutes: 5 });
    expect(next).toMatchObject({ when: 'next', weekStart: '2026-10-19' });
    // The focus's moves first, then the ones on most days, then in order; each once.
    expect(now.moves).toEqual([
      'heel_raise_seated',
      'fascia_stretch',
      'short_foot_seated',
      'calf_stretch_straight',
      'single_leg_hold',
      'ankle_rocks',
    ]);
    // A test day counts as a day with something to do, and has no moves.
    const withTest = weekOf('2026-10-12', 1, 'pain_free_mornings');
    withTest.days[0] = day('2026-10-12', 'test');
    const [tested] = weeks(path({ thisWeek: withTest }));
    expect(tested.days).toBe(5);
    // A session's minutes, never the test's.
    expect(tested.minutes).toBe(5);
  });

  test('the first week settles in, and the second says settling is over', () => {
    const [now, next] = weeks(path());
    expect(now.theme).toBe('settling');
    expect(weekTitle(t, now)).toBe('Settle things down');
    expect(weekLine(t, now.change, byId)).toBe('Gentle moves only, while your feet get used to the work.');
    const [seated] = weeks(path({ seatedStart: true }));
    expect(weekLine(t, seated.change, byId)).toBe('Seated moves only, while your feet get used to the work.');
    expect(next.theme).toBe('pain_free_mornings');
    expect(weekTitle(t, next)).toBe('Ease the mornings');
    expect(weekLine(t, next.change, byId)).toBe('Settling is over: moves can step up once two sessions in a row feel easy.');
  });

  test('what changes in a week is read off it and the week before', () => {
    const before = weekOf('2026-10-19', 3, 'calf_raises', { levels: { ...LEVELS, calf: 1 } });
    const change = (next: WeekPlan) => weeks(path({ thisWeek: before, nextWeek: next }))[1].change;
    // A level up on the focus chain, to a move that is in the week.
    const up = weekOf('2026-10-26', 4, 'calf_raises', { levels: { ...LEVELS, calf: 2 } });
    up.days[0].exercises[0] = move('heel_raise_hold', true);
    expect(change(up)).toEqual({ kind: 'up', exercise: 'heel_raise_hold' });
    expect(weekLine(t, change(up), byId)).toBe('A step up: heel_raise_hold.');
    // A level down.
    expect(change(weekOf('2026-10-26', 4, 'calf_raises', { levels: LEVELS }))).toEqual({ kind: 'down' });
    // A new focus says what its work is.
    expect(change(weekOf('2026-10-26', 4, 'balance', { levels: { ...LEVELS, calf: 1 } }))).toEqual({
      kind: 'focus',
      goal: 'balance',
    });
    // A move never scheduled before.
    const fresh = weekOf('2026-10-26', 4, 'calf_raises', {
      levels: { ...LEVELS, calf: 1 },
      newThisWeek: ['ankle_rocks'],
    });
    expect(change(fresh)).toEqual({ kind: 'newMove', exercise: 'ankle_rocks' });
    expect(weeks(path({ thisWeek: before, nextWeek: fresh }))[1].fresh).toEqual(['ankle_rocks']);
    // Nothing moved: next week says it holds the level; this week, what its work is.
    const same = weekOf('2026-10-26', 4, 'calf_raises', { levels: { ...LEVELS, calf: 1 } });
    expect(change(same)).toEqual({ kind: 'same' });
    expect(weeks(path({ lastWeek: before, thisWeek: same }))[0].change).toEqual({ kind: 'focus', goal: 'calf_raises' });
    // No week before on file: what the week's work is.
    expect(weeks(path({ thisWeek: same }))[0].change).toEqual({ kind: 'focus', goal: 'calf_raises' });
    // Every goal reached: keeping it.
    const keep = weekOf('2026-10-26', 9, null);
    expect(weeks(path({ thisWeek: before, nextWeek: keep }))[1]).toMatchObject({ theme: 'keep', change: { kind: 'keep' } });
  });

  test('the rail is solid up to this week and ahead after it', () => {
    const nodes = path();
    expect(nodes.map(pathReached)).toEqual([true, true, false, false]);
  });

  test('a test day reads as one line: today, the next counted in days, a taken one by its day', () => {
    const date = (key: string) => key.slice(5);
    const taken = { kind: 'test' as const, state: 'done' as const, date: '2026-10-12' };
    const next = { kind: 'test' as const, state: 'next' as const, date: '2026-10-26' };
    expect(testLine(t, taken, '2026-10-12', date)).toBe('Test day · today');
    expect(testLine(t, taken, '2026-10-14', date)).toBe('Test day · 10-12');
    expect(testLine(t, next, '2026-10-12', date)).toBe('Test day · in 14 days');
    expect(testLine(t, next, '2026-10-25', date)).toBe('Test day · tomorrow');
    expect(testLine(t, next, '2026-10-26', date)).toBe('Test day · today');
  });

  test('a week is labelled this week or next, never by a number', () => {
    const [now, next] = weeks(path());
    expect(weekLabel(t, now, () => 'Oct 19')).toBe('This week');
    expect(weekLabel(t, next, () => 'Oct 19')).toBe('Next week · from Oct 19');
  });

  test('no week card carries a figure, a plan length or a pain number, in any language', () => {
    const changes: PathWeek['change'][] = [
      { kind: 'settling', seated: false },
      { kind: 'settling', seated: true },
      { kind: 'down' },
      { kind: 'up', exercise: 'x' },
      { kind: 'newMove', exercise: 'x' },
      { kind: 'opens' },
      { kind: 'same' },
      { kind: 'keep' },
      ...(['pain_free_mornings', 'arch_hold', 'calf_raises', 'balance', 'symmetry'] as const).map((goal) => ({
        kind: 'focus' as const,
        goal,
      })),
    ];
    const themes: PathWeek['theme'][] = [
      'settling',
      'pain_free_mornings',
      'arch_hold',
      'calf_raises',
      'balance',
      'symmetry',
      'keep',
    ];
    const [now, next] = weeks(path());
    for (const lang of LANGUAGES) {
      const say = translatorFor(lang);
      for (const change of changes) {
        const line = weekLine(say, change, () => 'x');
        expect(line.length).toBeGreaterThan(0);
        expect(line).not.toMatch(/\d|\/10|%/);
        expect(line.trim().endsWith('.')).toBe(true);
      }
      for (const theme of themes) expect(weekTitle(say, { ...now, theme })).not.toMatch(/\d/);
      expect(weekLabel(say, now, () => 'x')).not.toMatch(/\d/);
      expect(weekLabel(say, next, () => 'x')).not.toMatch(/\d/);
      expect(say('pages.plan.weeks.after')).not.toMatch(/\d/);
    }
  });

  test('a week counts its days in each language’s plural', () => {
    const ru = translatorFor('ru');
    expect(ru('pages.plan.weeks.days', { count: 3 })).toBe('3 дня');
    expect(ru('pages.plan.weeks.days', { count: 5 })).toBe('5 дней');
    expect(ru('pages.plan.weeks.days', { count: 1 })).toBe('1 день');
    expect(t('pages.plan.weeks.days', { count: 1 })).toBe('1 day');
  });

  test('the next test counts its days in each language’s plural', () => {
    const next = { kind: 'test' as const, state: 'next' as const, date: '2026-10-14' };
    const ru = translatorFor('ru');
    const date = (key: string) => key;
    expect(testLine(ru, next, '2026-10-12', date)).toBe('День теста · через 2 дня');
    expect(testLine(ru, { ...next, date: '2026-10-23' }, '2026-10-12', date)).toBe('День теста · через 11 дней');
    expect(testLine(ru, { ...next, date: '2026-11-02' }, '2026-10-12', date)).toBe('День теста · через 21 день');
  });

  test('a finished day keeps the title it had before the session', () => {
    const base = { reason: null, steppedDown: false } as const;
    expect(doneTitle(t, { ...day('2026-10-12', 'test'), ...base }, 'arch_hold')).toBe('Test day');
    expect(doneTitle(t, { ...day('2026-10-12', 'strength'), ...base }, 'arch_hold')).toBe('Strength · arch');
    expect(doneTitle(t, { ...day('2026-10-12', 'rest'), ...base }, 'arch_hold')).toBe('Rest day');
    expect(doneTitle(t, { ...day('2026-10-12', 'mobility'), reason: 'flare', steppedDown: false }, 'arch_hold')).toBe(
      'Easy day · seated',
    );
  });
});
