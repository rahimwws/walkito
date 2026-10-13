import { describe, expect, test } from 'bun:test';

import { CLIPS } from '@/shared/config/clip-manifest';

import { DECK_SIZE, MORNING_MOVE, firstWeekDeck } from './first-week-deck';

const AREAS = [null, 'heel', 'foot', 'arch', 'achilles', 'calf', 'shin', 'knee', 'hip'] as const;

describe('firstWeekDeck', () => {
  test('is always three cards, each a different move with a clip', () => {
    for (const area of AREAS) {
      for (const toeWork of [false, true]) {
        const deck = firstWeekDeck(area, toeWork);
        expect(deck).toHaveLength(DECK_SIZE);
        expect(new Set(deck.map((move) => move.id)).size).toBe(DECK_SIZE);
        for (const move of deck) expect(CLIPS[move.id]).toBeDefined();
      }
    }
  });

  test('opens on the morning stretch, then the session moves', () => {
    const deck = firstWeekDeck('heel', false);
    expect(deck[0]).toEqual({ id: MORNING_MOVE, when: 'morning' });
    expect(deck[1].when).toBe('session');
    expect(deck[2].when).toBe('session');
  });

  test('toe work puts the big toe lift in the week', () => {
    expect(firstWeekDeck('heel', true)[2].id).toBe('big_toe_lift');
    expect(firstWeekDeck('calf', true)[2].id).toBe('big_toe_lift');
    expect(firstWeekDeck('heel', false).some((move) => move.id === 'big_toe_lift')).toBe(false);
  });
});
