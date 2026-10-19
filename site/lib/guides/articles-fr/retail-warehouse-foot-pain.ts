import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/retail-warehouse-foot-pain.ts (2026-10-18),
 * written around «mal aux pieds entrepôt», «mal aux pieds travail debout
 * commerce» and «sol en béton mal aux pieds». «Vous», terminology and exercise
 * names as in `lib/guides/fr.ts` and the other articles-fr pages. Figures,
 * doses, grades, qualifiers and sources identical to the English page after
 * its fact-check. Same CITE keys and media ids. The English link to the insole
 * guide has no French version and was removed; /program/ has no French path,
 * so the Walkito mention is unlinked.
 */

export const RETAIL_WAREHOUSE_FR: Guide = {
  lang: 'fr',
  page: 'retailWarehouse',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Mal aux pieds en entrepôt\u00A0: béton, chaussures, exercices',
  description:
    'Mal aux pieds en entrepôt ou en magasin\u00A0: ce que disent les études sur le béton, les chaussures de sécurité, tapis et semelles, et 3\u00A0minutes d’exercices.',
  h1: 'Mal aux pieds dans le commerce et en entrepôt\u00A0: ce qui aide sur les sols durs',
  lede:
    'En entrepôt et en magasin, les pieds font mal parce que des heures debout et à marcher sur des sols durs chargent le talon, la voûte et le mollet, sans que le sol amortisse grand-chose. Rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote (odds) de [fasciite plantaire](/fr/fasciite-plantaire/) dans une étude (Riddle et coll., 2003). Les étirements du mollet et du fascia plantaire ont la meilleure note, **A**, dans la recommandation de 2023 sur la douleur au talon, et une version courte tient en 3\u00A0minutes environ pendant une pause. Les tapis et les semelles amortissantes améliorent le confort, mais les données sont plus minces (Speed et coll., 2018).',
  intro: [
    'Cette page porte sur le travail lui-même\u00A0: sols en béton ou carrelés, chaussures de sécurité, longs postes et pauses courtes. Pour la douleur liée à la station debout en général, voir [pourquoi ai-je mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/). Si vous travaillez à l’hôpital, [mal aux pieds chez les infirmières](/fr/mal-aux-pieds-infirmieres/) traite des postes de 12\u00A0heures et des horaires alternés.',
  ],
  toc: true,
  takeaways: [
    'Passer la majeure partie de la journée de travail debout multipliait par 3,6 la cote de fasciite plantaire dans une étude cas-témoins sur 50\u00A0cas et 100\u00A0témoins. Une cheville très peu souple, le plus souvent à cause d’un mollet raide, la multipliait par 23,3 (Riddle et coll., 2003).',
    'La recommandation de 2023 sur la douleur au talon maintient une recommandation de note **B**\u00A0: les cliniciens devraient rechercher la mise en charge liée au travail, en particulier sur des surfaces qui amortissent mal, comme facteur de risque de douleur au talon (Koc et coll., 2023).',
    'Une revue de 10\u00A0études a trouvé des données modérées montrant que les tapis et les semelles amortissantes réduisent la gêne et la fatigue chez les personnes qui travaillent debout, et seulement des données limitées montrant que les semelles font mieux que les tapis (Speed et coll., 2018).',
    'Dans une revue de 7\u00A0études sur des travailleurs en chaussures de sécurité, les 4 qui ont mesuré la douleur ont trouvé une douleur au pied chez 42,3 à 60,8\u00A0% des travailleurs, la chaleur, la transpiration, le poids et la rigidité étant les principales plaintes (Arceri et coll., 2024).',
    'Les étirements du mollet et du fascia plantaire ont la meilleure note de la recommandation, **A**, et le renforcement un **B**. Les semelles seules ont un **B contre** pour la douleur au talon (Koc et coll., 2023).',
  ],
  sections: [
    {
      h2: 'Pourquoi a-t-on mal aux pieds après un poste en entrepôt ou en magasin\u00A0?',
      keyFact: 'Passer la majeure partie de la journée de travail en appui sur les pieds multipliait par 3,6 la cote de fasciite plantaire dans une étude cas-témoins appariée (Riddle et coll., 2003).',
      paragraphs: [
        'Le travail en magasin et en entrepôt combine deux charges. En caisse ou à un poste d’emballage, vous restez debout sans bouger pendant de longues périodes. En rayon ou à la préparation de commandes, vous marchez, portez, poussez des chariots et pivotez. Dans les deux cas, le poids reste sur le talon et la voûte la majeure partie du poste, et les pauses sont fixées par le planning, pas par le moment où vos pieds en ont besoin.',
        'Une étude cas-témoins de 2003 sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins appariés a montré que passer la majeure partie de la journée de travail en appui sur les pieds multipliait par 3,6 la cote de fasciite plantaire. Une cheville moins souple, c’est-à-dire un [mollet tendu](/fr/mollets-tendus/), était le facteur le plus fort, avec une cote multipliée par 23,3. **Un mollet raide, vous pouvez le travailler. Le poste, en général, non.**',
        'Une revue systématique de 16\u00A0études sur la douleur chronique au talon a trouvé quelques arguments en faveur d’un lien avec la station debout prolongée, au même titre qu’un poids plus élevé, de l’âge et d’une cheville moins souple. Les auteurs demandaient des études qui suivent les personnes dans le temps\u00A0: cela montre donc une association, pas la preuve que la station debout cause la douleur au talon (Irving et coll., 2006).',
        'Quelle distance parcourez-vous\u00A0? Nous n’avons trouvé aucune étude publiée qui compte les pas par poste chez les travailleurs d’entrepôt ou du commerce. Des chiffres comme «\u00A012\u00A0miles par poste\u00A0» (environ 19\u00A0km) circulent sur des blogs du secteur sans étude derrière. Le chiffre mesuré le plus proche vient des infirmières\u00A0: en moyenne 9\u00A0360\u00A0pas par poste dans une étude avec podomètre (Chang et Cho, 2022).',
      ],
      cites: [CITE.riddle, CITE.irvingHeelPain, CITE.changCho],
    },
    {
      h2: 'Le béton est-il vraiment pire pour les pieds\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon cite la mise en charge liée au travail, en particulier dans des conditions de faible amorti, comme facteur de risque (note B, Koc et coll., 2023).',
      paragraphs: [
        'Probablement, mais personne n’a mesuré le béton seul. La recommandation de 2023 sur la douleur au talon maintient une recommandation de 2014, de note **B**\u00A0: les cliniciens devraient évaluer les activités de mise en charge liées au travail, en particulier dans des conditions de faible amorti, comme facteur de risque de douleur au talon et de fasciite plantaire. Un sol en béton nu est à peu près la surface de travail qui amortit le moins.',
        'Ce qui a été testé, c’est l’inverse\u00A0: ajouter quelque chose de souple. Dans des études en laboratoire et sur le lieu de travail, se tenir sur un tapis ou porter des semelles amortissantes réduisait la gêne par rapport à un sol dur (Speed et coll., 2018). Cela va dans le sens d’une surface dure qui ajoute à la charge, sans prouver que le béton cause une affection précise.',
        'Certaines douleurs au talon sont pires sur sol dur pour une autre raison. Si la douleur se situe en profondeur au centre du talon et qu’elle est nettement pire pieds nus sur du carrelage ou du béton, lisez la page sur le [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning],
    },
    {
      h2: 'Tapis anti-fatigue ou semelles\u00A0: qu’est-ce qui aide le plus\u00A0?',
      keyFact: 'Une revue de 10\u00A0études a trouvé des données modérées montrant que l’amorti réduit la gêne chez les personnes qui travaillent debout, et des données limitées montrant que les semelles font mieux que les tapis (Speed et coll., 2018).',
      paragraphs: [
        '**Les deux améliorent le confort, sans gagnant net, et aucun n’a de données solides.** Une revue systématique de 2018 a trouvé 10\u00A0études sur les tapis et les semelles amortissantes chez des personnes qui travaillent debout. Elle a jugé modérées les données montrant que l’amorti réduit la gêne et la fatigue, et limitées celles montrant que les semelles font mieux que les tapis. Les études étaient très différentes dans leur conception, et les auteurs demandaient des essais plus grands sur de vrais lieux de travail.',
        'Dans une étude sur le lieu de travail, des ouvriers de montage ont passé une semaine de journées de 8\u00A0heures dans chacune de quatre conditions\u00A0: sol dur, tapis, semelles, et semelles sur un tapis. Le tapis, les semelles et la combinaison étaient tous plus confortables que le sol dur, sans différence nette entre eux (King, 2002).',
        'Dans un test en laboratoire de 4\u00A0heures, trois tapis anti-fatigue du commerce sur quatre réduisaient la gêne par rapport à un sol dur, mais aucun tapis ne faisait mieux que les autres (Wiggermann et Keyserling, 2013). Aucun tapis en particulier n’a donc montré qu’il était meilleur que les autres.',
        'En pratique\u00A0: **un tapis n’aide que là où vous restez immobile**, comme une caisse, un poste d’emballage ou un poste de travail fixe. Si vous parcourez le magasin ou préparez des commandes, l’amorti doit vous suivre, donc dans la chaussure. Pour la douleur au talon en particulier, la recommandation de 2023 donne aux semelles seules un **B contre**\u00A0: ne comptez donc pas uniquement sur elles. [Semelles ou exercices](/fr/semelles-ou-exercices/) compare les deux.',
      ],
      cites: [CITE.speedCushioning, CITE.kingMats, CITE.wiggermannMats, CITE.guideline],
    },
    {
      h2: 'Les chaussures de sécurité donnent-elles mal aux pieds\u00A0?',
      keyFact: 'Dans une revue de 7\u00A0études sur des travailleurs en chaussures de sécurité, les 4 qui ont mesuré la douleur ont trouvé une douleur au pied chez 42,3 à 60,8\u00A0% des travailleurs (Arceri et coll., 2024).',
      paragraphs: [
        'Les chaussures de sécurité protègent vos pieds, mais elles suscitent aussi des plaintes. Une revue systématique de 2024 a trouvé 7\u00A0études sur des travailleurs en chaussures de sécurité. Toutes signalaient de l’inconfort et de la douleur, et les 4\u00A0études qui ont mesuré la douleur ont trouvé une douleur au pied chez 42,3 à 60,8\u00A0% des travailleurs. Les principales plaintes étaient la chaleur, la transpiration, le poids et une semelle rigide, surtout au niveau des orteils et de l’embout.',
        'Dans une étude sur 509\u00A0travailleurs de 12\u00A0usines de métallurgie, qui portaient tous des chaussures de sécurité chaque jour, 81\u00A0% avaient au moins un problème au pied. Leurs plaintes les plus fréquentes sur les chaussures étaient la chaleur et l’humidité à l’intérieur (42\u00A0%), le poids (27,5\u00A0%) et l’ajustement (22,9\u00A0%) (Mancuso et coll., 2017).',
        'Ce sont des enquêtes\u00A0: elles ne peuvent donc pas dire que les chaussures causent la douleur, car de longues heures sur des sols durs feraient mal dans n’importe quelle chaussure. Les suggestions de la revue sont pratiques\u00A0:',
        {
          list: [
            'Prenez la bonne pointure et la bonne largeur, et vérifiez si les modèles validés par votre employeur existent en version large.',
            'Choisissez la chaussure la plus légère qui respecte le niveau de protection exigé sur votre site.',
            'Privilégiez des matériaux respirants si vos pieds ont chaud et transpirent.',
            'La plupart des chaussures de sécurité ont une semelle intérieure amovible\u00A0: une semelle amortissante peut donc la remplacer, si elle ne rend pas la chaussure trop serrée.',
          ],
        },
        'Ne remplacez jamais une chaussure de sécurité obligatoire par des baskets parce que vous avez mal aux pieds. Parlez à votre responsable ou à la personne chargée de la sécurité d’autres modèles validés.',
      ],
      cites: [CITE.arceriSafety, CITE.mancusoSafety],
    },
    {
      h2: 'Quels exercices faire pendant une pause\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia plantaire la note A, sa meilleure note, et au renforcement la note B (Koc et coll., 2023).',
      paragraphs: [
        'Les exercices ci-dessous ne demandent aucun matériel et pas plus de place qu’un mur, un rayonnage ou le bord d’un comptoir. Les trois premiers se font debout, en salle de pause ou dans une allée. Les autres sont pour après le poste, assis.',
        'La recommandation donne aux étirements du mollet et du fascia plantaire la note **A** et au renforcement la note **B**. Ces notes concernent la fasciite plantaire, mais ce sont les mêmes tissus qu’un poste sur sol dur met en charge. Arrêtez pour la journée si un exercice fait monter votre douleur à 6 sur 10 ou plus.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note. Un mollet raide était le plus fort facteur de risque dans une étude cas-témoins de 2003.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'Pendant une pause ou après le poste',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains sur un mur, un montant de rayonnage ou un comptoir. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Fonctionne aussi en chaussures de sécurité.',
          stop: 'Douleur vive dans le talon ou le mollet',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'Pendant une pause ou après le poste',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Douleur vive dans le talon ou le mollet',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une silhouette en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Bascules de cheville',
          evidence: { level: 'early', why: 'Cible la souplesse de la cheville, le plus fort facteur de risque dans une étude cas-témoins de 2003. Pas testé seul dans un essai sur la douleur au talon.' },
          dose: '2\u00A0séries de 15, chaque jambe',
          often: 'Pendant une pause',
          feel: 'Un étirement à l’avant de la cheville et une tension dans le bas du mollet',
          how: 'En fente, mains au mur. Faites avancer le genou avant au-dessus des orteils pendant que le talon reste à plat. Lentement, environ deux secondes dans chaque sens. Plus de détails dans [bascules de cheville](/fr/exercices/mobilite-cheville/).',
          stop: 'La douleur atteint 6 sur 10',
          image: 'Exercice\u00A0: bascules de cheville',
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: le genou avance au-dessus des orteils, le talon reste à plat',
          alt: 'Une silhouette en fente qui avance le genou avant au-dessus des orteils, la cheville mise en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'Après le poste, et avant vos premiers pas le matin',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous, chaussures enlevées, et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Si vos premiers pas au lever font mal, faites-en un au bord du lit avant que votre pied touche le sol.',
          stop: 'Douleur vive au talon',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une silhouette qui tire les orteils d’un pied vers elle, la plante du pied mise en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Les jours de repos, ou après un poste plus léger',
          feel: 'Les deux mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, tenez-vous à un mur, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Le renforcement trouve mieux sa place les jours de repos, pour que le mollet ait le temps de récupérer avant le poste suivant. Plus de détails dans [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
          stop: 'Douleur au talon au-dessus de 6 sur 10, ou pire le lendemain matin',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez bien droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une silhouette debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Pas testé dans les études de cette page. Il est là pour le confort après le poste.' },
          dose: '1\u00A0minute',
          often: 'Après le poste',
          feel: 'Une pression ferme sous le pied',
          how: 'Assis, faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, appuyez moins.',
          stop: 'Une douleur qui reste après l’arrêt',
          image: 'Exercice\u00A0: massage avec une balle',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler la plante lentement sur une balle, avec une pression ferme',
          alt: 'Une silhouette assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Comment le caser dans un poste\u00A0: 3, 5 ou 10\u00A0minutes\u00A0?',
      paragraphs: [
        'Dans le commerce et en entrepôt, la plupart des pauses sont courtes et fixées par le planning. Une revue d’études en laboratoire a trouvé que les symptômes dus à la station debout ininterrompue devenaient cliniquement pertinents après environ 42\u00A0minutes chez les personnes sujettes à la douleur en position debout, et ses auteurs proposaient de ne pas rester debout immobile plus de 40\u00A0minutes environ (Coenen et coll., 2017). Souvent, vous ne pouvez pas choisir quand vous asseoir, mais vous pouvez changer de position\u00A0: marcher jusqu’au bout de l’allée, déplacer votre poids, ou faire un étirement du mollet contre un rayonnage.',
        {
          list: [
            '**3\u00A0minutes, pendant une pause\u00A0:** l’étirement du mollet, 2\u00A0maintiens de 30\u00A0secondes par jambe, plus un maintien de 30\u00A0secondes en étirement du soléaire par jambe. Cela cible le mollet raide, le plus fort facteur de risque de l’étude de 2003.',
            '**5\u00A0minutes, pendant une pause plus longue ou en fin de poste\u00A0:** ajoutez les bascules de cheville, ou l’étirement du fascia plantaire une fois les chaussures enlevées.',
            '**10\u00A0minutes, un jour de repos\u00A0:** ajoutez les montées sur pointes (3\u00A0séries de 10) et le massage avec une balle. Cela couvre le côté renforcement, noté **B**.',
          ],
        },
        '**Une routine courte faite à la plupart des postes compte plus qu’une longue que vous sautez.** Associez-la à quelque chose que vous faites déjà, comme la première pause ou le moment où vous enlevez vos chaussures de travail.',
      ],
      cites: [CITE.coenen, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Ce que disent les données sur chaque option',
      paragraphs: [
        'La plupart des conseils pour le travail mélangent des données solides et des données faibles. Ce tableau met les principales options côte à côte, avec la meilleure étude que nous avons trouvée pour chacune.',
      ],
      table: {
        caption: 'Options contre la douleur aux pieds dans les métiers où l’on reste debout et marche beaucoup',
        head: ['Option', 'Meilleure donnée', 'Résultat', 'Solidité'],
        rows: [
          ['Étirements du mollet et du fascia', 'Recommandation de 2023', 'Note A pour la douleur au talon', 'Forte'],
          ['Renforcement du mollet', 'Recommandation de 2023', 'Note B pour la douleur au talon', 'Modérée'],
          ['Tapis anti-fatigue', 'Revue de 10\u00A0études', 'Moins de gêne', 'Modérée, confort seulement'],
          ['Semelles amortissantes', 'Même revue', 'Moins de gêne, comme un tapis', 'Modérée, confort seulement'],
          ['Semelles seules pour la douleur au talon', 'Recommandation de 2023', 'B contre', 'Penche contre'],
          ['Bas de contention', 'Essai sur 40\u00A0agents de sécurité', 'Pas de hausse de la gêne', 'Un seul petit essai'],
          ['Chaussures de sécurité mieux ajustées', 'Revue de 7\u00A0études', 'Ajustement, poids, chaleur comptent', 'Enquêtes seulement'],
        ],
      },
      after: [
        'Les bas de contention sont traités en détail dans [pourquoi ai-je mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/). L’essai portait sur des agents de sécurité masculins pendant de longs postes debout, pas sur des travailleurs d’entrepôt (Garcia et coll., 2023).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning, CITE.garcia, CITE.arceriSafety],
    },
    {
      h2: 'Est-ce une fasciite plantaire ou autre chose\u00A0?',
      paragraphs: [
        'Une douleur diffuse et des pieds fatigués après un long poste passent en général avec une nuit de repos. La fasciite plantaire a un profil plus net\u00A0: une douleur vive près de la face interne du talon, pire aux premiers pas du matin ou après être resté assis. Si cela vous ressemble, voir [douleur au talon au réveil](/fr/douleur-talon-au-reveil/) et [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/). Environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec un traitement sans chirurgie, même si cela peut prendre trois à six mois (Latt et coll., 2020).',
        'D’autres profils orientent ailleurs. Une brûlure sous l’avant du pied oriente vers une [douleur à l’avant du pied](/fr/metatarsalgie-douleur-avant-pied/). Une douleur le long de la voûte qui augmente au fil du poste est traitée dans [douleur à la voûte plantaire](/fr/douleur-voute-plantaire/). Une douleur sur le dessus du pied peut venir de chaussures trop serrées ou qui appuient\u00A0; voir [douleur sur le dessus du pied](/fr/douleur-dessus-du-pied/).',
        'Une douleur en un petit point sur un os, qui augmente à mesure que vous marchez, peut être une fracture de fatigue, surtout après une hausse brutale des heures ou un nouveau poste avec plus de marche. **Cela demande l’avis d’un professionnel de santé, pas plus d’exercices.**',
      ],
      cites: [CITE.latt, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Pourquoi ai-je autant mal aux pieds en travaillant en entrepôt\u00A0?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'De longues heures debout et à marcher sur des sols durs maintiennent la charge sur le talon, la voûte et le mollet la majeure partie du poste. Passer la majeure partie de la journée de travail debout multipliait par 3,6 la cote de fasciite plantaire dans une étude, et la recommandation de 2023 sur la douleur au talon cite la mise en charge liée au travail sur des surfaces qui amortissent mal comme facteur de risque.',
    },
    {
      q: 'Combien de pas fait un travailleur d’entrepôt sur un poste\u00A0?',
      cites: [CITE.changCho],
      a: 'Nous n’avons trouvé aucune étude publiée qui compte les pas sur des postes en entrepôt ou dans le commerce. Des chiffres comme 12\u00A0miles (environ 19\u00A0km) par poste viennent de blogs du secteur sans étude derrière. Le chiffre mesuré le plus proche vient d’infirmières hospitalières, qui faisaient en moyenne 9\u00A0360\u00A0pas par poste dans une étude avec podomètre. Votre téléphone ou votre montre reste le meilleur repère pour votre propre poste.',
    },
    {
      q: 'Les tapis anti-fatigue sont-ils vraiment efficaces\u00A0?',
      cites: [CITE.speedCushioning, CITE.wiggermannMats],
      a: 'Ils réduisent la gêne chez les personnes qui restent debout au même endroit, mais les données sont modérées, pas solides. Une revue de 10\u00A0études a trouvé que l’amorti aide les personnes qui travaillent debout. Dans un test en laboratoire de 4\u00A0heures, trois tapis sur quatre faisaient mieux qu’un sol dur, et aucun tapis ne faisait mieux que les autres. Un tapis n’aide que là où vous restez immobile.',
    },
    {
      q: 'Semelles ou tapis\u00A0: qu’est-ce qui est mieux pour rester debout sur du béton\u00A0?',
      cites: [CITE.kingMats, CITE.speedCushioning],
      a: 'À peu près pareil pour le confort. Dans une étude sur le lieu de travail, des ouvriers de montage trouvaient un tapis, des semelles et les deux ensemble tous plus confortables qu’un sol dur, sans différence nette entre eux. Une revue a jugé limitées les données montrant que les semelles font mieux que les tapis. Si vous vous déplacez, les semelles vous suivent, pas le tapis.',
    },
    {
      q: 'Les chaussures de sécurité peuvent-elles donner une fasciite plantaire\u00A0?',
      cites: [CITE.arceriSafety, CITE.guideline],
      a: 'Aucune étude ne montre que les chaussures de sécurité causent une fasciite plantaire. Une revue de 7\u00A0études sur des travailleurs en chaussures de sécurité a trouvé une douleur au pied chez 42,3 à 60,8\u00A0% des travailleurs dans les 4 qui l’ont mesurée, la chaleur, le poids et la rigidité étant les principales plaintes. Les heures sur sol dur comptent aussi, quelle que soit la chaussure. Un bon ajustement et la chaussure validée la plus légère sont de bons premiers pas.',
    },
    {
      q: 'Quels étirements faire pendant une pause au travail\u00A0?',
      cites: [CITE.guideline],
      a: 'L’étirement du mollet et l’étirement du soléaire se font debout contre un mur ou un rayonnage, en chaussures de travail\u00A0: deux maintiens de 30\u00A0secondes chacun, chaque jambe, soit environ 4\u00A0minutes pour les deux étirements. La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet la note A. Gardez l’étirement du fascia plantaire et les montées sur pointes pour après le poste ou les jours de repos.',
    },
    {
      q: 'Est-ce normal d’avoir mal aux pieds après un poste en magasin\u00A0?',
      cites: [CITE.waters],
      a: 'Des pieds fatigués et douloureux après un long poste debout sont fréquents, et une revue de 2015 a relié la station debout prolongée au travail à la gêne, à la fatigue et aux douleurs dans les jambes dans de nombreux métiers. Fréquent ne veut pas dire qu’il faut l’ignorer. Une douleur vive, qui dure jusque dans vos jours de repos ou qui est pire aux premiers pas du matin, mérite qu’on s’en occupe.',
    },
    {
      q: 'Peut-on continuer à travailler debout avec une fasciite plantaire\u00A0?',
      cites: [CITE.latt, CITE.guideline],
      a: 'Beaucoup de personnes le font, avec des ajustements. De courts étirements pendant les pauses, des chaussures mieux ajustées et de l’amorti là où vous restez debout allègent la charge, et environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec un traitement sans chirurgie, même si cela peut prendre trois à six mois. Si la douleur s’aggrave malgré tout, consultez un professionnel de santé.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une chute, une charge tombée sur le pied ou une torsion au travail',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'la douleur est concentrée en un petit point sur un os et augmente à la marche, ce qui peut être une fracture de fatigue',
      'le pied est engourdi, fourmille, brûle ou est froid',
      'le pied ou le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'un mollet ou une jambe est soudain douloureux et gonflé',
      'vous avez du diabète ou une sensibilité réduite des pieds, et une chaussure a provoqué une plaie ou une ampoule',
      'la douleur vous réveille la nuit ou continue de s’aggraver après plusieurs semaines avec les changements de cette page',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à trouver l’ordre, les doses ni le moment de passer à une version plus difficile. Walkito construit le plan à partir de vos réponses et l’ajuste chaque jour selon l’état de vos pieds\u00A0: un mauvais matin après un long poste donne une séance plus légère.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes, pour que cela s’adapte aux postes et aux jours de repos. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['standing', 'nurses', 'heelPainAfterWalking'],
  crumb: 'Mal aux pieds dans le commerce et en entrepôt',
  campaign: 'guide-retail-warehouse-foot-pain-fr',
};
