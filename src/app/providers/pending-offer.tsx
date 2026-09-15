import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { disarmOffer, usePendingOffer } from '@/entities/offer';

/**
 * How long Home is left alone before the offer arrives.
 *
 * Long enough that the user sees what they have been given — their own Home,
 * with their own numbers on it — and short enough that it still reads as part
 * of finishing setup rather than as an ad that turned up later. Under a second
 * and the two screens blur into one; much over three and the offer feels like
 * an interruption of something the user had already started doing.
 */
const REVEAL_DELAY_MS = 2400;

/**
 * Presents the offer over Home, once, a beat after the flow ends.
 *
 * Lives at the root rather than on Home itself, because the sheet is a root
 * route: the thing that opens it should sit at the same level as the thing it
 * opens. Home stays a screen about training and knows nothing about pricing.
 */
export function usePendingOfferPresenter(): void {
  const router = useRouter();
  const pending = usePendingOffer();

  useEffect(() => {
    if (pending == null) return;
    const timer = setTimeout(() => {
      // Disarm first: the store is what guarantees this runs once, and clearing
      // it before navigating means a re-render mid-push cannot queue a second.
      disarmOffer();
      router.push({ pathname: '/offer', params: { ...pending } });
    }, REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pending, router]);
}
