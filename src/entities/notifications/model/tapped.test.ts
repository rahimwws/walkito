import { describe, expect, test } from 'bun:test';

import { notificationOpenOf } from './tapped';

describe('notificationOpenOf', () => {
  test('names the first-week reminders by their kind', () => {
    expect(notificationOpenOf({ kind: 'trial-ending' })).toEqual({ type: 'trial-ending' });
    expect(notificationOpenOf({ kind: 'next-day' })).toEqual({ type: 'next-day' });
    expect(notificationOpenOf({ kind: 'first-step' })).toEqual({ type: 'first-step' });
  });

  test('says which Day 1 reminder and which plan nudge', () => {
    expect(notificationOpenOf({ kind: 'day-one', reminder: 2 })).toEqual({ type: 'day-one', reminder: 2 });
    expect(notificationOpenOf({ kind: 'day-one' })).toEqual({ type: 'day-one', reminder: 1 });
    expect(notificationOpenOf({ kind: 'plan-notification', notification: 'session', date: '2026-11-20' })).toEqual({
      type: 'plan-notification',
      plan: 'session',
    });
  });

  test('an unknown kind is other, a dev preview is nothing', () => {
    expect(notificationOpenOf({ kind: 'something-new' })).toEqual({ type: 'other' });
    expect(notificationOpenOf({})).toEqual({ type: 'other' });
    expect(notificationOpenOf({ kind: 'dev-preview', notification: 'session' })).toBeNull();
  });
});
