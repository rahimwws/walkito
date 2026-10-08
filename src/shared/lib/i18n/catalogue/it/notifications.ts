/**
 * Notifications, Italian.
 *
 * `tu` throughout, as in `core.ts`. Gendered agreement is avoided rather than
 * guessed at: English's "sitting down" would be "seduto/seduta" and the app
 * does not know which, so the line says "senza alzarti dalla sedia" and stays
 * true for everyone.
 *
 * Nothing cheerful after pain: the `flare*` line has no exclamation mark, no
 * praise and no emoji. The streak count appears only in `streak*`, and neither
 * those nor any other line uses "serie" or "di fila" outside them.
 *
 * The `many` plural form is the whole-millions one and is left out everywhere;
 * no count here reaches a million. `{steps}` is already grouped for the locale
 * while `count` is the same number raw, which is what selects the form.
 *
 * `{block}` arrives in English: block names live in `@/entities/program` and
 * are not translated anywhere yet.
 */

export const NOTIFICATIONS_IT = {
  // ── What kind of day it is ───────────────────────────────────────────────
  /** Android's name for the app's notification channel, shown in system settings. */
  'notifications.channelName': 'Promemoria',
  'notifications.kindStrength': 'Lavoro di forza',
  'notifications.kindMobility': 'Lavoro di mobilità',
  'notifications.kindBalance': 'Lavoro di equilibrio',
  'notifications.kindRecovery': 'Lavoro di recupero',
  'notifications.kindFoot': 'Lavoro per il piede',

  // ── The morning nudge ────────────────────────────────────────────────────
  /** The morning reminder, in the words of the intention signed in onboarding. */
  'notifications.morningIntention': 'Al risveglio, prima di alzarti in piedi, fai lo stretching del piede.',
  'notifications.sessionStrength': {
    one: 'Oggi forza del piede. {count} minuto.',
    other: 'Oggi forza del piede. {count} minuti.',
  },
  'notifications.sessionDay': {
    one: 'Giorno {day}. {kind}. {count} minuto.',
    other: 'Giorno {day}. {kind}. {count} minuti.',
  },
  'notifications.sessionShort': {
    one: 'Oggi una sessione breve: {count} minuto, senza alzarti dalla sedia.',
    other: 'Oggi una sessione breve: {count} minuti, senza alzarti dalla sedia.',
  },
  'notifications.sessionBackTo': {
    one: 'Oggi {count} minuto. Un passo in più per tornare {backTo}.',
    other: 'Oggi {count} minuti. Un passo in più per tornare {backTo}.',
  },
  'notifications.sessionCalves': {
    one: '{count} minuto. Oggi l’appuntamento è con i polpacci.',
    other: '{count} minuti. Oggi l’appuntamento è con i polpacci.',
  },
  'notifications.sessionMobility': 'Oggi mobilità. Niente di pesante.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  'notifications.maintenanceDay': {
    one: 'Giorno di mantenimento. {count} minuto.',
    other: 'Giorno di mantenimento. {count} minuti.',
  },
  'notifications.maintenanceCheckpoint': 'Controllo mensile. Vediamo che non sia tornato indietro niente.',
  'notifications.maintenanceFourWeeks': 'Quattro settimane stabili. È proprio questo il punto.',

  // ── The morning after a bad day ──────────────────────────────────────────
  // No exclamation mark, no encouragement, no praise.
  'notifications.flareCheckIn': 'Ieri è stata dura. Registra come stai quando ti alzi - se va ancora male, oggi resta breve e da seduti.',

  // ── A big day on their feet ──────────────────────────────────────────────
  'notifications.loadSteps': {
    one: '{steps} passo ieri: il {percent}% in più del solito. Oggi si recupera.',
    other: '{steps} passi ieri: il {percent}% in più del solito. Oggi si recupera.',
  },
  'notifications.loadBigDay': 'Ieri è stata una giornata tutta in piedi. Il piano si è adattato.',
  'notifications.loadBackOff': 'Ieri è stata lunga. Oggi il piano rallenta.',

  // ── The step check-in ────────────────────────────────────────────────────
  'notifications.stepsCheck': {
    one: 'Oggi sei già a {steps} passo: una lunga giornata in piedi. Come va il tallone?',
    other: 'Oggi sei già a {steps} passi: una lunga giornata in piedi. Come va il tallone?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  // Only change against the person's own baseline. No limping, no
  // compensation, no injury risk, no comparison with anyone.
  'notifications.gaitUneven': {
    one: 'Da {count} giorno i tuoi passi sono irregolari.',
    other: 'Da {count} giorni i tuoi passi sono irregolari.',
  },
  'notifications.gaitChanged': 'Questa settimana qualcosa è cambiato nel tuo modo di camminare.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Due settimane. È ora di vedere cosa si è mosso. 3 test, 4 minuti.',
  'notifications.retestCheckpoint': 'Oggi c’è la verifica. Niente allenamento: solo tre misurazioni.',
  'notifications.retestDay': 'Giorno {day}. Vediamo se sta funzionando.',
  'notifications.retestFollowUp': 'I test sono ancora aperti. Quattro minuti.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Oggi inizia una nuova settimana. Obiettivo: {block}.',
  'notifications.blockLoadUp': 'Questa settimana si lavora su «{block}».',
  'notifications.blockOpens': 'Nuova settimana, stesso piede. Questa è dedicata a {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'Il dolore è salito questa settimana, quindi oggi si scende di un livello.',
  'notifications.planSpike': 'Ieri è stata una giornata impegnativa. Oggi si riparte più leggeri.',
  'notifications.planHeavyDay': 'Ieri una lunga giornata in piedi. Oggi si passa al recupero.',
  'notifications.planReturn': 'Cinque giorni di pausa. Oggi si riparte un passo più facile.',
  'notifications.planBackUp': 'Il fastidio è passato: oggi il carico torna a salire.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'Com’è andato il piede oggi?',
  'notifications.checkinOneTap': 'Un tocco prima di dormire: com’è andata?',
  'notifications.checkinLog': 'Registra oggi e il piano saprà cosa fare domani.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // Both lines say what one tap keeps, never what is about to be lost.
  'notifications.streakKeep': {
    one: 'Un tocco mantiene {count} giorno di fila.',
    other: 'Un tocco mantiene {count} giorni di fila.',
  },
  'notifications.streakTap': { one: '{count} giorno. Un tocco.', other: '{count} giorni. Un tocco.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'Il giorno {day} è ancora lì, quando vuoi.',
  'notifications.winbackDay10': 'Il piano segue le date, non le presenze. Oggi è il giorno {day}.',
  'notifications.winbackDay30': 'Siamo ancora qui, se il piede torna a farsi sentire.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  'notifications.offerWaitNamed': '{name}, prima di andare: {percent}% di sconto',
  'notifications.offerWait': 'Prima di andare: {percent}% di sconto',
  'notifications.offerWaitBody': 'L’abbonamento annuale ti aspetta a un prezzo più basso. Tocca per vederlo.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Il tuo accesso al programma finisce tra una settimana',
  'notifications.expiryBody': 'I tuoi progressi restano comunque.',
};
