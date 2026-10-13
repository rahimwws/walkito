import { useEffect, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { fonts } from '@/shared/config';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const INK = '#FFFFFF';
/** One word after another, as a hand writes: each fades up in its turn. */
const WORD_MS = 110;
const WORD_IN_MS = 260;
const ARROW_MS = 520;
const HEAD = 15;
const HEAD_ANGLE = 0.5;

export type Point = { x: number; y: number };

export type HandNoteProps = {
  text: string;
  /** Where the line sits: its box's left edge and width, and either its top
   * (`top`, the note under the place) or its bottom (`bottom`, over it). */
  left: number;
  width: number;
  top?: number;
  bottom?: number;
  /** The arrow, from under (or over) the words to the edge of the place. */
  from: Point;
  to: Point;
  /** Under the words, appearing with them: the "Next" pill on the first stops. */
  children?: ReactNode;
};

/**
 * A line in handwriting with a drawn arrow, as somebody would scribble it on
 * a screenshot: the words arrive one after another in Caveat, then the arrow
 * draws from them to the place, its head last. Word by word, not letter by
 * letter: a handwriting face set a glyph at a time loses its joins and its
 * spacing, and reads as stencilled.
 */
export function HandNote({ text, left, width, top, bottom, from, to, children }: HandNoteProps) {
  const draw = useSharedValue(0);
  const words = text.split(' ');
  const typed = words.length * WORD_MS + WORD_IN_MS;

  useEffect(() => {
    draw.value = 0;
    draw.value = withDelay(
      typed * 0.6,
      withTiming(1, { duration: ARROW_MS, easing: Easing.inOut(Easing.cubic), reduceMotion: ReduceMotion.System }),
    );
  }, [draw, typed, from.x, from.y, to.x, to.y]);

  // A quadratic from the words to the place, bending through the corner
  // between them: down (or up) first, then across into it.
  const bend = { x: from.x, y: to.y };
  const curve = `M ${from.x} ${from.y} Q ${bend.x} ${bend.y} ${to.x} ${to.y}`;
  const length = Math.hypot(to.x - from.x, to.y - from.y) * 1.25 + 20;
  const angle = Math.atan2(to.y - bend.y, to.x - bend.x);
  const head = `M ${to.x - HEAD * Math.cos(angle - HEAD_ANGLE)} ${to.y - HEAD * Math.sin(angle - HEAD_ANGLE)} L ${to.x} ${to.y} L ${to.x - HEAD * Math.cos(angle + HEAD_ANGLE)} ${to.y - HEAD * Math.sin(angle + HEAD_ANGLE)}`;

  const curveProps = useAnimatedProps(() => ({ strokeDashoffset: length * (1 - draw.value) }));
  const headProps = useAnimatedProps(() => ({ opacity: draw.value > 0.92 ? (draw.value - 0.92) / 0.08 : 0 }));
  const after = useAnimatedStyle(() => ({ opacity: draw.value }));

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
        <AnimatedPath
          d={curve}
          stroke={INK}
          strokeWidth={3.2}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={[length, length]}
          animatedProps={curveProps}
        />
        <AnimatedPath
          d={head}
          stroke={INK}
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animatedProps={headProps}
        />
      </Svg>
      <View
        pointerEvents="box-none"
        style={[styles.note, { left, width }, top != null ? { top } : { bottom: bottom ?? 0 }]}>
        <View style={styles.tilt}>
          <View style={styles.words} accessible accessibilityLabel={text}>
            {words.map((word, index) => (
              <Word key={`${word}-${index}`} word={word} delay={60 + index * WORD_MS} />
            ))}
          </View>
        </View>
        {children != null && <Animated.View style={[styles.after, after]}>{children}</Animated.View>}
      </View>
    </View>
  );
}

function Word({ word, delay }: { word: string; delay: number }) {
  const shown = useSharedValue(0);
  useEffect(() => {
    shown.value = withDelay(
      delay,
      withTiming(1, { duration: WORD_IN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System }),
    );
  }, [shown, delay]);
  const style = useAnimatedStyle(() => ({
    opacity: shown.value,
    transform: [{ translateY: (1 - shown.value) * 6 }, { rotate: `${(1 - shown.value) * -4}deg` }],
  }));
  return (
    <Animated.View style={style}>
      <Text style={styles.text} maxFontSizeMultiplier={1.2}>
        {word}{' '}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  note: { position: 'absolute' },
  tilt: { transform: [{ rotate: '-3deg' }] },
  words: { flexDirection: 'row', flexWrap: 'wrap' },
  text: { ...fonts.hand(31), lineHeight: 34, color: INK },
  after: { marginTop: 14, alignItems: 'flex-start' },
});
