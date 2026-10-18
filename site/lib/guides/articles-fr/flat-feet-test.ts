import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/flat-feet-test.ts (2026-10-18), written around
 * «test pied plat» and «comment savoir si on a les pieds plats». «Vous»,
 * terminology and exercise names as in `lib/guides/fr.ts` and the other
 * articles-fr pages. Figures, doses, grades, qualifiers and sources are
 * identical to the English page after its fact-check. Same CITE keys and
 * media ids.
 */

export const FLAT_FEET_TEST_FR: Guide = {
  lang: 'fr',
  page: 'flatFeetTest',
  mainSource: CITE.menzMunteanu,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Test pied plat\u00A0: 4 vérifications simples à la maison',
  description:
    'Quatre tests du pied plat à faire chez soi\u00A0: empreinte mouillée, assis ou debout, pointes et gros orteil, montée sur une jambe, et ce que chacun montre.',
  h1: 'Test du pied plat à la maison\u00A0: 4 vérifications simples, ce qu’elles peuvent montrer et ce qu’elles ne montrent pas',
  lede:
    'Vous pouvez vérifier si vous avez les pieds plats chez vous en cinq minutes environ\u00A0: regardez l’empreinte d’un pied mouillé, comparez votre voûte assis et debout, montez sur la pointe des pieds ou levez le gros orteil pour voir si la voûte réapparaît, et essayez une montée sur pointe sur une jambe. L’empreinte est la moins précise des quatre\u00A0: chez 95\u00A0adultes âgés comparés à des radiographies, un score tiré de l’empreinte ne correspondait que modérément à la hauteur réelle de la voûte (Menz et Munteanu, 2005). Ce qui compte le plus, c’est de savoir si la voûte réapparaît et si un côté se comporte différemment de l’autre.',
  intro: [
    'Aucune de ces vérifications n’est un diagnostic, et une voûte basse n’est en général pas un problème en soi. Cette page explique comment faire chaque test, ce que la recherche dit de sa fiabilité, ce qu’un professionnel de santé mesure à la place, et quels résultats doivent vous amener à faire examiner votre pied. Pour savoir ce que sont les pieds plats et quand ils comptent, commencez par [pieds plats](/fr/pieds-plats/).',
  ],
  takeaways: [
    'L’empreinte mouillée n’est qu’un repère grossier. Chez 95\u00A0personnes âgées de 62 à 94\u00A0ans, l’indice de voûte tiré de l’empreinte ne correspondait que modérément à la hauteur de la voûte sur la radiographie, alors qu’une mesure à la règle de l’os de la voûte y correspondait bien (Menz et Munteanu, 2005).',
    'La graisse sous la plante peut remplir une empreinte\u00A0: chez 24\u00A0adultes en surpoids ou en situation d’obésité, l’indice de voûte de l’empreinte augmentait avec le pourcentage de graisse corporelle (Wearing et coll., 2004).',
    'Si la voûte réapparaît quand vous êtes assis, sur la pointe des pieds ou quand vous levez le gros orteil, le pied plat est souple. C’est la forme courante, celle qu’ont étudiée les essais d’exercices (Brijwasi et Borkar, 2023).',
    'Avoir du mal à monter sur un pied, une douleur derrière la malléole interne et une voûte qui s’affaisse de plus en plus sont des signes de dysfonction du tendon tibial postérieur. Chez 582\u00A0femmes de plus de 40\u00A0ans, 3,3\u00A0% avaient des symptômes à un stade précoce (stade I ou II), et aucune n’avait été diagnostiquée (Kohls-Gatzoulis et coll., 2009).',
    'Même les mesures des professionnels varient\u00A0: quand deux examinateurs inexpérimentés ont mesuré la chute du naviculaire, leurs résultats concordaient mal (Picciano et coll., 1993). Dans une étude plus récente portant sur 86\u00A0jeunes adultes, la même mesure était très reproductible (Zuil-Escobar et coll., 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Comment savoir si l’on a les pieds plats à la maison\u00A0?',
      paragraphs: [
        '**Faites quatre vérifications, dans cet ordre, pieds nus sur un sol dur.** Les deux premières vous disent à quelle hauteur se trouve votre voûte. Les deux dernières vous disent si elle est souple et si le tendon qui la soutient fait son travail. Il vous faut une serviette, un peu d’eau, une feuille de papier kraft ou de carton, et un mur pour vous tenir.',
        'Testez les deux pieds à chaque fois. Une différence entre le pied gauche et le pied droit en dit plus que chaque pied pris seul, car chez la plupart des gens les deux pieds se ressemblent à peu près, et un seul pied plat fait partie des signes d’alerte en bas de cette page.',
      ],
      table: {
        caption: 'Les quatre vérifications à la maison en un coup d’œil',
        head: ['Vérification', 'Ce que vous regardez', 'Ce qu’elle peut montrer', 'Ce qu’elle ne peut pas montrer'],
        rows: [
          ['Empreinte mouillée', 'Quelle part de la plante s’imprime', 'Une voûte basse, à peu près', 'La hauteur exacte de la voûte, ou la douleur'],
          ['Assis ou debout', 'La voûte avec et sans le poids du corps', 'À quel point la voûte s’abaisse', 'Pourquoi elle s’abaisse'],
          ['Pointes et gros orteil', 'Si la voûte réapparaît', 'Souple ou raide', 'La cause d’un pied raide'],
          ['Montée sur pointe sur une jambe', 'Monter sur un seul pied', 'Une faiblesse d’un côté', 'Quel tendon est en cause'],
        ],
      },
      after: [
        'Notez ce que vous voyez, ou photographiez chaque pied par l’intérieur et par l’arrière. Refaire les mêmes vérifications dans quelques mois vous montre si quelque chose a changé, ce qui compte plus qu’un résultat isolé.',
      ],
    },
    {
      h2: 'Comment faire le test de l’empreinte mouillée, et est-il fiable\u00A0?',
      keyFact: 'Chez 95\u00A0personnes âgées de 62 à 94\u00A0ans, l’indice de voûte de l’empreinte ne correspondait que modérément à la hauteur de la voûte sur la radiographie (r = 0,52), contre r = 0,79 pour une mesure de la hauteur de l’os de la voûte (Menz et Munteanu, 2005).',
      paragraphs: [
        '**Comment faire\u00A0:** mouillez la plante d’un pied, posez-le de tout votre poids sur du papier kraft ou du carton sec, restez debout normalement une seconde, puis retirez le pied. Faites de même avec l’autre pied. Regardez le milieu de l’empreinte, la partie entre le talon et l’avant du pied\u00A0:',
        {
          list: [
            '**Une courbe nette sur le bord interne**, avec une bande centrale environ deux fois moins large que l’avant du pied, ou moins\u00A0: une voûte typique.',
            '**Une bande centrale large, avec peu ou pas de courbe**, si bien que l’empreinte ressemble à une pantoufle\u00A0: une voûte basse.',
            '**Seuls le talon et l’avant du pied s’impriment**, reliés par une bande fine ou pas du tout\u00A0: une voûte haute. Voir [pied creux](/fr/pied-creux-exercices/).',
          ],
        },
        '**Ce qu’elle peut vous dire\u00A0:** à peu près quelle part de votre plante touche le sol. Les chercheurs transforment cette même empreinte en un chiffre, l’indice de voûte (arch index), en comparant le tiers central de l’empreinte à l’empreinte entière (Cavanagh et Rodgers, 1987).',
        '**Ce qu’elle ne peut pas vous dire\u00A0:** la hauteur réelle de votre voûte. Chez 95\u00A0personnes âgées de 62 à 94\u00A0ans comparées à des radiographies, l’indice de l’empreinte ne correspondait que modérément à la hauteur de l’os de la voûte (Menz et Munteanu, 2005). Une étude de 1992 portant sur 115\u00A0hommes a montré que les empreintes ne permettaient pas de prédire la hauteur de la voûte (Hawes et coll., 1992), tandis qu’une étude de 2009 sur 91\u00A0jeunes adultes a trouvé une correspondance faible à modérée avec les radiographies (Murley et coll., 2009). Chez 198\u00A0patients d’une consultation, trois scores d’empreinte repéraient un pied plat visible à la radiographie avec une précision que les auteurs qualifient de passable (Paecharoen et coll., 2023).',
        'L’une des raisons, ce sont les tissus mous. Dans une petite étude pilote portant sur 24\u00A0adultes en surpoids ou en situation d’obésité, l’indice de l’empreinte à la marche augmentait avec le pourcentage de graisse corporelle\u00A0: une empreinte plus pleine peut donc signifier plus de coussinet sous la voûte, et non une voûte plus basse (Wearing et coll., 2004). Une empreinte ne dit rien non plus de la douleur, qui est pourtant ce qui décide si un pied plat mérite qu’on s’en occupe.',
      ],
      cites: [CITE.menzMunteanu, CITE.cavanaghArchIndex, CITE.hawesFootprint, CITE.murleyArch, CITE.paecharoen, CITE.wearing],
    },
    {
      h2: 'Votre voûte change-t-elle entre la position assise et debout\u00A0?',
      paragraphs: [
        '**Asseyez-vous sur une chaise, pieds à plat et détendus, et regardez le bord interne de chaque pied.** Repérez l’espace sous la voûte. Puis levez-vous, le poids sur les deux pieds, et regardez de nouveau, ou demandez à quelqu’un de prendre une photo de profil au ras du sol.',
        'Un certain affaissement est normal\u00A0: toute voûte s’abaisse un peu sous votre poids. Dans des données regroupées de 619\u00A0adultes en bonne santé, le pied moyen reposait légèrement basculé vers l’intérieur, ce que les auteurs considèrent comme la position normale (Redmond et coll., 2008). Ce que vous cherchez, c’est un grand changement\u00A0: une voûte bien visible en position assise qui disparaît debout.',
        '**Regardez ensuite par l’arrière.** Tenez-vous debout normalement et demandez à quelqu’un de regarder vos talons au ras du sol. Un talon qui bascule vers l’extérieur, avec la malléole interne qui fait saillie vers l’intérieur, va avec une voûte basse. Si un talon bascule plus que l’autre, notez-le.',
        'Cette vérification vous dit à quel point la voûte s’abaisse, ce qu’un professionnel de santé mesure plus précisément sous le nom de chute du naviculaire (voir plus bas). Elle ne vous dit pas pourquoi\u00A0: un pied laxe de naissance et un tendon qui s’affaiblit peuvent se ressembler en position debout. Les deux vérifications suivantes commencent à les distinguer.',
      ],
      cites: [CITE.redmondFpi],
    },
    {
      h2: 'Comment savoir si un pied plat est souple\u00A0?',
      keyFact: 'La synostose du tarse (coalition tarsienne), un pont osseux ou fibreux entre des os du pied souvent associé à un pied plat raide et douloureux chez le jeune adulte, est rapportée chez 1 à 13\u00A0% des personnes (Mehdi et coll., 2024).',
      paragraphs: [
        'Un pied plat souple s’aplatit sous votre poids, mais retrouve sa voûte quand la charge change. Deux vérifications rapides le montrent\u00A0:',
        {
          list: [
            '**Le test sur la pointe des pieds.** Debout, en vous tenant à un mur, montez sur l’avant des deux pieds. Observez le bord interne de chaque pied, ou les talons par l’arrière. Sur un pied souple, une voûte apparaît et les talons basculent légèrement vers l’intérieur pendant la montée.',
            '**Le test du gros orteil (test de Jack).** Tenez-vous debout normalement. Levez le gros orteil aussi haut que possible, ou demandez à quelqu’un de le lever pour vous, pendant que le talon reste au sol. Sur un pied souple, la voûte se soulève quand l’orteil monte. Le test porte le nom de Jack, qui l’a décrit en 1953 (Jack, 1953).',
          ],
        },
        '**Si la voûte réapparaît, le pied plat est souple.** C’est la forme courante, et celle qu’ont étudiée les essais d’exercices\u00A0: chez 52\u00A0personnes ayant des pieds plats souples, six semaines d’exercices de pied court, de cheville, de hanche et d’étirements ont amélioré deux mesures de la forme de la voûte davantage que dans un groupe témoin (Brijwasi et Borkar, 2023).',
        '**Si la voûte reste plate et que le pied paraît raide**, le pied plat est peut-être rigide. L’une des causes est la synostose du tarse, un pont d’os, de cartilage ou de tissu fibreux entre deux os du pied, souvent retrouvée chez de jeunes adultes ayant un pied plat raide et douloureux (Mehdi et coll., 2024). Devant un pied plat rigide, un professionnel de santé doit trouver la cause avant que vous commenciez un programme d’exercices.',
        'Soyons honnêtes sur ce que valent ces vérifications. Nous n’avons trouvé aucune étude qui ait mesuré la fiabilité du test sur la pointe des pieds ou du test de Jack chez l’adulte quand on les fait soi-même à la maison. Ils sont simples et le résultat est en général net, mais considérez un résultat raide comme une raison de vous faire examiner, pas comme un diagnostic.',
      ],
      cites: [CITE.jack1953, CITE.brijwasi, CITE.mehdiCoalition],
    },
    {
      h2: 'Que montre la montée sur pointe sur une jambe en cas de pied plat\u00A0?',
      keyFact: 'Dans une enquête auprès de 582\u00A0femmes de plus de 40\u00A0ans en Angleterre, 3,3\u00A0% avaient une dysfonction du tendon tibial postérieur à un stade précoce, et aucune n’avait été diagnostiquée auparavant (Kohls-Gatzoulis et coll., 2009).',
      paragraphs: [
        'Le tibial postérieur est le muscle dont le tendon passe derrière la malléole interne et soutient la voûte. Quand ce tendon s’affaiblit, la voûte peut s’affaisser lentement de ce côté. C’est la dysfonction du tendon tibial postérieur, une raison fréquente pour laquelle la voûte d’un adulte s’aplatit avec le temps. Le tableau typique associe une douleur sur le côté interne de la cheville, un pied qui s’aplatit et un talon qui part vers l’extérieur (Deu et coll., 2022).',
        '**Comment vérifier\u00A0:** tenez-vous sur un pied à côté d’un mur, le bout des doigts contre le mur uniquement pour l’équilibre. Montez aussi haut que possible sur l’avant du pied, puis redescendez. Faites-en quelques-unes, puis changez de pied. Observez trois choses\u00A0:',
        {
          list: [
            'vous montez sur un pied aussi facilement que sur l’autre',
            'le talon tourne vers l’intérieur en haut de la montée, de la même façon des deux côtés',
            'il n’y a pas de douleur derrière ou sous la malléole interne',
          ],
        },
        'Avoir du mal à monter d’un côté, un talon qui ne tourne pas vers l’intérieur ou une douleur à la malléole interne sont les signes qui orientent vers le tendon. Les professionnels de santé utilisent le même mouvement comme test de dépistage, et le tableau complet se trouve dans [dysfonction du tendon tibial postérieur](/fr/dysfonction-tendon-tibial-posterieur/).',
        'Cette vérification porte sur la forme et la sensation d’une seule montée, en comparant les deux côtés, et non sur le nombre de répétitions. Si vous voulez un chiffre pour l’endurance du mollet, avec le rythme utilisé dans la recherche et les nombres qu’atteignent les adultes en bonne santé, utilisez le [test de montée sur pointes](/fr/test-montee-sur-pointes/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'Que mesure un professionnel de santé en cas de pieds plats\u00A0?',
      keyFact: 'Chez 619\u00A0adultes en bonne santé évalués avec le Foot Posture Index, la moyenne était de +4 sur une échelle de -12 à +12, ce que les auteurs qualifient de légèrement pronateur et normal (Redmond et coll., 2008).',
      paragraphs: [
        'Un professionnel de santé regarde les mêmes choses que vous, mais il les note d’une façon standardisée. Les deux mesures les plus courantes\u00A0:',
        {
          list: [
            '**Foot Posture Index (FPI).** Six observations du pied en position debout, chacune notée de -2 à +2, dont l’angle du talon, la saillie de la malléole interne et la forme de la voûte. Le total va de -12 (voûte haute) à +12 (pied plat). Dans des données regroupées de 619\u00A0adultes en bonne santé, la moyenne était de +4, et les auteurs considèrent les scores inférieurs à -3 ou supérieurs à +10 comme nettement en dehors de la normale (Redmond et coll., 2008).',
            '**Chute du naviculaire (navicular drop).** Le professionnel marque l’os du côté interne de la voûte, le naviculaire, mesure sa hauteur en position assise avec le pied dans une position définie, puis debout, et note de combien il descend. Dans les études, les adultes en bonne santé se situent en moyenne entre 3,6 et 8,1\u00A0millimètres environ, et aucun seuil de «\u00A0trop\u00A0» n’a été confirmé (Nielsen et coll., 2009).',
          ],
        },
        '**Ces mesures valent mieux qu’une empreinte, mais elles ne sont pas parfaites.** Chez des adultes âgés, une mesure à la règle de la hauteur de l’os de la voûte correspondait bien aux radiographies (r = 0,79), le FPI moins bien (r = 0,36 à 0,59), parce qu’il note le pied entier et pas seulement la voûte (Menz et Munteanu, 2005). Le total du FPI montrait une fiabilité modérée dans l’ensemble, la hauteur du naviculaire était la mesure isolée la plus fiable chez l’adulte, et aucune des mesures testées n’était assez fiable chez le jeune enfant (Evans et coll., 2003).',
        'L’expérience compte. Quand deux examinateurs inexpérimentés ont mesuré la chute du naviculaire chez 15\u00A0personnes, leurs résultats concordaient mal (Picciano et coll., 1993). Chez 86\u00A0jeunes adultes dans une étude plus récente, la chute du naviculaire et les scores d’empreinte étaient très reproductibles (Zuil-Escobar et coll., 2018). Si votre voûte est suivie dans le temps, mieux vaut que ce soit la même personne qui mesure.',
        'Si un professionnel de santé soupçonne un pied rigide, une synostose ou une atteinte du tendon, il peut demander une radiographie en charge, un scanner ou une IRM, ce qu’aucune vérification à la maison ne peut remplacer (Mehdi et coll., 2024).',
      ],
      sourceNote:
        'Menz et Munteanu 2005\u00A0: r de Pearson par rapport à la hauteur radiographique du naviculaire, à l’angle d’inclinaison calcanéenne et à l’angle calcanéum-premier métatarsien\u00A0; indice de voûte r = 0,52 à 0,71, FPI r = 0,36 à 0,59. Picciano 1993\u00A0: chute du naviculaire, ICC inter-examinateurs 0,57, intra-examinateur 0,61 et 0,79. Zuil-Escobar 2018\u00A0: ICC supérieur à 0,88.',
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.menzMunteanu, CITE.evansFpiReliability, CITE.picciano, CITE.zuilEscobar, CITE.mehdiCoalition],
    },
    {
      h2: 'Que faire de votre résultat\u00A0?',
      paragraphs: [
        'Rassemblez les quatre vérifications\u00A0:',
        {
          list: [
            '**Voûte basse qui réapparaît sur la pointe des pieds, sans douleur, les deux pieds semblables\u00A0:** un pied plat souple, une variante normale. Il n’y a rien à faire. Les exercices sont facultatifs.',
            '**Voûte basse qui réapparaît, avec des voûtes fatiguées ou douloureuses après de longues journées\u00A0:** des exercices pour le pied et la cheville sont un point de départ raisonnable. Le programme complet se trouve dans [exercices pour pieds plats](/fr/exercices-pieds-plats/).',
            '**Voûte qui reste plate, un pied plus plat que l’autre ou une douleur à la malléole interne\u00A0:** consultez un professionnel de santé avant de commencer les exercices. La liste plus bas donne les détails.',
          ],
        },
        '**Ce que l’exercice peut faire, et ce qu’il ne peut pas faire.** Chez 52\u00A0personnes ayant des pieds plats souples, six semaines de pied court, d’exercices de cheville et de hanche et d’étirements ont davantage amélioré la forme de la voûte que des mouvements de la cheville de haut en bas seuls (Brijwasi et Borkar, 2023). Une revue de 2024 sur l’entraînement en pied court n’a trouvé aucun changement net de la posture globale du pied, et un changement d’une mesure de la voûte seulement dans les programmes de plus de six semaines (Cheng et coll., 2024). Les deux ont mesuré la forme, pas la douleur.',
        'Les exercices ci-dessous sont un point de départ tiré des [exercices pour pieds plats](/fr/exercices-pieds-plats/), avec les mêmes doses.',
      ],
      exercises: [
        {
          name: 'Pied court, assis',
          evidence: { level: 'moderate', why: 'Fait partie du programme qui a amélioré la forme de la voûte dans un essai de 2023. Seul, le pied court donne des résultats plus faibles.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'La voûte qui se soulève',
          how: 'Asseyez-vous, le pied à plat au sol. Tirez la base des orteils vers le talon pour que la voûte se soulève, et tenez. Gardez le bord extérieur du pied au sol et soulevez la voûte pour former un petit creux sous le pied. Ne recroquevillez pas les orteils. C’est l’erreur la plus fréquente sur cet exercice.',
          stop: 'Une crampe dans la voûte qui ne passe pas, ou une douleur à la malléole interne',
          image: 'Exercice\u00A0: pied court, assis',
          media: 'short_foot_seated',
          caption: 'Pied court, assis\u00A0: tirez la base des orteils vers le talon pour soulever la voûte',
          alt: 'Une jambe en position assise, le pied à plat au sol, les muscles de la voûte mis en évidence quand elle se soulève',
        },
        {
          name: 'Lever le gros orteil',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'Le gros orteil qui bouge tout seul',
          how: 'Asseyez-vous, pieds à plat. Levez seulement le gros orteil et tenez. Les quatre autres orteils restent à plat au sol. Cet exercice apprend au gros orteil à bouger seul, et c’est la première étape pour activer la voûte.',
          stop: 'Une douleur à la base du gros orteil',
          image: 'Exercice\u00A0: lever le gros orteil',
          media: 'big_toe_lift',
          caption: 'Lever le gros orteil\u00A0: seul le gros orteil monte, les quatre autres restent à plat',
          alt: 'Un pied au sol qui lève seulement le gros orteil, la voûte mise en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge pendant que le mollet se réveille.',
          stop: 'Une douleur derrière la malléole interne, ou un côté qui n’arrive pas à suivre',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Inversion avec élastique',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie du programme testé dans les études de cette page.' },
          dose: '3\u00A0séries de 12, chaque pied',
          often: 'Jours de renforcement',
          feel: 'Un travail le long de l’intérieur du pied et de la cheville',
          how: 'Asseyez-vous avec un élastique autour du pied et tournez le pied vers l’intérieur contre sa résistance. C’est le pied qui bouge, pas la jambe. Le genou reste immobile. Walkito n’ajoute cet exercice qu’après six séances de pied court debout, pour que les muscles propres à la voûte passent en premier.',
          stop: 'Une douleur derrière la malléole interne qui persiste après la série',
          image: 'Exercice\u00A0: inversion avec élastique',
          media: 'band_inversion',
          caption: 'Inversion avec élastique\u00A0: tournez le pied vers l’intérieur, le genou reste immobile',
          alt: 'Une jambe avec un élastique autour du pied, qui tourne le pied vers l’intérieur, le bas de la jambe mis en évidence',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Comment savoir si j’ai les pieds plats\u00A0?',
      cites: [CITE.menzMunteanu, CITE.brijwasi],
      a: 'Regardez l’empreinte d’un pied mouillé, puis comparez votre voûte assis et debout. Une empreinte sans courbe sur le bord interne et une voûte qui disparaît debout évoquent une voûte basse. Montez ensuite sur la pointe des pieds\u00A0: si la voûte réapparaît, le pied plat est souple, la forme courante. Une empreinte seule ne correspond que modérément à la hauteur réelle de la voûte.',
    },
    {
      q: 'Le test de l’empreinte mouillée est-il fiable\u00A0?',
      cites: [CITE.menzMunteanu, CITE.hawesFootprint, CITE.wearing],
      a: 'Seulement en gros. Chez 95\u00A0adultes âgés comparés à des radiographies, le score de l’empreinte correspondait modérément à la hauteur de la voûte, et une étude de 1992 portant sur 115\u00A0hommes a montré que les empreintes ne permettaient pas de prédire la hauteur de la voûte. La graisse sous la plante peut aussi remplir l’empreinte. Servez-vous-en comme d’un premier aperçu, pas comme d’un diagnostic.',
    },
    {
      q: 'Quel est le test du pied plat souple\u00A0?',
      cites: [CITE.jack1953],
      a: 'Il vérifie si la voûte réapparaît. Montez sur la pointe des pieds, ou levez le gros orteil pendant que le talon reste au sol (le test de Jack, décrit en 1953). Si une voûte apparaît, le pied plat est souple. S’il reste plat et raide, un professionnel de santé doit en chercher la cause. Nous n’avons trouvé aucune étude sur la fiabilité de ces deux tests faits à la maison.',
    },
    {
      q: 'Comment savoir si mes pieds plats sont rigides\u00A0?',
      cites: [CITE.mehdiCoalition],
      a: 'Un pied plat rigide n’a pas de voûte quand vous êtes assis, sur la pointe des pieds ou quand vous levez le gros orteil, et il paraît souvent raide. L’une des causes est la synostose du tarse, un pont entre des os du pied rapporté chez 1 à 13\u00A0% des personnes. Un pied plat rigide et douloureux relève d’un professionnel de santé et demande en général une imagerie.',
    },
    {
      q: 'Peut-on avoir un seul pied plat\u00A0?',
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence],
      a: 'Oui, et cela vaut la peine de le faire vérifier. Une voûte qui s’affaisse de plus en plus d’un côté, surtout avec une douleur derrière la malléole interne ou du mal à monter sur ce pied, est un signe typique de dysfonction du tendon tibial postérieur. Chez 582\u00A0femmes de plus de 40\u00A0ans, 3,3\u00A0% en avaient des signes précoces et aucune n’avait été diagnostiquée. Consultez un professionnel de santé.',
    },
    {
      q: 'Quelle est la chute du naviculaire normale\u00A0?',
      cites: [CITE.nielsenNavicular, CITE.picciano],
      a: 'Dans les études, les adultes en bonne santé ont en moyenne une chute du naviculaire de 3,6 à 8,1\u00A0millimètres environ, c’est-à-dire la distance dont l’os de la voûte descend quand vous vous levez. Des seuils de 10, 13 ou 15\u00A0millimètres ont été proposés pour «\u00A0trop\u00A0», mais aucun n’est confirmé, et les résultats varient d’un examinateur à l’autre, surtout chez les moins expérimentés. Il est difficile de la mesurer précisément sur soi-même.',
    },
    {
      q: 'Qu’est-ce que le Foot Posture Index\u00A0?',
      cites: [CITE.redmondFpi, CITE.evansFpiReliability],
      a: 'C’est un examen en six parties qu’un professionnel de santé réalise pendant que vous êtes debout. Il note le talon, la cheville et la voûte de -2 à +2 chacun, pour un total de -12 (voûte haute) à +12 (pied plat). Chez 619\u00A0adultes en bonne santé, la moyenne était de +4, ce qui est normal. Sa fiabilité était modérée dans l’ensemble, et aucune mesure de la posture du pied testée n’était assez fiable chez le jeune enfant.',
    },
    {
      q: 'Faut-il traiter des pieds plats qui ne font pas mal\u00A0?',
      cites: [CITE.menz],
      a: 'En général, non. Un pied plat souple qui ne fait pas mal et ne vous limite en rien est une variante normale. La Framingham Foot Study, menée chez environ 1\u00A0900\u00A0adultes, n’a trouvé aucun lien entre la posture en pied plat et les douleurs du bas du dos. La douleur, la raideur ou un changement d’un seul côté sont les raisons de le faire examiner.',
    },
    {
      q: 'Puis-je tester mon enfant de la même façon\u00A0?',
      cites: [CITE.harrisPediatricFlatfoot, CITE.evansFpiReliability],
      a: 'Les tests sur la pointe des pieds et du gros orteil fonctionnent aussi chez l’enfant, mais la plupart des jeunes enfants ont une voûte basse qui se forme avec l’âge, et dans une étude, les mesures de la posture du pied n’étaient pas assez fiables chez le jeune enfant. Un pied raide, une douleur ou une boiterie sont des raisons de consulter un médecin. Plus d’informations dans [pieds plats chez l’enfant](/fr/pieds-plats-enfant/).',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la voûte reste plate quand vous êtes assis, sur la pointe des pieds ou quand vous levez le gros orteil, et que le pied paraît raide',
      'un pied est devenu plus plat que l’autre au fil des mois, ou vous le remarquez soudainement',
      'vous avez une douleur ou un gonflement derrière ou sous la malléole interne',
      'vous n’arrivez pas à monter sur un pied, ou monter de ce côté fait mal',
      'un pied plat est apparu après une chute, une torsion ou une blessure',
      'vous êtes diabétique et le pied est chaud, rouge ou gonflé, ou sa forme change',
      'vous ressentez un engourdissement, une brûlure ou des fourmillements dans le pied',
      'le pied plat d’un enfant est raide, douloureux ou s’accompagne d’une boiterie',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour les douleurs au talon et au pied, sur iPhone et Android. Elle construit un plan à partir de vos réponses, notamment l’endroit où vous avez mal et le côté, et répète un test simple tous les 14\u00A0jours\u00A0: montées sur pointes, maintien de la voûte, équilibre sur une jambe, et comparaison gauche contre droite.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous indiquez comment vous sentez vos pieds, et le plan s’adapte. Walkito ne pose pas de diagnostic\u00A0: faites donc d’abord examiner un pied plat raide, d’un seul côté ou douloureux.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['hubFlatFeet', 'flatFeet', 'pttd'],
  crumb: 'Test du pied plat',
  campaign: 'guide-flat-feet-test-fr',
};
