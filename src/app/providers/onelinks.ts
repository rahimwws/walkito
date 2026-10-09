import { useRouter, type Href } from 'expo-router';
import { useEffect, useRef } from 'react';

import { deepLinkPath, savePendingLink, takePendingLink } from '@/pages/open';
import { onDeepLink } from '@/shared/lib/appsflyer';

/**
 * OneLinks, from the AppsFlyer SDK to a screen.
 *
 * The SDK resolves both kinds of OneLink to the same callback: a direct one
 * (the app was installed and the link opened it) and a deferred one (the
 * person installed from the link, and this is the first launch). The link's
 * `deep_link_value` becomes an `/open/…` path (`deepLinkPath`) and goes
 * through the same page as every email button, which knows what each target
 * needs — the paywall's guards, the program overlay, the browser for a guide.
 *
 * Until the app proper (the tabs) is reachable nothing is navigated: the link
 * is kept (`savePendingLink`) and `usePendingLink` opens it once it is. During
 * the onboarding a pushed route would remount it, and nobody arriving from an
 * ad skips the questions their plan is built from; on the paywall or the setup
 * screens the target is not there yet (and someone on the paywall is already
 * where a `paywall` link would take them).
 *
 * Only production builds run AppsFlyer, so in every other build this
 * subscribes to a callback that never fires. `walkito://` links do not come
 * through here; Expo Router handles them (`app/+native-intent.tsx`).
 */
export function useOneLinks(reachable: boolean): void {
  const router = useRouter();
  const reachableRef = useRef(reachable);
  reachableRef.current = reachable;

  useEffect(
    () =>
      onDeepLink((link) => {
        const path = deepLinkPath(link.value);
        if (!reachableRef.current) {
          if (path.length > 0) savePendingLink(`/open/${path}`);
          return;
        }
        if (path.length > 0) {
          router.push(`/open/${path}` as Href);
          return;
        }
        // No value, or one this build does not know: Home.
        router.navigate('/');
      }),
    [router],
  );
}

/**
 * Opens a link kept while the app proper was out of reach, once the tabs are
 * reachable: after the onboarding, the paywall and the setup screens. Email
 * links tapped before the onboarding was done are kept the same way
 * (`OpenLinkPage`). Taken as it is opened, so it fires once.
 */
export function usePendingLink(reachable: boolean): void {
  const router = useRouter();
  useEffect(() => {
    if (!reachable) return;
    const href = takePendingLink();
    if (href != null) router.push(href as Href);
  }, [reachable, router]);
}
