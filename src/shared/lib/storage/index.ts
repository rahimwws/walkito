/**
 * The one resolved key-value backend, shared by every persistent store.
 *
 * MMKV is loaded through `require` inside a try/catch rather than a static
 * import, so a binary built before `react-native-mmkv` was linked degrades to
 * an in-memory store instead of throwing while the module graph is still
 * evaluating — before any screen can mount and show an error.
 *
 * Resolving it here, once, is what keeps every store on the SAME backend and
 * the SAME fallback. Stores that each reach for MMKV themselves inevitably
 * disagree: one guards the call and degrades, the next goes straight at the
 * native module and red-screens the app on launch.
 */

import { createMemoryKv, type KvBackend } from './kv-backend';

function resolve(): { kv: KvBackend; durable: boolean } {
  try {
    // Required lazily so a missing native module degrades instead of throwing
    // during module evaluation.
    const { mmkvBackend } = require('./mmkv') as typeof import('./mmkv');
    // Touch it once so a broken binding surfaces here rather than mid-render.
    mmkvBackend.contains('meta/probe');
    return { kv: mmkvBackend, durable: true };
  } catch (error) {
    console.warn('[storage] MMKV unavailable, falling back to memory', error);
    return { kv: createMemoryKv(), durable: false };
  }
}

/** `durable: false` means writes vanish on reload. Surface it somewhere in the
 * UI rather than letting the degraded state look like silent data loss. */
export const { kv, durable } = resolve();

export { createMemoryKv, type KvBackend } from './kv-backend';
export { storageInfo } from './mmkv';
