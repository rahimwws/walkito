import { requireOptionalNativeModule } from 'expo-modules-core';
import { useEffect, useRef, useState } from 'react';
import { useSharedValue, withTiming, type SharedValue } from 'react-native-reanimated';

import { NO_READING, feed, gaugeFill, tiltOf, type Reading } from '../model/angle';

type AccelerometerModule = typeof import('expo-sensors').Accelerometer;

/** The accelerometer, or null in a binary built before it was linked. */
function accelerometer(): AccelerometerModule | null {
  if (requireOptionalNativeModule('ExponentAccelerometer') == null) return null;
  try {
    return (require('expo-sensors') as typeof import('expo-sensors')).Accelerometer;
  } catch {
    return null;
  }
}

/**
 * Whether this phone can measure: null until it has answered. A simulator
 * cannot, and in development it plays a reading instead (`useAnkleReading`),
 * so the screens can be walked through there.
 */
export function useCanMeasure(): boolean | null {
  const [able, setAble] = useState<boolean | null>(null);
  useEffect(() => {
    let live = true;
    const sensor = accelerometer();
    if (sensor == null) {
      setAble(__DEV__);
      return undefined;
    }
    void sensor
      .isAvailableAsync()
      .then((available) => {
        if (live) setAble(available || __DEV__);
      })
      .catch(() => {
        if (live) setAble(__DEV__);
      });
    return () => {
      live = false;
    };
  }, []);
  return able;
}

/** Thirty samples a second: smooth to the eye, light on the battery. */
const INTERVAL_MS = 33;

export type AnkleReading = {
  /** The gauge's fill, 0 to 1, moved on the UI thread. */
  fill: SharedValue<number>;
  /** The angle to print, whole degrees. */
  degrees: number;
  /** The shin has moved forward and is being held: about to be taken. */
  settling: boolean;
};

/**
 * The shin's angle while `active`, and `onDone` once it has been taken.
 *
 * The gauge is driven through a shared value, so thirty samples a second
 * redraw nothing in React; the printed number changes only when its whole
 * degree does.
 *
 * `demo` is the angle a simulator, which has no accelerometer, plays its
 * way up to in development.
 */
export function useAnkleReading(active: boolean, onDone: (degrees: number) => void, demo: number = 31): AnkleReading {
  const fill = useSharedValue(0);
  const [degrees, setDegrees] = useState(0);
  const [settling, setSettling] = useState(false);
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    if (!active) return undefined;
    let reading: Reading = NO_READING;
    let finished = false;
    setDegrees(0);
    setSettling(false);
    fill.value = 0;

    const take = (tilt: number | null, at: number) => {
      if (finished) return;
      reading = feed(reading, tilt, at);
      const shown = Math.round(reading.result ?? reading.angle);
      fill.value = withTiming(gaugeFill(reading.result ?? reading.angle), { duration: 90 });
      setDegrees((prev) => (prev === shown ? prev : shown));
      const held = reading.result == null && reading.angle >= 10 && reading.angle >= reading.low + 6;
      setSettling((prev) => (prev === held ? prev : held));
      if (reading.result != null) {
        finished = true;
        done.current(reading.result);
      }
    };

    const sensor = accelerometer();
    let simulated: ReturnType<typeof setInterval> | null = null;
    let subscription: { remove: () => void } | null = null;
    let live = true;

    const simulate = () => {
      if (!__DEV__) return;
      const began = Date.now();
      simulated = setInterval(() => {
        const elapsed = Date.now() - began;
        // A second sitting still, two sliding back, then held.
        const angle = elapsed < 1000 ? 2 : Math.min(demo, 2 + ((demo - 2) * (elapsed - 1000)) / 2000);
        take(angle, Date.now());
      }, INTERVAL_MS);
    };

    if (sensor == null) simulate();
    else
      void sensor
        .isAvailableAsync()
        .catch(() => false)
        .then((available) => {
          if (!live) return;
          if (!available) {
            simulate();
            return;
          }
          sensor.setUpdateInterval(INTERVAL_MS);
          subscription = sensor.addListener((sample) => take(tiltOf(sample), Date.now()));
        });

    return () => {
      live = false;
      finished = true;
      subscription?.remove();
      if (simulated != null) clearInterval(simulated);
    };
  }, [active, demo, fill]);

  return { fill, degrees, settling };
}
