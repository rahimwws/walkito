import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/teachers-foot-pain.ts (2026-10-18), written around
 * «mal aux pieds enseignant», «douleur pieds professeur» and «chaussures
 * enseignant debout toute la journée». «Vous», terminology and exercise names
 * as in `lib/guides/fr.ts` and the other articles-fr pages. Figures, doses,
 * grades, qualifiers and sources are identical to the English page after its
 * fact-check. Same CITE keys and media ids. Links without a French page (best
 * insoles, foot pain identifier, program) are removed and the wording kept.
 */

export const TEACHERS_FR: Guide = {
  lang: 'fr',
  page: 'teachers',
  mainSource: CITE.tahernejadTeachers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Mal aux pieds des enseignants\u00A0: exercices et chaussures',
  description:
    'Pourquoi une journée de classe fait mal aux pieds, des exercices de 3\u00A0minutes entre deux cours, chaussures, sols et quand penser à la fasciite plantaire.',
  h1: 'Mal aux pieds des enseignants\u00A0: ce qu’une journée de classe fait à vos pieds, et ce qui aide',
  lede:
    'Le mal aux pieds des enseignants vient surtout des heures passées debout et à circuler dans la classe sur des sols durs. Les options les mieux étayées, les étirements du mollet et du fascia plantaire et le renforcement du mollet, prennent de 3 à 5\u00A0minutes et tiennent entre deux cours. La recommandation de 2023 sur la douleur au talon donne à ces étirements la **note A**, sa meilleure note, et au renforcement la **note B** (Koc et coll., 2023). La recherche sur les pieds des enseignants est limitée\u00A0: dans une revue de 2024, 27\u00A0études rapportaient une douleur dans la région de la cheville, le plus souvent comptée avec le pied, et le chiffre combiné était de 30\u00A0% des enseignants (Tahernejad et coll., 2024).',
  intro: [
    'Cette page porte sur la journée de classe\u00A0: debout au tableau, entre les tables, en surveillance dans les couloirs et dans la cour, et sur ce que vous pouvez faire à l’interclasse ou après la dernière sonnerie. Si vous restez debout toute la journée dans un autre métier, [pourquoi j’ai mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) est le guide général, et [mal aux pieds des infirmières](/fr/mal-aux-pieds-debout-toute-la-journee/) traite des longues gardes à l’hôpital. Si votre talon fait surtout mal aux premiers pas du matin, allez à [fasciite plantaire](/fr/fasciite-plantaire/).',
  ],
  toc: true,
  takeaways: [
    'Dans une revue de 2024 portant sur 44\u00A0études et 15\u00A0972\u00A0enseignants, la douleur dans la région de la cheville (le plus souvent comptée avec le pied) atteignait 30\u00A0% en chiffre combiné sur 27\u00A0études, derrière la nuque et le bas du dos à 47\u00A0% chacun. Les résultats variaient beaucoup d’une étude à l’autre (Tahernejad et coll., 2024).',
    'Dans une enquête auprès de 1\u00A0439\u00A0enseignants d’une seule région d’Arabie saoudite, 85,5\u00A0% rapportaient une douleur au pied au cours des 12\u00A0derniers mois, plus fréquente chez ceux qui donnaient 16\u00A0cours ou plus par semaine (Alqahtani, 2020). D’autres enquêtes ont trouvé des chiffres bien plus bas\u00A0: lisez-le comme le résultat d’une région.',
    'Nous n’avons trouvé aucune étude ayant mesuré combien d’heures un enseignant type passe debout. Dans une étude de 50\u00A0cas et 100\u00A0témoins, rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote (odds) de fasciite plantaire, et une cheville très peu souple, le plus souvent à cause d’un mollet raide, la multipliait par 23,3 (Riddle et coll., 2003).',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la **note A** et au renforcement la **note B**. Les semelles seules reçoivent une **note B contre** (Koc et coll., 2023).',
    'Sur 50\u00A0personnes ayant mal au talon et 25 sans douleur, celles qui avaient mal restaient debout 3,4\u00A0heures de plus par jour et portaient des chaussures au talon plus dur. C’est un lien, pas la preuve d’une cause (Landorf et coll., 2023).',
  ],
  sections: [
    {
      h2: 'Que fait une journée de classe à vos pieds\u00A0?',
      keyFact: 'Rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote de fasciite plantaire, et une cheville moins souple la multipliait par 23,3, dans une étude de 50\u00A0cas et 100\u00A0témoins (Riddle et coll., 2003).',
      paragraphs: [
        '**Une journée de classe alterne station debout immobile et petits trajets, le plus souvent sur des sols durs.** Vous êtes debout au tableau ou au bureau, vous passez dans les rangs pendant que les élèves travaillent, puis vous restez debout en surveillance dans le couloir ou dans la cour. La station debout immobile charge le talon, le fascia plantaire (la bande sous le pied qui soutient la voûte) et le mollet pendant de longues périodes, sans l’effet de pompe de la marche.',
        'Nous n’avons trouvé aucune étude ayant mesuré combien d’heures un enseignant type passe debout, donc cette page ne donne pas de chiffre. Ce qui est mesuré, c’est la station debout prolongée en général. Une revue de 2015 sur le travail debout l’associait à de l’inconfort dans les jambes et les pieds, à de la fatigue et à des jambes gonflées, et citait les tapis de sol, les chaussures de maintien, les bas de compression et l’alternance assis-debout parmi les mesures ayant un certain niveau de preuve (Waters et Dick, 2015).',
        'Dans une revue de 2017 portant sur 25\u00A0études en laboratoire, l’inconfort dans le bas du dos et les jambes augmentait à mesure que les personnes restaient debout sans pause. Les auteurs suggéraient de ne pas rester debout plus de 40\u00A0minutes environ d’affilée (Coenen et coll., 2017). C’est à peu près un cours.',
        'Le mollet compte aussi. Dans une étude de 2003, un [mollet tendu](/fr/mollets-tendus/) était le facteur de risque de fasciite plantaire le plus fort, avec une cote multipliée par 23,3, et rester debout la majeure partie de la journée de travail la multipliait par 3,6 (Riddle et coll., 2003). Un enseignant debout toute la journée avec des mollets raides cumule les deux.',
      ],
      cites: [CITE.waters, CITE.coenen, CITE.riddle],
    },
    {
      h2: 'Le mal aux pieds est-il fréquent chez les enseignants\u00A0?',
      keyFact: 'La douleur dans la région de la cheville, le plus souvent comptée avec le pied, atteignait 30\u00A0% en chiffre combiné sur 27\u00A0études et 8\u00A0634\u00A0enseignants (Tahernejad et coll., 2024).',
      paragraphs: [
        '**Fréquent, mais moins étudié que le dos et la nuque des enseignants.** Une revue de 2024 a regroupé 44\u00A0études portant sur 15\u00A0972\u00A0enseignants. Les douleurs de la nuque et du bas du dos arrivaient en tête, à 47\u00A0% chacune. La douleur dans la région de la cheville, que la plupart des études comptaient avec le pied, atteignait 30\u00A0% en chiffre combiné sur 27\u00A0études et 8\u00A0634\u00A0enseignants. Les études étaient très différentes les unes des autres, et les auteurs ont relevé des signes de biais de publication pour le chiffre de la cheville\u00A0: lisez donc 30\u00A0% comme un ordre de grandeur, pas comme un taux exact.',
        'Une revue plus ancienne constatait que peu d’études s’étaient intéressées aux jambes et aux pieds des enseignants, et que les douleurs des jambes et des pieds étaient moins souvent rapportées que celles du dos, de la nuque et des bras (Erick et Smith, 2011).',
        'La plus grande enquête consacrée au pied que nous ayons trouvée a interrogé 1\u00A0439\u00A0enseignants d’une région d’Arabie saoudite. 85,5\u00A0% rapportaient une douleur au pied au cours des 12\u00A0derniers mois. Elle était plus fréquente chez ceux qui donnaient 16\u00A0cours ou plus par semaine (88\u00A0%) que chez les autres (81,4\u00A0%), et chez ceux qui enseignaient depuis plus de 10\u00A0ans (86,8\u00A0% contre 82,6\u00A0%). C’était un questionnaire déclaratif dans une seule région, et la plupart des enseignants étaient des femmes, donc le résultat peut ne pas correspondre à votre établissement (Alqahtani, 2020).',
      ],
      cites: [CITE.tahernejadTeachers, CITE.erickTeachers, CITE.alqahtaniTeachers],
    },
    {
      h2: 'Quels exercices tiennent entre deux cours\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note A, sa meilleure note, et au renforcement la note B (Koc et coll., 2023).',
      paragraphs: [
        'Les exercices ci-dessous viennent de la recommandation sur la fasciite plantaire. Ils n’ont pas été testés chez les enseignants, mais ils ciblent les tissus qu’une journée debout sollicite\u00A0: le mollet, le fascia plantaire et le talon. La plupart ne demandent qu’un mur ou une table, ils tiennent donc dans une interclasse ou une heure de battement. Ce sont les doses de départ de Walkito, pas une prescription. [Comment ces guides sont rédigés](/fr/a-propos/).',
        'Les étirements reçoivent la meilleure note de la recommandation, **A**. Le renforcement du mollet reçoit un **B**. Si un exercice fait monter votre douleur à **6/10 ou plus**, arrêtez pour la journée.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note. Non testé chez les enseignants.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours, entre les cours',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre le mur ou le cadre du tableau. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée\u00A0: cet étirement compte, même si vous le sentez plus haut.',
          stop: 'La douleur atteint 6/10',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note. Non testé chez les enseignants.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours, entre les cours',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position contre le mur, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'La douleur atteint 6/10',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une silhouette en fente, les genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note. Non testé chez les enseignants.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des jours, au réveil et après être resté assis',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier au bord du lit, avant que votre pied ne touche le sol, et un autre à votre bureau avant de vous lever après une heure de battement.',
          stop: 'La douleur atteint 6/10',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une silhouette qui tire les orteils d’un pied vers elle, la plante du pied mise en évidence',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement, 3 par semaine, jamais deux de suite',
          feel: 'Un travail dans le bas du mollet',
          how: 'Asseyez-vous à votre bureau, les pieds à plat, et montez en poussant sur l’avant des pieds. Les mains sur les genoux ajoutent de la résistance. Genou plié, l’exercice travaille surtout le soléaire et ne charge presque pas le talon. Il se fait sous le bureau pendant que les élèves travaillent en silence.',
          stop: 'La douleur atteint 6/10',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: montez en poussant sur l’avant des pieds',
          alt: 'Une silhouette assise qui soulève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement, quand les montées assis deviennent faciles',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Tenez-vous sur les deux pieds, une main sur la table, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge. Pour savoir comment progresser\u00A0: [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
          stop: 'La douleur atteint 6/10',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une silhouette debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Non testé dans les études de cette page. Il est là pour le confort après une longue journée.' },
          dose: '1\u00A0minute',
          often: 'Après les cours, les jours de récupération',
          feel: 'Une pression ferme sous le pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, relâchez. Une balle dans le tiroir de votre bureau en fait une habitude d’après les cours. Plus de détails dans [balle de massage et fasciite plantaire](/fr/balle-de-massage-fasciite-plantaire/).',
          stop: 'Vous grimacez, ou le talon est rouge, chaud ou gonflé',
          image: 'Exercice\u00A0: massage avec une balle',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante sur une balle, avec une pression ferme',
          alt: 'Une silhouette assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Comment caser les exercices dans une journée de classe\u00A0?',
      paragraphs: [
        'Pas besoin d’une séance à part. Associez chaque exercice à un moment qui existe déjà dans la journée. Les doses sont les mêmes que ci-dessus\u00A0; le tableau indique seulement quand elles s’insèrent.',
      ],
      table: {
        caption: 'Une façon de répartir les exercices sur une journée de classe',
        head: ['Quand', 'Quoi', 'Durée'],
        rows: [
          ['Avant de vous lever', 'Étirement du fascia plantaire', '2\u00A0minutes'],
          ['Avant la première sonnerie', 'Étirement du mollet et du soléaire contre un mur', '4\u00A0minutes'],
          ['Pendant que les élèves travaillent', 'Asseyez-vous\u00A0; montées sur pointes assis', 'De 1 à 2\u00A0minutes'],
          ['Interclasse', 'Étirement du mollet, un côté à chaque pause', '1\u00A0minute'],
          ['Après les cours', 'Montées sur pointes, deux pieds, massage avec une balle', 'De 2 à 3\u00A0minutes'],
        ],
      },
      after: [
        'Faites le renforcement (les montées sur pointes) 3\u00A0jours par semaine, jamais deux jours de suite. Les étirements peuvent se faire la plupart des jours. Si vous ne faites qu’une chose, que ce soit l’étirement du mollet\u00A0: il cible le facteur de risque le plus fort de l’étude de 2003.',
        'Le repère des 40\u00A0minutes tiré des études sur la station debout est utile. Quand les élèves commencent un travail en autonomie, asseyez-vous quelques minutes, même sur un tabouret devant la classe. Vous coupez la station debout sans quitter la salle (Coenen et coll., 2017).',
      ],
      cites: [CITE.coenen, CITE.riddle],
    },
    {
      h2: 'Quelles chaussures pour un enseignant debout toute la journée\u00A0?',
      paragraphs: [
        '**Aucune étude n’a comparé des chaussures pour enseignants, et aucun essai ne désigne une marque ou un modèle.** La recommandation de 2023 sur la douleur au talon ne note pas les types de chaussures. Les données disponibles vont dans le sens d’un amorti sous le talon et d’un bon chaussant.',
        'Dans une étude de 2023, 50\u00A0personnes souffrant d’une douleur sous le talon ont été comparées à 25\u00A0personnes appariées sans douleur. Celles qui avaient mal restaient debout 3,4\u00A0heures de plus par jour et portaient des chaussures au talon plus dur. Le style de chaussure, la hauteur du talon et la station debout sur sol dur ne différaient pas entre les groupes (Landorf et coll., 2023). Cela montre un lien, pas qu’un talon souple prévient la douleur, mais cela plaide pour une chaussure au talon amorti pour les longues journées au tableau.',
        'Une liste pratique, fondée sur le chaussant et le confort plutôt que sur un essai\u00A0:',
        {
          list: [
            'un talon amorti et un contrefort ferme (l’arrière de la chaussure ne s’écrase pas quand vous le pincez)',
            'de la place pour que les orteils s’étalent, sans pincement en fin de journée',
            'un talon bas et stable plutôt qu’un talon haut ou très fin',
            'une deuxième paire pour alterner, afin de ne pas porter chaque jour la même paire usée',
          ],
        },
        '**Les semelles peuvent rendre la journée plus confortable, mais ne comptez pas sur elles seules.** La recommandation de 2023 donne aux semelles seules une **note B contre**, et associées aux étirements et au renforcement une **note C** (Koc et coll., 2023). [Semelles ou exercices](/fr/semelles-ou-exercices/) compare les deux.',
        'Les bas de compression sont une autre option si vos jambes sont lourdes et gonflées en fin de journée. Dans un essai auprès de 40\u00A0agents de sécurité en longues vacations debout, des bas de 15 à 20\u00A0mmHg et de 20 à 30\u00A0mmHg évitaient tous deux la hausse de l’inconfort et du gonflement des jambes observée avec des chaussettes ordinaires (Garcia et coll., 2023). Ce n’était pas une étude sur des enseignants.',
      ],
      cites: [CITE.landorfFootwear, CITE.guideline, CITE.garcia],
    },
    {
      h2: 'Le sol de la classe et les tapis font-ils une différence\u00A0?',
      paragraphs: [
        'La plupart des salles de classe ont des sols durs\u00A0: carrelage, revêtement vinyle sur béton ou moquette fine. Aucune étude n’a mesuré l’effet des sols de classe sur les pieds des enseignants. La revue de 2015 sur le travail debout cite les tapis de sol parmi les mesures ayant un certain niveau de preuve pour réduire l’inconfort, avec les chaussures et l’alternance assis-debout (Waters et Dick, 2015).',
        'Un tapis n’aide que là où vous vous tenez vraiment. Si vous enseignez depuis un endroit fixe, comme le tableau, le vidéoprojecteur ou une paillasse de laboratoire, un tapis anti-fatigue à cet endroit vaut la peine d’être essayé. Si vous circulez dans la classe, c’est la chaussure qui fait office de tapis.',
        'Bouger est l’autre moitié. Les études sur la station debout ont trouvé un inconfort qui s’accumule avec le temps passé debout sans bouger (Coenen et coll., 2017). Circuler entre les tables, s’asseoir pendant le travail silencieux et changer d’appui coupent la charge statique.',
        'À la maison, évitez de marcher pieds nus sur un sol dur au saut du lit si votre talon fait mal. [Douleur au talon au réveil](/fr/douleur-talon-au-reveil/) explique pourquoi les premiers pas comptent.',
      ],
      cites: [CITE.waters, CITE.coenen],
    },
    {
      h2: 'Quand la douleur au talon d’un enseignant est-elle une fasciite plantaire\u00A0?',
      keyFact: 'Parmi les enseignants ayant mal au pied dans une enquête, 25,8\u00A0% disaient que la douleur venait tôt le matin et après le repos, un schéma typique de la fasciite plantaire, même si l’enquête n’a posé aucun diagnostic (Alqahtani, 2020).',
      paragraphs: [
        'Une douleur diffuse en fin de journée de classe, disparue le lendemain matin, c’est de la fatigue liée à la station debout. **La fasciite plantaire a un schéma typique\u00A0: une douleur vive sous le talon aux premiers pas du matin ou après être resté assis, qui se calme en marchant, puis revient après une longue journée debout.** Dans l’enquête saoudienne, 25,8\u00A0% des enseignants ayant mal au pied disaient que la douleur venait tôt le matin et après le repos (Alqahtani, 2020). Cette enquête n’a diagnostiqué personne\u00A0: c’est un schéma, pas un décompte de fasciites plantaires.',
        'Si cela vous ressemble, commencez par les [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/). Environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec un traitement non chirurgical, même si cela peut prendre de trois à six mois (Latt et coll., 2020). [Combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) donne les détails.',
        'D’autres schémas orientent ailleurs\u00A0:',
        {
          list: [
            'une douleur profonde au centre du talon, pire pieds nus sur sol dur\u00A0: [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/)',
            'une douleur le long de la voûte qui augmente au fil de la journée\u00A0: [douleur de la voûte plantaire](/fr/douleur-voute-plantaire/)',
            'une douleur sous l’avant du pied\u00A0: [métatarsalgie](/fr/metatarsalgie-douleur-avant-pied/)',
            'une douleur à l’arrière du talon, dans le tendon\u00A0: [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/)',
          ],
        },
        'Vous ne savez pas lequel\u00A0? Notez où et quand ça fait mal. **Si vous avez encore un doute, consultez un professionnel de santé avant de charger le pied avec des exercices.**',
      ],
      cites: [CITE.alqahtaniTeachers, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Pourquoi ai-je si mal aux pieds après une journée de cours\u00A0?',
      cites: [CITE.waters, CITE.coenen],
      a: 'En classe, vous êtes debout et vous marchez sur des sols durs la majeure partie de la journée, ce qui charge le talon, la voûte et le mollet presque sans repos. Les revues sur le travail debout associent la station debout prolongée à de l’inconfort et à de la fatigue dans les jambes et les pieds, et des études en laboratoire ont trouvé un inconfort qui augmente à mesure que l’on reste debout sans bouger. Des pauses assises, des étirements du mollet et des chaussures amorties aident.',
    },
    {
      q: 'Le mal aux pieds est-il fréquent chez les enseignants\u00A0?',
      cites: [CITE.tahernejadTeachers, CITE.alqahtaniTeachers],
      a: 'Une revue de 2024 a trouvé, pour la douleur dans la région de la cheville, le plus souvent comptée avec le pied, un chiffre combiné de 30\u00A0% des enseignants sur 27\u00A0études, avec des résultats très différents d’une étude à l’autre. Une enquête auprès de 1\u00A0439\u00A0enseignants d’une seule région d’Arabie saoudite a trouvé 85,5\u00A0% de douleurs au pied sur l’année écoulée. Les douleurs de la nuque et du bas du dos sont plus souvent rapportées que celles du pied.',
    },
    {
      q: 'Quelles sont les meilleures chaussures pour un enseignant debout toute la journée\u00A0?',
      cites: [CITE.landorfFootwear, CITE.guideline],
      a: 'Aucune étude n’a testé de chaussures pour enseignants. Cherchez un talon amorti, un contrefort ferme, de la place pour les orteils et un talon bas et stable. Dans une étude, les personnes souffrant du talon portaient des chaussures au talon plus dur et restaient debout plus longtemps chaque jour. Les semelles seules reçoivent une note B contre dans la recommandation de 2023 sur la douleur au talon\u00A0: associez-les à des étirements.',
    },
    {
      q: 'Quels étirements un enseignant peut-il faire entre deux cours\u00A0?',
      cites: [CITE.guideline],
      a: 'Un étirement du mollet et un étirement du soléaire contre un mur prennent environ une minute par côté\u00A0: 2\u00A0maintiens de 30\u00A0secondes par jambe. L’étirement du fascia plantaire se fait assis à votre bureau, 2\u00A0maintiens de 30\u00A0secondes par pied. La recommandation de 2023 sur la douleur au talon donne à ces étirements la note A, mais elle a été écrite pour la fasciite plantaire, pas pour les enseignants.',
    },
    {
      q: 'Rester debout toute la journée en classe peut-il provoquer une fasciite plantaire\u00A0?',
      cites: [CITE.riddle],
      a: 'Cela peut augmenter le risque. Dans une étude de 2003 portant sur 50\u00A0personnes atteintes de fasciite plantaire et 100 sans, rester debout la majeure partie de la journée de travail multipliait la cote par 3,6, et une cheville très peu souple, le plus souvent à cause d’un mollet raide, la multipliait par 23,3. L’étude ne portait pas sur des enseignants, et aucune étude n’a compté les fasciites plantaires chez les enseignants en particulier.',
    },
    {
      q: 'Les tapis anti-fatigue aident-ils les enseignants\u00A0?',
      cites: [CITE.waters],
      a: 'Peut-être, si vous restez à un endroit fixe. Une revue de 2015 sur le travail debout cite les tapis de sol parmi les mesures ayant un certain niveau de preuve pour réduire l’inconfort. Aucune étude n’a testé de tapis en classe. Si vous circulez dans la salle pendant la majeure partie du cours, vos chaussures comptent plus qu’un tapis.',
    },
    {
      q: 'Les enseignants devraient-ils porter des bas de compression\u00A0?',
      cites: [CITE.garcia],
      a: 'Ils valent la peine d’être essayés si vos jambes sont lourdes ou gonflées en fin de journée. Dans un essai auprès de 40\u00A0agents de sécurité en longues vacations debout, des bas de 15 à 20\u00A0mmHg et de 20 à 30\u00A0mmHg évitaient tous deux la hausse de l’inconfort et du gonflement des jambes observée avec des chaussettes ordinaires. L’essai ne comprenait pas d’enseignants.',
    },
    {
      q: 'Combien de temps un enseignant devrait-il rester debout avant de s’asseoir\u00A0?',
      cites: [CITE.coenen],
      a: 'Il n’existe pas de limite testée pour les enseignants. Une revue de 2017 des études en laboratoire sur la station debout a trouvé un inconfort qui s’accumule avec le temps et suggérait de ne pas rester debout plus de 40\u00A0minutes environ d’affilée. En pratique, asseyez-vous quelques minutes quand les élèves commencent un travail en autonomie, et circulez dans la classe plutôt que de rester immobile au même endroit.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une chute, une torsion ou un choc, par exemple pendant la surveillance de la cour ou dans les escaliers',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'le pied est engourdi, fourmille, brûle, est gonflé ou chaud',
      'le talon ou le pied est rouge, ou vous avez de la fièvre ou ne vous sentez pas bien',
      'la douleur vous réveille la nuit ou est présente au repos',
      'la douleur se situe en un point précis et s’aggrave à l’effort, ce qui peut évoquer une fracture de fatigue',
      'un mollet ou une jambe a gonflé soudainement et est douloureux, rouge ou chaud',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à décider de l’ordre, des doses ni du moment où passer à une version plus difficile. Walkito construit un plan semaine après semaine autour d’un objectif. Si votre talon suit le schéma matinal de la fasciite plantaire, le premier objectif est une douleur du matin à 1 sur 10 ou moins pendant 14\u00A0jours d’affilée.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes, pour qu’une séance tienne avant la première sonnerie ou après la dernière. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['nurses', 'standing', 'heelPain'],
  crumb: 'Mal aux pieds des enseignants',
  campaign: 'guide-teachers-foot-pain-fr',
};
