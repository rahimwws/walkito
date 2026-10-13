import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { DEPTH, filled, fonts, palette, raised, type AccentName, type DepthSize } from '@/shared/config';
import {
  GLASS_FACE,
  GLASS_RIM,
  RAISED_PRESS,
  Raised,
  faceFor,
  useGlassSurface,
  useRaisedScheme,
  type RaisedHaptic,
  type SheenKind,
} from '@/shared/ui/raised';

export type Button3DVariant = 'primary' | 'ink' | 'secondary' | 'glass' | 'accent' | 'ghost';
/** `xl` is the onboarding's call to action: a few points taller than `lg`, on
 * the same lip. */
export type Button3DSize = DepthSize | 'xl';

type Geometry = (typeof DEPTH)[DepthSize];

/** `lg` four points taller and a little rounder, the lip and the rule that an
 * outlined button stands as tall as a filled one unchanged. */
const XL: Geometry = { face: 60, lip: 6, outlinedFace: 62, outlinedLip: 4, total: 66, radius: 20 };

const geometry = (size: Button3DSize): Geometry => (size === 'xl' ? XL : DEPTH[size]);

/** An `lg` button, face and lip together: what a dock reserves for it. */
export const BUTTON_3D_HEIGHT = DEPTH.lg.total;
/** The same for `xl`. */
export const BUTTON_3D_XL_HEIGHT = XL.total;

/** How the label and the spinner trade places. */
const BUSY_FADE_MS = 120;

const SIZES = {
  xl: { label: fonts.heavy(19, -0.2), padX: 24, icon: 22, stroke: 2.4, gap: 10 },
  lg: { label: fonts.heavy(18, -0.2), padX: 24, icon: 22, stroke: 2.4, gap: 10 },
  md: { label: fonts.heavy(16, -0.1), padX: 20, icon: 20, stroke: 2.4, gap: 8 },
  sm: { label: fonts.bold(14), padX: 14, icon: 16, stroke: 2.2, gap: 6 },
} as const;

export type Button3DProps = {
  label: string;
  onPress: () => void;
  /** Default `primary`: the filled violet one, at most one per screen. */
  variant?: Button3DVariant;
  /** The face colour, for `variant="accent"`. */
  accent?: AccentName;
  /** Default `lg`. */
  size?: Button3DSize;
  icon?: IconSvgElement;
  /** Default trailing, as an arrow sits. */
  iconPosition?: 'leading' | 'trailing';
  /** Something before the label: a provider's logo on a sign-in button. */
  leading?: ReactNode;
  /** Work in flight: a spinner in the label's place, presses ignored. */
  loading?: boolean;
  disabled?: boolean;
  /** Stretch to the parent's width. Default true for `lg` and `xl`, false otherwise. */
  fullWidth?: boolean;
  /**
   * Where a button narrower than its parent sits, across the parent's main
   * axis: left, centre or right in a column, top, middle or bottom in a row.
   * Default `center`, which is also where a centred sheet would put it. Has no
   * effect on a full-width button.
   */
  align?: 'start' | 'center' | 'end';
  /**
   * In a fixed dock, outside any scroll view: the face drops and the haptic
   * fires on touch-down. Otherwise a touch waits `RAISED_PRESS.delayMs` to be
   * told from the start of a scroll, so scrolling past a button never buzzes.
   */
  docked?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
};

type Colours = {
  face: string;
  edge?: string;
  lip: string;
  label: string;
  /** Drawn glass: a see-through face with a sheen and a crescent lip. */
  sheen?: SheenKind;
};

/**
 * A button standing on its lip, which a press collapses: the kit's action.
 *
 * Six variants, and no danger one: colour never says a choice is bad, and a
 * destructive action says so in its words. `primary` is the filled violet
 * face on a darker violet lip, Duolingo's 3D button. `ink` and `accent`
 * are filled; `secondary` is outlined, the same total height, so any two side
 * by side line up top and bottom; `glass` is the system material standing on
 * the filled geometry, and outlined only in its solid fallback, which draws the
 * border; `ghost` is only its label, for the "not now" under a primary.
 *
 * Sentence case, never uppercase (the house rule), so the heavy weight is
 * what carries the energy Duolingo gets from capitals.
 *
 * `glass` is chrome you can press: never inside a `GlassCard` or a
 * `GlassView`, where glass on glass does not render. Use `secondary` there.
 */
