/**
 * The app speaking to this person's goal, sport and habits.
 */

import { describe, expect, test } from 'bun:test';

import { raceDaysLeft } from '@/entities/profile/model/intake';
import { usualSessionMinute, writeLog } from '@/entities/program/model/state';
import { messageFor } from '@/entities/notifications/model/copy';
import { candidates, sessionAtFor, type DaySignals } from '@/entities/notifications/model/ladder';
import { EMPTY_DELIVERY } from '@/entities/notifications/model/limits';
import { intakeFrom } from '@/pages/onboarding/model/intake';
import { briefTokens } from '@/pages/home/model/brief';
import { PERSONAL_EVERY, briefState, personalState } from '@/pages/home/model/brief-state';

const say = (tokens: readonly { text: string }[]) => tokens.map((token) => token.text).join(' ');

describe('the race date', () => {
  test('"in about two months" becomes a date eight weeks out', () => {
    const now = new Date(2026, 2, 1).getTime();
    const intake = intakeFrom({ goal: ['race'], raceWhen: ['8'] }, null, now);
    expect(intake.raceDate).toBe('2026-04-26');
    expect(raceDaysLeft(intake, now)).toBe(56);
  });

  test('no date, or no race, is no countdown', () => {
    expect(intakeFrom({ goal: ['race'], raceWhen: ['none'] }, null).raceDate).toBeNull();
    expect(intakeFrom({ goal: ['painfree'], raceWhen: ['8'] }, null).raceDate).toBeNull();
    expect(raceDaysLeft(null)).toBeNull();
  });
});

describe('the personal line on Home', () => {
  const base = { name: '', cursor: 21, doneToday: false, streak: 4, daysInstalled: 21, todayPain: 1 };

  test('which line a goal gets', () => {
    expect(personalState('race', 'running', 30)).toBe('goal-race');
    expect(personalState('race', 'running', null)).toBe('goal-back');
    expect(personalState('race', 'running', -2)).toBe('goal-back');
    expect(personalState('painfree', 'tennis', null)).toBe('goal-back');
    expect(personalState('painfree', null, null)).toBeNull();
    expect(personalState('consistent', null, null)).toBe('goal-consistent');
  });

  test('every third quiet day, not every day', () => {
    const on = { ...base, cursor: PERSONAL_EVERY * 7, goal: 'painfree', sport: 'running' };
    expect(briefState(on)).toBe('goal-back');
    expect(briefState({ ...on, cursor: on.cursor + 1 })).not.toBe('goal-back');
  });

  test('the last fortnight before a race is the countdown every quiet day', () => {
    const racing = { ...base, cursor: 22, goal: 'race', raceDaysLeft: 9 };
    expect(briefState(racing)).toBe('goal-race');
  });

  test('never over a sore morning', () => {
    expect(briefState({ ...base, todayPain: 6, goal: 'race', raceDaysLeft: 5 })).not.toBe('goal-race');
  });

  test('the sport is named in each language', () => {
    const input = { ...base, cursor: 21, goal: 'painfree', sport: 'running' };
    expect(say(briefTokens(input, 'en'))).toContain('to running');
    expect(say(briefTokens(input, 'ru'))).toContain('к бегу');
    expect(say(briefTokens(input, 'es'))).toContain('a correr');
  });

  test('the countdown agrees in Russian', () => {
    const input = { ...base, cursor: 22, goal: 'race', raceDaysLeft: 3 };
    expect(say(briefTokens(input, 'ru'))).toContain('3 дня до старта');
  });
});

describe('notifications', () => {
  const signals = (overrides: Partial<DaySignals> = {}): DaySignals => ({
    dateKey: '2026-03-10',
    dayNumber: 17,
    wakeAt: 7 * 60 + 45,
    painYesterday: null,
    painRecently: false,
    stepRatio: null,
    stepsYesterday: null,
    asymmetryDays: 0,
    loadAdjusted: false,
    planChanged: false,
    planReason: null,
    isRetest: false,
    retestUnstarted: false,
    opensBlock: null,
    hasSession: true,
    minutes: 7,
    kind: 'strength',
    maintenance: false,
    painLoggedToday: true,
    openedAppToday: true,
    streak: 0,
    freezeUsedThisWeek: false,
    daysAway: 0,
    ...overrides,
  });

  test('a race ahead puts the countdown in the session line', () => {
    expect(messageFor('session', signals({ raceDaysLeft: 12 }), 'en')?.body).toContain(
      '12 days to race day',
    );
    expect(messageFor('session', signals({ raceDaysLeft: 22 }), 'ru')?.body).toContain(
      'До старта 22 дня',
    );
  });

  test('the session reminder lands at their usual time, within bounds', () => {
    expect(sessionAtFor(465, null)).toBe(465);
    expect(sessionAtFor(465, 13 * 60)).toBe(13 * 60 - 20);
    // Never before they are up, never into the quiet evening.
    expect(sessionAtFor(465, 6 * 60)).toBe(465);
    expect(sessionAtFor(465, 23 * 60)).toBeLessThan(21 * 60 + 30);
  });

  test('the ladder uses it for the session row only', () => {
    const rows = candidates(signals({ sessionAt: 12 * 60 }), EMPTY_DELIVERY);
    expect(rows.find((row) => row.kind === 'session')?.at).toBe(12 * 60);
  });

  test('the habit is read from when sessions were finished', () => {
    const D = 400;
    for (let day = D; day < D + 6; day += 1) {
      writeLog(day, { sessionCompleted: true, completedAt: new Date(2026, 2, day - D + 1, 12, 30).getTime() });
    }
    expect(usualSessionMinute(D + 6)).toBe(12 * 60 + 30);
    // Too few to be a habit.
    expect(usualSessionMinute(D + 3)).toBeNull();
  });
});
