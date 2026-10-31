import { beforeEach, describe, expect, test } from 'bun:test';

import {
  firstStepOn,
  logFlare,
  logPain,
  painEntriesOn,
  painLatestOn,
  painOn,
  writeLog,
} from '../src/entities/program/model/state';

/**
 * A day is not one answer.
 *
 * A foot can hurt at seven, settle by noon and hurt again after a walk. The day
 * has one check-in, which a second answer corrects, and any number of "it hurts
 * right now" readings (flares) beside it. The check-in stays `painMorning`, so
 * an evening flare never becomes the morning figure the engine adapts the next
 * day off.
 */

const DAY = 900;
const MORNING = Date.parse('2026-09-22T07:00:00.000Z');
const NOON = Date.parse('2026-09-22T12:00:00.000Z');
const EVENING = Date.parse('2026-09-22T20:00:00.000Z');

beforeEach(() => {
  // A day number no other test touches, reset to empty.
  writeLog(DAY, { painMorning: null, painZones: [], painEntries: [] }, MORNING);
});

describe('one check-in a day, and flares beside it', () => {
  test('a second check-in corrects the first, keeping its time', () => {
    logPain(DAY, 7, [], MORNING);
    logPain(DAY, 2, [], NOON);

    expect(painEntriesOn(DAY).map((e) => [e.score, e.at])).toEqual([[2, MORNING]]);
    expect(painOn(DAY)).toBe(2);
  });

  test('keeps every flare beside the check-in', () => {
    logPain(DAY, 7, [], MORNING);
    logFlare(DAY, 2, [], NOON);
    logFlare(DAY, 6, [], EVENING);

    expect(painEntriesOn(DAY).map((e) => e.score)).toEqual([7, 2, 6]);
  });

  test('the morning reading is the check-in, not a later flare', () => {
    // The failure this exists for: without it, `painMorning` ends up as 2 and
    // tomorrow is planned off a number taken five hours after the moment the
    // engine cares about.
    logPain(DAY, 7, [], MORNING);
    logFlare(DAY, 2, [], NOON);

    expect(painOn(DAY)).toBe(7);
  });

  test('the latest reading is the last one', () => {
    logPain(DAY, 7, [], MORNING);
    logFlare(DAY, 2, [], NOON);

    expect(painLatestOn(DAY)).toBe(2);
  });

  test('a zero is a real answer and does not read as absent', () => {
    // `painMorning` is nullable and 0 is a genuine reading. `?? score` would
    // have replaced a logged zero with the next reading's number.
    logPain(DAY, 0, [], MORNING);
    logFlare(DAY, 5, [], NOON);

    expect(painOn(DAY)).toBe(0);
    expect(painLatestOn(DAY)).toBe(5);
  });

  test('each reading carries its own time', () => {
    logPain(DAY, 7, [], MORNING);
    logFlare(DAY, 2, [], NOON);

    expect(painEntriesOn(DAY).map((e) => e.at)).toEqual([MORNING, NOON]);
  });

  test('zones follow the newest reading', () => {
    // The relief session is built from these, and it has to answer where it
    // hurts now rather than where it hurt this morning.
    logPain(DAY, 7, ['heel'], MORNING);
    logFlare(DAY, 4, ['calf'], EVENING);

    expect(painEntriesOn(DAY).at(-1)?.zones).toEqual(['calf']);
  });
});

describe('logs written before check-ins were a list', () => {
  test('their single reading is both the first and the last', () => {
    writeLog(DAY, { painMorning: 5, painEntries: undefined }, MORNING);

    expect(painOn(DAY)).toBe(5);
    expect(painLatestOn(DAY)).toBe(5);
    expect(painEntriesOn(DAY).map((e) => e.score)).toEqual([5]);
  });

  test('a day nobody logged stays empty rather than reading as zero', () => {
    // The engine treats null as "not asked". Inventing a zero here is how an
    // app congratulates somebody on a morning they could not walk.
    expect(painOn(DAY)).toBeNull();
    expect(painLatestOn(DAY)).toBeNull();
    expect(painEntriesOn(DAY)).toEqual([]);
  });
});

/**
 * First steps and the rest of the day.
 *
 * Only a check-in made before noon is a first-step reading; it is the one the
 * goals and the weekly means read. An afternoon answer stays the day's.
 */
describe('first-step readings', () => {
  const at = (hour: number) => new Date(2026, 8, 22, hour, 0).getTime();

  test('a morning check-in is the first-step reading', () => {
    logPain(DAY, 5, [], at(8));
    logFlare(DAY, 2, [], at(18));
    expect(firstStepOn(DAY)).toBe(5);
  });

  test('a day answered only after noon has no first-step reading', () => {
    logPain(DAY, 6, [], at(15));
    expect(firstStepOn(DAY)).toBeNull();
    // It is still today's pain for everything that asks how the foot is now.
    expect(painLatestOn(DAY)).toBe(6);
  });
});
