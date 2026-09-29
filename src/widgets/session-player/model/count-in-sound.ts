import type { VideoPlayer } from 'expo-video';

/**
 * The two sounds of the count-in: a short tick on three, two and one, and a
 * brighter cue on go.
 *
 * Played through `expo-video` rather than an audio library, and that is the
 * whole design constraint of this file. `expo-video` is already linked into
 * the binary — the player's demonstrations run on it — so a sound played
 * through it ships over the air. `expo-audio` is not linked, and adding it
 * would be a native change and a store review for two clicks. An AVPlayer with
 * no layer attached plays audio perfectly well; it just has nothing to draw.
 *
 * `mixWithOthers` because the person counting down is very often listening to
 * something — a podcast, a playlist — and a tick that paused their music would
 * be the app taking over a moment that belongs to them. expo-video resolves the
 * audio session from every player that is playing, highest priority wins, so
 * the demonstration's own player is set to mix as well (see `SessionView`);
 * one player left on the default would pause the music the first time a clip
 * rolled.
 *
 * Lazy and unbreakable. The players are made on first use, and every call is
 * wrapped: a count-in with no sound is still a count-in, and a failure here —
 * a missing module in some old dev client, an asset that did not resolve —
 * must never be the thing that takes a session down.
 */

type Cue = 'tick' | 'go';

/** Below full: the cues are short, bright transients, and at 1.0 over quiet
 * headphones they land as a jolt rather than a signal. */
const VOLUME = 0.8;

let players: Partial<Record<Cue, VideoPlayer>> | null = null;

function make(source: number): VideoPlayer | undefined {
  try {
    // Required here rather than imported: the module is only touched once a
    // count actually starts, and a throw from it is caught instead of failing
    // the import of the whole player.
    const { createVideoPlayer } = require('expo-video') as typeof import('expo-video');
    const player = createVideoPlayer(source);
    player.loop = false;
    player.audioMixingMode = 'mixWithOthers';
    player.muted = false;
    player.volume = VOLUME;
    // Two short sounds have no business holding the screen awake or
    // announcing themselves in Control Center.
    player.keepScreenOnWhilePlaying = false;
    player.showNowPlayingNotification = false;
    return player;
  } catch (error) {
    console.warn('[count-in] sound unavailable:', error);
    return undefined;
  }
}

/**
 * Make both players now, so the first tick is not the one that pays for
 * loading the file. Safe to call as often as a host likes; only the first call
 * does anything.
 */
export function preloadCountInSounds(): void {
  if (players != null) return;
  players = {
    tick: make(require('@assets/sounds/count-tick.wav')),
    go: make(require('@assets/sounds/count-go.wav')),
  };
}

/** Play one cue from the top. Never throws. */
export function playCountInCue(which: Cue): void {
  try {
    preloadCountInSounds();
    const player = players?.[which];
    if (player == null) return;
    // From the start every time: the same player is reused for all three
    // ticks, and one left parked at its end would play nothing.
    player.currentTime = 0;
    player.play();
  } catch (error) {
    console.warn('[count-in] cue failed:', error);
  }
}
