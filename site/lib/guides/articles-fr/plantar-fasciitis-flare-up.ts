import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/plantar-fasciitis-flare-up.ts (2026-10-19),
 * written around «poussée de fasciite plantaire» and «crise de fasciite
 * plantaire que faire». «Vous», terminology and exercise names as in
 * `lib/guides/fr.ts`, articles-fr/calf-raises.ts (échelle des montées sur
 * pointes) and the other articles-fr pages. Figures, doses, grades, hedges
 * and sources are identical to the English page after its fact-check. Same
 * CITE keys and media ids. Links to /heel-pain-runners/ and
 * /foot-pain-identifier/ removed (no French version), words kept as plain
 * text.
 */

export const PF_FLARE_UP_FR: Guide = {
  lang: 'fr',
  page: 'pfFlareUp',
  mainSource: CITE.guideline,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Crise de fasciite plantaire\u00A0: causes et 48 premières heures',
  description:
    'Poussée de fasciite plantaire\u00A0: déclencheurs habituels, que faire les 48 premières heures, comment reprendre les exercices et quand ce n’en est pas une.',
  h1: 'Poussée de fasciite plantaire\u00A0: ce qui la déclenche et que faire les 48 premières heures',
  lede:
    'Une poussée de [fasciite plantaire](/fr/fasciite-plantaire/) suit en général une hausse brutale de ce que votre talon doit porter\u00A0: une longue marche, une journée debout sur des sols durs ou une nouvelle routine. La recommandation de 2023 sur la douleur au talon cite une douleur après une augmentation récente des activités en appui parmi les signes typiques\u00A0; elle préconise des conseils pour adapter la charge et ne conseille pas d’arrêter, un conseil qu’elle note **E** parce qu’il repose sur la théorie et non sur des essais (Koc et coll., 2023). Pendant les 48 premières heures, réduisez la charge qui l’a déclenchée, gardez vos étirements doux, et laissez le lendemain matin vous dire comment ça évolue.',
  intro: [
    'Aucune étude n’a défini ce qu’est une poussée de fasciite plantaire ni testé quoi faire pendant les deux premiers jours\u00A0: cette page utilise donc les règles testées les plus proches et dit d’où elles viennent. Elle aborde les déclencheurs fréquents, un plan court pour les 48 premières heures, comment revenir en arrière dans vos exercices puis remonter, et les signes qui montrent que la douleur est autre chose qu’une poussée. Si votre talon fait surtout mal aux premiers pas de la journée, [douleur au talon au réveil](/fr/douleur-talon-au-reveil/) décrit ce schéma à part.',
  ],
  takeaways: [
    'La recommandation de 2023 sur la douleur au talon cite une douleur au talon après une augmentation récente des activités en appui parmi les signes typiques de la fasciite plantaire, et préconise des conseils pour adapter la charge, avec la note **E**, sans conseiller le repos complet (Koc et coll., 2023).',
    'Dans une étude portant sur 50\u00A0personnes ayant une fasciite plantaire et 100 sans, une cheville raide (un risque multiplié par 23,3), un IMC supérieur à 30 (multiplié par 5,6) et le fait d’être debout la majeure partie de la journée de travail (multiplié par 3,6) étaient des facteurs de risque. Cette étude portait sur l’apparition de la fasciite plantaire, pas sur les poussées (Riddle et coll., 2003).',
    'Une règle de suivi de la douleur autorise une douleur jusqu’à environ 5 sur 10 pendant l’effort, à condition qu’elle se calme le lendemain matin. Elle a été testée chez 38\u00A0personnes souffrant du tendon d’Achille, pas de fasciite plantaire (Silbernagel et coll., 2007).',
    'La recommandation ne se prononce pas sur la glace ou la chaleur\u00A0: la glace est donc au mieux un outil de confort, et aucune étude ne montre qu’elle calme une poussée (Koc et coll., 2023).',
    'Dans un essai sur 180\u00A0adultes, le conseil de réduire les activités qui provoquent des poussées puis de reprendre progressivement, avec une talonnette, s’est accompagné d’une amélioration cliniquement significative à environ trois mois (Riel et coll., 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce qu’une poussée de fasciite plantaire\u00A0?',
      paragraphs: [
        '**Une poussée, c’est une série de jours où votre douleur au talon habituelle est nettement pire que d’ordinaire.** Les premiers pas du matin font plus mal, le talon fait mal plus vite quand vous êtes debout, ou une douleur qui s’était estompée revient. Il n’existe pas de définition médicale admise, et nous n’avons trouvé aucune étude qui mesure la fréquence ou la durée des poussées.',
        'Le tissu sous le talon n’aime pas les changements brusques de charge. La recommandation de 2023 décrit la douleur de la fasciite plantaire comme surtout marquée aux premiers pas après le repos, et cite une augmentation récente des activités en appui comme un élément typique de l’histoire (Koc et coll., 2023). Une poussée est probablement la même chose en miniature\u00A0: on a demandé au talon plus que ce à quoi il était prêt.',
        'C’est pourquoi une poussée ne veut pas forcément dire que vous repartez de zéro. Environ 90\u00A0% des personnes ayant une fasciite plantaire vont mieux avec une prise en charge sans chirurgie, même si cela prend souvent des mois (Latt et coll., 2020). Voir [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) pour ce que montrent les suivis au long cours.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Qu’est-ce qui déclenche une poussée de fasciite plantaire\u00A0?',
      keyFact: 'Être debout la majeure partie de la journée de travail multipliait par 3,6 le risque de fasciite plantaire, et une cheville raide par 23,3, dans une étude portant sur 50\u00A0cas et 100\u00A0témoins (Riddle et coll., 2003).',
      paragraphs: [
        '**Le point commun est un changement brusque de charge.** Aucune étude n’a suivi ce qui déclenche les poussées chez les personnes qui ont déjà une fasciite plantaire. Ce qui existe, ce sont des recherches sur ce qui la fait apparaître au départ, et elles vont dans le même sens\u00A0:',
        {
          list: [
            '**Une hausse soudaine de l’activité.** Des vacances avec de longues journées de marche, un nouveau plan de course, une randonnée ou une semaine chargée au travail. La recommandation cite une augmentation récente des activités en appui comme typique (Koc et coll., 2023). Si vous courez, l’augmentation du kilométrage est aussi un déclencheur à surveiller.',
            '**De longues heures debout.** Dans une étude portant sur 50\u00A0personnes ayant une fasciite plantaire et 100 sans, être debout la majeure partie de la journée de travail multipliait le risque par 3,6 (Riddle et coll., 2003). Dans une autre, les personnes avec une douleur au talon étaient aussi actives que celles sans douleur, mais restaient debout 3,4\u00A0heures de plus par jour (Landorf et coll., 2023). Voir [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/).',
            '**Pieds nus sur un sol dur.** La recommandation cite le travail en appui sur des surfaces qui amortissent mal comme un facteur de risque (Koc et coll., 2023), même si une étude a montré que les personnes avec une douleur au talon ne se tenaient pas plus souvent sur des sols durs que les autres (Landorf et coll., 2023). Un guide de bonnes pratiques de 2021 conseille d’éviter de marcher pieds nus et de porter des chaussures plates sans maintien tant que les symptômes n’ont pas disparu (Morrissey et coll., 2021).',
            '**Des chaussures neuves ou différentes.** Nous n’avons trouvé aucune étude qui ait testé les chaussures neuves comme déclencheur. Ce que l’on sait\u00A0: les personnes avec une douleur au talon portaient des chaussures au talon plus dur que les autres (Landorf et coll., 2023), et le guide de bonnes pratiques privilégie des chaussures qui maintiennent bien, avec le talon un peu plus haut que les orteils (Morrissey et coll., 2021). Passer à des chaussures plates, fines ou très souples, ou à des [chaussures minimalistes](/fr/chaussures-minimalistes/), est un changement que votre talon remarquera.',
            '**Un mollet raide.** Dans la même étude de 2003, les personnes dont la cheville se pliait vers le haut de 0\u00A0degré ou moins avaient un risque 23,3\u00A0fois plus élevé que celles qui dépassaient 10\u00A0degrés (Riddle et coll., 2003). Laisser tomber vos étirements un moment peut laisser cette raideur revenir. Voir [mollets tendus](/fr/mollets-tendus/).',
          ],
        },
        'Le poids est aussi un facteur de risque\u00A0: un IMC supérieur à 30 multipliait le risque par 5,6 dans l’étude de 2003. Le poids change lentement\u00A0: c’est donc plutôt un facteur de fond qu’un déclencheur de la poussée de cette semaine. Plus de détails dans [poids et fasciite plantaire](/fr/poids-et-fasciite-plantaire/).',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.landorfFootwear, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Que faire pendant les 48 premières heures d’une poussée\u00A0?',
      keyFact: 'Dans un essai sur 180\u00A0adultes, le groupe qui n’a reçu que le conseil de réduire les activités qui provoquent des poussées et de reprendre progressivement, avec une talonnette, s’est amélioré de façon cliniquement significative à environ trois mois (Riel et coll., 2023).',
      paragraphs: [
        '**Réduisez la charge, continuez à bouger doucement, et jugez le résultat au lendemain matin.** Aucun essai n’a testé un plan de 48\u00A0heures pour la fasciite plantaire. Les étapes ci-dessous mettent en pratique la recommandation et les conseils testés les plus proches\u00A0:',
        {
          list: [
            '**Repérez le déclencheur et réduisez-le.** Des marches plus courtes, plus de pauses assises, une pause dans la course ou les côtes. Le conseil testé dans un essai danois était de réduire les activités qui provoquent des poussées, puis de revenir progressivement au niveau d’activité antérieur en se guidant sur les symptômes (Riel et coll., 2020).',
            '**N’arrêtez pas complètement de bouger.** La recommandation préconise d’adapter la charge et ne conseille pas le repos complet (Koc et coll., 2023). La marche dont vous avez besoin au quotidien convient, dans les limites de la règle de douleur ci-dessous.',
            '**Gardez les étirements doux.** Les étirements du fascia plantaire et du mollet ont la note **A** (Koc et coll., 2023). Faites le premier avant que votre pied touche le sol le matin.',
            '**Portez des chaussures à la maison.** Des chaussures qui maintiennent bien ou des chaussons fermes dès le premier pas de la journée, plutôt que pieds nus sur du carrelage ou du parquet (Morrissey et coll., 2021).',
            '**Coupez les longues stations debout.** Le guide de bonnes pratiques conseille d’interrompre les longues périodes debout sans bouger (Morrissey et coll., 2021).',
          ],
        },
        'Dans cet essai, chacun des 180\u00A0adultes a reçu ce type de conseils plus une talonnette, et deux des trois groupes ont aussi fait des montées sur pointes, ou des montées sur pointes plus une injection de corticoïde. Les trois groupes de l’essai se sont améliorés de façon cliniquement significative à environ trois mois, y compris celui qui n’avait reçu que les conseils et la talonnette (Riel et coll., 2023). Les conseils étaient la base, pas un détail.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.rielHeelRaiseAdd, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quelle douleur est acceptable pendant une poussée\u00A0?',
      keyFact: 'Dans un essai sur 38\u00A0personnes souffrant du tendon d’Achille, celles qui restaient actives avec une douleur jusqu’à environ 5 sur 10, calmée le lendemain matin, s’en sortaient aussi bien à douze mois que celles qui avaient mis la course et les sauts en pause (Silbernagel et coll., 2007).',
      paragraphs: [
        '**Utilisez la même règle de douleur que pour la marche\u00A0: modérée au maximum pendant l’effort, et revenue à votre niveau habituel le lendemain matin.** Cette règle vient d’un essai de 2007 chez 38\u00A0personnes souffrant du tendon d’Achille. Une douleur jusqu’à environ 5 sur 10 était autorisée pendant l’effort, à condition qu’elle se calme le lendemain matin et n’augmente pas de semaine en semaine. Rester actif de cette façon n’a pas donné de moins bons résultats à douze mois que de mettre la course et les sauts en pause pendant six semaines (Silbernagel et coll., 2007). Elle n’a pas été testée dans la fasciite plantaire\u00A0: prenez-la comme un repère emprunté.',
        'Pour la douleur au talon, le guide de bonnes pratiques de 2021 recommande fortement le suivi de la douleur et le fait d’apprendre à lire sa réaction à l’effort, sans donner de chiffre (Morrissey et coll., 2021). Pendant les exercices, Walkito arrête la séance si la douleur atteint 6 sur 10.',
      ],
      table: {
        caption: 'Lire votre talon pendant une poussée (échelle de douleur de 0 à 10)',
        head: ['Ce que vous remarquez', 'Que faire'],
        rows: [
          ['0 à 5 pendant, matin normal ensuite', 'Gardez cette charge'],
          ['Plus de 5 pendant l’effort', 'Arrêtez ou raccourcissez aujourd’hui'],
          ['Lendemain matin pire que d’habitude', 'Réduisez encore un jour ou deux'],
          ['Mieux chaque matin', 'Commencez à reprendre'],
          ['Pire chaque jour malgré la réduction', 'Consultez un professionnel de santé'],
        ],
      },
      after: [
        'La version complète de cette règle, avec une colonne pour la marche suivante, se trouve dans [marcher avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/). C’est le contrôle du matin qui compte le plus, car la douleur aux premiers pas montre comment votre pied a encaissé la veille.',
      ],
      sourceNote: 'Silbernagel 2007\u00A0: 19\u00A0personnes par groupe, tendinopathie d’Achille, pas fasciite plantaire.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Faut-il mettre de la glace sur une poussée de fasciite plantaire\u00A0?',
      paragraphs: [
        '**La glace convient si elle soulage le talon, mais aucune étude ne montre qu’elle calme une poussée.** La recommandation de 2023 n’a pas trouvé assez de preuves pour recommander la chaleur ou le froid superficiels dans la fasciite plantaire (Koc et coll., 2023).',
        'Même pour les blessures sportives récentes, où la glace est le plus utilisée, une revue de 22\u00A0essais n’a trouvé aucune preuve d’une meilleure façon ni d’une meilleure durée d’application (Bleakley et coll., 2004). Il n’existe donc aucune règle testée du type «\u00A0glace pendant X\u00A0minutes\u00A0» pour un talon douloureux. Si vous en utilisez, gardez un linge entre la glace et la peau, arrêtez si la peau s’engourdit, et évitez-la si vous êtes diabétique ou si vos pieds sont peu sensibles.',
        'Utilisez-la en plus de vos étirements, pas à leur place. [Glace ou chaleur pour la fasciite plantaire](/fr/glace-ou-chaleur-fasciite-plantaire/) présente ce qu’ont trouvé les quelques études et comment protéger votre peau.',
      ],
      cites: [CITE.guideline, CITE.bleakleyIce],
    },
    {
      h2: 'Comment reprendre après une poussée\u00A0?',
      keyFact: 'Dans un essai sur 48\u00A0personnes, des montées sur pointes lourdes ont soulagé la douleur et amélioré les activités du quotidien plus vite que les étirements, et à douze mois les deux groupes étaient à peu près à égalité (Rathleff et coll., 2015).',
      paragraphs: [
        '**Redescendez votre renforcement d’une étape, puis remontez une fois les matins calmés.** Aucune étude n’a testé comment reprendre après une poussée. La recommandation de 2023 donne au renforcement du mollet la note **B** (Koc et coll., 2023), et dans un essai sur 48\u00A0personnes, des montées sur pointes lourdes avec une serviette sous les orteils ont aidé plus vite que les étirements (Rathleff et coll., 2015). Le renforcement vaut la peine d’être gardé, simplement à un niveau que votre talon supporte cette semaine.',
        'Le travail du mollet dans Walkito progresse par étapes\u00A0: montées sur pointes assis, puis montées sur pointes sur deux pieds, puis maintien sur pointes, et seulement ensuite la montée sur pointes avec serviette, celle qui charge le plus le fascia plantaire. Pendant une poussée\u00A0:',
        {
          list: [
            'Redescendez d’une étape. Si vous en étiez à la montée sur pointes avec serviette, revenez au maintien sur pointes ou aux montées sur deux pieds. Si vous en étiez aux deux pieds, revenez à la version assise.',
            'Continuez les étirements comme d’habitude.',
            'Remontez d’une étape une fois que les deux dernières séances au niveau inférieur vous ont paru faciles et que vos matins sont redevenus normaux.',
            'Réintroduisez l’activité qui a déclenché la poussée par petits morceaux, en changeant une seule chose à la fois\u00A0: distance, allure, côtes ou surface.',
          ],
        },
        'Ce sont les doses de départ de Walkito, pas une prescription. Le programme complet et le tableau se trouvent dans [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/), et l’échelle de renforcement est expliquée dans [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des séances, et avant les premiers pas de la journée',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assis au bord du lit, avant que votre pied touche le sol.',
          stop: 'Une douleur vive au talon',
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
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée, cet étirement compte donc même si vous le sentez plus haut.',
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
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
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
          often: 'Jours de renforcement, l’étape à laquelle revenir pendant une poussée',
          feel: 'Un travail en bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Genou plié, cet exercice sollicite surtout le soléaire, le muscle profond du mollet, presque sans charge sur le talon.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement, une fois que la version assise redevient facile',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge. Tenez-vous à un mur pour l’équilibre.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quelle est la pire chose à faire pendant une poussée\u00A0?',
      paragraphs: [
        '**Aucune étude ne classe la pire erreur, mais deux erreurs opposées sont les plus fréquentes\u00A0: forcer sans changer, et tout arrêter.** Voici ce que disent les données sur chacune\u00A0:',
        {
          list: [
            '**Forcer malgré une douleur qui monte.** Garder les mêmes longues marches ou sorties de course alors que le talon empire chaque matin, c’est ignorer le seul signal sur lequel repose la règle de douleur testée (Silbernagel et coll., 2007). Les experts du guide de bonnes pratiques de 2021 ont cité un changement de la charge globale comme facteur de risque de poussée\u00A0: ajouter de la charge va donc dans le mauvais sens (Morrissey et coll., 2021).',
            '**Arrêter toute activité et tous les exercices.** La recommandation préconise d’adapter la charge et ne conseille pas le repos complet (Koc et coll., 2023), et dans l’essai sur le tendon d’Achille, rester actif dans une limite de douleur a donné d’aussi bons résultats que de mettre la course et les sauts en pause pendant six semaines (Silbernagel et coll., 2007). Abandonner vos étirements et votre travail du mollet revient aussi à vous priver des options notées **A** et **B**.',
            '**Marcher pieds nus sur un sol dur,** surtout pour les premiers pas de la journée (Morrissey et coll., 2021).',
            '**Compter sur une semelle seule.** Les semelles utilisées seules pour un soulagement à court terme reçoivent de la recommandation une note **B défavorable**, même si elles peuvent aider en association avec les exercices (Koc et coll., 2023). Voir [semelles ou exercices](/fr/semelles-ou-exercices/).',
          ],
        },
        'Une poussée ne prouve pas que votre plan a échoué. Si les poussées reviennent sans cesse ou si chacune est pire que la précédente, c’est le moment de consulter un professionnel de santé, pas de forcer davantage.',
      ],
      cites: [CITE.silbernagel, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quand ce n’est pas une poussée',
      keyFact: 'Les radiographies standard passent souvent à côté des fractures de fatigue débutantes\u00A0: une revue estime leur sensibilité à environ 10\u00A0% lors de la première consultation, et à 30 à 70\u00A0% après trois semaines (Patel et coll., 2011).',
      paragraphs: [
        '**Si la douleur se comporte autrement que votre fasciite plantaire habituelle, ne partez pas du principe que c’est une poussée.** La douleur de la fasciite plantaire est pire aux premiers pas après le repos, s’atténue souvent une fois en mouvement, et peut revenir après de longues périodes debout (Koc et coll., 2023). D’autres schémas orientent ailleurs\u00A0:',
        {
          list: [
            '**Une douleur qui augmente à mesure que vous marchez,** souvent après une hausse de l’activité, ou une douleur quand vous pressez les côtés du talon, peut être une fracture de fatigue (Tu, 2018). Voir [fasciite plantaire ou fracture de fatigue](/fr/fasciite-plantaire-ou-fracture-de-fatigue/).',
            '**Une douleur la nuit ou au repos,** ou une brûlure, des fourmillements et un engourdissement, évoquent autre chose que le fascia plantaire. Voir [douleur au talon la nuit](/fr/douleur-talon-la-nuit/).',
            '**Un claquement soudain ou une douleur vive** sous le pied pendant l’effort, ou un nouveau bleu ou gonflement, demande l’avis d’un professionnel de santé, pas un plan de poussée.',
            '**Une douleur profonde au centre du talon** qui s’aggrave sur un sol dur peut venir du coussinet graisseux du talon. Voir [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
          ],
        },
        'Vous ne savez pas à quel schéma correspond votre douleur\u00A0? Un outil d’identification de la douleur au pied passe en revue les schémas fréquents, sans poser de diagnostic.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Qu’est-ce qui provoque une poussée de fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'En général une hausse soudaine de la charge sur le talon\u00A0: plus de marche ou de course que d’habitude, de longues heures debout, ou des pieds nus sur un sol dur. La recommandation de 2023 cite une augmentation récente des activités en appui comme typique. Dans une étude, être debout la majeure partie de la journée de travail multipliait par 3,6 le risque d’avoir une fasciite plantaire.',
    },
    {
      q: 'Combien de temps dure une poussée de fasciite plantaire\u00A0?',
      cites: [CITE.latt],
      a: 'Aucune étude n’a mesuré la durée d’une poussée\u00A0: tout nombre de jours fixe est donc une supposition. Servez-vous de vos matins comme repère\u00A0: si la douleur aux premiers pas diminue en quelques jours une fois que vous avez réduit la charge, vous êtes sur la bonne voie. La fasciite plantaire elle-même prend souvent des mois, et environ 90\u00A0% des personnes vont mieux avec une prise en charge sans chirurgie.',
    },
    {
      q: 'Que faire quand la fasciite plantaire se réveille\u00A0?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Réduisez l’activité qui l’a déclenchée, gardez des étirements doux du fascia plantaire et du mollet, portez des chaussures qui maintiennent bien à la maison, et jugez le résultat à la douleur du lendemain matin. La recommandation de 2023 préconise d’adapter la charge et ne conseille pas le repos complet. Dans un essai sur 180\u00A0adultes, ce type de conseils plus une talonnette s’est accompagné d’une amélioration significative à environ trois mois.',
    },
    {
      q: 'Faut-il se reposer complètement pendant une poussée de fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.silbernagel],
      a: 'Aucune étude ne montre que le repos complet est nécessaire. La recommandation de 2023 préconise d’adapter la charge et ne conseille pas d’arrêter. Dans un essai sur le tendon d’Achille, les personnes restées actives avec une douleur jusqu’à environ 5 sur 10, calmée le matin, s’en sortaient aussi bien à douze mois que celles qui avaient mis la course et les sauts en pause pendant six semaines. Si même de courtes marches font très mal ou vous font boiter, consultez un professionnel de santé.',
    },
    {
      q: 'Quelle est la pire chose à faire avec une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.morrisseyBestPractice],
      a: 'Aucune étude ne le classe, mais forcer malgré une douleur qui empire chaque matin est l’erreur la plus nette, puisque les experts d’un guide de bonnes pratiques de 2021 ont cité les changements de charge comme facteur de risque de poussée. Tout arrêter, activité et exercices, est l’erreur inverse. Mieux vaut aussi éviter de marcher pieds nus sur un sol dur tant que les symptômes ne se sont pas calmés.',
    },
    {
      q: 'Faut-il continuer les exercices pendant une poussée\u00A0?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Oui, à un niveau plus léger. Gardez les étirements du fascia plantaire et du mollet, que la recommandation de 2023 note A, et redescendez votre renforcement du mollet d’une étape, par exemple des montées sur pointes debout à la version assise. Le renforcement a la note B, et des montées sur pointes lourdes ont aidé plus vite que les étirements dans un essai sur 48\u00A0personnes. Arrêtez si la douleur atteint 6 sur 10.',
    },
    {
      q: 'La glace est-elle bonne pour une poussée de fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.bleakleyIce],
      a: 'La glace convient pour le confort, mais rien ne prouve qu’elle calme une poussée. La recommandation de 2023 sur la douleur au talon ne se prononce pas sur la glace ou la chaleur, et une revue de 22\u00A0essais sur des blessures récentes n’a trouvé ni meilleure façon ni meilleure durée d’application. Protégez votre peau, et évitez-la si vos pieds sont peu sensibles.',
    },
    {
      q: 'Des chaussures neuves peuvent-elles provoquer une poussée de fasciite plantaire\u00A0?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'C’est possible, même si aucune étude n’a testé les chaussures neuves comme déclencheur. Les personnes avec une douleur au talon portaient des chaussures au talon plus dur que les autres, et un guide de bonnes pratiques conseille des chaussures qui maintiennent bien, avec le talon un peu plus haut que les orteils. Passer à des chaussures plates, fines ou très souples est un changement que votre talon peut remarquer.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une chute, un saut ou une torsion, ou vous ne pouvez pas mettre de poids sur le pied',
      'vous avez senti un claquement ou une douleur vive et soudaine sous le pied, ou il y a un nouveau bleu ou gonflement',
      'la douleur augmente à mesure que vous marchez, ou presser les côtés du talon fait mal (fracture de fatigue possible)',
      'le talon fait mal la nuit ou au repos, pas seulement aux premiers pas',
      'vous avez un engourdissement, des fourmillements ou une brûlure dans le pied',
      'le talon est rouge, chaud ou gonflé, ou vous ne vous sentez pas bien ou avez de la fièvre',
      'vous êtes diabétique ou avez une mauvaise circulation et votre pied fait mal ou a changé d’aspect',
      'la douleur continue d’empirer plus de quelques jours malgré la réduction de la charge, ou les poussées reviennent sans cesse',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Elle lit une poussée de la même façon que cette page\u00A0: d’après ce que ressent votre talon le matin.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte\u00A0: un mauvais matin rend la séance plus légère, et le travail du mollet remonte d’une étape à mesure que les matins s’améliorent. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['walkingPf', 'heelPain', 'pfDuration'],
  crumb: 'Poussée de fasciite plantaire',
  campaign: 'guide-plantar-fasciitis-flare-up-fr',
};
