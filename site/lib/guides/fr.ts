import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Translated from `en.ts` (2026-10-08), written around the French queries:
 * «exercices pieds plats», «voûte plantaire douloureuse», «fasciite plantaire»,
 * «douleur au talon», «épine calcanéenne». French (France) with «vous».
 * Figures, doses, grades and qualifiers are identical to `en.ts`. Numbers and
 * units are joined with a non-breaking space, as is the space French puts
 * before : ; ? ! and inside « ».
 *
 * Only the two guides, About, support, privacy and terms exist in French, so
 * every other link points at the English page and says «(en anglais)».
 * The plan has no fixed length; every number about it is read from `PROGRAM`.
 */

/** `3, 5 ou 7`: the plan's options as a French list. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}`;

const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, as `en.ts` and the About pages. Calcaneal
 * stress fracture is one of the causes of heel pain the 2023 guideline names
 * alongside plantar fasciitis, which is why the site spells out its signs.
 */
const RED_FLAGS = {
  h2: 'Consultez d’abord un professionnel de santé si',
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
  ],
} as const;

export const FLAT_FEET_FR: Guide = {
  lang: 'fr',
  page: 'flatFeet',
  mainSource: CITE.brijwasi,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercices pieds plats\u00A0: voûte affaissée et douleur',
  description:
    'Exercices pour pieds plats souples et voûte affaissée\u00A0: doses, fréquence, ce que vous devez sentir, ce qu’ont montré les essais et la douleur de voûte.',
  h1: 'Exercices pour pieds plats, voûte affaissée et douleur de voûte',
  lede: 'Le soir, vos pieds sont fatigués et vos voûtes font mal. Debout, vos pieds semblent s’affaisser vers l’intérieur et la voûte descend vers le sol. On vous a peut-être dit que les pieds plats, c’est votre morphologie et qu’il n’y a pas à s’en soucier. Vouloir faire quelque chose a du sens, et il existe de vraies recherches sur l’entraînement de la voûte.',
  intro: [
    'Commencez par une vérification\u00A0: vos pieds plats sont-ils souples, c’est-à-dire la voûte revient-elle quand vous soulevez le pied\u00A0? Pour les pieds plats souples, un essai sur 52\u00A0personnes a montré que six semaines d’exercices du pied court, de travail de la cheville, de renforcement de la hanche et d’étirements, faits ensemble, modifiaient la forme de la voûte davantage que dans un groupe témoin. Les données sur le pied court seul sont plus minces. Une revue de 2024 n’a trouvé aucun changement net dans l’ensemble, et un changement sur une seule mesure de la voûte, seulement dans les programmes de plus de six semaines. Les deux ont mesuré la forme de la voûte, pas la douleur. Si votre douleur est près du talon, la recherche sur la douleur au talon est un meilleur guide.',
  ],
  takeaways: [
    'L’essai randomisé de cette page portait sur des pieds plats souples, où la voûte revient quand le pied ne touche plus le sol (Brijwasi et Borkar, 2023).',
    'Dans cet essai sur 52\u00A0personnes, six semaines de pied court, de travail de la cheville, de la hanche et d’étirements ont modifié la forme de la voûte davantage que dans le groupe témoin (Brijwasi et Borkar, 2023).',
    'Une revue de 2024 sur l’entraînement du pied court n’a trouvé aucun changement net dans l’ensemble, et une amélioration sur une mesure de la voûte seulement dans les programmes de plus de six semaines (Cheng et coll., 2024).',
    'Un pied plat rigide, qui reste plat même hors du sol, est structurel, et l’exercice ne changera pas sa forme.',
    'Ces études ont mesuré la forme de la voûte, pas la douleur. Pour la douleur au talon, la recommandation de 2023 donne aux étirements du fascia plantaire et du mollet sa meilleure note, A, et au renforcement musculaire un B.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Comment savoir si vos pieds plats sont souples ou rigides\u00A0?',
      figure: { id: 'arches', caption: 'Les mêmes os du pied avec un pied plat, une voûte normale et une voûte haute, vus du côté intérieur.', alt: 'Trois pieds vus du côté intérieur sur un sol plat\u00A0: un pied plat dont la voûte repose au sol, une voûte normale avec un petit espace dessous et une voûte haute avec un grand espace sous le milieu du pied.' },
      paragraphs: [
        'Une vérification de quelques secondes suffit pour savoir si vos pieds plats sont souples ou rigides. C’est important, car l’essai de cette page portait sur des pieds plats souples, et l’exercice ne changera pas la forme d’un pied rigide. La revue de 2024 regroupait des études sur les pieds plats en général. Walkito ne vérifie pas votre type de pied, cette vérification vous revient donc\u00A0:',
      ],
      bullets: [
        'Mettez-vous debout pieds nus et regardez l’intérieur de votre pied. Sur un pied plat, la voûte est basse ou touche le sol.',
        'Soulevez ce pied du sol, ou montez sur la pointe des pieds, et regardez à nouveau.',
        'Si la voûte réapparaît, le pied plat est **souple**. Les exercices ci-dessous sont faits pour ce type de pied.',
        'Si la voûte reste plate même hors du sol, le pied est **rigide**. C’est un problème structurel que l’exercice ne changera pas. Laissez de côté l’objectif de maintien de la voûte et consultez un professionnel de santé avant de commencer un programme.',
        '«\u00A0Voûte affaissée\u00A0» est en général juste un autre nom pour les pieds plats. Mais si une voûte s’est affaissée **brusquement**, d’un seul côté, à l’âge adulte, consultez un professionnel de santé avant de l’entraîner, quel que soit le résultat de la vérification.',
      ],
    },
    {
      h2: 'Les exercices pour pieds plats, avec les doses de départ',
      paragraphs: [
        'Dans Walkito, les exercices pour pieds plats commencent par ramasser une serviette avec les orteils et lever le gros orteil, puis passent par trois versions du pied court. L’écartement des orteils, l’inversion avec élastique, l’équilibre sur une jambe, l’abduction de hanche et les étirements du mollet complètent le tout. Ce sont les doses de départ de Walkito, pas une prescription. Faites-les pieds nus. [Comment ces guides sont écrits](/fr/a-propos/).',
        'Le pied court est le cœur du travail de la voûte. Vous raccourcissez le pied en tirant la base des orteils vers le talon, pour que la voûte se soulève, sans recroqueviller les orteils. Le pied court, le renforcement de la hanche et les étirements sont ce que l’essai a testé. Ramasser la serviette, lever le gros orteil, écarter les orteils, l’inversion avec élastique et l’équilibre sur une jambe sont des ajouts propres à Walkito.',
        'Vous faites un seul exercice de voûte à la fois, celui de votre niveau. Walkito vous fait monter d’un cran quand les deux dernières séances avec cet exercice vous ont paru faciles. Tant que la voûte est votre objectif, chaque séance contient un exercice de voûte, et les autres se relaient. Certains exercices demandent une serviette ou un élastique. Walkito vous demande ce que vous avez et retire ce qui vous manque. Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour aujourd’hui. C’est le seuil où Walkito met fin à une séance.',
      ],
      table: {
        head: ['Exercice', 'Dose', 'Fréquence', 'Ce que vous devez sentir', 'Arrêtez si'],
        rows: [
          ['Ramasser la serviette', '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied', 'À chaque séance, tant que c’est votre niveau', 'Les petits muscles sous la voûte au travail', 'La douleur atteint 6/10'],
          ['Lever le gros orteil', '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied', 'À chaque séance, tant que c’est votre niveau', 'Le gros orteil qui bouge tout seul', 'La douleur atteint 6/10'],
          ['Pied court, assis', '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied', 'À chaque séance, tant que c’est votre niveau', 'La voûte qui se soulève, orteils détendus', 'La douleur atteint 6/10'],
          ['Pied court, debout', '3\u00A0séries de 8, tenir 5\u00A0secondes, deux pieds', 'À chaque séance, tant que c’est votre niveau', 'La voûte qui travaille en portant votre poids', 'La douleur atteint 6/10'],
          ['Pied court, sur une jambe', '3\u00A0séries de 10, tenir 5\u00A0secondes, chaque pied', 'À chaque séance, tant que c’est votre niveau', 'Un travail plus dur dans la voûte, le gros orteil appuyé au sol', 'La douleur atteint 6/10'],
          ['Écarter les orteils', '3\u00A0séries de 10, chaque pied', 'Jours de renforcement, en alternance avec l’inversion avec élastique', 'Un effort dans les petits muscles du pied', 'La douleur atteint 6/10'],
          ['Inversion avec élastique', '3\u00A0séries de 12, chaque pied', 'Jours de renforcement, après six séances de pied court debout', 'Un travail le long de l’intérieur du pied et de la cheville', 'La douleur atteint 6/10'],
          ['Équilibre sur une jambe', '3\u00A0maintiens de 20\u00A0secondes, chaque jambe', 'Jours d’équilibre', 'Le pied et la cheville qui font de petites corrections', 'La douleur atteint 6/10'],
          ['Abduction de hanche', '3\u00A0séries de 10, chaque jambe, debout, avec un élastique', 'Jours de renforcement, quand l’objectif gauche-droite est dans votre plan', 'Un travail à l’extérieur de la hanche', 'La douleur atteint 6/10'],
          ['Étirement du mollet et du soléaire', '2\u00A0maintiens de 30\u00A0secondes pour chaque étirement, chaque jambe', 'La plupart des séances, en alternance avec les autres étirements', 'Un étirement dans le mollet, puis plus bas, près du talon', 'La douleur atteint 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Ramasser la serviette',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'Les petits muscles sous la voûte au travail',
          how: 'Asseyez-vous avec une serviette à plat sur le sol sous votre pied. Ramenez la serviette vers vous avec les orteils, le talon reste au sol. Cet exercice réveille les petits muscles sous la voûte.',
          image: 'Exercice\u00A0: ramasser la serviette',
          media: 'towel_scrunch',
          caption: 'Ramasser la serviette\u00A0: ramenez-la avec les orteils, le talon reste au sol',
          alt: 'Une personne assise qui ramène une serviette avec les orteils d’un pied',
        },
        {
          name: 'Lever le gros orteil',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'Le gros orteil qui bouge tout seul',
          how: 'Asseyez-vous, pieds à plat. Levez seulement le gros orteil et tenez. Les quatre autres orteils restent à plat au sol. Cet exercice apprend au gros orteil à bouger seul, et c’est la première étape pour activer la voûte.',
          image: 'Exercice\u00A0: lever le gros orteil',
          media: 'big_toe_lift',
          caption: 'Lever le gros orteil\u00A0: seul le gros orteil monte, les quatre autres restent à plat',
          alt: 'Un pied au sol qui lève seulement le gros orteil, la voûte mise en évidence',
        },
        {
          name: 'Pied court, assis',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023. Seul, le pied court donne des résultats plus faibles.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'La voûte qui se soulève',
          how: 'Asseyez-vous, le pied à plat au sol. Tirez la base des orteils vers le talon pour que la voûte se soulève, et tenez. Ne recroquevillez pas les orteils. C’est l’erreur la plus fréquente sur cet exercice.',
          image: 'Exercice\u00A0: pied court, assis',
          media: 'short_foot_seated',
          caption: 'Pied court, assis\u00A0: tirez la base des orteils vers le talon pour soulever la voûte',
          alt: 'Une jambe en position assise, le pied à plat au sol, les muscles de la voûte mis en évidence quand elle se soulève',
        },
        {
          name: 'Pied court, debout',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023. Seul, le pied court donne des résultats plus faibles.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, deux pieds',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'La voûte qui travaille sous votre poids',
          how: 'Tenez-vous debout, le poids sur les deux pieds, et faites le même mouvement. Les orteils restent à plat et allongés. Seule la voûte monte. Ce sont les mêmes muscles que dans la version assise, qui portent maintenant votre poids.',
          image: 'Exercice\u00A0: pied court, debout',
          media: 'short_foot_double',
          caption: 'Pied court, debout\u00A0: orteils à plat et allongés, seule la voûte monte',
          alt: 'Deux jambes debout, la voûte et le mollet d’une jambe mis en évidence quand la voûte se soulève',
        },
        {
          name: 'Pied court, sur une jambe',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023. Seul, le pied court donne des résultats plus faibles.' },
          dose: '3\u00A0séries de 10, tenir 5\u00A0secondes, chaque pied',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'Un travail plus dur dans la voûte',
          how: 'Tenez-vous sur un pied et soulevez la voûte. Gardez le gros orteil au sol. S’il se lève, la voûte triche. C’est en travaillant un pied à la fois que le côté le plus faible se voit.',
          image: 'Exercice\u00A0: pied court, sur une jambe',
          media: 'short_foot_single',
          caption: 'Pied court, sur une jambe\u00A0: soulevez la voûte, le gros orteil reste au sol',
          alt: 'Un pied posé au sol, la voûte mise en évidence quand elle se soulève',
        },
        {
          name: 'Écarter les orteils',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0séries de 10, chaque pied',
          often: 'Jours de renforcement',
          feel: 'Un effort dans les petits muscles du pied',
          how: 'Écartez les orteils autant que possible, puis tenez. Des orteils qui s’écartent partagent la charge avec la voûte. Il ne s’agit pas de les lever.',
          image: 'Exercice\u00A0: écarter les orteils',
          media: 'toe_spread',
          caption: 'Écarter les orteils\u00A0: écartez-les au maximum, et tenez',
          alt: 'Un pied vu de face, les petits muscles entre les orteils mis en évidence quand ils s’écartent',
        },
        {
          name: 'Inversion avec élastique',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0séries de 12, chaque pied',
          often: 'Jours de renforcement',
          feel: 'Un travail le long de l’intérieur du pied et de la cheville',
          how: 'Asseyez-vous avec un élastique autour du pied et tournez le pied vers l’intérieur contre sa résistance. C’est le pied qui bouge, pas la jambe. Le genou reste immobile. Walkito n’ajoute cet exercice qu’après six séances de pied court debout, pour que les muscles propres à la voûte passent en premier.',
          image: 'Exercice\u00A0: inversion avec élastique',
          media: 'band_inversion',
          caption: 'Inversion avec élastique\u00A0: tournez le pied vers l’intérieur, le genou reste immobile',
          alt: 'Une jambe avec un élastique autour du pied, qui tourne le pied vers l’intérieur, le bas de la jambe mis en évidence',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, chaque jambe',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied et la cheville',
          how: 'Tenez-vous sur un pied et fixez un point. Laissez le pied osciller. C’est voulu\u00A0: ces oscillations, c’est le pied qui fait le travail d’équilibre.',
          image: 'Exercice\u00A0: équilibre sur une jambe',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: tenez-vous sur un pied et laissez-le se corriger',
          alt: 'Une personne en équilibre sur une jambe, les muscles du bas de la jambe mis en évidence',
        },
        {
          name: 'Abduction de hanche',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023.' },
          dose: '3\u00A0séries de 10, chaque jambe',
          often: 'Jours de renforcement',
          feel: 'Un travail à l’extérieur de la hanche',
          how: 'Debout, avec un élastique, écartez une jambe sur le côté contre sa résistance. Poussez par le talon, pas par les orteils. Une hanche qui cède fait retomber la charge sur la voûte.',
          image: 'Exercice\u00A0: abduction de hanche',
          media: 'hip_abduction',
          caption: 'Abduction de hanche\u00A0: écartez une jambe sur le côté contre l’élastique',
          alt: 'Une personne debout avec un élastique autour des deux jambes, qui écarte une jambe sur le côté, l’extérieur de la hanche mis en évidence',
        },
        {
          name: 'Étirement du mollet et du soléaire',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023. Cet essai a mesuré la forme de la voûte, pas la douleur.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes pour chaque étirement, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le mollet, puis près du talon',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant, et sentez l’étirement dans le mollet. Puis pliez le genou arrière jusqu’à le sentir plus bas, près du talon. C’est le soléaire, le muscle profond du mollet.',
          image: 'Exercice\u00A0: étirement du mollet et du soléaire',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: mains au mur, jambe arrière tendue, talon au sol',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
      ],
    },
    {
      h2: 'Combien de temps avant que les exercices changent la voûte\u00A0?',
      paragraphs: [
        'Dans la recherche actuelle, les exercices pour pieds plats ont modifié la voûte au bout de six semaines ou plus, et seulement sur des pieds plats souples. Dans un essai sur 52\u00A0personnes aux pieds plats **souples**, un programme de six semaines d’exercices du pied court, de travail de la cheville, de renforcement de la hanche et d’étirements a modifié deux mesures de la forme de la voûte davantage que dans le groupe témoin.',
        'Les données sur le pied court seul sont plus minces. Une revue de 2024 a regroupé des études sur l’entraînement du pied court chez des personnes aux pieds plats en général. Dans l’ensemble, elle n’a trouvé aucune différence nette avec les groupes témoins pour la forme de la voûte ou la posture du pied. Seuls les programmes de plus de six semaines ont réduit l’affaissement de la voûte sous votre poids, et les auteurs disent que des études plus grandes sont nécessaires. Prévoyez donc au moins six semaines, et plus si vous faites le pied court seul.',
        `C’est une des raisons pour lesquelles le plan de Walkito n’a pas de date de fin. L’objectif de voûte, tenir la voûte ${PROGRAM.goals.archHoldSeconds}\u00A0secondes, reste dans le plan jusqu’à ce que vous l’atteigniez, quel que soit le nombre de semaines nécessaire. Le maintien de la voûte est testé tous les ${PROGRAM.testEveryDays}\u00A0jours jusqu’à votre premier objectif atteint, puis tous les ${PROGRAM.testEveryDaysAfterGoal}, pour que vous voyiez si ça bouge. Les essais sont résumés sur [la page des données scientifiques](/science/) (en anglais).`,
      ],
      sourceNote:
        'Brijwasi et Borkar\u00A0: l’affaissement du naviculaire (la distance dont descend l’os naviculaire, à l’intérieur de la voûte, quand vous vous mettez debout) s’est amélioré de 0,4\u00A0cm, et l’angle de la voûte de 16\u00A0degrés, davantage que dans le groupe témoin. Cheng et coll.\u00A0: aucune différence significative dans l’ensemble pour l’affaissement du naviculaire ou le Foot Posture Index\u00A0; l’affaissement du naviculaire ne s’est nettement amélioré que dans le sous-groupe des programmes de plus de six semaines.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Les exercices pour pieds plats soulagent-ils la douleur de voûte\u00A0?',
      paragraphs: [
        'Aucune étude de cette page ne montre que les exercices pour pieds plats soulagent la douleur de voûte, car aucune ne l’a mesurée. L’essai et la revue ont mesuré la forme de la voûte. Ils montrent que la voûte peut s’entraîner. Ils ne prouvent pas que ces mêmes exercices soulagent une voûte douloureuse.',
        'Une douleur au talon, et parfois le long de la voûte, peut venir du fascia plantaire, la bande de tissu qui longe la plante du pied. Si la vôtre est près du talon, la recommandation de 2023 sur la douleur au talon est un meilleur guide. Pour la douleur sous le talon, elle donne aux étirements du fascia plantaire et du mollet sa meilleure note, **A**, et au renforcement musculaire un **B**. Ces exercices sont dans [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
        'Walkito peut travailler les deux en même temps, comme deux objectifs séparés\u00A0: des matins sans douleur pour la douleur, et le maintien de la voûte pour la voûte. Comment les deux se partagent une semaine est expliqué sur [la page du plan](/program/) (en anglais).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Que se passe-t-il quand vous atteignez l’objectif de voûte\u00A0?',
      paragraphs: [
        `Quand vous atteignez l’objectif de voûte, tenir la voûte ${PROGRAM.goals.archHoldSeconds}\u00A0secondes, Walkito garde le travail de la voûte dans le plan à une dose plus faible. L’objectif passe en entretien, et le suivant prend sa place. L’atteindre ne veut pas dire que le travail de la voûte s’arrête.`,
        `Les tests continuent aussi, tous les ${PROGRAM.testEveryDaysAfterGoal}\u00A0jours une fois votre premier objectif atteint. Si le maintien de la voûte commence à baisser, vous le voyez dans les chiffres au lieu de le deviner.`,
        'Si votre talon fait mal aussi, le talon a ses propres exercices et son propre objectif\u00A0: voir [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/). Les questions sur l’application elle-même ont leur réponse dans [la FAQ](/faq/) (en anglais).',
      ],
    },
  ],
  faq: [
    {
      q: 'Les exercices peuvent-ils corriger les pieds plats\u00A0?',
      a: 'L’exercice peut changer la forme de la voûte des pieds plats souples, mais pas celle des pieds rigides. Dans un essai sur 52\u00A0personnes dont la voûte réapparaissait hors du sol, six semaines de pied court, de travail de la cheville, de la hanche et d’étirements ont modifié les mesures de la voûte davantage que dans un groupe témoin. Un pied qui reste plat même soulevé est structurel, et l’exercice ne changera pas sa forme.',
    },
    {
      q: 'Combien de temps faut-il pour que les exercices pour pieds plats marchent\u00A0?',
      a: `Comptez six semaines ou plus. Dans un essai sur des pieds plats souples, un programme de six semaines de pied court, de travail de la hanche et d’étirements a modifié les mesures de la voûte. Pour le pied court seul, une revue de 2024 n’a trouvé aucun changement net dans l’ensemble, et une amélioration seulement dans les programmes de plus de six semaines. Walkito garde son objectif de maintien de la voûte de ${PROGRAM.goals.archHoldSeconds}\u00A0secondes jusqu’à ce que vous l’atteigniez.`,
    },
    {
      q: 'Qu’est-ce qui soulage la douleur sous la voûte du pied\u00A0?',
      a: 'Il n’y a pas de preuve directe ici, car aucune étude citée sur cette page n’a mesuré la douleur de voûte. Si la douleur est près du talon et liée au fascia plantaire, la recommandation de 2023 sur la douleur au talon donne la note A aux étirements du fascia plantaire et du mollet, et B au renforcement musculaire. Les exercices de voûte de cette page entraînent la forme de la voûte, pas la douleur. Voir [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
    },
    {
      q: 'Les pieds plats peuvent-ils causer un mal de dos\u00A0?',
      a: 'Les données sont faibles et partagées, pas un oui clair. La plus grande étude sur le sujet, la [Framingham Foot Study](https://doi.org/10.1093/rheumatology/ket298), sur environ 1\u00A0900\u00A0adultes, n’a trouvé aucun lien entre une posture de pied plat et le mal de bas du dos. Elle a trouvé un petit lien chez les femmes entre un pied qui s’affaisse vers l’intérieur à la marche et le mal de bas du dos, et aucun chez les hommes. Les pieds plats seuls expliquent donc mal un mal de dos. Si vous avez les deux, voyez-les comme deux problèmes séparés, et consultez un professionnel de santé pour le dos.',
      cites: [CITE.menz],
    },
    {
      q: 'Quelle est la différence entre voûte affaissée et pieds plats\u00A0?',
      a: 'En général, aucune\u00A0: «\u00A0voûte affaissée\u00A0» est un nom courant pour les pieds plats. La plupart des pieds plats sont présents depuis toujours et souples, et la voûte revient quand le pied ne touche plus le sol. Parfois, l’expression désigne autre chose\u00A0: le [pied plat acquis de l’adulte](https://doi.org/10.2174/1874325001711010714), souvent dû à l’affaiblissement du tendon tibial postérieur, le tendon qui soutient la voûte. Il apparaît plutôt à l’âge adulte et peut s’accompagner de douleur ou de gonflement à l’intérieur de la cheville. Si une voûte s’est affaissée à l’âge adulte, consultez un professionnel de santé avant de l’entraîner.',
      cites: [CITE.ling],
    },
    {
      q: 'Quels exercices renforcent la voûte plantaire\u00A0?',
      a: 'L’exercice du pied court est le principal\u00A0: vous soulevez la voûte en tirant la base des orteils vers le talon, sans recroqueviller les orteils. Walkito le commence assis, à 3\u00A0séries de 8 avec un maintien de 5\u00A0secondes, puis debout, puis sur une jambe. Ramasser la serviette, lever le gros orteil, écarter les orteils et l’inversion avec élastique entraînent les petits muscles autour de la voûte. Tout cela s’adresse aux pieds plats souples. Pas à pas\u00A0: [exercice du pied court](/fr/exercices/pied-court/).',
    },
    {
      q: 'À quelle fréquence faire les exercices pour pieds plats\u00A0?',
      a: `Faites le pied court à chaque jour d’entraînement tant que la voûte est votre objectif. Dans Walkito, vous choisissez ${DAYS}\u00A0jours d’entraînement par semaine, et tant que la voûte est l’objectif de la semaine, chaque séance contient un exercice de voûte, un niveau plus dur à la fois. Le maintien de la voûte est retesté tous les ${PROGRAM.testEveryDays}\u00A0jours, puis tous les ${PROGRAM.testEveryDaysAfterGoal} après votre premier objectif.`,
    },
    {
      q: 'Quand consulter un médecin pour des pieds plats\u00A0?',
      a: 'Consultez un professionnel de santé avant de commencer si la voûte reste plate quand le pied ne touche plus le sol, ou si une voûte s’est affaissée brusquement à l’âge adulte. De même pour une douleur apparue après une blessure, qui vous réveille la nuit, ou qui s’accompagne d’engourdissements, de fourmillements, d’un gonflement ou de chaleur. Une douleur vive ou qui s’aggrave demande un professionnel de santé, pas plus d’exercice.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'la voûte reste plate quand le pied ne touche plus le sol'],
  },
  program: {
    h2: 'En faire un plan',
    text: `Vous n’avez pas à trouver l’ordre, les doses ni le moment de passer à une version plus dure. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour un pied plat souple, cet objectif est le maintien de la voûte\u00A0: tenir votre voûte ${PROGRAM.goals.archHoldSeconds}\u00A0secondes. Si vous avez aussi mal, les matins sans douleur passent en premier.`,
    more: [
      `Vous choisissez ${DAYS}\u00A0jours par semaine et des séances de ${MINUTES}\u00A0minutes. Tous les ${PROGRAM.testEveryDays}\u00A0jours (puis tous les ${PROGRAM.testEveryDaysAfterGoal} une fois votre premier objectif atteint), un court test vérifie le maintien de la voûte, l’endurance du mollet et l’équilibre, pour que vous voyiez si le travail de la voûte donne quelque chose.`,
    ],
    cta: `Commencez avec ${PROGRAM.sessionMinutes[0]}\u00A0minutes par jour.`,
  },
  crumb: 'Exercices pieds plats',
  campaign: 'guide-flat-feet-fr',
};

export const HEEL_PAIN_FR: Guide = {
  lang: 'fr',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fasciite plantaire et douleur au talon\u00A0: 8 exercices',
  description:
    'Huit exercices et étirements contre la fasciite plantaire et la douleur au talon\u00A0: doses, à éviter, meilleur moment et niveaux de preuve de 2023.',
  h1: 'Exercices et étirements pour la fasciite plantaire et la douleur au talon',
  lede: 'Vos premiers pas en sortant du lit sont le pire moment de la journée. Une vive traction juste au talon, avant même votre café. Ça se calme une fois en mouvement, puis ça revient après être resté assis un moment. Ce schéma a un nom, la [fasciite plantaire](/fr/fasciite-plantaire/), et la recommandation clinique de 2023 sur la douleur au talon en fait la cause la plus souvent reconnue de douleur sous le talon.',
  intro: [
    'C’est aussi déroutant à chercher en ligne, car chacun dit autre chose. Les données pointent vers deux choses\u00A0: étirer le fascia plantaire et le mollet, et renforcer le mollet. Une recommandation clinique de 2023 donne aux étirements sa meilleure note, A, et au renforcement musculaire un B. Dans un essai sur 48\u00A0personnes, qui portaient toutes des semelles, des montées sur pointes lentes avec une serviette sous les orteils ont aidé plus vite que les étirements seuls. À douze mois, les deux groupes étaient à égalité. Faire les deux, c’est ce que soutient la recommandation.',
  ],
  takeaways: [
    'La recommandation de 2023 sur la douleur au talon, publiée dans le Journal of Orthopaedic & Sports Physical Therapy, donne aux étirements du fascia plantaire et du mollet sa meilleure note, A, et au renforcement musculaire un B.',
    'Dans un essai sur 48\u00A0personnes, des montées sur pointes avec charge ont réduit la douleur et amélioré la fonction au quotidien plus vite que les étirements, et à douze mois les deux groupes étaient à égalité (Rathleff et coll., 2015).',
    'Pour la douleur au talon en course à pied, la même recommandation conseille d’adapter la charge plutôt que de tout arrêter, un conseil noté E car il repose sur la théorie, pas sur des essais.',
    'Consultez d’abord un professionnel de santé si la douleur a suivi une blessure, s’accompagne d’engourdissements ou d’un gonflement, vous réveille la nuit, ou fait mal quand vous pressez le talon.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Les exercices pour la fasciite plantaire, avec les doses de départ',
      figure: { id: 'plantar-fascia', caption: 'Le fascia plantaire va de l’os du talon jusqu’aux orteils. La douleur de la fasciite plantaire commence souvent là où il s’attache au talon.', alt: 'Plante d’un pied montrant le fascia plantaire en bandes blanches qui s’étalent de l’os du talon jusqu’à la base des orteils, avec une tache rouge sur le talon là où la douleur commence souvent.' },
      paragraphs: [
        'Dans Walkito, les exercices pour la fasciite plantaire sont des étirements du fascia plantaire et du mollet, un renforcement du mollet qui progresse par petites étapes, et un massage du pied avec une balle. Ce sont les doses de départ de Walkito, pas une prescription. Un résumé sur une page est disponible dans les [fiches d’exercices à imprimer](/printable-exercise-sheets/) (en anglais). [Comment ces guides sont écrits](/fr/a-propos/).',
        'L’ordre compte. Tant que la douleur est votre objectif, Walkito garde le travail du mollet en douceur\u00A0: d’abord les montées sur pointes assis, puis les montées sur pointes sur les deux pieds, puis le maintien sur pointes, une étape à la fois. Vous montez d’une étape quand les deux dernières séances avec l’exercice vous ont paru faciles. La [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/) sollicite le plus le fascia plantaire, elle n’arrive donc qu’une fois la douleur du matin redescendue, quand l’objectif passe à la force du mollet. Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour aujourd’hui. C’est le seuil où Walkito met fin à une séance.',
      ],
      table: {
        head: ['Exercice', 'Dose', 'Fréquence', 'Ce que vous devez sentir', 'Arrêtez si'],
        rows: [
          ['Étirement du fascia plantaire', '2\u00A0maintiens de 30\u00A0secondes, chaque pied', 'La plupart des séances, en alternance avec les étirements du mollet', 'Un étirement le long de la voûte, pas dans le mollet', 'La douleur atteint 6/10'],
          ['Étirement du mollet', '2\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'La plupart des séances, en alternance avec les autres étirements', 'Un étirement dans le mollet de la jambe arrière tendue', 'La douleur atteint 6/10'],
          ['Étirement du soléaire', '2\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'La plupart des séances, en alternance avec les autres étirements', 'Un étirement en bas du mollet, près du talon', 'La douleur atteint 6/10'],
          ['Montées sur pointes assis', '3\u00A0séries de 10, deux pieds', 'Jours de renforcement, 3 par semaine, jamais deux de suite', 'Un travail facile dans les mollets, presque sans charge sur le talon', 'La douleur atteint 6/10'],
          ['Montées sur pointes, deux pieds', '3\u00A0séries de 10, deux pieds', 'Jours de renforcement, une fois les montées assis devenues faciles', 'Les mollets au travail, les deux pieds se partagent la charge', 'La douleur atteint 6/10'],
          ['Maintien sur pointes', '3\u00A0maintiens de 20\u00A0secondes, deux pieds', 'Jours de renforcement, l’étape suivante', 'Les mollets qui travaillent pour rester immobiles en haut', 'La douleur atteint 6/10'],
          ['Montées sur pointes avec serviette', '4\u00A0séries de 10, chaque jambe, avec une charge en plus', 'Jours de renforcement, quand l’objectif passe à la force du mollet', 'Un travail dur dans le mollet et une traction sous la voûte', 'La douleur atteint 6/10'],
          ['Massage avec une balle', '1\u00A0minute', 'Jours de récupération', 'Une pression ferme sous le pied, jamais une grimace', 'La douleur atteint 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des séances',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assis au bord du lit, avant que votre pied touche le sol.',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne qui tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée, cet étirement compte donc même si vous le sentez plus haut.',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Un travail facile dans les mollets',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Cet exercice fait travailler le mollet presque sans charge sur le talon.',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge pendant que le mollet se réveille.',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Maintien sur pointes',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent pour rester immobiles',
          how: 'Montez sur la pointe des deux pieds, puis restez immobile en haut. Ne redescendez pas. Tenir en haut charge le tendon sans les rebonds.',
          image: 'Exercice\u00A0: maintien sur pointes',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez immobile en haut',
          alt: 'Une personne qui tient la position sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette',
          evidence: { level: 'moderate', why: 'C’est la routine d’un essai sur 48\u00A0personnes, et la recommandation de 2023 donne au renforcement la note B.' },
          dose: '4\u00A0séries de 10, chaque jambe, avec une charge en plus',
          often: 'Jours de renforcement',
          feel: 'Un travail dur dans le mollet',
          how: 'Tenez-vous sur un pied sur une marche, une serviette roulée sous les orteils. Prenez trois secondes pour monter, tenez deux secondes en haut, et prenez trois secondes pour redescendre. À ce niveau, Walkito ajoute une charge, par exemple un sac à dos. C’est la serviette qui fait travailler le fascia plantaire, et pas seulement le mollet.',
          image: 'Exercice\u00A0: montées sur pointes avec serviette',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: trois secondes pour monter, deux en haut, trois pour descendre',
          alt: 'Une personne qui monte sur la pointe des pieds sur une marche avec une serviette roulée, les mollets mis en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Pas testé dans les études de cette page. Il est là pour le confort entre les séances.' },
          dose: '1\u00A0minute',
          often: 'Jours de récupération',
          feel: 'Une pression ferme sous le pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, appuyez moins. Le massage détend le tissu après l’effort. Pas de balle\u00A0? Le massage de la plante se fait alors au pouce, par des passages fermes du talon vers les orteils.',
          image: 'Exercice\u00A0: massage avec une balle',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante, avec une pression ferme',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
      ],
    },
    {
      h2: 'Quels exercices éviter avec une fasciite plantaire\u00A0?',
      paragraphs: [
        'Évitez les activités à fort impact qui font grimper la charge sur le talon pendant une poussée de douleur, et évitez de marcher pieds nus sur un sol dur au réveil.',
        'Les sauts, les sprints et la pliométrie imposent un pic de force soudain au fascia plantaire. Quand le tissu est irrité, ce pic peut retarder la récupération. La recommandation de 2023 conseille d’adapter la charge sur vos pieds au travail, au sport et dans la vie quotidienne, un conseil noté E. Elle n’interdit pas d’exercices précis. La question est de savoir si la charge dépasse ce dont le tissu peut récupérer en une nuit. Marcher pieds nus sur un sol dur est un déclencheur fréquent, car le fascia est au plus raide après le repos et une surface dure n’amortit rien.',
        'Deux autres points à surveiller. Faire rouler une balle sous le pied doit donner une sensation ferme, pas vive. Si ça fait mal, appuyez moins fort ou passez à l’exercice suivant. Et si vous avez aussi mal au tendon d’Achille, à l’arrière du talon, évitez les descentes profondes du talon au bord d’une marche, car elles peuvent charger l’insertion du tendon d’Achille. Gardez la [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/) sur sol plat jusqu’à ce qu’un professionnel de santé ait donné son feu vert pour le tendon d’Achille.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quel est le meilleur moment pour les étirements de la fasciite plantaire\u00A0?',
      paragraphs: [
        'Avant vos premiers pas le matin, et avant de vous lever après être resté longtemps assis. Ce sont les deux moments où le fascia plantaire est le plus raide et le plus susceptible de faire mal.',
        'Un essai de 2003 sur 82\u00A0personnes atteintes de fasciite plantaire chronique a testé un étirement spécifique du fascia plantaire fait avant de poser le pied. Les patients tenaient l’étirement 10\u00A0secondes, le répétaient 10\u00A0fois, trois fois par jour, la première série avant le premier pas du matin. À huit semaines, le groupe qui faisait cet étirement avait nettement moins mal aux premiers pas du matin que le groupe qui faisait seulement un étirement du mollet. À deux ans, après que tous les patients ont reçu le même étirement, les deux groupes s’étaient améliorés.',
        'Sur cette page, l’[étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/) commence assis au bord du lit, avant que votre pied touche le sol. L’[étirement du mollet](/fr/exercices/etirement-mollet/) suit. Walkito place le premier étirement avant de vous lever pour la même raison que l’essai\u00A0: étirer avant que le tissu prenne la charge est plus doux qu’après.',
      ],
      cites: [CITE.digiovanni2003],
    },
    {
      h2: 'Qu’est-ce qui aide contre la douleur au talon le matin\u00A0?',
      paragraphs: [
        'La douleur au talon aux premiers pas du matin est le schéma le plus souvent lié à la fasciite plantaire. Elle se calme souvent une fois en mouvement, et revient après être resté assis un moment.',
        'Deux choses sur cette page la visent. L’étirement du fascia plantaire se fait **avant de vous lever**, assis au bord du lit, les orteils tirés vers vous, pour que vos premiers pas ne soient pas votre premier étirement. Et la recommandation de 2023 donne aux attelles de nuit, portées 1 à 3\u00A0mois, la note **A** pour les personnes qui ont toujours mal aux premiers pas du matin. Les attelles de nuit sont à discuter avec un professionnel de santé. Walkito n’en fournit pas.',
        'Walkito vous demande chaque jour votre douleur du matin pour la même raison. La douleur du matin est le signe le plus clair de la façon dont votre pied a encaissé la veille, et elle décide de ce que la séance du jour vous demande. Ce qui la provoque est expliqué dans [la douleur au talon le matin](/fr/douleur-talon-au-reveil/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Faut-il se reposer ou continuer à courir avec une douleur au talon\u00A0?',
      paragraphs: [
        'Si la douleur au talon due à une fasciite plantaire se réveille quand vous courez, adaptez la charge au lieu de tout arrêter. La recommandation de 2023 conseille d’apprendre à adapter la charge sur vos pieds au travail, au sport et dans la vie quotidienne. Ce conseil est noté E, ce qui veut dire qu’il repose sur la théorie plutôt que sur des essais. Gardez donc les étirements tous les jours, et réduisez ce qui aggrave le talon.',
        'Un mauvais matin, gardez les étirements et laissez tomber les montées sur pointes pour la journée. Le lendemain matin vous dira comment ça s’est passé. Si vos premiers pas sont nettement pires après une course, cette course était plus que ce que le talon pouvait encaisser. Walkito le lit de la même façon. Une grosse journée debout transforme la séance de renforcement suivante en séance de récupération plus légère, et un matin douloureux raccourcit la séance sans l’annuler.',
        'Arrêtez et consultez un professionnel de santé si courir fait très mal ou si la douleur s’aggrave semaine après semaine. De même pour une douleur qui monte pendant les courses après une hausse du kilométrage, ou une douleur quand vous pressez les côtés du talon. Les deux peuvent être des signes de fracture de fatigue, une des autres causes de douleur au talon que cite la recommandation.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Renforcement ou étirements\u00A0: quoi de mieux pour la fasciite plantaire\u00A0?',
      paragraphs: [
        'Le renforcement et les étirements aident tous les deux contre la fasciite plantaire, et le renforcement aide plus tôt.',
        'Dans un essai sur 48\u00A0personnes avec une fasciite plantaire confirmée à l’échographie, tout le monde portait des semelles. Un groupe a ajouté des montées sur pointes avec charge un jour sur deux. L’autre étirait le fascia plantaire tous les jours. À trois mois, le groupe des montées sur pointes était nettement devant pour la douleur et la fonction au quotidien. À douze mois, les deux groupes étaient à égalité. Le renforcement a accéléré l’amélioration. Il ne l’a pas rendue plus grande.',
        'La recommandation soutient les deux. Le raisonnement étude par étude est sur [la page des données scientifiques](/science/) (en anglais).',
      ],
      sourceNote:
        'Score au Foot Function Index\u00A0: 29\u00A0points de moins dans le groupe des montées sur pointes à trois mois (IC à 95\u00A0% 6-52, p = 0,016), et 22 contre 16 à douze mois, une différence non significative.',
      cites: [CITE.rathleff],
    },
    {
      h2: 'Que recommande la recommandation de 2023 pour la fasciite plantaire\u00A0?',
      paragraphs: [
        'La recommandation de 2023 sur la fasciite plantaire note chaque option selon la force de ses preuves. A est la meilleure note. Une note suivie de «\u00A0contre\u00A0» signifie que la recommandation conseille de ne pas utiliser cette option.',
      ],
      table: {
        head: ['Option', 'Note'],
        rows: [
          ['Étirements du fascia plantaire et du mollet', '**A**'],
          ['Thérapie manuelle (travail à la main sur les articulations et les tissus mous de la jambe et du pied), par un professionnel de santé', '**A**'],
          ['Strapping en plus d’autres soins de kinésithérapie, pour mieux réduire la douleur et améliorer la fonction jusqu’à 6\u00A0semaines', '**A**'],
          ['Attelles de nuit pendant 1 à 3\u00A0mois, si vos premiers pas du matin restent douloureux', '**A**'],
          ['Renforcement et exercices contre résistance', '**B**'],
          ['Laser de basse intensité et dry needling, par un professionnel de santé', '**B**'],
          ['Semelles orthopédiques seules, pour soulager la douleur à court terme', '**B contre**'],
          ['Semelles orthopédiques associées à d’autres soins', '**C**'],
          ['Ultrasons thérapeutiques ajoutés aux étirements', '**A contre**'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'Les chaussures et les semelles aident-elles contre la fasciite plantaire\u00A0?',
      paragraphs: [
        'Des chaussures qui soutiennent le pied aident, mais les semelles seules ne suffisent pas pour la plupart des gens. La recommandation de 2023 note les orthèses (semelles et soutiens de voûte) utilisées seules **B contre**, ce qui veut dire que les preuves conseillent de ne pas compter uniquement sur elles. Associées aux étirements et au renforcement, les orthèses obtiennent un **C**.',
        'Les attelles de nuit, portées pendant le sommeil pendant 1 à 3\u00A0mois, obtiennent la meilleure note de la recommandation, **A**, pour les personnes qui ont toujours mal aux premiers pas du matin. Elles maintiennent la cheville pour que le fascia plantaire ne se raccourcisse pas pendant la nuit. Demandez à un professionnel de santé si elles valent la peine d’être essayées.',
        'La recommandation ne note pas de types de chaussures précis, mais des chaussures qui ne soutiennent pas le pied sont un facteur de risque couramment reconnu. Des chaussures avec un soutien de voûte et un contrefort de talon ferme prennent une partie de la charge que le fascia plantaire porterait seul. Si vos pieds font mal après une longue journée debout, voir [mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/). Les personnes qui travaillent en horaires postés peuvent commencer par [infirmières et douleur aux pieds](/fr/mal-aux-pieds-infirmieres/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Que se passe-t-il quand le talon ne fait plus mal\u00A0?',
      paragraphs: [
        `Quand la douleur au talon s’arrête, Walkito continue à une dose plus faible, car la douleur au talon peut revenir. Une fois l’objectif des matins sans douleur atteint (douleur du matin à 1/10 ou moins pendant ${PROGRAM.painFreeDays}\u00A0jours de suite), cet objectif passe en entretien et le suivant prend sa place.`,
        'Si vos voûtes sont plates aussi, la voûte a ses propres exercices et son propre calendrier\u00A0: voir [exercices pour pieds plats](/fr/exercices-pieds-plats/). Les questions sur l’application elle-même ont leur réponse dans [la FAQ](/faq/) (en anglais).',
      ],
    },
  ],
  faq: [
    {
      q: 'Peut-on continuer à courir avec une fasciite plantaire\u00A0?',
      a: 'Vous n’avez pas à tout arrêter. Adaptez plutôt la charge. La recommandation clinique de 2023 conseille d’apprendre à adapter la charge sur vos pieds, un conseil noté E, ce qui veut dire qu’il vient de la théorie, pas d’essais. Réduisez ce qui aggrave le talon et continuez les étirements tous les jours. Si vos premiers pas le lendemain matin sont nettement pires, la course était de trop. Une douleur vive ou qui s’aggrave demande un professionnel de santé.',
    },
    {
      q: 'Pourquoi la douleur au talon est-elle pire le matin\u00A0?',
      a: 'La douleur au talon aux premiers pas après le sommeil ou après être resté assis est le schéma le plus souvent lié à la fasciite plantaire. La recommandation de 2023 sur la douleur au talon la décrit comme une douleur «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0». L’explication habituelle\u00A0: le tissu sous le pied se raidit au repos, puis reçoit soudain la charge des premiers pas. C’est pourquoi l’étirement du fascia plantaire se fait avant de vous lever, et pourquoi la recommandation de 2023 donne la note A aux attelles de nuit pour ce problème.',
    },
    {
      q: 'Combien de temps dure une fasciite plantaire\u00A0?',
      a: 'Pour la plupart des gens, elle se calme en quelques mois, pas en quelques semaines. Le calendrier complet est dans [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/). Une [revue de 2020](https://doi.org/10.1177/2473011419896763) indique qu’environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux comme les étirements et les semelles, souvent en 3 à 6\u00A0mois. Certaines mettent plus longtemps, et un groupe plus petit a encore mal après un an. Aucun programme d’exercices ne peut promettre un délai. La recommandation de 2023 sur la douleur au talon donne ses meilleures notes aux étirements et au renforcement du mollet, c’est pourquoi ils passent en premier sur cette page.',
      cites: [CITE.latt],
    },
    {
      q: 'Étirements ou renforcement\u00A0: quoi de mieux pour la fasciite plantaire\u00A0?',
      a: 'Les deux aident, et le renforcement agit plus vite. Dans un essai sur 48\u00A0personnes, des montées sur pointes avec charge étaient nettement devant les étirements à trois mois, mais à douze mois les deux groupes étaient à égalité. La recommandation de 2023 donne aux étirements un A et au renforcement musculaire un B. [La page des données scientifiques](/science/) (en anglais) donne les détails.',
    },
    {
      q: 'Une épine calcanéenne, est-ce la même chose qu’une fasciite plantaire\u00A0?',
      a: 'Pas exactement. On dit souvent «\u00A0épine calcanéenne\u00A0» pour parler de fasciite plantaire, mais au sens strict, une épine calcanéenne est une excroissance osseuse visible à la radio. La fasciite plantaire est une douleur qui vient de la bande de tissu sous le pied. Les exercices de cette page sont ceux que la recommandation de 2023 note pour la douleur sous le talon. Seul un professionnel de santé peut dire ce qui cause la vôtre.',
    },
    {
      q: 'À quelle fréquence faire les exercices pour la fasciite plantaire\u00A0?',
      a: `Étirez-vous la plupart des jours et faites le renforcement du mollet les jours de renforcement. Dans Walkito, vous choisissez ${DAYS}\u00A0jours d’entraînement par semaine, et chaque semaine compte trois jours de renforcement, jamais deux de suite. Les étirements reviennent dans la plupart des séances, avec le premier étirement du fascia plantaire avant que votre pied touche le sol. Dans l’essai que suit Walkito, les montées sur pointes se faisaient un jour sur deux.`,
    },
    {
      q: 'Quels sont les meilleurs étirements contre la douleur au talon\u00A0?',
      a: 'L’étirement du fascia plantaire et les étirements du mollet et du soléaire sont ceux que la recommandation de 2023 sur la douleur au talon note A, sa meilleure note. Croisez le pied sur votre genou et tirez les orteils vers vous pendant 30\u00A0secondes, la première fois avant de vous lever le matin. Puis étirez le mollet contre un mur, genou arrière tendu, puis plié. Walkito commence à 2\u00A0maintiens de 30\u00A0secondes chacun. Technique\u00A0: [étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/).',
      cites: [CITE.guideline],
    },
    {
      q: 'Quand consulter un médecin pour une douleur au talon\u00A0?',
      a: 'Consultez d’abord un professionnel de santé si la douleur a suivi une blessure ou une chute, si vous ne pouvez pas poser le pied, ou si elle s’accompagne d’engourdissements, de fourmillements, d’un gonflement, de chaleur ou de fièvre. De même si elle vous réveille la nuit, si elle est vive ou s’aggrave, ou si elle fait mal quand vous pressez le talon, ce qui peut signaler une fracture de fatigue. Walkito ne pose pas de diagnostic.',
    },
    {
      q: 'Marcher aide-t-il en cas de fasciite plantaire\u00A0?',
      a: 'Marcher ne pose en général pas de problème, mais ce n’est pas un exercice contre la fasciite plantaire à lui seul. La recommandation de 2023 conseille d’adapter la charge plutôt que d’arrêter l’activité. Si une marche rend vos premiers pas du lendemain matin nettement pires, la distance ou l’allure était de trop. S’étirer avant de marcher, surtout l’[étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/) avant vos premiers pas, rend les premières minutes plus faciles.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'En faire un plan',
    text: `Vous n’avez pas à trouver l’ordre, les doses ni combien de temps rester sur chaque exercice. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la douleur au talon, le premier objectif est un meilleur matin\u00A0: une douleur à 1/10 ou moins pendant ${PROGRAM.painFreeDays}\u00A0jours de suite.`,
    more: [
      `Vous choisissez ${DAYS}\u00A0jours par semaine et des séances de ${MINUTES}\u00A0minutes. Tous les ${PROGRAM.testEveryDays}\u00A0jours (puis tous les ${PROGRAM.testEveryDaysAfterGoal} une fois cet objectif atteint), un court test vérifie l’[endurance du mollet](/fr/test-montee-sur-pointes/), le maintien de la voûte et l’équilibre, pour que vous voyiez ce qui change.`,
    ],
    cta: `Commencez avec ${PROGRAM.sessionMinutes[0]}\u00A0minutes par jour.`,
  },
  crumb: 'Exercices fasciite plantaire',
  campaign: 'guide-plantar-fasciitis-fr',
};
