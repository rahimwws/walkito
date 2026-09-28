import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { noteSessionFeedback } from '@/entities/program';
import { accents, fonts, meterColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';
import { SegmentedControl } from '@/shared/ui/segmented-control';

export type SessionDoneSheetProps = {
  visible: boolean;
  /** Days in a row, including today. */
  streak: number;
  /** How many moves were just completed. */
  moves: number;
  /** Stopped on a pain report rather than run to the end. */
  early?: boolean;
  onClose: () => void;
};

/**
 * The end of a session.
 *
 * The one place in the app allowed to celebrate finishing work, and it is
 * allowed because of what it is celebrating: not a step count, not a sensor
 * reading, but something the user chose to do. Everywhere else the rule is that
 * nothing congratulates — that rule exists to stop the app cheering at
 * somebody's pain, and there is no pain here to cheer at.
 *
 * The sheet itself is `CelebrationSheet`, shared with the paywall. All that
 * belongs here is the copy.
 */
export function SessionDoneSheet({ visible, streak, moves, early = false, onClose }: SessionDoneSheetProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const [feel, setFeel] = useState<number | null>(null);

  return (
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
      {/* The one question the plan needs from a finished session: two
          "easy" in a row move the exercise up, a "hard" steps it back. Skipped
          after a pain stop — that session already said how it felt. */}
      {!early && (
        <View style={styles.feel}>
          <Text style={[styles.feelQuestion, { color: meter.caption }]}>{t('widgets.feelQuestion')}</Text>
          <SegmentedControl
            segments={[t('widgets.feelEasy'), t('widgets.feelOk'), t('widgets.feelHard')]}
            selectedIndex={feel ?? 1}
            onChange={(index) => {
              setFeel(index);
              noteSessionFeedback(FEELS[index]);
            }}
          />
        </View>
      )}
    </CelebrationSheet>
  );
}

const FEELS = ['easy', 'ok', 'hard'] as const;

const styles = StyleSheet.create({
  feel: {
    alignSelf: 'stretch',
    gap: 10,
    marginTop: 18,
  },
  feelQuestion: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    textAlign: 'center',
  },
});
