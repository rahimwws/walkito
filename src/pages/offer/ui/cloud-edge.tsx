import { memo } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

/**
 * The sheet's top edge as a row of cloud bumps, laid over the foot of the
 * sky: the mascot stands on the middle one, its legs behind it, as the
 * reference's raccoon does.
 *
 * Circles and a slab, all one white, rather than a traced path: the bumps are
 * placed as fractions of the width, so the edge keeps its shape on every phone
 * and nothing has to be redrawn by hand to move one.
 */

/** Each bump: its centre across the width, how far from the top its crown
 * is (of the edge's height), and its radius (of the width). */
const BUMPS: readonly { x: number; crown: number; r: number }[] = [
  { x: -0.02, crown: 0.62, r: 0.12 },
  { x: 0.16, crown: 0.4, r: 0.14 },
  { x: 0.34, crown: 0.26, r: 0.15 },
  // The mascot's: the highest, and the widest.
  { x: 0.52, crown: 0.04, r: 0.19 },
  { x: 0.72, crown: 0.3, r: 0.15 },
  { x: 0.9, crown: 0.46, r: 0.13 },
  { x: 1.04, crown: 0.6, r: 0.12 },
];

/** Where the slab under the bumps starts, of the edge's height. */
const SLAB = 0.72;

/** The edge's height for a given width: the bumps scale with the phone. */
export function cloudEdgeHeight(width: number): number {
  return Math.round(width * 0.24);
}

/** Where the mascot's bump peaks, from the top of the edge, and its centre across. */
export const CLOUD_PEAK = { x: 0.52, crown: 0.04 } as const;

export const CloudEdge = memo(function CloudEdge({
  width,
  color,
  style,
}: {
  width: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}) {
  const height = cloudEdgeHeight(width);
  return (
    <Svg pointerEvents="none" width={width} height={height} style={style}>
      {BUMPS.map((bump) => {
        const r = bump.r * width;
        return <Circle key={bump.x} cx={bump.x * width} cy={bump.crown * height + r} r={r} fill={color} />;
      })}
      <Rect x={0} y={SLAB * height} width={width} height={height * (1 - SLAB) + 1} fill={color} />
    </Svg>
  );
});

/**
 * A puff of cloud drifting in the sky behind the mascot: three overlapping
 * circles on a flat base, one colour, its opacity set by the caller.
 */
export const Puff = memo(function Puff({ width, color }: { width: number; color: string }) {
  const height = width * 0.5;
  return (
    <Svg pointerEvents="none" width={width} height={height}>
      <Circle cx={width * 0.3} cy={height * 0.64} r={height * 0.34} fill={color} />
      <Circle cx={width * 0.54} cy={height * 0.46} r={height * 0.44} fill={color} />
      <Circle cx={width * 0.76} cy={height * 0.66} r={height * 0.3} fill={color} />
      <Rect x={width * 0.3} y={height * 0.62} width={width * 0.46} height={height * 0.36} fill={color} />
    </Svg>
  );
});
