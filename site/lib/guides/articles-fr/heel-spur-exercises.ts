import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Épine calcanéenne : exercices (FR) ────────────────────────────────
 *
 * Translated from `articles/heel-spur-exercises.ts`, written around the
 * French queries «épine calcanéenne exercices», «épine de Lenoir
 * exercices», «étirement épine calcanéenne». French (France) with «vous».
 * Figures, doses, grades and qualifiers are identical to the English page.
 * No new citations.
 */

export const HEEL_SPUR_EXERCISES_FR: Guide = {
  lang: 'fr',
  page: 'heelSpurExercises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Épine calcanéenne\u00A0: exercices et étirements',
  description:
    'Exercices et étirements pour l’épine calcanéenne\u00A0: fascia plantaire et mollet, routine, doses et progression contre la douleur, sans dissoudre l’épine.',
  h1: 'Épine calcanéenne\u00A0: étirements et renforcement pour la douleur autour de l’épine',
  lede:
    'L’exercice ne dissout pas une épine calcanéenne (aussi appelée épine de Lenoir). L’épine est de l’os, et l’os ne rétrécit pas avec les étirements. Mais la douleur ressentie quand on a une épine calcanéenne vient presque toujours du fascia plantaire et du mollet autour d’elle, pas de l’os lui-même. Les exercices ci-dessous visent ces tissus mous. Ce sont les mêmes que ceux que la recommandation de 2023 sur la douleur au talon conseille pour la fasciite plantaire.',
  intro: [
    'Si vous voulez d’abord comprendre la différence entre une épine calcanéenne et une fasciite plantaire, voir [fasciite plantaire ou épine calcanéenne](/fr/fasciite-plantaire-ou-epine-calcaneenne/). Cette page est la routine pratique\u00A0: quels exercices, combien, comment progresser et quand arrêter.',
  ],
  takeaways: [
    'Les exercices pour l’épine calcanéenne agissent sur le fascia plantaire et les muscles du mollet autour de l’épine, pas sur l’épine elle-même.',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet sa meilleure note, **A**, et au renforcement musculaire un **B** (Koc et coll., 2023).',
    'Dans un essai sur 48\u00A0personnes atteintes de fasciite plantaire, des montées sur pointes lourdes avec une serviette sous les orteils ont réduit la douleur plus vite que les étirements seuls à trois mois, mais à douze mois les deux groupes étaient à égalité (Rathleff et coll., 2015).',
    'Un mollet raide, mesuré par une flexion dorsale de cheville réduite, était le facteur de risque indépendant le plus fort de fasciite plantaire dans une étude cas-témoins appariée de 50\u00A0cas et 100\u00A0témoins (Riddle et coll., 2003).',
    'Une revue systématique avec méta-analyse a montré que les étirements du mollet comme ceux du fascia plantaire réduisaient la douleur par rapport à l’absence d’étirements (Siriphorn et Eksakulkla, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Pourquoi les exercices aident-ils en cas d’épine calcanéenne\u00A0?',
      keyFact: 'Dans une étude sur 530\u00A0personnes ayant mal aux pieds, une épine calcanéenne n’apparaissait seule que dans 6\u00A0% des pieds, le plus souvent avec un fascia plantaire épaissi (Menz et coll., 2019).',
      paragraphs: [
        'L’épine calcanéenne est une excroissance osseuse sous l’os du talon. Dans une étude sur 530\u00A0personnes de 50\u00A0ans et plus ayant mal aux pieds, une épine calcanéenne seule était rare (6\u00A0% des pieds), et la douleur au talon était liée à une épine accompagnée d’un fascia plantaire épaissi, la bande de tissu sous le pied (Menz et coll., 2019). **La douleur vient du tissu mou, et c’est lui que l’exercice peut atteindre.**',
        'Étirer le fascia plantaire et le mollet réduit la tension sur l’attache au talon. Renforcer le mollet augmente la capacité de la chaîne qui absorbe la charge chaque fois que le talon touche le sol. Ensemble, ils réduisent le stress quotidien sur le tissu autour de l’épine.',
        'Aucun programme d’exercices ne fera disparaître une épine à la radio. Mais la plupart des personnes qui ont une épine calcanéenne n’ont pas besoin qu’elle disparaisse. Elles ont besoin que la douleur se calme, et cela passe par un fascia et un mollet plus forts et plus souples.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
    {
      h2: 'Quels étirements contre la douleur de l’épine calcanéenne\u00A0?',
      keyFact: 'Une revue systématique a montré que les étirements du mollet comme ceux du fascia plantaire réduisaient la douleur de la fasciite plantaire par rapport à l’absence d’étirements (Siriphorn et Eksakulkla, 2020).',
      paragraphs: [
        'Les étirements sont le point de départ. La recommandation de 2023 note les étirements du fascia plantaire et du mollet **A**, sa meilleure note. Une revue systématique avec méta-analyse des étirements dans la fasciite plantaire a montré que les étirements du mollet comme ceux du fascia plantaire réduisaient la douleur par rapport à l’absence d’étirements (Siriphorn et Eksakulkla, 2020). Commencez par ces trois-là.',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'Note A de la recommandation. Un essai de 2003 sur 101\u00A0personnes (82 ont terminé le suivi) a trouvé cet étirement plus efficace que l’étirement du mollet seul à 8\u00A0semaines.' },
          dose: '10\u00A0maintiens de 10\u00A0secondes, chaque pied',
          how: 'Asseyez-vous et croisez une cheville sur l’autre genou. Tirez doucement les orteils vers vous jusqu’à sentir un étirement le long de la voûte. Tenez, puis relâchez. Faites-le avant votre premier pas chaque matin et après être resté longtemps assis.',
          often: 'Chaque matin et après être resté assis',
          feel: 'Un étirement le long de la voûte, pas une douleur vive',
          stop: 'La douleur atteint 6/10',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez doucement les orteils vers vous avant de vous lever',
          alt: 'Une personne assise qui tire les orteils vers elle pour étirer la voûte, le fascia plantaire mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'strong', why: 'Note A de la recommandation. Un gastrocnémien raide était le facteur de risque le plus fort de fasciite plantaire dans une étude cas-témoins de 2003.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur. Jambe arrière tendue, talon au sol, hanches vers l’avant. Tenez jusqu’à sentir l’étirement dans le haut du mollet. Le gastrocnémien, le gros muscle superficiel du mollet, ne s’étire que genou tendu.',
          often: 'La plupart des séances',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol, penchez-vous en avant',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: { level: 'strong', why: 'Note A de la recommandation. Vise le soléaire, le muscle profond du mollet qui ne se relâche que genou plié.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur que pour l’étirement du mollet, puis pliez le genou arrière jusqu’à sentir l’étirement descendre, près du talon. Le soléaire se trouve sous le gastrocnémien et s’attache plus près du talon.',
          often: 'La plupart des séances, après l’étirement genou tendu',
          feel: 'Un étirement plus bas dans le mollet, près du talon',
          stop: 'La douleur atteint 6/10',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à ce que l’étirement descende',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.digiovanni2003, CITE.riddle],
    },
    {
      h2: 'Quels exercices de renforcement contre la douleur de l’épine calcanéenne\u00A0?',
      keyFact: 'Dans un essai sur 48\u00A0personnes, le groupe des montées sur pointes avait un score au Foot Function Index meilleur de 29\u00A0points que le groupe des étirements seuls à trois mois (Rathleff et coll., 2015).',
      paragraphs: [
        'Les étirements seuls suffisent souvent les premières semaines. Une fois que la douleur du matin commence à se calmer, ajouter le renforcement du mollet donne à la chaîne du talon la capacité dont elle a besoin. La recommandation note le renforcement musculaire **B**, sa deuxième meilleure note.',
        'Dans le seul essai conçu pour tester les montées sur pointes dans la fasciite plantaire, 48\u00A0personnes ont été réparties entre un groupe de montées sur pointes avec charge et un groupe d’étirements seuls. Le groupe des montées sur pointes avait un score au Foot Function Index meilleur de 29\u00A0points à trois mois (Rathleff et coll., 2015).',
        'Commencez au niveau le plus facile et ne montez que lorsqu’il vous a paru facile deux séances de suite. La progression ci-dessous va du travail assis jusqu’à la montée sur pointes avec serviette et charge de l’essai.',
      ],
      exercises: [
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'moderate', why: 'La note B de la recommandation couvre le renforcement en général. Cette première étape à faible charge n’a pas été testée seule.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Asseyez-vous, pieds à plat au sol. Poussez sur l’avant des deux pieds. Les mains sur les genoux ajoutent une légère résistance. C’est la façon la moins chargée de commencer à faire travailler le mollet.',
          often: 'Jours de renforcement',
          feel: 'Un travail facile dans les mollets, presque sans charge sur le talon',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'Note B de la recommandation. Une étape vers le travail chargé sur une jambe.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Les deux pieds se partagent la charge. Tenez-vous à un mur ou à une rampe pour l’équilibre.',
          often: 'Jours de renforcement, une fois les montées assis devenues faciles deux séances de suite',
          feel: 'Les mollets qui travaillent ensemble',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Maintien sur pointes (isométrique)',
          evidence: { level: 'moderate', why: 'Note B de la recommandation. Maintien isométrique en fin d’amplitude. Pas testé seul dans un essai sur la fasciite plantaire.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, deux pieds',
          how: 'Montez sur la pointe des deux pieds, puis restez immobile en haut. Ne redescendez pas. Tenir en haut charge le tendon sans les rebonds d’une répétition complète.',
          often: 'Jours de renforcement, l’étape après les montées sur deux pieds',
          feel: 'Les mollets qui travaillent pour rester immobiles',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez immobile en haut',
          alt: 'Une personne qui tient la position sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette (sur une jambe)',
          evidence: { level: 'strong', why: 'L’exercice de l’essai randomisé de Rathleff 2015. Note B de la recommandation.' },
          dose: 'Protocole de l’étude\u00A0: 3\u00A0séries de 12\u00A0RM, jusqu’à 5\u00A0séries de 8\u00A0RM. Walkito commence à 3\u00A0séries de 12, chaque jambe',
          how: 'Tenez-vous sur un pied au bord d’une marche, une serviette roulée sous les cinq orteils. Trois secondes pour monter, deux secondes en haut, trois secondes pour redescendre. La serviette active le mécanisme de treuil, qui charge le fascia plantaire en même temps que le mollet. Ajoutez du poids avec un sac à dos quand la dernière répétition ne paraît plus difficile.',
          often: 'Un jour sur deux dans l’essai. Walkito le place les jours de renforcement, jamais deux de suite.',
          feel: 'Un travail dur dans le mollet et une traction sous la voûte',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: trois secondes pour monter, tenez en haut, trois secondes pour descendre',
          alt: 'Une personne sur une marche qui monte sur la pointe des pieds, une serviette roulée sous le pied',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Comment progresser dans les exercices pour l’épine calcanéenne\u00A0?',
      paragraphs: [
        'Progressez selon vos sensations, pas selon le calendrier. La règle\u00A0: si le niveau actuel vous a paru facile deux séances de suite, montez d’une étape. Si la douleur du matin est pire après une séance, restez au même niveau ou redescendez d’une étape.',
      ],
      table: {
        caption: 'Progression des exercices pour l’épine calcanéenne',
        head: ['Niveau', 'Exercice', 'Quand passer au suivant'],
        rows: [
          ['1', 'Étirement du fascia plantaire + étirements du mollet seulement', 'La douleur du matin se calme, vous voulez ajouter du renforcement'],
          ['2', 'Montées sur pointes assis (3 x 10)', 'Facile deux séances de suite'],
          ['3', 'Montées sur pointes, deux pieds (3 x 10)', 'Facile deux séances de suite'],
          ['4', 'Maintien sur pointes (3 x 20\u00A0secondes)', 'Facile deux séances de suite'],
          ['5', 'Montées sur pointes avec serviette, sur une jambe (3 x 12)', 'Augmentez la charge avec un sac à dos une fois le poids du corps devenu facile'],
        ],
      },
      after: [
        'Gardez l’étirement du fascia plantaire et les étirements du mollet à chaque niveau. Les étirements ne s’arrêtent pas quand vous commencez le renforcement. La recommandation note les deux séparément.',
        'Pour plus de détails sur le protocole des montées sur pointes avec serviette et la recherche derrière, voir [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Exercices complémentaires facultatifs',
      paragraphs: [
        'Les étirements et les montées sur pointes ci-dessus sont le cœur du programme. Les exercices suivants ne sont pas propres à l’épine calcanéenne, mais ils visent les muscles du pied et de la cheville qui soutiennent la voûte et amortissent les chocs. Les preuves derrière chacun sont plus minces.',
      ],
      exercises: [
        {
          name: 'Massage avec une balle',
          evidence: { level: 'early', why: 'Pas testé dans les études de cette page. Il est là pour le confort entre les séances.' },
          dose: '2\u00A0minutes, chaque pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage ou une bouteille d’eau congelée. Gardez une pression ferme, mais pas au point de vous faire grimacer. Faire rouler le pied après une longue journée debout peut détendre le tissu.',
          often: 'Jours de récupération ou après une longue journée',
          feel: 'Une pression ferme sous le pied, jamais une douleur vive',
          stop: 'La douleur atteint 6/10',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante sur une balle, avec une pression ferme',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle',
        },
        {
          name: 'Pied court, assis',
          evidence: { level: 'early', why: 'Une revue de 2024 a montré que l’entraînement du pied court modifiait la forme de la voûte, mais pas la douleur. Fait partie d’un programme qui a amélioré les mesures de la voûte dans un essai de 2023.' },
          dose: '3\u00A0séries de 10, tenir 5\u00A0secondes, chaque pied',
          how: 'Asseyez-vous, le pied à plat au sol. Tirez la base des orteils vers le talon pour que la voûte se soulève. Ne recroquevillez pas les orteils. Cet exercice entraîne les petits muscles à l’intérieur de la voûte.',
          often: 'Jours de renforcement',
          feel: 'La voûte qui se soulève, orteils détendus',
          stop: 'La douleur atteint 6/10',
          media: 'short_foot_seated',
          caption: 'Pied court\u00A0: tirez la base des orteils vers le talon',
          alt: 'Une jambe en position assise, le pied au sol, la voûte mise en évidence quand elle se soulève',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: { level: 'early', why: 'Aucune étude propre à l’épine calcanéenne. Un travail d’équilibre général pour le pied et la cheville.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Tenez-vous sur un pied et fixez un point. Laissez le pied osciller. Ces oscillations, c’est le pied qui fait le travail d’équilibre. Restez près d’un mur par sécurité.',
          often: 'Jours d’équilibre',
          feel: 'De petites corrections dans le pied et la cheville',
          stop: 'La douleur atteint 6/10',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: tenez-vous sur un pied et laissez-le se corriger',
          alt: 'Une personne en équilibre sur une jambe, les muscles du bas de la jambe mis en évidence',
        },
      ],
      cites: [CITE.cheng, CITE.brijwasi],
    },
    {
      h2: 'Que devez-vous sentir pendant les exercices, et quand arrêter\u00A0?',
      paragraphs: [
        'Un étirement doit tirer, pas piquer. Un étirement du mollet qui donne une tension confortable dans le haut ou le bas du mollet est bon. Un étirement du fascia plantaire qui tire doucement le long de la voûte est bon. Si l’étirement reproduit la douleur vive de vos premiers pas, relâchez.',
        'Les montées sur pointes doivent faire travailler le mollet. La version avec serviette donne aussi une traction sous la voûte\u00A0: c’est le fascia qui prend la charge. Cette traction est attendue, c’est tout l’intérêt de la serviette.',
        'Arrêtez pour aujourd’hui si la douleur atteint **6/10 ou plus** pendant un exercice, ou si vos premiers pas le lendemain matin sont nettement pires que d’habitude. Cette règle d’arrêt et de retour en arrière est celle de l’application.',
        'Une légère courbature qui passe en un jour est normale, surtout les deux premières semaines. Une douleur qui reste élevée plusieurs jours ou s’aggrave de semaine en semaine est une raison de redescendre d’un niveau ou de consulter un professionnel de santé.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Combien de temps avant que la douleur de l’épine calcanéenne s’améliore avec les exercices\u00A0?',
      paragraphs: [
        'Aucun essai ne mesure les résultats de l’exercice spécifiquement chez les personnes qui ont une épine calcanéenne. Les délais ci-dessous viennent d’études sur la fasciite plantaire, le problème qui cause la douleur autour de l’épine dans la plupart des cas.',
        'Une revue des données cliniques indique qu’environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux comme les étirements et les semelles, souvent en quelques mois (Latt et coll., 2020). Dans l’essai de Rathleff 2015, le groupe des montées sur pointes avec charge était nettement devant le groupe des étirements seuls à trois mois.',
        'Aucun programme d’exercices ne peut promettre un délai à une personne en particulier. **Ce que vous pouvez mesurer, c’est si les choses bougent**\u00A0:',
        {
          list: [
            'La douleur du matin sur une échelle de 0 à 10, notée avant votre premier pas, est le signal quotidien le plus clair.',
            'L’endurance du mollet, mesurée par le nombre de montées sur pointes sur une jambe que vous pouvez faire, suit la force au fil des semaines.',
          ],
        },
        'Les deux sont plus utiles que de deviner.',
      ],
      cites: [CITE.latt, CITE.rathleff],
    },
    {
      h2: 'Peut-on se débarrasser d’une épine calcanéenne naturellement\u00A0?',
      paragraphs: [
        '**L’exercice, les étirements et les changements d’alimentation ne dissolvent pas une épine calcanéenne.** L’épine est de l’os calcifié. Elle reste visible à la radio, que vous vous étiriez ou non.',
        'Mais «\u00A0se débarrasser de l’épine\u00A0» est rarement le bon objectif. Dans l’étude de 2019, l’épine allait presque toujours avec un fascia plantaire épaissi, et c’est le tissu mou que l’exercice peut changer. La douleur vient du tissu mou. Les exercices de cette page visent le tissu mou. Si la douleur se calme, l’épine n’est pas un problème à régler.',
        'Si quelqu’un vous a promis un complément alimentaire, une crème ou un appareil qui dissout les épines calcanéennes, méfiez-vous. Aucune donnée publiée ne soutient cette affirmation. L’approche conseillée par la recommandation repose sur les étirements, le renforcement du mollet et la gestion de la charge.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quels exercices pour soulager une épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'Les exercices utiles contre la douleur de l’épine calcanéenne sont les mêmes que ceux que la recommandation de 2023 sur la douleur au talon conseille pour la fasciite plantaire\u00A0: étirement du fascia plantaire (note A), étirement du mollet (note A) et renforcement progressif du mollet par des montées sur pointes (note B). Ils visent le fascia plantaire et les muscles du mollet autour de l’épine, qui sont en général à l’origine de la douleur.',
    },
    {
      q: 'Les exercices font-ils disparaître l’épine calcanéenne\u00A0?',
      a: 'Non. Une épine calcanéenne est de l’os calcifié, et l’exercice ne la dissout pas. Les exercices agissent sur le fascia plantaire et le mollet, les tissus mous autour de l’épine qui sont presque toujours la source de la douleur. Si la douleur se calme avec l’exercice, l’épine visible à la radio n’est pas un problème à régler.',
    },
    {
      q: 'À quelle fréquence faire les étirements pour l’épine calcanéenne\u00A0?',
      cites: [CITE.guideline, CITE.digiovanni2003],
      a: 'L’étirement du fascia plantaire marche le mieux chaque matin avant de vous lever et après être resté longtemps assis. Les étirements du mollet trouvent leur place dans la plupart des séances. Dans un essai sur 101\u00A0personnes avec une douleur chronique au talon (82 ont terminé le suivi), le groupe qui faisait l’étirement du fascia plantaire avait de meilleurs résultats à 8\u00A0semaines que le groupe qui faisait seulement l’étirement du mollet (DiGiovanni et coll., 2003).',
    },
    {
      q: 'Combien de temps pour que la douleur d’une épine calcanéenne passe\u00A0?',
      cites: [CITE.latt, CITE.rathleff],
      a: 'La plupart des délais viennent d’études sur la fasciite plantaire, car c’est en général l’irritation du fascia qui fait mal. Une revue indique qu’environ 90\u00A0% des personnes atteintes de fasciite plantaire vont mieux avec des soins non chirurgicaux, souvent en quelques mois (Latt 2020). Dans un essai sur 48\u00A0personnes, les montées sur pointes avec charge faisaient mieux que les étirements seuls à trois mois (Rathleff 2015). Aucun programme ne peut promettre un délai à une personne en particulier.',
    },
    {
      q: 'Faut-il arrêter le sport avec une épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'Pas forcément. La recommandation inclut l’exercice dans l’approche, pas le repos seul. Arrêtez un exercice pour la journée si la douleur atteint 6 sur 10 ou plus, ou si le lendemain matin est nettement pire. Redescendez d’un niveau plutôt que de tout arrêter. Si la douleur s’aggrave de semaine en semaine malgré ces ajustements, consultez un professionnel de santé.',
    },
    {
      q: 'Marcher est-il bon pour une épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'La marche en elle-même n’est pas le problème. Marcher à une allure confortable avec des chaussures qui soutiennent le pied ne pose en général pas de problème et vaut mieux que le repos complet. La douleur vient du fascia plantaire autour de l’épine, et une marche modérée garde la pompe du mollet active. Si la marche aggrave votre douleur du lendemain matin, raccourcissez la distance et reprenez-la progressivement.',
    },
    {
      q: 'Quels exercices éviter avec une épine calcanéenne\u00A0?',
      cites: [CITE.guideline],
      a: 'Laissez de côté les mouvements à fort impact comme la course, les sauts et la pliométrie pendant une poussée de douleur\u00A0; des chocs répétés sur une surface dure sollicitent le tissu à côté de l’épine. Les descentes profondes du talon au bord d’une marche peuvent aussi surcharger un fascia irrité. La recommandation de 2023 conseille d’adapter la charge plutôt que d’interdire des exercices\u00A0; le test est de savoir si votre talon va plus mal le lendemain matin.',
    },
    {
      q: 'Qu’est-ce qui réveille la douleur d’une épine calcanéenne\u00A0?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Les chocs répétés sur une surface dure sont le déclencheur le plus fréquent\u00A0: courir, sauter ou rester debout des heures irrite le tissu mou à côté de l’épine, comme dans une fasciite plantaire simple. Une hausse soudaine de l’activité, des chaussures usées et la marche pieds nus sur du carrelage peuvent la déclencher. C’est en adaptant la charge, pas l’os, qu’une poussée se calme.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a commencé après une blessure ou une chute',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'presser les côtés du talon reproduit la douleur, ce qui peut évoquer une fracture de fatigue',
      'elle s’accompagne d’engourdissements, de fourmillements ou de brûlures',
      'le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'les deux talons font mal et la raideur du matin dure plus de 30\u00A0minutes, surtout si d’autres articulations sont touchées',
      'la douleur vous empêche de dormir ou est présente au repos',
      'elle ne s’est pas améliorée après plusieurs semaines d’étirements quotidiens et de travail du mollet',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à suivre les niveaux, les séries ni le moment de progresser. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la douleur au talon, le premier objectif est une douleur du matin à 1/10 ou moins pendant 14\u00A0jours de suite. Les étirements commencent dès le premier jour. La progression du mollet, des montées sur pointes assis jusqu’aux montées sur pointes avec serviette et charge, avance à votre rythme.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois l’objectif du matin atteint), un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Épine calcanéenne\u00A0: exercices',
  campaign: 'guide-heel-spur-exercises-fr',
};
