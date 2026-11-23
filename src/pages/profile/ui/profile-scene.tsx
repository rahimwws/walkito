import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';

import type { ColorScheme } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/** Illustration colours, carried by the drawing like the Fluent icons' own.
 * In dark the same landscape at dusk, with a moon, as Today's scene has. */
const SCENES: Record<ColorScheme, Record<'sky' | 'sun' | 'cloud' | 'hillFar' | 'hillNear' | 'bush' | 'flower', string>> = {
  light: {
    sky: '#CDEBFB',
    sun: '#FFD23F',
    cloud: '#FFFFFF',
    hillFar: '#A6DDB3',
    hillNear: '#6CC489',
    bush: '#4FAF72',
    flower: '#FF8FA3',
  },
  dark: {
    sky: '#1E2B47',
    sun: '#F2E6B8',
    cloud: '#4B5878',
    hillFar: '#3B5E4C',
    hillNear: '#2E5040',
    bush: '#284634',
    flower: '#C98597',
  },
};

/**
 * The flat landscape behind the profile header, as BitePal draws one behind
 * its raccoon (#97): sky, a sun, two clouds, rolling hills and a couple of
 * bushes, the ground left clear in the middle for the mascot to stand on.
 */
export function ProfileScene({ width, height }: { width: number; height: number }) {
  const w = width;
  const h = height;
  const s = SCENES[useColorScheme()];
  return (
    <Svg width={w} height={h} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Rect x={0} y={0} width={w} height={h} fill={s.sky} />
      <Circle cx={w * 0.6} cy={h * 0.3} r={30} fill={s.sun} />
      <Ellipse cx={w * 0.44} cy={h * 0.5} rx={34} ry={13} fill={s.cloud} />
      <Ellipse cx={w * 0.5} cy={h * 0.46} rx={24} ry={15} fill={s.cloud} />
      <Ellipse cx={w * 0.4} cy={h * 0.2} rx={26} ry={10} fill={s.cloud} />
      <Path d={`M0 ${h * 0.72} Q ${w * 0.28} ${h * 0.56} ${w * 0.55} ${h * 0.7} T ${w} ${h * 0.64} V ${h} H 0 Z`} fill={s.hillFar} />
      <Path d={`M0 ${h * 0.84} Q ${w * 0.35} ${h * 0.72} ${w * 0.7} ${h * 0.82} T ${w} ${h * 0.8} V ${h} H 0 Z`} fill={s.hillNear} />
      <Circle cx={w * 0.08} cy={h * 0.86} r={26} fill={s.bush} />
      <Circle cx={w * 0.16} cy={h * 0.89} r={18} fill={s.bush} />
      <Circle cx={w * 0.94} cy={h * 0.86} r={22} fill={s.bush} />
      <Circle cx={w * 0.13} cy={h * 0.82} r={4} fill={s.flower} />
      <Circle cx={w * 0.91} cy={h * 0.81} r={4} fill={s.flower} />
    </Svg>
  );
}
