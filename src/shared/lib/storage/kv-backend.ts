/**
 * The storage contract every persistent store in the app talks to.
 *
 * Keeping stores against this interface rather than MMKV directly means the
 * store logic — usually the riskiest part, since it owns migration and
 * recovery — stays testable under plain node/bun against the in-memory
 * backend, with no native module in the way.
 */
export type KvBackend = {
  getString(key: string): string | undefined;
  getNumber(key: string): number | undefined;
  getBoolean(key: string): boolean | undefined;
  set(key: string, value: string | number | boolean): void;
  remove(key: string): void;
  contains(key: string): boolean;
  getAllKeys(): string[];
  clearAll(): void;
  trim?(): void;
};

/** Volatile backend used by tests and as the fallback when MMKV is missing. */
export function createMemoryKv(): KvBackend {
  const map = new Map<string, string | number | boolean>();
  const read = <T>(key: string, kind: string): T | undefined => {
    const value = map.get(key);
    return typeof value === kind ? (value as T) : undefined;
  };

  return {
    getString: (key) => read<string>(key, 'string'),
    getNumber: (key) => read<number>(key, 'number'),
    getBoolean: (key) => read<boolean>(key, 'boolean'),
    set: (key, value) => void map.set(key, value),
    remove: (key) => void map.delete(key),
    contains: (key) => map.has(key),
    getAllKeys: () => [...map.keys()],
    clearAll: () => map.clear(),
  };
}
