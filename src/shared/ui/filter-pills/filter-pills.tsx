import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { fonts, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const THEME = {
  light: {
    idleFill: 'rgba(17,17,20,0.05)',
    activeFill: 'rgba(17,17,20,0.10)',
    idleLabel: '#77777E',
    glassTint: 'rgba(255,255,255,0.35)',
  },
  dark: {
    idleFill: 'rgba(255,255,255,0.06)',
    activeFill: 'rgba(255,255,255,0.14)',
    idleLabel: '#9E9EA6',
    glassTint: 'rgba(255,255,255,0.06)',
  },
} as const;

export type FilterPillsProps = {
  options: readonly string[];
  selectedIndex: number;
  onChange: (index: number) => void;
};

/**
 * A scrolling row of independent filter chips.
 *
 * Deliberately not a variant of `SegmentedControl`: that one is a single track
 * with a thumb sliding between fixed-width segments, which stops working once
 * the options overflow the screen. These are separate pills that size to their
 * label and scroll, so the set can grow past the viewport.
 */
export function FilterPills({ options, selectedIndex, onChange }: FilterPillsProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = THEME[scheme];
  const colors = palette[scheme];
  const hasGlass = isLiquidGlassAvailable();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // Bleed to the screen edge so a pill scrolling out looks clipped by the
      // display rather than stopping short inside a padded column.
      style={styles.scroller}
      contentContainerStyle={styles.content}>
      {options.map((option, index) => {
        const active = index === selectedIndex;
        const label = (
          <Text
            style={[
              styles.label,
              { color: active ? colors.foreground : theme.idleLabel },
              active && styles.activeLabel,
            ]}>
            {option}
          </Text>
        );

        return (
          <Pressable
            key={option}
            onPress={() => {
              if (active) return;
              Haptics.selectionAsync();
              onChange(index);
            }}
            style={({ pressed }) => pressed && { opacity: 0.7 }}>
            {hasGlass ? (
              <GlassView
                glassEffectStyle="regular"
                isInteractive
                style={[
                  styles.pill,
                  { backgroundColor: active ? theme.activeFill : theme.glassTint },
                ]}>
                {label}
              </GlassView>
            ) : (
              <View
                style={[
                  styles.pill,
                  { backgroundColor: active ? theme.activeFill : theme.idleFill },
                ]}>
                {label}
              </View>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    marginHorizontal: -20,
  },
  content: {
    paddingHorizontal: 20,
    gap: 10,
  },
  pill: {
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 50,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  label: {
    fontSize: 17,
    fontFamily: fonts.medium,
  },
  activeLabel: {
    fontFamily: fonts.semibold,
  },
});
