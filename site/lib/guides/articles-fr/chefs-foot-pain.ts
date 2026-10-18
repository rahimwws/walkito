import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/chefs-foot-pain.ts (2026-10-18), written around
 * «mal aux pieds cuisinier», «douleur pieds en cuisine» et «chaussures de
 * cuisine antidérapantes». «Vous», terminology and exercise names as in
 * `lib/guides/fr.ts` and the other articles-fr pages. Figures, doses, grades,
 * qualifiers and sources are identical to the English page after its
 * fact-check. Same CITE keys and media ids. All internal links have French pages.
 */

export const CHEFS_FR: Guide = {
  lang: 'fr',
  page: 'chefs',
  mainSource: CITE.bellSlipFootwear,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Mal aux pieds en cuisine\u00A0: chaussures, tapis et exercices',
  description:
    'Pourquoi les sols durs et mouillés de la cuisine font mal aux pieds\u00A0: chaussures antidérapantes, sabots ou baskets, tapis et exercices courts.',
  h1: 'Mal aux pieds des cuisiniers et du personnel de restaurant\u00A0: ce qui aide pendant les longs services',
  lede:
    'Le mal aux pieds en cuisine vient souvent des longues heures debout et à marcher sur des sols durs. Pour la douleur au talon, les options les mieux étayées sont les étirements du mollet et du fascia plantaire, auxquels la recommandation de 2023 sur la douleur au talon donne la **note A**, et le renforcement du mollet, **note B** (Koc et coll., 2023). Les chaussures antidérapantes relèvent de la sécurité, pas de la douleur\u00A0: dans un essai randomisé mené dans 226\u00A0districts scolaires, fournir gratuitement des chaussures antidérapantes au personnel de restauration scolaire a fait baisser les déclarations de blessures par glissade de 3,54 à 1,18 pour 10\u00A0000\u00A0mois-travailleur (Bell et coll., 2019). Aucune étude n’a vérifié si les sabots ou une autre chaussure de cuisine réduisent la douleur aux pieds elle-même.',
  intro: [
    'Cette page porte sur le versant cuisine du problème\u00A0: des sols durs, mouillés et gras, le coup de feu du service et des chaussures choisies pour leur adhérence. Pour le mal aux pieds lié à la station debout dans n’importe quel métier, voyez [pourquoi j’ai mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/). Pour les gardes à l’hôpital, voyez [mal aux pieds des infirmières](/fr/mal-aux-pieds-infirmieres/). Si votre talon fait surtout mal aux premiers pas après le repos, ce schéma oriente vers une [fasciite plantaire](/fr/fasciite-plantaire/).',
  ],
  toc: true,
  takeaways: [
    'Dans une enquête auprès de 128\u00A0employés de cuisine au Caire, 46,1\u00A0% rapportaient une douleur au pied au cours des 12\u00A0derniers mois, devancée seulement par le bas du dos et le genou (Abdelsalam et coll., 2023).',
    'Chez 475\u00A0employés de 36\u00A0restaurants de restauration rapide aux États-Unis, porter des chaussures antidérapantes était associé à un taux de glissades inférieur de 54\u00A0% (Verma et coll., 2011).',
    'Dans un essai randomisé en restauration scolaire, les déclarations de blessures par glissade sont passées de 3,54 à 1,18 pour 10\u00A0000\u00A0mois-travailleur là où le personnel recevait des chaussures antidérapantes gratuites, alors qu’elles passaient de 2,01 à 2,30 dans le groupe témoin (Bell et coll., 2019).',
    'Rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote (odds) de fasciite plantaire dans une étude de 50\u00A0cas et 100\u00A0témoins, et un mollet tendu la multipliait par 23,3 (Riddle et coll., 2003).',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia plantaire la **note A** et au renforcement la **note B**. Les semelles seules reçoivent une **note B contre** (Koc et coll., 2023).',
  ],
  sections: [
    {
      h2: 'Pourquoi a-t-on si mal aux pieds après un service en cuisine\u00A0?',
      keyFact: 'Sur 128\u00A0employés de cuisine, 46,1\u00A0% rapportaient une douleur au pied au cours des 12\u00A0derniers mois, derrière le bas du dos (64,8\u00A0%) et le genou (46,9\u00A0%) (Abdelsalam et coll., 2023).',
      paragraphs: [
        '**Le travail en cuisine cumule ce que les pieds supportent le moins bien\u00A0: des heures debout, des trajets courts et rapides, des sols durs et peu de repos.** Dans une enquête auprès de 128\u00A0employés de cuisine de deux grandes résidences étudiantes du Caire, 90,6\u00A0% rapportaient un trouble musculosquelettique au cours des 12\u00A0derniers mois. Le pied arrivait en troisième position, à 46,1\u00A0%, juste derrière le genou à 46,9\u00A0%.',
        'Les chiffres varient beaucoup d’une étude à l’autre. Chez 307\u00A0cuisiniers de restaurant au Pakistan, la plupart travaillant de 9 à 12\u00A0heures par jour, 26 rapportaient une douleur à la cheville ou au pied, bien moins que les 101 qui rapportaient une douleur du bas du dos et du genou (Iqbal et coll., 2023). Les enquêtes portaient sur des groupes différents avec des questions différentes\u00A0: lisez-les comme un ordre d’idée, pas comme un taux précis.',
        'Un lien ressort nettement. Chez 415\u00A0employés de cuisine d’hôtels et de restaurants en Éthiopie, la station debout prolongée s’accompagnait d’une cote multipliée par 3,81 de troubles musculosquelettiques liés au travail (Abebaw et coll., 2024). Cette étude comptait la douleur dans tout le corps, pas seulement aux pieds.',
      ],
      sourceNote:
        'Abdelsalam 2023 et Abebaw 2024 ont utilisé le questionnaire nordique (Nordic Musculoskeletal Questionnaire) pour la prévalence sur 12\u00A0mois. Abebaw 2024\u00A0: odds ratio ajusté 3,81 (IC à 95\u00A0% 1,58 à 9,17) pour la station debout prolongée. Iqbal 2023 a utilisé un échantillon de convenance de 307\u00A0cuisiniers (285\u00A0hommes).',
      cites: [CITE.abdelsalamKitchen, CITE.iqbalChefs, CITE.abebawKitchen],
    },
    {
      h2: 'Le mal aux pieds en cuisine est-il une fasciite plantaire\u00A0?',
      keyFact: 'Rester debout la majeure partie de la journée de travail multipliait par 3,6 la cote de fasciite plantaire, et une cheville peu souple la multipliait par 23,3 (Riddle et coll., 2003).',
      paragraphs: [
        'Souvent, c’est une fatigue et une douleur diffuse qui passent après une nuit de repos. Mais le travail en cuisine réunit les deux facteurs de risque les plus forts trouvés dans une étude cas-témoins de 50\u00A0personnes atteintes de fasciite plantaire et 100 sans\u00A0: rester debout la majeure partie de la journée de travail multipliait la cote par 3,6, et un [mollet tendu](/fr/mollets-tendus/) qui limite la flexion de la cheville la multipliait par 23,3.',
        'La fasciite plantaire a un schéma typique\u00A0: une douleur vive sous le talon aux premiers pas du matin ou après être resté assis, qui se calme en marchant et revient après une longue journée. Ce schéma est traité dans [douleur au talon au réveil](/fr/douleur-talon-au-reveil/), et le guide complet des exercices est [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
        'D’autres schémas orientent ailleurs\u00A0:',
        {
          list: [
            'une brûlure sous l’avant du pied au milieu du service\u00A0: voyez [métatarsalgie](/fr/metatarsalgie-douleur-avant-pied/)',
            'une douleur profonde, comme une contusion, au centre du talon, qui s’aggrave à mesure que vous restez debout sur un sol dur\u00A0: voyez [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/)',
            'des voûtes qui font mal ou semblent s’affaisser en fin de service\u00A0: voyez [douleur de la voûte plantaire](/fr/douleur-voute-plantaire/)',
          ],
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Sabots ou chaussures antidérapantes\u00A0: que disent les données\u00A0?',
      keyFact: 'Des chaussures antidérapantes gratuites ont fait baisser les déclarations de blessures par glissade de 3,54 à 1,18 pour 10\u00A0000\u00A0mois-travailleur dans un essai randomisé mené dans 226\u00A0districts scolaires (Bell et coll., 2019).',
      paragraphs: [
        '**Les données les plus solides sur les chaussures de cuisine portent sur les glissades, pas sur les pieds douloureux.** Une étude américaine a suivi 475\u00A0employés de 36\u00A0restaurants de restauration rapide pendant trois mois. Ceux dont les chaussures portaient un marquage antidérapant sur la semelle rapportaient un taux de glissades inférieur de 54\u00A0% à celui des employés sans ce type de chaussures, après prise en compte de l’âge, du sexe, du poids et d’autres facteurs (Verma et coll., 2011).',
        'Un essai randomisé l’a ensuite testé comme programme. Des districts scolaires ont été tirés au sort pour fournir gratuitement des chaussures antidérapantes à leur personnel de restauration. Les déclarations de blessures par glissade sont passées de 3,54 à 1,18 pour 10\u00A0000\u00A0mois-travailleur dans ces districts, et de 2,01 à 2,30 dans les autres (Bell et coll., 2019).',
        'Les chaussures s’usent. Chez les mêmes employés de restaurant, ceux qui portaient déjà des chaussures antidérapantes et sont passés à une paire neuve avaient ensuite un taux de glissades inférieur de 55\u00A0%, et les chaussures portées depuis moins de six mois faisaient modérément mieux que les plus anciennes (Verma et coll., 2014). L’étude n’a pas pu dire exactement quand les remplacer.',
        '**Aucune étude que nous ayons trouvée ne compare les sabots aux baskets, ni une chaussure de cuisine à une autre, pour la douleur aux pieds.** Pour la douleur au talon en général, la recommandation de 2023 donne aux [semelles](/fr/semelles-ou-exercices/) seules une **note B contre**\u00A0: les données disent de ne pas compter uniquement sur elles. Un ordre raisonnable\u00A0: choisissez une chaussure à semelle antidérapante qui va à votre pied tel qu’il est aujourd’hui et ne serre pas les orteils, remplacez-la quand les crampons sont usés, et faites les étirements et le renforcement ci-dessous pour la douleur elle-même.',
      ],
      table: {
        caption: 'À quoi sert chaque option',
        head: ['Option', 'Aide pour', 'Données'],
        rows: [
          ['Chaussures antidérapantes', 'Glissades et blessures par glissade', 'Étude de cohorte et essai randomisé'],
          ['Sabots ou baskets', 'Non testé pour la douleur', 'Aucune trouvée'],
          ['Semelles seules', 'Douleur au talon', 'Note B contre'],
          ['Tapis anti-fatigue', 'Inconfort en station debout', 'Quelques-unes, pas en cuisine'],
          ['Bas de compression', 'Inconfort et gonflement des jambes', 'Petits essais, pas en cuisine'],
          ['Étirements du mollet et du fascia', 'Douleur au talon', 'Note A'],
        ],
      },
      sourceNote:
        'Verma 2011\u00A0: port de chaussures antidérapantes jugé d’après un marquage sur la semelle\u00A0; taux de glissades déclarées inférieur de 54\u00A0% (IC à 95\u00A0% 37\u00A0% à 64\u00A0%). Bell 2019\u00A0: essai randomisé en grappes à deux bras, restauration scolaire de la maternelle à la terminale\u00A0; odds ratio ajusté 0,33 (IC à 95\u00A0% 0,17 à 0,63). Verma 2014\u00A0: rapport de taux 0,45 (IC à 95\u00A0% 0,23 à 0,89) après le passage à une paire neuve.',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear, CITE.vermaShoeAge, CITE.guideline],
    },
    {
      h2: 'Où glisse-t-on le plus en cuisine\u00A0?',
      keyFact: 'Les employés de restaurant glissaient 14,6\u00A0fois plus souvent en marchant sur un sol souillé et 2,9\u00A0fois plus souvent quand ils se dépêchaient (Verma et coll., 2011).',
      paragraphs: [
        'Dans l’étude américaine en restaurant, la plupart des glissades se produisaient près de **la plonge et de la friteuse**, les zones que les employés jugeaient aussi les plus glissantes, et il y avait du liquide ou de la graisse au sol dans plus de 70\u00A0% des glissades (Verma et coll., 2010).',
        'Une deuxième analyse des mêmes employés s’est penchée sur le moment de chaque glissade. Le taux de glissades était 14,6\u00A0fois plus élevé en marchant sur un sol souillé, 2,9\u00A0fois plus élevé en se dépêchant et 1,7\u00A0fois plus élevé en étant distrait. Les chaussures antidérapantes atténuaient l’effet de la précipitation et d’un sol sale (Verma et coll., 2011).',
        'Que l’employeur fournisse les chaussures compte aussi. Là où l’employeur fournissait des chaussures antidérapantes, 91\u00A0% des employés les portaient. Là où elles n’étaient ni fournies ni encouragées, ils étaient 53,5\u00A0% (Verma et coll., 2010). Si votre cuisine a un programme de chaussures, profitez-en.',
      ],
      cites: [CITE.vermaSlipExperience, CITE.vermaRushing],
    },
    {
      h2: 'Les tapis anti-fatigue et les bas de compression aident-ils en cuisine\u00A0?',
      paragraphs: [
        'Une revue de 2015 sur le travail debout cite les tapis de sol, les bas de compression et les chaussures de maintien parmi les mesures ayant un certain niveau de preuve pour réduire l’inconfort et la fatigue (Waters et Dick, 2015). Aucune de ces études n’a été menée en cuisine. Un tapis à un poste où vous restez longtemps debout, comme le passe ou un plan de préparation, vaut la peine d’être essayé. Choisissez-en un qui reste bien à plat et ne bouge pas sur un sol mouillé, pour qu’il ne devienne pas lui-même un risque de chute.',
        'Les bas de compression n’ont pas été testés en cuisine. Dans un petit essai randomisé auprès de 40\u00A0agents de sécurité en vacations debout d’environ 12\u00A0heures, des bas de 15 à 20\u00A0mmHg et de 20 à 30\u00A0mmHg évitaient tous deux la hausse de l’inconfort et du gonflement des jambes observée avec des chaussettes ordinaires (Garcia et coll., 2023). Les agents étaient tous des hommes et aucun n’était cuisinier\u00A0: lisez-le comme une piste probable, pas comme une preuve pour la cuisine.',
        '**Les tapis et les bas aident au confort pendant le service. Ils ne remplacent pas les étirements et le renforcement** que la recommandation sur la douleur au talon note le mieux.',
      ],
      cites: [CITE.waters, CITE.garcia, CITE.guideline],
    },
    {
      h2: 'Quels exercices aident les cuisiniers qui ont mal aux pieds\u00A0?',
      keyFact: 'La recommandation de 2023 sur la douleur au talon donne aux étirements du mollet et du fascia plantaire la note A, sa meilleure note, et au renforcement la note B (Koc et coll., 2023).',
      paragraphs: [
        'Les exercices sont ceux du [guide sur la fasciite plantaire](/fr/exercices-fasciite-plantaire/), aux mêmes doses de départ. Les étirements ne demandent qu’un mur ou une chaise\u00A0: ils tiennent dans une pause, avant le service ou au moment où vous retirez vos chaussures de travail. Gardez le renforcement pour les jours de repos ou après le service.',
        'Les notes de la recommandation concernent la fasciite plantaire et n’ont pas été testées chez le personnel de cuisine, mais ce sont les mêmes tissus qu’un service en cuisine sollicite toute la journée. Si un exercice fait monter votre douleur à 6 sur 10 ou plus, arrêtez pour la journée.',
      ],
      exercises: [
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note. Un mollet tendu était le facteur de risque le plus fort dans une étude cas-témoins de 2003.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours de service',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur ou un plan de travail en inox. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Faites-le sur une partie sèche du sol, pas près de la plonge.',
          stop: 'La douleur atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours de service',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'La douleur atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une silhouette en fente, les genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des jours, dès le réveil',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier au bord du lit, avant que votre pied ne touche le sol.',
          stop: 'La douleur atteint 6 sur 10',
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
          how: 'Asseyez-vous, les pieds à plat, et montez en poussant sur l’avant des pieds. Les mains sur les genoux ajoutent de la résistance. Genou plié, l’exercice travaille surtout le soléaire et ne charge presque pas le talon\u00A0: il convient à une pause sur une caisse retournée ou une chaise de la salle du personnel.',
          stop: 'La douleur atteint 6 sur 10',
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
          how: 'Tenez-vous sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Tenez-vous à un mur ou à une barre. Faites-les chez vous ou après le service, pas sur un sol de cuisine mouillé.',
          stop: 'La douleur atteint 6 sur 10',
          image: 'Exercice\u00A0: montées sur pointes, deux pieds',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une silhouette debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Non testé dans les études de cette page. Il est là pour le confort après le service.' },
          dose: '1\u00A0minute',
          often: 'Après un long service ou les jours de repos',
          feel: 'Une pression ferme sous le pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, relâchez.',
          stop: 'La douleur atteint 6 sur 10',
          image: 'Exercice\u00A0: massage avec une balle',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante sur une balle, avec une pression ferme',
          alt: 'Une silhouette assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Comment caser les exercices dans un service en cuisine\u00A0?',
      paragraphs: [
        'Une coupure ou un double service laisse peu de place pour une routine. Associez donc les exercices à quelque chose que vous faites déjà\u00A0:',
        {
          list: [
            '**Si vous avez 3\u00A0minutes\u00A0:** l’étirement du mollet et l’étirement du soléaire, 30\u00A0secondes de chaque côté, avant le service ou quand vous changez de chaussures. Cela cible le mollet tendu, le facteur de risque le plus fort de l’étude cas-témoins.',
            '**Si vous avez 5\u00A0minutes\u00A0:** ajoutez l’étirement du fascia plantaire. Les étirements sont la partie à laquelle la recommandation de 2023 donne la **note A**.',
            '**Si vous avez 10\u00A0minutes\u00A0:** un jour de repos ou après le service, ajoutez les montées sur pointes et une minute de massage avec une balle. Le renforcement reçoit la **note B**.',
          ],
        },
        'Les pauses elles-mêmes semblent compter. Chez 1\u00A0909\u00A0employés de cuisine en Corée du Sud, les femmes qui déclaraient des pauses insuffisantes avaient une cote multipliée par 1,68 de troubles musculosquelettiques (Park et coll., 2021). Le lien a été rapporté chez les femmes, et une enquête de ce type ne peut pas montrer de cause à effet. Malgré tout, s’asseoir quelques minutes entre deux coups de feu vaut la peine d’être défendu.',
        'Pour la fasciite plantaire en général, environ 90\u00A0% des personnes vont mieux avec un traitement non chirurgical, même si cela peut prendre des mois\u00A0; voyez [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/). La recommandation de 2023 suggère aussi d’adapter la charge sur les pieds au travail, un conseil qui reçoit la **note E** parce qu’il repose sur la théorie, pas sur des essais.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.parkRestBreaks, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Pourquoi ai-je si mal aux pieds après avoir travaillé en cuisine\u00A0?',
      cites: [CITE.abdelsalamKitchen, CITE.riddle],
      a: 'Un service en cuisine associe des heures debout, des trajets courts et rapides et des sols durs. Dans une enquête auprès de 128\u00A0employés de cuisine, 46,1\u00A0% rapportaient une douleur au pied au cours de l’année écoulée. Dans une étude cas-témoins, rester debout la majeure partie de la journée de travail multipliait aussi par 3,6 la cote de fasciite plantaire. Des étirements quotidiens du mollet et du fascia plantaire ciblent les tissus les plus sollicités.',
    },
    {
      q: 'Les sabots sont-ils bons pour les cuisiniers qui ont mal aux pieds\u00A0?',
      cites: [CITE.guideline],
      a: 'Personne ne le sait vraiment\u00A0: aucune étude que nous ayons trouvée ne compare les sabots aux baskets ou à d’autres chaussures de cuisine pour la douleur aux pieds. Pour la sécurité, le plus important est une semelle antidérapante. Pour la douleur au talon, la recommandation de 2023 donne aux semelles seules une note B contre\u00A0: associez donc la chaussure qui vous va le mieux à des étirements du mollet et du fascia plantaire, qu’elle note A.',
    },
    {
      q: 'Les chaussures antidérapantes sont-elles vraiment efficaces en restaurant\u00A0?',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear],
      a: 'Contre les glissades, oui. Chez 475\u00A0employés de 36\u00A0restaurants de restauration rapide aux États-Unis, les chaussures antidérapantes étaient associées à un taux de glissades inférieur de 54\u00A0%. Dans un essai randomisé en restauration scolaire, des chaussures antidérapantes gratuites ont fait baisser les déclarations de blessures par glissade de 3,54 à 1,18 pour 10\u00A0000\u00A0mois-travailleur. Ces études mesuraient les glissades, pas la douleur aux pieds.',
    },
    {
      q: 'Tous les combien faut-il remplacer ses chaussures de cuisine\u00A0?',
      cites: [CITE.vermaShoeAge],
      a: 'Il n’existe pas de règle testée. Dans une étude auprès de 475\u00A0employés de restaurant, les chaussures antidérapantes portées depuis moins de six mois protégeaient modérément mieux des glissades que les plus anciennes, et ceux qui en portaient déjà et sont passés à une paire neuve glissaient 55\u00A0% moins souvent. Vérifiez les crampons et remplacez les chaussures quand le motif de la semelle est lisse.',
    },
    {
      q: 'Les tapis anti-fatigue aident-ils le personnel de cuisine\u00A0?',
      cites: [CITE.waters],
      a: 'Probablement, pour le confort. Une revue de 2015 sur le travail debout cite les tapis de sol parmi les mesures ayant un certain niveau de preuve pour réduire l’inconfort et la fatigue, mais aucune de ces études n’a été menée en cuisine. Placez un tapis là où vous restez longtemps immobile, et choisissez-en un qui reste à plat et ne glisse pas sur un sol mouillé.',
    },
    {
      q: 'Les bas de compression aident-ils les cuisiniers pendant les longs services\u00A0?',
      cites: [CITE.garcia],
      a: 'C’est possible. Dans un essai auprès de 40\u00A0agents de sécurité en vacations debout d’environ 12\u00A0heures, des bas de 15 à 20\u00A0mmHg et de 20 à 30\u00A0mmHg évitaient tous deux la hausse de l’inconfort et du gonflement des jambes observée avec des chaussettes ordinaires. L’essai était petit et n’a pas eu lieu en cuisine, et les bas ne remplacent ni les étirements ni le renforcement.',
    },
    {
      q: 'Peut-on avoir une fasciite plantaire à cause du métier de cuisinier\u00A0?',
      cites: [CITE.riddle],
      a: 'Le travail en cuisine réunit des facteurs de risque connus. Dans une étude cas-témoins de 50\u00A0personnes atteintes de fasciite plantaire et 100 sans, rester debout la majeure partie de la journée de travail multipliait la cote par 3,6 et un mollet tendu la multipliait par 23,3. Aucune étude n’a mesuré la fasciite plantaire chez les cuisiniers en particulier.',
    },
    {
      q: 'Que faire pour les pieds douloureux pendant un service chargé\u00A0?',
      cites: [CITE.guideline, CITE.parkRestBreaks],
      a: 'Changez d’appui, asseyez-vous pendant les pauses quand c’est possible et faites un étirement du mollet de 30\u00A0secondes contre un mur, sur une partie sèche du sol. Chez des employés de cuisine sud-coréens, les femmes qui avaient des pauses insuffisantes avaient une cote multipliée par 1,68 de troubles musculosquelettiques. Gardez les montées sur pointes et les séances plus longues pour après le service ou les jours de repos.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une glissade, une chute, une torsion ou la chute d’un objet lourd sur votre pied',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'le pied est engourdi, fourmille ou brûle, ou il est gonflé, rouge ou chaud',
      'vous avez au pied une brûlure, une coupure ou une ampoule qui ne s’améliore pas, surtout en cas de diabète ou de sensibilité réduite des pieds',
      'un mollet ou une jambe devient soudainement douloureux et gonflé',
      'la douleur vous réveille la nuit ou est présente au repos',
      'la douleur se situe en un point précis et s’aggrave à l’effort, ce qui peut évoquer une fracture de fatigue',
      'la douleur ne s’est pas atténuée après plusieurs semaines avec de meilleures chaussures, plus de pauses et les exercices de cette page',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied, sur iPhone et Android. Elle ne connaît pas votre planning\u00A0: c’est vous qui choisissez quand placer les séances, avant le service, entre deux services ou les jours de repos.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez comment vont vos pieds, et le plan s’y adapte. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito ne pose pas de diagnostic. Si la douleur est vive, s’aggrave ou vous empêche de dormir, consultez d’abord un professionnel de santé.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['standing', 'nurses', 'heelPain'],
  crumb: 'Mal aux pieds en cuisine',
  campaign: 'guide-chefs-foot-pain-fr',
};
