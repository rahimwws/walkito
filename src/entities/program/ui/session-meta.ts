import BalanceScaleIcon from '@hugeicons/core-free-icons/BalanceScaleIcon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import Yoga01Icon from '@hugeicons/core-free-icons/Yoga01Icon';
import type { IconSvgElement } from '@hugeicons/react-native';

import type { AccentName } from '@/shared/config';

import type { SessionKind } from '../model/program';

/**
 * How each session kind presents itself. One glyph per kind, used everywhere
 * the kind shows up — inside a path node, in a day sheet, on the bottom card —
 * so the user learns "crescent means unload" once.
 *
 * The accent identifies the kind, it never rates it. A recovery day is amber
 * because it is recovery, not because it is worth less than a strength day.
 */
export const SESSION_META: Record<
  SessionKind,
  { label: string; icon: IconSvgElement; accent: AccentName }
> = {
  strength: { label: 'Strength', icon: Dumbbell01Icon, accent: 'violet' },
  mobility: { label: 'Mobility', icon: Yoga01Icon, accent: 'teal' },
  balance: { label: 'Balance', icon: BalanceScaleIcon, accent: 'blue' },
  recovery: { label: 'Recovery', icon: Moon02Icon, accent: 'amber' },
};

/** A retest is not a session, so it gets its own glyph rather than a kind's. */
export const CHECKPOINT_ICON = Target01Icon;
