import { Image, StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { IconCircle3D } from '@/shared/ui/icon-circle-3d';
import { ProgressBar3D } from '@/shared/ui/progress-bar-3d';
import { posterFor } from '@/widgets/session-player';

/** A move's emoji: inside the row's own height, so a row with a two-line name
 * is as tall as its text and no taller. */
const EMOJI = 34;

/** A move's still, where its clip has one: what the move looks like, before
 * anything plays. Wide, as the clip is. */
const THUMB_WIDTH = 84;
const THUMB_HEIGHT = 56;

export type TodayMove = {
  id: string;
  title: string;
  /** "3 × 12", "30 s"; null for a move with no counted dose (the habit). */
  dose: string | null;
  art: FluentName;
  accent: AccentName;
  /** Ticked today: on Home's list, or by the finished session. */
  done: boolean;
};

/**
 * Today's moves, as a checklist.
 *
 * One raised card per move: its emoji, its name, its dose as a chip in its
 * kind's colour, and a round 3D tick that fills once the move is done today.
 * Over them, how many are done as a count and a bar. The ticks are the day
 * log's (`exercisesDone`, which Home's list writes and a finished session
 * fills), so this list and Home's can never disagree about a move.
 *
 * Tapping a move opens its preview, as the chips on the old card did; it
 * starts nothing and ticks nothing. A tick never changes a move's colour:
 * the accent names the kind of work, not how it went.
 */
export function TodayMoves({ moves, onPreview }: { moves: readonly TodayMove[]; onPreview: (exerciseId: string) => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const total = moves.length;
  const done = moves.filter((move) => move.done).length;

  return (
    <View style={styles.wrap}>
      <View style={styles.head}>
        <Text accessibilityRole="header" style={[styles.label, { color: meter.caption }]}>
          {t('pages.plan.movesTitle')}
        </Text>
        <Text style={[styles.count, { color: colors.foreground }]} accessibilityElementsHidden importantForAccessibility="no">
          {t('pages.plan.movesProgress', { done, total })}
        </Text>
      </View>
      {/* No tap of its own as it fills: the moves are ticked on Home or by
          the session's end, both of which already mark the moment, and the
          plan is usually out of sight while they do. */}
      <ProgressBar3D
        value={total === 0 ? 0 : done / total}
        size="md"
        haptic={false}
        accessibilityLabel={t('pages.plan.movesTitle')}
        accessibilityValueText={t('pages.plan.movesDoneA11y', { done, total })}
      />

      <View style={styles.rows}>
        {moves.map((move) => {
          const name =
            move.dose == null ? move.title : t('pages.program.moveWithDose', { title: move.title, dose: move.dose });
          return (
            <Card3D
              key={move.id}
              material="solid"
              padding={12}
              onPress={() => onPreview(move.id)}
              accessibilityLabel={
                move.done ? t('pages.plan.moveDoneA11y', { name }) : t('pages.plan.chipPreviewA11y', { name })
              }
              contentStyle={styles.row}>
              {posterFor(move.id) != null ? (
                <Image source={posterFor(move.id)!} resizeMode="cover" style={styles.thumb} accessibilityIgnoresInvertColors />
              ) : (
                <FluentIcon name={move.art} size={EMOJI} />
              )}
              <View style={styles.facts}>
                <Text style={[styles.title, { color: colors.foreground }]} numberOfLines={2}>
                  {move.title}
                </Text>
                {move.dose != null && <Chip3D label={move.dose} accent={move.accent} />}
              </View>
              {/* The tick: an empty raised circle, filled and ticked once the
                  move is done. Read out with the card, not on its own. */}
              <IconCircle3D
                size="xs"
                tone={move.done ? 'primary' : 'neutral'}
                state={move.done ? 'done' : 'idle'}
                accessibilityLabel={name}
              />
            </Card3D>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 10,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
  },
  label: fonts.bold(12, 0.6),
  count: fonts.heavy(15),
  rows: {
    gap: 8,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumb: {
    width: THUMB_WIDTH,
    height: THUMB_HEIGHT,
    borderRadius: 14,
    borderCurve: 'continuous',
  },
  facts: {
    flex: 1,
    gap: 6,
    alignItems: 'flex-start',
  },
  title: {
    ...fonts.semibold(16, -0.2),
    lineHeight: 21,
  },
});
