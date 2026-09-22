import { Directory, File, Paths } from 'expo-file-system';
import { useSyncExternalStore } from 'react';

import { supabase } from '@/shared/lib/supabase';

import { CLIPS, CLIPS_TOTAL_BYTES, CLIP_BUCKET, clipEntry } from '../config/clip-manifest';

/**
 * The demonstration clips, kept on disk after the first download.
 *
 * The clips used to be bundled. Fourteen megabytes went into every App Store
 * download whether or not the user's programme ever prescribed the exercise,
 * and a catalogue that grows makes that worse in a straight line. They live in
 * Supabase Storage now and are pulled down once, in the background, on the
 * first launch that has a network.
 *
 * Cached in `document`, not `cache`. The system evicts `cache` under pressure,
 * and a clip that vanishes is one the user waits for again mid-session — with
 * the phone against a wall and one foot off the floor, which is the whole
 * reason these are local at all.
 */

/** Where the files go. One directory so a reset is one delete. */
function clipsDir(): Directory {
  return new Directory(Paths.document, 'exercise-clips');
}

function fileFor(name: string): File {
  return new File(clipsDir(), name);
}

/** What the prefetch has got through, for anything that wants to show it. */
export type ClipCacheState = {
  /** Ids present on disk. */
  readonly ready: ReadonlySet<string>;
  /** True while a prefetch is running. */
  readonly downloading: boolean;
  /** Bytes on disk, against `CLIPS_TOTAL_BYTES`. */
  readonly bytes: number;
  /** Set when the last attempt failed, so a caller can retry rather than
   * silently sit at a partial cache forever. */
  readonly failed: boolean;
};

let state: ClipCacheState = {
  ready: new Set(),
  downloading: false,
  bytes: 0,
  failed: false,
};
const listeners = new Set<() => void>();

function publish(next: Partial<ClipCacheState>): void {
  state = { ...state, ...next };
  listeners.forEach((fire) => fire());
}

export function clipCacheState(): ClipCacheState {
  return state;
}

export function useClipCache(): ClipCacheState {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    clipCacheState,
    clipCacheState,
  );
}

/**
 * Take stock of what is already on disk.
 *
 * Synchronous filesystem calls, and deliberately: this runs once at startup
 * before anything can ask for a clip, and the answer has to be ready by the
 * time the first session screen renders. Twelve `exists` checks cost less than
 * the render they would otherwise block.
 */
export function surveyClips(): void {
  const dir = clipsDir();
  if (!dir.exists) {
    dir.create({ intermediates: true });
    publish({ ready: new Set(), bytes: 0 });
    return;
  }

  const ready = new Set<string>();
  let bytes = 0;
  for (const [id, entry] of Object.entries(CLIPS)) {
    const file = fileFor(entry.file);
    if (!file.exists) continue;
    // Size as the integrity check, not the hash. Reading fourteen megabytes to
    // hash them on every launch would cost more than re-downloading the one
    // file that is ever actually truncated, and a half-written file is the only
    // corruption this cache can produce.
    if (file.size !== entry.bytes) {
      file.delete();
      continue;
    }
    ready.add(id);
    bytes += entry.bytes;
  }
  publish({ ready, bytes });
}

/** The public URL of a clip in the bucket. */
function remoteUrl(name: string): string | null {
  const client = supabase;
  if (client == null) return null;
  return client.storage.from(CLIP_BUCKET).getPublicUrl(name).data.publicUrl;
}

/**
 * Where to play this exercise's clip from, right now.
 *
 * The local file when it is there, the remote URL when it is not, and null when
 * the exercise has no clip at all. Three answers rather than two, because the
 * middle one is what keeps a session usable on the first launch: the video
 * streams while the prefetch is still working through the list, instead of the
 * card being empty until everything has landed.
 */
export function clipSource(exerciseId: string): string | null {
  const entry = clipEntry(exerciseId);
  if (entry == null) return null;
  if (state.ready.has(exerciseId)) return fileFor(entry.file).uri;
  return remoteUrl(entry.file);
}

/** Guards against two prefetches running at once — the second would download
 * every file a second time into the same names. */
let inFlight: Promise<void> | null = null;

/**
 * Pull down everything that is missing, in the order the programme needs it.
 *
 * Sequential, not parallel. Twelve simultaneous downloads on a phone finish no
 * sooner than twelve in a row and make the first one — which is the one
 * somebody might be waiting on — arrive last. `order` lets the caller put the
 * next session's clips at the front.
 *
 * Silent on failure. A missed clip is not an error the user can act on: the
 * player falls back to streaming, and the next launch tries again.
 */
export function prefetchClips(order: readonly string[] = []): Promise<void> {
  if (inFlight != null) return inFlight;

  const missing = [
    ...order.filter((id) => CLIPS[id] != null && !state.ready.has(id)),
    ...Object.keys(CLIPS).filter((id) => !state.ready.has(id) && !order.includes(id)),
  ];
  if (missing.length === 0) return Promise.resolve();

  publish({ downloading: true, failed: false });

  inFlight = (async () => {
    const dir = clipsDir();
    if (!dir.exists) dir.create({ intermediates: true });

    let failed = false;
    for (const id of missing) {
      const entry = CLIPS[id];
      const url = entry == null ? null : remoteUrl(entry.file);
      if (entry == null || url == null) {
        failed = true;
        continue;
      }
      try {
        await File.downloadFileAsync(url, fileFor(entry.file));
        const file = fileFor(entry.file);
        // Verified before being announced. A truncated download that is
        // reported as ready is a black rectangle in the middle of a session,
        // and the next launch would trust it too.
        if (file.exists && file.size === entry.bytes) {
          publish({
            ready: new Set([...state.ready, id]),
            bytes: state.bytes + entry.bytes,
          });
        } else {
          if (file.exists) file.delete();
          failed = true;
        }
      } catch {
        failed = true;
      }
    }

    publish({ downloading: false, failed });
    inFlight = null;
  })();

  return inFlight;
}

/** Everything, gone. For account deletion and for a reset that has to be
 * believable — a cache the user was told was cleared must actually be. */
export function clearClips(): void {
  const dir = clipsDir();
  if (dir.exists) dir.delete();
  publish({ ready: new Set(), bytes: 0, downloading: false, failed: false });
}

export { CLIPS_TOTAL_BYTES };
