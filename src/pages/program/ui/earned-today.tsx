import { StyleSheet, View } from 'react-native';

import { useStickers } from '@/features/stickers';
import { useT } from '@/shared/lib/i18n';
import { STAT_TILE_STAGGER_MS, StatTile } from '@/shared/ui/stat-tile';

import { NextStickerRow } from './finish-reward';

export type EarnedTodayProps = {
  /** Today's minutes, at the plan's dose: see `earnedToday`. */
  minutes: number;
  /** Moves done today, or tests on a test day. */
  count: number;
  /** Today was a test day: the work is counted in tests, with the ruler. */
  test: boolean;
  /** The streak as it stands, today included. No tile below one. */
  streak: number;
  /** Wait before the first tile rises: the block's own entrance first. */
  delayMs?: number;
};

/**
 * What a finished day earned: three tiles and the next sticker's bar.
 *
 * No card of its own: it is the body of the card that leads a finished day
 * (`TodayDoneCard`), whose header says what the day was and that it is done.
 * The minutes, the moves (or the tests, on a test day) and the run of days, in
 * the tiles the session's celebration uses, so the plan says again what was
 * just celebrated rather than something new.
 * Under them the next session sticker's bar as it stands with today in, the
 * bar the plan showed before the session one step on.
 *
 * Showing up and effort only. Never a pain figure, never a test result (the
 * tests tile counts tests taken, not what they measured), never minutes beyond
 * the plan's dose. The sticker is read here, from the album, so its history is
 * worked out only on a finished day.
 */
export function EarnedToday({ minutes, count, test, streak, delayMs = 0 }: EarnedTodayProps) {
  const t = useT();
  const next = useStickers().nextSession;
  const sticker = next == null ? null : { name: next.sticker.label(t), have: next.have, need: next.need };
  const stickerLine =
    sticker == null
      ? null
      : sticker.need - sticker.have === 1
        ? t('pages.plan.earnedStickerLast', { name: sticker.name })
        : t('pages.plan.rewardSticker', { name: sticker.name });

  return (
    <View style={styles.content}>
      <View style={styles.tiles}>
        <StatTile
          label={t('pages.plan.earnedMinutes')}
          value={minutes}
          emoji="timer"
          accent="blue"
          delayMs={delayMs}
          accessibilityLabel={t('pages.plan.earnedMinutesA11y', { count: minutes })}
          style={styles.tile}
        />
        <StatTile
          label={test ? t('pages.plan.earnedTests') : t('pages.plan.earnedMoves')}
          value={count}
          emoji={test ? 'test' : 'strength'}
          accent={test ? 'amber' : 'violet'}
          delayMs={delayMs + STAT_TILE_STAGGER_MS}
          accessibilityLabel={
            test ? t('pages.plan.earnedTestsA11y', { count }) : t('pages.plan.earnedMovesA11y', { count })
          }
          style={styles.tile}
        />
        {streak > 0 && (
          <StatTile
            label={t('pages.plan.earnedStreak')}
            value={streak}
            emoji="fire"
            accent="orange"
            delayMs={delayMs + STAT_TILE_STAGGER_MS * 2}
            accessibilityLabel={t('streakSheet.inARow', { count: streak })}
            style={styles.tile}
          />
        )}
      </View>

      {sticker != null && stickerLine != null && <NextStickerRow sticker={sticker} line={stickerLine} />}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 14,
  },
  tiles: {
    flexDirection: 'row',
    gap: 8,
  },
  /** Three share the width on the narrowest phone too: the tile's own 96pt
   * floor would push the third past the edge at 375pt. */
  tile: {
    minWidth: 0,
  },
});
