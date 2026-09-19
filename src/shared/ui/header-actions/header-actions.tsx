import DropletIcon from '@hugeicons/core-free-icons/DropletIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useState, type ReactNode } from 'react';
import { GlassContainer, GlassView } from 'expo-glass-effect';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { ProfileMenu } from '@/shared/ui/profile-menu';

export type HeaderActionsProps = {
  /** Days in the current streak. Rendered as the bare number — the flame
   * beside it already says what is being counted, and "7 Days" spent a third
   * of the header restating it. */
  streak?: number;
  /** Glyph in the streak capsule. */
  streakIcon?: IconSvgElement;
  /** Colour for that glyph. A streak is the one thing in the header worth
   * lighting up, and tinting only the flame keeps the count beside it reading
   * as text rather than as part of a badge. */
  streakTint?: string;
  /** A ready-made glyph, for the cases the stroke set cannot serve — a streak
   * flame has to be solid, and the icon set this app standardises on ships
   * outlines only. Wins over `streakIcon` when both are given. */
  streakGlyph?: ReactNode;
  /** Opens whatever explains the streak. Omitted, the capsule stays a readout
   * and is announced as text rather than as a control. */
  onStreakPress?: () => void;
  /** Pushes the streak to one edge and the trailing group to the other, for a
   * header with nothing between them. */
  spread?: boolean;
  /** Shows the reward capsule beside the profile menu. Omitted, there is
   * nothing to collect and the header stays quiet. */
  gift?: boolean;
  onGift?: () => void;
  onReferFriend?: () => void;
  /** Opens the profile screen, which is where settings and invites now live. */
  onProfile?: () => void;
  /** 0–1: how far the program sheet is open. Drives the swap below. */
  swapProgress?: SharedValue<number>;
  /** Rises in the middle of the header while the sheet is up: the weekday over
   * the day of the month, directly under the Dynamic Island. */
  centre?: { title: string; subtitle: string };
};

/**
 * How far the row climbs once the sheet is up.
 *
 * With the band arriving beneath it the header has the top of the screen to
 * itself, and sitting at the same offset it uses on a full page left it looking
 * dropped into the bottom of its own card. Rising a little re-centres it in the
 * space it actually has.
 */
const OPEN_LIFT = 16;

/**
 * The profile trigger's real footprint, and the row's gap — the gift slides by
 * exactly their sum, so it lands where the profile was.
 *
 * Read from `profile-menu.ios.tsx`, not guessed: its capsule is a 24pt glyph
 * plus 16 of padding. A rounder-looking 44 here overshot by four points and
 * left the gift sitting proud of the edge the rest of the row lines up on.
 */
const PROFILE_SLOT = 40;
const TRAILING_GAP = 8;

/** The mascot, holding the thing on offer. */
const GIFT_ART = require('@assets/home/mascot-gift.png');

/** One beat of the shake. Four of these run back to back, so the whole thing
 * is over in under half a second — long enough to read as the box being
 * rattled, short enough that a second tap is never queued behind it. */
const SHAKE_MS = 70;
const SHAKE_DEG = 11;

/**
 * The trailing capsules in a screen header: a streak count, then the profile
 * menu.
 *
 * Note the profile trigger is a SwiftUI `Menu` on iOS, not a `GlassView`, so
 * it does not fluidly merge with the streak capsule the way two RN glass
 * siblings would. That is the price of getting the real system dropdown; the
 * `glassEffect` modifier keeps the two visually consistent.
 */
