/**
 * A sticker's tilt, fixed by its id. PURE.
 *
 * Stuck-on stickers are never quite straight, and a sticker that came back at
 * a different angle every render would read as loose. So the angle is a hash
 * of the id: the same sticker sits at the same slant on every screen and every
 * launch, and a row of them does not line up like tiles.
 */
export const MAX_TILT_DEG = 4;

/** FNV-1a over the id, folded into -4 to +4 degrees in tenths. */
export function stickerTilt(id: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < id.length; i += 1) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  const steps = MAX_TILT_DEG * 20 + 1; // tenths of a degree, both ends included
  return (hash % steps) / 10 - MAX_TILT_DEG;
}
