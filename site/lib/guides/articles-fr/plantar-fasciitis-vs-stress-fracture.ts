import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/plantar-fasciitis-vs-stress-fracture.ts
 * (2026-10-18), written around «fasciite plantaire ou fracture de fatigue»
 * and «fracture de fatigue du calcanéum». French (France) with «vous»,
 * terminology and exercise names as in `lib/guides/fr.ts` and the other
 * articles-fr pages. Figures, doses, grades, hedges and sources are identical
 * to the English page after its fact-check. Same CITE keys and media ids.
 * Only addition: a km conversion next to the 25 miles. The English link to
 * heel-pain-runners has no French version, so the link was removed and the
 * words kept.
 */

export const PF_VS_STRESS_FRACTURE_FR: Guide = {
  lang: 'fr',
  page: 'pfVsStressFracture',
  mainSource: CITE.patelStressFracture,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fasciite plantaire ou fracture de fatigue\u00A0: comment savoir',
  description:
    'Fasciite plantaire ou fracture de fatigue du talon\u00A0? Type de douleur, test de compression, facteurs de risque, radio trompeuse au début et que faire.',
  h1: 'Fasciite plantaire ou fracture de fatigue du talon\u00A0: comment faire la différence',
  lede:
    'La [fasciite plantaire](/fr/fasciite-plantaire/) fait surtout mal aux premiers pas après le repos et se calme en général après quelques minutes de marche. Une fracture de fatigue du calcanéum fait l’inverse\u00A0: la douleur augmente à mesure que vous marchez ou courez, souvent après une hausse brusque de l’activité, et presser les côtés du talon fait souvent mal (Tu, 2018). Une radio précoce peut sembler normale\u00A0: chez 30\u00A0recrues militaires avec une lésion de stress du talon visible à l’IRM, la radio simple ne la montrait que dans 15\u00A0% des cas (Sormaala et coll., 2006).',
  intro: [
    'Les deux problèmes touchent le même talon et peuvent commencer après la même chose\u00A0: plus de marche, de course ou de station debout. Ils demandent pourtant des réponses opposées. La fasciite plantaire répond bien aux étirements et au renforcement, alors qu’une fracture de fatigue demande d’abord moins de charge. Cette page compare les deux côte à côte, explique ce que le test de compression peut vous dire et ce qu’il ne peut pas dire, qui a le plus de risque de fracture, pourquoi l’imagerie passe souvent par une IRM et que faire en attendant d’en savoir plus.',
  ],
  takeaways: [
    'La douleur de la fasciite plantaire est «\u00A0surtout marquée lors de la mise en charge au lever ou après une période de repos\u00A0» et se calme à la marche (Koc et coll., 2023). La douleur d’une fracture de fatigue commence pendant l’activité et peut ensuite être présente au repos aussi (Tu, 2018).',
    'Une douleur quand on presse les côtés de l’os du talon évoque une fracture de fatigue (Tu, 2018), mais nous n’avons trouvé aucune étude qui mesure la fiabilité du test de compression au talon, et il est aussi douloureux dans la maladie de Sever chez l’enfant.',
    'Les radios simples passent souvent à côté d’une fracture de fatigue débutante\u00A0: selon une revue, leur sensibilité à la première consultation est d’environ 10\u00A0%, puis de 30 à 70\u00A0% après trois semaines (Patel et coll., 2011). L’IRM était l’examen le plus précis dans une revue systématique de 2016 (Wright et coll., 2016).',
    'Une hausse brusque de l’entraînement est le déclencheur classique. Les coureurs qui font en moyenne plus de 25\u00A0miles (environ 40\u00A0km) par semaine, les femmes et les personnes en faible disponibilité énergétique ou aux os fragiles ont plus de risque (Patel et coll., 2011\u00A0; Mountjoy et coll., 2023).',
    'Les étirements et le renforcement obtiennent les notes **A** et **B** pour la fasciite plantaire (Koc et coll., 2023). Ils ne sont pas un plan en cas de fracture suspectée, qui demande d’abord moins de charge et l’avis d’un professionnel de santé.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Comment distinguer une fasciite plantaire d’une fracture de fatigue du talon\u00A0?',
      keyFact: 'La douleur d’une fracture de fatigue du calcanéum commence en général après une hausse des activités en charge ou un passage à un sol plus dur, apparaît d’abord seulement pendant l’activité et peut ensuite survenir au repos (Tu, 2018).',
      paragraphs: [
        '**L’indice le plus net, c’est l’effet de la marche sur la douleur.** La fasciite plantaire est pire aux premiers pas après le sommeil ou la position assise, se calme après quelques minutes et peut revenir après une longue journée debout (Tu, 2018). La recommandation de 2023 sur la douleur au talon la décrit comme une douleur «\u00A0surtout marquée lors de la mise en charge au lever ou après une période de repos\u00A0» (Koc et coll., 2023).',
        'Une fracture de fatigue du calcanéum est une fine fissure de l’os du talon due à une charge répétée. Sa douleur commence en général quand vous augmentez la marche, la course ou la station debout, ou quand vous passez à un sol plus dur. Au début, elle n’apparaît que pendant l’activité et augmente au fil de l’effort. Plus tard, elle peut être présente au repos (Tu, 2018). Dans une revue sur les fractures de fatigue en général, 81\u00A0% des patients signalaient une douleur à la marche, 65,9 à 100\u00A0% un point douloureux sur l’os et 18 à 44\u00A0% un gonflement (Patel et coll., 2011).',
        'Le tableau résume les profils habituels. Aucune ligne ne tranche à elle seule, et certaines personnes ne rentrent bien dans aucune des deux colonnes.',
      ],
      table: {
        caption: 'Profils typiques, pas un diagnostic',
        head: ['', 'Fasciite plantaire', 'Fracture de fatigue du talon'],
        rows: [
          ['Moment le plus douloureux', 'Premiers pas après le repos', 'Pendant et après l’activité'],
          ['Après quelques minutes de marche', 'Se calme en général', 'Augmente'],
          ['Où ça fait mal', 'Sous le talon, côté interne', 'Sur toute la largeur de l’os du talon, souvent dans sa moitié arrière'],
          ['Presser les côtés du talon', 'En général pas douloureux', 'Souvent douloureux'],
          ['Gonflement', 'Signe peu habituel', 'Parfois'],
          ['Déclencheur habituel', 'Longues heures debout, mollets raides', 'Hausse brusque de l’entraînement ou sol plus dur'],
          ['Radio précoce', 'Pas nécessaire', 'Souvent normale'],
        ],
      },
      after: [
        'Une douleur surtout nocturne ou au repos a sa propre liste de causes, présentée dans [douleur au talon la nuit](/fr/douleur-talon-la-nuit/). Une douleur qui augmente au fil d’une marche est traitée dans [douleur au talon après la marche](/fr/douleur-talon-apres-marche/).',
      ],
      sourceNote: 'Localisation\u00A0: dans Sormaala 2006, 19 des 34\u00A0lésions de stress du calcanéum se trouvaient dans la partie postérieure de l’os, 6 dans la partie moyenne et 9 dans la partie antérieure. Les chiffres de Patel 2011 sur la douleur à la pression, la douleur à la marche et le gonflement portent sur les fractures de fatigue de tous les sites, pas seulement du talon.',
      cites: [CITE.tuHeelPain, CITE.guideline, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Qu’est-ce que le test de compression, et que peut-il vous apprendre\u00A0?',
      paragraphs: [
        '**Le test de compression consiste à presser l’une contre l’autre les faces interne et externe de l’os du talon, entre les paumes ou entre le pouce et les doigts.** Un professionnel de santé le fait avec le pied relâché. Une douleur à la compression «\u00A0évoque le diagnostic\u00A0» de fracture de fatigue du calcanéum, selon une revue de 2018 parue dans American Family Physician (Tu, 2018). La fasciite plantaire, à l’inverse, est sensible quand on appuie sous l’avant et l’intérieur du talon, là où le fascia s’insère.',
        'Ses limites sont réelles\u00A0:',
        {
          list: [
            '**Personne n’a mesuré sa fiabilité au talon.** Nous n’avons trouvé aucune étude qui indique à quelle fréquence le test de compression est positif chez les personnes avec une fracture de fatigue du calcanéum confirmée, ni à quelle fréquence il l’est sans fracture. La même revue sur les fractures de fatigue note que le test du saut à cloche-pied, un autre test courant au cabinet, n’a pas été validé non plus (Patel et coll., 2011).',
            '**Une compression indolore n’exclut pas une fracture.** Certaines lésions de stress du talon se situent plutôt vers l’avant ou le milieu de l’os\u00A0: dans une étude par IRM, 15 sur 34 ne se trouvaient pas dans la partie arrière (Sormaala et coll., 2006).',
            '**D’autres problèmes font mal à la compression.** Chez l’enfant et le jeune adolescent, une compression douloureuse est un signe fréquent de la [maladie de Sever](/fr/maladie-de-sever/), une irritation du cartilage de croissance (Tu, 2018). D’autres problèmes de l’os du talon peuvent aussi faire mal, d’où la nécessité d’un examen par un professionnel de santé.',
          ],
        },
        'Si vous pressez les côtés de votre propre talon et que cela fait mal, voyez-y une raison de consulter, pas un diagnostic. Ne sautez pas sur le pied pour le tester.',
      ],
      cites: [CITE.tuHeelPain, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Qui a le plus de risque de fracture de fatigue du talon\u00A0?',
      keyFact: 'Les coureurs de loisir qui font en moyenne plus de 25\u00A0miles (environ 40\u00A0km) par semaine ont un risque accru de fracture de fatigue, et les femmes ont un risque plus élevé que les hommes (Patel et coll., 2011).',
      paragraphs: [
        'Une fracture de fatigue survient quand l’os reçoit plus de charge répétée qu’il ne peut en réparer. Le risque augmente quand la charge augmente, quand l’os la supporte moins bien, ou les deux (Warden et coll., 2014).',
        {
          list: [
            '**Une hausse brusque de l’entraînement.** Une forte augmentation de la marche, de la course, des marches militaires ou de la station debout, ou des séances intenses répétées avec peu de repos, c’est le scénario classique (Patel et coll., 2011). Le passage à un sol plus dur est un déclencheur fréquent au talon (Tu, 2018).',
            '**Un gros volume de course.** Les coureurs de loisir qui font en moyenne plus de 25\u00A0miles (environ 40\u00A0km) par semaine ont plus de risque, tout comme les sportifs pratiquant l’athlétisme, le basket, le football ou la danse (Patel et coll., 2011).',
            '**Une faible disponibilité énergétique.** Manger trop peu par rapport à son volume d’entraînement peut perturber les hormones et l’os. Le Comité international olympique range une mauvaise santé osseuse, y compris les lésions de stress osseux, parmi les effets de ce tableau, appelé déficit énergétique relatif dans le sport (REDs), chez les femmes comme chez les hommes (Mountjoy et coll., 2023).',
            '**La santé des os.** Les femmes atteintes de la triade de la femme sportive (troubles du comportement alimentaire, absence de règles et faible densité osseuse) ont plus de risque, et une étude a trouvé des taux de vitamine D plus bas chez les recrues ayant une fracture de fatigue (Patel et coll., 2011). Un os fragilisé par l’ostéoporose peut se fissurer sous une charge normale\u00A0: on parle alors de fracture par insuffisance osseuse.',
            '**Être une femme.** Les femmes ont plus de risque que les hommes, surtout pendant la formation militaire, même si les données chez les sportives sont contrastées (Patel et coll., 2011).',
          ],
        },
        'La fasciite plantaire a un autre profil de risque. Dans une étude portant sur 50\u00A0personnes atteintes et 100 non atteintes, les personnes avec une flexion de la cheville vers le haut (dorsiflexion) de 0\u00A0degré ou moins avaient une cote (odds) 23,3\u00A0fois plus élevée que celles qui dépassaient 10\u00A0degrés, et rester debout la majeure partie de la journée de travail multipliait cette cote par 3,6 (Riddle et coll., 2003).',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.wardenBSI, CITE.mountjoyREDs, CITE.riddle],
    },
    {
      h2: 'Pourquoi une radio peut-elle sembler normale avec une fracture de fatigue\u00A0?',
      keyFact: 'Chez 30\u00A0recrues militaires dont l’IRM montrait une lésion de stress du talon, la lésion n’était visible sur la radio simple que dans 15\u00A0% des cas (Sormaala et coll., 2006).',
      paragraphs: [
        '**Une fracture de fatigue débutante est souvent trop petite pour apparaître sur une radio.** L’os réagit d’abord par un œdème, un gonflement à l’intérieur de l’os, que la radio ne voit pas. Les signes de réparation n’apparaissent que plus tard. Selon une revue, la sensibilité des radios à la première consultation est d’environ 10\u00A0%, puis de 30 à 70\u00A0% après trois semaines (Patel et coll., 2011).',
        'Pour le talon en particulier, une étude finlandaise a porté sur des recrues militaires souffrant du talon ou de la cheville à l’effort et qui ont passé une IRM. Sur 30\u00A0recrues avec une lésion de stress du talon, seules 15\u00A0% avaient une lésion visible sur la radio simple. Pour 22 des 34\u00A0talons touchés, des os voisins du pied étaient aussi atteints (Sormaala et coll., 2006).',
        'Une revue systématique de 2016 sur les fractures de fatigue du membre inférieur a trouvé une sensibilité de la radio allant de 12 à 56\u00A0%, contre 68 à 99\u00A0% pour l’IRM. Les auteurs ont désigné l’IRM comme l’examen le plus sensible et le plus spécifique et ont averti que les radios risquent de donner des faux négatifs au début (Wright et coll., 2016).',
        'Un professionnel de santé qui suspecte une fracture peut donc refaire la radio après deux à trois semaines, ou demander directement une IRM si une réponse rapide compte (Patel et coll., 2011). Pour la fasciite plantaire, la recommandation de 2023 indique que l’imagerie n’est «\u00A0en général pas indiquée chez les patients qui remplissent les critères de l’examen clinique de la fasciite plantaire, tant que les traitements conservateurs n’ont pas échoué\u00A0» (Koc et coll., 2023). La page [fasciite plantaire ou épine calcanéenne](/fr/fasciite-plantaire-ou-epine-calcaneenne/) explique pourquoi une épine visible à la radio ne tranche pas la question non plus.',
      ],
      sourceNote: 'Wright 2016 a regroupé les fractures de fatigue du membre inférieur, pas seulement du talon. Les fourchettes correspondent à la sensibilité la plus basse et la plus haute rapportée dans les études incluses, pas à des estimations groupées.',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture, CITE.wrightImaging, CITE.guideline],
    },
    {
      h2: 'Que faire en attendant d’en savoir plus\u00A0?',
      keyFact: 'Adapter l’activité, avec peu ou pas d’appui sur le pied pendant jusqu’à six semaines si la douleur est forte, donne en général de bons résultats dans les fractures de fatigue du calcanéum (Tu, 2018).',
      paragraphs: [
        '**Si votre douleur correspond à la colonne fracture de fatigue, déchargez le talon et prenez rendez-vous avec un professionnel de santé.** N’attendez pas de voir si quelques sorties de plus vont arranger les choses. Commencer la prise en charge tôt compte\u00A0: une revue note qu’un retard a été associé à un retour plus long à l’activité (Patel et coll., 2011).',
        {
          list: [
            '**Réduisez la charge à ce qui ne fait pas mal.** En général, cela veut dire arrêter pour l’instant la course, les sauts et les longues marches. Certaines personnes ont besoin de béquilles ou d’une botte de marche pendant un temps (Patel et coll., 2011\u00A0; Tu, 2018).',
            '**Entretenez votre forme sans charger le talon,** par exemple en nageant ou à vélo, si cela ne fait pas mal (Patel et coll., 2011).',
            '**Demandez conseil pour les antidouleurs.** La même revue indique que les anti-inflammatoires doivent être utilisés avec prudence en cas de fracture de fatigue, car certaines études chez l’animal suggèrent qu’ils pourraient ralentir la réparation de l’os (Patel et coll., 2011).',
            '**Ne commencez pas encore de programme d’étirements ou de renforcement pour le talon.** Attendez qu’un professionnel de santé ait écarté une fracture ou vous ait donné son feu vert.',
          ],
        },
        'Les fractures de fatigue du talon évoluent en général bien chez les personnes par ailleurs en bonne santé (Tu, 2018). Pour les fractures de fatigue en général, la récupération prend de quatre semaines à trois mois ou plus à partir du moment où l’activité est réduite, puis l’activité reprend progressivement une fois la douleur disparue (Patel et coll., 2011).',
        'Si votre douleur correspond plutôt à la colonne fasciite plantaire, vous n’avez en général pas besoin d’imagerie pour commencer les exercices ci-dessous (Koc et coll., 2023). Si vous ne savez pas dans quelle colonne vous êtes, consultez d’abord un professionnel de santé.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Pourquoi les programmes d’exercices visent-ils la fasciite plantaire et pas une fracture\u00A0?',
      paragraphs: [
        '**Les étirements et la mise en charge aident la fasciite plantaire parce que le tissu s’adapte à la charge. Un os fissuré a d’abord besoin qu’on lui retire de la charge.** Les lésions de stress osseux s’inscrivent sur un continuum\u00A0: une réaction de stress peut évoluer vers une fracture de fatigue puis, si la charge continue, vers une fracture complète (Warden et coll., 2014).',
        'Les preuves en faveur de l’exercice sont propres à la fasciite plantaire. La recommandation de 2023 sur la douleur au talon note les étirements du fascia plantaire et du mollet **A** et le renforcement **B** dans ce cadre (Koc et coll., 2023). Le programme de montées sur pointes de l’essai le plus connu a été testé chez 48\u00A0personnes atteintes de fasciite plantaire, pas chez des personnes ayant une fracture (Rathleff et coll., 2015).',
        'Pour les fractures de fatigue, les preuves vont dans l’autre sens. Deux essais randomisés en grappes ont montré que les étirements des jambes pendant l’échauffement ne prévenaient pas les fractures de fatigue (Patel et coll., 2011). Ce qui compte, c’est de réduire la charge, puis de reprendre progressivement sous l’œil d’un professionnel de santé. Une fois la fracture consolidée, renforcer les muscles autour de l’os fait partie de la prévention de la suivante (Warden et coll., 2014).',
        'C’est pourquoi les exercices de cette page concernent uniquement la fasciite plantaire. Si l’on vous a dit que vous aviez une fracture de fatigue, suivez plutôt le plan de reprise du professionnel de santé qui vous suit.',
      ],
      cites: [CITE.wardenBSI, CITE.guideline, CITE.rathleff, CITE.patelStressFracture],
    },
    {
      h2: 'Fasciite plantaire uniquement\u00A0: quels exercices une fois la fracture écartée\u00A0?',
      paragraphs: [
        '**Ne les faites que si votre douleur correspond à une fasciite plantaire, ou si un professionnel de santé a écarté une fracture.** Si presser le talon fait mal, si la douleur augmente à chaque marche ou si le talon est gonflé, passez-les et faites d’abord examiner votre talon.',
        'Ce sont les premières étapes de notre guide [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/)\u00A0: d’abord les étirements, puis des montées sur pointes en position assise, qui ne chargent presque pas le talon. La progression complète, jusqu’aux montées sur pointes avec serviette de l’essai, se trouve dans ce guide.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire (fasciite plantaire uniquement)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note, pour la fasciite plantaire. Pas en cas de fracture suspectée.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'À la plupart des séances',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et posez le pied sur le genou opposé. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assis au bord du lit, avant que le pied touche le sol.',
          stop: 'Une douleur dans l’os du talon lui-même, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une silhouette tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Étirement du mollet (fasciite plantaire uniquement)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note, pour la fasciite plantaire. Pas en cas de fracture suspectée.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'À la plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée, donc cet étirement compte même si vous le sentez plus haut.',
          stop: 'Une douleur dans l’os du talon lui-même, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (fasciite plantaire uniquement)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note, pour la fasciite plantaire. Pas en cas de fracture suspectée.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'À la plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur dans l’os du talon lui-même, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une silhouette en position de fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes en position assise (fasciite plantaire uniquement)',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 note le renforcement B pour la fasciite plantaire. Cette étape n’a pas été testée seule. Pas en cas de fracture suspectée.' },
          dose: '3\u00A0séries de 10, les deux pieds',
          often: '3\u00A0jours par semaine, jamais deux jours de suite',
          feel: 'Un travail dans le bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour monter. Les mains sur les genoux ajoutent de la résistance. Genou plié, l’exercice fait surtout travailler le soléaire, le muscle profond du mollet, avec presque aucune charge sur le talon.',
          stop: 'Une douleur au talon qui dépasse 6 sur 10, ou qui est pire le lendemain matin',
          image: 'Exercice\u00A0: montées sur pointes en position assise',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes en position assise\u00A0: poussez sur l’avant des pieds pour monter',
          alt: 'Une silhouette assise soulève les deux talons, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Comment savoir si ma douleur au talon est une fracture de fatigue ou une fasciite plantaire\u00A0?',
      cites: [CITE.tuHeelPain, CITE.guideline],
      a: 'Observez l’effet de la marche. La fasciite plantaire fait surtout mal aux premiers pas après le repos et se calme après quelques minutes. Une fracture de fatigue du talon suit en général une hausse brusque de l’activité, augmente à mesure que vous marchez ou courez et fait souvent mal quand on presse les côtés du talon. Si votre douleur correspond au schéma de la fracture, consultez un professionnel de santé.',
    },
    {
      q: 'Une radio peut-elle passer à côté d’une fracture de fatigue du talon\u00A0?',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture],
      a: 'Oui, souvent. Chez 30\u00A0recrues militaires avec une lésion de stress du talon visible à l’IRM, la radio simple ne la montrait que dans 15\u00A0% des cas. Selon une revue, la sensibilité de la radio à la première consultation est d’environ 10\u00A0%, puis de 30 à 70\u00A0% après trois semaines. Une radio précoce normale n’exclut pas une fracture de fatigue.',
    },
    {
      q: 'Faut-il une IRM pour une douleur au talon\u00A0?',
      cites: [CITE.guideline, CITE.wrightImaging],
      a: 'Pas pour une fasciite plantaire typique\u00A0: selon la recommandation de 2023, l’imagerie n’est en général pas nécessaire quand l’examen concorde. Si un professionnel de santé suspecte une fracture de fatigue, l’IRM est l’examen le plus précis. Une revue systématique de 2016 a trouvé une sensibilité de 68 à 99\u00A0% pour l’IRM, contre 12 à 56\u00A0% pour la radio simple.',
    },
    {
      q: 'Que signifie un test de compression positif\u00A0?',
      cites: [CITE.tuHeelPain],
      a: 'Une douleur quand on presse l’une contre l’autre les faces interne et externe de l’os du talon évoque une fracture de fatigue du calcanéum ou, chez l’enfant, la maladie de Sever. C’est une raison de consulter, pas un diagnostic. Nous n’avons trouvé aucune étude qui mesure la fiabilité du test de compression pour les fractures de fatigue du talon, donc une compression indolore ne les exclut pas.',
    },
    {
      q: 'Peut-on marcher avec une fracture de fatigue du talon\u00A0?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Vous le pouvez peut-être, mais il vaut en général mieux ne pas continuer à le charger. La prise en charge consiste à réduire l’activité à ce qui ne fait pas mal et, si la douleur est forte, à mettre peu ou pas d’appui sur le pied pendant jusqu’à six semaines, parfois avec des béquilles ou une botte. C’est à un professionnel de santé de dire quelle quantité de marche est sans risque.',
    },
    {
      q: 'Combien de temps faut-il pour se remettre d’une fracture de fatigue du talon\u00A0?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Pour les fractures de fatigue en général, la récupération prend de quatre semaines à trois mois ou plus à partir du moment où l’activité est réduite. Les fractures de fatigue du talon évoluent en général bien chez les personnes par ailleurs en bonne santé. L’activité reprend ensuite progressivement une fois la douleur disparue. Pour la durée de la fasciite plantaire, voir [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/).',
    },
    {
      q: 'Faut-il s’étirer si l’on a peut-être une fracture de fatigue\u00A0?',
      cites: [CITE.patelStressFracture, CITE.guideline],
      a: 'Non, pas avant qu’un professionnel de santé l’ait écartée. Les étirements et le renforcement sont notés A et B pour la fasciite plantaire, mais une fracture suspectée demande d’abord moins de charge. Deux essais randomisés en grappes ont montré que les étirements des jambes pendant l’échauffement ne prévenaient pas les fractures de fatigue\u00A0: l’étirement n’est donc pas l’outil adapté à l’os.',
    },
    {
      q: 'Une fasciite plantaire peut-elle se transformer en fracture de fatigue\u00A0?',
      cites: [CITE.wardenBSI],
      a: 'Aucune étude ne montre qu’une fasciite plantaire se transforme en fracture. Ce sont deux lésions différentes, l’une du fascia, l’autre de l’os. Elles peuvent avoir le même déclencheur, comme une hausse brusque de la marche ou de la course, et une réaction de stress de l’os peut évoluer vers une fracture si la charge continue. Une douleur qui change de schéma mérite d’être examinée.',
    },
    {
      q: 'Qui a des fractures de fatigue du talon\u00A0?',
      cites: [CITE.patelStressFracture, CITE.mountjoyREDs],
      a: 'Surtout des personnes qui s’entraînent soudain davantage\u00A0: coureurs, recrues militaires et sportifs. Les coureurs qui font en moyenne plus de 25\u00A0miles (environ 40\u00A0km) par semaine ont plus de risque, et les femmes plus que les hommes. Une faible disponibilité énergétique, l’absence de règles et une faible densité osseuse augmentent le risque, et une étude a trouvé des taux de vitamine D plus bas chez les recrues ayant une fracture de fatigue.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur au talon augmente à mesure que vous marchez ou courez au lieu de se calmer',
      'presser les côtés de l’os du talon fait mal',
      'le talon est gonflé ou présente un bleu, ou un point de l’os est très sensible',
      'la douleur a commencé après une hausse brusque de l’entraînement ou un passage à un sol plus dur',
      'le talon fait mal au repos ou vous réveille la nuit',
      'vous avez déjà eu une fracture de fatigue, ou vous avez ou avez eu une absence de règles, un trouble du comportement alimentaire ou une faible densité osseuse',
      'vous ne pouvez pas mettre tout votre poids sur le pied, ou la douleur a suivi une chute ou une entorse',
      'vous ressentez des brûlures, des fourmillements ou un engourdissement dans le talon ou la plante du pied',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour les douleurs du talon et du pied. Son plan est conçu pour une douleur au talon de type fasciite plantaire, pas pour une fracture de fatigue\u00A0: si votre douleur correspond au schéma de la fracture, consultez un professionnel de santé avant de commencer.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPainAtNight', 'hubPlantarFasciitis', 'heelPainAfterWalking'],
  crumb: 'Fasciite plantaire ou fracture de fatigue',
  campaign: 'guide-plantar-fasciitis-vs-stress-fracture-fr',
};
