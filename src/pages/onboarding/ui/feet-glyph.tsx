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
  'M14 42C18 42 20 39.5 20 35.5C20 30 19.5 26 20.5 20C21.3 15 21.5 11 19 8.8C16.5 6.8 11 6.6 8.3 8.4C5.8 10.2 5.6 14.5 7.6 18.5C9.4 22 10.8 25 10 30C9.2 34 8 36 8.2 38.2C8.6 40.8 11 42 14 42Z';
/** Big toe on the inside, the rest stepping down and out along the ball. */
const TOES: readonly [number, number, number][] = [
  [8.9, 4.3, 2.7],
  [13.1, 3.0, 1.9],
  [16.4, 3.5, 1.65],
  [19.0, 4.9, 1.45],
  [20.9, 7.0, 1.2],
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
