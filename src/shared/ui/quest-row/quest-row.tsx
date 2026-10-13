import { type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Children, Fragment, useEffect, useRef, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RAISED_BORDER, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { Card3D, cardColours } from '@/shared/ui/card-3d';
import { IconCircle3D } from '@/shared/ui/icon-circle-3d';
import { ProgressBar3D } from '@/shared/ui/progress-bar-3d';
import { useRaisedScheme } from '@/shared/ui/raised';

export type QuestRowProps = {
  icon: IconSvgElement;
  accent: AccentName;
  /** One whole sentence: "Check in on 3 of your plan's days". */
  title: string;
  progress: number;
  /** Never more than the plan's own days, never minutes or repetitions. */
  goal: number;
  /** Inside the bar. Default the notation "1 / 3", which reads the same in
   * every language the app ships. */
  progressLabel?: string;
  /**
   * The reward overlapping the bar's end: a `StickerTile` at `xs`. A sticker
   * that turns `new` in the render that completes the quest gets `quiet`: the
   * row's success tap stands for both, and two haptics in half a second read
   * as a buzz rather than as a reward.
   */
  reward?: ReactNode;
  done: boolean;
  /** Skips the success tap, for a moment where a sheet already fires one. */
  quiet?: boolean;
  /** The row read as one: title and progress, from the catalogue. */
  accessibilityLabel: string;
};

/**
 * One quest: an icon, what it asks, and how far along it is.
 *
 * The quests reward showing up, never volume: check in on the plan's days, do
 * today's planned session, honour a rest day, open a guide. What counts and
 * when lives in `features/quests`; this row only draws what it is told.
 *
 * Done is the bar full, the icon filled in its accent with a tick, and one
 * success tap: the bar's own arrival tap is off here. The row stays, with no
 * strike-through. A quest not finished by the week's end resets quietly: there
 * is no failed or expired state to draw.
 *
 * The row is one element to a screen reader, read by `accessibilityLabel`.
 * Its icon and bar are hidden from it, or TalkBack would stop on the row, then
 * the icon, then the bar.
 */
export function QuestRow({
  icon,
  accent,
  title,
  progress,
  goal,
  progressLabel,
  reward,
  done,
  quiet = false,
  accessibilityLabel,
}: QuestRowProps) {
  const scheme = useRaisedScheme();
  const shown = done ? goal : Math.min(Math.max(progress, 0), goal);
  const value = goal > 0 ? shown / goal : 0;

  const wasDone = useRef(done);
  useEffect(() => {
    if (done && !wasDone.current && !quiet) {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    wasDone.current = done;
  }, [done, quiet]);

  return (
    <View accessible accessibilityLabel={accessibilityLabel}>
      <View
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
        style={styles.row}>
        <IconCircle3D
          icon={icon}
          size="sm"
          tone={done ? accent : 'neutral'}
          state={done ? 'done' : 'idle'}
          accessibilityLabel={title}
        />
        <View style={styles.middle}>
          <Text style={[styles.title, { color: palette[scheme].foreground }]} maxFontSizeMultiplier={1.4}>
            {title}
          </Text>
          <ProgressBar3D
            value={value}
            size="lg"
            accent={accent}
            label={progressLabel ?? `${shown} / ${goal}`}
            trailing={reward}
            haptic={false}
            accessibilityLabel={title}
          />
        </View>
      </View>
    </View>
  );
}

export type QuestsCardProps = {
  title: string;
  /** "Resets Monday". Never a countdown: a quest has no deadline to race. */
  caption?: string;
  /** Leans the card to an accent; quests are amber. Omit for neutral. */
  tone?: AccentName;
  /** `QuestRow`s, divided by the card. */
  children: ReactNode;
};

/** The week's quests on one raised card, rows divided by its own edge. */
export function QuestsCard({ title, caption, tone, children }: QuestsCardProps) {
  const scheme = useRaisedScheme();
  const rows = Children.toArray(children);
  const { edge } = cardColours(scheme, tone);
  return (
    <Card3D size="md" tone={tone} padding={0}>
      <View style={styles.header}>
        <Text style={[styles.heading, { color: palette[scheme].foreground }]} accessibilityRole="header">
          {title}
        </Text>
        {caption != null && (
          <Text style={[styles.caption, { color: meterColors[scheme].caption }]}>{caption}</Text>
        )}
      </View>
      {rows.map((row, index) => (
        <Fragment key={index}>
          <View style={[styles.divider, { backgroundColor: edge }]} />
          <View style={styles.rowPad}>{row}</View>
        </Fragment>
      ))}
    </Card3D>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  middle: {
    flex: 1,
    gap: 8,
  },
  title: fonts.bold(16, -0.2),
  header: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
  },
  heading: fonts.heavy(17),
  caption: fonts.medium(14),
  divider: {
    height: RAISED_BORDER,
  },
  rowPad: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
});
