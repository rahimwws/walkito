import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import { browsingLapsed, clearBrowsingLapsed, useEntitled } from '@/entities/purchase';
import { type Protocol } from '@/entities/protocols';

/**
 * What the routine page's Start does, and whether it is running.
 *
 * Locked (a paid routine, no access) is answered with the standard paywall: a
 * tap on Start is a clear intent to buy. Except for somebody whose subscription
 * ended and who is browsing read-only: `/offer` is not a route for them (the
 * root guard keeps it for a first purchase), so a push would do nothing.
 * Clearing the flag brings the expiry screen back, which sells the same plans,
 * the way the session player's locked state does it.
 */
export function useStartRoutine(protocol: Protocol | null) {
  const router = useRouter();
  const entitled = useEntitled();
  const [running, setRunning] = useState(false);

  const locked = protocol != null && !protocol.free && !entitled;

  const start = () => {
    if (protocol == null) return;
    Haptics.selectionAsync();
    if (locked) {
      if (browsingLapsed()) clearBrowsingLapsed();
      else router.push('/offer');
      return;
    }
    setRunning(true);
  };

  return { locked, running, start, stop: () => setRunning(false) };
}
