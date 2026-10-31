import * as Haptics from 'expo-haptics';
import { useEffect, useRef, type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, raised, type AccentName } from '@/shared/config';
import { settle } from '@/shared/lib/motion';
import { faceFor, useRaisedScheme } from '@/shared/ui/raised';

/** Duolingo's fill takes 0.4 s; so does this one, on the settle curve. */
const FILL_MS = 400;
/** The once-only brightening when a bar fills. */
const GLINT_MS = 500;
const GLINT_ALPHA = 0.45;
/** Duolingo's highlight is white at 0.2. A touch more on the dark page. */
const HIGHLIGHT_ALPHA = { light: 0.2, dark: 0.22 } as const;

const SIZES = {
  // Duolingo's own proportions: 16 tall, the stripe 3 tall, 4 in from the top
  // and from each end.
  lg: { height: 16, highlight: { top: 4, height: 3, inset: 4 } },
  md: { height: 12, highlight: { top: 3, height: 2, inset: 3 } },
  // Too thin to carry a stripe without it reading as a second, smaller bar.
  sm: { height: 8, highlight: null },
} as const;

export type ProgressBar3DProps = {
  /** 0 to 1. */
  value: number;
  /** Default `lg`. */
  size?: 'lg' | 'md' | 'sm';
  /** The fill: the brand violet (default) or a metric's accent. */
  accent?: AccentName | 'primary';
  /** Drawn inside the bar, `lg` only: "1 / 3". */
  label?: string;
  /** A reward that overlaps the bar's end, a sticker on a quest. */
  trailing?: ReactNode;
  accessibilityLabel: string;
  /** Read instead of a percentage: "1 of 3", from the catalogue. */
  accessibilityValueText?: string;
  /**
   * The light tap as the bar arrives full. Default true; off where the host
   * already marks the moment (a quest row's success tap), so one event is
   * one haptic.
   */
  haptic?: boolean;
  style?: StyleProp<ViewStyle>;
};

/**
 * A thick, rounded progress bar with Duolingo's highlight stripe riding the
 * fill.
 *
 * For progress toward something someone does: a quest, today's exercises. Never
 * for the plan's length or end (the plan is open-ended, and "day 42 of 84" is
 * the one bar it must not draw), never for pain, and never for a test score,
 * which keeps `ProgressCard`'s tick bar.
 *
 * The fill is drawn at full width and slid in from the left, rather than
 * widened, so its right end stays round at every value and no layout runs per
 * frame. Above zero it is never narrower than a dot, so a first step shows.
 * The label is drawn twice, once on the track and once inside the fill's clip,
 * so it reads wherever the fill's edge happens to cross it.
 */
