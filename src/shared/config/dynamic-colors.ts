import { DynamicColorIOS, Platform, type ColorValue } from 'react-native';

import { bootScheme } from '@/shared/lib/appearance';

import { themes, type ColorScheme, type Tokens } from './tokens';

/**
 * The tokens as colours the platform resolves, so a module-level
 * `StyleSheet.create` follows the appearance with no re-render.
 *
 * iOS: every string becomes `DynamicColorIOS({ light, dark })`, a UIColor that
 * resolves against the trait collection when it is drawn. `Appearance.
 * setColorScheme()` sets the window's override, so the in-app choice reaches it
 * as surely as the system's.
 *
 * Android: the boot scheme's strings (see `bootScheme`).
 *
 * Views, text and SVG take them as they are: RNSVG resolves its UIColor when it
 * draws, and UIKit redraws on an appearance change (checked on the simulator
 * with Hugeicons and the part icons). They are opaque objects on iOS, though,
 * so anything that reads the hex (a gradient, Skia, `interpolateColor`, a
 * SwiftUI modifier, the glass tint, a string built from a colour, a comparison
 * with a literal) takes `useTokens()` or `useColorFor()` from
 * `@/shared/lib/theme`, and a colour worked out from a token at module scope
 * takes `derive` or `themed` below. expo-linear-gradient makes its CGColors
 * once, so a dynamic colour there would keep the scheme it was first drawn in.
 */
type Native<T> = {
  readonly [K in keyof T]: T[K] extends string ? ColorValue : T[K] extends object ? Native<T[K]> : T[K];
};

/** One colour in both schemes, the way the tokens are built. */
function both(light: string, dark: string): ColorValue {
  if (Platform.OS === 'ios') return DynamicColorIOS({ light, dark });
  return bootScheme === 'dark' ? dark : light;
}

function resolve<T extends object>(light: T, dark: T): Native<T> {
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(light) as (keyof T & string)[]) {
    const l = light[key];
    const d = dark[key];
    if (typeof l === 'string' && typeof d === 'string') {
      out[key] = both(l, d);
    } else if (typeof l === 'object' && l !== null) {
      out[key] = resolve(l as object, d as object);
    } else {
      out[key] = l;
    }
  }
  return out as Native<T>;
}

const native: Native<Tokens> = resolve(themes.light, themes.dark);

export const colors = native.colors;
export const parts = native.parts;
export const bitepal = native.bitepal;
export const bodyColors = native.bodyColors;

/**
 * A colour's string for one scheme: a token's half, or a plain string as it
 * is. For what reads the hex (see above); in a component, `useColorFor()` from
 * `@/shared/lib/theme` binds the current scheme.
 */
export function colorFor(color: ColorValue, scheme: ColorScheme): string {
  if (typeof color === 'string') return color;
  // `DynamicColorIOS` returns `{ dynamic: { light, dark } }` (RN's
  // PlatformColorValueTypes.ios.js); the tokens and `derive` only make those.
  const dynamic = (color as { dynamic?: { light: string; dark: string } }).dynamic;
  if (dynamic != null) return scheme === 'dark' ? dynamic.dark : dynamic.light;
  throw new Error('colorFor: not a token, a derived colour or a string');
}

/**
 * A colour worked out from another one (a tint, a mix), in both schemes, and
 * as native as its source: `derive(bodyColors.toes, (hex, scheme) => …)` in a
 * module-level StyleSheet follows the appearance like the token does.
 */
export function derive(color: ColorValue, make: (hex: string, scheme: ColorScheme) => string): ColorValue {
  return both(make(colorFor(color, 'light'), 'light'), make(colorFor(color, 'dark'), 'dark'));
}

/** A colour picked or worked out from the tokens, in both schemes. */
export function themed(pick: (tokens: Tokens, scheme: ColorScheme) => string): ColorValue {
  return both(pick(themes.light, 'light'), pick(themes.dark, 'dark'));
}
