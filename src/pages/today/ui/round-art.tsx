import { StyleSheet, View } from 'react-native';

import { accents, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

export type RoundArtProps = {
  emoji: FluentName;
  accent: AccentName;
  size: number;
};

/** A Fluent drawing on a pastel disc in the accent's colour: the colourful
 * category icons of BitePal's cards. */
export function RoundArt({ emoji, accent, size }: RoundArtProps) {
  const scheme = useColorScheme();
  return (
    <View
      style={[styles.circle, { width: size, height: size, borderRadius: size / 2, backgroundColor: accents[scheme][accent].track }]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      <FluentIcon name={emoji} size={Math.round(size * 0.56)} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center' },
});
