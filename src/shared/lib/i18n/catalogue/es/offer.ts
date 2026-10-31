/**
 * Offer, in Spanish — the paywall and the session player.
 *
 * `tú` throughout, and neutral across regions: no `vosotros`, and no vocabulary
 * that splits Spain from Latin America. "Bienvenido/a" is avoided in the
 * restore celebration for the same reason a coach avoids it — it forces a
 * gender onto somebody the app has never asked.
 *
 * Nothing here is a price. Every amount arrives as `{price}` or `{perWeek}`,
 * already formatted for the user's storefront — see the note in `../en/offer.ts`.
 *
 * The `many` plural form is left out everywhere: in Spanish it is the
 * whole-millions form, and no count on these screens reaches a million.
 */
export const OFFER_ES = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  'offer.featurePlanTitle': 'Tu plan, no una plantilla',
  'offer.featurePlanBlurb': 'Hecho con las respuestas que acabas de dar, y rehecho cuando cambian.',
  'offer.featureAdaptiveTitle': 'Sesiones que se adaptan',
  'offer.featureAdaptiveBlurb': 'Cada sesión tiene en cuenta cómo fue la anterior.',
  'offer.featureProgressTitle': 'Progreso que se ve',
  'offer.featureProgressBlurb': 'Mira cómo sube tu preparación semana a semana.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  'offer.comebackBadge': 'Oferta de regreso',
  'offer.inviteBadge': 'Tu precio por invitación',
  'offer.headline': 'Desbloquea Walkito Premium',
  'offer.headlineInvite': 'Tu precio de invitación para un año de Walkito Premium',
  'offer.headlineComeback': 'Tu oferta de regreso para un año de Walkito Premium',
  'offer.sub': 'Tu plan, y todo lo que lo rodea.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Anual',
  'offer.annualPrice': '{price} al año',
  'offer.annualNote': '{perWeek} a la semana, con cobro anual',
  'offer.annualNoteSave': '{perWeek} a la semana · Ahorra un {percent}% frente al semanal',
  'offer.weeklyTitle': 'Semanal',
  'offer.weeklyPrice': '{price} a la semana',
  'offer.monthlyPrice': '{price} al mes',
  'offer.lifetimePrice': '{price}, pago único',
  'offer.weeklyNote': 'Cobro semanal · Cancela cuando quieras',
  'offer.badgeBest': 'Mejor opción',
  'offer.badgeRecommended': 'Recomendado',
  'offer.badgeOff': '{percent}% de descuento',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} al año, se renueva automáticamente. Cancela cuando quieras.',
  'offer.ctaWeekly': '{price} a la semana, se renueva automáticamente. Cancela cuando quieras.',
  'offer.ctaMonthly': '{price} al mes, se renueva automáticamente. Cancela cuando quieras.',
  'offer.ctaLifetime': '{price} una sola vez. Sin suscripción, no se renueva nada.',
  'offer.termsAnnual': 'Suscripción anual: {price} al año.',
  'offer.termsWeekly': 'Suscripción semanal: {price} a la semana.',
  'offer.termsMonthly': 'Suscripción mensual: {price} al mes.',
  'offer.termsLifetime':
    'Acceso de por vida: un único pago de {price}, que se cobra al confirmar la compra. No se renueva nada.',
  'offer.termsRenewal': 'Se renueva automáticamente. Cancela cuando quieras en Ajustes.',
  'offer.termsRenewalAndroid': 'Se renueva automáticamente. Cancela cuando quieras en Google Play.',
  'offer.linkTerms': 'Términos de uso',
  'offer.linkPrivacy': 'Política de privacidad',
  'offer.restore': 'Restaurar compras',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Ese plan no está disponible ahora. Prueba con el otro.',
  'offer.storeUnreachable': 'No se puede conectar con la tienda ahora mismo. Inténtalo en un momento.',
  'offer.nothingRestored': 'No se encontró ninguna compra anterior.',
  'offer.restoreFailed': 'No se pudo completar. No se te ha cobrado nada.',
  'offer.purchaseFailed': 'No se pudo completar. No se te ha cobrado nada.',
  'offer.purchaseNotAllowed': 'Las compras están desactivadas en este dispositivo.',
  'offer.alreadyOwned': 'Ya tienes esta suscripción. Toca «Restaurar compras».',
  'offer.pending': 'Esperando aprobación. Tendrás acceso en cuanto se complete.',
  'offer.notUnlocked': 'El pago se completó, pero no se desbloqueó el acceso. Toca «Restaurar compras».',
  'offer.continue': 'Continuar',
  'offer.processing': 'Procesando…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'Ya estás dentro.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb':
    'Tu plan está desbloqueado y empezará a adaptarse desde tu próxima sesión.',
  'offer.restoredTitle': 'Qué bien tenerte de vuelta.',
  'offer.restoredBlurb': 'Tu suscripción vuelve a estar activa. Todo sigue donde lo dejaste.',
  'offer.start': 'Empezar',

  'offer.stepA11y': 'Paso {step} de {total}',
  'offer.next': 'Siguiente',
  'offer.introTitle': 'Así empieza tu plan',
  'offer.introTitleNamed': '{name}, así empieza tu plan',
  // Under the title: the goal they picked in onboarding, quoted back as theirs.
  'offer.introWhy': '«{why}».',
  'offer.introTodayWhen': 'Hoy',
  'offer.introTodayTitle': { one: 'Una prueba de {count} minuto', other: 'Una prueba de {count} minutos' },
  'offer.introTodayBody': 'Pantorrillas, arco y equilibrio. Tu plan parte de estos números.',
  'offer.introWeekWhen': 'Esta semana',
  'offer.introWeekTitle': 'Un comienzo tranquilo',
  'offer.introWeekBody': {
    one: '{minutes} min al día, {count} día a la semana. El trabajo de fuerza empieza la semana que viene.',
    other: '{minutes} min al día, {count} días a la semana. El trabajo de fuerza empieza la semana que viene.',
  },
  'offer.introSundayWhen': 'Cada domingo',
  'offer.introSundayTitle': 'Una semana nueva, hecha a partir de la anterior',
  'offer.introSundayBody': 'Más suave si costó, un poco más si fue fácil.',
  'offer.introCheckTitle': 'Tu primera revisión de progreso',
  'offer.introCheckBody': 'La misma prueba otra vez. Mira qué cambió, y luego el siguiente paso.',
  'offer.howTitle': 'Unos minutos al día. Así funciona.',
  'offer.howCheckinTitle': 'Registra cada mañana',
  'offer.howCheckinBody': 'Diez segundos sobre cómo están tus pies. El día se ajusta a eso.',
  'offer.howSessionTitle': 'Haz la sesión del día',
  'offer.howSessionBody': 'De 3 a 10 minutos. Solo se pone más difícil cuando la anterior fue fácil.',
  'offer.howTestTitle': 'Reevaluación cada dos semanas',
  'offer.howTestBody': 'Pantorrillas, arco y equilibrio, medidos. Mira cómo cambian los números.',
  'offer.howQuote': '«Los ejercicios que ayudan se conocen de sobra. Nadie te dice cuáles ni cuántos. Así que eso hicimos.»',
  'offer.howQuoteBy': 'Rahim, que hace Walkito con su amigo Rahman',
  'offer.startTitle': 'Empieza tu plan hoy',
  'offer.startSub': 'Tu primera semana está lista. Empieza con una prueba corta.',
  'offer.chipWeekly': 'Tu plan semanal',
  'offer.chipSessions': 'Sesiones cortas',
  'offer.chipTests': 'Una prueba cada dos semanas',
  'offer.chipRoutines': 'Rutinas para días de dolor y para correr',
  'offer.chipReminders': 'Recordatorios',

  // ── Paywall: the plans (Walkito Plus) ───────────────────────────────────
  // See `../en/offer.ts`. The words in square brackets in the headline are
  // drawn in the Plus colour: put them round the word that carries it here.
  'offer.plans.brand': 'Walkito',
  'offer.plans.badge': 'Plus',
  'offer.plans.name': 'Walkito Plus',
  'offer.plans.headline': 'Tus pies, [más fuertes] cada día',
  'offer.plans.headlineComeback': 'Walkito Plus, ahora [más barato]',
  'offer.plans.mostPopular': 'Más popular',
  'offer.plans.yearly': 'Anual',
  'offer.plans.monthly': 'Mensual',
  'offer.plans.lifetime': 'De por vida',
  'offer.plans.perYear': 'al año',
  'offer.plans.perMonth': 'al mes',
  'offer.plans.perWeek': 'a la semana',
  'offer.plans.once': 'pago único',
  'offer.plans.firstYear': 'primer año',
  'offer.plans.yearlyNote': '{perMonth} al mes, cobro anual',
  'offer.plans.monthlyNote': 'Cobro mensual',
  'offer.plans.weeklyNote': 'Cobro semanal',
  'offer.plans.lifetimeNote': 'Un solo pago, tuyo para siempre',
  'offer.plans.upfrontNote': 'Después, {price} al año',
  'offer.plans.trialNote': '{period} gratis, después {price} al año',
  'offer.plans.days': { one: '{count} día', other: '{count} días' },
  'offer.plans.weeks': { one: '{count} semana', other: '{count} semanas' },
  'offer.plans.months': { one: '{count} mes', other: '{count} meses' },
  'offer.plans.years': { one: '{count} año', other: '{count} años' },
  'offer.plans.showAll': 'Ver todos los planes',
  'offer.plans.tableTitle': 'Lo que obtienes',
  'offer.plans.rowPlan': 'Un plan diario que se adapta a ti',
  'offer.plans.rowSessions': 'Todas las sesiones guiadas, con vídeo',
  'offer.plans.rowTests': 'Un test de progreso cada dos semanas',
  'offer.plans.rowStreaks': 'Rachas y stickers',
  'offer.plans.rowMorning': 'El estiramiento de la mañana',
  'offer.plans.rowA11y': '{feature}. Incluido en Plus.',
  'offer.plans.ctaLifetime': 'Obtener Walkito Plus',
  'offer.plans.ctaTrial': 'Empezar mi prueba gratis',
  'offer.plans.renewsYearly': 'Se renueva por {price} al año.',
  'offer.plans.renewsMonthly': 'Se renueva por {price} al mes.',
  'offer.plans.renewsWeekly': 'Se renueva por {price} a la semana.',
  'offer.plans.renewsUpfront': '{intro} el primer año, después {price} al año.',
  'offer.plans.renewsTrial': 'Sin pago ahora. {period} gratis, después {price} al año.',
  'offer.plans.cancel': 'Cancela cuando quieras en Ajustes.',
  'offer.plans.cancelAndroid': 'Cancela cuando quieras en Google Play.',
  'offer.plans.oneTime': 'Un solo pago, sin suscripción.',
  'offer.plans.skip': 'Ahora no',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Tu suscripción ha terminado',
  'widgets.sessionLockedBody':
    'Todo lo que registraste sigue aquí para consultarlo. Para volver a entrenar, retoma donde lo dejaste.',
  'widgets.sessionLockedCta': 'Ver tus opciones',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Tu meta',
  'widgets.retestGoal.painfree': 'Viniste por mañanas con menos dolor de talón. Estos números muestran que tu pie va por buen camino.',
  'widgets.retestGoal.race': 'Te preparas para una carrera. Unas pantorrillas más fuertes y un pie más estable son lo que te lleva a la salida.',
  'widgets.retestGoal.consistent': 'Dijiste que la meta era la constancia. Esto es lo que suma presentarte cada día.',
  'widgets.retestGoal.stronger': 'Querías ser más fuerte. Aquí es donde se nota primero.',
  'widgets.retestGoal.injuryfree': 'Querías evitar lesiones. Un pie más fuerte en las pruebas se lesiona con menos facilidad.',

  'widgets.retestGoal.flatfeet': 'Viniste por tus pies planos. El trabajo se nota en el arco sostenido y en un equilibrio más estable.',
  'widgets.retestGoal.ankles': 'Querías tobillos más estables. El equilibrio es donde se nota primero.',
  'widgets.retestGoal.jump': 'Querías saltar más alto. Una pantorrilla fuerte es lo que impulsa el salto.',
  'widgets.retestGoal.allday': 'Querías aguantar el día de pie. Aquí se entrenan los músculos que sostienen tu arco.',
  'widgets.retestGoal.comeback': 'Vuelves tras una lesión. La diferencia entre tus piernas es la cifra a seguir.',
  'widgets.retestGoal.steady': 'Querías caminar con seguridad. Eso se consigue con equilibrio y un pie fuerte.',
  // ── Session player: the counter line ─────────────────────────────────────
  // Una palabra por fase: se lee a dos metros y cambia cada tres segundos.
  'widgets.phaseUp': 'Sube',
  'widgets.phaseHold': 'Mantén',
  'widgets.phaseDown': 'Baja',
  'widgets.sideRight': 'Pie derecho',
  'widgets.sideLeft': 'Pie izquierdo',

  'widgets.sessionRepLine': '{phase} · Rep. {rep} de {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Rep. {rep} de {reps}',
  'widgets.sessionRepSpoken': '{phase}, repetición {rep} de {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, repetición {rep} de {reps}',
  'widgets.sessionPositionShort': 'Ejercicio {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Ejercicio {index}/{total}',
  'widgets.sessionPositionLong': 'Ejercicio {index} de {total}',
  'widgets.sessionPositionLongSided': '{side}. Ejercicio {index} de {total}',
  'widgets.sessionDone': 'Listo.',
  'widgets.sessionDoneSpoken': 'Listo',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'El video no se cargó. Las indicaciones siguen siendo las mismas.',
  'widgets.lockScreenHint': 'Bloquea el teléfono: el temporizador sigue',
  'widgets.expandDemo': 'Ampliar la demostración',
  'widgets.collapseDemo': 'Reducir la demostración',
  'widgets.sessionContinue': 'Continuar',
  'widgets.sessionFinish': 'Terminar',
  'widgets.scrubberPrevious': 'Ejercicio anterior',
  'widgets.scrubberNext': 'Ejercicio siguiente',
  'widgets.scrubberPlay': 'Reproducir',
  'widgets.scrubberPause': 'Pausar',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Buen trabajo.',
  'widgets.sessionStoppedTitle': 'Paramos aquí.',
  'widgets.sessionStoppedBlurb': 'La sesión de hoy cuenta igual. Mañana empezamos un paso más suave.',

  'widgets.painButton': 'Me duele',
  'widgets.painTitle': '¿Cuánto, ahora mismo?',
  'widgets.painCarryOn': 'Sigue con cuidado. Para si aumenta.',
  'widgets.painPick': 'Toca un número y te decimos qué pasa después.',
  'widgets.painLowHint': 'Una molestia leve es normal en este trabajo. La sesión sigue donde la pausaste - ve con suavidad y vuelve a tocar el botón de dolor si aumenta.',
  'widgets.painHighHint': 'Es demasiado para entrenar. Terminamos la sesión aquí - cuenta para hoy - y mañana el plan será un paso más suave.',
  'widgets.painResume': 'Seguir con cuidado',
  'widgets.painEnd': 'Terminar la sesión',
  'widgets.painCancel': 'Cancelar',
  'widgets.painClose': 'Cerrar',
  'widgets.sessionDoneStreak': {
    one: '{count} día seguido',
    other: '{count} días seguidos',
  },
  'widgets.sessionDoneBlurb': {
    one: '{count} ejercicio hecho. Poco y a menudo: así se avanza.',
    other: 'Los {count} ejercicios, hechos. Poco y a menudo: así se avanza.',
  },
  'offer.trial.todayTitle': 'Hoy',
  'offer.trial.todayText': 'Acceso completo, sin pagar nada',
  'offer.trial.dayTitle': 'Día {day}',
  'offer.trial.remindText': 'Te avisamos de que la prueba termina',
  'offer.trial.chargeText': '{price} al año, salvo que canceles',
};
