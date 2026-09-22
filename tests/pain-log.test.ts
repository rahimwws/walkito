import { beforeEach, describe, expect, test } from 'bun:test';

import {
  logPain,
  painEntriesOn,
  painLatestOn,
  painOn,
  writeLog,
} from '../src/entities/program/model/state';

/**
 * A day is not one answer.
 *
 * A foot can hurt at seven, settle by noon and hurt again after a walk. The log
 * held one slot per day, so the second check-in overwrote the first — and
 * because that slot is called `painMorning`, an evening reading quietly became
 * the morning one and the engine adapted the next day off it.
 */

const DAY = 900;
const MORNING = Date.parse('2026-09-22T07:00:00.000Z');
const NOON = Date.parse('2026-09-22T12:00:00.000Z');
const EVENING = Date.parse('2026-09-22T20:00:00.000Z');

beforeEach(() => {
  // A day number no other test touches, reset to empty.
  writeLog(DAY, { painMorning: null, painZones: [], painEntries: [] }, MORNING);
});

describe('several check-ins in one day', () => {
  test('keeps every reading', () => {
    logPain(DAY, 7, [], MORNING);
    logPain(DAY, 2, [], NOON);
    logPain(DAY, 6, [], EVENING);

    expect(painEntriesOn(DAY).map((e) => e.score)).toEqual([7, 2, 6]);
  });

  test('the morning reading is the first one, not the last', () => {
    // The failure this exists for: without it, `painMorning` ends up as 2 and
    // tomorrow is planned off a number taken five hours after the moment the
    // engine cares about.
    logPain(DAY, 7, [], MORNING);
    logPain(DAY, 2, [], NOON);

    expect(painOn(DAY)).toBe(7);
  });

  test('the latest reading is the last one', () => {
    logPain(DAY, 7, [], MORNING);
    logPain(DAY, 2, [], NOON);

    expect(painLatestOn(DAY)).toBe(2);
  });

  test('a zero is a real answer and does not read as absent', () => {
    // `painMorning` is nullable and 0 is a genuine reading. `?? score` would
    // have replaced a logged zero with the next check-in's number.
    logPain(DAY, 0, [], MORNING);
    logPain(DAY, 5, [], NOON);

    expect(painOn(DAY)).toBe(0);
    expect(painLatestOn(DAY)).toBe(5);
  });

  test('each reading carries its own time', () => {
    logPain(DAY, 7, [], MORNING);
    logPain(DAY, 2, [], NOON);

    expect(painEntriesOn(DAY).map((e) => e.at)).toEqual([MORNING, NOON]);
  });

  test('zones follow the newest check-in', () => {
    // The relief session is built from these, and it has to answer where it
    // hurts now rather than where it hurt this morning.
    logPain(DAY, 7, ['heel'], MORNING);
    logPain(DAY, 4, ['calf'], EVENING);

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
