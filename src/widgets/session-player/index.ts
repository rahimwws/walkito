export { SessionView, type PlaylistStep, type SessionViewProps } from './ui/session-view';
/** The end-of-session sheet on demand, in development builds only: the dev
 * menu's "Preview session done", or `walkito.dev://?previewDone` (and
 * `?previewDone=stopped`). The app layer mounts it behind `__DEV__`. */
export { SessionDonePreview } from './ui/session-done-preview';
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
export { prefetchVoice, surveyVoice } from './model/voice-cache';
/** One exercise's clip, looping — the plan screen's preview sheet, and the
 * cards of onboarding's first week, which also draw its backdrop before a
 * card's player exists. */
export {
  CLIP_BACKDROP,
  ExercisePreview,
  type ExercisePreviewHandle,
  type ExercisePreviewProps,
} from './ui/exercise-preview';
/** Whether a clip is shown flipped for this side. Exported for a host that
 * knows the side before the intake is saved, so it asks the same rule rather
 * than restating it. */
export { mirroredFor } from './model/mirror';
/** A still of each move cut from its clip: the rows of today's moves show it
 * before anything has downloaded. */
export { illustrationFor, posterFor, thumbFor } from './config/exercise-posters';
/** The test day, whole: intro, the three tests, results.
 *
 * One flow for both hosts — Home presents it in a page sheet, Plan in its
 * session pane — so a test taken from either screen is the same test, finished
 * by the same `finishTestDay`, and the two can no longer disagree about it. */
export { TestDayFlow, type TestDayFlowProps } from './ui/test-day/test-day-flow';
// The test's picture in its goal ring, and every test so far as bars: the
// results screen's drawings, also used by the Progress tab's strength card.
export { TestHistoryBars, TestRing } from './ui/test-day/test-visuals';
