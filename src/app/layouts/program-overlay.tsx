import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  ReduceMotion,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PROGRAM_HEADER_HEIGHT, ProgramPage } from '@/pages/program';
import { palette } from '@/shared/config';
import { PROGRAM_EASING, PROGRAM_MS, useProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';


/**
 * The corner the screen arrives on.
 *
 * Rounded while it travels and flush once it lands: a card in flight reads as a
 * thing moving over the screen, and the same card stopped at the top edge with
 * its corners still rounded reads as one that failed to finish arriving.
 */
const RADIUS = 34;
/** Past this much of a drag, or this much flick, letting go closes it. */
const CLOSE_FRACTION = 0.3;
const CLOSE_VELOCITY = 900;

/**
 * The program, arriving as a screen of its own.
 *
 * Not a native route, and no longer a sheet. A `formSheet` would put its own
 * chrome above everything and slide the app down behind it; a partial sheet
 * left the program permanently framed by the screen it came from. This travels
 * the full height and lands flush, so what the user gets is a page — closed by
 * the arrow in its own corner, exactly as `SessionView` is.
 *
 * Owning the presentation is what buys the animation. One shared value drives
 * the rise, the corner radius, the tab bar leaving and the dock dropping away,
 * so all four are the same movement rather than four that happen to overlap.
 *
 * A downward drag still dismisses it. The arrow is the advertised way out, but
 * a screen that arrives from the bottom and cannot be pushed back down feels
 * stuck to the thumb.
 */
export function ProgramOverlay() {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const program = useProgram();

  /** Bottom of the display to the top of it: the screen covers everything. */
  const travel = height;

  /**
   * Where the transition stood when the finger landed.
   *
   * Without it a drag mapped its translation as though the sheet were always
   * fully open, so the first move frame teleported it to 1. The sheet becomes
   * grabbable about sixty milliseconds into a four-hundred-and-sixty
   * millisecond animation, which left a long window where catching it mid-flight
   * threw it upward while the finger went down — and where a short tug during a
   * close re-opened the very sheet the user had just dismissed.
   */
  const grabbedAt = useSharedValue(1);

  /** Where the finger went down, and whether it landed on the title block. */
  const touchOrigin = useSharedValue({ x: 0, y: 0 });
  const onHandle = useSharedValue(false);
  /** How far the finger had already travelled when the sheet took the gesture
   * over. Subtracted from every later frame, so a sheet that is claimed forty
   * points into a drag starts moving from where it stands rather than jumping
   * forty points down to meet the finger. */
  const claimedAt = useSharedValue(0);

  /**
   * The sheet's drag, arbitrated by hand.
   *
   * A plain `activeOffsetY` cannot express what this needs. It activates on
   * movement in *either* direction, so a swipe up to read further down the list
   * claimed the gesture, cancelled the scroll, and then did nothing — the sheet
   * was already fully open and clamped. The list simply stopped scrolling.
   *
   * `manualActivation` inverts the default: the gesture watches the touches
   * without competing for them, and only takes the fight when the answer is
   * unambiguous. There are exactly two such cases, and they are the two every
   * native sheet uses —
   *
   *   • the finger is on the title block, which is a handle and drags always;
   *   • the list is at its very top and the finger is moving down, where there
   *     is nothing left to scroll and the only thing a downward pull can mean
   *     is "put this away".
   *
   * Everything else is left undecided, which lets the scroll view keep it. The
   * top check is read live rather than latched at touch-down on purpose: scroll
   * down, then pull back up past the top in the same gesture, and the sheet
   * picks the drag up exactly where the list runs out — which is what the
   * hand expects, because it is what iOS does.
   */
  const pan = Gesture.Pan()
    .manualActivation(true)
    .enabled(program != null)
    .onBegin((event) => {
      'worklet';
      // The page owns the safe area now, so its header starts below the status
      // bar and the draggable strip has to start there too.
      onHandle.value = event.y < insets.top + PROGRAM_HEADER_HEIGHT;
    })
    .onTouchesDown((event) => {
      'worklet';
      const touch = event.allTouches[0];
      if (touch != null) touchOrigin.value = { x: touch.absoluteX, y: touch.absoluteY };
    })
    .onTouchesMove((event, state) => {
      'worklet';
      const touch = event.allTouches[0];
      if (program == null || touch == null) return;

      // A session is a page. It is left by its back arrow, and a flick down
      // must not throw away the program that page came out of.
      if (program.detail.value > 0.5) {
        state.fail();
        return;
      }

      const dy = touch.absoluteY - touchOrigin.value.y;
      const dx = touch.absoluteX - touchOrigin.value.x;
      // Sideways intent belongs to whatever lives inside the sheet.
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 14) {
        state.fail();
        return;
      }

      if (onHandle.value) {
        if (Math.abs(dy) > 6) state.activate();
        return;
      }
      if (dy > 10 && program.scrollTop.value <= 0) state.activate();
    })
    .onStart((event) => {
      'worklet';
      if (program == null) return;
      grabbedAt.value = program.progress.value;
      claimedAt.value = event.translationY;
    })
    .onUpdate((event) => {
      'worklet';
      if (program == null) return;
      // Offset from where the sheet was claimed, so it continues from where it
      // actually is. The clamp subsumes an upward-drag guard: pulling up from
      // fully open is a no-op, and from a half-closed sheet it correctly pulls
      // it back.
      const next = grabbedAt.value - (event.translationY - claimedAt.value) / travel;
      program.progress.value = Math.min(Math.max(next, 0), 1);
    })
    .onEnd((event) => {
      'worklet';
      if (program == null) return;
      // Decided from where the sheet ended up, not from how far the finger
      // moved — those are only the same thing when the drag began at 1.
      const closing =
        program.progress.value < 1 - CLOSE_FRACTION || event.velocityY > CLOSE_VELOCITY;
      program.progress.value = withTiming(closing ? 0 : 1, {
        duration: PROGRAM_MS,
        easing: PROGRAM_EASING,
        reduceMotion: ReduceMotion.System,
      });
    });

/**
   * The screen's box.
   *
   * One transform and nothing else. The old sheet animated `top` as well, to
   * walk its upper edge out from under the band when a session opened; there is
   * no band and no second edge to walk now, so the whole arrival is a single
   * translate — which is also why it stays smooth under load.
   */
  const sheet = useAnimatedStyle(() => {
    const p = program?.progress.value ?? 0;
    return {
      transform: [{ translateY: (1 - p) * travel }],
      // Closed, it must not swallow taps meant for the home screen underneath.
      pointerEvents: p > 0.5 ? 'auto' : 'none',
      // Hidden, never faded. This was an animated `opacity`, which put a
      // non-unit alpha on an ancestor of today's card — and that card is a
      // GlassView. Liquid glass under an animated ancestor alpha does not come
      // back when the alpha settles at 1 (expo/expo#41024); it dies for the
      // lifetime of the screen, and since the glass branch draws no fill of its
      // own the card would have been a transparent hole with the list scrolling
      // through it. `display` is the same trick the tab slots already use to
      // hide screens holding glass, and it costs nothing extra here because
      // `top` beside it is a layout property too.
      display: p > 0.001 ? 'flex' : 'none',
    };
  });

  /**
   * The corners, closing as it lands.
   *
   * Held until the last quarter of the trip. Flattening from the first frame
   * would have the radius gone before the screen is halfway up, which loses the
   * one cue that says this is a surface travelling over another one.
   */
  const face = useAnimatedStyle(() => {
    const radius = interpolate(
      program?.progress.value ?? 0,
      [0.75, 1],
      [RADIUS, 0],
      Extrapolation.CLAMP,
    );
    return { borderTopLeftRadius: radius, borderTopRightRadius: radius };
  });

  /**
   * Whether the screen behind should still take touches.
   *
   * Driven through React state rather than an animated `pointerEvents`, because
   * this one has to be right: left live, a drag over the header scrolls the
   * home screen out from under the cap and the band, and the assembly comes
   * apart. One re-render per transition is a fair price for a guarantee.
   */
  const [blocking, setBlocking] = useState(false);
  useAnimatedReaction(
    () => (program?.progress.value ?? 0) > 0.02,
    (next, previous) => {
      if (next !== previous) runOnJS(setBlocking)(next);
    },
  );

  if (program == null) return null;

  return (
    <>
      {/* Swallows everything aimed at the screen behind. Invisible: it is not a
          scrim, it only stops the page underneath from moving. */}
      {blocking && <View style={StyleSheet.absoluteFill} />}

      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.sheet, sheet]}>
          <Animated.View
            style={[styles.sheetFace, { backgroundColor: colors.background }, face]}>
            <ProgramPage />
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sheetFace: {
    flex: 1,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
});
