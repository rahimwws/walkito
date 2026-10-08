import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-short-foot.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const EX_SHORT_FOOT_FR: Guide = {
  lang: 'fr',
  page: 'exShortFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercice du pied court\u00A0: technique et progression',
  description:
    'Comment faire l’exercice du pied court\u00A0: consignes, séries et répétitions, progression assis puis debout, erreurs à éviter, ce que montre la recherche.',
  h1: 'Exercice du pied court\u00A0: comment le faire, séries et progression',
  lede:
    'L’exercice du pied court entraîne les petits muscles à l’intérieur du pied à tenir la voûte levée sans recroqueviller les orteils. Vous tirez la base des orteils vers le talon pour que la voûte se raccourcisse et se soulève. C’est l’exercice qu’une revue narrative de 2015 a présenté comme la base de l’entraînement du «\u00A0foot core\u00A0», le gainage du pied, et il figure dans la plupart des programmes pour pieds plats et fasciite plantaire qui visent les muscles intrinsèques du pied.',
  takeaways: [
    'Une étude IRM de 2016 sur 8\u00A0sportifs a montré que l’exercice du pied court produisait l’activation moyenne la plus élevée (jusqu’à 34,9\u00A0%) dans trois des quatre muscles plantaires intrinsèques testés, par rapport à l’écartement des orteils, à l’extension du gros orteil et à l’extension des quatre autres orteils (Gooding et coll., 2016).',
    'Des mesures EMG ont montré que l’abducteur de l’hallux, le muscle qui soutient l’intérieur de la voûte, était plus de quatre fois plus actif pendant l’exercice du pied court que pendant le ramassage de serviette avec les orteils (Jung et coll., 2011).',
    'Une méta-analyse de 2024 sur l’entraînement du pied court chez des personnes aux pieds plats a montré que les programmes de plus de six semaines amélioraient l’affaissement du naviculaire, mais que les programmes plus courts n’atteignaient pas la significativité (Cheng et coll., 2024).',
    'Des adultes en bonne santé qui ont fait quatre semaines d’exercices du pied court ont plus amélioré leur équilibre dynamique qu’un groupe qui ramassait une serviette avec les orteils pendant la même durée (Lynn et coll., 2012).',
  ],
  toc: false,
  sections: [
    {
      h2: 'Qu’est-ce que l’exercice du pied court\u00A0?',
      paragraphs: [
        'L’exercice du pied court est une contraction isométrique des muscles intrinsèques du pied. Vous réduisez la distance entre la base des orteils et le talon en les rapprochant, ce qui soulève la voûte. Les orteils restent à plat et détendus tout du long. Une revue de 2015 de McKeon et coll. en a fait l’exercice central de leur modèle du «\u00A0foot core\u00A0», en comparant les muscles intrinsèques du pied aux muscles profonds du tronc.',
        'On l’appelle aussi dôme de la voûte, dôme du pied ou exercice de raccourcissement du pied. Il diffère du ramassage de serviette ou de la flexion des orteils, car ces exercices utilisent la flexion des orteils, qui fait travailler les longs fléchisseurs des orteils, des muscles qui descendent depuis la jambe. L’exercice du pied court vise à isoler les muscles situés entièrement dans le pied.',
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: 'Comment faire l’exercice du pied court\u00A0?',
      paragraphs: [
        'Asseyez-vous sur une chaise, pieds nus à plat au sol. Placez le pied pour que le talon, la base des orteils et les cinq orteils reposent au sol. Sans recroqueviller ni crisper les orteils, essayez de tirer la base des orteils vers le talon. Votre voûte va se soulever. Tenez cette contraction, puis relâchez.',
        'Pensez à rendre le pied plus court et plus haut, plutôt que plus large et plus plat. Les orteils ne doivent ni appuyer dans le sol, ni se soulever, ni se replier dessous. Si vous voyez les orteils se crisper, vous utilisez les mauvais muscles. Commencez par placer un doigt sous la voûte pour la sentir se soulever.',
      ],
      exercises: [
        {
          name: 'Pied court, assis',
          evidence: { level: 'moderate', why: 'Fait partie du programme testé dans un essai randomisé de 2023 sur les pieds plats (Brijwasi 2023). Testé seul, l’exercice n’a donné de résultats significatifs qu’au-delà de six semaines (méta-analyse de 2024).' },
          dose: 'Walkito commence à 3\u00A0séries de 10, tenir 5\u00A0secondes, chaque pied',
          how: 'Asseyez-vous, pieds à plat au sol. Tirez la base des orteils vers le talon pour que la voûte se soulève. Gardez les orteils détendus et à plat. Tenez cinq secondes, puis relâchez.',
          often: 'À chaque séance, tant que c’est votre niveau',
          feel: 'La voûte qui se soulève, orteils détendus',
          stop: 'La douleur atteint 6/10',
          media: 'short_foot_seated',
          caption: 'Pied court, assis\u00A0: tirez la base des orteils vers le talon pour soulever la voûte',
          alt: 'Une personne assise qui contracte la voûte d’un pied, les orteils à plat au sol',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Quels muscles l’exercice du pied court fait-il travailler\u00A0?',
      paragraphs: [
        'L’exercice du pied court vise les muscles plantaires intrinsèques\u00A0: l’abducteur de l’hallux, le court fléchisseur des orteils, le carré plantaire et l’abducteur du petit orteil. Ces muscles sont situés entièrement dans le pied et soutiennent la voûte longitudinale interne par en dessous.',
        'Une étude IRM de 2016 de Gooding et coll. a mesuré l’activation musculaire après 40\u00A0répétitions de quatre exercices du pied différents chez 8\u00A0sportifs universitaires. L’exercice du pied court a produit l’activation moyenne la plus élevée dans l’abducteur du petit orteil (34,9\u00A0%), l’abducteur de l’hallux (29,7\u00A0%) et le court fléchisseur des orteils (24,8\u00A0%). Une étude EMG antérieure de Jung et coll. (2011) a montré que l’activité de l’abducteur de l’hallux était plus de quatre fois plus forte pendant l’exercice du pied court que pendant le ramassage de serviette avec les orteils.',
        'C’est pourquoi le pied court est considéré comme un meilleur exercice que le ramassage de serviette pour viser précisément les muscles intrinsèques. Le ramassage de serviette sollicite les longs fléchisseurs des orteils, les muscles extrinsèques qui vont de la jambe aux orteils. L’exercice du pied court laisse ces muscles extrinsèques plus au repos.',
      ],
      cites: [CITE.gooding, CITE.jung],
    },
    {
      h2: 'Comment progresser d’assis à debout, puis sur une jambe\u00A0?',
      paragraphs: [
        'Une fois que les maintiens du pied court assis vous ont paru faciles deux séances de suite, l’étape suivante se fait debout sur les deux pieds. La même contraction doit maintenant porter le poids du corps. Ensuite, le pied court sur une jambe ajoute un travail d’équilibre et révèle toute différence entre votre côté gauche et votre côté droit.',
        'Chaque version est le même mouvement. Seule la charge change. Debout, la demande sur les muscles de la voûte double. Sur une jambe, elle double encore à peu près, et il faut en plus stabiliser la cheville.',
      ],
      exercises: [
        {
          name: 'Pied court, debout',
          evidence: { level: 'moderate', why: 'Fait partie du programme testé dans un essai randomisé de 2023 sur les pieds plats (Brijwasi 2023). Pas testé seul.' },
          dose: 'Walkito commence à 3\u00A0séries de 10, tenir 5\u00A0secondes, deux pieds',
          how: 'Tenez-vous debout, les deux pieds au sol. Tirez la base des orteils de chaque pied vers le talon pour que les deux voûtes se soulèvent. Les orteils restent à plat et allongés. Seule la voûte bouge.',
          often: 'À chaque séance, une fois le pied court assis devenu facile',
          feel: 'La voûte qui travaille en portant votre poids',
          stop: 'La douleur atteint 6/10',
          media: 'short_foot_double',
          caption: 'Pied court, debout\u00A0: orteils à plat et allongés, seule la voûte monte',
          alt: 'Une personne debout, les deux voûtes nettement soulevées et les orteils à plat',
        },
        {
          name: 'Pied court, sur une jambe',
          evidence: { level: 'moderate', why: 'Fait partie du programme testé dans un essai randomisé de 2023 sur les pieds plats (Brijwasi 2023). Pas testé seul.' },
          dose: 'Walkito commence à 3\u00A0séries de 10, tenir 5\u00A0secondes, chaque pied',
          how: 'Tenez-vous sur un pied. Soulevez la voûte de la même façon qu’avant. Gardez le gros orteil légèrement appuyé au sol. Si le gros orteil se soulève, la voûte compense au lieu de travailler.',
          often: 'À chaque séance, une fois le pied court debout devenu facile',
          feel: 'Un travail plus dur dans la voûte, le gros orteil appuyé au sol',
          stop: 'La douleur atteint 6/10',
          media: 'short_foot_single',
          caption: 'Pied court, sur une jambe\u00A0: soulevez la voûte, le gros orteil reste au sol',
          alt: 'Une personne debout sur un pied, la voûte soulevée et le gros orteil à plat',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Quelles erreurs rendent l’exercice du pied court moins efficace\u00A0?',
      paragraphs: [
        'L’erreur la plus fréquente est de recroqueviller les orteils. Si les orteils se plient et agrippent le sol, l’exercice devient une flexion des orteils et les fléchisseurs extrinsèques prennent le relais. Gardez les orteils allongés et détendus. Certaines personnes trouvent utile de lever brièvement les orteils, de contracter la voûte, puis de reposer les orteils.',
        'La deuxième erreur est de pousser le pied vers l’extérieur au lieu de le raccourcir. Le mouvement doit aller droit vers l’arrière, de la base des orteils vers le talon, pas sur le côté. La troisième est de bloquer sa respiration. Respirez normalement pendant chaque maintien.',
        'Si vous ne sentez pas du tout la voûte se soulever, placez un doigt ou un stylo sous la voûte. Le but est de sentir la voûte appuyer contre cet objet. Il faut parfois plusieurs séances avant que le cerveau apprenne à activer ces muscles à la demande. Ce temps d’apprentissage est normal.',
      ],
    },
    {
      h2: 'Que dit la recherche sur les exercices du pied court\u00A0?',
      keyFact: 'Dans un essai de 2023 sur 52\u00A0personnes aux pieds plats souples, un programme de six semaines associant pied court, travail de la cheville, renforcement de la hanche et étirements a modifié la forme de la voûte davantage que dans un groupe témoin (Brijwasi et coll., 2023).',
      paragraphs: [
        'Les données les plus solides viennent de programmes qui associent l’exercice du pied court à d’autres exercices, pas du pied court seul. Dans un essai de 2023 sur 52\u00A0personnes aux pieds plats souples, Brijwasi et coll. ont testé un programme de six semaines d’exercices du pied court, de travail de la cheville, de renforcement de la hanche et d’étirements. Le programme a modifié deux mesures de la forme de la voûte davantage que dans le groupe témoin.',
        'Une méta-analyse de 2024 de Cheng et coll. a étudié l’entraînement du pied court seul sur plusieurs essais. Les résultats regroupés ne montraient aucune amélioration significative de l’affaissement du naviculaire ni du Foot Posture Index dans l’ensemble. Mais quand les auteurs ont limité l’analyse aux programmes de plus de six semaines, l’affaissement du naviculaire s’est nettement amélioré. La durée de l’entraînement compte.',
        'Pour l’équilibre, un essai randomisé de 2012 de Lynn et coll. a comparé quatre semaines d’entraînement du pied court à quatre semaines de ramassage de serviette chez des adultes en bonne santé. Le groupe du pied court a plus amélioré son équilibre dynamique que le groupe de la serviette.',
        'Aucune de ces études n’est grande. Les données soutiennent l’exercice du pied court comme partie d’un programme plus large de renforcement du pied, surtout pour les pieds plats et la douleur de voûte. Ce n’est pas une solution à lui seul, et il n’a pas été testé seul comme traitement principal de la fasciite plantaire. Pour la liste complète des exercices, voir [exercices pour pieds plats](/fr/exercices-pieds-plats/) ou [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.lynn],
    },
  ],
  faq: [
    {
      q: 'Combien de temps faut-il pour que les exercices du pied court marchent\u00A0?',
      cites: [CITE.cheng],
      a: 'Une méta-analyse de 2024 a montré que les programmes d’entraînement du pied court de moins de six semaines ne modifiaient pas nettement la hauteur de la voûte, mais que ceux de plus de six semaines amélioraient l’affaissement du naviculaire (Cheng 2024). Comptez au moins six à huit semaines de pratique régulière avant de voir des changements mesurables.',
    },
    {
      q: 'L’exercice du pied court, c’est la même chose que le dôme de la voûte\u00A0?',
      a: 'Oui. Exercice du pied court, dôme de la voûte et dôme du pied décrivent tous le même mouvement\u00A0: tirer la base des orteils vers le talon pour soulever la voûte, sans plier les orteils. Le nom «\u00A0pied court\u00A0» vient du pied qui raccourcit visiblement quand la voûte se soulève.',
    },
    {
      q: 'Peut-on faire l’exercice du pied court pour une fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'L’exercice du pied court ne fait pas partie de la principale recommandation sur la fasciite plantaire, centrée sur les étirements et les montées sur pointes avec charge. Mais renforcer les muscles intrinsèques du pied peut aider au sein d’un programme plus large. Voir [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) pour les exercices soutenus par la recommandation.',
    },
    {
      q: 'Le pied court est-il meilleur que le ramassage de serviette avec les orteils\u00A0?',
      cites: [CITE.jung, CITE.lynn],
      a: 'Pour viser précisément les muscles intrinsèques du pied, oui. Les mesures EMG montrent que l’abducteur de l’hallux est plus de quatre fois plus actif pendant l’exercice du pied court que pendant le ramassage de serviette (Jung 2011). Un essai randomisé séparé a montré que le groupe du pied court avait plus amélioré son équilibre que le groupe de la serviette après quatre semaines (Lynn 2012). Le ramassage de serviette garde un rôle comme exercice de départ plus simple.',
    },
    {
      q: 'Combien de séries et de répétitions du pied court faire\u00A0?',
      cites: [CITE.brijwasi],
      a: 'Walkito commence à 3\u00A0séries de 10\u00A0répétitions, avec un maintien de 5\u00A0secondes, pour chaque pied. L’essai de 2023 sur les pieds plats utilisait des valeurs proches. Augmentez la difficulté en passant d’assis à debout puis sur une jambe, plutôt qu’en ajoutant des répétitions.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'votre douleur de voûte a suivi une blessure soudaine ou un claquement, ce qui peut indiquer une déchirure du fascia plantaire',
      'vous avez des engourdissements, des fourmillements ou des brûlures dans le pied, ce qui peut évoquer une atteinte nerveuse',
      'un pied est rigide et la voûte ne se soulève pas du tout quand vous montez sur la pointe des pieds, ce qui peut nécessiter une imagerie',
      'la douleur s’aggrave d’une semaine à l’autre malgré un exercice régulier',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito construit un plan qui inclut l’exercice du pied court en trois étapes\u00A0: assis, debout, puis sur une jambe. Chaque étape s’ouvre une fois que deux séances au niveau actuel vous ont paru faciles. Vous choisissez des séances de 3, 5 ou 10\u00A0minutes, et un test tous les 14\u00A0jours suit l’évolution de votre temps de maintien de la voûte.',
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Exercice du pied court',
  campaign: 'ex-short-foot-fr',
};
