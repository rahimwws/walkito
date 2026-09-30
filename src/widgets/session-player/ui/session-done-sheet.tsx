import BandageIcon from '@hugeicons/core-free-icons/BandageIcon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import FeatherIcon from '@hugeicons/core-free-icons/FeatherIcon';
import Target02Icon from '@hugeicons/core-free-icons/Target02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  IN_SESSION_STOP_PAIN,
  noteInSessionPain,
  noteSessionFeedback,
  sessions,
  setLastSessionFeedback,
  stepBackAfterSession,
} from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';

import { SessionPainSheet } from './session-pain-sheet';

export type SessionDoneSheetProps = {
  visible: boolean;
  /** Days in a row, including today. */
  streak: number;
  /** How many moves were just completed. */
  moves: number;
  /** Stopped on a pain report rather than run to the end. */
  early?: boolean;
  /** Ask "How hard was that?". See `SessionViewProps.feedback`. */
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
  icon: typeof FeatherIcon;
  /** What the plan stores. "It hurt" is a hard session as far as the dose is
   * concerned; the pain score it goes on to ask for is kept on its own. */
  feedback: Feedback;
}[] = [
  { feel: 'easy', label: 'player.feedback.easy', icon: FeatherIcon, feedback: 'easy' },
  { feel: 'right', label: 'player.feedback.right', icon: Target02Icon, feedback: 'ok' },
  { feel: 'hard', label: 'player.feedback.hard', icon: Dumbbell01Icon, feedback: 'hard' },
  { feel: 'hurt', label: 'player.feedback.hurt', icon: BandageIcon, feedback: 'hard' },
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
 * The end of a session.
 *
 * The one place in the app allowed to celebrate finishing work, and it is
 * allowed because of what it is celebrating: not a step count, not a sensor
 * reading, but something the user chose to do. Everywhere else the rule is that
 * nothing congratulates — that rule exists to stop the app cheering at
 * somebody's pain, and there is no pain here to cheer at.
 *
 * The sheet itself is `CelebrationSheet`, shared with the paywall. What belongs
 * here is the copy, and the one question the plan needs answered.
 */
export function SessionDoneSheet({
  visible,
  streak,
  moves,
  early = false,
  feedback = false,
  startedAt,
  onClose,
}: SessionDoneSheetProps) {
  const t = useT();
  const scheme = useColorScheme();
  const [askingPain, setAskingPain] = useState(false);

  // The pain question goes down with the sheet: closing on Done while it was
  // up must not leave it waiting to reappear the next time the sheet opens.
  useEffect(() => {
    if (!visible) setAskingPain(false);
  }, [visible]);

  const reportPain = (score: number) => {
    setAskingPain(false);
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
        // Stopped on pain: no "nice work", and nothing about moves done. What
        // they need to hear is that it counts and what happens tomorrow.
        title={early ? t('widgets.sessionStoppedTitle') : t('widgets.sessionDoneTitle')}
        // Both lines were assembled here from an English singular and an English
        // plural. They are plural entries in the catalogue now, which is what
        // gets "2 дня" and "5 дней" right — the form Russian needs at 2, 3 and 4
        // has no English counterpart to have been built from.
        headline={early ? undefined : t('widgets.sessionDoneStreak', { count: streak })}
        headlineColor={accents[scheme].orange.fill}
        blurb={early ? t('widgets.sessionStoppedBlurb') : t('widgets.sessionDoneBlurb', { count: moves })}
        confetti={!early}
        emblem={!early}
        onClose={onClose}>
        {/* Skipped after a pain stop — that session already said how it went. */}
        {feedback && !early && (
          // Starts unanswered on every opening without being told to: the
          // celebration renders its children only while it is up, so each
          // opening mounts a fresh card.
          <FeelCard
            onAnswer={(feel) => {
              const entry = FEELS.find((candidate) => candidate.feel === feel);
              if (entry == null) return;
              remember(entry.feedback, startedAt);
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
 * "How hard was that?" — one card, four answers, none of them picked.
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
                  <HugeiconsIcon icon={entry.icon} size={18} color={ink} strokeWidth={1.8} />
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
