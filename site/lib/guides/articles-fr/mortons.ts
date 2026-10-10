import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/mortons.ts` (2026-10-08), French (France) with
 * «vous». Figures, doses, grades and qualifiers are identical to the English
 * page. Citation notes live in the English file.
 */

export const MORTONS_FR: Guide = {
  lang: 'fr',
  page: 'mortons',
  mainSource: CITE.matthewsCochrane,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Névrome de Morton\u00A0: causes, chaussures, ce qui aide',
  description:
    'Névrome de Morton\u00A0: brûlure entre les orteils. Coussinet métatarsien, chaussures, infiltrations, exercices de confort et différence avec la métatarsalgie.',
  h1: 'Névrome de Morton\u00A0: ce que c’est, ce qui aide et ce que disent les études',
  lede:
    'Le névrome de Morton est un épaississement du nerf situé entre les têtes des métatarsiens, le plus souvent entre le troisième et le quatrième orteil. Il donne une brûlure, des fourmillements ou l’impression de marcher sur un caillou. Ce n’est pas une vraie tumeur. Changer de chaussures et utiliser un coussinet métatarsien sont les premières mesures habituelles, et une revue Cochrane de 2024 a montré que les preuves pour chaque intervention restent limitées dans l’ensemble. Cette page présente ce qui marche, ce qui ne marche pas, et la place de l’exercice.',
  intro: [
    'Le nerf passe entre les métatarsiens, sous la plante du pied. Quand les têtes des métatarsiens se serrent, le nerf peut s’irriter, gonfler, puis s’épaissir. Les chaussures étroites, les talons hauts et les activités à fort impact augmentent tous la compression. Les termes cliniques sont névralgie interdigitale ou névrome intermétatarsien. Névrome de Morton est le nom que la plupart des gens recherchent.',
  ],
  toc: true,
  takeaways: [
    'Une revue Cochrane de 2024 portant sur six essais randomisés et 373\u00A0participants a trouvé des preuves de certitude faible à modérée pour la plupart des interventions dans le névrome de Morton. Aucun traitement n’avait un appui solide de certitude élevée (Matthews et coll., 2024).',
    'Des chaussures plus larges à talon bas et un coussinet métatarsien placé juste derrière les têtes des métatarsiens sont la première mesure conservatrice la plus souvent conseillée. Environ 32\u00A0% des personnes prises en charge ainsi rapportent une nette amélioration.',
    'L’infiltration de corticoïde soulage la douleur à court terme, mais la revue Cochrane de 2024 a trouvé des preuves de faible certitude qu’ajouter un corticoïde à un anesthésique local pourrait faire peu ou pas de différence sur la douleur ou la fonction par rapport à l’anesthésique local seul.',
    'L’exercice ne vise pas directement le nerf. Des exercices des orteils et du pied peuvent aider au confort général de l’avant-pied et à la répartition de la charge, mais aucun essai n’a testé l’exercice spécifiquement dans le névrome de Morton.',
  ],
  sections: [
    {
      h2: 'Qu’est-ce que le névrome de Morton\u00A0?',
      figure: { id: 'mortons', caption: 'Le névrome de Morton est un nerf épaissi entre les têtes des métatarsiens, le plus souvent entre le troisième et le quatrième orteil.', alt: 'Les os du pied vus de dessus, avec des nerfs jaunes qui vont vers les orteils et un ovale gonflé sur le nerf entre le troisième et le quatrième orteil.' },
      paragraphs: [
        'Le névrome de Morton est un épaississement bénin du nerf digital plantaire commun, en général dans le troisième espace intermétatarsien (entre le troisième et le quatrième orteil). Plus rarement, il se trouve dans le deuxième espace. **Ce n’est pas un cancer, ni une excroissance sur l’os.**',
        'Le nerf passe sous le ligament métatarsien transverse, une bande de tissu qui maintient ensemble les têtes des métatarsiens. Quand les têtes se serrent, le nerf est pincé. Avec le temps, la gaine du nerf s’épaissit, et le nerf lui-même peut grossir. Il en résulte une douleur, une brûlure, des fourmillements ou un engourdissement entre les orteils, qui irradient dans les orteils concernés.',
        'Il est plus fréquent chez les femmes, en partie à cause du choix des chaussures. Les chaussures à bout étroit et les talons hauts serrent les têtes des métatarsiens et augmentent la pression sur le nerf. La course, les sports de raquette et de salle, et les métiers où l’on reste longtemps debout dans des chaussures serrées sont aussi des facteurs de risque.',
      ],
    },
    {
      h2: 'Quelle différence entre névrome de Morton et métatarsalgie\u00A0?',
      paragraphs: [
        'La métatarsalgie est un terme plus large qui désigne une douleur autour des têtes des métatarsiens, les bosses osseuses sous l’[avant-pied](/fr/metatarsalgie-douleur-avant-pied/). Le névrome de Morton est une cause précise de douleur de l’avant-pied, qui entre dans ce cadre plus large de la métatarsalgie.',
        'La différence clé, c’est ce qui fait mal et comment\u00A0:',
        {
          list: [
            '**La métatarsalgie** est en général une douleur, sourde à vive, sous l’avant-pied, souvent sous les têtes du deuxième et du troisième métatarsien.',
            '**Le névrome de Morton** donne une brûlure, des fourmillements ou un engourdissement entre les orteils, le plus souvent le troisième et le quatrième. Serrer l’avant-pied d’un côté à l’autre, le test du clic de Mulder, peut reproduire les symptômes du névrome et produit parfois un clic audible quand le nerf ressaute entre les métatarsiens.',
          ],
        },
        'La distinction compte, car les approches diffèrent. La métatarsalgie répond à la décharge des têtes des métatarsiens et au renforcement des orteils. Le névrome de Morton répond à la décompression du nerf, ce qui veut dire des chaussures plus larges, des coussinets, et parfois des infiltrations ou une chirurgie.',
        'Les exercices aident au confort de l’avant-pied dans les deux cas, mais aucun des deux n’a de preuves solides issues d’essais sur l’exercice. Voir [douleur sous l’avant-pied](/fr/metatarsalgie-douleur-avant-pied/) pour le tableau plus large de la métatarsalgie.',
      ],
    },
    {
      h2: 'Les coussinets métatarsiens et le changement de chaussures aident-ils\u00A0?',
      keyFact: 'En combinant deux études dans une revue de 2019, des chaussures plus larges et un coussinet métatarsien ont aidé environ 32\u00A0% des personnes, avec un suivi moyen de quatre mois et demi (Matthews et coll., 2019).',
      paragraphs: [
        'Des chaussures plus larges à talon bas et un coussinet métatarsien sont la première mesure la plus souvent conseillée dans le névrome de Morton. Le coussinet se place juste derrière les têtes des métatarsiens, pas directement dessous, pour soulever le corps des métatarsiens et les écarter, ce qui réduit la compression sur le nerf.',
        'Des chaussures bien ajustées avec un avant large, un talon bas et un coussinet métatarsien ont été évaluées dans deux études incluses dans une revue systématique de 2019. En combinant ces deux études, chaussures et coussinet ont réussi chez environ 32\u00A0% des personnes, avec un suivi de quatre mois et demi en moyenne. Cependant, un essai randomisé comparant chaussures et coussinet à une infiltration de corticoïde a montré que le groupe infiltration avait six fois plus de chances de succès à six mois.',
        'En pratique\u00A0: **changer de chaussures et utiliser un coussinet comporte peu de risques et vaut la peine d’être essayé en premier.** Cela marche chez certaines personnes et pas chez d’autres. Si rien n’a aidé après quatre à six semaines, l’étape suivante est en général une consultation pour discuter d’une infiltration ou d’une imagerie complémentaire.',
        'L’emplacement compte. Un coussinet trop en avant, directement sous la tête du métatarsien, peut augmenter la pression au lieu de la soulager. Les coussinets métatarsiens autocollants de pharmacie sont assez bon marché pour être essayés, mais trouver la bonne position demande quelques essais. Un podologue peut réaliser une orthèse sur mesure si les coussinets du commerce ne marchent pas.',
      ],
      cites: [CITE.matthewsSR],
    },
    {
      h2: 'Que disent les études sur les infiltrations\u00A0?',
      keyFact: 'Dans la revue Cochrane de 2024, l’infiltration de corticoïde guidée par échographie améliorait probablement davantage la douleur que l’infiltration sans guidage, avec des preuves de certitude modérée à 2, 6 et 12\u00A0mois (Matthews et coll., 2024).',
      paragraphs: [
        'L’infiltration de corticoïde est l’approche invasive non chirurgicale la plus étudiée dans le névrome de Morton.',
        'La revue Cochrane de 2024 comprenait six essais randomisés et 373\u00A0participants. Elle a trouvé des preuves de faible certitude qu’ajouter un corticoïde à un anesthésique local pourrait faire peu ou pas de différence sur la douleur ou la fonction à trois à six mois, par rapport à une infiltration d’anesthésique local seul. Les auteurs Cochrane ont noté que l’ajout d’un corticoïde pourrait augmenter les effets indésirables, dont l’atrophie du coussinet graisseux et des modifications de la peau.',
        'L’infiltration guidée par échographie améliore probablement la douleur par rapport à l’infiltration sans guidage, avec des différences cliniquement significatives à 2, 6 et 12\u00A0mois dans les études incluses. Les preuves ont été jugées de certitude modérée.',
        'D’autres types d’infiltration ont été étudiés, dont\u00A0:',
        {
          list: [
            'Les infiltrations sclérosantes à l’alcool.',
            'L’ablation par radiofréquence.',
            'La cryothérapie.',
          ],
        },
        'La revue systématique de 2019 a montré que l’infiltration de corticoïde et la manipulation avaient les preuves les plus solides pour réduire la douleur à court terme, mais elle demandait davantage d’essais randomisés de bonne qualité. La revue Cochrane de 2024 a conclu la même chose\u00A0: après 20\u00A0ans de recherche supplémentaire depuis la première revue Cochrane de 2004, **il n’y a toujours pas assez de preuves de bonne qualité pour conclure fermement sur une intervention en particulier.**',
        'Cela ne veut pas dire que les infiltrations sont inutiles. Cela veut dire que les preuves ne sont pas assez solides pour déclarer une approche nettement meilleure qu’une autre. Un professionnel de santé peut discuter des options, des risques et de ce qu’il faut en attendre. L’infiltration de corticoïde soulage bien à court terme beaucoup de personnes, mais des infiltrations répétées comportent des risques pour les tissus voisins.',
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
    {
      h2: 'Quand parle-t-on de chirurgie\u00A0?',
      paragraphs: [
        'La chirurgie est en général envisagée quand la prise en charge conservatrice, c’est-à-dire changement de chaussures, coussinets et une ou deux séries d’infiltrations, n’a pas apporté de soulagement durable. L’intervention la plus courante est la neurectomie, l’ablation chirurgicale du segment de nerf épaissi. Elle est efficace chez beaucoup de personnes, mais laisse un engourdissement permanent entre les orteils concernés, car le nerf qui portait la sensibilité de cette zone a été retiré.',
        'D’autres options chirurgicales sont la décompression du nerf (libérer le ligament métatarsien transverse sans retirer le nerf) et l’ostéotomie métatarsienne (remodeler l’os pour donner plus de place au nerf). La revue Cochrane de 2024 a trouvé des preuves de faible certitude pour les comparaisons chirurgicales, sans vainqueur net entre la neurectomie par incision plantaire et par incision dorsale pour la satisfaction des patients ou les effets indésirables.',
        '**La chirurgie n’est pas une approche de première intention.** La plupart des professionnels de santé conseillent un essai structuré de prise en charge conservatrice pendant plusieurs mois avant de l’envisager. Si vous en êtes là, un spécialiste du pied et de la cheville peut vous présenter les options chirurgicales et ce qu’il faut attendre de la récupération.',
      ],
      cites: [CITE.matthewsCochrane],
    },
    {
      h2: 'Les exercices aident-ils le névrome de Morton\u00A0?',
      paragraphs: [
        'La réponse honnête est qu’**aucun essai n’a testé l’exercice dans le névrome de Morton.** L’exercice n’agit pas directement sur le nerf. Il ne peut pas réduire un névrome ni décomprimer l’espace intermétatarsien comme le font une chaussure plus large ou un coussinet métatarsien.',
        'Ce que l’exercice peut faire, c’est améliorer le confort général de l’avant-pied et la répartition de la charge. Renforcer les muscles propres au pied, les petits muscles situés entre et sous les métatarsiens, peut aider les têtes des métatarsiens à rester plus écartées pendant la marche. L’étirement du mollet réduit la surcharge de l’avant-pied en améliorant la flexion de la cheville vers le haut.',
        'Ce sont des exercices de confort et de gestion de la charge, pas des interventions propres au névrome. Nous le disons clairement, car exagérer le rôle de l’exercice ici ne serait pas honnête.',
        'Si votre douleur de l’avant-pied dépasse le névrome, c’est-à-dire si vous avez aussi une métatarsalgie plus générale ou un mollet raide, les exercices de la page [douleur sous l’avant-pied](/fr/metatarsalgie-douleur-avant-pied/) vous concernent. Les exercices ci-dessous viennent du même ensemble, mais sont repris ici pour plus de commodité.',
      ],
      exercises: [
        {
          name: 'Écarter les orteils',
          dose: '3\u00A0séries de 10\u00A0écartements',
          how: 'Asseyez-vous ou tenez-vous debout, le pied à plat. Écartez les cinq orteils autant que possible, tenez 2 à 3\u00A0secondes, puis relâchez. Cet exercice fait travailler les petits muscles entre les métatarsiens et peut aider les têtes des métatarsiens à rester plus écartées.',
          feel: 'Un étirement entre les orteils et un léger effort sur le dessus du pied',
          stop: 'Une douleur vive ou une brûlure entre les orteils pendant l’exercice',
          evidence: { level: 'early', why: 'Pas d’essai dans le névrome de Morton. L’exercice vise les muscles propres au pied qui aident à écarter les têtes des métatarsiens.' },
          media: 'toe_spread',
          caption: 'Écarter les orteils\u00A0: écartez les cinq orteils, tenez, relâchez',
          alt: 'Un pied aux cinq orteils bien écartés, les muscles entre les métatarsiens mis en évidence',
        },
        {
          name: 'Ramasser la serviette (flexion des orteils)',
          dose: '3\u00A0séries de 10, chaque pied',
          how: 'Asseyez-vous, le pied à plat sur une serviette. Recroquevillez les orteils pour ramener la serviette vers vous. Relâchez et recommencez. Cet exercice renforce les fléchisseurs des orteils, qui aident à répartir la charge de l’avant-pied au moment de la poussée.',
          feel: 'Les muscles sous la voûte et les orteils au travail',
          stop: 'Une douleur entre les orteils ou sous l’avant-pied',
          evidence: { level: 'early', why: 'Pas d’essai dans le névrome. Dans une étude sur 41\u00A0personnes avec une métatarsalgie, un programme d’exercices des orteils semblable a amélioré la douleur (Amaha 2020), mais sans groupe témoin.' },
          media: 'towel_scrunch',
          caption: 'Ramasser la serviette\u00A0: recroquevillez les orteils pour ramener la serviette vers vous',
          alt: 'Un pied sur une serviette, les orteils recroquevillés pour la froisser, les petits muscles du pied mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant. Un mollet raide reporte le poids vers l’avant, sur l’avant-pied, ce qui augmente la compression sur le nerf.',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'Une douleur dans le tendon d’Achille',
          evidence: { level: 'strong', why: 'Les étirements du mollet ont la note A d’une recommandation pour des problèmes voisins. Pas testés spécifiquement dans le névrome, mais le mécanisme de surcharge de l’avant-pied est reconnu.' },
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Prenez la même position que pour l’étirement genou tendu, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du tendon d’Achille. Cet étirement vise le soléaire, le muscle profond du mollet.',
          feel: 'Un étirement plus bas dans le mollet, près du talon',
          stop: 'Une douleur dans le tendon d’Achille',
          evidence: { level: 'strong', why: 'Même note A de la recommandation pour les étirements du mollet. Vise le soléaire, qui contribue lui aussi à la raideur de la cheville et à la charge sur l’avant-pied.' },
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à sentir l’étirement plus bas',
          alt: 'Une personne en fente, les genoux pliés, le soléaire mis en évidence',
        },
      ],
      cites: [CITE.amaha, CITE.guideline],
    },
    {
      h2: 'Ce que les études disent et ne disent pas',
      paragraphs: [
        'La revue Cochrane de 2024 est la synthèse la plus rigoureuse disponible. Elle comprenait six essais randomisés et 373\u00A0participants. Ses conclusions\u00A0: les preuves sont de certitude faible à modérée pour la plupart des interventions dans le névrome de Morton, et aucun traitement n’a un appui solide de certitude élevée. Après 20\u00A0ans de recherche supplémentaire depuis la revue Cochrane d’origine de 2004, les auteurs sont arrivés à la même conclusion de base.',
        'Cela ne veut pas dire que rien ne marche\u00A0:',
        {
          list: [
            'Changer de chaussures et utiliser un coussinet métatarsien aide environ 3\u00A0personnes sur 10.',
            'L’infiltration de corticoïde guidée par échographie améliore probablement la douleur par rapport à l’infiltration sans guidage.',
            'La neurectomie soulage beaucoup de personnes, au prix d’un engourdissement permanent.',
          ],
        },
        '**Ce qui manque, c’est un traitement de première intention clair, appuyé par des preuves solides.**',
        'Pour l’exercice, le manque est encore plus grand. Aucun essai n’a testé l’exercice dans le névrome de Morton. Les exercices de cette page sont des mesures de confort et de gestion de la charge, pas des interventions propres au névrome. Si l’exercice fait partie de votre plan, il doit venir en plus du changement de chaussures et des conseils d’un professionnel de santé, pas les remplacer.',
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
  ],
  faq: [
    {
      q: 'Quels sont les symptômes du névrome de Morton\u00A0?',
      a: 'Le névrome de Morton donne en général une brûlure, des fourmillements ou un engourdissement entre le troisième et le quatrième orteil, ou l’impression de marcher sur un caillou ou sur une chaussette qui fait un pli. La douleur s’aggrave dans des chaussures serrées et à la marche. Retirer la chaussure et masser l’avant-pied soulage souvent pour un moment. Contrairement à la métatarsalgie en général, la douleur ressemble à une douleur de nerf, pas à une douleur sourde.',
    },
    {
      q: 'Quelle différence entre névrome de Morton et métatarsalgie\u00A0?',
      a: 'La métatarsalgie est un terme large pour une douleur sous l’avant-pied. Le névrome de Morton est une cause précise dans ce cadre. La métatarsalgie tend à être une douleur, sourde à vive, sous les têtes des métatarsiens. Le névrome de Morton donne une brûlure ou des fourmillements entre les orteils, en général le troisième et le quatrième, et peut causer un engourdissement. Un professionnel de santé peut les distinguer par l’examen clinique.',
    },
    {
      q: 'Les coussinets métatarsiens marchent-ils pour un névrome de Morton\u00A0?',
      cites: [CITE.matthewsSR],
      a: 'Des coussinets métatarsiens placés juste derrière les têtes des métatarsiens écartent les os et réduisent la compression sur le nerf. Environ 32\u00A0% des personnes prises en charge de façon conservatrice avec des chaussures plus larges et un coussinet rapportent une nette amélioration (Matthews 2019). Le coussinet doit se trouver derrière les têtes des métatarsiens, pas dessous. Placé trop en avant, il peut augmenter la douleur.',
    },
    {
      q: 'Les exercices aident-ils le névrome de Morton\u00A0?',
      a: 'Aucun essai n’a testé l’exercice dans le névrome de Morton. L’exercice n’agit pas directement sur le nerf. Écarter les orteils et renforcer les muscles propres au pied peut aider à répartir plus uniformément la charge de l’avant-pied, et l’étirement du mollet réduit la surcharge de l’avant-pied due à un mollet raide. Ce sont des mesures de confort, pas des interventions propres au névrome. Le changement de chaussures et les coussinets passent en premier.',
    },
    {
      q: 'Le névrome de Morton peut-il partir tout seul\u00A0?',
      a: 'Certaines personnes constatent que passer à des chaussures plus larges à talon bas suffit à calmer les symptômes en quelques semaines ou quelques mois. Chez d’autres, l’épaississement du nerf persiste et les symptômes reviennent dès que l’avant-pied est comprimé. Le problème lui-même ne s’inverse pas, mais les symptômes peuvent être gérés. Si les mesures conservatrices n’ont pas aidé après plusieurs semaines, un professionnel de santé peut discuter d’une infiltration ou d’autres options.',
    },
    {
      q: 'Les infiltrations de corticoïde marchent-elles pour le névrome de Morton\u00A0?',
      cites: [CITE.matthewsCochrane],
      a: 'Une revue Cochrane de 2024 portant sur six essais randomisés a trouvé des preuves de faible certitude qu’ajouter un corticoïde à un anesthésique local pourrait ne pas améliorer la douleur ou la fonction par rapport à l’anesthésique local seul (Matthews 2024). L’infiltration guidée par échographie marche probablement mieux que l’infiltration sans guidage. Le corticoïde soulage à court terme beaucoup de personnes, mais des infiltrations répétées comportent des risques, dont l’atrophie du coussinet graisseux.',
    },
    {
      q: 'Quand faut-il opérer un névrome de Morton\u00A0?',
      cites: [CITE.matthewsCochrane],
      a: 'La chirurgie est en général envisagée quand plusieurs mois de prise en charge conservatrice, avec changement de chaussures, coussinets et une ou deux séries d’infiltrations, n’ont pas apporté de soulagement durable. La neurectomie, l’ablation du segment de nerf épaissi, est l’intervention la plus courante. Elle soulage la douleur chez beaucoup de personnes, mais laisse un engourdissement permanent entre les orteils concernés.',
    },
    {
      q: 'Qu’est-ce qui déclenche un névrome de Morton\u00A0?',
      a: 'Le névrome de Morton est déclenché par tout ce qui comprime le nerf entre les métatarsiens. Les déclencheurs fréquents sont les chaussures étroites ou pointues, les talons hauts, les activités à impacts répétés comme la course, et des formes de pied comme les pieds plats ou les pieds creux, qui reportent plus de pression vers l’avant. Il est plus fréquent chez les femmes et à l’âge moyen.',
    },
    {
      q: 'Qu’est-ce que le test de Mulder pour le névrome de Morton\u00A0?',
      a: 'Le test de compression, parfois appelé clic de Mulder, est un examen clinique qu’un professionnel de santé utilise pour aider à diagnostiquer un névrome de Morton. Il serre l’avant-pied d’un côté à l’autre en appuyant entre les têtes des métatarsiens. Un clic ou un ressaut perceptible, avec une brûlure reproduite, va dans le sens du diagnostic, mais il faut tout de même écarter d’autres causes.',
    },
    {
      q: 'La marche est-elle bonne pour un névrome du pied\u00A0?',
      a: 'La marche elle-même n’abîme pas le nerf, mais des chaussures serrées ou à semelle fine peuvent augmenter la compression de l’avant-pied pendant la marche et aggraver les symptômes. De courtes marches dans des chaussures larges et amortissantes ne posent en général pas de problème. Les longues marches sur sol dur ou dans des chaussures étroites augmentent souvent la brûlure ou les fourmillements entre les orteils. Si la marche déclenche régulièrement les symptômes, changer de chaussures aide en général davantage que réduire l’activité.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur est constante et présente au repos, pas seulement à la marche ou en chaussures',
      'un engourdissement ne disparaît pas entre les épisodes',
      'la douleur s’est étendue au-delà du troisième et du quatrième orteil, à une plus grande partie de l’avant-pied',
      'il y a un gonflement visible sur le dessus du pied, ce qui évoque autre chose qu’un névrome',
      'les symptômes ne se sont pas améliorés après deux à trois semaines de chaussures plus larges et de coussinet métatarsien',
      'vous avez aussi une brûlure ou des fourmillements dans les deux pieds ou plus haut dans la jambe, ce qui peut évoquer une neuropathie périphérique plutôt qu’un névrome localisé',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
      'la douleur a suivi une blessure ou un choc brutal sur l’avant-pied',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est conçu autour de la fasciite plantaire et des pieds plats, pas du névrome de Morton. Mais les exercices de l’avant-pied de l’application, dont écarter les orteils et les étirements du mollet, visent la même répartition de la charge de l’avant-pied qui contribue aux symptômes du névrome. Signaler l’avant-pied comme douloureux sur la carte de la douleur lors du bilan permet à l’application d’inclure l’écartement des orteils et l’étirement du fascia plantaire dans votre séance.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito ne diagnostique pas le névrome de Morton. Les exercices qu’il propose sont des mesures de confort et de charge. Des chaussures plus larges, des coussinets métatarsiens et un avis clinique passent en premier.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Névrome de Morton',
  campaign: 'guide-mortons-fr',
};
