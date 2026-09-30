import { usePathname, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { track } from '@/shared/lib/analytics';

/**
 * Where a link to a screen the app does not have lands — and leaves at once.
 *
 * Expo Router's own answer is an "Unmatched Route" page with the raw path on
 * it, which is a developer's screen and never something a user should meet: a
 * stale email, an old widget link or a mistyped URL is not the user's problem.
 * So this renders nothing and goes Home, where the root layout's guards decide
 * what Home means — onboarding, the paywall or the tabs. The path is reported
 * so a broken link shows up in PostHog rather than in a support email.
 */
export function NotFoundPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    track('route_not_found', { path: pathname.slice(0, 120) });
    router.replace('/');
  }, [pathname, router]);

  return null;
}
