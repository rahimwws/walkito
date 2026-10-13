import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import * as Haptics from 'expo-haptics';
import { useEffect, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  type SharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The paywall's lit finish, after the PRO pill in PulseTrackr.
 *
 * - **One colour**, a little lighter at the top. Never a blend of several.
 * - **Light inside, not around**: a soft white glow just inside the top edge
 *   and a few white glints that twinkle. No border and no shadow or halo
 *   outside the face.
 *
 * Kept to the offer pages: this is the one screen that sells.
 */

/** The lit blue. */
export const BLUE = '#2F6BFF';

/** `#RRGGBB` mixed toward white by `t`. */
function lighten(hex: string, t: number): string {
  const n = parseInt(hex.slice(1), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * t);
  return `rgb(${mix((n >> 16) & 255)}, ${mix((n >> 8) & 255)}, ${mix(n & 255)})`;
}

/**
 * The lit face: the colour a little lighter at the top, and a white sheen
 * along the upper edge. Gradients only, in the view's own background: an
 * inset shadow left a dark sliver along the rounded ends (its corner is not
 * the continuous curve), and so did layers laid over the edge. No border, no
 * shadow, nothing outside the face.
 */
function lit(colour: string): ViewStyle {
  return {
    experimental_backgroundImage:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 22%), ' +
      `linear-gradient(180deg, ${lighten(colour, 0.3)} 0%, ${colour} 72%)`,
    borderCurve: 'continuous',
  };
}

/** A glint: where it sits on the face (fractions of its box), how big, and
 * when it first twinkles. */
type Glint = { x: number; y: number; size: number; delay: number };

/** A small white light with a soft edge. */
const GLINT = 'radial-gradient(circle closest-side, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.12) 65%, rgba(255,255,255,0) 100%)';

/** The PRO pill's: one at each end. */
const PILL_GLINTS: readonly Glint[] = [
  { x: 0.07, y: 0.38, size: 5, delay: 0 },
  { x: 0.93, y: 0.6, size: 4, delay: 800 },
];

const SMALL_GLINTS: readonly Glint[] = [
  { x: 0.08, y: 0.4, size: 3, delay: 0 },
  { x: 0.92, y: 0.6, size: 3, delay: 800 },
];

const BUTTON_GLINTS: readonly Glint[] = [
  { x: 0.06, y: 0.36, size: 6, delay: 0 },
  { x: 0.13, y: 0.7, size: 3, delay: 500 },
  { x: 0.94, y: 0.62, size: 5, delay: 900 },
  { x: 0.87, y: 0.28, size: 3, delay: 1400 },
];

/**
 * White glints inside a lit face. They twinkle while `live`; still, at full
 * light, under Reduce Motion. The face clips them.
 */
function Glints({ spots, live }: { spots: readonly Glint[]; live: boolean }) {
  return (
    <>
      {spots.map((spot, i) => (
        <GlintDot key={i} spot={spot} live={live} />
      ))}
    </>
  );
}

function GlintDot({ spot, live }: { spot: Glint; live: boolean }) {
  const glow = useSharedValue(1);
  useEffect(() => {
    if (!live) {
      glow.value = 1;
      return;
    }
    const ease = { duration: 1100, easing: Easing.inOut(Easing.sin), reduceMotion: ReduceMotion.System };
    glow.value = withDelay(spot.delay, withRepeat(withSequence(withTiming(0.25, ease), withTiming(1, ease)), -1));
  }, [live, spot.delay, glow]);
  const motion = useAnimatedStyle(() => ({ opacity: glow.value, transform: [{ scale: 0.7 + glow.value * 0.3 }] }));
  const box = spot.size * 3;
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.glintDot,
        {
          left: `${spot.x * 100}%`,
          top: `${spot.y * 100}%`,
          width: box,
          height: box,
          marginLeft: -box / 2,
          marginTop: -box / 2,
          experimental_backgroundImage: GLINT,
        },
        motion,
      ]}
    />
  );
}

