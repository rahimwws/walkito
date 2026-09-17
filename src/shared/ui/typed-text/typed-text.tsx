import { useEffect, useRef } from 'react';
import { StyleSheet, View, type TextStyle } from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  ReduceMotion,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

/** Per character. */
const TYPE_MS = 52;
/** How much of the run each character spends fading in. Greater than one
 * character's worth on purpose: neighbours overlap, so the line arrives as a
 * travelling wave instead of a row of discrete pops. */
const FADE_CHARS = 3;

/**
 * Ceiling for one line's sweep on the welcome screen, where the typing *is*
 * the content and the user has nothing else to do.
 */
export const INTRO_LINE_MS = 1150;
/**
 * Ceiling for a question heading. Deliberately much shorter than the intro's:
 * there the typing is the show, here it is an entrance in front of something
 * the user has to read and answer. A 40-character question at the intro's
 * cadence would hold the screen for over a second before it could be acted
 * on, which turns a flourish into a wait.
 */
export const QUESTION_LINE_MS = 620;

export type TypedTextProps = {
  text: string;
  /** Accepts animated styles as well as plain ones — the intro's greeting
   * passes a colour that animates while the line is typing. */
  style?: TextStyle | (TextStyle | undefined)[] | unknown;
  /** Ceiling on the sweep. Long lines type faster per character rather than
   * making the user sit through them. */
  maxDuration?: number;
  /** Fires once the line has finished. */
  onDone?: () => void;
};

/**
 * A line that types itself in.
 *
 * One shared value sweeps 0→1 across the whole string and each character reads
 * its own slice of it, so the reveal runs entirely on the UI thread. The
 * obvious version — a `setInterval` slicing the string — re-renders the tree
 * per character and pops each glyph in at full opacity, which is what made the
 * first pass read as stuttering rather than typing.
 *
 * Characters are laid out in a wrapping row, so the text still breaks across
 * lines the way a paragraph would.
 */
export function TypedText({
  text,
  style,
  maxDuration = INTRO_LINE_MS,
  onDone,
}: TypedTextProps) {
  const progress = useSharedValue(0);
  const done = useRef(onDone);
  done.current = onDone;

  const finish = () => done.current?.();

  // The sweep runs across `span`, not `text.length`. Each character's fade
  // window is FADE_CHARS wide, so the last one starts at total-1 and needs to
  // reach total-1+FADE_CHARS — past the end of the string. Normalising over
  // text.length alone left that window open when the sweep stopped, and the
  // final characters froze partway in (the last at a third of full opacity).
  const span = text.length + FADE_CHARS;

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(
      1,
      {
        duration: Math.min(span * TYPE_MS, maxDuration),
        // Linear: a character is a character, and easing the sweep would make
        // the middle of the word race and the ends crawl.
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      },
      (finished) => {
        'worklet';
        if (finished) runOnJS(finish)();
      },
    );
  }, [text, span, maxDuration, progress]);

  // Explicit line breaks first, then words inside each line.
  //
  // A `\n` cannot survive this renderer as a character: laying out glyphs in a
  // flex row means the row *is* the line, and a newline glyph inside it has
  // nowhere to break. Copy written as "What should we\ncall you?" rendered
  // "we\ncall" as one word box that jumped a line and left a hole in the
  // sentence behind it. Splitting here restores the author's break — and every
  // line is still one wrapping row, so lines longer than the screen wrap on
  // their own as before.
  const lines = text.split('\n');
  // Runs across the whole string, not per line, so the sweep carries over a
  // break instead of restarting. Each line's terminator ('\n') occupies one
  // slot, exactly as a space does, which is what keeps these indices aligned
  // with `span`.
  let cursor = 0;

  return (
    <View>
      {lines.map((line, l) => {
        const words = line.split(' ');
        return (
          <View key={l} style={styles.line}>
            {words.map((word, w) => {
              const start = cursor;
              cursor += word.length + 1;
              return (
                <View key={`${word}-${w}`} style={styles.word}>
                  {[...word].map((char, i) => (
                    <Char
                      key={i}
                      char={char}
                      index={start + i}
                      span={span}
                      progress={progress}
                      style={style}
                    />
                  ))}
                  {w < words.length - 1 && (
                    <Char
                      char=" "
                      index={start + word.length}
                      span={span}
                      progress={progress}
                      style={style}
                    />
                  )}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

function Char({
  char,
  index,
  span,
  progress,
  style,
}: {
  char: string;
  index: number;
  /** Length of the sweep in character-slots, including the tail that lets the
   * final character finish fading. */
  span: number;
  progress: { value: number };
  style: unknown;
}) {
  const animated = useAnimatedStyle(() => {
    const from = index / span;
    const to = (index + FADE_CHARS) / span;
    const t = interpolate(progress.value, [from, to], [0, 1], Extrapolation.CLAMP);
    return {
      opacity: t,
      // A couple of points of rise, so the character settles rather than
      // simply switching on.
      transform: [{ translateY: (1 - t) * 4 }],
    };
  });

  return (
    <Animated.Text style={[style as TextStyle, animated]}>
      {char === ' ' ? ' ' : char}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  word: {
    flexDirection: 'row',
  },
});
