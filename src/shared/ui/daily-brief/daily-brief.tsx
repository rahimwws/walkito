import AlertCircleIcon from '@hugeicons/core-free-icons/AlertCircleIcon';
import ArrowDownRight01Icon from '@hugeicons/core-free-icons/ArrowDownRight01Icon';
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import CheckmarkSquare03Icon from '@hugeicons/core-free-icons/CheckmarkSquare03Icon';
import ChartLineData02Icon from '@hugeicons/core-free-icons/ChartLineData02Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import ClipboardCheckIcon from '@hugeicons/core-free-icons/ClipboardCheckIcon';
import Fire03Icon from '@hugeicons/core-free-icons/Fire03Icon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import PocketIcon from '@hugeicons/core-free-icons/JoggerPantsIcon';
import SleepingIcon from '@hugeicons/core-free-icons/SleepingIcon';
import WalkingIcon from '@hugeicons/core-free-icons/WalkingIcon';
import PlayCircleIcon from '@hugeicons/core-free-icons/PlayCircleIcon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import Task01Icon from '@hugeicons/core-free-icons/Task01Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/** Type size for the whole block, and the rhythm the lines sit on. */
const SIZE = 24;
const LINE = 33;

/**
 * Glyph size, how heavy its stroke is, and how close it sits to its value.
 *
 * Sized against the caps rather than the em: at 21 the icon stands about as
 * tall as a capital Y at 24pt, which is what makes it read as a character in
 * the sentence instead of as a picture dropped into it. The stroke is thickened
 * to match — a 1.5 hairline beside bold text looks like a different font.
 *
 * The size matters for more than proportion. A glyph and its value are laid out
 * as one unbreakable box, so every point of width here is a point that box has
 * to find at the end of a line — and when it cannot, the whole group drops to
 * the next line and leaves a hole behind it. At 26 with a 6pt gap the two
 * groups in the standing sentence were wide enough to do exactly that twice.
 */
const GLYPH = 21;
const STROKE = 2.2;
const GLYPH_GAP = 4;

/**
 * The glyphs the brief can use, keyed the way the copy spec names them.
 *
 * A map rather than an import per call site: the message is data, and data
 * should be able to name an icon without reaching into a module.
 *
 * Stroke, and the same colour as the words around them. Filled and tinted, they
 * became eight coloured stickers competing with each other and with the one
 * thing the line is trying to say; monochrome, they read as punctuation.
 */
export const BRIEF_ICONS = {
  feet: FootprintsIcon,
  /** The hour a limit sits at, as opposed to the hour reached — a distinct
   * glyph so a sentence naming both does not print the same mark twice. */
  threshold: Clock01Icon,
  session: PlayCircleIcon,
  rest: Moon02Icon,
  level: ChartLineData02Icon,
  retest: ClipboardCheckIcon,
  streak: Fire03Icon,
  done: CheckmarkSquare03Icon,
  meetings: Calendar03Icon,
  tasks: Task01Icon,
  habit: RepeatIcon,
  window: Calendar03Icon,
  /**
   * Direction of travel over a window. Usually paired with a tone, since a
   * direction is the one fact in a sentence that is inherently good or bad.
   *
   * Diagonal, not vertical. `ArrowUp01` is a bare chevron at this weight — set
   * beside a percentage it reads as a caret or a sort handle rather than as a
   * trend. The 45° arrow is unambiguous at a glance, which is the whole job of
   * the one glyph in the sentence that carries a colour.
   */
  up: ArrowUpRight01Icon,
  down: ArrowDownRight01Icon,
  /** Marks a threshold the body did not take well. Pair it with `tone: 'warn'`
   * — the glyph is the shape of the warning and the colour is its volume, and
   * an alert circle in plain white is neither. */
  warn: AlertCircleIcon,
  /** How the walk itself changed, as opposed to how much of it there was —
   * `feet` counts steps, this one is about their shape. */
  gait: WalkingIcon,
  sleep: SleepingIcon,
  /** Where the phone has to live for gait to be measured at all. The one glyph
   * here that names a piece of clothing, because the instruction is literally
   * about a pocket. */
  pocket: PocketIcon,
} satisfies Record<string, IconSvgElement>;

export type BriefIcon = keyof typeof BRIEF_ICONS;

/**
 * One piece of the sentence.
 *
 * The split is the whole design: the frame is grey, the values are white, and a
 * value that has a glyph carries it immediately to its left. Written as tokens
 * rather than as marked-up text because a metric has to stay glued to its icon
 * across a line break — a foot symbol stranded at the end of one line with its
 * hours on the next is worse than no icon at all.
 */
/**
 * What a highlighted value is saying about itself.
 *
 * `plain` is the default and the one to reach for: most numbers are just
 * numbers, and a line where everything is coloured has emphasised nothing. The
 * other two are spent on the single fact in the sentence worth acting on —
 * green where something moved the right way, red where something wants
 * attention today.
 *
 * Green is `meterColors.positive`, the palette's own improving-delta colour, so
 * it says here exactly what it says everywhere else. Red is `accents.red`,
 * which is a hue in the palette rather than a meter colour — and that is the
 * line this stays on: it marks a *warning inside a sentence*, never a score.
 * "Your pain is 8" keeps its ordinary colour, because that number is the user's
 * own honest report and tinting it red is the app arguing with them about their
 * body. What goes red is the consequence being warned about — the part they can
 * still do something about.
 */
export type BriefTone = 'plain' | 'good' | 'warn';

