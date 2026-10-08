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
  chips: ['Mauvais réveil\u00A0? Séance plus légère', `Un test tous les ${testEveryDays}\u00A0jours`, `${MIN_A}, ${MIN_B} ou ${MIN_C}\u00A0min`],
  alt: {
    heroLeft: 'Walkito après un mauvais matin noté\u00A0: la séance du jour devient plus légère',
    heroCenter: 'L’écran Aujourd’hui de Walkito\u00A0: un message d’accueil, le bilan du matin et la séance du jour',
    heroRight: 'Walkito lit la vidéo d’un exercice avec sa consigne',
    checkin: 'Walkito\u00A0: après un matin douloureux, la séance du jour fait trois minutes d’exercices assis',
    where: 'Walkito\u00A0: où avez-vous mal le plus souvent, avec le talon et la voûte marqués sur une jambe',
    goal: 'Walkito\u00A0: le choix d’un objectif, avec «\u00A0tenir debout toute la journée\u00A0» sélectionné',
    week: 'Walkito\u00A0: le plan de la semaine, du lundi au dimanche avec les jours de repos, et la semaine suivante',
    exercise: 'Walkito\u00A0: un étirement plantaire en vidéo avec un minuteur',
    quick: 'Walkito\u00A0: des routines rapides pour quand ça fait mal, avant et après la course, au travail et avant le premier pas',
    tests: 'Walkito\u00A0: résultats des tests, maintien de la voûte en hausse de 11\u00A0secondes et montées sur pointes en hausse de 4, avec 19 pour la jambe gauche et 22 pour la droite',
  },
  storyH2: 'Ce n’est pas votre faute.',
  storyP:
    'Semelles, nouvelles chaussures, attelle de nuit, cinquante vidéos qui disent toutes autre chose. Elles peuvent donner à vos pieds une impression de soutien, mais aucune n’entraîne le pied. Ce qui manque, c’est un plan clair\u00A0: quels exercices, combien, dans quel ordre, et quoi faire les mauvais jours.',
  whoH2: 'Est-ce pour moi\u00A0?',
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
  adjustH2: 'Il s’adapte à votre matin.',
  adjustP:
    'Chaque matin, vous indiquez d’un geste comment vont vos pieds. Si le matin est mauvais, la séance du jour devient plus courte et plus facile. Après une longue journée debout, les exercices avec charge sont retirés. Les bons jours, le plan n’accélère jamais.',
  answersH2: 'Un plan construit à partir de vos réponses.',
  answersP:
    'Dites à Walkito où vous avez mal, de quel côté, ce que vous faites et ce que vous voulez pouvoir refaire. Il construit votre plan à partir de là, une semaine à la fois, et pas une routine identique pour tout le monde.',
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
      title: 'Fondé sur la recherche publiée',
      text: 'La recommandation clinique de 2023 sur la douleur au talon donne la note A aux étirements et la note B au renforcement musculaire, et un essai randomisé a montré qu’un renforcement à charge élevée améliorait la douleur et la fonction plus vite que les étirements.',
      link: 'Voir les données scientifiques (en anglais)',
    },
  ],
  insideH2: 'Dans l’application',
  inside: {
    week: 'Votre semaine, jours de repos compris',
    video: 'Une vidéo pour chaque exercice',
    quick: 'Des routines rapides pour chaque moment',
    tests: 'Vos tests, gauche contre droite',
  },
  faqH2: 'Questions',
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
    { q: 'En quelles langues est l’application\u00A0?', a: 'En anglais, en russe et en espagnol.' },
  ],
  finalH2: 'Vos pieds, votre plan.',
};
