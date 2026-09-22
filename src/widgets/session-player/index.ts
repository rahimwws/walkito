export { SessionView, type PlaylistStep, type SessionViewProps } from './ui/session-view';
/** The arithmetic that turns a prescription into seconds.
 *
 * Exported because Today's Tasks prints the same figure the player counts down,
 * and two implementations of "how long is this dose" is two answers. Home
 * reaches it through here rather than through the model file, so the widget
 * keeps one front door. */
export { doseSeconds, type Dose } from './model/tempo';
/** The Live Activity the session runs on.
 *
 * Exported so the app layer can sweep one left behind by a crash at launch,
 * rather than waiting for the next session to start — which is precisely the
 * window in which a stale countdown is on screen being looked at. */
export { SessionTimerActivity } from './ui/session-activity';
/** The clip cache: what is on disk, and pulling down what is not.
 *
 * Exported so the app layer can start the prefetch at launch — the clips are no
 * longer bundled, and having them local before a session opens is the whole
 * point of fetching them early. */
export {
  CLIPS_TOTAL_BYTES,
  clearClips,
  clipCacheState,
  prefetchClips,
  surveyClips,
  useClipCache,
  type ClipCacheState,
} from './model/clip-cache';