/** Trailing punctuation and emphasis, for the two token kinds that take them. */
export type Emphasis = {
  /** Punctuation that has to touch the value — a comma or a full stop handed to
   * the frame instead would be laid out as its own word and come out floating a
   * gap away from what it belongs to ("passed 7 , the next"). */
  tail?: string;
  tone?: BriefTone;
};

export type BriefToken =
  | { kind: 'frame'; text: string }
  | ({ kind: 'value'; text: string } & Emphasis)
  | ({ kind: 'metric'; icon: BriefIcon; text: string } & Emphasis);

export const frame = (text: string): BriefToken => ({ kind: 'frame', text });
export const value = (text: string, emphasis: Emphasis = {}): BriefToken => ({
  kind: 'value',
  text,
  ...emphasis,
});
export const metric = (icon: BriefIcon, text: string, emphasis: Emphasis = {}): BriefToken => ({
  kind: 'metric',
  icon,
  text,
  ...emphasis,
});

export type DailyBriefProps = {
  tokens: readonly BriefToken[];
};

/**
 * The morning line.
 *
 * The screen's only piece of writing, so it does the work a dashboard would
 * otherwise do: it names one thing that is true about the body today and one
 * thing to do about it. Grey carries the grammar and white carries the facts,
 * which means the whole line can be skimmed for the white words alone and still
 * be read correctly.
 *
 * Set on the page itself, with no card behind it. A container would make it one
 * more module on a screen of modules; at this size, on the bare background, it
 * is simply the thing the app has to say — and it is the first thing read
 * because nothing frames it as optional.
 *
 * Left-aligned, not centred. Centred text has no fixed left margin, so every
 * wrapped line starts somewhere new and the eye has to search for each one —
 * fine for two words on a splash screen, wrong for a paragraph that changes
 * daily.
 */
export function DailyBrief({ tokens }: DailyBriefProps) {
  return (
    // No entering animation, deliberately. A Reanimated `entering` seeds the
    // view at opacity 0 and relies on the animation actually running to bring
    // it back; when that mount transaction is missed the text is stranded
    // invisible with nothing else in the tree writing opacity to it. The block
    // gets its arrival from the intro reveal one level up, where the resting
    // value is 1 and the worst case is no animation rather than no words.
    <View style={styles.line}>
      {tokens.map((token, i) => (
        <Token key={`${token.kind}-${i}`} token={token} />
      ))}
    </View>
  );
}

/**
 * A word, a value, or a value with its glyph.
 *
 * Frame and value tokens are split into words so the paragraph wraps like
 * prose; a metric is emitted as a single unbreakable unit, which is what keeps
 * the icon with the number it belongs to.
 */
function Token({ token }: { token: BriefToken }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  // Punctuation rides inside the value's own `Text`, tinted like the frame:
  // grey because it is grammar, but part of the same text run so the layout
  // cannot put a gap between the number and the comma after it. It never takes
  // the tone — a red comma is not a warning, it is a typo.
  const tail =
    token.kind !== 'frame' && token.tail != null ? (
      <Text style={[styles.plain, { color: meter.caption }]}>{token.tail}</Text>
    ) : null;

  /** The colour this highlight carries. See `BriefTone` for what earns one. */
  const emphasis =
    token.kind === 'frame' || token.tone == null || token.tone === 'plain'
      ? colors.foreground
      : token.tone === 'good'
        ? meter.positive
        : accents[scheme].red.fill;

  if (token.kind === 'metric') {
    return (
      <View style={styles.metric}>
        {/* The glyph takes the tone with its value. Split — a red word behind a
            white icon — the pair stops reading as one statement. */}
        <HugeiconsIcon
          icon={BRIEF_ICONS[token.icon]}
          size={GLYPH}
          color={emphasis}
          strokeWidth={STROKE}
        />
        <Text style={[styles.word, styles.strong, { color: emphasis }]}>
          {token.text}
          {tail}
        </Text>
      </View>
    );
  }

  const strong = token.kind === 'value';
  const words = token.text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <Text
          key={`${word}-${i}`}
          style={[
            styles.word,
            strong && styles.strong,
            { color: strong ? emphasis : meter.caption },
          ]}>
          {word}
          {i === words.length - 1 ? tail : null}
        </Text>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  /** A wrapping row, not a `Text`. React Native cannot lay an arbitrary view
   * inline inside text on both platforms, and the glyphs have to sit with the
   * words beside them. Row gap stays at zero — `lineHeight` already sets the
   * distance between lines, and adding to it would open the paragraph up. */
  line: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // A word space, not a design gap. This stands in for the space character
    // the layout would have set itself, so it wants to be the width of one at
    // this size — wider and the line stops reading as a sentence, and every
    // extra point is width the last group on the line no longer has.
    columnGap: 6,
  },
  /** The icon and its number, as one unbreakable unit. */
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: GLYPH_GAP,
  },
  /** Semibold, not medium. The frame has to hold its own beside a heavy value
   * — at this size a light grey word next to a black white one stops reading as
   * the same sentence and starts reading as a caption under a headline. */
  word: {
    fontSize: SIZE,
    lineHeight: LINE,
    fontFamily: fonts.semibold,
    letterSpacing: -0.7,
  },
  strong: {
    fontFamily: fonts.heavy,
  },
  /** Trailing punctuation: back to the frame's weight, inside the value's own
   * text run. Size and line height come from the parent. */
  plain: {
    fontFamily: fonts.semibold,
  },
});
