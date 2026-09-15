import BalanceScaleIcon from '@hugeicons/core-free-icons/BalanceScaleIcon';
import BodyPartLegIcon from '@hugeicons/core-free-icons/BodyPartLegIcon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import WeightScaleIcon from '@hugeicons/core-free-icons/WeightScaleIcon';
import type { IconSvgElement } from '@hugeicons/react-native';

import type { AccentName } from '@/shared/config';

import type { ZoneKey } from '../model/program';

/**
 * How each measured zone presents itself.
 *
 * The accent says *which* zone a bar belongs to, never how good the number is
 * — a calf bar stays violet at Lv1 and at Lv4. That distinction is the whole
 * reason levels are drawn as filled pips in the zone's own colour rather than
 * on a red-to-green scale.
 */
export const ZONE_META: Record<
  ZoneKey,
  { label: string; icon: IconSvgElement; accent: AccentName }
> = {
  calf: { label: 'Calf', icon: BodyPartLegIcon, accent: 'violet' },
  arch: { label: 'Arch', icon: FootprintsIcon, accent: 'amber' },
  balance: { label: 'Balance', icon: BalanceScaleIcon, accent: 'blue' },
  symmetry: { label: 'Symmetry', icon: WeightScaleIcon, accent: 'teal' },
};
