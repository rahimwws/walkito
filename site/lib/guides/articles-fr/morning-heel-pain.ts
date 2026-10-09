import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Douleur au talon au réveil (FR) ───────────────────────────────────
 *
 * Translated from `articles/morning-heel-pain.ts`, written around the French
 * queries «douleur talon au réveil», «mal au talon le matin», «douleur talon
 * premiers pas». French (France) with «vous». Figures, doses, grades and
 * qualifiers are identical to the English page. No new citations.
 */

export const MORNING_HEEL_PAIN_FR: Guide = {
  lang: 'fr',
  page: 'morningHeelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Douleur au talon au réveil\u00A0: pourquoi et que faire',
  description:
    'Pourquoi le talon fait mal au réveil, les causes autres que la fasciite plantaire, et que faire avant de vous lever chaque matin.',
  h1: 'Douleur au talon au réveil\u00A0: pourquoi, et que faire avant le premier pas',
  lede:
    'Vos premiers pas en sortant du lit sont le pire moment de la journée. Cette vive traction au talon, avant même de vous être redressé, est le schéma que la plupart des gens décrivent quand ils cherchent «\u00A0douleur au talon\u00A0». La cause la plus fréquente est la fasciite plantaire, mais ce n’est pas la seule, et le matin est le moment le plus utile pour agir.',
  intro: [
    'La page [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) donne la liste complète des exercices, les preuves derrière chacun et les notes de la recommandation. Cette page s’attarde sur le matin lui-même\u00A0: pourquoi ce premier pas fait mal, quels autres problèmes ont le même schéma, que faire avant que votre pied touche le sol, et comment le suivi de votre douleur du matin vous montre si les choses s’améliorent.',
  ],
  takeaways: [
    'La douleur au talon le matin est le signe typique de la fasciite plantaire\u00A0: la recommandation de 2023 sur la douleur au talon la décrit comme une douleur «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0» (Koc et coll., 2023).',
    'Étirer le fascia plantaire avant de vous lever est noté **A**, la meilleure note de la recommandation. Les attelles de nuit, portées 1 à 3\u00A0mois, obtiennent aussi un **A** pour une douleur aux premiers pas qui persiste (Koc et coll., 2023).',
    'D’autres problèmes font mal le matin\u00A0: la tendinite d’Achille (arrière du talon), l’amincissement du coussinet graisseux du talon (douleur sourde au centre), la fracture de fatigue du calcanéum (monte avec l’activité, peut faire mal au repos) et le rhumatisme inflammatoire (les deux talons, avec une raideur du matin prolongée dans d’autres articulations).',
    'Dans une cohorte de 174\u00A0personnes atteintes de fasciite plantaire, une douleur aux deux talons prédisait nettement des symptômes plus longs, et les auteurs ont noté qu’une maladie inflammatoire générale non reconnue pourrait en partie l’expliquer (Hansen et coll., 2018).',
    'La douleur du matin sur une échelle de 0 à 10 est le signal quotidien le plus clair pour savoir si le pied s’améliore ou non.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Pourquoi la douleur au talon est-elle pire le matin\u00A0?',
      figure: { id: 'heel-side', caption: 'Vue de côté\u00A0: le fascia plantaire s’attache sous l’os du talon, là où la douleur de la fasciite plantaire commence souvent.', alt: 'Vue de côté, face intérieure, d’un pied à la peau transparente montrant l’os du talon, le fascia plantaire sous la voûte et une zone rouge sous le talon là où la douleur commence souvent.' },
      paragraphs: [
        'Le fascia plantaire, l’épaisse bande de tissu qui va de l’os du talon aux orteils, se raidit pendant le sommeil. Au repos, le pied pointe en général vers le bas, ce qui laisse le fascia se raccourcir. Quand vous vous levez et que le pied s’aplatit sous tout votre poids, ce tissu raccourci s’étire d’un coup. Résultat\u00A0: une vive traction à l’intérieur du talon.',
        'La recommandation de 2023 sur la douleur au talon décrit une douleur «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0». Le même schéma se produit quand vous restez assis un moment puis vous levez, pour la même raison\u00A0: le tissu se raccourcit au repos, puis reçoit la charge d’un coup.',
        'Ce n’est pas une nouvelle lésion qui se produit chaque matin. Le tissu est raide, il ne se déchire pas. Après quelques pas, une fois le fascia échauffé, la douleur se calme en général. Cet effet d’échauffement est l’une des choses qui distinguent la fasciite plantaire de certaines autres causes présentées plus bas.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quelles autres causes de douleur au talon le matin\u00A0?',
      keyFact: 'Dans une cohorte de 174\u00A0personnes atteintes de fasciite plantaire suivies en moyenne 9,7\u00A0ans, une douleur aux deux talons prédisait une moins bonne évolution à long terme, ce qui, selon les auteurs, pourrait refléter une maladie inflammatoire générale non reconnue (Hansen et coll., 2018).',
      paragraphs: [
        'La fasciite plantaire est la cause la plus fréquente de douleur au talon le matin, mais ce n’est pas la seule. L’endroit de la douleur et son comportement aident à les distinguer.',
        '**Tendinite d’Achille.** Une douleur à l’arrière du talon ou dans le tendon au-dessus, pas sous le pied. Le tendon d’Achille se raidit la nuit comme le fascia plantaire, donc la raideur aux premiers pas est fréquente. Elle s’améliore en général à la marche, puis s’aggrave à nouveau avec une activité prolongée. Si votre douleur est à l’arrière du talon plutôt que dessous, voir [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/).',
        '**Amincissement du coussinet graisseux du talon.** Le coussinet graisseux sous l’os du talon sert d’amortisseur. Quand il s’amincit ou se déplace, l’os encaisse plus directement les chocs.',
        'Une revue exploratoire de 2022 a noté que la douleur du coussinet graisseux est plutôt une douleur sourde et profonde au centre du talon, pire sur sol dur et pieds nus, et qu’elle peut être difficile à distinguer de la fasciite plantaire sans imagerie (Chang et coll., 2022). La différence clé\u00A0: la douleur de la fasciite plantaire est en général la plus vive à l’avant et à l’intérieur du talon, alors que celle du coussinet se situe juste sous le centre.',
        '**Fracture de fatigue du calcanéum.** Une douleur qui s’installe progressivement, en général après une hausse de l’activité. Contrairement à la fasciite plantaire, la douleur d’une fracture de fatigue a tendance à monter avec l’activité au lieu de se calmer une fois échauffé, et elle peut faire mal au repos ou la nuit. Si presser les côtés du talon reproduit la douleur, consultez un professionnel de santé avant de faire travailler le pied. [Douleur au talon en course à pied](/heel-pain-runners/) (en anglais) explique comment les changements brusques de charge touchent le talon.',
        '**Rhumatisme inflammatoire (un signal d’alerte).** Quand les deux talons font mal le matin, que la raideur dure plus de 30\u00A0minutes et que d’autres articulations sont aussi raides ou gonflées, le tableau s’éloigne de la fasciite plantaire et oriente vers quelque chose qu’un professionnel de santé doit vérifier. Des maladies comme le rhumatisme psoriasique ou la spondylarthrite ankylosante peuvent faire mal là où les tendons s’attachent à l’os, y compris au talon.',
        'Dans une cohorte de 174\u00A0personnes atteintes de fasciite plantaire suivies en moyenne 9,7\u00A0ans, une douleur aux deux talons prédisait nettement une moins bonne évolution à long terme, et les auteurs ont noté qu’une maladie inflammatoire générale non reconnue pourrait en partie l’expliquer (Hansen et coll., 2018). Si les deux talons font mal et que d’autres articulations sont touchées, consultez d’abord un professionnel de santé.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.patelStressFracture, CITE.hansen],
    },
    {
      h2: 'Que faire avant votre premier pas\u00A0?',
      paragraphs: [
        'Le plus utile contre la douleur au talon le matin se passe avant que votre pied touche le sol. La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet sa meilleure note, **A**, et le matin est le moment qu’elle cite le plus souvent pour s’étirer.',
        'Asseyez-vous au bord du lit. Croisez une cheville sur le genou opposé et tirez doucement les orteils vers vous avec une main jusqu’à sentir un étirement le long de la voûte. Tenez environ 10\u00A0secondes, puis relâchez. Faites-le 10\u00A0fois pour chaque pied. Cela charge le fascia lentement, de façon contrôlée, avant de lui demander de porter tout votre poids.',
        'Enchaînez avec un étirement du mollet. Tenez-vous près du lit ou d’un mur, un pied derrière l’autre, le talon arrière au sol, et penchez-vous en avant jusqu’à sentir l’étirement dans le haut du mollet. Tenez 30\u00A0secondes de chaque côté.',
        'Un mollet raide tire sur le talon par le tendon d’Achille, et une cheville peu souple est l’un des facteurs de risque indépendants les plus forts de la fasciite plantaire\u00A0: dans une étude cas-témoins appariée de 50\u00A0cas et 100\u00A0témoins, elle avait l’odds ratio le plus élevé de tous les facteurs mesurés (Riddle et coll., 2003).',
        'Puis mettez des chaussures qui soutiennent le pied ou des chaussons à semelle ferme avant d’aller à la cuisine. Pieds nus sur un sol dur, c’est la pire combinaison pour un fascia raide. Ces étirements du matin sont le point de départ. Le plan à plus long terme ajoute du renforcement\u00A0: les [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) sont l’exercice qui a le plus de preuves directes issues d’essais.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire (assis, avant de vous lever)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 note les étirements du fascia plantaire et du mollet A, sa meilleure note.' },
          dose: '10\u00A0maintiens de 10\u00A0secondes, chaque pied',
          how: 'Asseyez-vous sur le lit. Croisez une cheville sur l’autre genou. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Tenez, puis relâchez.',
          often: 'Chaque matin avant de vous lever, et après être resté longtemps assis',
          feel: 'Un étirement le long de la voûte, pas une douleur',
          stop: 'La douleur atteint 6/10',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez doucement les orteils vers vous avant que votre pied touche le sol',
          alt: 'Une personne assise qui tire les orteils vers elle pour étirer la voûte, le fascia plantaire mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'strong', why: 'Même note A de la recommandation. Vise le gastrocnémien, le gros muscle superficiel du mollet.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur. Jambe arrière tendue, talon au sol, hanches vers l’avant. Tenez jusqu’à sentir l’étirement dans le haut du mollet.',
          often: 'Après l’étirement du fascia, la plupart des matins',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, penchez-vous en avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: { level: 'strong', why: 'Même note A de la recommandation. Vise le soléaire, le muscle profond du mollet.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position que pour l’étirement du mollet, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          often: 'Après l’étirement genou tendu',
          feel: 'Un étirement plus bas dans le mollet, près du talon',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à ce que l’étirement descende',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Les attelles de nuit aident-elles la douleur au talon le matin\u00A0?',
      keyFact: 'La recommandation de 2023 donne aux attelles de nuit, portées un à trois mois, sa meilleure note, A, pour les personnes dont la douleur aux premiers pas du matin revient malgré les étirements (Koc et coll., 2023).',
      paragraphs: [
        'Les attelles de nuit maintiennent le pied à angle droit pendant le sommeil, pour que le fascia plantaire et le mollet restent doucement allongés au lieu de se raccourcir pendant la nuit. L’idée est simple\u00A0: si la douleur du matin vient du fascia qui se raidit au repos, le garder étiré devrait atténuer une partie du choc des premiers pas.',
        'La recommandation de 2023 sur la douleur au talon donne aux attelles de nuit la note **A** pour les personnes dont les premiers pas du matin restent douloureux malgré les étirements et les autres soins conservateurs. La durée recommandée est de 1 à 3\u00A0mois. La plupart des attelles de nuit sont une botte rigide ou semi-rigide qui maintient le pied relevé.',
        'Certaines personnes les trouvent inconfortables pour dormir, et la recommandation ne les propose pas en premier à tout le monde. Elles s’adressent à ceux qui s’étirent déjà et se réveillent quand même avec la douleur.',
        'Les attelles de nuit sont à discuter avec un professionnel de santé. Ce n’est pas un exercice, et aucune application ne peut les fournir. Mais elles valent la peine d’être connues, car elles ont l’une des meilleures notes de la recommandation, précisément pour le problème dont parle cette page\u00A0: une douleur aux premiers pas qui ne se calme pas.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Faut-il porter des chaussures à la maison quand les talons font mal\u00A0?',
      paragraphs: [
        'Marcher pieds nus sur un sol dur met le fascia plantaire en étirement maximal sans aucun amorti dessous. Pour un fascia déjà irrité, c’est la pire combinaison, et cela arrive en général juste après l’étirement du matin, quand le tissu est encore en train de s’échauffer.',
        'Des chaussures qui soutiennent le pied ou des chaussons à semelle ferme à la maison gardent la voûte légèrement soulevée et amortissent le talon. La recommandation de 2023 inclut des conseils sur les chaussures dans l’approche globale, et une cheville peu souple, c’est-à-dire un pied qui remonte peu vers le tibia, est l’un des facteurs de risque les plus forts de la fasciite plantaire. Une chaussure avec un léger drop (différence de hauteur entre le talon et l’avant-pied) aide à compenser un mollet raide.',
        'Pas besoin d’une chaussure spéciale. N’importe quelle basket ou chaussure d’intérieur avec une semelle ferme et un peu de soutien de voûte vaut mieux que les pieds nus sur du carrelage ou du parquet. Si votre douleur est pire à la maison que dehors, c’est souvent pour cette raison. Rester debout toute la journée sur un sol dur pose un problème voisin\u00A0: [mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) présente les exercices et les chaussures pour ce cas.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Comment la douleur du matin montre-t-elle si ça va mieux\u00A0?',
      paragraphs: [
        'La douleur du matin est le signal quotidien le plus clair de l’état d’un pied. Une course peut sembler bien passer mais laisser le fascia surchargé, et vous ne le saurez que le lendemain matin. Une longue journée debout peut sembler supportable, mais le lendemain matin vous dit si c’était de trop. Le schéma est simple\u00A0: si vos premiers pas du lendemain sont pires que d’habitude, la veille en a demandé plus au pied qu’il ne pouvait en encaisser.',
        'C’est pourquoi une note quotidienne de la douleur du matin, de 0 à 10, est plus utile que de vérifier la douleur dans la journée. La douleur de la journée monte et descend avec l’activité, la posture et les chaussures. La douleur du matin mesure la même chose, de la même façon, à peu près à la même heure chaque jour. Quand le chiffre baisse au fil des semaines, le pied gagne du terrain. Quand il grimpe, quelque chose ces derniers jours est allé trop loin.',
        'Walkito vous demande votre douleur du matin avant chaque séance. Si la note est de 7 ou plus, la journée devient une séance douce\u00A0: seulement des exercices assis, à faible charge, qui ne sollicitent pas le fascia, limités à 3\u00A0minutes. Si la note dépasse de 3\u00A0points ou plus la moyenne des 7\u00A0derniers jours, l’application fait redescendre chaque exercice d’un niveau. Si vous êtes resté debout plus longtemps que d’habitude la veille, une séance de renforcement devient une séance de récupération plus légère.',
        'L’objectif est une douleur du matin à 1/10 ou moins pendant 14\u00A0jours de suite. C’est cette tendance, et pas une note isolée, qui vous dit que le pied est prêt pour l’étape suivante.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Pourquoi ai-je mal au talon seulement le matin\u00A0?',
      cites: [CITE.guideline],
      a: 'Le fascia plantaire, l’épaisse bande de tissu sous le pied, se raidit et se raccourcit pendant le sommeil. Vos premiers pas l’étirent sous tout votre poids. La recommandation de 2023 sur la douleur au talon décrit une douleur «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0». Après quelques minutes de marche, le tissu s’échauffe et la douleur se calme en général.',
    },
    {
      q: 'Faut-il s’étirer avant de sortir du lit\u00A0?',
      cites: [CITE.guideline],
      a: 'Oui. La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet sa meilleure note, A, et le matin est le moment qu’elle cite le plus souvent. Asseyez-vous au bord du lit, croisez une cheville sur l’autre genou et tirez doucement les orteils vers vous pendant environ 10\u00A0secondes, 10\u00A0fois pour chaque pied. Cela charge le fascia lentement avant de lui demander de porter tout votre poids.',
    },
    {
      q: 'Une douleur au talon le matin, est-ce toujours une fasciite plantaire\u00A0?',
      cites: [CITE.fatPadReview, CITE.achillesGuideline],
      a: 'Pas toujours. La tendinite d’Achille (douleur à l’arrière du talon), l’amincissement du coussinet graisseux du talon (douleur sourde au centre, pire pieds nus sur sol dur), la fracture de fatigue du calcanéum (monte avec l’activité, peut faire mal au repos) et le rhumatisme inflammatoire (les deux talons, raideur prolongée, autres articulations touchées) peuvent tous faire mal le matin. L’endroit et le comportement de la douleur aident à les distinguer, mais c’est un professionnel de santé qui tranche.',
    },
    {
      q: 'Les attelles de nuit marchent-elles contre la douleur au talon le matin\u00A0?',
      cites: [CITE.guideline],
      a: 'La recommandation de 2023 sur la douleur au talon donne aux attelles de nuit la note A, sa meilleure note, pour les personnes dont les premiers pas restent douloureux malgré les étirements. Les attelles de nuit maintiennent le pied à angle droit pendant la nuit, pour que le fascia reste doucement allongé au lieu de se raccourcir. La durée recommandée est de 1 à 3\u00A0mois. Elles valent la peine d’en parler à un professionnel de santé si les étirements seuls ne suffisent pas.',
    },
    {
      q: 'Pourquoi le talon fait-il de nouveau mal après une station assise\u00A0?',
      cites: [CITE.guideline],
      a: 'Pour la même raison qu’il fait mal le matin. Le fascia plantaire se raccourcit et se raidit quand le pied ne porte pas de charge, que vous dormiez ou que vous soyez simplement assis à un bureau. Quand vous vous levez, il s’étire d’un coup. La recommandation parle de «\u00A0douleur aux premiers pas après une période de repos\u00A0». Un court étirement du fascia avant de vous lever peut aider.',
    },
    {
      q: 'Quand consulter un médecin pour une douleur au talon le matin\u00A0?',
      a: 'Consultez un professionnel de santé si les deux talons font mal et que la raideur du matin dure plus de 30\u00A0minutes, si la douleur a suivi une blessure, si elle s’aggrave de semaine en semaine, si elle vous empêche de dormir, si presser les côtés du talon la reproduit, ou si elle s’accompagne d’engourdissements, d’un gonflement ou de chaleur. Ces schémas peuvent signaler autre chose qu’une fasciite plantaire.',
    },
    {
      q: 'Combien de temps pour que la douleur aux premiers pas passe\u00A0?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Une revue de 2020 indique qu’environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux, souvent en quelques mois (Latt et coll., 2020). Dans un suivi plus long de 174\u00A0patients, environ la moitié avait encore des symptômes à 5\u00A0ans, même si la plupart n’avaient alors qu’une douleur légère (Hansen et coll., 2018). Aucun programme d’exercices ne peut promettre un délai. [Combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) détaille les données.',
    },
    {
      q: 'Que faut-il éviter quand le talon fait mal le matin\u00A0?',
      cites: [CITE.guideline],
      a: 'Évitez de marcher pieds nus sur un sol dur juste après le réveil, et ne sautez pas l’étirement avant de vous lever. Le fascia est au plus raide à ce moment-là, donc poser le pied sur du carrelage ou du parquet sans amorti déclenche souvent une vive douleur aux premiers pas. Mettez des chaussures qui soutiennent le pied ou des chaussons fermes avant de quitter la chambre, et étirez-vous encore assis sur le lit.',
    },
    {
      q: 'Quels remèdes maison contre la douleur au talon le matin\u00A0?',
      cites: [CITE.guideline],
      a: 'Les remèdes maison contre la douleur au talon le matin sont les étirements, le froid et des chaussures qui soutiennent le pied, faits chaque jour et pas une seule fois. Étirez le fascia et le mollet avant de vous lever, puis mettez des chaussures qui soutiennent le pied avant de marcher sur un sol dur. Faire rouler la plante du pied sur une bouteille d’eau congelée quelques minutes atténue la raideur, mais ne remplace pas une consultation si la douleur ne s’améliore pas.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'les deux talons font mal et la raideur du matin dure plus de 30\u00A0minutes, surtout si d’autres articulations sont raides ou gonflées',
      'la douleur a commencé après une blessure ou une chute, ce qui peut évoquer une déchirure du fascia plantaire',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'presser les côtés du talon reproduit la douleur, ce qui peut évoquer une fracture de fatigue',
      'elle s’accompagne d’engourdissements, de fourmillements ou de brûlures, ce qui peut évoquer une compression nerveuse',
      'le talon est rouge, chaud au toucher, ou vous avez de la fièvre',
      'elle vous réveille la nuit ou est présente au repos, pas seulement aux premiers pas',
      'elle ne s’est pas améliorée après plusieurs semaines d’étirements quotidiens et de charge réduite',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à retenir les étirements, les doses ni le moment de passer à plus difficile. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la douleur au talon, le premier objectif est un meilleur matin\u00A0: une douleur à 1/10 ou moins pendant 14\u00A0jours de suite. Chaque matin, vous notez votre douleur avant votre premier pas, et la séance du jour s’adapte à cette note.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois l’objectif du matin atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez ce qui change.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si la douleur du matin est vive, s’aggrave, ou touche les deux talons avec d’autres articulations, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Douleur au talon au réveil',
  campaign: 'guide-morning-heel-fr',
};
