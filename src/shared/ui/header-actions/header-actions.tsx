import DropletIcon from '@hugeicons/core-free-icons/DropletIcon';
import GiftIcon from '@hugeicons/core-free-icons/GiftIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';

import { fonts } from '@/shared/config';
import { CHROME_MAX_FONT_SCALE, colors, target } from '@/shared/config/tokens';
import { useT } from '@/shared/lib/i18n';
import { NavGlass } from '@/shared/ui/glass';
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
  /** Drawn inside the streak capsule after the count: Home's banked freezes. */
  streakAccessory?: ReactNode;
  /** Said after the capsule's own label, for what `streakAccessory` shows. */
  streakAccessoryLabel?: string;
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
 * The profile button is a 48pt circle, the minimum touch target.
 */
const PROFILE_SLOT = target.min;
const TRAILING_GAP = 8;

/**
 * The trailing capsules in a screen header: a streak count, then the profile
 * button. The header is the navigation layer, so the capsules are `NavGlass`:
 * Liquid Glass on iOS 26+, opaque white with a hairline everywhere else.
 */
export function HeaderActions({
  streak,
  streakIcon = DropletIcon,
  onStreakPress,
  streakTint,
  streakGlyph,
  streakAccessory,
  streakAccessoryLabel,
  spread = false,
  gift = false,
  onGift = () => {},
  onReferFriend = () => {},
  onProfile = () => {},
  swapProgress,
  centre,
}: HeaderActionsProps) {
  const climb = useAnimatedStyle(() => ({
    transform: [{ translateY: -(swapProgress?.value ?? 0) * OPEN_LIFT }],
  }));

  return (
    <Animated.View style={[styles.climb, climb]}>
      <View style={[styles.row, spread && styles.spread]}>
        {streak != null && (
          <StreakCapsule
            streak={streak}
            onPress={onStreakPress}
            glyph={streakGlyph}
            icon={streakIcon}
            tint={streakTint}
            accessory={streakAccessory}
            accessoryLabel={streakAccessoryLabel}
          />
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
              <GiftCapsule onPress={onGift} />
            </Shift>
          )}
          <SlideOut progress={swapProgress}>
            <ProfileMenu onPress={onProfile} />
          </SlideOut>
        </View>
      </View>
    </Animated.View>
  );
}

export type StreakCapsuleProps = {
  streak: number;
  onPress?: () => void;
  glyph?: ReactNode;
  icon?: IconSvgElement;
  tint?: string;
  /** After the count, inside the same capsule, behind a hairline gap. */
  accessory?: ReactNode;
  accessoryLabel?: string;
};

/**
 * The streak capsule from Home's header, on its own — the plan screen wears the
 * same one in its header, so the flame and the count read the same everywhere.
 *
 * The touchable is OUTSIDE the glass: an interactive glass view installs its
 * own press recogniser, and a `Pressable` inside it loses the first tap. It
 * never dims on press either, because glass under opacity stops rendering.
 *
 * Announced as a control only when one is actually behind it: with no handler
 * the capsule is the text it looks like. The count alone read as a bare "7", so
 * the label spells the noun out either way.
 */
export function StreakCapsule({
  streak,
  onPress,
  glyph,
  icon = DropletIcon,
  tint,
  accessory,
  accessoryLabel,
}: StreakCapsuleProps) {
  const t = useT();
  const base = t('streakSheet.currentA11y', { count: streak });
  return (
    <Pressable
      accessible
      accessibilityRole={onPress != null ? 'button' : 'text'}
      accessibilityLabel={accessoryLabel != null ? `${base}. ${accessoryLabel}` : base}
      disabled={onPress == null}
      onPress={onPress}>
      <NavGlass interactive style={styles.capsule}>
        {glyph ?? (
          <HugeiconsIcon icon={icon} size={22} color={tint ?? colors.text} strokeWidth={tint != null ? 2.3 : 1.9} />
        )}
        <Text style={styles.streakCount} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
          {streak}
        </Text>
        {accessory != null && (
          <>
            <View style={styles.streakDivider} />
            {accessory}
          </>
        )}
      </NavGlass>
    </Pressable>
  );
}

/** The reward capsule. */
function GiftCapsule({ onPress }: { onPress: () => void }) {
  const t = useT();

  return (
    // Outside the glass, for the reason spelled out on the streak capsule.
    <Pressable accessibilityRole="button" accessibilityLabel={t('gift.openA11y')} onPress={onPress}>
      <NavGlass interactive style={styles.capsule}>
        <HugeiconsIcon icon={GiftIcon} size={22} color={colors.text} strokeWidth={1.9} />
        <Text style={styles.giftLabel} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
          {t('gift.capsule')}
        </Text>
      </NavGlass>
    </Pressable>
  );
}

/**
 * Leaves as the sheet arrives, and stops taking touches on the way out.
 *
 * It slides off the edge rather than fading, because what it wraps is glass:
 * glass under an animated opacity stops rendering. Sliding right also reads
 * correctly — it goes out the way the gift comes in.
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
  const style = useAnimatedStyle(() => {
    const p = progress?.value ?? 0;
    return {
      opacity: p,
      transform: [{ translateY: (1 - p) * 8 }],
    };
  });

  return (
    <Animated.View pointerEvents="none" style={[styles.centre, style]}>
      <Text style={styles.centreTitle} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
        {title}
      </Text>
      <Text style={styles.centreSub} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
        {subtitle}
      </Text>
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
  capsule: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    minHeight: target.min,
    paddingLeft: 13,
    paddingRight: 16,
    borderRadius: target.min / 2,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  streakCount: { ...fonts.semibold(17), color: colors.text },
  streakDivider: {
    width: StyleSheet.hairlineWidth * 2,
    height: 18,
    marginHorizontal: 1,
    backgroundColor: colors.separator,
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
  centreTitle: { ...fonts.bold(17, -0.3), color: colors.text },
  centreSub: { ...fonts.regular(17), color: colors.text2 },
  giftLabel: { ...fonts.semibold(17, -0.2), color: colors.text },
});
