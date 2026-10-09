import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/sesamoiditis.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const SESAMOIDITIS_FR: Guide = {
  lang: 'fr',
  page: 'sesamoiditis',
  mainSource: CITE.bizSesamoiditis,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Sésamoïdite\u00A0: causes, décharge et imagerie',
  description:
    'Sésamoïdite\u00A0: douleur sous le gros orteil. Coussinet de danseur, chaussures, différence avec une fracture du sésamoïde et quand l’imagerie aide.',
  h1: 'Sésamoïdite\u00A0: ce que c’est, ce qui aide et quand faire une imagerie',
  lede:
    'La sésamoïdite est une inflammation des deux petits os logés dans le tendon sous l’articulation du gros orteil. La douleur se situe en général juste sous l’avant-pied, sous le gros orteil, et s’aggrave quand vous poussez sur le pied à la marche ou à la course. Cette page présente ses causes, ce que peuvent apporter la décharge et le changement de chaussures, et quand une imagerie vaut la peine.',
  intro: [
    'Les os sésamoïdes ont à peu près la taille d’un grain de maïs. Ils se trouvent dans le tendon du court fléchisseur de l’hallux et servent de poulie, ce qui aide le gros orteil à pousser sur le sol. Quand ils s’irritent, par surcharge, par une hausse brutale de l’activité ou par une pression répétée, il en résulte une douleur sourde sous la tête du premier métatarsien qui peut rendre chaque pas inconfortable.',
  ],
  toc: true,
  takeaways: [
    'Une revue systématique de 2025 a montré que les approches conservatrices de la sésamoïdite, dont les orthèses et la décharge, amélioraient les scores de douleur dans environ 66\u00A0% des cas, mais les récidives étaient fréquentes et les essais de bonne qualité manquent encore (Biz et coll., 2025).',
    'Le coussinet de danseur, un coussinet plat avec une découpe sous la tête du premier métatarsien, est la méthode de décharge la plus utilisée. Il répartit la pression loin des os sésamoïdes.',
    'La radio peut aider à distinguer une fracture du sésamoïde d’un sésamoïde bipartite, une variante anatomique normale où l’os est en deux morceaux. Les bords d’une fracture sont irréguliers\u00A0; ceux d’un sésamoïde bipartite sont lisses.',
    'L’exercice joue un rôle limité dans la sésamoïdite elle-même. La décharge, l’adaptation de l’activité et les chaussures sont les principales stratégies conservatrices.',
  ],
  sections: [
    {
      h2: 'Que sont les os sésamoïdes et pourquoi font-ils mal\u00A0?',
      paragraphs: [
        'Les deux os sésamoïdes se trouvent sous la tête du premier métatarsien, le long os situé derrière le gros orteil. Le sésamoïde médial, le plus proche du centre du pied, est celui qui se blesse le plus souvent. Ensemble, ils aident le gros orteil à pousser sur le sol et absorbent les forces pendant la phase de poussée de la marche.',
        'La sésamoïdite apparaît quand ces os ou les tissus qui les entourent s’enflamment. Les activités qui chargent l’avant-pied de façon répétée, comme la course, la danse ou les sauts, sont des déclencheurs fréquents. Une hausse brutale du volume d’entraînement aussi. Les personnes avec un pied creux ou une tête du premier métatarsien saillante y sont plus sujettes, car plus de pression tombe à cet endroit.',
        'Le terme sésamoïdite est employé au sens large en pratique et n’a pas de définition stricte unique. Il peut désigner une inflammation des os eux-mêmes, des tissus mous autour, ou des deux. Une revue systématique de 2025 a noté qu’il n’existe toujours pas de recommandations standardisées pour sa prise en charge conservatrice.',
      ],
      cites: [CITE.bizSesamoiditis],
    },
    {
      h2: 'Quelle différence entre sésamoïdite et fracture du sésamoïde\u00A0?',
      keyFact: 'Environ 1\u00A0personne sur 10 a un sésamoïde bipartite, une variante normale qui peut ressembler à une fracture à la radio mais dont les bords sont lisses et arrondis plutôt qu’irréguliers (Yammine, 2015).',
      paragraphs: [
        'La sésamoïdite est un problème de surcharge. La douleur apparaît peu à peu et se fait sentir pendant l’activité. Une fracture du sésamoïde est une fissure de l’os, en général due à un événement aigu unique ou à une contrainte chronique. La douleur d’une fracture tend à être plus vive et peut être présente même au repos.',
        'Une difficulté vient du fait qu’environ 1\u00A0personne sur 10 a un sésamoïde bipartite, c’est-à-dire un sésamoïde médial naturellement en deux morceaux. À la radio, un sésamoïde bipartite ressemble à une fracture. La différence est dans les bords\u00A0: **ceux d’un sésamoïde bipartite sont lisses et arrondis, ceux d’une fracture sont irréguliers.** Votre professionnel de santé peut aussi faire une radio de l’autre pied pour comparer.',
        'Si la radio n’est pas claire, une scintigraphie osseuse ou une IRM peut confirmer le diagnostic. L’IRM montre un œdème de la moelle osseuse, un gonflement à l’intérieur de l’os, présent dans la plupart des cas de sésamoïdite. L’IRM est en général réservée aux cas où les symptômes persistent malgré la prise en charge initiale.',
      ],
      cites: [CITE.yammineSesamoid],
    },
    {
      h2: 'À quoi ressemble la prise en charge conservatrice\u00A0?',
      keyFact: 'Une revue de 2025 regroupant 11\u00A0études et 59\u00A0patients a montré que les scores de douleur s’amélioraient dans environ 66\u00A0% des cas pris en charge de façon conservatrice, mais les récidives étaient fréquentes (Biz et coll., 2025).',
      paragraphs: [
        'La revue systématique de 2025 de Biz et coll. a regroupé les données individuelles de 11\u00A0études portant sur 59\u00A0patients. Les traitements les plus fréquents étaient\u00A0:',
        {
          list: [
            'Les orthèses.',
            'L’adaptation de l’activité.',
            'Les infiltrations de corticoïde.',
          ],
        },
        '**Les scores de douleur se sont améliorés dans environ 66\u00A0% des cas, mais les récidives étaient fréquentes** et certains patients gardaient des symptômes.',
        'La revue a montré que les orthèses et la décharge étaient utilisées dans presque tous les cas. Les infiltrations de corticoïde soulageaient à court terme mais comportaient un risque de récidive. Aucun traitement n’a été comparé à un autre dans un essai randomisé. Les auteurs ont conclu qu’il faut des protocoles standardisés et des études de meilleure qualité.',
        'La chirurgie, en général une sésamoïdectomie partielle ou totale (ablation de l’os), n’est envisagée que lorsque plusieurs mois de soins conservateurs n’ont pas aidé. La plupart des professionnels de santé essaient d’abord au moins trois à six mois de prise en charge non chirurgicale.',
      ],
      sourceNote:
        'Biz 2025\u00A0: 11\u00A0études, 59\u00A0patients (29\u00A0femmes), uniquement des cas cliniques et des séries de cas. EVA améliorée dans 66\u00A0% des cas. 45,4\u00A0% ont repris le sport sans douleur dans une série de cas. Aucun essai randomisé identifié.',
      cites: [CITE.bizSesamoiditis],
    },
    {
      h2: 'Qu’est-ce qu’un coussinet de danseur et comment agit-il\u00A0?',
      paragraphs: [
        'Un coussinet de danseur est un coussinet plat en feutre ou en mousse avec une découpe en U sous la tête du premier métatarsien. La découpe se place juste sous la zone des sésamoïdes, de sorte que le coussinet soulève l’avant-pied autour tout en soulageant la pression directe sur le point douloureux. Le nom vient de la danse classique, où l’avant-pied est chargé à l’extrême.',
        'Vous pouvez acheter des coussinets de danseur prédécoupés ou en faire découper un à la forme de votre pied par un professionnel de santé. L’emplacement compte\u00A0: **la découpe doit se trouver juste sous les sésamoïdes**, ni trop en avant ni trop en arrière. Certaines personnes glissent le coussinet dans la chaussure\u00A0; d’autres le font intégrer à une semelle sur mesure.',
        'Une chaussure à semelle rigide ou à semelle en bascule réduit la flexion de l’articulation du gros orteil pendant la poussée, ce qui limite la charge sur les sésamoïdes. Éviter les chaussures souples à semelle fine et les talons hauts pendant la période douloureuse aide pour la même raison.',
      ],
    },
    {
      h2: 'Les chaussures comptent-elles\u00A0?',
      paragraphs: [
        'Les chaussures jouent un rôle d’appoint. Une chaussure à semelle rigide limite le mouvement de la première articulation métatarso-phalangienne (l’articulation du gros orteil), ce qui réduit directement la contrainte sur les sésamoïdes. Les semelles en bascule font la même chose en faisant rouler le pied pendant la poussée sans obliger l’orteil à se plier.',
        'Évitez les chaussures\u00A0:',
        {
          list: [
            'Souples à l’avant.',
            'Très plates.',
            'À semelle fine.',
          ],
        },
        'Les talons hauts reportent le poids vers l’avant, sur l’avant-pied, et augmentent la charge sur les sésamoïdes. Si la course a déclenché le problème, passer temporairement à une chaussure avec plus d’amorti à l’avant et une semelle plus épaisse peut aider le temps que les symptômes se calment.',
        'Ces changements seuls ne régleront pas le problème si l’irritation de fond est importante, mais ils réduisent la charge qui a causé le problème au départ.',
      ],
    },
    {
      h2: 'Quel rôle joue l’exercice\u00A0?',
      paragraphs: [
        'La réponse honnête est que l’exercice a un rôle limité dans la prise en charge de la sésamoïdite elle-même. Contrairement à la [fasciite plantaire](/fr/exercices-fasciite-plantaire/) ou à la [tendinite d’Achille](/fr/tendinite-achille-exercices/), où les programmes de mise en charge ont un bon appui dans les essais, il n’existe aucun essai sur l’exercice dans la sésamoïdite. La revue systématique de 2025 n’a identifié aucune étude testant un protocole d’exercices précis.',
        'Ce que l’exercice peut aider, c’est le contexte. Un mollet raide reporte le poids sur l’avant-pied pendant la marche. Étirer le gastrocnémien et le soléaire peut réduire cette charge vers l’avant. Des muscles propres au pied faibles peuvent aussi contribuer à une répartition inégale de la pression sous l’avant-pied. Écarter les orteils et travailler le pied court peut aider à mieux répartir la charge sur les têtes des métatarsiens, même si cela n’a pas été testé spécifiquement dans la sésamoïdite.',
        'Si vous sortez d’une sésamoïdite et avez perdu de la force dans les orteils ou de la souplesse dans le mollet pendant la période de repos, des exercices doux pour l’[avant-pied](/fr/metatarsalgie-douleur-avant-pied/) peuvent faire partie d’un plan de reprise. Mais **la décharge et l’adaptation de l’activité sont les outils principaux, pas l’exercice.**',
      ],
    },
    {
      h2: 'Quel lien avec les autres problèmes de l’avant-pied\u00A0?',
      paragraphs: [
        'La douleur de la sésamoïdite se situe sous le gros orteil, ce qui la distingue de la [douleur sous l’avant-pied](/fr/metatarsalgie-douleur-avant-pied/) plus générale (métatarsalgie), où la douleur se trouve en général sous les têtes du deuxième et du troisième métatarsien. Le [névrome de Morton](/fr/nevrome-de-morton/) donne des fourmillements ou une brûlure entre le troisième et le quatrième orteil, pas sous le gros orteil.',
        'La goutte peut aussi toucher l’articulation du gros orteil et ressembler au début à une sésamoïdite, mais elle arrive brutalement, souvent en une nuit, avec rougeur, gonflement et chaleur. La sésamoïdite s’installe peu à peu. **Si le début a été brutal et que l’articulation est rouge et chaude, consultez un professionnel de santé pour écarter une goutte ou une infection.**',
        'L’hallux rigidus, une raideur avec arthrose de l’articulation du gros orteil, peut aussi faire mal à un endroit proche, mais il touche l’articulation elle-même plutôt que les sésamoïdes situés dessous.',
      ],
    },
  ],
  faq: [
    {
      q: 'Combien de temps dure une sésamoïdite\u00A0?',
      a: 'La récupération d’une sésamoïdite varie beaucoup. Les cas légers peuvent se calmer en quelques semaines avec de la décharge et une adaptation de l’activité. Les cas plus tenaces peuvent prendre trois à six mois. Dans la revue systématique de 2025, certains patients ont repris le sport sans douleur, tandis que d’autres gardaient des symptômes malgré les soins conservateurs.',
      cites: [CITE.bizSesamoiditis],
    },
    {
      q: 'Peut-on marcher avec une sésamoïdite\u00A0?',
      a: 'La plupart des gens peuvent encore marcher, mais la poussée fait mal. Un coussinet de danseur dans la chaussure et une chaussure à semelle rigide peuvent réduire assez la charge pour rendre la marche plus confortable. Éviter de marcher pieds nus sur un sol dur aide pendant la période douloureuse.',
    },
    {
      q: 'Faut-il une IRM pour une sésamoïdite\u00A0?',
      a: 'Pas toujours. Une radio est en général la première étape et permet de distinguer une fracture d’un sésamoïde bipartite. Une IRM est utile quand la radio est normale mais que les symptômes persistent, ou quand le professionnel de santé veut rechercher un œdème de la moelle osseuse ou une lésion des tissus mous.',
      cites: [CITE.yammineSesamoid],
    },
    {
      q: 'Qu’est-ce qu’un sésamoïde bipartite\u00A0?',
      a: 'Un sésamoïde bipartite est une variante anatomique normale où le sésamoïde médial est naturellement en deux morceaux. Environ 1\u00A0personne sur 10 en a un. À la radio, il peut ressembler à une fracture, mais ses bords sont lisses et arrondis, pas irréguliers.',
      cites: [CITE.yammineSesamoid],
    },
    {
      q: 'La sésamoïdite, est-ce la même chose qu’un turf toe\u00A0?',
      a: 'Non. Le turf toe est une entorse des ligaments autour de l’articulation du gros orteil, en général après un seul mouvement d’hyperextension. La sésamoïdite est une inflammation chronique des sésamoïdes due à une charge répétée. Les deux font mal sous le gros orteil, mais le turf toe suit une blessure claire et peut s’accompagner d’une lésion ligamentaire.',
    },
    {
      q: 'Des exercices peuvent-ils empêcher la sésamoïdite de revenir\u00A0?',
      a: 'Aucun exercice n’a été testé pour prévenir la sésamoïdite. Étirer le mollet pour réduire la charge sur l’avant-pied et renforcer les muscles propres au pied pour mieux répartir la pression sont des idées raisonnables, mais elles ne sont pas prouvées pour ce problème en particulier. Continuer à utiliser un coussinet de danseur et des chaussures adaptées est la stratégie la mieux établie.',
    },
    {
      q: 'Que se passe-t-il si on ne soigne pas une sésamoïdite\u00A0?',
      cites: [CITE.bizSesamoiditis],
      a: 'Sans changement de la charge, la sésamoïdite traîne souvent ou reprend avec l’activité. Une revue de 2025 sur les soins conservateurs a montré que la douleur s’améliorait dans environ deux tiers des cas, mais les récidives étaient fréquentes même avec un traitement. Sans décharge ni changement d’activité, attendez-vous à ce que la douleur persiste et continue de limiter la course ou la poussée.',
    },
    {
      q: 'Faut-il masser une sésamoïdite\u00A0?',
      a: 'Un massage doux autour de la zone peut calmer un peu la gêne, mais une pression ferme directement sur les sésamoïdes aggrave en général la douleur au lieu de la soulager, car c’est exactement là que se trouve le tissu irrité. Si vous voulez travailler l’avant-pied, étirez plutôt le mollet, ce qui retire une partie de la charge sur les sésamoïdes, au lieu d’appuyer sur le point douloureux lui-même.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'La douleur a commencé brutalement après une chute, un saut ou un choc direct sur l’avant-pied, ce qui peut indiquer une fracture',
      'L’articulation du gros orteil est rouge, chaude et gonflée, surtout si c’est apparu en une nuit, ce qui pourrait être une goutte ou une infection',
      'La douleur ne s’améliore pas après deux à trois semaines de décharge et d’adaptation de l’activité',
      'Vous remarquez un engourdissement ou des fourmillements dans le gros orteil',
      'Vous ne pouvez pas du tout prendre appui sur l’avant-pied',
      'Vous avez de la fièvre en plus de la douleur au pied',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text:
      'La sésamoïdite se prend en charge surtout par la décharge et les chaussures, pas par un programme d’exercices. Walkito est conçu pour des problèmes comme la fasciite plantaire et les pieds plats, où des programmes de mise en charge structurés ont un appui dans les essais. Si votre sésamoïdite est passée et que vous voulez reconstruire la force du pied et du mollet pour reprendre l’activité, le travail des muscles du pied et les étirements du mollet de l’application peuvent être un complément utile.',
    more: [
      'Si la douleur de l’avant-pied est plus étendue et touche les têtes du deuxième ou du troisième métatarsien, voir la page [douleur sous l’avant-pied](/fr/metatarsalgie-douleur-avant-pied/) pour des exercices mieux appuyés par les preuves.',
    ],
  },
  crumb: 'Sésamoïdite',
  campaign: 'guide-sesamoiditis-fr',
};
