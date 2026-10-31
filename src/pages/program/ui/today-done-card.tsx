import ChartLineData02Icon from '@hugeicons/core-free-icons/ChartLineData02Icon';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D, cardColours } from '@/shared/ui/card-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { idleRig, thumbsUpRig } from '@/shared/ui/mascot';

import { EarnedToday, type EarnedTodayProps } from './earned-today';
import { TodayMascot } from './plan-mascot';

/** The mascot in the header's corner: about as tall as "Today" and the title
 * under it, so he stands beside them rather than over the tiles. */
const MASCOT = 64;

export type TodayDoneCardProps = {
  /** Today's title as it read before the session: "Test day", "Mobility · mornings". */
  title: string;
  /** What the day earned: the tiles and the next sticker's bar. */
  earned: EarnedTodayProps;
  /** A flare day stays calm: he stands at ease, no thumbs up. */
  calm: boolean;
  /** A finished test day: its results again, read-only. */
  onResults?: () => void;
  /** A sheet is over the plan: the mascot holds still under it. */
  covered?: boolean;
};

/**
 * A finished day, leading the plan: what today was and what it earned, in one
 * card.
 *
 * A small header, "Today" over the day's title with a tick after it, and on a
 * test day "See results", the way back to its numbers; the screen's one
 * mascot in the corner. Under it the day's earnings exactly as the session's
 * celebration showed them (`EarnedToday`): the minutes, the moves or tests,
 * the run of days, and the next sticker's bar. No second card says the day is
 * done: the goal's stations under it and tomorrow under those are all that
 * follows.
 *
 * Showing up and effort only: never a pain figure, never a test result.
 */
export function TodayDoneCard({ title, earned, calm, onResults, covered = false }: TodayDoneCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const face = cardColours(scheme).face;

  return (
    <Card3D size="lg" material="solid" padding={16} contentStyle={styles.content}>
      <View style={styles.head}>
        <View style={styles.heading}>
          <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('pages.plan.todayEyebrow')}</Text>
          {/* The tick is drawn; a screen reader hears it as "Done for today". */}
          <View
            style={styles.titleRow}
            accessible
            accessibilityRole="header"
            accessibilityLabel={title}
            accessibilityValue={{ text: t('pages.plan.doneToday') }}>
            <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
            <FluentIcon name="check" size={20} />
          </View>
          {/* The moment somebody wants the numbers again is not the moment
              they were first shown. */}
          {onResults != null && (
            <Button3D
              label={t('pages.plan.seeResults')}
              variant="secondary"
              size="sm"
              icon={ChartLineData02Icon}
              iconPosition="leading"
              align="start"
              onPress={onResults}
              style={styles.results}
            />
          )}
        </View>

        {/* The one mascot in frame. Decoration: the words say the day is
            done. Keyed by pose, so a flare day is its own mascot. */}
        <View
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={styles.mascot}>
          <TodayMascot
            key={calm ? idleRig.name : thumbsUpRig.name}
            rig={calm ? idleRig : thumbsUpRig}
            size={MASCOT}
            surface={face}
            covered={covered}
            shot={calm ? undefined : 'nod'}
          />
        </View>
      </View>

      <EarnedToday {...earned} />
    </Card3D>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 14,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  heading: {
    flex: 1,
    gap: 2,
    paddingTop: 2,
  },
  eyebrow: fonts.bold(12, 0.6),
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flexShrink: 1,
    ...fonts.heavy(20, -0.4),
    lineHeight: 25,
  },
  results: {
    marginTop: 8,
  },
  /** Pulled into the card's padding, so the figure stands in the corner and
   * the heading keeps the width. */
  mascot: {
    width: MASCOT,
    height: MASCOT,
    marginTop: -6,
    marginRight: -4,
  },
});
