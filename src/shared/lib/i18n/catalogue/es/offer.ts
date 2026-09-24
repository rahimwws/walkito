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
  'offer.limited': 'LIMITADO — SOLO UNA VEZ',
  'offer.headlineComeback': 'Tu precio de vuelta al programa de 12 semanas',
  'offer.headlineSave': {
    one: 'Paga una vez por {count} mes y ahorra un {percent}%',
    other: 'Paga una vez por {count} meses y ahorra un {percent}%',
  },
  'offer.headlinePlain': {
    one: 'Paga una vez por {count} mes, o mes a mes',
    other: 'Paga una vez por {count} meses, o mes a mes',
  },
  'offer.subWeeks': {
    one: 'Tu plan de {count} semana, y todo lo que lo rodea.',
    other: 'Tu plan de {count} semanas, y todo lo que lo rodea.',
  },
  'offer.sub': 'Tu plan, y todo lo que lo rodea.',

  // ── Paywall: the two rows ────────────────────────────────────────────────
  'offer.programTitle': 'Programa de 12 semanas',
  'offer.programPrice': '{price} pago único',
  'offer.programNote': {
    one: '{count} mes de acceso · {perWeek}/semana · Sin suscripción',
    other: '{count} meses de acceso · {perWeek}/semana · Sin suscripción',
  },
  'offer.programActive': 'Activo',
  'offer.programActiveUntil': 'Hasta el {date}',
  'offer.badgeOff': 'DESCUENTO {percent}%',
  'offer.badgeSave': 'AHORRA {percent}%',
  'offer.monthlyTitle': 'Mensual',
  'offer.monthlyPrice': '{price}/mes',
  'offer.monthlyNote': '{perWeek}/semana · Cancela cuando quieras',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.termsProgram':
    'Programa de 12 semanas: un único pago de {price} por 12 semanas de acceso. No se renueva ni se te volverá a cobrar.',
  'offer.termsMonthly':
    'Mensual: {price} al mes. Se renueva automáticamente a menos que la canceles al menos 24 horas antes de que termine el periodo actual. Gestiona o cancela la suscripción en los ajustes de tu cuenta de App Store.',
  'offer.linkTerms': 'Términos',
  'offer.linkPrivacy': 'Privacidad',
  'offer.restore': 'Restaurar compras',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Ese plan no está disponible ahora. Prueba con el otro.',
  'offer.storeUnreachable': 'No se puede conectar con la App Store ahora mismo. Inténtalo en un momento.',
  'offer.nothingRestored': 'No se encontró ninguna compra anterior en este Apple ID.',
  'offer.restoreFailed': 'No se pudo completar. No se te ha cobrado nada.',
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

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Tu programa ha terminado',
  'widgets.sessionLockedBody':
    'Todo lo que registraste sigue aquí para consultarlo. Para volver a entrenar, retoma donde lo dejaste.',
  'widgets.sessionLockedCta': 'Ver tus opciones',

  // ── Session player: the retest ───────────────────────────────────────────
  'widgets.retestCalfRaises': 'Elevaciones de talón hasta el fallo',
  'widgets.retestArchHold': 'Mantener el arco',
  'widgets.retestBalance': 'Equilibrio a una pierna',

  'widgets.retestEntryTitle': 'Tus resultados',
  'widgets.retestEntryBlurb': 'Cuenta lo que acabas de hacer. Con números honestos, la próxima prueba tiene sentido.',
  'widgets.retestLeft': 'Pierna izquierda',
  'widgets.retestRight': 'Pierna derecha',
  'widgets.retestLeftSore': 'Pierna izquierda, la que duele',
  'widgets.retestRightSore': 'Pierna derecha, la que duele',
  'widgets.retestSeconds': 'Segundos',
  'widgets.retestLess': 'Menos',
  'widgets.retestMore': 'Más',
  'widgets.retestSave': 'Guardar resultados',
  'widgets.retestResultTitle': 'Dónde estás ahora',
  'widgets.retestResultBlurb': 'Comparado con tu prueba anterior, nunca con nadie más.',
  'widgets.retestChange': '{from} → {to}',
  'widgets.retestLevel': 'Nv {level}',
  'widgets.retestDone': 'Listo',

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
  'widgets.painBlurb': 'Por debajo de 5 puedes seguir. Desde 5, paramos y mañana será más suave.',
  'widgets.painCarryOn': 'Sigue con cuidado. Para si aumenta.',
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
