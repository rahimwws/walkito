import { describe, expect, test } from 'bun:test';

import {
  balanceAllowed,
  durationReaction,
  equipmentReaction,
  firstWeekMoves,
  footTypeFor,
  goalValuesFor,
  miniTestEligible,
  painBandOf,
  reminderFor,
  safetyPlan,
  safetyReaction,
  sessionDays,
  triedKey,
  triedReaction,
  whyLines,
} from './journey';

describe('goals by who they are', () => {
  test('five at most, pain first only when something hurts', () => {
    for (const role of ['running', 'feet', 'both', 'walking', null] as const) {
      expect(goalValuesFor(role, false).length).toBeLessThanOrEqual(5);
      expect(goalValuesFor(role, false)[0]).toBe('mornings');
      expect(goalValuesFor(role, true)).not.toContain('mornings');
    }
  });

  test('a shift for a standing job, running for a runner', () => {
    expect(goalValuesFor('feet', false)).toContain('allday');
    expect(goalValuesFor('feet', false)).not.toContain('comeback');
    expect(goalValuesFor('running', false)).toContain('comeback');
  });
});

describe('the safety check only changes the plan', () => {
  test('a fall or a red flag starts seated, numbness does not', () => {
    expect(safetyPlan({ safety: ['fall'] }).seated).toBe(true);
    expect(safetyPlan({ safety: ['pop'] }).seated).toBe(true);
    expect(safetyPlan({ safety: ['numb'] })).toEqual({ seated: false, numb: true });
    expect(safetyPlan({ safety: ['none'] })).toEqual({ seated: false, numb: false });
  });

  test('says something only when it changed something', () => {
    expect(safetyReaction({ safety: ['none'] })).toBeNull();
    expect(safetyReaction({ safety: ['fall', 'numb'] })?.key).toBe('safety_seated');
    expect(safetyReaction({ safety: ['numb'] })?.key).toBe('safety_numb');
  });
});

describe('what they tried', () => {
  test('one reaction, for the answer that says most', () => {
    expect(triedKey({ tried: ['shoes', 'insoles', 'rest'] })).toBe('insoles');
    expect(triedKey({ tried: ['physio', 'stretching'] })).toBe('stretching');
    expect(triedKey({ tried: ['none'] })).toBe('none');
    expect(triedKey({})).toBeNull();
    expect(triedReaction('none')?.key).toBe('tried_none');
  });
});

describe('reactions and bands', () => {
  test('pain bands', () => {
    expect([0, 1, 3, 4, 6, 7, 10].map(painBandOf)).toEqual(['zero', 'mild', 'mild', 'middle', 'middle', 'hard', 'hard']);
  });

  test('every duration has a screen', () => {
    for (const d of ['weeks', 'months', 'year', 'longer'] as const) expect(durationReaction(d)).not.toBeNull();
  });

  test('equipment is only remarked on when something is missing', () => {
    expect(equipmentReaction({ equipment: ['step', 'band', 'towel'] })).toBeNull();
    expect(equipmentReaction({ equipment: ['towel'] })?.key).toBe('equipment_some');
    expect(equipmentReaction({ equipment: ['none'] })?.key).toBe('equipment_none');
  });
});

describe('the 30-second check', () => {
  test('for an arch goal or nothing hurting', () => {
    expect(miniTestEligible({ goal: ['flatfeet'] }, false)).toBe(true);
    expect(miniTestEligible({ goal: ['mornings'] }, false)).toBe(false);
    expect(miniTestEligible({}, true)).toBe(true);
  });

  test('one leg only on a quiet morning', () => {
    expect(balanceAllowed({ morningPain: '3' }, false)).toBe(true);
    expect(balanceAllowed({ morningPain: '4' }, false)).toBe(false);
    expect(balanceAllowed({}, true)).toBe(true);
  });

  test('the arch answer sets the foot type', () => {
    expect(footTypeFor('yes')).toBe('flexible');
    expect(footTypeFor('no')).toBe('rigid');
    expect(footTypeFor('unsure')).toBe('unknown');
  });
});

describe('the rest', () => {
  test('habit times', () => {
    expect(reminderFor('wake', 420)).toBe(420);
    expect(reminderFor('coffee', 1430)).toBe(20);
  });

  test('session days', () => {
    expect(sessionDays(3)).toEqual([0, 2, 4]);
    expect(sessionDays(5)).toHaveLength(5);
    expect(sessionDays(7)).toHaveLength(7);
  });

  test('why: nothing to explain when nothing hurts', () => {
    expect(whyLines(null, {})).toBeNull();
    const lines = whyLines('heel', { duration: ['year'], tried: ['insoles'] });
    expect(lines?.lingers).toBe('onboarding.why.lingersYear');
    expect(lines?.tried).toBe('onboarding.why.triedInsoles');
  });

  test('week one is seated moves', () => {
    expect(firstWeekMoves('heel').length).toBe(2);
  });
});
