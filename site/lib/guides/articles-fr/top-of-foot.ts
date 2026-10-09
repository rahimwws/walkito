import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/top-of-foot.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const TOP_OF_FOOT_FR: Guide = {
  lang: 'fr',
  page: 'topOfFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Douleur sur le dessus du pied\u00A0: causes et que faire',
  description:
    'Douleur sur le dessus du pied\u00A0: tendinite des extenseurs (lacets serrés), fracture de fatigue, exostose, goutte, nerf irrité. Quand consulter.',
  h1: 'Douleur sur le dessus du pied\u00A0: les causes et quand consulter',
  lede:
    'Une douleur sur le dessus du pied est moins fréquente qu’une douleur au talon ou à la voûte, mais elle peut rendre chaque pas inconfortable, surtout en chaussures. La cause la plus fréquente est la tendinite des extenseurs, une irritation des tendons qui relèvent les orteils, souvent due à des lacets trop serrés ou à une hausse brutale de l’activité. D’autres causes sont les fractures de fatigue, les excroissances osseuses, la goutte et la compression d’un nerf. La plupart répondent à des changements simples, mais quelques-unes demandent une imagerie ou une consultation pour être identifiées.',
  intro: [
    'Le dessus du pied s’appelle le dos du pied, ou cou-de-pied. Plusieurs tendons, nerfs et petits os s’y trouvent juste sous la peau, ce qui rend la zone sensible à la pression des chaussures et à la surcharge. Cette page présente les causes les plus fréquentes, ce que vous pouvez faire chez vous, ce que disent les études sur l’exercice pour cette zone, et où se trouvent honnêtement les lacunes.',
  ],
  toc: true,
  takeaways: [
    'La tendinite des extenseurs, une inflammation des tendons qui relèvent les orteils, est la cause la plus fréquente de douleur sur le dessus du pied. Des lacets serrés et une hausse brutale de l’activité en sont les déclencheurs habituels.',
    'La fracture de fatigue d’un métatarsien est la cause la plus importante à écarter. La douleur est localisée, s’aggrave au fil de la journée et peut ne pas apparaître à la radio pendant deux à trois semaines.',
    'Changer la façon de lacer vos chaussures, en sautant l’œillet au-dessus du point douloureux, est souvent la première mesure la plus rapide pour une tendinite des extenseurs.',
    'Aucun essai randomisé n’a testé l’exercice spécifiquement pour la douleur du dessus du pied. L’exercice agit sur des facteurs favorisants comme un mollet raide et un tibial antérieur faible, pas directement sur la douleur du dessus du pied.',
  ],
  sections: [
    {
      h2: 'Qu’est-ce qui cause une douleur sur le dessus du pied\u00A0?',
      keyFact: 'Une fracture de fatigue d’un métatarsien peut ne pas apparaître sur une radio simple pendant deux à trois semaines après le début des symptômes, et une IRM peut la confirmer plus tôt (Patel et coll., 2011).',
      paragraphs: [
        '**La tendinite des extenseurs** est la cause la plus fréquente. Les tendons extenseurs courent sur le dessus du pied, du tibia jusqu’aux orteils. Ils relèvent les orteils et le pied pendant la marche. Quand ils sont irrités, vous sentez une douleur sourde le long du dessus du pied, qui s’aggrave avec l’activité et fait souvent mal quand vous relevez les orteils contre une résistance. Les déclencheurs habituels sont des lacets serrés qui appuient directement sur les tendons, une hausse brutale de la distance de marche ou de course, ou des chaussures avec une languette rigide.',
        '**La fracture de fatigue d’un métatarsien** est une petite fissure dans l’un des longs os du pied, en général le deuxième ou le troisième métatarsien. La douleur est plus localisée que dans une tendinite, se situe sur un point précis et tend à s’aggraver au fil de la journée. Un gonflement sur le dessus du pied est fréquent. Une fracture de fatigue peut mettre deux à trois semaines à apparaître sur une radio simple, donc l’imagerie précoce peut demander une IRM. Celle-ci demande du repos, pas de l’exercice.',
        '**L’excroissance osseuse dorsale** (aussi appelée exostose métatarsienne) est une bosse osseuse qui se forme sur le dessus des articulations du milieu du pied, en général là où les métatarsiens rejoignent les os cunéiformes. Elle se développe peu à peu, après des années de compression de ces articulations. L’excroissance elle-même peut ne pas faire mal, mais elle peut appuyer contre la languette de la chaussure ou irriter un nerf qui passe dessus.',
        '**La goutte** peut causer une douleur brutale et intense sur le dessus du pied, le plus souvent à l’articulation du gros orteil. L’articulation devient rouge, gonflée, chaude et extrêmement sensible. La goutte est due à des dépôts de cristaux d’acide urique et demande une prise en charge médicale. L’exercice n’aide pas pendant une crise de goutte.',
        '**L’irritation d’un nerf** peut venir de la compression du nerf fibulaire profond ou du nerf fibulaire superficiel par des chaussures serrées, un gonflement ou une excroissance osseuse. La douleur tend à être une brûlure ou des fourmillements plutôt qu’une douleur sourde, et peut irradier vers les orteils ou remonter vers la cheville.',
        '**L’arthrose du milieu du pied** touche les petites articulations du dessus du pied, en général par usure ou après une ancienne blessure. La douleur est raide et sourde, pire après être resté longtemps debout ou avoir beaucoup marché, et peut s’accompagner d’un épaississement visible au-dessus des articulations.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Comment distinguer ces causes\u00A0?',
      paragraphs: [
        'L’endroit et le schéma de la douleur sont les premiers indices. Une tendinite des extenseurs donne une douleur sourde étendue le long des tendons, qui s’aggrave quand vous relevez les orteils. Une fracture de fatigue fait mal en un point précis et s’aggrave au fil de la journée. La goutte arrive brutalement, en général à l’articulation du gros orteil, avec rougeur et chaleur. Une douleur nerveuse tend à être une brûlure ou des fourmillements, pas une douleur sourde et profonde.',
        'Un professionnel de santé peut souvent faire la différence par l’examen clinique. Relever les orteils contre une résistance reproduit la douleur d’une tendinite. Une sensibilité en un point sur un seul os, avec un gonflement localisé, évoque une fracture de fatigue. Si une fracture de fatigue est suspectée, l’imagerie compte, car continuer à charger un os fracturé peut l’aggraver.',
        'Si la douleur n’apparaît qu’en chaussures et disparaît pieds nus, la pression de la chaussure est le facteur le plus probable. Si elle persiste au repos ou vous réveille la nuit, cela vaut la peine de chercher autre chose qu’une simple tendinite.',
      ],
    },
    {
      h2: 'Qu’est-ce qui aide une tendinite des extenseurs\u00A0?',
      paragraphs: [
        'La première mesure la plus rapide est en général de changer le laçage. Sautez l’œillet situé juste au-dessus du point douloureux. Beaucoup de chaussures de sport ont assez d’œillets pour faire passer le lacet autour de la zone sensible sans perdre de maintien ailleurs. Cela supprime la pression directe qui a déclenché le problème.',
        'Les chaussures avec une languette rembourrée ou souple compriment moins les tendons. Si vous portez des bottes, des chaussures à crampons ou des chaussures de ville avec un dessus rigide, la pression du dessus de la chaussure explique souvent tout.',
        'Réduire temporairement l’activité qui a déclenché la douleur aide. Si la douleur a commencé quand vous avez augmenté votre distance de marche ou de course, revenez au niveau précédent pendant une ou deux semaines, puis remontez progressivement.',
        'De la glace sur les tendons douloureux pendant 10 à 15\u00A0minutes après l’activité peut aider à calmer l’irritation les premiers jours. Un anti-inflammatoire est une option de courte durée si la douleur gêne la vie quotidienne, mais il n’accélère pas la récupération de fond.',
      ],
    },
    {
      h2: 'L’exercice aide-t-il la douleur sur le dessus du pied\u00A0?',
      paragraphs: [
        'Aucun essai randomisé n’a testé l’exercice spécifiquement pour la douleur du dessus du pied ou la tendinite des extenseurs. Les preuves sont ici claires\u00A0: on ne sait pas si l’exercice accélère la récupération d’une tendinite des extenseurs par rapport à un changement de laçage et au repos seuls.',
        'Ce que l’exercice peut viser, ce sont les facteurs favorisants. Le tibial antérieur, le muscle à l’avant du tibia qui relève le pied, est lui aussi un extenseur. Quand il est faible par rapport au mollet, les petits tendons extenseurs du dessus du pied prennent plus de charge pendant la marche. Renforcer le tibial antérieur avec des relevés des orteils (relever l’avant du pied, debout dos contre un mur) est une façon de réduire ce déséquilibre. Voir les [exercices pour la périostite tibiale](/fr/periostite-tibiale-exercices/) pour en savoir plus sur le tibial antérieur.',
        'L’étirement du mollet est utile si la cheville se plie mal vers le haut. Quand la cheville ne se plie pas assez, le pied compense d’une façon qui peut augmenter la contrainte sur les structures du dessus du pied. Un mollet raide est aussi un facteur de risque commun à la [fasciite plantaire](/fr/exercices-fasciite-plantaire/) et à la surcharge de l’avant-pied.',
        'Pour les excroissances osseuses dorsales et l’arthrose du milieu du pied, l’exercice ne change pas l’anatomie osseuse. Le travail de mobilité de la cheville peut aider à garder l’amplitude, et le renforcement peut réduire les symptômes, mais l’excroissance ou l’usure articulaire restent. Pour les fractures de fatigue, l’exercice n’est pas la bonne approche tant que l’os n’a pas récupéré.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'Des exercices pour les facteurs favorisants',
      paragraphs: [
        'Ces exercices ne visent pas directement le dessus du pied. Ils s’attaquent à un mollet raide et à un manque de force à l’avant du tibia, des facteurs qui favorisent la surcharge des tendons extenseurs. Si votre douleur sur le dessus du pied vient d’une fracture de fatigue, de la goutte ou d’un problème nerveux actif, laissez-les de côté et consultez d’abord un professionnel de santé.',
      ],
      exercises: [
        {
          name: 'Relevés des orteils',
          dose: '3\u00A0séries de 15',
          how: 'Tenez-vous dos contre un mur, les pieds environ une longueur de pied devant vous. Relevez l’avant des deux pieds du sol, en tirant les orteils vers les tibias. Redescendez lentement. Cet exercice renforce le tibial antérieur, le principal muscle qui relève le pied.',
          often: 'Jours de renforcement',
          feel: 'Un travail le long de l’avant du tibia',
          stop: 'Une douleur sur le dessus du pied au-dessus de 4/10',
          evidence: { level: 'early', why: 'Pas d’essai dans la tendinite des extenseurs. L’exercice renforce le tibial antérieur, qui partage avec les tendons extenseurs la charge de relever le pied.' },
          media: 'tibialis_raise',
          caption: 'Relevés des orteils\u00A0: tirez les orteils vers les tibias, dos au mur',
          alt: 'Une personne debout contre un mur qui lève les orteils, le tibial antérieur mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon au sol et les hanches vers l’avant. Tenez jusqu’à sentir l’étirement dans le haut du mollet. Un mollet raide limite la flexion de la cheville vers le haut, ce qui peut reporter la contrainte sur le dessus du pied.',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'Une douleur dans le tendon d’Achille',
          evidence: { level: 'strong', why: 'Les étirements du mollet ont la note A d’une recommandation pour des problèmes voisins du bas de la jambe. Pas testés spécifiquement dans la tendinite des extenseurs.' },
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Bascules de cheville',
          dose: '10\u00A0bascules lentes, chaque pied',
          how: 'Tenez-vous face à un mur, un pied en avant, les mains sur le mur. Poussez le genou vers l’avant au-dessus des orteils, le talon au sol. Revenez en arrière et recommencez. Cela améliore en douceur l’amplitude de flexion de la cheville vers le haut.',
          often: 'La plupart des séances',
          feel: 'Un étirement à l’avant de la cheville',
          stop: 'Une douleur sur le dessus du pied pendant la bascule',
          evidence: { level: 'early', why: 'Le travail de mobilité de la cheville fait partie de la rééducation générale du bas de la jambe. Pas d’essai spécifique à la douleur du dessus du pied.' },
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: le genou passe au-dessus des orteils, le talon reste au sol',
          alt: 'Une personne face à un mur qui pousse le genou vers l’avant au-dessus des orteils, la cheville mise en évidence',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quand une douleur sur le dessus du pied est-elle une fracture de fatigue\u00A0?',
      paragraphs: [
        'La fracture de fatigue d’un métatarsien est la cause qu’il faut le plus écarter, car continuer à charger un os fracturé peut transformer une petite fissure en fracture complète.',
        'Les fractures de fatigue apparaissent en général peu à peu, à force d’impacts répétés. Elles sont plus fréquentes chez les coureurs, les recrues militaires et les personnes qui ont brutalement augmenté leur activité. La douleur est localisée en un point, s’aggrave quand vous mettez du poids sur le pied et peut faire mal la nuit. Un gonflement sur le dessus du pied, au-dessus de l’os douloureux, est fréquent.',
        'Une radio simple peut ne pas montrer une fracture de fatigue pendant les deux à trois premières semaines. Si un professionnel de santé en suspecte une, une IRM ou une scintigraphie osseuse peut la confirmer plus tôt. La prise en charge repose sur le repos et un appui protégé, pas sur l’exercice. Reprendre l’activité trop tôt expose à une fracture complète.',
        'Si la douleur est apparue après une hausse du volume d’entraînement, se situe en un point et s’aggrave au fil de la journée, consultez un professionnel de santé avant de faire l’un des exercices de cette page.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Et la goutte sur le dessus du pied\u00A0?',
      paragraphs: [
        'La goutte est une maladie inflammatoire due à des dépôts de cristaux d’acide urique dans une articulation. Elle touche classiquement l’articulation du gros orteil (la première articulation métatarso-phalangienne), mais peut atteindre n’importe quelle articulation du pied, y compris au milieu du pied.',
        'Une crise de goutte arrive vite, souvent en une nuit. L’articulation devient très douloureuse, rouge, chaude et gonflée. Elle ne ressemble pas à une tendinite ou à une fracture de fatigue, ni à l’œil ni au ressenti. Une douleur brutale et intense dans une seule articulation, avec rougeur et chaleur, est une raison de consulter rapidement. Des analyses de sang, et parfois l’analyse du liquide articulaire, confirment le diagnostic.',
        'La goutte demande une prise en charge médicale. L’exercice, le changement de chaussures et les étirements n’aident pas pendant une crise. Entre les crises, entretenir la mobilité du pied et de la cheville est raisonnable, mais le problème d’acide urique de fond se gère avec des médicaments et des changements alimentaires.',
      ],
    },
  ],
  faq: [
    {
      q: 'Pourquoi j’ai mal sur le dessus du pied quand je marche\u00A0?',
      a: 'La cause la plus fréquente est la tendinite des extenseurs, où les tendons qui relèvent les orteils sont irrités par des chaussures serrées, des lacets qui appuient sur les tendons ou une hausse brutale de la distance de marche. D’autres causes sont les fractures de fatigue, les excroissances osseuses et la compression d’un nerf. Si la douleur n’apparaît qu’en chaussures et disparaît pieds nus, la pression de la chaussure est le facteur le plus probable.',
    },
    {
      q: 'Des lacets trop serrés peuvent-ils faire mal sur le dessus du pied\u00A0?',
      a: 'Oui. Les tendons extenseurs passent juste sous la peau du dessus du pied, et des lacets serrés appuient directement dessus. Sauter l’œillet au-dessus du point douloureux ou passer à des chaussures avec une languette plus souple fait souvent disparaître la douleur en quelques jours. C’est l’une des causes les plus fréquentes, et les plus faciles à corriger, de douleur sur le dessus du pied.',
    },
    {
      q: 'Comment savoir si une douleur sur le dessus du pied est une fracture de fatigue\u00A0?',
      cites: [CITE.patelStressFracture],
      a: 'Une fracture de fatigue fait plutôt mal en un point précis, s’aggrave au fil de la journée et avec l’activité, et peut gonfler sur le dessus du pied. Elle suit souvent une hausse brutale du volume d’entraînement. Une fracture de fatigue récente peut ne pas apparaître à la radio pendant deux à trois semaines. Si la douleur est localisée, s’aggrave et dépend de l’activité, consultez un professionnel de santé pour une imagerie au lieu de continuer l’exercice.',
    },
    {
      q: 'L’exercice aide-t-il une douleur sur le dessus du pied\u00A0?',
      a: 'Aucun essai n’a testé l’exercice spécifiquement pour la douleur du dessus du pied. L’exercice peut agir sur des facteurs favorisants\u00A0: renforcer le tibial antérieur réduit la charge sur les petits tendons extenseurs, et étirer le mollet améliore la mobilité de la cheville. Mais pour une fracture de fatigue, la goutte ou un problème nerveux, l’exercice est soit inefficace, soit contre-productif. C’est la cause qui décide si l’exercice a du sens.',
    },
    {
      q: 'Quels sont les symptômes d’une tendinite des extenseurs\u00A0?',
      a: 'Une tendinite des extenseurs donne une douleur sourde étendue le long du dessus du pied, de la cheville vers les orteils. Elle s’aggrave quand vous relevez les orteils, à la marche ou à la course, ou avec des chaussures serrées. Contrairement à une fracture de fatigue, la douleur s’étale le long des tendons au lieu de se concentrer sur un point osseux.',
    },
    {
      q: 'La goutte peut-elle faire mal sur le dessus du pied\u00A0?',
      a: 'Oui. La goutte touche classiquement l’articulation du gros orteil, mais elle peut aussi atteindre les articulations du milieu du pied. Une crise arrive brutalement, souvent en une nuit, avec une douleur intense, une rougeur, de la chaleur et un gonflement d’une articulation. Elle ne ressemble pas à une tendinite ou à une fracture de fatigue. Elle demande un traitement médical, pas de l’exercice.',
    },
    {
      q: 'Faut-il voir un médecin pour une douleur sur le dessus du pied\u00A0?',
      a: 'Consultez un professionnel de santé si la douleur est localisée en un point et s’aggrave, s’il y a une rougeur ou de la chaleur sur la zone douloureuse, si la douleur persiste après une semaine de repos et de changement de chaussures, si elle est apparue brutalement après une blessure, ou s’il y a des engourdissements ou des fourmillements. Les fractures de fatigue, la goutte et les problèmes nerveux gagnent tous à être évalués tôt.',
    },
    {
      q: 'Peut-on marcher avec une tendinite des extenseurs\u00A0?',
      a: 'Oui, marcher avec une tendinite des extenseurs ne pose en général pas de problème si la douleur reste légère et ne s’aggrave pas. Choisissez des chaussures avec une languette souple et desserrez ou relacez-les pour soulager les tendons douloureux. Si la marche augmente nettement la douleur ou si elle traîne des heures après, réduisez la distance jusqu’à ce que le changement de laçage et le repos la fassent baisser.',
    },
    {
      q: 'Combien de temps dure une tendinite des extenseurs du pied\u00A0?',
      a: 'Aucun essai n’a suivi la durée de récupération d’une tendinite des extenseurs en particulier, donc il n’existe pas de délai testé. Les cas légers déclenchés par des lacets serrés se calment souvent une fois la pression supprimée. Les cas liés à une hausse de l’entraînement, ou à une pression continue de la chaussure, peuvent durer plus longtemps, parfois plusieurs semaines, surtout si le déclencheur n’est pas complètement réglé.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur est localisée en un point du dessus du pied et s’aggrave au fil de la journée, ce qui peut évoquer une fracture de fatigue',
      'une seule articulation est gonflée, rouge ou chaude, ce qui peut évoquer la goutte ou une infection',
      'la douleur est apparue brutalement après une blessure, une chute ou une torsion',
      'il y a des engourdissements, des fourmillements ou une brûlure, ce qui peut évoquer une compression nerveuse',
      'la douleur ne s’améliore pas après une à deux semaines de repos et de changement de chaussures',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'une bosse visible sur le dessus du pied grossit',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est conçu autour de la douleur au talon et des pieds plats, pas spécifiquement de la douleur sur le dessus du pied. Mais si une surcharge des tendons extenseurs fait partie de votre tableau, le renforcement du tibial antérieur (relevés des orteils) et les étirements du mollet de l’application visent les déséquilibres musculaires qui y contribuent. Signaler le dessus du pied comme douloureux sur la carte de la douleur lors du bilan permet à l’application de suivre si la douleur évolue en même temps que vos exercices.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito ne diagnostique pas la douleur sur le dessus du pied. Si vous suspectez une fracture de fatigue, la goutte ou un problème nerveux, consultez un professionnel de santé avant de commencer un programme d’exercices.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Douleur sur le dessus du pied',
  campaign: 'guide-top-of-foot-fr',
};
