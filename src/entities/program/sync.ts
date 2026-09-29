/**
 * The plan's Supabase sync, as a public entry of its own.
 *
 * Not re-exported from `index.ts`: it loads the Supabase client, and the main
 * index is what the unit tests and every screen load. Only the app layer needs
 * this, and it imports it by name.
 *
 * `onPlanPushRequested` is here rather than beside `requestPlanPush` in the
 * main index because only the app layer listens: every other layer asks.
 */
export {
  lastSyncAt,
  pushPlan,
  restorePlan,
  type ProfileFacts,
  type PushOptions,
  type SyncOutcome,
} from './model/plan/sync';
export { onPlanPushRequested } from './model/plan/push-request';
