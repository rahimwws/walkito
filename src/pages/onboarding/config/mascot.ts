/**
 * The character on the welcome screen.
 *
 * A Lottie file. Note that it is not a vector one: the export embeds 121
 * base64 PNG frames at 720×720, so this is an image sequence in a JSON
 * wrapper — 6MB of the bundle, and 121 bitmaps to decode when the screen
 * mounts. The frames do carry real alpha, which is the one thing every raster
 * route before it failed at.
 */
export const MASCOT = require('@assets/lottie/mascot.json');

/** Height reserved for the character, artwork or not. */
export const MASCOT_HEIGHT = 400;
