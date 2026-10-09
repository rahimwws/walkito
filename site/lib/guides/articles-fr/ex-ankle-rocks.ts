import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-ankle-rocks.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const EX_ANKLE_ROCKS_FR: Guide = {
  lang: 'fr',
  page: 'exAnkleRocks',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Bascules de cheville (knee over toes)\u00A0: mobilité',
  description:
    'Comment faire les bascules de cheville, l’exercice genou au-dessus des orteils pour la mobilité\u00A0: technique, séries, pourquoi la flexion compte, test.',
  h1: 'Bascules de cheville\u00A0: comment les faire, et pourquoi la mobilité de la cheville compte',
  lede:
    'Les bascules de cheville sont un exercice debout où le genou avance au-dessus des orteils pendant que le talon reste à plat au sol. Elles travaillent la flexion dorsale de la cheville, c’est-à-dire jusqu’où la cheville se plie quand le pied est au sol. Dans une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une flexion dorsale réduite était le plus fort facteur de risque à lui seul, avec un odds ratio de 23,3.',
  takeaways: [
    'Une flexion dorsale de cheville réduite était le plus fort facteur de risque indépendant de fasciite plantaire dans une étude cas-témoins appariée, avec un odds ratio de 23,3 (Riddle et coll., 2003).',
    'Les bascules de cheville travaillent la flexion dorsale en chargeant la fin de l’amplitude sous le poids du corps, contrairement à un étirement passif contre le mur.',
    'Le test genou au mur mesure jusqu’où le genou dépasse les orteils, talon au sol. Walkito comprend un exercice genou au mur (2\u00A0maintiens de 30\u00A0secondes, chaque jambe).',
    'Walkito commence les bascules de cheville à 2\u00A0séries de 15, chaque jambe.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Comment faire les bascules de cheville\u00A0?',
      paragraphs: [
        'Placez-vous en fente, un pied devant et un pied derrière, les mains contre un mur ou un encadrement de porte pour l’équilibre. En gardant le talon avant à plat au sol, basculez lentement le genou avant vers l’avant, au-dessus des orteils. Laissez le genou avancer aussi loin que possible tant que le talon reste au sol. Puis revenez à la position de départ. C’est une répétition.',
        'Le mouvement est lent et contrôlé. Pas de rebonds. Chaque bascule doit prendre environ deux secondes vers l’avant et deux secondes vers l’arrière. La jambe arrière sert seulement à l’équilibre. Tout le travail de la cheville se fait dans la jambe avant.',
        'Gardez le pied avant pointé droit devant. Si le pied tourne vers l’extérieur, la cheville trouve un raccourci et vous manquez l’amplitude que vous cherchez à gagner.',
      ],
      exercises: [
        {
          name: 'Bascules de cheville',
          evidence: {
            level: 'moderate',
            why: 'Cible la flexion dorsale de la cheville, le plus fort facteur de risque indépendant de fasciite plantaire dans une étude cas-témoins de 2003. Pas testé comme exercice isolé dans un essai sur la fasciite plantaire.',
          },
          dose: 'Walkito commence à 2\u00A0séries de 15, chaque jambe',
          how: 'En fente, les mains contre un mur. Basculez le genou avant vers l’avant au-dessus des orteils, le talon reste à plat. Lentement, environ deux secondes dans chaque sens. Changez de jambe après chaque série.',
          often: 'Séances de mobilité',
          feel: 'Un étirement à l’avant de la cheville et une traction en bas du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: le genou avance au-dessus des orteils, le talon reste à plat',
          alt: 'Une personne en fente qui pousse le genou avant au-dessus des orteils, la cheville mise en évidence',
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Pourquoi la mobilité de la cheville compte-t-elle pour la douleur au talon\u00A0?',
      keyFact: 'Dans une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une flexion dorsale de cheville limitée était un facteur de risque plus fort que l’IMC ou le temps passé debout, avec un odds ratio de 23,3 (Riddle et coll., 2003).',
      paragraphs: [
        'La flexion dorsale de la cheville, c’est jusqu’où le pied peut se plier vers le haut, vers le tibia, pendant que le talon reste au sol. Chaque pas demande un peu de flexion dorsale. Quand la cheville ne se plie pas assez, le corps compense. Le pied peut s’affaisser vers l’intérieur, le mollet subit plus de tension, et le fascia plantaire absorbe des forces pour lesquelles il n’est pas fait.',
        'Dans l’étude cas-témoins de Riddle 2003, une flexion dorsale de cheville réduite était la variable avec le plus grand effet indépendant, avec un odds ratio de 23,3 pour l’apparition d’une fasciite plantaire. C’était plus fort que l’IMC, le temps passé debout ou la distance de course. Dans une revue distincte, un mollet raide, plus précisément le gastrocnémien, était présent chez 52 à 60\u00A0% de 254\u00A0personnes atteintes de fasciite plantaire.',
        'Étirer le mollet de façon passive (comme avec l’[étirement du mollet](/fr/exercices/etirement-mollet/) et l’[étirement du soléaire](/fr/exercices/etirement-soleaire/)) agit sur un côté du problème\u00A0: la longueur du muscle. Les bascules de cheville agissent sur l’autre côté\u00A0: le contrôle actif en fin d’amplitude. Basculer le genou au-dessus des orteils sous le poids du corps apprend à la cheville à utiliser l’amplitude qu’elle a, pas seulement à l’atteindre passivement.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Bascules de cheville ou étirement du mollet\u00A0: quelle différence\u00A0?',
      paragraphs: [
        'L’[étirement du mollet](/fr/exercices/etirement-mollet/) est un maintien passif. Vous vous penchez contre le mur et attendez que le muscle s’allonge. La jambe arrière est tendue, ce qui cible le gastrocnémien. L’[étirement du soléaire](/fr/exercices/etirement-soleaire/) fait la même chose genou plié.',
        'Les bascules de cheville sont un mouvement actif et répété. Vous poussez le genou vers l’avant, revenez, poussez de nouveau. Vous chargez la cheville sur toute son amplitude au lieu de rester immobile en fin d’amplitude. Les bascules de cheville développent la capacité à utiliser la flexion dorsale sous charge, ce que la marche et la course demandent réellement.',
        'Les deux sont utiles. L’étirement ouvre l’amplitude. Les bascules de cheville vous apprennent à l’utiliser. La recommandation donne aux étirements du mollet la note A. Les bascules de cheville font partie du travail de mobilité que Walkito programme avec ces étirements.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Le test genou au mur et son lien avec l’exercice',
      paragraphs: [
        'Le test genou au mur, aussi appelé test de fente en charge, est un moyen simple de mesurer la flexion dorsale de la cheville. Placez-vous face à un mur, un pied à quelques centimètres en arrière, et avancez le genou en fente jusqu’à ce qu’il touche le mur. Si le talon se soulève avant que le genou atteigne le mur, rapprochez le pied. La distance entre le gros orteil et le mur, au moment où le genou touche tout juste le mur avec le talon encore à plat, est votre score.',
        'Walkito comprend un exercice genou au mur dans l’application (2\u00A0maintiens de 30\u00A0secondes, chaque jambe). Suivre cette distance au fil des semaines vous indique si l’amplitude de votre cheville progresse vraiment. Un gain d’un ou deux centimètres en quelques semaines est significatif.',
        'Les bascules de cheville et l’exercice genou au mur travaillent la même amplitude sous des angles différents. Les bascules sont des répétitions à travers l’amplitude. Le maintien genou au mur est une charge soutenue en fin d’amplitude. Les deux aident. Walkito les programme les jours de mobilité.',
      ],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec les bascules de cheville\u00A0?',
      paragraphs: [
        'Laisser le talon se soulever. Le talon doit rester à plat pendant chaque répétition. S’il se soulève, vous avez dépassé la fin de votre amplitude et l’exercice perd son intérêt. Basculez seulement aussi loin que le talon le permet.',
        'Tourner le pied vers l’extérieur. Le pied doit pointer droit devant. Une rotation vers l’extérieur permet à la cheville de contourner sa zone raide. Gardez le deuxième orteil dirigé vers le mur.',
        'Aller trop vite. Rebondir ou enchaîner les répétitions à toute vitesse ne développe pas une amplitude contrôlée. Deux secondes vers l’avant, deux secondes vers l’arrière. Laissez la cheville sentir la fin de son amplitude à chaque répétition.',
        'Se passer de la fente. Certaines personnes essaient de faire les bascules sur les deux jambes à la fois, en faisant simplement un squat. Cela divise la charge et réduit l’amplitude que la cheville avant doit parcourir. Placez-vous en fente pour qu’une seule cheville fasse le travail.',
      ],
    },
    {
      h2: 'Versions plus faciles et plus difficiles',
      paragraphs: [
        'Si les bascules de cheville debout sont trop exigeantes, essayez-les assis. Asseyez-vous, le pied à plat au sol, et faites glisser le genou vers l’avant au-dessus des orteils. C’est le même mouvement avec moins de charge. Cette version convient bien après une poussée aiguë, quand les exercices debout sont de trop.',
        'Une version plus difficile est la bascule de cheville lestée. Tenez un kettlebell ou un gros livre contre la poitrine en basculant vers l’avant. Le poids ajouté pousse le genou plus loin en flexion dorsale. N’ajoutez du poids que lorsque les bascules au poids du corps vous ont paru faciles deux séances de suite.',
        'Pour d’autres exercices de la cheville et du bas de la jambe, voir les [relevés des orteils](/fr/exercices/releves-orteils-mur/) (force du tibia) et l’[équilibre sur une jambe](/fr/exercices/equilibre-une-jambe/) (stabilité de la cheville). Le programme complet se trouve dans [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Combien de bascules de cheville faire\u00A0?',
      a: 'Walkito commence à 2\u00A0séries de 15 par jambe. Cela fait 30\u00A0répétitions par jambe et par séance. Il n’existe pas de protocole publié pour les bascules de cheville dans la fasciite plantaire en particulier, donc cette dose vient de l’application. Augmentez les séries ou ajoutez du poids une fois que la dose actuelle vous a paru facile deux séances de suite.',
    },
    {
      q: 'Les bascules de cheville aident-elles en cas de fasciite plantaire\u00A0?',
      cites: [CITE.riddle],
      a: 'Les bascules de cheville ciblent la flexion dorsale de la cheville, qui était le plus fort facteur de risque indépendant de fasciite plantaire dans une étude cas-témoins (odds ratio de 23,3). Aucun essai n’a testé les bascules de cheville comme exercice isolé dans la fasciite plantaire, mais améliorer l’amplitude qu’elles ciblent s’attaque au plus grand facteur de risque biomécanique identifié par la recherche.',
    },
    {
      q: 'Qu’est-ce que le test genou au mur\u00A0?',
      a: 'Une mesure simple de la flexion dorsale de la cheville. Placez-vous face à un mur et avancez le genou en fente jusqu’à ce qu’il touche, talon à plat. La distance entre le gros orteil et le mur est votre score. Walkito l’inclut comme exercice (2\u00A0maintiens de 30\u00A0secondes par jambe) pour développer le contrôle en fin d’amplitude.',
    },
    {
      q: 'Bascules de cheville et «\u00A0knee over toes\u00A0», c’est la même chose\u00A0?',
      a: 'Oui. «\u00A0Bascules de cheville\u00A0», «\u00A0bascules genou au-dessus des orteils\u00A0» (knee over toes) et «\u00A0bascules en flexion dorsale\u00A0» désignent toutes le même mouvement. Le genou avance au-dessus des orteils pendant que le talon reste à plat. L’exercice développe l’amplitude de cheville nécessaire pour marcher, s’accroupir et courir.',
    },
    {
      q: 'Le genou doit-il dépasser les orteils\u00A0?',
      a: 'Oui. C’est tout l’intérêt de l’exercice. L’idée que le genou ne doit jamais dépasser les orteils est un mythe qui ne s’applique ni à la marche normale ni au travail de mobilité de la cheville. À chaque pas, le genou dépasse les orteils. Les bascules de cheville entraînent cette amplitude de façon contrôlée. Gardez le talon à plat et arrêtez-vous là où l’amplitude s’arrête naturellement.',
    },
  ],
  redFlags: {
    h2: 'Arrêtez et consultez un professionnel de santé si',
    bullets: [
      'vous sentez un pincement vif à l’avant de la cheville qui ne disparaît pas entre les répétitions',
      'la cheville se bloque ou accroche pendant le mouvement',
      'un gonflement apparaît à l’avant ou sur les côtés de la cheville après les bascules',
      'la douleur irradie vers le haut du tibia ou vers le bas dans le pied',
      'la cheville a lâché ou a été blessée récemment',
      'elle ne s’est pas améliorée après plusieurs semaines de travail de mobilité régulier',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito programme les bascules de cheville les jours de mobilité, avec les étirements du mollet et du soléaire. Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes.',
    more: [
      'Un centimètre gagné au test genou au mur en quelques semaines est significatif. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Bascules de cheville',
  campaign: 'ex-ankle-rocks-fr',
};
