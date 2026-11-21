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

import { CHROME_MAX_FONT_SCALE, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { COUNT_IN_FROM, countInAt } from '../../model/count-in';
import { playCountInCue, preloadCountInSounds } from '../../model/count-in-sound';
import { SIDE, TITLE_SCALE, ink } from './kit';

export type CountInProps = {
  /** Wall-clock ms the count started; null hides it. */
  from: number | null;
  /** "Get ready" for the first move of a sitting, "Next up" after it. */
  eyebrow: string;
  /** The move about to start. */
  title: string;
  /** Where the screen begins under the host's header. */
  top?: number;
  /** The host's bottom inset; the safe area when left out. */
  bottom?: number;
  /** At go, or on a tap. Once per `from`. */
  onDone: () => void;
};

const POLL_MS = 100;
const FADE_IN_MS = 160;
const GO_HOLD_MS = 140;
const FADE_OUT_MS = 220;
const NUMBER = 200;

/**
 * Three, two, one, go: white, the move's name, and one black number the size
 * of the screen. Read off the wall clock (`countInAt`), with a tick and a tap
 * on each number and a firmer cue on go. A tap anywhere starts the move now.
 * Mounted around one shared value by hand, never with entering/exiting
 * builders, so a builder that fails can never leave an invisible layer
 * swallowing taps.
 */
export function CountIn({ from, eyebrow, title, top = 0, bottom, onDone }: CountInProps) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const [mounted, setMounted] = useState(from != null);
  const [shown, setShown] = useState(COUNT_IN_FROM);
  const [finishedFor, setFinishedFor] = useState<number | null>(null);
  const fade = useSharedValue(0);
  const pop = useSharedValue(1);

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const fromRef = useRef(from);
  fromRef.current = from;
  const doneFor = useRef<number | null>(null);
  const leaving = useRef(false);

  const land = useCallback(
    (next: number) => {
      setShown(next);
      pop.value = withSequence(
        withTiming(0.92, { duration: 0 }),
        withTiming(1, { duration: 360, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System }),
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
        withTiming(0, { duration: FADE_OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System }, (finished) => {
          if (finished) runOnJS(setMounted)(false);
        }),
      );
    },
    [fade],
  );

  const go = useCallback(() => {
    const current = fromRef.current;
    if (current == null || doneFor.current === current) return;
    doneFor.current = current;
    setFinishedFor(current);
    land(0);
    playCountInCue('go');
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    fadeOut(GO_HOLD_MS);
    onDoneRef.current();
  }, [land, fadeOut]);

  useEffect(() => {
    if (from == null) {
      fadeOut(0);
      return undefined;
    }
    preloadCountInSounds();
    leaving.current = false;
    setMounted(true);
    fade.value = withTiming(1, { duration: FADE_IN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System });
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
      land(next);
      playCountInCue('tick');
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    };
    read();
    const id = setInterval(read, POLL_MS);
    return () => clearInterval(id);
  }, [from, fade, fadeOut, go, land]);

  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));
  const numberStyle = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));

  if (!mounted) return null;
  const counting = from != null && finishedFor !== from;

  return (
    <Animated.View style={[styles.host, { top }, hostStyle]} pointerEvents={counting ? 'auto' : 'none'}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${eyebrow}. ${title}`}
        accessibilityHint={t('player.countIn.tapToStart')}
        onPress={go}
        style={[styles.fill, { paddingBottom: bottom ?? Math.max(insets.bottom, 20) }]}>
        <View style={styles.middle}>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.title}>{title}</Text>
          <Animated.Text
            accessibilityLiveRegion="assertive"
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[styles.number, numberStyle]}>
            {shown > 0 ? String(shown) : t('player.countIn.go')}
          </Animated.Text>
        </View>
        <Text maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE} style={styles.caption}>
          {t('player.countIn.tapToStart')}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 50, backgroundColor: ink.page },
  fill: { flex: 1 },
  middle: { flex: 1, justifyContent: 'center', paddingHorizontal: SIDE },
  eyebrow: { ...fonts.medium(19), color: ink.grey },
  title: { ...fonts.bold(34, -0.6), color: ink.text, marginTop: 4 },
  number: {
    ...fonts.bold(NUMBER, -6),
    lineHeight: NUMBER * 1.1,
    color: ink.text,
    fontVariant: ['tabular-nums'],
    marginTop: 8,
  },
  caption: { ...fonts.medium(17), color: ink.grey, paddingHorizontal: SIDE, paddingBottom: 24 },
});
