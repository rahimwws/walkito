import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { useStickers } from '@/features/stickers';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { ProgressBar3D } from '@/shared/ui/progress-bar-3d';

const EMOJI = 30;

export type FinishRewardProps = {
  /**
   * The streak as it stands, when finishing today would add today to it.
   * Null when today already counts (a check-in did it), so the row never
   * promises a day that is already in.
   */
  streak: number | null;
};

/**
 * What finishing today earns, from the real counts: the streak's flame going
 * from today's number to the next, and the next sticker's bar. The sticker is
 * read here, from the album (`useStickers`), so its history is only worked
 * out while there is a session to finish.
 *
 * Only what the plan's own dose earns. A session counts once a day, so there
 * is nothing here a second session could move, and no points, no currency,
 * nothing to buy. Nothing is lost by not finishing either: no warning, no
 * countdown, no red.
 */
export function FinishReward({ streak }: FinishRewardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const next = useStickers().nextSession;
  const sticker = next == null ? null : { name: next.sticker.label(t), have: next.have, need: next.need };
  if (streak == null && sticker == null) return null;

  const streakLine =
    streak == null
      ? null
      : streak === 0
        ? t('pages.plan.rewardStreakStart')
        : t('pages.plan.rewardStreak', { count: streak + 1 });
  const stickerLine =
    sticker == null
      ? null
      : sticker.need - sticker.have <= 1
        ? t('pages.plan.rewardStickerLast', { name: sticker.name })
        : t('pages.plan.rewardSticker', { name: sticker.name });

  return (
    <Card3D material="solid" padding={14} contentStyle={styles.content}>
      <Text accessibilityRole="header" style={[styles.label, { color: meter.caption }]}>
        {t('pages.plan.rewardTitle')}
      </Text>

      {streak != null && streakLine != null && (
        <View style={styles.row} accessible accessibilityLabel={streakLine}>
          <FluentIcon name="fire" size={EMOJI} />
          <View style={styles.facts}>
            {/* The flame's number now and after: the same figure the
                capsule in the header shows, one day on. */}
            <View style={styles.flame} importantForAccessibility="no-hide-descendants">
              <Text style={[styles.figure, { color: meter.caption }]}>{String(streak)}</Text>
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} color={meter.caption} strokeWidth={2.4} />
              <Text style={[styles.figure, { color: accents[scheme].orange.fill }]}>{String(streak + 1)}</Text>
            </View>
            <Text style={[styles.line, { color: colors.foreground }]}>{streakLine}</Text>
          </View>
        </View>
      )}

      {sticker != null && stickerLine != null && <NextStickerRow sticker={sticker} line={stickerLine} />}
    </Card3D>
  );
}

/** The next session sticker, by name, and how many session days it has. */
export type StickerProgress = { name: string; have: number; need: number };

/**
 * The next sticker's row: the trophy, a line naming it, and its bar with the
 * count beside it. Here before the session, and under the tiles once the day
 * is done (`EarnedToday`), so the two read as the same bar a day apart. The
 * line is the caller's, because what it says depends on whether today is in.
 */
export function NextStickerRow({ sticker, line }: { sticker: StickerProgress; line: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  return (
    <View style={styles.row}>
      <FluentIcon name="trophy" size={EMOJI} />
      <View style={styles.facts}>
        {/* Said once, by the bar under it, with how far along. */}
        <Text style={[styles.line, { color: colors.foreground }]} accessibilityElementsHidden importantForAccessibility="no">
          {line}
        </Text>
        <View style={styles.bar}>
          <ProgressBar3D
            value={sticker.need === 0 ? 0 : sticker.have / sticker.need}
            size="sm"
            accent="amber"
            haptic={false}
            accessibilityLabel={line}
            accessibilityValueText={t('pages.plan.rewardStickerCountA11y', {
              have: sticker.have,
              need: sticker.need,
            })}
            style={styles.track}
          />
          <Text style={[styles.count, { color: meter.caption }]} accessibilityElementsHidden importantForAccessibility="no">
            {t('pages.plan.rewardStickerCount', { have: sticker.have, need: sticker.need })}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  label: fonts.bold(12, 0.6),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  facts: {
    flex: 1,
    gap: 4,
  },
  flame: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  figure: fonts.heavy(20, -0.3),
  line: {
    ...fonts.semibold(15),
    lineHeight: 20,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
  },
  track: {
    flex: 1,
  },
  count: fonts.bold(13),
});
