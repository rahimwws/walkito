import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState, type ComponentRef } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  IN_SESSION_STOP_PAIN,
  addDays,
  noteInSessionPain,
  planSettings,
  stepBackAfterSession,
  todayKey,
  usualStartMinute,
  useNextSession,
} from '@/entities/program';
import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import { colors, fonts } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';

import { alreadyRecorded, rememberFeedback, type Feedback } from '../../model/session-done';
import { Capsule, Hairline, SIDE, TextButton, ink } from './kit';
import { PainSheet } from './sheets';

export type DoneProps = {
  visible: boolean;
  moves: number;
  /** The session at the plan's dose, in whole minutes. */
  minutes: number;
  /** The plan day just done, for "Day 9 done"; a routine says "Done". */
  dayNumber?: number | null;
  /** The development preview: every answer goes nowhere. */
  preview?: boolean;
  /** Stopped on a pain report rather than run to the end. */
  early?: boolean;
  /** Ask how it felt. */
  feedback?: boolean;
  /** When the session began, epoch ms. See `alreadyRecorded`. */
  startedAt: number;
  onClose: () => void;
};

type Feel = 'easy' | 'right' | 'hard' | 'hurt';

/**
 * What the plan stores for each word. "It hurt" is a hard session as far as
 * the dose is concerned; "Hard" keeps the level, as "Just right" does, since
 * effort near the limit is what the work is meant to reach.
 */
const FEELS: readonly { feel: Feel; label: Key; feedback: Feedback }[] = [
  { feel: 'easy', label: 'sessionDone.feel.easy', feedback: 'easy' },
  { feel: 'right', label: 'sessionDone.feel.right', feedback: 'ok' },
  { feel: 'hard', label: 'sessionDone.feel.hard', feedback: 'ok' },
  { feel: 'hurt', label: 'sessionDone.feel.hurt', feedback: 'hard' },
];

const TICK = 88;
const IN_MS = 260;
const OUT_MS = 200;

/**
 * The end of a session (NRC #40 / #51): one big tick, "Done", two plain
 * numbers, "How did that feel?" as four stacked words, the safety line and
 * "Make tomorrow easier" after "It hurt", when the next session is, and Close
 * as the one capsule. A layer over the player rather than a Modal, for the
 * reason the sheets give.
 */
