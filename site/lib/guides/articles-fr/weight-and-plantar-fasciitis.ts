import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/weight-and-plantar-fasciitis.ts (2026-10-18),
 * written around «surpoids et fasciite plantaire», «fasciite plantaire poids»
 * and «maigrir fasciite plantaire». French (France) with «vous», terminology
 * and exercise names as in `lib/guides/fr.ts`. Respectful, non-blaming
 * wording: «poids plus élevé» in the body text. Figures, doses, grades,
 * hedges and sources are identical to the English page after its
 * fact-check. Same CITE keys and media ids. Link to /heel-pain-runners/
 * removed (no French version), words kept.
 */

export const WEIGHT_PF_FR: Guide = {
  lang: 'fr',
  page: 'weightPf',
  mainSource: CITE.vanLeeuwenBmi,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Surpoids et fasciite plantaire\u00A0: ce que montrent les études',
  description:
    'Le surpoids favorise-t-il la fasciite plantaire, et maigrir aide-t-il\u00A0? Ce que disent les études, le rôle de la charge et des exercices assis adaptés.',
  h1: 'Poids et fasciite plantaire\u00A0: ce que montre la recherche, et ce qui aide dès maintenant',
  lede:
    'Un poids plus élevé est l’un des facteurs de risque les plus nets de la [fasciite plantaire](/fr/fasciite-plantaire/) chez les personnes qui ne sont pas sportives. Dans une revue de 51\u00A0études, un indice de masse corporelle (IMC) supérieur à 27 multipliait par 3,7 la cote (odds) de fasciite plantaire (van Leeuwen et coll., 2016). La question de savoir si perdre du poids soulage la douleur au talon est moins tranchée\u00A0: aucun essai randomisé ne l’a testé chez des personnes souffrant du talon. Les étirements et le renforcement les mieux notés par la recommandation de 2023 sont donc le point de départ, quel que soit votre poids.',
  intro: [
    'Le poids est un facteur parmi d’autres, pas un verdict. Dans l’étude cas-témoins qui a relié un IMC supérieur à 30 à la fasciite plantaire, une cheville raide était un facteur bien plus fort (Riddle et coll., 2003). Des personnes de toutes les corpulences ont mal au talon, et des personnes de toutes les corpulences vont mieux. Cette page présente ce que les études ont trouvé, ce que l’on sait de la perte de poids, pourquoi la charge compte, et des exercices à faire assis ou avec un appui.',
  ],
  takeaways: [
    'Dans une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100 sans, un IMC supérieur à 30 multipliait par 5,6 la cote (odds) de fasciite plantaire, par rapport à un IMC de 25 ou moins. Une cheville raide était le facteur le plus fort, avec une cote multipliée par 23,3 (Riddle et coll., 2003).',
    'Une revue de 51\u00A0études a montré qu’un IMC supérieur à 27 était le seul facteur clinique, parmi ceux qui pouvaient être regroupés, nettement lié à la fasciite plantaire, avec une cote multipliée par 3,7, et que ce lien était le plus fort chez les personnes qui ne sont pas sportives (van Leeuwen et coll., 2016).',
    'Aucun essai randomisé n’a testé la perte de poids contre la douleur au talon. Une revue de 2012 n’a trouvé que deux études sur la perte de poids et la douleur au pied, toutes deux après une chirurgie de l’obésité, et a jugé les données limitées (Butterworth et coll., 2012).',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note **A** et au renforcement la note **B**. Les conseils pour garder une masse maigre saine obtiennent la note **E**, ce qui veut dire qu’ils reposent sur la théorie, pas sur des essais (Koc et coll., 2023).',
    'Dans un suivi de 174\u00A0personnes, l’IMC ne permettait pas de prévoir qui aurait encore mal au talon des années plus tard. Être une femme et avoir mal aux deux talons le permettaient (Hansen et coll., 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Le poids influence-t-il la fasciite plantaire\u00A0?',
      keyFact: 'Dans une revue de 51\u00A0études, un IMC supérieur à 27 multipliait par 3,7 la cote de fasciite plantaire, et ce lien était le plus fort chez les personnes qui ne sont pas sportives (van Leeuwen et coll., 2016).',
      paragraphs: [
        '**Oui\u00A0: chez les personnes qui ne sont pas sportives, un IMC plus élevé est lié à la fasciite plantaire, étude après étude.** L’IMC est le poids divisé par la taille au carré. C’est une mesure approximative, mais c’est celle que ces études ont utilisée.',
        'L’étude la plus connue a comparé 50\u00A0personnes atteintes de fasciite plantaire à un talon à 100\u00A0personnes du même âge et du même sexe qui n’en avaient pas. Un IMC supérieur à 30 multipliait par 5,6 la cote de fasciite plantaire, par rapport à un IMC de 25 ou moins (Riddle et coll., 2003).',
        'Une revue de 2016 a regroupé 51\u00A0études. De tous les facteurs cliniques que les auteurs ont pu combiner, un IMC supérieur à 27 était le seul nettement lié à la fasciite plantaire, avec une cote multipliée par 3,7, et ce lien était le plus fort chez les personnes qui ne sont pas sportives (van Leeuwen et coll., 2016). Deux revues plus anciennes sont arrivées à la même conclusion, et toutes deux n’ont trouvé aucun lien entre l’IMC et la douleur au talon chez les sportifs (Irving et coll., 2006\u00A0; Butterworth et coll., 2012).',
        'La recommandation de 2023 sur la douleur au talon cite un IMC élevé chez les personnes qui ne sont pas sportives comme facteur de risque, à côté d’une cheville raide, de la course à pied et des longues heures debout, surtout sur des sols durs (Koc et coll., 2023).',
      ],
      sourceNote:
        'Riddle 2003\u00A0: IMC supérieur à 30 contre 25 ou moins, odds ratio 5,6 (IC à 95\u00A0% 1,9 à 16,6). van Leeuwen 2016\u00A0: IMC supérieur à 27, odds ratio 3,7 (IC à 95\u00A0% 2,93 à 5,62)\u00A0; 46 des 51\u00A0études étaient des études cas-témoins.',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi, CITE.irvingHeelPain, CITE.butterworthBmi, CITE.guideline],
    },
    {
      h2: 'Le poids est-il la cause, ou un facteur parmi d’autres\u00A0?',
      keyFact: 'Dans la même étude, une cheville raide multipliait par 23,3 la cote de fasciite plantaire et le fait de passer la majeure partie de la journée de travail debout la multipliait par 3,6, contre 5,6 pour un IMC supérieur à 30 (Riddle et coll., 2003).',
      paragraphs: [
        '**Un facteur parmi d’autres, et pas le plus fort.** Dans l’étude cas-témoins de 2003, trois facteurs comptaient chacun de façon indépendante\u00A0:',
        {
          list: [
            'Une cheville raide (le pied se plie à peine vers le tibia)\u00A0: cote multipliée par 23,3.',
            'Un IMC supérieur à 30\u00A0: cote multipliée par 5,6.',
            'Passer la majeure partie de la journée de travail debout\u00A0: cote multipliée par 3,6.',
          ],
        },
        'Les auteurs ont jugé la cheville raide la plus importante des trois (Riddle et coll., 2003). C’est un point important, car une cheville raide vient souvent de [mollets tendus](/fr/mollets-tendus/), et l’étirement du mollet est quelque chose que vous pouvez commencer dès aujourd’hui.',
        'La plupart de ces études sont des études cas-témoins ou transversales\u00A0: elles comparent des personnes qui ont déjà mal au talon à des personnes qui n’ont pas mal. Elles montrent un lien, pas la preuve que le poids cause la fasciite plantaire (van Leeuwen et coll., 2016). Si vous travaillez aussi debout, [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/) traite de cet aspect de la charge.',
      ],
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
    },
    {
      h2: 'Pourquoi la charge compte-t-elle pour le talon\u00A0?',
      paragraphs: [
        '**Le fascia plantaire est la bande sous le pied qui soutient la voûte, et il reçoit une charge à chaque pas.** Plus de poids corporel veut dire plus de charge par pas\u00A0: la même marche ou la même journée de travail demande donc plus au tissu. Le conseil de la recommandation pour la douleur au talon repose sur cette idée\u00A0: adapter la charge sur vos pieds au travail, pendant les loisirs et dans la vie quotidienne. Elle donne à ce conseil la note **E**, parce qu’il repose sur la théorie, pas sur des essais (Koc et coll., 2023).',
        'Perdre du poids diminue bien la pression sous le pied. Dans un essai sur 41\u00A0adultes dont l’IMC moyen était proche de 36, le groupe qui suivait un programme alimentaire a perdu 5,9\u00A0kg en trois mois, contre 1,9\u00A0kg dans le groupe de comparaison, et avait une pression maximale plus faible sous certaines zones du pied. La forme du pied et la façon de marcher n’ont pas changé (Song et coll., 2015). Cet essai n’a pas mesuré la douleur au talon.',
        'La pression n’explique pas tout non plus. Dans une étude sur des personnes ayant mal aux pieds et en attente d’une chirurgie de l’obésité, la douleur a diminué après l’opération, mais la baisse de pression sous le pied n’était pas liée à la baisse de la douleur. L’humeur, si\u00A0: les personnes qui avaient plus de symptômes dépressifs déclaraient plus de douleur au pied, avant comme après (Walsh et coll., 2018). La douleur ne dépend pas que de la mécanique, et c’est une raison de plus de ne pas vous en vouloir.',
      ],
      cites: [CITE.guideline, CITE.songWeightLoss, CITE.walshBariatric],
    },
    {
      h2: 'Perdre du poids aide-t-il la fasciite plantaire\u00A0?',
      keyFact: 'Une revue de 2012 n’a trouvé que deux études prospectives sur la perte de poids et les symptômes au pied, toutes deux après une chirurgie, et a conclu que les données en faveur de la perte de poids pour réduire la douleur au pied étaient limitées (Butterworth et coll., 2012).',
      paragraphs: [
        '**Peut-être, mais aucun essai randomisé ne l’a testé chez des personnes souffrant du talon.** C’est la réponse honnête. Tout ce que l’on sait vient d’études sans véritable groupe de comparaison, le plus souvent après une chirurgie de l’obésité. Voici ce qui existe\u00A0:',
      ],
      table: {
        caption: 'Études sur la perte de poids et la douleur au pied ou au talon',
        head: ['Étude', 'Qui', 'Ce qu’elle a montré'],
        rows: [
          ['Boules, 2018', '163\u00A0personnes atteintes de fasciite plantaire, après une chirurgie de l’obésité', 'Les symptômes au talon ont disparu chez 90\u00A0%, d’après les dossiers'],
          ['Walsh, 2018', '45\u00A0personnes ayant mal aux pieds\u00A0: 29 opérées, 16 en attente', 'La douleur au pied a diminué après l’opération'],
          ['Song, 2015', '41\u00A0adultes, programme alimentaire ou attente', 'Pression plus faible sous le pied\u00A0; douleur non mesurée'],
          ['Yang, 2025', '92\u00A0personnes sous sémaglutide, parmi 2\u00A0902 ayant mal au talon', 'Amélioration de la douleur plus nette que chez les non-utilisateurs, étude non randomisée'],
        ],
      },
      after: [
        'La plus grande étude a examiné rétrospectivement les dossiers de 163\u00A0personnes atteintes de fasciite plantaire qui avaient eu une chirurgie de l’obésité. Leur IMC moyen est passé de 45 à environ 35, et chez 146 d’entre elles (90\u00A0%), les symptômes au talon ont disparu (Boules et coll., 2018). Il n’y avait pas de groupe de comparaison, et environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux de toute façon avec un traitement non chirurgical (Latt et coll., 2020)\u00A0: cette étude ne peut donc pas montrer ce que la perte de poids elle-même a apporté.',
        'L’étude sur le sémaglutide a suivi des personnes souffrant du talon depuis longtemps. Les 92 qui prenaient ce médicament pour un diabète ou pour perdre du poids ont déclaré une amélioration plus nette que les autres, mais elles n’avaient pas été choisies au hasard, et les auteurs demandent un essai randomisé (Yang et coll., 2025). Les médicaments et la chirurgie de l’obésité sont des décisions à prendre avec votre médecin, pas quelque chose à commencer pour la seule douleur au talon.',
        'La recommandation ne demande pas aux soignants de prescrire une perte de poids contre la douleur au talon. Elle indique qu’ils peuvent donner des conseils d’exercice pour gagner ou garder une masse maigre saine, et vous orienter vers un suivi nutritionnel, avec la note **E** (Koc et coll., 2023).',
      ],
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.walshBariatric, CITE.songWeightLoss, CITE.yangSemaglutide, CITE.latt, CITE.guideline],
    },
    {
      h2: 'Quels exercices conviennent à un poids plus élevé\u00A0?',
      paragraphs: [
        'Les exercices les mieux notés par la recommandation de 2023, les étirements (**A**) et le renforcement du mollet (**B**), ne dépendent pas de votre poids (Koc et coll., 2023). Ce qui change, c’est la façon de commencer. Les versions assises ou avec appui mettent moins de charge sur le talon et ménagent les genoux et l’équilibre\u00A0: elles viennent donc en premier ici.',
        'Ce sont les mêmes doses de départ que dans le guide principal des [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/). Faites le premier étirement du fascia plantaire assis au bord du lit, avant de vous lever\u00A0: dans un essai sur 82\u00A0personnes, un étirement du fascia plantaire fait avant de se lever a davantage soulagé la douleur des premiers pas du matin que l’étirement du mollet seul (DiGiovanni et coll., 2003). Si un exercice fait monter votre douleur au talon à 6 sur 10, arrêtez pour la journée.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Si croiser la jambe est difficile, laissez le pied au sol, passez une serviette autour de l’avant du pied et tirez doucement dessus.',
          stop: 'Une douleur vive au talon, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne qui tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur ou sur un plan de travail de cuisine. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Le mur prend une partie de votre poids\u00A0: ne vous penchez que jusqu’où vous vous sentez stable.',
          stop: 'Une douleur au mollet qui persiste après l’arrêt',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position contre le mur, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur au mollet qui persiste après l’arrêt',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '3\u00A0jours par semaine, jamais deux jours de suite',
          feel: 'Un travail en bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Genou plié, cet exercice sollicite surtout le soléaire, le muscle profond du mollet, presque sans charge sur le talon. C’est la première étape du renforcement du mollet, quel que soit votre poids.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds, en se tenant à un plan de travail',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement, une fois que les montées assis deviennent faciles',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Placez-vous face à un plan de travail ou au dossier d’une chaise stable, les mains posées dessus. Montez bien droit au-dessus des gros orteils, puis redescendez lentement. Vos mains peuvent prendre un peu de poids les jours douloureux, et de moins en moins à mesure que vous gagnez en force. Les deux pieds se partagent la charge.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Pied court, assis',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023. Seul, le pied court donne des résultats plus faibles. Non testé contre la douleur au talon.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'La voûte qui se soulève',
          how: 'Asseyez-vous, le pied à plat au sol. Tirez la base des orteils vers le talon pour que la voûte se soulève, et tenez. Gardez le bord extérieur du pied au sol. Ne recroquevillez pas les orteils\u00A0: c’est l’erreur la plus fréquente sur cet exercice.',
          stop: 'Une crampe dans le pied qui ne passe pas quand vous arrêtez',
          image: 'Exercice\u00A0: pied court, assis',
          media: 'short_foot_seated',
          caption: 'Pied court, assis\u00A0: soulevez la voûte sans recroqueviller les orteils',
          alt: 'Une personne assise qui soulève la voûte d’un pied, la voûte mise en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Quelles activités ménagent le talon\u00A0?',
      paragraphs: [
        '**Les activités où vos pieds ne portent pas tout votre poids à chaque pas.** La recommandation conseille de modifier la charge sur vos pieds plutôt que d’arrêter toute activité (Koc et coll., 2023). Aucune étude n’a comparé les activités chez des personnes ayant mal au talon et un poids plus élevé\u00A0: ce sont donc des options pratiques, pas des options testées\u00A0:',
        {
          list: [
            '**Un vélo d’appartement ou un vélo couché.** Vous restez en mouvement pendant qu’une selle porte votre poids.',
            '**La natation ou la marche dans l’eau.** L’eau soulage vos pieds d’une grande partie de votre poids.',
            '**Des exercices assis ou pour le haut du corps.** Pédalier à bras, élastiques ou exercices sur chaise vous gardent actif les jours où le talon fait mal.',
            '**Des marches plus courtes, plus souvent.** Plusieurs courtes marches peuvent être plus faciles pour un talon douloureux qu’une seule longue.',
          ],
        },
        'Un contrôle simple vaut pour toutes les activités\u00A0: si vos premiers pas le lendemain matin sont nettement pires, cette journée en a demandé plus que ce que le talon pouvait supporter, alors faites un peu moins la fois suivante. [Marcher avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/) explique comment reprendre la marche progressivement.',
        'Si vous commencez à bouger pour vous sentir mieux ou pour perdre du poids, démarrer par des activités à faible impact vous permet de continuer pendant que le talon se calme. La recommandation cite la course à pied et les longues heures debout, surtout sur des sols durs, parmi les facteurs de risque de douleur au talon (Koc et coll., 2023).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Les chaussures et les semelles comptent-elles plus avec un poids plus élevé\u00A0?',
      paragraphs: [
        'Aucune étude n’a testé les chaussures ou les semelles contre la douleur au talon spécifiquement chez des personnes de poids plus élevé. Pour la douleur au talon en général, la recommandation de 2023 donne aux semelles seules la note **B contre**\u00A0: les données disent de ne pas compter sur elles seules. Associées aux étirements et au renforcement, elles obtiennent un **C** (Koc et coll., 2023). [Semelles ou exercices](/fr/semelles-ou-exercices/) compare les deux.',
        'La recommandation préconise bien des conseils sur les chaussures dans la gestion de la charge, et elle cite le travail en appui sur des sols durs qui amortissent mal les chocs comme facteur de risque (Koc et coll., 2023). Une option pratique, non testée dans des essais, consiste à porter des chaussures amorties qui maintiennent le pied sur les sols durs, y compris à la maison.',
        'Après une perte de poids importante, les pieds peuvent changer. Dans l’étude sur la chirurgie, les auteurs ont suggéré que la perte de graisse sous le milieu du pied peut modifier la façon dont les chaussures et les semelles s’ajustent, et qu’il vaut la peine de le vérifier après une forte perte de poids (Walsh et coll., 2018).',
      ],
      cites: [CITE.guideline, CITE.walshBariatric],
    },
    {
      h2: 'La fasciite plantaire passera-t-elle si je ne perds pas de poids\u00A0?',
      paragraphs: [
        '**Pour la plupart des gens, oui\u00A0: elle s’atténue avec le temps et un traitement non chirurgical.** Environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec un traitement non chirurgical, comme les étirements et les semelles, souvent en 3 à 6\u00A0mois (Latt et coll., 2020). Pourquoi elle touche davantage les femmes vers 50\u00A0ans est expliqué dans [fasciite plantaire et ménopause](/fr/fasciite-plantaire-menopause/).',
        'Dans un long suivi de 174\u00A0personnes, les chercheurs ont vérifié si l’IMC, l’âge, le tabac, le travail physique et d’autres facteurs permettaient de prévoir qui aurait encore mal au talon des années plus tard. Seuls le fait d’être une femme et d’avoir mal aux deux talons le permettaient. L’IMC, non (Hansen et coll., 2018).',
        'Un poids plus élevé rend donc peut-être l’apparition d’une fasciite plantaire plus probable, mais cela ne veut pas dire que vous la garderez. Les étirements et le renforcement du mollet ci-dessus sont les mêmes qui aident les personnes de toutes les corpulences. [Combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) donne l’évolution complète.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
  ],
  faq: [
    {
      q: 'Le surpoids peut-il causer une fasciite plantaire\u00A0?',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
      a: 'Un poids plus élevé est lié à la fasciite plantaire, mais aucune étude ne prouve qu’il la cause. Dans une étude, un IMC supérieur à 30 multipliait la cote par 5,6, et une revue de 51\u00A0études a trouvé une cote multipliée par 3,7 au-delà d’un IMC de 27, avec un lien plus fort chez les personnes qui ne sont pas sportives. Une cheville raide était un facteur encore plus fort.',
    },
    {
      q: 'Perdre du poids aide-t-il la fasciite plantaire\u00A0?',
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.latt],
      a: 'Peut-être, mais aucun essai randomisé ne l’a testé chez des personnes souffrant du talon. Dans une étude sur dossiers de 163\u00A0personnes atteintes de fasciite plantaire opérées pour leur obésité, les symptômes au talon ont disparu chez 90\u00A0%, mais sans groupe de comparaison, et la plupart des personnes atteintes de fasciite plantaire vont mieux de toute façon avec un traitement non chirurgical (Latt et coll., 2020). Une revue de 2012 a jugé les données limitées.',
    },
    {
      q: 'Combien de poids faut-il perdre pour soulager une fasciite plantaire\u00A0?',
      cites: [CITE.butterworthBmi],
      a: 'Aucune étude n’a établi de quantité. Il n’existe pas d’essai sur la perte de poids contre la douleur au talon, donc tout chiffre que vous lisez est une supposition. Si vous voulez perdre du poids pour votre santé, parlez-en à votre médecin. Pour le talon lui-même, les étirements et le renforcement du mollet ont les preuves les plus solides, quel que soit votre poids.',
    },
    {
      q: 'L’IMC est-il un facteur de risque de fasciite plantaire chez les coureurs\u00A0?',
      cites: [CITE.irvingHeelPain, CITE.butterworthBmi],
      a: 'En général non. Deux revues systématiques ont montré que l’IMC était lié à la douleur chronique au talon chez les personnes qui ne sont pas sportives, mais pas chez les sportifs. Chez les coureurs, d’autres facteurs comptent davantage.',
    },
    {
      q: 'Quels exercices faire avec une fasciite plantaire en cas de surpoids\u00A0?',
      cites: [CITE.guideline],
      a: 'Les exercices assis ou avec appui sont un bon début\u00A0: un étirement du fascia plantaire assis, des étirements du mollet contre un mur et des montées sur pointes assis. Pour l’endurance, le vélo d’appartement, la natation ou la marche dans l’eau vous gardent en mouvement avec moins de charge sur le talon. La recommandation de 2023 conseille de modifier la charge sur vos pieds plutôt que d’arrêter toute activité.',
    },
    {
      q: 'Les médicaments pour perdre du poids aident-ils la fasciite plantaire\u00A0?',
      cites: [CITE.yangSemaglutide],
      a: 'Il existe une étude observationnelle. Les personnes souffrant du talon depuis longtemps qui prenaient du sémaglutide ont déclaré une amélioration plus nette que les autres, mais elles n’avaient pas été réparties au hasard, et les auteurs demandent un essai randomisé. C’est une décision à prendre avec votre médecin, pas quelque chose à commencer pour la seule douleur au talon.',
    },
    {
      q: 'Pourquoi mes talons me font-ils plus mal depuis que j’ai pris du poids\u00A0?',
      cites: [CITE.guideline, CITE.songWeightLoss],
      a: 'Plus de poids corporel veut dire plus de charge sur le fascia plantaire à chaque pas, et la douleur au talon commence souvent après une hausse de la charge sur les pieds. Dans un essai sur 41\u00A0adultes, la perte de poids a diminué la pression sous certaines zones du pied. Cet essai n’a pas mesuré la douleur au talon\u00A0: le lien avec la douleur est donc probable, mais pas démontré.',
    },
    {
      q: 'La fasciite plantaire peut-elle passer sans perte de poids\u00A0?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Pour la plupart des gens, oui. Environ 90\u00A0% vont mieux avec un traitement non chirurgical, comme les étirements et les semelles, souvent en 3 à 6\u00A0mois. Dans un long suivi de 174\u00A0personnes, l’IMC ne permettait pas de prévoir qui aurait encore mal au talon des années plus tard. Être une femme et avoir mal aux deux talons le permettaient.',
    },
    {
      q: 'Les semelles sont-elles plus importantes quand on est plus lourd\u00A0?',
      cites: [CITE.guideline],
      a: 'Aucune étude ne l’a testé. Pour la douleur au talon en général, la recommandation de 2023 déconseille de compter sur les semelles seules (note B contre) et leur donne un C quand elles sont associées aux étirements et au renforcement. Des chaussures amorties sur les sols durs sont une option pratique, même si les essais ne les ont pas testées. Voir [semelles ou exercices](/fr/semelles-ou-exercices/).',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez du diabète et remarquez un engourdissement, des fourmillements, une plaie, ou un changement de la peau ou de la forme de votre pied',
      'la douleur a commencé après une chute, un saut ou une torsion, ou vous ne pouvez pas poser le pied',
      'le talon est gonflé, rouge ou chaud, ou vous avez de la fièvre',
      'la douleur est pire la nuit ou au repos, ou s’accompagne de brûlures ou d’engourdissement',
      'presser les côtés du talon fait mal, ou la douleur ne cesse d’augmenter avec l’activité (possible fracture de fatigue)',
      'un mollet est douloureux et gonflé (possible caillot sanguin)\u00A0: consultez le jour même',
      'les deux talons font mal et vous avez aussi des douleurs ou une raideur dans d’autres articulations',
      'vous envisagez des médicaments ou une chirurgie pour perdre du poids\u00A0: c’est une question à voir avec votre médecin',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Elle ne suit pas votre poids et ne donne pas de conseils alimentaires. Elle construit un plan à partir des étirements et du renforcement du mollet de cette page, et commence par les versions assises ou avec appui.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPain', 'walkingPf', 'standing'],
  crumb: 'Poids et fasciite plantaire',
  campaign: 'guide-weight-and-plantar-fasciitis-fr',
};
