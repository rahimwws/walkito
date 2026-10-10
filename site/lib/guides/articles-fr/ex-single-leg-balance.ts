import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-single-leg-balance.ts` (2026-10-08), French
 * (France) with «vous». Figures, doses, grades and qualifiers are identical to
 * the English page. Citation notes live in the English file.
 */

export const EX_SINGLE_LEG_BALANCE_FR: Guide = {
  lang: 'fr',
  page: 'exSingleLegBalance',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Équilibre sur une jambe\u00A0: comment et pourquoi',
  description:
    'Tenir en équilibre sur une jambe\u00A0: technique, temps de maintien selon l’âge, progression les yeux fermés, ce que cela teste, erreurs fréquentes.',
  h1: 'Équilibre sur une jambe\u00A0: comment le faire, temps de maintien normaux et progression les yeux fermés',
  lede:
    'Tenir sur une jambe est l’un des tests les plus simples du contrôle du pied et de la cheville. C’est aussi un exercice. Chaque seconde passée dans cette position, les petits muscles du pied et de la cheville travaillent pour vous garder droit. Une étude de 2007 sur 549\u00A0adultes en bonne santé a montré que la capacité à tenir sur une jambe, les yeux ouverts et fermés, baisse régulièrement avec l’âge, et une méta-analyse de 2018 a montré que l’entraînement de l’équilibre réduisait de 46\u00A0% le risque d’entorse de la cheville chez les sportifs.',
  takeaways: [
    'Les adultes en bonne santé de 18 à 39\u00A0ans tenaient en moyenne 43,3\u00A0secondes sur une jambe les yeux ouverts et 9,4\u00A0secondes les yeux fermés. Entre 60 et 69\u00A0ans, la moyenne était de 26,9\u00A0secondes les yeux ouverts et tombait à 2,8\u00A0secondes les yeux fermés (Springer et coll., 2007).',
    'Une méta-analyse portant sur 3\u00A0577\u00A0sportifs a montré que l’entraînement de l’équilibre réduisait le risque d’entorse de la cheville de 46\u00A0% par rapport à l’absence d’intervention (Bellows et Wong, 2018).',
    'L’objectif équilibre de Walkito est de 30\u00A0secondes sur une jambe. Le test a lieu tous les 14\u00A0jours tant que l’objectif équilibre est actif.',
    'Fermer les yeux retire la vision des informations qui servent à l’équilibre, et le pied et la cheville doivent faire une plus grande part du travail. L’application propose l’équilibre les yeux fermés comme étape suivante après le maintien les yeux ouverts.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Comment tenir en équilibre sur une jambe\u00A0?',
      paragraphs: [
        'Placez-vous près d’un mur ou d’un plan de travail. Décollez un pied du sol en pliant légèrement le genou. Fixez un point droit devant vous. Laissez le pied d’appui osciller. **Ces oscillations sont le but\u00A0:** les petits muscles du pied et de la cheville travaillent pour vous garder droit.',
        'Tenez aussi longtemps que possible, jusqu’à 30\u00A0secondes, puis changez de côté. Trois maintiens par côté est une dose courante. Si vous ne tenez pas plus de quelques secondes, gardez le bout des doigts contre le mur et progressez peu à peu.',
      ],
      exercises: [
        {
          name: 'Équilibre sur une jambe',
          evidence: {
            level: 'moderate',
            why: 'L’entraînement de l’équilibre réduit le risque d’entorse de la cheville (méta-analyse de Bellows 2018). La station sur une jambe est une mesure clinique courante, avec des valeurs de référence (Springer 2007).',
          },
          dose: 'Walkito commence à 3 x 30\u00A0s de maintien, chaque côté',
          how: 'Tenez-vous sur un pied près d’un mur. Fixez un point. Laissez la cheville osciller. Tenez jusqu’à 30\u00A0secondes.',
          often: 'La plupart des séances',
          feel: 'Le pied et la cheville qui travaillent pour rester stables',
          stop: 'Une douleur vive dans le pied ou la cheville, pas seulement des oscillations',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: laissez le pied osciller, c’est l’exercice',
          alt: 'Une personne debout sur une jambe près d’un mur, le pied et la cheville mis en évidence',
        },
      ],
      cites: [CITE.springer, CITE.bellows],
    },
    {
      h2: 'Combien de temps devrait-on tenir sur une jambe\u00A0?',
      paragraphs: [
        'Une étude de 2007 a testé 549\u00A0adultes en bonne santé de différents âges. Les résultats donnent un repère approximatif, pas un seuil de réussite ou d’échec.',
      ],
      table: {
        caption: 'Temps moyens de station sur une jambe, yeux ouverts et fermés (Springer 2007)',
        head: ['Tranche d’âge', 'Yeux ouverts (secondes)', 'Yeux fermés (secondes)'],
        rows: [
          ['18-39', '43,3', '9,4'],
          ['40-49', '40,3', '7,3'],
          ['50-59', '37,0', '4,8'],
          ['60-69', '26,9', '2,8'],
          ['70-79', '15,0', '2,0'],
          ['80-99', '6,2', '1,3'],
        ],
      },
      after: [
        'Les chiffres chutent nettement dès que les yeux se ferment, surtout après 50\u00A0ans. La version yeux fermés est donc un test bien plus sensible du contrôle du pied et de la cheville. C’est aussi pourquoi l’application Walkito propose une progression les yeux fermés après le maintien les yeux ouverts.',
        '**Ce qui compte, plus que de correspondre au tableau, c’est que votre temps progresse au fil des semaines et que les deux côtés soient à peu près égaux.** Un grand écart entre les jambes peut évoquer un déficit de force ou de stabilité d’un côté.',
      ],
      cites: [CITE.springer],
    },
    {
      h2: 'La progression les yeux fermés',
      paragraphs: [
        'Fermer les yeux retire l’information visuelle que votre cerveau utilise normalement pour l’équilibre. Les propriocepteurs du pied et de la cheville, les capteurs qui détectent la position et le mouvement, doivent alors faire une plus grande part du travail. **C’est une version plus difficile du même exercice, pas un autre exercice.**',
        'Placez-vous près d’un mur par sécurité. Fermez les yeux et tenez aussi longtemps que possible. La plupart des gens voient leur temps tomber à une fraction de leur temps les yeux ouverts. Cet écart se réduit avec l’entraînement.',
        'L’application Walkito propose l’équilibre les yeux fermés comme exercice à part\u00A0: 3\u00A0maintiens de 20\u00A0secondes, deux pieds (en alternance). Il s’ouvre comme progression une fois que l’objectif équilibre les yeux ouverts est bien acquis.',
      ],
    },
    {
      h2: 'Pourquoi l’équilibre compte-t-il pour les douleurs du pied\u00A0?',
      keyFact: 'Pour les entorses de la cheville, une analyse groupée de 8\u00A0études et 3\u00A0577\u00A0sportifs a montré que l’entraînement de l’équilibre réduisait le risque d’entorse de 46\u00A0% par rapport à l’absence d’intervention (Bellows et Wong, 2018).',
      paragraphs: [
        '**L’équilibre n’est pas séparé de la force du pied.** Quand vous tenez sur une jambe, tous ces éléments travaillent ensemble\u00A0:',
        {
          list: [
            'Les muscles intrinsèques du pied (les petits muscles à l’intérieur du pied qui soutiennent la voûte).',
            'Les muscles du mollet.',
            'Le tibial antérieur.',
            'Les stabilisateurs de la hanche.',
          ],
        },
        'Un déficit à n’importe quel endroit de cette chaîne oblige le pied à compenser.',
        'Pour la fasciite plantaire et les pieds plats, l’entraînement de l’équilibre figure dans les programmes d’exercices avec les étirements et le renforcement, car il entraîne toute la chaîne à la fois. Un essai de 2023 sur 52\u00A0personnes aux pieds plats souples a montré qu’un programme associant pied court, travail de la cheville, renforcement de la hanche, étirements et travail d’équilibre modifiait la forme de la voûte davantage que dans un groupe témoin. L’équilibre n’était pas isolé dans cet essai, mais il faisait partie du programme qui s’est montré efficace.',
        'Pour les entorses de la cheville en particulier, une méta-analyse de 2018 portant sur 8\u00A0études et 3\u00A0577\u00A0sportifs a montré que l’entraînement de l’équilibre réduisait le risque d’entorse de 46\u00A0% par rapport à l’absence d’intervention. C’est le résultat le plus solide qui justifie d’inclure l’équilibre dans un programme pour le pied.',
      ],
      cites: [CITE.bellows, CITE.brijwasi],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec l’équilibre sur une jambe\u00A0?',
      paragraphs: [
        {
          list: [
            '**Regarder le sol.** Vos yeux doivent fixer un point à hauteur des yeux. Regarder vers le bas déplace votre poids vers l’avant et rend l’exercice plus facile, ce qui lui fait perdre son intérêt.',
            '**Verrouiller le genou d’appui.** Une légère flexion garde les muscles actifs. Un genou verrouillé transfère la charge à l’articulation plutôt qu’aux muscles qui l’entourent.',
            '**Essayer de ne pas osciller.** Les oscillations sont l’exercice. Les petites corrections que fait votre pied pour rester droit sont ce qui développe la proprioception et le contrôle de la cheville. Agripper le sol en recroquevillant les orteils ou vous crisper pour supprimer tout mouvement réduit l’effet de l’entraînement.',
            '**Se tenir trop loin du mur.** Vous devez être assez près pour vous rattraper si vous perdez l’équilibre, surtout pendant la version yeux fermés. La sécurité d’abord.',
          ],
        },
      ],
    },
    {
      h2: 'Versions plus faciles et plus difficiles',
      paragraphs: [
        {
          list: [
            '**Plus facile\u00A0:** Si vous ne tenez pas plus de quelques secondes sur une jambe, gardez le bout des doigts contre un mur et progressez. Même un contact léger donne au cerveau une information d’équilibre en plus. Retirez un doigt à la fois à mesure que vous progressez.',
            '**Plus difficile\u00A0:** Si 30\u00A0secondes sur un sol dur vous semblent faciles, essayez de tenir sur une serviette pliée ou un coussin. La surface molle fait travailler davantage la cheville à chaque oscillation. L’application propose un exercice d’équilibre sur un coussin comme progression suivante.',
            '**Le plus difficile\u00A0:** La progression la plus difficile est l’équilibre sur une jambe les yeux fermés sur une surface molle. Elle retire à la fois l’information visuelle et la stabilité du sol, et laisse le pied et la cheville faire presque tout le travail.',
          ],
        },
        'Pour des exercices liés qui renforcent la chaîne, voir les [montées sur pointes](/fr/exercices/montees-sur-pointes/), les [relevés des orteils](/fr/exercices/releves-orteils-mur/) et l’[exercice du pied court](/fr/exercices/pied-court/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Combien de temps devrait-on tenir sur une jambe\u00A0?',
      cites: [CITE.springer],
      a: 'Une étude de valeurs de référence de 2007 sur 549\u00A0adultes en bonne santé a montré que les 18-39\u00A0ans tenaient en moyenne 43,3\u00A0secondes les yeux ouverts et 9,4\u00A0secondes les yeux fermés. Entre 60 et 69\u00A0ans, c’était 26,9\u00A0secondes les yeux ouverts et 2,8\u00A0secondes les yeux fermés (Springer 2007). L’objectif équilibre de Walkito est de 30\u00A0secondes par côté.',
    },
    {
      q: 'L’équilibre sur une jambe aide-t-il à prévenir les entorses de la cheville\u00A0?',
      cites: [CITE.bellows],
      a: 'Une méta-analyse de 2018 portant sur 8\u00A0études et 3\u00A0577\u00A0sportifs a montré que l’entraînement de l’équilibre réduisait le risque d’entorse de la cheville de 46\u00A0% par rapport à l’absence d’intervention (Bellows et Wong, 2018). La plupart des programmes étudiés comprenaient des exercices d’équilibre comme la station sur une jambe, avec d’autres entraînements.',
    },
    {
      q: 'Pourquoi l’équilibre sur une jambe est-il plus dur les yeux fermés\u00A0?',
      cites: [CITE.springer],
      a: 'Votre cerveau utilise ensemble la vision, les signaux de l’oreille interne et la proprioception (les capteurs du pied et de la cheville) pour l’équilibre. Fermer les yeux retire une des trois sources, et les deux autres doivent porter plus de charge. Dans les données de Springer 2007, les temps yeux fermés étaient une fraction des temps yeux ouverts à tous les âges.',
    },
    {
      q: 'À quelle fréquence s’entraîner à l’équilibre sur une jambe\u00A0?',
      a: 'Un entraînement quotidien convient, car la charge est faible. Walkito le place dans la plupart des séances. Même quelques minutes d’entraînement par jour peuvent améliorer les temps de maintien au fil des semaines. Ce qui compte, c’est la régularité, pas la durée.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous perdez souvent l’équilibre ou faites des chutes qui ne s’expliquent ni par le sol ni par les chaussures',
      'une cheville lâche à répétition, surtout après une entorse ancienne',
      'vous avez des engourdissements, des fourmillements ou une perte de sensibilité dans le pied ou le bas de la jambe',
      'vous avez des vertiges ou une sensation que tout tourne quand vous changez de position',
      'votre équilibre change brusquement sans explication',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito intègre l’équilibre sur une jambe et l’équilibre les yeux fermés dans un plan, avec les montées sur pointes, les étirements et les exercices du pied. L’objectif équilibre est de 30\u00A0secondes sur chaque jambe. Tous les 14\u00A0jours, un court test vérifie combien de temps vous tenez, et l’écart entre les deux côtés est suivi aussi.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Une fois l’objectif équilibre atteint, le test passe à tous les 28\u00A0jours et un nouvel objectif prend le relais. Walkito est un programme d’exercices. Il ne pose pas de diagnostic.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Équilibre sur une jambe',
  campaign: 'ex-single-leg-balance-fr',
};
