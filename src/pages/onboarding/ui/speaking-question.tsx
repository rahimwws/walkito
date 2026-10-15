import { useEffect, useRef, type ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, type MascotHandle, type MascotRig, type MascotState } from '@/shared/ui/mascot';
import { TypedText } from '@/shared/ui/typed-text';

import type { SpeakerShot } from './coach-speaker';

export type SpeakingQuestionProps = {
  /** The question, said from his speech bubble. Retyped when it changes. */
  question: string;
  rig: MascotRig;
  /** Names the pose: a new one remounts him rather than morphing one rig
   * into another with different petals. */
  rigKey?: string;
  /** A held state, e.g. `wave` on the name question. */
  state?: MascotState;
  size: number;
  /** A move to play on him: the page's coach shots (an arrival, an answer).
   * Plays each time its `key` grows, after its `delay`. */
  shot?: SpeakerShot | null;
  /** A small line under the bubble: the coach's beat, or an answer said back. */
  caption?: string | null;
  /** Covered or hidden: his loop stops. */
  paused?: boolean;
  /** What comes under the bubble (the name field). */
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

/** The bubble rises once he has started his move. */
const BUBBLE_DELAY_MS = 260;
const QUESTION_MS = 700;

/**
 * Walkito asking the question himself: centred, the question typed out of
 * his speech bubble (a small round step, then the bubble), and anything the
 * step adds under it. Used by the name step and by the plain choice questions
 * (`SPEAKING_STEPS` in `model/coach.ts`), where the corner coach then hides.
 *
 * The bubble is the page's ink and its text the page: dark on a light page,
 * light on a dark one, a spoken line set apart from the screen.
 */
export function SpeakingQuestion({
  question,
  rig,
  rigKey,
  state,
  size,
  shot = null,
  caption = null,
  paused = false,
  children,
  style,
}: SpeakingQuestionProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const mascot = useRef<MascotHandle>(null);

  useEffect(() => {
    if (shot == null) return undefined;
    const timer = setTimeout(() => mascot.current?.play(shot.move), shot.delay ?? 0);
    return () => clearTimeout(timer);
    // Keyed on the serial alone: the same move twice still plays twice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shot?.key]);

  const bubble = colors.foreground;

  return (
    <View style={[styles.wrap, style]}>
      <Mascot key={rigKey} ref={mascot} rig={rig} state={state} size={size} surface={colors.background} paused={paused} />
      <Animated.View
        entering={FadeIn.delay(BUBBLE_DELAY_MS).duration(220).reduceMotion(ReduceMotion.System)}
        style={styles.speech}
      >
        <View style={[styles.dot, { backgroundColor: bubble }]} />
        <View style={[styles.bubble, { backgroundColor: bubble }]}>
          <TypedText
            key={question}
            text={question}
            delay={BUBBLE_DELAY_MS}
            maxDuration={QUESTION_MS}
            align="center"
            style={[styles.question, { color: colors.background }]}
          />
        </View>
      </Animated.View>
      {caption != null && caption !== '' && (
        <Animated.Text
          key={caption}
          entering={FadeIn.delay(BUBBLE_DELAY_MS + QUESTION_MS).duration(220).reduceMotion(ReduceMotion.System)}
          style={[styles.caption, { color: meter.unit }]}
        >
          {caption}
        </Animated.Text>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingTop: 4,
  },
  speech: {
    alignItems: 'center',
    marginTop: 2,
  },
  /** The tail: a small round step from him to the bubble. */
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 6,
  },
  // A set width, not shrink-wrapped: the line types itself in, and a bubble
  // sized to the half-typed text never grew for the line that wraps.
  bubble: {
    borderRadius: 22,
    paddingHorizontal: 22,
    paddingVertical: 12,
    width: 300,
    maxWidth: '100%',
  },
  question: {
    ...fonts.bold(20, -0.3),
    lineHeight: 25,
  },
  caption: {
    ...fonts.medium(15, -0.1),
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: 320,
    marginTop: 10,
  },
});
