/**
 * Home, Spanish.
 *
 * Two exports, mirroring `../en/home.ts`: the phrases numbers arrive in, and
 * the sentences themselves as ordered segments.
 *
 * Neutral across regions — `tú` throughout, no `vosotros`, and no vocabulary
 * that splits Spain from Latin America. Where a word does split ("tramo de
 * escaleras" vs "piso"), the one Apple Health itself uses in Spanish wins, so
 * the figure matches what the user can go and check.
 *
 * **A different number of segments from English, where the clause differs.**
 * The `on-feet` line is five segments here against English's six: what English
 * splits across two frames ("the next morning was" / "rough") is one clause in
 * Spanish. A fixed token count would have forced an unnatural break.
 *
 * The `many` plural form is left out everywhere: in Spanish it is the
 * whole-millions form, and no count in this app reaches a million.
 *
 * **Register:** a coach. The health lines compare the person to themselves and
 * never to a norm — "por encima de tu media", never "alto", never "cojeas".
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

export const HOME_ES = {
  'home.greeting.morning': 'Buenos días',
  'home.greeting.afternoon': 'Buenas tardes',
  'home.greeting.evening': 'Buenas noches',

  // ── The kind of work a day is ────────────────────────────────────────────
  'home.workStrength': 'fuerza de pie y pantorrilla',
  'home.workMobility': 'estiramientos',
  'home.workBalance': 'trabajo de equilibrio',
  'home.workRecovery': 'recuperación suave',
  'home.fallbackMove': 'elevaciones de talón',

  // ── Counted phrases ──────────────────────────────────────────────────────
  'home.minutes': { one: '{count} minuto', other: '{count} minutos' },
  'home.moves': { one: '{count} ejercicio', other: '{count} ejercicios' },
  'home.tests': { one: '{count} prueba', other: '{count} pruebas' },
  'home.weeks': { one: '{count} semana', other: '{count} semanas' },
  'home.points': { one: '{count} punto', other: '{count} puntos' },
  'home.flights': { one: '{count} tramo de escaleras', other: '{count} tramos de escaleras' },
  'home.hoursOnFeet': { one: '{count} hora', other: '{count} horas' },
  'home.thresholdHours': { one: '{count} hora', other: '{count} horas' },
  'home.daysInARow': { one: '{count} día seguido', other: '{count} días seguidos' },
  'home.dayNumber': 'día {count}',
  'home.dayOfPlan': 'día {day} de {total}',
  'home.steps': { one: '{steps} paso', other: '{steps} pasos' },

  // Con preposición, y a veces con verbo: «a correr», «al tenis».
  'home.backTo.running': 'a correr',
  'home.backTo.tennis': 'al tenis',
  'home.backTo.gym': 'al gimnasio',
  'home.backTo.football': 'al fútbol',
  'home.backTo.basketball': 'al baloncesto',
  'home.backTo.cycling': 'a la bici',
  'home.backTo.hiking': 'a la montaña',

  // ── Units ────────────────────────────────────────────────────────────────
  'home.km': '{value} km',
  'home.percent': '{value}%',
  'home.duration': '{hours} h {minutes} min',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Tareas de hoy',
  'home.allDoneTitle': 'Hecho por hoy',
  'home.allDoneBlurb':
    'No hace falta nada más. La próxima sesión se abre tras doce horas de descanso.',
  'home.retestDay': 'Día de control. {tests}, unos {minutes}.',
  'home.startTests': 'Empezar las pruebas',
  'home.nothingScheduled': 'Hoy no hay nada programado. El descanso cuenta.',
  'home.markDone': 'Marcar como hecho',
  'home.markNotDone': 'Desmarcar',
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  'home.chipSeconds': '{count} s',
  'home.chipMinutes': '{count} min',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'Hoy me duele',
  'home.noPain': 'Hoy no me duele',
  'home.logCheckIn': 'Registrar el día de hoy',
  'home.checkInAgain': 'Registrar otra vez',
  'home.checkInTitle': 'Registro de hoy',
  'home.checkInSub': '¿Cómo va el pie?',
  'home.save': 'Guardar',
  'home.saved': 'Guardado',
  // Nada de esto felicita una cifra: responder con calidez a un siete enseña a
  // dejar de registrar con honestidad.
  'home.ackGood': 'Bien.',
  'home.ackLogged': 'Registrado.',
  'home.ackLoggedShorter': 'Registrado. Por eso la sesión de hoy es más corta.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Dónde duele',
  'home.zonesEmpty': 'Toca dónde te duele — hasta {count}',
  'home.zonesFull': 'Hasta {count} a la vez — toca una para cambiarla',
  'home.zonesPicked': '{zones} — después {move}',
  'home.zoneJoin': ' · ',

  /**
   * Nombres que la persona reconoce en su propia pierna, no etiquetas de una
   * lámina anatómica.
   *
   * «Almohadilla del pie», nunca «bola del pie», que es un calco. Misma
   * convención que en `./exercises.ts`, de donde salen también «arco del pie»,
   * «pantorrilla», «sóleo» y «tobillo».
   */
  'home.zone.calf': 'Pantorrilla',
  'home.zone.soleus': 'Sóleo',
  'home.zone.tibia': 'Espinilla',
  'home.zone.tibAnt': 'Espinilla delantera',
  'home.zone.ankle': 'Tobillo',
  'home.zone.achilles': 'Aquiles',
  'home.zone.heel': 'Talón',
  'home.zone.dorsum': 'Empeine',
  'home.zone.arch': 'Arco del pie',
  'home.zone.ball': 'Almohadilla del pie',
  'home.zone.toes': 'Dedos del pie',
  'home.zone.innerAnkle': 'Tobillo interno',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Dolor de hoy',
  'home.morePain': 'Más dolor',
  'home.lessPain': 'Menos dolor',
  'home.painValueA11y': '{score} de {max}, {band}',
  // Siempre contra el rango propio de esta persona, nunca contra una norma.
  'home.rangeAbove': 'Por encima de tu rango habitual',
  'home.rangeBelow': 'Por debajo de tu rango habitual',
  'home.rangeWithin': 'Dentro de tu rango habitual',
  // Más corto que la frase completa: la etiqueta es estrecha y el sentido
  // entero vive en la lectura de VoiceOver.
  'home.rangeAboveChip': 'POR ENCIMA',
  'home.rangeBelowChip': 'POR DEBAJO',
  'home.rangeWithinChip': 'LO HABITUAL',
  'home.usualRangeLegend': 'HABITUAL {low}–{high}',
  'home.usualRangeA11y': 'Rango habitual, de {low} a {high}',

  /**
   * Qué significa cada puntuación, en términos de lo que el dolor te impide
   * hacer y no con un adjetivo.
   *
   * Es la persona valorando su propio cuerpo, así que ninguna línea dicta un
   * veredicto: describen, no califican.
   */
  'home.bandNothing': 'Nada',
  'home.bandNothingBlurb': 'Hoy no hay dolor que registrar.',
  'home.bandBarely': 'Apenas',
  'home.bandBarelyBlurb': 'Te olvidarías de él si nadie preguntara.',
  'home.bandNoticeable': 'Se nota',
  'home.bandNoticeableBlurb': 'Lo notas, pero no cambia nada de lo que haces.',
  'home.bandSore': 'Molesta',
  'home.bandSoreBlurb': 'Lo esquivas sin darte cuenta.',
  'home.bandHurts': 'Duele',
  'home.bandHurtsBlurb': 'Ahora mismo decide por ti.',
  'home.bandSevere': 'Fuerte',
  'home.bandSevereBlurb': 'El problema es estar de pie, no correr.',
};

