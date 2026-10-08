import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub : Pieds plats (FR) ────────────────────────────────────────────
 *
 * Translated from `articles/hub-flat-feet.ts`, written around the French
 * queries «pieds plats», «pied plat adulte», «voûte plantaire affaissée».
 * French (France) with «vous». Figures, grades and qualifiers are identical
 * to the English page. No new citations.
 */

export const HUB_FLAT_FEET_FR: Guide = {
  lang: 'fr',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Pieds plats\u00A0: causes, types et quand s’inquiéter',
  description:
    'Pieds plats\u00A0: souples ou rigides, problèmes possibles, pied plat acquis de l’adulte, voûte affaissée, exercices et quand consulter.',
  h1: 'Pieds plats\u00A0: ce que c’est, les causes et quand s’en occuper',
  lede:
    'Avoir les pieds plats veut dire que la voûte du pied est plus basse que d’habitude ou touche le sol quand vous êtes debout. La plupart des pieds plats sont souples, c’est-à-dire que la voûte apparaît quand le pied ne touche plus le sol, et la plupart ne font pas mal du tout. Une plus petite partie sont rigides ou apparaissent à l’âge adulte à cause d’un tendon qui s’affaiblit, et ce sont ces cas qui méritent plus d’attention.',
  takeaways: [
    'Une revue systématique de 2023 portant sur 12\u00A0études de population a estimé la fréquence globale des pieds plats à environ 15,6\u00A0%, même si ce chiffre varie beaucoup selon l’âge, la méthode de mesure et la population (Salinas-Torres et coll., 2023).',
    'La plupart des pieds plats sont souples et présents toute la vie. Un pied plat rigide, qui reste plat même quand le pied est soulevé, est structurel et ne changera pas avec l’exercice.',
    'La Framingham Foot Study, sur environ 1\u00A0900\u00A0adultes, n’a trouvé aucun lien entre une posture de pied plat et le mal de bas du dos. Elle a trouvé un petit lien chez les femmes entre un pied qui s’affaisse vers l’intérieur à la marche et le mal de dos, et aucun chez les hommes (Menz et coll., 2013).',
    'Le pied plat acquis de l’adulte, le plus souvent dû à l’affaiblissement du tendon tibial postérieur, peut entraîner une douleur et un gonflement à l’intérieur de la cheville et un affaissement progressif de la voûte (Ling et Lui, 2017).',
    'Dans un essai sur 52\u00A0personnes aux pieds plats souples, six semaines d’exercices combinés ont modifié la forme de la voûte davantage que dans un groupe témoin. L’essai a mesuré la forme de la voûte, pas la douleur (Brijwasi et Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce que les pieds plats\u00A0?',
      keyFact: 'Une revue systématique de 2023 regroupant 12\u00A0études de population sur environ 16\u00A0000\u00A0personnes a trouvé que les pieds plats touchent environ 15,6\u00A0% des gens dans l’ensemble, plus souvent avec un IMC plus élevé et un âge plus avancé (Salinas-Torres et coll., 2023).',
      paragraphs: [
        'La voûte du pied, appelée arche longitudinale médiale, est formée par les os, les ligaments et les tendons de l’intérieur du pied. Sur un pied plat, cette voûte est plus basse ou absente quand vous êtes debout. Le terme médical est pes planus.',
        'Les pieds plats sont fréquents. Une revue systématique de 2023 a regroupé 12\u00A0études de population portant sur environ 16\u00A0000\u00A0personnes et a rapporté une fréquence globale de 15,6\u00A0%. Chez les adultes seuls, les estimations vont d’environ 5 à 27\u00A0% selon la population et la méthode de mesure. Un IMC plus élevé et un âge plus avancé sont associés à une fréquence plus élevée.',
        '«\u00A0Voûte affaissée\u00A0» est un nom courant pour les pieds plats. La plupart du temps, les deux expressions veulent dire la même chose. Parfois, «\u00A0voûte affaissée\u00A0» désigne plus précisément une voûte qui est descendue à l’âge adulte, ce qui a une autre cause, présentée plus bas.',
        'Avoir les pieds plats ne veut pas dire automatiquement que quelque chose ne va pas. Beaucoup de personnes avec une voûte basse marchent, courent et restent debout sans aucun symptôme. Les questions qui comptent sont de savoir si le pied plat est souple ou rigide, et s’il fait mal.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: 'Comment savoir si vos pieds plats sont souples ou rigides\u00A0?',
      keyFact: 'Dans un essai sur 52\u00A0personnes aux pieds plats souples, six semaines de pied court, de travail de la cheville, de la hanche et d’étirements ont amélioré deux mesures de la forme de la voûte davantage que dans un groupe témoin (Brijwasi et Borkar, 2023).',
      paragraphs: [
        'Un pied plat souple est un pied dont la voûte s’aplatit sous votre poids mais revient quand le pied ne touche plus le sol. La plupart des pieds plats sont de ce type. Un pied plat rigide reste plat, que vous soyez debout dessus ou non.',
        'Une vérification rapide\u00A0: asseyez-vous et regardez l’intérieur de votre pied. Si vous voyez une voûte, mettez-vous debout sur les deux pieds. Si la voûte disparaît debout alors qu’elle était là assis, le pied plat est souple. Autre façon\u00A0: montez sur la pointe des pieds. Si la voûte apparaît quand vous montez, il est souple.',
        'La différence compte, car l’exercice peut agir sur une voûte souple. Dans un essai sur 52\u00A0personnes aux pieds plats souples, six semaines d’exercices du pied court, de travail de la cheville, de renforcement de la hanche et d’étirements ont modifié deux mesures de la forme de la voûte davantage que dans un groupe témoin. Un pied plat rigide est structurel (souvent à cause d’une coalition tarsienne, un pont osseux entre des os du pied) et l’exercice ne changera pas sa forme. Un pied plat rigide qui fait mal demande en général l’avis d’un professionnel de santé.',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Les pieds plats sont-ils vraiment un problème\u00A0?',
      keyFact: 'La Framingham Foot Study, sur environ 1\u00A0900\u00A0adultes, n’a trouvé aucun lien entre une posture de pied plat et le mal de dos, mais une marche en pronation montrait un petit lien chez les femmes seulement (Menz et coll., 2013).',
      paragraphs: [
        'Pour la plupart des gens, non. Un pied plat souple qui ne fait pas mal et ne limite pas ce que vous faites est une variation normale de la forme du pied, pas un problème à régler.',
        'L’inquiétude la plus fréquente concerne le mal de dos. La plus grande étude sur le sujet, la Framingham Foot Study, a porté sur environ 1\u00A0900\u00A0adultes. Elle n’a trouvé aucune association entre une posture de pied plat et le mal de bas du dos. Chez les femmes, un pied qui s’affaissait vers l’intérieur à la marche (marche en pronation) montrait un petit lien avec le mal de dos, mais la posture du pied elle-même, plat ou non, n’en montrait pas. Chez les hommes, ni la posture ni la marche n’étaient liées au mal de dos.',
        'Les pieds plats peuvent modifier la façon dont la charge traverse la jambe. Certains coureurs aux pieds très en pronation développent des blessures de surcharge à la cheville ou au genou, mais le lien entre posture du pied et blessure est plus faible que beaucoup ne le pensent. Une revue de 2024 sur l’entraînement du pied court chez les personnes aux pieds plats n’a trouvé aucun changement net de la posture du pied dans l’ensemble, et un changement sur une mesure de l’affaissement de la voûte seulement dans les programmes de plus de six semaines. L’essai comme la revue ont mesuré la forme de la voûte, pas la douleur ni le taux de blessures.',
        'Les cas où les pieds plats comptent vraiment sont présentés plus bas\u00A0: le pied plat acquis de l’adulte dû à un tendon qui s’affaiblit, et les pieds plats qui s’accompagnent de douleur, de gonflement ou d’un changement soudain de la hauteur de la voûte.',
      ],
      cites: [CITE.menz, CITE.cheng],
    },
    {
      h2: 'Qu’est-ce que le pied plat acquis de l’adulte\u00A0?',
      paragraphs: [
        'Le pied plat acquis de l’adulte est un problème où une voûte jusque-là normale s’affaisse à l’âge adulte, en général parce que le tendon tibial postérieur (le tendon qui soutient la voûte depuis l’intérieur de la cheville) s’affaiblit et ne peut plus faire son travail. Le nom clinique de ce problème de tendon est la dysfonction du tendon tibial postérieur.',
        'Le tendon tibial postérieur passe derrière la malléole interne et s’attache aux os qui forment la voûte. Quand il s’étire ou se déchire, la voûte descend, le talon bascule vers l’extérieur, et l’avant du pied peut commencer à s’écarter vers l’extérieur. Une douleur et un gonflement le long de l’intérieur de la cheville sont des signes précoces fréquents. Un test de montée sur pointe sur un pied, où vous essayez de vous tenir sur un pied et de monter sur la pointe, peut être difficile ou douloureux du côté atteint.',
        'Une synthèse publiée dans The Open Orthopaedics Journal décrit quatre stades\u00A0: au stade I, le tendon est enflammé mais il n’y a pas de déformation visible\u00A0; au stade II, il y a un pied plat souple qu’on peut encore corriger à la main\u00A0; au stade III, la déformation est rigide et ne se corrige plus à la main\u00A0; et au stade IV, l’articulation de la cheville est atteinte en plus de la déformation rigide.',
        'Une revue systématique sur l’exercice dans la dysfonction du tendon tibial postérieur a trouvé peu de preuves issues d’essais randomisés. Elle a noté que les recommandations cliniques conseillent une prise en charge non chirurgicale, avec exercices, orthèses et adaptation de l’activité, pour les premiers stades (stades I et II), mais que les essais de bonne qualité sont peu nombreux. Les stades plus avancés demandent souvent l’avis d’un professionnel de santé et peuvent passer par une orthèse de cheville ou la chirurgie.',
        'Si une voûte est descendue à l’âge adulte, avec une douleur ou un gonflement à l’intérieur de la cheville, consultez un professionnel de santé avant de commencer un programme d’exercices. Ce n’est pas la même chose qu’un pied plat souple présent depuis toujours.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quels symptômes demandent de s’occuper des pieds plats\u00A0?',
      paragraphs: [
        'La plupart des pieds plats ne donnent aucun symptôme et ne demandent aucun bilan médical. Un pied plat souple présent depuis l’enfance et qui ne fait pas mal est une variation normale de la forme du pied. Voici les schémas qui méritent d’être vérifiés avec un professionnel de santé\u00A0:',
      ],
      bullets: [
        'Une douleur le long de l’intérieur de la cheville ou sous la voûte qui ne se calme pas au repos.',
        'Un gonflement à l’intérieur de la cheville, surtout s’il est apparu récemment.',
        'Une voûte qui s’est aplatie à l’âge adulte alors que l’autre non.',
        'Du mal à vous tenir sur un pied et à monter sur la pointe du côté atteint.',
        'Une douleur au genou, au tibia ou à la hanche que vous pensez liée à la façon dont le pied se pose.',
        'Un pied plat rigide (la voûte reste plate même quand le pied ne touche plus le sol).',
        'Des engourdissements, des fourmillements ou une sensation d’instabilité de la cheville.',
      ],
    },
    {
      h2: 'Les chaussures et les semelles aident-elles les pieds plats\u00A0?',
      paragraphs: [
        'Des chaussures qui soutiennent le pied, avec une semelle intermédiaire ferme et un peu de soutien de voûte, peuvent rendre la station debout et la marche plus confortables pour les personnes aux pieds plats. Elles ne changent pas la voûte avec le temps, mais elles réduisent le travail que les muscles de la voûte doivent fournir dans la journée.',
        'Les semelles de soutien de voûte du commerce sont faciles à trouver et peu chères. Les semelles orthopédiques sur mesure, faites à partir d’un moulage de votre pied, coûtent plus cher et sont parfois conseillées en cas de dysfonction du tendon tibial postérieur. Les preuves en faveur des semelles pour les pieds plats en particulier sont plus minces que ce que la plupart des gens pensent. Pour la fasciite plantaire, la recommandation de 2023 sur la douleur au talon déconseille les semelles orthopédiques seules comme approche à court terme (B contre), mais donne un C aux soins combinés qui les incluent.',
        'Si vos pieds plats ne font pas mal, vous n’avez pas besoin de chaussures spéciales. Si la station debout ou la marche fait mal à la voûte ou à la cheville, une chaussure avec une semelle ferme et un léger soutien de voûte est un premier pas raisonnable, à essayer avant de dépenser plus pour des semelles sur mesure. Les chaussures aux semelles très plates et sans soutien (sandales fines, baskets usées) ont tendance à aggraver la fatigue de la voûte lors des longues journées.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quels exercices aident les pieds plats\u00A0?',
      paragraphs: [
        'L’exercice pour les pieds plats vise les muscles qui soutiennent la voûte par en dessous (les muscles intrinsèques du pied) et les muscles plus haut qui contrôlent la façon dont le pied se pose (le mollet, la hanche). Les meilleures preuves à ce jour viennent d’un essai sur 52\u00A0personnes aux pieds plats souples, où six semaines d’exercices combinés ont modifié la forme de la voûte davantage que dans un groupe témoin. Cet essai comprenait le pied court, des exercices de cheville, le renforcement de la hanche et des étirements, faits ensemble.',
        'Une revue de 2024 sur le pied court seul était moins encourageante\u00A0: elle n’a trouvé aucun changement net dans l’ensemble, et une amélioration sur une mesure de la voûte seulement dans les programmes de plus de six semaines. À retenir\u00A0: un programme combiné marche mieux qu’un exercice isolé, et la patience compte.',
        '[Exercices pour pieds plats](/fr/exercices-pieds-plats/) donne la liste complète des exercices, les doses, ce que chacun doit faire sentir et les preuves derrière chacun. Walkito construit un plan hebdomadaire autour d’un objectif de maintien de la voûte, du pied court assis aux versions debout et sur une jambe, puis ajoute la résistance d’un élastique et le renforcement de la hanche. Chaque exercice a sa propre page\u00A0:',
      ],
      bullets: [
        'L’[exercice du pied court](/fr/exercices/pied-court/) apprend à la voûte à se soulever sans recroqueviller les orteils.',
        '[Ramasser la serviette](/exercises/towel-scrunch/) (en anglais) réveille les petits muscles sous la voûte.',
        '[Écarter les orteils](/exercises/toe-spread/) (en anglais) fait travailler les muscles entre les orteils qui partagent la charge avec la voûte.',
        'L’[inversion avec élastique](/exercises/ankle-inversion-band/) (en anglais) renforce le muscle tibial postérieur, celui-là même qui est en cause dans le pied plat acquis de l’adulte.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Problèmes associés',
      paragraphs: [
        'Les pieds plats peuvent se combiner à d’autres problèmes de pied, surtout quand vous restez longtemps debout ou marchez longtemps. Si la douleur est près du talon et suit le schéma du matin (vive aux premiers pas, qui se calme après quelques minutes), cela correspond plutôt à une fasciite plantaire. Voir [fasciite plantaire](/fr/fasciite-plantaire/) pour une vue d’ensemble.',
      ],
      bullets: [
        'La [douleur sous l’avant-pied](/ball-of-foot-pain/) (en anglais) peut venir d’un excès de charge sur l’avant du pied quand la voûte est basse. Un mollet raide fait passer le poids vers l’avant.',
        '[Mal aux pieds après une journée debout](/feet-hurt-standing-all-day/) (en anglais) présente les exercices et les chaussures qui aident quand une longue journée sur un sol dur laisse la voûte douloureuse.',
        '[Infirmières et douleur aux pieds](/nurses-foot-pain/) (en anglais) traite des gardes de 12\u00A0heures.',
      ],
    },
    {
      h2: 'Tous les guides sur les pieds plats de ce site',
      bullets: [
        '[Exercices pour pieds plats](/fr/exercices-pieds-plats/) donne la liste complète des exercices avec les doses, la progression et les niveaux de preuve.',
        'L’[exercice du pied court](/fr/exercices/pied-court/) détaille le mouvement clé de l’entraînement de la voûte.',
        '[Ramasser la serviette](/exercises/towel-scrunch/) (en anglais) présente l’exercice de la serviette pour les muscles intrinsèques du pied.',
        '[Écarter les orteils](/exercises/toe-spread/) (en anglais) explique comment écarter les orteils pour partager la charge avec la voûte.',
        'L’[inversion avec élastique](/exercises/ankle-inversion-band/) (en anglais) renforce le muscle tibial postérieur.',
        'La [douleur sous l’avant-pied](/ball-of-foot-pain/) (en anglais) parle de la douleur de l’avant du pied, qui rejoint les pieds plats quand la charge passe vers l’avant.',
        '[Mal aux pieds après une journée debout](/feet-hurt-standing-all-day/) (en anglais) présente les exercices et les chaussures pour les longues journées debout.',
        '[Infirmières et douleur aux pieds](/nurses-foot-pain/) (en anglais) traite de la douleur aux pieds propre aux soignants.',
      ],
    },
  ],
  faq: [
    {
      q: 'Faut-il s’inquiéter d’avoir les pieds plats\u00A0?',
      cites: [CITE.menz],
      a: 'Pour la plupart des gens, non. Un pied plat souple qui ne fait pas mal et ne limite pas l’activité est une forme normale, pas un trouble. La Framingham Foot Study, sur environ 1\u00A0900\u00A0adultes, n’a trouvé aucun lien entre une posture de pied plat et le mal de bas du dos (Menz et coll., 2013). Les cas qui demandent de l’attention sont les pieds plats rigides, et les voûtes qui se sont affaissées à l’âge adulte avec douleur ou gonflement.',
    },
    {
      q: 'Quelles sont les causes des pieds plats chez l’adulte\u00A0?',
      cites: [CITE.ling],
      a: 'La plupart des pieds plats de l’adulte sont présents depuis toujours, c’est simplement la façon dont le pied s’est formé. Quand une voûte jusque-là normale s’affaisse à l’âge adulte, la cause la plus fréquente est la dysfonction du tendon tibial postérieur\u00A0: le tendon à l’intérieur de la cheville s’affaiblit, la voûte descend, et une douleur ou un gonflement peuvent suivre (Ling et Lui, 2017). Autres causes\u00A0: une blessure, un rhumatisme inflammatoire et des atteintes nerveuses.',
    },
    {
      q: 'Les pieds plats peuvent-ils donner mal au genou ou à la hanche\u00A0?',
      a: 'Une voûte basse modifie la façon dont la force remonte dans la jambe, et certaines personnes aux pieds très en pronation développent des symptômes de surcharge au genou, au tibia ou à la hanche. Mais le lien est plus faible qu’on ne le croit souvent. Beaucoup de personnes aux pieds plats n’ont aucun problème de genou ou de hanche. Si vous avez les deux, un professionnel de santé peut vérifier s’ils sont liés dans votre cas.',
    },
    {
      q: 'Les pieds plats des enfants disparaissent-ils en grandissant\u00A0?',
      cites: [CITE.salinasTorres],
      a: 'Le plus souvent, oui. Presque tous les tout-petits ont les pieds plats, et la voûte se forme en général vers 6 à 10\u00A0ans. Une revue systématique de 2023 a noté que la fréquence est la plus élevée entre 3 et 5\u00A0ans et diminue jusqu’à l’adolescence (Salinas-Torres et coll., 2023). Un enfant qui a encore des pieds plats souples et indolores à l’adolescence a peu de chances d’avoir un problème à régler.',
    },
    {
      q: 'Faut-il porter des semelles quand on a les pieds plats\u00A0?',
      cites: [CITE.guideline],
      a: 'Si vos pieds plats ne font pas mal, les soutiens de voûte sont facultatifs. Si la station debout ou la marche fait mal à la voûte, une chaussure avec une semelle ferme et un léger soutien de voûte est un premier pas raisonnable. Les semelles sur mesure sont parfois utilisées dans la dysfonction du tendon tibial postérieur, mais les preuves pour les pieds plats seuls sont limitées. La recommandation de 2023 sur la douleur au talon note les semelles seules B contre.',
    },
    {
      q: 'Qu’est-ce que le pied plat acquis de l’adulte\u00A0?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'Le pied plat acquis de l’adulte est un affaissement progressif de la voûte, en général dû à l’affaiblissement du tendon tibial postérieur (Ling et Lui, 2017). Il donne une douleur et un gonflement à l’intérieur de la cheville, du mal à monter sur la pointe d’un pied, et un talon qui bascule vers l’extérieur. Les recommandations cliniques conseillent une prise en charge non chirurgicale aux premiers stades, même si les essais de bonne qualité sont peu nombreux (Ross et coll., 2018).',
    },
    {
      q: 'Peut-on courir avec des pieds plats\u00A0?',
      a: 'Beaucoup de coureurs ont les pieds plats et courent sans problème. Une voûte basse peut augmenter la pronation, que certains coureurs gèrent avec des chaussures de stabilité. Si la course fait mal à la voûte, à la cheville ou au genou et que la douleur ne se calme pas entre les sorties, un professionnel de santé peut vérifier si le pied plat y contribue. Renforcer les muscles de la voûte et de la hanche est une approche raisonnable, que vous changiez de chaussures ou non.',
    },
    {
      q: 'Les pieds plats sont-ils considérés comme un handicap\u00A0?',
      a: 'En général, non. La plupart des pieds plats ne font pas mal et ne limitent pas l’activité, ils ne répondent donc pas seuls aux critères de handicap. Des pieds plats sévères ou rigides qui causent une douleur durable et limitent la marche ou la station debout peuvent parfois justifier une demande, mais cela dépend du dispositif concerné, comme la Social Security aux États-Unis, et de votre état fonctionnel global, pas du seul fait d’avoir les pieds plats.',
    },
    {
      q: 'Les pieds plats sont-ils plus fréquents selon l’origine ethnique\u00A0?',
      cites: [CITE.salinasTorres],
      a: 'Les pieds plats (pes planus) sont plus fréquents dans certains groupes, même si la recherche est limitée. Une revue systématique de 2023 d’études de population a relié l’origine asiatique à un risque plus de deux fois plus élevé de pieds plats, et l’origine blanche à un risque environ deux fois plus faible, dans des comparaisons de sous-groupes séparées. Ce sont des tendances de population, pas une prédiction pour les pieds d’une personne en particulier.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'une voûte s’est aplatie brusquement à l’âge adulte',
      'il y a une douleur ou un gonflement le long de l’intérieur de la cheville',
      'vous ne pouvez pas vous tenir sur un pied et monter sur la pointe du côté atteint',
      'la voûte reste plate même quand le pied ne touche plus le sol (pied plat rigide)',
      'la douleur a commencé après une blessure ou une chute',
      'vous avez des engourdissements, des fourmillements ou une instabilité de la cheville',
      'les deux pieds font mal et d’autres articulations sont raides ou gonflées',
      'la douleur s’aggrave de semaine en semaine malgré l’exercice',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à choisir les exercices de voûte ni le moment de passer à une version plus dure. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour un pied plat souple, cet objectif est le maintien de la voûte\u00A0: tenir la voûte levée 60\u00A0secondes. Si vous avez aussi mal au talon, les matins sans douleur passent en premier.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois le premier objectif atteint), un court test vérifie le maintien de la voûte, l’endurance du mollet et l’équilibre. L’objectif de maintien de la voûte reste jusqu’à ce que vous l’atteigniez, quel que soit le nombre de semaines nécessaire.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si une voûte est descendue à l’âge adulte avec une douleur ou un gonflement, consultez un professionnel de santé avant de commencer.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Pieds plats',
  campaign: 'hub-flat-feet-fr',
};
