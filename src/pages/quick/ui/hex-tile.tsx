import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle, type ColorValue } from 'react-native';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import Svg, { Path } from 'react-native-svg';

import { bitepal, colors, fonts, target } from '@/shared/config';

/** Height over width: a pointy-top hexagon, a little squatter than a regular one, as BitePal draws its awards (#28). */
const RATIO = 1.1;
const STROKE = 2.5;

/** A pointy-top hexagon with rounded corners, inset so its stroke stays inside `w` x `h`. */
function hexPath(w: number, h: number, round: number): string {
  const p = STROKE;
  const points: [number, number][] = [
    [w / 2, p],
    [w - p, h * 0.25],
    [w - p, h * 0.75],
    [w / 2, h - p],
    [p, h * 0.75],
    [p, h * 0.25],
  ];
  const toward = (from: [number, number], to: [number, number]): [number, number] => {
    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const length = Math.hypot(dx, dy);
    return [from[0] + (dx / length) * round, from[1] + (dy / length) * round];
  };
  const f = (n: number) => n.toFixed(2);
  return (
    points
      .map((point, i) => {
        const before = toward(point, points[(i + 5) % 6]);
        const after = toward(point, points[(i + 1) % 6]);
        return `${i === 0 ? 'M' : 'L'}${f(before[0])} ${f(before[1])}Q${f(point[0])} ${f(point[1])} ${f(after[0])} ${f(after[1])}`;
      })
      .join('') + 'Z'
  );
}

/** BitePal's award shape: a soft-coloured hexagon with a darker rim, the icon in the middle. Violet rim when selected. */
export function Hex({
  size,
  fill,
  rim,
  selected = false,
  children,
}: {
  size: number;
  fill: ColorValue;
  rim: ColorValue;
  selected?: boolean;
  children?: ReactNode;
}) {
  const height = Math.round(size * RATIO);
  return (
    <View
      style={{
        width: size,
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg width={size} height={height} style={StyleSheet.absoluteFill}>
        <Path
          d={hexPath(size, height, size * 0.16)}
          fill={fill}
          stroke={selected ? bitepal.selected : rim}
          strokeWidth={selected ? STROKE + 0.5 : STROKE}
        />
      </Svg>
      {children}
    </View>
  );
}

export type HexTileProps = {
  /** The hexagon with its icon. */
  hex: ReactNode;
  title: string;
  /** A second line under the title: how long a routine runs. */
  sub?: string;
  /** A count on the corner of the hexagon (#28). */
  badge?: number;
  /** Stacked as a column under the hexagon, or a row beside it at the largest text sizes. */
  layout: 'grid' | 'row';
  selected?: boolean;
  /** A radio-like filter reads as selected; a routine opens. */
  role: 'filter' | 'open';
  accessibilityLabel?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

/** One coloured hexagon tile with its name under it, as BitePal lays out its awards (#28, #102). */
export function HexTile({
  hex,
  title,
  sub,
  badge,
  layout,
  selected = false,
  role,
  accessibilityLabel,
  onPress,
  style,
}: HexTileProps) {
  return (
    <Pressable
      accessibilityRole={role === 'filter' ? 'togglebutton' : 'button'}
      accessibilityState={role === 'filter' ? { checked: selected } : undefined}
      accessibilityLabel={accessibilityLabel}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [layout === 'grid' ? styles.grid : styles.row, pressed && styles.pressed, style]}>
      <View>
        {hex}
        {badge != null && badge > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText} maxFontSizeMultiplier={1}>
              {badge}
            </Text>
          </View>
        )}
      </View>
      <View style={layout === 'grid' ? styles.textGrid : styles.textRow}>
        <Text style={[styles.title, layout === 'grid' && styles.center, selected && styles.selected]}>{title}</Text>
        {sub != null && <Text style={[styles.sub, layout === 'grid' && styles.center]}>{sub}</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    gap: 8,
    minHeight: target.min,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minHeight: target.min,
    paddingVertical: 4,
  },
  textGrid: { alignItems: 'center', alignSelf: 'stretch' },
  textRow: { flex: 1 },
  title: { ...fonts.semibold(17), color: colors.text },
  sub: { ...fonts.medium(17), color: colors.text3 },
  center: { textAlign: 'center' },
  selected: { color: bitepal.selected },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.text3,
    borderWidth: 2,
    borderColor: bitepal.card,
  },
  badgeText: {
    ...fonts.heavy(17),
    color: colors.onInk,
    fontVariant: ['tabular-nums'],
  },
  pressed: { opacity: 0.6 },
});
