import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const ACHILLES_FR: Guide = {
  lang: 'fr',
  page: 'achilles',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Tendinite d’Achille\u00A0: exercices excentriques et doses',
  description:
    'Tendinite d’Achille, exercices et doses\u00A0: descentes excentriques du talon, résistance lourde et lente, insertion ou corps du tendon, quand arrêter.',
  h1: 'Exercices pour la tendinite d’Achille\u00A0: descentes excentriques du talon, doses et ce que dit la recherche',
  lede:
    'Les exercices pour la tendinite d’Achille marchent le mieux quand on comprend la descente du talon comme du renforcement, pas comme un étirement. La recommandation clinique de 2024 donne à l’exercice sa meilleure note, **A**, et une méta-analyse en réseau de 2021 portant sur 29\u00A0essais n’a trouvé aucun protocole nettement meilleur qu’un autre. Ce qui compte, c’est de charger le tendon régulièrement pendant des semaines.',
  intro: [
    'Cette page détaille ces exercices. Si votre douleur est sous le pied plutôt qu’à l’arrière du talon, ce sont plutôt les [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) qu’il vous faut. La page [douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais) résume les deux. Si la douleur est le long du tibia plutôt qu’au talon, voir [exercices pour la périostite tibiale](/fr/periostite-tibiale-exercices/)\u00A0; si elle n’apparaît qu’après une longue journée debout plutôt qu’en courant, voir [mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/).',
    'La plupart des gens emploient «\u00A0tendinite\u00A0» et «\u00A0tendinopathie\u00A0» indifféremment. Les recommandations actuelles disent «\u00A0tendinopathie\u00A0», car le problème est en général une question de charge, pas une inflammation pure. Cette page utilise «\u00A0tendinite\u00A0» dans les titres et «\u00A0tendinopathie\u00A0» là où la recommandation le fait.',
  ],
  takeaways: [
    'La recommandation clinique de 2024 donne à l’exercice (tout type de mise en charge du tendon) la note **A**, sa meilleure note, pour la tendinopathie d’Achille du corps du tendon (Chimenti et coll., 2024).',
    'Une méta-analyse en réseau de 29\u00A0essais randomisés n’a trouvé aucune différence cliniquement pertinente entre les approches d’exercice à 3 ou 12\u00A0mois (van der Vlist et coll., 2021).',
    'Dans un essai sur 58\u00A0personnes, une résistance lourde et lente 3\u00A0jours par semaine a donné d’aussi bons résultats que des exercices excentriques deux fois par jour (Beyer et coll., 2015).',
    'Pour une douleur d’Achille d’insertion (juste à l’os du talon), les descentes du talon doivent rester au niveau du sol au lieu de passer sous le bord de la marche, car une flexion dorsale profonde, c’est-à-dire plier la cheville pour remonter les orteils vers le tibia, comprime le tendon contre l’os (Jonsson et coll., 2008).',
    'Une douleur pendant la mise en charge jusqu’à environ 5/10, qui se calme avant le lendemain matin et ne s’aggrave pas d’une semaine à l’autre, est la règle testée dans un essai randomisé qui autorisait le sport pendant la rééducation (Silbernagel et coll., 2007).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Tendinite ou tendinopathie\u00A0: est-ce que ça change les exercices\u00A0?',
      paragraphs: [
        '«\u00A0Tendinite\u00A0» suggère une inflammation. «\u00A0Tendinopathie\u00A0» décrit un tendon qui a changé sous la charge, souvent épaissi, sans que l’inflammation soit le moteur principal. La recommandation de 2024 dit «\u00A0tendinopathie\u00A0». Pour les exercices, le nom ne change pas ce que vous faites. Les deux décrivent le même problème\u00A0: un tendon qui fait mal quand on le charge, en général quelques centimètres au-dessus de l’os du talon (corps du tendon) ou juste à son point d’attache (insertion).',
        'L’endroit où le tendon fait mal, lui, change les exercices. Cette distinction est expliquée plus bas.',
      ],
      cites: [CITE.achillesGuideline],
    },
    {
      h2: 'Qu’est-ce que la descente excentrique du talon, et pourquoi ce n’est pas un étirement\u00A0?',
      paragraphs: [
        'La descente excentrique du talon est un exercice de renforcement, pas un étirement de souplesse. Vous montez sur les deux pieds, passez sur le côté douloureux et redescendez lentement sur un pied, en laissant le talon descendre sous le bord de la marche. La phase de descente est la contraction excentrique\u00A0: le muscle du mollet s’allonge sous la charge. C’est cette descente contrôlée qui construit la capacité du tendon au fil des semaines.',
        'L’erreur la plus fréquente est de tenir la position basse comme un étirement du mollet. Cela en fait un étirement statique, qui est un stimulus différent. **Le but est la descente lente et chargée.** Trois secondes pour descendre, avec le muscle qui travaille tout du long.',
        'Dans l’essai d’Alfredson de 1998, 15\u00A0sportifs avec une douleur ancienne au corps du tendon d’Achille faisaient des descentes excentriques du talon deux fois par jour, 7\u00A0jours sur 7, pendant trois mois, genou tendu et genou plié. Les 15 ont retrouvé leur niveau de course d’avant. Un petit essai sans groupe témoin, mais qui a lancé toute une série de recherches.',
      ],
      exercises: [
        {
          name: 'Descentes excentriques du talon (genou tendu)',
          evidence: { level: 'strong', why: 'Le protocole original d’Alfredson, soutenu par la recommandation de 2024, qui donne la note A à l’exercice.' },
          dose: 'Alfredson\u00A0: 3 x 15, deux fois par jour, trois mois. Walkito\u00A0: 3 x 10, chaque jambe',
          how: 'Tenez-vous au bord d’une marche. Montez sur les deux pieds, passez sur la jambe douloureuse, redescendez lentement en trois secondes. Le talon descend sous la marche. Remontez sur les deux pieds. Le genou tendu cible le gastrocnémien, le plus gros et le plus superficiel des deux muscles du mollet.',
          often: 'Deux fois par jour dans le protocole d’Alfredson. Walkito\u00A0: jours de renforcement.',
          feel: 'Un travail dur dans le mollet pendant la descente, pas un étirement en bas',
          stop: 'Une douleur au-dessus de 5/10 qui ne se calme pas avant le lendemain matin, ou une douleur qui s’aggrave d’une semaine à l’autre',
          media: 'heel_drop_straight',
          caption: 'Descente excentrique du talon\u00A0: montée sur les deux pieds, descente lente sur un, talon sous la marche',
          alt: 'Une personne sur une marche qui descend un talon sous le bord, genou tendu, le mollet et le tendon d’Achille mis en évidence',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'La résistance lourde et lente marche-t-elle aussi bien que les descentes excentriques\u00A0?',
      keyFact: 'Un essai de 2015 sur 58\u00A0personnes a montré qu’une résistance lourde et lente trois jours par semaine donnait des résultats durables aussi bons que le protocole excentrique classique deux fois par jour (Beyer et coll., 2015).',
      paragraphs: [
        'Oui, d’après les données actuelles. Un essai de 2015 sur 58\u00A0personnes a comparé la résistance lourde et lente (heavy slow resistance, HSR), faite 3\u00A0jours par semaine, au protocole excentrique classique deux fois par jour. Sa conclusion\u00A0: les deux, l’excentrique traditionnel et la HSR, donnent des résultats cliniques positifs, aussi bons l’un que l’autre et durables chez les patients atteints de tendinopathie d’Achille.',
        'Une méta-analyse en réseau de 2021 portant sur 29\u00A0essais n’a trouvé aucune différence cliniquement pertinente entre les approches d’exercice actif à 3 ou 12\u00A0mois. Toutes faisaient mieux que de ne rien faire. Aucun essai n’était à faible risque de biais. Les auteurs conseillaient de commencer par un programme d’exercices du mollet, parce qu’il coûte peu et présente peu de risques.',
        '**La forme du protocole compte moins que de charger le tendon régulièrement.** Les descentes excentriques sont les plus étudiées, la HSR est aussi efficace et demande moins de séances par semaine, et les deux sont de bons points de départ. Pour la version fasciite plantaire de cette même logique de renforcement du mollet, voir [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
    {
      h2: 'Quels exercices pour la tendinite d’Achille, et combien en faire\u00A0?',
      paragraphs: [
        'Les exercices ci-dessous vont d’une charge faible à une charge forte, en commençant par les montées sur pointes assis et en remontant l’échelle. Ce sont les doses de départ de Walkito, à côté des protocoles de recherche. [Comment ces guides sont écrits](/fr/a-propos/).',
        'Pour une douleur d’Achille d’insertion, tous les exercices qui utilisent une marche doivent se faire au sol. Cette adaptation est expliquée dans la partie sur l’insertion, plus bas.',
      ],
      table: {
        caption: 'Exercices pour la tendinite d’Achille\u00A0: doses de la recherche et doses de départ de Walkito',
        head: ['Exercice', 'Dose du protocole de recherche', 'Dose de départ Walkito', 'Niveau de preuve'],
        rows: [
          ['Montées sur pointes assis', 'Silbernagel phase 1\u00A0: 3 x 10, assis', '3 x 10, deux pieds', '**Solide**\u00A0: correspond au protocole publié de la phase 1'],
          ['Montées sur pointes, deux pieds', 'Silbernagel phase 1\u00A0: 3 x 10-15, debout', '3 x 10, deux pieds', '**Solide**\u00A0: correspondance directe avec la phase 1'],
          ['Maintien sur pointes (isométrique)', 'La recommandation de 2024 cite l’isométrique comme efficace\u00A0; 3-5 x 30-45\u00A0s proposés en pratique', '3 x 20\u00A0s, deux pieds', '**Modérée**\u00A0: la recommandation inclut la charge isométrique\u00A0; pas d’essai randomisé sur l’isométrique seul pour l’Achille'],
          ['Descentes excentriques du talon (genou tendu)', 'Alfredson\u00A0: 3 x 15, 2\u00A0fois par jour, 7\u00A0jours sur 7, trois mois', '3 x 10, chaque jambe', '**Solide**\u00A0: le protocole original\u00A0; note A dans la recommandation'],
          ['Étirement du mollet (genou tendu)', 'Ne fait pas partie des essais de mise en charge\u00A0; un complément de mobilité', '3 maintiens de 30\u00A0s, chaque jambe', '**Préliminaire**\u00A0: présenté comme de la mobilité, pas comme un exercice de mise en charge pour l’Achille'],
          ['Étirement du soléaire (genou plié)', 'Ne fait pas partie des essais de mise en charge\u00A0; un complément de mobilité', '3 maintiens de 30\u00A0s, chaque jambe', '**Préliminaire**\u00A0: même réserve\u00A0; évitez les étirements profonds en cas de douleur d’insertion'],
        ],
      },
      exercises: [
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'strong', why: 'Correspond à la dose de la phase 1 de Silbernagel 2007. La note A de la recommandation couvre tous les types de mise en charge du tendon.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Asseyez-vous, pieds à plat. Poussez sur l’avant des deux pieds. Les mains sur les genoux ajoutent de la résistance. Une façon de commencer avec peu de charge quand le travail debout fait trop mal.',
          often: 'Jours de renforcement, tant que c’est votre niveau',
          feel: 'Un travail dans les mollets, très peu d’étirement sur le tendon',
          stop: 'Une douleur au-dessus de 5/10 qui ne se calme pas avant le lendemain matin',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds, les mains ajoutent de la charge',
          alt: 'Une personne assise qui lève les deux talons, les mollets mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'strong', why: 'Correspondance directe avec la phase 1 de Silbernagel 2007. Note A dans la recommandation.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, redescendez lentement en trois secondes. Les deux pieds se partagent la charge.',
          often: 'Jours de renforcement, une fois les montées assis devenues faciles',
          feel: 'Les mollets qui travaillent ensemble, avec une légère traction au tendon',
          stop: 'Une douleur au-dessus de 5/10 qui ne se calme pas avant le lendemain matin',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez bien droit, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Maintien sur pointes (isométrique)',
          evidence: { level: 'moderate', why: 'La recommandation de 2024 cite l’isométrique parmi les types de mise en charge du tendon efficaces. Pas d’essai randomisé sur l’isométrique seul pour l’Achille.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, deux pieds (recherche\u00A0: 3-5 x 30-45\u00A0secondes)',
          how: 'Montez sur la pointe des deux pieds, restez immobile en haut. Ne redescendez pas. C’est un maintien isométrique, c’est-à-dire que le muscle travaille sans bouger. Il charge le tendon sans le mouvement de haut en bas qu’une douleur d’Achille encore récente peut mal supporter.',
          often: 'Peut se faire tous les jours dans les phases précoces et irritables, avant de passer au travail excentrique complet',
          feel: 'Les mollets qui travaillent pour rester immobiles, une douleur sourde dans le tendon est acceptable',
          stop: 'Une douleur au-dessus de 5/10 qui ne se calme pas avant le lendemain matin',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez immobile en haut',
          alt: 'Une personne qui tient la position sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Descentes excentriques du talon (genou tendu)',
          evidence: { level: 'strong', why: 'Le protocole original d’Alfredson de 1998. Note A dans la recommandation de 2024.' },
          dose: 'Alfredson\u00A0: 3 x 15, deux fois par jour. Walkito\u00A0: 3 x 10, chaque jambe',
          how: 'Tenez-vous au bord d’une marche. Montez sur les deux pieds, passez sur la jambe douloureuse, redescendez lentement, genou tendu. Le talon descend sous la marche. Remontez sur les deux pieds.',
          often: 'Deux fois par jour dans le protocole original. Walkito\u00A0: jours de renforcement.',
          feel: 'Un travail dur dans le mollet pendant la descente',
          stop: 'Une douleur au-dessus de 5/10 qui ne se calme pas avant le lendemain matin',
          media: 'heel_drop_straight',
          caption: 'Descente excentrique du talon\u00A0: montée sur les deux, descente lente sur un, genou tendu',
          alt: 'Une personne sur une marche qui descend un talon sous le bord, genou tendu, le tendon d’Achille mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu)',
          evidence: { level: 'early', why: 'Ne fait pas partie des essais de mise en charge de l’Achille. Un complément de mobilité. Évitez les étirements profonds en cas de douleur d’insertion.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Les mains contre un mur. Jambe arrière tendue, talon au sol, hanches vers l’avant. Pas de rebonds. En cas de douleur d’insertion, restez doux et arrêtez si cela réveille le point d’attache.',
          often: 'Après les séances avec charge',
          feel: 'Un étirement dans le haut du mollet',
          stop: 'Toute traction vive au point d’attache sur l’os du talon',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon au sol',
          alt: 'Une personne appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié)',
          evidence: { level: 'early', why: 'Ne fait pas partie des essais de mise en charge de l’Achille. Un complément de mobilité. Évitez la flexion dorsale profonde en cas de douleur d’insertion.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur, pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire ne se relâche que genou plié.',
          often: 'Après les séances avec charge',
          feel: 'Un étirement près du talon',
          stop: 'Toute traction vive au point d’attache du tendon d’Achille',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière jusqu’à sentir l’étirement plus bas',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
      ],
      cites: [CITE.alfredson, CITE.silbernagel, CITE.achillesGuideline],
    },
    {
      h2: 'Quelle douleur est acceptable pendant les exercices pour l’Achille\u00A0?',
      keyFact: 'Dans un essai sur 38\u00A0personnes, celles qui ont continué à courir avec une douleur limitée à environ 5 sur 10 et calmée le matin se sont autant améliorées à douze mois que celles qui se sont d’abord reposées (Silbernagel et coll., 2007).',
      paragraphs: [
        'Dans Silbernagel 2007, 38\u00A0personnes avec une douleur d’Achille ont été réparties en deux groupes\u00A0:',
        {
          list: [
            'L’un a continué à courir et à sauter pendant la rééducation, avec une règle\u00A0: la douleur pendant et après la mise en charge pouvait monter jusqu’à environ **5 sur 10**, à condition de revenir à son niveau habituel avant le lendemain matin et de ne pas s’aggraver d’une semaine à l’autre.',
            'L’autre groupe s’est d’abord reposé.',
          ],
        },
        'Les deux se sont nettement améliorés à 12\u00A0mois, sans différence entre eux.',
        'C’est un seuil différent de la règle d’arrêt à 6/10 de la page sur la [fasciite plantaire](/fr/exercices-fasciite-plantaire/), qui est le seuil utilisé par Walkito pour la douleur au talon. Le chiffre de 5/10 vient d’une seule étude, ce n’est pas une norme universelle, mais c’est le modèle de douleur le plus cité en rééducation de l’Achille.',
        'Un certain inconfort pendant la mise en charge est normal et était accepté dans l’essai. Une douleur qui ne se calme pas pendant la nuit, qui s’aggrave d’une semaine à l’autre ou qui arrive brusquement et vive ne l’est pas.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Douleur au corps du tendon ou à l’os du talon\u00A0: pourquoi cela change l’exercice\u00A0?',
      figure: { id: 'achilles', caption: 'La douleur du tendon d’Achille se situe le plus souvent à l’un de deux endroits\u00A0: au corps du tendon, ou là où il s’attache à l’os du talon.', alt: 'Vue de côté d’un pied et d’une cheville montrant le tendon d’Achille, du mollet jusqu’à l’arrière de l’os du talon, avec une zone rouge au milieu du tendon.' },
      keyFact: 'Dans une étude pilote sur 27\u00A0personnes avec une douleur d’Achille d’insertion, une charge excentrique uniquement au niveau du sol, sans flexion dorsale profonde, a donné de bons résultats dans 67\u00A0% des cas (Jonsson et coll., 2008).',
      paragraphs: [
        'La tendinopathie d’Achille du corps du tendon se situe dans la partie centrale du tendon, en général 2 à 6\u00A0centimètres au-dessus de l’os du talon. C’est là que les descentes excentriques classiques et la résistance lourde et lente ont leurs meilleures données. Les descentes du talon au bord d’une marche conviennent à une douleur du corps du tendon.',
        'La tendinopathie d’Achille d’insertion est une douleur juste au point d’attache du tendon sur l’os. Dans une étude pilote de 2008 sur 27\u00A0personnes (34\u00A0tendons) avec une douleur d’insertion chronique, un protocole modifié avec une charge excentrique uniquement au niveau du sol, sans flexion dorsale au-delà de la position neutre, a donné de bons résultats dans 67\u00A0% des cas. Une flexion dorsale profonde comprime le tendon contre l’os du talon, ce qui irrite l’insertion.',
        'Si votre douleur est à l’arrière de l’os du talon plutôt que plus haut dans le tendon, **faites toutes les montées sur pointes et descentes du talon au niveau du sol.** Ne descendez pas sous le bord de la marche. Évitez les étirements appuyés pour la même raison. C’est l’adaptation la plus importante des programmes pour l’Achille, et la plus souvent oubliée.',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Combien de montées sur pointes sur une jambe devriez-vous pouvoir faire\u00A0?',
      paragraphs: [
        'La recommandation de 2024 cite le test d’endurance des montées sur pointes sur une jambe parmi les moyens conseillés pour mesurer la force du mollet et suivre la récupération. Une étude de valeurs de référence sur 566\u00A0adultes en bonne santé situe un nombre typique autour de 23 à 24\u00A0répétitions, à ajuster selon l’âge, le sexe et le niveau d’activité. Ce qui compte, c’est la tendance dans le temps et l’écart entre vos deux côtés.',
        'Dans l’application, l’objectif du mollet est de 25\u00A0montées sur pointes sur une jambe. Le test a lieu tous les 14\u00A0jours tant que l’objectif du mollet est actif, puis tous les 28\u00A0jours. L’écart entre les jambes est aussi suivi, car une différence persistante entre les deux côtés peut signaler une récupération incomplète.',
      ],
      cites: [CITE.hebertLosier, CITE.achillesGuideline],
    },
    {
      h2: 'Peut-on continuer à courir pendant la rééducation de l’Achille\u00A0?',
      paragraphs: [
        'Dans Silbernagel 2007, les patients qui ont continué à courir pendant la rééducation, en suivant le modèle de surveillance de la douleur, n’ont pas fait moins bien que ceux qui se sont d’abord reposés. Les deux groupes se sont améliorés à 12\u00A0mois. L’essai concluait qu’une activité poursuivie, avec surveillance de la douleur, pouvait donc représenter une option intéressante pendant la rééducation.',
        'Cela ne veut pas dire que courir est sans risque dans tous les cas. **Si la douleur ne se calme pas pendant la nuit, ou si chaque semaine est pire, réduisez.** Une douleur au point d’attache sur l’os du talon demande plus de prudence qu’une douleur au corps du tendon. Tout claquement ou craquement soudain est une raison d’arrêter et de consulter un professionnel de santé.',
        'La page [douleur au talon chez les coureurs](/heel-pain-runners/) (en anglais) détaille la gestion de la charge propre à la course.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Combien de temps faut-il pour que les exercices pour l’Achille aident\u00A0?',
      paragraphs: [
        'La récupération d’une tendinopathie d’Achille se compte en mois. Les principaux essais de mise en charge duraient environ trois mois et suivaient les résultats jusqu’à 12\u00A0mois. La recommandation de 2024 note qu’une amélioration de la fonction peut apparaître dès 2\u00A0semaines, mais qu’une récupération plus complète prend bien plus longtemps.',
        'Aucun essai ne promet un délai fixe. Certaines personnes répondent plus vite, d’autres plus lentement, et les cas d’insertion prennent en général plus longtemps que ceux du corps du tendon. Le point commun, c’est une mise en charge régulière dans la durée.',
      ],
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer, CITE.silbernagel],
    },
  ],
  faq: [
    {
      q: 'Quelle différence entre tendinite d’Achille et tendinopathie\u00A0?',
      cites: [CITE.achillesGuideline],
      a: '«\u00A0Tendinite\u00A0» sous-entend une inflammation, alors que la plupart des douleurs chroniques du tendon d’Achille sont un problème de charge plutôt qu’un problème avant tout inflammatoire. La recommandation de 2024 dit «\u00A0tendinopathie\u00A0». Pour les exercices, le nom ne change pas ce que vous faites. Les exercices de cette page valent pour les deux termes.',
    },
    {
      q: 'Que sont les descentes excentriques du talon pour la tendinite d’Achille\u00A0?',
      cites: [CITE.alfredson],
      a: 'Les descentes excentriques du talon sont un exercice de renforcement\u00A0: montez sur les deux pieds, redescendez lentement sur un, le talon descendant sous le bord d’une marche. La phase de descente est l’essentiel. Dans un essai de 1998, 15\u00A0sportifs qui le faisaient deux fois par jour pendant trois mois ont tous retrouvé leur niveau de course d’avant. Des recherches plus récentes montrent que d’autres types de mise en charge marchent aussi bien.',
    },
    {
      q: 'La résistance lourde et lente vaut-elle les descentes excentriques du talon\u00A0?',
      cites: [CITE.beyer, CITE.vanDerVlist],
      a: 'Un essai de 2015 sur 58\u00A0personnes a conclu que les deux donnent des résultats cliniques «\u00A0positifs, aussi bons et durables\u00A0». Une méta-analyse de 2021 sur 29\u00A0essais n’a trouvé aucune différence cliniquement pertinente entre les types d’exercice actif à 3 ou 12\u00A0mois. Ce qui compte, c’est une mise en charge régulière, pas le protocole précis.',
    },
    {
      q: 'Quelle douleur est acceptable pendant les exercices pour l’Achille\u00A0?',
      cites: [CITE.silbernagel],
      a: 'Un essai acceptait une douleur jusqu’à environ 5/10 pendant la mise en charge, à condition qu’elle se calme avant le lendemain matin et ne s’aggrave pas d’une semaine à l’autre. Les patients suivant ce modèle ont fait aussi bien que ceux qui se sont d’abord reposés (Silbernagel 2007). Une douleur qui reste élevée pendant la nuit ou s’aggrave chaque semaine est le signal pour réduire.',
    },
    {
      q: 'Les exercices pour une tendinite d’Achille d’insertion sont-ils différents\u00A0?',
      cites: [CITE.jonsson],
      a: 'Oui. Le protocole classique de descentes profondes du talon donnait de mauvais résultats pour une douleur au point d’attache sur l’os du talon. Une étude pilote de 2008 a testé une charge excentrique uniquement au niveau du sol, sans flexion dorsale au-delà de la position neutre, avec de bons résultats chez 67\u00A0% des 27\u00A0patients. Les descentes profondes et les étirements appuyés sont à éviter en cas de douleur d’insertion.',
    },
    {
      q: 'Faut-il étirer un tendon d’Achille douloureux\u00A0?',
      cites: [CITE.alfredson, CITE.silbernagel, CITE.beyer],
      a: 'L’étirement n’est pas l’exercice principal de la tendinopathie d’Achille. Les essais de cette page sont tous des protocoles de mise en charge (montées sur pointes et descentes du talon), pas des programmes d’étirement. Un travail doux de mobilité du mollet peut suivre les séances avec charge, mais des étirements appuyés peuvent réveiller les symptômes, surtout en cas de douleur d’insertion, où la flexion dorsale comprime le point d’attache.',
    },
    {
      q: 'Combien de temps mettent les exercices pour la tendinite d’Achille à agir\u00A0?',
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer],
      a: 'La récupération se compte en mois. Les principaux essais duraient environ trois mois de mise en charge, avec un suivi des résultats jusqu’à 12\u00A0mois. La recommandation de 2024 note qu’une amélioration de la fonction peut commencer dès 2\u00A0semaines, mais qu’une récupération plus complète prend bien plus longtemps. Aucun essai ne promet un délai fixe.',
    },
    {
      q: 'Que faut-il éviter avec une tendinite d’Achille\u00A0?',
      cites: [CITE.jonsson, CITE.silbernagel],
      a: 'Évitez les hausses soudaines du volume de course ou de l’intensité des sprints, les étirements profonds du mollet si votre douleur est au point d’attache sur l’os du talon, et de forcer malgré une douleur qui reste élevée le lendemain matin ou s’aggrave d’une semaine à l’autre. Un claquement ou un craquement soudain demande un professionnel de santé tout de suite. Le repos complet n’est pas nécessaire non plus\u00A0: une activité avec surveillance de la douleur est en général une meilleure option que de tout arrêter.',
    },
    {
      q: 'La marche aggrave-t-elle une tendinite d’Achille\u00A0?',
      cites: [CITE.silbernagel],
      a: 'En général, non. La marche a moins d’impact que la course, et beaucoup de personnes avec une tendinopathie d’Achille peuvent continuer à marcher sans poussée. Surveillez une douleur qui reste élevée le lendemain matin ou s’aggrave d’une semaine à l’autre\u00A0: c’est le signal pour réduire la distance ou l’allure, pas pour arrêter de bouger. Les côtes raides et la marche rapide sur sol dur risquent davantage de l’irriter.',
    },
    {
      q: 'Avec quoi peut-on confondre une tendinite d’Achille\u00A0?',
      cites: [CITE.chooRearfoot],
      a: 'Une bursite rétrocalcanéenne, une maladie de Haglund ou une rupture partielle du tendon d’Achille peuvent toutes causer une douleur semblable à l’arrière du talon. Une bosse osseuse visible évoque une maladie de Haglund, tandis qu’un gonflement juste à l’arrière, au niveau du bord de la chaussure, évoque une bursite. Toute douleur vive et soudaine avec un claquement, ou l’impossibilité de monter sur la pointe des pieds, demande une évaluation urgente pour une rupture du tendon.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez senti un claquement soudain, un craquement ou l’impression d’avoir reçu un coup de pied à l’arrière de la jambe, surtout avec une difficulté immédiate à pousser sur le pied ou à marcher sur la pointe des pieds. Cela peut indiquer une rupture du tendon d’Achille',
      'vous prenez ou avez pris récemment un antibiotique de la famille des fluoroquinolones (comme la ciprofloxacine ou la lévofloxacine) et avez une douleur de tendon nouvelle ou qui s’aggrave. Ces médicaments portent un avertissement encadré de la FDA pour les tendinites et les ruptures de tendon',
      'la douleur et le gonflement sont apparus brusquement, avec de la fièvre, une rougeur ou de la chaleur sur le tendon',
      'il y a un gonflement important, un bleu ou un creux palpable dans le tendon',
      'la douleur est juste au point d’attache sur l’os du talon et s’aggrave avec les étirements ou les descentes profondes du talon au lieu de s’améliorer. Cela évoque une tendinopathie d’insertion, qui demande une approche adaptée ou l’avis d’un professionnel de santé',
      'la douleur ou la raideur s’aggrave régulièrement au fil des semaines malgré une mise en charge régulière',
      'la douleur est présente au repos ou vous réveille la nuit',
      'vous ne pouvez pas poser le pied ou vous boitez',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Vous n’avez pas à deviner l’ordre, les doses ni le moment d’ajouter de la charge. Walkito construit un plan une semaine à la fois autour d’un objectif. La progression du mollet va des montées sur pointes assis aux montées sur deux pieds, puis au maintien, aux montées avec serviette, aux descentes excentriques du talon et aux sauts pogo. Chaque étape s’ouvre une fois que deux séances au niveau actuel vous ont paru faciles.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours (puis tous les 28 une fois l’objectif du mollet atteint), un test vérifie l’endurance du mollet et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic. Si la douleur est juste au point d’attache sur l’os du talon, faites-la examiner par un professionnel de santé avant de la charger fort.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Exercices tendinite d’Achille',
  campaign: 'guide-achilles-fr',
};
