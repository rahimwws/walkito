import { useEffect, useMemo } from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle } from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  ReduceMotion,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

/** Per character, and how many neighbours' fades overlap: `TypedText`'s own
 * cadence, so the line under the headline types the way the headline did. */
const TYPE_MS = 52;
const FADE_CHARS = 3;
/** A couple of points of rise, so a character settles rather than switching on. */
const RISE = 4;

/** The sentence without its `**` marks: what a screen reader says. */
export function plainOf(text: string): string {
  return text.split('**').join('');
}

/** How long `text` takes to type with a ceiling of `maxDuration`, so the next
 * part of a screen can start as it ends. The sum the sweep below uses. */
export function typedEmphasisedDuration(text: string, maxDuration: number): number {
  return Math.min(([...plainOf(text)].length + FADE_CHARS) * TYPE_MS, maxDuration);
}

type Glyph = { char: string; strong: boolean; index: number };

/**
 * The sentence as lines of words of characters, each character knowing its
 * place in the whole sweep and whether it is set heavier. A space closes its
 * word and stays at its end, as in `TypedText`; a `\n` starts a line and holds
 * a slot of the sweep, as a space does.
 */
function layoutOf(text: string): { lines: Glyph[][][]; length: number } {
  const lines: Glyph[][][] = [[]];
  let word: Glyph[] = [];
  let index = 0;
  text.split('**').forEach((part, p) => {
    const strong = p % 2 === 1;
    for (const char of part) {
      const glyph: Glyph = { char, strong, index };
      index += 1;
      const line = lines[lines.length - 1];
      if (char === '\n') {
        if (word.length > 0) line.push(word);
        word = [];
        lines.push([]);
      } else if (char === ' ') {
        word.push(glyph);
        line.push(word);
        word = [];
      } else {
        word.push(glyph);
      }
    }
  });
  if (word.length > 0) lines[lines.length - 1].push(word);
  return { lines, length: index };
}

/**
 * `Emphasised`, typing itself in: the line under the offer's headline, with
 * the words its language marked with `**…**` set heavier as they arrive.
 *
 * `TypedText`'s way, kept here because a line of it holds one style: one shared
 * value sweeps across the whole sentence on the UI thread, each character
 * reads its own slice of it and fades in with its neighbours as a travelling
 * wave, and each takes the style of the run it belongs to. Laid out in full
 * from the first frame (every character at nothing), so nothing below it moves
 * as it types. Read whole by screen readers.
 *
 * Reduce Motion is the caller's: it draws `Emphasised` instead.
 */
export function TypedEmphasised({
  text,
  style,
  strong,
  delay,
  maxDuration,
  maxFontSizeMultiplier = 1.4,
}: {
  text: string;
  style: StyleProp<TextStyle>;
  /** The emphasised words: a face (`faces.*`) and colour over `style`. */
  strong: StyleProp<TextStyle>;
  /** Before the first character. */
  delay: number;
  /** Ceiling on the sweep. */
  maxDuration: number;
  maxFontSizeMultiplier?: number;
}) {
  const progress = useSharedValue(0);
  const { lines, length } = useMemo(() => layoutOf(text), [text]);
  const span = length + FADE_CHARS;
  const duration = Math.min(span * TYPE_MS, maxDuration);

  useEffect(() => {
    progress.value = 0;
    progress.value = withDelay(
      delay,
      // Linear, as `TypedText`: a character is a character.
      withTiming(1, { duration, easing: Easing.linear, reduceMotion: ReduceMotion.Never }),
      ReduceMotion.Never,
    );
  }, [text, duration, delay, progress]);

  const strongStyle = [style, strong];

  return (
    <View accessible accessibilityLabel={plainOf(text)}>
      {lines.map((line, l) => (
        <View key={l} style={styles.line}>
          {line.map((word, w) => (
            <View key={w} style={styles.word}>
              {word.map((glyph) => (
                <Char
                  key={glyph.index}
                  char={glyph.char}
                  index={glyph.index}
                  span={span}
                  progress={progress}
                  style={glyph.strong ? strongStyle : style}
                  maxFontSizeMultiplier={maxFontSizeMultiplier}
                />
              ))}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function Char({
  char,
  index,
  span,
  progress,
  style,
  maxFontSizeMultiplier,
}: {
  char: string;
  index: number;
  span: number;
  progress: SharedValue<number>;
  style: StyleProp<TextStyle>;
  maxFontSizeMultiplier: number;
}) {
  const animated = useAnimatedStyle(() => {
    const t = interpolate(progress.value, [index / span, (index + FADE_CHARS) / span], [0, 1], Extrapolation.CLAMP);
    return { opacity: t, transform: [{ translateY: (1 - t) * RISE }] };
  });
  return (
    <Animated.Text style={[style, animated]} maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {char}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  line: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' },
  word: { flexDirection: 'row' },
});
