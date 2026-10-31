import { StyleSheet } from 'react-native';

import type { AccentName } from '@/shared/config';
import { cardColours } from '@/shared/ui/card-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { Raised, useRaisedScheme } from '@/shared/ui/raised';

/**
 * One Fluent emoji on a small raised tile, tinted its row's accent: the two
 * intro steps' icon, in the onboarding's 3D look (the kit tile's tint, a
 * border and a ledge of the same tint under it).
 *
 * The emoji keeps its own colours; the tint only says which row it leads,
 * never how good anything is. Decorative: the row's words beside it are what
 * is read out, so the tile itself says nothing.
 */
export function IntroTile({ art, tone, size }: { art: FluentName; tone: AccentName; size: number }) {
  const scheme = useRaisedScheme();
  const { face, edge, lip } = cardColours(scheme, tone);
  return (
    <Raised
      face={face}
      edge={edge}
      lip={lip}
      depth={Math.max(3, Math.round(size * 0.08))}
      radius={Math.round(size * 0.3)}
      contentStyle={[styles.face, { width: size, height: size }]}>
      <FluentIcon name={art} size={Math.round(size * 0.56)} />
    </Raised>
  );
}

const styles = StyleSheet.create({
  face: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
