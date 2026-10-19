import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/plantar-fasciitis-not-getting-better.ts
 * (2026-10-19), written around «fasciite plantaire qui ne passe pas» and
 * «fasciite plantaire chronique que faire». «Vous», terminology and exercise
 * names as in `lib/guides/fr.ts`, articles-fr/calf-raises.ts and
 * articles-fr/pf-duration.ts. Figures, doses, grades, hedges and sources are
 * identical to the English page after its fact-check. Same CITE keys and media
 * ids. Link to /app-vs-physical-therapy-plantar-fasciitis/ removed (no French
 * version), words kept as plain text.
 */

export const PF_NOT_BETTER_FR: Guide = {
  lang: 'fr',
  page: 'pfNotBetter',
  mainSource: CITE.hansen,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fasciite plantaire qui ne passe pas\u00A0: que changer\u00A0?',
  description:
    'Fasciite plantaire qui stagne\u00A0? Six raisons fréquentes, comment les reconnaître, que changer, et les options si l’exercice ne suffit pas.',
  h1: 'Fasciite plantaire qui ne passe pas\u00A0: les raisons et ce qu’il faut changer',
  lede:
    'Quand une fasciite plantaire ne s’améliore pas, les raisons habituelles sont un programme fait uniquement d’étirements, une charge qui n’augmente jamais, un arrêt dès que ça va mieux, ou quelque chose qui la relance sans cesse. Parfois, ce n’est pas du tout une fasciite plantaire. C’est rarement le signe que rien ne peut changer\u00A0: dans une étude qui a suivi 174\u00A0personnes pendant une dizaine d’années, 54\u00A0% n’avaient plus de symptômes et la plupart des autres n’avaient qu’une douleur légère (Hansen et coll., 2018).',
  intro: [
    'Cette page s’adresse à la phase où l’on stagne\u00A0: vous avez essayé les étirements, peut-être des semelles, peut-être une infiltration, et vos premiers pas font toujours mal. La durée habituelle de la récupération est abordée dans [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/). Ici, nous passons en revue les raisons fréquentes pour lesquelles elle stagne, à quoi ressemble chacune, ce qu’il faut changer, et quand se faire réexaminer.',
  ],
  takeaways: [
    'Chez 174\u00A0personnes suivies en moyenne 9,7\u00A0ans depuis le début des symptômes, 54\u00A0% n’avaient plus de symptômes et 46\u00A0% en avaient encore, le plus souvent légers. Presque toutes (93\u00A0%) avaient reçu une infiltration de corticoïde à un moment donné\u00A0: il s’agissait donc de cas plus difficiles (Hansen et coll., 2018).',
    'Les hauts et les bas sont normaux\u00A0: 31,9\u00A0% des personnes qui ont fini par aller mieux avaient d’abord connu au moins une rechute, et 77,5\u00A0% de celles qui avaient encore mal avaient eu une période sans douleur à un moment donné (Hansen et coll., 2018).',
    'Dans un essai sur 48\u00A0personnes, des montées sur pointes avec charge ont permis d’aller mieux plus tôt que les étirements, à trois mois. À un an, les deux groupes étaient à peu près à égalité (Rathleff et coll., 2015).',
    'La recommandation de 2023 sur la douleur au talon donne la note **A** aux étirements, à la thérapie manuelle, au strapping et aux attelles de nuit, et la note **B** au renforcement, à la puncture sèche et au laser de basse intensité. Elle déconseille les semelles seules pour un soulagement à court terme (Koc et coll., 2023).',
    'La même recommandation indique qu’il faut chercher d’autres diagnostics quand les symptômes ne se calment pas, comme une arthrite inflammatoire, une atrophie du coussinet graisseux ou une petite masse dans le fascia (Koc et coll., 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Une fasciite plantaire qui ne s’améliore pas est-elle définitive\u00A0?',
      keyFact: 'Dans un groupe de 174\u00A0personnes suivies en moyenne 9,7\u00A0ans, 54\u00A0% n’avaient plus de symptômes et 46\u00A0% en avaient encore, le plus souvent légers (Hansen et coll., 2018).',
      paragraphs: [
        '**Pour la plupart des gens, non.** Une revue de 2020 indique que plus de 90\u00A0% des personnes vont mieux avec une prise en charge sans chirurgie, même si cela peut prendre trois à six mois (Latt et coll., 2020). La question plus difficile, c’est ce qui arrive à celles qui stagnent encore après ce délai.',
        'Les meilleures données à long terme viennent d’une étude danoise qui a suivi 174\u00A0personnes ayant une fasciite plantaire confirmée à l’échographie. En moyenne 9,7\u00A0ans après le début de leurs symptômes, 54\u00A0% n’avaient plus aucun symptôme. Les 46\u00A0% restants en avaient encore, mais la plupart les décrivaient comme légers. En moyenne, ces personnes avaient essayé 3,8\u00A0approches différentes (Hansen et coll., 2018).',
        'Deux éléments rendent cette étude plus encourageante qu’il n’y paraît. Il s’agissait d’un groupe suivi en consultation spécialisée, avec une douleur difficile à prendre en charge\u00A0: 93\u00A0% avaient reçu une infiltration de corticoïde à un moment donné, ce qui n’est pas une première étape. Et «\u00A0avoir encore des symptômes\u00A0» voulait dire tout score supérieur à 0 sur 10\u00A0: cela inclut des personnes qui ont de légères douleurs occasionnelles.',
        'L’étude a aussi montré que le fascia s’amincissait avec le temps, que les personnes aient encore mal ou non, et que seulement 24\u00A0% du groupe sans douleur avaient un fascia d’aspect tout à fait normal à l’échographie. Une imagerie qui reste anormale ne veut donc pas dire que vous ne pouvez pas aller mieux. Pour l’évolution complète dans le temps, voir [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/).',
      ],
      sourceNote:
        'Hansen 2018\u00A0: 269\u00A0personnes diagnostiquées de 2001 à 2011, 174 ont participé (91\u00A0femmes, 83\u00A0hommes), 137 ont eu une échographie de contrôle. Asymptomatique = 0 sur chaque échelle de douleur (repos, marche, course, pression). L’épaisseur du fascia est passée de 6,9\u00A0mm et 6,7\u00A0mm à 4,3\u00A0mm dans les deux groupes. Les femmes et les personnes ayant mal aux deux talons évoluaient moins bien (P < 0,01 dans les deux cas). Les auteurs notent que l’étude ne permet pas de juger quelles approches ont fonctionné.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Quelle raison vous correspond\u00A0?',
      paragraphs: [
        'La plupart des cas qui stagnent correspondent à un ou deux de ces schémas. Parcourez la colonne du milieu, voyez ce qui vous ressemble, puis allez à la section correspondante.',
      ],
      table: {
        caption: 'Les raisons fréquentes pour lesquelles une fasciite plantaire stagne',
        head: ['Raison', 'À quoi ça ressemble', 'Que changer'],
        rows: [
          ['Étirements seuls', 'Des semaines d’étirements, premiers pas toujours vifs', 'Ajouter du renforcement du mollet'],
          ['Charge qui n’augmente jamais', 'Les mêmes montées faciles depuis des mois', 'Progresser lentement, garder une charge lourde'],
          ['Arrêt trop tôt', 'Mieux, arrêt, puis retour de la douleur', 'Garder une dose plus légère'],
          ['Poussée, puis arrêt', 'Une mauvaise journée, une semaine sans rien', 'Alléger, sans abandonner'],
          ['Déclencheurs persistants', 'Longues journées debout, course ou cheville raide', 'Changer la charge qui peut l’être'],
          ['Pas une fasciite plantaire', 'Douleur la nuit, fourmillements, deux talons', 'Se faire réexaminer'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Ne faites-vous que des étirements\u00A0?',
      keyFact: 'Dans un essai sur 48\u00A0personnes, le groupe des montées sur pointes avait un score au Foot Function Index meilleur de 29\u00A0points que le groupe des étirements à trois mois (Rathleff et coll., 2015).',
      paragraphs: [
        '**Les étirements valent la peine d’être gardés, mais seuls, ils peuvent ne pas suffire.** La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note **A**, sa meilleure note. Elle donne aussi au renforcement du pied et de la cheville la note **B** (Koc et coll., 2023). Beaucoup de programmes à faire chez soi ne comprennent que le premier.',
        'Dans un essai sur 48\u00A0personnes, un groupe faisait des montées sur pointes lentes et lourdes avec une serviette sous les orteils, l’autre étirait le fascia plantaire. À trois mois, le groupe des montées sur pointes avait un score au Foot Function Index meilleur de 29\u00A0points. À un an, les deux groupes étaient à peu près à égalité (Rathleff et coll., 2015). Faire des montées sur pointes à la place des étirements n’a donc pas changé le point d’arrivée à un an, mais a permis d’y arriver plus tôt.',
        'À quoi ça ressemble\u00A0: vous vous étirez consciencieusement depuis un mois ou plus, l’étirement paraît plus facile, mais les premiers pas de la journée restent vifs. Que changer\u00A0: gardez les étirements et ajoutez le travail du mollet de la section suivante. [Montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) explique en détail la routine de l’essai.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'La charge a-t-elle déjà augmenté\u00A0?',
      keyFact: 'Dans un essai sur 70\u00A0personnes faisant des montées sur pointes pendant trois mois, seules 4 ont atteint un état où elles estimaient ne plus avoir besoin de soins (Riel et coll., 2019).',
      paragraphs: [
        '**Le renforcement n’aide que s’il devient plus difficile avec le temps.** Dix montées faciles sur deux pieds, faites pendant des mois, sont un échauffement, pas une charge. Les étapes ci-dessous passent de deux pieds à un pied, puis ajoutent du poids. La routine de l’essai elle-même consistait en des montées sur une jambe avec une serviette sous les orteils, un rythme lent et un sac à dos pour ajouter du poids (Rathleff et coll., 2015).',
        'La façon de régler la charge compte moins qu’on ne le pense. Un essai de 2019 a donné à 70\u00A0personnes soit un plan de montées sur pointes fixe, progressant par étapes, soit la consigne de choisir elles-mêmes leurs séries et leur poids, aussi lourd que possible. Les deux groupes se sont améliorés de façon comparable. Choisir sa propre dose n’a pas poussé les gens à en faire plus (Riel et coll., 2019).',
        'Le même essai remet les choses en perspective\u00A0: après trois mois de montées sur pointes, 44 des 65\u00A0personnes qui ont répondu se disaient mieux, mais seules 4 sur 70 estimaient ne plus avoir besoin de soins. Si vous allez mieux sans en avoir fini à trois mois, vous faites partie du groupe le plus courant, pas de celui des échecs.',
        'Que changer\u00A0: passez à l’étape suivante quand l’étape actuelle vous paraît facile deux séances de suite et que votre lendemain matin n’est pas pire. Les fiches ci-dessous présentent les étapes, dans l’ordre.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des séances',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assis au bord du lit, avant que votre pied touche le sol.',
          stop: 'Une douleur vive au talon qui persiste après avoir relâché',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne qui tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Un travail en bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Genou plié, cet exercice sollicite surtout le soléaire, le muscle profond du mollet, presque sans charge sur le talon. Commencez ici si les montées debout font mal.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge pendant que le mollet s’habitue au travail.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Maintien sur pointes',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, deux pieds',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent pour rester immobiles',
          how: 'Montez sur la pointe des deux pieds, puis restez immobile en haut. Ne redescendez pas. Une étape utile les jours où les répétitions en mouvement semblent de trop.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: maintien sur pointes',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez immobile en haut',
          alt: 'Une personne qui tient la position sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette',
          evidence: { level: 'moderate', why: 'C’est la routine d’un essai sur 48\u00A0personnes, et la recommandation de 2023 donne au renforcement la note B.' },
          dose: '4\u00A0séries de 10, chaque jambe, avec une charge en plus',
          often: 'Jours de renforcement',
          feel: 'Un travail dur dans le mollet',
          how: 'Tenez-vous sur un pied sur une marche, une serviette roulée sous les orteils. Prenez trois secondes pour monter, tenez deux secondes en haut, et prenez trois secondes pour redescendre. À ce niveau, ajoutez une charge, par exemple un sac à dos. C’est la serviette qui fait travailler le fascia plantaire, et pas seulement le mollet.',
          stop: 'Une douleur au talon au-delà de 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes avec serviette',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: trois secondes pour monter, deux en haut, trois pour descendre',
          alt: 'Une personne qui monte sur la pointe des pieds sur une marche avec une serviette roulée, les mollets mis en évidence',
        },
      ],
      sourceNote:
        'Riel 2019\u00A0: 70\u00A0personnes ayant une fasciopathie plantaire à l’échographie, montées sur pointes debout pendant trois mois. Douleur au Foot Health Status Questionnaire\u00A0: différence moyenne ajustée de 6,9\u00A0points, IC à 95\u00A0% de moins 15,5 à plus 1,7, non significative. Amélioration au Global Rating of Change\u00A0: 24 sur 33 (dose libre) et 20 sur 32 (plan fixe). Patient Acceptable Symptom State\u00A0: 3 sur 35 et 1 sur 35.',
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.guideline],
    },
    {
      h2: 'Avez-vous arrêté dès que ça allait mieux, ou après une poussée\u00A0?',
      keyFact: 'Dans une étude à long terme, 31,9\u00A0% des personnes devenues asymptomatiques avaient d’abord connu au moins une rechute (Hansen et coll., 2018).',
      paragraphs: [
        '**Les rechutes font partie du parcours normal, elles ne prouvent pas que rien ne marche.** Dans l’étude danoise à long terme, 31,9\u00A0% des personnes qui ont fini sans symptômes avaient connu au moins une rechute avant que la douleur disparaisse pour de bon. Parmi celles qui avaient encore des symptômes, 77,5\u00A0% avaient eu une période sans douleur à un moment donné (Hansen et coll., 2018).',
        'Deux schémas en ressortent\u00A0:',
        {
          list: [
            '**Arrêter trop tôt.** La douleur diminue, les exercices disparaissent, et quelques semaines plus tard le talon est revenu au point de départ. Que changer\u00A0: quand les matins sont bons, passez à une dose d’entretien plus légère, par exemple moins de jours de renforcement, au lieu d’arrêter.',
            '**Poussée, puis arrêt.** Une longue journée debout ou une nouvelle paire de chaussures déclenche un mauvais matin, et vous arrêtez tout pendant une semaine. Que changer\u00A0: revenez d’une étape en arrière dans les fiches ci-dessus et continuez. Arrêter complètement fait perdre la force acquise.',
          ],
        },
        'Une règle simple aide à distinguer une poussée d’un recul\u00A0: une douleur pendant l’exercice jusqu’à environ 6 sur 10 ne pose pas de problème si elle se calme et que votre lendemain matin n’est pas pire. C’est la règle qu’utilise Walkito. Elle n’a pas été testée en tant que telle\u00A0: si vos matins empirent de semaine en semaine, consultez un professionnel de santé.',
        'Aucune étude n’a testé combien de temps garder une dose d’entretien une fois la fasciite plantaire calmée. La recommandation de 2023 ne fixe pas de date de fin au renforcement (Koc et coll., 2023).',
      ],
      cites: [CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Quelque chose la relance-t-il encore\u00A0?',
      keyFact: 'Une cheville qui se pliait de 0\u00A0degré ou moins multipliait le risque de fasciite plantaire par environ 23 par rapport à une cheville qui se pliait de plus de 10\u00A0degrés, dans une étude portant sur 50\u00A0cas et 100\u00A0témoins (Riddle et coll., 2003).',
      paragraphs: [
        '**Les exercices peuvent être dépassés par la charge que vous imposez au pied le reste de la journée.** Dans une étude appariée portant sur 50\u00A0personnes ayant une fasciite plantaire et 100 sans, une cheville raide était le facteur de risque le plus fort\u00A0: une cheville qui se pliait de 0\u00A0degré ou moins multipliait le risque par 23,3. Un indice de masse corporelle supérieur à 30 le multipliait par environ 5,6, et passer la majeure partie de la journée de travail debout par environ 3,6 (Riddle et coll., 2003).',
        'La recommandation de 2023 cite les mêmes facteurs, plus la course, et ajoute que des surfaces dures qui amortissent mal rendent la station debout et la marche au travail plus risquées (Koc et coll., 2023). Certains de ces facteurs se changent, d’autres non\u00A0:',
        {
          list: [
            '**Une cheville raide ou un mollet tendu.** Continuez les étirements du mollet et du soléaire\u00A0; [mollets tendus](/fr/mollets-tendus/) présente le programme complet.',
            '**De longues journées debout sur des sols durs.** Des chaussures amortissantes, un tapis là où vous vous tenez, et des pauses assises quand c’est possible. Voir [mal aux pieds debout toute la journée](/fr/mal-aux-pieds-debout-toute-la-journee/).',
            '**Le volume de marche ou de course.** Réduisez la distance ou l’allure au lieu d’arrêter. Si vos premiers pas le lendemain matin sont nettement pires, c’était trop. Voir [marcher avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/).',
            '**Le poids.** Le poids n’était pas lié à la durée des symptômes dans l’étude à long terme (Hansen et coll., 2018)\u00A0: il ne s’agit donc pas de culpabiliser. [Poids et fasciite plantaire](/fr/poids-et-fasciite-plantaire/) fait le point sur ce que l’on sait.',
          ],
        },
        'Les semelles peuvent soulager un peu le talon pendant que vous gagnez en force, mais la recommandation déconseille de compter sur elles seules pour un soulagement à court terme (note **B**) et les admet en association avec d’autres soins (note **C**). [Semelles ou exercices](/fr/semelles-ou-exercices/) compare les deux.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Et si ce n’était pas une fasciite plantaire\u00A0?',
      paragraphs: [
        '**C’est possible, et la recommandation demande aux professionnels de santé de vérifier quand les symptômes ne se calment pas.** La recommandation de 2023 sur la douleur au talon indique qu’il faut chercher d’autres diagnostics, dont une arthrite inflammatoire de la colonne et des articulations (spondyloarthrite), un amincissement du coussinet graisseux du talon et une petite masse bénigne dans le fascia (fibrome plantaire), quand le tableau ne colle pas ou que les symptômes ne disparaissent pas avec les soins (Koc et coll., 2023).',
        'Une revue de 2020 cite d’autres causes de douleur sous le talon, dont un nerf comprimé (syndrome du canal tarsien ou nerf de Baxter), une fracture de fatigue de l’os du talon, une rupture du fascia et une arthrite inflammatoire (Latt et coll., 2020). Les indices qui éloignent de la fasciite plantaire\u00A0:',
        {
          list: [
            '**Une brûlure, des fourmillements ou un engourdissement**, ou une douleur qui s’étend vers la voûte ou les orteils\u00A0: possible problème nerveux.',
            '**Une douleur qui augmente à mesure que vous marchez**, au lieu de s’atténuer après les premiers pas, et qui fait mal quand vous pressez les côtés du talon\u00A0: voir [fasciite plantaire ou fracture de fatigue](/fr/fasciite-plantaire-ou-fracture-de-fatigue/).',
            '**Une douleur à l’arrière du talon** plutôt qu’en dessous\u00A0: voir [fasciite plantaire ou tendinite d’Achille](/fr/fasciite-plantaire-ou-tendinite-achille/).',
            '**Une douleur profonde, comme un bleu, au milieu du talon**, pire sur les sols durs et pieds nus\u00A0: voir [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
            '**Une douleur la nuit ou au repos**\u00A0: voir [douleur au talon la nuit](/fr/douleur-talon-la-nuit/).',
            '**Les deux talons, avec une longue raideur matinale ou d’autres articulations douloureuses.** Dans l’étude à long terme, une douleur aux deux talons allait de pair avec une récupération plus lente, et les auteurs ont suggéré qu’elle pouvait signaler une maladie inflammatoire qui n’avait pas été recherchée (Hansen et coll., 2018).',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.hansen],
    },
    {
      h2: 'Que propose la recommandation quand l’exercice seul n’a pas suffi\u00A0?',
      keyFact: 'Dans un essai sur 180\u00A0personnes, une infiltration de corticoïde ajoutée aux montées sur pointes, aux conseils et à une talonnette n’a apporté aucune différence perceptible par les patients, à aucun moment jusqu’à un an (Riel et coll., 2023).',
      paragraphs: [
        'Ce sont des options à discuter avec un professionnel de santé, pas des choses à essayer chez soi. Toutes les notes viennent de la recommandation de 2023 sur la douleur au talon, où **A** est la recommandation la plus forte (Koc et coll., 2023)\u00A0:',
        {
          list: [
            '**Thérapie manuelle** (mobilisations articulaires et travail des tissus mous par un thérapeute)\u00A0: **A**.',
            '**Strapping**, rigide ou élastique, en complément d’autres soins, pour un soulagement à court terme\u00A0: **A**. Voir [strapping pour la fasciite plantaire](/fr/strapping-fasciite-plantaire/).',
            '**Attelles de nuit pendant un à trois mois**, si les premiers pas restent douloureux\u00A0: **A**. Voir [attelles de nuit](/fr/attelle-de-nuit-fasciite-plantaire/).',
            '**Puncture sèche (dry needling)** des muscles du mollet et du pied\u00A0: **B**.',
            '**Laser de basse intensité** dans le cadre d’un programme de rééducation, pour la douleur à court terme\u00A0: **B**.',
            '**Semelles associées à d’autres soins**\u00A0: **C**.',
          ],
        },
        'La recommandation se prononce **contre** les semelles comme seule mesure pour un soulagement à court terme (**B**) et contre l’ajout d’ultrasons thérapeutiques aux étirements (**A**). La version de 2023 ne se prononce pas sur les ondes de choc.',
        '**Les infiltrations de corticoïde** soulagent la douleur chez certaines personnes à court terme, mais les preuves en faveur de leur ajout sont faibles. Dans un essai sur 180\u00A0personnes, tout le monde a reçu des conseils et une talonnette\u00A0; un groupe a ajouté des montées sur pointes, un autre des montées sur pointes plus une infiltration. Les différences entre les groupes n’ont jamais atteint une taille perceptible par les patients, à aucun moment jusqu’à un an (Riel et coll., 2023). Le même essai n’a pas trouvé de bénéfice supplémentaire net à l’ajout des montées sur pointes, ce qui rappelle qu’aucun ajout isolé n’est une valeur sûre.',
        'Une revue de 2020 indique qu’aux personnes qui ont encore mal après au moins six mois de prise en charge sans chirurgie, on peut proposer des options peu invasives, comme des infiltrations ou des ondes de choc, ou dans certains cas une chirurgie (Latt et coll., 2020). Ce sont des décisions à prendre avec un spécialiste. Un kinésithérapeute peut aussi vérifier en personne votre technique et votre charge, ce qu’une application ne fait pas.',
      ],
      sourceNote:
        'Riel 2023\u00A0: conseils + talonnette (n = 62), plus montées sur pointes lourdes et lentes à dose libre (n = 59), plus une infiltration de triamcinolone guidée par échographie (n = 59). Douleur au Foot Health Status Questionnaire, différence minimale importante de 14,1\u00A0points. Groupe infiltration contre conseils seuls\u00A0: différence ajustée de 9,1\u00A0points à trois mois (p = 0,023) et de 5,2\u00A0points sur 52\u00A0semaines (p = 0,045), sous la différence minimale importante. Aucune différence significative entre exercice et exercice plus infiltration, ni entre conseils et exercice, à aucun moment.',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.latt],
    },
    {
      h2: 'Quand faut-il se faire réexaminer\u00A0?',
      paragraphs: [
        '**Faites-vous réexaminer si quelques mois d’exercices réguliers et progressifs n’ont pas fait bouger votre douleur du matin, ou plus tôt si le schéma change.** Une revue de 2020 indique que l’imagerie est réservée aux cas inhabituels et aux personnes qui ne répondent pas à la prise en charge de première intention (Latt et coll., 2020), et la recommandation dit qu’il faut chercher d’autres diagnostics quand les symptômes ne disparaissent pas (Koc et coll., 2023).',
        'Pour tirer le meilleur parti de la consultation, apportez\u00A0:',
        {
          list: [
            'Vos scores de douleur du matin (premiers pas, de 0 à 10) sur les dernières semaines, pour que la tendance soit claire.',
            'Ce que vous avez fait, à quelle fréquence et avec quelle charge\u00A0: «\u00A0des montées sur pointes\u00A0» en dit moins à un professionnel de santé que «\u00A0sur une jambe, 4\u00A0séries de 10, avec un sac à dos\u00A0».',
            'Ce qui aggrave la douleur\u00A0: une journée de travail, une sortie de course, des chaussures neuves, des sols durs pieds nus.',
            'Tout ce qui ne colle pas avec une fasciite plantaire\u00A0: douleur la nuit, fourmillements, deux talons, autres articulations douloureuses.',
          ],
        },
        'Demandez si le diagnostic tient toujours, si un examen d’imagerie changerait quelque chose, et quelles options de la recommandation ci-dessus vous conviennent.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Pourquoi ma fasciite plantaire ne s’améliore-t-elle pas\u00A0?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Les raisons fréquentes sont un programme fait uniquement d’étirements sans renforcement du mollet, une charge qui ne devient jamais plus difficile, un arrêt quand la douleur diminue ou après une poussée, et la charge du quotidien comme de longues journées debout ou la course. Parfois, ce n’est pas une fasciite plantaire. La recommandation de 2023 donne aux étirements la note A et au renforcement la note B\u00A0: la plupart des programmes ont besoin des deux.',
    },
    {
      q: 'La fasciite plantaire est-elle définitive\u00A0?',
      cites: [CITE.hansen, CITE.latt],
      a: 'En général, non. Environ 90\u00A0% des personnes vont mieux avec une prise en charge sans chirurgie. Dans un groupe difficile de 174\u00A0personnes suivies en moyenne 9,7\u00A0ans, 54\u00A0% n’avaient plus de symptômes et la plupart des autres n’avaient que des symptômes légers. Certaines personnes gardent des symptômes légers pendant des années\u00A0: si vous stagnez, cela vaut la peine de vous faire réexaminer.',
    },
    {
      q: 'Une fasciite plantaire chronique peut-elle encore s’améliorer\u00A0?',
      cites: [CITE.hansen],
      a: 'Oui. Dans une étude à long terme, des personnes devenaient asymptomatiques bien après la première année, et 77,5\u00A0% de celles qui avaient encore mal avaient eu une période sans douleur à un moment donné. Le fascia s’amincissait aussi avec le temps, que les personnes aient encore mal ou non. Lent ne veut pas dire bloqué pour de bon.',
    },
    {
      q: 'Faut-il arrêter les exercices si la douleur au talon repart\u00A0?',
      cites: [CITE.hansen],
      a: 'En général, pas complètement. Revenez d’une étape, par exemple des montées sur une jambe aux montées sur deux pieds, et continuez. Les rechutes sont fréquentes\u00A0: 31,9\u00A0% des personnes devenues asymptomatiques dans une étude à long terme en avaient d’abord connu au moins une. Consultez un professionnel de santé si vos matins empirent de semaine en semaine.',
    },
    {
      q: 'Les étirements suffisent-ils pour une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Pour certaines personnes oui, mais ajouter du renforcement du mollet peut aider plus tôt. La recommandation de 2023 donne aux étirements la note A et au renforcement la note B. Dans un essai sur 48\u00A0personnes, des montées sur pointes lourdes ont donné un meilleur résultat que les étirements à trois mois, même si les groupes étaient à peu près à égalité à un an.',
    },
    {
      q: 'Les infiltrations de corticoïde aident-elles une fasciite plantaire qui ne passe pas\u00A0?',
      cites: [CITE.rielHeelRaiseAdd],
      a: 'Elles peuvent soulager la douleur un temps, mais le bénéfice supplémentaire semble faible. Dans un essai sur 180\u00A0personnes, ajouter une infiltration aux montées sur pointes, aux conseils et à une talonnette n’a apporté aucune différence perceptible par les patients, à aucun moment jusqu’à un an. C’est à votre médecin de juger si elle vous convient.',
    },
    {
      q: 'Quand envisage-t-on une chirurgie pour une fasciite plantaire\u00A0?',
      cites: [CITE.latt],
      a: 'Seulement après une longue période de prise en charge sans chirurgie. Une revue de 2020 indique qu’une chirurgie est envisagée quand la douleur et la gêne persistent malgré au moins six mois de prise en charge sans chirurgie, et que des options peu invasives comme les infiltrations ou les ondes de choc peuvent aussi être envisagées à ce stade. C’est un spécialiste du pied et de la cheville qui prend cette décision avec vous.',
    },
    {
      q: 'Ma douleur au talon pourrait-elle être autre chose qu’une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.latt],
      a: 'Oui. La recommandation de 2023 demande aux professionnels de santé de chercher d’autres causes quand les symptômes ne se calment pas, comme une arthrite inflammatoire ou un amincissement du coussinet graisseux du talon. D’autres causes possibles sont un nerf comprimé et une fracture de fatigue du talon. Une brûlure, des fourmillements, une douleur la nuit ou une douleur qui augmente en marchant sont des raisons de se faire examiner.',
    },
    {
      q: 'Les semelles aident-elles si la fasciite plantaire ne s’améliore pas\u00A0?',
      cites: [CITE.guideline],
      a: 'Elles peuvent aider dans le cadre d’un plan plus large. La recommandation de 2023 déconseille les semelles comme seule mesure pour un soulagement à court terme (note B) et indique qu’elles peuvent être utilisées en association avec d’autres soins (note C). Associez-les aux étirements et au renforcement du mollet plutôt que de compter sur elles seules.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur empire de semaine en semaine, au lieu de simplement rester la même',
      'elle a commencé après une chute, un saut ou un claquement soudain, ou vous ne pouvez pas mettre de poids sur le pied',
      'elle fait mal quand vous pressez les côtés du talon, ou elle augmente à mesure que vous marchez',
      'vous ressentez une brûlure, des fourmillements ou un engourdissement dans le talon, la voûte ou les orteils',
      'elle vous réveille la nuit ou fait mal au repos',
      'les deux talons font mal avec une longue raideur matinale, ou d’autres articulations sont douloureuses ou gonflées',
      'le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'vous êtes diabétique, avez une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Elle ne peut pas vous dire pourquoi votre talon stagne et ne remplace pas l’examen d’un professionnel de santé, mais elle couvre les éléments qui manquent souvent\u00A0: un renforcement du mollet qui devient plus difficile avec le temps, et une séance plus légère les mauvais matins au lieu d’une semaine sans rien.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Tous les 14\u00A0jours, un court test vérifie la force du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez si les choses avancent. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['pfDuration', 'calfRaises', 'heelPain'],
  crumb: 'Fasciite plantaire qui ne passe pas',
  campaign: 'guide-plantar-fasciitis-not-getting-better-fr',
};
