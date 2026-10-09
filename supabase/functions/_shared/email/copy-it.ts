import type { Copy } from './copy.ts';
import { two } from './plural.ts';

// ── Italian ─────────────────────────────────────────────────────────────────
//
// «tu» throughout, as in the app. The app's own words: «sessione», «test»,
// «sollevamenti sui talloni», «tenuta dell’arco», «equilibrio», «abbonamento
// annuale». Same rules as `copy.ts`: all lowercase, no dash as punctuation,
// no pain figure in a subject, no diagnosis words (curare, trattare, guarire).

const minutesIt = (m: number) => `${m} ${two(m, 'minuto', 'minuti')}`;
const secondsIt = (n: number) => two(n, 'secondo', 'secondi');

export const IT: Copy = {
  greeting: (name) => (name ? `ciao ${name},` : 'ciao,'),
  footer: {
    why: 'ricevi questa email perché usi walkito.',
    unsubscribe: 'annulla l’iscrizione',
    settings: 'impostazioni email',
  },
  goalTitle: {
    pain_free_mornings: 'mattine più facili',
    arch_hold: 'tenuta dell’arco',
    calf_raises: 'polpacci più forti',
    balance: 'equilibrio migliore',
    symmetry: 'piedi alla pari',
  },
  metricName: {
    calf: 'sollevamenti sui talloni',
    arch: 'tenuta dell’arco',
    balance: 'equilibrio',
    symmetry: 'differenza tra le gambe',
  },
  resultName: {
    calf: 'i tuoi sollevamenti sui talloni',
    arch: 'la tenuta del tuo arco',
    balance: 'il tuo equilibrio',
    symmetry: 'la differenza tra le tue gambe',
  },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n} %` : `${n} s`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `meno del ${n} %` : `${n} s`),

  welcome: {
    subject: 'ti diamo il benvenuto su walkito',
    intro: 'siamo rahim e rahman. abbiamo creato walkito noi due, da soli.',
    first: (m) => `la tua prima sessione dura ${minutesIt(m)}. inizia oggi, è la più facile.`,
    firstRunner: (m) => `la tua prima sessione dura ${minutesIt(m)}: meno del tuo riscaldamento.`,
    button: 'apri walkito',
    ps: 'p.s. rispondi a questa email. le leggiamo tutte.',
  },
  day2Morning: {
    subject: 'fallo prima di alzarti dal letto',
    lines: [
      'il primo passo del mattino è quello che fa più male.',
      '60 secondi di stretching a letto cambiano le cose. provalo domani.',
    ],
    button: 'guarda lo stretching di 60 secondi',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'questa settimana si parla delle tue mattine',
      arch_hold: 'questa settimana si parla del tuo arco',
      calf_raises: 'questa settimana si parla dei tuoi polpacci',
      balance: 'questa settimana si parla del tuo equilibrio',
      symmetry: 'questa settimana si lavora per pareggiare le gambe',
    },
    numbers: (name, current, target) => `${name}: ${current} adesso. obiettivo: ${target}.`,
    moves: 'ogni sessione di questa settimana sposta quel numero.',
    noNumbers: (goal) => `ogni sessione di questa settimana ti avvicina al tuo obiettivo: ${goal}.`,
    button: 'guarda questa settimana',
  },
  day5Easy: {
    subject: 'troppo facile? bene.',
    lines: [
      'la prima settimana è leggera apposta. prima calmiamo le cose, poi aggiungiamo carico.',
      'il lavoro vero inizia la settimana prossima.',
    ],
    button: 'guarda la tua settimana',
  },
  day5Start: {
    subject: (m) => `la prima dura ${minutesIt(m)}`,
    line: 'niente palestra, niente attrezzi. si può fare anche sulla sedia.',
    button: (m) => `inizia con ${minutesIt(m)}`,
  },
  day10Keep: {
    subject: 'riprendi oggi',
    notBecause: 'è il momento in cui è facile mollare. non farlo.',
    painDrop: (s, l) => `le tue mattine sono passate da ${s} a ${l}. non fermarti adesso.`,
    daysIn: (d) => (d === 1 ? 'sei al primo giorno. continua così.' : `sei a ${d} giorni. continua così.`),
    button: (m) => (m === 1 ? 'fai il minuto di oggi' : `fai i ${m} minuti di oggi`),
  },
  day14Test: {
    subject: 'giorno di test: guarda cosa è cambiato',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return `due settimane fa hai fatto ${shown} ${two(n, 'sollevamento', 'sollevamenti')} sui talloni. vediamo oggi.`;
        case 'arch':
          return `due settimane fa hai tenuto l’arco per ${shown} ${secondsIt(n)}. vediamo oggi.`;
        case 'balance':
          return `due settimane fa hai resistito ${shown} ${secondsIt(n)} su una gamba. vediamo oggi.`;
        case 'symmetry':
          return `due settimane fa la differenza tra le tue gambe era del ${shown} %. vediamo oggi.`;
      }
    },
    generic: 'sono passate due settimane. vediamo cosa è cambiato.',
    tests: '3 test brevi, circa 4 minuti.',
    button: 'fai il test',
  },
  testResult: {
    subject: (name, before, now) => `${name}: ${before} → ${now}`,
    work: (w) =>
      w <= 1
        ? 'è una settimana di lavoro, misurata.'
        : w === 2
          ? 'sono due settimane di lavoro, misurate.'
          : `sono ${w} settimane di lavoro, misurate.`,
    goal: (target) => `l’obiettivo è ${target}.`,
    button: 'guarda i tuoi progressi',
  },
  goalReached: {
    subject: (goal) => `${goal}: fatto`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return `il tuo obiettivo era arrivare a ${t} ${two(t, 'sollevamento', 'sollevamenti')} sui talloni. ce l’hai fatta.`;
        case 'arch_hold':
          return `il tuo obiettivo era tenere l’arco per ${t} ${secondsIt(t)}. ce l’hai fatta.`;
        case 'balance':
          return `il tuo obiettivo era stare su una gamba per ${t} ${secondsIt(t)}. ce l’hai fatta.`;
        case 'symmetry':
          return `il tuo obiettivo era portare la differenza tra le gambe sotto il ${t} %. ce l’hai fatta.`;
        case 'pain_free_mornings':
          return 'il tuo obiettivo era avere mattine più facili. ce l’hai fatta.';
      }
    },
    next: (goal) => `prossimo obiettivo: ${goal}.`,
    buttonNext: 'inizia il prossimo obiettivo',
    buttonPlan: 'guarda il tuo piano',
  },
  painUp: {
    subject: 'una settimana più dura. ecco il piano',
    lines: [
      'questa settimana il dolore è salito un po’. succede. il tuo piano è già diventato più leggero.',
      'se noti gonfiore, intorpidimento o dolore di notte, senti un medico.',
    ],
    button: 'guarda il piano più leggero',
  },
  winback7: {
    subject: 'il tuo piano è ancora qui',
    lines: ['non serve recuperare. si riparte da dove sei.', '3 minuti oggi?'],
    button: 'inizia con 3 minuti',
  },
  winback21: {
    subject: 'siamo ancora qui, se i tuoi piedi ne hanno bisogno',
    saved: (name, value) => `i tuoi numeri sono salvati: ${name} ${value}.`,
    savedPlain: 'il tuo piano e i tuoi progressi sono salvati.',
    button: 'apri walkito',
  },
  offer: {
    subject: (p) => (p != null ? `il tuo piano è salvato, ${p} % di sconto` : 'il tuo piano è salvato, ora a un prezzo più basso'),
    ready: (goal, current, target) => `il tuo piano per ${goal} è pronto: ${current} adesso, l’obiettivo è ${target}.`,
    readyPlain: (goal) => `il tuo piano per ${goal} è pronto e ti aspetta.`,
    price: (price, standard) => `l’abbonamento annuale costa ${price} invece di ${standard}.`,
    priceUnknown: 'in questo momento l’abbonamento annuale costa meno.',
    button: (p) => (p != null ? `ottieni il ${p} % di sconto` : 'guarda l’offerta'),
  },
  offerFinal: {
    subject: 'l’ultima da parte nostra',
    price: (price) => `l’abbonamento annuale a ${price}. dopo questa, niente più offerte.`,
    priceUnknown: 'l’abbonamento annuale al nostro prezzo più basso. dopo questa, niente più offerte.',
    button: (price) => (price != null ? `prendilo a ${price}` : 'guarda l’offerta'),
  },
  weekly: {
    subject: (s) => `la tua settimana: ${s} ${two(s, 'sessione', 'sessioni')}`,
    subjectWithMetric: (s, name, value) => `la tua settimana: ${s} ${two(s, 'sessione', 'sessioni')}, ${name} ${value}`,
    mornings: (avg) => `le mattine hanno avuto una media di ${avg}/10.`,
    next: (goal) => `la settimana prossima: ${goal}.`,
    button: 'guarda la settimana prossima',
  },
  unsubscribePage: {
    title: 'iscrizione annullata',
    done: 'walkito non ti manderà più email. puoi riattivarle nell’app: impostazioni → email.',
    undo: 'riattiva le email',
    resubscribed: 'le email sono di nuovo attive.',
    invalid: 'questo link non funziona più.',
  },
};
