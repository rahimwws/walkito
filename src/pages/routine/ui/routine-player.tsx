import { useMemo } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { PROGRAM, TODAY_INDEX, recordSession, todayKey } from '@/entities/program';
import { type Protocol } from '@/entities/protocols';
import { palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { SessionView, type PlaylistStep } from '@/widgets/session-player';

type Props = {
  protocol: Protocol;
  /** Left early: back on the routine page. */
  onClose: () => void;
  /** Ran to the end and was recorded. */
  onFinished: () => void;
};

/**
 * A routine, running: the session player in a page sheet, over the routine page.
 *
 * Moved here from the old protocol sheet unchanged in what it does. The player
 * is handed the protocol's steps as a playlist, and a finished run is kept as a
 * `library` session, so it counts for the streak without completing today's
 * plan session (section 5.3 of the plan spec, `PROTOCOLS_ADVANCE_PROGRAM`).
 *
 * Mounted only while running, so every run starts a fresh player: its
 * countdown, clip and closing sheet carry nothing over from the last one.
 */
export function RoutinePlayer({ protocol, onClose, onFinished }: Props) {
  const scheme = useColorScheme();
  const t = useT();

  /**
   * A day object for the player, which needs one for its header.
   *
   * Today's, rewritten to recovery: a protocol is not the day's session and
   * must not be dressed as one. Nothing about the plan is read back from it.
   */
  const day = useMemo(
    () => ({
      ...PROGRAM[TODAY_INDEX],
      kind: 'recovery' as const,
      minutes: protocol.minutes,
      checkpoint: false,
    }),
    [protocol.minutes],
  );

  const playlist: readonly PlaylistStep[] = useMemo(
    () =>
      protocol.steps.map((step) => ({
        exerciseId: step.exerciseId,
        seconds: step.seconds,
        // The player's per-side machinery is exactly what `switchAtHalf`
        // describes: it halves the time, names the foot and taps at the change.
        perSide: step.switchAtHalf === true,
      })),
    [protocol],
  );

  return (
    <Modal visible animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      {/* The modal is its own root view, outside the navigator, so nothing
          paints it unless it does. */}
      <View style={[styles.player, { backgroundColor: palette[scheme].background }]}>
        <SessionView
          day={day}
          playlist={playlist}
          cue={t(protocol.cueKey)}
          title={t(protocol.titleKey)}
          free={protocol.free}
          onBack={onClose}
          onFinish={() => {
            recordSession({
              date: todayKey(),
              source: 'library',
              routineId: protocol.id,
              minutes: protocol.minutes,
              exercises: protocol.steps.map((step) => ({
                id: step.exerciseId,
                status: 'done' as const,
              })),
              feedback: null,
              inSessionPain: null,
              completedAt: Date.now(),
            });
            onFinished();
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  player: { flex: 1 },
});
