/** profile strings, German. Filled per domain; see `../en/core.ts` for the rules. */

export const PROFILE_DE = {
  // ── The person ───────────────────────────────────────────────────────────
  'profile.you': 'Du',
  'profile.dayStreak': 'Tage in Folge',
  'profile.sessionsDone': 'Einheiten geschafft',

  // ── Sections ─────────────────────────────────────────────────────────────
  'profile.sectionInvite': 'Einladen',
  'profile.sectionApp': 'App',
  'profile.sectionEmail': 'E-Mail',
  'profile.sectionDanger': 'Gefahrenzone',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Jemanden einladen',
  'profile.invitesJoined': { one: '{count} beigetreten', other: '{count} beigetreten' },
  'profile.inviteHint': 'Eingeladene bekommen {percent} % Rabatt auf das Jahresabo',
  'profile.rate': 'Walkito bewerten',
  'profile.contactSupport': 'Support kontaktieren',
  'profile.deleteAccount': 'Konto löschen',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Konto löschen?',
  'profile.deleteBlurb':
    'Das entfernt dein Programm, dein Schmerztagebuch, deine Serie und deinen Einladungscode, von diesem Gerät und von unseren Servern. Das lässt sich nicht rückgängig machen.',
  'profile.deleteSubscription':
    'Wenn du dein Konto löschst, wird dein Abo nicht gekündigt. Es wird über Apple abgerechnet und verlängert sich, bis du es in den Einstellungen kündigst.',
  'profile.deleteSubscriptionAndroid':
    'Wenn du dein Konto löschst, wird dein Abo nicht gekündigt. Es wird über Google Play abgerechnet und verlängert sich, bis du es dort kündigst.',
  'profile.manageSubscription': 'Abo verwalten',
  'profile.deleteLocalOnly':
    'Deine Daten wurden von diesem Gerät entfernt, aber der Server war nicht erreichbar. Öffne die App mit Verbindung erneut, um es abzuschließen, oder schreib dem Support.',
  'profile.deleteConfirm': 'Alles löschen',
  'profile.deleting': 'Wird gelöscht…',
  'profile.keepAccount': 'Konto behalten',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Zurück zum ersten Bildschirm',
  'profile.resetHint': 'Nur in Entwicklungsversionen',
  'profile.resetA11y': 'Zurück zum ersten Bildschirm',
  'profile.resetAlertTitle': 'Beim ersten Bildschirm neu starten?',
  'profile.resetAlertBody':
    'Löscht Onboarding, Programm, Schmerztagebuch und gespeicherte Clips auf diesem Gerät. Dein Konto und dein Einladungscode bleiben. Nur für die Entwicklung.',
  'profile.resetCancel': 'Abbrechen',
  'profile.resetConfirm': 'Zurücksetzen',
  'profile.notePreviewLabel': 'Notiz ansehen',
  'profile.notePreviewHint': 'Die am Ende des Onboardings',
};
