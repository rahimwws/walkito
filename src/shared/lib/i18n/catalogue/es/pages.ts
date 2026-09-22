/**
 * Spanish. See `../en/pages.ts` for what this domain covers and `../es/core.ts`
 * for the register — `tú`, neutral across regions, no `vosotros`.
 *
 * "Retest" is «reevaluación» here, matching `progress.retest`: the path screen
 * and the day sheet name the same measurement, and two words for it would read
 * as two different things.
 */

export const PAGES_ES = {
  // ── Day sheet ────────────────────────────────────────────────────────────
  'pages.day.notInPlan': 'Ese día no forma parte de tu plan.',

  'pages.day.retestEyebrow': 'Reevaluación · Día {day}',
  'pages.day.blockTitle': 'Bloque {block} · {name}',
  'pages.day.retestResultSubtitle': 'Dónde estabas al final del bloque',
  'pages.day.share': 'Compartir',
  'pages.day.shareRow': '{zone}: {from} → {to} ({level})',

  'pages.day.retestTodayTitle': 'Toca revisar tu progreso',
  'pages.day.retestMeta': '{tests} · {minutes}',
  'pages.day.retestTodayNote':
    'Hoy no se entrena. Las pruebas miden dónde te dejó el bloque y son lo único que mueve un nivel.',
  'pages.day.startRetest': 'Empezar la reevaluación',
  'pages.day.retestMissed': 'Esta reevaluación no se completó. Los niveles se mantienen desde la anterior.',
  'pages.day.retestClosesBlock': 'Reevaluación · cierra el bloque {block}',
  'pages.day.retestOpensOn': 'Se abre el {date}. Hasta entonces los niveles no se mueven.',

  'pages.day.sessionTitle': '{kind} · {minutes}',
  'pages.day.sessionSubtitle': 'Día {day} · Bloque {block} · {name}',
  'pages.day.missedNote':
    'No hay sesión registrada. No hay nada que recuperar: el programa va por fechas, así que el día siguiente es el día siguiente.',
  'pages.day.painLabel': 'Dolor ese día',
  'pages.day.painOutOf': '/ {max}',
  'pages.day.comesUpOn': 'Llega el {date}.',

  // ── Program ──────────────────────────────────────────────────────────────
  'pages.program.closeA11y': 'Cerrar el programa',
  'pages.program.headerMeta': '{date} · Bloque {block} de {total}',

  'pages.program.kindStrength': 'Fuerza',
  // The same word as `exercises.category.mobility`, so the card and the chip
  // inside it do not name the same work two ways.
  'pages.program.kindMobility': 'Movilidad',
  'pages.program.kindBalance': 'Equilibrio',
  'pages.program.kindRecovery': 'Recuperación',
  'pages.program.retest': 'Reevaluación',

  'pages.program.testCount': { one: '{count} prueba', other: '{count} pruebas' },
  'pages.program.minuteCount': { one: '{count} minuto', other: '{count} minutos' },

  'pages.program.dayCardA11y': 'Día {day}, {kind}, {minutes}',
  'pages.program.moveWithDose': '{title} · {dose}',
  // «Pantorrilla», never «gemelos» — the same choice `exercises.ts` documents.
  'pages.program.zoneCalf': 'Pantorrilla',
  'pages.program.zoneArch': 'Arco',
  'pages.program.zoneBalance': 'Equilibrio',
  'pages.program.zoneSymmetry': 'Simetría',

  'pages.program.statSession': 'Sesión',
  'pages.program.statTests': 'Pruebas',
  'pages.program.statExercises': 'Ejercicios',
  'pages.program.getStarted': 'Empezar',
  'pages.program.startNow': 'Empezar ya',

  'pages.program.blockSeam': 'BLOQUE {index} · {name}',
  'pages.program.blockAllDone': { one: '{count} día hecho', other: '{count} días hechos' },
  'pages.program.blockProgress': '{done} de {length} hechos',
  'pages.program.blockNew': 'Nuevo: {exercise}',
  'pages.program.blockChanges': 'Aquí cambia el trabajo',
  'pages.program.finishDay': 'DÍA {day}',
  'pages.program.finishCaption': 'Programa completado',

  // ── Welcome ──────────────────────────────────────────────────────────────
  'pages.welcome.hint': 'Desliza hacia arriba para entrar',
  'pages.welcome.a11yHint':
    'Desliza hacia arriba para abrir la pantalla y hacia abajo para cerrarla',

  // «Entrena ~~apoya~~ tus pies» — the struck verb is what the insole aisle
  // promises. Spanish crosses out a verb in the same position English does.
  'pages.welcome.headline': 'Entrena',
  'pages.welcome.struck': 'apoya',
  'pages.welcome.kept': 'tus pies',

  // Each phrase continues «…tus pies», so they agree with it.
  'pages.welcome.phrase1': 'que te duelen cada mañana',
  'pages.welcome.phrase2': 'después de 3 pares de plantillas',
  'pages.welcome.phrase3': 'para que tu próxima tirada larga no te cueste una semana',
  'pages.welcome.phrase4': 'para volver a correr',
  'pages.welcome.cta': 'Vamos',

  // ── Expired ──────────────────────────────────────────────────────────────
  'pages.expired.title': 'Tus 12 semanas han terminado',
  'pages.expired.lede': {
    one: '{count} sesión. Esto es lo que cambió.',
    other: '{count} sesiones. Esto es lo que cambió.',
  },
  'pages.expired.ledeNoSessions': 'Aquí es donde terminaste.',
  // The exercise's own name, as `exercises.heelRaiseTowel.title` writes it.
  'pages.expired.calfRaises': 'Elevación de talones',
  'pages.expired.morningPain': 'Dolor matutino',
  'pages.expired.nothingMeasured': 'Tus registros y reevaluaciones siguen aquí.',
  'pages.expired.keeps': 'Tu historial se queda de todas formas.',
  'pages.expired.storeUnreachable':
    'No se puede conectar con la App Store ahora mismo. Inténtalo en un momento.',
  'pages.expired.busy': 'Un momento…',
  'pages.expired.monthly': 'Seguir mes a mes · {price}',
  'pages.expired.program': 'Otras 12 semanas · {price}',
  'pages.expired.notNow': 'Ahora no',
};
