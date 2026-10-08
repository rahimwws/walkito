/**
 * The exercise catalogue, in Italian.
 *
 * Anatomy is the standard clinical term an Italian physiotherapist uses:
 * fascia plantare, polpaccio, soleo, tibiale posteriore, arco plantare,
 * tallone, caviglia, tendine d'Achille. Toes are «le dita del piede» and the
 * big toe «l'alluce»; the ball of the foot is «l'avampiede».
 *
 * `tu` throughout. Cues are written as the physical instruction first: they
 * are followed by somebody standing on a painful foot, so the verb comes early
 * and the qualifier after it.
 */
export const EXERCISES_IT = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Allungamento plantare',
  'exercises.fasciaStretch.rationale': 'Fai la prima serie prima di appoggiare il piede a terra.',
  'exercises.fasciaStretch.cue': 'Tira le dita verso di te finché senti l’arco, non il polpaccio.',

  'exercises.calfStretchStraight.title': 'Allungamento del polpaccio',
  'exercises.calfStretchStraight.rationale': 'Un polpaccio più sciolto toglie un po’ di tensione al tallone.',
  'exercises.calfStretchStraight.cue': 'Gamba dietro tesa, tallone a terra, bacino in avanti.',

  'exercises.calfStretchBent.title': 'Allungamento del soleo',
  'exercises.calfStretchBent.rationale': 'Il muscolo più profondo del polpaccio cede solo con il ginocchio piegato.',
  'exercises.calfStretchBent.cue': 'Piega un po’ entrambe le ginocchia. Il tallone dietro resta a terra.',

  'exercises.ankleRocks.title': 'Oscillazioni della caviglia',
  'exercises.ankleRocks.rationale': 'Una caviglia che si piega lascia il tallone appoggiato.',
  'exercises.ankleRocks.cue': 'Il ginocchio va oltre le dita, il tallone resta a terra.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Sollevamenti sui talloni',
  'exercises.heelRaiseTowel.rationale': 'In uno studio, sollevamenti lenti e con carico hanno alleviato il dolore prima del solo stretching.',
  'exercises.heelRaiseTowel.cue': 'Asciugamano sotto le dita. Senza, stai allenando solo il polpaccio.',

  'exercises.heelRaisePlain.title': 'Sollevamenti su una gamba',
  'exercises.heelRaisePlain.rationale': 'La versione semplice che mantiene la forza che hai costruito.',
  'exercises.heelRaisePlain.cue': 'Tre secondi su, tre giù. È la velocità che lo rende inutile.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Piede corto',
  'exercises.shortFootSeated.rationale': 'Il muscolo che sostiene il tuo arco si trova dentro il piede.',
  'exercises.shortFootSeated.cue': 'Non arricciare le dita. Avvicina l’avampiede al tallone.',

  'exercises.shortFootDouble.title': 'Piede corto, in piedi',
  'exercises.shortFootDouble.rationale': 'Lo stesso muscolo, ora sotto il tuo peso.',
  'exercises.shortFootDouble.cue': 'Le dita restano distese e piatte. Si solleva solo l’arco.',

  'exercises.shortFootSingle.title': 'Piede corto, su una gamba',
  'exercises.shortFootSingle.rationale': 'Un piede alla volta è dove si vede il lato più debole.',
  'exercises.shortFootSingle.cue': 'Tieni l’alluce a terra. Se si alza, l’arco sta barando.',

  'exercises.toeSpread.title': 'Apertura delle dita',
  'exercises.toeSpread.rationale': 'Dita che sanno aprirsi dividono il carico con l’arco.',
  'exercises.toeSpread.cue': 'Allarga le dita sul pavimento, poi premi a terra l’alluce e il mignolo.',

  'exercises.bandInversion.title': 'Inversione con elastico',
  'exercises.bandInversion.rationale':
    'Ruotare il piede verso l’interno allena il muscolo che passa sotto l’arco.',
  'exercises.bandInversion.cue': 'Muovi il piede, non la gamba. Il ginocchio resta fermo.',

  'exercises.hipAbduction.title': 'Sollevamento laterale della gamba',
  'exercises.hipAbduction.rationale': 'Un’anca che cede scarica il peso sull’arco.',
  'exercises.hipAbduction.cue': 'Sdraiati su un fianco. Solleva la gamba sopra, un po’ indietro, con la punta in avanti.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Equilibrio su una gamba',
  'exercises.singleLegHold.rationale': 'Stare su una gamba è la prova in cui il piede cede per primo.',
  'exercises.singleLegHold.cue': 'Fissa un punto. Lascia che il piede oscilli - deve farlo.',

  'exercises.eyesClosedStand.title': 'Equilibrio a occhi chiusi',
  'exercises.eyesClosedStand.rationale': 'Con gli occhi chiusi, l’equilibrio tocca al piede.',
  'exercises.eyesClosedStand.cue': 'Mettiti vicino a un muro. Appoggiarti va bene.',

  'exercises.heelToeWalk.title': 'Camminata tacco-punta',
  'exercises.heelToeWalk.rationale':
    'Camminare tacco-punta è l’arco che si carica e si scarica in ordine.',
  'exercises.heelToeWalk.cue': 'Prima appoggia il tallone, poi srotola il piede. Abbastanza piano da poterti fermare a metà passo.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Rullo sotto il piede',
  'exercises.footRoll.rationale': 'Far rotolare il piede calma il tessuto dopo che ha lavorato.',
  'exercises.footRoll.cue': 'Piano e con decisione. Se fai una smorfia, alleggerisci.',

  'exercises.barefootHome.title': 'A piedi nudi in casa',
  'exercises.barefootHome.rationale': 'Le ore a piedi nudi sono ore in cui il piede lavora.',
  'exercises.barefootHome.cue': 'Solo in casa, su pavimenti piani, e aumenta poco alla volta.',

  'exercises.breathingReset.title': 'Respirazione lenta',
  'exercises.breathingReset.rationale': 'Un minuto di respiro lento chiude bene la sessione.',
  'exercises.breathingReset.cue': 'Espira più a lungo di quanto inspiri. Tutto qui.',

  // ── The weekly plan's additions ──────────────────────────────────────────
  'exercises.heelRaiseDouble.title': 'Sollevamenti sui talloni a due piedi',
  'exercises.heelRaiseDouble.rationale': 'I due piedi si dividono il carico mentre il polpaccio si risveglia.',
  'exercises.heelRaiseDouble.cue': 'Sali in verticale sopra gli alluci, poi scendi piano.',

  'exercises.heelRaiseSeated.title': 'Sollevamenti sui talloni da seduto',
  'exercises.heelRaiseSeated.rationale': 'Lavoro per il polpaccio quasi senza carico sul tallone.',
  'exercises.heelRaiseSeated.cue': 'Spingi con l’avampiede. Le mani sulle ginocchia aggiungono resistenza.',

  'exercises.heelRaiseHold.title': 'Tenuta sui talloni sollevati',
  'exercises.heelRaiseHold.rationale': 'Restare in alto carica il tendine senza rimbalzo.',
  'exercises.heelRaiseHold.cue': 'Sali, poi tieni la posizione in alto - non lasciarti ricadere.',

  'exercises.bigToeLift.title': 'Sollevamento dell’alluce',
  'exercises.bigToeLift.rationale': 'Insegna all’alluce a muoversi da solo.',
  'exercises.bigToeLift.cue': 'Solleva solo l’alluce. Le altre quattro dita restano a terra.',

  'exercises.towelScrunch.title': 'Raccogli l’asciugamano',
  'exercises.towelScrunch.rationale': 'Risveglia i piccoli muscoli sotto l’arco.',
  'exercises.towelScrunch.cue': 'Tira a te l’asciugamano con le dita. Il tallone resta giù.',

  'exercises.kneeToWall.title': 'Ginocchio al muro',
  'exercises.kneeToWall.rationale': 'Libera la caviglia così il tallone non si prende la tensione.',
  'exercises.kneeToWall.cue': 'Tallone ben a terra. Porta il ginocchio in avanti sopra il secondo dito.',

  'exercises.balancePillow.title': 'Equilibrio sul cuscino',
  'exercises.balancePillow.rationale': 'Una superficie morbida fa lavorare la caviglia a ogni oscillazione.',
  'exercises.balancePillow.cue': 'Mettiti accanto a un muro. Ginocchio morbido, sguardo avanti.',

  'exercises.heelDropStraight.title': 'Discese sul tallone',
  'exercises.heelDropStraight.rationale': 'Scendere piano è ciò che ricostruisce polpaccio e tendine d’Achille.',
  'exercises.heelDropStraight.cue': 'Sali con due piedi, scendi piano su uno. Lascia scendere il tallone sotto il gradino.',

  'exercises.tibialisRaise.title': 'Sollevamenti delle punte',
  'exercises.tibialisRaise.rationale': 'Rinforza il muscolo della tibia che stabilizza ogni passo.',
  'exercises.tibialisRaise.cue': 'Schiena al muro. Solleva le punte, talloni a terra.',

  'exercises.stepDown.title': 'Discesa dal gradino',
  'exercises.stepDown.rationale': 'Controlla il ginocchio così il piede non atterra da solo.',
  'exercises.stepDown.cue': 'Il ginocchio segue le dita. Appoggia il tallone - non lasciarti cadere.',

  'exercises.soleMassage.title': 'Massaggio della pianta',
  'exercises.soleMassage.rationale': 'Scioglie il tessuto dopo una lunga giornata.',
  'exercises.soleMassage.cue': 'Passate decise col pollice dal tallone alle dita. Alleggerisci dove senti fitte.',

  'exercises.pogoHops.title': 'Saltelli pogo',
  'exercises.pogoHops.rationale': 'Insegna di nuovo al piede a rimbalzare - solo quando il dolore è passato.',
  'exercises.pogoHops.cue': 'Saltelli piccoli e rapidi a caviglie rigide. Fermati se il tallone fa male.',

  // ── The morning stretch ──────────────────────────────────────────────────
  'exercises.morningStretch.copy':
    'Prima di alzarti: tira le dita verso di te, 10 secondi, 10 volte.',

  // ── Load notes ───────────────────────────────────────────────────────────
  'exercises.loadNote.backpack': 'Aggiungi uno zaino. Pesante abbastanza che l’ultima ripetizione sia davvero l’ultima.',
  'exercises.loadNote.heavier': 'Aggiungi peso. Otto ripetizioni dovrebbero essere tutto quello che hai.',
  'exercises.loadNote.towelOff': 'Via l’asciugamano. Solo il tuo peso. Questa è la versione che continui a fare.',

  // ── Categories ───────────────────────────────────────────────────────────
  'exercises.category.fitness': 'Allenamento',
  'exercises.category.mobility': 'Mobilità',
  'exercises.category.recovery': 'Recupero',
  'exercises.category.habit': 'Abitudine',

  // ── Dose ─────────────────────────────────────────────────────────────────
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds} s',
  'exercises.dose.hold': '{seconds} s',
  'exercises.dose.holdMinutes': '{minutes} min',
  'exercises.dose.sets': { one: '{count} serie', other: '{count} serie' },
  'exercises.dose.bothFeet': '{dose} · entrambi i piedi',
};
