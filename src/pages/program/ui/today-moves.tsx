import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Card } from '@/shared/ui/card';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { ProgressBar } from '@/shared/ui/progress-bar';
import { thumbFor } from '@/widgets/session-player';

const EMOJI = 34;

/** A move's still, where its clip has one. Wide, as the clip is. */
const THUMB_WIDTH = 84;
const THUMB_HEIGHT = 56;

const TICK = 28;

export type TodayMove = {
  id: string;
  title: string;
  /** "3 × 12", "30 s"; null for a move with no counted dose (the habit). */
  dose: string | null;
  art: FluentName;
  /** Ticked today: on Home's list, or by the finished session. */
  done: boolean;
};

/**
 * Today's moves, as a checklist: how many are done as a count and a bar, then
 * one row per move with its still (or emoji), its name and dose, and a tick
 * once it is done. The ticks are the day log's (`exercisesDone`, which Home's
 * list writes and a finished session fills), so this list and Home's can
 * never disagree. Tapping a move opens its preview; it starts nothing.
 */
export function TodayMoves({ moves, onPreview }: { moves: readonly TodayMove[]; onPreview: (exerciseId: string) => void }) {
  const t = useT();

  const total = moves.length;
  const done = moves.filter((move) => move.done).length;

  return (
    <View style={styles.wrap}>
      <ProgressBar
        value={total === 0 ? 0 : done / total}
        label={t('pages.plan.movesTitle')}
        trailing={
          <Text style={styles.count} accessibilityElementsHidden importantForAccessibility="no">
            {t('pages.plan.movesProgress', { done, total })}
          </Text>
        }
        accessibilityLabel={t('pages.plan.movesTitle')}
        accessibilityValueText={t('pages.plan.movesDoneA11y', { done, total })}
      />

      <View style={styles.rows}>
        {moves.map((move) => {
          const name =
            move.dose == null ? move.title : t('pages.program.moveWithDose', { title: move.title, dose: move.dose });
          return (
            <Card
              key={move.id}
              padding={12}
              onPress={() => onPreview(move.id)}
              accessibilityLabel={
                move.done ? t('pages.plan.moveDoneA11y', { name }) : t('pages.plan.chipPreviewA11y', { name })
              }
              style={styles.row}>
              {thumbFor(move.id) != null ? (
                <Image source={thumbFor(move.id)!} resizeMode="cover" style={styles.thumb} accessibilityIgnoresInvertColors />
              ) : (
                <FluentIcon name={move.art} size={EMOJI} />
              )}
              <View style={styles.facts}>
                <Text style={styles.title} numberOfLines={2}>
                  {move.title}
                </Text>
                {move.dose != null && <Text style={styles.dose}>{move.dose}</Text>}
              </View>
              <View style={[styles.tick, move.done ? styles.tickDone : styles.tickOpen]}>
                {move.done && <HugeiconsIcon icon={Tick02Icon} size={18} color={colors.onInk} strokeWidth={2.5} />}
              </View>
            </Card>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 12,
  },
  count: { ...fonts.semibold(15), color: colors.text },
  rows: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumb: {
    width: THUMB_WIDTH,
    height: THUMB_HEIGHT,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  facts: {
    flex: 1,
    gap: 2,
  },
  title: {
    ...fonts.semibold(17),
    lineHeight: 22,
    color: colors.text,
  },
  dose: { ...fonts.regular(15), color: colors.text2 },
  tick: {
    width: TICK,
    height: TICK,
    borderRadius: TICK / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickOpen: {
    borderWidth: 2,
    borderColor: colors.separator,
  },
  tickDone: {
    backgroundColor: colors.good,
  },
});
