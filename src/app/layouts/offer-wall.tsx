import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { Modal, Platform, StyleSheet, View } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { OfferScreen } from '@/features/home-offer';
import { useColorScheme } from '@/shared/lib/theme';

const BLUR = 36;
const IN_MS = 520;

/**
 * The offer after the free first test, for somebody who skipped the paywall:
 * Home stays where it was, blurred, and the one-time trial offer (and the
 * offers after it, `OfferScreen`) stands over it.
 *
 * A hard wall, as the paywall is: no close, and Android's back does nothing.
 * Buying or restoring makes `entitled` true, the root stops rendering this and
 * Home is theirs; leaving the app is the other way out, and it comes back on
 * the next launch. A modal rather than a route, so the blurred page under it
 * is their own Home, the thing the offer is for.
 */
export function OfferWall({ visible }: { visible: boolean }) {
  const scheme = useColorScheme();
  const [mounted, setMounted] = useState(visible);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (!visible) {
      setMounted(false);
      progress.value = 0;
      return undefined;
    }
    setMounted(true);
    const frame = requestAnimationFrame(() => {
      progress.value = withTiming(1, {
        duration: IN_MS,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [visible, progress]);

  const fade = useAnimatedStyle(() => ({ opacity: progress.value }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => undefined}>
      <Animated.View style={[StyleSheet.absoluteFill, fade]}>
        {Platform.OS === 'ios' ? (
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={StyleSheet.absoluteFill} />
        ) : null}
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: scheme === 'dark' ? 'rgba(10,10,12,0.62)' : 'rgba(250,250,252,0.7)' },
          ]}
        />
        <OfferScreen />
      </Animated.View>
    </Modal>
  );
}
