/** profile strings. Filled per domain; see `../en/core.ts` for the rules. */

export const PROFILE_ES = {
  // ── The person ───────────────────────────────────────────────────────────
  'profile.you': 'Tú',
  'profile.dayStreak': 'Días de racha',
  'profile.sessionsDone': 'Sesiones hechas',

  // ── Sections ─────────────────────────────────────────────────────────────
  'profile.sectionInvite': 'Invitar',
  'profile.sectionApp': 'Aplicación',
  'profile.sectionEmail': 'Correo',
  'profile.sectionDanger': 'Zona de riesgo',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Invita a un amigo',
  'profile.invitesJoined': { one: '{count} se unió', other: '{count} se unieron' },
  'profile.contactSupport': 'Contactar con soporte',
  'profile.deleteAccount': 'Eliminar cuenta',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': '¿Eliminar la cuenta?',
  'profile.deleteBlurb':
    'Esto elimina tu programa, tu registro de dolor, tu racha y tu código de invitación, de este dispositivo y de nuestros servidores. No se puede deshacer.',
  'profile.deleteLocalOnly':
    'Tus datos se eliminaron de este dispositivo, pero no se pudo contactar con el servidor. Abre la aplicación con conexión para terminar, o escribe a soporte.',
  'profile.deleteConfirm': 'Eliminar todo',
  'profile.deleting': 'Eliminando…',
  'profile.keepAccount': 'Conservar mi cuenta',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Volver a la primera pantalla',
  'profile.resetHint': 'Solo en compilaciones de desarrollo',
  'profile.resetA11y': 'Volver a la primera pantalla',
  'profile.resetAlertTitle': '¿Empezar desde la primera pantalla?',
  'profile.resetAlertBody':
    'Borra el onboarding, el programa, el registro de dolor y los clips guardados en este dispositivo. Tu cuenta y tu código de invitación se mantienen. Solo para desarrollo.',
  'profile.resetCancel': 'Cancelar',
  'profile.resetConfirm': 'Restablecer',
};
