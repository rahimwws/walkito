import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  IN_SESSION_STOP_PAIN,
  addDays,
  noteInSessionPain,
  noteSessionFeedback,
  planSettings,
  sessions,
  setLastSessionFeedback,
  stepBackAfterSession,
  todayKey,
  usualStartMinute,
  useNextSession,
  weekStartOf,
} from '@/entities/program';
import { PULSE_MIN_OTHERS, useCommunityPulse } from '@/entities/community';
import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import { colors, fonts, radius, space, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { PulseFaces } from '@/shared/ui/community-pulse';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { SessionPainSheet } from './session-pain-sheet';

export type SessionDoneSheetProps = {
  visible: boolean;
  /** How many moves were just completed. */
  moves: number;
  /** The session's length at the plan's dose, in whole minutes. */
  minutes: number;
  /** The plan day just done, for "Day 9 done". Absent for a routine or a
   * single move, which say "Done". */
  dayNumber?: number | null;
  /**
   * Finishing this run counts today: the host files it as a session or a
   * Library routine when the screen closes. Off for a run nothing is recorded
   * for (the pain check's relief moves). Default on.
   */
  counts?: boolean;
  /**
   * The development preview (`SessionDonePreview`): every answer goes nowhere.
   * A preview that filed a feedback note or stepped the plan back would change
   * the next real session.
   */
  preview?: boolean;
  /** Stopped on a pain report rather than run to the end. */
  early?: boolean;
  /** Ask how it felt. See `SessionViewProps.feedback`. */
  feedback?: boolean;
  /** When the session began, epoch ms — how the answer tells whether the host
   * has already filed the session it belongs to. See `remember`. */
  startedAt: number;
  onClose: () => void;
};

/** The four answers, in the order they are read: from not enough to too much. */
type Feel = 'easy' | 'right' | 'hard' | 'hurt';

type Feedback = 'easy' | 'ok' | 'hard';

/**
 * What the plan stores for each word. "It hurt" is a hard session as far as
 * the dose is concerned; the pain score it goes on to ask for is kept on its
 * own. "Hard" is not: effort near the limit is what the work is meant to
 * reach, so it keeps the level, as "Just right" does. Only pain steps the
 * plan down.
 */
const FEELS: readonly { feel: Feel; label: Key; feedback: Feedback }[] = [
  { feel: 'easy', label: 'sessionDone.feel.easy', feedback: 'easy' },
  { feel: 'right', label: 'sessionDone.feel.right', feedback: 'ok' },
  { feel: 'hard', label: 'sessionDone.feel.hard', feedback: 'ok' },
  { feel: 'hurt', label: 'sessionDone.feel.hurt', feedback: 'hard' },
];

/**
 * Whether the session this screen closes is already on file: the newest
 * record finishing after this session began can only be this session.
 */
function alreadyRecorded(startedAt: number): boolean {
  const all = sessions();
  const last = all[all.length - 1];
  return last != null && last.completedAt >= startedAt;
}

/** File the answer where it will be read. Never both, never neither. */
function remember(feedback: Feedback, startedAt: number): void {
  if (alreadyRecorded(startedAt)) {
    setLastSessionFeedback(feedback);
    // `noteSessionFeedback` reports itself; amending the record does not.
    track('session_feedback', { feedback });
    return;
  }
  noteSessionFeedback(feedback);
}

/** Days this week with a session, today included once this run is filed. */
function daysThisWeek(counts: boolean, now: number): number {
  const today = todayKey(now);
  const start = weekStartOf(today);
  const dates = new Set(sessions().filter((record) => record.date >= start).map((record) => record.date));
  if (counts) dates.add(today);
  return dates.size;
}

const IN_MS = 280;
const OUT_MS = 200;
const TICK = 96;

/**
 * The end of a session (spec §7.5, NTC #29, NRC #51, Gentler #50), a screen
 * of its own over the player: a big tick, "Day 9 done", three tiles (minutes,
 * moves, days this week), "How did that feel?" as four big words, the safety
 * line and "Make tomorrow easier" after "It hurt", when the next session is,
 * and Close. Showing up and effort only: never a pain figure, no streak toy.
 *
 * An absolutely-positioned layer rather than a `Modal`: the player already
 * runs in a sheet, a `Modal` nested in a presented sheet does not reliably
 * present on iOS, and the player's `onFinish` fires from this screen's Close.
 */
export function SessionDoneSheet({
  visible,
  moves,
  minutes,
  dayNumber = null,
  counts = true,
  preview = false,
  early = false,
  feedback = false,
  startedAt,
  onClose,
}: SessionDoneSheetProps) {
  const t = useT();
  const language = useLanguage();
  const insets = useSafeAreaInsets();
  const { fontScale } = useWindowDimensions();
  const next = useNextSession();
  const [mounted, setMounted] = useState(false);
  const [picked, setPicked] = useState<Feel | null>(null);
  const [askingPain, setAskingPain] = useState(false);
  const [easier, setEasier] = useState(false);
  const fade = useSharedValue(0);
  const tick = useSharedValue(0);

  // Read once per opening: the store does not move while the screen is up.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const week = useMemo(() => daysThisWeek(counts, Date.now()), [counts, visible]);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      setPicked(null);
      setEasier(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      fade.value = withTiming(1, { duration: IN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System });
      tick.value = 0.6;
      tick.value = withSpring(1, { damping: 12, stiffness: 180, reduceMotion: ReduceMotion.System });
      return;
    }
    setAskingPain(false);
    fade.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
  }, [visible, fade, tick]);

  const hostStyle = useAnimatedStyle(() => ({ opacity: fade.value }));
  const tickStyle = useAnimatedStyle(() => ({ transform: [{ scale: tick.value }] }));

  if (!mounted) return null;

  const reportPain = (score: number) => {
    setAskingPain(false);
    if (preview) return;
    // Onto the record being written, where the plan reads it; analytics never
    // does. Only onto one not yet written.
    if (!alreadyRecorded(startedAt)) noteInSessionPain(score);
    // A score this high after the work starts the next session lighter, as
    // the mid-session question does.
    if (score >= IN_SESSION_STOP_PAIN) {
      stepBackAfterSession();
      setEasier(true);
    }
  };

  const makeEasier = () => {
    Haptics.selectionAsync();
    if (!preview) stepBackAfterSession();
    setEasier(true);
  };

  // When the next session is: tomorrow at the time she is reminded, or the
  // day it falls on. Nothing when the plan has nothing ahead.
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
              day: new Intl.DateTimeFormat(language, { weekday: 'long' }).format(
                new Date(`${next.date}T12:00:00`),
              ),
            })
          : null;

  const stacked = fontScale >= 1.6;
  const title = early
    ? t('widgets.sessionStoppedTitle')
    : dayNumber != null
      ? t('sessionDone.dayDone', { day: dayNumber })
      : t('sessionDone.title');

  return (
    <Animated.View style={[styles.host, hostStyle]}>
      <ScrollView
        contentContainerStyle={[styles.body, { paddingTop: insets.top + 32 }]}
        showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.tick, tickStyle]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <HugeiconsIcon icon={Tick02Icon} size={52} color={colors.onInk} strokeWidth={2.6} />
        </Animated.View>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        {early && <Text style={styles.blurb}>{t('widgets.sessionStoppedBlurb')}</Text>}

        {!early && (
          <View style={[styles.tiles, stacked && styles.tilesStacked]}>
            <Tile label={t('sessionDone.tileMinutes')} value={t('sessionDone.minutes', { count: minutes })} a11y={t('sessionDone.tileSessionA11y', { count: minutes })} />
            <Tile label={t('sessionDone.tileMoves')} value={String(moves)} a11y={t('sessionDone.tileMovesA11y', { count: moves })} />
            <Tile label={t('sessionDone.tileWeek')} value={String(week)} a11y={t('sessionDone.tileWeekA11y', { count: week })} />
          </View>
        )}
        {!early && <TogetherLine />}

        {feedback && !early && (
          <View style={styles.feel}>
            <Text accessibilityRole="header" style={styles.section}>
              {t('sessionDone.feel.question')}
            </Text>
            <View style={styles.grid} accessibilityRole="radiogroup" accessibilityLabel={t('sessionDone.feel.question')}>
              {FEELS.map((entry) => {
                const selected = picked === entry.feel;
                return (
                  <Pressable
                    key={entry.feel}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    onPress={() => {
                      Haptics.selectionAsync();
                      setPicked(entry.feel);
                      if (!preview) remember(entry.feedback, startedAt);
                      if (entry.feel === 'hurt') setAskingPain(true);
                    }}
                    style={({ pressed }) => [
                      styles.word,
                      stacked && styles.wordStacked,
                      selected && styles.wordOn,
                      pressed && styles.pressed,
                    ]}>
                    <Text style={[styles.wordText, selected && styles.wordTextOn]}>{t(entry.label)}</Text>
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
              <View style={styles.safety}>
                <Text style={styles.safetyText}>{t('player.painRule.body')}</Text>
                {easier ? (
                  <Text style={styles.ack} accessibilityLiveRegion="polite">
                    {t('sessionDone.easierDone')}
                  </Text>
                ) : (
                  <Pressable
                    accessibilityRole="button"
                    onPress={makeEasier}
                    style={({ pressed }) => [styles.easier, pressed && styles.pressed]}>
                    <Text style={styles.easierText}>{t('sessionDone.easier')}</Text>
                  </Pressable>
                )}
              </View>
            )}
          </View>
        )}

        {nextLine != null && <Text style={styles.next}>{nextLine}</Text>}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <PrimaryButton label={t('common.close')} onPress={onClose} />
      </View>

      <SessionPainSheet visible={visible && askingPain} after onPick={reportPain} onCancel={() => setAskingPain(false)} />
    </Animated.View>
  );
}

