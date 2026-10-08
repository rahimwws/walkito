import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/shin-splints.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

/** `3, 5 ou 7`: the plan's options as a French list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const SHIN_SPLINTS_FR: Guide = {
  lang: 'fr',
  page: 'shinSplints',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Périostite tibiale\u00A0: exercices, ce qui aide ou pas',
  description:
    'Exercices pour la périostite tibiale en course\u00A0: ce que montre la recherche, doses de départ, différence avec une fracture de fatigue, quand consulter.',
  h1: 'Exercices pour la périostite tibiale\u00A0: ce qui aide et ce qui n’aide pas',
  lede:
    'La périostite tibiale est une douleur le long du bord interne du tibia, étalée sur plusieurs centimètres plutôt qu’en un seul point douloureux. Son nom clinique est le syndrome de stress tibial médial (en anglais MTSS). La plupart des pages présentent des exercices comme s’ils accéléraient la guérison de façon prouvée. Une revue systématique de 2013 portant sur tous les essais de traitement a montré que les étirements et le renforcement n’ont pas fait la preuve qu’ils raccourcissent la récupération.',
  intro: [
    'Cela ne veut pas dire que l’exercice ne sert à rien. Les exercices ci-dessous visent l’endurance du mollet, la force du tibial antérieur et le contrôle de la hanche, les points où les chercheurs ont trouvé des différences entre les personnes avec et sans périostite tibiale. Une étude cas-témoins a montré que les coureurs avec une périostite tibiale faisaient moins de montées sur pointes jusqu’à l’épuisement que des témoins appariés qui n’en avaient pas.',
    'Reste à savoir si retrouver cette endurance raccourcit la récupération. Le levier le plus sûr, dans tous les essais à ce jour, est de réduire la charge de course qui a causé le problème. La montée sur pointes elle-même, avec le nombre de répétitions et le moment d’ajouter de la charge, est détaillée dans [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/). Si vous êtes debout toute la journée plutôt que de courir, [mal aux pieds après une journée debout](/feet-hurt-standing-all-day/) (en anglais) reprend les mêmes exercices du mollet et de la voûte pour cette cause.',
  ],
  toc: true,
  takeaways: [
    'Une revue systématique de 2013 portant sur 11\u00A0essais de traitement a montré que les étirements et le renforcement n’ont pas fait la preuve qu’ils accélèrent la récupération du syndrome de stress tibial médial (Winters et coll., 2013).',
    'Dans le seul essai randomisé sur l’exercice dans la périostite tibiale, ajouter étirements et renforcement du mollet à un programme de course progressif n’a pas raccourci la récupération par rapport au programme de course seul, dans une étude sur 74\u00A0sportifs (Moen et coll., 2012).',
    'Les coureurs avec une périostite tibiale faisaient moins de montées sur pointes jusqu’à l’épuisement que des témoins appariés, ce qui suggère un déficit d’endurance du mollet (Madeley et coll., 2007).',
    'Une sensibilité localisée, en un seul petit point, plutôt qu’une douleur diffuse sur plusieurs centimètres d’os, peut être une fracture de fatigue et demande un professionnel de santé, pas plus d’exercice.',
  ],
  sections: [
    {
      h2: 'Qu’est-ce que la périostite tibiale, et quels exercices aident vraiment\u00A0?',
      keyFact: 'Une revue systématique de 2013 couvrant 11\u00A0essais de traitement de la périostite tibiale a conclu qu’aucune approche par étirement ou renforcement n’avait de preuve claire d’accélérer la récupération (Winters et coll., 2013).',
      paragraphs: [
        'La périostite tibiale, ou syndrome de stress tibial médial, est une blessure de surmenage du tibia et des tissus qui l’entourent. La douleur est en général diffuse, étalée le long du bord interne du tibia sur plusieurs centimètres, et elle commence souvent pendant ou après la course. Une revue de 2020 sur des coureurs débutants et de loisir a trouvé les liens les plus nets dans la façon de bouger des coureurs, notamment une rotation de hanche plus grande et un pied qui s’affaisse vers l’intérieur plus que la normale.',
        'La réponse honnête sur les exercices contre la périostite tibiale, c’est qu’aucun programme d’exercices précis n’a montré dans un essai contrôlé qu’il accélère la récupération. Une revue systématique de 2013 a examiné 11\u00A0études de traitement et a conclu que les étirements et le renforcement «\u00A0n’ont pas fait la preuve de leur efficacité dans le traitement du MTSS\u00A0». Dans le seul essai randomisé avec un bras exercice, 74\u00A0sportifs ont été répartis en trois groupes\u00A0: un programme de course progressif seul, le même programme plus des étirements et du renforcement du mollet, et le même programme plus des bas de compression. Les trois groupes se sont améliorés à un rythme semblable.',
        'Les exercices ci-dessous ne forment donc pas un protocole dédié à la périostite tibiale. Ce sont des exercices généraux pour le bas de la jambe et la hanche, déjà dans le catalogue, qui visent les muscles et les articulations que les chercheurs ont étudiés chez les personnes atteintes. Le geste le plus efficace reste de réduire la charge de course et de la reconstruire lentement.',
      ],
      cites: [CITE.mtssReview, CITE.winters, CITE.moen],
    },
    {
      h2: 'Quels exercices pour la périostite tibiale, et combien en faire\u00A0?',
      paragraphs: [
        'Ce sont des exercices du catalogue de l’application qui recoupent les muscles et les facteurs de risque identifiés dans la recherche sur la périostite tibiale. Les étirements du mollet et les montées sur pointes sont les mêmes que dans les [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/), et visent les mêmes tissus. Ce sont des doses de départ, pas une prescription. Chaque niveau de preuve ci-dessous est **préliminaire**, car aucun exercice de cette liste n’a montré dans un essai qu’il raccourcit la récupération d’une périostite tibiale. [Comment ces guides sont écrits](/fr/a-propos/).',
        'Si vous signalez le tibia comme douloureux lors du bilan du jour, Walkito vous donne des bascules de cheville et le massage avec une balle. Les relevés des orteils apparaissent dans le plan général comme exercice complémentaire à partir du niveau 2, en alternance avec les bascules de cheville. Il n’y a pas de programme dédié à la périostite tibiale. Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour aujourd’hui.',
      ],
      table: {
        head: ['Exercice', 'Dose', 'Fréquence', 'Ce que vous devez sentir', 'Arrêtez si'],
        rows: [
          ['Étirement du mollet', '2\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'La plupart des séances', 'Un étirement dans le mollet de la jambe arrière tendue', 'La douleur atteint 6/10'],
          ['Étirement du soléaire', '2\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'La plupart des séances', 'Un étirement en bas du mollet, près du talon', 'La douleur atteint 6/10'],
          ['Relevés des orteils', '3\u00A0séries de 10, deux pieds', 'Jours de renforcement', 'Le muscle à l’avant du tibia qui travaille quand les orteils montent', 'La douleur atteint 6/10'],
          ['Montées sur pointes, deux pieds', '3\u00A0séries de 10, deux pieds', 'Jours de renforcement', 'Les mollets au travail, les deux pieds se partagent la charge', 'La douleur atteint 6/10'],
          ['Abduction de hanche', '3\u00A0séries de 15, chaque jambe', 'Jours de renforcement', 'Un travail à l’extérieur de la hanche', 'La douleur atteint 6/10'],
          ['Équilibre sur une jambe', '3\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'Jours d’équilibre', 'Le pied et la cheville qui font de petites corrections', 'La douleur atteint 6/10'],
          ['Bascules de cheville', '2\u00A0séries de 15, chaque jambe', 'La plupart des séances', 'La cheville qui se plie davantage, le talon reste au sol', 'La douleur atteint 6/10'],
          ['Massage avec une balle', '2\u00A0minutes', 'Jours de récupération', 'Une pression ferme sous le pied, jamais une grimace', 'La douleur atteint 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: {
            level: 'early',
            why: 'Souvent conseillé pour la périostite tibiale. Une revue systématique de 2013 a montré que l’étirement n’a pas fait la preuve qu’il accélère la récupération.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant. Le mollet et le tibia se partagent le contrôle du pied pendant la course, donc un mollet raide reporte plus de charge sur le tibia.',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: {
            level: 'early',
            why: 'Même raisonnement que pour l’étirement du mollet. Pas testé seul dans la périostite tibiale.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position contre le mur, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en étirement contre un mur, le genou arrière plié, le bas du mollet mis en évidence',
        },
        {
          name: 'Relevés des orteils',
          evidence: {
            level: 'early',
            why: 'Cible le tibial antérieur, le muscle situé à l’avant du tibia. Pas d’essai propre à la périostite tibiale, et la périostite tibiale fait en général mal le long du bord interne du tibia, donc le lien est indirect.',
          },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Le muscle à l’avant du tibia qui travaille quand les orteils montent',
          how: 'Tenez-vous debout, le dos contre un mur. Levez les orteils et l’avant des deux pieds du sol, les talons restent au sol. Redescendez lentement. Cet exercice fait travailler le muscle situé à l’avant du tibia.',
          image: 'Exercice\u00A0: relevés des orteils',
          media: 'tibialis_raise',
          caption: 'Relevés des orteils\u00A0: dos au mur, levez les orteils, les talons restent au sol',
          alt: 'Une personne debout contre un mur qui lève les orteils du sol, les muscles du tibia mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: {
            level: 'early',
            why: 'Les coureurs avec une périostite tibiale avaient une endurance du mollet plus faible dans une étude cas-témoins. Pas testé comme traitement de la périostite tibiale.',
          },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. L’endurance du mollet était plus faible chez les coureurs avec une périostite tibiale que chez des témoins appariés, c’est pourquoi la force du mollet fait partie de cette liste.',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes\u00A0: montez bien droit, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Abduction de hanche',
          evidence: {
            level: 'early',
            why: 'Deux méta-analyses ont relié l’amplitude de rotation de la hanche à la périostite tibiale. Aucun essai n’a testé le renforcement de la hanche comme traitement de la périostite tibiale.',
          },
          dose: '3\u00A0séries de 15, chaque jambe',
          often: 'Jours de renforcement',
          feel: 'Un travail à l’extérieur de la hanche',
          how: 'Debout, un élastique autour des deux chevilles, écartez une jambe sur le côté contre sa résistance. Poussez par le talon, pas par les orteils. Deux méta-analyses ont trouvé que l’amplitude de rotation de la hanche diffère entre les personnes avec et sans périostite tibiale, c’est ce qui justifie le travail de la hanche.',
          image: 'Exercice\u00A0: abduction de hanche',
          media: 'hip_abduction',
          caption: 'Abduction de hanche\u00A0: écartez une jambe sur le côté contre l’élastique',
          alt: 'Une personne debout avec un élastique autour des chevilles, qui écarte une jambe sur le côté, l’extérieur de la hanche mis en évidence',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: {
            level: 'early',
            why: 'Un travail d’équilibre général. Aucune étude propre à la périostite tibiale derrière.',
          },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied et la cheville',
          how: 'Tenez-vous sur un pied et fixez un point. Laissez le pied osciller. Ces oscillations, c’est le pied qui fait le travail d’équilibre. Placez-vous près d’un mur si vous avez besoin d’une sécurité.',
          image: 'Exercice\u00A0: équilibre sur une jambe',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: tenez-vous sur un pied et laissez-le se corriger',
          alt: 'Une personne en équilibre sur une jambe, les muscles du bas de la jambe mis en évidence',
        },
        {
          name: 'Bascules de cheville',
          evidence: {
            level: 'early',
            why: 'Ce que l’application donne quand vous signalez le tibia comme douloureux. Pas d’essai propre à la périostite tibiale.',
          },
          dose: '2\u00A0séries de 15, chaque jambe',
          often: 'La plupart des séances',
          feel: 'La cheville qui se plie davantage, le talon reste au sol',
          how: 'Placez-vous en fente près d’un mur. Poussez le genou avant vers l’avant au-dessus des orteils, le talon bien à plat au sol. Une cheville qui se plie bien permet au tibia d’absorber les chocs de façon plus uniforme pendant la course.',
          image: 'Exercice\u00A0: bascules de cheville',
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: genou au-dessus des orteils, le talon reste au sol',
          alt: 'Une personne en fente qui pousse le genou vers l’avant au-dessus des orteils, la cheville mise en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: {
            level: 'early',
            why: 'Ce que l’application donne quand vous signalez le tibia comme douloureux. Une mesure de confort, pas une intervention testée dans la périostite tibiale.',
          },
          dose: '2\u00A0minutes',
          often: 'Jours de récupération',
          feel: 'Une pression ferme sous le pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, appuyez moins. Le massage ne vise pas directement le tibia, mais il détend les tissus de la plante, qui partagent la charge avec le bas de la jambe.',
          image: 'Exercice\u00A0: massage avec une balle',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante, avec une pression ferme',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
      ],
      cites: [CITE.winters, CITE.madeley, CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'En quoi la douleur de la périostite tibiale diffère-t-elle d’une fracture de fatigue\u00A0?',
      paragraphs: [
        'Distinguer une périostite tibiale d’une fracture de fatigue compte, car les deux demandent des réponses différentes. Le syndrome de stress tibial médial et les fractures de fatigue du tibia se situent sur un même continuum de lésions osseuses de stress. Sous une charge continue, une périostite tibiale peut évoluer vers une fracture de fatigue. C’est la principale raison de modifier la charge d’entraînement tôt, au lieu de continuer à courir malgré une douleur diffuse au tibia.',
        'La périostite tibiale donne en général une sensibilité diffuse, étalée sur plusieurs centimètres du bord interne du tibia. Une fracture de fatigue donne une sensibilité localisée en un petit point, souvent avec un gonflement. Une douleur qui diminue à l’échauffement évoque plutôt une périostite tibiale. Une douleur qui ne cesse de monter pendant la course, ou qui apparaît au repos ou la nuit, évoque plutôt une fracture de fatigue. Une douleur à l’arrière du talon plutôt qu’au tibia est un autre problème, le plus souvent le tendon d’Achille\u00A0; voir [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/) si c’est là que se trouve la vôtre.',
        'Un test souvent cité à faire chez soi consiste à sauter sur une jambe\u00A0: s’il reproduit une douleur vive et localisée, il évoque une fracture. Mais une revue de 2011 dans American Family Physician n’a trouvé aucune donnée récente validant sa fiabilité, et un test du saut positif a aussi été observé chez près de la moitié des patients avec une périostite tibiale confirmée. Un saut douloureux est donc une raison de consulter un professionnel de santé, pas un moyen fiable de confirmer ou d’écarter une fracture par vous-même.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Peut-on continuer à courir avec une périostite tibiale\u00A0?',
      keyFact: 'Un essai de 2008 sur 532\u00A0coureurs débutants n’a trouvé aucune différence de taux de blessure entre une hausse de 10\u00A0% du kilométrage par semaine et une progression plus rapide, ce qui laisse cette règle non prouvée (Buist et coll., 2008).',
      paragraphs: [
        'Aucun essai ne vous dit exactement de combien réduire. Ce qui a un certain appui, c’est la forme d’un programme de course progressif\u00A0: dans le seul essai randomisé, les trois groupes suivaient une reprise progressive de la course, et les trois se sont améliorés à peu près au même rythme. La constante était le programme de course, pas les exercices ajoutés ni la compression.',
        'Une douleur vive pendant la course, une douleur qui s’aggrave au fil de la sortie ou une douleur au repos sont des raisons d’arrêter et de faire examiner, au lieu de continuer à courir malgré tout. Si la douleur diminue à l’échauffement et reste supportable, une sortie plus courte ou plus facile, moins souvent, est un juste milieu raisonnable le temps que le tibia s’adapte. Les jours de repos entre les sorties laissent à l’os le temps de répondre à la charge.',
        'La règle des 10\u00A0%, ne pas augmenter son kilométrage hebdomadaire de plus de 10\u00A0%, est un repère souvent cité, mais pas prouvé. Un essai de 2008 sur 532\u00A0coureurs débutants n’a trouvé aucune différence de taux de blessure entre un programme fondé sur cette règle et un programme plus rapide. Ce qu’une étude de 2014 sur 874\u00A0coureurs a montré, c’est que de fortes hausses soudaines de distance s’accompagnent de plus de blessures. Progressif vaut mieux que soudain, mais aucun pourcentage précis n’est appuyé par un essai. La page [douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais) détaille la même logique de gestion de la charge.',
      ],
      cites: [CITE.moen, CITE.buist, CITE.nielsen],
    },
    {
      h2: 'Quels changements d’entraînement évitent vraiment que la périostite tibiale revienne\u00A0?',
      paragraphs: [
        'Aucun exercice n’a montré dans un essai qu’il prévient la périostite tibiale. Les facteurs de risque identifiés dans deux méta-analyses indépendantes orientent vers une gestion générale de la charge d’entraînement et une progression graduelle, plutôt que vers un étirement ou un exercice de renforcement en particulier. Les facteurs de risque retrouvés dans les deux revues étaient un IMC plus élevé, un affaissement du naviculaire plus important (à quel point la voûte s’aplatit sous la charge), le sexe féminin, moins d’années de pratique de la course et des antécédents de périostite tibiale.',
        'Un schéma général pour reprendre la course\u00A0: d’abord marcher sans douleur, puis trottiner facilement sur des surfaces souples avec des jours de repos entre les sorties, puis allonger peu à peu les sorties tant que les matins restent sans douleur. Tout jour qui reproduit une douleur vive ou localisée, ou une douleur qui monte pendant la course au lieu de diminuer à l’échauffement, est un signal d’arrêt, pas un signal pour forcer.',
      ],
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Combien de temps faut-il pour qu’une périostite tibiale s’améliore\u00A0?',
      keyFact: 'Dans un essai sur 74\u00A0sportifs avec une périostite tibiale, le temps moyen pour terminer le programme de course était d’environ 105\u00A0jours sur les trois groupes, avec de grands écarts (Moen et coll., 2012).',
      paragraphs: [
        'Les sources varient, et aucune ne donne un chiffre unique appuyé par un essai. Selon les conseils généraux sur les blessures de surmenage, les cas légers se calment en quelques semaines d’activité réduite, tandis que les cas liés à des erreurs d’entraînement répétées peuvent durer plus longtemps si la même charge revient avant que le tissu se soit adapté.',
        'Dans l’essai randomisé sur 74\u00A0sportifs avec une périostite tibiale, le temps moyen pour terminer le programme de course allait d’environ 102 à 118\u00A0jours selon les trois groupes (moyenne globale de 105\u00A0jours), avec de grands écarts.',
        'Comme la périostite tibiale et les fractures de fatigue du tibia se situent sur un même continuum, une douleur qui ne s’améliore pas après quelques semaines de course allégée et de jours de repos est une raison de la faire examiner plutôt que d’attendre plus longtemps. Le signe le plus clair de récupération, c’est de marcher sans douleur, puis de trottiner facilement sans douleur, dans cet ordre, avant de remonter le kilométrage.',
      ],
      cites: [CITE.moen],
    },
  ],
  faq: [
    {
      q: 'Comment se débarrasser vite d’une périostite tibiale\u00A0?',
      a: 'Aucun essai n’a montré qu’un exercice ou un étirement accélère la récupération d’une périostite tibiale. Les données les plus proches viennent d’un essai randomisé sur 74\u00A0sportifs, où ajouter des étirements et du renforcement du mollet à un programme de course progressif n’a pas raccourci la récupération par rapport au programme de course seul. Réduire la charge de course qui l’a causée reste le levier principal, pas un exercice précis.',
      cites: [CITE.moen],
    },
    {
      q: 'Les étirements aident-ils vraiment la périostite tibiale\u00A0?',
      a: 'Une revue systématique de 2013 portant sur 11\u00A0essais de traitement a montré que les étirements et le renforcement «\u00A0n’ont pas fait la preuve de leur efficacité\u00A0» dans la périostite tibiale, au niveau de preuve disponible. Cela ne veut pas dire que l’étirement est nocif, seulement qu’aucun essai de bonne qualité n’a montré qu’il change l’évolution. Les étirements du mollet restent souvent conseillés et risquent peu d’aggraver les choses.',
      cites: [CITE.winters],
    },
    {
      q: 'Faut-il continuer à courir avec une périostite tibiale\u00A0?',
      a: 'Rien dans les essais ne vous donne un kilométrage exact auquel réduire. Le seul essai randomisé a montré qu’une reprise graduelle et progressive de la course marchait à peu près aussi bien dans les trois groupes de l’étude. Une douleur vive pendant la course, une douleur qui s’aggrave au fil de la sortie ou une douleur au repos sont des raisons d’arrêter et de faire examiner, au lieu de forcer.',
      cites: [CITE.moen],
    },
    {
      q: 'Une périostite tibiale peut-elle devenir une fracture de fatigue\u00A0?',
      a: 'La périostite tibiale et les fractures de fatigue du tibia sont en général décrites comme deux points d’un même continuum de lésions osseuses de stress. Mal prise en charge, une périostite tibiale peut évoluer vers une fracture de fatigue sous une charge continue. C’est la principale raison de modifier la charge d’entraînement tôt, au lieu de continuer à courir malgré la douleur.',
    },
    {
      q: 'Qu’est-ce qui cause la périostite tibiale chez le coureur\u00A0?',
      a: 'Deux méta-analyses indépendantes ont trouvé un ensemble cohérent de facteurs de risque\u00A0: un IMC plus élevé, un affaissement du naviculaire plus important (à quel point la voûte s’aplatit sous la charge), le sexe féminin, moins d’années de pratique de la course et des antécédents de périostite tibiale. Une étude cas-témoins séparée a montré que les coureurs atteints avaient une endurance du mollet plus faible, ce qui suggère qu’un déficit des fléchisseurs plantaires peut jouer un rôle.',
      cites: [CITE.newman, CITE.hamstraWright, CITE.madeley],
    },
    {
      q: 'Un exercice précis empêche-t-il la périostite tibiale de revenir\u00A0?',
      a: 'Aucun exercice n’a de preuve de niveau essai pour prévenir la périostite tibiale. Les facteurs de risque issus de deux méta-analyses, dont l’IMC, l’affaissement de la voûte et l’expérience de course, orientent vers une gestion progressive de la charge d’entraînement et un renforcement général du bas de la jambe, plutôt que vers un mouvement en particulier. C’est une réponse moins satisfaisante qu’un nom d’exercice, mais c’est ce que soutient la recherche.',
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      q: 'Avec quoi confond-on souvent la périostite tibiale\u00A0?',
      cites: [CITE.mtssReview],
      a: 'Une fracture de fatigue du tibia, un syndrome des loges chronique d’effort et une tendinopathie du tibial postérieur peuvent tous causer une douleur au tibia et être pris pour une périostite tibiale. Une fracture de fatigue fait plutôt mal en un point précis de l’os, tandis que le syndrome des loges donne une tension et des engourdissements qui montent pendant la course et passent peu après l’arrêt. Les deux demandent un professionnel de santé plutôt que plus de charge.',
    },
    {
      q: 'Peut-on marcher avec une périostite tibiale\u00A0?',
      cites: [CITE.mtssReview],
      a: 'En général, oui. La marche a moins d’impact que la course, et beaucoup de personnes avec un syndrome de stress tibial médial peuvent continuer à marcher sans poussée, tant que la douleur reste légère et se calme vite après. Si la marche elle-même reproduit une douleur vive en un seul point de l’os, arrêtez et faites examiner, car ce schéma correspond davantage à une fracture de fatigue qu’à une périostite tibiale.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur est localisée et précise, limitée à un petit point de l’os plutôt qu’étalée sur plusieurs centimètres',
      'la douleur monte pendant la course au lieu de diminuer à l’échauffement',
      'vous avez mal au repos ou la nuit',
      'le tibia est gonflé à un endroit précis',
      'un saut sur une jambe reproduit une douleur vive et localisée',
      'une tension, des engourdissements ou des fourmillements dans le bas de la jambe ou le pied apparaissent à l’effort, montent pendant l’activité et disparaissent en quelques minutes après l’arrêt, ce qui peut être un signe de syndrome des loges',
      'la douleur ne s’est pas calmée après plusieurs semaines de course réduite et de jours de repos',
      'vous ne pouvez pas poser la jambe, ou vous boitez',
      'le bas de la jambe est rouge, chaud, ou vous avez de la fièvre ou vous ne vous sentez pas bien',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: `Walkito n’a pas de programme dédié à la périostite tibiale, et cette page explique pourquoi\u00A0: aucun programme d’exercices n’a montré dans un essai qu’il accélère la récupération d’une périostite tibiale. Ce que Walkito propose, c’est un travail du mollet, de la cheville et de l’équilibre qui vise les mêmes muscles que ceux étudiés par les chercheurs, avec un plan qui s’adapte à la façon dont vous vous sentez chaque matin.`,
    more: [
      `Vous choisissez ${DAYS}\u00A0jours par semaine et des séances de ${MINUTES}\u00A0minutes. Tous les ${PROGRAM.testEveryDays}\u00A0jours (puis tous les ${PROGRAM.testEveryDaysAfterGoal} une fois votre premier objectif atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez si le travail du bas de la jambe donne quelque chose.`,
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si votre douleur au tibia est localisée, s’aggrave ou apparaît au repos, consultez un professionnel de santé avant de la charger davantage.',
    ],
    cta: `Commencez avec ${PROGRAM.sessionMinutes[0]}\u00A0minutes par jour.`,
  },
  crumb: 'Exercices périostite tibiale',
  campaign: 'guide-shin-splints-fr',
};
