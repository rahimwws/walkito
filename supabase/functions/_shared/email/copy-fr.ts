import type { Copy } from './copy.ts';
import { twoFr } from './plural.ts';

/**
 * French, «tu» throughout as in the app, with the app's words: «séance»,
 * «réévaluation» for the retest, «voûte», «montées sur pointes».
 *
 * French keeps the singular for 0 and 1, so every count goes through `twoFr`.
 * All lowercase, a plain hyphen, no pain figure in a subject: the rules in
 * `copy.ts` hold here too.
 */

const minutesFr = (m: number) => `${m} ${twoFr(m, 'minute', 'minutes')}`;
const secondsFr = (n: number) => twoFr(n, 'seconde', 'secondes');

export const FR: Copy = {
  greeting: (name) => (name ? `salut ${name},` : 'salut,'),
  footer: {
    why: 'tu reçois cet e-mail parce que tu utilises walkito.',
    unsubscribe: 'se désabonner',
    settings: 'réglages des e-mails',
  },
  goalTitle: {
    pain_free_mornings: 'des matins plus faciles',
    arch_hold: 'le maintien de la voûte',
    calf_raises: 'des mollets plus forts',
    balance: 'un meilleur équilibre',
    symmetry: 'des pieds égaux',
  },
  metricName: {
    calf: 'montées sur pointes',
    arch: 'maintien de la voûte',
    balance: 'équilibre',
    symmetry: 'écart entre les jambes',
  },
  resultName: {
    calf: 'tes montées sur pointes',
    arch: 'ton maintien de la voûte',
    balance: 'ton équilibre',
    symmetry: 'l’écart entre tes jambes',
  },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n} %` : `${n} s`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `moins de ${n} %` : `${n} s`),

  welcome: {
    subject: 'bienvenue sur walkito',
    intro: 'ici rahim et rahman - on a créé walkito, juste nous deux.',
    first: (m) => `ta première séance dure ${minutesFr(m)}. commence aujourd’hui, c’est la plus facile.`,
    firstRunner: (m) => `ta première séance dure ${minutesFr(m)} - moins que ton échauffement.`,
    button: 'ouvrir walkito',
    ps: 'p.-s. réponds à cet e-mail. on les lit tous.',
  },
  day2Morning: {
    subject: 'fais ça avant de sortir du lit',
    lines: [
      'le premier pas du matin est celui qui fait le plus mal.',
      '60 secondes d’étirement au lit changent ça. essaie demain.',
    ],
    button: 'voir l’étirement de 60 secondes',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'cette semaine, on s’occupe de tes matins',
      arch_hold: 'cette semaine, on s’occupe de ta voûte',
      calf_raises: 'cette semaine, on s’occupe de tes mollets',
      balance: 'cette semaine, on s’occupe de ton équilibre',
      symmetry: 'cette semaine, on rééquilibre tes deux jambes',
    },
    numbers: (name, current, target) => `${name} : ${current} aujourd’hui. objectif : ${target}.`,
    moves: 'chaque séance de la semaine fait bouger ce chiffre.',
    noNumbers: (goal) => `chaque séance de la semaine te rapproche de ton objectif : ${goal}.`,
    button: 'voir cette semaine',
  },
  day5Easy: {
    subject: 'trop facile ? tant mieux.',
    lines: [
      'la première semaine est douce exprès. on calme les choses avant d’ajouter de la charge.',
      'le vrai travail commence la semaine prochaine.',
    ],
    button: 'voir ta semaine',
  },
  day5Start: {
    subject: (m) => `la première dure ${minutesFr(m)}`,
    line: 'pas de salle, pas de matériel. assis, ça marche aussi.',
    button: (m) => `commencer avec ${minutesFr(m)}`,
  },
  day10Keep: {
    subject: 'la plupart des gens arrêtent à la semaine 4',
    notBecause: 'la plupart des gens arrêtent trop tôt. pas toi.',
    painDrop: (s, l) => `tes matins sont passés de ${s} à ${l}. c’est justement là que les gens arrêtent.`,
    daysIn: (d) => twoFr(d, `${d} jour déjà. continue.`, `${d} jours déjà. continue.`),
    button: (m) => (m <= 1 ? `faire la minute du jour` : `faire les ${m} minutes du jour`),
  },
  day14Test: {
    subject: 'jour de réévaluation - vois ce qui a changé',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return `il y a deux semaines, tu as fait ${shown} ${twoFr(n, 'montée', 'montées')} sur pointes. voyons aujourd’hui.`;
        case 'arch':
          return `il y a deux semaines, tu as tenu ta voûte ${shown} ${secondsFr(n)}. voyons aujourd’hui.`;
        case 'balance':
          return `il y a deux semaines, tu as tenu ${shown} ${secondsFr(n)} sur une jambe. voyons aujourd’hui.`;
        case 'symmetry':
          return `il y a deux semaines, l’écart entre tes jambes était de ${shown} %. voyons aujourd’hui.`;
      }
    },
    generic: 'deux semaines déjà. voyons ce qui a changé.',
    tests: '3 tests rapides, environ 4 minutes.',
    button: 'faire la réévaluation',
  },
  testResult: {
    subject: (name, before, now) => `${name} : ${before} → ${now}`,
    work: (w) =>
      w <= 1
        ? 'c’est une semaine de travail, mesurée.'
        : w === 2
          ? 'ce sont deux semaines de travail, mesurées.'
          : `ce sont ${w} semaines de travail, mesurées.`,
    goal: (target) => `l’objectif, c’est ${target}.`,
    button: 'voir tes progrès',
  },
  goalReached: {
    subject: (goal) => `${goal} - c’est fait`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return `tu voulais atteindre ${t} ${twoFr(t, 'montée', 'montées')} sur pointes. c’est fait.`;
        case 'arch_hold':
          return `tu voulais tenir ta voûte ${t} ${secondsFr(t)}. c’est fait.`;
        case 'balance':
          return `tu voulais tenir ${t} ${secondsFr(t)} sur une jambe. c’est fait.`;
        case 'symmetry':
          return `tu voulais ramener l’écart entre tes jambes sous ${t} %. c’est fait.`;
        case 'pain_free_mornings':
          return 'tu voulais des matins plus faciles. c’est fait.';
      }
    },
    next: (goal) => `prochaine étape : ${goal}.`,
    buttonNext: 'commencer le prochain objectif',
    buttonPlan: 'voir ton plan',
  },
  painUp: {
    subject: 'une semaine plus dure - voici le plan',
    lines: [
      'la douleur a un peu augmenté cette semaine. ça arrive. ton plan s’est déjà allégé.',
      'si tu remarques un gonflement, un engourdissement ou une douleur la nuit, consulte un médecin.',
    ],
    button: 'voir le plan allégé de la semaine',
  },
  winback7: {
    subject: 'ton plan t’attend toujours',
    lines: ['pas besoin de rattraper quoi que ce soit - il reprend là où tu en es.', '3 minutes aujourd’hui ?'],
    button: 'commencer avec 3 minutes',
  },
  winback21: {
    subject: 'toujours là si tes pieds en ont besoin',
    saved: (name, value) => `tes chiffres sont enregistrés : ${name} ${value}.`,
    savedPlain: 'ton plan et tes progrès sont enregistrés.',
    button: 'ouvrir walkito',
  },
  offer: {
    subject: (p) => (p != null ? `ton plan est enregistré - ${p} % de réduction` : 'ton plan est enregistré - à prix réduit'),
    ready: (goal, current, target) => `ton plan pour ${goal} est prêt : ${current} aujourd’hui, objectif ${target}.`,
    readyPlain: (goal) => `ton plan pour ${goal} est prêt et t’attend.`,
    price: (price, standard) => `l’abonnement annuel est à ${price} au lieu de ${standard}.`,
    priceUnknown: 'l’abonnement annuel coûte moins cher en ce moment.',
    button: (p) => (p != null ? `profiter de ${p} % de réduction` : 'voir l’offre'),
  },
  offerFinal: {
    subject: 'notre dernier message',
    price: (price) => `l’abonnement annuel à ${price}. après ça, plus d’offres.`,
    priceUnknown: 'l’abonnement annuel à notre prix le plus bas. après ça, plus d’offres.',
    button: (price) => (price != null ? `l’avoir pour ${price}` : 'voir l’offre'),
  },
  weekly: {
    subject: (s) => `ta semaine : ${s} ${twoFr(s, 'séance', 'séances')}`,
    subjectWithMetric: (s, name, value) => `ta semaine : ${s} ${twoFr(s, 'séance', 'séances')}, ${name} ${value}`,
    mornings: (avg) => `tes matins étaient en moyenne à ${avg}/10.`,
    next: (goal) => `la semaine prochaine : ${goal}.`,
    button: 'voir la semaine prochaine',
  },
  unsubscribePage: {
    title: 'désabonnement confirmé',
    done: 'walkito ne t’enverra plus d’e-mails. tu peux les réactiver dans l’app : réglages → e-mail.',
    undo: 'réactiver les e-mails',
    resubscribed: 'les e-mails sont réactivés.',
    invalid: 'ce lien ne fonctionne plus.',
  },
};
