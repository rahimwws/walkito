import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Douleur au talon après la marche (FR) ─────────────────────────────
 *
 * Translated from `articles/heel-pain-after-walking.ts`, written around the
 * French queries «douleur talon après marche», «mal au talon après avoir
 * marché», «douleur talon longue marche». French (France) with «vous».
 * Figures, doses, grades and qualifiers are identical to the English page.
 * No new citations.
 */

export const HEEL_PAIN_AFTER_WALKING_FR: Guide = {
  lang: 'fr',
  page: 'heelPainAfterWalking',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Douleur au talon après la marche\u00A0: pourquoi et que faire',
  description:
    'Mal au talon après avoir marché ou être resté debout\u00A0: pourquoi, quelles causes, quand s’inquiéter et les exercices qui aident le plus.',
  h1: 'Douleur au talon après la marche\u00A0: pourquoi le talon fait mal et que faire',
  lede:
    'Votre talon allait bien pendant la marche, mais maintenant que vous êtes arrêté, il fait mal. Ou bien la douleur est apparue au milieu d’une longue marche et a augmenté à chaque pas. Les deux schémas indiquent la même chose\u00A0: les tissus sous le talon ont reçu ce jour-là plus de charge qu’ils ne pouvaient en encaisser. La cause la plus fréquente est la fasciite plantaire, et la réponse la plus utile, ce sont les étirements et un renforcement progressif du mollet.',
  intro: [
    'Cette page parle de la douleur au talon qui apparaît pendant ou après la marche. Si votre talon fait surtout mal aux tout premiers pas du matin, ce schéma est traité dans [douleur au talon au réveil](/fr/douleur-talon-au-reveil/). Si vos pieds font mal après des heures debout au même endroit, [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/) traite la charge statique. Les trois se recoupent, mais chacune a son angle.',
  ],
  takeaways: [
    'La recommandation de 2023 sur la douleur au talon décrit la douleur de la fasciite plantaire comme «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0», mais elle cite aussi comme signe clé une douleur qui augmente avec une activité prolongée en charge (Koc et coll., 2023).',
    'Dans une étude cas-témoins appariée de 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une dorsiflexion de cheville réduite (jusqu’où le pied remonte vers le tibia) était le facteur de risque indépendant le plus fort, devant un indice de masse corporelle supérieur à 30 et le fait de rester debout la plus grande partie de la journée de travail (Riddle et coll., 2003).',
    'La recommandation donne aux étirements du fascia plantaire et du mollet sa meilleure note, **A**, et au renforcement un **B** (Koc et coll., 2023).',
    'Environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux comme les étirements, le travail du mollet et la gestion de la charge (Latt et coll., 2020).',
    'Une douleur au talon après la marche qui augmente à chaque sortie et ne se calme pas au repos peut évoquer une fracture de fatigue plutôt qu’une fasciite plantaire. Presser les côtés du talon est l’un des signes cliniques.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Pourquoi le talon fait-il mal après la marche\u00A0?',
      paragraphs: [
        'La marche charge le fascia plantaire, l’épaisse bande de tissu sous le pied, à chaque pas. Chaque fois que le talon touche le sol et que le pied se déroule vers l’avant, le fascia s’étire et absorbe la force. Sur un pied en bonne santé, cela ne pose pas de problème. Mais quand le fascia est irrité ou que le mollet est trop raide pour absorber sa part, la charge se concentre à l’attache du talon.',
        'Résultat\u00A0: une douleur qui monte pendant ou après une marche, surtout si elle est plus longue que d’habitude. La recommandation de 2023 sur la douleur au talon cite deux schémas typiques de la fasciite plantaire\u00A0: la douleur aux premiers pas après le repos, et la douleur qui augmente avec une activité prolongée en charge. La marche est l’activité prolongée en charge la plus courante qui soit.',
        'Un mollet raide joue un grand rôle. Dans une étude cas-témoins appariée de 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une dorsiflexion de cheville réduite avait l’odds ratio le plus élevé de tous les facteurs de risque mesurés. Quand la cheville ne plie pas assez, chaque pas demande au fascia de compenser.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Une douleur au talon après la marche, est-ce toujours une fasciite plantaire\u00A0?',
      paragraphs: [
        'La fasciite plantaire est la cause la plus fréquente, mais ce n’est pas la seule. L’endroit de la douleur et le moment où elle apparaît aident à les distinguer.',
        '**Amincissement du coussinet graisseux du talon.** Le coussinet graisseux sous l’os du talon amortit chaque pas. Quand il s’amincit ou se déplace, l’os encaisse plus directement les chocs. Une revue exploratoire de 2022 a noté que la douleur du coussinet graisseux est plutôt une douleur sourde et profonde au centre du talon, pire sur sol dur et pieds nus (Chang et coll., 2022). La douleur de la fasciite plantaire se situe en général à l’avant et à l’intérieur du talon. Celle du coussinet se situe juste sous le centre. Si marcher pieds nus sur du carrelage ou du béton est nettement pire qu’avec des chaussures amortissantes, l’amincissement du coussinet mérite d’être envisagé. Voir [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/) pour en savoir plus.',
        '**Tendinite d’Achille.** Une douleur à l’arrière du talon ou dans le tendon au-dessus, pas sous le pied. Le tendon d’Achille peut être douloureux après une longue marche, surtout en montée. Si votre douleur est à l’arrière du talon plutôt que dessous, voir [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/).',
        '**Fracture de fatigue du calcanéum.** Une douleur qui s’installe progressivement après une hausse de la distance ou de l’intensité de marche. Contrairement à la fasciite plantaire, la douleur d’une fracture de fatigue a tendance à monter avec l’activité et à peu se calmer au repos. Presser les côtés du talon peut reproduire la douleur. Si cela correspond à votre cas, consultez un professionnel de santé avant de faire travailler le pied.',
        '**Douleur projetée depuis le bas du dos ou compression nerveuse.** Une douleur au talon accompagnée d’engourdissements, de fourmillements ou de brûlures peut évoquer un problème de nerf, pas un problème de charge des tissus. C’est une raison de consulter d’abord un professionnel de santé.',
      ],
      cites: [CITE.fatPadReview, CITE.achillesGuideline, CITE.patelStressFracture],
    },
    {
      h2: 'Qu’est-ce qui distingue la douleur après la marche de la douleur au réveil\u00A0?',
      paragraphs: [
        'La douleur au talon du matin et la douleur après la marche sont, dans la plupart des cas, deux faces du même problème. La douleur du matin vient du fascia qui se raidit et se raccourcit pendant la nuit, puis s’étire d’un coup quand vous vous levez. La douleur après la marche vient du fascia chargé de façon répétée pendant la marche\u00A0: le tissu vous dit qu’il en a assez.',
        'La différence compte pour placer vos exercices. La douleur du matin répond le mieux à un étirement du fascia plantaire fait avant le premier pas. La douleur après la marche répond à la gestion de la charge\u00A0: marcher une distance que le pied supporte, l’augmenter progressivement, et utiliser les étirements et le travail du mollet pour relever le seuil. [Douleur au talon au réveil](/fr/douleur-talon-au-reveil/) détaille les étirements du matin et les attelles de nuit.',
        'Si vous avez à la fois une douleur le matin et une douleur après la marche, c’est le schéma typique de la fasciite plantaire. Les exercices se recoupent. L’étirement du matin et les étirements du mollet aident dans les deux cas. Le renforcement du mollet augmente la capacité de toute la chaîne, pour que votre charge de marche quotidienne reste dans ce que les tissus peuvent encaisser.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Qu’est-ce qui la distingue du mal aux pieds en station debout\u00A0?',
      paragraphs: [
        'Rester debout sans bouger et marcher sont deux charges différentes. La station debout maintient les mêmes tissus sous une contrainte constante et statique, sans la pompe du mollet que la marche apporte. La marche alterne charge et décharge, ce qui ménage les veines et le coussinet graisseux, mais sollicite davantage le fascia à l’attache du talon, à cause de l’étirement répété à la poussée.',
        'Si vos pieds font mal après des heures debout mais vont bien après une marche, le problème vient plus probablement de la fatigue liée à la station debout. [Mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/) traite ce schéma, y compris les bas de contention et les tapis de sol, qui comptent moins ici. Si c’est précisément votre talon qui fait mal après la marche mais pas après la station debout, le problème de charge se situe à l’attache du fascia, et les exercices du mollet ci-dessous sont le point de départ.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Quels exercices contre la douleur au talon après la marche\u00A0?',
      keyFact: 'Une revue systématique a trouvé que les étirements du fascia plantaire comme ceux du mollet réduisaient davantage la douleur de la fasciite plantaire que l’absence d’étirement (Siriphorn et Eksakulkla, 2020).',
      paragraphs: [
        'Les exercices sont ceux que la recommandation de 2023 conseille pour la fasciite plantaire. Elle donne aux étirements sa meilleure note, **A**, et au renforcement un **B**. Les deux sont recommandés. Une revue systématique a trouvé que les étirements du fascia plantaire et du mollet réduisaient tous deux la douleur par rapport à l’absence d’étirement (Siriphorn et Eksakulkla, 2020).',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'Note A de la recommandation. La recommandation la plus répétée de la recommandation de 2023.' },
          dose: '10\u00A0maintiens de 10\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez une cheville sur l’autre genou. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Faites-le avant de vous lever le matin, après être resté assis et après une longue marche.',
          often: 'Chaque matin et après une activité prolongée',
          feel: 'Un étirement le long de la voûte, pas une douleur vive',
          stop: 'La douleur atteint 6/10',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez doucement les orteils vers vous',
          alt: 'Une personne assise qui tire les orteils vers elle pour étirer la voûte',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'strong', why: 'Note A de la recommandation. Vise le mollet raide, le facteur de risque le plus fort dans une étude cas-témoins de 2003.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur. Jambe arrière tendue, talon au sol, hanches vers l’avant. Tenez jusqu’à sentir l’étirement dans le haut du mollet.',
          often: 'La plupart des séances et avant une longue marche',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, penchez-vous en avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: { level: 'strong', why: 'Note A de la recommandation. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur que pour l’étirement du mollet, puis pliez le genou arrière jusqu’à sentir l’étirement descendre, près du talon.',
          often: 'Après l’étirement genou tendu',
          feel: 'Un étirement plus bas dans le mollet, près du talon',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à ce que l’étirement descende',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'Note B de la recommandation pour le renforcement. Une étape vers le travail chargé sur une jambe.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge. Tenez-vous à un mur ou à une rampe pour l’équilibre.',
          often: 'Jours de renforcement, une fois que les étirements seuls ne suffisent plus',
          feel: 'Les mollets qui travaillent ensemble',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes\u00A0: montez bien droit, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des pieds, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette (sur une jambe)',
          evidence: { level: 'strong', why: 'L’exercice du seul essai randomisé de montées sur pointes propre à la fasciite plantaire (Rathleff 2015). Note B de la recommandation.' },
          dose: 'Walkito commence à 3\u00A0séries de 12, chaque jambe. Le protocole de recherche progresse jusqu’à 5\u00A0séries de 8\u00A0RM.',
          how: 'Tenez-vous sur un pied sur une marche, une serviette roulée sous les orteils. Trois secondes pour monter, deux secondes en haut, trois secondes pour redescendre. La serviette charge le fascia plantaire par le mécanisme de treuil.',
          often: 'Jours de renforcement, une fois les montées sur deux pieds devenues faciles deux séances de suite',
          feel: 'Un travail dur dans le mollet et une traction sous la voûte',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: tempo lent, serviette sous les orteils',
          alt: 'Une personne sur une marche qui monte sur la pointe des pieds, une serviette roulée sous le pied',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.rathleff, CITE.riddle],
    },
    {
      h2: 'Combien marcher quand le talon fait mal\u00A0?',
      paragraphs: [
        'Le but n’est pas d’arrêter de marcher. C’est de trouver la distance que votre talon supporte sans s’enflammer le lendemain matin, puis de construire à partir de là.',
        'Une approche pratique\u00A0: marchez une distance qui garde la douleur du lendemain matin au niveau de votre base actuelle ou en dessous. Si votre note habituelle le matin est de 4 sur 10 et qu’une marche de 30\u00A0minutes la fait monter à 6 le lendemain matin, cette marche était de trop. Raccourcissez-la jusqu’à ce que la note du matin reste stable. Puis ajoutez cinq minutes toutes les une à deux semaines, tant que la douleur du matin ne grimpe pas.',
        'C’est de la gestion de la charge, pas du repos. Le repos complet aide rarement en cas de fasciite plantaire. La recommandation conseille d’adapter l’activité, pas de devenir inactif. Marcher avec des chaussures qui soutiennent le pied sur une surface plus souple ménage davantage le fascia que marcher pieds nus sur du béton.',
        'Si vous courez aussi, le même principe s’applique à une autre échelle. [Douleur au talon en course à pied](/heel-pain-runners/) (en anglais) détaille les pics de charge et les changements de kilométrage.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Combien de temps avant que le talon ne fasse plus mal après les marches\u00A0?',
      keyFact: 'Dans des données de référence sur 566\u00A0adultes en bonne santé, le nombre moyen de montées sur pointe sur une jambe était d’environ 23 à 24\u00A0répétitions, un repère pour suivre l’endurance du mollet dans le temps (Hebert-Losier et coll., 2017).',
      paragraphs: [
        'Il n’y a pas de délai fixe. Une revue des données cliniques indique qu’environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux, souvent en quelques mois (Latt et coll., 2020). Dans un suivi plus long de 174\u00A0personnes, environ la moitié avait encore quelques symptômes à 5\u00A0ans, même si la plupart étaient alors légers (Hansen et coll., 2018).',
        'Ce que vous pouvez mesurer plus tôt, c’est si les exercices font effet. La douleur du matin sur une échelle de 0 à 10 est le signal quotidien le plus clair. L’endurance du mollet, mesurée en comptant les montées sur pointe sur une jambe, suit la force au fil des semaines. Un repère souvent cité chez l’adulte est d’environ 23 à 24\u00A0répétitions en moyenne, d’après des données de référence sur 566\u00A0adultes en bonne santé (Hebert-Losier et coll., 2017). Ce qui compte, c’est que votre chiffre augmente, pas qu’il atteigne le repère.',
        'Pour le délai global, voir [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/).',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.hebertLosier],
    },
  ],
  faq: [
    {
      q: 'Pourquoi j’ai mal au talon après une longue marche\u00A0?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La cause la plus fréquente est la fasciite plantaire. Chaque pas charge le fascia plantaire là où il s’attache à l’os du talon. Une longue marche demande plus à ce tissu qu’une courte. Quand le mollet est raide ou que le fascia est déjà irrité, la charge dépasse ce que le tissu supporte et la douleur suit. Un mollet raide est le facteur de risque indépendant le plus fort dans une étude cas-témoins de 2003.',
    },
    {
      q: 'Faut-il arrêter de marcher quand le talon fait mal\u00A0?',
      cites: [CITE.guideline],
      a: 'Le repos complet n’est en général pas nécessaire. La recommandation de 2023 conseille d’adapter l’activité, pas de devenir inactif. Marchez une distance que votre talon supporte sans aggraver le lendemain matin. Raccourcissez-la si besoin, puis augmentez-la à nouveau progressivement. Des chaussures qui soutiennent le pied et une surface plus souple aident.',
    },
    {
      q: 'Douleur au talon après la marche, est-ce une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.fatPadReview],
      a: 'C’est la cause la plus fréquente, mais pas la seule. La douleur de la fasciite plantaire se situe à l’avant et à l’intérieur du talon et est aussi pire aux premiers pas après le repos. L’amincissement du coussinet graisseux donne une douleur sourde au centre, pire sur sol dur. La tendinite d’Achille fait mal à l’arrière du talon. Une fracture de fatigue monte avec l’activité et peut faire mal au repos. En cas de doute, consultez un professionnel de santé.',
    },
    {
      q: 'Quel est le meilleur exercice contre la douleur au talon après la marche\u00A0?',
      cites: [CITE.guideline, CITE.siriphorn],
      a: 'L’étirement du fascia plantaire et les étirements du mollet ont la meilleure note de preuve (A) dans la recommandation de 2023. Une méta-analyse a trouvé que les deux réduisaient la douleur par rapport à l’absence d’étirement. Faites l’étirement du fascia plantaire après une marche et les étirements du mollet la plupart des jours. Le renforcement du mollet (note B) construit la capacité dont la chaîne a besoin pour des marches plus longues.',
    },
    {
      q: 'Faut-il une radio pour une douleur au talon après la marche\u00A0?',
      cites: [CITE.guideline],
      a: 'En général non. La recommandation de 2023 indique que l’imagerie n’est pas nécessaire quand l’examen clinique oriente vers une fasciite plantaire. Si la douleur ne s’est pas améliorée après plusieurs semaines d’étirements et de gestion de la charge, si elle s’aggrave, ou si presser les côtés du talon la reproduit (signe possible de fracture de fatigue), l’imagerie devient utile.',
    },
    {
      q: 'Pourquoi le talon fait mal après la station debout mais pas après la marche\u00A0?',
      cites: [CITE.waters],
      a: 'La station debout charge le pied de façon statique, sans la pompe du mollet que la marche apporte. Le sang stagne, le coussinet graisseux est comprimé et la voûte se fatigue. La marche alterne charge et décharge, ce qui ménage les veines. Si la station debout est votre déclencheur, [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/) traite ce schéma, y compris les bas de contention et les tapis de sol.',
    },
    {
      q: 'Comment savoir si ma douleur au talon est une fracture de fatigue\u00A0?',
      cites: [CITE.patelStressFracture],
      a: 'La douleur d’une fracture de fatigue monte en général avec l’activité, apparaît après une hausse soudaine du volume de marche ou de course, et se calme peu au repos. Presser les côtés du talon peut la reproduire. La douleur de la fasciite plantaire se calme en général une fois échauffé et est pire aux premiers pas après le repos. Si le tableau évoque une fracture, consultez un professionnel de santé avant de faire des exercices.',
    },
    {
      q: 'Comment soulager la douleur au talon juste après une marche\u00A0?',
      a: 'Juste après une marche, reposez le pied, mettez un peu de froid sur la zone douloureuse pendant un court moment, et évitez de repartir tout de suite pieds nus sur un sol dur. Cela calme la douleur immédiate, mais ne change pas la cause. Les exercices de cette page, étirements du mollet et du fascia plus un renforcement progressif, sont ce qui change la façon dont le talon encaisse la marche suivante.',
    },
    {
      q: 'Pourquoi j’ai mal à un seul talon après la marche\u00A0?',
      a: 'La douleur au talon après la marche n’apparaît souvent que d’un côté, parce que la charge pendant une marche se répartit rarement de façon égale entre les jambes. Une foulée plus longue d’un côté, une ancienne blessure, une chaussure plus usée d’un côté ou un sac porté sur une seule épaule peuvent tous reporter plus de contrainte sur un talon. Les deux côtés peuvent quand même devenir douloureux avec le temps.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a suivi une blessure ou une chute',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'presser les côtés du talon reproduit la douleur, ce qui peut évoquer une fracture de fatigue',
      'la douleur au talon s’aggrave à chaque marche malgré une distance raccourcie',
      'elle s’accompagne d’engourdissements, de fourmillements ou de brûlures',
      'le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'les deux talons font mal et la raideur du matin dure plus de 30\u00A0minutes, surtout si d’autres articulations sont touchées',
      'la douleur vous empêche de dormir ou est présente au repos',
      'elle ne s’est pas améliorée après plusieurs semaines d’étirements, de travail du mollet et de gestion de la charge',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à trouver vous-même les exercices, les doses ni le moment de passer au niveau supérieur. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la douleur au talon, le premier objectif est une douleur du matin à 1/10 ou moins pendant 14\u00A0jours de suite. Si la veille comprenait plus de marche que d’habitude et que la note du matin grimpe, la séance s’adapte automatiquement.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois l’objectif du matin atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez si le travail relève votre seuil de marche.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si la douleur au talon après la marche s’aggrave malgré les exercices, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Douleur au talon après la marche',
  campaign: 'guide-heel-after-walking-fr',
};
