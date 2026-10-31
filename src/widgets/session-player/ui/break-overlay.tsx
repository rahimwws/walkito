import Forward01Icon from '@hugeicons/core-free-icons/Forward01Icon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import PauseIcon from '@hugeicons/core-free-icons/PauseIcon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import type { Segment } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PRIMARY_BUTTON_HEIGHT, PrimaryButton } from '@/shared/ui/primary-button';

import { playCountInCue, preloadCountInSounds } from '../model/count-in-sound';
import { CountdownRing } from './test-day/countdown-ring';

export type Break = Extract<Segment, { kind: 'rest' | 'switch' }>;

export type BreakOverlayProps = {
  /** The rest or change of foot under way, or null while a set is. */
  segment: Break | null;
  /** Changes with every break, so the next one starts its ring afresh even
   * when it is the same kind at the same offset in another move. */
  id: string | null;
  /** Whole seconds left in the break, off the same clock as the player. */
  secondsLeft: number;
  /** The move's playhead (0–1) and length, which the ring is timed from. */
  progress: SharedValue<number>;
  moveMs: SharedValue<number>;
  /** The clock is moving. */
  running: boolean;
  /** The move is being done, as against paused by hand. */
  playing: boolean;
  /** The exercise, for the line under the ring. */
  move: string;
  /** Where the overlay begins, measured from the top of its host. */
  top: number;
  /** The player's bottom inset, so the buttons sit where Pause and Done do. */
  bottom: number;
  onSkip: () => void;
  onPause: () => void;
  onResume: () => void;
};

const FADE_IN_MS = 180;
const FADE_OUT_MS = 240;
const RING_STROKE = 14;
/** The last seconds of a break are counted out loud, the way the count-in
 * counts in a move. */
const TICK_FROM = 3;

/**
 * The rest between sets, and the change of foot, as a screen of their own.
 *
 * They were a line of small grey text under the move's name that changed from
 * "Hold · Rep 6 of 6" to "Rest · Next: set 2 of 2". Nobody doing the move reads
 * that line: the phone is on the floor or against a wall two metres away. A
 * rest timer in a workout app is a full-screen card with a ring that empties,
 * a big number and one way to skip it, and so is this.
 *
 * Laid over the player below its header, as the count-in is, so Back and the
 * pain button stay where they always are. The demonstration stays faintly
 * there under the blur. The last three seconds tick, and the same tick and buzz
 * the count-in uses say the set is about to start.
 *
 * The big button is Skip, as in every rest timer: in a rest, carrying on is the
 * thing someone reaches for. Pause sits in the seat the set's Done button has.
 * Resuming here starts the clock straight away, without a count-in: there is
 * nothing to get into position for while resting.
 *
 * Mounted and unmounted by hand around one shared value, never with `entering`
 * / `exiting` builders, for the reason `CountInOverlay` gives.
 */
