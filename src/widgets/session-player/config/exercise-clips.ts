import { clipEntry } from './clip-manifest';
import { clipSource } from '../model/clip-cache';

/**
 * The demonstration loop for each exercise, keyed by catalogue id.
 *
 * Streamed or cached, never bundled. Fourteen megabytes of footage in the App
 * Store download was paid for by every user whether or not their programme ever
 * prescribed the exercise, and a growing catalogue makes that worse in a
 * straight line. The clips live in Supabase Storage and are pulled down once,
 * in the background, on the first launch with a network — see `clip-cache`.
 *
 * Keyed by id, not by title. A title is copy and will be reworded; an id is the
 * contract, and a renamed exercise silently losing its clip is the kind of bug
 * that looks like nothing at all.
 */

/**
 * Where to play this exercise's clip from.
 *
 * A local file once it has been cached, the remote URL until then, and null for
 * the six exercises that have no footage. `expo-video` takes a URI either way,
 * so the call site does not branch — which is what lets a session on a fresh
 * install work while the prefetch is still running.
 */
export function clipFor(exerciseId: string): string | null {
  return clipSource(exerciseId);
}

/** Whether this exercise can be demonstrated at all, for callers that need to
 * lay out differently rather than leave a black rectangle. Answers from the
 * manifest, so it is true before anything has downloaded. */
export function hasClip(exerciseId: string): boolean {
  return clipEntry(exerciseId) != null;
}
