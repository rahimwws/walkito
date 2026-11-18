import { describe, expect, test } from 'bun:test';

import { goalsInOrder, kindFrom, leadGoal, lifeFor, suggestedGoals } from './story';

describe('kindFrom', () => {
  test('running, alone or with a job on her feet, is a runner', () => {
    expect(kindFrom('running', null)).toBe('runner');
    expect(kindFrom('both', 'sit8')).toBe('runner');
  });
  test('a job on her feet, or a day on them, is on her feet', () => {
    expect(kindFrom('feet', null)).toBe('feet');
    expect(kindFrom('walking', 'feet')).toBe('feet');
  });
  test('a sitting day, or nothing said, is a desk', () => {
    expect(kindFrom('walking', 'sit8')).toBe('desk');
    expect(kindFrom('walking', 'sit4')).toBe('desk');
    expect(kindFrom(null, null)).toBe('desk');
  });
});

describe('the goal mirror', () => {
  test('a runner sees running first, everyone else the list as it is', () => {
    expect(lifeFor('runner')[0].value).toBe('runs');
    expect(lifeFor('desk')[0].value).toBe('mornings');
    expect(lifeFor('runner')).toHaveLength(lifeFor('desk').length);
  });
  test('each way her feet get in her way picks its goal', () => {
    expect(suggestedGoals(['mornings', 'walks'])).toEqual(['mornings', 'walk']);
    expect(suggestedGoals(['evening', 'shoes'])).toEqual(['shoes', 'evenings']);
    expect(suggestedGoals(['runs'])).toEqual(['runs']);
  });
  test('nothing picked, or "none of these", suggests walking', () => {
    expect(suggestedGoals([])).toEqual(['walk']);
    expect(suggestedGoals(['none'])).toEqual(['walk']);
  });
  test('goals come back in list order, unknown values dropped', () => {
    expect(goalsInOrder(['evenings', 'nope', 'mornings']).map((o) => o.goal)).toEqual(['mornings', 'evenings']);
  });
  test('the goal a sentence names is the first in list order, else walking', () => {
    expect(leadGoal(['shoes', 'walk'])).toBe('walk');
    expect(leadGoal([])).toBe('walk');
    expect(leadGoal(['runs'])).toBe('runs');
  });
});
