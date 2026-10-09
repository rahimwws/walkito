import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Pied creux : exercices (FR) ───────────────────────────────────────
 *
 * Translated from `articles/high-arches.ts`, written around the French
 * queries «pied creux exercices», «pied creux douleur», «voûte plantaire
 * trop haute». French (France) with «vous». Figures, doses, grades and
 * qualifiers are identical to the English page. No new citations.
 */

export const HIGH_ARCHES_FR: Guide = {
  lang: 'fr',
  page: 'highArches',
  mainSource: CITE.burnsCavus,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Pied creux\u00A0: exercices et ce qui aide la douleur',
  description:
    'Pied creux douloureux\u00A0: exercices d’étirement du mollet et du fascia plantaire, stabilité de la cheville, orthèses et signaux d’alerte neurologiques.',
  h1: 'Pied creux\u00A0: les exercices qui aident et ce qui demande un professionnel de santé',
  lede:
    'Un pied à voûte haute, appelé pied creux (pes cavus), est rigide et ne fléchit pas assez pour amortir les chocs. La force se concentre au talon et à l’avant-pied, et le fascia plantaire est souvent raide. Environ 60\u00A0% des personnes ayant un pied creux signalent des douleurs au pied. Les preuves les plus solides concernent les orthèses amortissantes ou sur mesure. L’exercice vise à étirer le mollet et le fascia plantaire, à améliorer la mobilité de la cheville et à développer la stabilité.',
  intro: [
    'Le pied creux touche environ 1\u00A0personne sur 10 (Burns et coll., 2007). Beaucoup de personnes au pied creux n’ont jamais mal aux pieds. Chez celles qui ont mal, la douleur se situe en général sous le talon, sous l’avant-pied ou le long du fascia plantaire raide. La cause compte\u00A0: la plupart des pieds creux sont idiopathiques (sans cause connue), mais une partie est due à des maladies neurologiques comme la maladie de Charcot-Marie-Tooth. Un pied creux qui s’accentue ou qui ne touche qu’un côté demande toujours un professionnel de santé.',
  ],
  takeaways: [
    'Dans un essai sur 154\u00A0adultes au pied creux douloureux, des orthèses plantaires sur mesure ont amélioré la douleur au pied de 8,3\u00A0points de plus qu’une fausse semelle à trois mois, et la fonction de 9,5\u00A0points de plus (Burns et coll., 2006).',
    'Le même essai a trouvé que les orthèses sur mesure réduisaient la pression plantaire de 26\u00A0%, contre 9\u00A0% avec la fausse semelle.',
    'Environ 60\u00A0% des personnes ayant un pied creux signalent des douleurs au pied, souvent sous le talon, sous l’avant-pied ou dans la voûte (Burns et coll., 2005).',
    'Le pied creux peut être le premier signe d’une maladie neurologique comme la maladie de Charcot-Marie-Tooth. Un pied creux qui s’accentue ou qui ne touche qu’un côté demande une évaluation neurologique, pas seulement de l’exercice.',
    'Aucun essai n’a testé un programme d’exercices spécifiquement pour la douleur du pied creux. Les exercices de cette page visent les structures raides et les articulations instables fréquentes dans le pied creux.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce que le pied creux, et pourquoi fait-il mal\u00A0?',
      figure: { id: 'arches', caption: 'Les mêmes os du pied avec un pied plat, une voûte normale et une voûte haute, vus du côté intérieur.', alt: 'Trois pieds vus du côté intérieur sur un sol plat\u00A0: un pied plat dont la voûte repose au sol, une voûte normale avec un petit espace dessous et une voûte haute avec un grand espace sous le milieu du pied.' },
      paragraphs: [
        'Le pied creux est un pied dont la voûte longitudinale interne est excessivement haute. La voûte reste haute même quand le pied porte le poids du corps. Contrairement au pied plat, qui s’affaisse sous la charge et répartit l’impact sur une grande surface, le pied creux est rigide et concentre la force sur une surface plus petite\u00A0: le talon et l’avant-pied.',
        'Dans un pied creux, le fascia plantaire est en général court et raide, ce qui maintient la voûte en position haute mais réduit la capacité du pied à fléchir et à amortir les chocs. L’avant-pied se situe souvent plus bas que l’arrière-pied (premier métatarsien en flexion plantaire), et les orteils peuvent se mettre en griffe. Ces changements reportent la pression sur les têtes des métatarsiens et le talon, et la retirent du médio-pied.',
        'La douleur du pied creux se présente souvent comme une métatarsalgie (douleur sous l’avant-pied), une douleur sous le talon ou une douleur le long du fascia plantaire raide. Les entorses de la cheville sont aussi plus fréquentes, car le pied rigide et tourné vers l’intérieur est moins stable sur un sol irrégulier.',
      ],
      cites: [CITE.burnsCavusCochrane, CITE.burnsCavusPain, CITE.burnsCavus],
    },
    {
      h2: 'Quelles sont les causes du pied creux\u00A0?',
      paragraphs: [
        'La plupart des pieds creux sont idiopathiques, c’est-à-dire qu’aucune cause précise n’est trouvée. Ils touchent en général les deux pieds, restent stables dans le temps et sont présents depuis l’enfance.',
        'Un groupe plus petit mais important sur le plan clinique est dû à des maladies neurologiques. La plus fréquente est la maladie de Charcot-Marie-Tooth (CMT), une neuropathie héréditaire motrice et sensitive qui provoque une faiblesse et une fonte musculaires progressives, en commençant par les pieds et le bas des jambes. Le pied creux varus de la CMT apparaît parce que certains muscles s’affaiblissent plus vite que d’autres, ce qui tire le pied en position de voûte haute, tourné vers l’intérieur.',
        'Les autres causes neurologiques comprennent des anomalies de la moelle épinière, la poliomyélite, le spina bifida, la paralysie cérébrale et d’autres neuropathies périphériques. Un pied creux peut aussi apparaître après un AVC ou une lésion de la moelle épinière.',
        'La distinction compte pour l’exercice. Le pied creux idiopathique est en général stable\u00A0: le pied a cette forme et la garde. Le pied creux neurologique peut évoluer\u00A0: la voûte se creuse, la faiblesse s’aggrave et le pied devient moins stable avec le temps. Les exercices peuvent entretenir la mobilité et la stabilité d’un pied creux neurologique, mais ils ne peuvent pas inverser la maladie sous-jacente, et un professionnel de santé doit être impliqué.',
      ],
    },
    {
      h2: 'Quand faire examiner un pied creux\u00A0?',
      paragraphs: [
        'Tous les pieds creux n’ont pas besoin d’un bilan neurologique. Mais certains schémas doivent toujours être évalués.',
        'Un pied creux qui s’accentue, c’est-à-dire une voûte qui se creuse au fil des mois ou des années, est un signal d’alerte de cause neurologique. Un pied creux d’un seul côté, où un pied a une voûte bien plus haute que l’autre, en est un autre. Une faiblesse du pied ou du bas de la jambe, une difficulté à relever le pied en marchant (pied tombant), des orteils en griffe qui s’aggravent, ou des antécédents familiaux de CMT ou d’autre neuropathie sont autant de raisons de consulter un neurologue ou un spécialiste du pied et de la cheville.',
        'Si vos pieds creux touchent les deux côtés, sont stables et le sont depuis l’enfance, sans faiblesse ni trouble de la sensibilité, ils sont très probablement idiopathiques. Les exercices ci-dessous et une discussion avec un podologue sur les orthèses sont un point de départ raisonnable.',
      ],
    },
    {
      h2: 'Les orthèses aident-elles la douleur du pied creux\u00A0?',
      keyFact: 'Un essai randomisé sur 154\u00A0adultes au pied creux douloureux a trouvé que des orthèses sur mesure faisaient mieux qu’une fausse semelle de 8,3\u00A0points sur la douleur et de 9,5\u00A0points sur la fonction à trois mois (Burns et coll., 2006).',
      paragraphs: [
        'Les orthèses plantaires sur mesure ont les preuves les plus solides pour la douleur du pied creux. Dans le seul essai randomisé, Burns et coll. ont réparti 154\u00A0adultes souffrant de douleurs chroniques au pied et d’un pied creux bilatéral entre des orthèses plantaires sur mesure en polypropylène et une fausse semelle plate. À trois mois, le groupe orthèses sur mesure rapportait une amélioration de la douleur au pied supérieure de 8,3\u00A0points au Foot Health Status Questionnaire par rapport au groupe fausse semelle. Les scores de fonction se sont améliorés de 9,5\u00A0points de plus. La pression plantaire a baissé de 26\u00A0% avec les orthèses sur mesure, contre 9\u00A0% avec la fausse semelle.',
        'L’essai incluait des personnes au pied creux idiopathique comme neuromusculaire (133\u00A0idiopathiques, 21\u00A0neuromusculaires dont 16 atteintes de la maladie de Charcot-Marie-Tooth). Les orthèses étaient moulées sur la forme du pied, avec un recouvrement amortissant sur toute la longueur.',
        'Des semelles amortissantes vendues sans ordonnance sont une première étape raisonnable avant de passer à des orthèses sur mesure, plus chères. L’élément que l’essai a trouvé efficace était une coque moulée sur la forme exacte du pied, pas seulement un amorti plat ajouté.',
      ],
      sourceNote:
        'Burns 2006\u00A0: 154\u00A0adultes, suivi à 3\u00A0mois, différence de douleur au Foot Health Status Questionnaire de 8,3\u00A0points (IC à 95\u00A0% 1,2-15,3, p=0,022), différence de fonction de 9,5\u00A0points (IC à 95\u00A0% 2,9-16,1, p=0,005).',
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Quels exercices pour le pied creux\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon note les étirements du mollet et du fascia plantaire A et le renforcement B pour la douleur sous le talon, l’endroit douloureux le plus fréquent dans le pied creux (Koc et coll., 2023).',
      paragraphs: [
        'Aucun essai n’a testé un programme d’exercices conçu spécifiquement pour la douleur du pied creux. Les exercices ci-dessous visent les structures souvent raides ou instables dans un pied creux\u00A0: le mollet, le fascia plantaire, la cheville et les muscles intrinsèques du pied. Ils sont empruntés aux preuves sur la fasciite plantaire, l’instabilité de la cheville et le renforcement général du pied, et présentés comme tels.',
        'La recommandation de 2023 sur la douleur au talon note les étirements du mollet et du fascia plantaire A et le renforcement B pour la douleur sous le talon, l’un des endroits douloureux les plus fréquents dans le pied creux. Il n’existe pas de recommandation comparable pour le pied creux en particulier.',
        'Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour la journée.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'moderate', why: 'Note A de la recommandation pour la douleur sous le talon. Un mollet raide est fréquent dans le pied creux et augmente la charge sur le talon.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur, jambe arrière tendue, talon au sol, hanches vers l’avant. Un gastrocnémien raide est fréquent dans le pied creux et ajoute à la charge sur la voûte rigide.',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: { level: 'moderate', why: 'Même mécanisme. Vise le muscle profond du mollet.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire ne se relâche que genou plié.',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à ce que l’étirement descende',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'moderate', why: 'Note A de la recommandation pour la douleur sous le talon. Le fascia plantaire est en général raide dans le pied creux.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez le pied douloureux sur l’autre genou. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Dans un pied creux, le fascia plantaire est souvent court et raide.',
          often: 'La plupart des séances',
          feel: 'Un étirement le long de la voûte',
          stop: 'La douleur atteint 6/10',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à sentir la voûte',
          alt: 'Une personne qui tire les orteils d’un pied vers elle, la voûte mise en évidence',
        },
        {
          name: 'Bascules de cheville',
          evidence: { level: 'early', why: 'Aucun essai propre au pied creux. Vise la flexion dorsale de la cheville, souvent limitée dans le pied creux.' },
          dose: '2\u00A0séries de 15, chaque jambe',
          how: 'Tenez-vous face à un mur, un pied en avant. Avancez le genou au-dessus des orteils en gardant le talon à plat. Cela ouvre la flexion dorsale de la cheville, souvent limitée dans un pied creux.',
          often: 'La plupart des séances',
          feel: 'Un étirement à l’avant de la cheville',
          stop: 'La douleur atteint 6/10',
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: le genou passe au-dessus des orteils, le talon reste à plat',
          alt: 'Une personne face à un mur qui avance le genou au-dessus des orteils',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: { level: 'early', why: 'Aucun essai sur le pied creux. Les entorses de la cheville sont plus fréquentes dans le pied creux\u00A0; le travail d’équilibre agit sur la stabilité de la cheville.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Tenez-vous sur un pied et fixez un point. Laissez le pied osciller. Les pieds creux sont moins stables sur un sol irrégulier, et le travail d’équilibre entraîne les muscles qui corrigent ces oscillations. Restez près d’un mur.',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied et la cheville',
          stop: 'La douleur atteint 6/10',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: laissez le pied faire ses corrections',
          alt: 'Une personne en équilibre sur une jambe, la cheville mise en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Pas testé pour le pied creux. Une mesure de confort pour le fascia plantaire raide.' },
          dose: '2\u00A0minutes, chaque pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage. Une pression ferme, pas au point de grimacer. C’est une mesure de confort pour le fascia raide, pas un exercice correctif.',
          often: 'Jours de récupération',
          feel: 'Une pression ferme sous le pied',
          stop: 'La douleur atteint 6/10',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: lent et ferme, relâchez dès que c’est vif',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle',
        },
      ],
      cites: [CITE.guideline, CITE.burnsCavus],
    },
    {
      h2: 'Quelles chaussures pour le pied creux\u00A0?',
      paragraphs: [
        'Les chaussures pour pied creux doivent amortir plutôt que contrôler. Contrairement aux pieds plats, où un renfort interne ferme empêche l’affaissement, un pied creux a besoin de l’inverse\u00A0: une chaussure qui absorbe les chocs parce que le pied lui-même ne le fait pas.',
        'Recherchez une semelle amortissante, un avant de chaussure spacieux (les orteils en griffe ont besoin de place) et pas de soutien de voûte agressif. Un soutien de voûte rigide prévu pour un pied normal appuie au mauvais endroit sur une voûte creuse. Des chaussures de course neutres, bien amorties au talon et à l’avant-pied, sont une recommandation courante.',
        'Si les chaussures et les semelles vendues sans ordonnance ne suffisent pas, un podologue peut évaluer si des orthèses sur mesure valent l’investissement. L’essai de Burns 2006 a trouvé que la clé d’une orthèse efficace pour le pied creux était une coque moulée sur le pied avec un recouvrement amortissant, pas un dispositif correcteur rigide.',
      ],
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Walkito aide-t-il en cas de pied creux\u00A0?',
      paragraphs: [
        'Walkito est conçu autour de la douleur sous le talon et de la douleur de la voûte chez l’adulte. Il comprend l’étirement du mollet, l’étirement du fascia plantaire, le massage avec une balle et un travail de stabilité de la cheville, qui concernent tous le pied creux. Quand vous désignez la voûte sur la carte du corps de l’application, la séance de soulagement propose l’exercice du pied court, l’étirement du fascia plantaire et le massage avec une balle.',
        'Ce que l’application n’a pas, c’est un objectif spécifique au pied creux ni un programme dédié. Les exercices proposés sont les mêmes que ceux prescrits pour la fasciite plantaire et les pieds plats. Pour une personne au pied creux avec une douleur sous le talon, ces exercices recoupent ce que conseille cette page. Pour une personne dont la douleur du pied creux se situe surtout sous l’avant-pied, ou dont la cause est neurologique, l’application n’est pas adaptée et c’est un professionnel de santé qui doit orienter le plan d’exercices.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quels exercices pour un pied creux\u00A0?',
      cites: [CITE.guideline],
      a: 'Aucun essai n’a testé d’exercices spécifiquement pour le pied creux. Les exercices qui ont les meilleures preuves pour les douleurs fréquentes du pied creux sont l’étirement du mollet et l’étirement du fascia plantaire, tous deux notés A par la recommandation de 2023 pour la douleur sous le talon. Le travail de stabilité de la cheville et le massage avec une balle agissent sur l’instabilité et la raideur du fascia fréquentes dans le pied creux.',
    },
    {
      q: 'Les semelles orthopédiques aident-elles un pied creux douloureux\u00A0?',
      cites: [CITE.burnsCavus],
      a: 'Dans un essai sur 154\u00A0adultes au pied creux douloureux, des orthèses plantaires sur mesure ont amélioré la douleur au pied de 8,3\u00A0points et la fonction de 9,5\u00A0points de plus qu’une fausse semelle à trois mois (Burns 2006). La pression plantaire a baissé de 26\u00A0% avec les orthèses sur mesure. Ce sont les preuves les plus solides pour une mesure unique contre la douleur du pied creux.',
    },
    {
      q: 'Peut-on corriger un pied creux avec des exercices\u00A0?',
      a: 'L’exercice ne peut pas changer la forme osseuse d’un pied creux. Ce qu’il peut faire, c’est étirer les structures raides (mollet, fascia plantaire), améliorer la mobilité de la cheville et développer la stabilité pour réduire les entorses et la douleur. La voûte restera haute. Le but est de réduire la douleur et d’améliorer la fonction, pas d’aplatir la voûte.',
    },
    {
      q: 'Un pied creux est-il le signe d’un problème neurologique\u00A0?',
      a: 'Ça peut l’être. La plupart des pieds creux sont idiopathiques et stables. Mais un pied creux qui s’accentue ou ne touche qu’un côté peut être le premier signe de la maladie de Charcot-Marie-Tooth ou d’une autre maladie neurologique. Si votre voûte se creuse, si un pied est plus touché que l’autre, ou si vous avez une faiblesse ou des troubles de la sensibilité aux pieds, consultez un neurologue.',
    },
    {
      q: 'Quelles chaussures pour un pied creux\u00A0?',
      cites: [CITE.burnsCavus],
      a: 'Des chaussures amortissantes avec un avant spacieux et sans soutien de voûte agressif. Une voûte haute ne s’affaisse pas, elle n’a donc pas besoin de contrôle du mouvement. Elle a besoin d’amorti pour absorber les chocs que la voûte rigide ne peut pas absorber. Des chaussures de course neutres bien amorties au talon et à l’avant-pied sont un point de départ courant. Les orthèses sur mesure avec coque moulée et recouvrement amortissant ont les meilleures preuves issues d’essais.',
    },
    {
      q: 'Pes cavus et pied creux, c’est la même chose\u00A0?',
      a: 'Oui. Pes cavus est le terme médical pour un pied à la voûte excessivement haute, appelé pied creux en français. Il décrit une forme de pied, pas une maladie. Environ 1\u00A0personne sur 10 a un pied creux, et beaucoup n’ont jamais mal aux pieds. Quand une douleur apparaît, elle se situe en général sous le talon, sous l’avant-pied ou le long du fascia plantaire raide.',
      cites: [CITE.burnsCavusCochrane],
    },
    {
      q: 'Un pied creux peut-il causer une fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'Le pied creux figure parmi les facteurs de risque de la fasciite plantaire. Le pied rigide met plus de contrainte sur le fascia plantaire à chaque pas, et le fascia est souvent raide au départ. Si votre pied creux fait mal sous le talon, surtout le matin, ce schéma correspond à une fasciite plantaire, et les exercices de la page [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) s’appliquent.',
    },
    {
      q: 'Comment savoir si on a le pied creux\u00A0?',
      a: 'Essayez le test de l’empreinte mouillée\u00A0: mouillez la plante du pied et posez-la sur une surface plane et sèche. Une voûte haute laisse peu ou pas d’empreinte le long du bord externe, souvent seulement le talon et l’avant-pied, alors qu’un pied plat laisse presque toute la plante. Une grande différence entre vos deux pieds mérite d’être signalée à un professionnel de santé.',
    },
    {
      q: 'Vaut-il mieux avoir les pieds plats ou le pied creux\u00A0?',
      cites: [CITE.burnsCavusPain],
      a: 'Aucun des deux n’est clairement meilleur. Un pied plat répartit la charge largement, mais peut trop étirer le fascia plantaire et le tendon tibial postérieur. Un pied creux est rigide et concentre la force au talon et à l’avant-pied. Environ 60\u00A0% des personnes ayant un pied creux signalent des douleurs au pied, donc la forme du pied ne suffit pas à prédire comment vos pieds vont se sentir.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'votre voûte se creuse avec le temps, ce qui peut signaler une cause neurologique',
      'un pied a une voûte bien plus haute que l’autre',
      'vous avez une faiblesse du pied ou du bas de la jambe, ou du mal à relever l’avant du pied',
      'vous avez des engourdissements, des fourmillements ou des brûlures aux pieds',
      'les orteils se mettent plus en griffe qu’avant',
      'les entorses de la cheville sont fréquentes et s’aggravent',
      'il y a des antécédents familiaux de maladie de Charcot-Marie-Tooth ou d’autre neuropathie',
      'la douleur au pied ne s’améliore pas après plusieurs semaines d’étirements, de meilleures chaussures et de semelles amortissantes',
      'vous avez une douleur à un point précis qui s’aggrave avec l’activité, ce qui peut être une fracture de fatigue ou une sésamoïdite plutôt qu’un schéma général de pied creux',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito comprend l’étirement du mollet, l’étirement du fascia plantaire, un travail de stabilité de la cheville et le massage avec une balle, qui concernent tous le pied creux. Quand vous désignez la voûte sur la carte du corps, l’application propose des exercices pour cette zone. Mais elle n’a pas d’objectif ni de programme spécifique au pied creux. Si votre pied creux donne une douleur sous le talon, les objectifs de l’application pour la douleur au talon peuvent convenir. Si votre douleur se situe surtout sous l’avant-pied ou est liée à une maladie neurologique, c’est un professionnel de santé qui doit orienter votre plan d’exercices.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
  },
  crumb: 'Pied creux\u00A0: exercices',
  campaign: 'guide-high-arches-fr',
};
