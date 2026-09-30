import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { COUNT_IN_FROM, countInAt } from '../model/count-in';
import { playCountInCue, preloadCountInSounds } from '../model/count-in-sound';

export type CountInOverlayProps = {
  /** Wall-clock ms the count started. `null` hides the overlay. */
  from: number | null;
  /** "Get ready" for the first move of a sitting, "Next up" after it. */
  eyebrow: string;
  /** The move that is about to start. */
  title: string;
  /** Where the overlay begins, measured from the top of its host — the height
   * of whatever header has to stay usable above it. */
  top?: number;
  /** At go, or on a tap. Called exactly once per `from`. */
  onDone: () => void;
};

/** How often the count is re-read off the wall clock. Ten times a second puts
 * each number on screen within a tenth of its second, which is as close as a
 * person counting along can hear. */
const POLL_MS = 100;

const FADE_IN_MS = 180;
/** Long enough for "Go" to register as a word rather than a flash. */
const GO_HOLD_MS = 140;
const FADE_OUT_MS = 240;

/** Each number lands from a little larger and a little fainter, the way a
 * count is said: with a beat on it. */
const POP_FROM = 1.18;
const POP_MS = 420;

/** The number is the screen. Sized to be read from where the phone actually
 * is during a session — propped two metres away — not from arm's length. */
const NUMBER_SIZE = 168;

/**
 * Three, two, one, go — before a move starts.
 *
 * The person using this is not holding the phone. They pressed Continue, or
 * Start, and now have to put the phone down, step back and find their footing;
 * a clock that began on the press was a clock that spent the first five seconds
 * of every move counting a walk to the wall. The count gives them that time
 * back, and says out loud — a tick on each number, a firmer cue on go, and a
 * tap on the wrist to match — exactly when the work begins.
 *
 * Laid over the player below its header rather than over the whole screen, so
 * the way out and the way to say it hurts stay where they always are. A tap
 * anywhere on it starts the move at once, for the person who is already in
 * position and does not want to wait three seconds to be told so.
 *
 * Driven off the wall clock rather than counted in ticks: see `countInAt`. The
 * interval only decides how soon a change is noticed, never what the number
 * is, so a late frame or a trip to the background cannot stretch the count.
 *
 * Mounted and unmounted by hand around one shared value, never by `entering` /
 * `exiting` builders — an entering builder that fails to run leaves its
 * subject stranded at opacity 0, and here that would be an invisible layer
 * swallowing every tap on the player.
 */
export function CountInOverlay({ from, eyebrow, title, top = 0, onDone }: CountInOverlayProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [mounted, setMounted] = useState(from != null);
  /** The number on screen; 0 is go. */
  const [shown, setShown] = useState(COUNT_IN_FROM);
  /** The `from` that has already reached go. The overlay stops taking touches
   * the instant it does, so the player underneath is usable while it fades. */
  const [finishedFor, setFinishedFor] = useState<number | null>(null);

  const fade = useSharedValue(0);
  const pop = useSharedValue(1);

  /** Held behind refs so the interval, registered once per count, always
   * calls the host's latest callback and compares against the latest count. */
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const fromRef = useRef(from);
  fromRef.current = from;
  /** The `from` `onDone` has been called for. A ref as well as the state above,
   * because a tap and a poll can land in the same frame and both would read
   * the state before either had re-rendered. */
  const doneFor = useRef<number | null>(null);
  /** Whether the fade-out is already under way, so hiding the overlay after go
   * does not restart it and cut the "Go" short. */
  const leaving = useRef(false);

  const landNumber = useCallback(
    (next: number) => {
      setShown(next);
      pop.value = withSequence(
        withTiming(POP_FROM, { duration: 0 }),
        withTiming(1, {
          duration: POP_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        }),
      );
    },
    [pop],
  );

  const fadeOut = useCallback(
    (delay: number) => {
      if (leaving.current) return;
      leaving.current = true;
      fade.value = withDelay(
        delay,
        withTiming(
          0,
          { duration: FADE_OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
          (finished) => {
            // Only when it ran to the end: a new count arriving mid-fade
            // cancels this, and unmounting then would pull the overlay out from
            // under the animation already bringing it back.
            if (finished) runOnJS(setMounted)(false);
          },
        ),
      );
    },
    [fade],
  );

  /** Go, from the clock or from a tap. Once per count, whichever is first. */
  const go = useCallback(() => {
    const current = fromRef.current;
    if (current == null || doneFor.current === current) return;
    doneFor.current = current;
    setFinishedFor(current);
    landNumber(0);
    playCountInCue('go');
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    fadeOut(GO_HOLD_MS);
    onDoneRef.current();
  }, [landNumber, fadeOut]);

  useEffect(() => {
    if (from == null) {
      fadeOut(0);
      return undefined;
    }
    preloadCountInSounds();
    leaving.current = false;
    setMounted(true);
    fade.value = withTiming(1, {
      duration: FADE_IN_MS,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });

    let said: number | null = null;
    const read = () => {
      if (doneFor.current === from) return;
      const next = countInAt(Date.now() - from);
      if (next === said) return;
      said = next;
      if (next <= 0) {
        go();
        return;
      }
      landNumber(next);
      playCountInCue('tick');
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    };
    read();
    const id = setInterval(read, POLL_MS);
    return () => clearInterval(id);
  }, [from, fade, fadeOut, go, landNumber]);

  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));
  const numberStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pop.value }],
    // Fainter the larger it is, so the pop reads as the number arriving.
    opacity: 1 - (pop.value - 1) * 3,
  }));

  if (!mounted) return null;

  const counting = from != null && finishedFor !== from;

  return (
    <Animated.View
      style={[styles.host, { top }, hostStyle]}
      pointerEvents={counting ? 'auto' : 'none'}>
      {/* The demonstration stays faintly there behind the number, paused on
          its first frame — the shape of the move is worth seeing while
          getting into position for it. */}
      <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={30} style={styles.fill} />
      <View style={[styles.fill, styles.scrim, { backgroundColor: colors.background }]} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={title}
        accessibilityHint={t('player.countIn.tapToStart')}
        onPress={go}
        style={styles.fill}>
        <View style={styles.middle}>
          <Text style={[styles.eyebrow, { color: meter.label }]}>{eyebrow}</Text>
          <Text style={[styles.title, { color: colors.foreground }]} numberOfLines={2}>
            {title}
          </Text>
          <Animated.Text
            accessibilityLiveRegion="assertive"
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[styles.number, { color: colors.foreground }, numberStyle]}>
            {shown > 0 ? String(shown) : t('player.countIn.go')}
          </Animated.Text>
        </View>

        <Text
          style={[
            styles.caption,
            { color: meter.caption, paddingBottom: Math.max(insets.bottom, 20) + 24 },
          ]}>
          {t('player.countIn.tapToStart')}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  /** Over the player's content, under its sheets — the pain question and the
   * closing sheet both sit at 100. */
  host: { position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 50 },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** The page colour over the blur, not quite opaque. */
  scrim: { opacity: 0.74 },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  eyebrow: fonts.semibold(16, -0.1),
  title: {
    ...fonts.heavy(28, -0.7),
    textAlign: 'center',
    marginTop: 6,
  },
  number: {
    ...fonts.heavy(NUMBER_SIZE, -4),
    lineHeight: NUMBER_SIZE * 1.12,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 8,
  },
  caption: {
    ...fonts.medium(15),
    textAlign: 'center',
  },
});
