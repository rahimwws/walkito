import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useRef, useState, type ComponentRef } from 'react';
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
  attendedLevel,
  dayNumberFor,
  noteInSessionPain,
  planSettings,
  programState,
  stepBackAfterSession,
  todayKey,
  useLogsVersion,
  usualStartMinute,
  useNextSession,
  type DayType,
} from '@/entities/program';
import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import { bitepal, bodyColors, colors, fonts } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { celebrateRig, idleRig } from '@/shared/ui/mascot';

import { alreadyRecorded, rememberFeedback, type Feedback } from '../../model/session-done';
import { BigNumber, CardLabel, Capsule, Ring, SIDE, SessionMascot, TITLE_SCALE, TextButton, cardStyle, ink, sceneStyle, soft } from './kit';
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
const FEELS: readonly { feel: Feel; label: Key; feedback: Feedback; art: FluentName; tone: string }[] = [
  { feel: 'easy', label: 'sessionDone.feel.easy', feedback: 'easy', art: 'feather', tone: bodyColors.arch },
  { feel: 'right', label: 'sessionDone.feel.right', feedback: 'ok', art: 'check', tone: bodyColors.calf },
  { feel: 'hard', label: 'sessionDone.feel.hard', feedback: 'ok', art: 'bolt', tone: bodyColors.toes },
  { feel: 'hurt', label: 'sessionDone.feel.hurt', feedback: 'hard', art: 'bandage', tone: bodyColors.heel },
];

/** The kind of work a day is, in the words the plan uses for it. */
const KIND_LABEL: Partial<Record<DayType, Key>> = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
  test: 'testday.intro.title',
};

const STAT_RING = 64;
/** The character in the header, as big as BitePal's on its streak sheet. */
const DONE_MASCOT = 128;
const IN_MS = 260;

/** Which days of this month a plan session or a routine was finished, by day
 * of the month, through today; today counts as soon as this screen shows. */
function doneThisMonth(today: string, includeToday: boolean): Set<number> {
  const state = programState();
  const [year, month, day] = today.split('-').map(Number);
  const done = new Set<number>();
  for (let date = 1; date <= day; date++) {
    const key = year + '-' + String(month).padStart(2, '0') + '-' + String(date).padStart(2, '0');
    const number = dayNumberFor(state, key);
    if (number >= 1 && attendedLevel(number) === 'full') done.add(date);
  }
  if (includeToday) done.add(day);
  return done;
}
const OUT_MS = 200;

