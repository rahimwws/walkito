import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { plural } from '@/shared/lib/format';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { StreakWeek } from '@/shared/ui/streak-week';

const BADGE_ART = require('@assets/achievements/streak-badge.png');

const BADGE = 184;
/** The card's corner. Generous, because a sheet this short with a small radius
 * reads as a bar stuck to the bottom of the screen rather than as a card. */
const RADIUS = 36;

/**
 * How hard the page behind is blurred.
 *
 * Enough to push it back and let the card come forward, not enough to hide
 * where the user was — the sheet is an aside, and an aside that erases its own
 * context reads as a screen change rather than as something laid on top.
 */
const BLUR = 28;

/** Out is quicker than in. Arriving wants to be watched; leaving is the user
 * having already decided, and a slow exit reads as the app hesitating. */
const IN_MS = 340;
const OUT_MS = 220;

/** How far the card travels. Enough to read as coming from below the screen,
 * short enough that it never looks like it is being thrown. */
const RISE = 44;

export type StreakSheetProps = {
  visible: boolean;
  onClose: () => void;
  /** Consecutive attended days. */
  current: number;
  /** Attended days since the plan began. */
  total: number;
  /** Sunday-first, seven entries — the shape `StreakWeek` reads. */
  week: readonly boolean[];
};

/**
 * What the streak means, opened from the capsule that shows it.
 *
 * A bottom sheet sized to its contents, not a page. The number in the header is
 * a bare figure with no units and no rule attached, and a streak is exactly the
 * kind of number people invent their own rules for — usually harsher ones than
 * the app's. So this exists mostly to say what counts, and an aside that
 * explains something should cost a glance rather than a whole screen.
 *
 * The week is the argument, not the decoration. Reading "you showed up Monday,
 * Tuesday and today" off seven cells is what makes the headline checkable, and
 * a number the user can check is one they will still trust on the morning it
 * says something they did not expect.
 */
export function StreakSheet({ visible, onClose, current, total, week }: StreakSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();

  /**
   * Mounted separately from `visible`, which is the whole trick.
   *
   * A `Modal` driven straight off the caller's flag is torn down the instant
   * the flag clears, so there is no longer anything on screen for an exit
   * animation to play on — reanimated's `exiting` never runs, and the sheet
   * simply blinks out. Owning the mount means the flag starts the *transition*
   * and the transition decides when the modal actually goes.
   */
  const [mounted, setMounted] = useState(false);
  /** 0 away, 1 arrived. One number drives the blur, the wash and the card, so
   * they cannot arrive or leave at different times. */
  const t = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      // A frame late on purpose: the modal has to exist before the transition
      // starts, or the first frames play against nothing and the card appears
      // already half-way up.
      const frame = requestAnimationFrame(() => {
        t.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    t.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        // Only when it ran to the end. Reopening mid-exit cancels this timing,
        // and unmounting then would pull the sheet out from under the animation
        // that is already bringing it back.
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, t]);

  /** The page behind, fading rather than dimming in steps. Opacity and not
   * `intensity`: expo-blur still tints its backdrop at zero, so a blur animated
   * down to nothing leaves a visible wash behind — the note in
   * `liquid-glass/copy.tsx` is about exactly this. */
  const backdrop = useAnimatedStyle(() => ({ opacity: t.value }));

  const dock = useAnimatedStyle(() => ({
    opacity: t.value,
    transform: [{ translateY: (1 - t.value) * RISE }],
  }));

  if (!mounted) return null;

  return (
    <Modal
      // Transparent, so the page stays visible behind the sheet. `pageSheet`
      // was doing the one thing this must not: taking the whole screen for an
      // aside the user can dismiss without answering.
      transparent
      animationType="none"
      // Unconditionally true, not `visible`. The component returns null until
      // it is mounted and stays mounted until the exit finishes, so by the time
      // this renders the modal always should be up — and handing it the
      // caller's flag instead would snap it shut on the first frame of the exit,
      // which is the very thing owning the mount was meant to prevent.
      visible
      statusBarTranslucent
      onRequestClose={onClose}>
      {/* Driven by hand rather than by `entering`/`exiting` builders. Two
          reasons, both learned here: an entering builder that fails to run
          leaves its subject stranded at opacity 0 — `GiftSheet` carries a note
          about a `FadeIn` that did exactly that, twice — and an exiting builder
          cannot run at all inside a modal whose visibility is what removed it.
          One shared value sidesteps both and keeps the two directions
          symmetrical. */}
      <View style={styles.fill}>
        {/* The app itself, pushed back. A flat scrim would dim the page; a
            blur keeps it recognisable while making it unmistakably the
            background — which is what says this is something laid on top
            rather than somewhere the user has navigated to. */}
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        {/* Tapping away closes it. Nothing here has to be answered, and a sheet
            that explains something should never trap the person reading it. */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close"
          style={styles.fill}
          onPress={onClose}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          {/* Half over the card and half in the air. The dock reserves the top
              half as padding and the badge is hung at the dock's own top edge,
              so its centre lands exactly on the card's, whatever the card grows
              to underneath. */}
          <Image
            source={BADGE_ART}
            resizeMode="contain"
            accessible={false}
            style={styles.badge}
          />

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.title, { color: colors.foreground }]}>
              {plural(current, 'Day')} Streak
            </Text>

            <Text style={[styles.blurb, { color: meter.caption }]}>
              {/* The rule, stated plainly. It is the thing the number cannot say
                  on its own, and "a check-in or a session or a rest day" is a
                  far kinder rule than the one a user assumes. */}
              A day counts when you check in, train, or the plan gives you a rest
              day. {plural(total, 'day')} so far.
            </Text>

            <View style={styles.week}>
              <StreakWeek done={week} />
            </View>

            {/* "Got it", not "Claim". The reference hands over a reward; this
                hands over an explanation, and a button promising something to
                collect would be writing a cheque the app cannot cash. */}
            <PrimaryButton label="Got it" onPress={onClose} />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  /** A trace of ink over the blur. Blur alone leaves a bright page bright, and
   * the card needs something to sit against on the light scheme. */
  wash: {
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
    // The room the badge needs above the card.
    paddingTop: BADGE / 2,
  },
  badge: {
    position: 'absolute',
    // Hung at the dock's top edge: with `paddingTop` above equal to half the
    // badge, the card's top edge cuts it exactly in half.
    top: 0,
    alignSelf: 'center',
    width: BADGE,
    height: BADGE,
    // Over the card, not under it — the whole effect is the badge sitting proud
    // of the surface.
    zIndex: 2,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingBottom: 18,
    // Clears the half of the badge that overhangs it.
    paddingTop: BADGE / 2 + 14,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.heavy,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  blurb: {
    fontSize: 15,
    fontFamily: fonts.medium,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 6,
    paddingHorizontal: 4,
  },
  week: {
    marginTop: 20,
    marginBottom: 20,
  },
});
