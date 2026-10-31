import ArrowRight02Icon from '@hugeicons/core-free-icons/ArrowRight02Icon';
import PercentIcon from '@hugeicons/core-free-icons/PercentIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { memo, useState, type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

import { fonts } from '@/shared/config';
import { Raised } from '@/shared/ui/raised';

import type { DealWords } from '../model/offer-view';

import { CountdownLine } from './countdown';
import { DEAL } from './deal-tone';
import { LEDGE_SHOWN, LedgeMascot } from './mascots';

/** The card's corners and its ledge: `Card3D`'s large card. */
const RADIUS = 26;
const LIP = 4;

/**
 * The comeback's card, after the reference the founder chose: one big dark
 * card with Walkito gripping its top edge and peeking over it, a faint field
 * of "%" across it, and in the middle, in this order, the time left, the
 * discount very large in green, the billed price in a white pill, "only this
 * once" with a tick, then the standard price struck through beside the price
 * paid, and the smallest line under that.
 *
 * Dark in both schemes (`DEAL`), as the reference's card is on a light page.
 *
 * What it says is `DealWords`: with no discount between two store prices it is
 * the time left and the price alone. The billed price is the pill, the most
 * prominent price here, and the monthly figure worked out from it the smallest
 * line, never the other way round (App Review Guideline 3.1.2).
 *
 * The space over the card is the mascot's (`LEDGE_SHOWN`); he is drawn first,
 * so the card covers all of him below its rim.
 *
 * One size whichever plan is chosen: the figures under the time left are held
 * at the tallest of `deals` (`Steady`), and a shorter set (the 3-month pass,
 * which has no discount to show) sits in the middle of that space. The card
 * once grew and shrank by a third as the switch moved, and the whole offer
 * re-centred with it.
 */
export function DealCard({
  words,
  deals = [],
  endsAt,
  mascotAt,
  boingAt,
}: {
  words: DealWords;
  /** The card for every plan on the switch (`OfferView.deals`). */
  deals?: readonly DealWords[];
  endsAt: number | null;
  /** When the mascot starts up from behind the card (the card is solid). */
  mascotAt: number;
  /** When he gives his boing. */
  boingAt: number;
}) {
  return (
    <View style={styles.room}>
      <LedgeMascot delay={mascotAt} boingAt={boingAt} />
      <Raised
        face={DEAL.face}
        edge={DEAL.edge}
        lip={DEAL.lip}
        depth={LIP}
        radius={RADIUS}
        clip
        contentStyle={styles.face}>
        <PercentField />
        {endsAt != null && <CountdownLine endsAt={endsAt} color={DEAL.label} />}
        <Steady variants={deals.map((each, index) => <Figures key={index} words={each} />)} style={styles.figures}>
          <Figures words={words} />
        </Steady>
      </Raised>
    </View>
  );
}

/** What the card says under the time left: the discount, the pill, the
 * promise, the struck price and the smallest line, each only when it is true. */
