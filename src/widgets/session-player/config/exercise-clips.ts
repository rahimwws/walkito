import type { VideoSource } from 'expo-video';

/**
 * The clip that demonstrates a move.
 *
 * One clip so far, and every move falls back to it — the shape is what matters
 * here, not the coverage. Keyed by the move's name rather than by session kind
 * because a move can appear under more than one kind, and the name is what the
 * screen already holds.
 *
 * Bundled rather than streamed: a demonstration loop the user stares at for a
 * minute cannot depend on the network, and a first frame that arrives late
 * turns the card into an empty square at exactly the moment it has to explain
 * what to do.
 */
const CALF_RAISE: VideoSource = require('@assets/exercises/calf-raise.mp4');

const CLIPS: Record<string, VideoSource> = {};

export function clipFor(move: string): VideoSource {
  return CLIPS[move] ?? CALF_RAISE;
}
