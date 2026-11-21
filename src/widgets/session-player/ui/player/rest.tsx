import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { posterFor, thumbFor } from '../../config/exercise-posters';
import { playCountInCue, preloadCountInSounds } from '../../model/count-in-sound';
import { Capsule, NUMERAL_SCALE, SIDE, TITLE_SCALE, TextButton, ink } from './kit';

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
const NUMERAL = 96;

/**
 * The rest between sets, and the change of foot (NTC rest): "Rest" or
 * "Switch to your left foot", the seconds as one big black number, a thin bar
 * emptying with them, what comes next as a plain row, Skip as the capsule and
 * Pause in words. The last three seconds tick like the count-in. Resuming
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

  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));
  const barStyle = useAnimatedStyle(() => ({ width: `${Math.min(Math.max(left.value, 0), 1) * 100}%` }));

  if (!mounted || shown == null) return null;

  const live = segment != null;
  const isRest = shown.kind === 'rest';
  const title = isRest
    ? t('player.break.rest')
    : shown.to === 'left'
      ? t('player.break.switchLeft')
      : t('player.break.switchRight');
  const still = exerciseId == null ? null : (posterFor(exerciseId) ?? thumbFor(exerciseId));

  return (
    <Animated.View style={[styles.host, { top, paddingBottom: bottom }, hostStyle]} pointerEvents={live ? 'auto' : 'none'}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.middle}>
          <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" accessibilityLiveRegion="assertive" style={styles.title}>
            {title}
          </Text>
          <View accessible accessibilityRole="timer" accessibilityLabel={t('session.secondsLeftA11y', { count: secondsLeft })}>
            <Text maxFontSizeMultiplier={NUMERAL_SCALE} style={[styles.numeral, !playing && styles.dim]}>{secondsLeft}</Text>
            <Text style={styles.unit}>{t('testday.secondsLeft', { count: secondsLeft })}</Text>
          </View>
          <View style={styles.track}>
            <Animated.View style={[styles.bar, barStyle]} />
          </View>
        </View>

        <View style={styles.next} accessible>
          {still != null && <Image source={still} resizeMode="cover" style={styles.thumb} accessibilityIgnoresInvertColors />}
          <View style={styles.nextText}>
            <Text style={styles.nextLabel}>
              {isRest ? t('player.break.restNext', { set: shown.set, sets: shown.sets }) : t('player.countIn.nextUp')}
            </Text>
            <Text style={styles.nextName}>{move}</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Capsule label={isRest ? t('player.break.skipRest') : t('player.break.ready')} onPress={onSkip} />
          <TextButton label={playing ? t('player.cta.pause') : t('player.cta.resume')} onPress={playing ? onPause : onResume} />
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 50, backgroundColor: ink.page, paddingHorizontal: SIDE },
  scroll: { flexGrow: 1 },
  middle: { flexGrow: 1, justifyContent: 'center', gap: 8 },
  title: { ...fonts.bold(34, -0.6), color: ink.text },
  numeral: { ...fonts.bold(NUMERAL, -3), lineHeight: NUMERAL * 1.08, color: ink.text, fontVariant: ['tabular-nums'] },
  dim: { color: ink.grey },
  unit: { ...fonts.medium(19), color: ink.grey },
  track: { height: 3, backgroundColor: ink.rule, marginTop: 20, overflow: 'hidden' },
  bar: { height: 3, backgroundColor: ink.text },
  next: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 16 },
  thumb: { width: 72, height: 72, backgroundColor: ink.studio },
  nextText: { flex: 1, gap: 2 },
  nextLabel: { ...fonts.regular(17), color: ink.grey },
  nextName: { ...fonts.semibold(19), color: ink.text },
  actions: { gap: 4, paddingTop: 8 },
});
