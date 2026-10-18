import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/hairdressers-foot-pain.ts (2026-10-18),
 * written around «mal aux pieds coiffeuse», «chaussures coiffeur mal aux
 * pieds» and «tapis anti-fatigue coiffure». French (France) with «vous».
 * Exercise names as in `lib/guides/fr.ts` and the other articles-fr pages.
 * Figures, doses, grades, hedges and sources identical to the English page
 * after its fact-check. Same CITE keys and media ids. The foot pain
 * identifier and /program/ have no French path, so those links are removed
 * and the wording kept.
 */

export const HAIRDRESSERS_FR: Guide = {
  lang: 'fr',
  page: 'hairdressers',
  mainSource: CITE.kozakHairdressing,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Mal aux pieds en coiffure\u00A0: chaussures, tapis, exercices',
  description:
    'Pourquoi les coiffeurs ont mal aux pieds à force de rester debout au fauteuil, ce que disent les études, chaussures, tapis, tabourets et exercices courts.',
  h1: 'Mal aux pieds en coiffure\u00A0: ce qui aide quand on reste debout au même endroit toute la journée',
  lede:
    'Chez les coiffeurs, le mal aux pieds vient surtout des heures passées debout sans bouger au fauteuil, pas de la marche. Les options qui ont quelques preuves visent donc la station debout statique\u00A0: un sol ou une chaussure amortis, des bas de contention légers et une minute de travail du mollet entre deux clients. Dans une étude portant sur 384\u00A0coiffeurs et 384\u00A0personnes exerçant d’autres métiers, 49,5\u00A0% des coiffeurs signalaient des douleurs au genou ou au pied, contre 38,3\u00A0% du groupe de comparaison (Mishra et Sarkar, 2021).',
  intro: [
    'Les études sur la coiffure s’intéressent surtout aux épaules, à la nuque, aux poignets et au dos. Les pieds reçoivent beaucoup moins d’attention, et cette page indique où les données sont minces. Elle couvre ce que l’on sait des pieds et des jambes des coiffeurs, les données sur la station debout qui s’appliquent au travail en salon, et la façon de caser des exercices entre deux clients. Pour la douleur liée à la station debout en général, voir [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/). Pour un travail posté avec beaucoup de marche, voir [mal aux pieds des infirmières](/fr/mal-aux-pieds-infirmieres/).',
  ],
  toc: true,
  takeaways: [
    'Sur 384\u00A0coiffeurs en Inde, 49,5\u00A0% signalaient des douleurs au genou ou au pied au cours des 12\u00A0derniers mois, contre 38,3\u00A0% de 384\u00A0personnes exerçant d’autres métiers. L’étude comptait le genou et le pied ensemble (Mishra et Sarkar, 2021).',
    'Une revue de la portée de 2019 portant sur 44\u00A0études n’en a trouvé que 5 qui rapportaient des douleurs au pied chez les coiffeurs, de 10 à 44\u00A0%. La plupart des études portaient sur le dos, la nuque, les épaules et les mains, et la station debout faisait partie des facteurs de risque fréquents (Kozak et coll., 2019).',
    'Dans un essai croisé randomisé chez 108\u00A0coiffeurs, des bas de contention de 15 à 20\u00A0mmHg ont fait baisser le score de douleur et de sensation de gonflement des jambes de 12\u00A0% et le volume du bas de la jambe de 19\u00A0ml en moyenne (Blazek et coll., 2013).',
    'Une revue de 2018 portant sur 10\u00A0études a trouvé des preuves modérées que des sols plus souples et des semelles amortissantes réduisent l’inconfort et la fatigue chez les personnes qui travaillent debout (Speed et coll., 2018).',
    'Un mollet raide était le principal facteur de risque de fasciite plantaire dans une étude cas-témoins de 2003, avec un risque multiplié par 23,3, et rester debout la plus grande partie de la journée de travail le multipliait par 3,6 (Riddle et coll., 2003).',
  ],
  sections: [
    {
      h2: 'Le mal aux pieds est-il fréquent chez les coiffeurs\u00A0?',
      keyFact: 'Cinq études d’une revue de la portée de 2019 rapportaient des douleurs au pied chez les coiffeurs, de 10 à 44\u00A0% (Kozak et coll., 2019).',
      paragraphs: [
        '**Les douleurs aux pieds et aux jambes sont fréquentes en coiffure, mais beaucoup moins étudiées que celles des épaules ou du dos.** Une revue de la portée de 2019 a rassemblé 44\u00A0études sur les troubles musculosquelettiques en coiffure. Seules 5 rapportaient des douleurs au pied, et les chiffres allaient de 10 à 44\u00A0%. L’écart est large parce que les études utilisaient des questions, des pays et des périodes différents.',
        'La plus grande étude avec groupe de comparaison a interrogé 384\u00A0coiffeurs et 384\u00A0personnes exerçant d’autres métiers dans deux villes indiennes. Les douleurs au genou ou au pied étaient la plainte la plus fréquente dans les deux groupes\u00A0: 49,5\u00A0% chez les coiffeurs contre 38,3\u00A0% chez les autres. L’étude regroupait le genou et le pied dans une seule catégorie\u00A0: elle ne peut donc pas dire quelle part concernait les pieds seuls.',
        'Une étude britannique portant sur 147\u00A0coiffeurs et 67\u00A0personnes exerçant d’autres métiers a trouvé des douleurs aux jambes ou aux pieds liées au travail bien plus souvent chez les coiffeurs. Le risque était 31\u00A0fois plus élevé, mais la fourchette statistique était très large, d’environ 4 à 267\u00A0fois\u00A0: l’ampleur réelle de l’écart reste incertaine. Dans une étude turque de 2023, après le bas du dos, les zones les plus douloureuses étaient le bas des jambes\u00A0: 36,9\u00A0% à droite et 32,5\u00A0% à gauche.',
      ],
      sourceNote:
        'Mishra et Sarkar (2021)\u00A0: étude transversale, 384\u00A0coiffeurs et 384\u00A0témoins, prévalence sur 12\u00A0mois, genou et pied dans une seule catégorie. Bradshaw et coll. (2011)\u00A0: questionnaire administré par un enquêteur, odds ratio ajusté de 31,0 (IC à 95\u00A0% de 3,8 à 267,4). Ince Parpucu et coll. (2023)\u00A0: Cornell Musculoskeletal Discomfort Questionnaire, semaine précédente.',
      cites: [CITE.kozakHairdressing, CITE.mishraHairdressers, CITE.bradshawHairdressers, CITE.inceParpucuHairdressers],
    },
    {
      h2: 'Pourquoi rester debout au même endroit fait-il plus mal que marcher\u00A0?',
      paragraphs: [
        'La journée d’un coiffeur ne ressemble pas à celle d’une infirmière. Vous ne parcourez pas de longues distances. Vous restez debout au fauteuil, vous vous décalez un peu, vous vous penchez, puis vous restez debout de nouveau. Quand vous restez immobile\u00A0:',
        {
          list: [
            'Les muscles du mollet gardent une seule position et cessent de faire remonter le sang dans la jambe.',
            'Le sang et les liquides s’accumulent dans le bas des jambes et les pieds, ce qui explique que les chaussures semblent plus serrées le soir.',
            'Le coussinet du talon et le fascia plantaire, la bande sous la voûte, portent une charge constante, sans répit.',
          ],
        },
        'Les études en laboratoire montrent à quelle vitesse cela s’installe. Une revue de 2017 portant sur 25\u00A0études en laboratoire a trouvé que les symptômes au bas du dos devenaient cliniquement significatifs après environ 71\u00A0minutes debout en moyenne, et après 42\u00A0minutes chez les personnes sujettes aux douleurs en position debout. Une seule couleur ou une seule coupe peut durer plus longtemps. Une revue de 2015 sur le travail debout a associé la station debout prolongée aux douleurs du bas du dos et des jambes, à l’inconfort et à la fatigue dans de nombreux métiers.',
        'Dans une étude de 2023 chez des coiffeurs turcs, ceux qui signalaient une fatigue du bas des jambes avaient aussi plus de douleurs aux genoux et au bas des jambes, et de moins bons scores d’énergie et de mobilité. **Le gonflement se mesure aussi\u00A0:** chez 38\u00A0coiffeurs, le tour de cheville passait de 21,1\u00A0cm le matin à 22,1\u00A0cm en fin de journée sans contention.',
      ],
      cites: [CITE.coenen, CITE.waters, CITE.inceParpucuHairdressers, CITE.agleHosiery],
    },
    {
      h2: 'La posture au fauteuil joue-t-elle sur vos pieds\u00A0?',
      paragraphs: [
        'Les études sur la posture des coiffeurs portent sur le dos et les bras, pas sur les pieds. Une revue de la portée rapporte que les coiffeurs se penchent souvent en avant ou se tournent pendant la coupe et le shampooing, et que, dans une étude de mesure, la coupe gardait la colonne penchée en avant 66\u00A0% du temps. Se pencher longtemps tend à reporter le poids vers l’avant du pied.',
        'Aucune étude n’a mesuré comment la posture en salon modifie la charge sur les pieds des coiffeurs. Ce que vous pouvez contrôler est simple\u00A0: montez ou baissez le fauteuil du client pour ne pas vous pencher, gardez le poids sur les deux pieds et changez d’appui toutes les quelques minutes. Dans une étude en laboratoire de quatre heures debout, les personnes qui changeaient plus souvent d’appui signalaient aussi plus d’inconfort\u00A0: changer souvent d’appui peut donc être le signe que l’inconfort s’installe, et un bon signal pour faire une courte pause (Wiggermann et Keyserling, 2013).',
        'Si vos pieds font mal en même temps que votre dos, le lien va dans les deux sens. [Pieds plats et mal de dos](/fr/pieds-plats-mal-de-dos/) fait le point sur ce que dit la recherche.',
      ],
      cites: [CITE.kozakHairdressing, CITE.wiggermannMats],
    },
    {
      h2: 'Quelles sont les meilleures chaussures pour les coiffeurs\u00A0?',
      paragraphs: [
        '**Aucune étude n’a comparé les types de chaussures chez les coiffeurs.** Les conseils de chaussures en ligne viennent de marques ou de cabinets, pas d’essais en salon. Ce que la recherche plus large sur la station debout soutient, c’est l’amorti\u00A0: une revue de 2018 portant sur 10\u00A0études a trouvé des preuves modérées que des semelles amortissantes et des sols plus souples réduisent l’inconfort et la fatigue chez les personnes qui travaillent debout, et des preuves limitées que les semelles font mieux que les tapis.',
        'En pratique, cherchez\u00A0:',
        {
          list: [
            'Une semelle amortie et un peu de soutien de la voûte, pour que le talon et la voûte ne prennent pas toute la charge d’un sol dur.',
            'Un bout fermé qui ne serre pas les orteils. Une douleur entre les orteils peut être un [névrome de Morton](/fr/nevrome-de-morton/).',
            'Un talon bas et stable. Les talons hauts reportent davantage le poids vers l’avant du pied.',
            'Une semelle antidérapante. Les sols des salons deviennent mouillés et glissants.',
          ],
        },
        'Certaines personnes changent de chaussures à la mi-journée lors des longues journées. Aucune étude ne l’a testé, mais une autre chaussure répartit la charge autrement. Si vous avez déjà mal au talon ou à la voûte, des semelles peuvent rendre la journée plus confortable, mais elles agissent sur le confort, pas sur le mollet et la voûte eux-mêmes. La page [semelles ou exercices](/fr/semelles-ou-exercices/) compare les deux.',
      ],
      cites: [CITE.speedCushioning],
    },
    {
      h2: 'Les tapis anti-fatigue aident-ils les coiffeurs\u00A0?',
      keyFact: 'Une revue de 2018 portant sur 10\u00A0études a trouvé des preuves modérées que des sols plus souples et des semelles amortissantes réduisent l’inconfort et la fatigue chez les personnes qui travaillent debout (Speed et coll., 2018).',
      paragraphs: [
        'Un tapis à votre poste est l’un des changements les plus simples qui s’appuient sur des données. Dans une étude en laboratoire, des personnes sont restées debout quatre heures sur quatre tapis anti-fatigue différents et sur un sol dur. Trois des quatre tapis ont réduit l’inconfort par rapport au sol dur, mais les tapis différaient peu entre eux.',
        'Les données ne sont pas toutes positives. Dans une petite étude de 1994 portant sur 5\u00A0personnes, les tapis ne réduisaient la fatigue musculaire que dans le bas du dos, et seulement avec le plus souple des deux tapis. Les muscles des jambes ne montraient aucun changement. **Un tapis aide donc pour le confort, mais il ne remplace pas le mouvement et les étirements.**',
        'Au salon, placez le tapis là où vous vous tenez vraiment, derrière le fauteuil, et gardez-le bien à plat pour ne pas trébucher sur les bords. Les cheveux et l’eau peuvent rendre un tapis glissant\u00A0: balayez-le souvent.',
      ],
      cites: [CITE.speedCushioning, CITE.wiggermannMats, CITE.kimMats],
    },
    {
      h2: 'Faut-il utiliser un tabouret ou un siège assis-debout\u00A0?',
      paragraphs: [
        '**Aucune étude n’a testé si un tabouret réduit le mal aux pieds chez les coiffeurs.** S’asseoir soulage les pieds, et dans des études au bureau, alterner position assise et debout réduisait l’inconfort du bas du dos sans baisse du rendement (Karakolis et Callaghan, 2014). C’est la meilleure preuve indirecte pour intégrer un peu de position assise.',
        'Le tabouret a un revers. Une étude allemande sur la posture, résumée dans la revue de la portée de 2019, a trouvé que les coiffeurs qui utilisaient un tabouret à roulettes fléchissaient davantage le bas du dos et levaient plus souvent les mains au-dessus des épaules. Un tabouret trop bas peut remplacer le mal aux pieds par des douleurs au dos et aux épaules.',
        'Une approche pratique\u00A0: utilisez le tabouret pour les gestes où vous atteignez la zone sans vous étirer, comme les finitions à l’arrière de la tête ou les mèches dans les sections basses, et restez debout pour le reste. Réglez le tabouret assez haut pour que vos bras restent sous le niveau des épaules. Au bac à shampooing, asseyez-vous quand l’installation le permet.',
      ],
      cites: [CITE.karakolis, CITE.kozakHairdressing],
    },
    {
      h2: 'Quels exercices faire entre deux clients\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon donne la note A, sa meilleure note, aux étirements du mollet et du fascia plantaire, et la note B au renforcement musculaire (Koc et coll., 2023).',
      paragraphs: [
        'Ce sont les mêmes exercices que pour la [fasciite plantaire](/fr/fasciite-plantaire/) et la douleur liée à la station debout en général\u00A0: étirements du mollet, montées sur pointes et étirement du fascia plantaire. Ce qui change en coiffure, c’est le moment. **Vous avez de courts moments libres entre deux clients\u00A0: choisissez un ou deux exercices par moment plutôt qu’une séance complète.** Aucune étude n’a testé des pauses d’exercice pour les pieds des coiffeurs\u00A0: les doses viennent donc du guide principal sur la douleur au talon.',
        'Le mollet compte le plus. Dans une étude cas-témoins, un mollet raide multipliait le risque de fasciite plantaire par 23,3, plus que tout autre facteur. Si un exercice fait monter votre douleur à 6 sur 10 ou plus, arrêtez pour aujourd’hui.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Posez les mains sur un mur ou sur l’arrière de votre poste. Gardez la jambe arrière tendue, le talon arrière bien à plat au sol et les hanches vers l’avant. Deux maintiens par jambe prennent environ deux minutes\u00A0: cela tient dans un moment libre entre deux clients.',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position, talon arrière à plat, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, est celui qui vous maintient debout quand vous restez immobile, et il ne se relâche que genou plié.',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une silhouette en position de fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 note le renforcement B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Tenez-vous sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Tenez-vous à votre poste pour l’équilibre. En plus de renforcer, l’exercice fait pomper le mollet, qui renvoie le sang vers le haut de la jambe, ce que la station debout immobile ne fait pas.',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez bien droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une silhouette debout se hisse sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 note le renforcement B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Asseyez-vous sur votre tabouret, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Appuyer les mains sur les genoux ajoute de la résistance. Genou plié, l’exercice sollicite surtout le soléaire, presque sans charge sur le talon. Une bonne option quand vos talons sont déjà douloureux.',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une silhouette assise lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Bascules de cheville',
          evidence: { level: 'early', why: 'Cible la souplesse de la cheville, le principal facteur de risque de fasciite plantaire dans une étude cas-témoins de 2003. Pas testé seul dans un essai.' },
          dose: '2\u00A0séries de 15, chaque jambe',
          how: 'En fente, les mains contre un mur. Basculez le genou avant vers l’avant au-dessus des orteils en gardant le talon à plat. Allez lentement, environ deux secondes dans chaque sens. Cela fait bouger la cheville après une longue période debout sans bouger.',
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: le genou avance au-dessus des orteils, le talon reste à plat',
          alt: 'Une silhouette en position de fente bascule le genou avant au-dessus des orteils, la cheville mise en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note l’étirement du fascia plantaire A.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et posez un pied sur le genou opposé. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Faites-le pendant une pause où vous pouvez vous asseoir, et avant vos premiers pas le matin si c’est à ce moment-là que le talon fait le plus mal.',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez doucement les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une silhouette assise tire vers elle les orteils d’un pied, la voûte mise en évidence',
        },
      ],
      table: {
        caption: 'Quel exercice pour quel moment libre',
        head: ['Moment', 'Exercice', 'Dose'],
        rows: [
          ['Pendant la pose de la couleur', 'Étirement du mollet', '2\u00A0×\u00A030\u00A0s, chaque jambe'],
          ['Moment suivant', 'Étirement du soléaire', '2\u00A0×\u00A030\u00A0s, chaque jambe'],
          ['Client au bac à shampooing', 'Montées sur pointes', '3\u00A0×\u00A010, deux pieds'],
          ['Assis sur votre tabouret', 'Montées sur pointes assis', '3\u00A0×\u00A010, deux pieds'],
          ['Avant une longue coupe', 'Bascules de cheville', '2\u00A0×\u00A015, chaque jambe'],
          ['Pause déjeuner', 'Étirement du fascia plantaire', '2\u00A0×\u00A030\u00A0s, chaque pied'],
        ],
      },
      after: [
        'Les montées sur pointes, deux pieds, et les montées sur pointes assis sont le même travail de renforcement\u00A0: choisissez-en une par jour. Un renforcement un jour sur deux laisse au mollet le temps de récupérer.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Les bas de contention aident-ils les coiffeurs\u00A0?',
      keyFact: 'Dans un essai croisé randomisé chez 108\u00A0coiffeurs, des bas de 15 à 20\u00A0mmHg ont fait baisser le score de douleur et de sensation de gonflement des jambes de 12\u00A0% et le volume du bas de la jambe de 19\u00A0ml (Blazek et coll., 2013).',
      paragraphs: [
        '**Les bas de contention font partie des rares options testées chez les coiffeurs eux-mêmes.** Dans un essai croisé randomisé suisse, 108\u00A0coiffeurs ont porté des bas de contention légers (15 à 20\u00A0mmHg) pendant une période et aucun bas pendant une autre. Avec les bas, le score de douleur et de sensation de gonflement des jambes a baissé de 12\u00A0% en moyenne, et le volume du bas de la jambe de 19\u00A0ml. Les scores de sommeil et d’humeur se sont aussi améliorés.',
        'Une étude brésilienne plus petite, chez 38\u00A0coiffeurs, a mesuré la cheville. Sans bas, son tour passait de 21,1\u00A0cm le matin à 22,1\u00A0cm en fin de journée. Avec les bas, il était de 21,2\u00A0cm en fin de journée, à peu près comme le matin.',
        'Les effets étaient modestes, et les études mesuraient le gonflement et les symptômes des jambes, pas des affections du pied comme la fasciite plantaire. Un essai de 2023 chez des agents de sécurité a trouvé des résultats semblables pour de longs postes debout. **Les bas aident contre le gonflement et les jambes lourdes, mais le mollet et la voûte ont toujours besoin de leurs propres exercices.** Si vous avez un diabète, une mauvaise circulation ou des pieds engourdis, demandez l’avis d’un médecin avant de porter des bas de contention.',
      ],
      sourceNote:
        'Blazek et coll. (2013)\u00A0: essai croisé randomisé, 108\u00A0coiffeurs, bas de contention médicaux de 15 à 20\u00A0mmHg contre aucun bas, score de symptômes sur une échelle de 0 à 4 (baisse moyenne de 0,22). Agle et coll. (2020)\u00A0: 38\u00A0coiffeurs sans maladie veineuse, tour de cheville au point B, matin et soir, avec et sans bas.',
      cites: [CITE.blazekHosiery, CITE.agleHosiery, CITE.garcia],
    },
    {
      h2: 'Est-ce une fasciite plantaire, des varices ou autre chose\u00A0?',
      paragraphs: [
        'Une douleur diffuse et des jambes lourdes après une journée en salon sont fréquentes et passent en général pendant la nuit. Certains schémas orientent vers quelque chose de plus précis\u00A0:',
        {
          list: [
            'Une douleur vive au talon aux premiers pas du matin ou après être resté assis évoque une [fasciite plantaire](/fr/fasciite-plantaire/). La routine complète se trouve dans [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
            'Une brûlure ou une douleur sous l’avant du pied correspond à une [métatarsalgie](/fr/metatarsalgie-douleur-avant-pied/), fréquente avec des semelles fines ou des talons.',
            'Une voûte qui fait mal ou paraît plus basse le soir correspond à une [douleur de la voûte plantaire](/fr/douleur-voute-plantaire/).',
            'Des veines gonflées, sinueuses ou saillantes sur les jambes peuvent être des varices. Dans une enquête auprès de 182\u00A0coiffeurs à Taïwan, 24,2\u00A0% en avaient, et chez les plus de 45\u00A0ans, un grand nombre d’heures debout par mois était un facteur de risque (Chen et Guo, 2014).',
          ],
        },
        'Si vous ne savez pas d’où vient la douleur, un médecin peut vous le dire avec certitude. **Si la douleur change, s’étend ou ne se calme plus au repos, faites-la examiner avant de la solliciter avec des exercices.**',
      ],
      cites: [CITE.chenVaricose],
    },
  ],
  faq: [
    {
      q: 'Pourquoi les coiffeurs ont-ils si mal aux pieds\u00A0?',
      a: 'Les coiffeurs restent debout au même endroit pendant de longues périodes, ce qui charge le talon et la voûte sans la pompe du mollet qu’apporte la marche. Dans une étude chez 384\u00A0coiffeurs, 49,5\u00A0% signalaient des douleurs au genou ou au pied sur 12\u00A0mois, contre 38,3\u00A0% des personnes exerçant d’autres métiers. Se pencher en avant, les sols durs et les chaussures sans maintien ajoutent à la charge.',
      cites: [CITE.mishraHairdressers, CITE.waters],
    },
    {
      q: 'Quelles sont les meilleures chaussures pour un coiffeur qui a mal aux pieds\u00A0?',
      a: 'Aucune étude n’a comparé les types de chaussures chez les coiffeurs\u00A0: il n’existe donc pas de meilleure chaussure démontrée. Cherchez une semelle amortie, un peu de soutien de la voûte, un talon bas, de la place pour les orteils et une semelle antidérapante. Une revue de 2018 portant sur 10\u00A0études a trouvé des preuves modérées que des semelles amortissantes et des sols plus souples réduisent l’inconfort chez les personnes qui travaillent debout.',
      cites: [CITE.speedCushioning],
    },
    {
      q: 'Les tapis anti-fatigue sont-ils efficaces en salon de coiffure\u00A0?',
      a: 'Ils aident pour le confort. Dans une étude en laboratoire de quatre heures debout, trois tapis anti-fatigue sur quatre ont réduit l’inconfort par rapport à un sol dur. Une petite étude plus ancienne a trouvé que les tapis réduisaient la fatigue des muscles du dos, mais pas celle des jambes. Un tapis à votre poste vaut la peine, mais il ne remplace pas les étirements et le mouvement entre deux clients.',
      cites: [CITE.wiggermannMats, CITE.kimMats],
    },
    {
      q: 'Les coiffeurs doivent-ils porter des bas de contention\u00A0?',
      a: 'La contention légère fait partie des rares options testées chez les coiffeurs. Dans un essai croisé chez 108\u00A0coiffeurs, des bas de 15 à 20\u00A0mmHg ont fait baisser le score de douleur et de sensation de gonflement des jambes de 12\u00A0% et le volume du bas de la jambe de 19\u00A0ml. L’effet était modeste. Demandez d’abord l’avis d’un médecin si vous avez un diabète ou une mauvaise circulation.',
      cites: [CITE.blazekHosiery],
    },
    {
      q: 'Vaut-il mieux qu’un coiffeur s’assoie sur un tabouret\u00A0?',
      a: 'S’asseoir une partie de la journée soulage les pieds, mais aucune étude n’a testé les tabourets contre le mal aux pieds des coiffeurs. Une étude sur la posture a trouvé que les utilisateurs de tabouret fléchissaient davantage le bas du dos et levaient plus souvent les mains au-dessus des épaules. Réglez le tabouret assez haut pour garder les bras bas, et restez debout pour le reste.',
      cites: [CITE.kozakHairdressing, CITE.karakolis],
    },
    {
      q: 'Quels étirements faire entre deux clients\u00A0?',
      a: 'L’étirement du mollet et l’étirement du soléaire, 2\u00A0maintiens de 30\u00A0secondes sur chaque jambe, tiennent dans un moment libre entre deux clients. Les montées sur pointes, 3\u00A0séries de 10, relancent la pompe du mollet après la station debout immobile. La recommandation de 2023 sur la douleur au talon donne la note A, sa meilleure note, aux étirements du mollet et du fascia plantaire pour la fasciite plantaire.',
      cites: [CITE.guideline],
    },
    {
      q: 'La coiffure peut-elle provoquer une fasciite plantaire\u00A0?',
      a: 'Rester debout la plus grande partie de la journée de travail multipliait le risque de fasciite plantaire par 3,6 dans une étude cas-témoins portant sur 50\u00A0cas et 100\u00A0témoins, et un mollet raide le multipliait par 23,3. Aucune étude n’a mesuré la fasciite plantaire chez les coiffeurs en particulier, mais le travail en salon implique exactement ce type de station debout prolongée.',
      cites: [CITE.riddle],
    },
    {
      q: 'Combien de temps un coiffeur peut-il rester debout avant de faire une pause\u00A0?',
      a: 'Il n’existe pas de limite testée pour les coiffeurs. Dans une revue d’études en laboratoire, les symptômes au bas du dos devenaient cliniquement significatifs après environ 71\u00A0minutes debout en moyenne, et après 42\u00A0minutes chez les personnes sujettes aux douleurs en position debout. Couper les longues prestations par un court étirement, quelques montées sur pointes ou une minute sur un tabouret est une approche raisonnable.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une chute, une torsion ou un objet tombé sur le pied',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'le pied est engourdi, fourmille ou brûle',
      'une jambe a gonflé soudainement et elle est douloureuse, rouge ou chaude',
      'le pied est rouge ou chaud, ou vous avez de la fièvre ou ne vous sentez pas bien',
      'la douleur vous réveille la nuit ou est présente même au repos',
      'vous avez un diabète, une mauvaise circulation ou une sensibilité réduite des pieds',
      'la douleur ne s’est pas calmée après plusieurs semaines de meilleures chaussures, d’un tapis, de pauses et des exercices de cette page',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text:
      'Vous n’avez pas à décider vous-même de l’ordre, des doses ni du moment de passer à une version plus difficile. Walkito est une application d’exercices pour le talon et le pied qui construit votre plan semaine après semaine, et les séances sont assez courtes pour tenir avant le travail ou pendant une pause.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['standing', 'nurses', 'standingDesk'],
  crumb: 'Mal aux pieds en coiffure',
  campaign: 'guide-hairdressers-foot-pain-fr',
};
