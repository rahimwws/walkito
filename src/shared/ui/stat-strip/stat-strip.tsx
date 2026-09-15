import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { accents, fonts, palette, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const GLYPH_SIZE = 20;

export type StatStripItem = {
  icon?: IconSvgElement;
  /** A ready-made glyph, when the stroke set has no entry that reads at this
   * size. Wins over `icon`. */
  glyph?: ReactNode;
  /** Reads as one string, e.g. "2.4 mi" or "230 kCal". */
  value: string;
  /** Tints the glyph only — the value itself stays ink, as everywhere else. */
  accent?: AccentName;
};

export type StatStripAction = {
  icon: IconSvgElement;
  label: string;
  onPress: () => void;
};

export type StatStripProps = {
  items: readonly StatStripItem[];
  /** Trailing affordance, e.g. Share. Rendered in ink rather than tinted, so
   * it reads as an action rather than one more metric. */
  action?: StatStripAction;
};

/**
 * A compact line of secondary figures under a hero number: tinted glyph plus
 * value, repeated, with an optional action on the end.
 *
 * Use this where the figures are just context for the headline number. When a
 * value's progress towards a goal is the point, reach for `StatBar` instead —
 * it carries a meter, and this deliberately does not.
 *
 * Scrolls horizontally: four items fit a stock screen, but larger Dynamic Type
 * sizes overflow, and silently clipping a figure is worse than letting the row
 * slide. The scroller bleeds to the screen edge so an item leaving the row is
 * cut by the display rather than by a padded column.
 */
export function StatStrip({ items, action }: StatStripProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const tones = accents[scheme];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroller}
      contentContainerStyle={styles.content}>
      {items.map((item) => (
        <View key={item.value} style={styles.item}>
          {item.glyph ??
            (item.icon != null && (
              <HugeiconsIcon
                icon={item.icon}
                size={GLYPH_SIZE}
                color={item.accent ? tones[item.accent].fill : colors.foreground}
                strokeWidth={2}
              />
            ))}
          <Text style={[styles.value, { color: colors.foreground }]} numberOfLines={1}>
            {item.value}
          </Text>
        </View>
      ))}

      {action != null && (
        <Pressable
          onPress={action.onPress}
          style={({ pressed }) => [styles.item, pressed && { opacity: 0.6 }]}>
          <HugeiconsIcon
            icon={action.icon}
            size={GLYPH_SIZE}
            color={colors.foreground}
            strokeWidth={2}
          />
          <Text style={[styles.value, { color: colors.foreground }]} numberOfLines={1}>
            {action.label}
          </Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    marginHorizontal: -20,
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 18,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  value: {
    fontSize: 17,
    fontFamily: fonts.semibold,
  },
});
