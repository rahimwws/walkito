import { memo, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { TRAIL_DOT } from '../config/path-theme';
import type { PathItem } from '../model/path-layout';

const THICKNESS = 3;
/** Breathing room between a node's edge and where its connector starts.
 * Wide enough to clear the pain ring standing off the face. */
const GAP = 11;
const DOT_SPACING = 11;
const DRAW_MS = 400;

export type PathConnectorProps = {
  from: PathItem;
  to: PathItem;
  /** Solid when the leg is behind the user, dotted when it is still ahead. */
  done: boolean;
  /** Draw the solid leg in rather than showing it already there. Set on the
   * one leg the user just earned, never on the rest of the trail. */
  animate?: boolean;
  /** Extra room at the `from` end, so a leg leaving a captioned node starts
   * below its caption instead of running under the words. */
  headExtra?: number;
};

/**
 * The leg between two nodes.
 *
 * A rotated bar rather than an SVG path: the geometry is a straight segment
 * either way, and a bar lets the completed state sweep in with a plain
 * `scaleX` on the UI thread — no path measuring, no animated stroke props.
 */
export const PathConnector = memo(function PathConnector({
  from,
  to,
  done,
  animate = false,
  headExtra = 0,
}: PathConnectorProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy);
  const head = from.size / 2 + GAP + headExtra;
  const length = distance - head - (to.size / 2 + GAP);
  const angle = Math.atan2(dy, dx);

  const progress = useSharedValue(animate ? 0 : 1);
  useEffect(() => {
    progress.value = animate
      ? withTiming(1, {
          duration: DRAW_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        })
      : 1;
  }, [animate, progress]);

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: progress.value }] }));

  if (length <= 2) return null;

  const dots = Math.max(2, Math.round(length / DOT_SPACING));

  return (
    <View
      pointerEvents="none"
      style={[
        styles.leg,
        {
          left: from.x + (dx / distance) * head,
          top: from.y + (dy / distance) * head - THICKNESS / 2,
          width: length,
          transform: [{ rotate: `${angle}rad` }],
        },
      ]}>
      {done ? (
        <Animated.View
          style={[styles.fill, { backgroundColor: colors.foreground }, fillStyle]}
        />
      ) : (
        <View style={styles.dots}>
          {Array.from({ length: dots }, (_, i) => (
            <View key={i} style={[styles.dot, { backgroundColor: TRAIL_DOT[scheme] }]} />
          ))}
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  leg: {
    position: 'absolute',
    height: THICKNESS,
    // Rotate about the end that sits on the first node, so the bar pivots into
    // place instead of swinging around its middle.
    transformOrigin: 'left center',
  },
  fill: {
    flex: 1,
    borderRadius: THICKNESS,
    transformOrigin: 'left center',
  },
  dots: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dot: {
    width: THICKNESS,
    height: THICKNESS,
    borderRadius: THICKNESS / 2,
  },
});
