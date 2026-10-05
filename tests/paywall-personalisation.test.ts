/**
 * What a Superwall paywall is told about the person reading it.
 *
 * Superwall is a third party, so the rule is the analytics one: the plan and
 * the person's own words for what they want, never their body.
 */

import { describe, expect, test } from 'bun:test';

import { paywallPersonalisation, type PersonalisationInput } from '@/app/providers/superwall-personalisation';
import type { Intake } from '@/entities/profile';

const ALLOWED = new Set([
  'first_name',
  'goal',
  'goal_label',
  'sport',
  'sport_label',
  'runner',
  'plan_weeks',
  'plan_end_date',
  'first_checkpoint_date',
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
const input = (name: string, intake: Intake | null): PersonalisationInput => ({
  name,
  intake,
  language: 'en',
  planLength: 84,
  firstRetestDay: 14,
  dateOfDay: (day) => NOW + (day - 1) * 86_400_000,
});

describe('paywall personalisation', () => {
  test('says the plan and the goal in words', () => {
    const out = paywallPersonalisation(input('Sam Rivera', full));
    expect(out.first_name).toBe('Sam');
    expect(out.goal).toBe('race');
    expect(out.goal_label).toBe('Train for a race');
    expect(out.sport_label).toBe('Running');
    expect(out.plan_weeks).toBe(12);
    expect(out.first_checkpoint_date).toBe('October 19');
    expect(out.plan_end_date).toBe('December 28');
  });

  test('never carries the body: pain, side, age, weight, shoe', () => {
    const out = paywallPersonalisation(input('Sam', full));
    for (const key of Object.keys(out)) expect(ALLOWED.has(key)).toBe(true);
    const values = JSON.stringify(out);
    for (const leak of ['heel', 'achilles', 'left', '41', '80', '43', 'female']) {
      expect(values.includes(`"${leak}"`)).toBe(false);
    }
  });

  test('a missing answer is left out, not sent empty', () => {
    const out = paywallPersonalisation(input('', null));
    expect('first_name' in out).toBe(false);
    expect('goal' in out).toBe(false);
    expect('sport' in out).toBe(false);
  });
});
