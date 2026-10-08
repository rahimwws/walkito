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
  'offer.comebackBadge': 'Precio de vuelta',
  'offer.inviteBadge': 'Tu precio por invitación',
  'offer.headline': 'Desbloquea Walkito Premium',
  'offer.headlineInvite': 'Tu precio por invitación en un año de Walkito Premium',
  'offer.headlineComeback': 'Tu precio de vuelta en un año de Walkito Premium',
  'offer.sub': 'Tu plan, y todo lo que lo rodea.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Anual',
  'offer.annualPrice': '{price} al año',
  'offer.annualNote': '{perWeek} a la semana, con cobro anual',
  'offer.annualNoteSave': '{perWeek} a la semana · Ahorra un {percent}% frente al semanal',
  'offer.weeklyTitle': 'Semanal',
  'offer.weeklyPrice': '{price} a la semana',
  'offer.weeklyNote': 'Cobro semanal · Cancela cuando quieras',
  'offer.badgeBest': 'Mejor opción',
  'offer.badgeOff': 'Descuento {percent}%',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} al año, se renueva automáticamente. Cancela cuando quieras.',
  'offer.ctaWeekly': '{price} a la semana, se renueva automáticamente. Cancela cuando quieras.',
  'offer.termsIncluded':
    'Walkito Premium te da acceso completo: tu plan adaptativo, todas las sesiones y rutinas, las reevaluaciones y el seguimiento de tu progreso.',
  'offer.termsAnnual': 'Suscripción anual: {price} al año.',
  'offer.termsWeekly': 'Suscripción semanal: {price} a la semana.',
  'offer.termsRenewal':
    'El pago se carga a tu cuenta de Apple al confirmar la compra. La suscripción se renueva automáticamente por el mismo periodo y precio a menos que la canceles al menos 24 horas antes de que termine el periodo actual; la renovación se cobra en las 24 horas previas a ese final. Gestiónala o cancélala en Ajustes → Cuenta de Apple → Suscripciones.',
  'offer.termsRenewalAndroid':
    'El pago se carga a tu cuenta de Google Play al confirmar la compra. La suscripción se renueva automáticamente por el mismo periodo y precio a menos que la canceles al menos 24 horas antes de que termine el periodo actual. Gestiónala o cancélala en Google Play → Pagos y suscripciones → Suscripciones.',
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
  'offer.alreadyOwned': 'Ya tienes esto. Toca «Restaurar compras».',
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
  'offer.introTodayWhen': 'Hoy',
  'offer.introTodayTitle': { one: 'Un test de {count} minuto', other: 'Un test de {count} minutos' },
  'offer.introTodayBody': 'Gemelos, arco y equilibrio. Tu plan parte de estos números.',
  'offer.introWeekWhen': 'Esta semana',
  'offer.introWeekTitle': 'Un comienzo tranquilo',
  'offer.introWeekBody': {
    one: '{minutes} min al día, {count} día a la semana. La fuerza empieza la semana que viene.',
    other: '{minutes} min al día, {count} días a la semana. La fuerza empieza la semana que viene.',
  },
  'offer.introSundayWhen': 'Cada domingo',
  'offer.introSundayTitle': 'Una semana nueva, hecha a partir de la anterior',
  'offer.introSundayBody': 'Más suave si costó, un poco más si fue fácil.',
  'offer.introCheckTitle': 'Tu primera revisión de progreso',
  'offer.introCheckBody': 'El mismo test otra vez. Mira qué cambió, y luego el siguiente paso.',
  'offer.howTitle': 'Unos minutos al día. Así funciona.',
  'offer.howCheckinTitle': 'Registra cada mañana',
  'offer.howCheckinBody': 'Diez segundos sobre cómo están tus pies. El día se ajusta a eso.',
  'offer.howSessionTitle': 'Haz la sesión del día',
  'offer.howSessionBody': 'De 3 a 10 minutos. Solo se pone más difícil cuando la anterior fue fácil.',
  'offer.howTestTitle': 'Un test cada dos semanas',
  'offer.howTestBody': 'Gemelos, arco y equilibrio, medidos. Mira cómo se mueven los números.',
  'offer.howQuote': '«Los ejercicios que ayudan se conocen de sobra. Nadie te dice cuáles ni cuántos. Eso es lo que hicimos.»',
  'offer.howQuoteBy': 'Rahim, que hace Walkito con su amigo Rahman',
  'offer.startTitle': 'Empieza tu plan hoy',
  'offer.startSub': 'Tu primera semana está lista. Empieza con un test corto.',
  'offer.chipWeekly': 'Tu plan semanal',
  'offer.chipSessions': 'Sesiones cortas',
  'offer.chipTests': 'Un test cada dos semanas',
  'offer.chipRoutines': 'Rutinas para brotes y para correr',
  'offer.chipReminders': 'Recordatorios',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Tu suscripción ha terminado',
  'widgets.sessionLockedBody':
    'Todo lo que registraste sigue aquí para consultarlo. Para volver a entrenar, retoma donde lo dejaste.',
  'widgets.sessionLockedCta': 'Ver tus opciones',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Tu meta',
  'widgets.retestGoal.painfree': 'Viniste por mañanas sin dolor de talón. Estos números son el pie acercándose a eso.',
  'widgets.retestGoal.race': 'Te preparas para una carrera. Unas pantorrillas más fuertes y un pie más estable son lo que te lleva a la salida.',
  'widgets.retestGoal.consistent': 'Dijiste que la meta era la constancia. Esto es lo que suma.',
  'widgets.retestGoal.stronger': 'Querías ser más fuerte. Aquí es donde se nota primero.',
  'widgets.retestGoal.injuryfree': 'Querías evitar lesiones. Un pie que se mide más fuerte es más difícil de lesionar.',

  'widgets.retestGoal.flatfeet': 'Viniste por tus pies planos. El arco sostenido y un equilibrio más estable es donde se nota el trabajo.',
  'widgets.retestGoal.ankles': 'Querías tobillos más estables. El equilibrio es donde se nota primero.',
  'widgets.retestGoal.jump': 'Querías saltar más alto. Una pantorrilla fuerte es el muelle detrás del salto.',
  'widgets.retestGoal.allday': 'Querías aguantar el día de pie. Aquí se entrenan los músculos que sostienen tu arco.',
  'widgets.retestGoal.comeback': 'Vuelves tras una lesión. La diferencia entre tus piernas es la cifra a seguir.',
  'widgets.retestGoal.steady': 'Querías caminar con seguridad. El equilibrio y un pie fuerte son cómo se siente.',
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

  'widgets.painButton': 'Duele',
  'widgets.painTitle': '¿Cuánto, ahora mismo?',
  'widgets.painCarryOn': 'Sigue con cuidado. Para si aumenta.',
  'widgets.painPick': 'Toca un número y te decimos qué pasa después.',
  'widgets.painLowHint': 'Una molestia leve es normal en este trabajo. La sesión sigue donde la pausaste - ve con suavidad y toca la tirita otra vez si aumenta.',
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
};
