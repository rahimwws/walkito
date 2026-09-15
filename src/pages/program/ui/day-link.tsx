import { ArrowDownIcon, FireIcon } from 'phosphor-react-native';
import { memo, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { accents, fonts, meterColors } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/** Three dots and a head. Few enough to read as a hint of a path rather than as
 * a dashed border. */
const DOTS = 3;
const DOT = 4;

/** One dot's travel, and the stagger between them. Together they make the run
 * read as moving downward rather than as three things blinking. */
const TRAVEL_MS = 1500;
const STAGGER_MS = 150;

export type DayLinkProps = {
  /** Dimmed, for the stretch of plan the user has not reached. */
  ahead?: boolean;
};

/**
 * The step from one day to the next.
 *
 * A dotted run with an arrowhead, drawn in the gap between two cards. It says
 * the list has a direction, which a stack of equally spaced cards does not —
 * and the direction is the whole claim of a plan.
 *
 * The dots pulse downward on a loop. Slow on purpose: this is background motion
 * on a screen people read, and anything faster turns a hint into a spinner.
 */
export const DayLink = memo(function DayLink({ ahead = false }: DayLinkProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colour = ahead ? meter.track : meter.unit;

  return (
    <View pointerEvents="none" style={styles.link}>
      {Array.from({ length: DOTS }, (_, i) => (
        <Dot key={i} index={i} colour={colour} />
      ))}
      <ArrowDownIcon size={23} weight="bold" color={colour} />
    </View>
  );
});

/**
 * One dot of the run.
 *
 * Its own component because a hook cannot be called from inside a `map`, and
 * its own loop because the stagger is what makes three dots read as one
 * movement.
 */
const Dot = memo(function Dot({ index, colour }: { index: number; colour: string }) {
  const t = useSharedValue(0);

  useEffect(() => {
    t.value = withDelay(
      index * STAGGER_MS,
      withRepeat(
        withTiming(1, {
          duration: TRAVEL_MS,
          easing: Easing.inOut(Easing.quad),
          reduceMotion: ReduceMotion.System,
        }),
        -1,
        false,
      ),
    );
  }, [index, t]);

  // Brightest as the wave passes, faint either side of it. Opacity only: moving
  // the dots themselves would need the gap to be taller than the dots need.
  const style = useAnimatedStyle(() => ({
    opacity: interpolate(t.value, [0, 0.35, 0.7, 1], [0.25, 1, 0.25, 0.25]),
  }));

  return <Animated.View style={[styles.dot, { backgroundColor: colour }, style]} />;
});

export type StreakMilestoneProps = {
  /** Days of the plan reached at this point in the list. */
  days: number;
};

/**
 * A marker every third day, between the arrows.
 *
 * The fire and the count are Home's, deliberately: the capsule in that header
 * is where the user learns what the flame means, and a second glyph for the
 * same idea would be a second thing to learn. It marks a position in the plan
 * rather than an achievement — nothing here is earned yet, which is why it
 * carries no verb.
 */
export const StreakMilestone = memo(function StreakMilestone({ days }: StreakMilestoneProps) {
  const scheme = useColorScheme();
  const accent = accents[scheme].orange;

  return (
    <View style={styles.milestone}>
      <View style={[styles.chip, { backgroundColor: accent.track }]}>
        <FireIcon size={15} weight="fill" color={accent.fill} />
        <Text style={[styles.chipText, { color: accent.fill }]}>{days} days</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  dot: {
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
  },
  milestone: {
    alignItems: 'center',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  chipText: {
    fontSize: 13,
    fontFamily: fonts.bold,
    letterSpacing: -0.1,
  },
});
