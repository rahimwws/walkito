import { useSyncExternalStore } from 'react';

import type { ProtocolId } from './protocols';

/**
 * A routine asked for from somewhere other than the Library tab — the small
 * cards on Today. One-shot and in memory, the same shape as the retest request:
 * the asker sets it and switches tab, the Library opens it and clears it. A
 * route param would be simpler, but the tab bar's triggers drop them.
 */
let requested: ProtocolId | null = null;
const listeners = new Set<() => void>();

export function requestProtocol(id: ProtocolId): void {
  requested = id;
  for (const listener of listeners) listener();
}

export function clearProtocolRequest(): void {
  requested = null;
  for (const listener of listeners) listener();
}

export function useProtocolRequest(): ProtocolId | null {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => requested,
    () => null,
  );
}