const GOLD = 'linear-gradient(90deg, #B9822A 0%, #E9C46A 28%, #FFF0BF 50%, #E9C46A 72%, #B9822A 100%)';
const SHINE = 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)';

/** Gold type with a slow glint across it: the "how it works" line. */
export function GoldText({ children, style }: { children: string; style?: StyleProp<ViewStyle> }) {
  const reduced = useReducedMotion();
  const [width, setWidth] = useState(0);
  const x = useSharedValue(0);
  useEffect(() => {
    if (reduced || width === 0) return;
    x.value = 0;
    x.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1600, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
        withDelay(2400, withTiming(0, { duration: 0 })),
      ),
      -1,
    );
  }, [reduced, width, x]);
  const band = Math.max(50, width * 0.3);
  const glint = useAnimatedStyle(() => ({ transform: [{ translateX: -band + x.value * (width + band) }] }));

  const label = (
    <Text style={styles.gold} numberOfLines={1}>
      {children}
    </Text>
  );
  return (
    <View
      style={[styles.goldWrap, style]}
      accessible
      accessibilityRole="header"
      accessibilityLabel={children}
      onLayout={(event) => setWidth(Math.round(event.nativeEvent.layout.width))}>
      <View style={styles.hidden}>{label}</View>
      <MaskedView style={StyleSheet.absoluteFill} maskElement={label}>
        <View style={[StyleSheet.absoluteFill, { experimental_backgroundImage: GOLD }]} />
        {!reduced && <Animated.View style={[styles.glint, { width: band, experimental_backgroundImage: SHINE }, glint]} />}
      </MaskedView>
    </View>
  );
}

/**
 * The one action: lit blue, the label and, under it, what it costs.
 *
 * Alive while it waits: a band of light crosses the face every few seconds and
 * the glints inside twinkle, so the eye keeps coming back to it. Both stop
 * under Reduce Motion and when the button is disabled; the paywall unmounts
 * with it, so nothing runs hidden.
 */
