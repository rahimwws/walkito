import { accents, filled, type AccentName, type FilledFace } from '@/shared/config';
import { filledFace } from '@/shared/lib/color';

/**
 * The filled face for a tone: the brand violet's own, or an accent's.
 *
 * One function for every filled thing in the kit (a button, a badge, a node, a
 * tile's header, a bar's fill) so a label on a face reads at AA wherever it is
 * drawn, and a violet badge is the same violet as the button beside it.
 */
export function faceFor(scheme: 'light' | 'dark', tone: AccentName | 'primary'): FilledFace {
  if (tone === 'primary') return filled[scheme].primary;
  return filledFace(accents[scheme][tone].fill);
}
