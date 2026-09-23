/** profile strings. Filled per domain; see `../en/core.ts` for the rules. */

import type { SourceEntry } from '../entry';

export const PROFILE_EN = {
  // ── The person ───────────────────────────────────────────────────────────
  /** Stands in for a first name the questionnaire never captured. */
  'profile.you': 'You',
  'profile.dayStreak': 'Day streak',
  'profile.sessionsDone': 'Sessions done',

  // ── Sections ─────────────────────────────────────────────────────────────
  // Rendered in caps by the screen, so they are written here in sentence case
  // — a language whose uppercase differs from its display form should not have
  // that decision baked into the string.
  'profile.sectionInvite': 'Invite',
  'profile.sectionApp': 'App',
  'profile.sectionEmail': 'Email',
  'profile.sectionDanger': 'Danger',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Refer a friend',
  /** On the row rather than behind it, because the count is the reason to tap.
   * Zero never reaches here — the screen leaves the slot blank instead. */
  'profile.invitesJoined': { one: '{count} joined', other: '{count} joined' },
  /** Under "Invite a friend". `{count}` is weeks of free programme access. */
  'profile.weeksPerFriend': {
    one: '{count} free week for each friend',
    other: '{count} free weeks for each friend',
  },
  'profile.weeksEarned': {
    one: '+{count} free week earned',
    other: '+{count} free weeks earned',
  },
  'profile.weeksEarnedMax': {
    one: '+{count} free week earned, the most there is',
    other: '+{count} free weeks earned, the most there is',
  },
  'profile.contactSupport': 'Contact support',
  'profile.deleteAccount': 'Delete account',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Delete account?',
  // Specific on purpose: "your data" is a phrase that lets someone assume
  // their streak is safe somewhere.
  // Written as one literal rather than two joined with `+`: a concatenation is
  // not a literal type, and `satisfies` would widen it to `string` and take
  // the placeholder inference in `translate.ts` with it.
  'profile.deleteBlurb':
    'This removes your programme, your pain log, your streak and your invite code, from this device and from our servers. It cannot be undone.',
  /** Local storage is already gone by the time this shows, so it says which
   * half failed rather than pretending nothing happened. */
  'profile.deleteLocalOnly':
    'Your data was removed from this device, but the server could not be reached. Reopen the app while online to finish, or email support.',
  'profile.deleteConfirm': 'Delete everything',
  'profile.deleting': 'Deleting…',
  'profile.keepAccount': 'Keep my account',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Reset to first screen',
  'profile.resetHint': 'Development build only',
  'profile.resetA11y': 'Reset to the first screen',
  'profile.resetAlertTitle': 'Start from the first screen?',
  'profile.resetAlertBody':
    'Clears onboarding, the programme, the pain log and the cached clips on this device. Your account and invite code stay. Development only.',
  'profile.resetCancel': 'Cancel',
  'profile.resetConfirm': 'Reset',
  // The dev-only row that reopens the founder's note. Translated like any
  // other label rather than left in English: it sits in the same list as
  // the shipped rows, and one English line among them is how a reviewer
  // discovers the row was never meant to be there.
  'profile.notePreviewLabel': 'Preview the note',
  'profile.notePreviewHint': 'The one shown at the end of onboarding',
} as const satisfies Record<string, SourceEntry>;
