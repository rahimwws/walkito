/**
 * The character on the welcome screen.
 *
 * A Lottie file. Note that it is not a vector one: the export embeds 121
 * base64 WebP frames at 720×720, so this is an image sequence in a JSON
 * wrapper — 3.7MB of the bundle, and 121 bitmaps to decode when the screen
 * mounts. The frames do carry real alpha, which is the one thing every raster
 * route before it failed at.
 *
 * It stays JSON on purpose. As a `.lottie` the frames would ship once as an
 * asset rather than as bytecode (about 1 MB less installed, next to nothing
 * less to download, since base64 compresses back), but lottie-ios reads a
 * `.lottie` off the main thread and decodes it 50-250 ms after mount. A JSON
 * source is decoded while the view mounts, so he is there on the first frame:
 * the splash reveal zooms onto him, and the update sheet rises with him on
 * it. Moving him to a `.lottie` means making both of those wait for
 * `onAnimationLoaded` first.
 */
export const MASCOT = require('@assets/lottie/mascot.json');

/** Height reserved for the character, artwork or not. */
export const MASCOT_HEIGHT = 400;
