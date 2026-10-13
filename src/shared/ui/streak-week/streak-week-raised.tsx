import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { IconCircle3D, type IconCircleSize } from '@/shared/ui/icon-circle-3d';
import { useRaisedScheme } from '@/shared/ui/raised';

import { weekdayNames } from './streak-week';

/** The nodes a week row can stand on. `sm` wants about 330pt for seven with a
 * breath between them; anything narrower takes `xs`. */
export type StreakWeekRaisedSize = Extract<IconCircleSize, 'xs' | 'sm'>;

const NODE: Record<StreakWeekRaisedSize, number> = { xs: 32, sm: 44 };
/** The least room between two nodes before they read as one bar. */
const MIN_GAP = 4;

/** The node size that fits seven across `width` points. */
export function streakWeekNodeSize(width: number): StreakWeekRaisedSize {
  return width >= NODE.sm * 7 + MIN_GAP * 6 ? 'sm' : 'xs';
}

export type StreakWeekRaisedProps = {
  /** Which days of this week counted, Sunday-first. */
  done: readonly boolean[];
  /**
   * Which of them counted only because the plan said rest, Sunday-first. Drawn
   * as rest rather than as a flame. Omitted, every counted day is a flame.
   */
  rest?: readonly boolean[];
  /** Index of today, Sunday-first. Defaults to the real day. */
  today?: number;
  /** Default `sm`. Pick with `streakWeekNodeSize` when the row may be narrow. */
  size?: StreakWeekRaisedSize;
};

type Cell = 'earned' | 'rest' | 'open' | 'blank';

/**
 * The week as raised path nodes, Sunday-first: the streak sheet's row.
 *
 * A day that counted stands up in orange with the flame; a rest day the plan
 * gave is violet with the moon, because it counted just as much. Today, while
 * it is still open, is a plain node with a grey flame. Every other day, gone
 * by without anything on it or still to come, is the same empty node, so a
 * day missed is never drawn as one.
 *
 * Static: nothing here loops, so it costs nothing on a sheet left open.
 */
export function StreakWeekRaised({ done, rest, today = new Date().getDay(), size = 'sm' }: StreakWeekRaisedProps) {
  const t = useT();
  const language = useLanguage();
  const scheme = useRaisedScheme();
  const meter = meterColors[scheme];
  const short = weekdayNames(language, 'short');
  // Spelled out for the label a screen reader gets: "Wed" read aloud is a syllable.
  const long = weekdayNames(language, 'long');

  const cellOf = (index: number): Cell => {
    if (done[index] === true) return rest?.[index] === true ? 'rest' : 'earned';
    return index === today ? 'open' : 'blank';
  };

  const labelOf = (index: number, cell: Cell): string => {
    const day = long[index];
    const isToday = index === today;
    switch (cell) {
      case 'earned':
        return isToday ? t('streakSheet.dayTodayDone', { day }) : t('streakSheet.dayDone', { day });
      case 'rest':
        return t('streakSheet.dayRest', { day });
      case 'open':
        return t('streakSheet.dayToday', { day });
      case 'blank':
        // A day gone by with nothing on it is only its name: the row never
        // says a day was missed, aloud or otherwise.
        return index > today ? t('streakSheet.dayAhead', { day }) : day;
    }
  };

  return (
    <View style={styles.row}>
      {short.map((name, index) => {
        const isToday = index === today;
        const cell = cellOf(index);
        return (
          // Keyed by index: abbreviated weekdays are not unique in every language.
          <View key={index} style={styles.day}>
            <Text
              style={[
                isToday ? styles.nameToday : styles.name,
                { color: isToday ? palette[scheme].foreground : meter.caption },
              ]}
              numberOfLines={1}
              maxFontSizeMultiplier={1.2}
              importantForAccessibility="no"
              accessibilityElementsHidden>
              {name}
            </Text>
            <Node cell={cell} size={size} label={labelOf(index, cell)} unlit={meter.unit} />
          </View>
        );
      })}
    </View>
  );
}

function Node({
  cell,
  size,
  label,
  unlit,
}: {
  cell: Cell;
  size: StreakWeekRaisedSize;
  label: string;
  unlit: string;
}) {
  switch (cell) {
    case 'earned':
      return <IconCircle3D icon={FireIcon} size={size} tone="orange" accessibilityLabel={label} />;
    case 'rest':
      return <IconCircle3D icon={Moon02Icon} size={size} tone="violet" accessibilityLabel={label} />;
    case 'open':
      return (
        <IconCircle3D size={size} tone="neutral" accessibilityLabel={label}>
          <HugeiconsIcon icon={FireIcon} size={size === 'sm' ? 20 : 16} color={unlit} strokeWidth={2.2} />
        </IconCircle3D>
      );
    case 'blank':
      return <IconCircle3D size={size} tone="neutral" accessibilityLabel={label} />;
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    alignItems: 'center',
    gap: 8,
  },
  name: fonts.semibold(13),
  nameToday: fonts.heavy(13),
});
