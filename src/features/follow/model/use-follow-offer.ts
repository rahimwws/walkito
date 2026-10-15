import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { track } from '@/shared/lib/analytics';
import { reviewAskedWithin } from '@/shared/lib/review';

import {
  daysUsed,
  followOfferDue,
  followOffered,
  markFollowOffered,
  noteDayUsed,
  subscribeFollowOffer,
} from './offer';

/** In front and ready this long before the sheet rises: the screen has
 * arrived and been looked at, as with the review prompt at the third open. */
const DELAY_MS = 2500;
/** Apple's prompt this recently and the sheet waits for another open: two
 * asks in one visit is one too many. */
const AFTER_REVIEW_MS = 10 * 60 * 1000;

/**
 * The Instagram sheet on the third day of use, once ever.
 *
 * Counts the day whenever the app comes to the front, and raises the sheet
 * only while `clear` (Home in front with nothing over it: no session, no
 * milestone, no tour, no offer), 2.5 s in. Not in a visit where Apple's
 * review prompt was just asked.
 */
export function useFollowOffer(clear: boolean): { visible: boolean; close: () => void } {
  const [visible, setVisible] = useState(false);
  const [days, setDays] = useState(daysUsed);

  useEffect(() => {
    if (AppState.currentState === 'active') setDays(noteDayUsed());
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') setDays(noteDayUsed());
    });
    const unsubscribe = subscribeFollowOffer(() => setDays(daysUsed()));
    return () => {
      subscription.remove();
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const due = followOfferDue({ days, offered: followOffered() });
    if (!clear || !due || visible) return undefined;
    const timer = setTimeout(() => {
      if (AppState.currentState !== 'active' || reviewAskedWithin(AFTER_REVIEW_MS)) return;
      markFollowOffered();
      track('instagram_offer_viewed', { from: 'auto' });
      setVisible(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, [clear, days, visible]);

  return { visible, close: () => setVisible(false) };
}
