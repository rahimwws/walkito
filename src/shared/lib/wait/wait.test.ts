import { describe, expect, test } from 'bun:test';

import { translatorFor } from '@/shared/lib/i18n';

import { COUNT_WITHIN_MS, waitPhrase, waitTime } from './wait';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const en = translatorFor('en');
const ru = translatorFor('ru');
const es = translatorFor('es');

describe('waitTime', () => {
  test('hours and minutes, the minutes rounded up', () => {
    expect(waitTime(en, 5 * HOUR + 2 * MINUTE + 10 * SECOND)).toBe('5h 3m');
    expect(waitTime(ru, 5 * HOUR + 3 * MINUTE)).toBe('5 ч 3 мин');
    expect(waitTime(es, 5 * HOUR + 3 * MINUTE)).toBe('5 h 3 min');
  });

  test('under an hour is minutes alone', () => {
    expect(waitTime(en, 45 * MINUTE)).toBe('45m');
    expect(waitTime(ru, 45 * MINUTE)).toBe('45 мин');
  });

  /** Rounding carries into the hour rather than printing "0h 60m". */
  test('a part-minute before the hour carries', () => {
    expect(waitTime(en, 59 * MINUTE + 30 * SECOND)).toBe('1h 0m');
  });

  test('the last minute has its own phrase, never "0m"', () => {
    expect(waitTime(en, 40 * SECOND)).toBe('<1m');
    expect(waitTime(ru, 1)).toBe('<1 мин');
  });
});

describe('waitPhrase', () => {
  const at = new Date(2026, 9, 5, 0, 0, 0).getTime(); // Monday 5 October 2026

  test('counts within a day', () => {
    expect(waitPhrase(en, 'en', at, 7 * HOUR)).toEqual({ kind: 'in', time: '7h 0m' });
    expect(waitPhrase(en, 'en', at, COUNT_WITHIN_MS)).toEqual({ kind: 'in', time: '24h 0m' });
  });

  /** "52h 10m" is sums for the reader; the day is the answer they wanted. */
  test('names the day beyond one, in the language asked for', () => {
    expect(waitPhrase(en, 'en', at, COUNT_WITHIN_MS + MINUTE)).toEqual({ kind: 'on', day: 'Monday' });
    expect(waitPhrase(ru, 'ru', at, 52 * HOUR)).toEqual({ kind: 'on', day: 'понедельник' });
    expect(waitPhrase(es, 'es', at, 52 * HOUR)).toEqual({ kind: 'on', day: 'lunes' });
  });

  test('the sentences read whole in every language', () => {
    expect(en('nextSession.in', { time: waitTime(en, 90 * MINUTE) })).toBe('Next session in 1h 30m');
    expect(ru('nextSession.in', { time: waitTime(ru, 90 * MINUTE) })).toBe('Следующее занятие через 1 ч 30 мин');
    expect(es('nextSession.on', { day: 'lunes' })).toBe('Próxima sesión: lunes');
  });
});
