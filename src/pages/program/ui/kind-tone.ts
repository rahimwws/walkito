import BalanceScaleIcon from '@hugeicons/core-free-icons/BalanceScaleIcon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import Yoga01Icon from '@hugeicons/core-free-icons/Yoga01Icon';
import type { IconSvgElement } from '@hugeicons/react-native';

import type { ExerciseCategory, SessionKind } from '@/entities/program';
import type { AccentName } from '@/shared/config';

/**
 * A day type's colour, as the plan screen paints it.
 *
 * What survived of the old day card when the plan screen became a schedule:
 * the accent each kind of day wears and the strength a card carries it at.
 * The accent names the kind and never rates it — a rest is amber because it is
 * a rest, not because it counts for less.
 */

/** How strongly today's card carries its kind's colour. */
export const TINT_TODAY = 0.46;

/** A palette accent at a chosen strength. */
export function tint(hex: string, alpha: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** The glyphs are the program entity's own (`SESSION_META`), so a kind wears
 * the same one here as in a day sheet or on the path. */
export const KIND_STICKER: Record<SessionKind, { icon: IconSvgElement; accent: AccentName }> = {
  strength: { icon: Dumbbell01Icon, accent: 'violet' },
  mobility: { icon: Yoga01Icon, accent: 'teal' },
  balance: { icon: BalanceScaleIcon, accent: 'blue' },
  recovery: { icon: Moon02Icon, accent: 'amber' },
};

/** Each exercise category's chip: the same glyph and accent Home's list uses. */
export const CATEGORY_TONE: Record<ExerciseCategory, { icon: IconSvgElement; accent: AccentName }> = {
  Fitness: { icon: Dumbbell01Icon, accent: 'violet' },
  Mobility: { icon: Yoga01Icon, accent: 'teal' },
  Recovery: { icon: Moon02Icon, accent: 'amber' },
  Habit: { icon: RepeatIcon, accent: 'blue' },
};
