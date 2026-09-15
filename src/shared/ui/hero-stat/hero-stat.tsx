import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';

export type HeroStatProps = {
  /** The figure itself. Drives the roll, so pass the raw number. */
  value: number;
  /** How the figure reads. Defaults to a thousands-separated `value`; pass
   * this when the number needs its own formatting (a duration, a currency). */
  display?: string;
  /** Trailing label on the number's baseline, e.g. "Steps". */
  unit?: string;
  /** Target the value is working towards. Renders the trailing label as
   * "/ 10,000 Steps" rather than a bare unit. */
  goal?: number;
  /** Line above the number. A node rather than a string so callers can
   * emphasise part of it inline. */
  caption?: ReactNode;
  /** Point size of the figure. The unit and tracking scale from it. */
  size?: number;
};

/** Thousands separators without leaning on Intl, which is not guaranteed to be
 * present in every Hermes build. */
function withSeparators(value: number): string {
  const [whole, fraction] = Math.abs(value).toString().split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${value < 0 ? '-' : ''}${grouped}${fraction ? `.${fraction}` : ''}`;
}

/**
 * The one figure a screen is about: an oversized rolling number with a small
 * unit beside it and an optional caption above.
 *
 * On iOS the digits roll through SwiftUI's `numericText` transition whenever
 * `value` changes; elsewhere the fallback swaps the text outright. Either way
 * the layout is identical, because the unit is a static sibling rather than
 * part of the animated text.
 */
export function HeroStat({ value, display, unit, goal, caption, size = 64 }: HeroStatProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const colors = palette[scheme];
  const theme = meterColors[scheme];

  // "/ 10,000 Steps" when there's a target, otherwise the bare unit.
  const trailing =
    goal != null
      ? `/ ${withSeparators(goal)}${unit != null ? ` ${unit}` : ''}`
      : (unit ?? null);

  return (
    <View style={styles.block}>
      {caption != null && <View style={styles.caption}>{caption}</View>}
      {/* Fixed-height, bottom-aligned columns: SwiftUI Hosts don't self-size
          reliably inside flex, and `alignItems: 'baseline'` can't reach the
          text inside one — so the unit is padded up onto the digits' baseline
          instead. */}
      <View style={styles.row}>
        <View style={{ height: size * 1.14, justifyContent: 'center' }}>
          <AnimatedNumber
            text={display ?? withSeparators(value)}
            value={value}
            color={colors.foreground}
            fontSize={size}
            fontFamily={fonts.heavy}
            weight="heavy"
            duration={0.9}
          />
        </View>
        {trailing != null && (
          <View
            style={{
              height: size * 1.14,
              justifyContent: 'flex-end',
              paddingBottom: size * 0.2,
            }}>
            <Text style={[styles.unit, { color: theme.unit, fontSize: size * 0.28 }]}>
              {trailing}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 2,
  },
  caption: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  unit: {
    fontFamily: fonts.semibold,
  },
});
