import Svg, { Circle, G, Path } from 'react-native-svg';

export type FeetSide = 'left' | 'right' | 'both';

export type FeetGlyphProps = {
  /** Which foot is the sore one — that one is filled, the other is not. */
  side: FeetSide;
  /** Height of the pair; the width follows. */
  size?: number;
  /** The sore foot. */
  active: string;
  /** The other one. */
  idle: string;
};

/** A right foot seen from above, big toe on the inside. The left foot is the
 * same drawing mirrored, so the pair can never disagree about its shape. */
const SOLE =
  'M14 42C9 42 7 38.5 7.5 34C8 30 9.5 28 9 24C8.5 20 6 18 6 13.5C6 9.5 9 7.5 13 7.5C18 7.5 21 10.5 21 15C21 19.5 18.5 22 18.5 26C18.5 29.5 20.5 32 20.5 35.5C20.5 39.5 18 42 14 42Z';
const TOES: readonly [number, number, number][] = [
  [8.6, 4.2, 2.6],
  [12.9, 2.8, 1.9],
  [16.4, 3.2, 1.65],
  [19.3, 4.8, 1.45],
  [21.5, 7.2, 1.25],
];

function Foot({ fill, mirrored }: { fill: string; mirrored: boolean }) {
  return (
    <G transform={mirrored ? 'translate(28 0) scale(-1 1)' : undefined}>
      <Path d={SOLE} fill={fill} />
      {TOES.map(([cx, cy, r]) => (
        <Circle key={cx} cx={cx} cy={cy} r={r} fill={fill} />
      ))}
    </G>
  );
}

/**
 * Two feet, the sore one lit.
 *
 * "Left", "Right" and "Both" are three words a person has to translate into a
 * body before answering; a pair of feet with one of them coloured is the
 * answer already drawn. Custom rather than from the icon set: no free glyph
 * draws a single foot that can be told apart from its partner.
 */
export function FeetGlyph({ side, size = 28, active, idle }: FeetGlyphProps) {
  const leftFill = side === 'left' || side === 'both' ? active : idle;
  const rightFill = side === 'right' || side === 'both' ? active : idle;
  return (
    <Svg width={(size * 60) / 44} height={size} viewBox="0 0 60 44">
      {/* Left foot on the left, as the user looks down at their own feet. */}
      <G transform="translate(2 0)">
        <Foot fill={leftFill} mirrored />
      </G>
      <G transform="translate(30 0)">
        <Foot fill={rightFill} mirrored={false} />
      </G>
    </Svg>
  );
}
