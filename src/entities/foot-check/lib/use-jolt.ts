import { requireOptionalNativeModule } from 'expo-modules-core';
import { useEffect, useRef } from 'react';

type AccelerometerModule = typeof import('expo-sensors').Accelerometer;

/** How far from still, in g, counts as the foot coming down. Set high on
 * purpose: a count stopped early by a breath is worse than one that needs a
 * tap, and "Stop" is always there. */
const JOLT = 0.3;
/** The first moments are the leg being lifted: not listened to. */
const SETTLE_MS = 1200;

/**
 * Calls `onJolt` once when the phone, held against the chest, feels the
 * bump of a foot landing. Quietly nothing on a phone without the sensor.
 */
export function useJolt(active: boolean, onJolt: () => void): void {
  const handler = useRef(onJolt);
  handler.current = onJolt;

  useEffect(() => {
    if (!active) return undefined;
    if (requireOptionalNativeModule('ExponentAccelerometer') == null) return undefined;
    let sensor: AccelerometerModule;
    try {
      sensor = (require('expo-sensors') as typeof import('expo-sensors')).Accelerometer;
    } catch {
      return undefined;
    }
    const began = Date.now();
    let fired = false;
    let subscription: { remove: () => void } | null = null;
    let live = true;
    void sensor
      .isAvailableAsync()
      .catch(() => false)
      .then((available) => {
        if (!live || !available) return;
        sensor.setUpdateInterval(50);
        subscription = sensor.addListener(({ x, y, z }) => {
          if (fired || Date.now() - began < SETTLE_MS) return;
          if (Math.abs(Math.hypot(x, y, z) - 1) < JOLT) return;
          fired = true;
          handler.current();
        });
      });
    return () => {
      live = false;
      subscription?.remove();
    };
  }, [active]);
}
