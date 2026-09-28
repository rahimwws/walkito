import type { Icon } from 'phosphor-react-native';
import { ArrowsClockwiseIcon } from 'phosphor-react-native/src/icons/ArrowsClockwise';
import { BarbellIcon } from 'phosphor-react-native/src/icons/Barbell';
import { MoonIcon } from 'phosphor-react-native/src/icons/Moon';
import { ScalesIcon } from 'phosphor-react-native/src/icons/Scales';
import { WavesIcon } from 'phosphor-react-native/src/icons/Waves';

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

export const KIND_STICKER: Record<SessionKind, { icon: Icon; accent: AccentName }> = {
  strength: { icon: BarbellIcon, accent: 'violet' },
  mobility: { icon: WavesIcon, accent: 'teal' },
  balance: { icon: ScalesIcon, accent: 'blue' },
  recovery: { icon: MoonIcon, accent: 'amber' },
};

/** Each exercise category's chip: the same glyph and accent Home's list uses. */
export const CATEGORY_TONE: Record<ExerciseCategory, { icon: Icon; accent: AccentName }> = {
  Fitness: { icon: BarbellIcon, accent: 'violet' },
  Mobility: { icon: WavesIcon, accent: 'teal' },
  Recovery: { icon: MoonIcon, accent: 'amber' },
  Habit: { icon: ArrowsClockwiseIcon, accent: 'blue' },
};
