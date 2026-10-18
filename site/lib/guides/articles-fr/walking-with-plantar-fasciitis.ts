import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/walking-with-plantar-fasciitis.ts (2026-10-17),
 * written around «marcher avec une fasciite plantaire», «fasciite plantaire
 * marche» and «fasciite plantaire combien de pas». French (France) with
 * «vous», terminology and exercise names as in `lib/guides/fr.ts`. Figures,
 * doses, grades, hedges and sources are identical to the English page after
 * its fact-check. Same CITE keys and media ids. Links to /heel-pain-runners/
 * and /best-insoles-for-plantar-fasciitis/ removed (no French version).
 */

export const WALKING_PF_FR: Guide = {
  lang: 'fr',
  page: 'walkingPf',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Marcher avec une fasciite plantaire\u00A0: combien et comment',
  description:
    'Marcher avec une fasciite plantaire\u00A0: une règle de douleur simple pendant la marche et le lendemain matin, le vrai sur les pas, chaussures, sol, reprise.',
  h1: 'Combien peut-on marcher avec une fasciite plantaire\u00A0?',
  lede:
    'Vous pouvez en général continuer à marcher avec une [fasciite plantaire](/fr/fasciite-plantaire/), tant que la douleur reste modérée pendant la marche et qu’elle s’est calmée le lendemain matin. La recommandation de 2023 sur la douleur au talon préconise des conseils pour adapter la charge en appui et ne dit pas d’arrêter de marcher, mais elle donne à ces conseils la note **E**, ce qui veut dire qu’ils reposent sur la théorie, pas sur des essais (Koc et coll., 2023). Aucune étude ne donne un nombre de pas sans risque\u00A0: le contrôle du lendemain matin est un meilleur repère qu’un objectif de pas.',
  intro: [
    'Cette page porte sur la quantité de marche possible quand le talon fait mal et sur la façon de reprendre progressivement. Si votre question est surtout de savoir pourquoi le talon fait mal après une marche, voyez [douleur au talon après la marche](/fr/douleur-talon-apres-marche/). Si vos pieds font mal parce que vous restez debout au même endroit, voyez [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/).',
  ],
  takeaways: [
    'La recommandation de 2023 sur la douleur au talon classe les conseils pour modifier la charge en appui au travail, pendant les loisirs et dans la vie quotidienne, ainsi que les conseils sur les chaussures, en note **E**\u00A0: fondés sur la théorie, pas sur des essais (Koc et coll., 2023).',
    'Dans un essai sur 180\u00A0adultes atteints de fasciopathie plantaire, le groupe qui a seulement reçu le conseil de rester actif, de réduire les activités qui aggravent la douleur et de porter une talonnette s’est amélioré de façon cliniquement significative à environ trois mois (Riel et coll., 2023).',
    'Une règle de suivi de la douleur autorise jusqu’à environ 5 sur 10 pendant l’effort, à condition que la douleur se calme le lendemain matin et n’augmente pas de semaine en semaine. Elle a été testée chez 38\u00A0personnes souffrant du tendon d’Achille, pas de fasciite plantaire (Silbernagel et coll., 2007).',
    'Aucune étude ne donne un nombre de pas quotidien pour la fasciite plantaire. Chez 50\u00A0personnes avec une douleur au talon et 25 sans, le niveau d’activité ne différait pas, mais le groupe avec douleur restait debout 3,4\u00A0heures de plus par jour (Landorf et coll., 2023).',
    'Un guide de bonnes pratiques de 2021 sur la douleur au talon conseille des chaussures avec un faible drop et d’éviter de marcher pieds nus ou en chaussures plates sans maintien jusqu’à la disparition des symptômes (Morrissey et coll., 2021).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La marche est-elle bonne ou mauvaise pour la fasciite plantaire\u00A0?',
      keyFact: 'Dans un essai sur 180\u00A0adultes, le groupe qui a reçu le conseil de rester actif tout en réduisant les activités qui aggravent la douleur, plus une talonnette, s’est amélioré de façon cliniquement significative à environ trois mois (Riel et coll., 2023).',
      paragraphs: [
        '**La marche n’est pas l’ennemie, mais trop d’un coup peut réveiller le talon.** La recommandation de 2023 sur la douleur au talon ne dit pas d’arrêter de marcher. Son résumé cite l’information sur les façons de modifier la charge en appui au travail, pendant les loisirs et dans la vie quotidienne, ainsi que sur les chaussures. Elle donne à ces conseils la note **E**\u00A0: la théorie et la recherche fondamentale les soutiennent, mais aucun essai ne les a testés (Koc et coll., 2023).',
        'La recommandation cite aussi, parmi les signes typiques de la fasciite plantaire, une douleur au talon apparue après une augmentation récente des activités en appui. La question est donc rarement de savoir s’il faut marcher, mais plutôt combien, et à quel rythme augmenter.',
        'Un essai danois a comparé de simples conseils à des traitements ajoutés. 180\u00A0adultes atteints de fasciopathie plantaire (un autre nom de la fasciite plantaire) ont été répartis en trois groupes. Le premier a reçu uniquement des conseils et une talonnette, les deux autres y ont ajouté un entraînement en montées sur pointes, et l’un d’eux aussi une infiltration de corticoïdes. Le conseil était de réduire les activités qui déclenchent les poussées, puis de revenir lentement au niveau d’activité antérieur en se guidant sur les symptômes. Les trois groupes se sont améliorés de façon cliniquement significative à environ trois mois (Riel et coll., 2023).',
        'Ce n’est peut-être pas la marche elle-même qui est liée à la douleur au talon. Dans une étude de 2023, 50\u00A0personnes avec une douleur au talon et 25\u00A0personnes comparables sans douleur déclaraient une activité physique similaire. La différence tenait à la station debout\u00A0: le groupe avec douleur restait debout 3,4\u00A0heures de plus par jour (Landorf et coll., 2023). Cette étude montre un lien, pas une cause. Si vous passez surtout vos journées debout, [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/) traite de cet aspect.',
      ],
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.rielFixHeelProtocol, CITE.landorfFootwear],
    },
    {
      h2: 'Combien de marche est acceptable\u00A0? Une règle de douleur simple',
      keyFact: 'Dans un essai sur 38\u00A0personnes souffrant du tendon d’Achille, celles qui sont restées actives en gardant la douleur autour de 5 sur 10, calmée le lendemain matin, s’en sont aussi bien sorties à douze mois que celles qui ont arrêté la course et les sauts pendant six semaines (Silbernagel et coll., 2007).',
      paragraphs: [
        '**Servez-vous de votre douleur pour doser, et vérifiez-la deux fois\u00A0: pendant la marche et le lendemain matin.** Aucune étude n’a testé de règle de marche pour la fasciite plantaire. La règle testée la plus proche vient de la rééducation des tendons\u00A0: prenez-la comme un repère emprunté, pas comme une limite prouvée pour le talon.',
        'Dans un essai de 2007, 38\u00A0personnes souffrant du tendon d’Achille ont été réparties en deux groupes. Le premier a continué à courir et à sauter en suivant un modèle de suivi de la douleur\u00A0: une douleur jusqu’à environ 5 sur 10 était autorisée pendant l’effort, à condition qu’elle se calme le lendemain matin et n’augmente pas de semaine en semaine. Le second a arrêté ces activités pendant les six premières semaines. Les deux groupes se sont améliorés, et rester actif n’a pas donné de moins bons résultats à douze mois (Silbernagel et coll., 2007). Plus de détails sur cet essai dans [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/).',
        'Pour la douleur au talon, un guide de bonnes pratiques de 2021, construit à partir d’une revue de 51\u00A0essais, d’entretiens avec 14\u00A0experts et d’une enquête auprès de patients, indique que le suivi de la douleur était fortement recommandé et qu’il faut apprendre aux personnes à lire la réaction de leur douleur à l’effort (Morrissey et coll., 2021). Il ne donne pas de chiffre. Le tableau ci-dessous applique la règle testée à la marche, sur une échelle de 0 (aucune douleur) à 10 (pire douleur). La colonne sur la marche suivante est une lecture pratique de cette règle, pas un protocole testé.',
      ],
      table: {
        caption: 'Lire son talon après une marche (échelle de douleur de 0 à 10)',
        head: ['Ce que vous remarquez', 'Ce que cela veut dire', 'Marche suivante'],
        rows: [
          ['De 0 à 2 pendant, lendemain matin normal', 'Bien dans les limites', 'Gardez-la, ou ajoutez un peu'],
          ['De 3 à 5 pendant, calmé le lendemain matin', 'Charge acceptable', 'Refaites la même marche'],
          ['Plus de 5 pendant la marche', 'Trop pour aujourd’hui', 'Raccourcissez ou ralentissez'],
          ['Premiers pas du lendemain pires que d’habitude', 'Trop la veille', 'Réduisez, puis reprenez progressivement'],
          ['Pire chaque semaine', 'La charge augmente sans que vous le voyiez', 'Revenez en arrière et consultez si cela continue'],
        ],
      },
      after: [
        'Le contrôle du matin est le plus important. La douleur aux premiers pas est le symptôme classique de la fasciite plantaire, et c’est le signe le plus clair de la façon dont votre pied a encaissé la veille. [Douleur au talon au réveil](/fr/douleur-talon-au-reveil/) traite de ce schéma et des étirements à faire avant de vous lever.',
        'Une douleur vive qui vous fait boiter, une douleur qui augmente à chaque marche et ne se calme pas au repos, ou une douleur la nuit sortent du cadre de cette règle. Une boiterie peut aussi charger différemment le genou, la hanche et le dos. Consultez la liste en fin de page.',
      ],
      sourceNote: 'Silbernagel 2007\u00A0: 19\u00A0personnes par groupe. Le score VISA-A-S est passé de 57 à 85 dans le groupe actif et de 57 à 91 dans le groupe au repos à douze mois, sans différence significative dans la vitesse d’amélioration.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Combien de pas par jour avec une fasciite plantaire\u00A0?',
      keyFact: 'Aucune étude ne donne un nombre de pas quotidien pour la fasciite plantaire. Dans une analyse groupée de 47\u00A0471\u00A0adultes, la baisse du risque de décès se stabilisait entre 6\u00A0000 et 8\u00A0000\u00A0pas par jour chez les 60\u00A0ans et plus (Paluch et coll., 2022).',
      paragraphs: [
        '**Il n’existe pas de nombre de pas fondé sur des preuves pour la fasciite plantaire.** Nous n’avons trouvé aucun essai qui ait fixé un nombre de pas ou une distance de marche à des personnes souffrant du talon et mesuré le résultat. Tout site qui vous donne un chiffre précis pour la douleur au talon ne fait que deviner.',
        'Les fameux 10\u00A0000\u00A0pas sont un objectif de santé générale, pas un chiffre issu de la recherche sur le pied, et même là, les preuves sont minces. Une analyse de 2022 portant sur 15\u00A0études et 47\u00A0471\u00A0adultes a montré que plus de pas par jour allaient de pair avec un risque de décès plus faible, mais le bénéfice se stabilisait vers 6\u00A0000 à 8\u00A0000\u00A0pas par jour chez les adultes de 60\u00A0ans et plus, et vers 8\u00A0000 à 10\u00A0000 chez les adultes plus jeunes (Paluch et coll., 2022). Il s’agit de santé à long terme, pas de ce qu’un talon irrité peut supporter cette semaine.',
        'Le chiffre le plus utile, c’est le vôtre. La plupart des téléphones comptent les pas. Regardez une semaine normale avant que le talon ne se manifeste et une semaine normale maintenant. Cela vous donne un point de départ, et la règle de douleur ci-dessus vous dit s’il faut maintenir, ajouter ou réduire.',
        'Fractionner la marche aide peut-être plus que le total. Le guide de bonnes pratiques de 2021 conseille d’interrompre les longues périodes de charge statique, comme la station debout (Morrissey et coll., 2021). Plusieurs petites marches réparties dans la journée imposent au talon une charge moins continue qu’une longue marche, même si aucune étude n’a comparé les deux pour la fasciite plantaire.',
      ],
      cites: [CITE.paluchSteps, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Comment reprendre la marche progressivement\u00A0?',
      paragraphs: [
        'Le conseil testé dans l’essai danois était de réduire les activités qui déclenchent les poussées, puis de revenir lentement au niveau d’activité antérieur en se guidant sur les symptômes (Riel et coll., 2020). Il ne fixait pas de pourcentage par semaine, et aucune étude n’en a testé pour la fasciite plantaire. Voici une façon de mettre ce conseil en pratique\u00A0:',
        {
          list: [
            'Trouvez une marche qui respecte la règle de douleur\u00A0: une douleur au plus modérée pendant, et un lendemain matin normal. Si même une courte marche ne passe pas, commencez par moins.',
            'Refaites cette marche pendant quelques jours. Une seule bonne journée ne suffit pas pour juger.',
            'Ajoutez un petit peu, par exemple cinq minutes de plus, et gardez le reste identique. Ne changez qu’une chose à la fois\u00A0: la distance, l’allure, les côtes ou le sol.',
            'Si le lendemain matin est pire, revenez à la dernière marche qui passait et restez-y plus longtemps.',
          ],
        },
        'Les cinq minutes sont une suggestion pratique, pas un chiffre testé. L’important est que chaque palier soit assez petit pour que le lendemain matin vous dise clairement s’il a fonctionné.',
        'La récupération d’une fasciite plantaire est en général lente. Environ 90\u00A0% des personnes s’améliorent avec un traitement sans chirurgie, comme les étirements, le travail du mollet et la gestion de la charge (Latt et coll., 2020), mais cela peut prendre des mois. Voyez [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/). Si vous courez aussi, le kilométrage et les changements de charge entrent également en jeu.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.latt],
    },
    {
      h2: 'Quelles chaussures aident à marcher avec une fasciite plantaire\u00A0?',
      keyFact: 'La recommandation de 2023 donne aux semelles utilisées seules pour soulager la douleur à court terme la note B contre, et la note C lorsqu’elles sont associées à d’autres soins, y compris l’amorti du talon (Koc et coll., 2023).',
      paragraphs: [
        '**Des chaussures confortables et amorties, avec un faible drop, c’est le conseil des experts, mais aucun essai n’a testé une chaussure précise pour la marche.** Le guide de bonnes pratiques de 2021 indique que les chaussures doivent être confortables et offrir un bon maintien, avoir un faible drop entre l’arrière et l’avant du pied (le talon est un peu plus haut que les orteils), et être des chaussures que vous porterez vraiment. Il conseille aussi d’éviter de marcher pieds nus et de porter des chaussures plates sans maintien jusqu’à la disparition complète des symptômes (Morrissey et coll., 2021).',
        'La recommandation de 2023 inclut les conseils sur les chaussures dans sa recommandation d’information notée **E**. Pour les semelles, elle est plus précise\u00A0: ne pas les utiliser comme seule approche (**B** contre), mais elles peuvent aider associées à d’autres soins (**C**). Cela comprend une talonnette amortissante vendue sans ordonnance ou des chaussures qui amortissent le talon (Koc et coll., 2023).',
        'La dureté de la chaussure pourrait compter. Dans l’étude de 2023 sur 50\u00A0personnes avec une douleur au talon et 25 sans, le groupe avec douleur portait des chaussures au talon plus dur et déclarait avoir plus de mal à trouver des chaussures adaptées (Landorf et coll., 2023). Là encore, c’est un lien, pas la preuve que des chaussures souples aident.',
        'Pour savoir ce que montrent les essais sur les semelles, voyez [semelles ou exercices](/fr/semelles-ou-exercices/). Vous pensez aux chaussures minimalistes\u00A0? [Chaussures minimalistes](/fr/chaussures-minimalistes/) explique pourquoi elles conviennent mal tant que le talon est douloureux.',
      ],
      cites: [CITE.morrisseyBestPractice, CITE.guideline, CITE.landorfFootwear],
    },
    {
      h2: 'Le sol sur lequel vous marchez compte-t-il\u00A0?',
      paragraphs: [
        '**Probablement, mais les preuves sont indirectes.** La recommandation cite les activités en appui liées au travail, en particulier sur des surfaces qui amortissent mal les chocs, comme facteur de risque de la fasciite plantaire (Koc et coll., 2023). Cela désigne le sol dur et les chaussures dures comme une charge pour le talon.',
        'Les preuves directes sont minces. Dans l’étude appariée de 2023, les personnes avec et sans douleur au talon ne différaient pas selon qu’elles se tenaient debout sur des sols durs ou non (Landorf et coll., 2023). Une série de cas sur 20\u00A0coureurs a signalé moins de douleur après environ un mois et demi de course pieds nus sur l’herbe, mais sans groupe de comparaison (MacGabhann et coll., 2022). Aucun essai n’a comparé les surfaces de marche pour la fasciite plantaire.',
        'Options pratiques tant que le talon est douloureux\u00A0:',
        {
          list: [
            'Pour les marches plus longues, préférez l’herbe, une allée de parc ou une piste au béton, si c’est plus confortable.',
            'Gardez vos chaussures à la maison sur le carrelage ou le parquet, surtout pour les premiers pas de la journée.',
            'Allez-y doucement dans les longues descentes et les côtes raides tant que la marche sur le plat ne respecte pas la règle de douleur. Plus d’informations sur les descentes, le sac et les bâtons dans [mal aux pieds en randonnée](/fr/mal-aux-pieds-randonnee/).',
          ],
        },
        'Une douleur sourde et profonde en plein centre du talon, nettement pire sur sol dur, peut venir du coussinet graisseux du talon plutôt que du fascia plantaire. Voyez [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
      ],
      cites: [CITE.guideline, CITE.landorfFootwear, CITE.macgabhannGrass],
    },
    {
      h2: 'Quels exercices facilitent la marche\u00A0?',
      keyFact: 'La recommandation de 2023 donne aux étirements du fascia plantaire et du mollet la note A et au renforcement musculaire la note B (Koc et coll., 2023).',
      paragraphs: [
        'Les exercices peuvent aider le talon à tolérer plus de charge, de sorte que la même marche respecte plus facilement la règle de douleur avec le temps, même si aucune étude ne l’a testé pour la marche. La recommandation de 2023 donne aux étirements du fascia plantaire et du mollet la note **A**, sa meilleure note, et au renforcement musculaire la note **B**.',
        'Un mollet raide fait partie du tableau. Dans une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100 sans, une flexion limitée de la cheville était le facteur de risque le plus fort, et rester debout la majeure partie de la journée de travail augmentait aussi la cote (odds) de fasciite plantaire (Riddle et coll., 2003). Voyez [mollets tendus](/fr/mollets-tendus/).',
        'Dans un essai sur 48\u00A0personnes, des montées sur pointes lourdes ont soulagé la douleur et amélioré la fonction au quotidien plus vite que les étirements, et à douze mois les deux groupes étaient à peu près à égalité (Rathleff et coll., 2015). Les fiches ci-dessous sont les doses de départ de Walkito, pas une prescription. Le programme complet se trouve dans [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
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
          often: 'La plupart des séances, et avant une marche plus longue',
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
          often: 'Jours de renforcement',
          feel: 'Un travail en bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Genou plié, cet exercice sollicite surtout le soléaire, presque sans charge sur le talon, ce qui convient aux jours où la marche est déjà proche de votre limite.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
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
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge. Tenez-vous à un mur pour l’équilibre.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette',
          evidence: { level: 'moderate', why: 'C’est la routine d’un essai sur 48\u00A0personnes, et la recommandation de 2023 donne au renforcement la note B.' },
          dose: '4\u00A0séries de 10, chaque jambe, avec une charge en plus',
          often: 'Jours de renforcement, une fois que la douleur du matin a diminué',
          feel: 'Un travail dur dans le mollet',
          how: 'Tenez-vous sur un pied sur une marche, une serviette roulée sous les orteils. Prenez trois secondes pour monter, tenez deux secondes en haut, et prenez trois secondes pour redescendre. À ce niveau, Walkito ajoute une charge, par exemple un sac à dos. C’est la serviette qui fait travailler le fascia plantaire, et pas seulement le mollet. Plus de détails sur la [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/).',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes avec serviette',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: trois secondes pour monter, deux en haut, trois pour descendre',
          alt: 'Une personne qui monte sur la pointe des pieds sur une marche avec une serviette roulée, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Faut-il marcher avec une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'En général oui, dans des quantités que votre talon supporte. La recommandation de 2023 sur la douleur au talon préconise d’adapter la charge en appui et ne conseille pas d’arrêter, même si ce conseil repose sur la théorie (note E). Dans un essai sur 180\u00A0adultes, le conseil de rester actif tout en réduisant les activités qui aggravent la douleur, plus une talonnette, s’est accompagné d’une amélioration cliniquement significative à environ trois mois.',
    },
    {
      q: 'La marche est-elle bonne pour la fasciite plantaire\u00A0?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Marcher en quantité modérée ne pose en général pas de problème, même si aucune étude n’a testé la quantité de marche idéale. Dans une étude, les personnes avec une douleur au talon étaient aussi actives que celles sans douleur, mais restaient debout 3,4\u00A0heures de plus par jour. Un guide de bonnes pratiques conseille d’apprendre à suivre la réaction de votre douleur à l’effort.',
    },
    {
      q: 'Combien de pas par jour peut-on faire avec une fasciite plantaire\u00A0?',
      cites: [CITE.paluchSteps],
      a: 'Aucune étude ne donne un nombre de pas pour la fasciite plantaire. Le chiffre de 10\u00A0000 est un objectif de santé générale, et dans les études sur la mortalité, le bénéfice se stabilisait entre 6\u00A0000 et 8\u00A0000\u00A0pas par jour chez les adultes de 60\u00A0ans et plus. Pour un talon irrité, partez de votre nombre de pas habituel et laissez la douleur du lendemain matin décider s’il faut ajouter ou réduire.',
    },
    {
      q: 'Quelle douleur est acceptable en marchant avec une fasciite plantaire\u00A0?',
      cites: [CITE.silbernagel],
      a: 'Une règle testée autorise une douleur jusqu’à environ 5 sur 10 pendant l’effort, à condition qu’elle se calme le lendemain matin et n’augmente pas de semaine en semaine. Elle vient d’un essai sur 38\u00A0personnes souffrant du tendon d’Achille, pas de fasciite plantaire\u00A0: prenez-la comme un repère. Une douleur plus forte, ou un matin pire, veut dire qu’il faut réduire.',
    },
    {
      q: 'La marche peut-elle aggraver une fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'Oui, si vous en faites beaucoup plus que ce dont votre talon a l’habitude. La recommandation de 2023 cite une douleur au talon après une augmentation récente des activités en appui parmi les signes typiques de la fasciite plantaire. Une longue marche soudaine, un nouveau parcours vallonné ou une journée sur des sols durs peuvent provoquer une poussée. Des augmentations plus petites et régulières ménagent davantage le talon.',
    },
    {
      q: 'Faut-il arrêter complètement de marcher pour que la fasciite plantaire se calme\u00A0?',
      cites: [CITE.silbernagel, CITE.guideline],
      a: 'Aucune étude ne montre qu’un repos complet soit nécessaire. La recommandation de 2023 préconise d’adapter la charge et ne conseille pas d’arrêter. Dans un essai sur la douleur du tendon d’Achille, les personnes restées actives dans une limite de douleur s’en sont aussi bien sorties à douze mois que celles qui avaient arrêté la course et les sauts pendant six semaines. Si même de courtes marches font très mal ou vous font boiter, consultez un professionnel de santé.',
    },
    {
      q: 'Quelles chaussures choisir pour marcher avec une fasciite plantaire\u00A0?',
      cites: [CITE.morrisseyBestPractice, CITE.guideline],
      a: 'Des chaussures confortables et amorties, avec le talon un peu plus haut que les orteils, c’est le conseil des experts. Un guide de bonnes pratiques de 2021 conseille d’éviter de marcher pieds nus et de porter des chaussures plates sans maintien jusqu’à la disparition des symptômes. La recommandation de 2023 indique que les semelles ou les talonnettes peuvent aider associées à d’autres soins, mais pas seules.',
    },
    {
      q: 'Vaut-il mieux marcher sur l’herbe ou sur le béton avec une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.macgabhannGrass],
      a: 'Un sol plus souple est peut-être plus confortable, mais aucun essai n’a comparé les surfaces pour la marche avec une fasciite plantaire. La recommandation de 2023 relie le travail en appui sur des surfaces qui amortissent mal les chocs au risque de fasciite plantaire. Une petite série de cas chez des coureurs sur l’herbe a signalé moins de douleur, mais sans groupe de comparaison. Fiez-vous à l’état de votre talon le lendemain matin.',
    },
    {
      q: 'Peut-on marcher pieds nus à la maison avec une fasciite plantaire\u00A0?',
      cites: [CITE.morrisseyBestPractice],
      a: 'Mieux vaut l’éviter tant que le talon est douloureux, surtout sur le carrelage ou le parquet au réveil. Un guide de bonnes pratiques de 2021 sur la douleur au talon déconseille de marcher pieds nus et de porter des chaussures plates sans maintien jusqu’à la disparition complète des symptômes. Le conseil habituel\u00A0: des chaussures avec du maintien ou des chaussons fermes pour les premiers pas de la journée.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur au talon a commencé après une chute, un saut ou une torsion, ou vous ne pouvez pas poser le pied',
      'la douleur augmente à chaque marche et ne se calme pas au repos, ou presser les côtés du talon fait mal (possible fracture de fatigue)',
      'le talon fait mal la nuit ou au repos, pas seulement à la marche',
      'vous ressentez un engourdissement, des fourmillements ou des brûlures dans le pied',
      'le talon est rouge, chaud ou gonflé, ou vous vous sentez mal ou avez de la fièvre',
      'les deux talons font mal en même temps que d’autres articulations, ou vous avez une raideur matinale ailleurs',
      'vous avez du diabète ou une mauvaise circulation et votre pied fait mal ou a changé d’aspect',
      'la douleur s’aggrave de semaine en semaine malgré une réduction de la marche',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Elle ne fixe pas d’objectif de pas et ne planifie pas vos marches, mais elle lit votre talon de la même façon que cette page\u00A0: d’après ce que ressent votre pied le lendemain matin.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte\u00A0: après une grosse journée debout, la séance de renforcement suivante devient plus légère. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPainAfterWalking', 'heelPain', 'standing'],
  crumb: 'Marcher avec une fasciite plantaire',
  campaign: 'guide-walking-with-plantar-fasciitis-fr',
};
