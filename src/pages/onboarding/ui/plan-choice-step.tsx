import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  ReduceMotion,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { SegmentedControl } from '@/shared/ui/segmented-control';

import { PLAN_ART_FOCUS, PLAN_PHOTOS } from '../config/plan-photos';
import type { TrainingPlan } from '../model/plans';

/** Matches the step transition, so switching plans reads as the same gesture
 * the rest of the flow uses rather than as a different animation library. */
const SWAP_MS = 220;

export type PlanChoiceStepProps = {
  plans: readonly TrainingPlan[];
  index: number;
  /** Which one carries the badge. */
  recommended: number;
  /** Picks the photograph, the same one the plan screen just used. */
  sex: string | null;
  onChange: (index: number) => void;
};

/**
 * Two plans, one card.
 *
 * The alternative — both plans as cards, stacked — makes the user compare two
 * walls of text they have no basis to compare. A segmented control puts the
 * only real variable (how long) in the control, and leaves the card free to
 * describe one plan properly: what it is called, who it is for, and the two
 * things it will actually do.
 *
 * The recommendation is a badge on the card rather than a preselected segment
 * alone, because a quietly preselected tab is a default the user never notices
 * making. Both are used here: the segment opens on the recommendation *and*
 * says so on the artwork.
 */
export function PlanChoiceStep({
  plans,
  index,
  recommended,
  sex,
  onChange,
}: PlanChoiceStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const plan = plans[index];
  const photo = PLAN_PHOTOS[sex ?? 'female'] ?? PLAN_PHOTOS.female;
  // Slide the oversized image so the window sits over the runner rather than
  // over the middle of the frame. In percentages of the window's own height,
  // which is what `top` resolves against.
  const focus = PLAN_ART_FOCUS[sex ?? 'female'] ?? 0.32;
  const artTop = `${-(focus * ART_SCALE * 100 - 50)}%` as const;

  return (
    <View style={styles.wrap}>
      <SegmentedControl
        segments={plans.map((p) => p.tab)}
        selectedIndex={index}
        onChange={(next) => {
          Haptics.selectionAsync();
          onChange(next);
        }}
      />

      {/* Keyed on the plan, so the whole card is a fresh mount that fades in
          over the outgoing one. The card's *frame* is the styled view outside
          this, so the surface holds still and only its contents change. */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Animated.View
          key={plan.weeks}
          entering={FadeIn.duration(SWAP_MS)
            .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
            .reduceMotion(ReduceMotion.System)}
          exiting={FadeOut.duration(SWAP_MS / 2).reduceMotion(ReduceMotion.System)}>
          <View style={styles.art}>
            <Image source={photo} style={[styles.photo, { top: artTop }]} resizeMode="cover" />
            {/* Just enough shade for the wordmark to hold at this size — the
                photograph is doing the selling, not the scrim. */}
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  experimental_backgroundImage:
                    'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.10) 42%, rgba(0,0,0,0.45) 100%)',
                },
              ]}
            />
            <Text style={styles.wordmark}>{plan.wordmark}</Text>
            {index === recommended && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>RECOMMENDED</Text>
              </View>
            )}
          </View>

          <View style={styles.copy}>
            <View style={[styles.chip, { backgroundColor: meter.iconTile }]}>
              <Text style={[styles.chipText, { color: colors.foreground }]}>{plan.eyebrow}</Text>
            </View>
            <Text style={[styles.title, { color: colors.foreground }]}>{plan.title}</Text>
            <Text style={[styles.blurb, { color: meter.caption }]}>{plan.blurb}</Text>

            <View style={[styles.rule, { backgroundColor: meter.divider }]} />

            {plan.bullets.map((bullet) => (
              <View key={bullet} style={styles.bullet}>
                <HugeiconsIcon icon={Tick02Icon} size={17} color={PRIMARY} strokeWidth={3} />
                <Text style={[styles.bulletText, { color: meter.caption }]}>{bullet}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const ART_HEIGHT = 168;
/** How much taller than its window the image is rendered, so there is room to
 * slide it. Kept in step with `photo.height` below. */
const ART_SCALE = 3.2;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 22,
    gap: 16,
  },
  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 12,
    overflow: 'hidden',
  },
  art: {
    height: ART_HEIGHT,
    borderRadius: 18,
    borderCurve: 'continuous',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Taller than its window, so the card can slide it to the runner. `top` is
  // set per photograph at render time; the height here is `ART_SCALE`.
  photo: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '320%',
  },
  wordmark: {
    fontSize: 40,
    fontFamily: fonts.heavy,
    letterSpacing: -1.4,
    // Fixed white: it sits on a photograph, not on the page, so it must not
    // flip with the colour scheme.
    color: '#FFFFFF',
  },
  badge: {
    position: 'absolute',
    top: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderCurve: 'continuous',
    backgroundColor: PRIMARY,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: fonts.bold,
    letterSpacing: 0.8,
    color: '#FFFFFF',
  },
  copy: {
    paddingHorizontal: 6,
    paddingTop: 16,
    paddingBottom: 6,
    gap: 8,
  },
  chip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderCurve: 'continuous',
  },
  chipText: {
    fontSize: 11,
    fontFamily: fonts.bold,
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    letterSpacing: -0.5,
  },
  blurb: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.regular,
  },
  rule: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 6,
  },
  bullet: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.regular,
  },
});
