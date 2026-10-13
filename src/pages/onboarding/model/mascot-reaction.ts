import { painBandOf } from './journey';

/** What the mascot holds while a score is showing. */
export type MascotRest = {
  state: 'idle' | 'thinking' | 'sad';
  /** How hard `sad` is, 0 to 1. */
  intensity: number;
};

/**
 * What a change of score sets off: one move, and maybe a sound.
 *
 * No jump and no happy sound among them, by type: a lower pain score is a
 * number, not a win, and he never celebrates one.
 */
export type MascotCue = {
  shot: 'nod' | 'wince' | null;
  sound: 'sad' | 'hmm' | null;
};

/**
 * The mascot on the first-steps question, by score. He holds a sore foot in
 * the art, so he reads the scale the way the person does: nothing, and he is
 * content; a little, still easy; the middle, he wonders; seven and over, he
 * hurts with them, and a little more for every point.
 */
export function mascotRest(score: number): MascotRest {
  const band = painBandOf(score);
  if (band === 'hard') return { state: 'sad', intensity: Math.min(Math.max((score - 7) / 3, 0), 1) };
  if (band === 'middle') return { state: 'thinking', intensity: 0 };
  return { state: 'idle', intensity: 0 };
}

/**
 * What moving from one score to the next makes him do.
 *
 * Arriving in the middle, from either side, he wonders, with its sound; past
 * seven he winces and hurts with them. Everything else is a nod, and silent:
 * a step inside a band (a wince when it hurts more past seven), and coming
 * down to a little or to nothing. Relief is acknowledged, never celebrated:
 * a hop and a happy sound at 0 told the person a low score was the right
 * answer. The slider already ticks under the thumb. The first score shown
 * sets nothing off: he answers the person, never the screen arriving.
 */
export function mascotCue(score: number, previous: number | null): MascotCue {
  if (previous == null || previous === score) return { shot: null, sound: null };
  const band = painBandOf(score);
  const was = painBandOf(previous);
  if (band === was) return { shot: band === 'hard' && score > previous ? 'wince' : 'nod', sound: null };
  switch (band) {
    case 'zero':
    case 'mild':
      return { shot: 'nod', sound: null };
    case 'middle':
      return { shot: was === 'hard' ? 'nod' : null, sound: 'hmm' };
    case 'hard':
      return { shot: 'wince', sound: 'sad' };
  }
}
