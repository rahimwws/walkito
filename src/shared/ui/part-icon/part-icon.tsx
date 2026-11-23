import Svg, { Circle, ClipPath, Defs, Ellipse, G, Path, Rect } from 'react-native-svg';

import { parts, type PartName } from '@/shared/config';

/** A lower leg and foot from the side, toes to the right. */
const LEG =
  'M10 3h7v13c0 2.2 1 3.4 3 4.3l7 3.2c2 .9 3 2.2 3 4.1v.9c0 1.4-1 2.5-2.5 2.5H8.8C6.7 31 5.5 29.8 5.5 27.8v-6c0-2 1.2-3.4 2.4-5.1L10 13.6Z';

/** The part, lit in its colour on the white leg. */
function Spot({ part, color }: { part: PartName; color: string }) {
  switch (part) {
    case 'heel':
      return <Circle cx={8.5} cy={27} r={5.5} fill={color} />;
    case 'arch':
      return <Ellipse cx={17.5} cy={30} rx={6} ry={3.6} fill={color} />;
    case 'calf':
      return <Rect x={4} y={2} width={16} height={11} fill={color} />;
    case 'ankle':
      return <Rect x={4} y={14} width={16} height={7.5} fill={color} />;
    case 'toes':
      return <Circle cx={28.5} cy={27.5} r={5} fill={color} />;
  }
}

/**
 * A body part as a flat, filled icon in one style for all five: a white leg,
 * the part lit in its colour (BitePal's colourful category icons, drawn for
 * feet). On the part's pastel disc unless `disc` is off, for a host that
 * draws its own shape behind it.
 */
export function PartIcon({ part, size, disc = true }: { part: PartName; size: number; disc?: boolean }) {
  const { fill, soft } = parts[part];
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {disc && <Circle cx={20} cy={20} r={20} fill={soft} />}
      <Defs>
        <ClipPath id={`part-leg-${part}`}>
          <Path d={LEG} transform="translate(3 2)" />
        </ClipPath>
      </Defs>
      <Path d={LEG} transform="translate(3 2)" fill="#FFFFFF" />
      <G clipPath={`url(#part-leg-${part})`}>
        <G transform="translate(3 2)">
          <Spot part={part} color={fill} />
        </G>
      </G>
      <Path d={LEG} transform="translate(3 2)" fill="none" stroke={fill} strokeWidth={1.6} strokeLinejoin="round" />
    </Svg>
  );
}
