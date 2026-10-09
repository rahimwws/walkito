import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/calf-raise-test.ts` (2026-10-08), French
 * (France) with «vous», written around «test de montée sur pointes»,
 * «heel-rise test», «combien de montées sur pointes sur une jambe».
 * Figures, norms and qualifiers are identical to the English page.
 * Citation notes live in the English file.
 */

export const CALF_RAISE_TEST_FR: Guide = {
  lang: 'fr',
  page: 'calfRaiseTest' as any,
  mainSource: CITE.hebertLosier,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Test de montée sur pointes\u00A0: normes par âge, protocole',
  description:
    'Le test de montée sur pointes sur une jambe mesure l’endurance du mollet\u00A0: protocole, normes par âge et sexe, sens du score, comment progresser.',
  h1: 'Test de montée sur pointes\u00A0: combien devriez-vous en faire, et que veut dire votre score\u00A0?',
  lede:
    'Le test de montée sur pointes sur une jambe, aussi appelé heel-rise test, mesure l’endurance des muscles du mollet. Vous vous tenez sur un pied et montez sur la pointe autant de fois que possible à un rythme fixe. Le nombre obtenu indique la force résistante à la fatigue du mollet de chaque côté, ce qui compte pour la marche, la course et la récupération après une douleur au talon ou une blessure d’Achille.',
  intro: [
    'Une étude de 2017 sur 566\u00A0adultes en bonne santé a trouvé une médiane globale d’environ 23 à 24\u00A0répétitions par jambe, qui varie selon l’âge, le sexe et le niveau d’activité. Cette page présente le protocole de recherche, une version à faire chez soi, les valeurs de référence par âge, le sens d’un écart gauche-droite et le lien entre ce test, la douleur au talon et la course.',
  ],
  takeaways: [
    'La médiane globale chez l’adulte en bonne santé est de 24\u00A0répétitions sur la jambe droite et 23 sur la gauche, d’après une étude sur 566\u00A0personnes de 20 à 81\u00A0ans (Hebert-Losier et coll., 2017).',
    'Les hommes faisaient plus de répétitions que les femmes au total (médiane de 24 contre 21), mais après 60\u00A0ans, les femmes faisaient mieux que les hommes du même âge (Hebert-Losier et coll., 2017).',
    'Une différence gauche-droite de plus de 10\u00A0% est le seuil habituel d’une asymétrie significative en rééducation du membre inférieur (Silbernagel et coll., 2010).',
    'Le test a une excellente fiabilité\u00A0: ICC de 0,96, avec une erreur de mesure typique d’environ deux répétitions (Hebert-Losier et coll., 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Que mesure le test de montée sur pointes sur une jambe\u00A0?',
      keyFact: 'Dans une étude cas-témoins sur 20\u00A0sportifs, ceux qui avaient un syndrome de stress tibial médial (périostite tibiale) avaient une endurance du mollet plus faible que les témoins en bonne santé (Madeley et coll., 2007).',
      paragraphs: [
        'Le test mesure l’endurance des fléchisseurs plantaires, les muscles qui poussent le pied vers le bas et décollent le talon du sol. Les principaux sont le gastrocnémien (le plus gros et le plus superficiel des deux muscles du mollet) et le soléaire (le muscle profond, en dessous). Ensemble, ils s’attachent à l’os du talon par le tendon d’Achille.',
        'L’endurance, ici, c’est le nombre de répétitions que vous pouvez faire avant que le mollet se fatigue et que le talon ne puisse plus monter assez haut ou suivre le rythme. Ce nombre reflète la capacité à soutenir un effort sur des dizaines de cycles, ce qui est plus proche de ce que fait le mollet pendant la marche et la course qu’une seule poussée lourde.',
        'Les professionnels de santé utilisent ce test pour suivre la récupération après une rupture du tendon d’Achille, pour repérer une faiblesse du mollet chez les personnes qui ont mal au talon ou une périostite tibiale, et pour comparer une jambe à l’autre. Dans une étude cas-témoins sur 20\u00A0sportifs, ceux qui avaient un syndrome de stress tibial médial (périostite tibiale) avaient une endurance du mollet plus faible que les témoins en bonne santé.',
      ],
      cites: [CITE.hebertLosier, CITE.madeley],
    },
    {
      h2: 'Comment se fait le heel-rise test\u00A0? Le protocole de recherche',
      paragraphs: [
        'Le protocole d’Hebert-Losier 2017 est la version la plus citée et la source des valeurs de référence de cette page. Dans cette étude, 566\u00A0adultes en bonne santé de 20 à 81\u00A0ans ont fait des montées sur pointes sur une jambe jusqu’à la fatigue, de chaque côté.',
        'La personne se tient pieds nus ou en chaussures plates sur une planche inclinée à 10\u00A0degrés, un pied à la fois. Un appui du bout des doigts sur un mur, à hauteur d’épaules, est autorisé, uniquement pour l’équilibre. Un métronome est réglé à 60\u00A0battements par minute\u00A0: un battement pour monter, un pour descendre, soit deux secondes par répétition complète. La consigne est de monter le talon le plus haut possible, genou tendu et buste droit.',
        'Le test s’arrête quand le talon ne décolle plus de la planche, quand le rythme du métronome ne peut plus être suivi, quand le genou se plie ou que le buste penche, ou quand la personne s’appuie sur le mur au lieu de le toucher du bout des doigts. Un rappel oral est donné avant l’arrêt. L’échauffement comprend 10\u00A0minutes de marche rapide puis 10\u00A0montées sur pointes sur les deux pieds. Deux minutes de repos séparent les deux jambes.',
      ],
      sourceNote:
        'Hebert-Losier 2017\u00A0: ICC de 0,96 (droite) et 0,96 (gauche)\u00A0; différence moyenne entre deux jours de 0,2\u00A0répétition (limites d’agrément à 95\u00A0% de -6,2 à 6,5) à droite et de 0,1\u00A0répétition (limites d’agrément à 95\u00A0% de -6,1 à 6,2) à gauche.',
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Comment faire le test de montée sur pointes chez soi\u00A0?',
      paragraphs: [
        'Vous n’avez pas besoin de planche inclinée. Sur un sol plat, le test est un peu plus facile, donc votre nombre peut dépasser de quelques répétitions les normes publiées. Ce n’est pas grave pour suivre l’évolution dans le temps et comparer la gauche et la droite.',
        'Tenez-vous près d’un mur, le bout des doigts posé dessus à hauteur d’épaules. Levez un pied. Réglez une application de métronome à 60\u00A0battements par minute. Au premier battement, montez sur la pointe le plus haut possible. Au deuxième, redescendez le talon jusqu’au sol. Continuez jusqu’à ne plus pouvoir suivre le rythme, jusqu’à ce que le talon décolle à peine, ou jusqu’à ce que le genou se plie.',
        'Comptez le nombre total de répétitions. Reposez-vous deux minutes, puis recommencez sur l’autre jambe. Notez les deux nombres et la date. L’erreur de mesure typique est d’environ deux répétitions\u00A0: un petit écart d’un test à l’autre, c’est du bruit. Ce qui compte, c’est la tendance sur plusieurs semaines.',
      ],
      exercises: [
        {
          name: 'Test de montée sur pointes sur une jambe (version maison)',
          dose: 'Maximum de répétitions à 60\u00A0bpm, une série par jambe',
          how: 'Tenez-vous sur un pied près d’un mur, le bout des doigts posé dessus pour l’équilibre. Montez sur la pointe en une seconde, redescendez en une seconde, au rythme d’un métronome à 60\u00A0bpm. Continuez jusqu’à ne plus pouvoir suivre le rythme ou jusqu’à ce que le talon décolle à peine. Comptez les répétitions. Reposez-vous 2\u00A0minutes, puis recommencez sur l’autre jambe.',
          feel: 'Une brûlure qui augmente dans le mollet au fil des répétitions',
          stop: 'Vous ne pouvez plus décoller le talon, plus suivre le métronome, ou votre genou se plie',
          media: 'heel_raise_double',
          mediaIsStandIn: true,
          caption: 'Test de montée sur pointes\u00A0: montez le plus haut possible à chaque battement, le bout des doigts au mur pour l’équilibre',
          alt: 'Une personne qui monte sur la pointe d’un pied, le bout des doigts sur un mur pour l’équilibre',
        },
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Combien de montées sur pointes sur une jambe devriez-vous pouvoir faire\u00A0?',
      tool: 'calf-raise-calculator',
      keyFact: 'En 1995, une étude sur 203\u00A0adultes de 20 à 59\u00A0ans a proposé 25\u00A0répétitions comme repère d’une performance normale au test de montée sur pointes sur une jambe (Lunsford et Perry, 1995).',
      paragraphs: [
        'Le tableau ci-dessous donne le nombre médian de montées sur pointes sur une jambe par âge et par sexe, d’après Hebert-Losier 2017. Ce sont des estimations du modèle pour une personne d’un niveau d’activité physique modéré (niveau 4 sur une échelle de 6) et d’un indice de masse corporelle de 24,2, en moyenne sur les deux jambes.',
        'Un niveau d’activité plus élevé ajoute environ cinq à neuf répétitions à la médiane. En 1995, Lunsford et Perry ont testé 203\u00A0adultes de 20 à 59\u00A0ans et ont recommandé 25\u00A0répétitions comme critère d’une performance normale. Les données d’Hebert-Losier confirment ce chiffre comme une référence raisonnable chez l’adulte, même s’il s’agit d’une médiane de population, pas d’un seuil de réussite ou d’échec. Votre propre point de départ et le sens de l’évolution comptent plus que n’importe quel chiffre isolé.',
      ],
      table: {
        caption: 'Nombre médian de montées sur pointes sur une jambe par âge et par sexe (Hebert-Losier 2017)',
        head: ['Âge', 'Hommes', 'Femmes'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
          ['70', '15', '16'],
          ['80', '10', '14'],
        ],
      },
      sourceNote:
        'Estimations du modèle pour un IMC de 24,2 et un niveau d’activité physique de 4. Valeurs moyennes des côtés gauche et droit, arrondies à l’entier le plus proche. D’après le tableau 4 d’Hebert-Losier 2017 (n = 566).',
      cites: [CITE.lunsfordPerry, CITE.hebertLosier],
    },
    {
      h2: 'Vos jambes gauche et droite doivent-elles avoir le même score\u00A0?',
      keyFact: 'Dans une étude sur 78\u00A0personnes après une rupture du tendon d’Achille, la symétrie moyenne entre les membres à six mois était de 84\u00A0% en nombre de répétitions mais seulement de 61\u00A0% en travail total, ce qui montre que le seul nombre de répétitions peut sous-estimer un déficit (Silbernagel et coll., 2010).',
      paragraphs: [
        'À peu près le même, oui. Dans l’étude d’Hebert-Losier, la différence médiane entre droite et gauche était d’une répétition, et l’erreur de mesure typique d’environ deux répétitions. Un écart aussi petit, c’est du bruit.',
        'En rééducation du membre inférieur, un indice de symétrie des membres (LSI) de 90\u00A0% ou plus est le repère habituel d’une fonction normale. Le LSI, c’est le côté le plus faible divisé par le côté le plus fort, multiplié par 100. En dessous de 90\u00A0%, un côté est plus de 10\u00A0% plus faible. Silbernagel et coll. ont utilisé ce seuil chez 78\u00A0patients après une rupture du tendon d’Achille\u00A0: à 6\u00A0mois, les patients avaient en moyenne un LSI de 84\u00A0% en répétitions et seulement de 61\u00A0% en travail total, ce qui montre que compter les répétitions seules peut sous-estimer un déficit.',
        'Sans blessure, un écart de plus de 10\u00A0% vaut la peine d’être noté et suivi. Cela ne veut pas dire que quelque chose ne va pas. Mais si l’écart persiste sur plusieurs tests et que vous avez aussi mal du côté le plus faible, c’est une information utile pour un professionnel de santé.',
      ],
      cites: [CITE.hebertLosier, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Que veut dire un score bas, et que ne veut-il pas dire\u00A0?',
      paragraphs: [
        'Un nombre bas de montées sur pointes vous dit que le mollet de ce côté se fatigue plus tôt que la médiane de la population pour votre âge, votre sexe et votre niveau d’activité. Il ne vous dit pas pourquoi. Un déconditionnement, une blessure récente, un problème du tendon d’Achille, l’évitement de la douleur ou le manque d’habitude du test peuvent tous donner un nombre bas.',
        'Le test n’est pas un diagnostic. Un score de 15 chez un homme de 30\u00A0ans ne veut pas dire qu’il a une fasciite plantaire ou une tendinite d’Achille. Cela veut dire que l’endurance de son mollet est sous la médiane de 33 pour ce groupe. Un professionnel de santé combine ce nombre avec d’autres éléments pour décider s’il explique un symptôme. Le test est plus parlant comme tendance que comme mesure isolée\u00A0: passer de 14 à 22 en deux mois est un signal plus clair que n’importe quel chiffre comparé à un tableau.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Quel lien entre l’endurance du mollet, la douleur au talon, l’Achille et la course\u00A0?',
      paragraphs: [
        'Le mollet et le fascia plantaire sont reliés par l’os du talon. Le tendon d’Achille tire à l’arrière\u00A0; le fascia tire par en dessous. Des mollets faibles ou qui se fatiguent vite mettent plus de tension sur les deux à chaque pas.',
        'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia plantaire sa meilleure note, A, et au renforcement musculaire la note B. L’essai de Rathleff, qui a testé les montées sur pointes avec charge dans la fasciite plantaire, utilisait une montée sur pointes comme exercice principal, et les participants ont vu leur douleur baisser plus vite qu’avec les étirements seuls sur trois mois. Voir [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) pour le protocole complet.',
        'Pour la tendinite d’Achille, le heel-rise test est l’une des mesures de résultat habituelles. Les personnes qui ont une tendinopathie d’Achille du corps du tendon (une douleur au milieu du tendon, pas à l’os du talon) ont en général une endurance du mollet réduite du côté atteint. Voir [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/) pour le travail excentrique.',
        'En course, le mollet encaisse deux à trois fois le poids du corps à chaque foulée. Un mollet qui se fatigue tôt reporte la charge sur le genou, le tibia et le pied. Faire progresser son score peut faire partie d’un plan de reprise de la course. Voir [douleur au talon et course](/heel-pain-runners/) (en anglais) pour une vue d’ensemble.',
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.achillesGuideline, CITE.madeley],
    },
    {
      h2: 'Comment améliorer un score bas au test de montée sur pointes\u00A0?',
      paragraphs: [
        'Les exercices qui construisent l’endurance du mollet en rééducation sont les mêmes que ceux qui font monter votre score au test. Commencez au niveau qui correspond à votre état actuel, et passez au suivant une fois que deux séances de suite vous ont paru faciles.',
        'Si vous faites moins de 10\u00A0montées sur une jambe, commencez par les montées sur pointes assis ou debout sur deux pieds. Passez au maintien sur pointes pour construire l’endurance isométrique, puis aux montées sur une jambe au sol. Une marche augmente l’amplitude. Un sac à dos augmente la charge. Voir [montées sur pointes](/fr/exercices/montees-sur-pointes/) pour le mouvement de base, [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/) pour la version qui charge aussi le fascia plantaire, et [descentes excentriques du talon](/fr/exercices/descentes-excentriques-talon/) pour la variante centrée sur l’Achille.',
      ],
      exercises: [
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'Note B dans la recommandation pour le renforcement. Une étape vers les montées sur une jambe avec charge.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge.',
          feel: 'Les mollets qui travaillent ensemble',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez bien droit, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Maintien sur pointes',
          evidence: { level: 'moderate', why: 'Note B dans la recommandation. Le maintien isométrique augmente le temps sous tension en fin d’amplitude.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, deux pieds',
          how: 'Montez sur la pointe des deux pieds, puis restez immobile en haut. Ne redescendez pas. Tenir en haut charge le mollet sans le rebond d’une répétition complète.',
          feel: 'Les mollets qui travaillent pour rester immobiles',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez en haut',
          alt: 'Une personne qui tient la position sur la pointe des deux pieds, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },

  ],
  faq: [
    {
      q: 'Combien de montées sur pointes devrais-je pouvoir faire\u00A0?',
      cites: [CITE.hebertLosier],
      a: 'La médiane globale dans une étude sur 566\u00A0adultes en bonne santé était d’environ 23 à 24\u00A0répétitions par jambe. Les hommes avaient une médiane de 24, les femmes de 21. Le nombre baisse d’environ quatre à cinq répétitions par décennie d’âge. Un niveau d’activité plus élevé ajoute cinq à neuf répétitions. Servez-vous-en comme repères pour suivre vos progrès, pas comme un seuil de réussite ou d’échec (Hebert-Losier 2017).',
    },
    {
      q: 'Le test de montée sur pointes, c’est la même chose que le heel-rise test\u00A0?',
      a: 'Oui. «\u00A0Heel-rise test\u00A0» est le nom utilisé dans la littérature scientifique. «\u00A0Test de montée sur pointes\u00A0» est plus courant en dehors des cabinets. Le mouvement est le même\u00A0: des montées sur la pointe d’un seul pied jusqu’à la fatigue, à un rythme fixe.',
    },
    {
      q: 'Quel est un bon score au test de montée sur pointes selon l’âge\u00A0?',
      cites: [CITE.hebertLosier],
      a: 'Pour une personne modérément active\u00A0: environ 37 pour un homme de 20\u00A0ans (30 pour une femme), 28 pour un homme de 40\u00A0ans (25 pour une femme), et 19 à 60\u00A0ans quel que soit le sexe. Le niveau d’activité décale ces médianes de cinq à neuf répétitions (Hebert-Losier 2017).',
    },
    {
      q: 'À quelle fréquence refaire le test\u00A0?',
      a: 'Toutes les deux à quatre semaines suffit pour voir un vrai changement sans trop tester. Dans la recherche, le test a été refait à une semaine d’intervalle, avec une excellente fiabilité. Walkito refait le test tous les 14\u00A0jours tant que l’objectif du mollet est actif, puis tous les 28\u00A0jours une fois atteint.',
    },
    {
      q: 'Que veut dire une jambe beaucoup plus faible que l’autre\u00A0?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Un écart de plus de 10\u00A0% est souvent signalé en rééducation comme un déficit possible. Chez l’adulte en bonne santé, la différence typique est d’une à deux répétitions. Un écart qui persiste, avec une douleur du côté le plus faible, est une raison de consulter un professionnel de santé. Sans douleur, suivez-le et travaillez-le (Silbernagel 2010).',
    },
    {
      q: 'Faut-il un métronome pour le test\u00A0?',
      a: 'Le protocole de recherche utilise un métronome à 60\u00A0battements par minute. Les applications de métronome gratuites marchent bien. Sans métronome, comptez «\u00A0un et\u00A0» en montant et en descendant. Votre nombre sera moins comparable aux normes publiées, mais faire le test toujours de la même façon compte plus que reproduire exactement le cadre de la recherche.',
    },
    {
      q: 'Le test de montée sur pointes peut-il diagnostiquer une fasciite plantaire ou une tendinite d’Achille\u00A0?',
      a: 'Non. Un score bas vous dit que le mollet se fatigue tôt, pas pourquoi. Une fasciite plantaire, une tendinite d’Achille, un déconditionnement ou une blessure récente peuvent tous donner un nombre bas. Les professionnels de santé combinent le résultat avec un examen clinique et l’histoire du problème. Le test mesure l’endurance du mollet, pas un problème précis.',
    },
    {
      q: 'Quels sont les signes de mollets faibles\u00A0?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Des mollets faibles se voient souvent par une fatigue rapide dans les escaliers ou les montées, une poussée plus faible en marchant ou en courant, ou des oscillations en équilibre sur une jambe. Le signe objectif le plus clair est le test de montée sur pointes sur une jambe\u00A0: un écart net entre la jambe gauche et la droite est plus fiable que l’aspect ou la sensation du mollet.',
    },
    {
      q: 'Où doit-on sentir une montée sur pointes\u00A0?',
      a: 'Vous devez sentir le travail dans le mollet, à la fois dans le gastrocnémien, plus volumineux et plus haut, et dans le soléaire, plus bas près de l’Achille, pas à l’os du talon, dans la voûte ou au genou. Si vous sentez une douleur vive au talon ou à l’Achille au lieu d’une fatigue du mollet, votre technique ou votre charge doit être ajustée avant de continuer à compter les répétitions.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'le mollet ou l’Achille est gonflé, chaud ou sensible au toucher, ce qui peut évoquer une déchirure aiguë ou un problème du tendon',
      'vous avez senti un claquement soudain dans le mollet pendant une activité',
      'vous ne pouvez pas poser le pied ou vous boitez',
      'la douleur est vive et localisée plutôt qu’une douleur diffuse',
      'il y a un engourdissement, des fourmillements ou des brûlures dans le pied ou le bas de la jambe',
      'le test reproduit exactement la douleur que vous cherchez à évaluer, avec une intensité plus que légère',
      'vous avez une rupture connue du tendon d’Achille ou une chirurgie récente',
      'un mollet est visiblement plus petit que l’autre et vous n’avez pas consulté à ce sujet',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito fait passer le test de montée sur pointes sur une jambe tous les 14\u00A0jours et suit les deux jambes. L’objectif du mollet est de 25\u00A0montées sur pointes sur une jambe. L’objectif de symétrie est un écart gauche-droite de moins de 10\u00A0%. L’application calcule l’écart comme la différence entre le côté le plus fort et le côté le plus faible, divisée par le côté le plus fort. Une fois les deux objectifs atteints, le test passe à tous les 28\u00A0jours et le plan passe à l’objectif actif suivant.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Le travail du mollet commence par les montées sur pointes assis, puis passe à votre rythme par les montées sur deux pieds, le maintien sur pointes, la serviette, les descentes excentriques et les sauts pogo. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  crumb: 'Test de montée sur pointes',
  campaign: 'calf-raise-test-fr',
};
