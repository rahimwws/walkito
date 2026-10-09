/** testday strings, Italian (the guided test day: intro, the three tests, results). Filled per domain; see `../en/core.ts` for the rules. */

export const TESTDAY_IT = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Chiudi',
  'testday.leave.title': 'Uscire dal test?',
  'testday.leave.body': 'Non viene salvato niente finché non finisci l’ultimo test. Il test resta da fare.',
  'testday.leave.stay': 'Continua il test',
  'testday.leave.confirm': 'Esci',

  // ── Intro ─────────────────────────────────────────────────────────────────
  'testday.intro.eyebrow': 'Giorno di test',
  'testday.intro.title': 'Tre test brevi',
  'testday.intro.body': {
    one: 'Circa {count} minuto.',
    other: 'Circa {count} minuti.',
  },
  'testday.intro.nowSeconds': 'Ora {now} s · obiettivo {goal} s',
  'testday.intro.nowRaises': {
    one: 'Ora {now} · obiettivo {count} sollevamento',
    other: 'Ora {now} · obiettivo {count} sollevamenti',
  },
  'testday.intro.firstSeconds': 'Prima misurazione · obiettivo {goal} s',
  'testday.intro.firstRaises': {
    one: 'Prima misurazione · obiettivo {count} sollevamento',
    other: 'Prima misurazione · obiettivo {count} sollevamenti',
  },
  'testday.intro.need': 'Ti serve',
  'testday.intro.needBarefoot': 'Piedi nudi',
  'testday.intro.needWall': 'Un muro da toccare per l’equilibrio',
  'testday.intro.needPhone': 'Il telefono dove puoi vederlo',
  'testday.intro.checkin': 'Come sta il piede adesso?',
  'testday.intro.checkinHint': 'Vale come check-in di oggi.',
  'testday.intro.painNone': 'Nessun dolore',
  'testday.intro.painWorst': 'Il peggiore',
  'testday.intro.painA11y': '{score} su 10',
  'testday.intro.sore':
    'In un giorno di dolore i numeri escono più bassi di quanto valga davvero il tuo piede, e le prossime due settimane verrebbero pianificate su quelli. Il test può aspettare domani.',
  'testday.intro.start': 'Inizia',
  'testday.intro.anyway': 'Fai il test comunque',
  'testday.intro.tomorrow': 'Fai il test domani',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Test {current} di {total}',
  'testday.test.calf.name': 'Sollevamenti sui talloni',
  'testday.test.arch.name': 'Tenuta dell’arco',
  'testday.test.balance.name': 'Equilibrio',

  'testday.side.left': 'Gamba sinistra',
  'testday.side.right': 'Gamba destra',
  'testday.side.leftSore': 'Gamba sinistra - quella che fa male',
  'testday.side.rightSore': 'Gamba destra - quella che fa male',

  // The button on the picture before a test: opens the clip at full size.

  'testday.watch': 'Guarda il video',

  'testday.calf.step1': 'Su una gamba, dita sul muro.',
  'testday.calf.step2': 'Sali fino in cima e scendi, a tempo col clic.',
  'testday.calf.step3': 'Fermati quando perdi il ritmo o l’altezza.',
  'testday.calf.stopHint': 'Tocca quando non riesci a tenere il ritmo o l’altezza piena',
  'testday.calf.up': 'Su',
  'testday.calf.down': 'Giù',
  'testday.calf.otherTitle': 'Ora l’altra gamba',
  'testday.calf.otherBody': 'Stesso ritmo, stessa altezza piena, dita sul muro.',

  'testday.arch.step1': 'In piedi su entrambi i piedi.',
  'testday.arch.step2': 'Porta l’avampiede verso il tallone.',
  'testday.arch.step3': 'Fermati quando l’arco si abbassa.',
  'testday.arch.stopHint': 'Tocca appena l’arco scende',

  'testday.balance.step1': 'Su una gamba, mani sui fianchi.',
  'testday.balance.step2': 'Chiudi gli occhi al via.',
  'testday.balance.step3': 'Fermati appena l’altro piede tocca terra.',
  'testday.balance.stopHint': 'Tocca quando l’altro piede tocca terra',

  'testday.start': 'Inizia',
  'testday.stop': 'Stop',
  'testday.timeLeft': 'Mancano {time}',
  'testday.secondsLeft': { one: 'secondo rimasto', other: 'secondi rimasti' },
  'testday.held': 'Tenuto per {n} s',

  'testday.paused.title': 'In pausa',
  'testday.paused.body': 'Il timer si è fermato mentre l’app era in background.',
  'testday.paused.resume': 'Riprendi',
  'testday.paused.restart': 'Ricomincia questo test',

  'testday.confirm.raises': {
    one: '{count} sollevamento - è giusto?',
    other: '{count} sollevamenti - è giusto?',
  },
  'testday.confirm.seconds': {
    one: '{count} secondo - è giusto?',
    other: '{count} secondi - è giusto?',
  },
  'testday.confirm.hint': 'Correggilo se il conteggio non torna.',
  'testday.confirm.holdHint': 'Se ti ci è voluto un attimo per raggiungere il telefono, togli quei secondi.',
  'testday.confirm.less': 'Meno',
  'testday.confirm.more': 'Più',
  'testday.confirm.again': 'Rifai questo test',
  'testday.confirm.next': 'Test successivo',
  'testday.confirm.finish': 'Vedi i risultati',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.firstBlurb': 'Il prossimo test mostrerà quanta strada hai fatto.',
  'testday.results.name.arch_hold': 'Tenuta dell’arco',
  'testday.results.name.calf_raises': 'Sollevamenti sui talloni',
  'testday.results.name.balance': 'Equilibrio',
  'testday.results.name.symmetry': 'Simmetria',
  'testday.results.unitSeconds': { one: 'secondo', other: 'secondi' },
  'testday.results.unitRaises': { one: 'sollevamento', other: 'sollevamenti' },
  'testday.results.percent': '{n}%',
  'testday.results.gapUnit': 'di differenza tra le gambe',
  'testday.results.legs': 'Sinistra {left} · destra {right}',
  'testday.results.goalGap': 'Obiettivo: sotto il {n}%',
  'testday.results.toGoSeconds': { one: 'Manca {count} s', other: 'Mancano {count} s' },
  'testday.results.toGoRaises': { one: 'Manca {count} sollevamento', other: 'Mancano {count} sollevamenti' },
  'testday.results.toGoGap': { one: 'Manca {count} punto', other: 'Mancano {count} punti' },
  'testday.results.reached': 'Obiettivo raggiunto',
  'testday.results.moreSeconds': {
    one: '{count} s in più dell’ultima volta',
    other: '{count} s in più dell’ultima volta',
  },
  'testday.results.fewerSeconds': {
    one: '{count} s in meno dell’ultima volta',
    other: '{count} s in meno dell’ultima volta',
  },
  'testday.results.moreRaises': {
    one: '{count} sollevamento in più dell’ultima volta',
    other: '{count} sollevamenti in più dell’ultima volta',
  },
  'testday.results.fewerRaises': {
    one: '{count} sollevamento in meno dell’ultima volta',
    other: '{count} sollevamenti in meno dell’ultima volta',
  },
  'testday.results.gapSmaller': {
    one: 'Differenza più piccola di {count} punto rispetto all’ultima volta',
    other: 'Differenza più piccola di {count} punti rispetto all’ultima volta',
  },
  'testday.results.gapLarger': {
    one: 'Differenza più grande di {count} punto rispetto all’ultima volta',
    other: 'Differenza più grande di {count} punti rispetto all’ultima volta',
  },
  'testday.results.same': 'Come l’ultima volta',
  'testday.results.first': 'Prima misurazione',
  'testday.results.nextTest': 'Prossimo test: {date}',
  'testday.results.planUpdated': 'Il tuo piano per le prossime due settimane è aggiornato.',
  'testday.results.done': 'Fatto',

  'testday.results.verdictFirst': 'Tre numeri da battere',
  'testday.results.verdictSteady': 'Tutti e tre tengono',
  'testday.results.verdictUp.calf_raises': 'Più sollevamenti dell’ultima volta',
  'testday.results.verdictUp.arch_hold': 'Il tuo arco ha tenuto più a lungo',
  'testday.results.verdictUp.balance': 'Hai tenuto l’equilibrio più a lungo',
  'testday.results.verdictUpTwo': 'Due su tre sono saliti',
  'testday.results.verdictUpAll': 'Tutti e tre sono saliti',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'Nuovo record',
  'testday.results.heroEyebrowFirst': 'Il tuo punto di partenza',
  'testday.results.heroEyebrowSteady': 'Test completati',
  'testday.results.verdictGoal.calf_raises': 'Obiettivo sollevamenti raggiunto',
  'testday.results.verdictGoal.arch_hold': 'Obiettivo tenuta dell’arco raggiunto',
  'testday.results.verdictGoal.balance': 'Obiettivo equilibrio raggiunto',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Tutti i test',
  'testday.results.showDetails': 'Mostra dettagli',
  'testday.results.hideDetails': 'Nascondi dettagli',
  'testday.results.share': 'Condividi',
  'testday.results.shareTitle': 'Il mio test dei piedi',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'Il mio test dei piedi su Walkito: sollevamenti {calf} · arco {arch} s · equilibrio {balance} s',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 's',
  'testday.results.valueSeconds': '{n} s',
  'testday.results.dateVs': {
    one: '{date} · confrontato con {count} giorno fa',
    other: '{date} · confrontato con {count} giorni fa',
  },
  'testday.results.dateFirst': '{date} · il tuo punto di partenza',
  'testday.results.chipBaseline': 'Punto di partenza',
  'testday.results.chipSame': 'Uguale',
  'testday.results.chipSeconds': '{delta} s',
  'testday.results.chipRaises': { one: '{delta} sollevamento', other: '{delta} sollevamenti' },
  'testday.results.gapBetween': 'Differenza tra le gambe {n}%',
  'testday.results.explain.calf_raises':
    'I sollevamenti sui talloni mostrano quanto lavoro polpaccio e tendine d’Achille reggono prima di stancarsi. Più sollevamenti significa che il polpaccio porta una parte maggiore di ogni passo nelle camminate e nelle corse lunghe.',
  'testday.results.explain.arch_hold':
    'La tenuta dell’arco mostra per quanto tempo i piccoli muscoli sotto il piede tengono l’arco sollevato. Una tenuta più lunga significa che il piede resta sostenuto per più parte della giornata.',
  'testday.results.explain.balance':
    'Stare su una gamba a occhi chiusi mostra quanto bene piede e caviglia sentono il terreno. Più secondi significa passi più sicuri su terreno irregolare e quando sei stanco.',
  'testday.results.explainA11y': 'Cosa mostra',
};