/** One of the three facts, Gentler Streak's way: a small label over a big value. */
function Tile({ label, value, a11y }: { label: string; value: string; a11y: string }) {
  return (
    <View style={styles.tile} accessible accessibilityLabel={a11y}>
      <Text style={styles.tileLabel}>{label}</Text>
      <Text style={styles.tileValue}>{value}</Text>
    </View>
  );
}

/** The others who moved today, in one line under the tiles, on a finished session only. */
function TogetherLine() {
  const t = useT();
  const { othersToday } = useCommunityPulse();
  // Nothing until the server has answered, and nothing on a quiet night.
  if (othersToday == null || othersToday < PULSE_MIN_OTHERS) return null;
  return (
    <View style={styles.together} accessible accessibilityRole="text">
      <PulseFaces count={3} size={24} surface={colors.bg} />
      <Text style={styles.togetherText}>{t('community.alongside', { count: othersToday })}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: colors.bg },
  body: { paddingHorizontal: space.screen, paddingBottom: 140, alignItems: 'center' },
  pressed: { opacity: 0.6 },
  tick: {
    width: TICK,
    height: TICK,
    borderRadius: TICK / 2,
    backgroundColor: colors.good,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { ...fonts.bold(34, -0.6), color: colors.text, textAlign: 'center', marginTop: 20 },
  blurb: { ...fonts.regular(19), color: colors.text2, textAlign: 'center', marginTop: 8 },
  tiles: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 28,
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    paddingVertical: 16,
  },
  tilesStacked: { flexDirection: 'column', gap: 12, paddingHorizontal: 4 },
  tile: { flex: 1, paddingHorizontal: 14, gap: 2 },
  tileLabel: { ...fonts.regular(17), color: colors.text2 },
  tileValue: { ...fonts.bold(28, -0.4), color: colors.text, fontVariant: ['tabular-nums'] },
  together: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14 },
  togetherText: { ...fonts.regular(17), color: colors.text2, flexShrink: 1 },
  feel: { alignSelf: 'stretch', marginTop: space.section, gap: 12 },
  section: { ...fonts.semibold(20), color: colors.text },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  word: {
    flexBasis: '47%',
    flexGrow: 1,
    minHeight: 64,
    borderRadius: radius.button,
    borderCurve: 'continuous',
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  wordStacked: { flexBasis: '100%' },
  wordOn: { backgroundColor: colors.ink },
  wordText: { ...fonts.semibold(19), color: colors.text, textAlign: 'center' },
  wordTextOn: { color: colors.onInk },
  ack: { ...fonts.regular(17), color: colors.text2 },
  safety: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    padding: space.card,
    gap: 14,
  },
  safetyText: { ...fonts.regular(19), color: colors.text },
  easier: {
    minHeight: target.min,
    borderRadius: radius.button,
    borderCurve: 'continuous',
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  easierText: { ...fonts.semibold(19), color: colors.text, textAlign: 'center' },
  next: { ...fonts.medium(19), color: colors.text2, textAlign: 'center', marginTop: space.section },
  dock: { position: 'absolute', left: space.screen, right: space.screen, bottom: 0 },
});
