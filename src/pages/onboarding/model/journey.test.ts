import { describe, expect, test } from 'bun:test';

import {
  archFinding,
  durationReaction,
  equipmentReaction,
  firstWeekMoves,
  footTypeFor,
  goalValuesFor,
  heelAsked,
  heelFinding,
  heelOf,
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
  test('five at most, mornings first for everybody', () => {
    for (const role of ['running', 'feet', 'both', 'walking', null] as const) {
      expect(goalValuesFor(role).length).toBeLessThanOrEqual(5);
      expect(goalValuesFor(role)[0]).toBe('mornings');
    }
  });

  test('a shift for a standing job, running for a runner, injury-free for runners only', () => {
    expect(goalValuesFor('feet')).toContain('allday');
    expect(goalValuesFor('feet')).not.toContain('comeback');
    expect(goalValuesFor('running')).toContain('comeback');
    expect(goalValuesFor('running')).toContain('injuryfree');
    for (const role of ['feet', 'both', 'walking', null] as const) expect(goalValuesFor(role)).not.toContain('injuryfree');
  });
});

describe('the safety check only changes the plan', () => {
  test('a fall or a red flag starts seated, numbness does not', () => {
    expect(safetyPlan({ safety: ['fall'] }).seated).toBe(true);
    expect(safetyPlan({ safety: ['pop'] }).seated).toBe(true);
    expect(safetyPlan({ safety: ['numb'] })).toEqual({ seated: false, numb: true, protectFeet: true, doctor: false });
    expect(safetyPlan({ safety: ['none'] })).toEqual({ seated: false, numb: false, protectFeet: false, doctor: false });
  });

  test('numb feet or diabetes keep hops and eyes-closed balance out, for good', () => {
    expect(safetyPlan({ safety: ['diabetes'] }).protectFeet).toBe(true);
    expect(safetyPlan({ safety: ['fall'] }).protectFeet).toBe(false);
  });

  test('says something only when it changed something', () => {
    expect(safetyReaction({ safety: ['none'] })).toBeNull();
    expect(safetyReaction({ safety: ['fall', 'numb'] })?.key).toBe('safety_seated');
    expect(safetyReaction({ safety: ['numb'] })?.key).toBe('safety_numb');
    expect(safetyReaction({ safety: ['calf'] })?.key).toBe('safety_doctor');
    expect(safetyReaction({ safety: ['diabetes', 'fall'] })?.key).toBe('safety_doctor');
    expect(safetyPlan({ safety: ['pop'] }).seated).toBe(true);
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

describe('the Foot Check', () => {
  const SAFETY = ['none', 'numb', 'diabetes', 'calf', 'pop', 'fall'];

  test('the heel question for everybody but a fall, a calf red flag or a pop, whatever the morning', () => {
    for (const morning of [undefined, '0', '3', '6', '7', '10']) {
      for (const flag of SAFETY) {
        const answers = { safety: [flag], ...(morning == null ? {} : { morningPain: morning }) };
        expect(heelAsked(answers), `${flag} at ${morning}`).toBe(!['fall', 'calf', 'pop'].includes(flag));
      }
    }
    expect(heelAsked({})).toBe(true);
    expect(heelAsked({ safety: ['numb', 'pop'] })).toBe(false);
  });

  test('every heel answer is said back with what the plan does, and a row on the card', () => {
    for (const heel of ['left', 'right', 'both', 'unsure'] as const) {
      const finding = heelFinding(heel);
      expect(finding).not.toBeNull();
      expect(heelOf({ 'test-heel': [heel] })).toBe(heel);
    }
    expect(heelFinding(heelOf({}))).toBeNull();
    expect(heelOf({ 'test-heel': [] })).toBeNull();
    expect(heelOf({ 'test-heel': ['up'] })).toBeNull();
  });

  test('a heel answer stops counting once the safety answer leaves the question out', () => {
    expect(heelOf({ 'test-heel': ['left'], safety: ['numb'] })).toBe('left');
    for (const flag of ['fall', 'calf', 'pop']) expect(heelOf({ 'test-heel': ['left'], safety: [flag] })).toBeNull();
  });

  test('every arch answer has something seen and something the plan does', () => {
    for (const arch of ['yes', 'no', 'unsure']) expect(archFinding(arch)).not.toBeNull();
    expect(archFinding(null)).toBeNull();
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
