import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-hip-abduction.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const EX_HIP_ABDUCTION_FR: Guide = {
  lang: 'fr',
  page: 'exHipAbduction',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Abduction de hanche\u00A0: soutenir le pied et la voûte',
  description:
    'L’abduction de hanche avec un élastique pour mieux contrôler le pied et la voûte\u00A0: technique, séries, lien hanche-pied, ce que dit la recherche.',
  h1: 'Abduction de hanche\u00A0: comment elle aide vos pieds et comment la faire',
  lede:
    'L’abduction de hanche est le mouvement qui écarte une jambe sur le côté, loin de l’axe du corps. Quand les muscles abducteurs de la hanche sont faibles, le genou rentre vers l’intérieur pendant la marche et le pied part trop en pronation, ce qui aplatit la voûte. Renforcer le moyen fessier avec une abduction de hanche à l’élastique peut réduire cet affaissement vers l’intérieur et soulager la voûte, le fascia plantaire et l’intérieur de la cheville.',
  takeaways: [
    'Un essai de 2023 sur 52\u00A0personnes aux pieds plats souples a montré qu’un programme combiné de six semaines, avec renforcement de la hanche, exercices du pied court, travail de la cheville et étirements, améliorait deux mesures de la forme de la voûte par rapport à un groupe témoin (Brijwasi et coll., 2023).',
    'Le moyen fessier contrôle le bassin et la cuisse en appui sur une jambe. Quand il est faible, le genou dérive vers l’intérieur et le pied part davantage en pronation, ce qui charge la voûte interne.',
    'Une étude transversale de 2013 sur environ 1\u00A0900\u00A0adultes de la Framingham Foot Study n’a trouvé aucun lien entre des pieds plats et une douleur au bas du dos, mais un faible lien entre un pied qui s’affaisse vers l’intérieur pendant la marche et une douleur au bas du dos chez les femmes (Menz et coll., 2013).',
    'Walkito propose cet exercice sous forme d’abduction de hanche debout avec un élastique. La position debout oblige la jambe d’appui à se stabiliser pendant que la jambe qui travaille s’écarte.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Qu’est-ce que l’abduction de hanche\u00A0?',
      paragraphs: [
        'L’abduction de hanche consiste à écarter la jambe sur le côté, loin du centre du corps. Le principal muscle en jeu est le moyen fessier, situé sur la face externe de la hanche. Il garde le bassin à niveau quand vous tenez sur une jambe et empêche la hanche opposée de s’abaisser.',
        'Cet exercice figure dans les programmes pour le pied, car la hanche, le genou et le pied sont liés. Quand le moyen fessier est faible, la cuisse tourne vers l’intérieur pendant la marche et en position debout, le genou suit, et le pied part en pronation plus qu’il ne le devrait. La voûte s’aplatit sous cette force vers l’intérieur. Renforcer la hanche réduit cette réaction en chaîne.',
      ],
    },
    {
      h2: 'Comment faire l’abduction de hanche debout avec un élastique\u00A0?',
      paragraphs: [
        'Tenez-vous debout avec un élastique passé autour des deux chevilles ou juste au-dessus des genoux. Tenez-vous à un mur ou à une chaise pour l’équilibre. Transférez votre poids sur la jambe d’appui.',
        'Écartez l’autre jambe droit sur le côté, les orteils pointés vers l’avant et le buste droit. Ne vous penchez pas du côté opposé. Redescendez lentement et recommencez.',
        'Poussez par le talon de la jambe qui travaille, pas par les orteils. **Le mouvement se fait à la hanche, pas à la taille.** L’écart n’a pas besoin d’être grand. Environ 30 à 45\u00A0degrés par rapport au sol suffisent si la technique reste propre. Un écart plus grand avec le buste qui penche sur le côté fait moins travailler le moyen fessier.',
      ],
      exercises: [
        {
          name: 'Abduction de hanche, debout, avec un élastique',
          evidence: { level: 'moderate', why: 'Fait partie du programme combiné qui a amélioré la forme de la voûte dans un essai randomisé de 2023 (Brijwasi 2023). Le renforcement de la hanche pour l’alignement du pied repose sur un raisonnement biomécanique, mais n’a pas été isolé dans un essai propre sur les résultats au niveau du pied.' },
          dose: 'Walkito commence à 3\u00A0séries de 15, chaque jambe',
          how: 'Tenez-vous debout avec un élastique autour des deux chevilles. Tenez-vous à un mur pour l’équilibre. Écartez une jambe droit sur le côté, les orteils vers l’avant. Poussez par le talon. Redescendez lentement.',
          often: 'Jours de renforcement, quand l’objectif gauche-droite est dans votre plan',
          feel: 'Un travail à l’extérieur de la hanche',
          stop: 'La douleur atteint 6/10',
          media: 'hip_abduction',
          caption: 'Abduction de hanche\u00A0: écartez une jambe sur le côté contre l’élastique',
          alt: 'Une personne debout avec un élastique autour des chevilles, qui écarte une jambe sur le côté',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Comment la hanche influence-t-elle le pied et la voûte\u00A0?',
      keyFact: 'Une étude de 2013 sur environ 1\u00A0900\u00A0adultes de la Framingham Foot Study n’a trouvé aucun lien entre pieds plats et douleur au bas du dos, mais un faible lien entre un pied qui s’affaisse vers l’intérieur et une douleur au dos chez les femmes (Menz et coll., 2013).',
      paragraphs: [
        'Le lien passe par une chaîne biomécanique\u00A0: hanche, genou, cheville, pied. Quand le moyen fessier ne peut pas garder le bassin à niveau en appui sur une jambe\u00A0:',
        {
          list: [
            'La cuisse tourne vers l’intérieur.',
            'Le genou suit et s’affaisse vers l’axe du corps.',
            'Cette rotation force le pied à partir en pronation\u00A0: la cheville bascule vers l’intérieur et la voûte s’aplatit.',
          ],
        },
        'C’est pourquoi beaucoup de personnes avec des pieds plats ou une douleur de voûte ont aussi des hanches faibles. La voûte ne lâche pas toute seule. **Elle est surchargée par le haut.** Renforcer la hanche réduit cette charge venue d’en haut.',
        'Une étude transversale de 2013 issue de la Framingham Foot Study a porté sur environ 1\u00A0900\u00A0adultes vivant à domicile. Des pieds plats en eux-mêmes n’étaient pas liés à une douleur au bas du dos, mais un pied qui s’affaissait vers l’intérieur pendant la marche montrait un faible lien avec une douleur au bas du dos chez les femmes, ce qui suggère que la chaîne pied-hanche-dos peut agir dans les deux sens.',
        'L’essai sur les pieds plats de Brijwasi et coll. (2023) comprenait un renforcement de la hanche, avec des exercices du pied court, un travail de la cheville et des étirements. Le programme combiné a amélioré la forme de la voûte en six semaines. L’étude n’a pas séparé la part propre du renforcement de la hanche, mais sa présence reflète le raisonnement biomécanique.',
      ],
      cites: [CITE.menz, CITE.brijwasi],
    },
    {
      h2: 'À qui l’abduction de hanche profite-t-elle en cas de douleur au pied\u00A0?',
      paragraphs: [
        'Les personnes avec des pieds plats ou une pronation excessive en profitent, car l’exercice agit sur une cause fréquente, située plus haut, de l’affaissement de la voûte. Si vos genoux ont tendance à rentrer vers l’intérieur quand vous vous accroupissez ou marchez, des abducteurs de hanche faibles y contribuent probablement.',
        'Les coureurs en profitent, car l’appui sur une jambe est la posture de base de la course. Chaque foulée retombe sur un pied. Un moyen fessier faible de ce côté laisse le genou et le pied s’affaisser vers l’intérieur, ce qui peut contribuer à la périostite tibiale, à la fasciite plantaire et au syndrome fémoro-patellaire (le «\u00A0genou du coureur\u00A0»). Voir [douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais) et [exercices pour la périostite tibiale](/fr/periostite-tibiale-exercices/) pour en savoir plus.',
        'Les personnes qui restent debout de longues heures, en particulier le personnel infirmier et les vendeurs, peuvent aussi en profiter. La station debout prolongée fatigue le moyen fessier, et en fin de journée de travail le contrôle de la hanche faiblit. Voir [mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) pour des exercices à associer à l’abduction de hanche.',
      ],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec l’abduction de hanche debout\u00A0?',
      paragraphs: [
        {
          list: [
            '**Pencher le buste du côté opposé** est l’erreur la plus fréquente. Quand vous vous penchez, le corps utilise l’élan et l’inclinaison latérale au lieu du moyen fessier. Restez droit. Un petit écart avec le buste droit vaut mieux qu’un grand écart en vous penchant.',
            '**Tourner le pied vers l’extérieur**, orteils vers le plafond, est une autre erreur. Le travail passe alors aux fléchisseurs de la hanche et au tenseur du fascia lata au lieu du moyen fessier. Gardez les orteils pointés vers l’avant ou légèrement vers le bas.',
            '**Balancer la jambe** est un troisième problème. L’exercice doit être lent et contrôlé, surtout à la descente. La phase de descente (excentrique) est celle où se fait une grande partie du renforcement. Si la jambe retombe vite, le muscle ne fait pas le travail.',
            '**Enfin, laisser s’abaisser la hanche de la jambe d’appui** indique que l’élastique est trop fort ou que le moyen fessier du côté d’appui se fatigue. Le bassin doit rester à niveau tout du long. Prenez un élastique plus léger ou faites une pause entre les séries.',
          ],
        },
      ],
    },
    {
      h2: 'Que dit la recherche\u00A0?',
      paragraphs: [
        'Le raisonnement biomécanique qui justifie l’abduction de hanche dans les programmes pour le pied est bien établi\u00A0: des abducteurs de hanche faibles laissent le genou s’affaisser vers l’intérieur, ce qui augmente la pronation du pied et la charge sur la voûte. Plusieurs études d’observation confirment le lien entre faiblesse de la hanche et problèmes d’alignement du membre inférieur.',
        'Pour les résultats cliniques, les données les plus solides viennent de programmes combinés. L’essai de 2023 de Brijwasi et coll. comprenait un renforcement de la hanche dans un programme d’exercices de six semaines pour 52\u00A0personnes aux pieds plats souples. Le programme a amélioré la forme de la voûte. Le renforcement de la hanche n’a pas été isolé dans son propre essai sur les pieds plats ou la fasciite plantaire.',
        'Un essai randomisé de 2024 sur 45\u00A0femmes aux pieds plats souples a comparé, sur six semaines\u00A0:',
        {
          list: [
            'Des exercices du pied court.',
            'Un programme d’exercices combiné.',
            'Des exercices du pied court avec abduction de hanche isométrique.',
          ],
        },
        'Les trois groupes ont réduit l’affaissement du naviculaire (à quel point la voûte s’abaisse sous le poids du corps). Le groupe qui ajoutait l’abduction de hanche isométrique a le plus progressé, mais son affaissement du naviculaire n’était pas significativement meilleur que celui du programme combiné\u00A0; son balancement latéral, si (Zarali et coll., 2024). Cela laisse penser que le travail de la hanche pourrait apporter quelque chose aux exercices du pied, d’après un seul petit essai.',
        '**Les données soutiennent l’abduction de hanche comme élément d’un programme plus large pour le pied.** Ce n’est pas un exercice à lui seul contre la douleur de voûte, mais il comble un manque que laissent les exercices centrés sur le pied. Pages liées\u00A0: [exercices pour pieds plats](/fr/exercices-pieds-plats/), [inversion de cheville avec élastique](/fr/exercices/inversion-cheville-elastique/), [exercice du pied court](/fr/exercices/pied-court/).',
      ],
      cites: [CITE.zarali, CITE.brijwasi, CITE.cheng],
    },
  ],
  faq: [
    {
      q: 'L’abduction de hanche aide-t-elle en cas de pieds plats\u00A0?',
      cites: [CITE.brijwasi],
      a: 'L’abduction de hanche renforce le moyen fessier, qui contrôle l’alignement du genou et du pied par le haut. Un essai de 2023 sur 52\u00A0personnes aux pieds plats souples a utilisé un renforcement de la hanche au sein d’un programme combiné et a constaté une amélioration de la forme de la voûte en six semaines (Brijwasi 2023). Elle est surtout efficace dans un programme plus large, pas seule.',
    },
    {
      q: 'Combien d’abductions de hanche faire\u00A0?',
      a: 'Walkito commence à 3\u00A0séries de 15\u00A0répétitions pour chaque jambe, debout, avec un élastique autour des chevilles. C’est un exercice à nombreuses répétitions et faible charge, car le moyen fessier a besoin d’endurance pour la marche, pas d’une force maximale.',
    },
    {
      q: 'Peut-on faire l’abduction de hanche allongé sur le côté\u00A0?',
      a: 'L’abduction de hanche allongé sur le côté fait travailler le même muscle. La version debout ajoute la difficulté de l’équilibre sur la jambe d’appui, ce qui entraîne aussi la hanche de ce côté. Walkito utilise la version debout, car elle se rapproche davantage de la marche et de l’appui sur une jambe. Si la position debout est trop instable, la version allongée sur le côté est un point de départ raisonnable.',
    },
    {
      q: 'Quel élastique utiliser pour l’abduction de hanche\u00A0?',
      a: 'Un élastique en boucle de résistance légère à moyenne convient le mieux. Placez-le autour des deux chevilles ou juste au-dessus des genoux. L’élastique doit offrir assez de résistance pour que les dernières répétitions de chaque série soient difficiles, sans vous obliger à vous pencher sur le côté ou à balancer la jambe.',
    },
    {
      q: 'Pourquoi l’abduction de hanche fait-elle partie d’un programme pour les pieds\u00A0?',
      cites: [CITE.menz],
      a: 'La hanche contrôle ce qui se passe au genou et au pied. Un moyen fessier faible laisse le genou s’affaisser vers l’intérieur, ce qui force le pied à partir en pronation et aplatit la voûte. Une étude de 2013 sur environ 1\u00A0900\u00A0adultes a trouvé un faible lien entre un pied qui s’affaisse vers l’intérieur pendant la marche et une douleur au bas du dos chez les femmes, alors que des pieds plats seuls n’étaient pas liés à une douleur au dos (Menz 2013). Renforcer la hanche réduit la surcharge venue d’en haut sur la voûte.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez une douleur vive à la hanche qui limite l’appui',
      'le genou s’affaisse vers l’intérieur et vous n’arrivez pas à le contrôler malgré l’entraînement',
      'vous avez une douleur à l’aine ou une sensation de claquement dans la hanche qui s’aggrave avec l’exercice',
      'la douleur au pied ou à la voûte s’aggrave malgré un exercice régulier pendant plusieurs semaines',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito ajoute l’abduction de hanche les jours de renforcement dès qu’un objectif d’équilibre gauche-droite entre dans votre plan. Elle s’ajoute aux exercices des muscles intrinsèques du pied et au travail du mollet, pour que la voûte soit soutenue par le haut et par le bas. Les séances durent 3, 5 ou 10\u00A0minutes, et un test tous les 14\u00A0jours suit vos progrès.',
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Abduction de hanche',
  campaign: 'ex-hip-abduction-fr',
};
