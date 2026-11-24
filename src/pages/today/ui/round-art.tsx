import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, View } from 'react-native';

import { accents, colors, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

export type RoundArtProps = {
  emoji: FluentName;
  accent: AccentName;
  size: number;
  /** Closed to her now: a lock on the disc in place of the drawing, as the
   * Exercises tab draws it. */
  locked?: boolean;
};

/** A Fluent drawing on a pastel disc in the accent's colour: the colourful
 * category icons of BitePal's cards. */
export function RoundArt({ emoji, accent, size, locked = false }: RoundArtProps) {
  const scheme = useColorScheme();
  return (
    <View
      style={[styles.circle, { width: size, height: size, borderRadius: size / 2, backgroundColor: accents[scheme][accent].track }]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {locked ? (
        <HugeiconsIcon icon={SquareLock02Icon} size={Math.round(size * 0.46)} color={colors.text2} strokeWidth={2} />
      ) : (
        <FluentIcon name={emoji} size={Math.round(size * 0.56)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center' },
});
