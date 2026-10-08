import LottieView from 'lottie-react-native';
import { useEffect, useState } from 'react';
import { AccessibilityInfo, Image } from 'react-native';

import { MASCOT } from '../config/mascot';

/** Frame 84 of the same Lottie, cut as a still (`assets/update`). */
const STILL = require('@assets/update/mascot-handoff.png');

/**
 * The onboarding's one mascot: the Lottie the intro plays, and nothing else.
 * Every reaction, the lines under the answers, the halfway screen and the
 * 30-second check all use it, so the character never changes style between
 * screens. Plays while mounted — each of those is mounted only while it is on
 * screen, so nothing loops behind the flow. Reduce Motion gets a still frame
 * of the same animation.
 */
export function LottieMascot({ size }: { size: number }) {
  const [still, setStill] = useState(false);
  useEffect(() => {
    void AccessibilityInfo.isReduceMotionEnabled().then(setStill);
  }, []);
  if (still) return <Image source={STILL} style={{ width: size, height: size }} resizeMode="contain" />;
  return <LottieView source={MASCOT} style={{ width: size, height: size }} resizeMode="contain" autoPlay loop />;
}
