import Flag03Icon from '@hugeicons/core-free-icons/Flag03Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { memo, useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {
  CHECKPOINT_ICON,
  PROGRAM_LENGTH,
  RETESTS,
  SESSION_META,
  type DayStatus,
  type ProgramDay,
} from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { captionFor } from '../model/day-caption';
import { painRing } from '../model/pain-ring';

/** Pulse under an available node: slow enough to read as breathing rather than
 * as an alert, and it's the only thing on the path that loops. */
const PULSE_MS = 2000;
/**
 * Press travel, and the swell when a session lands.
 *
 * Timing curves, never springs. A pressed node has to *stop* when it comes
 * back — a spring carries it past its resting size and bounces, which reads as
 * the path wobbling rather than as a button being released.
 */
const PRESS_DOWN_MS = 70;
const PRESS_UP_MS = 130;
const POP_UP_MS = 130;
const POP_DOWN_MS = 180;

/** The pain ring: how far it stands off the face, and how heavy it is. */
const RING_GAP = 3;
const RING_WIDTH = 2;

export type PathNodeProps = {
  day: ProgramDay;
  status: DayStatus;
  /** Diameter of the face. */
  size: number;
  /** Centre of the node in trail coordinates. */
  x: number;
  y: number;
  /** Pain logged that day, 0–10, or null for a day that wasn't trained. Drives
   * the ring — see `painRing`. */
  pain: number | null;
  /** Passed the day and status so the callback can stay referentially stable
   * across renders, which is what lets this component memoise. */
  onPress: (day: ProgramDay, status: DayStatus) => void;
};

type Face = {
  fill: string;
  border?: string;
  borderWidth: number;
  glyph: string;
  pulse?: string;
};

/**
 * One node on the path, in every state it can hold.
 *
 * The state rules are the screen's whole argument, so they live in one place:
 *
 * - A completed unload day is drawn as heavily as a trained one. Resting when
 *   the program says rest is not a lesser outcome, and the node must not let
 *   the user read it as one.
 * - A missed day is gray and uncheckmarked. It is never red, never crossed
 *   out, and never smaller. Punishing a miss pushes people to train hurt.
 * - Only today (and an available retest) carries an accent. Everything else is
 *   monochrome, so the eye lands on the one node that can be acted on.
 */
export const PathNode = memo(function PathNode({
  day,
  status,
  size,
  x,
  y,
  pain,
  onPress,
}: PathNodeProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].orange;

  const active = status === 'today';

  const pressed = useSharedValue(0);
  const pop = useSharedValue(1);
  const pulse = useSharedValue(0);

  useEffect(() => {
    if (!active) {
      pulse.value = 0;
      return;
    }
    pulse.value = 0;
    pulse.value = withRepeat(
      withTiming(1, {
        duration: PULSE_MS,
        easing: Easing.out(Easing.quad),
        reduceMotion: ReduceMotion.System,
      }),
      -1,
      false,
    );
  }, [active, pulse]);

  // Fires only on the transition out of `today` — the node the user just
  // finished pops, the twenty behind it sit still.
  const wasActive = useRef(active);
  useEffect(() => {
    if (!active && wasActive.current) {
      pop.value = withSequence(
        withTiming(1.16, {
          duration: POP_UP_MS,
          easing: Easing.out(Easing.quad),
          reduceMotion: ReduceMotion.System,
        }),
        withTiming(1, {
          duration: POP_DOWN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        }),
      );
    }
    wasActive.current = active;
  }, [active, pop]);

  // Presses inward rather than downward. The node used to sit on a darker
  // riser and travel onto it, but a sliver of grey peeking from under a
  // ringed circle reads as a stray arc, not as depth.
  const faceStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pop.value * (1 - pressed.value * 0.08) }],
  }));

  const pulseStyle = useAnimatedStyle(() => ({
    opacity: (1 - pulse.value) * 0.3,
    transform: [{ scale: 1 + pulse.value * 0.22 }],
  }));

  const face = faceFor({ status, day, colors, meter, accent });
  const label = captionFor(day, status);

  return (
    <View
      pointerEvents="box-none"
      style={[styles.slot, { left: x - size * 1.5, top: y - size / 2, width: size * 3 }]}>
      <View style={{ width: size, height: size }}>
        {face.pulse != null && (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.circle,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: face.pulse,
              },
              pulseStyle,
            ]}
          />
        )}
        <Animated.View style={faceStyle}>
          {/* Inside the travelling wrapper, so the ring presses down with the
              node instead of detaching from it. */}
          {pain != null && (
            <View
              pointerEvents="none"
              style={[
                styles.circle,
                {
                  left: -RING_GAP - RING_WIDTH,
                  top: -RING_GAP - RING_WIDTH,
                  width: size + (RING_GAP + RING_WIDTH) * 2,
                  height: size + (RING_GAP + RING_WIDTH) * 2,
                  borderRadius: size / 2 + RING_GAP + RING_WIDTH,
                  borderWidth: RING_WIDTH,
                  borderColor: painRing(pain, scheme),
                },
              ]}
            />
          )}
          <Pressable
            onPress={() => onPress(day, status)}
            onPressIn={() => {
              pressed.value = withTiming(1, { duration: PRESS_DOWN_MS });
            }}
            onPressOut={() => {
              pressed.value = withTiming(0, {
                duration: PRESS_UP_MS,
                easing: Easing.out(Easing.cubic),
              });
            }}
            style={[
              styles.face,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: face.fill,
                borderWidth: face.borderWidth,
                borderColor: face.border ?? 'transparent',
              },
            ]}>
            <NodeGlyph day={day} status={status} size={size} color={face.glyph} />
          </Pressable>
        </Animated.View>
      </View>

      {label != null && (
        <Text
          pointerEvents="none"
          numberOfLines={1}
          style={[styles.label, { color: active ? colors.foreground : meter.label }]}>
          {label}
        </Text>
      )}
    </View>
  );
});

