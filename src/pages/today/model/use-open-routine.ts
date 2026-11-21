import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';

import { askForPlans, browsingLapsed, clearBrowsingLapsed, useEntitled, useLookingAround } from '@/entities/purchase';
import { protocolById, type ProtocolId } from '@/entities/protocols';

/**
 * Opens a routine's own page (`/routine/[id]`), the one place a routine
 * starts. A locked one goes where it does from the Exercises tab: the plans
 * over Home while looking around, the expiry screen for somebody browsing
 * after access ended, the paywall otherwise.
 */
export function useOpenRoutine(): (id: ProtocolId) => void {
  const router = useRouter();
  const entitled = useEntitled();
  const looking = useLookingAround();
  return (id) => {
    void Haptics.selectionAsync();
    const protocol = protocolById(id);
    if (!entitled && (!protocol.free || looking)) {
      if (browsingLapsed()) clearBrowsingLapsed();
      else if (looking) askForPlans('routine');
      else router.push('/offer');
      return;
    }
    router.push({ pathname: '/routine/[id]', params: { id } });
  };
}
