import type { HomeCopy } from '@/components/Home';
import { PAIN_GOAL_MAX, PROGRAM } from '@/lib/site';

/*
 * The French (France) home page, translated from the `en` entry of `COPY` in
 * `components/Home.tsx` (2026-10-08). «Vous» throughout. Numbers come from
 * `PROGRAM` as in English; numbers and units are joined with a non-breaking
 * space, as is the space French puts before : ; ? ! and inside « ».
 *
 * Program, evidence and runners pages exist only in English, so the links to
 * them say «(en anglais)».
 */
const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;
const { testEveryDays, testEveryDaysAfterGoal, painFreeDays, retestTests, retestMinutes } = PROGRAM;

export const HOME_FR: HomeCopy = {
  meta: {
    title: 'Walkito\u00A0: exercices douleur au talon et pieds plats',
    description:
      'Walkito est un programme d’exercices personnalisé contre la douleur au talon, au pied et à la jambe, qui s’adapte chaque jour à l’état de vos pieds.',
  },
  h1a: 'Vous avez tout essayé\u00A0?',
  h1b: 'Essayez un plan conçu pour vos pieds.',
  lead: 'Walkito est un programme d’exercices personnalisé contre la douleur au talon, au pied et à la jambe, qui s’adapte chaque jour à l’état de vos pieds.',
  small: `${MIN_A}, ${MIN_B} ou ${MIN_C}\u00A0minutes par jour, à la maison.`,
  alt: {
    heroCenter: 'L’écran Aujourd’hui de Walkito\u00A0: un message d’accueil, le bilan du matin et la séance du jour',
  },
  storyH2: 'Ce n’est pas votre faute.',
  storyP:
    'Semelles, nouvelles chaussures, cinquante vidéos qui se contredisent. Aucune n’entraîne le pied. Ce qui manque, c’est un plan clair, pour les bons jours comme pour les mauvais.',
  storyChipsAfter: ['contredisent.', 'pied.', 'clair,', 'mauvais.'],
  storyAccent: 'un plan clair,',
  whoH2: 'Est-ce pour moi\u00A0?',
  whoKicker: 'Pour vous',
  whoLead:
    'Choisissez ce qui vous ressemble. Le plan part de là et change selon l’état de vos pieds, jour après jour.',
  who: {
    heel: {
      title: 'Douleur au talon et fasciite plantaire',
      text: 'Des premiers pas douloureux le matin, une douleur après être resté assis ou après une longue marche.',
      goal: 'Objectif\u00A0: des matins sans douleur',
    },
    flat: {
      title: 'Pieds plats',
      text: 'Des voûtes fatiguées et douloureuses, et des pieds qui s’affaissent vers l’intérieur.',
      goal: `Objectif\u00A0: tenir la voûte ${archHoldSeconds}\u00A0secondes`,
    },
    allday: {
      title: 'Debout toute la journée',
      text: 'Soignants, commerce, entrepôt, restauration. Des pieds qui font mal en fin de service.',
      goal: null,
    },
    run: {
      title: 'Coureurs et sportifs',
      text: 'Une douleur au talon, au tendon d’Achille ou au tibia qui revient dès que vous vous entraînez.',
      goal: `Objectif\u00A0: ${calfRaises} montées sur pointes sur une jambe`,
    },
  },
  whoMore: 'Lire le guide',
  whoMoreEn: 'Lire (en anglais)',
  how: [
    {
      title: 'Une semaine à la fois, autour d’un objectif',
      text: `Chaque semaine tourne autour d’un objectif mesurable\u00A0: une douleur au talon le matin de ${PAIN_GOAL_MAX}/10 ou moins pendant ${painFreeDays}\u00A0jours de suite, tenir la voûte ${archHoldSeconds}\u00A0secondes, ${calfRaises} montées sur pointes sur une jambe, ${balanceSeconds}\u00A0secondes d’équilibre sur une jambe, ou moins de ${gapPercent}\u00A0% d’écart entre la gauche et la droite. Quand vous en atteignez un, il passe en entretien et le suivant prend sa place.`,
      link: 'Comment fonctionne le plan (en anglais)',
    },
    {
      title: `Un test tous les ${testEveryDays}\u00A0jours, puis tous les ${testEveryDaysAfterGoal}`,
      text: `${retestTests} tests physiques en ${retestMinutes}\u00A0minutes environ\u00A0: montées sur pointes jusqu’à épuisement, maintien de la voûte, équilibre sur une jambe des deux côtés. Tous les ${testEveryDays}\u00A0jours jusqu’à ce que vous atteigniez votre premier objectif, puis tous les ${testEveryDaysAfterGoal}. Les progrès sont mesurés, pas devinés d’après votre ressenti de la semaine.`,
      link: 'Ce que mesurent les tests (en anglais)',
    },
    {
      title: 'Choisis d’après la recherche publiée',
      text: 'Des exercices choisis d’après la recherche et les recommandations publiées. Walkito lui-même n’a pas été testé dans un essai clinique.',
      link: 'Voir les données scientifiques (en anglais)',
    },
  ],
  faq: [
    {
      q: 'Au bout de combien de temps vais-je sentir une différence\u00A0?',
      a: `Cela dépend de la personne et de la douleur. Le plan se construit une semaine à la fois autour d’un objectif mesurable, et un test tous les ${testEveryDays}\u00A0jours vous montre ce qui change vraiment.`,
    },
    {
      q: 'Faut-il du matériel\u00A0?',
      a: 'Non. Certains exercices utilisent une serviette, une marche ou un escalier, un élastique, un coussin ou une balle de massage, et Walkito vous demande ce que vous avez. Tout ce qui demande un objet que vous n’avez pas est retiré de votre plan.',
    },
    {
      q: 'Est-ce adapté aux pieds plats\u00A0?',
      a: 'Oui, aux pieds plats souples. Si une voûte s’est affaissée brusquement à l’âge adulte, consultez d’abord un professionnel de santé.',
    },
    {
      q: 'Est-ce un avis médical\u00A0?',
      a: 'Non. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    },
    { q: 'En quelles langues est l’application\u00A0?', a: 'En sept langues\u00A0: anglais, russe, espagnol, portugais, français, italien et allemand.' },
  ],
};
