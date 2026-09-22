import { StyleSheet, Text, View } from 'react-native';

import { painFor, statusFor, type DayStatus, type ProgramDay } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { CAPTION_CLEARANCE, captionFor } from '../model/day-caption';
import type { PathLayout } from '../model/path-layout';
import { PathConnector } from './path-connector';
import { PathNode } from './path-node';

export type PathTrailProps = {
  layout: PathLayout;
  /** Where the user stands, and whether today is already behind them. */
  cursor: number;
  doneToday: boolean;
  /** Program index of the day just finished, so its leg draws itself in. */
  justCompleted: number | null;
  onSelect: (day: ProgramDay, status: DayStatus) => void;
};

/** A leg is solid once the day it leaves from is behind the user and was
 * actually done. The trail breaks where a day was skipped — neutrally, in the
 * same gray as anything still ahead. */
function legIsDone(status: DayStatus): boolean {
  return status === 'done' || status === 'rest';
}

/** The zigzag itself: legs underneath, nodes on top, block dividers behind
 * both. Everything is absolutely positioned from the layout, so the ribbon
 * never depends on flow and can be scrolled to by coordinate. */
export function PathTrail({
  layout,
  cursor,
  doneToday,
  justCompleted,
  onSelect,
}: PathTrailProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const t = useT();

  return (
    <View style={{ height: layout.height }}>
      {layout.items.slice(0, -1).map((item, i) => {
        const status = statusFor(item.day, cursor, doneToday);
        const captioned = captionFor(item.day, status, t) != null;
        return (
          <PathConnector
            key={`leg-${item.day.index}`}
            from={item}
            to={layout.items[i + 1]}
            done={legIsDone(status)}
            animate={justCompleted === item.day.index}
            headExtra={captioned ? CAPTION_CLEARANCE : 0}
          />
        );
      })}

      {/* A quiet caption, no rules. A horizontal line drawn across a vertical
          ribbon fights it — the eye reads the path as cut in half rather than
          as marked out. The word alone gives the same rhythm and lets the
          trail run through. It still sits on an opaque chip so a leg passing
          behind it doesn't strike through the text. */}
      {layout.dividers.map((divider) => (
        <View key={divider.day} style={[styles.divider, { top: divider.y - 8 }]}>
          <Text
            style={[
              styles.dividerLabel,
              { color: meter.label, backgroundColor: colors.background },
            ]}>
            {divider.label.toUpperCase()}
          </Text>
        </View>
      ))}

      {layout.items.map((item) => {
        const status = statusFor(item.day, cursor, doneToday);
        return (
          <PathNode
            key={item.day.index}
            day={item.day}
            status={status}
            size={item.size}
            x={item.x}
            y={item.y}
            pain={legIsDone(status) ? painFor(item.day.index) : null}
            onPress={onSelect}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dividerLabel: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 1,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
});
