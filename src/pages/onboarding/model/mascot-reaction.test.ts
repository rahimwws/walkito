import { describe, expect, test } from 'bun:test';

import { mascotCue, mascotRest } from './mascot-reaction';

describe('mascotRest', () => {
  test('follows the pain bands', () => {
    expect(mascotRest(0).state).toBe('idle');
    expect(mascotRest(3).state).toBe('idle');
    expect(mascotRest(4).state).toBe('thinking');
    expect(mascotRest(6).state).toBe('thinking');
    expect(mascotRest(7).state).toBe('sad');
    expect(mascotRest(10).state).toBe('sad');
  });

  test('hurts harder for every point past seven, and only there', () => {
    expect(mascotRest(7).intensity).toBe(0);
    expect(mascotRest(10).intensity).toBe(1);
    expect(mascotRest(8).intensity).toBeGreaterThan(0);
    expect(mascotRest(9).intensity).toBeGreaterThan(mascotRest(8).intensity);
    expect(mascotRest(5).intensity).toBe(0);
  });
});

describe('mascotCue', () => {
  test('the first score shown sets nothing off', () => {
    expect(mascotCue(5, null)).toEqual({ shot: null, sound: null });
    expect(mascotCue(9, null)).toEqual({ shot: null, sound: null });
  });

  test('the same score again sets nothing off', () => {
    expect(mascotCue(4, 4)).toEqual({ shot: null, sound: null });
  });

  test('a step inside a band is a silent nod, or a wince as it climbs past seven', () => {
    expect(mascotCue(5, 4)).toEqual({ shot: 'nod', sound: null });
    expect(mascotCue(2, 3)).toEqual({ shot: 'nod', sound: null });
    expect(mascotCue(9, 8)).toEqual({ shot: 'wince', sound: null });
    expect(mascotCue(8, 9)).toEqual({ shot: 'nod', sound: null });
  });

  test('nothing, or a little, is a silent nod from wherever it came', () => {
    expect(mascotCue(0, 1)).toEqual({ shot: 'nod', sound: null });
    expect(mascotCue(0, 9)).toEqual({ shot: 'nod', sound: null });
    expect(mascotCue(3, 4)).toEqual({ shot: 'nod', sound: null });
    expect(mascotCue(2, 8)).toEqual({ shot: 'nod', sound: null });
    expect(mascotCue(1, 0)).toEqual({ shot: 'nod', sound: null });
  });

  test('the middle wonders and past seven hurts, with their sounds', () => {
    expect(mascotCue(4, 3)).toEqual({ shot: null, sound: 'hmm' });
    expect(mascotCue(6, 7)).toEqual({ shot: 'nod', sound: 'hmm' });
    expect(mascotCue(7, 6)).toEqual({ shot: 'wince', sound: 'sad' });
    expect(mascotCue(10, 0)).toEqual({ shot: 'wince', sound: 'sad' });
  });

  test('no score is ever celebrated, whichever way it moved', () => {
    for (let from = 0; from <= 10; from += 1) {
      for (let to = 0; to <= 10; to += 1) {
        const cue = mascotCue(to, from);
        expect(['nod', 'wince', null]).toContain(cue.shot);
        expect(['sad', 'hmm', null]).toContain(cue.sound);
        // Coming down never winces.
        if (to < from) expect(cue.shot === 'wince').toBe(false);
      }
    }
  });
});
