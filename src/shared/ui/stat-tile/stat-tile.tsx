import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
} from 'react-native-reanimated';

import { accents, fonts, raised, type AccentName } from '@/shared/config';
import { readableOn } from '@/shared/lib/color';
import { settle } from '@/shared/lib/motion';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';

/** The gap between tiles entering in a row: pass `index * STAT_TILE_STAGGER_MS`. */
export const STAT_TILE_STAGGER_MS = 90;
/** The emoji beside the number: the glyph's own 20pt, so three tiles still
 * fit a 375pt phone with the number's width untouched. */
const EMOJI_SIZE = 20;
const ENTER_MS = 360;
const ENTER_RISE = 12;
/** The number rolls up to its value over this, once the tile is in. */
const COUNT_S = 0.6;
const RADIUS = 16;
const HEADER = 26;
const LIP = 3;

export type StatTileProps = {
  /** The header: "Streak", "Care days". */
  label: string;
  value: number;
  /** Writes the number. Default: the integer as it is. */
  format?: (value: number) => string;
  /** The metric's Fluent emoji, in its own colours (🔥 the streak, 🌱 care
   * days). The tile's look; `icon` is for a caller not yet moved to one. */
  emoji?: FluentName;
  /** A Hugeicons glyph in the accent, when there is no `emoji`. */
  icon?: IconSvgElement;
  /** One accent per metric, the same one everywhere the metric appears. */
  accent: AccentName;
  /** Wait before entering, to stagger a row. */
  delayMs?: number;
  /** The whole tile read as one: "Streak, 5 days", from the catalogue. */
  accessibilityLabel: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * One number on a celebration: Duolingo's lesson-complete tile, a header strip
 * in the metric's accent over a white body, raised on a lip in that accent.
 *
 * For showing up and effort only: care days, the streak, exercises from
 * today's plan, the time it planned. Never pain, never a test result, and
 * never minutes beyond the plan's dose; a tile here is something to be pleased
 * about, and none of those should be.
 *
 * The value is the accent darkened just enough to read on the body (amber
 * needs a lot, violet none), so it stays that metric's colour without failing
 * contrast.
 */
export function StatTile({
  label,
  value,
  format = String,
  emoji,
  icon,
  accent,
  delayMs = 0,
  accessibilityLabel,
  style,
}: StatTileProps) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const reduceMotion = useReducedMotion();
  const fill = accents[scheme][accent].fill;
  // The header strip is a filled face with words on it, so it takes the kit's
  // AA face for the accent; the icon and the value on the white body keep the
  // accent's own hue.
  const header = faceFor(scheme, accent);
  const ink = readableOn(fill, tokens.surface);

  const enter = useSharedValue(reduceMotion ? 1 : 0);
  const [shown, setShown] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      enter.value = 1;
      return undefined;
    }
    enter.value = withDelay(delayMs, settle(1, ENTER_MS));
    return undefined;
    // Entering is once, on mount: a tile does not re-enter when its row
    // re-renders.
  }, []);

  // The count waits for the tile to be in; after that a new value rolls
  // straight to itself.
  const counted = useRef(false);
  useEffect(() => {
    if (reduceMotion || counted.current) {
      counted.current = true;
      setShown(value);
      return undefined;
    }
    const timer = setTimeout(() => {
      counted.current = true;
      setShown(value);
    }, delayMs + ENTER_MS / 2);
    return () => clearTimeout(timer);
    // `delayMs` only matters for the first count.
  }, [value, reduceMotion]);

  const entering = useAnimatedStyle(() => ({
    opacity: enter.value,
    transform: [{ translateY: (1 - enter.value) * ENTER_RISE }],
  }));

  return (
    <Animated.View
      accessible
      accessibilityLabel={accessibilityLabel}
      style={[styles.outer, entering, style]}>
      <Raised
        face={header.face}
        lip={header.lip}
        depth={LIP}
        radius={RADIUS}
        contentStyle={styles.face}>
        <View style={styles.header}>
          {/* Three tiles share a phone's width, about 86pt each: a longer
              translation shrinks a little before it is cut short. */}
          <Text
            style={[styles.label, { color: header.label }]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
            maxFontSizeMultiplier={1.3}>
            {label}
          </Text>
        </View>
        <View style={[styles.body, { backgroundColor: tokens.surface }]}>
          {emoji != null ? (
            <FluentIcon name={emoji} size={EMOJI_SIZE} />
          ) : (
            icon != null && <HugeiconsIcon icon={icon} size={20} color={fill} strokeWidth={2.2} />
          )}
          <AnimatedNumber
            text={format(shown)}
            value={shown}
            color={ink}
            fontSize={22}
            weight="heavy"
            duration={COUNT_S}
          />
        </View>
      </Raised>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    minWidth: 96,
  },
  face: {
    padding: 2,
    paddingTop: 0,
  },
  header: {
    height: HEADER,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  label: fonts.heavy(12, 0.1),
  body: {
    borderRadius: RADIUS - 2,
    borderCurve: 'continuous',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
});
