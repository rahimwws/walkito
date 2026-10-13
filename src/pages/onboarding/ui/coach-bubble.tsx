import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  LayoutAnimationConfig,
  LinearTransition,
  ReduceMotion,
  useReducedMotion,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { QUESTION_LINE_MS, TypedText } from '@/shared/ui/typed-text';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

/** The tail: a 10pt square turned through 45°, half of it over the bubble. */
const TAIL = 10;
/** From the bubble's edge to the tail, which puts it under the coach's feet
 * in the corner (his square is 44 or 56 wide, flush with the same edge). */
const TAIL_INSET = 20;

export type CoachBubbleProps = {
  /** Which line this is. A new id crossfades to its line; the same id with
   * new words (the name, typed on) only retypes. */
  id: string;
  text: string;
  /** Which corner the coach is in. */
  tail: 'top-right' | 'top-left';
  /** Types itself in, as the questions do. Never under Reduce Motion. */
  typed?: boolean;
  /** Held back from the step's arrival: a line he says once the question is
   * up, rather than over it. */
  delay?: number;
  style?: StyleProp<ViewStyle>;
};

/**
 * What the coach says, in a speech bubble pointing up at him.
 *
 * The answer said back, or his own beat as a part of the flow begins: one
 * line, three at most, in the slot between the question and the answers,
 * where it is read. What is under it slides down to make room (the page's
 * `MAKE_ROOM`).
 *
 * It tracks nothing. Which lines may be counted, and under what id, is the
 * page's to decide (`reactionAnalyticsId`), because a line's id names the
 * answer that chose it.
 */
export function CoachBubble({ id, text, tail, typed = true, delay = 0, style }: CoachBubbleProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const reduceMotion = useReducedMotion();
  const skin = { backgroundColor: colors.card, borderColor: meter.track };

  const entering = reduceMotion
    ? FadeIn.delay(delay).duration(150).reduceMotion(ReduceMotion.Never)
    : FadeInDown.delay(delay)
        .duration(200)
        .easing(EASE)
        .withInitialValues({ transform: [{ translateY: 12 }] })
        .reduceMotion(ReduceMotion.Never);

  const textStyle = [styles.text, { color: colors.foreground }];

  return (
    <Animated.View
      entering={entering}
      exiting={FadeOut.duration(120).reduceMotion(ReduceMotion.System)}
      layout={LinearTransition.duration(200).easing(EASE).reduceMotion(ReduceMotion.System)}
      // One element, read whole: the typed line is a row of single letters.
      accessible
      accessibilityLabel={text}
      accessibilityLiveRegion="polite"
      style={[styles.bubble, skin, style]}>
      {/* Its outer half outlined on the two sides that face out, so it reads
          as the bubble's own edge drawn to a point; the inner half lies over
          the bubble and hides the border where they meet. */}
      <View style={[styles.tail, skin, tail === 'top-right' ? styles.tailRight : styles.tailLeft]} />
      {/* The first line arrives with the bubble; only a later one crossfades
          in, once the last has gone. */}
      <LayoutAnimationConfig skipEntering>
        <Animated.View
          key={id}
          entering={FadeIn.delay(120).duration(200).reduceMotion(ReduceMotion.System)}
          exiting={FadeOut.duration(120).reduceMotion(ReduceMotion.System)}>
          {typed && !reduceMotion ? (
            <TypedText key={id} text={text} style={textStyle} maxDuration={QUESTION_LINE_MS} />
          ) : (
            <Text style={textStyle} numberOfLines={3}>
              {text}
            </Text>
          )}
        </Animated.View>
      </LayoutAnimationConfig>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 18,
    borderCurve: 'continuous',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  text: {
    ...fonts.semibold(16),
    lineHeight: 21,
  },
  tail: {
    position: 'absolute',
    top: -TAIL / 2,
    width: TAIL,
    height: TAIL,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    transform: [{ rotate: '45deg' }],
  },
  tailRight: { right: TAIL_INSET },
  tailLeft: { left: TAIL_INSET },
});