export function HeaderActions({
  streak,
  streakIcon = DropletIcon,
  onStreakPress,
  streakTint,
  streakGlyph,
  spread = false,
  gift = false,
  onGift = () => {},
  onReferFriend = () => {},
  onProfile = () => {},
  swapProgress,
  centre,
}: HeaderActionsProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];

  const climb = useAnimatedStyle(() => ({
    transform: [{ translateY: -(swapProgress?.value ?? 0) * OPEN_LIFT }],
  }));

  return (
    // The climb rides a wrapper, not the container itself: `GlassContainer` is
    // a native view that takes plain styles only, and handing it an animated
    // one is a type error at best and a dropped animation at worst. The wrapper
    // is a row so the container's `flex: 1` still spans the width.
    <Animated.View style={[styles.climb, climb]}>
      <GlassContainer spacing={8} style={[styles.row, spread && styles.spread]}>
        {streak != null && (
          // The touchable is OUTSIDE the glass, and that ordering is the whole
          // reason this capsule opens on the first tap.
          //
          // `isInteractive` sets `UIGlassEffect.isInteractive`, which installs
          // the system's own press recogniser on the effect view. Anything
          // mounted inside a `GlassView` lands in `glassEffectView.contentView`
          // — a descendant of that recogniser — so a `Pressable` in there was
          // competing with it for the same touch and losing the first one. As
          // an ancestor it takes the touch before the glass ever sees it, and
          // the material still flexes underneath.
          //
          // `ActionButton` has always been built this way; the two capsules in
          // this header were the exceptions.
          //
          // Announced as a control only when one is actually behind it: with no
          // handler the capsule is the text it looks like. The count alone read
          // as a bare "7", so the label spells the noun out either way.
          <Pressable
            accessible
            accessibilityRole={onStreakPress != null ? 'button' : 'text'}
            accessibilityLabel={
              onStreakPress != null
                ? `${streak} day streak, see what counts`
                : `${streak} day streak`
            }
            disabled={onStreakPress == null}
            onPress={onStreakPress}
            style={({ pressed }) => pressed && { opacity: 0.6 }}>
            <GlassView isInteractive style={styles.streak}>
              {streakGlyph ?? (
                <HugeiconsIcon
                  icon={streakIcon}
                  size={22}
                  color={streakTint ?? colors.foreground}
                  strokeWidth={streakTint != null ? 2.3 : 1.9}
                />
              )}
              <Text style={[styles.streakCount, { color: colors.foreground }]}>{streak}</Text>
            </GlassView>
          </Pressable>
        )}

        {/* Absolutely placed, so it can occupy the middle of the header without
            being part of the row that has to hold still around it. */}
        {centre != null && <Centre progress={swapProgress} {...centre} />}

        <View style={styles.trailing}>
          {gift && (
            // Slides right into the space the profile is vacating, rather than
            // snapping there once it has gone: the capsule is the one control
            // that survives the transition, so it should visibly keep its place
            // in the row.
            <Shift progress={swapProgress} by={PROFILE_SLOT + TRAILING_GAP}>
              <GiftCapsule onPress={onGift} tint={colors.foreground} />
            </Shift>
          )}
          <SlideOut progress={swapProgress}>
            <ProfileMenu onPress={onProfile} />
          </SlideOut>
        </View>
      </GlassContainer>
    </Animated.View>
  );
}

/**
 * The reward capsule.
 *
 * The mascot shakes when it is tapped — a present that rattles when you pick it
 * up. The motion is on the artwork alone rather than the whole capsule: shaking
 * the glass would drag the label along with it, and text that wobbles reads as
 * a glitch rather than as an object being handled.
 */
function GiftCapsule({ onPress, tint }: { onPress: () => void; tint: string }) {
  const shake = useSharedValue(0);

  const wobble = useAnimatedStyle(() => ({
    transform: [{ rotate: `${shake.value * SHAKE_DEG}deg` }, { scale: 1 + Math.abs(shake.value) * 0.06 }],
  }));

  const rattle = () => {
    // Out, past centre, back, and settle. Ending on an explicit 0 matters: a
    // sequence that stops on its last extreme would leave the box tilted.
    const beat = (to: number) =>
      withTiming(to, {
        duration: SHAKE_MS,
        easing: Easing.inOut(Easing.quad),
        reduceMotion: ReduceMotion.System,
      });
    shake.value = withSequence(beat(1), beat(-1), beat(0.6), beat(-0.4), beat(0));
    onPress();
  };

  return (
    // Outside the glass, for the reason spelled out on the streak capsule: a
    // touchable inside an interactive `GlassView` loses its first tap to the
    // material's own press recogniser.
    <Pressable accessibilityRole="button" accessibilityLabel="Get your gift" onPress={rattle}>
      <GlassView isInteractive style={styles.gift}>
        <Animated.Image
          source={GIFT_ART}
          style={[styles.giftArt, wobble]}
          resizeMode="contain"
        />
        <Text style={[styles.giftLabel, { color: tint }]}>Gift</Text>
      </GlassView>
    </Pressable>
  );
}

