import type { HomeCopy } from '@/components/Home';
import { PAIN_GOAL_MAX, PROGRAM } from '@/lib/site';

/*
 * The Italian home page, translated from the `en` entry of `COPY` in
 * `components/Home.tsx` (2026-10-08). Informal «tu». Every number is read from
 * `PROGRAM` as in English. The program and evidence pages exist only in
 * English, so their links say «(in inglese)».
 */

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;
const { testEveryDays, testEveryDaysAfterGoal, painFreeDays, retestTests, retestMinutes } = PROGRAM;

export const HOME_IT: HomeCopy = {
  meta: {
    title: 'Walkito: esercizi per dolore al tallone e piede piatto',
    description:
      'Walkito è un piano di esercizi personalizzato per il dolore a tallone, piede e gamba, che si adatta ogni giorno a come stanno i tuoi piedi.',
  },
  h1a: 'Hai già provato di tutto?',
  h1b: 'Prova un piano fatto per i tuoi piedi.',
  lead: 'Walkito è un piano di esercizi personalizzato per il dolore a tallone, piede e gamba, che si adatta ogni giorno a come stanno i tuoi piedi.',
  small: `${MIN_A}, ${MIN_B} o ${MIN_C}\u00A0minuti al giorno, a casa.`,
  alt: {
    heroCenter: 'La schermata Oggi di Walkito: un saluto, il check-in del mattino e la sessione di oggi',
  },
  storyH2: 'Non è colpa tua.',
  storyP:
    'Plantari, scarpe nuove, cinquanta video che si contraddicono. Nessuno di questi allena il piede. Quello che manca è un piano chiaro, per le giornate buone e per quelle no.',
  storyChipsAfter: ['contraddicono.', 'piede.', 'chiaro,', 'no.'],
  storyAccent: 'un piano chiaro,',
  whoH2: 'Fa per me?',
  whoKicker: 'Per te',
  whoLead:
    'Scegli quello che ti somiglia. Il piano parte da lì e cambia ogni giorno in base a come stanno i tuoi piedi.',
  who: {
    heel: {
      title: 'Dolore al tallone e fascite plantare',
      text: 'Primi passi del mattino con una fitta, dolore dopo essere stato seduto o dopo una lunga camminata.',
      goal: 'Obiettivo: mattine senza dolore',
    },
    flat: {
      title: 'Piede piatto',
      text: 'Archi stanchi e doloranti, e piedi che cedono verso l’interno.',
      goal: `Obiettivo: tenere l’arco per ${archHoldSeconds}\u00A0secondi`,
    },
    allday: {
      title: 'In piedi tutto il giorno',
      text: 'Infermieri, commessi, magazzino, ristorazione. Piedi che fanno male a fine turno.',
      goal: null,
    },
    run: {
      title: 'Runner e sportivi',
      text: 'Dolore al tallone, al tendine d’Achille o alla tibia che torna ogni volta che ti alleni.',
      goal: `Obiettivo: ${calfRaises} sollevamenti sulle punte su una gamba`,
    },
  },
  whoMore: 'Leggi la guida',
  whoMoreEn: 'Leggi (in inglese)',
  how: [
    {
      title: 'Una settimana alla volta, intorno a un obiettivo',
      text: `Ogni settimana ruota intorno a un obiettivo che puoi misurare: dolore al tallone al mattino a ${PAIN_GOAL_MAX}/10 o meno per ${painFreeDays}\u00A0giorni di fila, tenere l’arco per ${archHoldSeconds}\u00A0secondi, ${calfRaises} sollevamenti sulle punte su una gamba, ${balanceSeconds}\u00A0secondi di equilibrio su una gamba, oppure sinistra e destra entro il ${gapPercent}% l’una dall’altra. Quando ne raggiungi uno, quell’obiettivo passa al mantenimento e il successivo prende il suo posto.`,
      link: 'Come funziona il piano (in inglese)',
    },
    {
      title: `Un test ogni ${testEveryDays}\u00A0giorni, poi ogni ${testEveryDaysAfterGoal}`,
      text: `${retestTests} test fisici in circa ${retestMinutes}\u00A0minuti: sollevamenti sulle punte fino all’esaurimento, tenuta dell’arco ed equilibrio su una gamba, da entrambi i lati. Ogni ${testEveryDays}\u00A0giorni finché non raggiungi il primo obiettivo, poi ogni ${testEveryDaysAfterGoal}. I progressi si misurano, non si indovinano da come è andata la settimana.`,
      link: 'Cosa misurano i test (in inglese)',
    },
    {
      title: 'Scelti in base alla ricerca pubblicata',
      text: 'Esercizi scelti in base a ricerche e linee guida pubblicate. Walkito in sé non è stato testato in uno studio clinico.',
      link: 'Leggi le evidenze (in inglese)',
    },
  ],
  faq: [
    {
      q: 'Quanto ci vuole prima di sentire una differenza?',
      a: `Dipende dalla persona e dal dolore. Il piano si costruisce una settimana alla volta intorno a un obiettivo che puoi misurare, e un test ogni ${testEveryDays}\u00A0giorni ti mostra cosa sta cambiando davvero.`,
    },
    {
      q: 'Mi serve dell’attrezzatura?',
      a: 'No. Alcuni esercizi usano un asciugamano, un gradino o le scale, un elastico, un cuscino o una pallina da massaggio, e Walkito ti chiede cosa hai. Tutto quello che richiede qualcosa che non hai resta fuori dal tuo piano.',
    },
    {
      q: 'Va bene per il piede piatto?',
      a: 'Sì, per il piede piatto flessibile. Se da adulto un arco si è abbassato all’improvviso, rivolgiti prima a un professionista sanitario.',
    },
    {
      q: 'È un consiglio medico?',
      a: 'No. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    },
    { q: 'In che lingue è disponibile?', a: 'In inglese, russo e spagnolo.' },
  ],
};
