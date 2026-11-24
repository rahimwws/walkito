import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';

import { askForPlans, browsingLapsed, clearBrowsingLapsed, useEntitled, useLookingAround } from '@/entities/purchase';
import { protocolById, type ProtocolId } from '@/entities/protocols';

/**
 * Whether a routine is closed to her now, the rule the Exercises tab draws its
 * locks by: without access only the free ones open, and looking around not
 * even those (Day 1 is the one free thing before a purchase).
 */
export function useRoutineLocked(): (id: ProtocolId) => boolean {
  const entitled = useEntitled();
  const looking = useLookingAround();
  return (id) => !entitled && (!protocolById(id).free || looking);
}

/**
 * Opens a routine's own page (`/routine/[id]`), the one place a routine
 * starts. A locked one goes where it does from the Exercises tab: the plans
 * over Home while looking around, the expiry screen for somebody browsing
 * after access ended, the paywall otherwise.
 */
export function useOpenRoutine(): (id: ProtocolId) => void {
  const router = useRouter();
  const looking = useLookingAround();
  const locked = useRoutineLocked();
  return (id) => {
    void Haptics.selectionAsync();
    if (locked(id)) {
      if (browsingLapsed()) clearBrowsingLapsed();
      else if (looking) askForPlans('routine');
      else router.push('/offer');
      return;
    }
    router.push({ pathname: '/routine/[id]', params: { id } });
  };
}
