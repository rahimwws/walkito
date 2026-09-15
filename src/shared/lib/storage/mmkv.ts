/**
 * The MMKV-backed implementation of `KvBackend`. This module is the ONLY place
 * that touches `react-native-mmkv`.
 *
 * MMKV is memory-mapped and synchronous, which tends to be a requirement
 * rather than a preference: a store feeding `useSyncExternalStore` must expose
 * a synchronous `getSnapshot`, and an async store would force a gate into boot.
 */

import { createMMKV } from 'react-native-mmkv';

import type { KvBackend } from './kv-backend';

let instance: ReturnType<typeof createMMKV> | null = null;

/** Lazily created so importing this module has no native side effect. */
function mmkv() {
  if (!instance) {
    instance = createMMKV({
      id: 'tread.v1',
      // Prefer salvaging a damaged file over dropping it — user data is the
      // one thing an app generally cannot regenerate.
      recoveryStrategy: 'recover-on-error',
    });
  }
  return instance;
}

export const mmkvBackend: KvBackend = {
  getString: (key) => mmkv().getString(key),
  getNumber: (key) => mmkv().getNumber(key),
  getBoolean: (key) => mmkv().getBoolean(key),
  set: (key, value) => mmkv().set(key, value),
  remove: (key) => mmkv().remove(key),
  contains: (key) => mmkv().contains(key),
  getAllKeys: () => mmkv().getAllKeys(),
  clearAll: () => mmkv().clearAll(),
  trim: () => mmkv().trim(),
};

/** Diagnostics: how much space the store is actually using. */
export function storageInfo(): { keys: number; byteSize: number } {
  const store = mmkv();
  return { keys: store.length, byteSize: store.byteSize };
}