export function GlowButton({
  label,
  sub,
  onPress,
  disabled = false,
  style,
}: {
  label: string;
  /** A second line in the button, e.g. the price and that it renews. */
  sub?: string | null;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const reduced = useReducedMotion();
  const [width, setWidth] = useState(0);
  const pressed = useSharedValue(0);
  const sweep = useSharedValue(0);
  const live = !reduced && !disabled && width > 0;

  useEffect(() => {
    if (!live) return;
    sweep.value = 0;
    sweep.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1300, easing: Easing.inOut(Easing.cubic), reduceMotion: ReduceMotion.System }),
        withDelay(1600, withTiming(0, { duration: 0 })),
      ),
      -1,
    );
  }, [live, sweep]);

  const band = 110;
  const face = useAnimatedStyle(() => ({ transform: [{ scale: 1 - pressed.value * 0.025 }] }));
  const shine = useAnimatedStyle(() => ({
    transform: [{ translateX: -band * 1.5 + sweep.value * (width + band * 2) }, { skewX: '-20deg' }],
  }));

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={sub != null ? `${label}. ${sub}` : label}
      disabled={disabled}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
      }}
      onPressIn={() => {
        pressed.value = withTiming(1, { duration: 90 });
      }}
      onPressOut={() => {
        pressed.value = withTiming(0, { duration: 160 });
      }}
      style={style}>
      <Animated.View style={[disabled && styles.dim, face]}>
        <View
          style={[styles.button, lit(BLUE)]}
          onLayout={(event) => setWidth(Math.round(event.nativeEvent.layout.width))}>
          <Glints spots={BUTTON_GLINTS} live={live} />
          {live && (
            <Animated.View pointerEvents="none" style={[styles.shine, { width: band, experimental_backgroundImage: SHINE }, shine]} />
          )}
          <Text style={styles.buttonLabel} numberOfLines={1}>
            {label}
          </Text>
          {sub != null && (
            <Text style={styles.buttonSub} numberOfLines={1}>
              {sub}
            </Text>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
}

/** A chip lit in its own colour: white glyph and label, a glint at each end.
 * `small` is the plan row's badge. */
export function LitChip({
  label,
  icon,
  colour,
  small = false,
}: {
  label: string;
  icon?: IconSvgElement;
  colour: string;
  small?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <View accessible accessibilityRole="text" style={[styles.chip, small && styles.chipSmall, lit(colour)]}>
      <Glints spots={small ? SMALL_GLINTS : PILL_GLINTS} live={!reduced} />
      {icon != null && <HugeiconsIcon icon={icon} size={17} color="#FFFFFF" strokeWidth={2.2} />}
      <Text style={small ? styles.chipLabelSmall : styles.chipLabel} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

/** A round lit badge holding one glyph. */
export function LitBadge({ icon, colour = BLUE, size = 44 }: { icon: IconSvgElement; colour?: string; size?: number }) {
  return (
    <View style={[styles.badge, lit(colour), { width: size, height: size, borderRadius: size / 2 }]}>
      <HugeiconsIcon icon={icon} size={size * 0.48} color="#FFFFFF" strokeWidth={2} />
    </View>
  );
}

export type RailStep = { icon: IconSvgElement; when: string; title: string; body: string };

/** How long the light rests on each step before moving to the next. */
const RAIL_STEP_MS = 900;

/**
 * The plan's first weeks on a lit rail. The lit pill grows down the steps one
 * at a time, lighting each step as it reaches it, holds on the last, then
 * slides back and goes again. Under Reduce Motion every step is lit and
 * nothing moves.
 */
export function GlassRail({ steps }: { steps: readonly RailStep[] }) {
  const reduced = useReducedMotion();
  const [centres, setCentres] = useState<(number | undefined)[]>([]);
  const lastIndex = steps.length - 1;
  const first = centres[0];
  const last = centres[lastIndex];
  const ready = centres.length === steps.length && centres.every((c) => c != null);
  const at = useSharedValue(reduced ? lastIndex : 0);

  useEffect(() => {
    if (reduced || !ready) {
      at.value = lastIndex;
      return;
    }
    const ease = { duration: 520, easing: Easing.inOut(Easing.cubic), reduceMotion: ReduceMotion.System };
    const forward = Array.from({ length: lastIndex }, (_, i) => withDelay(RAIL_STEP_MS, withTiming(i + 1, ease)));
    at.value = 0;
    at.value = withRepeat(
      withSequence(...forward, withDelay(RAIL_STEP_MS * 2, withTiming(0, { ...ease, duration: 700 }))),
      -1,
    );
  }, [reduced, ready, lastIndex, at]);

  const stops = ready ? (centres as number[]) : [0];
  const pill = useAnimatedStyle(() => {
    if (stops.length < 2) return { height: 0 };
    const i = Math.min(Math.floor(at.value), stops.length - 2);
    const f = at.value - i;
    const end = stops[i] + (stops[i + 1] - stops[i]) * f;
    return { top: stops[0] - PILL_PAD, height: end - stops[0] + PILL_PAD * 2 };
  });

  return (
    <View style={styles.rail}>
      {ready && first != null && last != null && (
        <Animated.View pointerEvents="none" style={[styles.pill, lit(BLUE), pill]} />
      )}
      {steps.map((step, i) => (
        <RailRow
          key={step.title}
          step={step}
          index={i}
          at={at}
          onCentre={(centre) =>
            setCentres((current) => {
              if (current[i] === centre) return current;
              const next = [...current];
              next[i] = centre;
              return next;
            })
          }
        />
      ))}
    </View>
  );
}

/** One step: lit once the pill has reached it, waiting until then. */
function RailRow({
  step,
  index,
  at,
  onCentre,
}: {
  step: RailStep;
  index: number;
  at: SharedValue<number>;
  onCentre: (centre: number) => void;
}) {
  const scheme = useColorScheme();
  const ink = palette[scheme].foreground;
  const caption = meterColors[scheme].caption;
  const lit = useAnimatedStyle(() => {
    const on = Math.max(0, Math.min(1, (at.value - index + 0.35) / 0.35));
    return { opacity: 0.4 + on * 0.6 };
  });
  const icon = useAnimatedStyle(() => {
    const on = Math.max(0, Math.min(1, (at.value - index + 0.35) / 0.35));
    return { transform: [{ scale: 0.85 + on * 0.15 }] };
  });
  return (
    <View
      style={styles.railRow}
      onLayout={(event) => onCentre(event.nativeEvent.layout.y + ICON_DROP + ICON / 2)}>
      <Animated.View style={[styles.railIcon, icon]}>
        <HugeiconsIcon icon={step.icon} size={23} color="#FFFFFF" strokeWidth={2.1} />
      </Animated.View>
      <Animated.View style={[styles.railCopy, lit]}>
        <Text style={styles.railWhen} numberOfLines={1}>
          {step.when}
        </Text>
        <Text style={[styles.railTitle, { color: ink }]} numberOfLines={2}>
          {step.title}
        </Text>
        <Text style={[styles.railBody, { color: caption }]} numberOfLines={1}>
          {step.body}
        </Text>
      </Animated.View>
    </View>
  );
}

/** A card the rail and its gold title sit in, as in the reference. */
export function RailCard({ title, children }: { title: string; children: ReactNode }) {
  const scheme = useColorScheme();
  return (
    <View style={[styles.railCard, { backgroundColor: palette[scheme].card }]}>
      <GoldText style={styles.railCardTitle}>{title}</GoldText>
      {children}
    </View>
  );
}

const ICON = 44;
const PILL = 46;
/** From the first and last icons' centres to the pill's ends: the glyph sits
 * well inside the rounded end, not against it. */
const PILL_PAD = 32;
/** The icon sits level with the title, under the small "when" line. */
const ICON_DROP = 6;

const styles = StyleSheet.create({
  goldWrap: { alignSelf: 'flex-start' },
  hidden: { opacity: 0 },
  gold: { ...fonts.heavy(13, 1.4), textTransform: 'uppercase', color: '#000000' },
  glint: { position: 'absolute', top: 0, bottom: 0 },
  button: {
    minHeight: 64,
    paddingVertical: 10,
    borderRadius: 32,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    overflow: 'hidden',
  },
  glintDot: { position: 'absolute' },
  shine: { position: 'absolute', top: -12, bottom: -12, left: 0 },
  dim: { opacity: 0.55 },
  buttonLabel: { ...fonts.heavy(19, -0.3), color: '#FFFFFF' },
  buttonSub: { ...fonts.semibold(12), color: 'rgba(255, 255, 255, 0.85)' },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    // A chip, not a pill: rounded corners, straight sides.
    borderRadius: 11,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  chipLabel: { ...fonts.heavy(13, -0.1), color: '#FFFFFF' },
  chipSmall: { gap: 4, paddingHorizontal: 9, paddingVertical: 4, borderRadius: 8 },
  chipLabelSmall: { ...fonts.heavy(11, 0.2), color: '#FFFFFF' },
  badge: { alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  railCard: {
    borderRadius: 26,
    borderCurve: 'continuous',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
    gap: 18,
  },
  railCardTitle: { alignSelf: 'center' },
  rail: { gap: 26, paddingVertical: 8 },
  pill: { position: 'absolute', left: 0, width: PILL, borderRadius: PILL / 2, borderCurve: 'continuous' },
  railRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  railIcon: { width: PILL, height: ICON, marginTop: ICON_DROP, alignItems: 'center', justifyContent: 'center' },
  railCopy: { flex: 1, gap: 1 },
  railWhen: { ...fonts.heavy(11, 0.6), textTransform: 'uppercase', color: '#7FA6FF' },
  railTitle: fonts.heavy(17, -0.3),
  railBody: fonts.semibold(14),
});
