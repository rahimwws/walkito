import LockIcon from '@hugeicons/core-free-icons/LockIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { accents, fonts, meterColors, palette, raised, type AccentName } from '@/shared/config';
import { mix, shade } from '@/shared/lib/color';
import { SETTLE_EASING } from '@/shared/lib/motion';
import { MascotStill, type MascotRig } from '@/shared/ui/mascot';
import { Raised, useRaisedScheme } from '@/shared/ui/raised';
import { useSplashRevealed } from '@/shared/ui/splash';

import { stickerTilt } from './tilt';

export type StickerSize = 'xs' | 'sm' | 'md' | 'lg';
export type StickerState = 'earned' | 'locked' | 'new';

/** The sticker's side, its die-cut band included, and the lip under it. */
const SIZES: Record<StickerSize, { side: number; band: number; lip: number }> = {
  xs: { side: 36, band: 2, lip: 0 },
  sm: { side: 64, band: 3, lip: 2 },
  md: { side: 96, band: 3, lip: 3 },
  lg: { side: 160, band: 3, lip: 4 },
};

/** How far an earned face leans to its accent. */
const FACE_TINT = { light: 0.16, dark: 0.22 } as const;
const LIP_SHADE = 0.2;
/** A locked sticker is the idle pose's ghost. */
const LOCKED_OPACITY = 0.28;
const LOCK_BADGE = 20;
/** The "new" arrival: from 60% and straight, onto its tilt. */
const POP_MS = 420;
const POP_FROM = 0.6;

export type StickerTileProps = {
  /** The pose. */
  rig: MascotRig;
  /** One of the rig's faces, when not its own first one. */
  mascotFace?: string;
  /**
   * `earned` sits in the album; `new` arrives once (a pop onto its tilt and a
   * medium tap) as soon as its screen is in view; `locked` is the idle pose's
   * ghost behind a lock.
   */
  state: StickerState;
  accent: AccentName;
  size: StickerSize;
  /** Seeds the tilt, so a sticker sits at the same slant everywhere. */
  id: string;
  /** A caption under it: the sticker's name. */
  label?: string;
  /**
   * Holds a `new` sticker's arrival. For a surface that is mounted but not in
   * view, which `useIsFocused` cannot see: the program overlay stays mounted
   * inside the tabs and reports focused while closed. The arrival plays once
   * the host lets go, so it is seen.
   */
  paused?: boolean;
  /**
   * Arrives without its tap. For a sticker made `new` in the same moment as
   * something that already fires one: a quest's success, a sheet opening.
   */
  quiet?: boolean;
  onPress?: () => void;
  /** "First session sticker, earned", from the catalogue. */
  accessibilityLabel: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * One sticker in the album: a mascot pose, die-cut with a white band, stuck on
 * slightly askew and standing on a lip.
 *
 * A sticker is earned for doing something, never for a number: a first
 * session, a first test whatever its result, a rest day kept. The earning
 * lives in `features/stickers`; this only draws it. On a share card it is the
 * pose and the day count, never a health figure.
 *
 * At most one arrives as `new` a day, and the host decides which; stickers
 * earned while away go into the album as `earned`, without a fuss.
 */
export function StickerTile({
  rig,
  mascotFace,
  state,
  accent,
  size,
  id,
  label,
  paused = false,
  quiet = false,
  onPress,
  accessibilityLabel,
  style,
}: StickerTileProps) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const meter = meterColors[scheme];
  const { side, band, lip } = SIZES[size];
  const inner = side - band * 2;
  const radius = Math.round(inner * 0.28);
  const tilt = stickerTilt(id);
  const locked = state === 'locked';

  const face = mix(palette[scheme].card, accents[scheme][accent].fill, FACE_TINT[scheme]);

  // ── the arrival ────────────────────────────────────────────────────────
  const focused = useIsFocused();
  const revealed = useSplashRevealed();
  const pop = useSharedValue(state === 'new' ? 0 : 1);
  const played = useRef(false);
  useEffect(() => {
    if (state !== 'new') {
      // Ready to arrive again if it is ever made new again.
      played.current = false;
      pop.value = 1;
      return;
    }
    if (played.current) return;
    // Held out of sight until it can be seen arriving: a sticker that popped
    // behind the splash, on a hidden tab or in a closed overlay was earned for
    // nothing.
    if (!focused || paused || !revealed) {
      pop.value = 0;
      return;
    }
    played.current = true;
    const land = () => {
      if (quiet) return;
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    };
    pop.value = withSequence(
      withTiming(0, { duration: 0 }),
      withTiming(
        1,
        { duration: POP_MS, easing: SETTLE_EASING, reduceMotion: ReduceMotion.System },
        (finished) => {
          'worklet';
          if (finished) runOnJS(land)();
        },
      ),
    );
  }, [state, focused, paused, revealed, quiet, pop]);

  const placed = useAnimatedStyle(() => ({
    opacity: locked ? 1 : pop.value,
    transform: [
      { scale: locked ? 1 : POP_FROM + (1 - POP_FROM) * pop.value },
      { rotate: `${locked ? 0 : tilt * pop.value}deg` },
    ],
  }));

  const art = (
    <View
      style={[
        styles.art,
        {
          width: inner,
          height: inner,
          borderRadius: radius,
          backgroundColor: locked ? tokens.lockedFace : face,
        },
        locked && { borderWidth: 2, borderColor: tokens.edge },
      ]}>
      <View style={locked && { opacity: LOCKED_OPACITY }}>
        <MascotStill
          rig={rig}
          size={Math.round(inner * 0.78)}
          face={mascotFace}
          surface={locked ? tokens.lockedFace : face}
        />
      </View>
      {locked && (
        <View style={[styles.lock, { backgroundColor: meter.track }]}>
          <HugeiconsIcon icon={LockIcon} size={12} color={meter.unit} strokeWidth={2.2} />
        </View>
      )}
    </View>
  );

  return (
    <View style={[styles.outer, style]}>
      <Animated.View style={placed}>
        <Raised
          // Locked is flat and has no band: it is a place for a sticker, not one.
          face={locked ? 'transparent' : tokens.surface}
          lip={locked ? 'transparent' : shade(face, LIP_SHADE)}
          depth={locked ? 0 : lip}
          radius={radius + band}
          onPress={onPress}
          accessibilityRole={onPress != null ? 'button' : 'image'}
          accessibilityLabel={accessibilityLabel}
          contentStyle={{ padding: band }}>
          {art}
        </Raised>
      </Animated.View>
      {label != null && (
        <Text
          style={[styles.label, { color: locked ? meter.caption : palette[scheme].foreground, maxWidth: side + 24 }]}
          numberOfLines={2}
          maxFontSizeMultiplier={1.3}>
          {label}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
  },
  art: {
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  lock: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: LOCK_BADGE,
    height: LOCK_BADGE,
    borderRadius: LOCK_BADGE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...fonts.bold(13),
    marginTop: 8,
    textAlign: 'center',
  },
});
