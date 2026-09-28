import { describe, expect, test } from 'bun:test';

import { advanceGoals, pickFocus, type Goal } from './goals';
import { painAreasOf } from '@/entities/leg-zone/model/leg-zones';

import { OUTCOME_KINDS, goalsForOutcome, outcomeFor, outcomeKindFor, outcomeProgress, stepsFor, withAreas, withKind } from './outcome';

const TODAY = '2026-09-28';
const active = (type: Goal['type'], current: number | null = null): Goal => ({
  type,
  status: 'active',
  baseline: current,
  current,
  since: TODAY,
});

describe('the big goal', () => {
  test('onboarding answers pick the outcome, pain first', () => {
    expect(outcomeKindFor('flatfeet', true)).toBe('flat_feet');
    expect(outcomeKindFor('stronger', true)).toBe('stronger');
    expect(outcomeKindFor('race', true)).toBe('race_ready');
    expect(outcomeKindFor('ankles', false)).toBe('stable_ankles');
    expect(outcomeKindFor('consistent', true)).toBe('painfree');
    expect(outcomeKindFor('painfree', false)).toBe('injury_free');
    expect(outcomeKindFor(null, false)).toBe('injury_free');
  });

  test('heel pain for a runner leans on the arch; Achilles on a court leans on the calf and balance', () => {
    expect(stepsFor('painfree', 'heel', 'running', false)).toEqual(['pain_free_mornings', 'arch_hold', 'calf_raises', 'symmetry']);
    expect(stepsFor('painfree', 'achilles', 'tennis', false)).toEqual(['pain_free_mornings', 'calf_raises', 'balance', 'symmetry']);
  });

  test('every kind has steps, pain first when it hurts, never a repeat', () => {
    for (const kind of OUTCOME_KINDS) {
      const steps = stepsFor(kind, 'heel', 'tennis', false);
      expect(steps[0]).toBe('pain_free_mornings');
      expect(new Set(steps).size).toBe(steps.length);
      expect(steps.length).toBeGreaterThanOrEqual(3);
    }
  });

  test('a rigid foot never gets the arch step', () => {
    expect(stepsFor('flat_feet', null, null, true)).toEqual(['balance', 'calf_raises']);
    expect(stepsFor('painfree', 'heel', 'running', true)).not.toContain('arch_hold');
  });

  test('outcomeFor reads the intake: first known area, known sport only', () => {
    const o = outcomeFor({ goal: 'painfree', sport: 'basketball', areas: ['calf', 'heel'], rigidFoot: false }, TODAY);
    expect(o).toMatchObject({ kind: 'painfree', sport: 'basketball', area: 'calf' });
    const unknown = outcomeFor({ goal: null, sport: 'curling', areas: [], rigidFoot: false }, TODAY);
    expect(unknown.sport).toBeNull();
    expect(unknown.kind).toBe('injury_free');
  });

  test('its first three steps become the active goals; reached goals are kept, stray ones go', () => {
    const o = outcomeFor({ goal: 'painfree', sport: 'running', areas: ['heel'], rigidFoot: false }, TODAY);
    const fresh = goalsForOutcome(o, [], TODAY, 3);
    expect(fresh.map((g) => g.type)).toEqual(['pain_free_mornings', 'arch_hold', 'calf_raises']);
    const old: Goal[] = [{ ...active('balance', 30), status: 'maintaining' }, active('arch_hold', 15)];
    const moved = goalsForOutcome(withKind(o, 'stronger', false, TODAY), old, TODAY, 3);
    expect(moved.map((g) => g.type)).toEqual(['balance', 'pain_free_mornings', 'calf_raises', 'symmetry']);
    expect(moved.some((g) => g.type === 'arch_hold')).toBe(false);
  });

  test('a reached step hands over to the next step of the outcome, not the fixed list', () => {
    const steps = stepsFor('injury_free', null, 'tennis', false);
    const { added } = advanceGoals([active('calf_raises', 25)], ['calf_raises'], TODAY, [], steps);
    expect(added).toEqual(['balance']);
  });

  test('ties in the focus follow the outcome order', () => {
    const goals = [active('symmetry'), active('balance')];
    expect(pickFocus(goals, { weekIndex: 1, painStart: null, painRecent: null, order: ['balance', 'symmetry'] })).toBe('balance');
  });

  test('progress: steps before the current one are whole shares, the current one its part', () => {
    const o = outcomeFor({ goal: 'stronger', sport: null, areas: [], rigidFoot: false }, TODAY);
    expect(o.steps).toEqual(['calf_raises', 'symmetry', 'balance']);
    const goals: Goal[] = [{ ...active('calf_raises', 25), status: 'maintaining' }, active('balance', 15)];
    const p = outcomeProgress(o, goals, 'balance');
    expect(p.current).toBe('balance');
    expect(p.fill).toBeCloseTo((2 + 0.5) / 3);
    expect(outcomeProgress(o, goals, null).current).toBe('symmetry');
    // Balance is the third step even with symmetry still open.
    expect(p.step).toBe(3);
  });

  test('moving the pain on the map reorders the steps', () => {
    const heel = outcomeFor({ goal: 'painfree', sport: 'running', areas: ['heel'], rigidFoot: false }, TODAY);
    expect(heel.steps[1]).toBe('arch_hold');
    // Settings stores map zones; they read as complaints first.
    const moved = withAreas(heel, painAreasOf(['tibia', 'heel']), false);
    expect(moved.area).toBe('shin');
    expect(moved.steps).toEqual(['pain_free_mornings', 'calf_raises', 'balance', 'symmetry']);
    expect(withAreas(heel, [], false).steps).not.toContain('pain_free_mornings');
  });

  test('both stored pain shapes read as the same complaints', () => {
    expect(painAreasOf(['arch', 'ball', 'none'])).toEqual(['foot']);
    expect(painAreasOf(['foot', 'heel'])).toEqual(['foot', 'heel']);
  });
});
