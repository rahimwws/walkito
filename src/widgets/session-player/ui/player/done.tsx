import LockIcon from '@hugeicons/core-free-icons/LockIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState, type ComponentRef } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
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
  type DayType,
} from '@/entities/program';
import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import { colors, fonts } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';

import { alreadyRecorded, rememberFeedback, type Feedback } from '../../model/session-done';
import { Capsule, SIDE, TITLE_SCALE, TextButton, cardStyle, ink } from './kit';
import { PainSheet } from './sheets';

export type DoneProps = {
  visible: boolean;
  moves: number;
  /** Every set of every move, a hold counted as one. */
  sets: number;
  /** The session at the plan's dose, in whole minutes. */
  minutes: number;
  /** The plan day just done, for the day path; a routine has none. */
  dayNumber?: number | null;
  /** The development preview: every answer goes nowhere. */
  preview?: boolean;
  /** Stopped on a pain report rather than run to the end. */
  early?: boolean;
  /** Ask how it felt. */
  feedback?: boolean;
  /** When the session began, epoch ms. See alreadyRecorded. */
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

/** The kind of work a day is, in the words the plan uses for it. */
const KIND_LABEL: Partial<Record<DayType, Key>> = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
  test: 'testday.intro.title',
};

const BADGE = 96;
const NODE = 36;
const IN_MS = 260;
const OUT_MS = 200;

/**
 * The end of a session, after Alan's "You did it" and Bend's cards: a big
 * violet tick, "Session complete", the minutes, moves and sets on one white
 * card, "How did that feel?" as four large option cards, the safety line and
 * "Make tomorrow easier" after "It hurt", then the day path (today done, the
 * next one locked until it opens) and Done as the violet button. A layer over
 * the player rather than a Modal, for the reason the sheets give.
 */
