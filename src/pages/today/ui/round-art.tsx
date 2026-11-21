import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';

import type { ExerciseCategory } from '@/entities/program';
import { accents, type AccentName } from '@/shared/config';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

/** Which accent a move's circle wears: its kind of work, never how it went. */
export const CATEGORY_ACCENT: Readonly<Record<ExerciseCategory, AccentName>> = {
  Mobility: 'teal',
  Fitness: 'violet',
  Habit: 'amber',
  Recovery: 'blue',
};

export type RoundArtProps = {
  /** The move's drawing; its white ground takes the circle's colour. */
  source?: ImageSourcePropType | null;
  /** A Fluent drawing when there is no picture. */
  emoji?: FluentName;
  accent: AccentName;
  size: number;
};

/**
 * Bend's coloured circle holding the illustration. The drawing is multiplied
 * onto the circle, so its white ground turns into the pastel and only the
 * figure shows, cropped round.
 */
export function RoundArt({ source, emoji, accent, size }: RoundArtProps) {
  return (
    <View
      style={[styles.circle, { width: size, height: size, borderRadius: size / 2, backgroundColor: accents.light[accent].track }]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {source != null ? (
        <Image source={source} style={[styles.art, { width: size, height: size }]} resizeMode="cover" accessibilityIgnoresInvertColors />
      ) : emoji != null ? (
        <FluentIcon name={emoji} size={Math.round(size * 0.56)} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  art: { mixBlendMode: 'multiply' },
});
