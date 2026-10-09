import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Alert } from 'react-native';

import { unlockBoost } from '@/entities/offer';
import { recordEmailLinkOpened } from '@/entities/profile';
import { requestProtocol } from '@/entities/protocols';
import { clearBrowsingLapsed, useAccessLapsed, useEntitled } from '@/entities/purchase';
import { useOnboarded } from '@/entities/session';
import { openPlanCodeLink } from '@/features/plan-code';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { requestProgram } from '@/shared/lib/program';

import { linkTarget } from '../model/route';

/**
 * `/open/{path}` — where every email button lands.
 *
 * Renders nothing and stays for one frame: it records the click against the
 * email it came from (`src=email&e=<key>`), then hands the user to the screen
 * the email talked about and removes itself from the stack. Registered outside
 * the root layout's guards, so a link always resolves; the guards then decide
 * what Home means for this user — onboarding, the paywall, or the tabs.
 *
 * A plan code from ChatGPT or Claude lands here too (`/open/plan-code?code=`,
 * rewritten from every shape of the link in `intent.ts`).
 *
 * The plan, today's session and the test cannot be opened by route: the
 * program overlay lives inside the tabs. They are asked for through
 * `requestProgram`, which the plan acts on once it has mounted.
 */
export function OpenLinkPage() {
  const router = useRouter();
  const onboarded = useOnboarded();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  const t = useT();
  const params = useLocalSearchParams<{
    path?: string | string[];
    src?: string;
    e?: string;
    minutes?: string;
    offering?: string;
    code?: string;
  }>();
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

    const target = linkTarget(segments, { minutes: params.minutes, offering: params.offering, code: params.code });

    // A plan code from ChatGPT or Claude. Before a plan exists it is held for
    // onboarding, which prefills from it; an invalid one is counted and the
    // ordinary onboarding runs. After, the plan they have is kept, and a short
    // note says why the code changed nothing.
    if (target.to === 'plan-code') {
      const result = openPlanCodeLink(target.code, onboarded);
      router.replace('/');
      if (result === 'already-onboarded') {
        setTimeout(() => Alert.alert(t('aiCode.onboardedTitle'), t('aiCode.onboardedBody')), 400);
      }
      return;
    }

    if (!onboarded) {
      router.replace('/');
      return;
    }

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
      case 'home':
        router.replace('/');
    }
  }, [onboarded, entitled, lapsed, params, router, t]);

  return null;
}
