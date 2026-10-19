import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/heel-pain-not-plantar-fasciitis.ts (2026-10-19),
 * written around «douleur au talon mais pas fasciite plantaire» and «autres
 * causes de douleur au talon». «Vous», terminology and exercise names as in
 * `lib/guides/fr.ts` and the other articles-fr pages. Figures, doses, grades,
 * hedges and sources are identical to the English page after its fact-check.
 * Same CITE keys and media ids. Links to /foot-pain-identifier/ removed (no
 * French version), words kept as plain text.
 */

export const HEEL_NOT_PF_FR: Guide = {
  lang: 'fr',
  page: 'heelNotPf',
  mainSource: CITE.latt,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Mal au talon sans fasciite plantaire\u00A0? 9 autres causes',
  description:
    'Douleur au talon qui n’est pas une fasciite plantaire\u00A0: coussinet graisseux, nerfs, fracture de fatigue, Achille, Haglund, Sever, arthrite et dos comparés.',
  h1: 'Douleur au talon qui n’est pas une fasciite plantaire\u00A0: les causes qui lui ressemblent et ce qui les distingue',
  lede:
    'Si votre douleur au talon ne suit pas le schéma habituel de la [fasciite plantaire](/fr/fasciite-plantaire/), pire aux premiers pas du matin puis plus légère une fois échauffé, il se passe peut-être autre chose. Sous le talon, les causes qui lui ressemblent le plus souvent sont un coussinet graisseux du talon contusionné ou aminci, un nerf irrité, y compris un nerf comprimé dans le bas du dos, une fracture de fatigue du talon et une arthrite inflammatoire (Latt et coll., 2020). La douleur à l’arrière du talon a ses propres causes, comme le tendon d’Achille. Chez 250\u00A0personnes ayant mal sous le talon, la fasciite plantaire expliquait 53,2\u00A0% des cas et l’atrophie du coussinet graisseux 14,8\u00A0% (Yi et coll., 2011).',
  intro: [
    'Cette page compare neuf causes qui ressemblent à la fasciite plantaire\u00A0: où chacune fait mal, à quel moment, ce qui l’aggrave et quoi faire ensuite. Ce n’est pas un diagnostic. Plusieurs se ressentent de la même façon, deux peuvent coexister, et seul un professionnel de santé qui examine votre pied peut les distinguer. Pour un tri rapide selon l’endroit où vous avez mal, un outil d’identification de la douleur au pied le fait\u00A0; cette page explique les différences qui se cachent derrière.',
  ],
  takeaways: [
    'La douleur typique de la fasciite plantaire se situe près du bord interne du talon, est pire au premier pas du matin ou après être resté assis, s’améliore avec l’activité puis s’aggrave quand l’activité se prolonge (Latt et coll., 2020).',
    'Chez 250\u00A0personnes ayant une douleur sous le talon, la fasciite plantaire représentait 53,2\u00A0% des cas, l’atrophie du coussinet graisseux 14,8\u00A0%, et les deux ensemble 9,2\u00A0% (Yi et coll., 2011).',
    'Une douleur au talon qui brûle, qui fait comme une décharge électrique ou qui fourmille oriente souvent vers un nerf. Une revue estime que la compression du nerf de Baxter pourrait expliquer jusqu’à 20\u00A0% des douleurs chroniques du talon (Tedeschi, 2025).',
    'Une fracture de fatigue du talon fait en général mal à l’effort, pas au premier pas, et chez 30\u00A0recrues militaires elle n’était visible sur une radiographie standard que dans 15\u00A0% des cas (Latt et coll., 2020\u00A0; Sormaala et coll., 2006).',
    'Une douleur aux deux talons associée à d’autres articulations douloureuses ou raides, ou à un dos raide, évoque une cause inflammatoire qui relève d’un médecin, pas seulement d’étirements (Latt et coll., 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Quelles autres causes de douleur au talon que la fasciite plantaire\u00A0?',
      keyFact: 'Chez 250\u00A0personnes ayant une douleur sous le talon, la fasciite plantaire expliquait 53,2\u00A0% des cas, l’atrophie du coussinet graisseux seule 14,8\u00A0%, et les deux ensemble 9,2\u00A0% (Yi et coll., 2011).',
      paragraphs: [
        '**La fasciite plantaire est la cause la plus fréquente de douleur au talon, mais elle est loin d’être la seule.** Une recommandation de chirurgiens du pied américains décrit la douleur au talon comme surtout mécanique, mais précise qu’il faut aussi envisager des causes nerveuses, arthritiques, traumatiques, tumorales, infectieuses et vasculaires (Thomas et coll., 2010). Une revue de 2020 regroupe les causes de douleur sous le talon en problèmes nerveux, blessures comme une fracture de fatigue ou une rupture du fascia, arthrites inflammatoires, et usure du coussinet graisseux ou du fascia lui-même (Latt et coll., 2020).',
        'Le tableau place les neuf causes les plus fréquentes à côté de la fasciite plantaire. Lisez-le comme une carte des schémas, pas comme une liste à cocher\u00A0: les cases décrivent ce qui est typique, et votre talon n’est pas obligé de suivre le manuel.',
      ],
      table: {
        caption: 'Les causes qui ressemblent à la fasciite plantaire\u00A0: schémas typiques. Seul un professionnel de santé peut confirmer laquelle vous concerne.',
        head: ['Affection', 'Où ça fait mal', 'Quand', 'Pire avec', 'Étape suivante'],
        rows: [
          ['[Fasciite plantaire](/fr/fasciite-plantaire/)', 'Dessous du talon, côté interne', 'Premiers pas du matin, après être assis', 'Station debout, marche prolongée', 'Étirements et renforcement du mollet'],
          ['[Coussinet graisseux](/fr/syndrome-coussinet-graisseux-talon/)', 'Centre du talon, comme un bleu profond', 'Debout et en marchant', 'Sols durs, pieds nus', 'Amorti, avis d’un professionnel'],
          ['Nerf (Baxter, canal tarsien)', 'Talon interne ou plante, peut s’étendre', 'Sans lien avec les premiers pas, parfois au repos', 'Brûlure, fourmillements, engourdissement', 'Avis d’un professionnel'],
          ['[Fracture de fatigue](/fr/fasciite-plantaire-ou-fracture-de-fatigue/)', 'Tout l’os du talon, côtés sensibles', 'Augmente avec l’effort', 'Course, sauts, plus de kilomètres', 'Décharger, consulter rapidement'],
          ['[Achille, à l’insertion](/fr/fasciite-plantaire-ou-tendinite-achille/)', 'Arrière du talon, sur l’os', 'Pendant et après l’effort', 'Montées, escaliers, étirement profond', 'Charger le mollet, descentes au sol'],
          ['[Haglund](/fr/maladie-de-haglund/)', 'Bosse en haut de l’arrière du talon', 'Dans les chaussures', 'Contreforts rigides', 'Contrefort souple, talonnette'],
          ['[Sever (enfants)](/fr/maladie-de-sever/)', 'Arrière ou côtés du talon', 'Pendant et après le sport', 'Course, sauts, poussées de croissance', 'Moins de charge, avis d’un professionnel'],
          ['[Tibial postérieur](/fr/dysfonction-tendon-tibial-posterieur/)', 'Malléole interne et voûte', 'En marchant, debout', 'Sol irrégulier, montées', 'Avis d’un professionnel, puis exercices'],
          ['Arthrite inflammatoire', 'Les deux talons, avec d’autres articulations', 'Raideur matinale de plus de 30\u00A0minutes', 'Autres articulations raides, dos raide', 'Consulter un médecin'],
          ['Douleur venant du dos', 'Talon ou plante, avec douleur de jambe', 'Variable, avec mal de dos', 'Mal de dos ou de jambe, engourdissement', 'Consulter un médecin'],
        ],
      },
      after: [
        'Les lignes sur les nerfs, le dos et l’arthrite n’ont pas de lien parce que nous n’avons pas de page à leur sujet\u00A0: elles demandent un examen médical, pas un guide d’exercices. Chaque ligne est expliquée dans les sections ci-dessous.',
      ],
      cites: [CITE.yiFatPad, CITE.thomasCpg, CITE.latt],
    },
    {
      h2: 'À quoi ressemble habituellement une fasciite plantaire\u00A0?',
      paragraphs: [
        '**Connaître le schéma habituel est le moyen le plus simple de repérer quand votre talon n’y correspond pas.** La fasciite plantaire typique est une douleur sourde ou lancinante à l’avant du talon, côté interne, là où s’attache le fascia. Elle est pire au premier pas du matin et quand vous vous levez après être resté assis, s’améliore souvent une fois en mouvement, puis s’aggrave de nouveau quand la station debout ou la marche se prolonge (Latt et coll., 2020). Plus de détails sur ce schéma dans [douleur au talon au réveil](/fr/douleur-talon-au-reveil/).',
        'La même revue indique que lorsqu’une personne ne décrit pas ces signes classiques, le professionnel de santé doit chercher d’autres causes. Elle note aussi que la fasciite plantaire touche en général un seul pied, même si environ 30\u00A0% des personnes l’ont des deux côtés (Latt et coll., 2020). Deux talons douloureux n’excluent donc pas une fasciite plantaire, mais c’est une raison de regarder plus largement.',
        'La fasciite plantaire est aussi la cause la plus fréquente\u00A0: un talon qui correspond à l’essentiel du schéma reste donc le plus probablement une fasciite plantaire. Chez les 250\u00A0personnes citées plus haut, elle expliquait à elle seule environ la moitié des cas, et elle était présente dans 9,2\u00A0% de cas supplémentaires avec une atrophie du coussinet graisseux (Yi et coll., 2011).',
      ],
      cites: [CITE.latt, CITE.yiFatPad],
    },
    {
      h2: 'Est-ce un nerf, ou une douleur qui vient du dos\u00A0?',
      keyFact: 'Une revue de 2025 estime que la compression du nerf de Baxter pourrait représenter jusqu’à 20\u00A0% des douleurs chroniques du talon, et qu’elle est souvent confondue avec une fasciite plantaire (Tedeschi, 2025).',
      paragraphs: [
        '**Une douleur décrite comme une brûlure ou une décharge électrique vient souvent d’un nerf** (Latt et coll., 2020). Trois sources nerveuses sont les suspects habituels\u00A0:',
        {
          list: [
            '**Le nerf de Baxter**, une petite branche qui passe sous le talon. Quand il est comprimé, il donne une douleur chronique, en brûlure, sur toute la largeur du coussinet du talon (Latt et coll., 2020). Une revue estime qu’il pourrait expliquer jusqu’à 20\u00A0% des douleurs chroniques du talon et qu’il est souvent confondu avec une fasciite plantaire (Tedeschi, 2025), tandis qu’une autre le juge peu fréquent (Latt et coll., 2020).',
            '**Le syndrome du canal tarsien**, quand le nerf tibial est comprimé derrière la malléole interne. Il donne en général une douleur en brûlure ou en décharge le long de la plante, souvent avec un engourdissement (Latt et coll., 2020). Plus sur les douleurs nerveuses de la voûte dans [douleur à la voûte plantaire](/fr/douleur-voute-plantaire/).',
            '**Un nerf comprimé dans le bas du dos**, au niveau L5 ou S1. C’est relativement fréquent, et cela s’accompagne en général d’un mal de dos, d’une douleur qui descend dans la jambe, ou d’un engourdissement du pied ou de la jambe (Latt et coll., 2020).',
          ],
        },
        'Une revue sur les douleurs du talon d’origine nerveuse a conclu que la compression d’un nerf pourrait jouer un rôle à la fois au début et dans les douleurs du talon qui ne s’améliorent pas, mais que son mécanisme et la meilleure façon de la tester restent discutés (Alshami et coll., 2008). La douleur de nuit ou au repos avec des fourmillements est abordée dans [douleur au talon la nuit](/fr/douleur-talon-la-nuit/).',
        'C’est un groupe où les exercices faits seul ne sont pas la première étape. Un professionnel de santé examine le pied, par exemple en tapotant le long du nerf tibial, et peut recourir à une échographie, à des examens des nerfs ou à une IRM (Latt et coll., 2020\u00A0; Tedeschi, 2025).',
      ],
      cites: [CITE.latt, CITE.tedeschiBaxter, CITE.alshami],
    },
    {
      h2: 'Est-ce une fracture de fatigue ou le coussinet graisseux\u00A0?',
      keyFact: 'Chez 30\u00A0recrues militaires dont l’IRM montrait une lésion de fatigue du talon, la lésion n’était visible sur une radiographie standard que dans 15\u00A0% des cas (Sormaala et coll., 2006).',
      paragraphs: [
        '**Les deux font plutôt mal à l’effort qu’au premier pas du matin.** Une fracture de fatigue du talon donne typiquement une douleur sur la partie arrière de l’os du talon, liée à l’activité et non au lever. Elle est plus probable si vous avez déjà eu une faible densité osseuse ou une fracture de fatigue (Latt et coll., 2020). Elle suit en général une forte hausse de la marche ou de la course, ou le passage à une surface plus dure (Tu, 2018).',
        'Une radiographie normale ne l’exclut pas\u00A0: chez 30\u00A0recrues ayant une lésion de fatigue du talon à l’IRM, les radiographies standard ne la montraient que dans 15\u00A0% des cas (Sormaala et coll., 2006). La comparaison point par point se trouve dans [fasciite plantaire ou fracture de fatigue](/fr/fasciite-plantaire-ou-fracture-de-fatigue/).',
        'La douleur du coussinet graisseux est en général décrite comme une douleur profonde, comme un bleu, au milieu du talon, pire sur les sols durs et pieds nus. Comme la fracture de fatigue, elle est plutôt liée à l’activité (Latt et coll., 2020), et dans une consultation elle touchait plus souvent les deux talons et était aggravée par la station debout (Yi et coll., 2011). C’était la deuxième cause la plus fréquente chez les 250\u00A0personnes citées plus haut, avec 14,8\u00A0% (Yi et coll., 2011). Une revue de 2022 n’a trouvé que sept études originales sur le sujet\u00A0: une grande partie des conseils repose donc sur l’expérience, pas sur des essais (Chang et coll., 2022). Plus de détails dans [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/), et sur la place de l’épine calcanéenne, dans [fasciite plantaire ou épine calcanéenne](/fr/fasciite-plantaire-ou-epine-calcaneenne/).',
      ],
      cites: [CITE.latt, CITE.tuHeelPain, CITE.sormaalaCalcaneus, CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'Et si la douleur est à l’arrière du talon\u00A0?',
      paragraphs: [
        '**La fasciite plantaire fait mal sous le talon. Une douleur à l’arrière du talon vient en général du tendon d’Achille, de l’os où il s’attache ou, chez l’enfant, du cartilage de croissance.** Trois causes qui peuvent prêter à confusion se trouvent ici\u00A0:',
        {
          list: [
            '**La tendinopathie d’Achille d’insertion**, une douleur exactement là où le tendon d’Achille rejoint l’os du talon, plutôt que plus haut sur le tendon (Jonsson et coll., 2008). Voir [fasciite plantaire ou tendinite d’Achille](/fr/fasciite-plantaire-ou-tendinite-achille/) et [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/).',
            '**La maladie de Haglund**, une bosse osseuse en haut de l’arrière du talon contre laquelle frottent les chaussures, qui peut irriter la bourse et le tendon (Yuen et coll., 2022). Voir [maladie de Haglund](/fr/maladie-de-haglund/).',
            '**La maladie de Sever** chez les enfants encore en croissance\u00A0: le cartilage de croissance à l’arrière du talon devient douloureux avec la course et les sauts. Chez l’enfant, une douleur quand on presse le talon des deux côtés oriente vers elle (Tu, 2018). Voir [maladie de Sever](/fr/maladie-de-sever/).',
          ],
        },
        'Une douleur d’Achille à l’insertion change la façon de faire les exercices\u00A0: les descentes du talon se font au niveau du sol plutôt qu’en laissant descendre le talon sous la marche, car un étirement profond peut appuyer le tendon contre l’os (Jonsson et coll., 2008).',
      ],
      cites: [CITE.jonsson, CITE.yuenHaglund, CITE.tuHeelPain],
    },
    {
      h2: 'Et si les deux talons font mal, ou si d’autres articulations sont raides\u00A0?',
      paragraphs: [
        '**Une douleur aux deux talons, une douleur au talon associée à plusieurs articulations douloureuses ou raides, ou un dos raide évoquent une cause inflammatoire**, comme le rhumatisme psoriasique, l’arthrite réactionnelle ou la spondyloarthrite (Latt et coll., 2020). Le groupe des spondyloarthrites est plus fréquent chez les hommes jeunes, alors que la fasciite plantaire est plus fréquente à l’âge moyen et plus souvent chez les femmes (Latt et coll., 2020).',
        'La même revue liste les indices qui poussent un médecin à prescrire une prise de sang\u00A0: des symptômes ailleurs dans le corps, les deux pieds atteints, plusieurs articulations touchées, surtout les petites, et une raideur matinale qui dure plus de 30\u00A0minutes (Latt et coll., 2020).',
        'Les deux talons peuvent aussi faire mal avec une fasciite plantaire. Dans un suivi de 5 à 15\u00A0ans de 174\u00A0personnes ayant une fasciite plantaire, une douleur aux deux talons était associée à des symptômes plus durables (Hansen et coll., 2018). C’est pourquoi deux talons douloureux sont une raison de se faire examiner, pas une preuve d’arthrite.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Et si la douleur est à l’intérieur de la cheville et de la voûte\u00A0?',
      paragraphs: [
        '**Une douleur située derrière ou sous la malléole interne et le long de la voûte, plutôt que sous le talon, peut venir du tendon tibial postérieur.** C’est le principal soutien actif de la voûte interne, et les personnes qui ont un problème à ce niveau ont mal sur le côté interne de la cheville, avec un pied qui s’aplatit lentement (Deu et coll., 2022). Dans une enquête auprès de 582\u00A0femmes de plus de 40\u00A0ans en Angleterre, 3,3\u00A0% avaient une dysfonction du tendon tibial postérieur à un stade précoce, et aucune n’avait été diagnostiquée (Kohls-Gatzoulis et coll., 2009).',
        'Une voûte qui s’aplatit d’un côté, ou du mal à monter sur la pointe de ce pied, est une raison de consulter un professionnel de santé. L’exercice a un certain appui aux premiers stades, mais seuls trois petits essais, avec 93\u00A0personnes au total, l’ont testé (Ross et coll., 2018). Plus de détails dans [dysfonction du tendon tibial postérieur](/fr/dysfonction-tendon-tibial-posterieur/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'Que faire ensuite, et quand les exercices ont-ils leur place\u00A0?',
      paragraphs: [
        '**Si votre talon correspond au schéma de la fasciite plantaire et qu’aucun des signes d’alerte ci-dessous ne s’applique, les étirements et le renforcement du mollet sont les options de première intention.** La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note **A** et au renforcement la note **B** pour la fasciite plantaire (Koc et coll., 2023). Ces exercices concernent uniquement la fasciite plantaire. Ils ne sont pas prévus pour une fracture suspectée, un problème nerveux ou une arthrite.',
        'Si votre douleur correspond à une autre ligne du tableau, ou si vous n’êtes pas sûr, consultez votre médecin généraliste, un kinésithérapeute ou un podologue. Apportez une courte note\u00A0: où ça fait mal, quand c’est le pire, ce qui aggrave, si un pied ou les deux sont touchés, et ce qui accompagne la douleur, comme un engourdissement, un gonflement ou un mal de dos. C’est ce dont un professionnel de santé se sert pour faire le tri entre les causes.',
        'Si vous faites des exercices pour la fasciite plantaire depuis plusieurs semaines et que rien n’a changé, cela vaut aussi une consultation. Une prise en charge sans chirurgie apporte un soulagement complet à environ 90\u00A0% des personnes ayant une fasciite plantaire, même si cela peut prendre trois à six mois\u00A0: une douleur qui ne bouge pas est donc une raison de vérifier le diagnostic (Latt et coll., 2020). Voir [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) et le programme complet d’[exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire (fasciite plantaire uniquement)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note, pour la fasciite plantaire. Pas pour les autres causes de cette page.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des séances',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assis au bord du lit, avant que votre pied touche le sol.',
          stop: 'Une brûlure ou des fourmillements, une douleur dans l’os du talon lui-même, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne qui tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Étirement du mollet (fasciite plantaire uniquement)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note, pour la fasciite plantaire. Pas pour les autres causes de cette page.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée, cet étirement compte donc même si vous le sentez plus haut.',
          stop: 'Une douleur à l’arrière du talon, là où s’attache le tendon d’Achille, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (fasciite plantaire uniquement)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note, pour la fasciite plantaire. Pas pour les autres causes de cette page.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des séances',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur à l’arrière du talon, là où s’attache le tendon d’Achille, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes assis (fasciite plantaire uniquement)',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B pour la fasciite plantaire. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '3\u00A0jours par semaine, jamais deux jours de suite',
          feel: 'Un travail en bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Genou plié, cet exercice sollicite surtout le soléaire, le muscle profond du mollet, presque sans charge sur le talon. L’essai sur les montées sur pointes cité sur ce site a testé une version debout plus difficile (Rathleff et coll., 2015).',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Avec quoi confond-on souvent la fasciite plantaire\u00A0?',
      cites: [CITE.latt, CITE.yiFatPad],
      a: 'Les causes les plus fréquentes qui lui ressemblent sont le syndrome du coussinet graisseux du talon, une compression nerveuse comme celle du nerf de Baxter ou le syndrome du canal tarsien, une fracture de fatigue du talon et une douleur d’Achille à l’insertion. Il peut aussi s’agir d’une arthrite inflammatoire ou d’un nerf comprimé dans le bas du dos. Chez 250\u00A0personnes ayant mal sous le talon, l’atrophie du coussinet graisseux expliquait 14,8\u00A0% des cas.',
    },
    {
      q: 'Comment savoir si ma douleur au talon n’est pas une fasciite plantaire\u00A0?',
      cites: [CITE.latt],
      a: 'Vous ne pouvez pas en être sûr sans examen, mais certains signes ne collent pas. La fasciite plantaire est en général pire aux premiers pas du matin et s’atténue quand vous bougez. Une brûlure ou des fourmillements, une douleur qui augmente avec l’effort, une douleur à l’arrière du talon, ou les deux talons avec des articulations raides évoquent autre chose. Un professionnel de santé peut faire le tri.',
    },
    {
      q: 'Une douleur au talon peut-elle venir du dos\u00A0?',
      cites: [CITE.latt],
      a: 'Oui. Un nerf comprimé dans le bas du dos, au niveau L5 ou S1, peut donner une douleur, un engourdissement ou des fourmillements dans le talon et la plante. C’est relativement fréquent et cela s’accompagne en général d’un mal de dos ou d’une douleur qui descend dans la jambe. Une faiblesse du pied ou un engourdissement qui s’étend demande de voir un médecin rapidement.',
    },
    {
      q: 'Que ressent-on quand un nerf fait mal au talon\u00A0?',
      cites: [CITE.latt, CITE.tedeschiBaxter],
      a: 'La douleur nerveuse au talon est souvent une brûlure, une douleur fulgurante ou comme une décharge électrique, parfois avec des fourmillements ou un engourdissement de la plante. La compression du nerf de Baxter donne une brûlure sur toute la largeur du coussinet du talon, et une revue estime qu’elle pourrait expliquer jusqu’à 20\u00A0% des douleurs chroniques du talon. Elle demande l’avis d’un professionnel de santé.',
    },
    {
      q: 'Une douleur aux deux talons, est-ce une fasciite plantaire\u00A0?',
      cites: [CITE.latt],
      a: 'C’est possible\u00A0: environ 30\u00A0% des personnes ayant une fasciite plantaire l’ont aux deux pieds. Mais une douleur aux deux talons, surtout avec d’autres articulations douloureuses ou raides, un dos raide ou une raideur matinale de plus de 30\u00A0minutes, peut orienter vers une arthrite inflammatoire. Cette association est une raison de consulter un médecin.',
    },
    {
      q: 'Une radiographie peut-elle montrer la cause de ma douleur au talon\u00A0?',
      cites: [CITE.sormaalaCalcaneus, CITE.guideline],
      a: 'Parfois, mais une radiographie normale exclut moins de choses qu’on ne le pense. Chez 30\u00A0recrues ayant une lésion de fatigue du talon à l’IRM, les radiographies standard ne la montraient que dans 15\u00A0% des cas. Pour une fasciite plantaire typique, la recommandation de 2023 indique qu’une imagerie n’est en général pas nécessaire. C’est un professionnel de santé qui décide si une échographie, une IRM ou des examens des nerfs valent la peine.',
    },
    {
      q: 'Pourquoi ma fasciite plantaire ne s’améliore-t-elle pas\u00A0?',
      cites: [CITE.latt],
      a: 'Il y a plusieurs raisons possibles, et l’une est qu’il ne s’agit peut-être pas d’une fasciite plantaire. Environ 90\u00A0% des personnes ayant une fasciite plantaire vont mieux avec une prise en charge sans chirurgie\u00A0: une douleur qui n’a pas changé après plusieurs semaines d’étirements et de renforcement réguliers est donc une bonne raison de faire vérifier le diagnostic par un professionnel de santé.',
    },
    {
      q: 'Qu’est-ce qui cause une douleur au talon chez l’enfant, si ce n’est pas une fasciite plantaire\u00A0?',
      cites: [CITE.tuHeelPain],
      a: 'Chez l’enfant encore en croissance, la cause la plus fréquente est la maladie de Sever, une irritation du cartilage de croissance à l’arrière de l’os du talon. Elle fait mal pendant et après les sports de course et de sauts, et un talon douloureux quand on le presse des deux côtés oriente vers elle. Un professionnel de santé doit examiner une douleur au talon chez l’enfant qui ne se calme pas.',
    },
    {
      q: 'Puis-je faire les exercices pour la fasciite plantaire si je ne sais pas ce que j’ai\u00A0?',
      cites: [CITE.guideline],
      a: 'La recommandation de 2023 donne aux étirements du fascia plantaire et du mollet la note A pour la fasciite plantaire, et ils sont doux. Mais si vous avez une brûlure ou un engourdissement, un gonflement, une douleur qui augmente avec l’effort, ou une douleur après une blessure, consultez d’abord un professionnel de santé. Arrêtez tout exercice qui aggrave nettement la douleur au talon.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous ressentez une brûlure, des fourmillements, des décharges électriques ou un engourdissement dans le talon ou la plante',
      'la douleur au talon s’accompagne d’un mal de dos, d’une douleur qui descend dans la jambe ou d’une faiblesse du pied',
      'la douleur augmente à mesure que vous marchez ou courez, ou presser les côtés de l’os du talon fait mal',
      'le talon est gonflé, rouge, chaud ou présente un bleu, ou vous avez de la fièvre',
      'les deux talons font mal et d’autres articulations sont douloureuses ou raides, ou la raideur du matin dure plus de 30\u00A0minutes',
      'la douleur a commencé après une chute, une torsion ou un claquement soudain, ou vous ne pouvez pas mettre de poids sur le pied',
      'le talon fait mal au repos ou vous réveille la nuit',
      'un enfant a une douleur au talon qui ne se calme pas en réduisant le sport',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour les douleurs du talon et du pied. Son plan est conçu pour une douleur au talon de type fasciite plantaire, pas pour les autres causes de cette page\u00A0: si votre douleur correspond à un autre schéma, consultez un professionnel de santé avant de commencer.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['hubPlantarFasciitis', 'heelFatPad', 'heelPainAtNight'],
  crumb: 'Douleur au talon sans fasciite plantaire',
  campaign: 'guide-heel-pain-not-plantar-fasciitis-fr',
};
