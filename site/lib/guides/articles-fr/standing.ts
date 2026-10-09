import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/standing.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

/** `3, 5 ou 7`: the plan's options as a French list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const STANDING_FR: Guide = {
  lang: 'fr',
  page: 'standing',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Mal aux pieds debout toute la journée\u00A0: que faire',
  description:
    'Pourquoi on a mal aux pieds après une journée debout, ce qui aide (étirements du mollet, renforcement, bas de contention) et quand consulter.',
  h1: 'Pourquoi ai-je mal aux pieds après une journée debout\u00A0?',
  lede:
    'Vos pieds font mal à la fin d’une longue journée de travail. La voûte est douloureuse, le talon sensible, et vos jambes sont lourdes. Rester debout des heures sur un sol dur charge les mêmes tissus encore et encore, sans l’effet de pompe que la marche donne aux mollets et aux veines. Étirer le mollet et le fascia plantaire, et renforcer un peu le mollet, cible les tissus qui encaissent le plus.',
  intro: [
    'Toutes les douleurs de pied liées à la station debout ne sont pas une fasciite plantaire, mais les deux se recoupent. Une étude cas-témoins de 2003, sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins appariés, a montré que rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote (odds) de fasciite plantaire. Une cheville moins souple était un facteur de risque encore plus fort, avec une cote (odds) multipliée par 23,3. Les exercices qui aident dans les deux cas sont en grande partie les mêmes\u00A0: étirements du mollet et du fascia plantaire, plus du renforcement du mollet.',
  ],
  toc: true,
  takeaways: [
    'Une revue de 2015 de la littérature en santé au travail a associé la station debout prolongée au travail à une gêne musculo-squelettique, à la fatigue et à des douleurs dans les jambes. Les tapis de sol, les bas de contention et des chaussures qui maintiennent le pied font partie des interventions qui ont des données derrière elles (Waters et Dick, 2015).',
    'Rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote (odds) de fasciite plantaire dans une étude cas-témoins sur 50\u00A0cas et 100\u00A0témoins. Une cheville moins souple la multipliait par 23,3 (Riddle et coll., 2003).',
    'Dans un essai en groupes parallèles sur 40\u00A0agents de sécurité répartis au hasard entre des chaussettes classiques et deux groupes de bas de contention, les bas de 15-20\u00A0mmHg comme ceux de 20-30\u00A0mmHg ont évité la hausse de la gêne au pied et à la jambe observée avec les chaussettes classiques pendant des journées de 12\u00A0heures debout (Garcia et coll., 2023).',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet sa meilleure note, A, et au renforcement musculaire un B.',
  ],
  sections: [
    {
      h2: 'Pourquoi a-t-on mal aux pieds après une journée debout\u00A0?',
      keyFact: 'Dans une étude cas-témoins de 2003, une cheville moins soupla multipliait par 23,3 la cote (odds) de fasciite plantaire, le plus fort facteur de risque trouvé, et rester debout la majeure partie de la journée de travail la multipliait par 3,6 (Riddle et coll., 2003).',
      paragraphs: [
        'Les pieds font mal à force de rester debout, car la station debout immobile charge le fascia plantaire, les muscles du mollet et le talon sans leur laisser de pause. En marchant, chaque pas renvoie le sang des jambes vers le haut. Debout sans bouger, cette pompe disparaît\u00A0: le sang stagne dans le bas des jambes, et les tissus sous le pied portent la même charge statique pendant des heures.',
        'Une revue de 2015 de la recherche en santé au travail a associé la station debout prolongée à des douleurs du bas du dos, des douleurs dans les jambes, de la gêne et de la fatigue, dans de nombreux métiers où l’on reste debout. La revue notait aussi que la charge cardiovasculaire et le gonflement des jambes augmentent avec la durée de la station debout. Les auteurs demandaient des définitions plus claires de la «\u00A0station debout prolongée\u00A0» dans les futures études, car le seuil entre une durée sans risque et une durée nocive varie selon les personnes et les métiers.',
        'Pour le mollet et le fascia en particulier, une étude cas-témoins de 2003 a trouvé deux facteurs de risque qui se détachaient nettement. Une cheville moins souple, c’est-à-dire un mollet raide, était le plus fort prédicteur de fasciite plantaire, avec une cote (odds) multipliée par 23,3. Rester debout la majeure partie de la journée de travail la multipliait par 3,6. Les deux sont liés\u00A0: un mollet raide maintient le talon sous plus de tension à chaque minute passée debout.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Quels exercices aident quand on a mal aux pieds à force de rester debout\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note A, sa meilleure note, et au renforcement musculaire la note B (Koc et coll., 2023).',
      paragraphs: [
        'Ces exercices ciblent le mollet, le fascia plantaire et les petits muscles qui soutiennent la voûte. Ce sont les doses de départ de Walkito, pas une prescription. Si votre douleur est près du talon et suit le schéma de la fasciite plantaire, avec une douleur le matin, l’ensemble complet d’exercices se trouve dans [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/). [Comment ces guides sont écrits](/fr/a-propos/).',
        'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet sa meilleure note, A. Elle donne au renforcement musculaire un B. Ces deux notes concernent la fasciite plantaire, pas la fatigue générale liée à la station debout, mais les tissus en jeu sont les mêmes. Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour aujourd’hui.',
      ],
      table: {
        head: ['Exercice', 'Dose', 'Fréquence', 'Ce que vous devez sentir', 'Arrêtez si'],
        rows: [
          ['Étirement du mollet', '2\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'La plupart des séances', 'Un étirement dans le mollet de la jambe arrière tendue', 'La douleur atteint 6/10'],
          ['Étirement du soléaire', '2\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'La plupart des séances', 'Un étirement bas dans le mollet, près du talon', 'La douleur atteint 6/10'],
          ['Étirement du fascia plantaire', '2\u00A0maintiens de 30\u00A0secondes, chaque pied', 'La plupart des séances', 'Un étirement le long de la voûte, pas dans le mollet', 'La douleur atteint 6/10'],
          ['Montées sur pointes, deux pieds', '3\u00A0séries de 10, deux pieds', 'Jours de renforcement', 'Les mollets qui travaillent, les deux pieds se partageant la charge', 'La douleur atteint 6/10'],
          ['Pied court, assis', '3\u00A0séries de 10, maintien de 5\u00A0secondes, chaque pied', 'Jours de renforcement', 'La voûte qui se soulève, orteils relâchés', 'La douleur atteint 6/10'],
          ['Équilibre sur une jambe', '3\u00A0maintiens de 30\u00A0secondes, chaque jambe', 'Jours d’équilibre', 'Le pied et la cheville qui font de petites corrections', 'La douleur atteint 6/10'],
          ['Massage avec une balle', '2\u00A0minutes', 'Jours de récupération', 'Une pression ferme sous le pied, jamais une grimace', 'La douleur atteint 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet la note A pour la fasciite plantaire. Un mollet raide était le plus fort facteur de risque dans une étude cas-témoins de 2003.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée\u00A0: cet étirement cible donc le plus fort facteur de risque trouvé par l’étude de 2003.',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: {
            level: 'moderate',
            why: 'Même mécanisme que l’étirement du mollet\u00A0: il cible la souplesse de la cheville, le plus fort facteur de risque de fasciite plantaire dans l’étude de 2003.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position contre le mur, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne qui s’étire contre un mur, le genou arrière plié, le bas du mollet mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire la note A pour la fasciite plantaire.',
          },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des séances',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement le long de la voûte, pas dans le mollet. Si votre talon fait le plus mal au réveil, faites celui-ci avant que votre pied touche le sol.',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne qui tire les orteils d’un pied vers elle, la plante du pied mise en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 sur la douleur au talon donne au renforcement musculaire la note B pour la fasciite plantaire. Pas testé spécifiquement pour la fatigue liée à la station debout.',
          },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge pendant que le mollet se renforce. Tenez-vous à un mur ou à une rampe pour l’équilibre si besoin.',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes\u00A0: montez bien droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Pied court, assis',
          evidence: {
            level: 'early',
            why: 'Une revue de 2024 a trouvé que le pied court changeait la forme de la voûte, mais pas la douleur. Dans un essai de 2023, il faisait partie d’un programme qui a amélioré les mesures de la voûte.',
          },
          dose: '3\u00A0séries de 10, maintien de 5\u00A0secondes, chaque pied',
          often: 'Jours de renforcement',
          feel: 'La voûte qui se soulève, orteils relâchés',
          how: 'Asseyez-vous, le pied à plat au sol. Tirez l’avant du pied vers le talon pour que la voûte se soulève, et tenez. Ne recroquevillez pas les orteils. Le pied court entraîne le petit muscle à l’intérieur de la voûte qui la soutient pendant une longue journée debout.',
          image: 'Exercice\u00A0: pied court, assis',
          media: 'short_foot_seated',
          caption: 'Pied court\u00A0: tirez l’avant du pied vers le talon pour que la voûte se soulève',
          alt: 'Une jambe en position assise, le pied au sol, la voûte mise en évidence pendant qu’elle se soulève',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: {
            level: 'early',
            why: 'Pas d’étude propre à la station debout. Un travail d’équilibre général pour le pied et la cheville.',
          },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied et la cheville',
          how: 'Tenez-vous sur un pied et fixez un point. Laissez le pied osciller. Ces oscillations, c’est le pied qui fait le travail d’équilibre. Placez-vous près d’un mur si vous voulez une sécurité.',
          image: 'Exercice\u00A0: équilibre sur une jambe',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: tenez-vous sur un pied et laissez-le faire de petites corrections',
          alt: 'Une personne en équilibre sur une jambe, les muscles du bas de la jambe mis en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: {
            level: 'early',
            why: 'Pas testé dans les études de cette page. Il est là pour le confort entre les séances.',
          },
          dose: '2\u00A0minutes',
          often: 'Jours de récupération',
          feel: 'Une pression ferme sous le pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, appuyez moins. Le massage après une longue journée détend le tissu et apporte un peu de soulagement avant le lendemain.',
          image: 'Exercice\u00A0: massage avec une balle',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante, avec une pression ferme',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Les semelles ou les chaussures qui maintiennent aident-elles quand on a mal aux pieds debout\u00A0?',
      paragraphs: [
        'Les chaussures qui maintiennent le pied et les semelles sont souvent conseillées pour les douleurs de pied liées à la station debout, et ce conseil a une certaine base, mais les données sont plus minces que pour les étirements et le renforcement. La recommandation de 2023 sur la douleur au talon donne aux orthèses seules la note **B contre** pour le soulagement de la douleur à court terme, ce qui veut dire que les données penchent plutôt contre leur usage comme seule solution. Les orthèses associées à d’autres soins obtiennent un **C**.',
        'Ce que soutient la revue en santé au travail est plus large\u00A0: les tapis de sol, les chaussures qui maintiennent le pied et les postes assis-debout figurent tous dans la liste des interventions qui ont quelques données pour réduire la gêne pendant le travail debout. Aucune n’a un grand essai derrière elle comme les étirements du mollet. Une approche raisonnable\u00A0: portez des chaussures qui maintiennent le pied et utilisez un tapis si votre sol est dur, et faites les étirements et le renforcement pour les tissus eux-mêmes.',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: 'Les bas de contention aident-ils contre la douleur aux pieds debout\u00A0?',
      keyFact: 'Dans un essai sur 40\u00A0agents de sécurité travaillant debout 12\u00A0heures par jour, les bas de contention de 15-20\u00A0mmHg comme ceux de 20-30\u00A0mmHg ont évité la hausse de la gêne au pied et à la jambe observée avec des chaussettes classiques (Garcia et coll., 2023).',
      paragraphs: [
        'Les bas de contention font partie des interventions qui ont l’une des études les mieux contrôlées sur la gêne liée à la station debout. Dans un essai randomisé sur 40\u00A0agents de sécurité qui restaient debout environ 12\u00A0heures par journée de travail, répartis en trois groupes, les groupes en bas de contention de 15-20\u00A0mmHg et de 20-30\u00A0mmHg ont tous deux évité la hausse significative de la gêne au pied et à la jambe, de la fatigue et du gonflement observée dans le groupe en chaussettes classiques. Les participants disaient souvent que le bas le moins compressif était plus facile à enfiler.',
        'L’essai était petit, uniquement masculin, et ne portait que sur un métier. Mais c’est l’une des rares interventions contre la gêne liée à la station debout testée avec un plan randomisé, et c’est pourquoi elle apparaît sur cette page avant des conseils plus populaires. Les bas de contention ne remplacent ni les étirements ni le renforcement. Ils aident à gérer le gonflement et la fatigue, tandis que le mollet et le fascia ont toujours besoin de leur propre travail.',
      ],
      sourceNote:
        'Garcia et coll. (2023)\u00A0: plan en groupes parallèles, 40\u00A0agents de sécurité masculins répartis au hasard dans l’un des trois groupes (chaussettes classiques, 15-20\u00A0mmHg ou 20-30\u00A0mmHg), chaque condition portée pendant une journée de travail complète par un sous-groupe différent. Gêne, fatigue et œdème mesurés avant et après la journée.',
      cites: [CITE.garcia],
    },
    {
      h2: 'Une douleur aux pieds debout, est-ce une fasciite plantaire, des pieds plats ou autre chose\u00A0?',
      paragraphs: [
        'La douleur aux pieds liée à la station debout peut être une fatigue générale qui passe avec le repos, ou le début d’un problème bien identifié. Le plus fréquent est la fasciite plantaire\u00A0: une douleur vive près du talon, en général pire aux premiers pas après le repos. Si votre talon fait le plus mal le matin, puis à nouveau après être resté assis, ce schéma oriente vers une fasciite plantaire, et les exercices de [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) sont le guide le plus complet.',
        'Si vos voûtes semblent affaissées ou basculées vers l’intérieur en fin de journée, les exercices de [exercices pour les pieds plats](/fr/exercices-pieds-plats/) ciblent les muscles qui soutiennent la voûte. Un pied plat rigide, qui reste plat même quand le pied ne touche pas le sol, est structurel et demande un professionnel de santé plutôt que des exercices.',
        'Si la douleur est le long du tibia plutôt que sous le pied, cela oriente vers une périostite tibiale, et [exercices pour la périostite tibiale](/fr/periostite-tibiale-exercices/) résume ce qu’en dit la recherche. Une douleur à l’arrière du talon, dans le tendon d’Achille, est un autre problème. Une douleur à l’intérieur de la cheville peut venir du tendon tibial postérieur. Les deux sont traités du point de vue des coureurs dans [douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais). Si la douleur est à l’arrière du talon, dans le tendon d’Achille, voir [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/)\u00A0; si vous voulez plus de détails sur l’exercice de montée sur pointes lui-même, voir [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/). Si vous ne savez pas ce qui cause la douleur, consultez un professionnel de santé avant de la charger avec des exercices.',
      ],
    },
    {
      h2: 'Combien de temps avant que vos pieds aillent mieux pendant une longue journée\u00A0?',
      paragraphs: [
        'Aucun essai ne répond directement à cette question pour la fatigue des pieds liée à la station debout. La douleur et la fatigue générales dues à la station debout s’atténuent en général en un ou deux jours de repos. Si la douleur a basculé vers une fasciite plantaire, le délai est plus long\u00A0: une revue des données cliniques indique qu’environ 90\u00A0% des personnes atteintes de fasciite plantaire s’améliorent avec des soins non chirurgicaux comme les étirements et les semelles, souvent en 3 à 6\u00A0mois.',
        'Ce que vous pouvez mesurer plus tôt, c’est si les exercices changent quelque chose. La souplesse du mollet peut commencer à évoluer en quelques semaines d’étirements quotidiens. Refaire un test d’endurance du mollet et d’équilibre toutes les quelques semaines vous donne un chiffre à regarder plutôt qu’une impression. Les exercices de cette page et ceux de [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) travaillent les mêmes tissus\u00A0: les faire pour la station debout couvre donc aussi le chemin le plus fréquent vers la fasciite plantaire.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Pourquoi j’ai plus mal aux pieds en fin de journée debout qu’au début\u00A0?',
      a: 'Le fascia plantaire, les muscles du mollet et les veines du bas de la jambe ont une tolérance limitée à une charge statique prolongée, et cette tolérance s’épuise au fil des heures debout. La gravité fait stagner le sang dans les pieds et le bas des jambes quand on reste debout immobile, ce qui ajoute à la douleur et au gonflement qui s’installent au fil de la journée. Les pauses de marche aident, car la pompe du mollet renvoie le sang vers le haut.',
      cites: [CITE.waters],
    },
    {
      q: 'Avoir mal aux pieds debout toute la journée, c’est une fasciite plantaire\u00A0?',
      a: 'Pas toujours. La douleur et la fatigue générales liées à la station debout sont fréquentes et passent en général avec le repos. La fasciite plantaire est un problème précis, avec une douleur vive au talon, souvent pire aux premiers pas après le repos. Rester debout la majeure partie de la journée de travail est un facteur de risque indépendant de fasciite plantaire, avec une cote (odds) multipliée par 3,6 dans une étude cas-témoins\u00A0: les deux sont liés, mais pas identiques.',
      cites: [CITE.riddle],
    },
    {
      q: 'Les bas de contention aident-ils quand on a mal aux pieds debout\u00A0?',
      a: 'Dans un essai sur 40\u00A0agents de sécurité travaillant debout 12\u00A0heures par jour, répartis au hasard entre des chaussettes classiques et deux groupes de bas de contention, les bas de 15-20\u00A0mmHg comme ceux de 20-30\u00A0mmHg ont évité la hausse de la gêne au pied et à la jambe, de la fatigue et du gonflement observée avec les chaussettes classiques. C’est l’une des rares interventions propres à la station debout avec un essai contrôlé derrière elle, même si l’étude était petite et uniquement masculine.',
      cites: [CITE.garcia],
    },
    {
      q: 'Est-ce normal d’avoir mal aux pieds après 8 ou 12\u00A0heures debout\u00A0?',
      a: 'Un peu de fatigue et de douleur après une longue journée debout est fréquent et correspond à ce que rapporte la recherche en santé au travail. Une revue de 2015 a relié la station debout prolongée à une gêne musculo-squelettique et à de la fatigue dans de nombreux métiers debout. Fréquent ne veut pas dire qu’il faut l’ignorer sur le long terme\u00A0: la même revue note que les tapis de sol, les bas de contention et de meilleures chaussures réduisent ces effets de façon mesurable.',
      cites: [CITE.waters],
    },
    {
      q: 'Quelle est la première chose à essayer contre le mal aux pieds debout\u00A0?',
      a: 'Parmi les options de soin personnel présentées sur cette page, les étirements du mollet et du fascia plantaire ont la meilleure note (A) dans la recommandation de 2023 sur la douleur au talon, pour la douleur au talon en particulier, et les bas de contention ont l’essai contrôlé le plus solide sur la gêne liée à la station debout. Commencer des étirements quotidiens du mollet et essayer des bas de contention lors de votre prochaine longue journée couvre les deux.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Combien d’heures peut-on rester debout sans risque\u00A0?',
      a: 'Il n’existe pas de limite sûre unique et testée. La recherche en santé au travail montre que la gêne, la fatigue et le gonflement augmentent avec la durée passée debout, avec la hausse la plus nette sur des journées de 8 à 12\u00A0heures. Le confort dépend davantage du mouvement que du nombre d’heures\u00A0: de courtes pauses assis ou en marchant environ toutes les heures aident à compenser la charge statique que la station debout impose aux pieds.',
      cites: [CITE.waters],
    },
    {
      q: 'Comment rester debout 10\u00A0heures sans avoir mal aux pieds\u00A0?',
      a: 'Aucune astuce unique ne supprime la douleur d’une journée de 10\u00A0heures, mais combiner plusieurs approches aide le plus\u00A0: portez des chaussures amorties qui maintiennent le pied, ajoutez un tapis sur les sols durs, faites de courtes pauses de marche toutes les heures pour relancer la circulation, et étirez chaque jour le mollet et le fascia plantaire. Les bas de contention ont réduit la gêne et le gonflement dans un essai sur des agents de sécurité en longues journées.',
      cites: [CITE.garcia, CITE.waters],
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a suivi une blessure ou une chute',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'elle s’accompagne d’engourdissements, de fourmillements, de brûlures, d’un gonflement ou de chaleur',
      'le talon ou le pied est rouge, ou vous avez de la fièvre ou vous ne vous sentez pas bien',
      'elle vous réveille la nuit',
      'elle est vive, ou s’aggrave malgré une charge réduite',
      'la douleur est concentrée en un point précis et augmente avec l’activité, ce qui peut évoquer une fracture de fatigue plutôt qu’une fatigue liée à la station debout',
      'une jambe ou un pied a gonflé brusquement et est douloureux, rouge ou chaud',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
      'la douleur ne s’est pas atténuée après plusieurs semaines de charge réduite, de meilleures chaussures et des exercices de cette page',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: `Vous n’avez pas à trouver l’ordre, les doses ni le moment de passer à une version plus difficile. Walkito construit un plan une semaine à la fois autour d’un objectif. Si votre douleur aux pieds liée à la station debout est pire le matin, le premier objectif est le même que pour la douleur au talon\u00A0: une douleur du matin à 1/10 ou moins pendant ${PROGRAM.painFreeDays}\u00A0jours de suite. Si vos voûtes sont aussi affaissées, la voûte a son propre objectif et ses propres exercices.`,
    more: [
      `Vous choisissez ${DAYS}\u00A0jours par semaine et des séances de ${MINUTES}\u00A0minutes. Tous les ${PROGRAM.testEveryDays}\u00A0jours (puis tous les ${PROGRAM.testEveryDaysAfterGoal} une fois votre premier objectif atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez si le travail donne quelque chose.`,
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si la douleur est vive, s’aggrave ou vous empêche de dormir, consultez d’abord un professionnel de santé.',
    ],
    cta: `Commencez avec ${PROGRAM.sessionMinutes[0]}\u00A0minutes par jour.`,
  },
  crumb: 'Mal aux pieds debout',
  campaign: 'guide-standing-fr',
};
