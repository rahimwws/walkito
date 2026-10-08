import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * The session's tempo sounds: whether they play, and whether a voice counts.
 *
 * Two switches, both in Settings and the first also in the player itself. The
 * tones are on by default, because a tempo move is timed by ear while the eyes
 * are on the foot; the voice is on too, and can be turned off on its own for
 * someone who wants the beat without the words.
 *
 * In `shared` because the player (widgets) and Settings (pages) both read it,
 * and neither may import the other.
 */
const TONES_KEY = 'sound/tempo';
const VOICE_KEY = 'sound/voice';

export type SoundPrefs = { tempo: boolean; voice: boolean };

const listeners = new Set<() => void>();

function readBool(key: string, fallback: boolean): boolean {
  const raw = kv.getString(key);
  return raw == null ? fallback : raw === '1';
}

let snapshot: SoundPrefs = { tempo: readBool(TONES_KEY, true), voice: readBool(VOICE_KEY, true) };

export function soundPrefs(): SoundPrefs {
  return snapshot;
}

export function setSoundPrefs(patch: Partial<SoundPrefs>): void {
  snapshot = { ...snapshot, ...patch };
  kv.set(TONES_KEY, snapshot.tempo ? '1' : '0');
  kv.set(VOICE_KEY, snapshot.voice ? '1' : '0');
  listeners.forEach((fire) => fire());
}

export function useSoundPrefs(): SoundPrefs {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    soundPrefs,
    soundPrefs,
  );
}