export function Done({
  visible,
  moves,
  minutes,
  dayNumber = null,
  preview = false,
  early = false,
  feedback = false,
  startedAt,
  onClose,
}: DoneProps) {
  const t = useT();
  const language = useLanguage();
  const insets = useSafeAreaInsets();
  const next = useNextSession();
  const [mounted, setMounted] = useState(false);
  const [picked, setPicked] = useState<Feel | null>(null);
  const [askingPain, setAskingPain] = useState(false);
  const [easier, setEasier] = useState(false);
  const fade = useSharedValue(0);
  const scroll = useRef<ComponentRef<typeof ScrollView>>(null);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      setPicked(null);
      setEasier(false);
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      fade.value = withTiming(1, { duration: IN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System });
      return;
    }
    setAskingPain(false);
    fade.value = withTiming(0, { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System }, (finished) => {
      if (finished) runOnJS(setMounted)(false);
    });
  }, [visible, fade]);

  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));
  if (!mounted) return null;

  /** Out of the pain question, the safety line under "It hurt" is what to read next. */
  const closePain = () => {
    setAskingPain(false);
    setTimeout(() => scroll.current?.scrollToEnd({ animated: true }), 250);
  };

  const reportPain = (score: number) => {
    closePain();
    if (preview) return;
    if (!alreadyRecorded(startedAt)) noteInSessionPain(score);
    if (score >= IN_SESSION_STOP_PAIN) {
      stepBackAfterSession();
      setEasier(true);
    }
  };

  const makeEasier = () => {
    if (!preview) stepBackAfterSession();
    setEasier(true);
  };

  const now = Date.now();
  const tomorrow = addDays(todayKey(now), 1);
  const reminderAt = planSettings().reminderMinutes ?? usualStartMinute() ?? wakeMinutes() + 15;
  const nextLine =
    next == null
      ? null
      : next.date === tomorrow
        ? t('sessionDone.tomorrowAt', { time: wakeLabel(reminderAt, language) })
        : next.date > tomorrow
          ? t('sessionDone.nextOn', {
              day: new Intl.DateTimeFormat(language, { weekday: 'long' }).format(new Date(`${next.date}T12:00:00`)),
            })
          : null;

  const title = early
    ? t('widgets.sessionStoppedTitle')
    : dayNumber != null
      ? t('sessionDone.dayDone', { day: dayNumber })
      : t('sessionDone.title');

  return (
    <Animated.View style={[styles.host, hostStyle]}>
      <ScrollView
        ref={scroll}
        contentContainerStyle={[styles.body, { paddingTop: insets.top + 40, paddingBottom: 140 + insets.bottom }]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.tick} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <HugeiconsIcon icon={Tick02Icon} size={44} color={colors.onInk} strokeWidth={2.4} />
        </View>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        {early && <Text style={styles.lead}>{t('widgets.sessionStoppedBlurb')}</Text>}

        {!early && (
          <View style={styles.numbers}>
            <View style={styles.number} accessible accessibilityLabel={t('sessionDone.tileSessionA11y', { count: minutes })}>
              <Text style={styles.numeral}>{minutes}</Text>
              <Text style={styles.label}>{t('sessionDone.tileMinutes')}</Text>
            </View>
            <View style={styles.number} accessible accessibilityLabel={t('sessionDone.tileMovesA11y', { count: moves })}>
              <Text style={styles.numeral}>{moves}</Text>
              <Text style={styles.label}>{t('sessionDone.tileMoves')}</Text>
            </View>
          </View>
        )}

        {feedback && !early && (
          <View style={styles.feel}>
            <Text accessibilityRole="header" style={styles.question}>
              {t('sessionDone.feel.question')}
            </Text>
            <View accessibilityRole="radiogroup" accessibilityLabel={t('sessionDone.feel.question')}>
              {FEELS.map((entry, index) => {
                const on = picked === entry.feel;
                return (
                  <View key={entry.feel}>
                    {index > 0 && <Hairline />}
                    <Pressable
                      accessibilityRole="radio"
                      accessibilityState={{ selected: on }}
                      onPress={() => {
                        void Haptics.selectionAsync();
                        setPicked(entry.feel);
                        if (!preview) rememberFeedback(entry.feedback, startedAt);
                        if (entry.feel === 'hurt') setAskingPain(true);
                      }}
                      style={({ pressed }) => [styles.word, pressed && styles.pressed]}>
                      <Text style={[styles.wordText, on && styles.wordOn]}>{t(entry.label)}</Text>
                      {on && <HugeiconsIcon icon={Tick02Icon} size={24} color={ink.text} strokeWidth={2.2} />}
                    </Pressable>
                  </View>
                );
              })}
            </View>
            {picked != null && picked !== 'hurt' && (
              <Text style={styles.ack} accessibilityLiveRegion="polite">
                {picked === 'right' || picked === 'hard' ? t('player.feedback.keeps') : t('player.feedback.adjusts')}
              </Text>
            )}
            {picked === 'hurt' && (
              <View style={styles.safety}>
                <Text style={styles.safetyText}>{t('player.painRule.body')}</Text>
                {easier ? (
                  <Text style={styles.ack} accessibilityLiveRegion="polite">
                    {t('sessionDone.easierDone')}
                  </Text>
                ) : (
                  <TextButton label={t('sessionDone.easier')} onPress={makeEasier} style={styles.easier} />
                )}
              </View>
            )}
          </View>
        )}

        {nextLine != null && <Text style={styles.next}>{nextLine}</Text>}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={t('common.close')} onPress={onClose} />
      </View>

      <PainSheet visible={visible && askingPain} after onPick={reportPain} onCancel={closePain} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: ink.page },
  body: { paddingHorizontal: SIDE },
  pressed: { opacity: 0.55 },
  tick: {
    width: TICK,
    height: TICK,
    borderRadius: TICK / 2,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { ...fonts.bold(34, -0.6), color: ink.text, marginTop: 24 },
  lead: { ...fonts.regular(19), color: ink.grey, marginTop: 8 },
  numbers: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 48, rowGap: 16, marginTop: 32 },
  number: { gap: 0 },
  numeral: { ...fonts.bold(56, -1.5), color: ink.text, fontVariant: ['tabular-nums'] },
  label: { ...fonts.regular(17), color: ink.grey },
  feel: { marginTop: 48, gap: 8 },
  question: { ...fonts.bold(22, -0.3), color: ink.text, marginBottom: 4 },
  word: { minHeight: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  wordText: { ...fonts.regular(19), color: ink.text, flexShrink: 1 },
  wordOn: fonts.semibold(19),
  ack: { ...fonts.regular(17), color: ink.grey, marginTop: 8 },
  safety: { marginTop: 16, gap: 8 },
  safetyText: { ...fonts.regular(19), color: ink.text },
  easier: { alignSelf: 'flex-start', paddingHorizontal: 0 },
  next: { ...fonts.medium(19), color: ink.grey, marginTop: 40 },
  dock: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: SIDE, paddingTop: 12, backgroundColor: ink.page },
});
