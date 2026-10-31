import { useEffect, useRef } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { finishDayOne, type DayOneRun } from '@/features/home-tour';
import { palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { SessionView } from '@/widgets/session-player';

export type DayOneSessionProps = {
  /** The run the "Day 1" card handed over, or null while it is not playing. */
  run: DayOneRun | null;
  /** Closed, finished or not: Home drops the run. */
  onClose: () => void;
};

/**
 * The day-one session, in a page sheet over Home.
 *
 * Here rather than in the tour that starts it: the player is a widget, a
 * layer above the tour's feature, so Home holds it, as it holds every other
 * session it opens. Free (`free`), because somebody who skipped the paywall is
 * given these two minutes too, and no "2 more good reps?" at the end: three
 * held stretches have no reps to judge, and the end of a first session is for
 * the win, not a form. Finishing files it (`finishDayOne`) and sends the tour
 * on; closing it before the end brings the card back.
 *
 * The page colour is on the sheet itself, not on the player, so the sheet
 * keeps it while it slides away with the player already gone.
 */
export function DayOneSession({ run, onClose }: DayOneSessionProps) {
  const scheme = useColorScheme();
  const t = useT();
  /** The last move ran out. A sheet swiped away over the closing sheet after
   * that still files the session: the two minutes were done. */
  const completed = useRef(false);
  useEffect(() => {
    completed.current = false;
  }, [run]);
  const finish = () => {
    if (run != null) finishDayOne(run);
    onClose();
  };
  const dismiss = () => {
    if (completed.current) finish();
    else onClose();
  };
  return (
    <Modal animationType="slide" presentationStyle="pageSheet" visible={run != null} onRequestClose={dismiss}>
      <View style={[styles.player, { backgroundColor: palette[scheme].background }]}>
        {run != null && (
          <SessionView
            day={run.day}
            playlist={run.steps}
            title={t('home.day1.title')}
            free
            feedback={false}
            onBack={dismiss}
            onComplete={() => {
              completed.current = true;
            }}
            onFinish={finish}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  player: { flex: 1 },
});
