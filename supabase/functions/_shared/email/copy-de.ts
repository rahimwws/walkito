import type { Copy } from './copy.ts';
import { two } from './plural.ts';

// ── German ──────────────────────────────────────────────────────────────────
//
// «du» throughout, as in the app, and the app's words: «einheit» for a
// session, «fersenheben», «gewölbe», «jahresabo». All lowercase, nouns too:
// that is the emails' style in every language.

const minutesDe = (m: number) => `${m} ${two(m, 'minute', 'minuten')}`;
const secondsDe = (n: number) => two(n, 'sekunde', 'sekunden');

export const DE: Copy = {
  greeting: (name) => (name ? `hallo ${name},` : 'hallo,'),
  footer: {
    why: 'du bekommst diese mail, weil du walkito nutzt.',
    unsubscribe: 'abmelden',
    settings: 'e-mail-einstellungen',
  },
  goalTitle: {
    pain_free_mornings: 'leichtere morgen',
    arch_hold: 'kräftigeres gewölbe',
    calf_raises: 'kräftigere waden',
    balance: 'bessere balance',
    symmetry: 'ausgeglichene füße',
  },
  metricName: { calf: 'fersenheben', arch: 'gewölbe halten', balance: 'balance', symmetry: 'unterschied links-rechts' },
  resultName: {
    calf: 'dein fersenheben',
    arch: 'dein gewölbe halten',
    balance: 'deine balance',
    symmetry: 'der unterschied zwischen deinen beinen',
  },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n} %` : `${n} s`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `unter ${n} %` : `${n} s`),

  welcome: {
    subject: 'willkommen bei walkito',
    intro: 'hier sind rahim und rahman. wir haben walkito gebaut, nur wir zwei.',
    first: (m) => `deine erste einheit dauert ${minutesDe(m)}. fang heute an, sie ist die leichteste.`,
    firstRunner: (m) => `deine erste einheit dauert ${minutesDe(m)}, kürzer als dein aufwärmen.`,
    button: 'walkito öffnen',
    ps: 'p.s. antworte einfach auf diese mail. wir lesen jede.',
  },
  day2Morning: {
    subject: 'mach das, bevor du aufstehst',
    lines: ['der erste schritt am morgen tut am meisten weh.', '60 sekunden dehnen im bett ändern das. probier es morgen aus.'],
    button: 'die 60-sekunden-dehnung ansehen',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'diese woche geht es um deine morgen',
      arch_hold: 'diese woche geht es um dein gewölbe',
      calf_raises: 'diese woche geht es um deine waden',
      balance: 'diese woche geht es um deine balance',
      symmetry: 'diese woche geht es darum, deine beine anzugleichen',
    },
    numbers: (name, current, target) => `${name}: jetzt ${current}. ziel: ${target}.`,
    moves: 'jede einheit diese woche bewegt diese zahl.',
    noNumbers: (goal) => `jede einheit diese woche bringt dich näher an dein ziel: ${goal}.`,
    button: 'diese woche ansehen',
  },
  day5Easy: {
    subject: 'zu leicht? gut so.',
    lines: ['woche 1 soll sanft sein. erst beruhigen wir alles, dann kommt last dazu.', 'die echte arbeit beginnt nächste woche.'],
    button: 'deine woche ansehen',
  },
  day5Start: {
    subject: (m) => `die erste dauert ${minutesDe(m)}`,
    line: 'kein studio, keine geräte. im sitzen ist völlig in ordnung.',
    button: (m) => `mit ${minutesDe(m)} starten`,
  },
  day10Keep: {
    subject: 'mach heute weiter',
    notBecause: 'genau hier fällt das aufhören leicht. tu es nicht.',
    painDrop: (s, l) => `deine morgen sind von ${s} auf ${l} gegangen. hör jetzt nicht auf.`,
    daysIn: (d) => two(d, `${d} tag geschafft. mach weiter.`, `${d} tage geschafft. mach weiter.`),
    button: (m) => two(m, `die heutige ${m} minute machen`, `die heutigen ${m} minuten machen`),
  },
  day14Test: {
    subject: 'testtag: schau, was sich getan hat',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return `vor zwei wochen hast du ${shown}-mal fersenheben geschafft. mal sehen, wie es heute aussieht.`;
        case 'arch':
          return `vor zwei wochen hast du dein gewölbe ${shown} ${secondsDe(n)} gehalten. mal sehen, wie es heute aussieht.`;
        case 'balance':
          return `vor zwei wochen hast du ${shown} ${secondsDe(n)} auf einem bein gestanden. mal sehen, wie es heute aussieht.`;
        case 'symmetry':
          return `vor zwei wochen lag der unterschied zwischen deinen beinen bei ${shown} %. mal sehen, wie es heute aussieht.`;
      }
    },
    generic: 'zwei wochen sind um. schauen wir, was sich getan hat.',
    tests: '3 kurze tests, etwa 4 minuten.',
    button: 'zum test',
  },
  testResult: {
    subject: (name, before, now) => `${name}: ${before} → ${now}`,
    work: (w) =>
      w <= 1
        ? 'das ist eine woche arbeit, gemessen.'
        : w === 2
          ? 'das sind zwei wochen arbeit, gemessen.'
          : `das sind ${w} wochen arbeit, gemessen.`,
    goal: (target) => `das ziel: ${target}.`,
    button: 'deinen fortschritt ansehen',
  },
  goalReached: {
    subject: (goal) => `${goal}: geschafft`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return `du wolltest ${t}-mal fersenheben schaffen. und das hast du.`;
        case 'arch_hold':
          return `du wolltest dein gewölbe ${t} ${secondsDe(t)} halten. und das hast du.`;
        case 'balance':
          return `du wolltest ${t} ${secondsDe(t)} auf einem bein stehen. und das hast du.`;
        case 'symmetry':
          return `du wolltest den unterschied zwischen deinen beinen unter ${t} % bringen. und das hast du.`;
        case 'pain_free_mornings':
          return 'du wolltest leichtere morgen. jetzt bist du da.';
      }
    },
    next: (goal) => `als nächstes: ${goal}.`,
    buttonNext: 'nächstes ziel starten',
    buttonPlan: 'deinen plan ansehen',
  },
  painUp: {
    subject: 'eine härtere woche. so geht es weiter',
    lines: [
      'der schmerz ist diese woche etwas gestiegen. das kommt vor. dein plan ist schon leichter geworden.',
      'wenn du schwellungen, taubheit oder schmerzen in der nacht bemerkst, lass das ärztlich abklären.',
    ],
    button: 'den leichteren plan ansehen',
  },
  winback7: {
    subject: 'dein plan ist noch da',
    lines: ['nichts nachzuholen. es geht da weiter, wo du gerade stehst.', '3 minuten heute?'],
    button: 'mit 3 minuten starten',
  },
  winback21: {
    subject: 'wir sind da, wenn deine füße uns brauchen',
    saved: (name, value) => `deine werte sind gespeichert: ${name} ${value}.`,
    savedPlain: 'dein plan und dein fortschritt sind gespeichert.',
    button: 'walkito öffnen',
  },
  offer: {
    subject: (p) => (p != null ? `dein plan ist gespeichert, ${p} % rabatt` : 'dein plan ist gespeichert, jetzt günstiger'),
    ready: (goal, current, target) => `dein plan ist bereit: ${goal}. jetzt ${current}, das ziel ist ${target}.`,
    readyPlain: (goal) => `dein plan ist bereit und wartet auf dich: ${goal}.`,
    price: (price, standard) => `das jahresabo kostet ${price} statt ${standard}.`,
    priceUnknown: 'das jahresabo ist gerade günstiger.',
    button: (p) => (p != null ? `${p} % rabatt sichern` : 'angebot ansehen'),
  },
  offerFinal: {
    subject: 'das letzte angebot von uns',
    price: (price) => `das jahresabo für ${price}. danach kommen keine angebote mehr.`,
    priceUnknown: 'das jahresabo zu unserem niedrigsten preis. danach kommen keine angebote mehr.',
    button: (price) => (price != null ? `für ${price} sichern` : 'angebot ansehen'),
  },
  weekly: {
    subject: (s) => `deine woche: ${s} ${two(s, 'einheit', 'einheiten')}`,
    subjectWithMetric: (s, name, value) => `deine woche: ${s} ${two(s, 'einheit', 'einheiten')}, ${name} ${value}`,
    mornings: (avg) => `deine morgen lagen im schnitt bei ${avg}/10.`,
    next: (goal) => `nächste woche: ${goal}.`,
    button: 'nächste woche ansehen',
  },
  unsubscribePage: {
    title: 'du bist abgemeldet',
    done: 'walkito schickt dir keine e-mails mehr. du kannst sie in der app wieder einschalten: einstellungen → e-mail.',
    undo: 'e-mails wieder einschalten',
    resubscribed: 'e-mails sind wieder eingeschaltet.',
    invalid: 'dieser link funktioniert nicht mehr.',
  },
};
