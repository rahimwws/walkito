/**
 * Home, Italian.
 *
 * Two exports, mirroring `../en/home.ts`: the phrases numbers arrive in, and
 * the sentences themselves as ordered segments.
 *
 * `tu` throughout. Adjectives that would agree with the reader («seduto»,
 * «bentornato», «vicino») are avoided rather than guessed at: the app does not
 * know who is reading. Where a unit has a name in Apple's Salute app («piani»
 * for flights of stairs), that one wins, so the figure matches what the user
 * can go and check.
 *
 * **Word order is the array order.** Several lines move the metric to where
 * Italian wants it («le tue mattine sono più dure di {jump} rispetto alla
 * settimana scorsa»), and `home.thresholdHours` carries its own article in the
 * plural («oltre le 7 ore») because the slot it lands in needs one.
 *
 * Sentences that follow a full stop inside one template start with a capital
 * here, even where English writes them lowercase: `buildBrief` only restores
 * the opening capital of the whole line.
 *
 * The `many` plural form is left out everywhere: in Italian it is the
 * whole-millions form, and no count in this app reaches a million.
 *
 * **Register:** a coach. The health lines compare the person to themselves and
 * never to a norm - «sopra la tua media», never «alto», never a word for
 * limping or compensating.
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

export const HOME_IT = {
  'home.greeting.morning': 'Buongiorno',
  'home.greeting.afternoon': 'Buon pomeriggio',
  'home.greeting.evening': 'Buonasera',

  // ── The kind of work a day is ────────────────────────────────────────────
  'home.workStrength': 'forza per piede e polpaccio',
  'home.workMobility': 'stretching',
  'home.workBalance': 'lavoro di equilibrio',
  'home.workRecovery': 'recupero leggero',
  'home.fallbackMove': 'sollevamenti sui talloni',

  // ── Counted phrases ──────────────────────────────────────────────────────
  'home.minutes': { one: '{count} minuto', other: '{count} minuti' },
  'home.moves': { one: '{count} esercizio', other: '{count} esercizi' },
  'home.tests': { one: '{count} test', other: '{count} test' },
  'home.weeks': { one: '{count} settimana', other: '{count} settimane' },
  'home.points': { one: '{count} punto', other: '{count} punti' },
  'home.flights': { one: '{count} piano', other: '{count} piani' },
  'home.hoursOnFeet': { one: '{count} ora', other: '{count} ore' },
  // Lands after «superato» / «oltre», which want the article in the plural.
  'home.thresholdHours': { one: '{count} ora', other: 'le {count} ore' },
  'home.daysInARow': { one: '{count} giorno di fila', other: '{count} giorni di fila' },
  'home.dayNumber': 'giorno {count}',
  'home.dayOfPlan': 'giorno {day} di {total}',
  'home.steps': { one: '{steps} passo', other: '{steps} passi' },

  // With the preposition the verb «tornare» needs: «tornare a correre»,
  // «tornare in palestra».
  'home.backTo.running': 'a correre',
  'home.backTo.tennis': 'al tennis',
  'home.backTo.gym': 'in palestra',
  'home.backTo.football': 'al calcio',
  'home.backTo.basketball': 'al basket',
  'home.backTo.cycling': 'in bici',
  'home.backTo.hiking': 'sui sentieri',

  // ── Units ────────────────────────────────────────────────────────────────
  'home.km': '{value} km',
  'home.percent': '{value}%',
  'home.duration': '{hours} h {minutes} min',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Attività di oggi',
  'home.libraryTitle': 'Per adesso',
  'home.allDoneTitle': 'Fatto per oggi',
  'home.allDoneBlurb': 'Oggi non serve nient’altro.',
  'home.doneSummary': '{minutes} · {work}',
  'home.doneMoves': { one: '{count} esercizio fatto', other: '{count} esercizi fatti' },
  'home.doneTests': { one: '{count} test fatto', other: '{count} test fatti' },
  'home.doneStreak': 'Giorno {count} di fila',
  'home.doneStreakStart': 'La tua serie inizia oggi',
  'home.weekDoneA11y': { one: '{count} giorno fatto questa settimana', other: '{count} giorni fatti questa settimana' },
  'home.retestTask': 'Verifica',
  'home.retestTaskSub': 'Verifica · {tests}',
  'home.seeResults': 'Vedi i risultati',
  'home.nothingScheduled': 'Oggi non c’è niente in programma. Anche il riposo conta.',
  'home.markDone': 'Segna come fatto',
  'home.markNotDone': 'Segna come non fatto',
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  'home.chipSeconds': '{count} s',
  'home.chipMinutes': '{count} min',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'Oggi fa male',
  'home.noPain': 'Oggi nessun dolore',
  'home.logCheckIn': 'Registra il check-in di oggi',
  'home.checkInAgain': 'Registra di nuovo',
  'home.checkInTitle': 'Check-in di oggi',
  'home.checkInSub': 'Come va il piede?',
  'home.checkInSubMorning': 'Quanto ti hanno fatto male i primi passi di stamattina, scendendo dal letto?',
  'home.checkInSubDay': 'Come va il piede oggi?',
  'home.somethingNew': 'Qualcosa di nuovo? (gonfiore, intorpidimento, uno schiocco)',
  'home.checkInKickerMorning': 'Check-in del mattino · 10 s',
  'home.checkInKickerDay': 'Check-in del giorno · 10 s',
  'home.somethingNewTitle': 'Qualcosa di nuovo?',
  'home.somethingNewSub': 'Gonfiore, intorpidimento, uno schiocco',
  'safety.title': 'Qualcosa di nuovo?',
  'safety.sub': 'Tocca quello che vale per te adesso.',
  'safety.a1': 'Il polpaccio è gonfio, caldo o arrossato da un lato, oppure mi manca il fiato o ho dolore al petto',
  'safety.a2': 'Ho sentito uno schiocco improvviso dietro la caviglia e non riesco a stare in punta di piedi su quella gamba',
  'safety.a3': 'Ho il diabete e il piede è caldo, arrossato, gonfio o ha una ferita aperta',
  'safety.b1': 'È iniziato dopo una caduta, una storta o un colpo e non riesco a caricarci tutto il peso',
  'safety.b2': 'Riesco a indicare con un dito un punto dolente su un osso, oppure fa male se stringo i lati del tallone',
  'safety.b3': 'Mi sveglia di notte o resta forte anche a riposo',
  'safety.b4': 'Ho la febbre o non mi sento bene',
  'safety.c1': 'Bruciore, formicolio o intorpidimento al piede',
  'safety.c2': 'Mi fanno male entrambi i talloni e altre articolazioni sono gonfie o rigide al mattino',
  'safety.c3': 'Un arco si è abbassato da solo in età adulta',
  'safety.c4': 'Ho il diabete o una sensibilità ridotta ai piedi',
  'safety.c5': 'Ho fatto un’infiltrazione di cortisone nel tallone o nell’Achille nelle ultime 3 settimane',
  'safety.common': 'Dolore o andatura rigida dopo una giornata lunga? È comune con il dolore al tallone - puoi continuare.',
  'safety.none': 'Nessuno di questi',
  'safety.check': 'Fatto',
  'safety.resultA': 'Per favore, oggi non allenarti. Serve subito un medico - chiama i soccorsi o vai al pronto soccorso.',
  'safety.resultB1': 'Per favore, fallo controllare presto. Nel frattempo, vai con delicatezza.',
  'safety.resultB2': 'Vale la pena parlarne con un medico quando puoi.',
  'safety.resultNone': 'Niente di tutto questo richiede un medico adesso. Continua come previsto.',
  'safety.close': 'Chiudi',
  'home.save': 'Salva',
  'home.saved': 'Salvato',
  // Nothing here congratulates a number: meeting a seven with warmth teaches
  // people to stop reporting honestly.
  'home.ackGood': 'Bene.',
  'home.ackLogged': 'Registrato.',
  'home.ackLoggedShorter': 'Registrato. Per questo la sessione di oggi è più breve.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Dove fa male',
  'home.zonesEmpty': 'Tocca dove fa male - fino a {count}',
  'home.zonesFull': 'Fino a {count} alla volta - toccane una per cambiarla',
  'home.zonesPicked': '{zones} - poi {move}',
  'home.zoneJoin': ' · ',

  /** Names a person finds on their own leg, not labels from an anatomy chart. */
  'home.zone.calf': 'Polpaccio',
  'home.zone.soleus': 'Soleo',
  'home.zone.tibia': 'Tibia',
  'home.zone.tibAnt': 'Parte anteriore della tibia',
  'home.zone.ankle': 'Caviglia',
  'home.zone.achilles': 'Achille',
  'home.zone.heel': 'Tallone',
  'home.zone.dorsum': 'Dorso del piede',
  'home.zone.arch': 'Arco del piede',
  'home.zone.ball': 'Avampiede',
  'home.zone.toes': 'Dita del piede',
  'home.zone.innerAnkle': 'Interno della caviglia',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Dolore di oggi',
  'home.morePain': 'Più dolore',
  'home.lessPain': 'Meno dolore',
  'home.painValueA11y': '{score} su {max}, {band}',
  // Always against this person's own range, never a norm.
  'home.rangeAbove': 'Sopra il tuo intervallo abituale',
  'home.rangeBelow': 'Sotto il tuo intervallo abituale',
  'home.rangeWithin': 'Nel tuo intervallo abituale',
  'home.rangeAboveChip': 'Sopra il solito',
  'home.rangeBelowChip': 'Sotto il solito',
  'home.rangeWithinChip': 'Come al solito',
  'home.usualRangeLegend': 'Abituale {low}-{high}',
  'home.usualRangeA11y': 'Intervallo abituale, da {low} a {high}',

  /** What each score means in terms of what the pain stops you doing. They
   * describe, they do not grade. */
  'home.bandNothing': 'Niente',
  'home.bandNothingBlurb': 'Oggi nessun dolore da segnalare.',
  'home.bandBarely': 'Appena',
  'home.bandBarelyBlurb': 'Te ne dimenticheresti se nessuno te lo chiedesse.',
  'home.bandNoticeable': 'Si sente',
  'home.bandNoticeableBlurb': 'Lo senti, ma non cambia niente di quello che fai.',
  'home.bandSore': 'Dà fastidio',
  'home.bandSoreBlurb': 'Lo aggiri senza pensarci.',
  'home.bandHurts': 'Fa male',
  'home.bandHurtsBlurb': 'Adesso decide lui al posto tuo.',
  'home.bandSevere': 'Forte',
  'home.bandSevereBlurb': 'Il problema è stare in piedi, non correre.',
};

