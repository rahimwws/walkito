import type { VideoPlayer } from 'expo-video';

import type { Language } from '@/shared/lib/i18n';

import { voiceSource } from './voice-cache';

/**
 * The spoken instruction for each exercise, played once as the move starts.
 *
 * The recordings are not bundled: they are listed in `shared/config`'s voice
 * manifest and fetched ahead of time by `voice-cache`, so a new recording
 * ships over the air. Played from the cached file, or streamed if it has not
 * arrived yet. Through expo-video like the count-in and the tempo, so it mixes
 * with the user's own audio. A language without a recording plays nothing
 * rather than English.
 */
const VOLUME = 1;

let current: VideoPlayer | null = null;
let speakingUntil = 0;

/** Whether an instruction is being spoken now — the tempo stays quiet under it. */
export function instructionSpeaking(now: number = Date.now()): boolean {
  return now < speakingUntil;
}

/** Whether this exercise has an instruction in this language. */
export function hasInstruction(exerciseId: string, language: Language): boolean {
  return voiceSource(language, exerciseId) != null;
}

/** Stop whatever instruction is playing. */
export function stopInstruction(): void {
  speakingUntil = 0;
  try {
    current?.pause();
    current?.release();
  } catch (error) {
    console.warn('[voice] stop failed:', error);
  }
  current = null;
}

/** Speak the instruction for an exercise, replacing any still playing. */
export function playInstruction(exerciseId: string, language: Language): void {
  stopInstruction();
  const clip = voiceSource(language, exerciseId);
  if (clip == null) return;
  try {
    const { createVideoPlayer } = require('expo-video') as typeof import('expo-video');
    const player = createVideoPlayer({ uri: clip.uri });
    player.loop = false;
    player.audioMixingMode = 'mixWithOthers';
    player.muted = false;
    player.volume = VOLUME;
    player.keepScreenOnWhilePlaying = false;
    player.showNowPlayingNotification = false;
    player.play();
    current = player;
    speakingUntil = Date.now() + clip.ms;
  } catch (error) {
    console.warn('[voice] instruction unavailable:', error);
  }
}
