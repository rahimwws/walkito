import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Douleur de la voûte plantaire (FR) ────────────────────────────────
 *
 * Translated from `articles/arch-pain.ts`, written around the French queries
 * «douleur voûte plantaire», «mal à la voûte plantaire en marchant»,
 * «douleur arche du pied». French (France) with «vous». Figures, doses,
 * grades and qualifiers are identical to the English page. No new citations.
 */

export const ARCH_PAIN_FR: Guide = {
  lang: 'fr',
  page: 'archPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Douleur à la voûte plantaire\u00A0: causes et exercices',
  description:
    'Mal à la voûte plantaire en marchant\u00A0: fasciite plantaire, pieds plats, tendon tibial postérieur, pied creux ou cause nerveuse. Exercices, quand consulter.',
  h1: 'Douleur à la voûte plantaire\u00A0: les causes et que faire',
  lede:
    'Une douleur à la voûte plantaire vient en général d’un petit nombre de problèmes\u00A0: la fasciite plantaire, les pieds plats ou la voûte affaissée, la dysfonction du tendon tibial postérieur, un pied creux qui amortit mal les chocs, la surcharge, ou une irritation nerveuse comme le syndrome du canal tarsien. La cause change ce qu’il faut faire. Cette page présente les plus fréquentes, renvoie aux guides d’exercices complets quand ils existent, et détaille les exercices qui agissent directement sur la voûte.',
  takeaways: [
    'La fasciite plantaire est la cause unique la plus fréquente de douleur à la voûte et au talon. La recommandation de 2023 sur la douleur au talon note les étirements A et le renforcement B (Koc et coll., 2023).',
    'La dysfonction du tendon tibial postérieur, un affaiblissement du tendon qui soutient la voûte, est la cause la plus fréquente du pied plat acquis de l’adulte (Ross et coll., 2018).',
    'Les pieds plats comme le pied creux modifient la façon dont la force traverse la voûte à la marche, mais les schémas de douleur et les exercices diffèrent.',
    'Une flexion dorsale de cheville réduite, c’est-à-dire un mollet raide, était le facteur de risque indépendant le plus fort de la fasciite plantaire dans une étude cas-témoins de 50\u00A0cas et 100\u00A0témoins (Riddle et coll., 2003).',
    'Une douleur à la voûte accompagnée d’engourdissements, de fourmillements, de brûlures ou d’une faiblesse demande un professionnel de santé pour écarter une compression nerveuse ou une cause neurologique avant l’exercice.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Quelles sont les causes de la douleur à la voûte plantaire\u00A0?',
      paragraphs: [
        'La voûte est soutenue par le fascia plantaire, le tendon tibial postérieur, les muscles intrinsèques du pied, et les os et ligaments du médio-pied. Une douleur à la voûte signifie qu’une ou plusieurs de ces structures subissent plus de contrainte qu’elles ne peuvent en supporter. Les causes les plus fréquentes se répartissent en quelques schémas.',
        '**La fasciite plantaire** est la cause unique la plus fréquente. Le fascia plantaire, une épaisse bande de tissu qui va du talon à la base des orteils, s’irrite sous l’effet d’une charge répétée. La douleur est en général la plus forte près du talon mais s’étend souvent dans la voûte, surtout quand la partie du fascia située sous la voûte est touchée. Le signe typique est une douleur vive aux premiers pas après le repos. Voir [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) et [fasciite plantaire\u00A0: vue d’ensemble](/fr/fasciite-plantaire/) pour le guide complet.',
        '**Les pieds plats et la voûte affaissée** font mal à la voûte en étirant trop le fascia plantaire et le tendon tibial postérieur. Quand la voûte s’affaisse debout et à la marche, ces structures portent une charge qu’elles ne sont pas faites pour porter longtemps. Voir [exercices pour les pieds plats](/fr/exercices-pieds-plats/) et [pieds plats\u00A0: vue d’ensemble](/fr/pieds-plats/).',
        '**La dysfonction du tendon tibial postérieur** est la cause la plus fréquente du pied plat acquis de l’adulte. Le tendon tibial postérieur passe derrière la malléole interne et sous la voûte, qu’il maintient. Quand ce tendon s’affaiblit ou se déchire, la voûte s’affaisse progressivement. La douleur se ressent le long de l’intérieur de la cheville et dans la voûte, et s’aggrave avec l’activité. Une revue systématique de 2018 sur l’exercice dans cette dysfonction a trouvé des preuves limitées mais prometteuses pour le renforcement et les étirements. Voir [dysfonction du tendon tibial postérieur\u00A0: exercices](/fr/dysfonction-tendon-tibial-posterieur/).',
        '**Le pied creux (pes cavus)** fait mal à la voûte d’une autre façon. Une voûte haute et rigide ne fléchit pas assez pour amortir les chocs, donc la force se concentre sous le talon et l’avant-pied au lieu de se répartir sur le médio-pied. Dans un pied creux, la douleur sous la voûte vient souvent d’un fascia plantaire raide. Voir [pied creux\u00A0: exercices](/fr/pied-creux-exercices/).',
        '**La surcharge**, sans problème identifié, est fréquente chez les personnes qui augmentent brusquement leur charge de marche, de course ou de station debout. Les muscles de la voûte et le fascia plantaire ne sont pas encore assez forts pour cette nouvelle demande, et ils protestent. Cela s’améliore en général avec un retour progressif à la charge précédente, plus un renforcement du mollet et de la voûte.',
        '**Une irritation nerveuse** comme le syndrome du canal tarsien peut donner des brûlures, des fourmillements ou un engourdissement le long de la voûte. Le nerf tibial postérieur passe derrière la malléole interne et descend dans la plante du pied. S’il est comprimé, la douleur peut imiter une fasciite plantaire, mais elle s’accompagne de symptômes sensitifs que la fasciite ne donne pas. Cela demande un professionnel de santé.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview, CITE.riddle],
    },
    {
      h2: 'Comment les distinguer\u00A0?',
      paragraphs: [
        'L’endroit de la douleur, le moment de la journée où elle est la pire, et ce qui l’améliore ou l’aggrave donnent les indices les plus clairs.',
      ],
      table: {
        caption: 'Douleur à la voûte plantaire\u00A0: schémas selon la cause',
        head: ['Cause', 'Où ça fait mal', 'Quand c’est pire', 'Indice clé'],
        rows: [
          ['Fasciite plantaire', 'Sous le talon, avec extension dans la voûte', 'Premiers pas après le repos, surtout le matin', 'La douleur vive se calme après quelques minutes de marche'],
          ['Pieds plats / voûte affaissée', 'Le long de l’intérieur de la voûte, parfois à l’intérieur de la cheville', 'Après une longue station debout ou une longue marche', 'La voûte s’affaisse visiblement debout\u00A0; la douleur se calme sans charge'],
          ['Dysfonction du tendon tibial postérieur', 'Intérieur de la cheville et voûte', 'Pendant et après l’activité', 'La montée sur pointes sur une jambe est faible ou douloureuse du côté atteint'],
          ['Pied creux', 'Sous le médio-pied ou le long du bord externe', 'À la marche ou en courant, surtout sur sol dur', 'La voûte reste haute même debout\u00A0; amorti médiocre'],
          ['Surcharge', 'Douleur diffuse de la voûte', 'Après une hausse brusque de la charge', 'Pas de schéma de douleur le matin\u00A0; s’améliore au repos'],
          ['Nerf (canal tarsien)', 'Le long de la voûte, avec fourmillements ou brûlures', 'Variable, parfois au repos', 'Engourdissements, fourmillements ou brûlures que la fasciite plantaire ne donne pas'],
        ],
      },
      after: [
        'Si votre douleur à la voûte suit le schéma de la douleur du matin et se situe près du talon, commencez par la page [fasciite plantaire](/fr/fasciite-plantaire/). Si la voûte s’affaisse quand vous êtes debout, voir [exercices pour les pieds plats](/fr/exercices-pieds-plats/). Si la douleur s’accompagne d’engourdissements ou de brûlures, ou si une montée sur pointes sur une jambe est faible ou impossible d’un côté, consultez un professionnel de santé avant de commencer les exercices.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quels exercices pour la douleur à la voûte plantaire\u00A0?',
      keyFact: 'Dans la recommandation de 2023 sur la douleur au talon, les étirements du fascia plantaire et du mollet obtiennent la meilleure note de preuve, A, et le renforcement une note en dessous, B (Koc et coll., 2023).',
      paragraphs: [
        'Les exercices ci-dessous visent la voûte elle-même et les muscles du mollet qui tirent dessus. Ils conviennent le mieux quand la douleur à la voûte est liée à une fasciite plantaire, à des pieds plats ou à une surcharge générale. En cas de dysfonction du tendon tibial postérieur ou de douleur d’origine nerveuse, c’est un professionnel de santé qui doit orienter le plan d’exercices. Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour la journée.',
        'Ce sont les doses de départ de Walkito, pas celles des protocoles de recherche. La recommandation de 2023 sur la douleur au talon note les étirements du fascia plantaire et du mollet A, et le renforcement B. L’exercice du pied court et le massage avec une balle ont, seuls, des preuves plus minces. [Comment ces guides sont rédigés](/fr/a-propos/).',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note l’étirement du fascia plantaire A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez le pied douloureux sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir un étirement le long de la voûte, pas dans le mollet. Si votre voûte fait le plus mal le matin, faites celui-ci avant que votre pied touche le sol.',
          often: 'La plupart des séances',
          feel: 'Un étirement sous la voûte',
          stop: 'La douleur atteint 6/10',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à sentir la voûte',
          alt: 'Une personne qui tire les orteils d’un pied vers elle, la voûte mise en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 note l’étirement du mollet A. Un mollet raide est le facteur de risque le plus fort de la fasciite plantaire (Riddle 2003).' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur, jambe arrière tendue, talon au sol, hanches vers l’avant. Le gastrocnémien, le muscle superficiel du mollet, ne s’étire que genou tendu.',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: { level: 'strong', why: 'Même note A de la recommandation. Vise le soléaire, le muscle profond du mollet.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne s’étire que genou plié.',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à ce que l’étirement descende',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
        {
          name: 'Pied court, assis',
          evidence: { level: 'early', why: 'Une revue de 2024 a trouvé que l’entraînement du pied court modifiait la forme de la voûte dans certaines études, mais les preuves d’une baisse de la douleur avec cet exercice seul sont minces.' },
          dose: '3\u00A0séries de 10\u00A0maintiens de 5\u00A0secondes, chaque pied',
          how: 'Asseyez-vous, pied à plat au sol. Rapprochez l’avant du pied du talon pour que la voûte se soulève. Ne recroquevillez pas les orteils. L’exercice du pied court entraîne les muscles intrinsèques qui maintiennent la voûte.',
          often: 'Jours de renforcement',
          feel: 'La voûte qui se soulève pendant que les orteils restent à plat',
          stop: 'La douleur atteint 6/10',
          media: 'short_foot_seated',
          caption: 'Pied court\u00A0: rapprochez l’avant du pied du talon',
          alt: 'Un pied posé au sol, la voûte qui se soulève, les orteils détendus au sol',
        },
        {
          name: 'Inversion avec élastique (tibial postérieur)',
          evidence: { level: 'moderate', why: 'Activation sélective du tibial postérieur confirmée par IRM (Kulig 2004). Conseillée pour la rééducation de la dysfonction du tendon tibial postérieur dans la revue de 2018.' },
          dose: '3\u00A0séries de 15, chaque pied',
          how: 'Asseyez-vous avec un élastique passé autour de l’avant du pied et attaché sur le côté. Tournez le pied vers l’intérieur contre l’élastique. Gardez le genou immobile pour que le mouvement vienne de la cheville, pas de la jambe. Cela vise le tendon tibial postérieur, le tendon qui maintient la voûte.',
          often: 'Jours de renforcement',
          feel: 'Du travail le long de l’intérieur de la cheville et sous la voûte',
          stop: 'La douleur atteint 6/10',
          media: 'band_inversion',
          caption: 'Inversion avec élastique\u00A0: bougez le pied, pas la jambe',
          alt: 'Une personne assise qui tourne le pied vers l’intérieur contre un élastique, l’intérieur de la cheville mis en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Pas testé dans les études de cette page. Une mesure de confort entre les séances.' },
          dose: '2\u00A0minutes, chaque pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage ou une bouteille d’eau congelée. Une pression ferme, jamais au point de grimacer. Cela apaise le tissu après l’effort.',
          often: 'Jours de récupération',
          feel: 'Une pression ferme sous le pied',
          stop: 'La douleur atteint 6/10',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: lent et ferme, relâchez dès que c’est vif',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.posteriorTibialReview, CITE.kulig, CITE.cheng],
    },
    {
      h2: 'Quand une douleur à la voûte signale-t-elle autre chose\u00A0?',
      paragraphs: [
        'La plupart des douleurs à la voûte répondent aux étirements, à l’ajustement de la charge et au temps. Mais certains schémas orientent vers des problèmes qui demandent un professionnel de santé avant l’exercice.',
        'Une douleur avec engourdissements, fourmillements ou brûlures peut venir d’un syndrome du canal tarsien, où le nerf tibial postérieur est comprimé derrière la malléole interne. Cela demande un diagnostic clinique, pas seulement de l’exercice.',
        'Une douleur à la voûte accompagnée d’un aplatissement progressif du pied, surtout d’un seul côté, peut signaler une dysfonction du tendon tibial postérieur à un stade plus avancé. Le test de montée sur pointes sur une jambe est une vérification simple\u00A0: si vous ne pouvez pas monter complètement sur la pointe d’un pied, ou si cela fait nettement plus mal d’un côté, un professionnel de santé doit examiner le tendon avant que vous ne le chargiez davantage.',
        'Une douleur à un point précis qui s’aggrave régulièrement avec l’activité et ne se calme pas avec un repos normal peut être une fracture de fatigue d’un des petits os du médio-pied. Cela demande de l’imagerie, pas des étirements.',
        'Une douleur à la voûte chez un enfant de 8 à 15\u00A0ans peut être une [apophysite calcanéenne (maladie de Sever)](/fr/maladie-de-sever/), qui touche le cartilage de croissance plutôt que le fascia. Cette page explique ce qui aide chez l’enfant. Walkito est conçu pour les adultes.',
      ],
      cites: [CITE.posteriorTibialReview],
    },
    {
      h2: 'La forme du pied influence-t-elle la douleur à la voûte\u00A0?',
      figure: { id: 'arches', caption: 'Les mêmes os du pied avec un pied plat, une voûte normale et une voûte haute, vus du côté intérieur.', alt: 'Trois pieds vus du côté intérieur sur un sol plat\u00A0: un pied plat dont la voûte repose au sol, une voûte normale avec un petit espace dessous et une voûte haute avec un grand espace sous le milieu du pied.' },
      paragraphs: [
        'Oui. Les pieds plats comme le pied creux modifient la façon dont la force traverse le pied, mais en sens inverse.',
        'Un pied plat laisse la voûte s’affaisser sous la charge, ce qui étire le fascia plantaire et le tendon tibial postérieur au-delà de leur zone de confort. Les exercices pour les pieds plats visent à renforcer les muscles de la voûte (pied court, écarter les orteils, inversion avec élastique) et la hanche (abduction de hanche), car une hanche qui cède en appui sur une jambe pousse la voûte vers l’intérieur. Voir [exercices pour les pieds plats](/fr/exercices-pieds-plats/).',
        'Un pied creux (pes cavus) est rigide et ne fléchit pas assez pour répartir les chocs. La force se concentre au talon et à l’avant-pied. Dans un pied creux, le fascia plantaire est souvent raide. Les exercices visent l’étirement du mollet et du fascia plantaire, plus un travail de stabilité de la cheville. Les orthèses amortissantes ou sur mesure ont les meilleures preuves pour la douleur du pied creux. Voir [pied creux\u00A0: exercices](/fr/pied-creux-exercices/).',
        'Une voûte normale soumise à une surcharge soudaine, par exemple une semaine avec beaucoup plus de marche que d’habitude, donne une douleur diffuse de la voûte qui répond bien aux exercices de cette page, avec un retour progressif à une charge normale.',
      ],
    },
    {
      h2: 'Et les semelles orthopédiques et les chaussures\u00A0?',
      paragraphs: [
        'La recommandation de 2023 sur la douleur au talon donne une note B contre l’utilisation des semelles orthopédiques seules pour la douleur à court terme de la fasciite plantaire. Les semelles associées à d’autres soins, comme les étirements, obtiennent un C en leur faveur. Les chaussures qui soutiennent le pied sont souvent conseillées et peuvent réduire l’inconfort, mais aucun grand essai n’a montré qu’elles soient meilleures que les étirements et le renforcement.',
        'Pour les pieds plats, un soutien de voûte interne peut réduire l’affaissement de la voûte debout et à la marche, ce qui laisse moins de travail au tendon tibial postérieur et au fascia plantaire. Pour le pied creux, une semelle amortissante absorbe les chocs que la voûte rigide n’absorbe pas. Dans un essai de 2006 sur 154\u00A0personnes souffrant d’un pied creux douloureux, des orthèses plantaires sur mesure ont amélioré la douleur et la fonction davantage qu’une fausse semelle à trois mois (Burns et coll., 2006).',
        'Les chaussures et les semelles aident à gérer les symptômes pendant que l’exercice construit la capacité dont le pied a besoin. L’un ne remplace pas l’autre.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quelle est la cause la plus fréquente de douleur à la voûte plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'La fasciite plantaire est la cause unique la plus fréquente. Elle survient quand le fascia plantaire, une épaisse bande de tissu sous le pied, s’irrite sous l’effet d’une charge répétée. La douleur se situe en général près du talon mais s’étend souvent dans la voûte, surtout quand la partie du fascia sous la voûte est touchée. La recommandation de 2023 sur la douleur au talon note les étirements A et le renforcement B.',
    },
    {
      q: 'Pourquoi j’ai mal à la voûte plantaire quand je marche\u00A0?',
      a: 'Une douleur à la voûte à la marche vient en général de quelques sources\u00A0: une fasciite plantaire, des pieds plats qui laissent la voûte s’affaisser sous la charge, une dysfonction du tendon tibial postérieur, un mollet raide qui reporte la contrainte sur la voûte, ou simplement plus de marche que votre pied n’y est habitué. Le schéma de la douleur, surtout si elle est pire le matin ou après l’activité, aide à trouver laquelle.',
    },
    {
      q: 'Les pieds plats peuvent-ils donner mal à la voûte plantaire\u00A0?',
      a: 'Oui. Quand la voûte s’affaisse debout et à la marche, le fascia plantaire et le tendon tibial postérieur sont étirés au-delà de leur amplitude normale. Cet étirement provoque une douleur dans la voûte, et parfois le long de l’intérieur de la cheville. Renforcer les muscles intrinsèques du pied avec des exercices comme le pied court et l’inversion avec élastique peut aider à soutenir la voûte de l’intérieur.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Un pied creux peut-il donner mal à la voûte plantaire\u00A0?',
      a: 'Oui, mais pour la raison inverse. Une voûte haute est rigide et amortit mal les chocs. L’impact se concentre au talon et à l’avant-pied, et le fascia plantaire raide d’un pied creux peut faire mal sur toute sa longueur. Les étirements du mollet et du fascia plantaire, plus des orthèses amortissantes, sont les principales approches. Voir [pied creux\u00A0: exercices](/fr/pied-creux-exercices/) pour plus de détails.',
    },
    {
      q: 'Quand consulter un médecin pour une douleur à la voûte plantaire\u00A0?',
      a: 'Consultez un professionnel de santé si la douleur s’accompagne d’engourdissements, de fourmillements ou de brûlures, qui peuvent évoquer une compression nerveuse. Consultez aussi si la voûte s’aplatit d’un côté, si une montée sur pointes sur une jambe est faible ou impossible d’un côté, si la douleur se situe à un point précis et s’aggrave, ou si elle ne s’est pas améliorée après plusieurs semaines d’étirements et d’ajustement de la charge.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Les semelles orthopédiques aident-elles en cas de douleur à la voûte plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'La recommandation de 2023 sur la douleur au talon donne une note B contre l’utilisation des semelles orthopédiques seules pour la fasciite plantaire. Associées aux étirements et au renforcement, elles peuvent aider à gérer les symptômes pendant que le pied gagne en capacité. Pour le pied creux, les orthèses amortissantes ou sur mesure ont de meilleures preuves, dont un essai randomisé montrant une amélioration par rapport à une fausse semelle à trois mois.',
    },
    {
      q: 'Douleur à la voûte plantaire, est-ce une fasciite plantaire\u00A0?',
      a: 'Pas toujours. La fasciite plantaire est une cause précise de douleur à la voûte, la plus fréquente. Mais la douleur à la voûte peut aussi venir de pieds plats, d’une dysfonction du tendon tibial postérieur, d’un pied creux, d’une surcharge ou d’une irritation nerveuse. Toute fasciite plantaire fait mal à la voûte ou au talon, mais toute douleur à la voûte n’est pas une fasciite plantaire. Le schéma de la douleur, surtout son moment, aide à les distinguer.',
    },
    {
      q: 'Qu’est-ce qui peut causer une douleur sur le bord externe de la voûte\u00A0?',
      a: 'Les exercices de cette page visent l’intérieur de la voûte, donc une douleur sur le bord externe a en général une autre cause. Elle peut venir d’une irritation des tendons fibulaires (les tendons derrière la malléole externe) ou d’un syndrome du cuboïde, où un petit os du médio-pied se décale légèrement, souvent après une entorse ou une surcharge. Les deux demandent un autre examen et un autre plan que l’étirement du fascia plantaire\u00A0: consultez un professionnel de santé.',
    },
    {
      q: 'La douleur à la voûte plantaire passe-t-elle toute seule\u00A0?',
      a: 'Parfois. Une courte douleur de surcharge se calme souvent en quelques jours une fois réduite la charge qui l’a causée. La douleur d’une fasciite plantaire, de pieds plats ou d’une dysfonction du tendon tibial postérieur a tendance à persister ou à revenir sans étirements ni renforcement. Si elle ne s’est pas améliorée après plusieurs semaines de repos et de charge allégée, consultez un professionnel de santé.',
    },
    {
      q: 'Faut-il masser une douleur à la voûte plantaire\u00A0?',
      a: 'Un roulement doux peut aider entre les séances, même si aucune étude de cette page n’a testé le massage seul. Faites rouler lentement la plante sur une balle de massage ou une bouteille d’eau congelée, avec une pression ferme mais jamais au point de grimacer. C’est une mesure de confort. Elle n’agit pas sur la cause. Si appuyer sur un point précis reproduit une douleur vive, faites-le vérifier au lieu d’appuyer plus fort.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur s’accompagne d’engourdissements, de fourmillements ou de brûlures, qui peuvent évoquer une compression nerveuse',
      'la voûte s’aplatit visiblement d’un côté, ce qui peut signaler une dysfonction évolutive du tendon tibial postérieur',
      'vous ne pouvez pas faire une montée sur pointes sur une jambe du côté atteint, ou elle est nettement plus faible que de l’autre côté',
      'la douleur se situe à un point précis et s’aggrave avec l’activité, ce qui peut être une fracture de fatigue',
      'la douleur a suivi une blessure ou une chute',
      'il y a un gonflement, une rougeur ou une chaleur autour du pied ou de la cheville',
      'la douleur ne s’améliore pas après plusieurs semaines d’étirements et d’ajustement de la charge',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Si votre douleur à la voûte suit le schéma de la fasciite plantaire, Walkito construit un plan autour d’un objectif à la fois. Le premier objectif est un meilleur matin\u00A0: une douleur à 1/10 ou moins pendant 14\u00A0jours de suite. La voûte a son propre objectif et ses propres exercices. Si votre douleur à la voûte vient de pieds plats, l’application peut travailler la douleur et la voûte comme deux objectifs séparés.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si vous ne savez pas ce qui cause votre douleur à la voûte, consultez un professionnel de santé avant de la charger avec des exercices.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Douleur à la voûte plantaire',
  campaign: 'guide-arch-pain-fr',
};
