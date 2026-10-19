import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Fasciite plantaire et grossesse (FR) ──────────────────────────────
 *
 * Translated from `articles/pf-pregnancy.ts` (2026-10-17), written around
 * the French queries «fasciite plantaire grossesse», «douleur talon
 * grossesse». French (France) with «vous». Figures, doses, grades, sources
 * and hedges are identical to the English page after its fact-check.
 * The person who follows the pregnancy is «médecin ou sage-femme».
 */

export const PF_PREGNANCY_FR: Guide = {
  lang: 'fr',
  page: 'pfPregnancy',
  mainSource: CITE.segalPregnancy,
  published: '2026-10-17',
  updated: '2026-10-17',
  title: 'Fasciite plantaire et grossesse\u00A0: exercices et alertes',
  description:
    'Douleur au talon pendant la grossesse\u00A0: ce qui change dans le pied, étirements assise ou au mur, médicaments à éviter dès 20\u00A0SA, signes d’alerte.',
  h1: 'Fasciite plantaire pendant la grossesse\u00A0: pourquoi les talons font mal et ce que vous pouvez faire sans risque',
  lede:
    'Les douleurs au talon et au pied sont fréquentes pendant la grossesse, et les étirements, parmi les options les mieux notées pour la [fasciite plantaire](/fr/fasciite-plantaire/), peuvent se faire en position assise ou en vous tenant à un mur. Dans une étude, 31\u00A0% des femmes qui avaient accouché signalaient des douleurs au pied, contre 22\u00A0% des femmes qui n’avaient jamais été enceintes (Vullo et coll., 1996). La recommandation de 2023 sur la douleur au talon donne sa meilleure note, **A**, aux étirements du fascia plantaire et du mollet, mais elle ne traite pas de la grossesse\u00A0: parlez-en à votre médecin ou à votre sage-femme avant de commencer.',
  intro: [
    'Aucune étude n’a mesuré à quelle fréquence la fasciite plantaire elle-même apparaît pendant la grossesse. Ce que les études montrent, c’est que le pied change\u00A0: dans un groupe de 49\u00A0femmes, la voûte s’est affaissée et le pied s’est allongé, et ce changement était encore là des mois après l’accouchement (Segal et coll., 2013). Cette page fait le point sur ce que l’on sait, les exercices adaptés à la grossesse, ce qu’il vaut mieux éviter et les symptômes dans la jambe qui justifient de voir un médecin le jour même. La douleur au talon devient plus fréquente plus tard, autour de la ménopause\u00A0: voir [fasciite plantaire et ménopause](/fr/fasciite-plantaire-menopause/).',
  ],
  takeaways: [
    'Les douleurs au pied étaient plus fréquentes chez les femmes qui avaient accouché que chez celles qui n’avaient jamais été enceintes, 31\u00A0% contre 22\u00A0%, et la plupart des douleurs aux jambes et aux pieds avaient commencé au deuxième ou au troisième trimestre (Vullo et coll., 1996).',
    'Chez 49\u00A0femmes mesurées au premier trimestre puis environ quatre mois et demi après l’accouchement, la hauteur de la voûte a diminué et la longueur du pied a augmenté. La première grossesse expliquait l’essentiel de ce changement (Segal et coll., 2013).',
    'La recommandation de 2023 sur la douleur au talon note les étirements du fascia plantaire et du mollet **A** et le renforcement musculaire **B**, mais elle ne mentionne pas la grossesse (Koc et coll., 2023).',
    'Après 20\u00A0semaines d’aménorrhée (SA), évitez de rester longtemps allongée sur le dos pendant l’exercice, et arrêtez-vous si vous remarquez un signe d’alerte comme des saignements, des vertiges, ou une douleur ou un gonflement du mollet (ACOG, 2020).',
    'L’agence américaine du médicament (FDA) conseille d’éviter les anti-inflammatoires non stéroïdiens (AINS), comme l’ibuprofène, à partir de 20\u00A0SA, sauf avis contraire de votre médecin (FDA, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La douleur au talon est-elle fréquente pendant la grossesse\u00A0?',
      keyFact: '31\u00A0% de 107\u00A0femmes qui avaient accouché signalaient des douleurs au pied, contre 22\u00A0% de 91\u00A0femmes qui n’avaient jamais été enceintes (Vullo et coll., 1996).',
      paragraphs: [
        '**Les douleurs au pied sont fréquentes pendant la grossesse, mais personne n’a compté la fasciite plantaire à part.** Dans une étude par questionnaire de 1996, 31\u00A0% de 107\u00A0femmes qui venaient d’accoucher signalaient des douleurs au pied, contre 22\u00A0% de 91\u00A0femmes qui n’avaient jamais été enceintes. Les douleurs aux jambes et aux pieds dans leur ensemble concernaient 56\u00A0% contre 37\u00A0%.',
        'La plupart de ces douleurs étaient apparues plus tard dans la grossesse\u00A0: 82\u00A0% avaient commencé au deuxième ou au troisième trimestre. Pour les auteurs, ce calendrier évoque davantage la mécanique d’un corps plus lourd et en pleine transformation que les seules hormones.',
        'Dans une étude de 2010 portant sur 100\u00A0femmes interrogées après l’accouchement, plus de la moitié signalaient un gonflement des pieds, des chevilles et des jambes, une démarche moins stable et des pieds plus larges (Ponnapula et Boberg, 2010).',
        'Si votre talon fait surtout mal aux premiers pas du matin ou après être restée assise, c’est le schéma typique de la fasciite plantaire. Une douleur pire la nuit ou au repos correspond à un autre schéma, expliqué dans [douleur au talon la nuit](/fr/douleur-talon-la-nuit/).',
      ],
      cites: [CITE.vulloPregnancy, CITE.ponnapulaPregnancy],
    },
    {
      h2: 'Pourquoi la grossesse peut-elle faire mal aux talons\u00A0?',
      keyFact: 'Sur 49\u00A0femmes, 35 avaient une voûte plus basse et 30 un pied plus long environ quatre mois et demi après l’accouchement (Segal et coll., 2013).',
      paragraphs: [
        '**Le résultat le plus net, c’est que la voûte s’abaisse et que le pied s’allonge.** Une étude de 2013 a mesuré 49\u00A0femmes au premier trimestre, puis de nouveau environ quatre mois et demi après l’accouchement. La hauteur et la rigidité de la voûte ont diminué, tandis que la longueur du pied et l’affaissement de la voûte ont augmenté. Au total, 35 des 49\u00A0femmes avaient une voûte plus basse et 30 un pied plus long, le plus souvent de 2 à 10\u00A0millimètres.',
        'La cause est moins claire que ne le disent beaucoup de sites. Dans cette étude, la laxité des articulations et la prise de poids pendant la grossesse n’étaient pas liées à l’ampleur des changements du pied. Le [poids](/fr/poids-et-fasciite-plantaire/) et les longues heures debout sont des facteurs de risque connus de la fasciite plantaire en général (Koc et coll., 2023), mais aucune étude ne les a testés pendant la grossesse.',
        'Le gonflement, un corps plus lourd et une autre façon de marcher modifient tous la répartition de la charge sur le pied. Le fascia plantaire est la bande sous le pied qui soutient la voûte\u00A0: une voûte plus basse et une charge plus forte peuvent le mettre en tension. Pour savoir si une voûte affaissée peut le rester après l’accouchement\u00A0: [les pieds plats s’aggravent-ils avec l’âge](/fr/pieds-plats-avec-l-age/).',
      ],
      cites: [CITE.segalPregnancy, CITE.guideline, CITE.ponnapulaPregnancy],
    },
    {
      h2: 'Quels exercices contre la douleur au talon sont sans risque pendant la grossesse\u00A0?',
      paragraphs: [
        'Les exercices ci-dessous viennent de la recommandation sur la fasciite plantaire, rédigée pour les adultes en général et non pour la grossesse. Ils se font tous assise ou debout avec une main sur un mur, et aucun ne vous demande de vous allonger sur le dos ni de sauter. **Demandez d’abord l’avis de votre médecin ou de votre sage-femme**, surtout si l’on vous a conseillé de limiter votre activité.',
        'Les étirements font partie des options les mieux notées de la recommandation de 2023 sur la douleur au talon\u00A0: les étirements du fascia plantaire et du mollet obtiennent un **A**. Le renforcement du mollet obtient un **B**. L’essai sur les montées sur pointes cité sur ce site testait une version debout (Rathleff et coll., 2015)\u00A0; les montées sur pointes en position assise sont un point de départ plus doux.',
        'Si vous vous sentez moins stable, gardez une main sur un mur ou sur le dossier d’une chaise. Dans une enquête auprès de 2\u00A0847\u00A0femmes actives, 26,6\u00A0% étaient tombées au moins une fois pendant leur grossesse (Dunning et coll., 2003). C’est pourquoi cette page laisse de côté l’équilibre sur une jambe et les sauts tant que votre médecin ou votre sage-femme ne vous a pas donné son accord.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note. Il n’a pas été étudié pendant la grossesse.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et posez le pied sur le genou opposé. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assise au bord du lit, avant que le pied touche le sol. Si votre ventre vous gêne pour croiser la jambe, passez une serviette sous l’avant du pied et tirez doucement.',
          stop: 'Une douleur vive au talon, ou n’importe quel signe d’alerte de la liste ci-dessous',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une silhouette tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note. Il n’a pas été étudié pendant la grossesse.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains sur un mur. Gardez la jambe arrière tendue, le talon arrière bien à plat au sol et les hanches vers l’avant. Faites un pas en arrière plus court que d’habitude si votre équilibre vous semble différent.',
          stop: 'Une douleur au mollet qui persiste après l’arrêt, ou un mollet gonflé',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note. Il n’a pas été étudié pendant la grossesse.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position contre le mur, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur au mollet qui persiste après l’arrêt, ou un mollet gonflé',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une silhouette en position de fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes en position assise',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 note le renforcement B. Cette étape n’a été testée ni seule ni pendant la grossesse.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '3\u00A0jours par semaine, jamais deux jours de suite',
          feel: 'Un travail dans le bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Appuyer les mains sur les genoux ajoute de la résistance. Genou plié, l’exercice sollicite surtout le soléaire, le muscle profond du mollet. C’est un point de départ plus doux que les montées sur pointes debout testées dans l’essai.',
          stop: 'Une douleur au talon qui dépasse 6 sur 10, ou qui est pire le lendemain matin',
          image: 'Exercice\u00A0: montées sur pointes en position assise',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes en position assise\u00A0: poussez sur l’avant des pieds',
          alt: 'Une silhouette assise lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Ramasser la serviette',
          evidence: { level: 'early', why: 'Un ajout de Walkito. Il ne faisait pas partie des programmes testés et n’a pas été étudié pendant la grossesse.' },
          dose: '3\u00A0séries de 8, maintenir 5\u00A0secondes, chaque pied',
          often: 'La plupart des jours où vous faites vos exercices',
          feel: 'Les petits muscles sous la voûte qui travaillent',
          how: 'Asseyez-vous avec une serviette étalée au sol sous le pied. Ramenez la serviette vers vous avec les orteils en gardant le talon au sol.',
          stop: 'Une crampe dans le pied ou le mollet qui ne passe pas quand vous arrêtez',
          image: 'Exercice\u00A0: ramasser la serviette',
          media: 'towel_scrunch',
          caption: 'Ramasser la serviette\u00A0: ramenez la serviette avec les orteils, le talon reste au sol',
          alt: 'Une silhouette assise ramène une serviette avec les orteils d’un pied',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.dunningFalls],
    },
    {
      h2: 'Que faut-il éviter en cas de douleur au talon pendant la grossesse\u00A0?',
      keyFact: 'L’ACOG conseille d’éviter de rester longtemps allongée sur le dos pendant l’exercice après 20\u00A0SA, car cette position peut faire baisser la tension artérielle (ACOG, 2020).',
      paragraphs: [
        '**Après 20\u00A0SA (semaines d’aménorrhée), évitez de rester longtemps allongée sur le dos pendant vos exercices.** Le Collège américain des obstétriciens et gynécologues (ACOG) explique que le poids de l’utérus peut comprimer une grosse veine et faire baisser la tension artérielle. L’ACOG déconseille aussi les activités qui exposent à un risque élevé de chute.',
        '**Demandez avant de prendre un antidouleur.** L’agence américaine du médicament (FDA) [conseille d’éviter les AINS](https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic) (en anglais), comme l’ibuprofène et le naproxène, à partir de 20\u00A0SA, car dans de rares cas ils peuvent provoquer de graves problèmes rénaux chez le bébé et faire baisser le liquide amniotique. Cet avertissement ne concerne pas l’aspirine à faible dose prescrite par votre médecin.',
        '**Demandez avant des ondes de choc ou une infiltration.** La Société internationale de traitement médical par ondes de choc (ISMST) n’exclut les ondes de choc que lorsqu’[un fœtus se trouve dans la zone traitée](https://shockwavetherapy.org/indications/) (en anglais), et non en raison de la grossesse elle-même. Nous n’avons trouvé aucune étude sur les ondes de choc contre la douleur au talon pendant la grossesse. Pour les infiltrations de corticoïdes, il n’existe pas de recommandation propre à la grossesse pour la douleur au talon. Une revue indique que la grossesse elle-même n’exclut pas une infiltration locale unique\u00A0: c’est donc une décision à prendre avec votre médecin (Filippini et coll., 2023).',
        'Arrêtez l’exercice et appelez votre médecin ou votre sage-femme si vous remarquez l’un des signes d’alerte cités par l’ACOG, notamment des saignements vaginaux, des contractions régulières et douloureuses, une perte de liquide, des vertiges, une douleur dans la poitrine, ou une douleur ou un gonflement du mollet.',
      ],
      cites: [CITE.acogExercise, CITE.filippiniInjections],
    },
    {
      h2: 'Les chaussures ou les semelles aident-elles contre la douleur au talon pendant la grossesse\u00A0?',
      paragraphs: [
        'Aucun essai n’a testé les semelles ou les chaussures contre la douleur au talon pendant la grossesse. L’étude la plus proche a donné à 72\u00A0femmes enceintes soit des semelles de voûte sur mesure, soit leurs chaussures habituelles. Elle a mesuré la forme de la voûte, pas la douleur, et n’a trouvé aucune différence entre les groupes (Segal et coll., 2018).',
        'Pour la douleur au talon en général, la recommandation de 2023 note les semelles seules **B défavorable**\u00A0: les données invitent à ne pas compter uniquement sur elles. Associées aux étirements et au renforcement, elles obtiennent un **C** (Koc et coll., 2023). La page [semelles ou exercices](/fr/semelles-ou-exercices/) compare les deux.',
        'Les mesures du pied appuient un conseil pratique\u00A0: chez beaucoup de femmes, le pied s’est allongé, le plus souvent de 2 à 10\u00A0millimètres (Segal et coll., 2013). Si vos chaussures vous serrent maintenant ou appuient sur le talon, vérifiez d’abord qu’elles sont bien à la taille actuelle de vos pieds.',
      ],
      cites: [CITE.segalInsolesPregnancy, CITE.guideline, CITE.segalPregnancy],
    },
    {
      h2: 'La douleur au talon disparaît-elle après la grossesse\u00A0?',
      paragraphs: [
        'Nous n’avons trouvé aucune étude qui suive la douleur au talon ou la fasciite plantaire après l’accouchement\u00A0: il n’existe donc pas de chiffre sur le nombre de femmes qui se rétablissent, ni en combien de temps.',
        'Les changements de forme du pied, eux, ont duré\u00A0: environ quatre mois et demi après l’accouchement, la voûte était encore plus basse et le pied encore plus long qu’au premier trimestre, surtout après une première grossesse (Segal et coll., 2013). Pour la fasciite plantaire en général, environ 90\u00A0% des personnes vont mieux avec un traitement sans chirurgie, même si cela peut prendre trois à six mois\u00A0; voir [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/).',
        'Après l’accouchement, l’ACOG conseille de reprendre l’activité progressivement, une fois que votre médecin ou votre sage-femme vous a dit que c’était sans risque (ACOG, 2020). Les étirements et le renforcement de cette page restent valables.',
      ],
      cites: [CITE.segalPregnancy, CITE.acogExercise, CITE.latt],
    },
    {
      h2: 'Quand une douleur au pied ou à la jambe pendant la grossesse est-elle une urgence\u00A0?',
      keyFact: 'Une douleur et un gonflement d’un seul mollet peuvent signaler un caillot, et un gonflement soudain du visage, des mains ou des pieds peut signaler une prééclampsie. Dans les deux cas, il faut voir un médecin le jour même (NHS).',
      paragraphs: [
        'Deux problèmes peuvent ressembler à de simples pieds douloureux et gonflés, et demandent une prise en charge urgente\u00A0:',
        {
          list: [
            '**Un caillot dans la jambe (phlébite ou thrombose veineuse profonde).** Une douleur lancinante et un gonflement d’une seule jambe, en général au mollet ou à la cuisse, parfois avec une peau rouge, bleutée ou plus foncée autour de la zone douloureuse, ou des veines gonflées. Le risque est plus élevé pendant la grossesse et dans les six semaines qui suivent l’accouchement. Appelez le 15 (ou le 112) si vous êtes aussi essoufflée ou si vous avez une douleur dans la poitrine. [NHS\u00A0: thrombose veineuse profonde](https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/) (en anglais).',
            '**La prééclampsie.** Un gonflement soudain du visage, des mains ou des pieds, un mal de tête intense, une vision floue ou des éclairs lumineux, ou une douleur juste sous les côtes. Elle survient le plus souvent après 20\u00A0SA, et les symptômes peuvent aussi persister ou apparaître dans les premières semaines après l’accouchement. [NHS\u00A0: prééclampsie](https://www.nhs.uk/conditions/pre-eclampsia/) (en anglais).',
          ],
        },
        'Des pieds qui gonflent tous les deux, peu à peu, en fin de journée, c’est fréquent pendant la grossesse. Un gonflement soudain, d’une seule jambe, ou accompagné des symptômes ci-dessus ne l’est pas.',
      ],
    },
  ],
  faq: [
    {
      q: 'La grossesse peut-elle provoquer une fasciite plantaire\u00A0?',
      cites: [CITE.vulloPregnancy, CITE.segalPregnancy],
      a: 'Elle la rend peut-être plus probable, mais aucune étude ne l’a démontré. Les douleurs au pied étaient plus fréquentes chez les femmes qui avaient accouché (31\u00A0%) que chez celles qui n’avaient jamais été enceintes (22\u00A0%), et la grossesse abaisse la voûte et allonge le pied. Aucune étude n’a compté la fasciite plantaire à part pendant la grossesse.',
    },
    {
      q: 'La douleur au talon est-elle un signe de début de grossesse\u00A0?',
      cites: [CITE.vulloPregnancy],
      a: 'Aucune étude ne relie la douleur au talon au début de la grossesse. Dans l’étude de 1996, 82\u00A0% des douleurs aux jambes et aux pieds pendant la grossesse avaient commencé au deuxième ou au troisième trimestre, pas au premier. Une douleur au talon dans les premières semaines a plus probablement les mêmes causes qu’à n’importe quel autre moment.',
    },
    {
      q: 'Peut-on s’étirer pour une fasciite plantaire pendant la grossesse\u00A0?',
      cites: [CITE.guideline, CITE.acogExercise],
      a: 'Des étirements doux du fascia plantaire et du mollet, assise ou une main sur un mur, correspondent aux conseils de l’ACOG pour l’exercice pendant la grossesse, et la recommandation de 2023 sur la douleur au talon les note A. Cette recommandation ne traite pas de la grossesse\u00A0: demandez d’abord l’avis de votre médecin ou de votre sage-femme, et évitez de rester longtemps allongée sur le dos après 20\u00A0SA.',
    },
    {
      q: 'Puis-je prendre de l’ibuprofène pour une douleur au talon pendant la grossesse\u00A0?',
      a: 'Demandez d’abord à votre médecin ou à votre sage-femme. L’agence américaine du médicament (FDA) conseille d’éviter les AINS, dont l’ibuprofène et le naproxène, à partir de 20\u00A0SA sauf avis contraire d’un médecin, car dans de rares cas ils peuvent provoquer de graves problèmes rénaux chez le bébé et faire baisser le liquide amniotique.',
    },
    {
      q: 'Les pieds restent-ils plus grands après la grossesse\u00A0?',
      cites: [CITE.segalPregnancy],
      a: 'Chez beaucoup de femmes, oui, au moins pendant des mois. Chez 49\u00A0femmes, la longueur du pied et l’affaissement de la voûte étaient encore plus importants environ quatre mois et demi après l’accouchement qu’au premier trimestre. Les changements étaient le plus souvent faibles, et la première grossesse en expliquait l’essentiel.',
    },
    {
      q: 'Les attelles de nuit aident-elles contre la fasciite plantaire pendant la grossesse\u00A0?',
      cites: [CITE.guideline],
      a: 'Les attelles de nuit n’ont pas été étudiées pendant la grossesse. Pour la fasciite plantaire en général, la recommandation de 2023 les note A, portées pendant un à trois mois, chez les personnes qui ont régulièrement mal aux premiers pas du matin. Demandez l’avis de votre médecin ou de votre sage-femme avant d’en acheter une. Plus de détails dans [attelle de nuit pour la fasciite plantaire](/fr/attelle-de-nuit-fasciite-plantaire/).',
    },
    {
      q: 'La marche est-elle mauvaise pour la fasciite plantaire pendant la grossesse\u00A0?',
      cites: [CITE.acogExercise],
      a: 'La marche fait partie des activités que l’ACOG propose pendant la grossesse, dans le cadre d’au moins 150\u00A0minutes d’activité modérée par semaine. Aucune étude ne s’est penchée sur la [marche avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/) pendant la grossesse\u00A0: demandez à votre médecin ou à votre sage-femme quelle quantité vous convient.',
    },
    {
      q: 'Peut-on faire des ondes de choc ou une infiltration de corticoïdes pendant la grossesse\u00A0?',
      cites: [CITE.filippiniInjections],
      a: 'Demandez à votre médecin. La Société internationale de traitement médical par ondes de choc (ISMST) n’exclut les ondes de choc que lorsqu’un fœtus se trouve dans la zone traitée, et non en raison de la grossesse elle-même, mais nous n’avons trouvé aucune étude sur leur usage contre la douleur au talon pendant la grossesse. Pour les infiltrations de corticoïdes, il n’existe pas de recommandation propre à la grossesse pour la douleur au talon, et une revue indique que la grossesse elle-même n’exclut pas une infiltration locale unique.',
    },
  ],
  redFlags: {
    h2: 'Consultez un médecin ou une sage-femme le jour même si',
    bullets: [
      'un mollet ou une jambe est douloureux et gonflé, ou la peau y paraît rouge ou plus foncée (possible caillot)',
      'votre visage, vos mains ou vos pieds gonflent soudainement, ou vous avez un mal de tête intense, une vision floue ou une douleur sous les côtes (possible prééclampsie)',
      'vous êtes essoufflée ou avez une douleur dans la poitrine\u00A0: appelez le 15 (ou le 112)',
      'vous avez des saignements vaginaux, des contractions régulières et douloureuses ou une perte de liquide',
      'la douleur au talon a commencé après une chute ou une torsion, ou vous ne pouvez pas poser le pied',
      'le talon fait mal la nuit ou au repos, ou vous ressentez des brûlures, des fourmillements ou un engourdissement',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Elle n’est pas conçue pour la grossesse et ne connaît pas votre trimestre\u00A0: parlez-en à votre médecin ou à votre sage-femme avant de commencer, et laissez de côté tout ce qui demande de sautiller, de sauter ou de vous allonger sur le dos.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPain', 'morningHeelPain', 'flatFeetAge'],
  crumb: 'Douleur au talon et grossesse',
  campaign: 'guide-pregnancy-fr',
};