/**
 * The end of a session as BitePal's cards: "Session complete" with a
 * sparkle, then the minutes, moves and sets each on a white card (grey label,
 * big number, a closed ring with its icon), "How did that feel?" as four
 * white option cards with round icons, the safety line and "Make tomorrow
 * easier" after "It hurt", the days done this month as BitePal's streak sheet
 * draws them (the count large over a small calendar with a dot on each, no
 * flame), what comes next, and Done as the black button. A layer over
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
  const version = useLogsVersion();
  const today = todayKey(Date.now());
  const month = useMemo(
    () => (mounted ? doneThisMonth(today, !early) : new Set<number>()),
    // The logs are mutated in place; the version is what moves.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mounted, today, early, version],
  );

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

  const stats: { value: number; label: string; a11y: string; art: FluentName; tone: string }[] = [
    { value: minutes, label: t('sessionDone.tileMinutes'), a11y: t('sessionDone.tileSessionA11y', { count: minutes }), art: 'timer', tone: bodyColors.heel },
    { value: moves, label: t('sessionDone.tileMoves'), a11y: t('sessionDone.tileMovesA11y', { count: moves }), art: 'foot', tone: bodyColors.arch },
    { value: sets, label: t('sessionDone.tileSets'), a11y: t('sessionDone.tileSetsA11y', { count: sets }), art: 'check', tone: bodyColors.calf },
  ];
  const [year, monthNumber, todayDate] = today.split('-').map(Number);
  const firstWeekday = (new Date(year, monthNumber - 1, 1).getDay() + 6) % 7;
  const monthLength = new Date(year, monthNumber, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: monthLength }, (_, i) => i + 1),
  ];
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(language, { weekday: 'narrow' }).format(new Date(2024, 0, 1 + i)),
  );
  const monthName = new Intl.DateTimeFormat(language, { month: 'long', year: 'numeric' }).format(new Date(year, monthNumber - 1, 1));

  return (
    <Animated.View style={[styles.host, hostStyle]}>
      <ScrollView
        ref={scroll}
        contentContainerStyle={[styles.body, { paddingTop: insets.top + 24, paddingBottom: 140 + insets.bottom }]}
        showsVerticalScrollIndicator={false}>
        <View style={[sceneStyle, styles.head, large && styles.headStacked]}>
          <View style={styles.headText}>
            <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
              {early ? t('widgets.sessionStoppedTitle') : t('sessionDone.complete')}
            </Text>
            {early && <Text style={styles.lead}>{t('widgets.sessionStoppedBlurb')}</Text>}
          </View>
          <SessionMascot
            rig={early ? idleRig : celebrateRig}
            shot={early ? 'nod' : 'celebrate'}
            size={DONE_MASCOT}
            surface={sceneStyle.backgroundColor}
            style={large && styles.mascotStacked}
          />
        </View>

        {!early &&
          stats.map((stat) => (
            <View key={stat.label} style={[styles.card, styles.stat, large && styles.statStacked]} accessible accessibilityLabel={stat.a11y}>
              <View style={styles.statText}>
                <CardLabel>{stat.label}</CardLabel>
                <BigNumber value={stat.value} size={48} />
              </View>
              <Ring size={STAT_RING} stroke={6} value={1} color={stat.tone}>
                <FluentIcon name={stat.art} size={28} />
              </Ring>
            </View>
          ))}

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
                    <View style={[styles.optionIcon, { backgroundColor: soft(entry.tone, 0.22) }]}>
                      <FluentIcon name={entry.art} size={26} />
                    </View>
                    <Text style={styles.optionText}>{t(entry.label)}</Text>
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

        <View style={[styles.card, styles.month]}>
          <View
            style={[styles.stat, styles.monthHead, large && styles.statStacked]}
            accessible
            accessibilityLabel={t('sessionDone.month.a11y', { count: month.size })}>
            <View style={styles.statText}>
              <CardLabel>{t('sessionDone.month.title')}</CardLabel>
              <BigNumber value={month.size} unit={t('sessionDone.month.unit', { count: month.size })} size={48} />
            </View>
            <View style={styles.monthIcon}>
              <FluentIcon name="calendar" size={36} />
            </View>
          </View>
          <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <Text style={styles.monthName} maxFontSizeMultiplier={1.4}>
              {monthName}
            </Text>
            <View style={styles.grid}>
              {weekdays.map((day, i) => (
                <Text key={'w' + i} style={[styles.cell, styles.weekday]} maxFontSizeMultiplier={1.4}>
                  {day}
                </Text>
              ))}
              {cells.map((date, i) => {
                const isToday = date === todayDate;
                const isDone = date != null && month.has(date);
                return (
                  <View key={i} style={styles.cellBox}>
                    {date != null && (
                      <View style={[styles.dayChip, isToday && styles.dayChipToday]}>
                        <Text
                          style={[styles.day, date > todayDate && styles.dayAhead, isDone && styles.dayDone, isToday && styles.dayToday]}
                          maxFontSizeMultiplier={1.4}>
                          {date}
                        </Text>
                        <View style={[styles.dot, isDone && { backgroundColor: isToday ? colors.onInk : bitepal.selected }]} />
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {(nextLine != null || nextDay != null) && (
          <View style={[styles.card, styles.next]} accessible>
            <CardLabel>{t('sessionDone.nextLabel')}</CardLabel>
            {nextDay != null && (
              <Text style={styles.nextTitle}>
                {t('sessionDone.path.day', { day: nextDay })}
                {nextKind != null ? ' · ' + t(nextKind) : ''}
              </Text>
            )}
            {nextLine != null && <Text style={styles.nextLine}>{nextLine}</Text>}
          </View>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={t('player.cta.done')} onPress={onClose} />
      </View>

      <PainSheet visible={visible && askingPain} after onPick={reportPain} onCancel={closePain} />
    </Animated.View>
  );
}

const CELL = 100 / 7 + '%';

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: ink.canvas },
  body: { paddingHorizontal: SIDE - 4, alignItems: 'stretch', gap: 12 },
  pressed: { opacity: 0.55 },
  card: cardStyle,
  head: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 20, paddingRight: 8, marginBottom: 8 },
  headStacked: { flexDirection: 'column-reverse', alignItems: 'stretch', paddingRight: 20 },
  mascotStacked: { alignSelf: 'center' },
  headText: { flex: 1, gap: 6 },
  title: { ...fonts.heavy(34, -0.8), color: ink.text },
  lead: { ...fonts.regular(19), color: ink.grey },
  stat: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 20 },
  statStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  statText: { flex: 1, alignSelf: 'stretch' },
  section: { marginTop: 20, gap: 12 },
  question: { ...fonts.heavy(24, -0.4), color: ink.text, paddingHorizontal: 4 },
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  option: {
    ...cardStyle,
    minHeight: 72,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 2,
    borderColor: bitepal.card,
  },
  optionHalf: { flexBasis: '46%', flexGrow: 1 },
  optionFull: { flexBasis: '100%' },
  optionOn: { borderColor: bitepal.selected, backgroundColor: bitepal.selectedSoft },
  optionIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  optionText: { ...fonts.bold(19), color: ink.text, flexShrink: 1, flexGrow: 1 },
  optionTick: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: bitepal.selected,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ack: { ...fonts.regular(17), color: ink.grey, paddingHorizontal: 4 },
  safety: { padding: 18, gap: 4 },
  safetyText: { ...fonts.regular(19), color: ink.text },
  easier: { alignSelf: 'flex-start', paddingHorizontal: 0 },
  month: { marginTop: 8, paddingBottom: 16 },
  monthHead: { paddingBottom: 8 },
  monthIcon: {
    width: STAT_RING,
    height: STAT_RING,
    borderRadius: STAT_RING / 2,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthName: { ...fonts.bold(19), color: ink.text, paddingHorizontal: 20, paddingBottom: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12 },
  cell: { width: CELL, textAlign: 'center' },
  cellBox: { width: CELL, alignItems: 'center', paddingVertical: 3 },
  weekday: { ...fonts.semibold(17), color: ink.label, paddingBottom: 6 },
  dayChip: { minWidth: 40, paddingVertical: 4, borderRadius: 12, borderCurve: 'continuous', alignItems: 'center' },
  dayChipToday: { backgroundColor: bitepal.primary },
  day: { ...fonts.semibold(17), color: ink.text, fontVariant: ['tabular-nums'] },
  dayAhead: { color: ink.label },
  dayDone: { ...fonts.heavy(17) },
  dayToday: { color: bitepal.onPrimary },
  dot: { width: 6, height: 6, borderRadius: 3, marginTop: 2 },
  next: { padding: 20, gap: 4 },
  nextTitle: { ...fonts.bold(19), color: ink.text },
  nextLine: { ...fonts.regular(17), color: ink.grey },
  dock: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: SIDE, paddingTop: 12, backgroundColor: ink.canvas },
});
