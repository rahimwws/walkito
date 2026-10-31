import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { accents, type AccentName } from '@/shared/config';
import { shade } from '@/shared/lib/color';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, MascotStill, peekBottomRig, type MascotHandle, type MascotRig } from '@/shared/ui/mascot';

/**
 * The colours the answers' figures take in turn, down a list. Each answer its
 * own, so a list reads as a row of different characters, and none of them
 * says anything about the answer it stands in. Red is left out: beside "calf
 * swollen" or "hurt in a fall" it would read as an alarm.
 */
export const PEEK_ACCENTS: readonly AccentName[] = ['violet', 'teal', 'orange', 'amber', 'blue'];

/** The square the figure is fitted to. The peeking art fills its lower 58%,
 * so he stands about 49pt tall in a card at least 68pt high. */
const PEEK_SIZE = 84;
/** How far under the card's bottom edge his own cut sits: the ledge line he
 * grips lies along the card's rim, and a nod or a boing never lifts it into
 * view. Both stretch from that edge, but the boing (`poke`) also jumps about
 * 1.2pt at this size and turns the head 3°, which together lift the ends of
 * the cut by under 3pt. */
const SINK = 4;
/** From the card's right edge to the nearest of his fingers. */
const INSET = 6;
/** His outline: his own colour, most of the way to black. */
const INK_SHADE = 0.62;

/** The room the figure takes at the card's right edge (`OptionCard3D`'s `peekWidth`). */
export const PEEK_WIDTH = PEEK_SIZE + INSET + 4;

type Bounds = { left: number; top: number; right: number; bottom: number };
const BOUNDS = new Map<string, Bounds>();

/**
 * The figure's extent in the rig's own units, from its traced silhouettes:
 * the box a rig is fitted to has room around the art, and the figure has to
 * stand exactly on the card's edge whatever that room is. Paths are absolute
 * `M`/`L`/`C` pairs, so the numbers alternate x and y. Read once per rig.
 */
function boundsOf(rig: MascotRig): Bounds {
  const known = BOUNDS.get(rig.name);
  if (known != null) return known;
  const found = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
  for (const d of rig.bodies) {
    const numbers = d.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
    for (let i = 0; i + 1 < numbers.length; i += 2) {
      const x = Number(numbers[i]);
      const y = Number(numbers[i + 1]);
      found.left = Math.min(found.left, x);
      found.right = Math.max(found.right, x);
      found.top = Math.min(found.top, y);
      found.bottom = Math.max(found.bottom, y);
    }
  }
  const bounds = Number.isFinite(found.left)
    ? found
    : { left: rig.box.x, top: rig.box.y, right: rig.box.x + rig.box.size, bottom: rig.box.y + rig.box.size };
  BOUNDS.set(rig.name, bounds);
  return bounds;
}

export type PeekMascotProps = {
  /** Its place in the list: which colour it takes, and which way it faces
   * (every other one is mirrored, so a list is not one figure stamped out). */
  index: number;
  selected: boolean;
  /**
   * A question about the body: a chosen answer gets a nod and nothing louder,
   * as the coach gives it. Elsewhere it is a boing and a grin.
   */
  calm?: boolean;
  /** The answer picked last on this screen: the one figure left breathing. */
  live?: boolean;
};

/**
 * Walkito peeking up over an answer card's bottom edge, gripping it, in the
 * answer's own colour (`OptionCard3D`'s `peek`). The card clips him, so he is
 * only ever a head and two hands rising out of the edge.
 *
 * Unchosen, he is the still drawing: cheap, and a list of six costs nothing
 * to scroll. Chosen, he becomes the live character and answers the tap (a
 * boing that stretches up from the edge, the grin; a nod on a body question).
 * Only the answer picked last keeps breathing, so a multiple choice never runs
 * a loop per row. With Reduce Motion he is the still drawing throughout.
 */
export function PeekMascot({ index, selected, calm = false, live = false }: PeekMascotProps) {
  const scheme = useColorScheme();
  const rig = peekBottomRig;
  const accent = PEEK_ACCENTS[index % PEEK_ACCENTS.length];
  const paper = accents[scheme][accent].fill;
  const ink = shade(paper, INK_SHADE);
  const mirrored = index % 2 === 1;

  // Placed by the figure, not by its square: his cut on the card's bottom
  // edge, his outer hand `INSET` from the card's right edge. Mirrored, his
  // right edge is the art's left edge flipped about the square's middle.
  const bounds = boundsOf(rig);
  const k = PEEK_SIZE / rig.box.size;
  const figureBottom = (bounds.bottom - rig.box.y) * k;
  const figureLeft = (bounds.left - rig.box.x) * k;
  const figureRight = (bounds.right - rig.box.x) * k;
  const place = {
    bottom: figureBottom - PEEK_SIZE - SINK,
    right: mirrored ? INSET - figureLeft : INSET + figureRight - PEEK_SIZE,
  };

  const mascot = useRef<MascotHandle>(null);
  const was = useRef(selected);
  useEffect(() => {
    // On being chosen only, never on arrival with an answer already given.
    if (selected && !was.current) mascot.current?.play(calm ? 'nod' : 'poke');
    was.current = selected;
  }, [selected, calm]);

  return (
    <View style={[styles.figure, place]}>
      {selected ? (
        <Mascot
          ref={mascot}
          rig={rig}
          size={PEEK_SIZE}
          paper={paper}
          ink={ink}
          mirrored={mirrored}
          restFace={calm ? rig.moods.idle : rig.moods.happy}
          paused={!live}
        />
      ) : (
        <MascotStill rig={rig} size={PEEK_SIZE} paper={paper} ink={ink} mirrored={mirrored} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  figure: {
    position: 'absolute',
    width: PEEK_SIZE,
    height: PEEK_SIZE,
  },
});
