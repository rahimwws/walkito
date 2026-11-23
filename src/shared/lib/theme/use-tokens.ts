import { useCallback } from 'react';
import type { ColorValue } from 'react-native';

import { colorFor, themes, type Tokens } from '@/shared/config';

import { useColorScheme } from './theme-store';

/**
 * The current scheme's tokens as strings, for whatever reads the hex: an SVG
 * fill, a gradient, Skia, `interpolateColor`, a colour with alpha appended.
 * Plain views and text take the native `colors` from `@/shared/config`.
 */
export function useTokens(): Tokens {
  return themes[useColorScheme()];
}

/** `colorFor` bound to the current scheme: a token or a derived colour as a
 * string, for an SVG fill or anything else that needs the hex. */
export function useColorFor(): (color: ColorValue) => string {
  const scheme = useColorScheme();
  return useCallback((color: ColorValue) => colorFor(color, scheme), [scheme]);
}