export const BRIEF_ES = {
  // ── Dolor: lo que la persona reporta ─────────────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'hoy son' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sentado. Nada más.' },
    ],
    [
      { k: 'frame', text: 'mañana dura. Hoy solo' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Nada más.' },
    ],
    [
      { k: 'frame', text: 'hoy descargamos —' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sin peso en el pie.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'tus mañanas están' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'por encima de la semana pasada. Hoy bajamos la carga.' },
    ],
    [
      { k: 'frame', text: 'esta semana va' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'peor que la anterior. Día más suave.' },
    ],
    [
      { k: 'frame', text: 'el dolor está' },
      { k: 'metric', icon: 'warn', text: 'por encima de tu media', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'Hoy bajamos la carga.' },
    ],
  ],

  // ── La estructura del programa ───────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'hoy no toca entrenar, sino' },
      { k: 'metric', icon: 'retest', text: '{tests}' },
      { k: 'frame', text: '— para tener con qué comparar después.' },
    ],
    [
      { k: 'frame', text: 'el primer día son' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'unos cuatro minutos. Es tu punto de partida.' },
    ],
    [
      { k: 'frame', text: 'empezamos con' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: '.' },
      { k: 'frame', text: 'En dos semanas vemos qué cambió.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'han pasado' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'Toca ver qué se movió.' },
    ],
    [
      { k: 'frame', text: 'día de control —' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'vamos a medir:' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}', tail: ',' },
      { k: 'frame', text: 'y sabremos dónde estás.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'hoy empieza un bloque nuevo —' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'Otra forma, otra carga.' },
    ],
    // El matiz del original se mantiene: «los estudios dicen» y «alrededor de».
    [
      { k: 'frame', text: 'bloque nuevo hoy. Los estudios dicen que alrededor de' },
      { k: 'metric', icon: 'level', text: 'la mitad' },
      { k: 'frame', text: 'de la mejora del año llega en los primeros tres meses.' },
    ],
    [
      { k: 'frame', text: 'entras en el bloque' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'A partir de aquí el trabajo cambia de forma.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'hoy toca {work} —' },
      { k: 'metric', icon: 'tasks', text: '{moves}', tail: ',' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'primeros días —' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ':' },
      { k: 'frame', text: '{work},' },
      { k: 'value', text: '{minutes}', tail: '.' },
      { k: 'frame', text: 'Poco y a menudo gana a mucho y de vez en cuando.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      {
        k: 'frame',
        text: 'hoy toca {work}. La primera semana va de aparecer, no de esforzarse.',
      },
    ],
  ],

  // ── Carga ────────────────────────────────────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'ayer fue tu' },
      { k: 'metric', icon: 'feet', text: 'carrera más larga del mes', tail: ' —' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Hoy toca' },
      { k: 'metric', icon: 'rest', text: 'suave', tail: '.' },
    ],
    [
      { k: 'frame', text: 'fueron' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'más que nada en cuatro semanas. Hoy recuperamos.' },
    ],
    [
      { k: 'frame', text: 'ayer, la carrera más larga del mes. Hoy toca' },
      { k: 'metric', icon: 'rest', text: 'recuperación', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      { k: 'frame', text: 'ayer — más que en tu semana habitual. Buen día para ir suave.' },
    ],
    [
      { k: 'frame', text: 'ayer subiste más' },
      { k: 'metric', icon: 'level', text: 'escaleras' },
      { k: 'frame', text: 'de lo normal. Las escaleras tiran mucho del arco.' },
    ],
    [
      { k: 'frame', text: 'ayer fue un día cargado de' },
      { k: 'metric', icon: 'level', text: 'escaleras', tail: '.' },
      { k: 'frame', text: 'Hoy va más suave.' },
    ],
  ],

  // Cinco segmentos donde el inglés usa seis: lo que allí son dos fragmentos
  // ("the next morning was" / "rough") aquí es una sola oración.
  'on-feet': [
    [
      { k: 'frame', text: 'llevas' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'de pie. Las dos veces que pasaste de' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'la mañana siguiente fue dura.' },
    ],
    [
      { k: 'frame', text: 'hoy llevas' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'de pie. Pasar de' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'ya te ha costado la mañana siguiente.' },
    ],
    [
      { k: 'frame', text: 'día largo ya —' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Vale la pena sentarse diez minutos.' },
    ],
  ],

  'steps-today': [
    [
      { k: 'frame', text: 'ya llevas' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'hoy. ¿Qué tal el talón?' },
    ],
    [
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'hasta ahora — mucho. Si el talón molesta, siéntate un rato.' },
    ],
    [
      { k: 'frame', text: 'hoy llevas' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Estira el pie esta noche y mañana lo notarás.' },
    ],
    [
      { k: 'frame', text: 'un día largo de pie:' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Anota cómo va el talón para que el plan lo tenga en cuenta.' },
    ],
  ],

  // ── Recuperación ─────────────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'has dormido de media' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'esta semana. Los tendones se reparan de noche — hoy vamos' },
      { k: 'metric', icon: 'rest', text: 'más suave', tail: '.' },
    ],
    [
      { k: 'frame', text: 'noches cortas toda la semana —' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'de media. Hoy quitamos un poco.' },
    ],
    [
      { k: 'frame', text: 'llevas una semana durmiendo' },
      { k: 'metric', icon: 'sleep', text: 'menos de siete horas', tail: '.' },
      { k: 'frame', text: 'Hoy va más suave a propósito.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'tu pulso en reposo está' },
      { k: 'metric', icon: 'level', text: 'algo por encima de tu media', tail: '.' },
      { k: 'frame', text: 'Hoy tiramos hacia recuperación.' },
    ],
    [
      { k: 'frame', text: 'el pulso en reposo está' },
      { k: 'metric', icon: 'level', text: 'por encima de tu normal', tail: '.' },
      { k: 'frame', text: 'Vamos con calma.' },
    ],
    [
      { k: 'frame', text: 'tu cuerpo todavía se está poniendo al día —' },
      { k: 'metric', icon: 'level', text: 'pulso en reposo más alto de lo tuyo', tail: '.' },
      { k: 'frame', text: 'Hoy más suave.' },
    ],
  ],

  // ── Marcha ───────────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'llevas toda la semana caminando' },
      { k: 'metric', icon: 'gait', text: 'más lento de lo tuyo', tail: '.' },
      { k: 'frame', text: 'Suele pasar cuando el pie molesta.' },
    ],
    [
      { k: 'frame', text: 'tu ritmo al caminar está' },
      { k: 'metric', icon: 'gait', text: 'por debajo de tu media', tail: '.' },
      { k: 'frame', text: 'Para tenerlo en cuenta, no para preocuparse.' },
    ],
    [
      { k: 'frame', text: 'pasos más lentos que tu normal esta semana.' },
      { k: 'metric', icon: 'gait', text: 'Nada alarmante' },
      { k: 'frame', text: '— pero hoy lo dejamos suave.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'tus pasos están' },
      { k: 'metric', icon: 'gait', text: 'menos parejos', tone: 'warn' },
      { k: 'frame', text: '—' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'frente a tu habitual' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'menos parejos que tu normal esta semana —' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'frente a tu habitual' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'algo cambió en cómo caminas.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'frente a tu' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'Suele pasar cuando algo duele.' },
    ],
  ],

  // ── Hecho, y volver ──────────────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'hoy ya está.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Nos vemos mañana.' },
    ],
    [
      { k: 'frame', text: 'hoy resuelto —' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'y sumando.' },
    ],
    [
      { k: 'frame', text: 'sesión hecha — es el' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'de la racha que llevas.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'qué bien verte de nuevo. Hoy tienes' },
      { k: 'metric', icon: 'session', text: 'una sesión corta' },
      { k: 'frame', text: 'para volver a entrar.' },
    ],
    [
      { k: 'frame', text: 'me alegra verte. Empezamos' },
      { k: 'metric', icon: 'session', text: 'con poco' },
      { k: 'frame', text: 'hoy.' },
    ],
    [
      { k: 'frame', text: 'de vuelta — seguimos donde lo dejaste, solo que' },
      { k: 'metric', icon: 'session', text: 'más suave', tail: '.' },
    ],
  ],

  // ── Buenas noticias, solo en una mañana tranquila ────────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'tus mañanas van' },
      { k: 'metric', icon: 'up', text: 'a mejor', tone: 'good' },
      { k: 'frame', text: '—' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'menos este mes.' },
    ],
    [
      { k: 'frame', text: 'este mes has bajado' },
      { k: 'metric', icon: 'up', text: '{drop}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Es un cambio real, no ruido.' },
    ],
    [
      { k: 'frame', text: 'las dos últimas semanas han sido' },
      { k: 'metric', icon: 'up', text: 'más tranquilas', tone: 'good' },
      { k: 'frame', text: 'que las dos anteriores.' },
    ],
  ],

  'walk-back': [
    [
      { k: 'frame', text: 'tu ritmo al caminar' },
      { k: 'metric', icon: 'done', text: 'ha vuelto a lo tuyo', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Buena señal.' },
    ],
    [
      { k: 'frame', text: 'el ritmo se ha' },
      { k: 'metric', icon: 'done', text: 'asentado', tone: 'good' },
      { k: 'frame', text: 'donde suele estar.' },
    ],
    [
      { k: 'frame', text: 'vuelves a caminar a' },
      { k: 'metric', icon: 'done', text: 'tu velocidad de siempre', tail: '.', tone: 'good' },
    ],
  ],

  // Dos formulaciones, no tres: la tercera del inglés sería aquí la primera
  // otra vez. La rotación toma el módulo contra *este* array.
  'gait-recovered': [
    [
      { k: 'frame', text: 'tu forma de caminar está' },
      { k: 'metric', icon: 'done', text: 'pareja otra vez', tail: '.', tone: 'good' },
      { k: 'frame', text: 'De vuelta a' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'los pasos están' },
      { k: 'metric', icon: 'done', text: 'otra vez en equilibrio', tone: 'good' },
      { k: 'frame', text: '— dos días seguidos.' },
    ],
  ],

  // ── Vacío honesto ────────────────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'todavía estoy aprendiendo cómo caminas. Dame' },
      { k: 'metric', icon: 'window', text: 'unos días más' },
      { k: 'frame', text: 'con el teléfono en el bolsillo.' },
    ],
    [
      { k: 'frame', text: 'aún estoy formando la imagen de tu normal —' },
      { k: 'metric', icon: 'window', text: 'unos días más' },
      { k: 'frame', text: 'bastarán.' },
    ],
    [
      { k: 'frame', text: 'todavía hay poca historia tuya.' },
      { k: 'metric', icon: 'window', text: 'Unos días más' },
      { k: 'frame', text: 'y podré comparar.' },
    ],
  ],

  'goal-back': [
    [
      { k: 'frame', text: 'cada sesión es un paso más para volver' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
      { k: 'frame', text: 'Hoy:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'para volver' },
      { k: 'metric', icon: 'session', text: '{backTo}' },
      { k: 'frame', text: 'hacen falta días como este. Hoy:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'hoy' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'y estás un poco más cerca de volver' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'un poco cada día: así se vuelve' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
  ],

  'goal-consistent': [
    [
      { k: 'frame', text: 'ya llevas' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Sigue así.' },
    ],
    [
      { k: 'frame', text: 'querías constancia y aquí está:' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Hoy son solo' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-stronger': [
    [
      { k: 'frame', text: 'la fuerza llega con la repetición. Hoy:' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'hoy toca' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
      { k: 'frame', text: 'Cuanto más a menudo, más fuerte.' },
    ],
    [
      { k: 'frame', text: 'más fuerte es poco, pero a menudo. Hoy:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-injuryfree': [
    [
      { k: 'frame', text: 'la mejor protección contra lesiones es un poco cada día. Hoy:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'un pie fuerte se lesiona menos. Hoy le tocan' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'al día bastan para ir por delante de las lesiones.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'no puedo leer cómo caminas — lleva el teléfono en el' },
      { k: 'metric', icon: 'pocket', text: 'bolsillo', tail: ',' },
      { k: 'frame', text: 'no en una bolsa, y lo captaré.' },
    ],
    [
      { k: 'frame', text: 'no llegan datos de tu marcha. Hace falta el teléfono en el' },
      { k: 'metric', icon: 'pocket', text: 'bolsillo' },
      { k: 'frame', text: 'y terreno llano.' },
    ],
    [
      { k: 'frame', text: 'todavía no hay nada que leer — los sensores quieren el teléfono en el' },
      { k: 'metric', icon: 'pocket', text: 'bolsillo' },
      { k: 'frame', text: 'mientras caminas.' },
    ],
  ],

  // ── La mayoría de los días ───────────────────────────────────────────────
  'quiet-session': [
    [
      { k: 'frame', text: 'hoy toca' },
      { k: 'metric', icon: 'session', text: '{move}' },
      { k: 'frame', text: '— el ejercicio que sostiene este plan.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Ya pasaste la parte difícil, que es empezar.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'ayer fue un día largo de pie —' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Contexto, no un veredicto.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'ayer fue un' },
      { k: 'metric', icon: 'feet', text: 'día más ligero' },
      { k: 'frame', text: 'de pie. Buen día para cargar un poco.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'una idea sobre el calzado: un' },
      { k: 'metric', icon: 'level', text: 'contrafuerte más firme' },
      { k: 'frame', text: 'y un poco más de drop quitan carga al arco.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'si corres hoy, mantén la cadencia sobre un' },
      { k: 'metric', icon: 'up', text: '{cadence} por encima de lo normal', tail: '.' },
      { k: 'frame', text: 'Pasos más cortos, menos carga en el talón.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'la mayor parte del cambio aquí aparece' },
      { k: 'metric', icon: 'window', text: 'pronto', tail: '.' },
      { k: 'frame', text: 'Estás justo en esa ventana.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
