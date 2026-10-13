import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import {
  IN_SESSION_STOP_PAIN,
  attended,
  currentDay,
  noteInSessionPain,
  noteSessionFeedback,
  sessions,
  setLastSessionFeedback,
  stepBackAfterSession,
  useStreak,
} from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

import { DoneMascot, DoneTiles, StreakChip } from './session-done-hero';
import { SessionPainSheet } from './session-pain-sheet';

export type SessionDoneSheetProps = {
  visible: boolean;
  /** How many moves were just completed. */
  moves: number;
  /** The session's length at the plan's dose, in whole minutes. */
  minutes: number;
  /**
   * Finishing this run counts today: the host files it as a session or a
   * Library routine when the sheet closes. Off for a run nothing is recorded
   * for (the pain check's relief moves), whose sheet must not add today to
   * the run on its own say-so. Default on.
   */
  counts?: boolean;
  /**
   * The development preview (`SessionDonePreview`): the sheet as it is, with
   * the real streak, but every answer goes nowhere. A preview that filed a
   * feedback note or stepped the plan back would change the next real session.
   */
  preview?: boolean;
  /** Stopped on a pain report rather than run to the end. */
  early?: boolean;
  /** Ask "Could you have done 2 more good reps?". See `SessionViewProps.feedback`. */
  feedback?: boolean;
  /** When the session began, epoch ms — how the answer tells whether the host
   * has already filed the session it belongs to. See `remember`. */
  startedAt: number;
  onClose: () => void;
};

/** The four answers, in the order they are read: from not enough to too much. */
type Feel = 'easy' | 'right' | 'hard' | 'hurt';

type Feedback = 'easy' | 'ok' | 'hard';

const FEELS: readonly {
  feel: Feel;
  label: Key;
  /** The answer's Fluent emoji, as the onboarding answers have: it keeps its
   * colours on the picked pill, which says the pick by its fill. */
  emoji: FluentName;
  /** What the plan stores. "It hurt" is a hard session as far as the dose is
   * concerned; the pain score it goes on to ask for is kept on its own. */
  feedback: Feedback;
}[] = [
  { feel: 'easy', label: 'player.feedback.easy', emoji: 'feather', feedback: 'easy' },
  { feel: 'right', label: 'player.feedback.right', emoji: 'target', feedback: 'ok' },
  { feel: 'hard', label: 'player.feedback.hard', emoji: 'strength', feedback: 'hard' },
  { feel: 'hurt', label: 'player.feedback.hurt', emoji: 'bandage', feedback: 'hard' },
];

/**
 * Whether the session this sheet closes is already on file.
 *
 * The hosts record a session when the sheet closes — `onFinish` fires from
 * here, on the way out — so while the question is on screen the answer is
 * normally a note for a record not yet written. But the order is the host's to
 * choose, and an answer held for a record that was filed a moment ago would be
 * held for the next session instead, or for nothing. So it looks: the newest
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

/**
 * The run and the days of care as they will stand once this session is filed.
 *
 * The host records the session when the sheet closes, so while it is up the
 * streak still reads as if today were empty: a first session would say "0 days
 * in a row". Today is added here, once, unless something already counted it
 * (a morning check-in, a session earlier today, a rest day) or this run will
 * not be filed at all.
 */
function withToday(current: number, total: number, counts: boolean): { run: number; care: number } {
  if (!counts || attended(currentDay())) return { run: current, care: total };
  return { run: current + 1, care: total + 1 };
}

/** The mascot on the card's edge, by the room the screen has: the sheet has
 * to fit the feedback question under him on the smallest phone. */
function mascotSize(windowHeight: number): number {
  return Math.round(Math.min(156, Math.max(104, windowHeight * 0.17)));
}

/**
 * The end of a session.
 *
 * The one place in the app allowed to celebrate finishing work, and it is
 * allowed because of what it is celebrating: not a step count, not a sensor
 * reading, but something the user chose to do. Everywhere else the rule is that
 * nothing congratulates — that rule exists to stop the app cheering at
 * somebody's pain, and there is no pain here to cheer at.
 *
 * The sheet itself is `CelebrationSheet`, shared with the paywall. What belongs
 * here is the hero and the one question the plan needs answered. The hero is
 * the mascot jumping on the card's edge, "Nice work.", the run in an orange
 * chip, and three tiles: the minutes, the moves, and every day of care so far.
 * The tiles say what the old blurb said ("All 5 moves done"), so the blurb is
 * gone from this state rather than said twice.
 */
