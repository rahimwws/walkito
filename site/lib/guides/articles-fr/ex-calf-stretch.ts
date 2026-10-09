import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-calf-stretch.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const EX_CALF_STRETCH_FR: Guide = {
  lang: 'fr',
  page: 'exCalfStretch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Étirement du mollet et fasciite plantaire\u00A0: technique, dose',
  description:
    'Comment faire l’étirement du mollet genou tendu contre la fasciite plantaire et les mollets raides\u00A0: technique, séries, durée de maintien, données.',
  h1: 'Étirement du mollet pour la fasciite plantaire\u00A0: technique, séries et durée de maintien',
  lede:
    'L’étirement du mollet genou tendu cible le gastrocnémien, le gros muscle superficiel du mollet. Un gastrocnémien raide limite la flexion de la cheville, et dans une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une flexion dorsale de cheville réduite était le plus fort facteur de risque indépendant. La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet sa meilleure note, A.',
  takeaways: [
    'Une flexion dorsale de cheville réduite était le plus fort facteur de risque indépendant de fasciite plantaire dans une étude cas-témoins appariée, avec un odds ratio de 23,3 (Riddle et coll., 2003).',
    'Dans une série de 254\u00A0personnes atteintes de fasciite plantaire, 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien (Patel et DiGiovanni, 2011).',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note A, sa meilleure note (Koc et coll., 2023).',
    'Une méta-analyse de 2020 a trouvé un effet important des étirements du mollet et du fascia plantaire, même si la qualité des preuves allait de modérée à très faible (Siriphorn et Eksakulkla, 2020).',
    'Walkito commence à 3\u00A0maintiens de 30\u00A0secondes, chaque jambe.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Comment faire un étirement du mollet genou tendu\u00A0?',
      paragraphs: [
        'Tenez-vous face à un mur, les mains à plat contre lui à peu près à hauteur d’épaules. Reculez un pied d’environ 60\u00A0centimètres. Gardez la jambe arrière tendue, le talon appuyé au sol et les orteils pointés vers l’avant. Avancez les hanches vers le mur jusqu’à sentir un étirement dans le haut du mollet arrière. Tenez 30\u00A0secondes, puis changez de jambe.',
        'L’essentiel est de garder le genou arrière bien tendu. Cela isole le gastrocnémien, qui passe à la fois par le genou et par la cheville. Si vous pliez le genou, l’étirement passe au soléaire, le muscle profond du mollet, et c’est un autre exercice. Voir [étirement du soléaire](/fr/exercices/etirement-soleaire/) pour cette version.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: {
            level: 'strong',
            why: 'La recommandation de 2023 donne aux étirements du mollet la note A. Un mollet raide était le plus fort facteur de risque de fasciite plantaire dans une étude cas-témoins de 2003.',
          },
          dose: 'Walkito commence à 3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Les mains contre un mur. Reculez un pied, gardez ce genou tendu et le talon au sol. Avancez les hanches jusqu’à sentir un étirement dans le haut du mollet. Tenez 30\u00A0secondes.',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le haut du mollet de la jambe arrière',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Pourquoi un mollet raide cause-t-il une douleur au talon\u00A0?',
      keyFact: 'Dans une revue de 254\u00A0personnes atteintes de fasciite plantaire, un peu plus de la moitié avaient une rétraction isolée du gastrocnémien, et 23 à 30\u00A0% avaient les deux muscles du mollet raides (Patel et DiGiovanni, 2011).',
      paragraphs: [
        'Le gastrocnémien part de l’arrière du genou et descend jusqu’au talon par le tendon d’Achille. Le fascia plantaire prend le relais là où s’arrête le tendon d’Achille\u00A0: il passe sous l’os du talon et file vers les orteils. Quand le gastrocnémien est raide, il limite la capacité de la cheville à se plier vers le haut. Le fascia plantaire doit alors absorber plus de tension à chaque pas.',
        'Dans une étude cas-témoins appariée sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une flexion dorsale de cheville réduite avait un odds ratio de 23,3 pour la fasciite plantaire. C’était plus fort que l’IMC, le temps passé debout ou toute autre variable de l’étude.',
        'Par ailleurs, une revue de 254\u00A0personnes atteintes de fasciite plantaire a trouvé que 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien, et 23 à 30\u00A0% de plus une rétraction combinée du gastrocnémien et du soléaire. Autrement dit, un mollet raide n’est pas un détail. Il est présent chez la plupart des personnes atteintes.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'L’étirement du mollet aide-t-il en cas de fasciite plantaire\u00A0?',
      paragraphs: [
        'La recommandation de 2023 sur la douleur au talon a examiné les études disponibles sur les étirements et a donné aux étirements du fascia plantaire et du mollet la note **A**, sa meilleure. Cette note couvre ensemble l’étirement du fascia plantaire et l’étirement du mollet, car la plupart des protocoles comprennent les deux.',
        'Une revue systématique et méta-analyse de 2020 a regroupé les essais sur les étirements et a trouvé un effet important pour l’étirement du mollet comme pour l’étirement du fascia plantaire. Les auteurs ont jugé la qualité des preuves de modérée à très faible et ont appelé à des essais de meilleure qualité. L’effet restait malgré tout important, et comparable à celui d’autres traitements.',
        'Aucun essai n’isole l’étirement du mollet genou tendu seul dans la fasciite plantaire. Il est toujours testé au sein d’un programme. La recommandation le conseille avec l’[étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/) et un travail de renforcement comme les [montées sur pointes](/fr/exercices/montees-sur-pointes/).',
      ],
      cites: [CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec l’étirement du mollet\u00A0?',
      paragraphs: [
        'Plier le genou arrière. Dès que le genou se plie, le gastrocnémien se détend et l’étirement passe au soléaire. Gardez le genou arrière bien tendu pendant tout le maintien.',
        'Laisser le talon arrière se soulever. Si le talon décolle du sol, le mollet n’est pas étiré. Appuyez d’abord le talon au sol, puis penchez-vous vers l’avant jusqu’à sentir l’étirement.',
        'Tourner le pied arrière vers l’extérieur. Quand le pied tourne vers l’extérieur, l’étirement touche l’extérieur du mollet au lieu du muscle entier. Gardez les orteils pointés droit vers le mur.',
        'Tenir trop peu de temps. Un maintien de 10\u00A0secondes ne suffit pas pour qu’un étirement soutenu agisse sur la longueur du tissu. Tenez au moins 30\u00A0secondes par répétition.',
      ],
    },
    {
      h2: 'Qui devrait faire cet étirement, et qui devrait s’en passer\u00A0?',
      paragraphs: [
        'Cet étirement concerne toute personne avec une douleur au talon, une fasciite plantaire, des mollets raides à force d’être debout toute la journée ou à cause d’un sport qui charge le mollet, comme la course. Il figure dans les listes d’exercices des pages [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/), [mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) et [douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais).',
        'Passez-vous-en ou adaptez-le si vous avez un problème de tendon d’Achille qui fait mal pendant l’étirement. Dans ce cas, la douleur vient d’une autre structure, et charger le tendon d’Achille avec un étirement contre le mur n’est peut-être pas le bon point de départ. Voir [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/) pour l’approche propre au tendon d’Achille.',
        'Si vous ne pouvez pas atteindre le mur ou rester debout confortablement, un étirement assis avec une serviette donne une traction semblable sur le mollet. Passez une serviette autour de l’avant du pied, gardez le genou tendu et tirez les orteils vers vous.',
      ],
    },
    {
      h2: 'Comment l’étirement du mollet s’associe à l’étirement du soléaire',
      paragraphs: [
        'Le gastrocnémien et le soléaire forment ensemble le mollet. La version genou tendu étire le gastrocnémien. La version genou plié étire le soléaire. Ce sont deux exercices, pas deux versions du même.',
        'La plupart des programmes pour la fasciite plantaire comprennent les deux, car un mollet peut être raide dans l’un des muscles ou dans les deux. La recommandation ne les sépare pas. Walkito programme les deux dans la même séance quand les étirements sont au programme. La page [étirement du soléaire](/fr/exercices/etirement-soleaire/) couvre la version genou plié. Pour le programme complet d’étirements et de renforcement, voir [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Combien de temps tenir un étirement du mollet pour une fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'La plupart des protocoles utilisent des maintiens de 30\u00A0secondes, et c’est avec cela que Walkito commence. La recommandation de 2023 conseille les étirements du mollet sans fixer une durée de maintien unique, mais la plupart des essais sur lesquels elle s’appuie utilisaient 30\u00A0secondes par maintien, répétés 2 à 3\u00A0fois par jambe.',
    },
    {
      q: 'Faut-il étirer ses mollets tous les jours avec une fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'La recommandation de 2023 conseille les étirements du mollet et du fascia plantaire dans les soins quotidiens de la fasciite plantaire. Walkito place les étirements du mollet dans la plupart des séances. L’étirement demande peu de charge et présente peu de risques, donc le faire tous les jours est raisonnable tant que la douleur reste sous 6/10.',
    },
    {
      q: 'Quelle différence entre un étirement du mollet et un étirement du soléaire\u00A0?',
      cites: [CITE.patelGastrocnemius],
      a: 'L’étirement du mollet genou tendu cible le gastrocnémien, le gros muscle superficiel du mollet. L’étirement du soléaire se fait genou arrière plié, ce qui détend le gastrocnémien et isole le soléaire, plus profond. Chez les personnes atteintes de fasciite plantaire, plus de la moitié n’avaient que le gastrocnémien raide, et 23 à 30\u00A0% avaient les deux muscles du mollet raides (Patel et DiGiovanni, 2011).',
    },
    {
      q: 'Des mollets raides peuvent-ils causer une fasciite plantaire\u00A0?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Un mollet raide limite la flexion dorsale de la cheville, et c’était le plus fort facteur de risque indépendant de fasciite plantaire dans une étude cas-témoins (odds ratio de 23,3). Par ailleurs, 52 à 60\u00A0% de 254\u00A0personnes atteintes de fasciite plantaire avaient une rétraction isolée du gastrocnémien. Un mollet raide ne garantit pas une fasciite plantaire, mais il en augmente nettement le risque.',
    },
  ],
  redFlags: {
    h2: 'Arrêtez et consultez un professionnel de santé si',
    bullets: [
      'la douleur est dans le tendon d’Achille lui-même, pas dans le muscle du mollet',
      'vous sentez un claquement soudain ou une sensation de déchirure pendant l’étirement',
      'le mollet est gonflé, rouge ou chaud d’un seul côté',
      'la douleur a suivi une blessure ou une chute',
      'des engourdissements, des fourmillements ou des brûlures accompagnent la raideur du mollet',
      'elle ne s’est pas améliorée après plusieurs semaines d’étirements quotidiens',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito place l’étirement du mollet avec l’étirement du soléaire et l’étirement du fascia plantaire dans la plupart des séances. Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. L’application passe des étirements au renforcement à votre rythme.',
    more: [
      'Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Étirement du mollet (gastrocnémien, genou tendu)',
  campaign: 'ex-calf-stretch-fr',
};
