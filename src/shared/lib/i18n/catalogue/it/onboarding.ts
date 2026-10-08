/**
 * Onboarding, Italian.
 *
 * `tu` throughout. Italian marks gender on adjectives and participles, and this
 * flow may not know the user's sex when it speaks, so the copy is phrased to
 * stay invariable: «ti diamo il benvenuto» rather than «benvenuto/benvenuta»,
 * and the notify headline says «facciamolo insieme» rather than «non sei
 * solo/sola».
 *
 * Number ranges use a plain hyphen («0-5 km»), never an en dash.
 *
 * The `many` plural form is left out everywhere: in Italian it is the whole-
 * millions form, and no count in this flow reaches a million.
 */
export const ONBOARDING_IT = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  'onboarding.act.about': 'Su di te',
  'onboarding.act.sport': 'Il tuo sport',
  'onboarding.act.health': 'La tua salute',
  'onboarding.act.plan': 'Il tuo piano',

  // ── Shared buttons ───────────────────────────────────────────────────────
  'onboarding.cta.next': 'Avanti',
  'onboarding.cta.continue': 'Continua',
  'onboarding.cta.done': 'Fatto',
  'onboarding.cta.skip': 'Salta',
  'onboarding.cta.skipForNow': 'Salta per ora',
  'onboarding.cta.checking': 'Verifica in corso…',
  'onboarding.cta.applyCode': 'Applica il codice',
  'onboarding.cta.startPlan': 'Inizia il mio piano',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Corri senza dubitare di ogni passo',
  'onboarding.intro.blurb': 'Un piano quotidiano che cambia quando cambiano le tue gambe.',
  'onboarding.intro.greeting': 'Ciao, sono Walkito',
  'onboarding.intro.headline': 'Scopriamo perché fa ancora male.',
  'onboarding.intro.cta': 'Continua con Apple',
  'onboarding.intro.ctaGoogle': 'Continua con Google',
  'onboarding.intro.footnote': 'Circa 3 minuti',
  'onboarding.intro.signInFailed': 'L’accesso non è stato completato. Riprova.',
  'onboarding.intro.emailCta': 'Accedi con email',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Accedi',
  'onboarding.email.blurb': 'Usa l’email e la password del tuo account.',
  'onboarding.email.address': 'Email',
  'onboarding.email.password': 'Password',
  'onboarding.email.submit': 'Accedi',
  'onboarding.email.submitting': 'Accesso in corso…',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.name.title': 'Come vuoi\nche ti chiamiamo?',
  'onboarding.name.blurb':
    'Tutto quello che segue viene scritto per te, non per i runner in generale.',
  'onboarding.name.placeholder': 'es. Alex',

  // ── Sex ──────────────────────────────────────────────────────────────────
  'onboarding.sex.title': 'Uomo o donna, {name}?',
  'onboarding.sex.blurb':
    'La tolleranza al carico e gli infortuni tipici cambiano, e così anche il piano.',
  'onboarding.sex.female': 'Donna',
  'onboarding.sex.male': 'Uomo',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'Che tipo di atleta sei, {name}?',
  'onboarding.runner.blurb':
    'Il tuo piano parte da qui. Sottovalutarti rende solo la prima settimana troppo facile.',
  'onboarding.runner.new': 'Sto iniziando ora',
  'onboarding.runner.casual': 'Occasionale',
  'onboarding.runner.regular': 'Regolare',
  'onboarding.runner.racing': 'Mi preparo per qualcosa',
  'onboarding.runner.serious': 'Lo prendo sul serio',

  // ── Age ──────────────────────────────────────────────────────────────────
  'onboarding.age.title': 'Quanti anni hai?',
  'onboarding.age.blurb':
    'Con l’età i tendini si adattano più lentamente. Questo regola la velocità con cui cresce il piano.',
  'onboarding.age.years': 'anni',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'Ancora qualcosa su di te, {name}',
  'onboarding.body.blurb': 'I tendini portano il tuo peso. Questo fissa il tuo carico di partenza.',
  'onboarding.body.kg': 'kg',
  'onboarding.body.lb': 'lb',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': 'Che numero di scarpe porti per correre, {name}?',
  'onboarding.size.blurb':
    'Il numero di scarpe sta per la lunghezza della leva che il tuo polpaccio deve muovere.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, a cosa stai lavorando?',
  'onboarding.goal.blurb': 'Scegli quello che conta di più adesso. Puoi cambiarlo più avanti.',
  'onboarding.goal.painfree': 'Correre senza dolore',
  'onboarding.goal.race': 'Prepararmi per una gara',
  'onboarding.goal.consistent': 'Correre con più costanza',
  'onboarding.goal.stronger': 'Rinforzare le gambe',
  'onboarding.goal.injuryfree': 'Evitare infortuni',
  'onboarding.goal.flatfeet': 'Arcate più forti',
  'onboarding.goal.ankles': 'Caviglie più stabili',
  'onboarding.goal.jump': 'Saltare più in alto',
  'onboarding.goal.allday': 'Reggere in piedi tutto il giorno',
  'onboarding.goal.comeback': 'Ripartire dopo un infortunio',
  'onboarding.goal.steady': 'Camminare con sicurezza',
  'onboarding.days.title': 'Quanti giorni a settimana, {name}?',
  'onboarding.days.blurb': 'Sessioni brevi. I giorni di riposo fanno parte del piano, non sono un buco.',
  'onboarding.days.days3': '3 giorni',
  'onboarding.days.days3Caption': 'Un inizio tranquillo',
  'onboarding.days.days5': '5 giorni',
  'onboarding.days.days5Caption': 'Consigliato',
  'onboarding.days.days7': 'Ogni giorno',
  'onboarding.days.days7Caption': 'Breve e quotidiano',
  'onboarding.minutes.title': 'Quanto dura ogni sessione?',
  'onboarding.minutes.blurb': 'Puoi cambiarlo ogni giorno - anche i giorni pieni contano.',
  'onboarding.minutes.min3': '3 minuti',
  'onboarding.minutes.min3Caption': 'Anche nei giorni pieni',
  'onboarding.minutes.min5': '5 minuti',
  'onboarding.minutes.min5Caption': 'Consigliato',
  'onboarding.minutes.min10': '10 minuti',
  'onboarding.minutes.min10Caption': 'Per progredire più in fretta',
  'onboarding.equipment.title': 'Cosa hai a casa?',
  'onboarding.equipment.blurb': 'Scegli tutto quello che hai.',
  'onboarding.equipment.step': 'Un gradino o delle scale',
  'onboarding.equipment.band': 'Elastico',
  'onboarding.equipment.towel': 'Asciugamano',
  'onboarding.equipment.pillow': 'Cuscino',
  'onboarding.equipment.ball': 'Pallina da massaggio',
  'onboarding.equipment.none': 'Niente di questo',
  'onboarding.reminder.title': 'Quando te lo ricordiamo?',
  'onboarding.reminder.blurb': 'Un promemoria al giorno. Scegli un’ora in cui di solito hai cinque minuti liberi.',
  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Dove ti fa male di solito, {name}?',
  'onboarding.pain.blurb': 'Tocca i punti sulla gamba, fino a {count}.',
  'onboarding.pain.full': 'Fino a {count} alla volta. Toccane uno per cambiarlo.',
  'onboarding.pain.none': 'Ora non mi fa male niente',
  'onboarding.pain.disclaimer':
    'Non è un consiglio medico. Se il dolore è acuto, peggiora o arriva con gonfiore o intorpidimento, consulta un medico.',

  'onboarding.side.title': 'Quale lato, {name}?',
  'onboarding.side.blurb': 'I test confrontano una gamba con l’altra, quindi dobbiamo sapere su quale lavoriamo.',
  'onboarding.side.left': 'Sinistro',
  'onboarding.side.right': 'Destro',
  'onboarding.side.both': 'Entrambi',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': 'Cosa carica le tue gambe, {name}?',
  'onboarding.sport.blurb': 'Questo decide come vengono poste le prossime domande.',
  'onboarding.sport.running': 'Corsa',
  'onboarding.sport.tennis': 'Tennis',
  'onboarding.sport.gym': 'Palestra',
  'onboarding.sport.football': 'Calcio',
  'onboarding.sport.basketball': 'Basket',
  'onboarding.sport.cycling': 'Ciclismo',
  'onboarding.sport.hiking': 'Escursionismo',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.title': 'Quanto fai in questo periodo?',
  'onboarding.load.blurb': 'La tua settimana reale di adesso, non la migliore.',
  'onboarding.load.blurbMonth': 'Il tuo mese reale di adesso, non il migliore.',
  'onboarding.load.titleRunning': 'Quanto corri a settimana?',
  'onboarding.load.titleTennis': 'Quanto tempo passi in campo, {name}?',
  'onboarding.load.blurbTennis': 'Partite e allenamenti insieme - la settimana reale.',
  'onboarding.load.titleGym': 'Quanto ti alleni in questo periodo, {name}?',
  'onboarding.load.blurbGym': 'Tempo sotto carico, non tempo passato in palestra.',
  'onboarding.load.titleFootball': 'Quanto giochi in questo periodo, {name}?',
  'onboarding.load.blurbFootball': 'Partite e allenamenti insieme - la settimana reale.',
  'onboarding.load.titleBasketball': 'Quanto giochi in questo periodo, {name}?',
  'onboarding.load.blurbBasketball': 'Partite e allenamenti insieme - la settimana reale.',
  'onboarding.load.titleCycling': 'Quanto pedali in questo periodo, {name}?',
  'onboarding.load.titleHiking': 'Quanto cammini in montagna, {name}?',
  'onboarding.load.km0': '0-5 {unit}',
  'onboarding.load.km1': '5-15 {unit}',
  'onboarding.load.km2': '15-30 {unit}',
  'onboarding.load.km3': '30-50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'km',
  'onboarding.load.hours0': 'Meno di 1 ora',
  'onboarding.load.hours1': '1-3 ore',
  'onboarding.load.hours2': '3-5 ore',
  'onboarding.load.hours3': '5-8 ore',
  'onboarding.load.hours4': '8+ ore',
  'onboarding.load.perWeek': 'a settimana',
  'onboarding.load.runsPerWeek': 'Uscite di corsa a settimana',
  'onboarding.load.sessionsPerWeek': 'Sessioni a settimana',
  'onboarding.load.ridesPerWeek': 'Uscite in bici a settimana',
  'onboarding.load.hikesPerMonth': 'Escursioni al mese',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': 'Cosa ti pesa di più adesso, {name}?',
  'onboarding.challenge.blurb': 'Fino a due. Il piano si orienta su quello che scegli.',
  'onboarding.challenge.painfree': 'Restare senza dolore',
  'onboarding.challenge.back': 'Tornare a correre',
  'onboarding.challenge.distance': 'Aumentare la distanza',
  'onboarding.challenge.recovery': 'Recuperare più in fretta',
  'onboarding.challenge.strength': 'Diventare più forte',
  'onboarding.challenge.injury': 'Evitare un altro infortunio',

  'onboarding.source.title': 'Come hai conosciuto Walkito?',
  'onboarding.source.blurb': 'Un tocco. Ci aiuta a raggiungere persone come te.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'Me ne ha parlato qualcuno',
  'onboarding.source.appStore': 'Cercando nell’App Store',
  'onboarding.source.playStore': 'Cercando su Google Play',
  'onboarding.source.google': 'Ricerca su Google',
  'onboarding.source.other': 'Da un’altra parte',
  'onboarding.challenge.swapped': 'Solo {count} alla volta - ho tolto «{label}».',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Collega i tuoi dati di Salute',
  'onboarding.health.blurb': 'Così il tuo piano parte da quello che hai fatto davvero.',
  'onboarding.health.askNamed': 'Aggiornami, {name}!',
  'onboarding.health.ask': 'Aggiornami!',
  'onboarding.health.askBlurbAndroid':
    'Walkito legge i tuoi passi, le tue corse e il tuo sonno, così il piano parte da quello che hai fatto davvero - non da quello che volevi fare.',
  'onboarding.health.askBlurb':
    'Walkito legge i tuoi passi, l’energia e la frequenza cardiaca, così il piano parte da quello che hai fatto davvero - non da quello che volevi fare.',
  'onboarding.health.steps': 'Passi',
  'onboarding.health.calories': 'Energia attiva',
  'onboarding.health.heartRate': 'Frequenza cardiaca',
  'onboarding.health.notShared': 'Non condiviso',
  'onboarding.health.thousands': '{value}k',
  'onboarding.health.kcal': '{value} kcal',
  'onboarding.health.bpm': '{value} bpm',
  'onboarding.health.connect': 'Collega a Salute',
  'onboarding.health.opening': 'Apertura di Salute…',
  'onboarding.health.connectAndroid': 'Collega Health Connect',
  'onboarding.health.openingAndroid': 'Apertura di Health Connect…',
  'onboarding.health.promise': 'I tuoi dati di salute non lasciano mai questo dispositivo.',
  'onboarding.health.unavailable': 'Salute non è disponibile qui - puoi andare avanti senza.',
  'onboarding.health.declined': 'L’accesso a Salute è stato negato. Il tuo piano funziona anche senza.',
  'onboarding.health.empty': 'Collegato - ancora nessun dato. Si riempirà man mano che ti muovi.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': 'Porti un orologio?',
  'onboarding.watch.blurb': 'Solo per sapere se c’è qualcosa da collegare.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Funziona già tutto',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'Basta attivare un interruttore',
  'onboarding.watch.none': 'Nessun orologio',
  'onboarding.watch.noneCaption': 'Basta il telefono in tasca',

  // ── Watch sync ───────────────────────────────────────────────────────────
  // Garmin Connect is localised into Italian; Whoop is not, so its menu names
  // stay in English, as Spanish does.
  'onboarding.watchSync.title': 'Attiva la sincronizzazione con Salute',
  'onboarding.watchSync.blurb': 'Un interruttore dentro l’app che usi già.',
  'onboarding.watchSync.open': 'Apri {app}',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Apri Garmin Connect e vai su Altro.',
  'onboarding.watchSync.garmin2': 'Tocca Impostazioni, poi Apple Salute.',
  'onboarding.watchSync.garmin3': 'Attiva le categorie che vuoi condividere.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Apri Whoop e tocca More.',
  'onboarding.watchSync.whoop2': 'Apri App Settings, poi Integrations.',
  'onboarding.watchSync.whoop3': 'Tocca Apple Health e attivalo.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Attiva le notifiche',
  'onboarding.notify.blurb': 'Così il tuo piano può avvisarti quando ha bisogno di te.',
  'onboarding.notify.askNamed': '{name}, facciamolo insieme',
  'onboarding.notify.ask': 'Facciamolo insieme',
  'onboarding.notify.askBlurb': 'Solo nei giorni in cui il tuo piano ha una sessione.',
  'onboarding.notify.promise1': 'Un promemoria nei giorni in cui il tuo piano ha una sessione',
  'onboarding.notify.promise2': 'Un avviso quando cambia quello che stai facendo',
  'onboarding.notify.promise3': 'E ogni tanto uno sconto - niente di più.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'ora',
  'onboarding.notify.bannerBody': 'Oggi forza del piede - 7 minuti. Le tue tibie ti ringrazieranno.',
  'onboarding.notify.turnOn': 'Attiva le notifiche',
  'onboarding.notify.opening': 'Apertura…',
  'onboarding.notify.notNow': 'Non ora',
  'onboarding.notify.declined': 'Nessun problema - puoi attivarle più tardi nelle Impostazioni.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Sto costruendo il tuo piano',
  'onboarding.building.blurb': 'Sto mettendo tutto quello che mi hai detto nella prima settimana.',
  'onboarding.building.line1': 'Ti sto conoscendo',
  'onboarding.building.line3': 'Il tuo piano è pronto',
  'onboarding.building.cta': 'Inizia ad allenarti',
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  'onboarding.pattern.heel': 'È lo schema più comune che ci sia. Ed è anche quello che risponde più in fretta.',
  'onboarding.pattern.foot': 'L’arco non è debole di per sé. È debole ciò che lo sostiene.',
  'onboarding.pattern.achilles':
    'Il carico è cresciuto più in fretta di quanto il tendine si sia adattato. Si può sistemare.',
  'onboarding.pattern.shin':
    'Il volume ha superato le tue gambe. Il piano fa un passo indietro, poi costruisce.',
  'onboarding.pattern.calf': 'Il polpaccio tira tutto ciò che sta sotto. Scioglilo e il resto segue.',
  'onboarding.pattern.none': 'Sei qui prima che faccia male. È il modo più economico di farlo.',
  'onboarding.building.promise': 'Primi cambiamenti: dal giorno 12 al 16.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Dolore al tallone',
  'onboarding.reflection.painFoot': 'Dolore al piede',
  'onboarding.reflection.painAchilles': 'Dolore all’Achille',
  'onboarding.reflection.painShin': 'Dolore alla tibia',
  'onboarding.reflection.painCalf': 'Dolore al polpaccio',
  'onboarding.reflection.volumeWeekly': '{band} a settimana',
  'onboarding.reflection.volumeMonthly': '{band} al mese',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.sendPlan.title': 'Ti mandiamo il piano\nper email?',
  'onboarding.sendPlan.blurb': 'Facoltativo. Poche email brevi nelle prime due settimane, e puoi disattivarle quando vuoi.',
  'onboarding.sendPlan.placeholder': 'tu@esempio.com',
  'onboarding.sendPlan.send': 'Invia',
  'onboarding.plan.title': 'Il tuo piano',
  'onboarding.plan.blurb': 'Costruito sulle tue risposte.',
  'onboarding.plan.wordmarkMomentum': 'Slancio',
  'onboarding.plan.wordmarkFoundations': 'Fondamenta',
  'onboarding.plan.meta': {
    one: '{count} sessione a settimana',
    other: '{count} sessioni a settimana',
  },
  'onboarding.plan.week': 'Settimana {n}',
  'onboarding.plan.weeks': 'Settimane {from}-{to}',
  'onboarding.plan.weeksOn': 'Settimane {from}+',
  'onboarding.plan.phaseSettle': 'calmare l’irritazione',
  'onboarding.plan.phaseBuild': 'costruire l’arco',
  'onboarding.plan.phaseLoad': 'tornare al carico pieno',
  'onboarding.plan.reflectionBoth':
    '{pain} e {volume}. Le prime due settimane calmano le cose prima di qualsiasi carico.',
  'onboarding.plan.reflectionPain':
    '{pain}. Le prime due settimane calmano le cose prima di qualsiasi carico.',
  'onboarding.plan.reflectionVolume':
    '{volume}. Le prime due settimane costruiscono una base prima di qualsiasi carico.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Facciamo un patto, {name}',
  'onboarding.contract.blurb': 'Non con me. Con te.',
  'onboarding.contract.hint': 'Firma qui',
  'onboarding.contract.stampTop': '★ Walkito ★',
  'onboarding.contract.stampText': 'Impegno',
  'onboarding.contract.stampLine1': 'Giorno uno',
  'onboarding.contract.stampLine2': 'Iniziato',
  'onboarding.contract.noteNamed': '{name}, la tua firma resta su questo dispositivo.',
  'onboarding.contract.note': 'La tua firma resta su questo dispositivo.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Ti diamo il benvenuto, {name}',
  'onboarding.social.welcome': 'Ti diamo il benvenuto',
  'onboarding.social.crest': 'Pochi minuti al giorno.\nNiente palestra, niente tentativi.',
  'onboarding.testimonial1.before': 'Dici come sta il piede e',
  'onboarding.testimonial1.lead': 'la sessione di oggi si adatta',
  'onboarding.testimonial1.after': ' di conseguenza.',
  'onboarding.testimonial1.name': 'Ogni mattina',
  'onboarding.testimonial2.before': 'Esercizi brevi e guidati da fare',
  'onboarding.testimonial2.lead': 'a casa o al lavoro',
  'onboarding.testimonial2.after': ' - bastano un pavimento e un muro.',
  'onboarding.testimonial2.name': 'Ogni sessione',
  'onboarding.testimonial3.before': 'Un retest di un minuto',
  'onboarding.testimonial3.lead': 'mostra cosa è cambiato davvero',
  'onboarding.testimonial3.after': ', con i numeri invece che con le sensazioni.',
  'onboarding.testimonial3.name': 'Ogni due settimane',

  // ── Outlook ──────────────────────────────────────────────────────────────
  'onboarding.outlook.title': '{name}, ecco dove porta tutto questo',
  'onboarding.outlook.blurb': 'Cosa fa male oggi, e cosa fa il piano a riguardo.',
  'onboarding.outlook.blurbNone': 'Le tue gambe oggi, e dove le porta il piano.',
  'onboarding.outlook.today': 'Oggi',
  'onboarding.outlook.month': 'Mese {n}',
  'onboarding.outlook.pain0': 'Dolente',
  'onboarding.outlook.pain1': 'Si assesta',
  'onboarding.outlook.pain2': 'Si allevia',
  'onboarding.outlook.pain3': 'Più calmo',
  'onboarding.outlook.strength0': 'Partenza',
  'onboarding.outlook.strength1': 'Si risveglia',
  'onboarding.outlook.strength2': 'Cresce',
  'onboarding.outlook.strength3': 'Più forte',
  'onboarding.outlook.footnote': 'Un’illustrazione di come cresce il piano, non una previsione. Ognuno recupera con i suoi tempi.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Hai un codice invito?',
  'onboarding.referral.blurb': 'Inseriscilo per avere il {percent}% di sconto sull’abbonamento annuale.',
  'onboarding.referral.applied': 'Sconto del {percent}% sull’abbonamento annuale applicato.',
  'onboarding.referral.unlocked': 'Codice accettato. Walkito Premium è attivo.',
  'onboarding.referral.unknown': 'Non conosciamo questo codice. Controllalo e riprova.',
  'onboarding.referral.own': 'Questo è il tuo. Mandalo a qualcun altro.',
  'onboarding.referral.already': 'Hai già usato un codice.',
  'onboarding.referral.unavailable': 'Gli inviti non sono disponibili in questa versione.',
  'onboarding.referral.failed': 'Impossibile raggiungere il server. Riprova tra un momento.',

  // ── The note at the end of onboarding ────────────────────────────────────
  // Draft: see the comment in en/onboarding.ts.
  'onboarding.note.title': 'Due parole da noi',
  'onboarding.note.body1':
    'Ciao, sono Rahim. Io e un mio amico facciamo Walkito, solo noi due. A tante persone fa male il tallone: plantari, un terzo paio di scarpe - e la mattina zoppicano ancora. Gli esercizi che aiutano sono ben noti. Nessuno ti dice quali, né quanti. Ed è questo che abbiamo fatto.',
  'onboarding.note.body2':
    'Ci farebbe davvero piacere se lasciassi una recensione. Per noi conta davvero. Grazie di essere qui.',
  'onboarding.note.signature': 'Rahim e Rahman',
  'onboarding.note.cta': 'Valuta Walkito',
  'onboarding.note.later': 'Non ora',
};
