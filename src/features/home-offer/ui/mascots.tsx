import * as Haptics from 'expo-haptics';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { palette } from '@/shared/config';
import { SETTLE_EASING } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, peekBottomRig, surprisedRig, type MascotHandle, type MascotRig } from '@/shared/ui/mascot';

import { REDUCED_MS } from './entrance';

/** The surprised mascot's box on the trial card. */
export const PEEK_SIZE = 92;
/**
 * How much of him shows over the card's top edge: the head, the hands on the
 * cheeks and the gasp lines (the head ends about two thirds down his box), so
 * the card cuts him at the chin and he reads as peeking over it.
 */
export const PEEK_SHOWN = Math.round(PEEK_SIZE * 0.6);
/** His rise from behind the card. */
const PEEK_MS = 520;

/**
 * The surprised mascot peeking over the top of the trial card: it rises from
 * behind the card as the card lands, hands on his cheeks, and fidgets while
 * the offer is up. Drawn before the card, so the card hides the rest of him.
 * Mounted with the overlay and gone with it; with Reduce Motion it fades in
 * where it stands, with everything else.
 *
 * Decorative: hidden from screen readers.
 */
export function PeekingMascot({ delay }: { delay: number }) {
  const scheme = useColorScheme();
  const reduced = useReducedMotion();
  const rise = useSharedValue(0);
  useEffect(() => {
    rise.value = withDelay(
      delay,
      withTiming(1, {
        duration: reduced ? REDUCED_MS : PEEK_MS,
        easing: SETTLE_EASING,
        reduceMotion: ReduceMotion.Never,
      }),
      ReduceMotion.Never,
    );
  }, [rise, delay, reduced]);
  const style = useAnimatedStyle(() => ({
    // Hidden until it starts: on Android a fading card does not hide what is
    // behind it, so he waits for the card to be solid before he moves.
    opacity: rise.value > 0 ? (reduced ? rise.value : 1) : 0,
    transform: [{ translateY: reduced ? 0 : (1 - rise.value) * PEEK_SHOWN }],
  }));

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={styles.peek}>
      <Animated.View style={style}>
        <Mascot rig={surprisedRig} size={PEEK_SIZE} surface={palette[scheme].background} />
      </Animated.View>
    </View>
  );
}

/** The gripping mascot's box on the comeback's card. */
const LEDGE_SIZE = 104;
/**
 * How far under the card's top edge his own cut sits, hidden by the card: the
 * ledge he grips is the card's rim, and the boing he gives as he arrives
 * (about 1.5pt of jump and a 3° turn of the head at this size) never lifts the
 * cut into view.
 */
const LEDGE_SINK = 4;

/** The top of a rig's figure in its own units, from its traced silhouettes:
 * paths are absolute `M`/`L`/`C` pairs, so every second number is a y. */
function figureTopOf(rig: MascotRig): number {
  let top = Infinity;
  for (const d of rig.bodies) {
    const numbers = d.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
    for (let i = 1; i < numbers.length; i += 2) top = Math.min(top, Number(numbers[i]));
  }
  return Number.isFinite(top) ? top : rig.box.y;
}

const LEDGE_SCALE = LEDGE_SIZE / peekBottomRig.box.size;
/** His cut, the bottom of the art, from the top of his box (`ground` is on it). */
const LEDGE_CUT = (peekBottomRig.ground[1] - peekBottomRig.box.y) * LEDGE_SCALE;
/**
 * How much of him shows over the card's top edge: the head and the two hands
 * gripping the rim, about 57pt. The card leaves this much room above itself.
 */
export const LEDGE_SHOWN = Math.round(
  (peekBottomRig.ground[1] - figureTopOf(peekBottomRig)) * LEDGE_SCALE - LEDGE_SINK,
);
/** His rise from behind the card: a touch longer than the trial's, since he
 * comes up further. */
const LEDGE_MS = 560;

/**
 * Walkito gripping the top edge of the comeback's card and peeking over it,
 * grinning (`peekBottomRig`, the art made for peeking over an edge): the
 * reference's figure over its card. Rises from behind the card once the card
 * is solid, gives one boing a beat later, then only breathes and flexes his
 * fingers (the moves that keep the cut on the edge). Drawn before the card, so
 * the card hides all of him below the rim; centred over it.
 *
 * Placed from the top of the space the card leaves above itself
 * (`LEDGE_SHOWN`). Decorative: hidden from screen readers, and takes no
 * touches. With Reduce Motion he fades in where he stands, with no boing.
 */
export function LedgeMascot({ delay, boingAt }: { delay: number; boingAt: number }) {
  const scheme = useColorScheme();
  const reduced = useReducedMotion();
  const mascot = useRef<MascotHandle>(null);
  const rise = useSharedValue(0);
  useEffect(() => {
    rise.value = withDelay(
      delay,
      withTiming(1, {
        duration: reduced ? REDUCED_MS : LEDGE_MS,
        easing: SETTLE_EASING,
        reduceMotion: ReduceMotion.Never,
      }),
      ReduceMotion.Never,
    );
  }, [rise, delay, reduced]);
  useEffect(() => {
    if (reduced) return undefined;
    const timer = setTimeout(() => mascot.current?.play('poke'), boingAt);
    return () => clearTimeout(timer);
  }, [boingAt, reduced]);
  const style = useAnimatedStyle(() => ({
    // Hidden until it starts: on Android a fading card does not hide what is
    // behind it, so he waits for the card to be solid before he moves.
    opacity: rise.value > 0 ? (reduced ? rise.value : 1) : 0,
    // From just under the rim, outline and all.
    transform: [{ translateY: reduced ? 0 : (1 - rise.value) * (LEDGE_SHOWN + LEDGE_SINK + 4) }],
  }));

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[styles.ledge, { top: LEDGE_SHOWN + LEDGE_SINK - LEDGE_CUT }]}>
      <Animated.View style={[styles.ledgeBox, style]}>
        <Mascot
          ref={mascot}
          rig={peekBottomRig}
          size={LEDGE_SIZE}
          restFace={peekBottomRig.moods.happy}
          surface={palette[scheme].background}
        />
      </Animated.View>
    </View>
  );
}

/** The figure beside the standard offer's title. */
export const PRESENT_SIZE = 96;

/**
 * A mascot beside the title that holds out what it holds once, a beat after it
 * arrives: the crown and key beside the plans. Silent
 * (the overlay arrives unasked, and a sound would startle), tappable for a
 * boing. With Reduce Motion the mascot draws its still art.
 */
export function PresentingMascot({ rig, delay }: { rig: MascotRig; delay: number }) {
  const scheme = useColorScheme();
  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    const timer = setTimeout(() => mascot.current?.play('present'), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ width: PRESENT_SIZE, height: PRESENT_SIZE }}>
      <Mascot
        ref={mascot}
        rig={rig}
        size={PRESENT_SIZE}
        surface={palette[scheme].background}
        onPress={() => void Haptics.selectionAsync()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /** Across the space over the comeback's card, his box centred. */
  ledge: { position: 'absolute', left: 0, right: 0, alignItems: 'center' },
  ledgeBox: { width: LEDGE_SIZE, height: LEDGE_SIZE },
  /** Over the card's top-right, his lower part behind the card. */
  peek: {
    position: 'absolute',
    top: -PEEK_SHOWN,
    right: 26,
    width: PEEK_SIZE,
    height: PEEK_SIZE,
  },
});
