import Svg, { Path } from 'react-native-svg';

/**
 * A handwritten signature, drawn rather than photographed.
 *
 * An SVG path instead of an image asset for three reasons that all matter here:
 * it takes the ink colour from the theme, so it does not become a black smudge
 * the day the sheet is read in light mode; it stays crisp at any size without a
 * @3x export; and it weighs nothing next to a PNG of a scribble.
 *
 * The strokes are two initials and a flourish — deliberately illegible, the way
 * a real signature is. It is not a reproduction of anyone's actual hand: it is
 * a mark that reads as *signed*, which is the whole job. Replace it with a
 * scan of the real thing whenever there is one; the shape of this component
 * does not change.
 */

/** The box the path was drawn in. Everything scales from this. */
const VIEW_W = 132;
const VIEW_H = 52;

export type SignatureProps = {
  color: string;
  /** Rendered width. Height follows the aspect ratio. */
  width?: number;
};

export function Signature({ color, width = VIEW_W }: SignatureProps) {
  const height = (width / VIEW_W) * VIEW_H;

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      // The mark is decoration beside the printed names, which carry the
      // meaning. Reading a scribble aloud helps nobody.
      accessible={false}>
      {/* The R: a stem, a bowl, and a leg thrown out to the right. */}
      <Path
        d="M8 44 C10 30 12 16 14 8 C22 6 32 7 33 15 C34 23 24 26 16 26 C24 28 30 34 38 42"
        stroke={color}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* The second hand: a tall loop that crosses back over itself. */}
      <Path
        d="M62 42 C66 28 70 14 76 6 C80 2 86 4 84 12 C82 22 74 34 68 40 C76 38 88 32 98 26"
        stroke={color}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* The crossbar, which is what makes the pair read as one signature
          rather than as two separate marks. */}
      <Path
        d="M56 30 C72 26 92 22 106 21"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
        fill="none"
      />
      {/* The tail: the pen leaving the paper. */}
      <Path
        d="M98 26 C106 24 114 26 118 32"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}
