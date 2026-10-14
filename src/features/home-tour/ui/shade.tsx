import { BlurView } from 'expo-blur';
import { Platform, StyleSheet, View } from 'react-native';

/**
 * What covers Home while the first-run flow is over it, the same for the
 * "Day 1" card and the tour's panes so the two read as one surface handing
 * over: a dark blur with a dim on it on iOS, and on Android, which has no
 * real blur, a deeper solid dim.
 */
const BLUR = 22;

/** Whether the cover is a blur at all. */
export const SHADE_BLURS = Platform.OS === 'ios';

/** The dim alone, for what is drawn in it rather than over it: the corners
 * the tour fills between its square hole and its rounded ring. */
export function shadeDim(scheme: 'light' | 'dark'): string {
  if (!SHADE_BLURS) return 'rgba(6,6,10,0.74)';
  return scheme === 'dark' ? 'rgba(6,6,10,0.62)' : 'rgba(10,10,20,0.55)';
}

export function Shade({ scheme }: { scheme: 'light' | 'dark' }) {
  return (
    <>
      {SHADE_BLURS && <BlurView tint="dark" intensity={BLUR} style={StyleSheet.absoluteFill} />}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: shadeDim(scheme) }]} />
    </>
  );
}
