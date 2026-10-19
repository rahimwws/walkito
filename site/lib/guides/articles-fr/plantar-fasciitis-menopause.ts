import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/plantar-fasciitis-menopause.ts (2026-10-19),
 * written around «fasciite plantaire ménopause» and «douleur talon
 * ménopause». «Vous», terminology and exercise names as in `lib/guides/fr.ts`
 * and the other articles-fr pages. HRT rendered as «hormonothérapie de la
 * ménopause (THS)». Figures, doses, grades, hedges and sources are identical
 * to the English page after its fact-check. Same CITE keys and media ids.
 */

export const PF_MENOPAUSE_FR: Guide = {
  lang: 'fr',
  page: 'pfMenopause',
  mainSource: CITE.rasenbergIncidence,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fasciite plantaire, ménopause\u00A0: mal au talon de 40 à 60 ans',
  description:
    'La fasciite plantaire culmine chez la femme vers 50\u00A0ans, environ deux fois plus que chez l’homme. Ménopause et talon\u00A0: le connu, l’inconnu et ce qui aide.',
  h1: 'Fasciite plantaire et ménopause\u00A0: pourquoi la douleur au talon commence souvent entre 40 et 60\u00A0ans',
  lede:
    'La fasciite plantaire est la plus fréquente chez les femmes autour de l’âge de la ménopause\u00A0: dans les dossiers de médecine générale néerlandais, les nouveaux cas chez les femmes culminaient à 11,23 pour 1\u00A0000\u00A0patients-années à 50\u00A0ans, contre un pic de 5,54 chez les hommes à 55\u00A0ans (Rasenberg et coll., 2019). On ne sait pas si la baisse des hormones en est la cause. Le lien est plausible, mais aucune étude ne l’a prouvé (Douglas-Harris et coll., 2026). Ce qui aide est la même chose qu’à tout âge\u00A0: les étirements du fascia plantaire et du mollet, notés **A** dans la recommandation de 2023 sur la douleur au talon, et le renforcement du mollet, noté **B** (Koc et coll., 2023).',
  intro: [
    'Si votre talon a commencé à faire mal entre 40 et 60\u00A0ans, vous faites partie du groupe le plus souvent touché, et ce n’est pas de votre faute. Cette page présente les chiffres selon l’âge et le sexe, ce que la recherche dit et ne dit pas des hormones et du fascia plantaire, les autres changements du milieu de vie qui chargent le talon, les exercices les mieux étayés, ce que l’on sait de l’hormonothérapie de la ménopause, et quand consulter un professionnel de santé.',
  ],
  takeaways: [
    'Dans les dossiers d’environ 1,9\u00A0million de patients néerlandais, les nouveaux cas de douleur au talon chez les femmes culminaient à 11,23 pour 1\u00A0000\u00A0patients-années à 50\u00A0ans. Chez les hommes, le pic était de 5,54, à 55\u00A0ans. 62\u00A0% des 18\u00A0004\u00A0cas étaient des femmes (Rasenberg et coll., 2019).',
    'La recommandation de 2023 sur la douleur au talon indique que la fasciite plantaire est la plus fréquente entre 40 et 60\u00A0ans, et cite la course et les métiers où l’on passe beaucoup de temps debout parmi les facteurs de risque (Koc et coll., 2023).',
    'Un lien entre ménopause et douleur au talon est plausible mais non prouvé\u00A0: aucune étude n’a mesuré le fascia plantaire au fil de la ménopause, et dans une étude de 2026 par groupes de discussion, 76\u00A0% des 17\u00A0femmes n’avaient pas fait le rapprochement (Douglas-Harris et coll., 2026).',
    'Aucun essai n’a testé l’hormonothérapie de la ménopause (THS) pour la fasciite plantaire. Savoir si le THS vous convient dépend de vos symptômes de ménopause et de vos antécédents de santé, et c’est une décision à prendre avec votre médecin.',
    'Les étirements du fascia plantaire et du mollet (note **A**) et le renforcement du mollet (note **B**) sont les exercices les mieux notés, quel que soit votre âge (Koc et coll., 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La fasciite plantaire est-elle plus fréquente autour de la ménopause\u00A0?',
      keyFact: 'Les nouveaux cas de douleur sous le talon culminaient à 11,23 pour 1\u00A0000\u00A0patients-années chez les femmes à 50\u00A0ans, contre 5,54 chez les hommes à 55\u00A0ans (Rasenberg et coll., 2019).',
      paragraphs: [
        '**Oui, le calendrier concorde.** Une étude néerlandaise a examiné les dossiers de médecins de famille d’environ 1,9\u00A0million de patients de 2013 à 2016 et a trouvé 18\u00A0004\u00A0nouveaux cas de douleur sous le talon, le terme générique qui inclut la fasciite plantaire. 62\u00A0% étaient des femmes. Dans l’ensemble, les femmes avaient 4,64\u00A0nouveaux cas pour 1\u00A0000\u00A0patients-années, et les hommes 2,98 (Rasenberg et coll., 2019).',
        'C’est la répartition par âge qui frappe. Chez les femmes, les nouveaux cas culminaient à **11,23 pour 1\u00A0000\u00A0patients-années à 50\u00A0ans**. Chez les hommes, le pic était plus bas et plus tardif\u00A0: 5,54 à 55\u00A0ans (Rasenberg et coll., 2019). L’âge moyen de la ménopause au Royaume-Uni est de 51\u00A0ans, c’est pourquoi des chercheurs ont commencé à se demander si les deux sont liés (Douglas-Harris et coll., 2026).',
        'La recommandation de 2023 sur la douleur au talon indique que la fasciite plantaire est la plus fréquente entre 40 et 60\u00A0ans (Koc et coll., 2023). Les femmes ont aussi tendance à la garder plus longtemps\u00A0: dans un suivi de 5 à 15\u00A0ans de 174\u00A0personnes, le risque d’avoir encore une fasciite plantaire était plus élevé chez les femmes et chez les personnes ayant mal aux deux talons (Hansen et coll., 2018).',
      ],
      table: {
        caption: 'Pic de nouveaux cas de douleur sous le talon, médecine générale aux Pays-Bas (Rasenberg et coll., 2019)',
        head: ['', 'Femmes', 'Hommes'],
        rows: [
          ['Âge du pic', '50', '55'],
          ['Taux au pic pour 1\u00A0000\u00A0patients-années', '11,23', '5,54'],
          ['Taux tous âges confondus', '4,64', '2,98'],
        ],
      },
      after: [
        'Ces chiffres viennent de personnes qui ont consulté un médecin de famille\u00A0: ils comptent donc les douleurs au talon assez gênantes pour prendre rendez-vous. Ils montrent quand la douleur au talon est la plus fréquente. Ils ne montrent pas pourquoi.',
      ],
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'La ménopause provoque-t-elle une fasciite plantaire\u00A0?',
      keyFact: 'Sur 17\u00A0femmes en périménopause ou ménopausées ayant une douleur au talon, 76\u00A0% n’avaient pas fait le lien avec la ménopause, et la plupart ont dit que le sujet n’avait pas été abordé quand elles avaient cherché de l’aide (Douglas-Harris et coll., 2026).',
      paragraphs: [
        '**Personne ne le sait encore.** Les auteurs d’une étude de 2026 consacrée à la ménopause et à la douleur au talon écrivent que l’existence d’un lien de cause à effet est incertaine (Douglas-Harris et coll., 2026). Cette étude reposait sur des groupes de discussion avec 17\u00A0femmes, pas sur une mesure des hormones ou du tissu du talon. Beaucoup de sites présentent ce lien comme un fait. Les données ne le permettent pas encore.',
        'Voici ce que l’on sait et ce que l’on ne sait pas\u00A0:',
      ],
      table: {
        head: ['Question', 'Ce que montrent les études'],
        rows: [
          ['La douleur au talon est-elle plus fréquente chez les femmes vers 50\u00A0ans\u00A0?', '**Établi.** Pic à 50\u00A0ans chez les femmes (Rasenberg, 2019)'],
          ['Les hormones sexuelles agissent-elles sur le fascia plantaire\u00A0?', '**Quelques indices.** Il se relâche vers l’ovulation chez les jeunes femmes (Lee, 2018)'],
          ['Le fascia plantaire change-t-il à la ménopause\u00A0?', '**Inconnu.** Aucune étude ne l’a mesuré'],
          ['La baisse des œstrogènes cause-t-elle une douleur au talon\u00A0?', '**Inconnu.** Plausible, non prouvé'],
          ['Le THS soulage-t-il la douleur au talon\u00A0?', '**Inconnu.** Aucun essai ne l’a testé'],
        ],
      },
      after: [
        'L’hypothèse hormonale est raisonnable. Chez 15\u00A0jeunes femmes, le fascia plantaire était plus lâche autour de l’ovulation que pendant les règles, et l’équilibre un peu moins stable (Lee et Petrofsky, 2018). Une revue d’études de laboratoire suggère que les œstrogènes pourraient rendre les tendons moins raides, un effet que l’entraînement pourrait modifier (Hansen et Kjaer, 2014). Et les douleurs musculosquelettiques en général sont fréquentes pendant la transition ménopausique\u00A0: une revue de 16\u00A0études a montré que 71\u00A0% des femmes en périménopause en signalaient (Lu et coll., 2020).',
        'Mais aucune de ces études n’a porté sur la fasciite plantaire chez des femmes en cours de ménopause. Beaucoup de changements surviennent au même âge, ce qui rend difficile de séparer les hormones de tout le reste. La section suivante présente ces autres changements, car sur certains, vous pouvez agir.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.rasenbergIncidence, CITE.leePetrofskyFascia, CITE.hansenKjaerEstrogen, CITE.luMenopausePain],
    },
    {
      h2: 'Qu’est-ce qui change d’autre entre 40 et 60\u00A0ans et peut solliciter le talon\u00A0?',
      keyFact: 'Dans une étude cas-témoins, une cheville raide multipliait par 23,3 le risque de fasciite plantaire, et le fait de passer la majeure partie de la journée de travail debout par 3,6 (Riddle et coll., 2003).',
      paragraphs: [
        'La fasciite plantaire commence en général quand la charge sur le talon dépasse ce qu’il peut supporter et récupérer. Plusieurs choses qui changent souvent au milieu de la vie s’ajoutent à cette charge\u00A0:',
        {
          list: [
            '**Le poids.** Dans une revue de 51\u00A0études, un IMC supérieur à 27 multipliait par 3,7 le risque de fasciite plantaire, et le lien était le plus fort chez les personnes non sportives (van Leeuwen et coll., 2016). Le poids change souvent au milieu de la vie\u00A0; [poids et fasciite plantaire](/fr/poids-et-fasciite-plantaire/) fait le point sur ce que l’on sait.',
            '**Des mollets et des chevilles plus raides.** Dans une étude portant sur 50\u00A0personnes ayant une fasciite plantaire et 100 sans, une cheville raide était le facteur mesuré le plus fort, avec un risque multiplié par 23,3 (Riddle et coll., 2003). Chez 100\u00A0adultes sans problème de pied, les personnes d’environ 80\u00A0ans avaient des chevilles plus raides, des pieds plus plats et des muscles des orteils plus faibles que celles d’environ 20\u00A0ans (Scott et coll., 2007).',
            '**Un coussinet du talon qui amortit moins.** Dans une étude radiographique portant sur 70\u00A0personnes ayant mal au talon et 200 sans douleur, le coussinet du talon perdait de son élasticité avec l’âge, et davantage chez les personnes ayant mal (Prichasuk, 1994). Un coussinet graisseux aminci provoque sa propre forme de douleur au talon, décrite dans [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
            '**Un changement d’activité.** Commencer un nouveau programme de marche ou de course, un nouveau travail debout, ou une hausse soudaine de l’exercice peut ajouter de la charge rapidement. Une revue de 2026 cite les hausses rapides d’activité physique parmi les facteurs qui augmentent le risque de blessures de surmenage comme la fasciite plantaire chez les femmes au milieu de la vie (Ansari et coll., 2026).',
          ],
        },
        'Les longues heures debout comptent aussi\u00A0: passer la majeure partie de la journée de travail debout multipliait le risque par 3,6 dans la même étude cas-témoins (Riddle et coll., 2003). Les pieds ont aussi tendance à s’aplatir un peu avec l’âge\u00A0; voir [les pieds plats s’aggravent-ils avec l’âge](/fr/pieds-plats-avec-l-age/).',
      ],
      cites: [CITE.vanLeeuwenBmi, CITE.riddle, CITE.scottAgeFoot, CITE.prichasukHeelPad, CITE.ansariMenopause, CITE.fatPadReview],
    },
    {
      h2: 'Quels exercices aident la fasciite plantaire autour de la ménopause\u00A0?',
      paragraphs: [
        'Aucune étude sur l’exercice n’a porté uniquement sur des femmes en ménopause\u00A0: le meilleur repère est donc la recommandation sur la douleur au talon pour les adultes en général. Les étirements du fascia plantaire et du mollet reçoivent la meilleure note de la recommandation, **A**, et le renforcement du mollet un **B** (Koc et coll., 2023). Ce sont les mêmes doses de départ que dans le guide principal des [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
        'Faites le premier étirement du fascia plantaire assise au bord du lit, avant de vous lever\u00A0: dans un essai sur 82\u00A0personnes, étirer avant les premiers pas soulageait davantage la douleur du matin que l’étirement du mollet seul (DiGiovanni et coll., 2003). Dans un essai sur 48\u00A0personnes, des montées sur pointes lentes avec une serviette sous les orteils soulageaient la douleur plus vite que les étirements seuls à trois mois, et à douze mois les deux groupes étaient à égalité (Rathleff et coll., 2015). Si un exercice fait monter votre douleur au talon à 6 sur 10, arrêtez pour la journée.',
        'Le renforcement a une seconde raison d’être au milieu de la vie. La masse musculaire et l’équilibre ont tendance à diminuer après la ménopause (Douglas-Harris et coll., 2026), et l’entraînement en résistance fait partie des mesures non hormonales qu’une revue de 2026 juge sous-utilisées (Ansari et coll., 2026). Les montées sur pointes et le travail d’équilibre sont un petit début concret. [Montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) détaille le protocole des montées sur pointes.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'La plupart des jours d’exercice',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier assise au bord du lit, avant que votre pied touche le sol. Si croiser la jambe est difficile, passez une serviette autour de l’avant du pied et tirez doucement.',
          stop: 'Une douleur vive au talon, ou une douleur qui atteint 6 sur 10',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à le sentir dans la voûte',
          alt: 'Une personne qui tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours d’exercice',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant.',
          stop: 'Une douleur au mollet qui persiste après l’arrêt',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne aux étirements la note A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'La plupart des jours d’exercice',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position contre le mur, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur au mollet qui persiste après l’arrêt',
          image: 'Exercice\u00A0: étirement du soléaire',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Cette étape n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '3\u00A0jours par semaine, jamais deux jours de suite',
          feel: 'Un travail en bas du mollet',
          how: 'Asseyez-vous, pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Les mains sur les genoux ajoutent de la résistance. Genou plié, cet exercice sollicite surtout le soléaire, le muscle profond du mollet. C’est une première étape douce avant les montées debout.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes assis',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette',
          evidence: { level: 'moderate', why: 'C’est la routine d’un essai sur 48\u00A0personnes, et la recommandation de 2023 donne au renforcement la note B.' },
          dose: '4\u00A0séries de 10, chaque jambe, avec une charge en plus',
          often: 'Jours de renforcement',
          feel: 'Un travail dur dans le mollet',
          how: 'Tenez-vous sur un pied sur une marche, une serviette roulée sous les orteils. Prenez trois secondes pour monter, tenez deux secondes en haut, et prenez trois secondes pour redescendre. À ce niveau, Walkito ajoute une charge, par exemple un sac à dos. C’est la serviette qui fait travailler le fascia plantaire, et pas seulement le mollet. Tenez-vous à une rampe ou à un mur pour l’équilibre.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un lendemain matin pire',
          image: 'Exercice\u00A0: montées sur pointes avec serviette',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: trois secondes pour monter, deux en haut, trois pour descendre',
          alt: 'Une personne qui monte sur la pointe des pieds sur une marche avec une serviette roulée, les mollets mis en évidence',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: { level: 'early', why: 'Un ajout propre à Walkito. Il ne faisait pas partie des programmes testés pour la douleur au talon.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, chaque jambe',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied et la cheville',
          how: 'Tenez-vous sur un pied à côté d’un plan de travail et fixez un point immobile. Laissez le pied osciller. C’est voulu, car cette oscillation, c’est le pied qui gère l’équilibre. Effleurez le plan de travail du bout des doigts si besoin.',
          stop: 'Une douleur au talon qui atteint 6 sur 10, ou un sentiment d’insécurité',
          image: 'Exercice\u00A0: équilibre sur une jambe',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: tenez-vous sur un pied et laissez-le faire de petites corrections',
          alt: 'Une personne en équilibre sur une jambe, les muscles du bas de la jambe mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.douglasHarrisMenopause, CITE.ansariMenopause],
    },
    {
      h2: 'L’hormonothérapie de la ménopause aide-t-elle la fasciite plantaire\u00A0?',
      keyFact: 'Chez 85\u00A0femmes ménopausées, les femmes actives sous THS avaient des tendons d’Achille plus fins que les femmes actives sans THS, sans effet net chez les femmes inactives (Cook et coll., 2007). Ni cette étude ni aucune autre n’a mesuré la douleur au talon.',
      paragraphs: [
        '**Il n’existe aucun essai du THS pour la fasciite plantaire\u00A0: personne ne peut donc dire s’il aide.** Nous en avons cherché un et n’en avons trouvé aucun. Le THS, ou hormonothérapie de la ménopause, est utilisé pour les symptômes de la ménopause. Ce n’est pas une prise en charge reconnue de la douleur au talon.',
        'Ce qui existe est indirect. Dans les groupes de discussion de 2026, certaines femmes ont dit avoir remarqué moins de douleurs aux pieds sous THS (Douglas-Harris et coll., 2026). C’est un témoignage de quelques personnes, pas un résultat mesuré. Deux petites études sur le tendon d’Achille ont montré que les femmes actives sous THS avaient des tendons plus petits que les femmes actives sans THS\u00A0: l’une portant sur 85\u00A0femmes (Cook et coll., 2007), l’autre sur 14\u00A0paires de jumelles identiques, où la différence n’apparaissait que chez les 5\u00A0paires physiquement actives (Finni et coll., 2009). La taille d’un tendon n’est pas la douleur, et le tendon d’Achille n’est pas le fascia plantaire.',
        'Une revue de 2026 note que le THS ne convient pas à tout le monde, en raison des contre-indications et de l’équilibre entre risques et bénéfices propre à chacune (Ansari et coll., 2026). Le prendre ou non dépend de vos symptômes de ménopause et de vos antécédents de santé. **C’est une décision à prendre avec votre médecin.** Quelle que soit votre décision, les étirements et le renforcement de cette page restent valables.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles, CITE.finniHrtTwins, CITE.ansariMenopause],
    },
    {
      h2: 'Combien de temps dure une fasciite plantaire au milieu de la vie\u00A0?',
      paragraphs: [
        'Environ 90\u00A0% des personnes ayant une fasciite plantaire vont mieux avec une prise en charge sans chirurgie, comme les étirements et les semelles, même si cela prend souvent 3 à 6\u00A0mois (Latt et coll., 2020). Aucune étude n’a porté spécifiquement sur la récupération chez les femmes en cours de ménopause.',
        'Chez certaines personnes, elle dure plus longtemps. Dans un suivi de 174\u00A0personnes, 54\u00A0% n’avaient plus de symptômes au moment du suivi, environ 9\u00A0ans après le diagnostic en moyenne, et le risque de l’avoir encore était plus élevé chez les femmes et chez les personnes ayant mal aux deux talons (Hansen et coll., 2018). C’est une raison de commencer les exercices tôt et de les poursuivre, pas une raison de s’attendre au pire. [Combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) présente l’évolution complète.',
        'Si vous augmentez votre activité au milieu de la vie, pour la santé ou pour le poids, augmentez par étapes plutôt que d’arrêter\u00A0: la recommandation note que la fasciite plantaire commence en général après un changement des activités en appui (Koc et coll., 2023). [Marcher avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/) explique comment reprendre la marche étape par étape.',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Quand une douleur au talon ou au pied au milieu de la vie est-elle autre chose\u00A0?',
      paragraphs: [
        'Une douleur sous le talon, pire aux premiers pas du matin et qui s’atténue en marchant, est le schéma typique de la fasciite plantaire. D’autres schémas orientent ailleurs\u00A0:',
        {
          list: [
            '**Une douleur profonde, comme un bleu, au centre du talon, pire pieds nus sur un sol dur\u00A0:** peut-être le coussinet graisseux. Voir [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
            '**Une voûte qui s’affaisse lentement d’un côté, avec une douleur ou un gonflement à la malléole interne\u00A0:** peut-être le tendon tibial postérieur. Dans une enquête auprès de 582\u00A0femmes de plus de 40\u00A0ans, 3,3\u00A0% avaient des signes précoces de ce problème et aucune n’avait été diagnostiquée (Kohls-Gatzoulis et coll., 2009). Cela vaut la peine de le faire vérifier tôt.',
            '**Une douleur qui augmente avec l’activité et fait mal quand vous pressez les côtés du talon\u00A0:** peut-être une fracture de fatigue. Voir [fasciite plantaire ou fracture de fatigue](/fr/fasciite-plantaire-ou-fracture-de-fatigue/).',
            '**Une brûlure, des fourmillements ou un engourdissement, ou une douleur la nuit\u00A0:** plus probablement un problème nerveux. Voir [douleur au talon la nuit](/fr/douleur-talon-la-nuit/).',
            '**Les deux talons douloureux avec des articulations raides et gonflées ailleurs\u00A0:** cela vaut la peine de rechercher une maladie articulaire inflammatoire.',
          ],
        },
        'Si vous prenez un inhibiteur de l’aromatase après un cancer du sein, une nouvelle douleur articulaire, musculaire ou au pied est à signaler à l’équipe qui vous le prescrit. Une revue de 2026 cite la prise d’inhibiteurs de l’aromatase parmi les facteurs qui augmentent le risque de blessures de surmenage au milieu de la vie (Ansari et coll., 2026).',
      ],
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.ansariMenopause],
    },
  ],
  faq: [
    {
      q: 'La ménopause peut-elle provoquer une fasciite plantaire\u00A0?',
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause],
      a: 'Elle pourrait y contribuer, mais aucune étude ne l’a prouvé. La douleur sous le talon est la plus fréquente chez les femmes vers 50\u00A0ans, l’âge habituel de la ménopause, et dans une grande étude le pic chez les femmes était environ deux fois plus élevé que chez les hommes. Les chercheurs jugent un lien de cause à effet incertain, et aucune étude n’a mesuré le fascia plantaire au fil de la ménopause.',
    },
    {
      q: 'Pourquoi la fasciite plantaire culmine-t-elle chez les femmes vers 50\u00A0ans\u00A0?',
      cites: [CITE.rasenbergIncidence, CITE.guideline, CITE.vanLeeuwenBmi, CITE.riddle],
      a: 'Personne ne le sait avec certitude. Dans les dossiers néerlandais, les nouveaux cas chez les femmes culminaient à 11,23 pour 1\u00A0000\u00A0patients-années à 50\u00A0ans. Les changements hormonaux peuvent jouer un rôle, mais aussi des choses qui changent souvent au même âge\u00A0: le poids, des mollets et des chevilles plus raides, un coussinet du talon moins élastique et une activité nouvelle ou plus intense.',
    },
    {
      q: 'La périménopause peut-elle donner mal au talon\u00A0?',
      cites: [CITE.luMenopausePain, CITE.douglasHarrisMenopause],
      a: 'C’est possible, mais cela n’a pas été montré pour la douleur au talon en particulier. Une revue de 16\u00A0études a montré que 71\u00A0% des femmes en périménopause signalent des douleurs musculosquelettiques, plus que les femmes qui ne sont pas encore en périménopause. Aucune étude n’a porté sur la fasciite plantaire en périménopause seule\u00A0: si votre talon fait mal, les vérifications et exercices habituels pour la douleur au talon s’appliquent.',
    },
    {
      q: 'Le THS aide-t-il la fasciite plantaire\u00A0?',
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles],
      a: 'On ne le sait pas. Aucun essai n’a testé l’hormonothérapie de la ménopause pour la fasciite plantaire. Certaines femmes d’une étude de 2026 par groupes de discussion ont dit avoir remarqué moins de douleurs aux pieds sous THS, et de petites études ont trouvé des différences de taille du tendon d’Achille, mais aucune n’a mesuré la douleur au talon. Savoir si le THS vous convient est une décision à prendre avec votre médecin, selon vos symptômes et votre santé.',
    },
    {
      q: 'Quel est le meilleur exercice pour la fasciite plantaire pendant la ménopause\u00A0?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Les mêmes qu’à tout âge\u00A0: les étirements du fascia plantaire et du mollet, que la recommandation de 2023 sur la douleur au talon note A, et le renforcement du mollet, noté B. Des montées sur pointes lentes avec une serviette sous les orteils ont soulagé la douleur plus vite que les étirements seuls dans un essai sur 48\u00A0personnes. Le renforcement soutient aussi les muscles et l’équilibre, qui ont tendance à diminuer après la ménopause.',
    },
    {
      q: 'Fasciite plantaire ou simples douleurs aux pieds liées à la ménopause\u00A0?',
      cites: [CITE.guideline],
      a: 'La fasciite plantaire a un schéma typique\u00A0: une douleur sous le talon, pire aux premiers pas du matin ou après être restée assise, qui s’atténue une fois que vous marchez. Des douleurs diffuses dans les deux pieds et d’autres articulations sont un schéma différent. Si vous n’êtes pas sûre, ou si plusieurs articulations sont raides et gonflées, consultez un professionnel de santé.',
    },
    {
      q: 'La prise de poids à la ménopause aggrave-t-elle la fasciite plantaire\u00A0?',
      cites: [CITE.vanLeeuwenBmi, CITE.hansen],
      a: 'Un poids plus élevé est associé à la fasciite plantaire. Dans une revue de 51\u00A0études, un IMC supérieur à 27 multipliait le risque par 3,7, surtout chez les personnes non sportives. Le poids n’est toutefois qu’un facteur parmi d’autres. Dans un long suivi de 174\u00A0personnes, l’IMC ne permettait pas de prédire qui aurait encore mal au talon des années plus tard.',
    },
    {
      q: 'La fasciite plantaire disparaîtra-t-elle après la ménopause\u00A0?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Aucune étude n’a suivi la douleur au talon au fil de la ménopause\u00A0: il n’existe donc pas de chiffre. Pour la fasciite plantaire en général, environ 90\u00A0% des personnes vont mieux avec une prise en charge sans chirurgie, souvent en 3 à 6\u00A0mois. Dans un long suivi, le risque qu’elle dure était plus élevé chez les femmes et chez les personnes ayant mal aux deux talons.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une chute, un saut ou une torsion, ou vous ne pouvez pas mettre de poids sur le pied',
      'presser les côtés du talon fait mal, ou la douleur ne cesse d’augmenter avec l’activité (fracture de fatigue possible)',
      'une voûte s’affaisse, ou la malléole interne est douloureuse ou gonflée',
      'le talon est gonflé, rouge ou chaud, ou vous avez de la fièvre',
      'la douleur est pire la nuit ou au repos, ou s’accompagne d’une brûlure, de fourmillements ou d’un engourdissement',
      'les deux talons font mal avec des articulations raides ou gonflées ailleurs',
      'vous prenez un inhibiteur de l’aromatase et une nouvelle douleur articulaire ou au pied est apparue\u00A0: signalez-le à l’équipe qui vous le prescrit',
      'un mollet est douloureux et gonflé (caillot sanguin possible)\u00A0: faites-vous examiner le jour même',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Elle ne suit ni les hormones ni les symptômes de la ménopause et ne donne aucun conseil sur le THS. Elle construit un plan à partir des étirements, du renforcement du mollet et des exercices d’équilibre de cette page, en commençant par les versions assises les jours douloureux.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPain', 'weightPf', 'heelFatPad'],
  crumb: 'Fasciite plantaire et ménopause',
  campaign: 'guide-plantar-fasciitis-menopause-fr',
};
