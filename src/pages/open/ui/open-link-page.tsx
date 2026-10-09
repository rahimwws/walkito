import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Linking } from 'react-native';

import { unlockBoost } from '@/entities/offer';
import { recordEmailLinkOpened } from '@/entities/profile';
import { requestProtocol } from '@/entities/protocols';
import { clearBrowsingLapsed, useAccessLapsed, useEntitled } from '@/entities/purchase';
import { useOnboarded } from '@/entities/session';
import { track } from '@/shared/lib/analytics';
import { requestProgram } from '@/shared/lib/program';

import { savePendingLink } from '../model/pending';
import { linkTarget } from '../model/route';

/**
 * `/open/{path}` — where every email button and OneLink lands.
 *
 * Renders nothing and stays for one frame: it records the click against the
 * email it came from (`src=email&e=<key>`), then hands the user to the screen
 * the email talked about and removes itself from the stack. Registered outside
 * the root layout's guards, so a link always resolves; the guards then decide
 * what Home means for this user — onboarding, the paywall, or the tabs.
 *
 * The plan, today's session and the test cannot be opened by route: the
 * program overlay lives inside the tabs. They are asked for through
 * `requestProgram`, which the plan acts on once it has mounted.
 *
 * Before the onboarding is done the link is kept, not followed
 * (`savePendingLink`): the onboarding builds the plan the link points into,
 * and nobody skips it by arriving from an ad. The root layout opens the kept
 * link once the app proper is reachable.
 */
export function OpenLinkPage() {
  const router = useRouter();
  const onboarded = useOnboarded();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  const params = useLocalSearchParams<{ path?: string | string[]; src?: string; e?: string; minutes?: string; offering?: string }>();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const segments = Array.isArray(params.path) ? params.path : params.path != null ? [params.path] : [];
    const path = segments.join('/');
    if (params.src === 'email' && params.e) {
      track('email_link_opened', { email_key: params.e, path });
      void recordEmailLinkOpened(params.e, path);
    }

    if (!onboarded) {
      if (path.length > 0) {
        const query = new URLSearchParams();
        if (params.minutes != null) query.set('minutes', params.minutes);
        if (params.offering != null) query.set('offering', params.offering);
        const rest = query.toString();
        savePendingLink(`/open/${path}${rest ? `?${rest}` : ''}`);
      }
      router.replace('/');
      return;
    }

    const target = linkTarget(segments, { minutes: params.minutes, offering: params.offering });
    switch (target.to) {
      case 'program':
        requestProgram(target.request);
        router.replace('/');
        return;
      case 'progress':
        router.replace('/progress');
        return;
      case 'library':
        requestProtocol(target.protocol);
        router.replace('/quick');
        return;
      case 'offer':
        // The email's discount is the win-back price, unlocked the same way the
        // win-back notification unlocks it. Someone who has paid since gets Home.
        if (entitled) {
          router.replace('/');
          return;
        }
        // Somebody whose subscription ended has the expiry screen, not the
        // paywall — `/offer` is guarded off for them, and a replace to it would
        // leave this blank route on screen. The offer emails are not sent to
        // them (see `rules.ts`), but an older email can still be tapped. Clear
        // "Not now" so Home resolves to the expiry screen and its own prices.
        if (lapsed) {
          clearBrowsingLapsed();
          router.replace('/');
          return;
        }
        if (target.offering === 'offer') unlockBoost();
        router.replace('/offer');
        return;
      case 'settings':
        router.replace('/');
        setTimeout(() => router.push('/settings'), 0);
        return;
      case 'guide':
        // A page on the site, in the browser; the app stays on Home under it.
        router.replace('/');
        void Linking.openURL(target.url).catch(() => {});
        return;
      case 'home':
        router.replace('/');
    }
  }, [onboarded, entitled, lapsed, params, router]);

  return null;
}
