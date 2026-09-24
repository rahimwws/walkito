import LaurelWreathLeft02Icon from '@hugeicons/core-free-icons/LaurelWreathLeft02Icon';
import LaurelWreathRight02Icon from '@hugeicons/core-free-icons/LaurelWreathRight02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StarIcon as Star } from 'phosphor-react-native/src/icons/Star';
import { useEffect, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { testimonials, type Testimonial } from '../config/testimonials';

/** Generous on purpose. The squircle only reads as one at a radius this side
 * of a quarter of the card's width — at 22 it looked like a plain rounded
 * rect, which is what made the corner smoothing invisible. */
const RADIUS = 32;
/** Matches the page's own gutter, so the carousel can bleed to the screen
 * edges and still line its first card up with the heading above it. */
const SIDE_PAD = 24;
/** How much of the next card shows past the right edge. The whole reason the
 * carousel is horizontal: a card cut off mid-air says "there are more" far
 * better than the dots underneath do. */
const PEEK = 30;
const GAP = 12;

const PAGE_MS = 320;
const STAR = 16;
/** Amber, not the brand violet. Stars are a borrowed convention and reading
 * them as *our* accent would make them look like a control. */
const STAR_COLOR = '#FBBF24';

export type SocialProofStepProps = {
  name: string;
  /** Which review is centred. The bar's button drives this, so the screen
   * advances at the same tempo as every other one in the flow. */
  index: number;
  /** Fired when the user swipes instead of pressing, so the button and the
   * carousel never disagree about where they are. */
  onChange: (next: number) => void;
};

/**
 * Three reviews on a rail, handed over one at a time.
 *
 * The staging is the point. Three cards dropped in at once are wallpaper — the
 * eye takes the shape of a testimonial block and skips it. Advanced one per
 * tap, each card is the only thing on screen, so it actually gets read, and
 * the screen costs three deliberate presses instead of one dismissive one.
 *
 * It sits after the plan and before the paywall because that is the moment the
 * question changes from "what will this do" to "is this worth it", and other
 * people's answers are the only useful evidence at that point.
 */
export function SocialProofStep({ name, index, onChange }: SocialProofStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const { width } = useWindowDimensions();
  const t = useT();

  const reviews = testimonials(t);
  const cardWidth = width - SIDE_PAD * 2 - PEEK;
  const stride = cardWidth + GAP;

  const scroller = useRef<ScrollView>(null);
  useEffect(() => {
    scroller.current?.scrollTo({ x: index * stride, animated: true });
  }, [index, stride]);

  const onSettle = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = Math.round(e.nativeEvent.contentOffset.x / stride);
    const clamped = Math.min(Math.max(page, 0), reviews.length - 1);
    if (clamped !== index) onChange(clamped);
  };

  return (
    <View style={styles.wrap}>
      <Text style={[styles.welcome, { color: colors.foreground }]}>
        {name.length > 0
          ? t('onboarding.social.welcomeNamed', { name })
          : t('onboarding.social.welcome')}
      </Text>

      {/* The wreaths are the reference's, and they are doing real work: they
          frame the number as an accolade, which is why the line reads as a
          community rather than as a statistic. */}
      <View style={styles.crest}>
        <HugeiconsIcon
          icon={LaurelWreathLeft02Icon}
          size={52}
          color={meter.label}
          strokeWidth={1.5}
        />
        <Text style={[styles.crestLabel, { color: colors.foreground }]}>
          {t('onboarding.social.crest')}
        </Text>
        <HugeiconsIcon
          icon={LaurelWreathRight02Icon}
          size={52}
          color={meter.label}
          strokeWidth={1.5}
        />
      </View>

      <View style={styles.rail}>
        <ScrollView
          ref={scroller}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={stride}
          snapToAlignment="start"
          onMomentumScrollEnd={onSettle}
          // Stretch, so every card takes the height of the tallest and the
          // rail does not change height as it pages.
          contentContainerStyle={styles.railContent}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
              width={cardWidth}
              card={colors.card}
              ink={colors.foreground}
              caption={meter.caption}
              track={meter.track}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.dots}>
        {reviews.map((review, i) => (
          <Dot key={review.name} active={i === index} track={meter.track} />
        ))}
      </View>
    </View>
  );
}

function Dot({ active, track }: { active: boolean; track: string }) {
  const on = useDerivedValue(
    () =>
      withTiming(active ? 1 : 0, {
        duration: PAGE_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [active],
  );

  // The active dot stretches rather than just recolouring: at 7pt a colour
  // change alone is too small a signal to catch out of the corner of the eye.
  const style = useAnimatedStyle(() => ({
    width: 7 + on.value * 13,
    backgroundColor: interpolateColor(on.value, [0, 1], [track, PRIMARY]),
  }));

  return <Animated.View style={[styles.dot, style]} />;
}

function ReviewCard({
  review,
  width,
  card,
  ink,
  caption,
  track,
}: {
  review: Testimonial;
  width: number;
  card: string;
  ink: string;
  caption: string;
  track: string;
}) {
  return (
    <View
      style={[styles.card, { width, backgroundColor: card, borderColor: track }]}>
      <View style={styles.stars}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={STAR} color={STAR_COLOR} weight="fill" />
        ))}
      </View>

      <Text style={[styles.quote, { color: ink }]}>
        {'“'}
        {review.before}{' '}
        <Text style={styles.quoteLead}>{review.lead}</Text>
        {review.after}
        {'”'}
      </Text>

      <Text style={[styles.name, { color: caption }]}>{review.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 4,
  },
  welcome: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: fonts.heavy,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  crest: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  crestLabel: {
    fontSize: 19,
    lineHeight: 25,
    fontFamily: fonts.semibold,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  rail: {
    flex: 1,
    justifyContent: 'center',
    // Out to the screen edges, so the next card can be cut by the display
    // rather than by a margin.
    marginHorizontal: -SIDE_PAD,
  },
  railContent: {
    paddingHorizontal: SIDE_PAD,
    gap: GAP,
    // Centre, not stretch. Stretching made every card as tall as the rail —
    // a quote sitting in the middle of a near-full-screen box, with the 32pt
    // squircle so small against it that the corner smoothing was invisible.
    // Hugging the text puts the radius back in proportion to the card.
    alignItems: 'center',
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 20,
    gap: 14,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
  quote: {
    fontSize: 19,
    lineHeight: 26,
    fontFamily: fonts.regular,
    letterSpacing: -0.3,
  },
  quoteLead: {
    fontFamily: fonts.bold,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 7,
    paddingTop: 18,
    paddingBottom: 4,
  },
  dot: {
    height: 7,
    borderRadius: 4,
  },
});
