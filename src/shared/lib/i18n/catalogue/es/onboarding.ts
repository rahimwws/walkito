/**
 * Onboarding, Spanish.
 *
 * `tú` throughout, and neutral across Spain and Latin America: no `vosotros`,
 * and none of the vocabulary that picks a side. Two places where that costs a
 * rewrite rather than a word:
 *
 * - `onboarding.referral.blurb` — "you both get" has no second-person plural
 *   that works in both regions, so it becomes «los dos se llevan», third
 *   person, which reads the same either side of the Atlantic.
 * - `onboarding.notify.ask` and `onboarding.social.welcome` avoid the gendered
 *   «solo/sola» and «bienvenido/bienvenida». «a solas» and «te damos la
 *   bienvenida» are invariable, which matters on a screen that has just asked
 *   the user their sex and could get it wrong.
 *
 * `onboarding.contract.stampLine1/2` also reverse against the English: the
 * qualifier follows the noun here, so the two stamped rows read «CORRER» over
 * «SIN DOLOR».
 *
 * The `many` plural form is left out everywhere — in Spanish it is the whole-
 * millions form, and no count in this flow reaches a million.
 */
export const ONBOARDING_ES = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  'onboarding.act.about': 'Sobre ti',
  'onboarding.act.sport': 'Tu deporte',
  'onboarding.act.health': 'Tu salud',
  'onboarding.act.plan': 'Tu plan',

  // ── Shared buttons ───────────────────────────────────────────────────────
  'onboarding.cta.next': 'Siguiente',
  'onboarding.cta.continue': 'Continuar',
  'onboarding.cta.done': 'Listo',
  'onboarding.cta.skip': 'Omitir',
  'onboarding.cta.skipForNow': 'Omitir por ahora',
  'onboarding.cta.checking': 'Comprobando…',
  'onboarding.cta.applyCode': 'Aplicar código',
  'onboarding.cta.startPlan': 'Empezar mi plan',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Corre sin dudar de cada paso',
  'onboarding.intro.blurb': 'Un plan diario que cambia cuando cambian tus piernas.',
  'onboarding.intro.greeting': 'Hola, soy Walkito',
  'onboarding.intro.headline': 'Vamos a ver por qué todavía te duele.',
  'onboarding.intro.cta': 'Continuar con Apple',
  'onboarding.intro.footnote': '~2 min de configuración',
  'onboarding.intro.signInFailed': 'El inicio de sesión no se completó. Inténtalo otra vez.',
  'onboarding.intro.emailCta': 'Iniciar sesión con correo',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Iniciar sesión',
  'onboarding.email.blurb': 'Usa el correo y la contraseña de tu cuenta.',
  'onboarding.email.address': 'Correo',
  'onboarding.email.password': 'Contraseña',
  'onboarding.email.submit': 'Iniciar sesión',
  'onboarding.email.submitting': 'Iniciando sesión…',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.name.title': '¿Cómo quieres\nque te llamemos?',
  'onboarding.name.blurb':
    'Todo lo que viene después se escribe para ti, no para corredores en general.',
  'onboarding.name.placeholder': 'p. ej. Alex',

  // ── Sex ──────────────────────────────────────────────────────────────────
  'onboarding.sex.title': '¿Hombre o mujer, {name}?',
  'onboarding.sex.blurb':
    'La tolerancia a la carga y las lesiones típicas cambian, y el plan también.',
  'onboarding.sex.female': 'Mujer',
  'onboarding.sex.male': 'Hombre',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': '¿Qué tipo de atleta eres, {name}?',
  'onboarding.runner.blurb':
    'De aquí parte tu plan. Quedarte corto solo hace que la semana uno sea demasiado fácil.',
  'onboarding.runner.new': 'Estoy empezando',
  'onboarding.runner.casual': 'Ocasional',
  'onboarding.runner.regular': 'Regular',
  'onboarding.runner.racing': 'Preparo una carrera',
  'onboarding.runner.serious': 'Me lo tomo en serio',

  // ── Age ──────────────────────────────────────────────────────────────────
  'onboarding.age.title': '¿Cuántos años tienes?',
  'onboarding.age.blurb':
    'Los tendones se adaptan más despacio con la edad. Esto marca el ritmo al que crece el plan.',
  'onboarding.age.years': 'años',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'Un poco más sobre ti, {name}',
  'onboarding.body.blurb': 'Los tendones cargan con tu peso. Esto fija tu carga inicial.',
  'onboarding.body.kg': 'kg',
  'onboarding.body.lb': 'lb',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': '¿Con qué talla corres, {name}?',
  'onboarding.size.blurb':
    'La talla del calzado equivale a la longitud de la palanca que mueve tu gemelo.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, ¿hacia dónde trabajas?',
  'onboarding.goal.blurb': 'Elige lo que más importa ahora mismo. Puedes cambiarlo después.',
  'onboarding.goal.painfree': 'Correr sin dolor',
  'onboarding.goal.race': 'Preparar una carrera',
  'onboarding.goal.consistent': 'Correr con más constancia',
  'onboarding.goal.stronger': 'Fortalecer las piernas',
  'onboarding.goal.injuryfree': 'Evitar lesiones',

  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': '¿Dónde te suele doler, {name}?',
  'onboarding.pain.blurb': 'Toca los puntos de la pierna, hasta {count}.',
  'onboarding.pain.full': 'Hasta {count} a la vez. Toca uno para cambiarlo.',
  'onboarding.pain.none': 'Ahora no me duele nada',

  'onboarding.side.title': '¿De qué lado, {name}?',
  'onboarding.side.blurb': 'Las pruebas comparan una pierna con la otra, así que necesitamos saber con cuál trabajamos.',
  'onboarding.side.left': 'Izquierdo',
  'onboarding.side.right': 'Derecho',
  'onboarding.side.both': 'Ambos',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': '¿Qué carga tus piernas, {name}?',
  'onboarding.sport.blurb': 'Esto decide cómo se plantean las siguientes preguntas.',
  'onboarding.sport.running': 'Correr',
  'onboarding.sport.tennis': 'Tenis',
  'onboarding.sport.gym': 'Gimnasio',
  'onboarding.sport.football': 'Fútbol',
  'onboarding.sport.basketball': 'Baloncesto',
  'onboarding.sport.cycling': 'Ciclismo',
  'onboarding.sport.hiking': 'Senderismo',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.title': '¿Cuánto haces ahora mismo?',
  'onboarding.load.blurb': 'Tu semana real de ahora, no la mejor que has tenido.',
  'onboarding.load.blurbMonth': 'Tu mes real de ahora, no el mejor que has tenido.',
  'onboarding.load.titleRunning': '¿Cuánto corres ahora, {name}?',
  'onboarding.load.titleTennis': '¿Cuánto tiempo pasas en pista, {name}?',
  'onboarding.load.blurbTennis': 'Partidos y entrenamientos juntos: la semana real.',
  'onboarding.load.titleGym': '¿Cuánto entrenas ahora, {name}?',
  'onboarding.load.blurbGym': 'Tiempo bajo carga, no tiempo en el gimnasio.',
  'onboarding.load.titleFootball': '¿Cuánto juegas ahora, {name}?',
  'onboarding.load.blurbFootball': 'Partidos y entrenamientos juntos: la semana real.',
  'onboarding.load.titleBasketball': '¿Cuánto juegas ahora, {name}?',
  'onboarding.load.blurbBasketball': 'Partidos y sesiones juntos: la semana real.',
  'onboarding.load.titleCycling': '¿Cuánto sales en bici, {name}?',
  'onboarding.load.titleHiking': '¿Cuánto sales a caminar, {name}?',
  'onboarding.load.km0': '0–5 {unit}',
  'onboarding.load.km1': '5–15 {unit}',
  'onboarding.load.km2': '15–30 {unit}',
  'onboarding.load.km3': '30–50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'km',
  'onboarding.load.hours0': 'Menos de 1 hora',
  'onboarding.load.hours1': '1–3 horas',
  'onboarding.load.hours2': '3–5 horas',
  'onboarding.load.hours3': '5–8 horas',
  'onboarding.load.hours4': '8+ horas',
  'onboarding.load.perWeek': 'por semana',
  'onboarding.load.runsPerWeek': 'Salidas por semana',
  'onboarding.load.sessionsPerWeek': 'Sesiones por semana',
  'onboarding.load.ridesPerWeek': 'Salidas en bici por semana',
  'onboarding.load.hikesPerMonth': 'Caminatas al mes',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': '¿Qué te cuesta más ahora, {name}?',
  'onboarding.challenge.blurb': 'Hasta dos. El plan se inclina hacia lo que elijas.',
  'onboarding.challenge.painfree': 'Mantenerme sin dolor',
  'onboarding.challenge.back': 'Volver a correr',
  'onboarding.challenge.distance': 'Aumentar la distancia',
  'onboarding.challenge.recovery': 'Recuperarme más rápido',
  'onboarding.challenge.strength': 'Ponerme más fuerte',
  'onboarding.challenge.injury': 'Evitar otra lesión',

  'onboarding.source.title': '¿Cómo conociste Walkito?',
  'onboarding.source.blurb': 'Un toque. Nos ayuda a llegar a gente como tú.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'Me lo recomendó alguien',
  'onboarding.source.appStore': 'Buscando en la App Store',
  'onboarding.source.google': 'Búsqueda en Google',
  'onboarding.source.other': 'En otro sitio',
  'onboarding.challenge.swapped': 'Solo {count} a la vez: se quitó «{label}».',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Conecta tus datos de Salud',
  'onboarding.health.blurb': 'Para que tu plan parta de lo que de verdad has estado haciendo.',
  'onboarding.health.askNamed': '¡Ponme al día, {name}!',
  'onboarding.health.ask': '¡Ponme al día!',
  'onboarding.health.askBlurb':
    'Walkito lee tus pasos, tu energía y tu frecuencia cardiaca para que el plan parta de lo que de verdad has hecho, no de lo que pensabas hacer.',
  'onboarding.health.steps': 'Pasos',
  'onboarding.health.calories': 'Energía activa',
  'onboarding.health.heartRate': 'Frecuencia cardiaca',
  'onboarding.health.notShared': 'No compartido',
  'onboarding.health.thousands': '{value} k',
  'onboarding.health.kcal': '{value} kcal',
  'onboarding.health.bpm': '{value} ppm',
  'onboarding.health.connect': 'Conectar con Salud',
  'onboarding.health.opening': 'Abriendo Salud…',
  'onboarding.health.promise': 'Tus datos de salud nunca salen de este dispositivo.',
  'onboarding.health.unavailable': 'Salud no está disponible aquí: puedes seguir sin ello.',
  'onboarding.health.declined': 'Se denegó el acceso a Salud. Tu plan funcionará igual.',
  'onboarding.health.empty': 'Conectado, todavía sin datos. Se irán llenando según te muevas.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': '¿Llevas reloj?',
  'onboarding.watch.blurb': 'Solo para saber si hay algo que conectar.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Ya funciona todo',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'Un interruptor que activar',
  'onboarding.watch.none': 'Sin reloj',
  'onboarding.watch.noneCaption': 'Con el teléfono en el bolsillo basta',

  // ── Watch sync ───────────────────────────────────────────────────────────
  'onboarding.watchSync.title': 'Activa la sincronización con Salud',
  'onboarding.watchSync.blurb': 'Un interruptor dentro de la app que ya usas.',
  'onboarding.watchSync.open': 'Abrir {app}',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Abre Garmin Connect y ve a Más.',
  'onboarding.watchSync.garmin2': 'Toca Ajustes y luego Apple Salud.',
  'onboarding.watchSync.garmin3': 'Activa las categorías que quieras compartir.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Abre Whoop y toca More.',
  'onboarding.watchSync.whoop2': 'Abre App Settings y luego Integrations.',
  'onboarding.watchSync.whoop3': 'Toca Apple Health y actívalo.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Activa las notificaciones',
  'onboarding.notify.blurb': 'Para que tu plan pueda avisarte cuando te necesita.',
  'onboarding.notify.askNamed': '{name}, no tienes que hacerlo a solas',
  'onboarding.notify.ask': 'No tienes que hacerlo a solas',
  'onboarding.notify.askBlurb':
    'Un plan solo funciona si aparece. Deja que Walkito te diga cuándo el día trae sesión.',
  'onboarding.notify.promise1': 'Un aviso los días que tu plan tiene sesión',
  'onboarding.notify.promise2': 'Un apunte cuando cambie lo que vas a hacer',
  'onboarding.notify.promise3': 'Nada más. Sin rachas que te hagan sentir culpable.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'ahora',
  'onboarding.notify.bannerBody':
    'Hoy toca fuerza de pie: 7 minutos. Tus espinillas te lo agradecerán.',
  'onboarding.notify.turnOn': 'Activar notificaciones',
  'onboarding.notify.opening': 'Abriendo…',
  'onboarding.notify.notNow': 'Ahora no',
  'onboarding.notify.declined': 'Sin problema: puedes activarlas más tarde en Ajustes.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Construyendo tu plan',
  'onboarding.building.blurb': 'Plegando todo lo que me has contado en la semana uno.',
  'onboarding.building.line1': 'Conociéndote',
  'onboarding.building.line3': 'Tu plan está listo',
  'onboarding.building.cta': 'Empezar a entrenar',
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  'onboarding.pattern.heel': 'Es el patrón más común que existe. También el que responde más rápido.',
  'onboarding.pattern.foot': 'El arco no es débil por sí solo. Lo que lo sostiene, sí.',
  'onboarding.pattern.achilles':
    'La carga subió más rápido de lo que el tendón se adaptó. Eso tiene arreglo.',
  'onboarding.pattern.shin':
    'El volumen adelantó a tus piernas. El plan da un paso atrás y luego construye.',
  'onboarding.pattern.calf': 'La pantorrilla tira de todo lo que hay debajo. Suéltala y lo demás la sigue.',
  'onboarding.pattern.none': 'Estás aquí antes de que duela. Esta es la forma barata de hacerlo.',
  'onboarding.building.promise': 'Primeros cambios: del día 12 al 16.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Dolor de talón',
  'onboarding.reflection.painFoot': 'Dolor de pie',
  'onboarding.reflection.painAchilles': 'Dolor de Aquiles',
  'onboarding.reflection.painShin': 'Dolor de espinilla',
  'onboarding.reflection.painCalf': 'Dolor de pantorrilla',
  'onboarding.reflection.volumeWeekly': '{band} por semana',
  'onboarding.reflection.volumeMonthly': '{band} al mes',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.plan.title': 'Tu plan',
  'onboarding.plan.blurb': 'Construido con tus respuestas.',
  'onboarding.plan.meta': {
    one: '{count} semana · {sessions} sesiones por semana',
    other: '{count} semanas · {sessions} sesiones por semana',
  },
  'onboarding.plan.week': 'Semana {n}',
  'onboarding.plan.weeks': 'Semanas {from}–{to}',
  'onboarding.plan.phaseSettle': 'calmar la irritación',
  'onboarding.plan.phaseBuild': 'construir el arco',
  'onboarding.plan.phaseLoad': 'volver a carga completa',
  'onboarding.plan.reflectionBoth':
    '{pain} y {volume}. Las dos primeras semanas calman las cosas antes de cargar nada.',
  'onboarding.plan.reflectionPain':
    '{pain}. Las dos primeras semanas calman las cosas antes de cargar nada.',
  'onboarding.plan.reflectionVolume':
    '{volume}. Las dos primeras semanas construyen una base antes de cargar nada.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Hagamos un contrato, {name}',
  'onboarding.contract.blurb': 'No conmigo. Contigo.',
  'onboarding.contract.hint': 'Firma aquí',
  'onboarding.contract.stampTop': '★ WALKITO ★',
  'onboarding.contract.stampText': 'COMPROMISO',
  'onboarding.contract.stampLine1': 'CORRER',
  'onboarding.contract.stampLine2': 'SIN DOLOR',
  'onboarding.contract.noteNamed': '{name}, tu firma se queda en este dispositivo.',
  'onboarding.contract.note': 'Tu firma se queda en este dispositivo.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Te damos la bienvenida, {name}',
  'onboarding.social.welcome': 'Te damos la bienvenida',
  'onboarding.social.crest': 'Únete a más de 40.000 corredores\nque entrenan sin dolor',
  'onboarding.testimonial1.before': 'Seis meses con dolor de espinilla y corrí',
  'onboarding.testimonial1.lead': 'un 10k sin dolor',
  'onboarding.testimonial1.after': ' a las ocho semanas.',
  'onboarding.testimonial1.name': 'Marta K.',
  'onboarding.testimonial2.before': 'Encontró',
  'onboarding.testimonial2.lead': 'los gemelos, no las rodillas.',
  'onboarding.testimonial2.after': ' El trabajo de fuerza por fin tuvo sentido.',
  'onboarding.testimonial2.name': 'Daniel R.',
  'onboarding.testimonial3.before': 'Volví de una lesión de Aquiles',
  'onboarding.testimonial3.lead': 'sin perder la distancia',
  'onboarding.testimonial3.after': ' que ya tenía.',
  'onboarding.testimonial3.name': 'Priya S.',

  // ── Outlook ──────────────────────────────────────────────────────────────
  'onboarding.outlook.title': '{name}, esto es lo que viene',
  'onboarding.outlook.blurb': 'Lo que te duele hoy y lo que el plan hace al respecto.',
  'onboarding.outlook.blurbNone': 'Tus piernas hoy y adónde las lleva el plan.',
  'onboarding.outlook.today': 'Hoy',
  'onboarding.outlook.month': 'Mes {n}',
  'onboarding.outlook.lessPain': 'menos dolor',
  'onboarding.outlook.stronger': 'más fuerte',
  'onboarding.outlook.footnote': 'Progreso típico siguiendo el plan. El tuyo puede variar.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': '¿Tienes un código de invitación?',
  'onboarding.referral.blurb': 'Introdúcelo y consigue un {percent}% de descuento en tu plan.',
  'onboarding.referral.applied': '{percent}% de descuento aplicado.',
  'onboarding.referral.unknown': 'No conocemos ese código. Revísalo e inténtalo otra vez.',
  'onboarding.referral.own': 'Ese es el tuyo. Mándaselo a otra persona.',
  'onboarding.referral.already': 'Ya has usado un código.',
  'onboarding.referral.unavailable': 'Las invitaciones no están disponibles en esta versión.',
  'onboarding.referral.failed': 'No se pudo contactar con el servidor. Inténtalo en un momento.',

  // ── The note at the end of onboarding ────────────────────────────────────
  // Черновик — см. комментарий в en/onboarding.ts.
  'onboarding.note.title': 'Unas palabras de nosotros',
  'onboarding.note.body1':
    'Hola, soy Rahim. Mi amigo y yo hacemos Walkito entre los dos. A mucha gente le duele el talón: plantillas, unas terceras zapatillas - y por las mañanas siguen cojeando. Los ejercicios que ayudan se conocen de sobra. Nadie te dice cuáles ni cuántos. Eso es lo que hicimos.',
  'onboarding.note.body2':
    'Estaría genial que nos dejaras una reseña. Nos importa de verdad. Gracias por estar aquí.',
  'onboarding.note.signature': 'Rahim y Rahman',
  'onboarding.note.cta': 'Valorar Walkito',
};
