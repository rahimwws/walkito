import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, StyleSheet, View } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { OfferScreen, type PassSale } from '@/features/home-offer';
import { useColorScheme } from '@/shared/lib/theme';
import { usePassCheckout } from '@/widgets/pass-checkout';

const BLUR = 36;
const IN_MS = 520;
/** Raised by the tour's last tap, it waits for the tour: the last stop fades
 * out (220 ms) and only then takes its modal down, and one modal presenting
 * while another is still up does not show on iOS. A launch onto the wall has
 * nothing to wait for and presents at once, as it always did. */
const PRESENT_AFTER_MS = 360;

/**
 * The offer after the free first run (the "Day 1" session and the Home tour),
 * for somebody who skipped the paywall: Home stays where it was, blurred, and
 * the one-time trial offer (and the offers after it, `OfferScreen`) stands
 * over it.
 *
 * A hard wall, as the paywall is: no close, and Android's back does nothing.
 * Buying or restoring makes `entitled` true, the root stops rendering this and
 * Home is theirs; leaving the app is the other way out, and it comes back on
 * the next launch. A modal rather than a route, so the blurred page under it
 * is their own Home, the thing the offer is for.
 *
 * The limited offer's 3-month pass is bought through the pass checkout, whose
 * sheets are mounted here, inside this modal, so they rise over the offer.
 */
export function OfferWall({ visible }: { visible: boolean }) {
  const scheme = useColorScheme();
  const checkout = usePassCheckout();
  const pass: PassSale = {
    buy: (plan, onPurchased) => checkout.start(plan, { placement: 'limited_offer', onPurchased }),
    busy: checkout.busy,
    notice: checkout.notice,
  };
  const [mounted, setMounted] = useState(visible);
  const progress = useSharedValue(0);
  /** Up from the first frame: a launch onto the wall, not the tour's end. */
  const atLaunch = useRef(visible);

  useEffect(() => {
    if (!visible) {
      atLaunch.current = false;
      setMounted(false);
      progress.value = 0;
      return undefined;
    }
    let frame = 0;
    const present = () => {
      setMounted(true);
      frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
    };
    const wait = atLaunch.current ? 0 : PRESENT_AFTER_MS;
    atLaunch.current = false;
    if (wait === 0) {
      present();
      return () => cancelAnimationFrame(frame);
    }
    const timer = setTimeout(present, wait);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
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
        <OfferScreen pass={pass} />
      </Animated.View>
      {checkout.sheet}
    </Modal>
  );
}
