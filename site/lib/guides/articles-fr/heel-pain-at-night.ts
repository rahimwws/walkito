import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Douleur au talon la nuit (FR) ─────────────────────────────────────
 *
 * Translated from `articles/heel-pain-at-night.ts`, written around the
 * French queries «douleur talon la nuit», «mal au talon au repos», «douleur
 * talon allongé». French (France) with «vous». Figures, doses, grades and
 * qualifiers are identical to the English page. No new citations.
 */

export const HEEL_PAIN_AT_NIGHT_FR: Guide = {
  lang: 'fr',
  page: 'heelPainAtNight',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Douleur au talon la nuit\u00A0: causes, signaux d’alerte',
  description:
    'Douleur au talon la nuit ou au repos\u00A0: fracture de fatigue, compression nerveuse ou rhumatisme. Signaux d’alerte et quand consulter.',
  h1: 'Douleur au talon la nuit\u00A0: les causes et quand c’est un signal d’alerte',
  lede:
    'Une douleur au talon qui apparaît la nuit, au lit ou au repos ne suit pas le schéma classique de la fasciite plantaire, cette traction aux premiers pas du matin. La douleur nocturne ou au repos peut évoquer une fracture de fatigue du calcanéum, une compression nerveuse, un rhumatisme inflammatoire ou un autre problème qui demande un professionnel de santé. Cette page passe en revue les causes fréquentes et celles qu’il ne faut pas laisser traîner.',
  intro: [
    'Si votre talon fait surtout mal aux premiers pas du matin puis se calme, le meilleur point de départ est sans doute [douleur au talon au réveil](/fr/douleur-talon-au-reveil/). Cette page concerne la douleur qui persiste au repos, vous réveille, ou arrive après un moment sans être debout et ne correspond pas au schéma typique de la fasciite plantaire.',
  ],
  takeaways: [
    'La douleur de la fasciite plantaire est pire aux premiers pas après le repos et s’estompe en général une fois en mouvement. Une douleur qui reste au repos, vous réveille ou s’aggrave pendant la nuit est un schéma d’alerte qui mérite des examens (Tu, 2018).',
    'Les fractures de fatigue du calcanéum peuvent donner une douleur sourde ou lancinante la nuit et s’aggravent en général avec la mise en charge prolongée au lieu de se calmer à l’échauffement (Patel et coll., 2011).',
    'Le syndrome du canal tarsien et la compression du nerf de Baxter, des compressions de branches du nerf tibial, donnent une douleur au talon avec brûlures ou fourmillements, de nature différente de la fasciite (Tu, 2018). La compression du nerf de Baxter pourrait à elle seule expliquer jusqu’à 20\u00A0% des douleurs chroniques du talon et peut apparaître au repos (Tedeschi, 2025).',
    'Une douleur aux deux talons avec une raideur du matin prolongée peut évoquer un rhumatisme inflammatoire comme une spondyloarthrite. Dans une cohorte de 174\u00A0personnes atteintes de fasciite plantaire, une douleur aux deux talons prédisait nettement des symptômes plus longs (Hansen et coll., 2018).',
    'La recommandation de 2023 sur la douleur au talon note les attelles de nuit **A** pour une fasciite plantaire persistante, mais leur but est d’empêcher le fascia de se raccourcir pendant la nuit, pas de traiter les douleurs nocturnes décrites sur cette page (Koc et coll., 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Pourquoi le talon fait-il mal la nuit ou au repos\u00A0?',
      paragraphs: [
        'La fasciite plantaire fait mal parce que le fascia se raidit pendant le sommeil, puis s’étire brusquement quand vous vous levez. Cette douleur culmine au premier pas et s’améliore avec le mouvement. **Si votre talon fait mal alors que vous êtes allongé, sans aucune charge dessus, c’est en général un autre mécanisme qui est en cause.**',
        'Une revue de 2018 parue dans American Family Physician cite plusieurs causes de douleur au talon qui se comportent autrement que la fasciite plantaire. La distinction clé\u00A0: la douleur de la fasciite plantaire s’améliore avec l’activité, alors que celle des fractures de fatigue, des compressions nerveuses, des tumeurs et des maladies inflammatoires ne suit pas ce schéma.',
        'Le pied pointe aussi vers le bas (flexion plantaire) pendant le sommeil. Cette position peut raccourcir le tendon d’Achille et le mollet, ce qui contribue parfois à une gêne au talon. Les attelles de nuit agissent là-dessus en maintenant la cheville à angle neutre. Mais une attelle de nuit est un outil pour la fasciite plantaire, pas un substitut à des examens pour une douleur qui s’aggrave vraiment au repos.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Est-ce une fracture de fatigue du calcanéum\u00A0?',
      paragraphs: [
        'Une fracture de fatigue du calcanéum, une fine fissure de l’os du talon due à une charge répétée, peut donner une douleur sourde et profonde qui lance la nuit. Contrairement à la fasciite plantaire, la douleur s’aggrave en général avec l’activité et ne se calme pas à l’échauffement. Elle suit souvent une hausse brusque de la course, de la marche ou de la station debout sur sol dur.',
        'Le «\u00A0test de compression\u00A0», qui consiste à presser les deux côtés de l’os du talon l’un vers l’autre, est le signe clinique classique. **Une douleur à la compression est inhabituelle dans la fasciite plantaire et fréquente dans les fractures de fatigue.** Les radios simples passent souvent à côté d’une fracture de fatigue débutante. Une IRM ou une scintigraphie osseuse est en général nécessaire pour la confirmer.',
        'Une revue de 2011 parue dans American Family Physician a noté que les fractures de fatigue du calcanéum donnent une douleur qui s’aggrave progressivement après une hausse de l’activité ou un passage à des surfaces de marche plus dures. La douleur nocturne et la douleur au repos figuraient parmi les signes qui distinguent les fractures de fatigue de la fasciite.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
    },
    {
      h2: 'Et la compression nerveuse\u00A0: canal tarsien et nerf de Baxter\u00A0?',
      keyFact: 'Une revue narrative de 2025 a trouvé que la compression du nerf de Baxter pourrait expliquer jusqu’à 20\u00A0% des cas de douleur chronique du talon (Tedeschi, 2025).',
      paragraphs: [
        'Le nerf tibial passe dans un espace derrière la malléole interne appelé canal tarsien. Une compression à cet endroit, le syndrome du canal tarsien, donne des brûlures, des fourmillements ou un engourdissement le long de la plante et du talon. Tu (2018) décrit la douleur du canal tarsien comme en général pire debout, à la marche ou en courant, et soulagée par le repos et la surélévation. Ce schéma diffère de la fasciite plantaire, mais ce n’est pas une vraie douleur au repos, donc le canal tarsien ne correspond pas toujours au schéma dont parle cette page.',
        'Le nerf de Baxter est la première branche du nerf plantaire latéral, un petit nerf près de l’intérieur du talon. Quand il est comprimé, il donne une douleur vive ou des brûlures à l’intérieur du talon. La douleur s’aggrave souvent avec l’activité au fil de la journée, mais peut aussi apparaître au repos. Une revue de 2025 indique que la compression du nerf de Baxter pourrait expliquer jusqu’à 20\u00A0% des cas de douleur chronique du talon (Tedeschi, 2025).',
        'La compression nerveuse est souvent prise à tort pour une fasciite plantaire, car les deux font mal à l’intérieur du talon. La différence tient à la nature de la douleur\u00A0: **brûlures, fourmillements ou engourdissement sont des signes nerveux.** L’imagerie et l’étude de la conduction nerveuse peuvent aider un professionnel de santé à confirmer le diagnostic.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
    },
    {
      h2: 'Un rhumatisme inflammatoire peut-il donner une douleur au talon la nuit\u00A0?',
      keyFact: 'Dans un suivi de 5 à 15\u00A0ans de 174\u00A0personnes atteintes de fasciite plantaire, une douleur aux deux talons prédisait nettement des symptômes plus longs (Hansen et coll., 2018).',
      paragraphs: [
        'Les spondyloarthrites, un groupe de maladies inflammatoires qui comprend la spondylarthrite ankylosante et le rhumatisme psoriasique, peuvent provoquer une enthésite, une inflammation là où un tendon ou un ligament s’attache à l’os. Le talon est un endroit fréquent. La douleur touche souvent les deux côtés, peut se situer à l’insertion du tendon d’Achille ou sous le talon, et s’accompagne d’une raideur du matin prolongée (plus de 30\u00A0minutes) qui s’améliore avec le mouvement.',
        'Dans un suivi de 5 à 15\u00A0ans de 174\u00A0personnes atteintes de fasciite plantaire, une douleur aux deux talons prédisait nettement des symptômes plus longs. Les auteurs ont noté qu’une maladie inflammatoire générale non reconnue pourrait en partie l’expliquer.',
        'La polyarthrite rhumatoïde et la goutte peuvent aussi donner une douleur au talon. **Si vos deux talons font mal, si la raideur dure plus de 30\u00A0minutes chaque matin, ou si d’autres articulations sont touchées, un professionnel de santé doit rechercher une cause inflammatoire.**',
      ],
      cites: [CITE.hansen, CITE.tuHeelPain],
    },
    {
      h2: 'La fasciite plantaire peut-elle être pire la nuit\u00A0?',
      paragraphs: [
        'La fasciite plantaire est parfois gênante le soir, après une longue journée debout. C’est une douleur liée à l’activité, due à la charge accumulée, et ce n’est pas la même chose qu’une douleur qui vous réveille ou qui arrive quand vous êtes allongé sans aucun poids sur le pied.',
        'Certaines personnes remarquent aussi une gêne au talon quand le pied retombe en position pointée pendant le sommeil, ce qui tire sur le fascia plantaire. C’est sur ce point qu’agissent les attelles de nuit. La recommandation de 2023 leur donne la note **A**, sa meilleure note de preuve, pour une fasciite plantaire persistante. Elles maintiennent la cheville à angle neutre pour que le fascia ne se raccourcisse pas pendant la nuit.',
        'Si la douleur est vraiment à son pire la nuit et au repos, au lieu de s’améliorer avec le mouvement le lendemain matin, ce schéma éloigne de la fasciite plantaire et oriente vers les problèmes décrits plus haut. Ne supposez pas que c’est une fasciite pour continuer malgré la douleur.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Les attelles de nuit aident-elles la douleur au talon\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon note les attelles de nuit A, sa meilleure note de preuve, pour la fasciite plantaire, en général sur un à trois mois (Koc et coll., 2023).',
      paragraphs: [
        'Une attelle de nuit est une orthèse qui maintient la cheville à 90\u00A0degrés pendant le sommeil. L’idée est d’empêcher le mollet et le fascia plantaire de se raccourcir pendant la nuit, pour que le premier pas du matin fasse moins mal.',
        'La recommandation de 2023 sur la douleur au talon note les attelles de nuit **A** pour la fasciite plantaire. Elles sont en général conseillées pendant 1 à 3\u00A0mois quand la douleur aux premiers pas ne s’est pas améliorée avec les seuls étirements et exercices de renforcement. Elles n’agissent pas sur une douleur nerveuse, une fracture de fatigue ou une maladie inflammatoire.',
        'Pour la plupart des gens, les attelles de nuit ne sont pas un dispositif à long terme. Elles sont inconfortables pour dormir, et leur bénéfice concerne précisément la raideur du matin. Si votre douleur nocturne n’est pas de type raccourcissement puis étirement, une attelle a peu de chances d’aider et peut retarder le bon diagnostic.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quels étirements et exercices faire avant de se coucher\u00A0?',
      paragraphs: [
        'Si votre douleur correspond au schéma de la fasciite plantaire, des étirements doux du mollet et du fascia plantaire avant de dormir peuvent réduire la raideur du lendemain matin. Le même étirement ciblé du fascia plantaire que la recommandation note **A** pour la douleur aux premiers pas peut se faire avant de dormir\u00A0: tirez les orteils vers vous avec la main jusqu’à sentir la voûte, tenez 10\u00A0secondes, répétez 10\u00A0fois.',
        'Les exercices de renforcement comme les montées sur pointes conviennent mieux plus tôt dans la journée. La liste complète des exercices se trouve sur la page [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
        'Si votre douleur n’est pas une fasciite plantaire ou si vous n’êtes pas sûr, s’étirer le soir n’est pas la première étape. Obtenir le bon diagnostic l’est.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire (assis)',
          evidence: { level: 'strong', why: 'Note A de la recommandation. L’essai randomisé de DiGiovanni 2003, sur 101\u00A0personnes (82 suivies jusqu’au bout), a trouvé l’étirement ciblé du fascia supérieur à l’étirement du mollet pour la douleur aux premiers pas.' },
          dose: '10\u00A0maintiens de 10\u00A0secondes, chaque pied',
          how: 'Asseyez-vous au bord du lit. Croisez le pied douloureux sur le genou opposé. Tirez les orteils vers le tibia jusqu’à sentir un étirement le long de la voûte. Tenez 10\u00A0secondes. C’est aussi l’étirement du matin que la recommandation conseille de faire avant que votre pied touche le sol.',
          often: 'Avant de dormir et avant de vous lever le matin',
          feel: 'Un étirement franc le long de la voûte, pas une douleur vive',
          stop: 'Une douleur vive au talon, ou toute brûlure ou tout fourmillement',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à sentir la voûte',
          alt: 'Une personne assise qui tire les orteils d’un pied vers le tibia, le fascia plantaire mis en évidence le long de la voûte',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'strong', why: 'Note A de la recommandation pour la fasciite plantaire, dans le cadre d’un programme d’étirement du mollet.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur. Reculez un pied, gardez la jambe arrière tendue, talon au sol. Penchez-vous en avant jusqu’à sentir un étirement dans le haut du mollet. Tenez 30\u00A0secondes. Changez de côté.',
          often: 'Avant de dormir si la raideur du mollet contribue à la douleur du matin',
          feel: 'Un étirement dans le haut du mollet, pas au talon',
          stop: 'Une douleur au talon ou au tendon d’Achille qui ne passe pas en quelques secondes',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, penchez-vous en avant',
          alt: 'Une personne appuyée contre un mur, une jambe tendue derrière, les muscles du mollet mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003],
    },
    {
      h2: 'En quoi la douleur au talon la nuit diffère-t-elle de celle du matin\u00A0?',
      paragraphs: [
        'La douleur au talon le matin et la douleur la nuit se ressemblent, mais orientent dans des directions différentes. La douleur du matin, cette traction vive aux premiers pas qui s’estompe après quelques minutes de marche, est la présentation typique de la fasciite plantaire. Le tissu s’est raidi pendant la nuit et s’étire brusquement sous la charge.',
        'La douleur nocturne, c’est-à-dire une douleur qui arrive ou s’aggrave quand vous êtes au lit sans charge sur le pied, évoque autre chose qu’une simple raideur du fascia. Les problèmes les plus associés à une vraie douleur au repos sont\u00A0:',
        {
          list: [
            'Les fractures de fatigue.',
            'Les compressions nerveuses.',
            'Les rhumatismes inflammatoires.',
            'Rarement, les tumeurs osseuses ou les infections.',
          ],
        },
        'Si vous ne savez pas quel schéma est le vôtre, un test simple\u00A0: **la douleur s’améliore-t-elle après 5 à 10\u00A0minutes de marche\u00A0?** Si oui, le schéma de la fasciite plantaire est plus probable, et la page [douleur au talon au réveil](/fr/douleur-talon-au-reveil/) est un meilleur point de départ. Si non, continuez ici et envisagez de consulter un professionnel de santé.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain],
    },
  ],
  faq: [
    {
      q: 'Une douleur au talon la nuit, est-ce grave\u00A0?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Ça peut l’être. Une douleur au repos ou qui vous réveille est un schéma d’alerte. Les fractures de fatigue du calcanéum, les compressions nerveuses (canal tarsien ou nerf de Baxter) et les rhumatismes inflammatoires peuvent tous donner une douleur au talon la nuit. Ces problèmes demandent un professionnel de santé pour le diagnostic et la prise en charge. Ne supposez pas que c’est une fasciite plantaire si la douleur ne suit pas le schéma typique des premiers pas.',
    },
    {
      q: 'Pourquoi j’ai mal au talon quand je suis allongé\u00A0?',
      cites: [CITE.tuHeelPain],
      a: 'Une douleur au talon en position allongée, sans charge sur le pied, peut venir d’une compression nerveuse, d’une fracture de fatigue ou d’une inflammation. La fasciite plantaire donne parfois une gêne quand le pied pointe vers le bas au lit, mais c’est une raideur liée à la position, pas une vraie douleur au repos. Des brûlures ou des fourmillements au repos orientent vers un problème de nerf.',
    },
    {
      q: 'Les attelles de nuit aident-elles la douleur au talon la nuit\u00A0?',
      cites: [CITE.guideline],
      a: 'Les attelles de nuit maintiennent la cheville à 90\u00A0degrés pour empêcher le mollet et le fascia de se raccourcir. La recommandation de 2023 sur la douleur au talon les note **A** pour une fasciite plantaire persistante. Elles aident la raideur du matin. Elles n’agissent pas sur une douleur nerveuse, une fracture de fatigue ou une maladie inflammatoire.',
    },
    {
      q: 'Comment savoir si c’est une fasciite plantaire ou une fracture de fatigue\u00A0?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'La douleur de la fasciite plantaire est la plus vive au premier pas et s’améliore à la marche. Une fracture de fatigue du calcanéum s’aggrave en général avec l’activité prolongée et ne se calme pas à l’échauffement. Le test de compression, qui consiste à presser les deux côtés de l’os du talon, évoque davantage une fracture qu’une fasciite. Une IRM est souvent nécessaire, car les radios simples peuvent passer à côté d’une fracture débutante.',
    },
    {
      q: 'La fasciite plantaire peut-elle faire mal la nuit\u00A0?',
      cites: [CITE.guideline],
      a: 'La fasciite plantaire peut faire mal le soir, après une longue journée debout ou à marcher. C’est de la charge accumulée, pas une douleur au repos. Le pied retombe aussi en position pointée pendant le sommeil, ce qui raccourcit le fascia et peut créer une gêne. Si la douleur vous réveille vraiment, ce schéma n’est pas typique d’une fasciite et doit être vérifié.',
    },
    {
      q: 'C’est quoi la compression du nerf de Baxter\u00A0?',
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
      a: 'Le nerf de Baxter est la première branche du nerf plantaire latéral. Quand il est comprimé près de l’intérieur du talon, il donne une douleur vive ou des brûlures, parfois avec un engourdissement. Une revue de 2025 indique qu’il pourrait expliquer jusqu’à 20\u00A0% des douleurs chroniques du talon (Tedeschi, 2025). Contrairement à la fasciite plantaire, la douleur s’aggrave souvent en fin de journée ou au repos et ne se calme pas avec le mouvement.',
    },
    {
      q: 'Faut-il voir un médecin pour une douleur au talon la nuit\u00A0?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Oui. Une douleur au talon la nuit qui vous réveille, ne s’améliore pas avec le mouvement, s’accompagne de brûlures ou de fourmillements, ou touche les deux talons avec une raideur prolongée doit être examinée par un professionnel de santé. Ces schémas peuvent signaler une fracture de fatigue, une compression nerveuse ou une maladie inflammatoire que les exercices seuls ne régleront pas.',
    },
    {
      q: 'Que mettre sur le talon quand il fait mal la nuit\u00A0?',
      a: 'Le froid est la première chose la plus courante\u00A0: une poche de glace ou une bouteille d’eau congelée posée sur la zone douloureuse peut calmer la douleur de surface. Rien de tout cela n’agit sur une fracture de fatigue, une compression nerveuse ou un rhumatisme inflammatoire, les problèmes les plus liés à une vraie douleur nocturne. Le froid ne remplace donc pas la recherche de la cause.',
    },
    {
      q: 'Que ne faut-il pas faire quand le talon fait mal la nuit\u00A0?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Ne supposez pas que c’est une fasciite plantaire pour continuer vos activités malgré la douleur si elle ne suit pas le schéma «\u00A0premiers pas puis mieux\u00A0». N’ignorez pas une douleur qui vous réveille, s’aggrave à la marche prolongée, ou s’accompagne de brûlures, de fourmillements ou d’un gonflement. Soigner seul une douleur au repos avec des étirements ou une attelle de nuit peut retarder le diagnostic d’une fracture de fatigue, d’une compression nerveuse ou d’un rhumatisme inflammatoire.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur vous réveille ou est présente au repos, sans charge sur le pied',
      'la douleur s’aggrave à la marche prolongée et ne se calme pas après quelques minutes',
      'vous ressentez des brûlures, des fourmillements ou un engourdissement au talon ou sous la plante',
      'le «\u00A0test de compression\u00A0» (presser les deux côtés de l’os du talon l’un vers l’autre) reproduit la douleur',
      'les deux talons font mal, surtout avec une raideur du matin prolongée (plus de 30\u00A0minutes) ou une douleur dans d’autres articulations',
      'la douleur a suivi une hausse brusque du kilométrage en course, un passage à des surfaces plus dures ou un traumatisme',
      'le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'la douleur est présente depuis plus de six semaines et ne s’améliore pas',
    ],
  },
  program: {
    h2: 'Quand l’exercice est la bonne étape',
    text: 'Si un professionnel de santé a confirmé une fasciite plantaire et écarté les problèmes ci-dessus, l’exercice est l’approche la mieux notée par la recommandation. Walkito construit un plan quotidien autour de la mise en charge du mollet et du fascia, en commençant par des étirements et en progressant vers des exercices de renforcement à votre rythme.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un test vérifie l’endurance du mollet et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic. Si votre douleur au talon est pire la nuit ou au repos, consultez un professionnel de santé avant de commencer à charger le pied.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Douleur au talon la nuit',
  campaign: 'guide-heel-night-fr',
};
