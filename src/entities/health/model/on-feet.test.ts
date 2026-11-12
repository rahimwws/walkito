import { describe, expect, test } from 'bun:test';

import type { DailyMetric } from './metrics';
import {
  LONG_DAY_DEFAULT_HOURS,
  LONG_DAY_FLOOR_HOURS,
  ON_FEET_WEEK_DAYS,
  longDayLimit,
  longDayYesterday,
  onFeetWeek,
  wasLongDay,
} from './on-feet';

const BLANK: Omit<DailyMetric, 'date'> = {
  steps: null,
  asymmetryPct: null,
  walkingSpeed: null,
  sleepMin: null,
  wakeMin: null,
  restingHR: null,
  flights: null,
  hoursOnFeet: null,
  longestRunKm: null,
  lastRunEndAt: null,
};

const day = (date: string, extra: Partial<DailyMetric> = {}): DailyMetric => ({ ...BLANK, date, ...extra });

describe('longDayLimit', () => {
  test('a learned limit is the person\'s own line and wins', () => {
    expect(longDayLimit({ usual: 9, learnedLimit: 7 })).toBe(7);
  });

  test('otherwise 1.4 times the usual day, the plan\'s heavy-day ratio', () => {
    expect(longDayLimit({ usual: 7, learnedLimit: null })).toBeCloseTo(9.8);
  });

  test('a quiet usual never puts the line under the floor', () => {
    expect(longDayLimit({ usual: 3, learnedLimit: null })).toBe(LONG_DAY_FLOOR_HOURS);
  });

  test('with nothing known, a working day', () => {
    expect(longDayLimit({ usual: null, learnedLimit: null })).toBe(LONG_DAY_DEFAULT_HOURS);
    expect(longDayLimit({ usual: 0, learnedLimit: null })).toBe(LONG_DAY_DEFAULT_HOURS);
  });
});

describe('wasLongDay', () => {
  test('never without a reading', () => {
    expect(wasLongDay({ hours: null, usual: 5, learnedLimit: 4 })).toBe(false);
    expect(wasLongDay({ hours: Number.NaN, usual: null, learnedLimit: null })).toBe(false);
  });

  test('at the line counts, under it does not', () => {
    expect(wasLongDay({ hours: 8, usual: null, learnedLimit: null })).toBe(true);
    expect(wasLongDay({ hours: 7, usual: null, learnedLimit: null })).toBe(false);
  });

  test('a usual nine-hour day is not long for somebody who always has them', () => {
    expect(wasLongDay({ hours: 9, usual: 9, learnedLimit: null })).toBe(false);
    expect(wasLongDay({ hours: 13, usual: 9, learnedLimit: null })).toBe(true);
  });

  test('the learned limit decides even under the default', () => {
    expect(wasLongDay({ hours: 6, usual: 5, learnedLimit: 6 })).toBe(true);
    expect(wasLongDay({ hours: 9, usual: 5, learnedLimit: 10 })).toBe(false);
  });
});

describe('longDayYesterday', () => {
  const TODAY = '2026-11-12';
  const fresh = { asOf: TODAY, hoursOnFeetYesterday: 9.4, hoursOnFeetBaseline: 6, onFeetThreshold: null };

  test('the hours, rounded, the morning after a long day', () => {
    expect(longDayYesterday(fresh, TODAY)).toBe(9);
  });

  test('nothing from signals computed on another day', () => {
    expect(longDayYesterday({ ...fresh, asOf: '2026-11-11' }, TODAY)).toBeNull();
    expect(longDayYesterday({ ...fresh, asOf: null }, TODAY)).toBeNull();
  });

  test('nothing without a reading, which is what no permission looks like', () => {
    expect(longDayYesterday({ ...fresh, hoursOnFeetYesterday: null }, TODAY)).toBeNull();
  });

  test('nothing after an ordinary day', () => {
    expect(longDayYesterday({ ...fresh, hoursOnFeetYesterday: 6 }, TODAY)).toBeNull();
  });
});

describe('onFeetWeek', () => {
  const TODAY = '2026-11-12';

  test('seven days ending today, oldest first, gaps kept as nulls', () => {
    const week = onFeetWeek([day('2026-11-08', { hoursOnFeet: 5 }), day(TODAY, { hoursOnFeet: 2 })], TODAY);
    expect(week.days).toHaveLength(ON_FEET_WEEK_DAYS);
    expect(week.days[0]).toEqual({ date: '2026-11-06', hours: null, today: false });
    expect(week.days[2]).toEqual({ date: '2026-11-08', hours: 5, today: false });
    expect(week.days[6]).toEqual({ date: TODAY, hours: 2, today: true });
  });

  test('crosses a month', () => {
    expect(onFeetWeek([], '2026-11-03').days.map((d) => d.date)).toEqual([
      '2026-10-28',
      '2026-10-29',
      '2026-10-30',
      '2026-10-31',
      '2026-11-01',
      '2026-11-02',
      '2026-11-03',
    ]);
  });

  test('the average and the busiest day leave today out', () => {
    const week = onFeetWeek(
      [
        day('2026-11-09', { hoursOnFeet: 4 }),
        day('2026-11-10', { hoursOnFeet: 9 }),
        day('2026-11-11', { hoursOnFeet: 5 }),
        day(TODAY, { hoursOnFeet: 12 }),
      ],
      TODAY,
    );
    expect(week.readings).toBe(3);
    expect(week.average).toBe(6);
    expect(week.busiest?.date).toBe('2026-11-10');
  });

  test('stand hours count where a watch saw more than the steps did', () => {
    const week = onFeetWeek([day('2026-11-11', { hoursOnFeet: 3, standHours: 10 })], TODAY);
    expect(week.days[5].hours).toBe(10);
  });

  test('of equal days the latest is the busiest', () => {
    const week = onFeetWeek(
      [day('2026-11-08', { hoursOnFeet: 7 }), day('2026-11-10', { hoursOnFeet: 7 })],
      TODAY,
    );
    expect(week.busiest?.date).toBe('2026-11-10');
  });

  test('a day spent sitting is a reading, and no day is the busiest of none', () => {
    const week = onFeetWeek([day('2026-11-10', { hoursOnFeet: 0 }), day('2026-11-11', { hoursOnFeet: 0 })], TODAY);
    expect(week.readings).toBe(2);
    expect(week.average).toBe(0);
    expect(week.busiest).toBeNull();
  });

  test('nothing stored: seven empty days and nothing to say', () => {
    const week = onFeetWeek([], TODAY);
    expect(week.readings).toBe(0);
    expect(week.average).toBeNull();
    expect(week.busiest).toBeNull();
    expect(week.days.every((d) => d.hours == null)).toBe(true);
  });
});
