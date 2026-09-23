/**
 * Notifications, Spanish.
 *
 * Neutral across regions and `tú` throughout, as in `core.ts`: no `vosotros`,
 * and no vocabulary that splits Spain from Latin America — "pantorrillas"
 * rather than "gemelos", the simple past rather than the peninsular perfect.
 *
 * Gendered agreement is avoided rather than guessed at. English's "sitting
 * down" would be "sentado/sentada" and the app does not know which, so the line
 * says "sin levantarte de la silla" and stays true for everyone.
 *
 * The `many` plural form is the whole-millions one and is left out everywhere;
 * no count here reaches a million. `{steps}` is already grouped for the locale
 * while `count` is the same number raw, which is what selects the form.
 *
 * `{block}` arrives in English: block names live in `@/entities/program` and
 * are not translated anywhere yet.
 */

export const NOTIFICATIONS_ES = {
  // ── What kind of day it is ───────────────────────────────────────────────
  'notifications.kindStrength': 'Trabajo de fuerza',
  'notifications.kindMobility': 'Trabajo de movilidad',
  'notifications.kindBalance': 'Trabajo de equilibrio',
  'notifications.kindRecovery': 'Trabajo de recuperación',
  'notifications.kindFoot': 'Trabajo para el pie',

  // ── The morning nudge ────────────────────────────────────────────────────
  'notifications.sessionStrength': {
    one: 'Hoy toca fuerza del pie. {count} minuto.',
    other: 'Hoy toca fuerza del pie. {count} minutos.',
  },
  'notifications.sessionDay': {
    one: 'Día {day}. {kind}. {count} minuto.',
    other: 'Día {day}. {kind}. {count} minutos.',
  },
  'notifications.sessionShort': {
    one: 'Hoy una sesión corta: {count} minuto, sin levantarte de la silla.',
    other: 'Hoy una sesión corta: {count} minutos, sin levantarte de la silla.',
  },
  'notifications.sessionHeelRaises':
    'Hoy elevaciones de talón. El ejercicio que de verdad cambia las cosas.',
  'notifications.sessionCalves': {
    one: '{count} minuto. Hoy la cita es con tus pantorrillas.',
    other: '{count} minutos. Hoy la cita es con tus pantorrillas.',
  },
  'notifications.sessionMobility': 'Hoy movilidad. Nada exigente.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  'notifications.maintenanceDay': {
    one: 'Día de mantenimiento. {count} minuto.',
    other: 'Día de mantenimiento. {count} minutos.',
  },
  'notifications.maintenanceCheckpoint': 'Control mensual. Vamos a ver que nada haya retrocedido.',
  'notifications.maintenanceFourWeeks': 'Cuatro semanas estables. De eso se trata.',

  // ── The morning after a bad day ──────────────────────────────────────────
  // Sin signos de exclamación, sin ánimos y sin elogios: ayer dolió, y un tono
  // alegre aquí le diría al usuario que la app no le cree.
  'notifications.flareRough': {
    one: 'Ayer fue duro. Hoy es {count} minuto, sin levantarte de la silla.',
    other: 'Ayer fue duro. Hoy son {count} minutos, sin levantarte de la silla.',
  },
  'notifications.flarePain': {
    one: 'El dolor fue {pain}. Hoy el plan se aparta: {count} minuto.',
    other: 'El dolor fue {pain}. Hoy el plan se aparta: {count} minutos.',
  },
  'notifications.flareNothingHeavy': 'Ayer fue un mal día. Hoy no se pide nada exigente.',

  // ── A big day on their feet ──────────────────────────────────────────────
  'notifications.loadSteps': {
    one: '{steps} paso ayer: un {percent}% más de lo habitual. Hoy toca recuperación.',
    other: '{steps} pasos ayer: un {percent}% más de lo habitual. Hoy toca recuperación.',
  },
  'notifications.loadBigDay': 'Ayer fue un día largo de pie. El plan se ajustó.',
  'notifications.loadBackOff': 'Ayer fue largo. Hoy el plan baja el ritmo.',

  // ── El aviso por pasos ───────────────────────────────────────────────────
  'notifications.stepsCheck': {
    one: 'Hoy ya llevas {steps} paso: un día largo de pie. ¿Qué tal el talón?',
    other: 'Hoy ya llevas {steps} pasos: un día largo de pie. ¿Qué tal el talón?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  // Solo el cambio respecto a la propia base del usuario. Nada de cojera, nada
  // de compensaciones, ningún riesgo de lesión y ninguna comparación con nadie.
  'notifications.gaitUneven': {
    one: 'Llevas {count} día con los pasos desiguales.',
    other: 'Llevas {count} días con los pasos desiguales.',
  },
  'notifications.gaitChanged': 'Esta semana algo cambió en tu forma de caminar.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Dos semanas. Toca ver qué se movió. 3 pruebas, 4 minutos.',
  'notifications.retestCheckpoint': 'Hoy hay control. Sin entrenamiento: solo tres mediciones.',
  'notifications.retestDay': 'Día {day}. Vamos a ver si está funcionando.',
  'notifications.retestFollowUp': 'Las pruebas siguen abiertas. Cuatro minutos.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Hoy empieza un bloque nuevo: {block}. Comienzan las elevaciones de talón.',
  'notifications.blockLoadUp': 'Bloque {block}. A partir de aquí la carga sube.',
  'notifications.blockOpens': 'Hoy empieza {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'El dolor subió esta semana, así que hoy se baja un nivel.',
  'notifications.planSpike': 'Ayer fue un día grande. Hoy se retoma más suave.',
  'notifications.planHeavyDay': 'Ayer fue un día largo de pie. Hoy se cambia a recuperación.',
  'notifications.planReturn': 'Cinco días de pausa. Hoy se retoma un paso más fácil.',
  'notifications.planBackUp': 'Ya no hay molestias: hoy la carga vuelve a subir.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': '¿Cómo fue el pie hoy?',
  'notifications.checkinOneTap': 'Un toque antes de dormir: ¿cómo se sintió?',
  'notifications.checkinLog': 'Registra hoy y el plan sabrá qué hacer mañana.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // Las dos líneas dicen lo que un toque mantiene, nunca lo que está por caerse.
  'notifications.streakKeep': {
    one: 'Un toque mantiene {count} día.',
    other: 'Un toque mantiene {count} días.',
  },
  'notifications.streakTap': { one: '{count} día. Un toque.', other: '{count} días. Un toque.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'El día {day} sigue ahí cuando quieras.',
  'notifications.winbackDay10': 'El plan va por fechas, no por asistencia. Hoy es el día {day}.',
  'notifications.winbackDay30': 'Seguimos aquí si el pie vuelve a hablar.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  // Las vocales estiradas son deliberadas: es alguien llamándote, no un envío
  // masivo.
  'notifications.offerPleaNamed': '{name}, esperaaa',
  'notifications.offerPlea': 'Esperaaa',
  'notifications.offerPleaBody': 'Porfaaa.',
  'notifications.offerDiscountTitle': 'Llévate un {percent}% de descuento en el programa de 12 semanas',
  'notifications.offerDiscountBody': 'Toca para aprovecharlo.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Tu acceso al programa termina en una semana',
  'notifications.expiryBody': 'Tu progreso se queda de todas formas.',
};
