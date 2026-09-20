import { accents } from '@/shared/config';
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

  return (
    <CelebrationSheet
      visible={visible}
      title="Nice work."
      headline={`${streak} ${streak === 1 ? 'day' : 'days'} in a row`}
      headlineColor={accents[scheme].orange.fill}
      blurb={`${moves === 1 ? 'One move' : `All ${moves} moves`} done. Small and often is what moves this.`}
      onClose={onClose}
    />
  );
}
