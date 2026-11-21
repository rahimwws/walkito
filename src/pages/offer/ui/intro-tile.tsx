import { StyleSheet, View } from 'react-native';

import { accents, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

/**
 * One Fluent emoji on a small flat tile, tinted its row's accent: the two
 * intro steps' icon.
 *
 * The emoji keeps its own colours; the tint only says which row it leads,
 * never how good anything is. Decorative: the row's words beside it are what
 * is read out, so the tile itself says nothing.
 */
export function IntroTile({ art, tone, size }: { art: FluentName; tone: AccentName; size: number }) {
  const scheme = useColorScheme();
  return (
    <View
      style={[
        styles.face,
        {
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.3),
          backgroundColor: accents[scheme][tone].track,
        },
      ]}>
      <FluentIcon name={art} size={Math.round(size * 0.56)} />
    </View>
  );
}

const styles = StyleSheet.create({
  face: {
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 'continuous',
  },
});
