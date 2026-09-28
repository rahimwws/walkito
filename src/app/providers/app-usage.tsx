import { useEffect } from 'react';
import { AppState } from 'react-native';

import { usageStarted, usageStopped } from '@/shared/lib/usage';

/**
 * Counts foreground time per day, for the backend's engagement view. Started
 * on mount (the app is in front when this runs) and then follows AppState.
 */
export function useAppUsage(): void {
  useEffect(() => {
    usageStarted();
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