/** What sits inside the face: a flag, a check, a glyph, a number, or a delta. */
function NodeGlyph({
  day,
  status,
  size,
  color,
}: {
  day: ProgramDay;
  status: DayStatus;
  size: number;
  color: string;
}) {
  const retest = day.checkpoint ? RETESTS[day.day] : undefined;

  // The end of the program reads as an end, not as day 56. It is the only node
  // a user can recognise before they get to it.
  if (day.day === PROGRAM_LENGTH && retest == null) {
    return (
      <HugeiconsIcon
        icon={Flag03Icon}
        size={Math.round(size * 0.46)}
        color={color}
        strokeWidth={2}
      />
    );
  }

  if (day.checkpoint && (status === 'done' || status === 'rest') && retest != null) {
    return (
      <Text style={[styles.delta, { color, fontSize: Math.round(size * 0.3) }]}>
        +{retest.delta}
      </Text>
    );
  }
  if (status === 'upcoming') {
    return (
      <Text style={[styles.number, { color, fontSize: Math.round(size * 0.34) }]}>{day.day}</Text>
    );
  }

  const icon: IconSvgElement =
    status === 'done'
      ? Tick02Icon
      : day.checkpoint
        ? CHECKPOINT_ICON
        : SESSION_META[day.kind].icon;

  return (
    <HugeiconsIcon
      icon={icon}
      size={Math.round(size * (status === 'done' ? 0.5 : 0.44))}
      color={color}
      strokeWidth={status === 'done' ? 3 : 2}
    />
  );
}

function faceFor({
  status,
  day,
  colors,
  meter,
  accent,
}: {
  status: DayStatus;
  day: ProgramDay;
  colors: (typeof palette)['light'] | (typeof palette)['dark'];
  meter: (typeof meterColors)['light'] | (typeof meterColors)['dark'];
  accent: { fill: string; track: string };
}): Face {
  // A retest gets a heavier ring than a session day at every state, so the
  // block boundaries stay legible while scrolling the whole program.
  const ring = day.checkpoint ? 3 : 2;
  const card = { fill: colors.card };

  switch (status) {
    case 'done':
      return {
        fill: colors.foreground,
        borderWidth: 0,
        glyph: colors.background,
      };
    // Drawn exactly as heavily as `done`: same ring weight, same contrast.
    case 'rest':
      return {
        ...card,
        border: colors.foreground,
        borderWidth: ring,
        glyph: colors.foreground,
      };
    case 'today':
      return {
        fill: accent.fill,
        borderWidth: 0,
        glyph: '#FFFFFF',
        pulse: accent.fill,
      };
    // Gray, uncheckmarked, same size as every other day. That is the whole
    // treatment — see the note above.
    case 'missed':
      return { ...card, border: meter.track, borderWidth: ring, glyph: meter.flat };
    default:
      return { ...card, border: meter.track, borderWidth: ring, glyph: meter.unit };
  }
}


const styles = StyleSheet.create({
  slot: {
    position: 'absolute',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  face: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  label: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  number: {
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  delta: {
    fontFamily: fonts.heavy,
    letterSpacing: -0.5,
  },
});
