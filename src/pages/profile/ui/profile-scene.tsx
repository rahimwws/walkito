import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';

/** Illustration colours, carried by the drawing like the Fluent icons' own. */
const SKY = '#CDEBFB';
const SUN = '#FFD23F';
const CLOUD = '#FFFFFF';
const HILL_FAR = '#A6DDB3';
const HILL_NEAR = '#6CC489';
const BUSH = '#4FAF72';
const FLOWER = '#FF8FA3';

/**
 * The flat landscape behind the profile header, as BitePal draws one behind
 * its raccoon (#97): sky, a sun, two clouds, rolling hills and a couple of
 * bushes, the ground left clear in the middle for the mascot to stand on.
 */
export function ProfileScene({ width, height }: { width: number; height: number }) {
  const w = width;
  const h = height;
  return (
    <Svg width={w} height={h} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Rect x={0} y={0} width={w} height={h} fill={SKY} />
      <Circle cx={w * 0.6} cy={h * 0.3} r={30} fill={SUN} />
      <Ellipse cx={w * 0.44} cy={h * 0.5} rx={34} ry={13} fill={CLOUD} />
      <Ellipse cx={w * 0.5} cy={h * 0.46} rx={24} ry={15} fill={CLOUD} />
      <Ellipse cx={w * 0.4} cy={h * 0.2} rx={26} ry={10} fill={CLOUD} />
      <Path d={`M0 ${h * 0.72} Q ${w * 0.28} ${h * 0.56} ${w * 0.55} ${h * 0.7} T ${w} ${h * 0.64} V ${h} H 0 Z`} fill={HILL_FAR} />
      <Path d={`M0 ${h * 0.84} Q ${w * 0.35} ${h * 0.72} ${w * 0.7} ${h * 0.82} T ${w} ${h * 0.8} V ${h} H 0 Z`} fill={HILL_NEAR} />
      <Circle cx={w * 0.08} cy={h * 0.86} r={26} fill={BUSH} />
      <Circle cx={w * 0.16} cy={h * 0.89} r={18} fill={BUSH} />
      <Circle cx={w * 0.94} cy={h * 0.86} r={22} fill={BUSH} />
      <Circle cx={w * 0.13} cy={h * 0.82} r={4} fill={FLOWER} />
      <Circle cx={w * 0.91} cy={h * 0.81} r={4} fill={FLOWER} />
    </Svg>
  );
}
