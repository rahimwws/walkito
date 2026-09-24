import { usePathname } from 'expo-router';
import { useEffect } from 'react';

import { screen } from '@/shared/lib/analytics';

/**
 * A `$screen` event for every route the user lands on.
 *
 * The pathname, not the screen's title: titles are translated, and one screen
 * reported under three names is three screens in every chart. Dynamic segments
 * arrive filled in (`/day/12`), which is useful here — which day somebody
 * opened is the question.
 */
export function useScreenTracking(): void {
  const pathname = usePathname();
  useEffect(() => {
    screen(pathname);
  }, [pathname]);
}
