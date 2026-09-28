/**
 * Whether the demonstration clips are shown mirrored.
 *
 * The clips are filmed on the right foot. Someone rehabilitating the left one
 * sees them flipped, so the demonstration is the foot they are working —
 * copying a movement across the body is a step people get wrong. Both feet, or
 * no answer, keeps the clip as filmed.
 */
export function mirroredFor(side: 'left' | 'right' | 'both' | null | undefined): boolean {
  return side === 'left';
}
