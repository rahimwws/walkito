import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Fasciite plantaire ou épine calcanéenne (FR) ──────────────────────
 *
 * Translated from `articles/pf-vs-heel-spur.ts`, written around the French
 * queries «fasciite plantaire ou épine calcanéenne», «épine calcanéenne
 * douleur», «épine de Lenoir». French (France) with «vous». Figures, grades,
 * odds ratios and qualifiers are identical to the English page. No new
 * citations.
 */

export const PF_VS_HEEL_SPUR_FR: Guide = {
  lang: 'fr',
  page: 'pfVsHeelSpur',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fasciite plantaire ou épine calcanéenne\u00A0: même chose\u00A0?',
  description:
    'Fasciite plantaire ou épine calcanéenne\u00A0: les différences, si l’épine fait mal, sa fréquence selon la recherche, et quand une radio est utile.',
  h1: 'Fasciite plantaire ou épine calcanéenne\u00A0: est-ce la même chose\u00A0?',
  lede:
    'Une épine calcanéenne est une excroissance osseuse sous l’os du talon. La fasciite plantaire est une irritation du fascia plantaire, l’épaisse bande de tissu qui va de cet os à vos orteils. Les deux apparaissent souvent ensemble, mais ce n’est pas le même problème, et ce n’est en général pas l’épine qui fait mal. Beaucoup de personnes avec une épine visible à la radio n’ont aucune douleur.',
  intro: [
    'Si on vous a dit que vous avez une épine calcanéenne et que vous voulez savoir quoi faire, les exercices sont les mêmes que ceux qui aident la fasciite plantaire. [Épine calcanéenne\u00A0: exercices](/fr/epine-calcaneenne-exercices/) présente la routine complète. Cette page explique la différence entre les deux, ce que dit la recherche sur l’épine et la douleur, et quand l’imagerie vaut la peine.',
  ],
  takeaways: [
    'Dans une étude sur 216\u00A0personnes âgées de 62 à 94\u00A0ans, 55\u00A0% avaient au moins une épine calcanéenne plantaire à la radio, et l’épine était liée à l’obésité et à l’arthrose mais pas à la posture du pied (Menz et coll., 2008). C’est un échantillon de personnes âgées, pas un chiffre pour la population générale.',
    'Dans une étude sur 530\u00A0personnes de 50\u00A0ans et plus ayant mal aux pieds, l’épine calcanéenne et un fascia plantaire épaissi apparaissaient en général ensemble, et une épine seule était rare (6\u00A0% des pieds). La douleur au talon était liée à la présence des deux à la fois (Menz et coll., 2019).',
    'La recommandation de 2023 sur la douleur au talon fait de la fasciite plantaire la cause la plus fréquente de douleur sous le talon et note que l’imagerie n’est en général pas nécessaire quand l’examen clinique oriente déjà vers une fasciite plantaire (Koc et coll., 2023).',
    'L’étude de Menz 2008 note elle-même que des travaux antérieurs en population générale situaient la fréquence de l’épine calcanéenne entre 11 et 16\u00A0%, bien en dessous des 55\u00A0% trouvés dans son propre échantillon de personnes âgées (Menz et coll., 2008).',
    'Les exercices qui aident la douleur de la fasciite plantaire agissent aussi sur le tissu mou autour d’une épine calcanéenne. L’exercice ne dissout pas l’épine, mais c’est rarement elle qui demande de l’attention.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Une épine calcanéenne, est-ce la même chose qu’une fasciite plantaire\u00A0?',
      figure: { id: 'heel-side', caption: 'Une épine calcanéenne, quand il y en a une, se forme sous l’os du talon, près de l’endroit où s’attache le fascia plantaire.', alt: 'Vue de côté, face intérieure, d’un pied à la peau transparente montrant l’os du talon, le fascia plantaire sous la voûte et une zone rouge sous le talon là où la douleur commence souvent.' },
      paragraphs: [
        'Une épine calcanéenne et une fasciite plantaire ne sont pas la même chose. La fasciite plantaire est un problème de tissu mou\u00A0: le fascia plantaire, l’épaisse bande qui va de l’os du talon aux orteils, s’irrite, en général là où il s’attache à l’os. Une épine calcanéenne est une excroissance osseuse sous l’os du talon (le calcanéum). Les deux coexistent souvent, mais chacune peut apparaître sans l’autre.',
        'La fasciite plantaire donne la douleur vive, en coup de poignard, que les gens décrivent sous le talon, surtout aux premiers pas du matin ou après être resté assis. La recommandation de 2023 sur la douleur au talon la définit comme une douleur «\u00A0plus marquée à la mise en charge au réveil ou après une période de repos\u00A0». Une épine calcanéenne, elle, est une constatation structurelle à la radio. Elle peut donner ou non ses propres symptômes.',
        'La confusion se comprend. Pendant des décennies, on a pensé que l’épine calcanéenne était la cause de la douleur sous le talon. Cette idée a été largement remplacée par des données montrant que les épines sont fréquentes chez des personnes sans douleur, et que beaucoup de personnes atteintes de fasciite plantaire n’ont aucune épine.',
      ],
      cites: [CITE.ehrmannSpur, CITE.guideline],
    },
    {
      h2: 'L’épine calcanéenne fait-elle vraiment mal\u00A0?',
      keyFact: 'Dans une étude sur 530\u00A0personnes ayant mal aux pieds, une épine calcanéenne à la radio n’apparaissait seule que dans 6\u00A0% des pieds, le plus souvent avec un fascia plantaire épaissi (Menz et coll., 2019).',
      paragraphs: [
        'La plupart des épines calcanéennes ne font pas mal. La recherche montre de façon constante qu’on trouve des épines chez des personnes sans aucun symptôme au talon, et que retirer l’épine ne fait pas disparaître la douleur de façon fiable.',
        'Dans une étude sur 530\u00A0personnes de 50\u00A0ans et plus qui avaient mal aux pieds, la radio a trouvé une épine calcanéenne dans 26,5\u00A0% des pieds et l’échographie un fascia plantaire épaissi dans 47,3\u00A0% des pieds. Les deux allaient en général ensemble, et une épine seule était rare (6\u00A0% des pieds). Les personnes qui avaient mal au talon avaient environ deux fois plus de chances d’avoir les deux à la fois (Menz et coll., 2019). Autrement dit, l’épine apparaît rarement sans le changement du tissu mou qui l’accompagne.',
        'Par ailleurs, dans une étude sur 216\u00A0personnes âgées de 62 à 94\u00A0ans, 55\u00A0% avaient au moins une épine calcanéenne plantaire à la radio. Les épines étaient liées à l’obésité, à l’arthrose et à des antécédents de douleur au talon, mais pas à la posture du pied. Les auteurs ont avancé que l’épine pourrait être une réponse d’adaptation à la compression verticale du talon, et non le résultat de la traction du fascia plantaire sur l’os (Menz et coll., 2008).',
        'L’étude de Menz 2008 note que des travaux antérieurs en population générale avaient rapporté une fréquence de l’épine calcanéenne de 11 à 16\u00A0%, bien en dessous des 55\u00A0% trouvés par les auteurs dans leur propre échantillon de personnes âgées. Dans ce même échantillon, environ 6 personnes sur 10 qui avaient une épine n’avaient jamais eu mal au talon, même si la douleur au talon restait plus fréquente chez les personnes avec une épine (40\u00A0%) que sans (12\u00A0%) (Menz et coll., 2008). L’épine augmente le risque, mais elle ne décide pas qui finira par avoir mal.',
      ],
      sourceNote:
        'Menz 2019\u00A0: 530\u00A0participants de 50\u00A0ans et plus ayant mal aux pieds, étude transversale. Épines dans 26,5\u00A0% des pieds, épaississement du fascia plantaire dans 47,3\u00A0%, épines isolées dans 6,0\u00A0%. Douleur au talon liée à la combinaison des deux (OR 2,16, IC à 95\u00A0% 1,24 à 3,77). Menz 2008\u00A0: 216\u00A0participants de 62 à 94\u00A0ans, étude transversale, fréquence de l’épine 55\u00A0%, douleur au talon actuelle ou passée OR 4,6 (IC à 95\u00A0% 2,3 à 9,4).',
      cites: [CITE.menzCoexistence, CITE.menzSpur],
    },
    {
      h2: 'L’épine calcanéenne est-elle fréquente chez les personnes sans douleur\u00A0?',
      keyFact: 'Dans une étude par IRM sur 77\u00A0personnes sans symptômes, 19\u00A0% avaient une épine calcanéenne, ce qui montre que l’épine est fréquente même sans douleur au talon (Ehrmann et coll., 2014).',
      paragraphs: [
        'L’épine calcanéenne est fréquente. Sa fréquence dépend de l’âge et de la méthode utilisée pour la chercher.',
        'L’étude de Menz 2008 sur des personnes âgées cite des travaux antérieurs qui rapportaient une fréquence de l’épine calcanéenne de 11 à 16\u00A0% en population générale, bien en dessous des 55\u00A0% trouvés par les auteurs dans leur propre échantillon de 216\u00A0personnes de 62 à 94\u00A0ans. Une autre étude par IRM sur 77\u00A0volontaires sans symptômes (âge moyen 48\u00A0ans, de 23 à 83\u00A0ans) a trouvé une épine calcanéenne chez 15 d’entre eux, soit 19\u00A0% (Ehrmann et coll., 2014).',
        'Le schéma est constant\u00A0: une grande partie des personnes qui ont une épine n’ont aucun symptôme, et une épine seule ne prédit pas si quelqu’un aura mal au talon. C’est pourquoi la recommandation de 2023 sur la douleur au talon ne fait pas de l’épine calcanéenne une raison de changer d’approche pour les exercices.',
      ],
      cites: [CITE.ehrmannSpur, CITE.menzSpur],
    },
    {
      h2: 'Que dit la recommandation de 2023 sur l’épine calcanéenne\u00A0?',
      paragraphs: [
        'La recommandation de pratique clinique de 2023 sur la douleur au talon, publiée dans le Journal of Orthopaedic and Sports Physical Therapy, fait de la fasciite plantaire la cause la plus fréquente de douleur sous le talon. Elle cite le «\u00A0syndrome de l’épine calcanéenne\u00A0» parmi plusieurs diagnostics différentiels, avec le syndrome du coussinet graisseux, l’irritation nerveuse et la fracture de fatigue du calcanéum.',
        'La recommandation ne conseille pas l’imagerie en premier quand l’examen clinique oriente déjà vers une fasciite plantaire. Elle indique que l’imagerie n’est «\u00A0en général pas indiquée chez les patients qui remplissent les critères cliniques de fasciite plantaire, tant que les soins conservateurs n’ont pas échoué\u00A0». Quand l’imagerie est envisagée, la radio en charge vient en premier, puis l’échographie ou l’IRM si besoin.',
        'En pratique, un professionnel de santé qui voit le schéma typique (douleur aux premiers pas du matin, sensibilité à l’intérieur du talon et cheville peu souple) peut commencer les étirements et le renforcement sans attendre une radio. La présence ou l’absence d’une épine sur une radio faite plus tard ne change pas le plan d’exercices.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Faut-il une radio pour distinguer fasciite plantaire et épine calcanéenne\u00A0?',
      paragraphs: [
        'En général, une radio n’est pas nécessaire pour une fasciite plantaire. Le diagnostic est clinique\u00A0: il repose sur l’endroit de la douleur, le moment où elle survient et ce qui l’aggrave. Une radio peut montrer une épine calcanéenne, mais en trouver une ne change pas ce que vous faites contre la douleur, et ne pas en trouver n’écarte pas une fasciite plantaire.',
        'L’imagerie devient utile quand la douleur ne suit pas le schéma typique de la fasciite plantaire, quand elle ne s’est pas améliorée après plusieurs semaines de soins conservateurs, ou quand un professionnel de santé soupçonne autre chose, comme une fracture de fatigue, un problème nerveux ou une déchirure du fascia plantaire. L’échographie peut mesurer l’épaisseur du fascia plantaire (au-delà de 4\u00A0mm, il est en général considéré comme épaissi), et l’IRM peut montrer des détails des tissus mous que la radio ne voit pas.',
        'Si on vous a déjà dit qu’une radio montre une épine calcanéenne, l’épine elle-même n’a presque jamais besoin d’une prise en charge à part. Les exercices et étirements qui aident la fasciite plantaire agissent aussi sur le tissu mou autour de l’épine. Voir [épine calcanéenne\u00A0: exercices](/fr/epine-calcaneenne-exercices/) pour la routine complète.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Si l’épine n’est pas le problème, qu’est-ce qui l’est\u00A0?',
      paragraphs: [
        'La douleur vient en général du fascia plantaire et des tissus autour, pas de l’os. Le fascia plantaire s’attache sous l’os du talon. Quand il est surchargé, surtout chez quelqu’un qui a un mollet raide, un IMC élevé ou de longues heures debout, ce point d’attache s’irrite. Cette irritation, c’est la fasciite plantaire.',
        'Un mollet raide est l’un des facteurs de risque les plus forts. Dans une étude cas-témoins appariée sur 50\u00A0personnes atteintes de fasciite plantaire et 100\u00A0témoins, une flexion dorsale de cheville réduite, c’est-à-dire la capacité du pied à remonter vers le tibia, avait l’odds ratio le plus élevé de tous les facteurs mesurés. Rester debout la majeure partie de la journée de travail était aussi significatif, avec un risque multiplié par 3,6 (Riddle et coll., 2003).',
        'L’épine, quand elle est là, se trouve tout près. Elle a pu se former au fil des mois ou des années en réponse au même stress mécanique qui a irrité le fascia. Mais ce sont le fascia et le mollet qui répondent aux étirements et au renforcement, pas l’os. C’est pourquoi la recommandation conseille l’exercice, pas l’ablation de l’épine.',
        'Pour une vue d’ensemble de la fasciite plantaire, avec les causes, les facteurs de risque et ce que conseille la recommandation, voir [fasciite plantaire](/fr/fasciite-plantaire/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Faut-il parfois retirer une épine calcanéenne\u00A0?',
      paragraphs: [
        'L’ablation chirurgicale d’une épine calcanéenne est rare et n’est pas une option de première intention. La recommandation de 2023 ne conseille pas de retirer l’épine en cas de fasciite plantaire. Plusieurs études ont montré que la douleur de la fasciite plantaire peut disparaître avec des soins conservateurs même quand l’épine reste visible à la radio. L’American Academy of Orthopaedic Surgeons dit clairement que «\u00A0les épines calcanéennes ne causent pas la douleur de la fasciite plantaire\u00A0» et que «\u00A0la douleur de la fasciite plantaire peut être traitée sans retirer l’épine\u00A0».',
        'La chirurgie est parfois envisagée quand la douleur n’a pas répondu à des mois de soins conservateurs, mais l’intervention est en général une libération partielle du fascia plantaire, pas une ablation de l’épine. Si l’épine est retirée au cours de cette intervention, les données suggèrent que le bénéfice vient de la libération du fascia, pas du retrait de l’os.',
        'La grande majorité des personnes qui ont mal au talon et une épine vont mieux avec les mêmes étirements, le même travail du mollet et la même gestion de la charge que les personnes sans épine. Voir [épine calcanéenne\u00A0: exercices](/fr/epine-calcaneenne-exercices/) pour la routine pratique.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Quels exercices aident quand on a une épine calcanéenne\u00A0?',
      paragraphs: [
        'Les exercices contre la douleur de l’épine calcanéenne sont les mêmes que ceux que la recommandation conseille pour la fasciite plantaire\u00A0: étirement du fascia plantaire, étirement du mollet et renforcement progressif du mollet. L’exercice ne dissout pas l’épine. Il agit sur le tissu mou qui cause réellement la douleur.',
        'La recommandation donne aux étirements du fascia plantaire et du mollet sa meilleure note, **A**, et au renforcement musculaire un **B**. Ces notes s’appliquent qu’il y ait une épine ou non. [Épine calcanéenne\u00A0: exercices](/fr/epine-calcaneenne-exercices/) présente la routine complète avec les séries, les maintiens et la progression. Voici trois exercices pour commencer.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 note l’étirement du fascia plantaire A, sa meilleure note.' },
          dose: '10\u00A0maintiens de 10\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez une cheville sur l’autre genou. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Faites-le avant de vous lever le matin et après être resté longtemps assis.',
          often: 'Chaque matin et après être resté assis',
          feel: 'Un étirement le long de la voûte, pas une douleur',
          stop: 'La douleur atteint 6/10',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous avant votre premier pas',
          alt: 'Une personne assise qui tire les orteils vers elle pour étirer le fascia plantaire',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'strong', why: 'Même note A de la recommandation. Vise le gastrocnémien, le gros muscle superficiel du mollet.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur. Jambe arrière tendue, talon au sol, hanches vers l’avant. Un mollet raide tire sur le talon par le tendon d’Achille, ce qui ajoute de la charge au fascia.',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, penchez-vous en avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 note le renforcement musculaire B pour la fasciite plantaire. Une étape vers les montées sur pointes avec serviette et charge.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Cet exercice développe la capacité du mollet sans forte charge sur le talon.',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez bien droit, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Épine calcanéenne et fasciite plantaire, c’est pareil\u00A0?',
      cites: [CITE.guideline],
      a: 'Non. Une épine calcanéenne est une excroissance osseuse sous l’os du talon. La fasciite plantaire est une irritation du fascia plantaire, l’épaisse bande de tissu qui va du talon aux orteils. Les deux apparaissent souvent ensemble, mais une épine peut exister sans douleur et une fasciite plantaire peut survenir sans épine. La recommandation de 2023 sur la douleur au talon les traite comme deux constatations séparées.',
    },
    {
      q: 'Une épine calcanéenne fait-elle mal\u00A0?',
      cites: [CITE.menzCoexistence],
      a: 'La plupart des épines calcanéennes ne font pas mal. Dans une étude sur 530\u00A0personnes de 50\u00A0ans et plus ayant mal aux pieds, une épine seule était rare, et la douleur au talon était liée à une épine accompagnée d’un fascia plantaire épaissi (Menz et coll., 2019). Dans une autre étude sur 216\u00A0personnes âgées, environ 6 sur 10 de celles qui avaient une épine n’avaient ni douleur actuelle ni douleur passée au talon (Menz et coll., 2008).',
    },
    {
      q: 'Peut-on avoir une fasciite plantaire sans épine calcanéenne\u00A0?',
      a: 'Oui. Beaucoup de personnes atteintes de fasciite plantaire n’ont aucune épine à la radio. La douleur vient du fascia plantaire irrité, pas de l’os. La recommandation de 2023 n’exige pas d’imagerie pour diagnostiquer une fasciite plantaire quand le schéma clinique est clair\u00A0: douleur aux premiers pas du matin, sensibilité au talon et mollet raide.',
    },
    {
      q: 'Les exercices font-ils disparaître l’épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'Non. Les étirements et le renforcement ne dissolvent pas une épine calcanéenne. Ils agissent sur le tissu mou autour, surtout le fascia plantaire et les muscles du mollet, qui sont en général à l’origine de la douleur. L’épine elle-même demande rarement de l’attention, et la recommandation conseille les mêmes exercices qu’il y ait une épine ou non.',
    },
    {
      q: 'Faut-il faire une radio si je pense avoir une épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'La recommandation de 2023 indique que l’imagerie n’est en général pas nécessaire quand l’examen clinique oriente vers une fasciite plantaire. Une radio peut montrer une épine, mais en trouver une ne change pas le plan d’exercices, et ne pas en trouver n’écarte pas une fasciite plantaire. L’imagerie devient utile quand la douleur ne s’améliore pas après plusieurs semaines, ou quand un professionnel de santé soupçonne une fracture de fatigue ou un problème nerveux.',
    },
    {
      q: 'L’épine calcanéenne est-elle fréquente\u00A0?',
      cites: [CITE.menzSpur],
      a: 'Sa fréquence dépend de l’âge. Des travaux antérieurs cités dans l’étude de Menz 2008 rapportaient 11 à 16\u00A0% de la population générale avec une épine calcanéenne plantaire à la radio. Dans une étude sur 216\u00A0personnes de 62 à 94\u00A0ans, 55\u00A0% avaient au moins une épine plantaire (Menz et coll., 2008). L’épine devient plus fréquente avec l’âge, un IMC plus élevé et l’arthrose.',
    },
    {
      q: 'Quand faut-il opérer une épine calcanéenne\u00A0?',
      cites: [CITE.latt],
      a: 'Presque jamais. La recommandation ne conseille pas de retirer l’épine en cas de fasciite plantaire. Environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux comme les étirements, le renforcement du mollet et la gestion de la charge (Latt et coll., 2020). Quand la chirurgie est envisagée après des mois de soins conservateurs sans succès, elle consiste en général à libérer le fascia plantaire, pas à retirer l’épine.',
    },
    {
      q: 'Que se passe-t-il si on continue à marcher avec une épine calcanéenne\u00A0?',
      cites: [CITE.menzSpur, CITE.guideline],
      a: 'Marcher ne va pas enfoncer l’épine dans les tissus voisins. Une douleur qui se réveille à la marche vient en général du fascia plantaire irrité à côté de l’épine, pas de l’os lui-même. La recommandation de 2023 conseille d’adapter la charge, comme la distance ou l’allure, plutôt que d’arrêter, si la marche aggrave le talon le lendemain matin.',
    },
    {
      q: 'Est-ce bien de masser une épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'Un massage doux autour d’une épine calcanéenne peut détendre les tissus mous, mais il ne change pas l’os. Faire rouler la plante du pied avec une pression ferme, mais pas vive, peut assouplir le fascia et le mollet, les tissus qui causent en général la douleur. La recommandation note A la thérapie manuelle par un professionnel de santé\u00A0; l’automassage relève du confort et ne remplace pas les étirements.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une blessure ou une chute, ce qui peut évoquer une déchirure du fascia plantaire plutôt qu’une fasciite',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'presser les côtés du talon reproduit la douleur, ce qui peut évoquer une fracture de fatigue plutôt qu’une épine ou une fasciite',
      'la douleur s’accompagne d’engourdissements, de fourmillements ou de brûlures, ce qui peut évoquer une compression nerveuse',
      'le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'les deux talons font mal et la raideur du matin dure plus de 30\u00A0minutes, surtout si d’autres articulations sont raides ou gonflées',
      'la douleur vous empêche de dormir ou est présente au repos, pas seulement en appui',
      'elle ne s’est pas améliorée après plusieurs semaines d’étirements, de travail du mollet et de charge réduite',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Que votre radio montre une épine ou non, l’approche par l’exercice est la même. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la douleur au talon, le premier objectif est une douleur du matin à 1/10 ou moins pendant 14\u00A0jours de suite. Les étirements commencent dès le premier jour. Le renforcement du mollet s’ajoute quand le premier objectif passe du calme de la douleur au développement de la capacité.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois l’objectif atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous suiviez vos progrès au lieu de deviner.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si vous ne savez pas si votre douleur au talon est une fasciite plantaire, une épine calcanéenne ou autre chose, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Fasciite plantaire ou épine calcanéenne',
  campaign: 'guide-pf-vs-heel-spur-fr',
};
