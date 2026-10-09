import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/nurses.ts` (2026-10-08), French (France) with
 * «vous», written around «mal aux pieds infirmière», «douleur pieds poste
 * de 12h». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const NURSES_FR: Guide = {
  lang: 'fr',
  page: 'nurses',
  mainSource: CITE.reedNurse,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Mal aux pieds des infirmières\u00A0: postes de 12\u00A0h, exercices',
  description:
    'Pourquoi les infirmières ont mal aux pieds sur des postes de 12\u00A0heures\u00A0: chaussures, bas de contention, exercices, et une routine qui suit les horaires.',
  h1: 'Mal aux pieds chez les infirmières\u00A0: ce qui aide sur des postes de 12\u00A0heures',
  lede:
    'Les infirmières et infirmiers marchent plus en un seul poste que la plupart des gens en une journée, sur des sols durs et dans des chaussures qui ne sont pas toujours bien adaptées. Les problèmes de pied et de cheville font partie des plaintes musculo-squelettiques les plus fréquentes dans la profession\u00A0: plus de la moitié des infirmières hospitalières en signalaient sur 12\u00A0mois dans une enquête. La plupart de ce qui aide, étirements du mollet, exercices de la voûte, bas de contention, se fait en quelques minutes avant ou après le poste.',
  intro: [
    'Cette page traite de la douleur aux pieds qui vient des contraintes du métier infirmier\u00A0: station debout prolongée, longues distances à pied et horaires alternés. Si votre douleur est vive et pire aux premiers pas après le repos, ce schéma oriente vers une fasciite plantaire, et les exercices de [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) sont le guide le plus complet. Si vous n’êtes pas sûr, [pourquoi ai-je mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) explique le recoupement entre la douleur générale liée à la station debout et les problèmes bien identifiés.',
  ],
  toc: true,
  takeaways: [
    'Dans une enquête sur 312\u00A0infirmières d’un hôpital pédiatrique en Australie, 55,3\u00A0% signalaient des problèmes de pied ou de cheville sur les 12\u00A0derniers mois, et le taux était plus élevé chez celles qui travaillaient en postes de 12\u00A0heures en soins intensifs (Reed et coll., 2014).',
    'Dans une étude avec podomètre, les infirmières marchaient en moyenne 9\u00A0360\u00A0pas par poste, soit environ 5,8\u00A0km sur un poste de 9,4\u00A0heures, une charge bien au-dessus de la moyenne des adultes (Chang et Cho, 2022).',
    'Dans une étude transversale sur 636\u00A0infirmières hospitalières au Japon, 51\u00A0% signalaient une douleur ou une gêne au pied le mois précédent, et 17\u00A0% avaient une douleur qui gênait leurs activités quotidiennes (Tojo et coll., 2018).',
    'Une cheville moins souple, c’est-à-dire un mollet raide, était le plus fort prédicteur de fasciite plantaire dans une étude cas-témoins sur 50\u00A0cas et 100\u00A0témoins, avec un risque multiplié par 23,3. Rester debout la majeure partie de la journée de travail le multipliait par 3,6 (Riddle et coll., 2003).',
    'Dans un essai sur 40\u00A0agents de sécurité travaillant debout 12\u00A0heures par jour, les bas de contention de 15-20\u00A0mmHg comme ceux de 20-30\u00A0mmHg ont évité la hausse de la gêne et du gonflement observée avec des chaussettes classiques (Garcia et coll., 2023).',
  ],
  sections: [
    {
      h2: 'La douleur aux pieds est-elle fréquente chez les infirmières\u00A0?',
      paragraphs: [
        'La douleur au pied et à la cheville fait partie des trois plaintes musculo-squelettiques les plus fréquentes chez les infirmières, avec le bas du dos et le cou. Dans une enquête sur 312\u00A0infirmières d’un hôpital pédiatrique, 55,3\u00A0% signalaient des problèmes musculo-squelettiques du pied ou de la cheville sur les 12\u00A0derniers mois, et 43,8\u00A0% avaient des symptômes sur les sept derniers jours seulement. Une infirmière sur six disait que la douleur limitait son activité physique. Travailler en postes de 12\u00A0heures en soins intensifs était le seul facteur lié au travail qui augmentait de façon indépendante le risque de problèmes de pied invalidants.',
        'Une autre étude sur 636\u00A0infirmières hospitalières au Japon a montré que 51\u00A0% signalaient une douleur ou une gêne au pied le mois précédent, évaluée avec un questionnaire validé. La douleur qui empêchait de travailler normalement touchait 17\u00A0%. Une étude avec podomètre sur des infirmières coréennes a trouvé en moyenne 5,8\u00A0km parcourus par poste, une charge physique bien au-dessus de celle de la population générale.',
        'Une étude transversale sur 411\u00A0infirmières finlandaises a montré que la peau sèche, la douleur au pied et les callosités étaient les plaintes les plus fréquentes, et que les problèmes de pied étaient associés à une baisse de la capacité de travail. Les auteurs demandaient que la prévention des problèmes de pied chez les infirmières devienne une priorité.',
      ],
      cites: [CITE.changCho, CITE.reedNurse, CITE.tojo, CITE.stoltNurse],
    },
    {
      h2: 'Pourquoi les infirmières ont-elles mal aux pieds sur des postes de 12\u00A0heures\u00A0?',
      paragraphs: [
        'Trois choses se cumulent pendant un poste\u00A0: la station debout prolongée, les longues distances à pied et les sols durs. Rester debout immobile charge le fascia plantaire, les muscles du mollet et le coussinet du talon sans l’effet de pompe que donne la marche. La marche aide le sang à remonter des jambes, mais les infirmières alternent sans prévenir entre rester immobiles au chevet d’un patient et parcourir de longs couloirs\u00A0: la pompe du mollet ne trouve jamais un rythme régulier.',
        'Une revue de 2015 de la littérature en santé au travail a associé la station debout prolongée au travail à une gêne musculo-squelettique, à la fatigue et à des douleurs dans les jambes dans de nombreux métiers debout, en citant les infirmières parmi les groupes les plus exposés. La revue notait que la charge cardiovasculaire et le gonflement des jambes augmentent avec la durée de la station debout.',
        'Au niveau des tissus, un mollet raide est un élément clé. Une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins appariés a montré qu’une cheville moins souple, c’est-à-dire une cheville qui ne peut pas se plier vers le haut autant qu’elle le devrait parce que le mollet est raide, était le plus fort facteur de risque indépendant de fasciite plantaire, avec un risque multiplié par 23,3. Rester debout la majeure partie de la journée de travail le multipliait par 3,6. Les infirmières cumulent les deux facteurs de risque.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Quels exercices aident les infirmières qui ont mal aux pieds\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia plantaire la note A, sa meilleure note, et au renforcement musculaire la note B (Koc et coll., 2023).',
      paragraphs: [
        'Les exercices qui aident sont les mêmes que pour la fasciite plantaire et la douleur aux pieds liée à la station debout\u00A0: étirements du mollet, étirement du fascia plantaire, montées sur pointes pour la force du mollet, et un exercice de la voûte appelé le pied court. La différence pour les infirmières, c’est de les caser autour des horaires alternés, pas pendant le poste. Quelques minutes avant ou après le poste suffisent pour couvrir les plus importants.',
        'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia plantaire sa meilleure note, A, et au renforcement musculaire un B. Ces deux notes concernent la fasciite plantaire, mais les tissus en jeu sont les mêmes que ceux qui encaissent la charge pendant un poste. Si un exercice fait monter votre douleur à 6 sur 10 ou plus, arrêtez pour aujourd’hui.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet la note A pour la fasciite plantaire. Un mollet raide était le plus fort facteur de risque dans une étude cas-témoins de 2003.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant. Cet étirement cible le gastrocnémien, le plus gros et le plus superficiel des deux muscles du mollet. Vous pouvez le faire en salle de pause ou contre n’importe quel mur.',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: {
            level: 'moderate',
            why: 'Même soutien de la recommandation que la version genou tendu. Il cible le soléaire, le muscle profond du mollet.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur, mais pliez le genou arrière jusqu’à sentir l’étirement plus bas, plus près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière pour le sentir près du talon',
          alt: 'Une personne qui s’étire contre un mur, le genou arrière plié, le bas du mollet mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire la note A.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez un pied sur l’autre genou. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Si votre talon fait le plus mal aux premiers pas de la journée, faites celui-ci le matin avant que vos pieds touchent le sol.',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez doucement les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne assise qui tire vers elle les orteils d’un pied, la voûte mise en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 sur la douleur au talon donne au renforcement musculaire la note B pour la fasciite plantaire. Il construit la force du mollet qui absorbe les chocs pendant le poste.',
          },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils en environ trois secondes, puis redescendez lentement en trois secondes. Tenez-vous à un mur ou à une rampe pour l’équilibre. Tous les détails sur cet exercice, y compris la progression et la variante avec serviette, sont dans [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes\u00A0: montez au-dessus des gros orteils, redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Pied court, assis',
          evidence: {
            level: 'early',
            why: 'Une revue de 2024 a trouvé que le pied court changeait la forme de la voûte, mais pas la douleur. Walkito l’inclut dans un programme plus large.',
          },
          dose: '3\u00A0séries de 10, maintien de 5\u00A0secondes, chaque pied',
          how: 'Asseyez-vous, le pied à plat au sol. Tirez l’avant du pied vers le talon pour que la voûte se soulève, sans recroqueviller les orteils. Cet exercice entraîne les petits muscles à l’intérieur de la voûte qui la soutiennent pendant une longue journée debout.',
          media: 'short_foot_seated',
          caption: 'Pied court\u00A0: tirez l’avant du pied vers le talon pour que la voûte se soulève',
          alt: 'Une jambe en position assise, le pied au sol, la voûte mise en évidence pendant qu’elle se soulève',
        },
        {
          name: 'Écarter les orteils',
          evidence: {
            level: 'early',
            why: 'Ne fait pas partie des programmes testés sur cette page. Il cible les muscles intrinsèques du pied, comprimés dans les chaussures de travail.',
          },
          dose: '3\u00A0séries de 10, maintien de 5\u00A0secondes',
          how: 'Assis ou debout, écartez les cinq orteils le plus possible, puis tenez. Après un poste dans des chaussures ajustées, cet exercice réveille les petits muscles entre les orteils.',
          media: 'toe_spread',
          caption: 'Écarter les orteils\u00A0: écartez les cinq orteils et tenez',
          alt: 'Un pied vu du dessus, les orteils bien écartés',
        },
      ],
      table: {
        caption: 'Doses de départ pour les infirmières qui ont mal aux pieds',
        head: ['Exercice', 'Dose', 'Quand', 'Ce que vous devez sentir'],
        rows: [
          ['Étirement du mollet (genou tendu)', '2 x 30\u00A0secondes, chaque jambe', 'Avant ou après le poste', 'Un étirement dans le haut du mollet'],
          ['Étirement du soléaire (genou plié)', '2 x 30\u00A0secondes, chaque jambe', 'Avant ou après le poste', 'Un étirement bas dans le mollet, près du talon'],
          ['Étirement du fascia plantaire', '2 x 30\u00A0secondes, chaque pied', 'Avant le poste ou au réveil', 'Un étirement le long de la voûte'],
          ['Montées sur pointes', '3 x 10, deux pieds', 'Jour de repos ou après le poste', 'Les mollets qui travaillent, pas de douleur vive'],
          ['Pied court', '3 x 10 (maintien de 5\u00A0secondes), chaque pied', 'Jour de repos ou après le poste', 'La voûte qui se soulève, orteils relâchés'],
          ['Écarter les orteils', '3 x 10 (maintien de 5\u00A0secondes)', 'Après le poste', 'Les orteils qui s’écartent, sans douleur'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Comment caser les exercices avec des horaires alternés\u00A0?',
      paragraphs: [
        'Un poste de 12\u00A0heures laisse peu de temps pour une routine d’exercices à part, et alterner entre jour et nuit complique encore l’organisation. Les étirements de cette page prennent environ 3\u00A0minutes\u00A0: le plus simple est donc de les faire juste avant ou juste après le poste, toujours au même moment de votre routine. Par exemple, faites-les après avoir mis ou enlevé vos chaussures de travail.',
        'Les jours de repos, ajoutez les exercices de renforcement\u00A0: montées sur pointes et pied court. Ils prennent environ 5 à 10\u00A0minutes. Faire le renforcement les jours de repos, plutôt qu’après un poste éprouvant, laisse au mollet et à la voûte le temps de récupérer avant le prochain passage debout.',
        'Trois séances par semaine sont un point de départ raisonnable. Si vous faites trois postes de 12\u00A0heures avec quatre jours de repos, le renforcement trouve sa place à chaque jour de repos. Si vous alternez jour et nuit, l’heure ne compte pas. Ce qui compte, c’est la régularité, pas l’horloge.',
      ],
    },
    {
      h2: 'Les chaussures d’infirmière changent-elles quelque chose\u00A0: sabots, baskets ou autre\u00A0?',
      paragraphs: [
        'Les chaussures sont l’un des sujets les plus discutés chez les infirmières, mais les données en faveur d’un type plutôt qu’un autre sont limitées. Une évaluation de 2007 de trois marques de chaussures professionnelles pour infirmières a trouvé que celle qui avait une semelle intérieure plus amortie et un meilleur soutien de la voûte réduisait l’effort musculaire des membres inférieurs par rapport aux deux autres, mais l’étude était petite et propre à ces marques.',
        'Ce que la recherche soutient plus largement, c’est que le confort des chaussures compte. Dans une enquête sur 125\u00A0infirmières des urgences et des consultations externes, 72\u00A0% de celles qui jugeaient leurs chaussures peu confortables signalaient aussi une douleur au pied et au talon, contre 28\u00A0% de celles qui les jugeaient très confortables. La recommandation de 2023 sur la douleur au talon donne aux orthèses seules la note B contre pour le soulagement à court terme de la fasciite plantaire, ce qui veut dire que les données penchent plutôt contre leur usage comme seule solution.',
        'Une approche pratique\u00A0: choisissez une chaussure qui vous va bien, avec un peu d’amorti, et qui ne serre pas les orteils. Si vous avez déjà mal au talon ou à la voûte, les exercices de cette page ciblent directement les tissus. Les chaussures et les semelles peuvent aider au confort pendant le poste, mais elles ne remplacent pas les étirements ni le renforcement.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Les bas de contention aident-ils les infirmières qui ont mal aux pieds et aux jambes\u00A0?',
      keyFact: 'Dans un essai sur 40\u00A0agents de sécurité debout environ 12\u00A0heures par poste, les bas de contention de 15-20\u00A0mmHg comme ceux de 20-30\u00A0mmHg ont évité la hausse de la gêne au pied et à la jambe observée avec des chaussettes classiques (Garcia et coll., 2023).',
      paragraphs: [
        'Les bas de contention font partie des interventions qui ont l’une des études les mieux contrôlées sur la gêne liée à la station debout. Dans un essai randomisé sur 40\u00A0agents de sécurité debout environ 12\u00A0heures par poste, les groupes en bas de contention de 15-20\u00A0mmHg et de 20-30\u00A0mmHg ont tous deux évité la hausse significative de la gêne au pied et à la jambe, de la fatigue et du gonflement observée dans le groupe en chaussettes classiques. Les participants disaient souvent que le bas le moins compressif était plus facile à enfiler.',
        'Un essai pilote randomisé sur 20\u00A0étudiants infirmiers a comparé des bas de contention jusqu’au genou et jusqu’à la cuisse, portés pendant des stages cliniques de 9\u00A0heures. Les deux groupes se disaient très satisfaits, mais l’échantillon était trop petit pour montrer des différences nettes entre les deux longueurs.',
        'L’essai de Garcia portait uniquement sur des agents de sécurité masculins, pas sur des infirmières, et aucune des deux études n’était grande. Mais les bas de contention sont l’une des rares interventions propres à la station debout avec des données randomisées derrière elles. Une revue de 2015 en santé au travail les cite avec les tapis de sol et les chaussures qui maintiennent le pied parmi les interventions qui ont quelques données pour réduire la gêne pendant le travail debout prolongé. Ils ne remplacent ni les étirements ni le renforcement. Ils gèrent le gonflement et la fatigue, tandis que le mollet et le fascia ont toujours besoin de leur propre travail.',
      ],
      sourceNote:
        'Garcia et coll. (2023)\u00A0: plan en groupes parallèles, 40\u00A0agents de sécurité masculins répartis au hasard en trois groupes (chaussettes classiques, 15-20\u00A0mmHg, 20-30\u00A0mmHg), chaque condition portée pendant une journée de travail complète. Gêne, fatigue et œdème mesurés avant et après le poste.',
      cites: [CITE.garcia, CITE.waters],
    },
    {
      h2: 'Que faire avant et après un poste en 3, 5 ou 10\u00A0minutes\u00A0?',
      paragraphs: [
        'Si vous avez 3\u00A0minutes\u00A0: faites les deux étirements du mollet (genou tendu et genou plié, 30\u00A0secondes de chaque côté). Cela couvre le plus fort facteur de risque sur lequel on peut agir, un mollet raide, et prend le temps de lacer vos chaussures.',
        'Si vous avez 5\u00A0minutes\u00A0: ajoutez l’étirement du fascia plantaire (30\u00A0secondes par pied). C’est la combinaison que la recommandation de 2023 note A pour la fasciite plantaire. Si votre talon fait le plus mal aux premiers pas de la journée, faites l’étirement du fascia avant que vos pieds touchent le sol.',
        'Si vous avez 10\u00A0minutes\u00A0: ajoutez les montées sur pointes (3\u00A0séries de 10) et le pied court (3\u00A0séries de 10 avec un maintien de 5\u00A0secondes). Cela couvre le côté renforcement, noté B dans la recommandation. Les jours de repos, 10\u00A0minutes couvrent tout ce qui est sur cette page.',
        'La régularité compte plus que la durée. Trois minutes d’étirements du mollet à chaque jour de travail, toujours au même moment de votre routine, sont plus utiles qu’une séance plus longue que vous sautez quand le planning change.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Une douleur aux pieds après un poste, est-ce une fasciite plantaire ou autre chose\u00A0?',
      paragraphs: [
        'La douleur et la fatigue générales après un long poste sont fréquentes et passent en général avec le repos. La fasciite plantaire est un problème précis\u00A0: une douleur vive près du talon, pire aux premiers pas après le repos (en sortant du lit, en se levant après être resté longtemps assis). Si votre douleur suit ce schéma, les exercices de [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) sont le guide le plus complet, et les détails sur les montées sur pointes sont dans [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
        'Si vos voûtes semblent affaissées ou basculées vers l’intérieur en fin de poste, les exercices de [exercices pour les pieds plats](/fr/exercices-pieds-plats/) ciblent les muscles qui soutiennent la voûte. Une douleur le long du tibia peut être une périostite tibiale. Une douleur dans le tendon d’Achille, à l’arrière du talon, est un autre problème.',
        'Si votre question porte surtout sur la douleur liée à la station debout et que vous n’êtes pas infirmier ou infirmière, [pourquoi ai-je mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) reprend les mêmes exercices pour un public plus large. Pour la version bureau debout de ce problème, voir [bureau debout et mal aux pieds](/fr/bureau-debout-mal-aux-pieds/). Si vous ne savez pas ce qui cause la douleur, consultez un professionnel de santé avant de la charger avec des exercices.',
      ],
    },
  ],
  faq: [
    {
      q: 'Combien de pas fait une infirmière sur un poste de 12\u00A0heures\u00A0?',
      a: 'Dans une étude avec podomètre sur des infirmières hospitalières coréennes, la moyenne était d’environ 9\u00A0360\u00A0pas par poste, soit environ 5,8\u00A0km en 9,4\u00A0heures. C’est bien au-dessus du nombre de pas quotidien moyen des adultes, et cette marche soutenue sur des sols durs contribue beaucoup à la douleur aux pieds dans le métier.',
      cites: [CITE.changCho, CITE.tojo],
    },
    {
      q: 'Les postes de 12\u00A0heures sont-ils pires pour les pieds que les postes de 8\u00A0heures\u00A0?',
      a: 'Dans une enquête sur des infirmières d’un hôpital pédiatrique, travailler en postes de 12\u00A0heures en soins intensifs était le seul facteur lié au travail qui augmentait de façon indépendante le risque de problèmes invalidants du pied et de la cheville. La charge totale sur le pied augmente avec la durée du poste, et le temps de récupération entre deux postes est plus court quand les postes sont plus longs. Cela dit, le type de travail et le sol comptent aussi, pas seulement les heures.',
      cites: [CITE.reedNurse],
    },
    {
      q: 'Sabots ou baskets pour une infirmière qui a mal aux pieds\u00A0?',
      a: 'Aucun grand essai n’a comparé les sabots et les baskets d’infirmière sur la santé des pieds. Ce que les données soutiennent, c’est que le confort des chaussures est fortement associé à la douleur au pied\u00A0: dans une enquête, 72\u00A0% des infirmières qui jugeaient leurs chaussures peu confortables signalaient aussi une douleur au pied et au talon. Choisissez une chaussure qui vous va bien, avec un peu d’amorti, et qui ne serre pas les orteils. Les chaussures seules ne remplacent pas les étirements ni le renforcement de cette page.',
    },
    {
      q: 'Les bas de contention aident-ils les infirmières sur les longs postes\u00A0?',
      a: 'Dans un essai randomisé sur 40\u00A0agents de sécurité debout pendant des postes de 12\u00A0heures, les bas de contention de 15-20\u00A0mmHg comme ceux de 20-30\u00A0mmHg ont évité la hausse de la gêne et du gonflement observée avec des chaussettes classiques. L’essai ne portait pas sur des infirmières, mais le mécanisme est le même\u00A0: la contention aide le sang à remonter du bas des jambes pendant les longues périodes debout. La plupart des participants trouvaient le bas le moins compressif plus facile à enfiler.',
      cites: [CITE.garcia],
    },
    {
      q: 'Avoir mal aux pieds quand on est infirmière, faut-il juste faire avec\u00A0?',
      a: 'La douleur aux pieds liée à la station debout et à la marche est fréquente chez les infirmières, mais «\u00A0fréquent\u00A0» ne veut pas dire inévitable. La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia la note A et au renforcement la note B. Les bas de contention ont des données randomisées sur la gêne liée à la station debout. Quelques minutes d’étirements du mollet avant ou après chaque poste, avec du renforcement les jours de repos, ciblent les tissus qui encaissent le plus.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Le métier d’infirmière peut-il donner une fasciite plantaire\u00A0?',
      a: 'Rester debout la majeure partie de la journée de travail multipliait par 3,6 le risque de fasciite plantaire dans une étude cas-témoins appariée sur 50\u00A0cas et 100\u00A0témoins. Une cheville moins souple le multipliait par 23,3. Les infirmières cumulent les deux facteurs de risque, la station debout prolongée et peu de pauses pour s’étirer, et c’est pourquoi les exercices de cette page recoupent largement ceux du guide sur la fasciite plantaire.',
      cites: [CITE.riddle],
    },
    {
      q: 'Quelle est la première chose à faire pour une infirmière qui a mal aux pieds\u00A0?',
      a: 'Parmi les options présentées sur cette page, l’étirement quotidien du mollet a le meilleur soutien de la recommandation (note A pour la fasciite plantaire) et cible le plus fort facteur de risque sur lequel on peut agir, un mollet raide. Il prend environ 2\u00A0minutes, sans matériel, et se fait en salle de pause ou à la maison. Ajouter des bas de contention les jours de travail couvre le côté gonflement et fatigue.',
      cites: [CITE.guideline, CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a suivi une blessure précise ou une chute au travail',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'le pied est engourdi, fourmille, brûle, est gonflé ou chaud',
      'le talon ou le pied est rouge, ou vous avez de la fièvre ou vous ne vous sentez pas bien',
      'la douleur vous réveille la nuit',
      'la douleur est vive, ou s’aggrave malgré une charge réduite',
      'la douleur est concentrée en un point précis et augmente avec l’activité, ce qui peut évoquer une fracture de fatigue et non une fatigue liée à la station debout',
      'une jambe ou un pied a gonflé brusquement et est douloureux, rouge ou chaud',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
      'la douleur ne s’est pas atténuée après plusieurs semaines de postes plus légers, de meilleures chaussures et des exercices de cette page',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text:
      'Vous n’avez pas à trouver l’ordre, les doses ni le moment de passer à une version plus difficile. Walkito construit un plan une semaine à la fois autour d’un objectif. Si votre douleur aux pieds suit le schéma de la fasciite plantaire, avec une douleur le matin, le premier objectif est une douleur du matin à 1 sur 10 ou moins pendant 14\u00A0jours de suite.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois votre premier objectif atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez si le travail donne quelque chose. Avec des horaires alternés, l’heure ne compte pas. Ce qui compte, c’est de faire les séances régulièrement.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si la douleur est vive, s’aggrave ou vous empêche de dormir, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Mal aux pieds chez les infirmières',
  campaign: 'guide-nurses-fr',
};
