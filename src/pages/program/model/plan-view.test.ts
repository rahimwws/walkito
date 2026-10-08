import { describe, expect, test } from 'bun:test';

import { adjustToday } from '@/entities/program/model/plan/today';
import type { Goal } from '@/entities/program/model/plan/goals';
import type { PlanDay } from '@/entities/program/model/plan/week';
import { CLIPS } from '@/shared/config/clip-manifest';
import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';
import { en as EN } from '@/shared/lib/i18n/catalogue/en';

import { goalView, outcomeView, rationaleLine, splitLead, todayTitle, todayVariant } from './plan-view';

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

  test('2 · the goal reads "Now … · Goal …" with no arrow', () => {
    const view = goalView(t, goal('arch_hold', 24), false);
    expect(view.now).toBe('Now 24s');
    expect(view.target).toBe('Goal 60s');
    expect(view.title).toBe('Stronger arch');
    expect(`${view.now}${view.target}`).not.toContain('→');
  });

  test('3 · a "lower is better" goal fills as the number drops', () => {
    const start = goalView(t, goal('pain_free_mornings', 6, 6), false);
    const later = goalView(t, goal('pain_free_mornings', 3, 6), false);
    expect(later.fill).toBeGreaterThan(start.fill);
    expect(later.now).toBe('Now 3/10');
    expect(later.target).toBe('Goal 1/10');
  });

  test('a test today replaces the explainer', () => {
    expect(goalView(t, goal('arch_hold', 24), true).explainer).toBe('Test today - see how much it’s grown.');
  });

  test('6 · the rationale is hidden when it only restates the goal', () => {
    expect(rationaleLine(t, { kind: 'default' }, null)).toBeNull();
    expect(rationaleLine(t, { kind: 'newFocus' }, null)).toBeNull();
    expect(rationaleLine(t, { kind: 'default' }, 'Heel drops')).toBe('New this week: Heel drops');
    expect(rationaleLine(t, { kind: 'painUp' }, null)).not.toBeNull();
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


  test('the big goal leads, the step follows, the line spans every step', () => {
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
    const view = outcomeView(t, outcome, goals, 'calf_raises', false);
    expect(view.headline).toEqual({ before: '', lead: 'Pain-free', after: 'tennis' });
    expect(view.step).toBe('Step 2 of 4 · Stronger calves');
    // One step done, half of the next: 1.5 of 4.
    expect(view.fill).toBeCloseTo(1.5 / 4);
    expect(view.total).toBe(4);
  });

  test('every step done says so and fills the line', () => {
    const outcome = { kind: 'flat_feet' as const, sport: null, area: null, steps: ['arch_hold'] as Goal['type'][], since: '' };
    const view = outcomeView(t, outcome, [{ ...goal('arch_hold', 60), status: 'maintaining' }], null, false);
    expect(view.fill).toBe(1);
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
});