export function ProgressBar3D({
  value,
  size = 'lg',
  accent = 'primary',
  label,
  trailing,
  accessibilityLabel,
  accessibilityValueText,
  haptic = true,
  style,
}: ProgressBar3DProps) {
  const scheme = useRaisedScheme();
  const meter = meterColors[scheme];
  const reduceMotion = useReducedMotion();
  const { height: h, highlight } = SIZES[size];
  const radius = h / 2;

  // The kit's filled face for the accent, so the count inside the fill reads
  // at AA: white on the violet face, as on every violet face in the kit, and
  // otherwise whichever of ink and white reads on the accent.
  const { face: fill, label: onFill } = faceFor(scheme, accent);
  const target = Math.min(Math.max(Number.isFinite(value) ? value : 0, 0), 1);

  const width = useSharedValue(0);
  const progress = useSharedValue(target);
  const glint = useSharedValue<number>(HIGHLIGHT_ALPHA[scheme]);
  const previous = useRef(target);

  useEffect(() => {
    progress.value = settle(target, FILL_MS);
    const crossed = previous.current < 1 && target >= 1;
    previous.current = target;
    if (!crossed) return undefined;
    // The bar arriving full, once: the stripe brightens and fades back, and
    // a light tap lands with it. It never loops.
    const base = HIGHLIGHT_ALPHA[scheme];
    if (!reduceMotion) {
      glint.value = withDelay(
        FILL_MS,
        withSequence(
          withTiming(GLINT_ALPHA, { duration: GLINT_MS / 2 }),
          withTiming(base, { duration: GLINT_MS / 2 }),
        ),
      );
    }
    if (!haptic) return undefined;
    const timer = setTimeout(() => {
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }, reduceMotion ? 0 : FILL_MS);
    return () => clearTimeout(timer);
  }, [target, progress, glint, scheme, reduceMotion, haptic]);

  // The fraction actually drawn: never less than a dot once above zero.
  const slide = useAnimatedStyle(() => {
    const w = width.value;
    if (w <= 0) return { opacity: 0, transform: [{ translateX: 0 }] };
    const v = progress.value;
    const shown = v <= 0.001 ? 0 : Math.max(v, h / w);
    return { opacity: 1, transform: [{ translateX: -(1 - shown) * w }] };
  });
  // Holds the inner label still while its clip slides under it.
  const counter = useAnimatedStyle(() => {
    const w = width.value;
    const v = progress.value;
    const shown = w <= 0 || v <= 0.001 ? 0 : Math.max(v, h / w);
    return { transform: [{ translateX: (1 - shown) * w }] };
  });
  // Transform and opacity only: the stripe's width comes from its clip, so
  // nothing here commits a layout per frame.
  const stripe = useAnimatedStyle(() => {
    const w = width.value;
    const v = progress.value;
    const shown = w <= 0 || v <= 0.001 ? 0 : Math.max(v, h / w);
    // Hidden while the fill is too short to hold it: a stripe on a dot reads
    // as a scratch.
    const visible = shown * w >= h * 1.5 ? 1 : 0;
    return {
      opacity: visible * glint.value,
      transform: [{ translateX: -(1 - shown) * w }],
    };
  });

  const percent = Math.round(target * 100);
  const showLabel = label != null && size === 'lg';

  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={
        accessibilityValueText != null ? { text: accessibilityValueText } : { min: 0, max: 100, now: percent }
      }
      style={[styles.row, style]}>
      <View
        onLayout={(event) => {
          width.value = event.nativeEvent.layout.width;
        }}
        style={[styles.track, { height: h, borderRadius: radius, backgroundColor: meter.track }]}>
        {showLabel && (
          <View style={styles.labelBox}>
            <Text style={[styles.label, { color: meter.label, lineHeight: h }]} maxFontSizeMultiplier={1}>
              {label}
            </Text>
          </View>
        )}
        <Animated.View style={[StyleSheet.absoluteFill, { borderRadius: radius, backgroundColor: fill }, slide]} />
        {highlight != null && (
          <View
            pointerEvents="none"
            style={[
              styles.stripeClip,
              {
                top: highlight.top,
                height: highlight.height,
                left: highlight.inset,
                right: highlight.inset,
                borderRadius: highlight.height / 2,
              },
            ]}>
            <Animated.View
              style={[styles.stripe, { borderRadius: highlight.height / 2, backgroundColor: raised[scheme].highlight }, stripe]}
            />
          </View>
        )}
        {showLabel && (
          <Animated.View style={[StyleSheet.absoluteFill, styles.clip, { borderRadius: radius }, slide]}>
            <Animated.View style={[StyleSheet.absoluteFill, counter]}>
              <View style={styles.labelBox}>
                <Text style={[styles.label, { color: onFill, lineHeight: h }]} maxFontSizeMultiplier={1}>
                  {label}
                </Text>
              </View>
            </Animated.View>
          </Animated.View>
        )}
      </View>
      {trailing != null && <View style={styles.trailing}>{trailing}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  track: {
    flex: 1,
    overflow: 'hidden',
  },
  clip: {
    overflow: 'hidden',
  },
  labelBox: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...fonts.heavy(12, 0.2),
    includeFontPadding: false,
    textAlign: 'center',
  },
  stripeClip: {
    position: 'absolute',
    overflow: 'hidden',
  },
  /** As wide as its clip, which is the track less the stripe's inset. */
  stripe: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  /** Overlaps the end of the bar, as Duolingo's quest chest does. */
  trailing: {
    marginLeft: -8,
  },
});
