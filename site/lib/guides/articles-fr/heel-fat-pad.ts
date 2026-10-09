import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Syndrome du coussinet graisseux du talon (FR) ─────────────────────
 *
 * Translated from `articles/heel-fat-pad.ts`, written around the French
 * queries «syndrome du coussinet graisseux talon», «atrophie coussinet
 * plantaire talon», «douleur centre du talon». French (France) with «vous».
 * Figures, doses, grades and qualifiers are identical to the English page.
 * No new citations.
 */

export const HEEL_FAT_PAD_FR: Guide = {
  lang: 'fr',
  page: 'heelFatPad',
  mainSource: CITE.fatPadReview,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Coussinet graisseux du talon\u00A0: causes et ce qui aide',
  description:
    'Syndrome du coussinet graisseux du talon\u00A0: douleur profonde au centre du talon quand l’amorti s’amincit. Différence avec la fasciite, ce qui aide.',
  h1: 'Syndrome du coussinet graisseux du talon\u00A0: ce que c’est, en quoi il diffère de la fasciite plantaire et ce que disent les preuves',
  lede:
    'Le syndrome du coussinet graisseux du talon, c’est l’amincissement ou l’abîmement du coussin graisseux situé sous l’os du talon. Il donne une douleur profonde, comme un bleu, au centre du talon, surtout sur sol dur ou pieds nus. Ce serait peut-être la deuxième cause de douleur sous le talon après la fasciite plantaire, et pourtant la recherche à son sujet est mince. Une revue exploratoire de 2022 n’a trouvé que sept études originales.',
  intro: [
    'Cette page présente ce que l’on sait du syndrome du coussinet graisseux du talon, comment le distinguer de la fasciite plantaire, et quelles mesures conservatrices ont au moins un peu de soutien. Si votre douleur ressemble plutôt à une traction vive à l’intérieur du talon aux premiers pas du matin, [douleur au talon au réveil](/fr/douleur-talon-au-reveil/) est sans doute la meilleure page. Si elle est à l’arrière du talon, près du tendon d’Achille, voir [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/) ou [maladie de Haglund](/fr/maladie-de-haglund/).',
  ],
  takeaways: [
    'Dans une étude sur 250\u00A0personnes souffrant de douleur sous le talon, l’atrophie du coussinet graisseux représentait 14,8\u00A0% des cas, soit la deuxième cause après la fasciite plantaire à 53,2\u00A0% (Yi et coll., 2011).',
    'Une revue exploratoire de 2022 n’a trouvé que 7\u00A0études originales sur le syndrome du coussinet graisseux du talon, et aucun essai contrôlé randomisé testant les talonnettes ou le strapping pour ce problème précis (Chang et coll., 2022).',
    'La différence clinique clé\u00A0: la douleur du coussinet est une douleur sourde au centre du talon, pire sur sol dur et pieds nus\u00A0; la douleur de la fasciite plantaire est une traction vive à l’intérieur du talon, pire au premier pas, qui se calme à l’échauffement.',
    'Les talonnettes viscoélastiques, les chaussures amortissantes et le strapping de type low-dye sont largement conseillés, mais n’ont pas de preuves issues d’essais randomisés pour le syndrome du coussinet graisseux en particulier (Chang et coll., 2022).',
    'L’atrophie du coussinet graisseux n’est pas réversible par l’exercice. Les exercices de force du mollet et du pied peuvent aider le pied à gérer la charge, mais ils ne reconstruisent pas le coussinet lui-même.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce que le coussinet graisseux du talon et que se passe-t-il\u00A0?',
      paragraphs: [
        'Le coussinet graisseux du talon est un coussin spécialisé de graisse et de tissu conjonctif situé sous le calcanéum, l’os du talon. Il est organisé en logettes séparées par des cloisons fibreuses (septa) qui absorbent les chocs quand vous marchez ou courez. Un coussinet de talon en bonne santé mesure environ 1 à 2\u00A0centimètres d’épaisseur.',
        'Dans le syndrome du coussinet graisseux du talon, ce coussin s’amincit, se rigidifie ou se dégrade. Les cloisons perdent leur élasticité, la graisse se tasse, et l’os du talon se retrouve plus près du sol. Résultat\u00A0: une douleur quand vous marchez sur un sol dur ou pieds nus, comme si vous marchiez sur un caillou.',
        'La revue exploratoire de 2022 de Chang et coll. a trouvé que la recherche parle souvent d’«\u00A0atrophie du coussinet graisseux\u00A0», mais le problème peut aussi comprendre une inflammation, une fibrose ou des défauts des cloisons sans amincissement net. À l’échographie, un coussinet de moins de 1\u00A0centimètre est en général considéré comme atrophié.',
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Le syndrome du coussinet graisseux du talon est-il fréquent\u00A0?',
      keyFact: 'Une étude transversale sur 250\u00A0personnes souffrant du talon a trouvé une fasciite plantaire dans 53,2\u00A0% des cas et une atrophie du coussinet graisseux seule dans environ 14,8\u00A0%, les deux étant présentes dans 9,2\u00A0% (Yi et coll., 2011).',
      paragraphs: [
        'Dans une étude transversale sur 250\u00A0personnes souffrant de douleur sous le talon, Yi et coll. ont trouvé une atrophie du coussinet graisseux dans 14,8\u00A0% des cas. La fasciite plantaire était la cause la plus fréquente, à 53,2\u00A0%, et 9,2\u00A0% avaient les deux problèmes à la fois. L’étude utilisait des mesures échographiques et des critères cliniques pour les distinguer.',
        'La revue exploratoire de 2022 a noté que le chiffre de 14,8\u00A0% vient de deux études et que la fréquence réelle est incertaine. Le syndrome du coussinet graisseux est souvent pris à tort pour une fasciite plantaire, car les deux donnent une douleur sous le talon et peuvent coexister. Quand les traitements habituels de la fasciite plantaire n’aident pas, l’atrophie du coussinet graisseux fait partie des pistes à reconsidérer.',
      ],
      cites: [CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'En quoi la douleur du coussinet diffère-t-elle de la fasciite plantaire\u00A0?',
      paragraphs: [
        'Les deux problèmes se recoupent mais ont des schémas distincts. La douleur du coussinet graisseux est une douleur sourde et profonde, centrée sous l’os du talon. Elle est pire sur sol dur, pieds nus et après une longue station debout. Elle n’a en général pas le caractère vif du «\u00A0premier pas\u00A0» de la fasciite plantaire et peut ne pas se calmer avec le mouvement.',
        'La douleur de la fasciite plantaire est la plus vive à l’intérieur du talon, culmine au premier pas après le repos et s’améliore une fois que vous marchez. Si, en appuyant au centre du talon, vous avez l’impression que l’os est juste sous votre doigt avec très peu d’amorti, une atrophie du coussinet graisseux est plus probable.',
        'Vous pouvez avoir les deux en même temps. L’étude de 2011 a trouvé les deux problèmes chez 9,2\u00A0% des participants. Une fasciite plantaire peut aussi entraîner des problèmes de coussinet\u00A0: quand le fascia est lésé, la répartition du poids change, et cette pression supplémentaire sur le coussinet du talon accélère son usure.',
      ],
      table: {
        caption: 'Syndrome du coussinet graisseux du talon et fasciite plantaire comparés',
        head: ['Caractéristique', 'Syndrome du coussinet graisseux', 'Fasciite plantaire'],
        rows: [
          ['Endroit de la douleur', 'Centre du talon, juste sous l’os', 'Intérieur (médial) du talon, près de la voûte'],
          ['Pire quand', 'Sol dur, pieds nus, longue station debout', 'Premiers pas après le repos, puis se calme'],
          ['Nature de la douleur', 'Douleur profonde, comme un bleu', 'Vive, en traction'],
          ['Se calme à l’échauffement\u00A0?', 'Souvent non', 'S’améliore en général après quelques minutes de marche'],
          ['À la palpation', 'Coussinet mince, calcanéum facile à sentir', 'Sensible au tubercule médial du calcanéum'],
        ],
      },
      cites: [CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'Pourquoi le coussinet graisseux du talon s’amincit-il\u00A0?',
      paragraphs: [
        'L’âge est le facteur principal. À partir de 40\u00A0ans environ, le coussinet perd naturellement de l’eau, du collagène et de l’élasticité. Des années d’activité à fort impact, de longues stations debout sur sol dur et la marche pieds nus accélèrent le processus.',
        'Les autres facteurs de risque comprennent un poids plus élevé (plus de force à chaque pas), des infiltrations de corticoïdes répétées dans le talon (la cortisone peut dégrader le tissu graisseux), le diabète, le pied creux (qui concentre la charge sur le talon et l’avant-pied) et des antécédents familiaux de problèmes du tissu conjonctif.',
        'Contrairement à un muscle ou à un tendon, le coussinet graisseux ne se reconstruit pas avec l’exercice ou le repos. Une fois aminci, l’objectif pratique est de protéger ce qui reste et de réduire les chocs qui arrivent jusqu’à l’os du talon.',
      ],
      cites: [CITE.fatPadReview, CITE.yiFatPad],
    },
    {
      h2: 'Qu’est-ce qui aide la douleur du coussinet graisseux du talon\u00A0?',
      keyFact: 'Un seul cas clinique a rapporté un soulagement de la douleur avec des talonnettes en gel de silicone à un et trois mois, mais aucun essai randomisé n’a testé les talonnettes ou le strapping pour ce problème (Chang et coll., 2022).',
      paragraphs: [
        'Les premières mesures les plus souvent conseillées pour le syndrome du coussinet graisseux du talon sont externes\u00A0: talonnettes viscoélastiques, semelles amortissantes et chaussures à semelle épaisse qui absorbe les chocs. Elles visent à remplacer l’amorti que le coussinet n’assure plus.',
        'La revue exploratoire de 2022 a relevé un manque gênant\u00A0: aucun essai contrôlé randomisé n’a testé les talonnettes ou le strapping spécifiquement pour le syndrome du coussinet graisseux du talon. Un seul cas clinique a décrit un soulagement de la douleur avec des talonnettes en gel de silicone après un et trois mois. Quelques petits essais du strapping low-dye pour la douleur sous le talon en général rapportent une baisse modeste des scores de douleur par rapport à un faux traitement ou à l’absence de traitement, mais aucun ne distingue le syndrome du coussinet graisseux des autres causes de douleur au talon, donc l’ampleur d’un éventuel bénéfice ici n’est pas connue.',
        'Malgré des preuves faibles, la logique est simple\u00A0: si le coussin a disparu, en ajouter un de l’extérieur est une démarche raisonnable. Évitez de marcher pieds nus sur un sol dur. Choisissez des chaussures au talon bien amorti et évitez les chaussures plates à semelle fine. Ce sont des recommandations de consensus, pas des mesures testées par des essais, et cette page le dit clairement.',
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Les exercices aident-ils le syndrome du coussinet graisseux du talon\u00A0?',
      paragraphs: [
        'Les exercices ne peuvent pas reconstruire un coussinet graisseux aminci. C’est un changement de structure, pas une faiblesse musculaire. Mais l’exercice peut quand même jouer un rôle pour aider le pied à faire avec le problème.',
        'La force du mollet compte, car un mollet plus fort absorbe une plus grande part de la force de réception avant qu’elle n’atteigne le talon. C’est la même logique de charge que celle des programmes de montées sur pointes pour la fasciite plantaire, mais pour le syndrome du coussinet graisseux, le but est de mieux répartir la charge, pas de réparer un tissu. Le travail des muscles intrinsèques du pied (exercice du pied court, écarter les orteils) peut aider le pied à gérer le contact avec le sol.',
        'Les preuves pour ces exercices dans le syndrome du coussinet graisseux en particulier sont absentes. Aucun essai ne les a testés pour ce problème. Ils sont empruntés à la littérature plus large sur la douleur au talon et la force du pied. Les exercices de Walkito sont conçus autour de la fasciite plantaire et de la force du pied. Ils sont un complément raisonnable si votre professionnel de santé a confirmé une atrophie du coussinet graisseux, mais ils n’ont pas été testés spécifiquement pour elle, et il vaut mieux le savoir.',
      ],
      exercises: [
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'early', why: 'Aucun essai n’a testé les montées sur pointes pour le syndrome du coussinet graisseux. Empruntées à la littérature sur la mise en charge dans la fasciite plantaire pour améliorer la capacité du mollet et réduire les chocs au talon.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement en trois secondes. Les deux pieds se partagent la charge. Si cela fait mal au talon, essayez d’abord avec des chaussures amortissantes ou sur une surface souple.',
          often: 'La plupart des jours de la semaine',
          feel: 'Du travail dans les mollets, pas de douleur vive au talon',
          stop: 'Une douleur au talon au-dessus de 5/10 pendant l’exercice, ou pire le lendemain matin',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez lentement, redescendez en trois secondes',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Pied court, assis',
          evidence: { level: 'early', why: 'Testé pour le soutien de la voûte dans les pieds plats, pas pour le syndrome du coussinet graisseux. Une façon raisonnable de développer le contrôle des muscles intrinsèques du pied.' },
          dose: '3\u00A0séries de 10, chaque pied',
          how: 'Asseyez-vous, pieds à plat au sol. Sans recroqueviller les orteils, essayez de rapprocher l’avant du pied du talon en soulevant la voûte. Les orteils restent à plat au sol. Tenez 5\u00A0secondes.',
          often: 'Chaque jour, dans le travail des muscles du pied',
          feel: 'Une contraction sous la voûte, pas au talon',
          stop: 'Une douleur au talon pendant le maintien',
          media: 'short_foot_seated',
          caption: 'Pied court\u00A0: rapprochez l’avant du pied du talon sans recroqueviller les orteils',
          alt: 'Une personne assise, les orteils à plat et la voûte visiblement soulevée',
        },
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Et les injections ou la chirurgie\u00A0?',
      keyFact: 'Une revue a relevé qu’une étude de suivi à long terme, de neuf ans en moyenne, associait la greffe de graisse au talon à une amélioration fonctionnelle durable, même si l’étude était petite (Chang et coll., 2022).',
      paragraphs: [
        'Quand l’amorti externe ne suffit pas, certains professionnels de santé évoquent des produits de comblement injectables ou une greffe de graisse autologue, où de la graisse est prélevée ailleurs sur votre corps et injectée sous l’os du talon. Une étude de suivi à long terme (9\u00A0ans en moyenne) a trouvé que la greffe de graisse au talon était associée à une amélioration fonctionnelle durable, même si l’étude était petite.',
        'Ce sont des interventions spécialisées, pas des options de première intention. Elles ont leurs propres risques et ne sont pas largement disponibles. Cette page ne les conseille ni ne les déconseille. Si l’amorti externe, le changement de chaussures et l’adaptation de l’activité n’ont pas aidé après plusieurs mois, un spécialiste du pied et de la cheville peut discuter de l’intérêt d’une injection ou d’une greffe.',
        'Les infiltrations de corticoïdes sont parfois utilisées pour la douleur au talon, mais dans le syndrome du coussinet graisseux elles peuvent être contre-productives\u00A0: la cortisone peut dégrader encore le tissu graisseux et aggraver l’atrophie.',
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Comment diagnostique-t-on le syndrome du coussinet graisseux du talon\u00A0?',
      paragraphs: [
        'Un professionnel de santé peut souvent suspecter une atrophie du coussinet graisseux d’après l’histoire de la douleur et l’examen clinique. Le schéma de la douleur (profonde, au centre du talon, pire pieds nus sur sol dur, ne se calme pas à l’échauffement) associé à un calcanéum mince et facile à palper oriente vers le diagnostic.',
        'L’échographie peut mesurer l’épaisseur du coussinet graisseux. Un coussinet de moins de 1\u00A0centimètre est en général considéré comme atrophié. L’IRM peut montrer des changements dans la structure interne du coussinet, comme des lésions des cloisons, une fibrose ou du liquide. La revue exploratoire de 2022 a noté que les critères d’imagerie ne sont pas standardisés et que le diagnostic est souvent clinique.',
        'Le syndrome du coussinet graisseux est en partie un diagnostic d’exclusion. Si une fasciite plantaire a été prise en charge correctement, que la douleur persiste et que les signes cliniques correspondent, le diagnostic mérite d’être reconsidéré. Avoir les deux problèmes à la fois est aussi possible.',
      ],
      cites: [CITE.fatPadReview, CITE.yiFatPad],
    },
  ],
  faq: [
    {
      q: 'Qu’est-ce qu’on ressent avec un syndrome du coussinet graisseux du talon\u00A0?',
      cites: [CITE.fatPadReview],
      a: 'Une douleur sourde et profonde, comme un bleu, au centre du talon, comme si vous marchiez directement sur l’os. Elle est pire sur sol dur ou pieds nus et ne s’améliore en général pas après quelques minutes de marche, contrairement à la fasciite plantaire. En appuyant au centre du talon, vous pouvez avoir l’impression que l’os est juste sous votre doigt.',
    },
    {
      q: 'Le syndrome du coussinet graisseux, c’est la même chose qu’une fasciite plantaire\u00A0?',
      cites: [CITE.yiFatPad, CITE.fatPadReview],
      a: 'Non. La fasciite plantaire est une inflammation ou une dégénérescence du fascia plantaire, qui donne une douleur vive à l’intérieur du talon, pire au premier pas. Le syndrome du coussinet graisseux est un amincissement du coussin sous l’os du talon, qui donne une douleur sourde au centre sur sol dur. Ils peuvent coexister, chez 9,2\u00A0% de 250\u00A0patients souffrant du talon dans une étude, mais la prise en charge diffère.',
    },
    {
      q: 'Le coussinet graisseux du talon peut-il repousser\u00A0?',
      cites: [CITE.fatPadReview],
      a: 'Non. Une fois aminci, le coussinet graisseux du talon ne se régénère pas avec l’exercice ou le repos. La stratégie est externe\u00A0: talonnettes amortissantes, chaussures à semelle épaisse, et éviter les sols durs pieds nus. Dans les cas sévères, la greffe de graisse est une option dont un spécialiste peut discuter.',
    },
    {
      q: 'Quelles chaussures pour un syndrome du coussinet graisseux du talon\u00A0?',
      cites: [CITE.fatPadReview],
      a: 'Des chaussures à semelle épaisse et amortissante, avec un talon rembourré. Évitez les chaussures plates à semelle fine et les pieds nus sur un sol dur. Des talonnettes viscoélastiques placées dans la chaussure ajoutent une couche d’amorti. Aucun essai randomisé n’a testé de types de chaussures précis pour ce syndrome, mais le principe de remplacer l’amorti perdu est largement admis.',
    },
    {
      q: 'Les infiltrations de cortisone aident-elles le coussinet graisseux du talon\u00A0?',
      cites: [CITE.fatPadReview],
      a: 'Les infiltrations de cortisone ne sont en général pas conseillées pour le syndrome du coussinet graisseux du talon. Les corticoïdes peuvent dégrader le tissu graisseux et aggraver l’atrophie qui cause le problème. Si une infiltration est envisagée, c’est un point à soulever avec votre professionnel de santé.',
    },
    {
      q: 'Comment diagnostiquer un syndrome du coussinet graisseux du talon\u00A0?',
      cites: [CITE.fatPadReview, CITE.yiFatPad],
      a: 'Un professionnel de santé peut le suspecter d’après le schéma de la douleur et l’examen clinique. L’échographie mesure l’épaisseur du coussinet, et un coussinet de moins de 1\u00A0centimètre est en général considéré comme atrophié. L’IRM peut montrer des lésions internes. Les critères d’imagerie ne sont pas standardisés, et c’est en partie un diagnostic d’exclusion quand la prise en charge de la fasciite plantaire n’a pas aidé.',
    },
    {
      q: 'Combien de temps pour que le coussinet graisseux du talon aille mieux\u00A0?',
      cites: [CITE.fatPadReview],
      a: 'Il n’y a pas de délai établi, car l’atrophie du coussinet graisseux est un amincissement de structure que l’exercice et le repos n’inversent pas. Une revue exploratoire de 2022 n’a trouvé aucun essai mesurant le temps de récupération pour ce problème. Talonnettes amortissantes, chaussures à semelle plus épaisse et éviter de marcher pieds nus sur sol dur peuvent soulager la douleur, mais l’amincissement reste en général.',
    },
    {
      q: 'Comment faire un strapping pour le coussinet graisseux du talon\u00A0?',
      cites: [CITE.fatPadReview],
      a: 'Le strapping low-dye remonte la voûte et détourne la pression du talon, avec des bandes posées en travers de la plante et sur les côtés du pied\u00A0; en général, un professionnel de santé ou un kinésithérapeute pose le premier pour montrer la technique. La revue exploratoire de 2022 n’a trouvé aucun essai testant le strapping spécifiquement pour ce syndrome\u00A0: c’est une technique empruntée, pas prouvée.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur au talon s’aggrave malgré l’amorti et le changement de chaussures',
      'la douleur est présente au repos ou vous réveille la nuit, ce qui peut évoquer une fracture de fatigue, une compression nerveuse ou une autre cause qu’une simple atrophie du coussinet',
      'vous ressentez des brûlures, des fourmillements ou un engourdissement au talon ou sous la plante',
      'vous avez eu des infiltrations de corticoïdes répétées dans le talon et la douleur s’aggrave',
      'les deux talons sont touchés et vous avez une raideur du matin qui dure plus de 30\u00A0minutes',
      'vous ne pouvez pas poser le pied ou vous boitez',
      'le talon est rouge, chaud ou gonflé',
    ],
  },
  program: {
    h2: 'La place d’un plan d’exercices',
    text: 'Walkito construit des séances quotidiennes autour des montées sur pointes, du travail des muscles du pied et des étirements. Ces exercices sont conçus pour la fasciite plantaire et la force du pied. Ils peuvent aider un pied avec une atrophie du coussinet graisseux à mieux gérer la charge, mais ils n’ont pas été testés pour ce problème précis et ne reconstruiront pas un coussinet aminci. Si un professionnel de santé a confirmé un syndrome du coussinet graisseux, un plan d’exercices comme celui de Walkito est un complément raisonnable à l’amorti et aux chaussures, pas un remplacement.',
    more: [
      'Les séances durent 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un test vérifie l’endurance du mollet et l’équilibre. Walkito ne pose pas de diagnostic. Si vous ne savez pas si votre douleur au talon vient d’une atrophie du coussinet graisseux ou d’une fasciite plantaire, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Coussinet graisseux du talon',
  campaign: 'guide-heel-fat-pad-fr',
};
