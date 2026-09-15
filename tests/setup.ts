/**
 * Keeps the native key-value module out of the test module graph.
 *
 * `src/shared/lib/storage` re-exports `./mmkv` statically, which pulls in
 * `react-native-mmkv` and through it `react-native` itself — a package the test
 * runner cannot parse. Stubbing the native binding here makes the storage
 * layer take the in-memory fallback it already has, so the engine under test
 * persists to a plain object and every test starts from a clean store.
 */

import { mock } from 'bun:test';

mock.module('react-native-mmkv', () => ({
  createMMKV: () => {
    throw new Error('[tests] native MMKV is unavailable; using the memory fallback');
  },
}));
