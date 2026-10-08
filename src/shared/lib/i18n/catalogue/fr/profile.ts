/** profile strings, French. Filled per domain; see `../en/core.ts` for the rules. */

export const PROFILE_FR = {
  // ── The person ───────────────────────────────────────────────────────────
  'profile.you': 'Toi',
  'profile.dayStreak': 'Jours d’affilée',
  'profile.sessionsDone': 'Séances faites',

  // ── Sections ─────────────────────────────────────────────────────────────
  'profile.sectionInvite': 'Inviter',
  'profile.sectionApp': 'App',
  'profile.sectionEmail': 'E-mail',
  'profile.sectionDanger': 'Zone sensible',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Invite un ami',
  'profile.invitesJoined': { one: '{count} inscription', other: '{count} inscriptions' },
  'profile.inviteHint': 'Tes amis ont {percent} % de réduction sur l’abonnement annuel',
  'profile.rate': 'Noter Walkito',
  'profile.contactSupport': 'Contacter le support',
  'profile.deleteAccount': 'Supprimer le compte',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Supprimer le compte ?',
  'profile.deleteBlurb':
    'Ça supprime ton programme, ton suivi de la douleur, ta série de jours et ton code d’invitation, de cet appareil et de nos serveurs. C’est irréversible.',
  'profile.deleteSubscription':
    'Supprimer ton compte n’annule pas ton abonnement. Il est facturé par Apple et se renouvelle jusqu’à ce que tu l’annules dans Réglages.',
  'profile.deleteSubscriptionAndroid':
    'Supprimer ton compte n’annule pas ton abonnement. Il est facturé par Google Play et se renouvelle jusqu’à ce que tu l’annules là-bas.',
  'profile.manageSubscription': 'Gérer l’abonnement',
  'profile.deleteLocalOnly':
    'Tes données ont été supprimées de cet appareil, mais le serveur n’a pas pu être joint. Rouvre l’app avec une connexion pour terminer, ou écris au support.',
  'profile.deleteConfirm': 'Tout supprimer',
  'profile.deleting': 'Suppression…',
  'profile.keepAccount': 'Garder mon compte',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Revenir au premier écran',
  'profile.resetHint': 'Version de développement uniquement',
  'profile.resetA11y': 'Revenir au premier écran',
  'profile.resetAlertTitle': 'Recommencer depuis le premier écran ?',
  'profile.resetAlertBody':
    'Efface l’onboarding, le programme, le suivi de la douleur et les clips en cache sur cet appareil. Ton compte et ton code d’invitation restent. Développement uniquement.',
  'profile.resetCancel': 'Annuler',
  'profile.resetConfirm': 'Réinitialiser',
  'profile.notePreviewLabel': 'Voir le mot',
  'profile.notePreviewHint': 'Celui affiché à la fin de l’onboarding',
};
