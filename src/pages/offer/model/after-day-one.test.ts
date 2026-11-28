import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';

import { afterDayOneTitle } from './after-day-one';

const t = translatorFor('en');

describe('the title over the after-Day-1 offer', () => {
  test('tomorrow at her time', () => {
    expect(afterDayOneTitle({ day: 2, ahead: 1, at: 0 } as never, '7:30 AM', t)).toBe(
      'Keep the streak going: Day 2 is ready tomorrow at 7:30 AM',
    );
  });

  test('no time, a later day, or no plan read: the day alone', () => {
    expect(afterDayOneTitle({ day: 2, ahead: 1, at: 0 } as never, null, t)).toBe('Keep the streak going: Day 2 is ready when you are');
    expect(afterDayOneTitle({ day: 3, ahead: 2, at: 0 } as never, '7:30 AM', t)).toContain('Day 3');
    expect(afterDayOneTitle(null, null, t)).toContain('Day 2');
  });

  test('every language names the day and the time', () => {
    for (const language of LANGUAGES) {
      const text = afterDayOneTitle({ day: 2, ahead: 1, at: 0 } as never, '07:30', translatorFor(language));
      expect(text).toContain('2');
      expect(text).toContain('07:30');
    }
  });
});