function Figures({ words }: { words: DealWords }) {
  return (
    <>
      {words.off != null && (
        <Text
          style={[styles.off, { color: DEAL.green }]}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.5}
          maxFontSizeMultiplier={1}>
          {words.off}
        </Text>
      )}
      <View style={[styles.pill, { backgroundColor: DEAL.pill }, words.off == null && styles.pillAlone]}>
        <Text
          style={[styles.pillText, { color: DEAL.pillInk }]}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
          maxFontSizeMultiplier={1.2}>
          {words.pill}
        </Text>
      </View>
      {words.promise != null && (
        <View style={styles.promise}>
          <HugeiconsIcon icon={Tick02Icon} size={18} color={DEAL.green} strokeWidth={2.4} />
          <Text style={[styles.promiseText, { color: DEAL.green }]} maxFontSizeMultiplier={1.3}>
            {words.promise}
          </Text>
        </View>
      )}
      {(words.was != null || words.caption != null) && (
        <View style={styles.foot}>
          {words.was != null && (
            <View accessible accessibilityLabel={words.was.label} style={styles.was}>
              <Text style={[styles.from, { color: DEAL.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
                {words.was.from}
              </Text>
              <HugeiconsIcon icon={ArrowRight02Icon} size={17} color={DEAL.label} strokeWidth={2.2} />
              <Text style={[styles.to, { color: DEAL.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
                {words.was.to}
              </Text>
            </View>
          )}
          {words.caption != null && (
            <Text style={[styles.caption, { color: DEAL.caption }]} maxFontSizeMultiplier={1.4}>
              {words.caption}
            </Text>
          )}
        </View>
      )}
    </>
  );
}

/**
 * A block of the offer that changes with the plan chosen, held at least as
 * tall as the tallest thing it can show: its children, at a `minHeight` of
 * the tallest of `variants` (what the same place says for each plan on the
 * switch).
 *
 * Each variant is laid out once more, out of sight and out of the
 * accessibility tree, in the same style and at the same width, and measured.
 * So switching plans changes what is in the block and never its height:
 * nothing under it moves, and the offer's centred scroll never re-centres.
 * Layout only, no animation: it holds still because nothing moves. Under two
 * variants it is a plain view.
 *
 * `style` is the block's own layout (alignment, gap) and is given to every
 * copy, so it must carry no margin.
 */
export function Steady({
  variants,
  style,
  children,
}: {
  variants: readonly ReactNode[];
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}) {
  /** Each variant's height, by its place in `variants`; a hole until measured. */
  const [heights, setHeights] = useState<readonly number[]>([]);
  const measured = variants.length > 1;
  const tallest = measured
    ? heights.slice(0, variants.length).reduce((max, height) => (height > max ? height : max), 0)
    : 0;
  return (
    <View style={[style, tallest > 0 && { minHeight: tallest }]}>
      {measured &&
        variants.map((variant, index) => (
          <View
            key={index}
            pointerEvents="none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={[style, steadyStyles.copy]}
            onLayout={(event) => {
              const height = event.nativeEvent.layout.height;
              setHeights((prev) => {
                if (prev[index] === height) return prev;
                const next = prev.slice();
                next[index] = height;
                return next;
              });
            }}>
            {variant}
          </View>
        ))}
      {children}
    </View>
  );
}

const steadyStyles = StyleSheet.create({
  /** Laid out where the block is, at its width, and never seen. */
  copy: { position: 'absolute', top: 0, left: 0, right: 0, opacity: 0 },
});

/** Hugeicons' own "%" (stroke-rounded, as every icon in the app), as paths. */
const PERCENT_ENTRIES: readonly (readonly [string, Readonly<Record<string, string | number>>])[] = PercentIcon;
const PERCENT_PATHS = PERCENT_ENTRIES.map(([, attrs]) => String(attrs.d));

/**
 * Where each "%" lies in a 340 × 300 field: its centre, its size and its turn.
 * Scattered round the edges and the corners, as in the reference, and kept off
 * the middle where the figures are; the field is cut to whatever shape the
 * card takes (`slice`), so a taller card shows the same field, larger.
 */
const SCATTER: readonly (readonly [x: number, y: number, size: number, turn: number])[] = [
  [30, 34, 34, -18],
  [102, 74, 20, 14],
  [22, 136, 26, 8],
  [72, 200, 36, -10],
  [26, 266, 22, 18],
  [118, 284, 18, -14],
  [310, 32, 28, 16],
  [244, 70, 20, -12],
  [320, 124, 36, -8],
  [272, 196, 22, 20],
  [316, 258, 30, 12],
  [226, 288, 18, -16],
];

/**
 * The faint field of "%" across the card: one drawing, laid under the
 * content, still and silent (decoration, hidden from screen readers). Drawn
 * once: it takes no props, so a tick of the countdown never redraws it.
 */
const PercentField = memo(function PercentField() {
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%" viewBox="0 0 340 300" preserveAspectRatio="xMidYMid slice">
        {SCATTER.map(([x, y, size, turn], index) => (
          <G key={index} transform={`translate(${x} ${y}) rotate(${turn}) scale(${size / 24}) translate(-12 -12)`}>
            {PERCENT_PATHS.map((d, part) => (
              <Path
                key={part}
                d={d}
                fill="none"
                stroke={DEAL.pattern}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </G>
        ))}
      </Svg>
    </View>
  );
});

const styles = StyleSheet.create({
  /** The mascot's room over the card: his head and hands show in it. */
  room: { paddingTop: LEDGE_SHOWN },
  face: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  /** The figures under the time left, across the card, a shorter set in the
   * middle of the space the tallest takes (`Steady`). */
  figures: { alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' },
  /** The card's full width, so a long figure shrinks to fit rather than
   * running out of it. */
  off: { ...fonts.heavy(60, -1.8), lineHeight: 68, marginTop: 2, alignSelf: 'stretch', textAlign: 'center' },
  pill: {
    maxWidth: '100%',
    marginTop: 8,
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 999,
    borderCurve: 'continuous',
  },
  /** With no figure above it, the pill keeps its distance from the time left. */
  pillAlone: { marginTop: 16 },
  pillText: { ...fonts.heavy(23, -0.5), textAlign: 'center' },
  promise: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 12 },
  promiseText: fonts.bold(16, -0.2),
  foot: { alignItems: 'center', gap: 3, marginTop: 20 },
  was: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  from: { ...fonts.semibold(17, -0.2), textDecorationLine: 'line-through' },
  to: fonts.heavy(18, -0.3),
  caption: { ...fonts.semibold(14), lineHeight: 18, textAlign: 'center' },
});
