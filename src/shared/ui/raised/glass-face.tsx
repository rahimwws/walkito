import { BlurView } from 'expo-blur';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, type SharedValue } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { PRIMARY, RAISED_BORDER, filled, meterColors, palette, raised } from '@/shared/config';
import { mix } from '@/shared/lib/color';
import { surfaceFor, useReduceTransparency, type GlassSurface } from '@/shared/lib/theme';

import { crescentPath } from './crescent';

/** Read once: whether the OS can draw Liquid Glass does not change at runtime. */
const GLASS = isLiquidGlassAvailable();

/** `#RGB` or `#RRGGBB` at an alpha, as `rgba()`: a config colour made see-through. */
export function seeThrough(hex: string, alpha: number): string {
  const raw = hex.replace('#', '');
  const full = raw.length === 3 ? raw.replace(/./g, (c) => c + c) : raw;
  const v = Number.parseInt(full, 16);
  return `rgba(${(v >> 16) & 255},${(v >> 8) & 255},${v & 255},${alpha})`;
}

export type SheenKind = 'soft' | 'gloss';

/**
 * The kit's glass, drawn rather than asked of the system: a see-through face,
 * a sheen falling from its top edge, a thin rim, and a solid crescent lip
 * under it (`GlassLip`). What the 3D answer cards, cards and the primary button
 * are made of.
 *
 * Plain views on purpose. The system material (`GlassFace`) dies for good
 * under an ancestor whose alpha is animated (expo/expo#41024), and every
 * onboarding question fades as it changes; over a flat dark page it also looks
 * like almost nothing, where a sheen and a rim read as glass at any size. It
 * costs no effect view per card, and it draws the same on Android, which has
 * no glass of its own: there it is simply a fill. Under Reduce Transparency the
 * callers draw their solid faces instead.
 *
 * Every entry is a config colour, made see-through or mixed as its comment
 * says; the alphas are the material.
 */
export const GLASS_MATERIAL = {
  light: {
    /** A neutral pane: the card colour at 0.74 over the page. */
    face: seeThrough(palette.light.card, 0.74),
    rim: seeThrough(palette.light.foreground, 0.08),
    lip: raised.light.glassLip,
    /** A chosen pane leans violet, its rim and lip the chosen answer's edge. */
    selectedFace: seeThrough(PRIMARY, 0.14),
    selectedRim: raised.light.selectedEdge,
    selectedLip: raised.light.selectedEdge,
    /** The primary button: the violet face nearly opaque, so white reads on it. */
    primaryFace: seeThrough(filled.light.primary.face, 0.92),
    primaryRim: seeThrough(palette.light.card, 0.45),
    primaryLip: filled.light.primary.lip,
    sheen: {
      soft: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 100%)',
      gloss:
        'linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.06) 100%)',
    },
    highlight: seeThrough(palette.light.card, 0.95),
  },
  dark: {
    face: seeThrough(palette.dark.foreground, 0.06),
    rim: seeThrough(palette.dark.foreground, 0.13),
    lip: raised.dark.glassLip,
    selectedFace: seeThrough(PRIMARY, 0.24),
    selectedRim: seeThrough(mix(PRIMARY, palette.dark.foreground, 0.35), 0.8),
    selectedLip: raised.dark.selectedEdge,
    /** Violet at three fifths over the near-black page, a tint rather than a
     * fill: white on it is about 9:1. */
    primaryFace: seeThrough(filled.dark.primary.face, 0.6),
    primaryRim: seeThrough(mix(PRIMARY, palette.dark.foreground, 0.55), 0.6),
    primaryLip: filled.dark.primary.lip,
    sheen: {
      soft: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 55%, rgba(255,255,255,0) 100%)',
      gloss:
        'linear-gradient(180deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)',
    },
    highlight: seeThrough(palette.dark.foreground, 0.3),
  },
} as const;

/** The rim a drawn glass face wears: thinner than the kit's 2pt border. */
export const GLASS_RIM = 1;

/**
 * The light on a drawn glass face, laid under its content: the sheen falling
 * from the top, and a 1pt highlight along the top edge, clear of the corners.
 * `gloss` is a button's, split at the middle the way a glass pill catches it;
 * `soft` is a card's.
 */
