/**
 * The plan's Supabase sync, as a public entry of its own.
 *
 * Not re-exported from `index.ts`: it loads the Supabase client, and the main
 * index is what the unit tests and every screen load. Only the app layer needs
 * this, and it imports it by name.
 */
export { lastSyncAt, pushPlan, restorePlan, type ProfileFacts, type SyncOutcome } from './model/plan/sync';
