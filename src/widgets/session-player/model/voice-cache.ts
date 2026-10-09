import { Directory, File, Paths } from 'expo-file-system';

import { CLIP_BUCKET, VOICE, voiceEntry } from '@/shared/config';
import { supabase } from '@/shared/lib/supabase';

/**
 * The spoken instructions, cached on the device.
 *
 * The same scheme as the clips (`clip-cache.ts`): public files in the clip
 * bucket under `voice/`, downloaded once into the app's documents and played
 * from there. Only the current language is fetched — a phone in Spanish has no
 * use for the English or German recordings — and a language switch fetches
 * the new one on the next prefetch.
 *
 * A file whose size does not match the manifest is a partial download and is
 * deleted; a re-recording gets a new name, so it never hides behind an old
 * cached copy.
 */

function voiceDir(): Directory {
  return new Directory(Paths.document, 'exercise-voice');
}

/** Flat on disk: `voice/es-foot_roll.m4a` is stored as `es-foot_roll.m4a`. */
function fileFor(name: string): File {
  return new File(voiceDir(), name.replace(/^voice\//, ''));
}

/** Names of the files already on disk and whole. */
const ready = new Set<string>();

/** Read what is on disk. Synchronous and cheap: one stat per file. */
export function surveyVoice(): void {
  const dir = voiceDir();
  if (!dir.exists) {
    dir.create({ intermediates: true });
    return;
  }
  ready.clear();
  for (const byId of Object.values(VOICE)) {
    for (const entry of Object.values(byId)) {
      const file = fileFor(entry.file);
      if (!file.exists) continue;
      if (file.size !== entry.bytes) {
        file.delete();
        continue;
      }
      ready.add(entry.file);
    }
  }
}

function remoteUrl(name: string): string | null {
  const client = supabase;
  if (client == null) return null;
  return client.storage.from(CLIP_BUCKET).getPublicUrl(name).data.publicUrl;
}

/** Where to play an instruction from: the cached file, else the bucket. */
export function voiceSource(language: string, exerciseId: string): { uri: string; ms: number } | null {
  const entry = voiceEntry(language, exerciseId);
  if (entry == null) return null;
  const uri = ready.has(entry.file) ? fileFor(entry.file).uri : remoteUrl(entry.file);
  return uri == null ? null : { uri, ms: entry.ms };
}

let inFlight: Promise<void> | null = null;

/**
 * Download the current language's instructions that are not on disk yet, the
 * exercises in `order` first. One at a time, never awaited by a screen.
 */
export function prefetchVoice(language: string, order: readonly string[] = []): Promise<void> {
  if (inFlight != null) return inFlight;
  const byId = VOICE[language];
  if (byId == null) return Promise.resolve();
  const ids = [...order.filter((id) => byId[id] != null), ...Object.keys(byId).filter((id) => !order.includes(id))];
  const missing = ids.filter((id) => !ready.has(byId[id].file));
  if (missing.length === 0) return Promise.resolve();

  inFlight = (async () => {
    const dir = voiceDir();
    if (!dir.exists) dir.create({ intermediates: true });
    for (const id of missing) {
      const entry = byId[id];
      const url = remoteUrl(entry.file);
      if (url == null) continue;
      try {
        const file = fileFor(entry.file);
        if (file.exists) file.delete();
        await File.downloadFileAsync(url, file);
        if (file.exists && file.size === entry.bytes) ready.add(entry.file);
        else if (file.exists) file.delete();
      } catch {
        // Offline or a hiccup: the next prefetch picks it up, and a session
        // in between streams the instruction instead.
      }
    }
    inFlight = null;
  })();
  return inFlight;
}
