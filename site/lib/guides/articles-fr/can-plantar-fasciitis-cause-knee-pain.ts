import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/can-plantar-fasciitis-cause-knee-pain.ts
 * (2026-10-19), written around «fasciite plantaire douleur genou» and
 * «fasciite plantaire mal de dos / hanche». «Vous», terminology and exercise
 * names as in `lib/guides/fr.ts`, articles-fr/flat-feet-knee-pain.ts and the
 * other articles-fr pages. Figures, doses, grades, hedges and sources are
 * identical to the English page after its fact-check. Same CITE keys and media
 * ids. Emergency department rendered as «urgences (15 ou 112)».
 */

export const PF_KNEE_HIP_BACK_FR: Guide = {
  lang: 'fr',
  page: 'pfKneeHipBack',
  mainSource: CITE.kamonseki,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fasciite plantaire\u00A0: mal au genou, à la hanche ou au dos\u00A0?',
  description:
    'Fasciite plantaire et mal au genou, à la hanche ou au dos\u00A0: ce que montrent les études sur la marche, ce qui reste à prouver, exercices dosés.',
  h1: 'La fasciite plantaire peut-elle provoquer des douleurs au genou, à la hanche ou au dos\u00A0?',
  lede:
    'Elle peut y contribuer, mais personne ne l’a prouvé. Un talon douloureux change votre façon de marcher\u00A0: les études sur la [fasciite plantaire](/fr/fasciite-plantaire/) montrent que l’on met moins de poids sur le talon et plus sur l’avant du pied (Phillips et McClinton, 2017), et ce déplacement peut charger différemment le genou, la hanche et le dos. Aucune étude n’a suivi des personnes ayant mal au talon pour voir si une douleur au genou, à la hanche ou au dos apparaît ensuite\u00A0: les données sont donc des associations, pas une preuve de cause.',
  intro: [
    'Cette page passe en revue le genou, la hanche, le dos, le mollet et la cheville un par un, dit ce que les études ont trouvé et quelle était leur taille, explique ce que signifie le seul essai de renforcement de la hanche dans la fasciite plantaire (Kamonseki et coll., 2016), et donne les exercices et les doses qui conviennent. Si votre douleur au genou ou au dos est apparue en premier, ou si vous avez les pieds plats, voyez plutôt [pieds plats et douleur au genou](/fr/pieds-plats-douleur-genou/) et [pieds plats et mal de dos](/fr/pieds-plats-mal-de-dos/).',
  ],
  takeaways: [
    'Dans une revue de 19\u00A0études sur la marche, les personnes ayant une douleur sous le talon mettaient moins de charge sur le talon et plus sur le médio-pied et l’avant-pied, alors que le temps passé sur chaque pied restait à peu près le même (Phillips et McClinton, 2017).',
    'Chez 18\u00A0personnes sans douleur au pied, une bille douloureuse placée sous le talon suffisait à raccourcir le temps passé sur cette jambe à chaque pas (Levins et coll., 1998).',
    'Parmi 40\u00A0personnes ayant une arthrose du genou, 52\u00A0% avaient mal au talon et 62\u00A0% avaient un fascia plantaire épaissi à l’échographie. L’étude n’avait pas de groupe de comparaison\u00A0: elle ne peut donc pas montrer lequel a causé l’autre (Miladi et coll., 2023).',
    'Dans un essai sur 83\u00A0personnes ayant une fasciite plantaire, ajouter un renforcement du pied et de la hanche aux étirements n’a pas réduit la douleur au talon davantage que les étirements seuls sur huit semaines. Les trois groupes se sont améliorés (Kamonseki et coll., 2016).',
    'Un mollet raide est le lien le mieux étudié\u00A0: les personnes dont la cheville se pliait de 0\u00A0degré ou moins avaient un risque de fasciite plantaire 23,3\u00A0fois plus élevé que celles qui dépassaient 10\u00A0degrés (Riddle et coll., 2003).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La fasciite plantaire peut-elle donner mal ailleurs dans la jambe\u00A0?',
      keyFact: 'Une revue de 19\u00A0études sur la marche a montré que les personnes ayant une douleur sous le talon déplacent la charge du talon vers le médio-pied et l’avant-pied (Phillips et McClinton, 2017).',
      paragraphs: [
        '**Probablement parfois, par la façon dont vous marchez.** La fasciite plantaire ne remonte pas le long de la jambe. Ce qui change, c’est votre marche. Quand le talon fait mal, vous l’attaquez plus doucement, poussez moins fort et vous appuyez sur l’avant du pied. Une revue de 2017 portant sur 19\u00A0études a trouvé exactement ce schéma\u00A0: moins de charge sur le talon au premier contact, et plus de temps et de charge sur le médio-pied et l’avant-pied.',
        'Le changement peut être assez faible pour passer inaperçu. Dans cette revue, le temps total passé au sol par chaque pied était à peu près le même que chez les personnes sans douleur au talon. Dans une étude en laboratoire, 18\u00A0personnes sans douleur au pied ont marché avec une bille sous le talon, et avec les plus grosses billes elles passaient moins de temps sur cette jambe (Levins et coll., 1998). C’est une légère boiterie, du moins dans un court test en laboratoire avec une douleur soudaine.',
        'Voici où en sont les données pour chaque région\u00A0:',
      ],
      table: {
        caption: 'Fasciite plantaire et douleur ailleurs\u00A0: ce que montrent les études',
        head: ['Région', 'Études directes', 'Niveau'],
        rows: [
          ['Mollet', 'Mollet raide lié à la fasciite plantaire', 'Modéré'],
          ['Cheville et Achille', 'Fascia plus épais avec atteinte d’Achille', 'Faible'],
          ['Genou', 'Douleur au talon fréquente dans l’arthrose du genou', 'Faible'],
          ['Hanche', 'Contrôle de hanche différent chez les coureurs', 'Faible'],
          ['Dos', 'Aucune étude dans la fasciite plantaire', 'Aucun'],
        ],
      },
      after: [
        '«\u00A0Faible\u00A0» désigne de petites études qui ont mesuré les deux choses au même moment. Elles montrent que les deux problèmes vont souvent ensemble. Elles ne peuvent pas montrer que le talon a causé l’autre douleur, ni l’inverse.',
      ],
      cites: [CITE.phillipsGait, CITE.levinsGait],
    },
    {
      h2: 'La fasciite plantaire peut-elle donner mal au genou\u00A0?',
      keyFact: 'Parmi 40\u00A0personnes ayant une arthrose du genou, 52\u00A0% avaient mal au talon et 62\u00A0% avaient un fascia plantaire épaissi à l’échographie (Miladi et coll., 2023).',
      paragraphs: [
        '**Les deux apparaissent souvent ensemble, mais aucune étude ne montre que le talon cause la douleur au genou.** L’étude la plus proche a porté sur 40\u00A0personnes ayant une arthrose du genou. 21 d’entre elles (52\u00A0%) avaient mal au talon, et une échographie montrait un fascia plantaire épaissi chez 25 (62\u00A0%). Les personnes ayant une fasciite plantaire avaient plus souvent une cheville raide qui se pliait mal vers le haut (Miladi et coll., 2023).',
        'Cette étude n’avait pas de groupe de comparaison sans arthrose du genou\u00A0: elle ne peut donc pas dire que la douleur au talon y est plus fréquente que d’habitude. Les auteurs soulignent que les deux problèmes partagent des facteurs de risque\u00A0: l’âge, le poids, le type de travail et des chaussures mal adaptées. Une cheville raide pourrait être le lien commun, plutôt qu’une articulation qui causerait la douleur de l’autre.',
        'Si votre genou a commencé à faire mal du même côté après le début de la douleur au talon, et qu’il se calme quand le talon s’apaise, une marche modifiée est une hypothèse raisonnable. Si le genou gonfle, se bloque, accroche ou se dérobe, il a son propre problème et demande son propre examen.',
        'Pour une douleur autour de la rotule, la recommandation de 2019 sur le syndrome fémoro-patellaire préconise des exercices qui associent la hanche et le genou (Willy et coll., 2019). Si vous avez aussi les pieds plats, le versant pied de la question du genou se trouve dans [pieds plats et douleur au genou](/fr/pieds-plats-douleur-genou/).',
      ],
      cites: [CITE.miladiKneeOa, CITE.willyPfpGuideline],
    },
    {
      h2: 'La fasciite plantaire peut-elle donner mal à la hanche\u00A0?',
      keyFact: 'Les coureurs ayant une fasciite plantaire montraient une activité plus faible du moyen fessier et une plus forte bascule du bassin que les coureurs sans fasciite, dans une étude de 15 contre 15 (Kongtong et Khongprasert, 2025).',
      paragraphs: [
        '**Il existe un lien avec la hanche, mais on ne sait pas lequel vient en premier.** Une étude en laboratoire de 2025 a comparé 15\u00A0coureurs de fond ayant une fasciite plantaire et 15 sans. Les coureurs ayant mal au talon sollicitaient moins le moyen fessier et le grand fessier, les muscles latéraux et postérieurs de la hanche, à certains moments de la foulée. Leur bassin basculait davantage du côté opposé, et leur genou et leur talon partaient davantage vers l’intérieur (Kongtong et Khongprasert, 2025).',
        'Cela correspond à deux explications, et l’étude ne peut pas trancher. Un contrôle de hanche faible pourrait laisser la jambe tourner vers l’intérieur et charger davantage la voûte. Ou la douleur au talon pourrait changer votre façon de courir, et la hanche suivrait. Aucune étude n’a mesuré la douleur à la hanche chez les personnes ayant une fasciite plantaire.',
        'Une étude de 2009 portant sur 25\u00A0coureuses ayant des antécédents de fasciite plantaire et 25\u00A0coureuses appariées a montré que le groupe fasciite plantaire atterrissait avec une montée de force plus rapide et avait des voûtes plus basses, mais sans différence de mouvement de l’arrière-pied et, contrairement aux études sur le mollet, avec une cheville qui se pliait davantage (Pohl et coll., 2009). Les coureurs trouveront plus de détails dans [exercices pour les pieds des coureurs](/fr/exercices-pieds-coureurs/).',
      ],
      cites: [CITE.kongtongHip, CITE.pohlRunners],
    },
    {
      h2: 'La fasciite plantaire peut-elle donner mal au dos\u00A0?',
      keyFact: 'Aucune étude n’a mesuré si la fasciite plantaire entraîne des douleurs du bas du dos. Pour les pieds plats, la Framingham Foot Study portant sur 1\u00A0930\u00A0adultes n’a trouvé aucun lien avec la posture du pied en position debout (Menz et coll., 2013).',
      paragraphs: [
        '**Nous n’avons trouvé aucune étude qui teste si la fasciite plantaire entraîne un mal de dos.** Certaines pages de cabinets affirment qu’une boiterie due à une douleur au talon cause «\u00A0souvent\u00A0» un mal de dos. C’est un enchaînement possible, pas un enchaînement mesuré.',
        'Les données les plus proches portent sur la forme du pied, pas sur la douleur au talon. Dans la Framingham Foot Study, la posture en pied plat n’était pas liée aux douleurs du bas du dos, et seul un pied qui tournait vers l’intérieur pendant la marche montrait un petit lien, chez les femmes (Menz et coll., 2013). Les détails se trouvent dans [pieds plats et mal de dos](/fr/pieds-plats-mal-de-dos/), nous ne les répétons donc pas ici.',
        'Le mal de dos est très fréquent, et chez la plupart des gens on ne trouve pas de cause unique (Hartvigsen et coll., 2018). Si votre dos fait mal, le talon n’est donc qu’un facteur possible parmi beaucoup d’autres. L’exercice est l’approche la mieux étayée pour les douleurs de dos qui durent\u00A0: une revue Cochrane de 2021 portant sur 249\u00A0essais a montré qu’il réduisait la douleur d’environ 15\u00A0points sur une échelle de 100 (Hayden et coll., 2021).',
      ],
      cites: [CITE.menz, CITE.hartvigsen, CITE.haydenExercise],
    },
    {
      h2: 'La fasciite plantaire peut-elle donner mal au mollet ou à la cheville\u00A0?',
      keyFact: 'Chez 254\u00A0personnes ayant une fasciite plantaire, 52 à 60\u00A0% avaient une raideur isolée du gastrocnémien, le plus gros muscle du mollet (Patel et DiGiovanni, 2011).',
      paragraphs: [
        '**Le mollet est le lien le mieux étudié, et il pourrait aller du mollet vers le talon.** Un mollet raide limite la flexion de la cheville. Dans une étude cas-témoins portant sur 50\u00A0personnes ayant une fasciite plantaire et 100 sans, les personnes dont la cheville se pliait de 0\u00A0degré ou moins avaient un risque de fasciite plantaire 23,3\u00A0fois plus élevé que celles qui dépassaient 10\u00A0degrés (Riddle et coll., 2003). Chez 254\u00A0personnes ayant une fasciite plantaire, 52 à 60\u00A0% avaient une raideur isolée du gastrocnémien (Patel et DiGiovanni, 2011).',
        'Un mollet raide associé à une douleur au talon est donc fréquent, et l’étirer fait partie du plan pour la douleur au talon. Plus de détails dans [mollets tendus](/fr/mollets-tendus/).',
        'Le fascia plantaire et le tendon d’Achille sont aussi liés. Sur 52\u00A0IRM, les personnes ayant une atteinte du tendon d’Achille avaient un fascia plantaire plus épais, 3,43\u00A0mm en moyenne contre 2,09\u00A0mm (Stecco et coll., 2013). Si la douleur se situe à l’arrière du talon plutôt qu’en dessous, lisez [fasciite plantaire ou tendinite d’Achille](/fr/fasciite-plantaire-ou-tendinite-achille/).',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.steccoPfAchilles],
    },
    {
      h2: 'Le renforcement de la hanche aide-t-il la fasciite plantaire\u00A0?',
      keyFact: 'Chez 83\u00A0personnes ayant une fasciite plantaire, les étirements seuls, les étirements plus un renforcement du pied, et les étirements plus un renforcement du pied et de la hanche ont tous amélioré la douleur et la fonction sur huit semaines, sans différence entre eux (Kamonseki et coll., 2016).',
      paragraphs: [
        '**Pour le talon lui-même, ajouter un travail de la hanche n’a pas fait mieux que les étirements dans le seul essai qui l’a testé.** En 2016, Kamonseki et ses collègues ont réparti 83\u00A0personnes ayant une fasciite plantaire en trois groupes pendant huit semaines\u00A0:',
        {
          list: [
            'Étirements seuls.',
            'Étirements plus renforcement du pied.',
            'Étirements plus renforcement du pied et de la hanche (les muscles qui écartent la jambe sur le côté et la font tourner vers l’extérieur).',
          ],
        },
        'Les trois groupes se sont améliorés pour la douleur au talon, la fonction au quotidien et un test d’atteinte et d’équilibre, et aucun groupe n’a fait mieux que les autres.',
        'Ce que cela veut dire en pratique\u00A0:',
        {
          list: [
            'Les étirements restent la base. La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note **A**, sa meilleure note, et au renforcement la note **B** (Koc et coll., 2023).',
            'Le travail de la hanche n’est pas un raccourci pour le talon. Un essai, huit semaines et 83\u00A0personnes ne suffisent pas à exclure un bénéfice, mais l’essai n’en a pas montré.',
            'L’essai n’a pas mesuré les douleurs au genou, à la hanche ou au dos. Si ces régions font mal, le renforcement de la hanche reste un ajout sensé, et pour la douleur de la rotule, la recommandation propre à ce problème soutient les exercices de hanche et de genou (Willy et coll., 2019).',
          ],
        },
      ],
      cites: [CITE.kamonseki, CITE.guideline, CITE.willyPfpGuideline],
    },
    {
      h2: 'Quels exercices aident quand la douleur au talon remonte dans la jambe\u00A0?',
      paragraphs: [
        'Commencez par le talon\u00A0: les étirements et le travail du mollet du guide des [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/). Ajoutez ensuite un travail de la hanche et de l’équilibre pour la jambe au-dessus. Les doses ci-dessous sont les doses de départ de Walkito, tirées des guides sur la douleur au talon et les pieds plats.',
        'Restez à un niveau où le talon n’est pas pire le lendemain matin. Si c’est la marche elle-même qui déclenche la douleur, [marcher avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/) explique comment continuer à bouger sans provoquer de poussée.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée, cet étirement compte donc même si vous le sentez plus haut.',
          stop: 'Une douleur vive au talon, ou une douleur au mollet qui persiste après l’arrêt',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur vive au talon, ou une douleur au mollet qui persiste après l’arrêt',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge pendant que le mollet se réveille.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Abduction de hanche, debout, avec un élastique',
          evidence: { level: 'early', why: 'Le renforcement de la hanche faisait partie d’un essai sur la fasciite plantaire (Kamonseki 2016), mais n’a rien ajouté aux étirements pour la douleur au talon sur huit semaines.' },
          dose: '3\u00A0séries de 10, chaque jambe',
          often: 'Jours de renforcement',
          feel: 'Un travail sur l’extérieur de la hanche',
          how: 'Debout avec un élastique, écartez une jambe sur le côté contre sa résistance. Poussez par le talon, pas par les orteils. Gardez le buste droit et ne vous penchez pas de l’autre côté. Une hanche qui cède fait retomber la charge sur la voûte.',
          stop: 'Une douleur vive à la hanche ou à l’aine',
          image: 'Exercice\u00A0: abduction de hanche',
          media: 'hip_abduction',
          caption: 'Abduction de hanche\u00A0: écartez une jambe sur le côté contre l’élastique',
          alt: 'Une personne debout avec un élastique autour des deux jambes qui écarte une jambe sur le côté, l’extérieur de la hanche mis en évidence',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. L’équilibre s’est amélioré dans tous les groupes de l’essai de 2016, mais cet exercice n’a pas été testé seul.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, chaque jambe',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied, la cheville et la hanche',
          how: 'Tenez-vous sur un pied et fixez un point devant vous. Laissez le pied osciller. C’est voulu, car cette oscillation, c’est le pied qui gère l’équilibre. Gardez le bassin à l’horizontale, pour que la hanche de la jambe d’appui travaille aussi. Effleurez un plan de travail ou un mur du bout des doigts si besoin. Plus de détails sur l’[équilibre sur une jambe](/fr/exercices/equilibre-une-jambe/).',
          stop: 'Une douleur vive dans le pied ou la cheville, pas seulement une oscillation',
          image: 'Exercice\u00A0: équilibre sur une jambe',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: tenez-vous sur un pied et laissez-le faire de petites corrections',
          alt: 'Une personne en équilibre sur une jambe, les muscles du bas de la jambe mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.kamonseki],
    },
    {
      h2: 'Comment savoir si la douleur au genou, à la hanche ou au dos ne vient pas du talon\u00A0?',
      keyFact: 'Les causes graves de mal de dos sont rares, et un cadre international liste les signes d’alerte que les professionnels de santé recherchent en premier (Finucane et coll., 2020).',
      paragraphs: [
        'Une marche modifiée n’est qu’une explication parmi d’autres. Ces signes orientent vers un problème distinct qui demande son propre examen\u00A0:',
        {
          list: [
            '**L’autre douleur est apparue en premier,** ou elle n’a aucun rapport avec la quantité de marche.',
            '**Le genou gonfle, se bloque, accroche ou se dérobe.** Ce sont des signes d’un problème à l’intérieur du genou.',
            '**La douleur est dans l’aine,** ou la hanche est raide quand vous mettez vos chaussettes ou vos chaussures.',
            '**La douleur descend dans la jambe sous le genou, avec un engourdissement, des fourmillements ou une faiblesse.** Cela peut venir d’un nerf dans le dos, et une douleur au talon avec brûlure ou fourmillements peut elle aussi être d’origine nerveuse.',
            '**Une douleur la nuit ou au repos** qui ne se calme pas quand vous changez de position. Voir aussi [douleur au talon la nuit](/fr/douleur-talon-la-nuit/).',
          ],
        },
        'Les professionnels de santé utilisent une courte liste de signes d’alerte pour écarter de rares problèmes graves de la colonne (Finucane et coll., 2020). Ils figurent dans la liste ci-dessous.',
      ],
      cites: [CITE.finucaneRedFlags],
    },
  ],
  faq: [
    {
      q: 'La fasciite plantaire peut-elle donner mal au genou\u00A0?',
      cites: [CITE.phillipsGait, CITE.miladiKneeOa],
      a: 'Elle peut y contribuer, mais ce n’est pas prouvé. La douleur au talon déplace la charge vers l’avant du pied quand vous marchez, ce qui change la façon dont le genou est chargé. Parmi 40\u00A0personnes ayant une arthrose du genou, 52\u00A0% avaient mal au talon, mais sans groupe de comparaison, l’étude ne peut pas montrer que l’un a causé l’autre.',
    },
    {
      q: 'La fasciite plantaire peut-elle donner mal à la hanche\u00A0?',
      cites: [CITE.kongtongHip],
      a: 'C’est possible, mais aucune étude n’a mesuré la douleur à la hanche chez les personnes ayant une fasciite plantaire. Une étude de 2025 portant sur 15\u00A0coureurs ayant une fasciite plantaire et 15 sans a trouvé une activité plus faible des muscles latéraux de la hanche et une plus forte bascule du bassin dans le groupe ayant mal au talon. Elle ne pouvait pas dire lequel venait en premier.',
    },
    {
      q: 'La fasciite plantaire peut-elle donner mal au bas du dos\u00A0?',
      cites: [CITE.menz, CITE.hartvigsen],
      a: 'Aucune étude ne l’a testé. Une boiterie due à la douleur au talon pourrait ajouter une contrainte, mais cet enchaînement n’a pas été mesuré. Chez la plupart des personnes ayant mal au bas du dos, on ne trouve pas de cause unique, et dans la Framingham Foot Study, la posture en pied plat n’était pas liée au mal de dos.',
    },
    {
      q: 'La fasciite plantaire peut-elle donner mal au mollet\u00A0?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Un mollet raide va souvent de pair avec la fasciite plantaire, et le lien pourrait aller du mollet vers le talon. Les études ont mesuré la raideur, pas la douleur au mollet. Les personnes dont la cheville se pliait de 0\u00A0degré ou moins avaient un risque de fasciite plantaire 23,3\u00A0fois plus élevé, et 52 à 60\u00A0% de 254\u00A0personnes qui en avaient une présentaient un gastrocnémien raide.',
    },
    {
      q: 'Une douleur au talon peut-elle donner mal à l’autre jambe\u00A0?',
      cites: [CITE.levinsGait],
      a: 'En théorie, oui. Quand un talon fait mal, vous passez parfois moins de temps sur cette jambe, comme l’a montré un court test en laboratoire chez 18\u00A0personnes avec une bille douloureuse sous le talon. Aucune étude n’a mesuré la douleur dans l’autre jambe chez les personnes ayant une fasciite plantaire.',
    },
    {
      q: 'Les exercices de hanche vont-ils aider ma fasciite plantaire\u00A0?',
      cites: [CITE.kamonseki],
      a: 'Pas pour le talon lui-même, d’après le seul essai disponible. Chez 83\u00A0personnes sur huit semaines, ajouter un renforcement du pied et de la hanche aux étirements n’a pas réduit la douleur au talon davantage que les étirements seuls, et tous les groupes se sont améliorés. Le travail de la hanche peut quand même avoir du sens si votre genou ou votre hanche fait aussi mal.',
    },
    {
      q: 'Faut-il s’occuper du talon ou du genou en premier\u00A0?',
      cites: [CITE.guideline, CITE.willyPfpGuideline],
      a: 'Vous pouvez travailler les deux en même temps. Les étirements du talon et le renforcement du mollet reçoivent les notes A et B dans la recommandation de 2023 sur la douleur au talon, et les exercices de hanche et de genou sont recommandés pour la douleur de la rotule. Si le genou gonfle, se bloque ou se dérobe, faites-le examiner plutôt que d’attendre que le talon se calme.',
    },
    {
      q: 'La fasciite plantaire peut-elle donner mal à la cheville\u00A0?',
      cites: [CITE.steccoPfAchilles],
      a: 'Une douleur à l’arrière du talon ou autour du tendon d’Achille peut accompagner une fasciite plantaire. Sur 52\u00A0IRM, les personnes ayant une atteinte du tendon d’Achille avaient un fascia plantaire plus épais, 3,43\u00A0mm en moyenne contre 2,09\u00A0mm. Une douleur sur les côtés de la cheville après une torsion est un autre problème.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur au genou, à la hanche ou au dos est apparue en premier, ou ne change pas selon la quantité de marche',
      'le genou gonfle, se bloque, accroche ou se dérobe, ou vous ne pouvez pas le plier ou le tendre complètement',
      'la douleur descend dans la jambe sous le genou, ou vous avez un engourdissement, des fourmillements, une brûlure ou une faiblesse dans la jambe ou le pied',
      'la douleur vous réveille la nuit ou est présente au repos et ne se calme pas en changeant de position',
      'vous avez mal au dos avec de la fièvre, une perte de poids inexpliquée ou des antécédents de cancer',
      'vous avez un engourdissement autour de l’aine ou des fesses, ou de nouvelles difficultés à contrôler votre vessie ou vos intestins\u00A0: allez aux urgences (15 ou 112)',
      'la douleur a commencé après une chute, une torsion ou un craquement, ou vous ne pouvez pas mettre de poids sur la jambe',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied qui reprend les exercices de cette page\u00A0: étirements du mollet et du soléaire, montées sur pointes, abduction de hanche et équilibre sur une jambe. Elle travaille le talon et la jambe au-dessus. Elle n’évalue pas votre genou, votre hanche ou votre dos\u00A0: faites-les examiner s’ils présentent leurs propres signes d’alerte.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Un test tous les 14\u00A0jours compare votre côté gauche et votre côté droit. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPain', 'flatFeetKneePain', 'flatFeetBackPain'],
  crumb: 'Fasciite plantaire et douleur au genou, à la hanche ou au dos',
  campaign: 'guide-can-plantar-fasciitis-cause-knee-pain-fr',
};
