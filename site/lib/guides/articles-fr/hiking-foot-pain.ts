import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/hiking-foot-pain.ts (2026-10-18), written around
 * «mal aux pieds après une randonnée» and «douleur pied randonnée». French
 * (France) with «vous», terminology and exercise names as in `lib/guides/fr.ts`
 * and the other articles-fr pages. Figures, doses, grades, hedges and sources
 * are identical to the English page after its fact-check. Same CITE keys and
 * media ids. Pounds and miles kept as in the source, with approximate kg and
 * km added. Link to /foot-pain-identifier/ removed (no French version).
 * External link (Appalachian Trail Conservancy) marked «(en anglais)».
 */

export const HIKERS_FR: Guide = {
  lang: 'fr',
  page: 'hikers',
  mainSource: CITE.chruschHikers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Mal aux pieds après une randonnée\u00A0: causes et exercices',
  description:
    'Mal aux pieds après une randonnée\u00A0: ce que montrent les enquêtes, talon, tendon d’Achille, avant-pied, sac à dos, chaussures et une routine courte dosée.',
  h1: 'Mal aux pieds après une randonnée\u00A0: pourquoi et que faire',
  lede:
    'Avoir mal aux pieds après une longue randonnée est fréquent, et c’est surtout une question de surcharge\u00A0: plus de distance, plus de descente ou un sac plus lourd que ce dont vos pieds ont l’habitude. Dans une enquête auprès de 1295\u00A0randonneurs au long cours sur l’Appalachian Trail, 29\u00A0% ont signalé une blessure ou une douleur au pied, et 12\u00A0% une douleur au tendon d’Achille (Chrusch et Kavin, 2021). Une douleur sous le talon aux premiers pas le lendemain matin oriente vers une [fasciite plantaire](/fr/fasciite-plantaire/)\u00A0; une douleur sur un point précis d’un os, qui augmente à chaque sortie, peut être une fracture de fatigue et doit être examinée par un médecin.',
  intro: [
    'Cette page porte sur la randonnée et les longues marches sur sentier\u00A0: ce qui fait mal en général, ce que les enquêtes auprès des randonneurs ont trouvé sur le sac, les chaussures et l’entraînement, et une routine courte pour avant et après la sortie. Si votre talon fait mal après des marches ordinaires, commencez par [douleur au talon après la marche](/fr/douleur-talon-apres-marche/), et pour savoir combien marcher avec un talon douloureux, voyez [marcher avec une fasciite plantaire](/fr/marcher-avec-fasciite-plantaire/).',
  ],
  toc: true,
  takeaways: [
    'Sur 1295\u00A0randonneurs au long cours de l’Appalachian Trail, 61\u00A0% ont signalé un problème musculaire, articulaire ou osseux, 37\u00A0% une douleur au genou, 29\u00A0% une douleur au pied et 12\u00A0% une douleur au tendon d’Achille, et 11\u00A0% ont arrêté leur randonnée à cause de cela (Chrusch et Kavin, 2021).',
    'Les randonneurs qui ne s’étaient pas du tout entraînés avant le sentier signalaient plus souvent une douleur au pied, 38\u00A0% contre 28\u00A0%, et plus souvent une blessure de ce type quelle qu’elle soit, 80\u00A0% contre 58\u00A0%. C’est une association dans une enquête, pas la preuve que l’entraînement prévient les blessures (Chrusch et Kavin, 2021).',
    'Les ampoules aux pieds étaient le problème le plus fréquent chez 280\u00A0randonneurs de l’Appalachian Trail, signalées par 64\u00A0% d’entre eux (Boulware et coll., 2003).',
    'Les engourdissements ou fourmillements augmentaient avec le poids du sac chez 128\u00A0randonneurs au long cours, de 35\u00A0% avec des sacs de 10 à 20\u00A0livres (environ 4,5 à 9\u00A0kg) à 69\u00A0% au-delà de 31\u00A0livres (environ 14\u00A0kg). Le type de chaussure et le poids du sac n’étaient pas liés aux autres blessures musculaires et articulaires (Anderson et coll., 2009).',
    'Les bâtons de randonnée ont réduit la charge sur la cheville, le genou et la hanche chez 15\u00A0randonneurs expérimentés en descente, avec et sans sac (Bohne et Abendroth-Smith, 2007).',
  ],
  sections: [
    {
      h2: 'Pourquoi a-t-on mal aux pieds après une randonnée\u00A0?',
      keyFact: 'Dans une enquête auprès de 1295\u00A0randonneurs au long cours de l’Appalachian Trail, 29\u00A0% ont signalé une blessure ou une douleur au pied et 37\u00A0% une douleur au genou (Chrusch et Kavin, 2021).',
      paragraphs: [
        '**Surtout parce que la randonnée charge les pieds davantage, et plus longtemps, que la marche de tous les jours.** Vous marchez pendant des heures, sur un sol irrégulier, en montée et en descente, souvent avec un sac. Chacun de ces éléments ajoute du travail pour le talon, la voûte plantaire, le mollet et le tendon d’Achille.',
        'Les meilleurs chiffres viennent des randonneurs au long cours. Dans une enquête de 2018 à 2019 auprès de 1295\u00A0randonneurs de l’Appalachian Trail, 61\u00A0% ont signalé un problème musculaire, articulaire ou osseux. La douleur au genou était la plus fréquente avec 37\u00A0%, puis la douleur au pied avec 29\u00A0%, les entorses de cheville avec 13\u00A0%, la douleur au tendon d’Achille avec 12\u00A0% et la douleur au tibia avec 11\u00A0%. Ces problèmes ont fait arrêter 11\u00A0% d’entre eux (Chrusch et Kavin, 2021).',
        'Les problèmes de surmenage, qui s’installent au fil de jours de charge répétée, étaient plus fréquents que les blessures soudaines\u00A0: 28\u00A0% contre 18\u00A0% dans la même enquête. Cela concerne aussi les randonneurs à la journée. Une première longue sortie de la saison, ou un week-end avec deux grosses journées d’affilée, suit le même schéma à plus petite échelle.',
        'Ce sont des enquêtes déclaratives auprès de personnes qui marchent des centaines de miles. Aucune étude n’a compté les douleurs au pied chez les randonneurs à la journée ordinaires, donc les chiffres exacts ne s’appliquent pas à quelqu’un qui randonne le week-end. Ce qui est utile, c’est la répartition de ce qui fait mal.',
      ],
      sourceNote: 'Chrusch et Kavin 2021\u00A0: enquête électronique transversale ajoutée à l’enquête de fin de saison de l’Appalachian Trail Conservancy, taux de réponse de 52\u00A0%. Surmenage/chronique 28\u00A0% (n=363), aigu 18\u00A0% (n=238).',
      cites: [CITE.chruschHikers],
    },
    {
      h2: 'Où avez-vous mal, et de quoi s’agit-il probablement\u00A0?',
      paragraphs: [
        'L’endroit de la douleur est l’indice le plus rapide. Le tableau est un point de départ, pas un diagnostic.',
      ],
      table: {
        caption: 'Mal aux pieds après une randonnée\u00A0: où ça fait mal et la première étape habituelle',
        head: ['Où et quand', 'Souvent', 'Première étape'],
        rows: [
          ['Sous le talon, pire aux premiers pas le lendemain matin', 'Fasciite plantaire', 'Étirements du mollet et de la voûte, montées sur pointes'],
          ['Arrière du talon ou tendon au-dessus', 'Tendinopathie d’Achille', 'Sorties plus courtes, montées sur pointes lentes'],
          ['Avant-pied, derrière les orteils', 'Métatarsalgie', 'Vérifier l’ajustement, étirement du mollet'],
          ['Un point précis sur un os, pire à chaque sortie', 'Fracture de fatigue possible', 'Arrêter la randonnée, consulter un médecin'],
          ['Orteils qui brûlent ou fourmillent', 'Nerf comprimé', 'Desserrer les lacets, sac plus léger'],
          ['Ongles des orteils noirs ou douloureux après les descentes', 'Orteils qui butent dans la chaussure', 'Chaussure plus longue, ongles coupés'],
        ],
      },
      after: [
        '**Sous le talon.** La fasciite plantaire fait typiquement le plus mal aux premiers pas après un repos. La recommandation de 2023 sur la douleur au talon cite comme signe typique une douleur apparue après une augmentation récente de l’activité en appui (Koc et coll., 2023), ce qui est exactement le cas d’une randonnée plus longue. Un mollet raide est le facteur de risque le plus fort connu\u00A0: dans une étude sur 50\u00A0personnes atteintes de fasciite plantaire et 100 sans, celles qui avaient la plus faible flexion de cheville avaient un risque 23,3\u00A0fois plus élevé (Riddle et coll., 2003).',
        '**Arrière du talon.** La douleur au tendon d’Achille peut se réveiller dans les longues montées, où le mollet et le tendon vous poussent vers le haut à chaque pas. Voyez [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/).',
        '**Avant-pied.** Les longues descentes et un mollet raide peuvent tous deux reporter la charge sur l’avant du pied. Voyez [métatarsalgie](/fr/metatarsalgie-douleur-avant-pied/).',
        '**Ampoules et ongles.** Les ampoules ont été signalées par 64\u00A0% de 280\u00A0randonneurs de l’Appalachian Trail, plus que tout autre problème (Boulware et coll., 2003). Des ongles noirs ou douloureux après une journée de descentes signifient en général que les orteils butent contre l’avant de la chaussure. Ce sont des problèmes de peau et d’ajustement, pas quelque chose que les exercices changent.',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.boulwareHikers],
    },
    {
      h2: 'Pourquoi la descente fait-elle plus mal aux pieds\u00A0?',
      keyFact: 'Chez 15\u00A0randonneurs expérimentés en descente sans sac, avec un sac de journée et avec un sac lourd, les bâtons de randonnée ont réduit la charge sur la cheville, le genou et la hanche (Bohne et Abendroth-Smith, 2007).',
      paragraphs: [
        '**En descente, vos jambes servent de freins.** À chaque pas vers le bas, le mollet, les muscles à l’avant du tibia et ceux de la cuisse contrôlent la descente tout en s’allongeant. Le pied glisse aussi vers l’avant dans la chaussure, si bien que les orteils et l’avant-pied subissent plus de pression. C’est pourquoi beaucoup de gens se sentent bien à la montée et ont mal après la descente.',
        'Dans une étude en laboratoire, 15\u00A0randonneurs expérimentés, tous des hommes, ont marché en descente sans sac, avec un sac de journée pesant 15\u00A0% de leur poids et avec un sac d’expédition de 30\u00A0%. Les bâtons ont réduit les moments articulaires à la cheville, au genou et à la hanche et le pic de travail de freinage à la cheville et au genou, quel que soit le sac (Bohne et Abendroth-Smith, 2007). Dans l’enquête de l’Appalachian Trail, 70\u00A0% utilisaient des bâtons ou un bâton de marche, et les bâtons étaient associés à moins de problèmes (Chrusch et Kavin, 2021). Cette association dans une enquête ne prouve pas que les bâtons préviennent les blessures.',
        'Quelques conseils pratiques, dont aucun n’a été testé pour prévenir la douleur au pied\u00A0: faites des pas plus courts dans les descentes raides, serrez bien les lacets sur le cou-de-pied pour que le pied ne glisse pas vers l’avant, et gardez les ongles des orteils courts.',
      ],
      sourceNote: 'Bohne 2007\u00A0: 10\u00A0essais par condition, moments articulaires dans le plan sagittal réduits aux trois articulations avec les bâtons\u00A0; pic d’absorption de puissance réduit à la cheville et au genou. Ce sont des forces mesurées, pas de la douleur ni des blessures.',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
    },
    {
      h2: 'Un sac plus lourd aggrave-t-il la douleur au pied\u00A0?',
      keyFact: 'Chez 128\u00A0randonneurs au long cours, 35\u00A0% de ceux qui portaient un sac de 10 à 20\u00A0livres (environ 4,5 à 9\u00A0kg) et 69\u00A0% de ceux qui portaient plus de 31\u00A0livres (environ 14\u00A0kg) ont signalé des engourdissements ou des fourmillements (Anderson et coll., 2009).',
      paragraphs: [
        '**Un sac plus lourd veut dire plus de charge à chaque pas, mais les études sur les randonneurs ne montrent un lien clair qu’avec les engourdissements et les fourmillements.** Dans une enquête de 2006 auprès de 128\u00A0randonneurs ayant parcouru plus de 500\u00A0miles (environ 800\u00A0km) sur l’Appalachian Trail ou le Pacific Crest Trail, les engourdissements ou fourmillements augmentaient avec le poids du sac\u00A0: 35\u00A0% avec des sacs de 10 à 20\u00A0livres, 50\u00A0% de 21 à 30\u00A0livres et 69\u00A0% au-delà de 31\u00A0livres (Anderson et coll., 2009).',
        'La même enquête n’a trouvé aucun lien entre le poids du sac ou le type de chaussure et les autres blessures musculaires et articulaires, comme les entorses, les douleurs durables ou les blessures musculaires. Personne n’a donc montré qu’un sac plus léger signifie moins de douleur au talon ou à la voûte. C’est quand même un bon point de départ si vos pieds ne font mal que les jours où vous portez un sac plein.',
        'Si vos orteils brûlent ou fourmillent, desserrez les lacets sur le dessus du pied et vérifiez la ceinture ventrale et les bretelles, et consultez un médecin si cela ne passe pas une fois le sac retiré.',
      ],
      cites: [CITE.andersonPack],
    },
    {
      h2: 'Chaussures de randonnée ou de trail\u00A0: lesquelles pour la douleur au pied\u00A0?',
      paragraphs: [
        '**Aucun essai n’a comparé les chaussures de randonnée montantes et les chaussures de trail pour la douleur au pied, donc personne ne peut dire lesquelles sont meilleures.** Il n’existe que des enquêtes\u00A0:',
        {
          list: [
            'Dans l’enquête de 2006 auprès de 128\u00A0randonneurs au long cours, les engourdissements ou fourmillements ont été signalés par 29\u00A0% des porteurs de sandales, 36\u00A0% des porteurs de chaussures de course, 42\u00A0% des porteurs de chaussures de randonnée basses et 68\u00A0% des porteurs de chaussures montantes. Après prise en compte du poids du sac, le type de chaussure ne comptait plus, ce qui suggère que les randonneurs en chaussures montantes portaient aussi des sacs plus lourds (Anderson et coll., 2009).',
            'Dans l’enquête de 2018 à 2019 sur l’Appalachian Trail, 58\u00A0% portaient des chaussures de course ou de trail et 24\u00A0% des chaussures montantes. Les deux étaient associées à moins de problèmes que les autres chaussures, comme les sandales (Chrusch et Kavin, 2021).',
          ],
        },
        'Choisissez donc la chaussure qui vous va, avec laquelle vous avez déjà marché et qui convient au terrain. Pour la douleur au talon en général, la recommandation de 2023 se prononce contre les semelles utilisées seules pour un soulagement à court terme, **note B**, et les admet en complément d’autres soins, **note C** (Koc et coll., 2023). Plus de détails dans [semelles ou exercices](/fr/semelles-ou-exercices/). Si vous voulez passer à des chaussures plus légères ou plus plates, faites-le sur plusieurs semaines, pas lors de la première longue sortie\u00A0; [chaussures minimalistes](/fr/chaussures-minimalistes/) explique pourquoi.',
      ],
      cites: [CITE.andersonPack, CITE.chruschHikers, CITE.guideline],
    },
    {
      h2: 'À quel rythme augmenter la distance de randonnée\u00A0?',
      keyFact: 'Les randonneurs qui ne s’étaient pas du tout entraînés avant l’Appalachian Trail signalaient plus souvent une blessure musculaire, articulaire ou osseuse, 80\u00A0% contre 58\u00A0% (Chrusch et Kavin, 2021).',
      paragraphs: [
        '**Aucune étude ne donne une augmentation hebdomadaire sans risque pour les randonneurs.** Ce qui s’en rapproche le plus est l’enquête de l’Appalachian Trail\u00A0: les 13\u00A0% de randonneurs qui ne s’étaient pas du tout entraînés avant le sentier signalaient plus de blessures au total (80\u00A0% contre 58\u00A0%), plus de douleurs au pied (38\u00A0% contre 28\u00A0%), plus de douleurs au tendon d’Achille (18\u00A0% contre 11\u00A0%) et plus de fractures de fatigue de la jambe (5\u00A0% contre 2\u00A0%). Le renforcement musculaire, les étirements ou le yoga, et l’entraînement d’endurance étaient chacun associés à moins de blessures (Chrusch et Kavin, 2021). C’est une enquête\u00A0: les personnes plus en forme ou plus prudentes se sont peut-être simplement davantage entraînées.',
        'Une façon pratique de progresser, mais pas une méthode testée\u00A0:',
        {
          list: [
            'Changez une seule chose à la fois\u00A0: plus de distance, plus de dénivelé ou un sac plus lourd, pas les trois le même jour.',
            'Servez-vous du lendemain matin comme contrôle. Une douleur qui s’est calmée le lendemain matin et qui n’augmente pas de semaine en semaine est un signe raisonnable que la charge convient. Cette règle vient d’un essai sur le tendon d’Achille, pas d’une étude sur des randonneurs (Silbernagel et coll., 2007).',
            'Après une grosse journée, prévoyez une journée facile. L’[Appalachian Trail Conservancy](https://appalachiantrail.org/experience/hike-the-trail/essential-skills/health-hygiene/common-injuries/) (en anglais) donne un conseil semblable aux randonneurs au long cours\u00A0: s’arrêter pour la journée si les pieds commencent à faire mal, à gonfler ou à sembler serrés après avoir marché plus loin que d’habitude.',
          ],
        },
        'La force du mollet vaut la peine d’être travaillée entre les sorties, parce que le mollet fait une grande partie du travail en montée et en descente. Les montées sur pointes ci-dessous sont les mêmes que dans le guide des [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
      cites: [CITE.chruschHikers, CITE.silbernagel],
    },
    {
      h2: 'Quelle routine faire avant et après une randonnée\u00A0?',
      paragraphs: [
        'Faites court. Avant la sortie, une à deux minutes pour mettre les chevilles en mouvement. Après, les étirements qui ciblent le talon et le mollet. Les jours entre les sorties, des montées sur pointes pour la force. Les doses sont les doses de départ de Walkito tirées des guides principaux. Arrêtez un exercice pour la journée si la douleur dépasse 6 sur 10.',
        'Soyons honnêtes sur ce que l’étirement avant une randonnée apporte. Dans un essai sur 1538\u00A0recrues de l’armée suivies pendant trois mois d’entraînement, étirer six groupes musculaires des jambes avant chaque séance n’a pas réduit les blessures de façon notable (Pope et coll., 2000). Les étirements proposés ici visent la douleur au talon et au mollet, pour laquelle la recommandation de 2023 donne à l’étirement la **note A** et au renforcement du mollet la **note B** (Koc et coll., 2023).',
      ],
      exercises: [
        {
          name: 'Bascules de cheville (avant)',
          evidence: { level: 'early', why: 'Dose propre à Walkito. Aucun protocole publié pour les randonneurs.' },
          dose: '2\u00A0séries de 15, chaque jambe',
          often: 'Avant la sortie',
          feel: 'Un étirement à l’avant de la cheville et une tension en bas du mollet',
          how: 'En fente, les mains contre un mur, un arbre ou vos bâtons. Avancez le genou avant au-dessus des orteils, le talon reste à plat. Lentement, environ deux secondes dans chaque sens. Changez de jambe après chaque série.',
          stop: 'La douleur atteint 6 sur 10',
          media: 'ankle_rocks',
          caption: 'Bascules de cheville\u00A0: le genou passe au-dessus des orteils, le talon reste à plat',
          alt: 'Une personne en fente qui avance le genou avant au-dessus des orteils, la cheville mise en évidence',
        },
        {
          name: 'Étirement du mollet (après)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne à l’étirement la note A, sa meilleure note. Non étudié chez les randonneurs.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'Après la sortie',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon\u00A0: cet étirement compte, même si vous le sentez plus haut.',
          stop: 'Une douleur vive au talon ou au tendon d’Achille',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une personne appuyée contre un mur, jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (après)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne à l’étirement la note A, sa meilleure note. Non étudié chez les randonneurs.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'Après la sortie',
          feel: 'Un étirement près du talon',
          how: 'Prenez la même position, gardez le talon arrière à plat au sol, puis pliez le genou arrière jusqu’à sentir l’étirement plus bas, près du talon. Le soléaire, le muscle profond du mollet, ne se relâche que genou plié.',
          stop: 'Une douleur vive au talon ou au tendon d’Achille',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: talon arrière à plat, pliez le genou arrière jusqu’à le sentir près du talon',
          alt: 'Une personne en fente, genoux pliés, le bas des mollets mis en évidence',
        },
        {
          name: 'Étirement du fascia plantaire (après, et le lendemain matin)',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon donne à l’étirement la note A, sa meilleure note. Non étudié chez les randonneurs.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'Après la sortie et avant vos premiers pas le lendemain matin',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et croisez le pied sur l’autre genou. Tirez les orteils vers vous jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Le lendemain matin, faites le premier au bord du lit, avant que le pied ne touche le sol.',
          stop: 'Une douleur vive au talon',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers vous jusqu’à sentir la voûte',
          alt: 'Une personne qui tire vers elle les orteils d’un pied, la plante du pied mise en évidence',
        },
        {
          name: 'Massage avec une balle (après)',
          evidence: { level: 'early', why: 'Pas testé dans les études de cette page. Il est là pour le confort.' },
          dose: '1\u00A0minute, chaque pied',
          often: 'Après la sortie ou le soir',
          feel: 'Une pression ferme sous le pied',
          how: 'Asseyez-vous et faites rouler lentement la plante du pied sur une balle de massage, avec une pression ferme. Si vous grimacez, appuyez moins. Pas de balle\u00A0? Des passages fermes du pouce, du talon vers les orteils, conviennent aussi.',
          stop: 'Une douleur qui fait grimacer, ou un point douloureux sur un os',
          media: 'foot_roll',
          caption: 'Massage avec une balle\u00A0: faites rouler lentement la plante, avec une pression ferme',
          alt: 'Une personne assise qui fait rouler la plante d’un pied sur une balle, la plante mise en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds (entre les sorties)',
          evidence: { level: 'moderate', why: 'La recommandation de 2023 donne au renforcement la note B. Un programme de montées sur pointes a soulagé la douleur au talon plus vite que les étirements dans un essai sur 48\u00A0personnes (Rathleff 2015).' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '2 à 3\u00A0jours par semaine, pas le lendemain d’une grosse sortie',
          feel: 'Les deux mollets qui travaillent ensemble',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Quand c’est facile, passez à une jambe ou à la [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/). En cas de douleur au tendon d’Achille, la descente lente sur une marche est l’exercice principal\u00A0: voyez [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/).',
          stop: 'Une douleur au talon ou au tendon d’Achille au-dessus de 6 sur 10, ou pire le lendemain matin',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez bien droit au-dessus des gros orteils, puis redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, le mollet mis en évidence',
        },
      ],
      cites: [CITE.popeStretching, CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quand arrêter la randonnée et consulter un médecin\u00A0?',
      keyFact: 'Dans une revue sur les fractures de fatigue, 81\u00A0% des patients avaient mal en marchant, et une radiographie précoce n’en détectait qu’environ 10\u00A0% (Patel et coll., 2011).',
      paragraphs: [
        '**Arrêtez et faites-vous examiner si la douleur se situe sur un point précis d’un os et augmente à chaque sortie.** C’est le tableau classique de la fracture de fatigue, en général sur les métatarsiens derrière les orteils ou sur le calcanéum. Dans une revue sur les fractures de fatigue, 81\u00A0% des patients avaient mal en marchant, et un point douloureux sur l’os était retrouvé chez 65,9 à 100\u00A0% d’entre eux. Une radiographie à la première consultation n’en détectait qu’environ 10\u00A0%, donc une radiographie normale n’exclut pas une fracture de fatigue (Patel et coll., 2011). Si vous ne savez pas de quoi il s’agit, arrêtez la randonnée jusqu’à ce qu’un médecin ait examiné le pied.',
        'Arrêtez aussi si vous ne pouvez pas poser le pied, si la douleur a commencé avec une torsion, une chute ou un claquement, ou si le pied est rouge, chaud et gonflé. La liste complète se trouve plus bas.',
        'La plupart des douleurs au talon sont moins graves. Dans la fasciite plantaire, environ 90\u00A0% des personnes vont mieux avec un traitement sans chirurgie, même si cela peut prendre des mois (Latt et coll., 2020). Voyez [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/).',
      ],
      sourceNote: 'Les chiffres de Patel 2011 concernent les fractures de fatigue de toutes localisations, pas les randonneurs. La sensibilité de la radiographie monte à 30 à 70\u00A0% après environ trois semaines.',
      cites: [CITE.patelStressFracture, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Est-il normal d’avoir mal aux pieds après une randonnée\u00A0?',
      cites: [CITE.chruschHikers],
      a: 'Un peu de douleur après une sortie longue ou raide est fréquent et passe souvent en un ou deux jours. Dans une enquête auprès de 1295\u00A0randonneurs de l’Appalachian Trail, 29\u00A0% ont signalé une douleur au pied. Une douleur vive, située sur un point précis d’un os ou encore présente après quelques jours tranquilles mérite d’être examinée.',
    },
    {
      q: 'Pourquoi ai-je mal au talon après une randonnée\u00A0?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La cause la plus fréquente est la fasciite plantaire, qui fait mal sous le talon et est en général pire aux premiers pas le lendemain matin. La recommandation de 2023 cite une augmentation récente de l’activité en appui comme déclencheur typique, et un mollet raide est le facteur de risque le plus fort connu. Une douleur à l’arrière du talon oriente vers le tendon d’Achille.',
    },
    {
      q: 'Peut-on continuer à randonner avec une fasciite plantaire\u00A0?',
      cites: [CITE.silbernagel],
      a: 'Beaucoup de gens le peuvent, sur des parcours plus courts et plus plats, si la douleur reste modérée pendant la sortie et s’est calmée le lendemain matin. Cette règle du lendemain matin vient d’un essai sur le tendon d’Achille, pas d’une étude sur la randonnée. Si le talon est pire chaque matin, réduisez d’abord la distance et la descente. Notre guide pour marcher avec une fasciite plantaire explique comment reprendre progressivement.',
    },
    {
      q: 'Chaussures montantes ou chaussures de trail\u00A0: lesquelles pour la douleur au pied\u00A0?',
      cites: [CITE.andersonPack, CITE.chruschHikers],
      a: 'Personne ne le sait vraiment, car aucun essai ne les a comparées. Dans les enquêtes auprès des randonneurs au long cours, les chaussures montantes comme les chaussures de trail étaient associées à moins de problèmes que les sandales, et le lien entre chaussures montantes et engourdissements disparaissait une fois le poids du sac pris en compte. Choisissez la paire qui vous va et avec laquelle vous avez déjà marché.',
    },
    {
      q: 'Un sac à dos lourd donne-t-il mal aux pieds\u00A0?',
      cites: [CITE.andersonPack],
      a: 'Il ajoute de la charge à chaque pas, mais les enquêtes auprès des randonneurs ne montrent un lien clair qu’avec les engourdissements et les fourmillements. Chez 128\u00A0randonneurs au long cours, ils passaient de 35\u00A0% avec des sacs de 10 à 20\u00A0livres (environ 4,5 à 9\u00A0kg) à 69\u00A0% au-delà de 31\u00A0livres (environ 14\u00A0kg). Dans cette enquête, le poids du sac n’était pas lié aux autres blessures musculaires et articulaires.',
    },
    {
      q: 'Pourquoi ai-je plus mal aux pieds en descente\u00A0?',
      cites: [CITE.bohnePoles],
      a: 'En descente, les muscles des jambes servent de freins tout en s’allongeant, et le pied glisse vers l’avant dans la chaussure, ce qui charge les orteils et l’avant-pied. Dans une étude en laboratoire sur 15\u00A0randonneurs en descente, les bâtons de randonnée ont réduit la charge sur la cheville, le genou et la hanche, avec et sans sac.',
    },
    {
      q: 'Les bâtons de randonnée aident-ils contre la douleur au pied\u00A0?',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
      a: 'Ils réduisent la charge sur les jambes. Chez 15\u00A0randonneurs expérimentés en descente, les bâtons ont réduit les forces à la cheville, au genou et à la hanche, et dans une enquête auprès des randonneurs de l’Appalachian Trail, les bâtons étaient associés à moins de problèmes. Aucun essai n’a vérifié si les bâtons préviennent la douleur au pied elle-même\u00A0: voyez-les comme un complément sensé, pas comme une certitude.',
    },
    {
      q: 'Combien de temps les pieds peuvent-ils faire mal après une longue randonnée\u00A0?',
      a: 'Les douleurs ordinaires après une grosse journée s’estompent souvent en un ou deux jours d’activité légère. Si la douleur au talon aux premiers pas revient chaque matin, ou si la douleur est toujours là après une semaine de marches plus courtes, il s’agit plus probablement d’un problème de surmenage comme une fasciite plantaire ou une douleur au tendon d’Achille, et cela mérite un vrai examen.',
    },
    {
      q: 'Faut-il s’étirer avant une randonnée\u00A0?',
      cites: [CITE.popeStretching, CITE.guideline],
      a: 'Un court échauffement comme les bascules de cheville convient, mais n’attendez pas des étirements avant la sortie qu’ils préviennent les blessures. Dans un essai sur 1538\u00A0recrues de l’armée, s’étirer avant l’entraînement n’a pas réduit les blessures de façon notable. Les étirements du mollet et de la voûte après la sortie sont plus utiles si votre talon fait mal\u00A0: la recommandation de 2023 leur donne la note A.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur se situe sur un point précis d’un os et augmente à chaque sortie, ce qui peut être une fracture de fatigue',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'la douleur a commencé avec une torsion, une chute ou un claquement, surtout à l’arrière du talon',
      'le pied ou la cheville est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'une ampoule ou un ongle semble infecté\u00A0: rougeur qui s’étend, pus ou traînées rouges',
      'les engourdissements, fourmillements ou brûlures ne passent pas une fois le sac et les chaussures retirés',
      'le pied fait mal la nuit ou au repos',
      'la douleur continue d’empirer pendant deux à trois semaines malgré des sorties plus courtes',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied, avec les étirements et les montées sur pointes de cette page. Elle ne planifie pas vos randonnées\u00A0: gardez votre propre plan d’itinéraires et placez les séances autour, avec des séances plus légères après une grosse journée.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez comment vont vos pieds, et le plan s’y adapte. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['heelPainAfterWalking', 'achilles', 'ballOfFoot'],
  crumb: 'Mal aux pieds après une randonnée',
  campaign: 'guide-hiking-foot-pain-fr',
};
