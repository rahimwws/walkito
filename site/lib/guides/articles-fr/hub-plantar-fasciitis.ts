import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub : Fasciite plantaire (FR) ─────────────────────────────────────
 *
 * Translated from `articles/hub-plantar-fasciitis.ts`, written around the
 * French queries «fasciite plantaire», «fasciite plantaire symptômes»,
 * «fasciite plantaire causes». French (France) with «vous». Figures, grades
 * and qualifiers are identical to the English page. No new citations.
 */

export const HUB_PLANTAR_FASCIITIS_FR: Guide = {
  lang: 'fr',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fasciite plantaire\u00A0: symptômes, causes et ce qui aide',
  description:
    'Fasciite plantaire\u00A0: symptômes, causes, ce que recommande la recommandation clinique de 2023, temps de récupération et exercices qui aident.',
  h1: 'Fasciite plantaire\u00A0: symptômes, causes et ce qui aide selon les données',
  lede:
    'La fasciite plantaire est une douleur sous le talon due à une surcharge du fascia plantaire, l’épaisse bande de tissu qui va de l’os du talon aux orteils. C’est la cause la plus fréquente de douleur sous le talon. La recommandation clinique de 2023 sur la douleur au talon donne aux étirements sa meilleure note et au renforcement musculaire la deuxième, et environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux.',
  takeaways: [
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet sa meilleure note, A, et au renforcement musculaire un B (Koc et coll., 2023).',
    'Environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux comme les étirements, le renforcement et des chaussures qui soutiennent le pied, souvent en quelques mois (Latt et coll., 2020).',
    'Une flexion dorsale de cheville réduite, c’est-à-dire la capacité du pied à remonter vers le tibia, était le facteur de risque indépendant le plus fort dans une étude cas-témoins de 50\u00A0cas et 100\u00A0témoins, avec un odds ratio de 23,3 (Riddle et coll., 2003).',
    'Une douleur au talon aux premiers pas du matin, qui se calme après quelques minutes de marche, est le schéma de symptômes le plus reconnaissable (Koc et coll., 2023).',
    'Dans un suivi à long terme de 174\u00A0patients, environ la moitié n’avait plus de symptômes à cinq ans. Parmi ceux qui en avaient encore, la plupart n’avaient qu’une douleur légère (Hansen et coll., 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce que la fasciite plantaire\u00A0?',
      figure: { id: 'plantar-fascia', caption: 'Le fascia plantaire va de l’os du talon jusqu’aux orteils. La douleur de la fasciite plantaire commence souvent là où il s’attache au talon.', alt: 'Plante d’un pied montrant le fascia plantaire en bandes blanches qui s’étalent de l’os du talon jusqu’à la base des orteils, avec une tache rouge sur le talon là où la douleur commence souvent.' },
      paragraphs: [
        'La fasciite plantaire est une surcharge du fascia plantaire. Le fascia plantaire est une bande résistante de tissu conjonctif qui longe la plante du pied, de l’os du talon (le calcanéum) à la base des orteils. Il soutient la voûte et amortit les chocs à chaque pas.',
        'Quand le fascia reçoit plus de charge qu’il ne peut en récupérer, le tissu s’irrite près de son attache au talon. Le suffixe «\u00A0-ite\u00A0» évoque une inflammation, mais les connaissances actuelles penchent plutôt vers un processus dégénératif du tissu qu’une inflammation durable. Certains professionnels de santé parlent plutôt d’«\u00A0aponévrosite\u00A0» ou de «\u00A0fasciopathie plantaire\u00A0». Le nom ne change ni les symptômes ni l’approche recommandée.',
        'La recommandation clinique de 2023 du Journal of Orthopaedic & Sports Physical Therapy en fait la cause la plus souvent reconnue de douleur sous le talon.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Quels sont les symptômes de la fasciite plantaire\u00A0?',
      paragraphs: [
        'Le symptôme typique est une douleur sous le talon aux premiers pas du matin. La recommandation la décrit comme une douleur «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0». Elle se calme en général après quelques minutes de marche, puis revient quand vous restez assis un moment et vous relevez.',
        'La douleur se situe en général à l’avant et à l’intérieur du talon, là où le fascia s’attache à l’os. Elle peut s’étendre le long de la voûte. Elle est souvent pire après le repos que pendant l’activité, ce qui est l’inverse de ce que la plupart des gens imaginent.',
        'La douleur se voit le plus clairement le lendemain matin. Si le lendemain matin est pire, la veille en a trop demandé au pied. C’est pourquoi suivre la douleur du matin est la façon la plus utile de juger vos progrès. [La douleur au talon au réveil](/fr/douleur-talon-au-reveil/) détaille ce schéma du matin.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quelles sont les causes de la fasciite plantaire, et qui est touché\u00A0?',
      keyFact: 'Dans une étude cas-témoins sur 50\u00A0personnes atteintes de fasciite plantaire et 100 sans, une flexion dorsale de cheville réduite avait un odds ratio de 23,3 pour la fasciite plantaire, le facteur de risque le plus fort mesuré (Riddle et coll., 2003).',
      paragraphs: [
        'La fasciite plantaire apparaît quand le fascia reçoit plus de charge qu’il ne peut en supporter et en récupérer. La charge peut être trop forte d’un coup (une hausse soudaine du kilométrage en course à pied) ou constante dans le temps (rester debout sur un sol dur toute la journée).',
        'Une étude cas-témoins appariée sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins a montré qu’une flexion dorsale de cheville réduite était le facteur de risque indépendant le plus fort, avec un odds ratio de 23,3. Dans une autre série de 254\u00A0personnes atteintes de fasciite plantaire, 52 à 60\u00A0% avaient une rétraction isolée du gastrocnémien, le gros muscle superficiel du mollet. Rester longtemps debout au travail avait un odds ratio de 3,6. Un indice de masse corporelle plus élevé était aussi associé à un risque accru.',
        'La recommandation cite d’autres facteurs de risque\u00A0: un âge entre 40 et 60\u00A0ans, la course ou les sauts, et les métiers où l’on reste longtemps debout. Les pieds plats ou les pieds creux peuvent modifier la façon dont la charge traverse le fascia, mais aucun des deux ne garantit la fasciite.',
        'La fasciite plantaire vient en général d’une combinaison\u00A0: un mollet raide, une charge à laquelle le pied n’était pas prêt, et pas assez de temps de récupération.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'Comment diagnostique-t-on une fasciite plantaire\u00A0?',
      paragraphs: [
        'La fasciite plantaire est en général diagnostiquée par un professionnel de santé à partir de vos antécédents, de l’interrogatoire et d’un examen clinique. Les signes clés sont une sensibilité à l’avant et à l’intérieur du talon, une douleur aux premiers pas du matin, et une douleur qui se calme avec l’activité et revient après le repos.',
        'L’imagerie n’est pas nécessaire dans un cas typique. La recommandation conseille d’y penser si le tableau ne correspond pas, si les symptômes ne s’améliorent pas après plusieurs semaines de soins conservateurs, ou s’il faut écarter un autre diagnostic (une fracture de fatigue ou une compression nerveuse, par exemple). L’échographie et l’IRM peuvent montrer un épaississement du fascia, mais un fascia épaissi à l’imagerie sans le schéma de symptômes correspondant n’est pas une fasciite plantaire.',
        'Walkito ne pose pas de diagnostic. Si vous ne savez pas si votre douleur au talon est une fasciite plantaire, un professionnel de santé est le bon point de départ.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Qu’est-ce qui aide contre la fasciite plantaire\u00A0?',
      keyFact: 'Dans un essai sur 48\u00A0personnes, des montées sur pointes avec charge et une serviette ont réduit la douleur plus vite que les étirements seuls à trois mois, mais à douze mois les deux groupes étaient à égalité (Rathleff et coll., 2015).',
      paragraphs: [
        'La recommandation clinique de 2023 note chaque approche selon la force des preuves qui la soutiennent. Les recommandations les plus fortes concernent les étirements, le strapping, la thérapie manuelle par un professionnel de santé, et les attelles de nuit pour une douleur du matin qui persiste. Le renforcement musculaire vient ensuite. Le tableau ci-dessous liste les principales options avec leur note.',
        'Aucune option ne marche pour tout le monde. La plupart des gens commencent par les étirements et des chaussures qui soutiennent le pied, ajoutent le renforcement une fois la douleur initiale calmée, et voient un professionnel de santé pour les autres options si les progrès stagnent. Dans un essai sur 48\u00A0personnes, des montées sur pointes avec charge et une serviette sous les orteils ont réduit la douleur plus vite que les étirements seuls à trois mois, mais à douze mois les deux groupes étaient à égalité. La recommandation déconseille les semelles orthopédiques seules comme approche isolée à court terme, et l’ajout d’ultrasons thérapeutiques aux étirements.',
      ],
      table: {
        caption: 'Notes de la recommandation de 2023 pour la douleur sous le talon',
        head: ['Approche', 'Note', 'Remarques'],
        rows: [
          ['Étirements du fascia plantaire et du mollet', '**A**', 'Meilleure note. Le cœur des soins conservateurs.'],
          ['Thérapie manuelle (travail articulaire et des tissus mous)', '**A**', 'Meilleure note. Faite par un professionnel de santé pour les restrictions articulaires et de souplesse.'],
          ['Strapping du pied (rigide ou élastique)', '**A**', 'Meilleure note pour la douleur et la fonction à court terme, en plus d’autres soins.'],
          ['Attelles de nuit pendant 1 à 3\u00A0mois', '**A**', 'Meilleure note pour une douleur du matin qui persiste. Voir [la douleur au talon au réveil](/fr/douleur-talon-au-reveil/).'],
          ['Renforcement musculaire (montées sur pointes avec charge)', '**B**', 'A accéléré l’amélioration dans un essai sur 48\u00A0personnes. Voir [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).'],
          ['Laser de basse intensité', '**B**', 'Fait en cabinet.'],
          ['Dry needling', '**B**', 'Fait en cabinet.'],
          ['Semelles orthopédiques associées à d’autres soins', '**C**', 'Preuves faibles. Peuvent aider dans le cadre d’un programme plus large.'],
          ['Semelles orthopédiques seules, à court terme', '**B contre**', 'La recommandation **déconseille** cette option utilisée seule.'],
          ['Ultrasons thérapeutiques ajoutés aux étirements', '**A contre**', 'Les preuves ne soutiennent pas cet ajout.'],
        ],
      },
      sourceNote:
        'Notes tirées de Koc et coll., 2023, recommandation de pratique clinique sur la douleur au talon du Journal of Orthopaedic & Sports Physical Therapy.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Combien de temps dure une fasciite plantaire\u00A0?',
      keyFact: 'Dans une cohorte de 174\u00A0personnes, environ la moitié n’avait plus de symptômes à cinq ans, et 46\u00A0% avaient encore un peu mal à dix ans, la plupart seulement légèrement (Hansen et coll., 2018).',
      paragraphs: [
        'Une revue de 2020 indique qu’environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux, souvent en quelques mois. Un suivi plus long de 174\u00A0patients donne une image plus détaillée\u00A0: environ la moitié n’avait plus de symptômes à cinq ans, et 46\u00A0% avaient encore un peu mal après dix ans en moyenne, même si la plupart d’entre eux ne signalaient que des symptômes légers.',
        'La récupération dépend de l’ancienneté de la douleur, de ce que vous faites, et de facteurs que vous ne contrôlez pas. La cohorte de Hansen 2018 a montré qu’être une femme et avoir mal aux deux talons prédisaient nettement une récupération plus lente. L’IMC, l’âge, l’épaisseur du fascia et la présence d’une épine calcanéenne, non.',
        'La question utile n’est pas «\u00A0dans combien de semaines ce sera fini\u00A0?» mais «\u00A0ma douleur du matin est-elle plus basse ce mois-ci que le mois dernier\u00A0?». Cette tendance est le vrai repère. [Combien de temps dure une fasciite plantaire\u00A0?](/fr/combien-de-temps-dure-fasciite-plantaire/) présente toutes les données sur les délais.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Quels exercices et étirements aident contre la fasciite plantaire\u00A0?',
      paragraphs: [
        'Les exercices que soutient la recommandation se répartissent en deux groupes\u00A0: les étirements (note A) et le renforcement musculaire (note B). Les étirements visent le fascia plantaire et le mollet. Le renforcement donne au mollet la capacité d’encaisser la charge du quotidien sans surcharger le fascia.',
        '[Exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) donne la liste complète avec les doses de départ, ce que chaque exercice doit faire sentir et quand arrêter. [Montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) approfondit l’exercice au cœur du principal essai sur le renforcement. Chaque mouvement a sa propre page\u00A0:',
      ],
      bullets: [
        'L’[étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/) tire les orteils vers vous pour charger doucement le fascia avant de vous lever.',
        'L’[étirement du mollet](/fr/exercices/etirement-mollet/) et l’[étirement du soléaire](/exercises/soleus-stretch/) (en anglais) s’occupent du mollet raide qui tire sur le talon.',
        'La [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/) est la montée sur pointes avec charge de l’essai de Rathleff.',
        'Le [massage avec une balle](/exercises/foot-roll/) (en anglais) détend le tissu entre les séances.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Pourquoi le matin est-il le pire moment\u00A0?',
      paragraphs: [
        'Le fascia plantaire se raidit et se raccourcit pendant le sommeil. Au repos, le pied pointe en général vers le bas. Quand vous vous levez et que le pied s’aplatit sous tout votre poids, le tissu raccourci s’étire d’un coup. C’est la vive traction des premiers pas.',
        'Le plus efficace se passe avant que votre pied touche le sol. Asseyez-vous au bord du lit, croisez une cheville sur l’autre genou et tirez doucement les orteils vers vous pendant environ 10\u00A0secondes, 10\u00A0fois pour chaque pied. La recommandation donne à cet étirement sa meilleure note.',
        'Les attelles de nuit maintiennent le pied à angle droit pendant la nuit, pour que le fascia reste doucement allongé. La recommandation leur donne aussi un A pour les personnes dont la douleur aux premiers pas persiste malgré les étirements. [La douleur au talon au réveil](/fr/douleur-talon-au-reveil/) présente la routine du matin, les attelles de nuit et les autres problèmes qui partagent ce schéma des premiers pas.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Fasciite plantaire au travail et en course à pied',
      paragraphs: [
        'Rester longtemps debout sur un sol dur est l’un des facteurs de risque de l’étude de Riddle 2003\u00A0: son odds ratio pour la fasciite plantaire était de 3,6. Une revue de 2015 de la littérature en santé au travail a relié la station debout prolongée au travail à des gênes musculo-squelettiques, à la fatigue et aux douleurs dans les jambes. Si vos pieds font mal en fin de journée de travail, les mêmes étirements et le même renforcement du mollet s’appliquent.',
        'Pour les coureurs, la recommandation de 2023 conseille d’adapter la charge au lieu de tout arrêter. Cela veut dire réduire le kilométrage ou l’intensité, pas descendre à zéro. Ce conseil repose sur des preuves théoriques (note E), car aucun essai ne l’a testé, mais il rejoint la façon dont les recommandations sur le tendon d’Achille et la périostite tibiale traitent elles aussi les blessures de surcharge.',
      ],
      bullets: [
        '[Mal aux pieds après une journée debout](/feet-hurt-standing-all-day/) (en anglais) présente les exercices et les chaussures pour les personnes debout au travail.',
        '[Infirmières et douleur aux pieds](/nurses-foot-pain/) (en anglais) traite des longues gardes sur sol dur.',
        '[Bureau debout et douleur aux pieds](/standing-desk-foot-pain/) (en anglais) parle de l’alternance assis-debout.',
        '[Douleur au talon en course à pied](/heel-pain-runners/) (en anglais) explique comment adapter l’entraînement quand le talon fait mal.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: 'La douleur peut-elle venir d’autre chose qu’une fasciite plantaire\u00A0?',
      paragraphs: [
        'Plusieurs problèmes ont le même emplacement ou le même schéma du matin. L’endroit de la douleur et son comportement aident à les distinguer.',
        '**Tendinite d’Achille.** Une douleur à l’arrière du talon ou dans le tendon au-dessus, pas sous le pied. La raideur aux premiers pas est fréquente, mais la douleur est plus haute. Voir [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/).',
        '**Syndrome du coussinet graisseux du talon.** Une douleur sourde et profonde au centre du talon, pire sur sol dur et pieds nus. Une revue exploratoire de 2022 a noté qu’il peut être difficile à distinguer de la fasciite plantaire sans imagerie. La douleur du coussinet est juste sous le centre du talon, celle de la fasciite à l’avant et à l’intérieur.',
        '**Épine calcanéenne.** Une excroissance osseuse sous l’os du talon. Beaucoup de gens en ont une sans aucune douleur. Dans la cohorte de Hansen 2018 sur 174\u00A0patients, une épine calcanéenne au départ n’avait pas d’effet significatif sur la durée des symptômes. L’épine est souvent là, mais ce n’est pas elle qui entretient la douleur.',
        '**Fracture de fatigue du calcanéum.** Une douleur qui monte avec l’activité au lieu de se calmer une fois échauffé. Elle peut faire mal au repos ou la nuit. Presser les côtés du talon la reproduit souvent. Consultez un professionnel de santé avant de faire travailler le pied.',
        '**Rhumatisme inflammatoire.** Quand les deux talons font mal, que la raideur du matin dure plus de 30\u00A0minutes et que d’autres articulations sont raides ou gonflées, le tableau oriente vers une cause générale. Un professionnel de santé doit vérifier.',
        'Dans le doute, un professionnel de santé peut les distinguer d’après l’emplacement, le comportement de la douleur et, si besoin, l’imagerie.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'Les applications pour la fasciite plantaire',
      paragraphs: [
        'Plusieurs applications proposent des exercices pour la fasciite plantaire. Elles diffèrent selon qu’elles s’adaptent ou non au niveau de douleur, qu’elles augmentent la charge progressivement, et qu’elles couvrent à la fois les étirements et le renforcement. [Meilleure app pour la fasciite plantaire](/fr/meilleure-app-fasciite-plantaire/) en compare sept côte à côte, dont Walkito.',
      ],
    },
    {
      h2: 'Tous les guides sur la fasciite plantaire de ce site',
      bullets: [
        '[Exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) donne la liste complète des exercices avec les doses et les niveaux de preuve.',
        '[Montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) présente le protocole de montées sur pointes de l’essai de Rathleff.',
        '[La douleur au talon au réveil](/fr/douleur-talon-au-reveil/) parle de la douleur du matin, des attelles de nuit et des autres problèmes qui font mal aux premiers pas.',
        '[Combien de temps dure une fasciite plantaire\u00A0?](/fr/combien-de-temps-dure-fasciite-plantaire/) présente les délais de récupération, les facteurs qui les prédisent et que faire si les progrès stagnent.',
        '[Douleur au talon en course à pied](/heel-pain-runners/) (en anglais) parle de la gestion de la charge et des changements d’entraînement.',
        '[Mal aux pieds après une journée debout](/feet-hurt-standing-all-day/) (en anglais) présente les exercices et les chaussures pour la station debout prolongée.',
        '[Infirmières et douleur aux pieds](/nurses-foot-pain/) (en anglais) traite des longues gardes sur sol dur.',
        '[Bureau debout et douleur aux pieds](/standing-desk-foot-pain/) (en anglais) parle de l’alternance assis-debout.',
        '[Meilleure app pour la fasciite plantaire](/fr/meilleure-app-fasciite-plantaire/) compare sept applications pour la fasciite plantaire.',
        'Pages d’exercices\u00A0: [étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/), [étirement du mollet](/fr/exercices/etirement-mollet/), [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/), [massage avec une balle](/exercises/foot-roll/) (en anglais).',
      ],
    },
  ],
  faq: [
    {
      q: 'Quel est le moyen le plus rapide de soulager une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Il n’y a pas de raccourci, mais les données conseillent de commencer tôt les étirements (note A de la recommandation) et d’ajouter le renforcement du mollet (note B). Dans un essai sur 48\u00A0personnes, des montées sur pointes lourdes ont accéléré l’amélioration à trois mois (Rathleff et coll., 2015). Des étirements réguliers chaque jour, des chaussures qui soutiennent le pied et ne pas surcharger le pied sont la base.',
    },
    {
      q: 'Une fasciite plantaire peut-elle partir toute seule\u00A0?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Oui, mais cela prend en général longtemps. Une revue de 2020 indique qu’environ 90\u00A0% des personnes vont mieux avec des soins conservateurs (Latt et coll., 2020). Dans une cohorte de 174\u00A0patients, environ la moitié n’avait plus de symptômes à cinq ans (Hansen et coll., 2018). Des soins actifs peuvent raccourcir ce délai.',
    },
    {
      q: 'Marcher, c’est bon ou mauvais pour la fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'Marcher à une allure confortable avec des chaussures qui soutiennent le pied ne pose en général pas de problème. La recommandation ne dit pas d’arrêter de bouger. Le test, c’est votre talon le lendemain matin. Si la douleur aux premiers pas le matin après une marche est nettement plus forte que d’habitude, cette marche était de trop. Raccourcissez la distance avant d’arrêter complètement.',
    },
    {
      q: 'Une épine calcanéenne cause-t-elle la fasciite plantaire\u00A0?',
      cites: [CITE.hansen],
      a: 'Pas comme la plupart des gens l’imaginent. Une épine calcanéenne est une excroissance osseuse sous l’os du talon, et beaucoup de gens en ont une sans douleur. Dans un suivi de 174\u00A0patients, une épine calcanéenne au départ n’avait pas d’effet significatif sur la durée des symptômes (Hansen et coll., 2018). Le problème, c’est la surcharge du fascia, pas l’épine.',
    },
    {
      q: 'Peut-on faire du sport avec une fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'Oui, mais le type d’activité et la dose comptent. La recommandation conseille de continuer l’activité en adaptant la charge, pas le repos complet. Les exercices qui chargent le mollet et le fascia (étirements, montées sur pointes) font partie de l’approche, ils ne la contredisent pas. Les activités à fort impact peuvent devoir être réduites. Le test reste le lendemain matin\u00A0: s’il est pire, la veille était de trop.',
    },
    {
      q: 'Quelles chaussures pour une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La recommandation inclut des conseils sur les chaussures dans l’approche, mais ne cite pas de marques. Une chaussure avec un peu d’amorti, un soutien de voûte et un léger drop (différence de hauteur entre le talon et l’avant-pied) aide à compenser un mollet raide. Dans une étude, une cheville peu souple était le facteur de risque le plus fort de fasciite plantaire (Riddle et coll., 2003). Évitez de marcher pieds nus sur un sol dur, surtout le matin.',
    },
    {
      q: 'Quand consulter un médecin pour une douleur au talon\u00A0?',
      a: 'Consultez un professionnel de santé si la douleur a suivi une blessure, si vous ne pouvez pas poser le pied, si les deux talons font mal et que d’autres articulations sont raides, s’il y a des engourdissements ou des fourmillements, si le talon est rouge ou chaud, si la douleur vous réveille la nuit, ou si elle ne s’améliore pas après plusieurs mois d’étirements et de travail du mollet. Ces schémas peuvent signaler un autre problème.',
    },
    {
      q: 'Pourquoi ai-je une fasciite plantaire à un seul pied\u00A0?',
      a: 'La fasciite plantaire apparaît souvent d’abord à un pied, car la charge se répartit rarement de façon égale entre les jambes. Une jambe dominante, une ancienne boiterie, un travail qui sollicite un côté, ou une hausse soudaine de l’activité sur une jambe, comme se mettre à courir, peuvent surcharger un fascia plus que l’autre. Les deux pieds peuvent quand même être touchés avec le temps.',
    },
    {
      q: 'Pourquoi ai-je eu une fasciite plantaire d’un coup\u00A0?',
      cites: [CITE.guideline],
      a: 'Une fasciite plantaire soudaine suit en général un changement soudain de charge, pas une blessure soudaine. Une hausse rapide du kilométrage en course, de nouvelles chaussures, un nouveau travail où vous restez debout, ou une prise de poids peuvent surcharger le fascia plus vite qu’il ne s’adapte. Rester longtemps debout au travail fait partie des facteurs de risque reconnus par la recommandation de 2023 sur la douleur au talon.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une blessure ou une chute',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'elle s’accompagne d’engourdissements, de fourmillements, de brûlures, d’un gonflement ou de chaleur',
      'le talon est rouge, ou vous avez de la fièvre ou vous ne vous sentez pas bien',
      'elle vous réveille la nuit ou est présente au repos',
      'presser les côtés du talon reproduit la douleur',
      'les deux talons font mal et d’autres articulations sont gonflées ou raides',
      'elle ne s’est pas améliorée après plusieurs semaines d’exercice et de charge réduite',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à trouver quels exercices faire, dans quel ordre, ni quand passer à la suite. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la fasciite plantaire, le premier objectif est un meilleur matin\u00A0: une douleur à 1/10 ou moins pendant 14\u00A0jours de suite.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Une fois l’objectif du matin atteint, il passe en entretien et le suivant prend sa place.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Fasciite plantaire',
  campaign: 'hub-plantar-fasciitis-fr',
};
