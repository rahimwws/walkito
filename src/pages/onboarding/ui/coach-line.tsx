import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, FadeOut, ReduceMotion, useReducedMotion } from 'react-native-reanimated';

import { colors, fonts } from '@/shared/config';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

export type CoachLineProps = {
  text: string;
  /** Held back from the step's arrival: a line said once the question is up,
   * rather than over it. */
  delay?: number;
  style?: StyleProp<TextStyle>;
};

/**
 * What the coach says, as plain text between the question and the answers:
 * the answer said back, or his own beat as a part of the flow begins. What is
 * under it slides down to make room (the page's `MAKE_ROOM`).
 *
 * It tracks nothing. Which lines may be counted, and under what id, is the
 * page's to decide (`reactionAnalyticsId`), because a line's id names the
 * answer that chose it.
 */
export function CoachLine({ text, delay = 0, style }: CoachLineProps) {
  const reduceMotion = useReducedMotion();
  const entering = reduceMotion
    ? FadeIn.delay(delay).duration(150).reduceMotion(ReduceMotion.Never)
    : FadeInDown.delay(delay)
        .duration(200)
        .easing(EASE)
        .withInitialValues({ transform: [{ translateY: 8 }] })
        .reduceMotion(ReduceMotion.Never);

  return (
    <Animated.Text
      entering={entering}
      exiting={FadeOut.duration(120).reduceMotion(ReduceMotion.System)}
      accessibilityLiveRegion="polite"
      style={[styles.text, style]}>
      {text}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...fonts.medium(17),
    lineHeight: 23,
    color: colors.text2,
  },
});
