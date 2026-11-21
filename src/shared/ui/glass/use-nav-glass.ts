import { isGlassEffectAPIAvailable, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Platform } from 'react-native';

import { surfaceFor, useReduceTransparency } from '@/shared/lib/theme';

/**
 * Whether the navigation layer may draw Liquid Glass (spec §4): iOS 26+ with
 * the glass API present and Reduce Transparency off. Anything else gets the
 * solid fallback. Content never asks: cards and lists are always opaque.
 */
export function useNavGlass(): boolean {
  const reduceTransparency = useReduceTransparency();
  const available = isLiquidGlassAvailable() && isGlassEffectAPIAvailable();
  return surfaceFor(available, reduceTransparency, Platform.OS) === 'liquid-glass';
}
