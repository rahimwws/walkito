import { StyleSheet, View } from 'react-native';

import { accents, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

/**
 * Other people, drawn without anybody in them: a short stack of round tiles,
 * each with a drawing in it, overlapping like the avatars of a group chat.
 *
 * Nobody's face, name or photo. The count beside it is all that is known of
 * them, and the tiles only say "people" the way a stack of avatars does. The
 * accents mark nothing but variety; none of them is a judgement.
 */
const FACES: readonly { icon: FluentName; accent: 'violet' | 'amber' | 'teal' | 'orange' | 'blue' }[] = [
  { icon: 'foot', accent: 'violet' },
  { icon: 'sun', accent: 'amber' },
  { icon: 'heart', accent: 'teal' },
  { icon: 'sparkles', accent: 'orange' },
  { icon: 'seedling', accent: 'blue' },
];

export type PulseFacesProps = {
  /** How many tiles (at most five). */
  count?: number;
  size?: number;
  /** The surface the stack sits on: each tile's ring is cut in it, so the
   * overlaps read as separate people rather than one blob. */
  surface?: string;
};

export function PulseFaces({ count = 4, size = 28, surface }: PulseFacesProps) {
  const scheme = useColorScheme();
  const ring = surface ?? palette[scheme].card;
  return (
    <View style={styles.row} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {FACES.slice(0, Math.min(count, FACES.length)).map((face, index) => (
        <View
          key={face.icon}
          style={[
            styles.face,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: index === 0 ? 0 : -size * 0.32,
              borderColor: ring,
            },
          ]}>
          {/* The tint is translucent: laid over the surface first, so the
              neighbour it overlaps does not show through. */}
          <View style={[styles.fill, { backgroundColor: ring }]} />
          <View style={[styles.fill, { backgroundColor: accents[scheme][face.accent].track }]} />
          <FluentIcon name={face.icon} size={Math.round(size * 0.56)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  face: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
});