export function GlassSheen({
  radius,
  scheme,
  kind = 'soft',
}: {
  radius: number;
  scheme: 'light' | 'dark';
  kind?: SheenKind;
}) {
  const tokens = GLASS_MATERIAL[scheme];
  const shape = { borderRadius: Math.max(radius, 0), borderCurve: 'continuous' as const };
  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, shape, styles.clip]}>
      <View style={[StyleSheet.absoluteFill, { experimental_backgroundImage: tokens.sheen[kind] }]} />
      <View style={[styles.highlight, { left: radius, right: radius, backgroundColor: tokens.highlight }]} />
    </View>
  );
}

/** The blur recipe on iOS before 26, the one `GlassChip` settled on. */
const BLUR_INTENSITY = 30;
const SHEEN = 'rgba(255,255,255,0.10)';
const RIM = 'rgba(255,255,255,0.25)';
const HIGHLIGHT = 'rgba(255,255,255,0.40)';

/** Which material a glass face draws on this device, now. */
export function useGlassSurface(): GlassSurface {
  return surfaceFor(GLASS, useReduceTransparency(), Platform.OS);
}

/**
 * The glass material, laid *under* a face's content as an absolute sibling.
 *
 * Never around the content: a `GlassView` with children nested in another
 * glass does not render on iOS 26, and a touchable mounted inside an
 * interactive glass loses its first tap to the material's own recogniser (see
 * `StreakCapsule`). As a sibling it is neither.
 *
 * Not interactive. The kit moves the face itself on a press, and the system's
 * flex, fighting a JS translate, reads as the face shivering (`ActionButton`
 * found the same).
 */
export function GlassFace({
  surface,
  radius,
  scheme,
}: {
  surface: GlassSurface;
  radius: number;
  scheme: 'light' | 'dark';
}) {
  const meter = meterColors[scheme];
  const shape = { borderRadius: radius, borderCurve: 'continuous' as const };

  if (surface === 'liquid-glass') {
    return (
      <GlassView
        pointerEvents="none"
        glassEffectStyle="regular"
        isInteractive={false}
        colorScheme={scheme}
        tintColor={meter.glassTint}
        style={[StyleSheet.absoluteFill, shape]}
      />
    );
  }

  if (surface === 'blur') {
    return (
      <View pointerEvents="none" style={[StyleSheet.absoluteFill, shape, styles.clip]}>
        <BlurView intensity={BLUR_INTENSITY} tint={scheme} style={StyleSheet.absoluteFill} />
        <View style={[StyleSheet.absoluteFill, shape, styles.rim, { backgroundColor: SHEEN }]} />
        <View style={[styles.highlight, { left: radius, right: radius }]} />
      </View>
    );
  }

  // Solid: Reduce Transparency, and Android. The fill is the one every glass
  // card already falls back to, and the border is the kit's, so a solid glass
  // button reads as a sibling of a secondary one rather than as a hole.
  return (
    <View
      pointerEvents="none"
      style={[
        StyleSheet.absoluteFill,
        shape,
        {
          backgroundColor: meter.solidFallback,
          borderWidth: RAISED_BORDER,
          borderColor: raised[scheme].edge,
        },
      ]}
    />
  );
}

/**
 * The lip under a glass face: only the crescent that shows below it (see
 * `crescentPath`), so nothing sits behind the material to show through.
 *
 * It fades as the face comes down. An opaque face covers its ledge when
 * pressed; glass would only tint it, and a grey band seen through a pressed
 * button reads as a smear rather than as the button having landed.
 */
export function GlassLip({
  width,
  height,
  radius,
  depth,
  color,
  pressed,
}: {
  width: number;
  height: number;
  radius: number;
  depth: number;
  color: string;
  pressed: SharedValue<number>;
}) {
  const fade = useAnimatedStyle(() => ({ opacity: 1 - pressed.value }));
  if (width <= 0 || height <= 0) return null;
  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.lip, { width, height: height + depth }, fade]}>
      <Svg width={width} height={height + depth}>
        <Path d={crescentPath(width, height, radius, depth)} fill={color} />
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  clip: {
    overflow: 'hidden',
  },
  rim: {
    borderWidth: 1,
    borderColor: RIM,
  },
  /** The glass's top edge catching the light. */
  highlight: {
    position: 'absolute',
    top: 0,
    height: 1,
    backgroundColor: HIGHLIGHT,
  },
  lip: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
