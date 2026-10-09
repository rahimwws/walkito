/** testday strings (the guided test day: intro, the three tests, results). Filled per domain; see `../en/core.ts` for the rules. */

export const TESTDAY_ES = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Cerrar',
  'testday.leave.title': '¿Salir de las pruebas?',
  'testday.leave.body': 'No se guarda nada hasta terminar la última prueba. Seguirán pendientes.',
  'testday.leave.stay': 'Seguir',
  'testday.leave.confirm': 'Salir',

  // ── Intro ─────────────────────────────────────────────────────────────────
  'testday.intro.eyebrow': 'Día de pruebas',
  'testday.intro.title': 'Tres pruebas cortas',
  'testday.intro.body': {
    one: 'Alrededor de {count} minuto.',
    other: 'Unos {count} minutos.',
  },
  'testday.intro.nowSeconds': 'Ahora {now} s · meta {goal} s',
  'testday.intro.nowRaises': {
    one: 'Ahora {now} · meta {count} elevación',
    other: 'Ahora {now} · meta {count} elevaciones',
  },
  'testday.intro.firstSeconds': 'Primera medición · meta {goal} s',
  'testday.intro.firstRaises': {
    one: 'Primera medición · meta {count} elevación',
    other: 'Primera medición · meta {count} elevaciones',
  },
  'testday.intro.need': 'Necesitas',
  'testday.intro.needBarefoot': 'Los pies descalzos',
  'testday.intro.needWall': 'Una pared para apoyarte',
  'testday.intro.needPhone': 'El móvil donde puedas verlo',
  'testday.intro.checkin': '¿Cómo está el pie ahora mismo?',
  'testday.intro.checkinHint': 'Cuenta como tu registro de hoy.',
  'testday.intro.painNone': 'Sin dolor',
  'testday.intro.painWorst': 'Máximo',
  'testday.intro.painA11y': '{score} de 10',
  'testday.intro.sore':
    'En un día con dolor las cifras salen más bajas de lo que tu pie puede de verdad, y las próximas dos semanas se planificarían con ellas. Las pruebas pueden esperar a mañana.',
  'testday.intro.start': 'Empezar',
  'testday.intro.anyway': 'Hacerlas igualmente',
  'testday.intro.tomorrow': 'Hacerlas mañana',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Prueba {current} de {total}',
  'testday.test.calf.name': 'Elevaciones de talón',
  'testday.test.arch.name': 'Mantener el arco',
  'testday.test.balance.name': 'Equilibrio',

  'testday.side.left': 'Pierna izquierda',
  'testday.side.right': 'Pierna derecha',
  'testday.side.leftSore': 'Pierna izquierda, la que duele',
  'testday.side.rightSore': 'Pierna derecha, la que duele',

  // The button on the picture before a test: opens the clip at full size.

  'testday.watch': 'Ver el vídeo',

  'testday.calf.step1': 'Sobre una pierna, dedos en la pared.',
  'testday.calf.step2': 'Sube del todo y baja, con el clic.',
  'testday.calf.step3': 'Para cuando pierdas el ritmo o la altura.',
  'testday.calf.stopHint': 'Pulsa cuando no puedas mantener el ritmo o la altura completa',
  'testday.calf.up': 'Arriba',
  'testday.calf.down': 'Abajo',
  'testday.calf.otherTitle': 'Ahora la otra pierna',
  'testday.calf.otherBody': 'Mismo ritmo, misma altura completa, dedos en la pared.',

  'testday.arch.step1': 'De pie sobre los dos pies.',
  'testday.arch.step2': 'Lleva la base de los dedos hacia el talón.',
  'testday.arch.step3': 'Para cuando el arco baje.',
  'testday.arch.stopHint': 'Pulsa en cuanto el arco baje',

  'testday.balance.step1': 'Sobre una pierna, manos en la cadera.',
  'testday.balance.step2': 'Cierra los ojos al empezar.',
  'testday.balance.step3': 'Para cuando el otro pie toque el suelo.',
  'testday.balance.stopHint': 'Pulsa cuando el otro pie toque el suelo',

  'testday.start': 'Empezar',
  'testday.stop': 'Parar',
  'testday.timeLeft': 'Quedan {time}',
  'testday.secondsLeft': { one: 'segundo restante', other: 'segundos restantes' },
  'testday.held': 'Llevas {n} s',

  'testday.paused.title': 'En pausa',
  'testday.paused.body': 'El temporizador se detuvo mientras la app estaba en segundo plano.',
  'testday.paused.resume': 'Continuar',
  'testday.paused.restart': 'Repetir esta prueba desde el principio',

  'testday.confirm.raises': {
    one: '{count} elevación, ¿es correcto?',
    other: '{count} elevaciones, ¿es correcto?',
  },
  'testday.confirm.seconds': {
    one: '{count} segundo, ¿es correcto?',
    other: '{count} segundos, ¿es correcto?',
  },
  'testday.confirm.hint': 'Ajústalo si has perdido la cuenta.',
  'testday.confirm.holdHint': 'Si tardaste en llegar al teléfono, quita esos segundos.',
  'testday.confirm.less': 'Menos',
  'testday.confirm.more': 'Más',
  'testday.confirm.again': 'Repetir esta prueba',
  'testday.confirm.next': 'Siguiente prueba',
  'testday.confirm.finish': 'Ver resultados',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.firstBlurb': 'La próxima prueba mostrará cuánto has avanzado.',
  'testday.results.name.arch_hold': 'Mantener el arco',
  'testday.results.name.calf_raises': 'Elevaciones de talón',
  'testday.results.name.balance': 'Equilibrio',
  'testday.results.name.symmetry': 'Simetría',
  'testday.results.unitSeconds': { one: 'segundo', other: 'segundos' },
  'testday.results.unitRaises': { one: 'elevación', other: 'elevaciones' },
  'testday.results.percent': '{n} %',
  'testday.results.gapUnit': 'de diferencia entre piernas',
  'testday.results.legs': 'Izquierda {left} · derecha {right}',
  'testday.results.goalGap': 'Meta: menos del {n} %',
  'testday.results.toGoSeconds': { one: 'Falta {count} s', other: 'Faltan {count} s' },
  'testday.results.toGoRaises': { one: 'Falta {count} elevación', other: 'Faltan {count} elevaciones' },
  'testday.results.toGoGap': { one: 'Falta {count} punto', other: 'Faltan {count} puntos' },
  'testday.results.reached': 'Meta alcanzada',
  'testday.results.moreSeconds': {
    one: '{count} s más que la última vez',
    other: '{count} s más que la última vez',
  },
  'testday.results.fewerSeconds': {
    one: '{count} s menos que la última vez',
    other: '{count} s menos que la última vez',
  },
  'testday.results.moreRaises': {
    one: '{count} elevación más que la última vez',
    other: '{count} elevaciones más que la última vez',
  },
  'testday.results.fewerRaises': {
    one: '{count} elevación menos que la última vez',
    other: '{count} elevaciones menos que la última vez',
  },
  'testday.results.gapSmaller': {
    one: 'Diferencia {count} punto menor que la última vez',
    other: 'Diferencia {count} puntos menor que la última vez',
  },
  'testday.results.gapLarger': {
    one: 'Diferencia {count} punto mayor que la última vez',
    other: 'Diferencia {count} puntos mayor que la última vez',
  },
  'testday.results.same': 'Igual que la última vez',
  'testday.results.first': 'Primera medición',
  'testday.results.nextTest': 'Próxima prueba: {date}',
  'testday.results.planUpdated': 'Tu plan para las próximas dos semanas está actualizado.',
  'testday.results.done': 'Listo',

  'testday.results.verdictFirst': 'Tres números para superar',
  'testday.results.verdictSteady': 'Las tres se mantienen',
  'testday.results.verdictUp.calf_raises': 'Más elevaciones que la última vez',
  'testday.results.verdictUp.arch_hold': 'Tu arco aguantó más',
  'testday.results.verdictUp.balance': 'Te equilibraste más tiempo',
  'testday.results.verdictUpTwo': 'Dos de tres subieron',
  'testday.results.verdictUpAll': 'Las tres subieron',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'Nuevo récord',
  'testday.results.heroEyebrowFirst': 'Tu punto de partida',
  'testday.results.heroEyebrowSteady': 'Pruebas hechas',
  'testday.results.verdictGoal.calf_raises': 'Alcanzaste tu meta de elevaciones',
  'testday.results.verdictGoal.arch_hold': 'Alcanzaste tu meta de arco',
  'testday.results.verdictGoal.balance': 'Alcanzaste tu meta de equilibrio',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Todas las pruebas',
  'testday.results.showDetails': 'Ver detalles',
  'testday.results.hideDetails': 'Ocultar detalles',
  'testday.results.share': 'Compartir',
  'testday.results.shareTitle': 'Mi prueba de pies',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'Mi prueba de pies en Walkito: elevaciones de talón {calf} · arco {arch} s · equilibrio {balance} s',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 's',
  'testday.results.valueSeconds': '{n} s',
  'testday.results.dateVs': {
    one: '{date} · comparado con hace {count} día',
    other: '{date} · comparado con hace {count} días',
  },
  'testday.results.dateFirst': '{date} · tu punto de partida',
  'testday.results.chipBaseline': 'Punto de partida',
  'testday.results.chipSame': 'Igual',
  'testday.results.chipSeconds': '{delta} s',
  'testday.results.chipRaises': { one: '{delta} elevación', other: '{delta} elevaciones' },
  'testday.results.gapBetween': 'Diferencia entre piernas {n} %',
  'testday.results.explain.calf_raises':
    'Las elevaciones de talón muestran cuánto trabajo aguantan tu pantorrilla y tu tendón de Aquiles antes de cansarse. Más elevaciones significa que la pantorrilla lleva más de cada paso en caminatas y carreras largas.',
  'testday.results.explain.arch_hold':
    'Mantener el arco muestra cuánto tiempo los músculos pequeños de la planta sostienen el arco levantado. Un tiempo más largo significa que el pie se mantiene apoyado durante más parte del día.',
  'testday.results.explain.balance':
    'Estar sobre una pierna con los ojos cerrados muestra lo bien que tu pie y tu tobillo sienten el suelo. Más segundos significa pasos más firmes en caminos irregulares y cuando estás cansado.',
  'testday.results.explainA11y': 'Qué muestra esto',
};
