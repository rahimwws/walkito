import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import PauseIcon from '@hugeicons/core-free-icons/PauseIcon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
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
import { bitepal, colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { playCountInCue, preloadCountInSounds } from '../../model/count-in-sound';
import { CountdownRing } from '../test-day/countdown-ring';
import { Capsule, MoveCircle, NUMERAL_SCALE, SIDE, Segments, TITLE_SCALE, cardStyle, ink, moveColor } from './kit';

export type Break = Extract<Segment, { kind: 'rest' | 'switch' }>;

export type RestProps = {
  /** The rest or change of foot under way, or null while a set is. */
  segment: Break | null;
  /** New for every break, so the bar starts afresh. */
  id: string | null;
  secondsLeft: number;
  /** The move's playhead (0-1) and length, which the bar is timed from. */
  progress: SharedValue<number>;
  moveMs: SharedValue<number>;
  running: boolean;
  playing: boolean;
  move: string;
  exerciseId: string | null;
  top: number;
  bottom: number;
  onSkip: () => void;
  onPause: () => void;
  onResume: () => void;
};

const FADE_IN_MS = 160;
const FADE_OUT_MS = 220;
const TICK_FROM = 3;
const NUMERAL = 64;

/**
 * The rest between sets, and the change of foot, as BitePal's timer card:
 * "Rest" or "Switch to your left foot" over the seconds in big heavy digits, a
 * ring that empties with them and pauses on a tap, what comes next on a second
 * card with the move's round picture and the sets as segments, and Skip rest
 * as the black button. The last three seconds tick like the count-in. Resuming
 * here starts the clock at once: there is no position to get into.
 */
export function Rest({
  segment,
  id,
  secondsLeft,
  progress,
  moveMs,
  running,
  playing,
  move,
  exerciseId,
  top,
  bottom,
  onSkip,
  onPause,
  onResume,
}: RestProps) {
  const t = useT();
  const [mounted, setMounted] = useState(segment != null);
  const [shown, setShown] = useState<Break | null>(segment);
  const fade = useSharedValue(segment != null ? 1 : 0);
  const left = useSharedValue(1);

  useEffect(() => {
    if (segment != null) {
      setShown(segment);
      setMounted(true);
      preloadCountInSounds();
      fade.value = withTiming(1, { duration: FADE_IN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System });
      return;
    }
    fade.value = withTiming(0, { duration: FADE_OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System }, (finished) => {
      if (finished) runOnJS(setMounted)(false);
    });
  }, [segment, fade]);

  /** One linear run to empty while the clock moves; a clock, so never reduced. */
  const start = segment?.start ?? null;
  const seconds = segment?.seconds ?? null;
  useEffect(() => {
    cancelAnimation(left);
    if (start == null || seconds == null || seconds <= 0) return;
    const at = (Math.min(Math.max(progress.value, 0), 1) * moveMs.value) / 1000;
    const rest = Math.max(0, start + seconds - at);
    const from = rest / seconds;
    left.value = running
      ? withSequence(
          withTiming(from, { duration: 0, reduceMotion: ReduceMotion.Never }),
          withTiming(0, { duration: rest * 1000, easing: Easing.linear, reduceMotion: ReduceMotion.Never }),
        )
      : from;
  }, [id, start, seconds, running, progress, moveMs, left]);

  const ticked = useRef<string | null>(null);
  useEffect(() => {
    if (segment == null || !running || secondsLeft < 1 || secondsLeft > TICK_FROM) return;
    const key = `${id}:${secondsLeft}`;
    if (ticked.current === key) return;
    ticked.current = key;
    playCountInCue('tick');
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  }, [segment, running, secondsLeft, id]);

  const stacked = useWindowDimensions().fontScale > 1.6;
  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));

  if (!mounted || shown == null) return null;

  const live = segment != null;
  const isRest = shown.kind === 'rest';
  const title = isRest
    ? t('player.break.rest')
    : shown.to === 'left'
      ? t('player.break.switchLeft')
      : t('player.break.switchRight');

  return (
    <Animated.View style={[styles.host, { top, paddingBottom: bottom }, hostStyle]} pointerEvents={live ? 'auto' : 'none'}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.card}>
          <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" accessibilityLiveRegion="assertive" style={styles.title}>
            {title}
          </Text>
          <View style={[styles.top, stacked && styles.topStacked]}>
            <View
              style={styles.figure}
              accessible
              accessibilityRole="timer"
              accessibilityLabel={t('session.secondsLeftA11y', { count: secondsLeft })}>
              <Text maxFontSizeMultiplier={NUMERAL_SCALE} style={[styles.numeral, !playing && styles.dim]} numberOfLines={1} adjustsFontSizeToFit>
                {String(Math.floor(secondsLeft / 60)).padStart(2, '0') + ':' + String(secondsLeft % 60).padStart(2, '0')}
              </Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={playing ? t('player.cta.pause') : t('player.cta.resume')}
              onPress={playing ? onPause : onResume}
              hitSlop={6}
              style={({ pressed }) => pressed && styles.pressed}>
              <CountdownRing size={RING} stroke={7} left={left} tone={{ fill: moveColor(exerciseId), track: bitepal.track }}>
                <View style={styles.well}>
                  <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} size={26} color={ink.text} strokeWidth={2.2} />
                </View>
              </CountdownRing>
            </Pressable>
          </View>
        </View>

        <View
          style={[styles.card, styles.next, stacked && styles.nextStacked]}
          accessible
          accessibilityLabel={(isRest ? t('player.break.restNext', { set: shown.set, sets: shown.sets }) : t('player.countIn.nextUp')) + '. ' + move}>
          <MoveCircle exerciseId={exerciseId} size={64} />
          <View style={styles.nextText}>
            <Text style={styles.nextName}>{move}</Text>
            {isRest && shown.sets > 1 && (
              <Segments total={shown.sets} done={shown.set - 1} color={moveColor(exerciseId)} style={styles.sets} />
            )}
          </View>
          <HugeiconsIcon icon={ArrowRight01Icon} size={24} color={ink.grey} strokeWidth={2.2} />
        </View>

        <View style={styles.actions}>
          <Capsule label={isRest ? t('player.break.skipRest') : t('player.break.ready')} onPress={onSkip} />
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const RING = 84;

const styles = StyleSheet.create({
  host: { position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 50, backgroundColor: ink.page, paddingHorizontal: SIDE - 4 },
  scroll: { flexGrow: 1, justifyContent: 'center', gap: 12, paddingVertical: 16 },
  card: { ...cardStyle, padding: 20 },
  title: { ...fonts.heavy(28, -0.5), color: ink.text },
  top: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 12 },
  topStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  figure: { flex: 1, alignSelf: 'stretch' },
  numeral: {
    ...fonts.heavy(NUMERAL, -1.5),
    lineHeight: NUMERAL * 1.15,
    color: ink.text,
    fontVariant: ['tabular-nums'],
  },
  dim: { color: colors.text3 },
  pressed: { opacity: 0.55 },
  well: {
    width: RING - 26,
    height: RING - 26,
    borderRadius: (RING - 26) / 2,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  nextStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  nextText: { flexShrink: 1, flexGrow: 1, gap: 8 },
  sets: { maxWidth: 140 },
  nextName: { ...fonts.bold(19), color: ink.text },
  actions: { paddingTop: 8 },
});