export function SessionDoneSheet({
  visible,
  moves,
  minutes,
  counts = true,
  preview = false,
  early = false,
  feedback = false,
  startedAt,
  onClose,
}: SessionDoneSheetProps) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const { height } = useWindowDimensions();
  const streak = useStreak();
  // Keyed on the streak, which is a new object only when a log is written:
  // this sheet sits mounted under a player that re-renders every second, and
  // asking whether today counts reads the plan's store.
  const { run, care } = useMemo(
    () => withToday(streak.current, streak.total, counts),
    [streak, counts],
  );
  const [askingPain, setAskingPain] = useState(false);

  // The pain question goes down with the sheet: closing on Done while it was
  // up must not leave it waiting to reappear the next time the sheet opens.
  useEffect(() => {
    if (!visible) setAskingPain(false);
  }, [visible]);

  const reportPain = (score: number) => {
    setAskingPain(false);
    if (preview) return;
    // Onto the record being written, where the plan reads it; analytics never
    // does. Only onto one not yet written: held for a session already on file
    // it would be picked up by whatever is recorded next.
    if (!alreadyRecorded(startedAt)) noteInSessionPain(score);
    // The same line the mid-session question draws, for the same evidence: a
    // score this high after the work is a reason to start the next one lighter.
    if (score >= IN_SESSION_STOP_PAIN) stepBackAfterSession();
  };

  return (
    <>
      <CelebrationSheet
        visible={visible}
        // Stopped on pain: no "nice work", no chip, no tiles of what was done.
        // What they need to hear is that it counts and what happens tomorrow,
        // from a mascot who nods rather than jumps, with no confetti and no
        // sound.
        title={early ? t('widgets.sessionStoppedTitle') : t('widgets.sessionDoneTitle')}
        blurb={early ? t('widgets.sessionStoppedBlurb') : undefined}
        confetti={!early}
        mascot={
          <DoneMascot calm={early} size={mascotSize(height)} surface={colors.card} paused={askingPain} />
        }
        onClose={onClose}>
        {!early && (
          <>
            {/* A plural entry in the catalogue, which is what gets "2 дня" and
                "5 дней" right. Not drawn for a run that is still nothing: a
                relief session on an empty day files nothing to count. */}
            {run > 0 && <StreakChip count={run} />}
            <DoneTiles minutes={minutes} moves={moves} care={care} />
          </>
        )}
        {/* Skipped after a pain stop — that session already said how it went. */}
        {feedback && !early && (
          // Starts unanswered on every opening without being told to: the
          // celebration renders its children only while it is up, so each
          // opening mounts a fresh card.
          <FeelCard
            onAnswer={(feel) => {
              const entry = FEELS.find((candidate) => candidate.feel === feel);
              if (entry == null) return;
              if (!preview) remember(entry.feedback, startedAt);
              if (feel === 'hurt') setAskingPain(true);
            }}
          />
        )}
      </CelebrationSheet>

      {/* After the celebration in the tree, so it draws over it: both are
          overlays at the same height, and the later one wins. */}
      <SessionPainSheet
        visible={visible && askingPain}
        after
        onPick={reportPain}
        onCancel={() => setAskingPain(false)}
      />
    </>
  );
}

/**
 * "Could you have done 2 more good reps?" — one card, four answers, none picked.
 *
 * It replaced a segmented control that sat on "OK" before anyone touched it.
 * That preselection was the problem: a session closed without an answer read
 * exactly like one answered "OK", and the plan could not tell a person who
 * found it fine from a person who did not look. Nothing is chosen here until
 * somebody chooses it, and skipping it is simply pressing Done.
 *
 * The purpose line is why anybody answers. A question with no stated use reads
 * as a survey; this one changes the next session, and says so.
 *
 * Neutral pills. "Too hard" and "It hurt" are information for the plan, not
 * failures, so nothing here is coloured by which answer it is — the chosen one
 * is simply inked in, as a selection is everywhere else in the app.
 */
function FeelCard({ onAnswer }: { onAnswer: (feel: Feel) => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [picked, setPicked] = useState<Feel | null>(null);

  const rows = [FEELS.slice(0, 2), FEELS.slice(2, 4)];

  return (
    <View style={[styles.card, { backgroundColor: meter.iconTile }]}>
      <Text style={[styles.question, { color: colors.foreground }]}>
        {t('player.feedback.question')}
      </Text>

      {/* Swapped for the acknowledgement once there is an answer, in the same
          slot and at the same height, so the pills never move under a finger
          that might want to change its mind. */}
      <View style={styles.line} accessibilityLiveRegion="polite">
        {picked != null && (
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} color={meter.label} strokeWidth={2} />
        )}
        <Text style={[styles.lineText, { color: picked == null ? meter.caption : meter.label }]}>
          {picked == null
            ? t('player.feedback.purpose')
            : picked === 'right'
              ? t('player.feedback.keeps')
              : t('player.feedback.adjusts')}
        </Text>
      </View>

      <View
        style={styles.grid}
        accessibilityRole="radiogroup"
        accessibilityLabel={t('player.feedback.question')}>
        {rows.map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((entry) => {
              const selected = picked === entry.feel;
              const ink = selected ? colors.background : colors.foreground;
              return (
                <Pressable
                  key={entry.feel}
                  accessibilityRole="radio"
                  accessibilityState={{ selected }}
                  accessibilityLabel={t(entry.label)}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setPicked(entry.feel);
                    onAnswer(entry.feel);
                  }}
                  style={({ pressed }) => [
                    styles.pill,
                    { backgroundColor: selected ? colors.foreground : colors.card },
                    pressed && { opacity: 0.6 },
                  ]}>
                  <FluentIcon name={entry.emoji} size={22} />
                  <Text style={[styles.pillText, { color: ink }]} numberOfLines={1} adjustsFontSizeToFit>
                    {t(entry.label)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    borderRadius: 24,
    borderCurve: 'continuous',
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 12,
    marginTop: 18,
  },
  question: {
    ...fonts.bold(17, -0.3),
    textAlign: 'center',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
    paddingHorizontal: 8,
    // One line of either text, so the grid below never shifts when the
    // purpose gives way to the acknowledgement.
    minHeight: 20,
  },
  lineText: {
    ...fonts.medium(14),
    textAlign: 'center',
    flexShrink: 1,
  },
  grid: { gap: 8, marginTop: 14 },
  row: { flexDirection: 'row', gap: 8 },
  pill: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    borderCurve: 'continuous',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 10,
  },
  pillText: {
    ...fonts.semibold(15, -0.2),
    flexShrink: 1,
  },
});
