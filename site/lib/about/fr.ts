import { PAIN_GOAL_MAX, PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** `3, 5 ou 7`: the plan's options as a French list. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}`;

/*
 * Translated from `en.ts` (2026-10-08). French (France) with «vous».
 * Nothing here is invented: no reviewer is named because none has reviewed the
 * guides yet. When one does, their name, credentials and what they checked
 * replace that paragraph in every language. The evidence labels match the
 * French ones in `components/Evidence.tsx`.
 */
export const ABOUT_FR: About = {
  lang: 'fr',
  title: 'À propos de Walkito\u00A0: comment nos guides sont écrits',
  description:
    'Ce qu’est Walkito, comment ses guides sur la douleur au talon et les pieds plats sont écrits et sourcés, ce qu’il ne fait pas, et comment signaler une erreur.',
  h1: 'À propos de Walkito',
  lede: 'Walkito est une application pour iPhone et Android avec des exercices pour la douleur au talon, la fasciite plantaire et les pieds plats, pensés pour les premiers pas au lever et les longues journées debout. Un programme qui s’adapte chaque matin à l’état de vos pieds. Cette page explique comment les guides de ce site sont écrits et d’où viennent leurs chiffres. Elle dit aussi ce que Walkito ne fait pas, et comment nous prévenir quand quelque chose est faux.',
  sections: [
    {
      h2: 'Walkito en bref',
      id: 'facts',
      bullets: [
        '**Ce que c’est\u00A0:** une application pour iPhone et Android avec des exercices pour la douleur au talon, la fasciite plantaire et les pieds plats.',
        '**Téléphones\u00A0:** iPhone, sur l’[App Store](https://apps.apple.com/app/id6813076846), et Android, sur [Google Play](https://play.google.com/store/apps/details?id=com.walkito.app).',
        `**Séances\u00A0:** ${or(PROGRAM.sessionMinutes)}\u00A0minutes, à la maison. Walkito vous demande ce dont vous disposez, comme une serviette ou une marche, et écarte les exercices qui demandent autre chose.`,
        `**Fréquence\u00A0:** vous choisissez ${or(PROGRAM.daysPerWeek)}\u00A0jours d’entraînement par semaine. Chaque séance s’adapte à la façon dont s’est passée votre matinée.`,
        `**Progrès\u00A0:** un court test tous les ${PROGRAM.testEveryDays}\u00A0jours.`,
        '**Langues\u00A0:** anglais, russe, espagnol, portugais, français, italien et allemand.',
        '**Prix\u00A0:** téléchargement gratuit, avec un abonnement annuel ou hebdomadaire dans l’application. L’App Store ou Google Play affiche le prix dans votre devise avant que vous ne vous abonniez.',
        '**Qui la conçoit\u00A0:** Rahim Hudaykulyyev et Rahman Bazarov, les deux cofondateurs de Walkito.',
        '**Ce que ce n’est pas\u00A0:** un dispositif médical. Walkito ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
        '**Nom\u00A0:** Walkito n’a aucun lien avec walkito.com, un service de promenade de chiens.',
      ],
    },
    {
      h2: 'Qu’est-ce que Walkito\u00A0?',
      paragraphs: [
        `Walkito est une application iPhone et Android qui construit votre plan d’exercices une semaine à la fois, autour d’objectifs mesurables. Walkito n’a aucun lien avec walkito.com, un service de promenade de chiens. Il y a cinq objectifs\u00A0: des matins sans douleur (douleur du matin à ${PAIN_GOAL_MAX}/10 ou moins pendant ${PROGRAM.painFreeDays}\u00A0jours de suite), tenir la voûte ${PROGRAM.goals.archHoldSeconds}\u00A0secondes, ${PROGRAM.goals.calfRaises} montées sur pointes sur une jambe, ${PROGRAM.goals.balanceSeconds}\u00A0secondes d’équilibre sur une jambe, et moins de ${PROGRAM.goals.gapPercent}\u00A0% d’écart entre votre côté gauche et votre côté droit. Vous commencez avec trois d’entre eux au maximum. Si quelque chose fait mal, la douleur passe en premier.`,
        `Vous choisissez ${or(PROGRAM.daysPerWeek)}\u00A0jours d’entraînement par semaine et des séances de ${or(PROGRAM.sessionMinutes)}\u00A0minutes. La séance de chaque jour s’adapte à votre matin. Tous les ${PROGRAM.testEveryDays}\u00A0jours, un court test montre si vos chiffres bougent. Une fois votre premier objectif atteint, le test a lieu tous les ${PROGRAM.testEveryDaysAfterGoal}\u00A0jours.`,
        'Le plan n’a pas de durée fixe. Quand vous atteignez un objectif, il passe en entretien à une dose plus faible, et le suivant prend sa place. Cela continue tant que vous utilisez Walkito.',
        'Walkito est disponible en anglais, en russe, en espagnol, en portugais, en français, en italien et en allemand.',
        'Walkito s’utilise aussi directement dans ChatGPT et Claude, où il répond avec de courtes vidéos d’exercices et un plan de départ.',
      ],
    },
    {
      h2: 'Notre méthode de recherche',
      id: 'how-we-research',
      paragraphs: [
        // The one paragraph writers quote (outreach), as in `en.ts`: 'more than 250' studies and guidelines.
        'Les guides de Walkito s’appuient sur plus de 250\u00A0études publiées et recommandations cliniques. Nous lisons l’article en entier, pas seulement son résumé (abstract), avant d’en reprendre un chiffre sur une page, et chaque note et chaque chiffre renvoient à l’étude qui les soutient, pour que vous puissiez l’ouvrir et vérifier. Aucun professionnel de santé diplômé n’a encore relu les guides.',
        'Rahim Hudaykulyyev et Rahman Bazarov, les deux cofondateurs de Walkito, écrivent les guides de ce site, dont [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) et [exercices pour pieds plats](/fr/exercices-pieds-plats/). Nous les construisons à partir de recommandations de pratique clinique, d’essais randomisés et de revues systématiques. Nous n’utilisons pas d’articles de blog, de forums ni de synthèses d’autres sites comme source. Quand une synthèse cite une étude, nous allons lire l’étude elle-même.',
        'Les exercices et les affirmations portent l’un des trois niveaux de preuve. **Solide** veut dire qu’une recommandation clinique lui donne une bonne note, ou que plusieurs bons essais concordent. **Modéré** veut dire qu’au moins un essai bien conçu le soutient. **Préliminaire** veut dire que les études sont peu nombreuses ou toutes récentes\u00A0: ça vaut la peine d’essayer, et le niveau peut changer avec de nouvelles études. Une règle populaire qu’un essai a testée sans la confirmer est marquée **Non étayé**.',
        'Walkito n’a pas de sponsors, pas de liens d’affiliation et pas de placements payants. Aucun contenu n’est publié contre paiement. Nous revérifions une page quand de nouvelles recherches sortent sur son sujet. Chaque guide suit cinq règles\u00A0:',
      ],
      bullets: [
        '**Chaque chiffre remonte à une source primaire.** C’est-à-dire un essai randomisé, une méta-analyse ou une recommandation clinique. La source est indiquée et liée sur la page qui l’utilise. Si nous ne pouvons pas faire remonter un chiffre à l’une d’elles, il ne va pas sur le site. Nous avons déjà supprimé des phrases pour cette raison.',
        '**La recommandation de pratique clinique de 2023 sur la douleur au talon est la référence.** Elle est publiée par le Journal of Orthopaedic & Sports Physical Therapy. Elle note chaque intervention selon la force de ses preuves, y compris celles qu’elle déconseille.',
        '**Les nuances accompagnent les chiffres.** Un résultat à trois mois est toujours donné avec ce qui s’est passé à douze mois. Chaque affirmation sur la forme de la voûte dit sur quels pieds elle a été mesurée.',
        '**Les doses sont les doses de départ de Walkito.** Elles montrent où commencent les exercices de Walkito. Ce n’est pas une prescription pour vous.',
        '**Aucune promesse de guérison.** Les pages disent ce que la recherche a trouvé et où ses preuves s’arrêtent.',
      ],
    },
    {
      h2: 'Que ne fait pas Walkito\u00A0?',
      paragraphs: [
        'Walkito ne pose pas de diagnostic, ne soigne pas et ne remplace pas un professionnel de santé. Walkito ne peut pas vous dire ce qui cause votre douleur. Consultez d’abord un professionnel de santé si\u00A0:',
      ],
      // The guides' list (`lib/guides/fr.ts`), word for word, plus the arch.
      bullets: [
        'la douleur a commencé après une blessure ou une chute',
        'vous ne pouvez pas poser le pied, ou vous boitez',
        'elle s’accompagne d’engourdissements, de fourmillements, de brûlures, d’un gonflement ou de chaleur',
        'le talon est rouge, ou vous avez de la fièvre ou vous ne vous sentez pas bien',
        'elle vous réveille la nuit',
        'elle est vive, ou s’aggrave alors que vous avez réduit la charge',
        'presser les côtés du talon fait mal, ou la douleur monte pendant vos courses après une hausse du kilométrage\u00A0; les deux peuvent être des signes de fracture de fatigue',
        'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
        'les deux talons font mal et d’autres articulations sont gonflées ou raides',
        'elle ne s’est pas améliorée après plusieurs semaines d’exercice et de charge réduite',
        'une voûte s’est affaissée brusquement à l’âge adulte',
        'la voûte reste plate même quand le pied ne touche plus le sol',
      ],
    },
    {
      h2: 'Un professionnel de santé a-t-il relu les guides de Walkito\u00A0?',
      id: 'clinician',
      paragraphs: [
        'Aucun professionnel de santé diplômé n’a encore relu les guides de Walkito. Rahim et Rahman les écrivent à partir des recherches publiées citées sur chaque page.',
        'Quand un professionnel de santé les relira, cette page indiquera son nom, ses diplômes et ce qu’il a vérifié. D’ici là, aucune page de ce site ne prétend avoir été relue par un médecin.',
      ],
    },
    {
      h2: 'Comment signaler une erreur\u00A0?',
      paragraphs: [
        `Pour signaler une erreur sur ce site, écrivez à ${SUPPORT_EMAIL}. Ce peut être un chiffre qui ne correspond pas à sa source, une dose qui semble fausse ou un lien cassé. Nous corrigeons la page elle-même.`,
        'Chaque page indique la date du dernier changement de son contenu. Cette date ne bouge que quand le contenu change vraiment.',
      ],
    },
    {
      h2: 'Que fait Walkito de mes données\u00A0?',
      paragraphs: [
        'La [politique de confidentialité](/fr/confidentialite/) de Walkito explique ce que Walkito conserve, ce qui quitte votre téléphone et comment le supprimer. En bref, votre plan et vos bilans quotidiens sont enregistrés dans votre compte, et les données d’Apple Santé restent sur votre téléphone.',
      ],
    },
  ],
};
