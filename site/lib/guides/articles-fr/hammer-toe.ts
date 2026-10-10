import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/hammer-toe.ts` (2026-10-08), French (France) with
 * «vous». Figures, doses, grades and qualifiers are identical to the English
 * page. Citation notes live in the English file.
 */

export const HAMMER_TOE_FR: Guide = {
  lang: 'fr',
  page: 'hammerToe',
  mainSource: CITE.malhotra,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Orteil en marteau\u00A0: exercices, souple ou rigide',
  description:
    'Exercices pour orteil en marteau souple, différence avec l’orteil en griffe, conseils de chaussures et quand une chirurgie peut être discutée.',
  h1: 'Exercices pour orteil en marteau\u00A0: ce qu’ils peuvent faire et où en sont les preuves',
  lede:
    'Un orteil en marteau est un petit orteil qui se plie vers le bas à l’articulation du milieu. S’il se redresse encore quand vous appuyez dessus, il est souple, et des exercices, des chaussures plus larges et des protections peuvent aider à le garder ainsi. S’il est rigide, l’exercice ne changera pas sa position, et le but devient de gérer la pression et de prévenir les problèmes de peau. Cette page présente la différence, les exercices souvent conseillés, et à quel point les preuves sont minces.',
  toc: true,
  takeaways: [
    'Un orteil en marteau souple peut être redressé à la main et peut répondre à des exercices qui entretiennent la mobilité et renforcent les muscles des orteils. Un orteil en marteau rigide est figé dans sa position et ne changera pas avec l’exercice.',
    'Aucun essai contrôlé randomisé n’a testé un programme d’exercices pour l’orteil en marteau en particulier. Les exercices conseillés sur cette page reposent sur la logique biomécanique du renforcement des muscles propres au pied, pas sur des preuves directes issues d’essais.',
    'Des chaussures avec un avant large et haut sont la mesure conservatrice la plus régulièrement conseillée pour l’orteil en marteau. Elles réduisent les frottements, la pression sur l’articulation pliée et le risque de cors et de durillons.',
    'La chirurgie est envisagée quand la douleur et les problèmes de peau persistent malgré les soins conservateurs et que la déformation est rigide. La décision dépend des symptômes, pas de l’aspect seul.',
  ],
  sections: [
    {
      h2: 'Qu’est-ce qu’un orteil en marteau\u00A0?',
      paragraphs: [
        'Un orteil en marteau est une déformation en flexion de l’articulation interphalangienne proximale (l’articulation du milieu) de l’un des petits orteils, le plus souvent le deuxième. L’orteil se plie vers le bas à cette articulation, tandis que le bout peut pointer vers le bas ou légèrement vers le haut. C’est l’une des déformations de l’avant-pied les plus fréquentes.',
        'La déformation vient d’un déséquilibre entre les muscles qui plient et ceux qui étendent l’orteil. Les muscles extrinsèques, les longs fléchisseurs et extenseurs qui vont de la jambe au pied, prennent le dessus sur les petits muscles intrinsèques situés dans le pied. Quand les intrinsèques s’affaiblissent, les fléchisseurs tirent l’articulation du milieu vers le bas, et les extenseurs tirent la base de l’orteil vers le haut au niveau de l’articulation métatarso-phalangienne.',
        'Les facteurs fréquents sont\u00A0:',
        {
          list: [
            'Les chaussures qui serrent les orteils (avant étroit, talons hauts).',
            'Un deuxième orteil plus long que le gros orteil.',
            'Des problèmes comme l’hallux valgus (oignon), où le gros orteil pousse le deuxième orteil hors de sa place.',
          ],
        },
        'Des maladies neuromusculaires peuvent aussi en être la cause.',
      ],
      cites: [CITE.malhotra],
    },
    {
      h2: 'Quelle différence entre orteil en marteau, orteil en griffe et orteil en maillet\u00A0?',
      paragraphs: [
        'Les trois noms décrivent quelles articulations sont pliées\u00A0:',
        {
          list: [
            'Un orteil en marteau se plie à l’articulation du milieu (articulation interphalangienne proximale).',
            'Un orteil en maillet se plie à la dernière articulation (articulation interphalangienne distale), près du bout de l’orteil.',
            'Un orteil en griffe se plie à la fois à l’articulation du milieu et à la dernière, tandis que la base de l’orteil (articulation métatarso-phalangienne) se relève.',
          ],
        },
        'Les orteils en griffe tendent à être plus sévères, touchent souvent plusieurs orteils des deux pieds et sont plus souvent liés à des maladies neuromusculaires. Les orteils en marteau touchent en général un seul orteil, le plus souvent le deuxième, et sont plus souvent liés aux chaussures et à la forme du pied.',
        'En pratique, les traitements se recoupent. Des chaussures plus larges, des protections et des exercices qui visent les muscles propres au pied valent pour les trois. La distinction compte surtout quand une chirurgie est envisagée, car la technique dépend des articulations touchées.',
      ],
      cites: [CITE.malhotra],
    },
    {
      h2: 'Quelle différence entre orteil en marteau souple et rigide\u00A0?',
      keyFact: 'Une étude de 2022 sur 20\u00A0personnes âgées avec un orteil en marteau ou en griffe a montré que des orthèses d’orteil en silicone moulées sur mesure réduisaient nettement la pression maximale au bout du deuxième orteil, dans les cas souples comme rigides (Formosa et coll., 2022).',
      paragraphs: [
        'Un orteil en marteau souple garde du mouvement à l’articulation du milieu. Vous pouvez le redresser à la main. Les muscles et les tendons sont tendus, mais l’articulation n’a pas développé de rétraction fixée. **C’est le stade où les mesures conservatrices ont le plus à offrir.**',
        'Un orteil en marteau rigide a une rétraction fixée à l’articulation du milieu. L’articulation ne se redresse plus. À ce stade, l’exercice ne peut pas changer la position. Les objectifs deviennent de réduire les frottements (chaussures plus larges, protections d’orteil) et de prévenir cors, durillons et lésions de la peau.',
        'Une étude quasi expérimentale de 2022 sur 20\u00A0personnes âgées avec un orteil en marteau ou en griffe a montré que des orthèses d’orteil en silicone moulées sur mesure réduisaient nettement la pression maximale au bout du deuxième orteil, dans les cas souples comme rigides. À l’articulation métatarso-phalangienne, la baisse de pression n’était significative que dans le groupe rigide.',
      ],
      cites: [CITE.formosa],
    },
    {
      h2: 'L’exercice aide-t-il l’orteil en marteau\u00A0?',
      paragraphs: [
        'La réponse honnête est qu’**il n’existe aucun essai contrôlé randomisé testant des exercices spécifiquement pour l’orteil en marteau.** Les exercices souvent conseillés, comme ramasser la serviette, écarter les orteils et les étirements à la main, reposent sur l’idée que renforcer les muscles propres au pied et entretenir la souplesse de l’articulation peut aider à éviter qu’une déformation souple devienne rigide.',
        'Cette logique est raisonnable. La déformation vient d’un déséquilibre musculaire\u00A0: des intrinsèques faibles et des extrinsèques relativement plus forts. Des exercices qui visent les intrinsèques peuvent rétablir une partie de cet équilibre. Mais sans essais directs, on ne sait pas quelle différence ils font ni s’ils peuvent vraiment empêcher l’évolution.',
        'Ce que l’on sait, grâce à des études sur d’autres problèmes de l’avant-pied, c’est que des exercices des muscles propres au pied comme le pied court, écarter les orteils et ramasser la serviette activent les bons muscles. Une étude IRM de Gooding et coll. (2016) a confirmé que l’exercice du pied court et l’exercice d’écartement des orteils activent de façon sélective les muscles propres au pied. Reste à savoir si cette activation se traduit par de meilleurs résultats pour l’orteil en marteau, ce qui n’a pas été testé.',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Quels exercices pour l’orteil en marteau\u00A0?',
      paragraphs: [
        'Ces exercices visent les muscles propres au pied et cherchent à garder la souplesse d’un orteil encore souple. Si votre orteil en marteau est rigide, ces exercices ne changeront pas sa position, mais des étirements doux peuvent aider contre la raideur et la gêne. Tous les niveaux de preuve ci-dessous sont honnêtes\u00A0: aucun exercice de cette liste n’a été testé dans un essai sur l’orteil en marteau.',
      ],
      exercises: [
        {
          name: 'Ramasser la serviette',
          dose: 'Walkito commence à 3\u00A0séries de 8, chaque pied',
          how: 'Asseyez-vous, le pied à plat sur une serviette. Recroquevillez les orteils pour ramener la serviette vers vous, puis relâchez. Cet exercice fait travailler les fléchisseurs intrinsèques des orteils, les muscles qui sont dominés dans l’orteil en marteau. Les renforcer peut aider à rééquilibrer les forces qui s’exercent sur les articulations de l’orteil.',
          feel: 'Les muscles sous la voûte et les orteils au travail',
          stop: 'Une douleur à l’articulation pliée ou au bout de l’orteil',
          evidence: {
            level: 'early',
            why: 'Pas d’essai dans l’orteil en marteau. Souvent conseillé dans les recommandations cliniques pour les déformations des petits orteils, sur la base d’un raisonnement biomécanique.',
          },
          media: 'towel_scrunch',
          caption: 'Ramasser la serviette\u00A0: recroquevillez les orteils pour ramener la serviette',
          alt: 'Un pied sur une serviette, les orteils recroquevillés, qui ramène la serviette vers le talon',
        },
        {
          name: 'Écarter les orteils',
          dose: 'Walkito commence à 3\u00A0séries de 10, en tenant chaque écartement 5\u00A0secondes',
          how: 'Asseyez-vous ou tenez-vous debout, le pied à plat. Écartez les cinq orteils autant que possible, tenez, puis relâchez. Cet exercice fait travailler les muscles entre les métatarsiens et l’abducteur de l’hallux le long de l’intérieur de la voûte.',
          feel: 'Un étirement entre les orteils et un effort sur le dessus du pied',
          stop: 'Une douleur à l’articulation de l’orteil en marteau',
          evidence: {
            level: 'early',
            why: 'Pas d’essai dans l’orteil en marteau. Une étude IRM a confirmé que l’exercice d’écartement des orteils active les muscles propres au pied, ceux qui sont affaiblis dans l’orteil en marteau.',
          },
          media: 'toe_spread',
          caption: 'Écarter les orteils\u00A0: écartez les cinq orteils, tenez, relâchez',
          alt: 'Un pied aux cinq orteils bien écartés',
        },
        {
          name: 'Lever le gros orteil (yoga des orteils)',
          dose: 'Walkito commence à 3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          how: 'Asseyez-vous ou tenez-vous debout, le pied à plat. Levez seulement le gros orteil, les quatre autres orteils restent au sol. Puis inversez\u00A0: appuyez le gros orteil au sol et levez les quatre autres. Cet exercice entraîne le contrôle indépendant des orteils, souvent perdu chez les personnes qui ont un orteil en marteau.',
          feel: 'Une difficulté de coordination au début, puis un contrôle qui vient peu à peu',
          stop: 'Une douleur à l’articulation de l’orteil en marteau',
          evidence: {
            level: 'early',
            why: 'Pas d’essai dans l’orteil en marteau. Repose sur le principe qu’un contrôle indépendant des orteils aide à rééquilibrer les forces des fléchisseurs et des extenseurs sur les articulations de l’orteil.',
          },
          media: 'big_toe_lift',
          caption: 'Lever le gros orteil\u00A0: le gros orteil monte, les autres restent à plat',
          alt: 'Un pied au gros orteil levé, les quatre autres orteils à plat au sol',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Les chaussures font-elles une différence\u00A0?',
      paragraphs: [
        '**Les chaussures sont l’approche conservatrice la plus conseillée pour l’orteil en marteau.** Une revue sur la prise en charge des déformations des petits orteils dans EFORT Open Reviews (Malhotra et coll., 2016) plaçait l’adaptation des chaussures en tête des traitements conservateurs\u00A0:',
        {
          list: [
            'Un avant large pour laisser de la place aux orteils.',
            'Un avant haut pour éviter les frottements sur l’articulation pliée.',
            'Éviter les talons hauts.',
          ],
        },
        'Les chaussures étroites serrent les orteils entre eux et poussent l’articulation pliée contre le dessus de la chaussure, ce qui cause cors et durillons. Les talons hauts font glisser le pied vers l’avant et tassent les orteils au bout de la chaussure. Changer de chaussures ne redressera pas un orteil en marteau rigide, mais cela réduit les frottements et la pression de chaque jour qui causent l’essentiel de la douleur.',
        'Les protections d’orteil, les manchons en gel et les orthèses en silicone peuvent amortir l’articulation pliée et répartir la pression au bout de l’orteil. L’étude de Formosa 2022 a montré que des orthèses d’orteil en silicone moulées réduisaient la pression maximale au bout du deuxième orteil, dans les déformations souples comme rigides.',
      ],
      cites: [CITE.malhotra, CITE.formosa],
    },
    {
      h2: 'Peut-on corriger un orteil en marteau sans chirurgie\u00A0?',
      paragraphs: [
        'Si l’orteil en marteau est encore souple, les mesures conservatrices, dont les exercices, les étirements, des chaussures plus larges et le strapping de l’orteil, peuvent l’empêcher d’évoluer et améliorer le confort. Attacher l’orteil atteint à son voisin avec du ruban adhésif peut le maintenir doucement dans une position plus neutre au fil de la journée. **Mais aucune de ces mesures n’a montré qu’elle corrige la déformation de façon permanente.**',
        'Une fois qu’un orteil en marteau est devenu rigide, l’articulation est rétractée et ne peut plus être redressée. À ce stade, l’exercice et les étirements ne changeront pas sa forme. L’objectif devient de protéger la peau des frottements et de gérer la pression avec des protections et des chaussures adaptées.',
        'La vitesse à laquelle un orteil en marteau souple devient rigide varie. Chez certaines personnes, il reste souple pendant des années. Porter des chaussures à l’avant large et entretenir la mobilité des orteils avec des étirements et des exercices quotidiens sont les stratégies les plus souvent conseillées pour ralentir l’évolution.',
      ],
    },
    {
      h2: 'Quand parle-t-on de chirurgie\u00A0?',
      keyFact: 'Une revue de 2016 citait des données de registre suédoises montrant que les interventions sur les petits orteils, dont la chirurgie de l’orteil en marteau et en griffe, représentaient près d’un quart de toutes les opérations de l’avant-pied (Malhotra et coll., 2016).',
      paragraphs: [
        'La chirurgie est envisagée quand un orteil en marteau rigide cause une douleur persistante, des lésions de la peau ou une difficulté à se chausser malgré les soins conservateurs. La décision repose sur les symptômes et la gêne au quotidien, pas sur l’aspect de l’orteil.',
        'Les interventions courantes sont\u00A0:',
        {
          list: [
            'L’arthroplastie de l’articulation interphalangienne proximale (retirer un petit morceau d’os pour redresser l’articulation).',
            'L’arthrodèse (fusionner l’articulation en position droite).',
          ],
        },
        'Des techniques mini-invasives plus récentes existent, mais les données de résultats à long terme sont encore en cours de recueil.',
        'La récupération après une chirurgie de l’orteil en marteau prend en général trois à six semaines avec une chaussure postopératoire. Une certaine raideur de l’orteil est attendue. Une revue de 2016 citait des données de registre suédoises montrant que les interventions sur les petits orteils, qui comprennent l’orteil en marteau, l’orteil en griffe et les déformations voisines, représentaient près d’un quart de toutes les chirurgies de l’avant-pied.',
      ],
      cites: [CITE.malhotra],
    },
  ],
  faq: [
    {
      q: 'Un orteil en marteau peut-il se redresser\u00A0?',
      a: 'Si un orteil en marteau est encore souple, c’est-à-dire que vous pouvez le redresser à la main, les soins conservateurs peuvent améliorer le confort et ralentir l’évolution. S’il est rigide, l’exercice ne peut pas changer sa position. Aucune étude n’a montré que des exercices corrigent de façon permanente une déformation en marteau.',
    },
    {
      q: 'Quelle différence entre un orteil en marteau et un orteil en griffe\u00A0?',
      a: 'Un orteil en marteau se plie à l’articulation du milieu de l’orteil. Un orteil en griffe se plie à la fois à l’articulation du milieu et à la dernière, et la base de l’orteil se relève au niveau de l’articulation métatarso-phalangienne. Les orteils en griffe sont plus souvent associés à des maladies neuromusculaires, tandis que les orteils en marteau sont plus souvent liés aux chaussures et à la forme du pied.',
      cites: [CITE.malhotra],
    },
    {
      q: 'Les étirements pour orteil en marteau marchent-ils vraiment\u00A0?',
      a: 'Aucun essai randomisé n’a testé des étirements ou des exercices pour l’orteil en marteau. Étirer à la main un orteil en marteau souple peut aider à garder l’amplitude de mouvement et à éviter qu’il devienne rigide. Les exercices des muscles propres au pied sont conseillés sur une logique biomécanique, pas sur des preuves directes issues d’essais pour ce problème.',
    },
    {
      q: 'Quelles chaussures pour un orteil en marteau\u00A0?',
      a: 'Des chaussures avec un avant large et haut laissent de la place à l’orteil plié et réduisent les frottements sur le dessus de l’articulation. Évitez les chaussures étroites, pointues ou à talons hauts. La mesure conservatrice la plus régulièrement conseillée dans les revues cliniques est l’adaptation des chaussures.',
      cites: [CITE.malhotra],
    },
    {
      q: 'Les attelles d’orteil sont-elles utiles pour un orteil en marteau\u00A0?',
      a: 'Les attelles et le strapping des orteils peuvent maintenir un orteil en marteau souple dans une position plus neutre pendant la journée. Ce n’est pas une correction permanente, mais cela peut ralentir l’évolution et réduire l’irritation. Une étude de 2022 a montré que des orthèses d’orteil en silicone réduisaient la pression au bout de l’orteil, dans les cas souples comme rigides.',
      cites: [CITE.formosa],
    },
    {
      q: 'Comment savoir si mon orteil en marteau doit être opéré\u00A0?',
      a: 'La chirurgie est en général envisagée quand la douleur, les cors, les durillons ou les problèmes de peau persistent malgré le changement de chaussures, les protections et les soins conservateurs, et que la déformation est rigide. Si vous arrivez encore à gérer les symptômes avec des chaussures plus larges et des étirements quotidiens, la chirurgie n’est pas urgente.',
    },
    {
      q: 'Un hallux valgus peut-il causer un orteil en marteau\u00A0?',
      a: 'Oui. Quand le gros orteil s’incline vers l’extérieur dans l’hallux valgus, il peut pousser le deuxième orteil vers le haut et hors de sa place, ce qui favorise un orteil en marteau. Prendre en charge l’oignon avec des chaussures plus larges et des [exercices pour hallux valgus](/fr/hallux-valgus-exercices/) peut aider à réduire la pression sur le deuxième orteil.',
    },
    {
      q: 'Peut-on redresser un orteil en marteau en le massant\u00A0?',
      a: 'Non. Le massage ne peut pas redresser un orteil en marteau, souple ou rigide, car la courbure est une position de l’articulation, pas un nœud dans les tissus mous. Un massage doux et des étirements du dessus de l’orteil peuvent calmer la gêne et la tension des tendons, et aider un orteil souple à garder sa mobilité. Cela ne défera pas la déformation, donc associez-le à des chaussures plus larges au lieu d’en attendre un changement de forme.',
    },
    {
      q: 'Marcher pieds nus est-il bon pour un orteil en marteau\u00A0?',
      a: 'Aucun essai ne l’a testé directement. Marcher pieds nus supprime la pression et les frottements d’une chaussure étroite sur l’articulation pliée, ce qui peut calmer l’irritation chez certaines personnes. Cela ne redressera pas un orteil en marteau. Sur un sol dur ou irrégulier, marcher pieds nus peut aussi charger les orteils autrement, donc introduisez-le progressivement plutôt que de tout changer d’un coup.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'Vous avez une plaie ouverte, une ampoule ou une blessure sur l’orteil, surtout si vous avez du diabète ou une sensibilité réduite',
      'L’orteil est rouge, chaud et gonflé, ce qui pourrait indiquer une infection ou une arthrite inflammatoire',
      'L’orteil en marteau est apparu brutalement après une blessure',
      'Vous remarquez un engourdissement ou des fourmillements dans l’orteil',
      'La déformation évolue vite malgré des chaussures plus larges',
      'Vous avez du mal à marcher à cause de la déformation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text:
      'Walkito inclut [ramasser la serviette](/fr/exercices/ramasser-serviette-orteils/), [écarter les orteils](/fr/exercices/ecarter-orteils/) et [lever le gros orteil](/fr/exercices/lever-gros-orteil/) dans son travail de renforcement des muscles propres au pied. L’application est conçue pour la fasciite plantaire et les pieds plats, pas spécifiquement pour l’orteil en marteau, mais les exercices se recoupent. Si vous avez un orteil en marteau souple et voulez un cadre pour un travail quotidien des orteils, les séances de 3 ou 5\u00A0minutes gardent les exercices réguliers sans avoir à retenir une routine à part.',
    more: [
      'Pour les problèmes voisins de l’avant-pied, voir [douleur sous l’avant-pied](/fr/metatarsalgie-douleur-avant-pied/) et [exercices pour hallux valgus](/fr/hallux-valgus-exercices/).',
    ],
  },
  crumb: 'Exercices orteil en marteau',
  campaign: 'guide-hammer-toe-fr',
};
