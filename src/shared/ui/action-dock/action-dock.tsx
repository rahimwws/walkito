import * as Haptics from 'expo-haptics';
import { PersonSimpleRunIcon } from 'phosphor-react-native';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useT } from '@/shared/lib/i18n';
import { accents, fonts } from '@/shared/config';
import { useProgram } from '@/shared/lib/program';

/**
 * How tall the slab stands above the very bottom of the display, before the
 * home indicator's own room is added on top.
 */
const BODY_HEIGHT = 28;
/** The slab's own height, before the home indicator's room is added. Shared so
 * the sheet can work out where the risen slab ends. */
export const DOCK_BODY_HEIGHT = BODY_HEIGHT;
/** Generous, and continuous: at this size a plain radius bows visibly at the
 * corners where the slab meets the screen edge. */
const RADIUS = 40;
/** How far the resting slab is held off the display's edges. */
const SIDE_INSET = 0;
/** How far it hangs off the bottom, so its lower corners never show. */
const BOTTOM_BLEED = 40;
/**
 * How much of the slab the tab bar covers. Exported so the bar can lift itself
 * by exactly the right amount and the two stay locked together — raising this
 * drops the pill further onto the slab.
 *
 * It has to stay a fraction of `BODY_HEIGHT`, not a third of it: the pill was
 * eating two thirds of a fifty-eight point slab and sitting squarely on the
 * label. The label is nudged down by half of whatever is set here, so it keeps
 * to the middle of the part that is actually visible.
 */
export const DOCK_OVERLAP = -10;

/**
 * The gradient's first stop, and so the colour of the band's top edge. The cap
 * drawn above it is filled with this, which is what makes the join seamless.
 */
export const DOCK_TOP_COLOUR = '#A78BFA';
/**
 * The gradient's last stop, and so the colour of the band's lower edge. The
 * sheet's rounded top corners are backed with this: without it the notches show
 * the page's own background, the curve disappears against it, and the join
 * looks like a straight cut.
 */
export const DOCK_BOTTOM_COLOUR = '#6D4AEF';

/**
 * The glyph's colour.
 *
 * Warm against the violet it sits on, and taken from the dark half of the
 * palette on purpose: the slab is the brand gradient in either scheme, so its
 * contents do not flip with the appearance the way the rest of the app does.
 */
const GLYPH = accents.dark.amber.fill;

export type ActionDockProps = {
  label?: string;
};

/**
 * The standing action at the foot of the app.
 *
 * A slab rather than a floating button: it is anchored to the bottom edge and
 * runs under the home indicator, so it reads as part of the device rather than
 * as a control someone left on the screen. The tab bar sits over its top edge,
 * which is what makes the two look like one piece of chrome instead of two
 * things competing for the same corner.
 *
 * The gradient runs top-to-bottom rather than across: light falling on a
 * surface, matching the wash behind the rest of the app. Left to right it would
 * read as a progress bar that never fills.
 *
 * Pressed, it opens the program as a screen of its own and drops out of the
 * way underneath it. It used to travel up and become that screen's header — one
 * object the eye never lost — but the program is full height now, so there is
 * no strip left for a header to park in. Leaving downward keeps the movement
 * honest: the button is where it always was, the screen simply came up over it.
 */
export function ActionDock({ label }: ActionDockProps) {
  // Defaulted in the body, not in the parameter list: a default argument is
  // evaluated before `t` exists, so an English literal there could never
  // translate.
  const insets = useSafeAreaInsets();
  const t = useT();
  const text = label ?? t('dock.startWorkout');
  const program = useProgram();
  const dockHeight = BODY_HEIGHT + insets.bottom;

  /**
   * Out of the way, on the same value that brings the program up.
   *
   * Translated rather than faded. The slab is a gradient rather than glass so
   * an opacity would be safe here, but it sits inside the tab bar's subtree,
   * and the pill beside it leaves by moving for exactly that reason — matching
   * it keeps the two halves of the chrome on one movement instead of two.
   */
  const leave = useAnimatedStyle(() => {
    const p = program?.progress.value ?? 0;
    return { transform: [{ translateY: p * (dockHeight + BOTTOM_BLEED) }] };
  });

  return (
    <Animated.View
      style={[
        styles.dock,
        {
          experimental_backgroundImage:
            'linear-gradient(180deg, #A78BFA 0%, #8B5CF6 48%, #6D4AEF 100%)',
        },
        {
          paddingBottom: insets.bottom,
          paddingTop: DOCK_OVERLAP,
          height: dockHeight + BOTTOM_BLEED,
          bottom: -BOTTOM_BLEED,
          left: SIDE_INSET,
          right: SIDE_INSET,
          borderRadius: RADIUS,
        },
        leave,
      ]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={text}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          program?.toggle();
        }}
        style={styles.press}>
        {/* A runner, because the label starts one. Solid rather than
            outlined: at this size a stroked figure on a saturated ground reads
            as a smudge, and the fill is what lets the warm colour register at
            all. */}
        <PersonSimpleRunIcon size={20} color={GLYPH} weight="fill" />
        <Text style={styles.label}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
}

/** The room the dock needs at the bottom of a scroll view. */
export function useDockHeight(): number {
  const insets = useSafeAreaInsets();
  return BODY_HEIGHT + insets.bottom;
}

const styles = StyleSheet.create({
  // No `alignItems` here on purpose. Centring the cross axis shrank the
  // pressable child to the width of its own text, so `flex: 1` stretched it
  // vertically and left better than half the violet taking no touches at all.
  // The default `stretch` is what actually makes the whole band pressable; the
  // label is centred by `press` below.
  dock: {
    position: 'absolute',
    borderCurve: 'continuous',
    justifyContent: 'center',
  },
  // The label block is the touch target, and it fills the slab so the whole
  // thing is pressable rather than just the words.
  press: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
    // Fixed white: it sits on the brand gradient, not on the page, so it must
    // not flip with the colour scheme.
    color: '#FFFFFF',
  },
});
