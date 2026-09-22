import { accents } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';

export type SessionDoneSheetProps = {
  visible: boolean;
  /** Days in a row, including today. */
  streak: number;
  /** How many moves were just completed. */
  moves: number;
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
export function SessionDoneSheet({ visible, streak, moves, onClose }: SessionDoneSheetProps) {
  const scheme = useColorScheme();
  const t = useT();

  return (
    <CelebrationSheet
      visible={visible}
      title={t('widgets.sessionDoneTitle')}
      // Both lines were assembled here from an English singular and an English
      // plural. They are plural entries in the catalogue now, which is what
      // gets "2 дня" and "5 дней" right — the form Russian needs at 2, 3 and 4
      // has no English counterpart to have been built from.
      headline={t('widgets.sessionDoneStreak', { count: streak })}
      headlineColor={accents[scheme].orange.fill}
      blurb={t('widgets.sessionDoneBlurb', { count: moves })}
      onClose={onClose}
    />
  );
}
