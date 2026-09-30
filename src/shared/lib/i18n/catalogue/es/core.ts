/**
 * Spanish.
 *
 * Neutral across regions: no `vosotros`, and no vocabulary that splits Spain
 * from Latin America. The app addresses the user as `tú` throughout, which is
 * the register a coach uses in both and the one the English copy already has.
 *
 * The `many` plural form is optional in this catalogue's type and is left out
 * everywhere — in Spanish it is the whole-millions form, and no count in this
 * app reaches a million days.
 */
export const CORE_ES = {
  // ── Language picker ──────────────────────────────────────────────────────
  'language.title': 'Idioma',
  'language.system': 'Sistema',
  'language.systemHint': 'Seguir el dispositivo - {language}',
  'language.note': 'La elección se guarda en este dispositivo.',
  'language.a11yLabel': 'Idioma, {language}',
  'language.a11yHint': 'Cambia el idioma de la aplicación',

  'error.title': 'Algo salió mal',
  'error.body': 'Tu plan y tu progreso están a salvo. Inténtalo de nuevo.',
  'error.retry': 'Intentar de nuevo',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Ajustes',
  'settings.terms': 'Términos de uso',
  'settings.termsHint': 'El acuerdo de suscripción',
  'settings.privacy': 'Política de privacidad',
  'settings.privacyHint': 'Qué guardamos y dónde',
  'settings.unpublished': 'Aún no publicado',
  'settings.email.section': 'Correo',
  'settings.email.address': 'Se envía a {email}',
  'settings.email.none': 'Aún no hay dirección. Se añade al iniciar sesión.',
  'settings.email.unavailable': 'No se pudieron cargar los ajustes de correo. Inténtalo con conexión.',
  'settings.email.tips': 'Consejos y recordatorios',
  'settings.email.weekly': 'Resumen semanal',
  'settings.email.unsubscribeAll': 'Darme de baja de todo',
  'settings.email.unsubscribed': 'No recibirás correos. Activa cualquier interruptor para volver a recibirlos.',
  'settings.write': 'Escribir a Rahim',
  'settings.writeHint': 'Cada mensaje lo lee una persona',
  'settings.writeSubject': 'Walkito',
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  'settings.planSection': 'Tu plan',
  'settings.outcome': 'Tu objetivo',
  'settings.outcome.painfree': 'Sin dolor',
  'settings.outcome.flat_feet': 'Pies planos',
  'settings.outcome.stronger': 'Piernas fuertes',
  'settings.outcome.injury_free': 'Piernas firmes',
  'settings.outcome.stable_ankles': 'Tobillos estables',
  'settings.outcome.jump_higher': 'Saltar más alto',
  'settings.outcome.race_ready': 'Para la carrera',
  'settings.outcome.all_day': 'Todo el día de pie',
  'settings.outcome.comeback': 'Tras una lesión',
  'settings.outcome.steady': 'Pasos seguros',
  'settings.daysPerWeek': 'Días por semana',
  'settings.minutesPerDay': 'Minutos al día',
  'settings.whichFoot': 'Qué pie',
  'settings.footLeft': 'Izquierdo',
  'settings.footRight': 'Derecho',
  'settings.footBoth': 'Los dos',
  'settings.whereItHurts': 'Dónde duele',
  'settings.whereItHurtsNone': 'Nada marcado',
  'settings.equipment': 'Lo que tengo en casa',
  'settings.equipment.step': 'Un escalón',
  'settings.equipment.band': 'Banda elástica',
  'settings.equipment.towel': 'Toalla',
  'settings.equipment.pillow': 'Almohada',
  'settings.equipment.ball': 'Pelota de masaje',
  'settings.account.saveTitle': 'Guarda tu progreso',
  'settings.account.saveBody': 'Inicia sesión con Apple y tu plan, registros y pruebas volverán en un teléfono nuevo o tras reinstalar.',
  'settings.account.saveBodyGoogle': 'Inicia sesión con Google y tu plan, registros y pruebas volverán en un teléfono nuevo o tras reinstalar.',
  'settings.account.signedIn': 'Sesión iniciada con Apple. Tu progreso se guarda en tu cuenta.',
  'settings.lastSync': 'Última sincronización: {time}',
  'settings.lastSyncNever': 'Aún sin sincronizar',
  'settings.reminder': 'Hora del recordatorio',
  'settings.disclaimer':
    'Walkito es una ayuda para entrenar, no un consejo médico, y no diagnostica ni trata ninguna afección. Si el dolor es agudo, empeora o viene con hinchazón, entumecimiento o fiebre, para y consulta a un médico.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'streak.title': { one: 'Racha de {count} día', other: 'Racha de {count} días' },
  'streak.milestoneBlurb': 'Cada uno de esos días contó.',
  'streak.milestoneBigBlurb': 'Diez días. Aquí es donde un hábito empieza a sostenerse.',
  'streak.rule':
    'Un día cuenta si registras tu dolor, entrenas, terminas una rutina de la biblioteca o el plan te asigna descanso.',
  'streak.total': { one: '{count} día en total.', other: '{count} días en total.' },
  'streak.dismiss': 'Entendido',
  'streak.dayCount': { one: '{count} día', other: '{count} días' },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  'session.day': 'Día {day}',
  'session.minutes': { one: '{count} min', other: '{count} min' },
  'session.moveCount': { one: '{count} ejercicio', other: '{count} ejercicios' },
  'session.secondsLeftA11y': {
    one: 'queda {count} segundo',
    other: 'quedan {count} segundos',
  },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Invita a un amigo',
  'gift.blurb': {
    one: 'Tu amigo recibe un {percent}% de descuento. Tú, {count} semana gratis por cada amigo que se una.',
    other: 'Tu amigo recibe un {percent}% de descuento. Tú, {count} semanas gratis por cada amigo que se una.',
  },
  'gift.cap': { one: 'Hasta {count} amigo.', other: 'Hasta {count} amigos.' },
  'gift.unavailable': 'Las invitaciones no están disponibles en esta versión.',
  'gift.shareMessage':
    'Usa mi código {code} en Walkito y consigue un {percent}% de descuento en el programa de 12 semanas.',
  'gift.share': 'Compartir código',
  'gift.shared': 'Copiado',
  'gift.copy': 'Copiar en su lugar',
  'gift.copied': 'Copiado al portapapeles',
  'gift.copyA11y': 'Copiar el código {code}',
  'gift.dismiss': 'Quizá más tarde',
  'gift.openA11y': 'Recoge tu regalo',
  'gift.capsule': 'Regalo',

  // ── Waits ──────────────────────────────────────────────────────────────────
  'time.hoursMinutes': '{hours} h {minutes} min',
  'time.minutes': '{count} min',
  'time.underMinute': '<1 min',

  // ── The next session ───────────────────────────────────────────────────────
  'nextSession.in': 'Próxima sesión en {time}',
  'nextSession.on': 'Próxima sesión: {day}',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Empezar sesión',
  'card.dailyGoal': 'Objetivo diario',
  'card.getStarted': 'Empezar',
  'card.last7Days': 'Últimos 7 días',
  'band.excellent': 'Excelente',
  'band.strong': 'Fuerte',
  'band.steady': 'Constante',
  'band.building': 'En progreso',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  'purchase.unavailable': 'Ese plan no está disponible ahora mismo.',

  'quick.deleteTitle': '{name}, espera.',
  'quick.deleteBody': 'Voy a borrar la aplicación.\n\nLo que me echó:\n\n',
  'quick.deleteSubject': 'Antes de borrar Walkito',
  'quick.talkSubject': 'Algo no va bien en Walkito',
  'quick.talkBody': 'Hola -\n\nQué está pasando:\n\n',
  'quick.deleteSubtitle': '¿La vas a borrar? Cuéntanos qué falló.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Inicio',
  'tabs.progress': 'Progreso',


  // ── Account / sign-in errors ───────────────────────────────────────────────
  'auth.noServer': 'Esta versión no tiene servidor de cuentas. Usa Continuar con Apple.',
  'auth.missingFields': 'Escribe el correo y la contraseña.',
  'auth.invalidCredentials': 'El correo y la contraseña no coinciden.',
  'auth.notConfirmed':
    'Esa cuenta aún no está confirmada. Confirma la dirección de correo y vuelve a intentarlo.',
  'auth.banned': 'Esa cuenta está desactivada.',
  'auth.providerDisabled':
    'El inicio de sesión por correo está desactivado en esta app. Usa Continuar con Apple.',
  'auth.rateLimited': 'Demasiados intentos. Espera un minuto y vuelve a intentarlo.',
  'auth.badEmail': 'Eso no parece una dirección de correo.',
  'auth.noAccount': 'No se recibió ninguna cuenta.',
  'auth.generic': 'No se ha podido completar.',
  'auth.unreachable': 'No se ha podido conectar con el servidor.',

  // ── Maintenance and regression ───────────────────────────────────────────
  'maintenance.throughNamed': '{name}, lo has completado.',
  'maintenance.through': 'Lo has completado.',
  'maintenance.calfGain': '{opening} Tu pantorrilla subió ↗ de {before} a {after}.',
  'maintenance.relapse': 'Cerca de la mitad de las personas lo pierden en cinco años.',
  'maintenance.staying': 'Dos sesiones por semana es como te quedas en la otra mitad.',
  'maintenance.regression': 'Tus cifras bajaron. ¿Quieres repetir {block}?',

  // ── Block names ──────────────────────────────────────────────────────────
  'block.settle': 'Calma',
  'block.strengthen': 'Fuerza',
  'block.load': 'Carga',
  'block.build': 'Desarrollo',
  'block.control': 'Control',
  'block.sustain': 'Mantenimiento',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Atrás',
  'common.close': 'Cerrar',
  'common.profile': 'Perfil',
  'common.done': 'Listo',
  'common.cancel': 'Cancelar',
};
