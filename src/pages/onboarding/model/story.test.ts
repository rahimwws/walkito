import { describe, expect, test } from 'bun:test';

import { WAKE_DEFAULT_MINUTES, feltAnswer, moved, peekTiles, planLineKind, routineIsHero, wakeOf } from './story';

describe('feltAnswer', () => {
  test('lighter or a little better is the feet waking up', () => {
    expect(feltAnswer('lighter')).toBe('waking');
    expect(feltAnswer('better')).toBe('waking');
  });
  test('the same, hard to tell or nothing is normal on day 1', () => {
    expect(feltAnswer('same')).toBe('normal');
    expect(feltAnswer('unsure')).toBe('normal');
    expect(feltAnswer(null)).toBe('normal');
  });
});

describe('moved', () => {
  test('only a finished first move counts', () => {
    expect(moved({ firstMove: ['done'] })).toBe(true);
    expect(moved({ firstMove: 'done' })).toBe(true);
    expect(moved({ firstMove: ['skipped'] })).toBe(false);
    expect(moved({})).toBe(false);
  });
});

describe('peekTiles', () => {
  test('week 1 is her first move, the locked weeks her next two', () => {
    expect(peekTiles(['fascia_stretch', 'short_foot_seated', 'big_toe_lift'])).toEqual({
      week1: 'fascia_stretch',
      week2: 'short_foot_seated',
      later: 'big_toe_lift',
      count: 3,
    });
  });
  test('repeats are dropped and the last move fills a gap', () => {
    expect(peekTiles(['fascia_stretch', 'fascia_stretch', 'big_toe_lift'])).toEqual({
      week1: 'fascia_stretch',
      week2: 'big_toe_lift',
      later: 'big_toe_lift',
      count: 2,
    });
    expect(peekTiles(['heel_raise_double'])).toEqual({
      week1: 'heel_raise_double',
      week2: 'heel_raise_double',
      later: 'heel_raise_double',
      count: 1,
    });
  });
  test('no moves, no tiles', () => {
    expect(peekTiles([])).toBeNull();
  });
});

describe('planLineKind', () => {
  test('a runner is told before or after the runs, whatever the start', () => {
    expect(planLineKind('runner', true)).toBe('runner');
  });
  test('seated only when the plan starts seated', () => {
    expect(planLineKind('desk', true)).toBe('seated');
    expect(planLineKind('feet', false)).toBe('plain');
  });
});

describe('wakeOf', () => {
  test('7:00 until she picks', () => {
    expect(WAKE_DEFAULT_MINUTES).toBe(420);
    expect(wakeOf({})).toBe(420);
  });
  test('her pick, as minutes past midnight', () => {
    expect(wakeOf({ wake: '375' })).toBe(375);
    expect(wakeOf({ wake: ['540'] })).toBe(540);
  });
  test('anything that is not a time of day falls back', () => {
    expect(wakeOf({ wake: '1440' })).toBe(420);
    expect(wakeOf({ wake: '-5' })).toBe(420);
    expect(wakeOf({ wake: 'soon' })).toBe(420);
  });
});

describe('routineIsHero', () => {
  test('only for somebody who dreads her first steps', () => {
    expect(routineIsHero({ life: ['mornings', 'walks'] })).toBe(true);
    expect(routineIsHero({ life: ['walks'] })).toBe(false);
    expect(routineIsHero({})).toBe(false);
  });
});