export function Done({
  visible,
  moves,
  sets,
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
  const large = useWindowDimensions().fontScale > 1.6;
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
  const today = todayKey(now);
  const tomorrow = addDays(today, 1);
  const reminderAt = planSettings().reminderMinutes ?? usualStartMinute() ?? wakeMinutes() + 15;
  const nextLine =
    next == null
      ? null
      : next.date === tomorrow
        ? t('sessionDone.tomorrowAt', { time: wakeLabel(reminderAt, language) })
        : next.date > tomorrow
          ? t('sessionDone.nextOn', {
              day: new Intl.DateTimeFormat(language, { weekday: 'long' }).format(new Date(next.date + 'T12:00:00')),
            })
          : null;
  const nextKind = next == null ? undefined : KIND_LABEL[next.day.type];
  const nextDay =
    dayNumber == null || next == null || next.date <= today
      ? null
      : dayNumber + Math.round((Date.parse(next.date + 'T12:00:00') - Date.parse(today + 'T12:00:00')) / 86_400_000);

  const stats = [
    { value: minutes, label: t('sessionDone.tileMinutes'), a11y: t('sessionDone.tileSessionA11y', { count: minutes }) },
    { value: moves, label: t('sessionDone.tileMoves'), a11y: t('sessionDone.tileMovesA11y', { count: moves }) },
    { value: sets, label: t('sessionDone.tileSets'), a11y: t('sessionDone.tileSetsA11y', { count: sets }) },
  ];

  return (
    <Animated.View style={[styles.host, hostStyle]}>
      <ScrollView
        ref={scroll}
        contentContainerStyle={[styles.body, { paddingTop: insets.top + 32, paddingBottom: 140 + insets.bottom }]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.badge} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <HugeiconsIcon icon={Tick02Icon} size={48} color={colors.onInk} strokeWidth={2.6} />
        </View>
        <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
          {early ? t('widgets.sessionStoppedTitle') : t('sessionDone.complete')}
        </Text>
        {early && <Text style={styles.lead}>{t('widgets.sessionStoppedBlurb')}</Text>}

        {!early && (
          <View key={large ? 'stacked' : 'row'} style={[styles.card, styles.stats, large && styles.statsStacked]}>
            {stats.map((stat, index) => (
              <View key={stat.label} style={[styles.stat, index > 0 && (large ? styles.statRuleTop : styles.statRule)]} accessible accessibilityLabel={stat.a11y}>
                <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.numeral}>
                  {stat.value}
                </Text>
                <Text style={styles.label}>{stat.label}</Text>
              </View>
            ))}
          </View>
        )}

        {feedback && !early && (
          <View style={styles.section}>
            <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.question}>
              {t('sessionDone.feel.question')}
            </Text>
            <View style={styles.options} accessibilityRole="radiogroup" accessibilityLabel={t('sessionDone.feel.question')}>
              {FEELS.map((entry) => {
                const on = picked === entry.feel;
                return (
                  <Pressable
                    key={entry.feel}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: on }}
                    onPress={() => {
                      void Haptics.selectionAsync();
                      setPicked(entry.feel);
                      if (!preview) rememberFeedback(entry.feedback, startedAt);
                      if (entry.feel === 'hurt') setAskingPain(true);
                    }}
                    style={({ pressed }) => [
                      styles.option,
                      large ? styles.optionFull : styles.optionHalf,
                      on && styles.optionOn,
                      pressed && styles.pressed,
                    ]}>
                    <Text style={[styles.optionText, on && styles.optionTextOn]}>{t(entry.label)}</Text>
                    {on && (
                      <View style={styles.optionTick}>
                        <HugeiconsIcon icon={Tick02Icon} size={16} color={colors.onInk} strokeWidth={2.8} />
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>
            {picked != null && picked !== 'hurt' && (
              <Text style={styles.ack} accessibilityLiveRegion="polite">
                {picked === 'right' || picked === 'hard' ? t('player.feedback.keeps') : t('player.feedback.adjusts')}
              </Text>
            )}
            {picked === 'hurt' && (
              <View style={[styles.card, styles.safety]}>
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

        {dayNumber != null ? (
          <View style={[styles.card, styles.path]}>
            <View style={[styles.node, large && styles.nodeStacked]} accessible>
              <View style={styles.nodeColumn}>
                <View style={[styles.dot, styles.dotDone]}>
                  <HugeiconsIcon icon={Tick02Icon} size={18} color={colors.onInk} strokeWidth={2.8} />
                </View>
                {nextDay != null && !large && <View style={styles.line} />}
              </View>
              <View style={styles.nodeText}>
                <Text style={styles.nodeTitle}>{t('sessionDone.path.day', { day: dayNumber })}</Text>
                <Text style={styles.nodeSub}>{t('sessionDone.path.completed')}</Text>
              </View>
            </View>
            {nextDay != null && (
              <View style={[styles.node, large && styles.nodeStacked]} accessible>
                <View style={styles.nodeColumn}>
                  <View style={[styles.dot, styles.dotLocked]}>
                    <HugeiconsIcon icon={LockIcon} size={17} color={colors.text3} strokeWidth={2} />
                  </View>
                </View>
                <View style={styles.nodeText}>
                  <Text style={styles.nodeTitle}>
                    {t('sessionDone.path.day', { day: nextDay })}
                    {nextKind != null ? ' · ' + t(nextKind) : ''}
                  </Text>
                  {nextLine != null && <Text style={styles.nodeSub}>{nextLine}</Text>}
                </View>
              </View>
            )}
          </View>
        ) : (
          nextLine != null && <Text style={styles.next}>{nextLine}</Text>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={t('player.cta.done')} onPress={onClose} />
      </View>

      <PainSheet visible={visible && askingPain} after onPick={reportPain} onCancel={closePain} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: ink.canvas },
  body: { paddingHorizontal: SIDE - 4, alignItems: 'stretch' },
  pressed: { opacity: 0.55 },
  card: cardStyle,
  badge: {
    width: BADGE,
    height: BADGE,
    borderRadius: BADGE / 2,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: { ...fonts.bold(32, -0.6), color: ink.text, marginTop: 20, textAlign: 'center' },
  lead: { ...fonts.regular(19), color: ink.grey, marginTop: 8, textAlign: 'center' },
  stats: { flexDirection: 'row', marginTop: 28, paddingVertical: 18 },
  statsStacked: { flexDirection: 'column', paddingVertical: 4 },
  stat: { flex: 1, alignItems: 'center', gap: 2, paddingVertical: 4, paddingHorizontal: 6 },
  statRule: { borderLeftWidth: StyleSheet.hairlineWidth, borderLeftColor: ink.rule },
  statRuleTop: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ink.rule, paddingVertical: 14 },
  numeral: { ...fonts.bold(34, -1), color: ink.text, fontVariant: ['tabular-nums'] },
  label: { ...fonts.medium(17), color: ink.grey, textAlign: 'center' },
  section: { marginTop: 32, gap: 12 },
  question: { ...fonts.bold(22, -0.3), color: ink.text },
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  option: {
    ...cardStyle,
    minHeight: 72,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    borderWidth: 2,
    borderColor: colors.surface,
  },
  optionHalf: { flexBasis: '46%', flexGrow: 1 },
  optionFull: { flexBasis: '100%' },
  optionOn: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  optionText: { ...fonts.semibold(19), color: ink.text, flexShrink: 1 },
  optionTextOn: { color: colors.accent },
  optionTick: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ack: { ...fonts.regular(17), color: ink.grey },
  safety: { padding: 16, gap: 4 },
  safetyText: { ...fonts.regular(19), color: ink.text },
  easier: { alignSelf: 'flex-start', paddingHorizontal: 0 },
  path: { marginTop: 32, padding: 18 },
  node: { flexDirection: 'row', gap: 14 },
  nodeStacked: { flexDirection: 'column', gap: 4 },
  nodeColumn: { width: NODE, alignItems: 'center' },
  dot: { width: NODE, height: NODE, borderRadius: NODE / 2, alignItems: 'center', justifyContent: 'center' },
  dotDone: { backgroundColor: colors.accent },
  dotLocked: { backgroundColor: colors.surface2 },
  line: { width: 2, flexGrow: 1, minHeight: 20, backgroundColor: ink.rule, marginVertical: 4 },
  nodeText: { flexGrow: 1, flexShrink: 1, paddingTop: 5, paddingBottom: 16, gap: 2 },
  nodeTitle: { ...fonts.semibold(19), color: ink.text },
  nodeSub: { ...fonts.regular(17), color: ink.grey },
  next: { ...fonts.medium(19), color: ink.grey, marginTop: 32, textAlign: 'center' },
  dock: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: SIDE, paddingTop: 12, backgroundColor: ink.canvas },
});
