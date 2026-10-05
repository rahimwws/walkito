/**
 * What a Superwall paywall is told about the person reading it.
 *
 * Superwall is a third party, so the rule is the analytics one: the plan and
 * the person's own words for what they want, never their body. And the plan
 * as it is: open-ended, so no length and no end date.
 */

import { describe, expect, test } from 'bun:test';

import { paywallPersonalisation, type PersonalisationInput } from '@/app/providers/superwall-personalisation';
import type { Intake } from '@/entities/profile';

const ALLOWED = new Set([
  'first_name',
  'goal',
  'goal_label',
  'focus',
  'focus_label',
  'sport',
  'sport_label',
  'runner',
  'days_per_week',
  'minutes',
  'progress_check_date',
]);

const full: Intake = {
  pain: ['heel', 'achilles'],
  side: 'left',
  sport: 'running',
  runner: 'casual',
  goal: 'race',
  challenge: 'painfree',
  load: '30',
  sessionsPerWeek: '3',
  sex: 'female',
  age: 41,
  weightKg: 80,
  shoe: { size: 43, unit: 'eu' },
  watch: 'apple',
  completedAt: 1000,
};

const NOW = Date.UTC(2026, 9, 6, 12);
const input = (patch: Partial<PersonalisationInput> = {}): PersonalisationInput => ({
  name: 'Sam Rivera',
  intake: full,
  language: 'en',
  outcome: { kind: 'race_ready', steps: ['calf_raises', 'arch_hold', 'balance'] },
  daysPerWeek: 5,
  minutes: 5,
  now: NOW,
  ...patch,
});

describe('paywall personalisation', () => {
  test('says the goal, the first step and the week in words', () => {
    const out = paywallPersonalisation(input());
    expect(out.first_name).toBe('Sam');
    expect(out.goal_label).toBe('Race ready');
    expect(out.focus_label).toBe('Stronger calves');
    expect(out.sport_label).toBe('Running');
    expect(out.days_per_week).toBe('5');
    expect(out.minutes).toBe('5');
    expect(out.progress_check_date).toBe('October 20');
  });

  test('never carries the body, and no plan length or end', () => {
    const out = paywallPersonalisation(input());
    for (const key of Object.keys(out)) expect(ALLOWED.has(key)).toBe(true);
    const values = JSON.stringify(out);
    for (const leak of ['heel', 'achilles', 'left', '41', '80', '43', 'female']) {
      expect(values.includes(`"${leak}"`)).toBe(false);
    }
  });

  test('a goal or a first step that names a condition is not sent', () => {
    for (const kind of ['painfree', 'flat_feet', 'comeback'] as const) {
      const out = paywallPersonalisation(input({ outcome: { kind, steps: ['calf_raises'] } }));
      expect('goal' in out).toBe(false);
      expect('goal_label' in out).toBe(false);
    }
    const mornings = paywallPersonalisation(
      input({ outcome: { kind: 'stronger', steps: ['pain_free_mornings', 'calf_raises'] } }),
    );
    expect('focus' in mornings).toBe(false);
    expect('focus_label' in mornings).toBe(false);
  });

  test('a missing answer is left out, not sent empty', () => {
    const out = paywallPersonalisation(input({ name: '', intake: null, outcome: null }));
    expect('first_name' in out).toBe(false);
    expect('goal' in out).toBe(false);
    expect('focus' in out).toBe(false);
    expect('sport' in out).toBe(false);
  });
});
