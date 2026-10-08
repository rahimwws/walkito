import type { VideoPlayer } from 'expo-video';

import type { Language } from '@/shared/lib/i18n';

import type { Phase } from './tempo';

/**
 * The audible tempo: "up · 2 · 3 · hold · 2 · down · 2 · 3".
 *
 * Each second of a tempo move gets one sound. The first second of a phase says
 * the phase; every second after it says its number. With the voice off, the
 * first second is the count-in's "go" tone and the rest are its tick, so the
 * rhythm survives without the words.
 *
 * Played through expo-video, like the count-in, so it mixes with the user's own
 * audio and needs no native module the dev client might lack. Short clips,
 * bundled (under 200 KB for all seven languages), recorded once per word.
 * Portuguese, French, German and Italian are macOS voices (Luciana, Thomas,
 * Anna, Alice), trimmed and levelled with ffmpeg.
 */

type Word = 'up' | 'hold' | 'down' | '2' | '3' | '4' | '5';

const VOLUME = 0.9;

const SOURCES: Record<Language, Record<Word, number>> = {
  en: {
    up: require('@assets/sounds/tempo/en-up.m4a'),
    hold: require('@assets/sounds/tempo/en-hold.m4a'),
    down: require('@assets/sounds/tempo/en-down.m4a'),
    '2': require('@assets/sounds/tempo/en-2.m4a'),
    '3': require('@assets/sounds/tempo/en-3.m4a'),
    '4': require('@assets/sounds/tempo/en-4.m4a'),
    '5': require('@assets/sounds/tempo/en-5.m4a'),
  },
  ru: {
    up: require('@assets/sounds/tempo/ru-up.m4a'),
    hold: require('@assets/sounds/tempo/ru-hold.m4a'),
    down: require('@assets/sounds/tempo/ru-down.m4a'),
    '2': require('@assets/sounds/tempo/ru-2.m4a'),
    '3': require('@assets/sounds/tempo/ru-3.m4a'),
    '4': require('@assets/sounds/tempo/ru-4.m4a'),
    '5': require('@assets/sounds/tempo/ru-5.m4a'),
  },
  es: {
    up: require('@assets/sounds/tempo/es-up.m4a'),
    hold: require('@assets/sounds/tempo/es-hold.m4a'),
    down: require('@assets/sounds/tempo/es-down.m4a'),
    '2': require('@assets/sounds/tempo/es-2.m4a'),
    '3': require('@assets/sounds/tempo/es-3.m4a'),
    '4': require('@assets/sounds/tempo/es-4.m4a'),
    '5': require('@assets/sounds/tempo/es-5.m4a'),
  },
  pt: {
    up: require('@assets/sounds/tempo/pt-up.m4a'),
    hold: require('@assets/sounds/tempo/pt-hold.m4a'),
    down: require('@assets/sounds/tempo/pt-down.m4a'),
    '2': require('@assets/sounds/tempo/pt-2.m4a'),
    '3': require('@assets/sounds/tempo/pt-3.m4a'),
    '4': require('@assets/sounds/tempo/pt-4.m4a'),
    '5': require('@assets/sounds/tempo/pt-5.m4a'),
  },
  fr: {
    up: require('@assets/sounds/tempo/fr-up.m4a'),
    hold: require('@assets/sounds/tempo/fr-hold.m4a'),
    down: require('@assets/sounds/tempo/fr-down.m4a'),
    '2': require('@assets/sounds/tempo/fr-2.m4a'),
    '3': require('@assets/sounds/tempo/fr-3.m4a'),
    '4': require('@assets/sounds/tempo/fr-4.m4a'),
    '5': require('@assets/sounds/tempo/fr-5.m4a'),
  },
  de: {
    up: require('@assets/sounds/tempo/de-up.m4a'),
    hold: require('@assets/sounds/tempo/de-hold.m4a'),
    down: require('@assets/sounds/tempo/de-down.m4a'),
    '2': require('@assets/sounds/tempo/de-2.m4a'),
    '3': require('@assets/sounds/tempo/de-3.m4a'),
    '4': require('@assets/sounds/tempo/de-4.m4a'),
    '5': require('@assets/sounds/tempo/de-5.m4a'),
  },
  it: {
    up: require('@assets/sounds/tempo/it-up.m4a'),
    hold: require('@assets/sounds/tempo/it-hold.m4a'),
    down: require('@assets/sounds/tempo/it-down.m4a'),
    '2': require('@assets/sounds/tempo/it-2.m4a'),
    '3': require('@assets/sounds/tempo/it-3.m4a'),
    '4': require('@assets/sounds/tempo/it-4.m4a'),
    '5': require('@assets/sounds/tempo/it-5.m4a'),
  },
};

const TONES = {
  start: require('@assets/sounds/count-go.wav') as number,
  beat: require('@assets/sounds/count-tick.wav') as number,
};

const players = new Map<number, VideoPlayer | null>();

function playerFor(source: number): VideoPlayer | null {
  if (players.has(source)) return players.get(source) ?? null;
  let player: VideoPlayer | null = null;
  try {
    const { createVideoPlayer } = require('expo-video') as typeof import('expo-video');
    player = createVideoPlayer(source);
    player.loop = false;
    player.audioMixingMode = 'mixWithOthers';
    player.muted = false;
    player.volume = VOLUME;
    player.keepScreenOnWhilePlaying = false;
    player.showNowPlayingNotification = false;
  } catch (error) {
    console.warn('[tempo] sound unavailable:', error);
  }
  players.set(source, player);
  return player;
}

function play(source: number): void {
  try {
    const player = playerFor(source);
    if (player == null) return;
    player.currentTime = 0;
    player.play();
  } catch (error) {
    console.warn('[tempo] cue failed:', error);
  }
}

/** Loaded ahead of the first rep, so the first "up" is not late. */
export function preloadTempoSounds(language: Language, voice: boolean): void {
  if (voice) Object.values(SOURCES[language]).forEach(playerFor);
  else Object.values(TONES).forEach(playerFor);
}

/**
 * The sound for one second of a tempo move.
 *
 * `second` counts from 1 within the phase: 1 is the phase's name, 2 and on are
 * its numbers. Phases longer than five seconds fall back to the tick past five.
 */
export function playTempoCue(phase: Phase, second: number, language: Language, voice: boolean): void {
  if (!voice) {
    play(second === 1 ? TONES.start : TONES.beat);
    return;
  }
  const words = SOURCES[language];
  if (second === 1) {
    play(words[phase]);
    return;
  }
  const word = String(second) as Word;
  play(word in words ? words[word] : TONES.beat);
}
