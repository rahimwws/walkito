import type { VideoPlayer } from 'expo-video';

/**
 * The mascot's little sounds (`scripts/build-mascot-sounds.mjs` makes them):
 * a hop for joy, a soft "aww", a curious "hm?", the boing when he is poked,
 * a "yay" with both hands up, the gift's "ta-da", a footstep for every
 * landing and a pop for a nod.
 *
 * Through `expo-video`, for the reason the count-in uses it
 * (`widgets/session-player/model/count-in-sound.ts`): it is already in the
 * binary, so these ship over the air, where `expo-audio` would be a store
 * build. The same consequence too: the player's audio session is playback,
 * so they sound with the ring switch on silent. They are short and quiet,
 * and played only for something the person just did.
 *
 * Mixed with whatever is already playing, never pausing it. Lazy and
 * unbreakable: a sound that fails is a sound that did not play.
 */

export type MascotSound = 'happy' | 'sad' | 'hmm' | 'boing' | 'cheer' | 'gift' | 'step' | 'pop';

/** Full: the files are already mastered to -1 dBFS, short and soft-edged,
 * and anything less was lost under a phone speaker. */
const VOLUME = 1;

const SOURCES: Record<MascotSound, number> = {
  happy: require('@assets/sounds/mascot-happy.wav'),
  sad: require('@assets/sounds/mascot-sad.wav'),
  hmm: require('@assets/sounds/mascot-hmm.wav'),
  boing: require('@assets/sounds/mascot-boing.wav'),
  cheer: require('@assets/sounds/mascot-cheer.wav'),
  gift: require('@assets/sounds/mascot-gift.wav'),
  step: require('@assets/sounds/mascot-step.wav'),
  pop: require('@assets/sounds/mascot-pop.wav'),
};

/** One player per sound, made the first time it is wanted and kept for the
 * life of the app, like the count-in's. A player is a whole media pipeline
 * on Android, so a screen asks only for the sounds it plays. */
const players: Partial<Record<MascotSound, VideoPlayer | null>> = {};

function playerFor(which: MascotSound): VideoPlayer | null {
  if (!(which in players)) players[which] = make(SOURCES[which]) ?? null;
  return players[which] ?? null;
}

function make(source: number): VideoPlayer | undefined {
  try {
    const { createVideoPlayer } = require('expo-video') as typeof import('expo-video');
    const player = createVideoPlayer(source);
    player.loop = false;
    player.audioMixingMode = 'mixWithOthers';
    player.muted = false;
    player.volume = VOLUME;
    player.keepScreenOnWhilePlaying = false;
    player.showNowPlayingNotification = false;
    return player;
  } catch (error) {
    console.warn('[mascot] sound unavailable:', error);
    return undefined;
  }
}

/** Make these players now, so the first sound is not the one that waits for its file. */
export function preloadMascotSounds(which: readonly MascotSound[]): void {
  for (const sound of which) playerFor(sound);
}

/** Play one from the top. Never throws. */
export function playMascotSound(which: MascotSound): void {
  try {
    const player = playerFor(which);
    if (player == null) return;
    player.currentTime = 0;
    player.play();
  } catch (error) {
    console.warn('[mascot] sound failed:', error);
  }
}
