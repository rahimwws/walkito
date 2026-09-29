/**
 * "Copy this up now" — asked by the writes that must not wait for a debounce.
 *
 * A finished session, a finished test day and a check-in are the records the
 * server is for. Left to the provider's debounce they went up seconds later at
 * best, and not at all when the app was put away first: the push used to run
 * only on the way back in, so a session finished and swiped away reached
 * Supabase whenever the app was next opened — if it was.
 *
 * No imports, on purpose. The day log (`state.ts`) asks from here, and the sync
 * itself loads the Supabase client, which neither the unit tests nor this slice's
 * main entry may pull in. The app layer listens and does the pushing; see
 * `onPlanPushRequested`, exported from `@/entities/program/sync`.
 */

const listeners = new Set<() => void>();

let queued = false;

/**
 * Asks the sync layer to push as soon as it can.
 *
 * Told in a microtask rather than straight away, for two reasons: a test day
 * writes the retest, the session, the goals and the week one after another, and
 * the push must read all of them rather than the first; and any number of asks
 * in one pass collapse into one.
 */
export function requestPlanPush(): void {
  if (queued) return;
  queued = true;
  queueMicrotask(() => {
    queued = false;
    for (const listener of listeners) listener();
  });
}

/** Called on every `requestPlanPush`. Returns the unsubscribe. */
export function onPlanPushRequested(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