export function BreakOverlay({
  segment,
  id,
  secondsLeft,
  progress,
  moveMs,
  running,
  playing,
  move,
  top,
  bottom,
  onSkip,
  onPause,
  onResume,
}: BreakOverlayProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { width } = useWindowDimensions();

  const [mounted, setMounted] = useState(segment != null);
  /** What is drawn: the live break, or the last one while it fades out. */
  const [shown, setShown] = useState<Break | null>(segment);
  const fade = useSharedValue(segment != null ? 1 : 0);
  const ring = useSharedValue(1);

  useEffect(() => {
    if (segment != null) {
      setShown(segment);
      setMounted(true);
      preloadCountInSounds();
      fade.value = withTiming(1, {
        duration: FADE_IN_MS,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      });
      return;
    }
    fade.value = withTiming(
      0,
      { duration: FADE_OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
  }, [segment, fade]);

  /**
   * The ring: one linear run to empty while the clock moves, still while it
   * does not. Timed from the playhead rather than counted, so it ends where the
   * break does however late it was mounted. Never reduced for Reduce Motion:
   * it is a clock, and a reduced timing would jump it straight to empty.
   */
  const start = segment?.start ?? null;
  const seconds = segment?.seconds ?? null;
  useEffect(() => {
    cancelAnimation(ring);
    if (start == null || seconds == null || seconds <= 0) return;
    const at = (Math.min(Math.max(progress.value, 0), 1) * moveMs.value) / 1000;
    const left = Math.max(0, start + seconds - at);
    const from = left / seconds;
    ring.value = running
      ? withSequence(
          withTiming(from, { duration: 0, reduceMotion: ReduceMotion.Never }),
          withTiming(0, { duration: left * 1000, easing: Easing.linear, reduceMotion: ReduceMotion.Never }),
        )
      : from;
  }, [id, start, seconds, running, progress, moveMs, ring]);

  /** Three, two, one: a tick and a tap each, once per second. */
  const ticked = useRef<string | null>(null);
  useEffect(() => {
    if (segment == null || !running || secondsLeft < 1 || secondsLeft > TICK_FROM) return;
    const key = `${id}:${secondsLeft}`;
    if (ticked.current === key) return;
    ticked.current = key;
    playCountInCue('tick');
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  }, [segment, running, secondsLeft, id]);

  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));

  if (!mounted || shown == null) return null;

  const live = segment != null;
  const rest = shown.kind === 'rest';
  const tone = rest ? accents[scheme].teal : accents[scheme].violet;
  const title = rest
    ? t('player.break.rest')
    : shown.to === 'left'
      ? t('player.break.switchLeft')
      : t('player.break.switchRight');
  const ringSize = Math.min(width - 128, 240);

  return (
    <Animated.View style={[styles.host, { top }, hostStyle]} pointerEvents={live ? 'auto' : 'none'}>
      <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={30} style={styles.fill} />
      <View style={[styles.fill, styles.scrim, { backgroundColor: colors.background }]} />

      <View style={styles.middle}>
        {!rest && (
          <View style={[styles.badge, { backgroundColor: tone.track }]}>
            {/* The left foot is the right one mirrored. */}
            <View style={shown.to === 'left' ? styles.mirrored : undefined}>
              <HugeiconsIcon icon={FootprintsIcon} size={30} color={tone.fill} strokeWidth={1.8} />
            </View>
          </View>
        )}
        <Text
          accessibilityRole="header"
          accessibilityLiveRegion="assertive"
          style={[styles.title, { color: colors.foreground }]}
          numberOfLines={2}
          adjustsFontSizeToFit>
          {title}
        </Text>

        <View style={styles.ringArea} accessible accessibilityRole="timer" accessibilityLabel={t('session.secondsLeftA11y', { count: secondsLeft })}>
          <CountdownRing size={ringSize} stroke={RING_STROKE} left={ring} tone={tone}>
            <Text style={[styles.big, { color: playing ? meter.ink : meter.caption }]}>{secondsLeft}</Text>
            <Text style={[styles.unit, { color: meter.label }]}>
              {t('testday.secondsLeft', { count: secondsLeft })}
            </Text>
          </CountdownRing>
        </View>

        <Text style={[styles.next, { color: colors.foreground }]} numberOfLines={1} adjustsFontSizeToFit>
          {rest ? t('player.break.restNext', { set: shown.set, sets: shown.sets }) : move}
        </Text>
        {rest && (
          <Text style={[styles.caption, { color: meter.label }]} numberOfLines={1} adjustsFontSizeToFit>
            {move}
          </Text>
        )}
      </View>

      <View style={[styles.buttons, { paddingBottom: bottom }]}>
        <View style={styles.main}>
          <PrimaryButton
            label={rest ? t('player.break.skipRest') : t('player.break.ready')}
            icon={Forward01Icon}
            onPress={onSkip}
          />
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={playing ? t('player.cta.pause') : t('player.cta.resume')}
          onPress={() => {
            void Haptics.selectionAsync();
            if (playing) onPause();
            else onResume();
          }}
          style={({ pressed }) => [styles.side, { backgroundColor: colors.card }, pressed && { opacity: 0.6 }]}>
          <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} size={22} color={colors.foreground} strokeWidth={2} />
          <Text style={[styles.sideText, { color: colors.foreground }]} numberOfLines={1} adjustsFontSizeToFit>
            {playing ? t('player.cta.pause') : t('player.cta.resume')}
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  /** Over the player's content, under its sheets, level with the count-in. */
  host: { position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 50 },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** The page colour over the blur, not quite opaque. */
  scrim: { opacity: 0.9 },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  badge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  mirrored: { transform: [{ scaleX: -1 }] },
  title: {
    ...fonts.heavy(32, -0.8),
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  ringArea: {
    marginTop: 24,
    marginBottom: 24,
  },
  big: {
    ...fonts.heavy(88, -2.5),
    lineHeight: 96,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
  },
  unit: {
    ...fonts.semibold(16),
    marginTop: -4,
  },
  next: {
    ...fonts.bold(22, -0.4),
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  caption: {
    ...fonts.semibold(16),
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 4,
  },
  buttons: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  main: { flex: 1 },
  side: {
    width: 92,
    height: PRIMARY_BUTTON_HEIGHT,
    borderRadius: PRIMARY_BUTTON_HEIGHT / 2,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 8,
  },
  sideText: fonts.semibold(13),
});