/**
 * Leaves as the sheet arrives, and stops taking touches on the way out.
 *
 * It slides off the edge rather than fading, because what it wraps is liquid
 * glass: an animated opacity over a glass view renders it as a flat grey slab,
 * which is the same reason the tab pill leaves by moving. Sliding right also
 * reads correctly — it goes out the way the gift comes in.
 *
 * The `pointerEvents` is a real prop off React state, not an animated style.
 * That one has to be certain: the gift slides into exactly this control's
 * place, so a profile that has left the screen but is still live would sit on
 * top of the gift and eat every tap meant for it.
 */
function SlideOut({ progress, children }: { progress?: SharedValue<number>; children: ReactNode }) {
  const [gone, setGone] = useState(false);

  useAnimatedReaction(
    () => (progress?.value ?? 0) > 0.5,
    (next, previous) => {
      if (next !== previous) runOnJS(setGone)(next);
    },
  );

  const style = useAnimatedStyle(() => {
    const p = progress?.value ?? 0;
    return {
      transform: [{ translateX: p * (PROFILE_SLOT + TRAILING_GAP + 24) }, { scale: 1 - p * 0.12 }],
    };
  });

  return (
    <Animated.View pointerEvents={gone ? 'none' : 'auto'} style={style}>
      {children}
    </Animated.View>
  );
}

/** Travels sideways by exactly the width of what is leaving beside it. */
function Shift({
  progress,
  by,
  children,
}: {
  progress?: SharedValue<number>;
  by: number;
  children: ReactNode;
}) {
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: (progress?.value ?? 0) * by }],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
}

/**
 * The date, in the middle of the header, while the sheet is up.
 *
 * It rises rather than simply fading: two lines appearing in place read as a
 * label being switched on, where a short climb reads as the header taking on a
 * title it did not have before.
 */
function Centre({
  progress,
  title,
  subtitle,
}: {
  progress?: SharedValue<number>;
  title: string;
  subtitle: string;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const style = useAnimatedStyle(() => {
    const p = progress?.value ?? 0;
    return {
      opacity: p,
      transform: [{ translateY: (1 - p) * 8 }],
    };
  });

  return (
    <Animated.View pointerEvents="none" style={[styles.centre, style]}>
      <Text style={[styles.centreTitle, { color: colors.foreground }]}>{title}</Text>
      <Text style={[styles.centreSub, { color: meter.caption }]}>{subtitle}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  climb: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  spread: {
    flex: 1,
    justifyContent: 'space-between',
  },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingLeft: 13,
    paddingRight: 16,
    paddingVertical: 9,
    borderRadius: 50,
    borderCurve: 'continuous',
  },
  streakCount: {
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: TRAILING_GAP,
  },
  centre: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centreTitle: {
    fontSize: 17,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  centreSub: {
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  // The padding is back on the glass now that the touchable wraps it: the
  // capsule is the whole target either way, and one view fewer is one fewer
  // thing between a finger and the handler.
  gift: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingLeft: 6,
    paddingRight: 14,
    // One point, not five: the artwork is 38pt, and the streak capsule beside
    // it stands 40. Any more here and the gift alone decides how tall the row
    // is, leaving its two neighbours looking sunk into it.
    paddingVertical: 1,
    borderRadius: 50,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  giftArt: { width: 38, height: 38 },
  giftLabel: {
    fontSize: 17,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
});
