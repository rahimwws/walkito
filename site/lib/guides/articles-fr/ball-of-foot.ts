import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ball-of-foot.ts` (2026-10-08), French (France)
 * with «vous», written around «métatarsalgie», «douleur avant du pied»,
 * «mal sous l’avant-pied». Figures, doses, grades and qualifiers are
 * identical to the English page. Citation notes live in the English file.
 */

export const BALL_OF_FOOT_FR: Guide = {
  lang: 'fr',
  page: 'ballOfFoot',
  mainSource: CITE.amaha,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Métatarsalgie, douleur à l’avant-pied\u00A0: causes et exercices',
  description:
    'Douleur sous l’avant-pied\u00A0: causes, métatarsalgie ou névrome de Morton, exercices des orteils, étirements du mollet, coussinets et quand consulter.',
  h1: 'Douleur à l’avant-pied\u00A0: d’où elle vient et ce qui aide',
  lede:
    'Vous poussez sur le sol et la voilà\u00A0: une douleur vive juste derrière les orteils, comme si vous marchiez sur un caillou. L’avant-pied porte tout le poids de votre corps à chaque pas, et plusieurs problèmes différents peuvent le rendre douloureux. Cette page explique lesquels, ce que disent les données sur l’exercice et les chaussures, et où sont les vraies lacunes de la recherche.',
  intro: [
    'Le terme médical général est métatarsalgie, qui désigne une douleur autour des têtes métatarsiennes, les «\u00A0bosses\u00A0» osseuses derrière les orteils. Mais la métatarsalgie décrit l’endroit qui fait mal, ce n’est pas un diagnostic. Plusieurs problèmes différents se cachent sous ce terme, et ils ne réagissent pas tous à la même chose.',
  ],
  toc: true,
  takeaways: [
    'Dans une étude sur 41\u00A0personnes atteintes de métatarsalgie primaire, un programme d’exercices des orteils de 8\u00A0semaines a réduit la douleur de 2,7\u00A0points en moyenne sur une échelle de 10. L’étude n’avait pas de groupe témoin (Amaha et coll., 2020).',
    'Un gastrocnémien raide, le plus gros et le plus superficiel des deux muscles du mollet, reporte le poids vers l’avant-pied. Dans une série de 254\u00A0personnes atteintes de fasciite plantaire, 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien (Patel et DiGiovanni, 2011).',
    'Les coussinets métatarsiens placés juste derrière les têtes métatarsiennes sont l’approche conservatrice la plus étudiée pour la douleur à l’avant-pied.',
    'Le névrome de Morton et la métatarsalgie se ressemblent dans leurs symptômes mais diffèrent par leur emplacement\u00A0: la douleur du névrome se situe en général entre le troisième et le quatrième orteil, avec des fourmillements, alors que la métatarsalgie est plus étendue.',
  ],
  sections: [
    {
      h2: 'Qu’est-ce que l’avant-pied\u00A0?',
      figure: { id: 'ball', caption: 'L’avant-pied se trouve sous l’extrémité des métatarsiens. La douleur de la métatarsalgie est souvent sous le deuxième et le troisième.', alt: 'Vue du dessus des os du pied, l’extrémité des deuxième, troisième et quatrième métatarsiens mise en évidence en rouge.' },
      paragraphs: [
        'L’avant-pied, c’est la zone rembourrée de la plante juste derrière les orteils. En dessous se trouvent les têtes des cinq métatarsiens, des os longs qui vont du milieu du pied à la base de chaque orteil. Quand vous marchez, l’avant-pied porte environ deux fois votre poids pendant la phase de poussée.',
        'Les muscles qui plient et écartent les orteils s’appellent les muscles intrinsèques du pied. Ils aident à partager cette charge pendant la poussée. Quand ils s’affaiblissent, ou quand la structure du pied change, plus de force arrive sur les têtes métatarsiennes, et c’est souvent là que la douleur commence.',
      ],
    },
    {
      h2: 'Qu’est-ce qui cause une douleur à l’avant-pied\u00A0?',
      paragraphs: [
        'La **métatarsalgie** est le terme le plus courant. Elle désigne une douleur et une inflammation autour d’une ou plusieurs têtes métatarsiennes, en général la deuxième et la troisième. La surutilisation, un deuxième métatarsien long, des voûtes hautes et des mollets raides peuvent tous y contribuer.',
        'Le **névrome de Morton** est un épaississement du nerf entre les têtes métatarsiennes, le plus souvent entre le troisième et le quatrième orteil. Il donne des brûlures, des fourmillements ou un engourdissement plutôt qu’une simple douleur. Les chaussures étroites ou à talons hauts compriment le nerf et l’aggravent.',
        'La **sésamoïdite** est une inflammation des deux petits os logés dans le tendon sous l’articulation du gros orteil. La douleur se situe juste sous le gros orteil plutôt que sous le milieu de l’avant-pied.',
        'La **fracture de fatigue d’un métatarsien** est une petite fissure dans l’un des métatarsiens, en général le deuxième ou le troisième. La douleur est localisée, s’aggrave souvent au fil de la journée et peut faire mal la nuit. Un gonflement sur le dessus du pied est fréquent. Celle-ci demande une imagerie et du repos.',
        'Les **orteils en griffe et les orteils en marteau** plient les articulations des orteils vers le bas, ce qui décolle l’orteil du sol et reporte sa part de la poussée sur la tête métatarsienne derrière lui.',
        'Les **talons hauts et les chaussures étroites** basculent le poids vers l’avant-pied et serrent les têtes métatarsiennes les unes contre les autres. C’est pourquoi le névrome de Morton est plus fréquent chez les personnes qui en portent.',
        'Les **voûtes hautes** (pied creux, c’est-à-dire un pied à la voûte haute et rigide) réduisent la surface d’appui de la plante et concentrent la pression sur le talon et l’avant-pied. À l’opposé, les [pieds plats](/fr/exercices-pieds-plats/) peuvent aussi contribuer à la douleur de l’avant-pied en modifiant la façon dont le pied se déroule pendant la poussée.',
        'Les **mollets raides** sont une cause sous-estimée. Quand le gastrocnémien, le plus gros et le plus superficiel des deux muscles du mollet, est raide, la cheville ne peut pas assez se plier pendant la marche. Le corps compense en levant le talon plus tôt, ce qui reporte plus de charge sur l’avant-pied. C’est le même mécanisme que derrière la [fasciite plantaire](/fr/exercices-fasciite-plantaire/) et la [tendinite d’Achille](/fr/tendinite-achille-exercices/).',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Comment faire la différence entre ces problèmes\u00A0?',
      paragraphs: [
        'L’emplacement est le premier indice. Une douleur étendue sous les deuxième et troisième têtes métatarsiennes oriente vers une métatarsalgie. Une douleur entre le troisième et le quatrième orteil, avec des fourmillements, évoque un névrome de Morton. Une douleur juste sous l’articulation du gros orteil correspond plutôt à une sésamoïdite. Un point localisé sur le dessus du pied avec un gonflement pose la question d’une fracture de fatigue.',
        'Les fractures de fatigue ne se voient souvent pas sur une radiographie simple pendant les deux à trois premières semaines et peuvent demander une IRM. Une consultation vaut la peine quand la douleur dure plus de deux semaines malgré le repos et le changement de chaussures, ou quand il y a des fourmillements, une douleur la nuit ou un gonflement visible.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'L’exercice aide-t-il la douleur à l’avant-pied\u00A0?',
      keyFact: 'Dans une étude avant-après de 2020 sur 41\u00A0personnes atteintes de métatarsalgie primaire, un programme d’exercices des orteils de 8\u00A0semaines a réduit la douleur de 2,7\u00A0points en moyenne sur une échelle de 10, sans groupe témoin (Amaha et coll., 2020).',
      paragraphs: [
        'Pour être honnête, les données sur l’exercice dans la métatarsalgie sont précoces et limitées. Elles sont bien plus minces que pour la [fasciite plantaire](/fr/exercices-fasciite-plantaire/) ou la tendinite d’Achille, où il existe des essais randomisés.',
        'La meilleure étude à ce jour est une étude avant-après de 2020 sur 41\u00A0personnes (56\u00A0pieds) atteintes de métatarsalgie primaire. Un programme d’exercices des orteils de 8\u00A0semaines, surtout ramasser une serviette et attraper des billes avec les orteils, a fait baisser les scores de douleur de 2,7\u00A0points en moyenne sur une échelle de 10 et amélioré la force de préhension des orteils. Mais il n’y avait pas de groupe témoin\u00A0: l’amélioration pourrait donc en partie refléter une récupération naturelle. Les auteurs demandaient des essais randomisés.',
        'La logique est simple\u00A0: pendant la poussée, les orteils aident à partager la charge avec les têtes métatarsiennes. Quand les muscles fléchisseurs des orteils sont faibles, plus de force arrive sur les métatarsiens. L’étude de 2020 va dans ce sens, mais une seule étude non contrôlée n’est pas une preuve. Les personnes qui avaient des symptômes depuis plus d’un an se sont moins améliorées, tout comme celles qui avaient un IMC plus élevé.',
      ],
      sourceNote:
        'Amaha 2020\u00A0: 41\u00A0patients, 56\u00A0pieds, âge moyen 63,4\u00A0ans. Plan avant-après. EVA passée de 5,2 à 2,5 (p < 0,01). Amélioration du score AOFAS, du test de ramassage de billes et du temps d’appui unipodal (tous p < 0,01). Pas de groupe témoin.',
      cites: [CITE.amaha],
    },
    {
      h2: 'Un mollet raide aggrave-t-il la douleur à l’avant-pied\u00A0?',
      keyFact: 'Chez 254\u00A0personnes atteintes de fasciite plantaire, 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien, un mollet raide qui est aussi lié à la surcharge de l’avant-pied (Patel et DiGiovanni, 2011).',
      paragraphs: [
        'Très probablement. Quand le gastrocnémien est raide, la cheville ne peut pas assez se plier pendant la marche. Le corps lève le talon plus tôt, ce qui envoie plus de poids sur l’avant-pied. Le terme médical est équin fonctionnel, et c’est une cause reconnue de métatarsalgie.',
        'Les chiffres viennent de la recherche sur la fasciite plantaire, mais le mécanisme est le même. Chez 254\u00A0personnes atteintes de fasciite plantaire, 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien. Une étude cas-témoins sur 50\u00A0cas et 100\u00A0témoins a montré qu’une flexion dorsale de cheville réduite (la capacité du pied à remonter vers le tibia) était le plus fort facteur de risque indépendant, avec un risque multiplié par 23,3.',
        'Aucun essai n’a testé les étirements du mollet pour la métatarsalgie en particulier, mais le lien est reconnu en clinique. Voir [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) pour en savoir plus sur le lien entre mollet et cheville.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'Et les coussinets métatarsiens, les semelles et les chaussures\u00A0?',
      paragraphs: [
        'Les coussinets métatarsiens sont l’approche conservatrice la plus utilisée. Un coussinet placé juste derrière les têtes métatarsiennes soulève légèrement le corps de l’os et répartit la pression sur une plus grande surface. L’emplacement compte. Trop en avant, juste sous la tête, il peut aggraver la douleur.',
        'Les chaussures à semelle en bascule (rocker) réduisent la pression sur l’avant-pied en laissant le pied se dérouler pendant la poussée sans plier au niveau des articulations métatarsiennes. Un avant de chaussure large évite que les têtes soient serrées les unes contre les autres. Abandonner les chaussures étroites ou à talons est souvent la première étape la plus simple.',
        'Les coussinets et les chaussures changent la répartition de la charge. L’exercice construit la force et la souplesse pour supporter cette charge. Quand le fait de [rester debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/) fait partie du problème, les deux comptent.',
      ],
    },
    {
      h2: 'Quels exercices aident la douleur à l’avant-pied\u00A0?',
      paragraphs: [
        'Ces exercices ciblent deux côtés du problème\u00A0: la force des orteils et des muscles intrinsèques du pied (pour partager la charge pendant la poussée) et la souplesse du mollet (pour éviter de surcharger l’avant-pied). Aucun n’a été testé dans un essai randomisé pour la métatarsalgie en particulier. Quand vous touchez la zone de l’avant-pied sur la carte de la douleur de Walkito pendant un bilan, la séance de soulagement propose d’écarter les orteils et l’étirement du fascia plantaire. La zone des orteils propose d’écarter les orteils et le pied court assis.',
      ],
      exercises: [
        {
          name: 'Écarter les orteils',
          dose: '3\u00A0séries de 10',
          how: 'Assis ou debout, le pied à plat. Écartez les cinq orteils le plus possible, tenez 2 à 3\u00A0secondes, puis relâchez. Cet exercice fait travailler les petits muscles entre les métatarsiens.',
          feel: 'Un étirement entre les orteils et un léger effort sur le dessus du pied',
          stop: 'Une douleur à l’avant-pied pendant l’exercice',
          evidence: { level: 'early', why: 'Pas d’essai sur la métatarsalgie. L’exercice cible les muscles intrinsèques du pied qui aident à répartir la charge de l’avant-pied.' },
          media: 'toe_spread',
          caption: 'Écarter les orteils\u00A0: écartez les cinq orteils, tenez, relâchez',
          alt: 'Un pied aux cinq orteils bien écartés, les muscles entre les métatarsiens mis en évidence',
        },
        {
          name: 'Ramasser la serviette',
          dose: '3\u00A0séries de 10, chaque pied',
          how: 'Asseyez-vous, le pied à plat sur une serviette. Recroquevillez les orteils pour ramener la serviette vers vous. Relâchez et recommencez. C’est l’exercice le plus proche de ce qu’utilisait l’étude de 2020.',
          feel: 'Les muscles sous la voûte et les orteils qui travaillent',
          stop: 'Une douleur à l’avant-pied pendant l’exercice',
          evidence: { level: 'early', why: 'L’étude d’Amaha de 2020 a utilisé un programme d’exercices des orteils proche et a trouvé une baisse de la douleur chez 41\u00A0personnes, mais sans groupe témoin.' },
          media: 'towel_scrunch',
          caption: 'Ramasser la serviette\u00A0: recroquevillez les orteils pour ramener la serviette vers vous',
          alt: 'Un pied sur une serviette, les orteils recroquevillés pour la froisser, les muscles intrinsèques du pied mis en évidence',
        },
        {
          name: 'Pied court, assis',
          dose: '3\u00A0séries de 10, maintien de 5\u00A0secondes',
          how: 'Asseyez-vous, le pied à plat au sol. Sans recroqueviller les orteils, essayez de raccourcir le pied en ramenant l’avant-pied vers le talon. La voûte doit se soulever légèrement. Cet exercice cible les muscles intrinsèques qui soutiennent la voûte et l’avant-pied par en dessous.',
          feel: 'Une tension sous la voûte',
          stop: 'Une douleur à l’avant-pied pendant l’exercice',
          evidence: { level: 'moderate', why: 'Une méta-analyse de 2024 sur le pied court a trouvé une amélioration de la posture du pied. Pas testé pour la métatarsalgie en particulier.' },
          media: 'short_foot_seated',
          caption: 'Pied court\u00A0: soulevez la voûte sans recroqueviller les orteils',
          alt: 'Une personne assise, un pied au sol, la voûte qui se soulève légèrement, les muscles intrinsèques du pied mis en évidence',
        },
        {
          name: 'Lever le gros orteil',
          dose: '3\u00A0séries de 10, chaque pied',
          how: 'Debout ou assis, le pied à plat. Levez seulement le gros orteil en gardant les quatre autres au sol. Puis inversez\u00A0: appuyez le gros orteil au sol et levez les quatre autres. Quand le gros orteil ne peut pas bien se relever, plus de charge se reporte sur les têtes métatarsiennes voisines.',
          feel: 'Difficile au début, puis un contrôle qui vient peu à peu',
          stop: 'Une douleur sous l’articulation du gros orteil qui évoque une sésamoïdite',
          evidence: { level: 'early', why: 'Pas d’essai direct sur la métatarsalgie. Repose sur le rôle mécanique du gros orteil dans la répartition de la charge de l’avant-pied.' },
          media: 'big_toe_lift',
          caption: 'Lever le gros orteil\u00A0: levez le gros orteil en gardant les autres au sol',
          alt: 'Un pied au sol, le gros orteil levé et les quatre autres à plat, le muscle extenseur mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez le pied douloureux sur le genou opposé. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Le fascia plantaire va du talon à la base des orteils et passe juste sous l’avant-pied.',
          feel: 'Un étirement le long de la voûte et sous le pied',
          stop: 'Une douleur vive, pas une sensation d’étirement',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire sa meilleure note, A. Pas testé pour la métatarsalgie en particulier, mais le fascia fait partie de la même structure qui porte la charge.' },
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez doucement les orteils vers vous',
          alt: 'Une personne qui tire vers elle les orteils du pied croisé, le fascia plantaire mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Les mains contre un mur. Jambe arrière tendue, talon au sol, hanches vers l’avant. Tenez jusqu’à sentir l’étirement dans le haut du mollet.',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'Une douleur dans le tendon d’Achille',
          evidence: { level: 'strong', why: 'Note A dans la recommandation de 2023 sur la douleur au talon pour les étirements du mollet. La raideur du mollet est un facteur reconnu de surcharge de l’avant-pied.' },
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le gastrocnémien mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position que pour l’étirement genou tendu, puis pliez le genou arrière jusqu’à ce que l’étirement descende, près du tendon d’Achille. Cet étirement cible le soléaire, le muscle profond du mollet, qui ne se relâche que genou plié.',
          feel: 'Un étirement plus bas dans le mollet, près du talon',
          stop: 'Une douleur dans le tendon d’Achille',
          evidence: { level: 'strong', why: 'Même note A dans la recommandation. Il cible le soléaire, qui contribue aussi à la raideur de la cheville.' },
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à ce que l’étirement descende',
          alt: 'Une personne en fente, genoux pliés, le soléaire mis en évidence',
        },
      ],
      cites: [CITE.amaha, CITE.guideline, CITE.cheng],
    },
    {
      h2: 'Ce que les données disent, et ce qu’elles ne disent pas',
      paragraphs: [
        'Les données sur l’exercice dans la douleur à l’avant-pied sont plus minces que pour la [fasciite plantaire](/fr/exercices-fasciite-plantaire/) ou la tendinite d’Achille, où il existe des essais randomisés. Pour la métatarsalgie, il y a une seule étude avant-après sur 41\u00A0personnes, sans groupe témoin. Le raisonnement mécanique tient, et le risque d’exercices doux des orteils et d’étirements du mollet est faible, mais la preuve directe d’un essai contrôlé manque.',
        'L’exercice seul peut ne pas suffire. Les coussinets métatarsiens, les chaussures à l’avant large et moins de temps en talons font l’objet d’un consensus clinique plus large. Pour le névrome de Morton, changer de chaussures et ajouter un coussinet est souvent plus efficace que l’exercice. Pour une fracture de fatigue d’un métatarsien, l’exercice n’est pas la bonne approche tant que l’os n’a pas récupéré. Si la douleur dure depuis plus de quelques semaines, ou s’accompagne d’un engourdissement ou d’un gonflement, faites-la d’abord examiner. [Douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais) traite de la gestion de la charge chez les coureurs.',
      ],
      cites: [CITE.amaha, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'C’est quoi, une métatarsalgie\u00A0?',
      cites: [CITE.amaha],
      a: 'La métatarsalgie est une douleur et une inflammation autour des têtes métatarsiennes, les bosses osseuses sous l’avant-pied. Elle décrit l’endroit qui fait mal, ce n’est pas un diagnostic unique. Les causes fréquentes sont la surutilisation, des voûtes hautes, des mollets raides et des fléchisseurs des orteils affaiblis. Dans une étude sur 41\u00A0personnes, des exercices des orteils ont réduit la douleur de 2,7\u00A0points en moyenne sur une échelle de 10 (Amaha 2020).',
    },
    {
      q: 'Comment savoir si c’est une métatarsalgie ou un névrome de Morton\u00A0?',
      a: 'La métatarsalgie est une douleur sourde à vive, étendue sous l’avant-pied. Le névrome de Morton est plus précis\u00A0: des brûlures, des fourmillements ou un engourdissement entre le troisième et le quatrième orteil, parfois avec une sensation de claquement quand on serre l’avant-pied. Un professionnel de santé peut les distinguer par un examen clinique et une échographie.',
    },
    {
      q: 'Les exercices des orteils aident-ils la douleur à l’avant-pied\u00A0?',
      cites: [CITE.amaha],
      a: 'Les données sont précoces. Une étude sur 41\u00A0personnes a trouvé que 8\u00A0semaines d’exercices des orteils amélioraient la douleur et la force de préhension, mais elle n’avait pas de groupe témoin, et ses auteurs demandaient des essais randomisés (Amaha 2020). L’idée se tient\u00A0: des orteils plus forts devraient partager davantage la charge de la poussée. Mais la preuve directe d’un essai contrôlé manque.',
    },
    {
      q: 'Pourquoi un mollet raide fait-il mal sous l’avant-pied\u00A0?',
      cites: [CITE.patelGastrocnemius, CITE.riddle],
      a: 'Quand le gastrocnémien, le plus gros et le plus superficiel des deux muscles du mollet, est raide, la cheville ne peut pas assez se plier pendant la marche. Le corps compense en levant le talon plus tôt, ce qui reporte plus de poids sur l’avant-pied. Chez des personnes atteintes de fasciite plantaire, 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien (Patel et DiGiovanni, 2011). Le même mécanisme contribue à la surcharge de l’avant-pied.',
    },
    {
      q: 'Les coussinets métatarsiens marchent-ils contre la douleur à l’avant-pied\u00A0?',
      a: 'Les coussinets métatarsiens sont l’approche conservatrice la plus utilisée pour la douleur à l’avant-pied. Ils soulèvent le métatarsien juste derrière la zone douloureuse et répartissent la pression sur une plus grande surface. L’emplacement compte\u00A0: le coussinet doit être juste derrière les têtes métatarsiennes, pas directement dessous, sinon il peut augmenter la douleur.',
    },
    {
      q: 'Une douleur à l’avant-pied peut-elle être une fracture de fatigue\u00A0?',
      cites: [CITE.patelStressFracture],
      a: 'Oui. Les fractures de fatigue des métatarsiens, en général le deuxième ou le troisième, donnent une douleur localisée qui s’aggrave au fil de la journée et peut faire mal la nuit. Un gonflement sur le dessus du pied est fréquent. Une fracture de fatigue ne se voit souvent pas sur une radiographie simple pendant les deux à trois premières semaines et peut demander une IRM. C’est l’une des raisons de consulter si la douleur à l’avant-pied persiste.',
    },
    {
      q: 'Quelles chaussures choisir quand on a mal à l’avant-pied\u00A0?',
      a: 'Des chaussures à l’avant large, avec une semelle amortie et un talon bas. Les chaussures à semelle en bascule aident en laissant le pied se dérouler pendant la poussée sans plier au niveau des articulations métatarsiennes. Les chaussures étroites et les talons hauts font l’inverse. Pour le névrome de Morton en particulier, changer de chaussures est souvent la mesure la plus efficace.',
    },
    {
      q: 'Combien de temps dure une crise de métatarsalgie\u00A0?',
      a: 'Il n’y a pas de durée fixe. Une crise légère se calme souvent une fois que vous réduisez l’activité qui la déclenche, passez à des chaussures amorties et plus larges, et ajoutez un coussinet métatarsien. Les crises liées à une cause qui persiste, comme les talons hauts, des orteils en griffe ou un mollet raide, peuvent durer des mois, car aucune durée unique ne vaut pour toutes les causes.',
    },
    {
      q: 'Quelles sont les complications d’une métatarsalgie non soignée\u00A0?',
      a: 'Sans prise en charge, la métatarsalgie peut changer votre façon de marcher, car on déplace naturellement le poids loin du point douloureux vers d’autres parties du pied, ce qui peut créer de nouvelles zones de douleur. Une pression continue sur les têtes métatarsiennes peut aussi favoriser des callosités ou, plus rarement, des déformations des orteils comme les orteils en marteau. Changer tôt de chaussures et utiliser des coussinets métatarsiens réduit ce risque.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez des fourmillements, des brûlures ou un engourdissement dans les orteils, ce qui peut évoquer un problème nerveux comme un névrome de Morton',
      'la douleur est localisée en un point et s’aggrave au fil de la journée, ce qui peut évoquer une fracture de fatigue',
      'il y a un gonflement visible sur le dessus du pied',
      'la douleur a suivi une hausse brutale de l’activité, une chute ou un choc',
      'l’articulation du gros orteil est raide, bloquée ou ne se relève plus',
      'la douleur ne s’améliore pas après deux semaines de repos, de changement de chaussures et de coussinets',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
      'les deux pieds font mal et d’autres articulations sont gonflées ou raides',
      'elle vous réveille la nuit ou est présente au repos',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous pouvez faire les exercices de cette page seul, ou laisser Walkito les programmer pour vous. L’application construit un plan une semaine à la fois. Quand vous marquez l’avant-pied sur la carte de la douleur, la séance du bilan se concentre sur l’écartement des orteils et l’étirement du fascia plantaire. Le programme plus large ajoute des étirements et du renforcement du mollet au fil des semaines.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois cet objectif atteint), un court test vérifie vos progrès pour que vous voyiez ce qui change. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si votre douleur à l’avant-pied s’accompagne d’un engourdissement, d’un gonflement ou d’une boule, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Douleur à l’avant-pied',
  campaign: 'guide-ball-of-foot-fr',
};