export const BRIEF_IT = {
  // ── Pain, the user's own report ──────────────────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'oggi sono' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'senza alzarti. Tutto qui.' },
    ],
    [
      { k: 'frame', text: 'mattina dura. Oggi solo' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Niente di più.' },
    ],
    [
      { k: 'frame', text: 'oggi scarichiamo -' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'senza peso sul piede.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'le tue mattine sono più dure di' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'rispetto alla settimana scorsa. Oggi alleggeriamo.' },
    ],
    [
      { k: 'frame', text: 'questa settimana va peggio di' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'rispetto alla precedente. Giornata più leggera.' },
    ],
    [
      { k: 'frame', text: 'il dolore è' },
      { k: 'metric', icon: 'warn', text: 'sopra la tua media', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'Oggi alleggeriamo.' },
    ],
  ],

  // ── The programme's own structure ────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'oggi niente allenamento, ma' },
      { k: 'metric', icon: 'retest', text: '{tests}' },
      { k: 'frame', text: '- così più avanti avremo un termine di paragone.' },
    ],
    [
      { k: 'frame', text: 'il primo giorno sono' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'circa quattro minuti. È il tuo punto di partenza.' },
    ],
    [
      { k: 'frame', text: 'iniziamo con' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: '.' },
      { k: 'frame', text: 'Tra due settimane vediamo cosa è cambiato.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'sono passate' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'È ora di vedere cosa si è mosso.' },
    ],
    [
      { k: 'frame', text: 'giorno di verifica -' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'misuriamo:' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}', tail: ',' },
      { k: 'frame', text: 'e sapremo a che punto sei.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'oggi inizia una nuova settimana. Obiettivo:' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
    ],
    // The hedge stays: «la maggior parte» and «di solito».
    [
      { k: 'frame', text: 'nuova settimana oggi. La maggior parte delle persone sente le mattine più leggere in' },
      { k: 'metric', icon: 'level', text: '4-6 settimane', tail: '.' },
      { k: 'frame', text: 'Il cambiamento più grande di solito arriva verso i 3 mesi.' },
    ],
    [
      { k: 'frame', text: 'questa settimana si lavora su' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'Il piano è costruito intorno a questo.' },
    ],
  ],

  // ── The weekly plan ──────────────────────────────────────────────────────
  'goal-reached': [
    [
      { k: 'metric', icon: 'up', text: '{goalDone}' },
      { k: 'frame', text: '- fatto. Il prossimo:' },
      { k: 'metric', icon: 'level', text: '{nextGoal}', tail: '.' },
    ],
  ],
  'missed-yesterday': [
    [
      { k: 'frame', text: 'ieri è andata così. Non facciamone due -' },
      { k: 'metric', icon: 'session', text: '2 minuti', tail: ' oggi?' },
    ],
  ],
  'test-soon': [
    [
      { k: 'frame', text: 'mancano' },
      { k: 'metric', icon: 'retest', text: '{testIn}' },
      { k: 'frame', text: 'al prossimo test.' },
    ],
  ],
  'new-this-week': [
    [
      { k: 'frame', text: 'nuovo questa settimana:' },
      { k: 'metric', icon: 'session', text: '{newMove}', tail: '.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Oggi tocca {work} -' },
      { k: 'metric', icon: 'tasks', text: '{moves}', tail: ',' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'primi giorni -' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ':' },
      { k: 'frame', text: '{work},' },
      { k: 'value', text: '{minutes}', tail: '.' },
      { k: 'frame', text: 'Poco e spesso batte tanto e di rado.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      {
        k: 'frame',
        text: 'Oggi tocca {work}. La prima settimana serve a esserci, non a faticare.',
      },
    ],
  ],

  // ── Load, from what actually happened ────────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'ieri hai fatto la' },
      { k: 'metric', icon: 'feet', text: 'corsa più lunga del mese', tail: ' -' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Oggi giornata' },
      { k: 'metric', icon: 'rest', text: 'leggera', tail: '.' },
    ],
    [
      { k: 'frame', text: 'sono stati' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'più di qualsiasi corsa nelle ultime quattro settimane. Oggi si recupera.' },
    ],
    [
      { k: 'frame', text: 'ieri la corsa più lunga del mese. Oggi tocca' },
      { k: 'metric', icon: 'rest', text: 'recupero', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      { k: 'frame', text: 'ieri - più della tua settimana abituale. Meglio una giornata leggera.' },
    ],
    [
      { k: 'frame', text: 'ieri hai salito più' },
      { k: 'metric', icon: 'level', text: 'scale' },
      { k: 'frame', text: 'del solito. Le scale caricano molto l’arco.' },
    ],
    [
      { k: 'frame', text: 'ieri è stata una giornata piena di' },
      { k: 'metric', icon: 'level', text: 'scale', tail: '.' },
      { k: 'frame', text: 'Oggi si va più leggeri.' },
    ],
  ],

  'on-feet': [
    [
      { k: 'frame', text: 'sei in piedi da' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Le ultime due volte che hai superato' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'la mattina dopo è stata' },
      { k: 'metric', icon: 'warn', text: 'dura.', tone: 'warn' },
    ],
    [
      { k: 'frame', text: 'oggi sei in piedi da' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Andare oltre' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'ti è già costato la mattina dopo.' },
    ],
    [
      { k: 'frame', text: 'giornata già lunga -' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Vale la pena sederti dieci minuti.' },
    ],
  ],

  // A question, never a milestone.
  'steps-today': [
    [
      { k: 'frame', text: 'già' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'oggi. Come va il tallone?' },
    ],
    [
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'finora - tanti. Se il tallone fa male, siediti un po’.' },
    ],
    [
      { k: 'frame', text: 'oggi hai fatto' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Stasera allunga il piede - domattina te ne accorgerai.' },
    ],
    [
      { k: 'frame', text: 'una lunga giornata in piedi -' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Segna come va il tallone, così il piano lo sa.' },
    ],
  ],

  // ── Recovery, watch only ─────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'questa settimana hai dormito in media' },
      { k: 'metric', icon: 'sleep', text: '{sleep}', tail: '.' },
      { k: 'frame', text: 'I tendini si ricostruiscono di notte - oggi si va' },
      { k: 'metric', icon: 'rest', text: 'più piano', tail: '.' },
    ],
    [
      { k: 'frame', text: 'notti corte tutta la settimana -' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'in media. Oggi togliamo un po’.' },
    ],
    [
      { k: 'frame', text: 'da una settimana dormi' },
      { k: 'metric', icon: 'sleep', text: 'meno di sette ore', tail: '.' },
      { k: 'frame', text: 'Oggi è più leggero apposta.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'il tuo battito a riposo è' },
      { k: 'metric', icon: 'level', text: 'un po’ sopra la tua media', tail: '.' },
      { k: 'frame', text: 'Oggi puntiamo sul recupero.' },
    ],
    [
      { k: 'frame', text: 'il battito a riposo è' },
      { k: 'metric', icon: 'level', text: 'più alto del tuo solito', tail: '.' },
      { k: 'frame', text: 'Andiamo con calma.' },
    ],
    [
      { k: 'frame', text: 'il tuo corpo sta ancora recuperando -' },
      { k: 'metric', icon: 'level', text: 'battito a riposo più alto del tuo solito', tail: '.' },
      { k: 'frame', text: 'Oggi più leggero.' },
    ],
  ],

  // ── Gait, demoted ────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'per tutta la settimana hai camminato' },
      { k: 'metric', icon: 'gait', text: 'più lentamente del solito', tail: '.' },
      { k: 'frame', text: 'Succede spesso quando il piede dà fastidio.' },
    ],
    [
      { k: 'frame', text: 'il tuo passo è' },
      { k: 'metric', icon: 'gait', text: 'sotto la tua media', tail: '.' },
      { k: 'frame', text: 'Da tenere presente, senza preoccuparsi.' },
    ],
    [
      { k: 'frame', text: 'passi più lenti del tuo solito questa settimana.' },
      { k: 'metric', icon: 'gait', text: 'Niente di allarmante' },
      { k: 'frame', text: '- ma oggi teniamo leggero.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'i tuoi passi sono diventati' },
      { k: 'metric', icon: 'gait', text: 'meno regolari', tone: 'warn' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contro il tuo solito' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'meno regolari del tuo solito questa settimana -' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contro il tuo solito' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'qualcosa è cambiato nel tuo modo di camminare.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contro il tuo' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'Succede spesso quando qualcosa fa male.' },
    ],
  ],

  // ── Done, and coming back ────────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'per oggi è fatta.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Ci vediamo domani.' },
    ],
    [
      { k: 'frame', text: 'oggi è sistemato -' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'e si continua.' },
    ],
    [
      { k: 'frame', text: 'sessione fatta - è il' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'della tua serie.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'che bello rivederti. Hai' },
      { k: 'metric', icon: 'session', text: 'una sessione breve' },
      { k: 'frame', text: 'per ripartire con calma.' },
    ],
    [
      { k: 'frame', text: 'felice di rivederti. Oggi si parte' },
      { k: 'metric', icon: 'session', text: 'con poco', tail: '.' },
    ],
    [
      { k: 'frame', text: 'di nuovo qui - riprendiamo da dove avevi lasciato, solo un po’' },
      { k: 'metric', icon: 'session', text: 'più piano', tail: '.' },
    ],
  ],

  // ── Good news, gated behind a quiet morning ──────────────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'le tue mattine stanno' },
      { k: 'metric', icon: 'up', text: 'migliorando', tone: 'good' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'in meno questo mese.' },
    ],
    [
      { k: 'frame', text: 'in calo di' },
      { k: 'metric', icon: 'up', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'in un mese. È un cambiamento reale, non un caso.' },
    ],
    [
      { k: 'frame', text: 'le ultime due settimane sono state' },
      { k: 'metric', icon: 'up', text: 'più tranquille', tone: 'good' },
      { k: 'frame', text: 'delle due precedenti.' },
    ],
  ],

  'walk-back': [
    [
      { k: 'frame', text: 'il tuo passo è' },
      { k: 'metric', icon: 'done', text: 'tornato quello di sempre', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Buon segno.' },
    ],
    [
      { k: 'frame', text: 'il ritmo si è' },
      { k: 'metric', icon: 'done', text: 'riassestato', tone: 'good' },
      { k: 'frame', text: 'dove sta di solito.' },
    ],
    [
      { k: 'frame', text: 'cammini di nuovo alla' },
      { k: 'metric', icon: 'done', text: 'tua velocità di sempre', tail: '.', tone: 'good' },
    ],
  ],

  'gait-recovered': [
    [
      { k: 'frame', text: 'il tuo passo è' },
      { k: 'metric', icon: 'done', text: 'di nuovo regolare', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Di nuovo a' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'i passi sono' },
      { k: 'metric', icon: 'done', text: 'di nuovo in equilibrio', tone: 'good' },
      { k: 'frame', text: '- da due giorni.' },
    ],
    [
      { k: 'frame', text: 'si è sistemato tutto.' },
      { k: 'metric', icon: 'done', text: 'Di nuovo come al solito', tail: '.', tone: 'good' },
    ],
  ],

  // ── Honest emptiness ─────────────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'sto ancora imparando come cammini. Dammi' },
      { k: 'metric', icon: 'window', text: 'qualche giorno in più' },
      { k: 'frame', text: 'con il telefono in tasca.' },
    ],
    [
      { k: 'frame', text: 'mi sto ancora facendo un’idea del tuo solito -' },
      { k: 'metric', icon: 'window', text: 'qualche giorno in più' },
      { k: 'frame', text: 'dovrebbe bastare.' },
    ],
    [
      { k: 'frame', text: 'non ho ancora abbastanza storia tua.' },
      { k: 'metric', icon: 'window', text: 'Qualche giorno in più' },
      { k: 'frame', text: 'e potrò confrontare.' },
    ],
  ],

  // ── Their goal ───────────────────────────────────────────────────────────
  // Never a promise about the outcome: «tornare» is a direction.
  'goal-back': [
    [
      { k: 'frame', text: 'ogni sessione è un passo in più per tornare' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
      { k: 'frame', text: 'Oggi:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'per tornare' },
      { k: 'metric', icon: 'session', text: '{backTo}' },
      { k: 'frame', text: 'servono giorni come questo. Oggi:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'oggi' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: '- e manca un po’ meno per tornare' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'un po’ ogni giorno: è così che si torna' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
  ],

  'goal-consistent': [
    [
      { k: 'frame', text: 'già' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Avanti così.' },
    ],
    [
      { k: 'frame', text: 'volevi costanza - eccola:' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'La sessione di oggi dura solo' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-stronger': [
    [
      { k: 'frame', text: 'la forza arriva con la ripetizione. Oggi:' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'oggi tocca' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
      { k: 'frame', text: 'Più spesso, più forza.' },
    ],
    [
      { k: 'frame', text: 'più forza vuol dire poco, ma spesso. Oggi:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-injuryfree': [
    [
      { k: 'frame', text: 'la protezione migliore dagli infortuni è un po’ ogni giorno. Oggi:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'un piede forte si fa male meno spesso. Oggi gli dedichi' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'al giorno bastano per giocare d’anticipo sugli infortuni.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'non riesco a leggere come cammini - tieni il telefono in' },
      { k: 'metric', icon: 'pocket', text: 'tasca', tail: ',' },
      { k: 'frame', text: 'non in borsa, e lo rileverò.' },
    ],
    [
      { k: 'frame', text: 'non arrivano dati sul cammino. Serve il telefono in' },
      { k: 'metric', icon: 'pocket', text: 'tasca' },
      { k: 'frame', text: 'su un terreno piano.' },
    ],
    [
      { k: 'frame', text: 'ancora niente da leggere - i sensori vogliono il telefono in' },
      { k: 'metric', icon: 'pocket', text: 'tasca' },
      { k: 'frame', text: 'mentre cammini.' },
    ],
  ],

  // ── Most days ────────────────────────────────────────────────────────────
  'quiet-session': [
    [
      { k: 'frame', text: 'oggi tocca' },
      { k: 'metric', icon: 'session', text: '{move}' },
      { k: 'frame', text: '- l’esercizio che regge questo piano.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Hai superato la parte difficile, che è cominciare.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'ieri una lunga giornata in piedi -' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Un contesto, non un giudizio.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'ieri è stata una' },
      { k: 'metric', icon: 'feet', text: 'giornata più leggera' },
      { k: 'frame', text: 'in piedi. Buon giorno per caricare un po’.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'un’idea sulle scarpe: un' },
      { k: 'metric', icon: 'level', text: 'contrafforte più rigido' },
      { k: 'frame', text: 'e un po’ più di drop tolgono carico all’arco.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'se corri oggi, tieni la cadenza circa' },
      { k: 'metric', icon: 'up', text: '{cadence} sopra il tuo solito', tail: '.' },
      { k: 'frame', text: 'Passi più corti, meno carico sul tallone.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'gran parte del cambiamento qui si vede' },
      { k: 'metric', icon: 'window', text: 'presto', tail: '.' },
      { k: 'frame', text: 'Sei proprio in quella finestra.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
