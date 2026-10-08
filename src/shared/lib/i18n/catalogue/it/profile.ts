/** profile strings, Italian. Filled per domain; see `../en/core.ts` for the rules. */

export const PROFILE_IT = {
  // ── The person ───────────────────────────────────────────────────────────
  'profile.you': 'Tu',
  'profile.dayStreak': 'Giorni di fila',
  'profile.sessionsDone': 'Sessioni fatte',

  // ── Sections ─────────────────────────────────────────────────────────────
  'profile.sectionInvite': 'Invita',
  'profile.sectionApp': 'App',
  'profile.sectionEmail': 'Email',
  'profile.sectionDanger': 'Zona di rischio',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Invita un amico',
  'profile.invitesJoined': { one: '{count} iscritto', other: '{count} iscritti' },
  'profile.inviteHint': 'I tuoi amici hanno il {percent}% di sconto sull’abbonamento annuale',
  'profile.rate': 'Valuta Walkito',
  'profile.contactSupport': 'Contatta l’assistenza',
  'profile.deleteAccount': 'Elimina account',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Eliminare l’account?',
  'profile.deleteBlurb':
    'Questo elimina il tuo programma, il tuo registro del dolore, la tua serie di giorni e il tuo codice invito, da questo dispositivo e dai nostri server. Non si può annullare.',
  'profile.deleteSubscription':
    'Eliminare l’account non annulla l’abbonamento. Viene addebitato da Apple e si rinnova finché non lo annulli in Impostazioni.',
  'profile.deleteSubscriptionAndroid':
    'Eliminare l’account non annulla l’abbonamento. Viene addebitato da Google Play e si rinnova finché non lo annulli lì.',
  'profile.manageSubscription': 'Gestisci abbonamento',
  'profile.deleteLocalOnly':
    'I tuoi dati sono stati eliminati da questo dispositivo, ma non è stato possibile raggiungere il server. Riapri l’app con una connessione per completare, oppure scrivi all’assistenza.',
  'profile.deleteConfirm': 'Elimina tutto',
  'profile.deleting': 'Eliminazione…',
  'profile.keepAccount': 'Tieni il mio account',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Torna alla prima schermata',
  'profile.resetHint': 'Solo nelle build di sviluppo',
  'profile.resetA11y': 'Torna alla prima schermata',
  'profile.resetAlertTitle': 'Ripartire dalla prima schermata?',
  'profile.resetAlertBody':
    'Cancella l’onboarding, il programma, il registro del dolore e i video salvati su questo dispositivo. Il tuo account e il codice invito restano. Solo per lo sviluppo.',
  'profile.resetCancel': 'Annulla',
  'profile.resetConfirm': 'Reimposta',
  'profile.notePreviewLabel': 'Vedi la nota',
  'profile.notePreviewHint': 'Quella mostrata alla fine dell’onboarding',
};
