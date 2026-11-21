import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';

import { coachLine, reactionAnalyticsId } from './coach';

describe('his lines', () => {
  const t = translatorFor('en');

  test('a beat as each part begins, and the pain beat only before anything is marked', () => {
    expect(coachLine('toe', {})?.(t)).toBe(t('onboarding.coach.toeTry'));
    expect(coachLine('goal', {})?.(t)).toBe(t('onboarding.coach.beatGoal'));
    expect(coachLine('pain', {})?.(t)).toBe(t('onboarding.coach.beatFeet'));
    expect(coachLine('pain', { pain: ['none'] })).toBeNull();
    expect(coachLine('pain', { pain: ['heel'] })).toBeNull();
  });

  test('halfway and the plan ready keep the name slot for the page to fill', () => {
    for (const language of LANGUAGES) {
      const tl = translatorFor(language);
      expect(coachLine('midway', {})?.(tl), language).toContain('{name}');
      expect(coachLine('building', {})?.(tl), language).toContain('{name}');
    }
  });

  test('no line where the step has its own, or none', () => {
    for (const key of [
      'role',
      'side',
      'duration',
      'safety',
      'tried',
      'habit',
      'planDays',
      'planMinutes',
      'equipment',
      'notify',
      'outlook',
    ]) {
      expect(coachLine(key, {}), key).toBeNull();
    }
  });
});

describe('reactionAnalyticsId', () => {
  test('passes the reactions that describe a person, not a body', () => {
    for (const id of ['name', 'role_running', 'role_feet', 'habit_wake', 'equipment_none', 'equipment_some']) {
      expect<string | null>(reactionAnalyticsId(id)).toBe(id);
    }
  });

  test('holds back every reaction that names a body answer', () => {
    for (const id of [
      'area_heel',
      'area_none',
      'safety_seated',
      'safety_doctor',
      'safety_numb',
      'duration_weeks',
      'duration_year',
      'tried_physio',
      'tried_none',
      'pain_hard',
      'pain_zero',
    ]) {
      expect(reactionAnalyticsId(id), id).toBeNull();
    }
  });

  test('matches whole prefixes only', () => {
    expect(reactionAnalyticsId('names')).toBeNull();
    expect(reactionAnalyticsId('role')).toBeNull();
    expect(reactionAnalyticsId('xrole_running')).toBeNull();
  });
});
