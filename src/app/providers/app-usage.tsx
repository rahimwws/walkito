import { useEffect } from 'react';
import { AppState } from 'react-native';

import { usageStarted, usageStopped } from '@/shared/lib/usage';

/**
 * Counts foreground time per day, for the backend's engagement view. Started
 * on mount when the app is in front, and then follows AppState. A launch iOS
 * made in the background (HealthKit's delivery, the on-feet task) mounts this
 * too, and is neither an open nor time spent: it counts from the moment the
 * app is brought forward, if it is.
 */
export function useAppUsage(): void {
  useEffect(() => {
    if (AppState.currentState !== 'background') usageStarted();
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') usageStarted();
      else usageStopped();
    });
    return () => {
      usageStopped();
      sub.remove();
    };
  }, []);
}
