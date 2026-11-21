/**
 * The numbers behind the launch reveal, kept apart from the component that
 * draws it so a test can pin them down.
 */

/**
 * The native splash's colour (`backgroundColor` of the expo-splash-screen
 * plugin in app.json) and the JS overlay's, so the hand-over between them
 * changes no pixel. White, the app's card colour.
 */
export const SPLASH_BACKGROUND = '#FFFFFF';

/** The overlay fades off the app in this long. */
export const REVEAL_MS = 250;

/**
 * The reveal starts by this long after the overlay mounts, whatever it is
 * still waiting for, so a font that never resolves can delay the app but never
 * shut it away.
 */
export const REVEAL_BY_MS = 2500;

/** Past the reveal's own length, the overlay is removed even if the
 * animation's completion never arrives. */
export const UNMOUNT_GRACE_MS = 500;
