/**
 * The answers become the plan.
 *
 * Until these existed, fifteen screens of answers were thrown away and every
 * user got the same 84-day plan whatever the summary screen had promised.
 */

import { describe, expect, test } from 'bun:test';

import { withFocus } from '@/entities/program/model/catalogue';
import { resolveDay } from '@/entities/program/model/adapt';
import { blocksFor } from '@/entities/program/model/blocks';
import { focusFor, intakeFrom, planSettingsFrom, startingPlan, toeWorkFrom } from '@/pages/onboarding/model/intake';


describe('reading the answers', () => {
  test('choices survive, and the new questions with them', () => {
    const intake = intakeFrom(
      {
        pain: ['heel', 'achilles'],
        side: ['left'],
        role: ['both'],
        runner: ['casual'],
        goal: ['mornings'],
        duration: ['year'],
        morningPain: '7',
        safety: ['none'],
        tried: ['insoles', 'rest'],
        habit: ['coffee'],
      },
      null,
      1000,
    );
    expect(intake.pain).toEqual(['heel', 'achilles']);
    expect(intake.side).toBe('left');
    // Who they are says the sport now: anybody who runs is a runner.
    expect(intake.sport).toBe('running');
    expect(intake.role).toBe('both');
    expect(intake.painDuration).toBe('year');
    expect(intake.morningPain).toBe(7);
    expect(intake.tried).toEqual(['insoles', 'rest']);
    expect(intake.habit).toBe('coffee');
    // No longer asked.
    expect(intake.sex).toBeNull();
    expect(intake.age).toBeNull();
    expect(intake.weightKg).toBeNull();
    expect(intake.shoe).toBeNull();
    expect(intake.completedAt).toBe(1000);
  });

  test('a standing job names no sport', () => {
    expect(intakeFrom({ role: ['feet'] }).sport).toBeNull();
  });

  test('a skipped flow is a set of nulls, not invented defaults', () => {
    const intake = intakeFrom({}, null);
    expect(intake.pain).toEqual([]);
    expect(intake.side).toBeNull();
    expect(intake.runner).toBeNull();
    expect(intake.age).toBeNull();
  });
});

describe('the starting plan', () => {
  const base = intakeFrom({}, null);

  test('the length matches what the summary screen promised', () => {
    expect(startingPlan({ ...base, runner: 'regular' }).planLength).toBe(42);
    expect(startingPlan({ ...base, runner: 'new' }).planLength).toBe(84);
    expect(startingPlan(base).planLength).toBe(84);
  });

  test('a new runner starts a step lighter', () => {
    expect(startingPlan({ ...base, runner: 'new' }).progressionOffset).toBe(-1);
    expect(startingPlan({ ...base, runner: 'regular' }).progressionOffset).toBe(0);
    // A pain only weeks old, or a week one that starts seated.
    expect(startingPlan({ ...base, runner: 'regular' }, { duration: ['weeks'] }).progressionOffset).toBe(-1);
    expect(startingPlan({ ...base, runner: 'regular' }, { safety: ['fall'] }).progressionOffset).toBe(-1);
    expect(startingPlan({ ...base, runner: 'regular' }, { safety: ['numb'] }).progressionOffset).toBe(0);
  });

  test('heel and foot win; otherwise the calf or the hip leads', () => {
    expect(focusFor(['heel', 'knee'])).toBe('foot');
    expect(focusFor(['achilles'])).toBe('calf');
    expect(focusFor(['shin', 'hip'])).toBe('calf');
    expect(focusFor(['knee'])).toBe('hip');
    expect(focusFor(['none'])).toBe('foot');
  });
});

describe('the focus in the plan', () => {
  test('calf focus adds the soleus stretch to the lighter days only', () => {
    expect(withFocus(['foot_roll'], 1, 'recovery', 'calf')).toContain('calf_stretch_bent');
    expect(withFocus(['heel_raise_towel'], 2, 'strength', 'calf')).toEqual(['heel_raise_towel']);
  });

  test('hip focus brings hip work forward to the balance day', () => {
    expect(withFocus(['single_leg_hold'], 2, 'balance', 'hip')).toContain('hip_abduction');
    expect(withFocus(['single_leg_hold'], 1, 'balance', 'hip')).not.toContain('hip_abduction');
  });

  test('nothing is duplicated, and foot focus changes nothing', () => {
    const ids = ['calf_stretch_bent', 'ankle_rocks'];
    expect(withFocus(ids, 3, 'mobility', 'calf')).toEqual(ids);
    expect(withFocus(ids, 3, 'mobility', 'foot')).toEqual(ids);
  });

  test('a flare day stays the unloaded minimum whatever the focus', () => {
    const block = blocksFor(84)[1];
    const day = resolveDay({
      dayNumber: 16,
      block,
      kind: 'mobility',
      painToday: 8,
      pain7dAvg: 3,
      hoursOnFeetYesterday: null,
      hoursBaseline: null,
      daysSinceLastSession: 1,
      progressionOffset: 0,
      focus: 'calf',
    });
    expect(day.reason).toBe('flare');
    expect(day.exercises.map((e) => e.exercise.id)).not.toContain('calf_stretch_bent');
  });
});

describe('the photo questions', () => {
  test('a toe that lifts a little or not at all, or a bunion, asks for toe work', () => {
    expect(toeWorkFrom({ toe: ['no'] })).toBe(true);
    expect(toeWorkFrom({ toe: ['little'] })).toBe(true);
    expect(toeWorkFrom({ bunion: ['yes'] })).toBe(true);
    expect(toeWorkFrom({ bunion: ['little'] })).toBe(true);
    expect(planSettingsFrom({ toe: ['no'] }, null).toeWork).toBe(true);
  });

  test('an easy lift, no bunion, "not sure" or a skipped question changes nothing', () => {
    expect(toeWorkFrom({ toe: ['yes'], bunion: ['no'] })).toBe(false);
    expect(toeWorkFrom({ bunion: ['unsure'] })).toBe(false);
    expect(toeWorkFrom({})).toBe(false);
    expect('toeWork' in planSettingsFrom({ toe: ['yes'] }, null)).toBe(false);
  });
});
