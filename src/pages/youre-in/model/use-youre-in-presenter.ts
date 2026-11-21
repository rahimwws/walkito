import { router } from 'expo-router';
import { useEffect } from 'react';

import { takeWelcomeOwed, useWelcomeOwed } from '@/entities/purchase';

/** Lets whatever closed into the app (the setup's last step, the offer wall's
 * modal) finish leaving before the screen goes over it. */
const PRESENT_AFTER_MS = 600;

/**
 * Raises "You're in" over the tabs once one is owed (`markWelcomeOwed`):
 * straight after a purchase over Home, or after the setup screens that follow
 * a first purchase. Mounted by the tabs, so it waits for them.
 */
export function useYoureInPresenter(): void {
  const owed = useWelcomeOwed();
  useEffect(() => {
    if (!owed) return undefined;
    const timer = setTimeout(() => {
      if (takeWelcomeOwed()) router.push('/youre-in');
    }, PRESENT_AFTER_MS);
    return () => clearTimeout(timer);
  }, [owed]);
}