export function Button3D({
  label,
  onPress,
  variant = 'primary',
  accent,
  size = 'lg',
  icon,
  iconPosition = 'trailing',
  leading,
  loading = false,
  disabled = false,
  fullWidth = size === 'lg' || size === 'xl',
  align = 'center',
  docked = false,
  accessibilityLabel,
  accessibilityHint,
  style,
}: Button3DProps) {
  const scheme = useRaisedScheme();
  const surface = useGlassSurface();
  const tokens = raised[scheme];
  const metrics = SIZES[size];
  const depth = geometry(size);

  const busy = useSharedValue(loading ? 1 : 0);
  useEffect(() => {
    busy.value = withTiming(loading ? 1 : 0, {
      duration: BUSY_FADE_MS,
      reduceMotion: ReduceMotion.System,
    });
  }, [loading, busy]);
  const labelFade = useAnimatedStyle(() => ({ opacity: 1 - busy.value }));
  const spinnerFade = useAnimatedStyle(() => ({ opacity: busy.value }));

  const colours = ((): Colours => {
    if (disabled) {
      return { face: tokens.disabledFace, edge: undefined, lip: tokens.disabledFace, label: tokens.disabledInk };
    }
    switch (variant) {
      case 'primary':
        // Filled, never glass: a violet glass primary read as murky on the
        // dark screens.
        return filled[scheme].primary;
      case 'ink':
        return filled[scheme].ink;
      case 'accent':
        return faceFor(scheme, accent ?? 'violet');
      case 'secondary':
        return { face: tokens.surface, edge: tokens.edge, lip: tokens.lip, label: palette[scheme].foreground };
      case 'glass':
        return { face: GLASS_FACE, lip: tokens.glassLip, label: palette[scheme].foreground };
      case 'ghost':
        return { face: 'transparent', lip: 'transparent', label: tokens.selectedInk };
    }
  })();

  const glyph =
    icon != null ? (
      <HugeiconsIcon icon={icon} size={metrics.icon} color={colours.label} strokeWidth={metrics.stroke} />
    ) : null;

  const content = (
    <>
      <Animated.View style={[styles.row, { gap: metrics.gap }, labelFade]}>
        {leading}
        {iconPosition === 'leading' && glyph}
        <Text
          style={[metrics.label, styles.label, { color: colours.label }]}
          numberOfLines={1}
          maxFontSizeMultiplier={1.3}>
          {label}
        </Text>
        {iconPosition === 'trailing' && glyph}
      </Animated.View>
      {/* The system spinner rather than the app's Lottie one: that is drawn
          black or white by scheme, and a spinner here has to be the label's
          colour, which on violet is white in both. */}
      <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.center, spinnerFade]}>
        <ActivityIndicator animating={loading} color={colours.label} size="small" />
      </Animated.View>
    </>
  );

  const width: ViewStyle = { alignSelf: fullWidth ? 'stretch' : ALIGN[align] };
  const hitSlop = size === 'sm' ? { top: 4, bottom: 4 } : undefined;
  const pressDelay = docked ? 0 : RAISED_PRESS.delayMs;
  const filledVariant = variant === 'primary' || variant === 'ink' || variant === 'accent';
  const haptic: RaisedHaptic = filledVariant && size !== 'sm' ? 'medium' : 'light';

  if (variant === 'ghost') {
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={accessibilityHint}
        accessibilityState={{ disabled, busy: loading }}
        // Not `disabled` while loading: the Pressable would add it to the
        // accessibility state, and a busy button would read "dimmed" too.
        disabled={disabled}
        unstable_pressDelay={pressDelay}
        hitSlop={hitSlop}
        onPressIn={() => {
          if (loading) return;
          void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        onPress={loading ? undefined : onPress}
        // Duolingo's "No thanks": no face to press down, so the press is the
        // label dimming, instantly.
        style={({ pressed }) => [
          styles.center,
          { height: depth.total, paddingHorizontal: metrics.padX, opacity: pressed && !loading ? 0.6 : 1 },
          width,
          style,
        ]}>
        {content}
      </Pressable>
    );
  }

  // Glass is outlined only where it draws the kit's 2pt border, its solid
  // fallback. Liquid glass and the blur have no border, so the outlined lip
  // (border plus a thinner ledge) would leave a 1-2pt crescent; they stand on
  // the filled geometry instead.
  const outlined = variant === 'secondary' || (variant === 'glass' && surface === 'solid');

  return (
    <Raised
      face={colours.face}
      edge={colours.edge}
      edgeWidth={colours.sheen != null ? GLASS_RIM : undefined}
      translucent={colours.sheen != null}
      sheen={colours.sheen}
      lip={colours.lip}
      depth={outlined ? depth.outlinedLip : depth.lip}
      radius={depth.radius}
      haptic={haptic}
      pressDelay={pressDelay}
      disabled={disabled}
      busy={loading}
      onPress={onPress}
      hitSlop={hitSlop}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      style={[width, style]}
      contentStyle={[
        styles.center,
        { height: outlined ? depth.outlinedFace : depth.face, paddingHorizontal: metrics.padX },
      ]}>
      {content}
    </Raised>
  );
}

const ALIGN = { start: 'flex-start', center: 'center', end: 'flex-end' } as const;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flexShrink: 1,
    textAlign: 'center',
  },
});
