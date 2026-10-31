import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * French version of articles/plantar-fasciitis-vs-achilles-tendonitis.ts (2026-10-18), written around
 * «fasciite plantaire ou tendinite d’Achille» and «douleur talon ou tendon d’Achille».
 * «vous», terminology and exercise names as in `lib/guides/fr.ts` and articles-fr/achilles.ts.
 * Figures, doses, grades, qualifiers and sources are identical to the English page after its
 * fact-check. Same CITE keys and media ids. No external links.
 */

export const PF_VS_ACHILLES_FR: Guide = {
  lang: 'fr',
  page: 'pfVsAchilles',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fasciite plantaire ou tendinite d’Achille\u00A0: les différences',
  description:
    'Fasciite plantaire ou tendinite d’Achille\u00A0? Où et quand ça fait mal, un tableau comparatif, les exercices pour chacune et que faire si vous avez les deux.',
  h1: 'Fasciite plantaire ou tendinite d’Achille\u00A0: comment les distinguer',
  lede:
    'Le moyen le plus rapide de les distinguer, c’est l’endroit où ça fait mal. La [fasciite plantaire](/fr/fasciite-plantaire/) fait mal sous le talon, surtout aux premiers pas du matin (Koc et coll., 2023). La tendinite d’Achille fait mal à l’arrière du talon ou dans le tendon au-dessus, en général de 2 à 6\u00A0centimètres au-dessus de l’os du talon (Chimenti et coll., 2024). Les deux répondent à l’exercice, mais ce ne sont pas les mêmes exercices.',
  intro: [
    'Cette page compare les deux côte à côte. Elle ne pose pas de diagnostic, et certaines douleurs au talon ne sont ni l’une ni l’autre. Pour les programmes complets, voyez [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) et [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/). Si une bosse osseuse à l’arrière du talon fait partie du tableau, voyez [maladie de Haglund](/fr/maladie-de-haglund/).',
  ],
  takeaways: [
    'La douleur de la fasciite plantaire se situe sous le talon, du côté interne, et elle est en général la plus forte aux premiers pas après le sommeil ou après être resté assis (Koc et coll., 2023).',
    'La tendinopathie d’Achille du corps du tendon fait mal dans le tendon lui-même, en général de 2 à 6\u00A0centimètres au-dessus de l’os du talon. Une douleur juste au point d’attache du tendon sur l’os correspond à la forme d’insertion (Chimenti et coll., 2024).',
    'La recommandation de 2023 sur la douleur au talon donne la note **A** aux étirements du fascia plantaire et du mollet et la note **B** au renforcement. La recommandation de 2024 sur l’Achille donne la note **A** aux exercices de mise en charge du tendon (Koc et coll., 2023\u00A0; Chimenti et coll., 2024).',
    'Dans un essai sur 101\u00A0personnes souffrant de douleur chronique au talon, un étirement du fascia plantaire a fait mieux qu’un étirement du mollet seul à 8\u00A0semaines (DiGiovanni et coll., 2003). Pour l’Achille, la meilleure note de la recommandation va à la mise en charge du tendon, pas aux étirements (Chimenti et coll., 2024).',
    'Les deux sont liées\u00A0: sur 52\u00A0IRM, les personnes avec des modifications de l’Achille avaient un fascia plantaire plus épais, et chez 5 sur 27 il dépassait le seuil habituel de la fasciite plantaire (Stecco et coll., 2013).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Où avez-vous mal\u00A0: sous le talon ou à l’arrière\u00A0?',
      figure: { id: 'heel-side', caption: 'La fasciite plantaire fait mal sous le talon. La douleur d’Achille se situe à l’arrière du talon ou dans le tendon au-dessus.', alt: 'Vue du pied côté interne montrant l’os du talon, le fascia plantaire sous la voûte et le tendon d’Achille à l’arrière, avec une zone rouge sous le talon.' },
      keyFact: 'La douleur d’Achille du corps du tendon se ressent en général de 2 à 6\u00A0centimètres au-dessus de l’os du talon, alors que la douleur de la fasciite plantaire se situe sous le talon, côté interne (Chimenti et coll., 2024\u00A0; Koc et coll., 2023).',
      paragraphs: [
        '**L’endroit est la différence la plus nette.** Le fascia plantaire est la bande épaisse sous votre pied qui va de l’os du talon aux orteils. La fasciite plantaire fait mal là où cette bande s’attache, sous le talon et vers le côté interne. Appuyer à cet endroit avec le pouce est en général douloureux (Koc et coll., 2023).',
        'Le tendon d’Achille relie les muscles du mollet à l’arrière de l’os du talon. Il existe deux types de douleur d’Achille, et c’est l’endroit qui les distingue (Chimenti et coll., 2024\u00A0; Jonsson et coll., 2008)\u00A0:',
        {
          list: [
            '**Corps du tendon\u00A0:** une douleur et souvent un tendon plus épais et sensible de 2 à 6\u00A0centimètres au-dessus de l’os du talon. Vous pouvez en général pincer le point douloureux entre le pouce et l’index.',
            '**Insertion\u00A0:** une douleur juste là où le tendon s’attache à l’arrière de l’os du talon, souvent pire quand la chaussure appuie à cet endroit.',
          ],
        },
        'Une douleur sous le talon qui fait mal quand on serre les côtés du talon, qui brûle ou picote, ou qui s’accompagne d’engourdissement, oriente vers d’autres causes, comme un nerf, une fracture de fatigue ou le coussinet graisseux du talon (Tu, 2018). La page [douleur au talon la nuit](/fr/douleur-talon-la-nuit/) en parle.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.jonsson, CITE.tuHeelPain],
    },
    {
      h2: 'Quand avez-vous mal\u00A0: aux premiers pas ou pendant l’effort\u00A0?',
      paragraphs: [
        '**La fasciite plantaire est une douleur des premiers pas.** La recommandation décrit une douleur au talon surtout marquée aux premiers pas du matin ou après être resté assis, qui s’atténue souvent en marchant et revient après de longues périodes debout (Koc et coll., 2023). La page [douleur au talon au réveil](/fr/douleur-talon-au-reveil/) explique ce profil.',
        '**La tendinopathie d’Achille est une douleur de mise en charge.** Le tendon peut lui aussi être raide le matin, et c’est pour cela qu’on confond les deux. La différence, c’est ce qui l’aggrave dans la journée\u00A0: les activités qui chargent le tendon, comme la course et les sauts, et la douleur suit en général la quantité d’effort (Chimenti et coll., 2024). Les montées et les poussées rapides chargent le tendon encore plus.',
        'Les deux peuvent donc faire mal le matin. Demandez-vous où, pas seulement quand\u00A0: une bande raide et douloureuse à l’arrière de la cheville oriente vers l’Achille, une douleur vive sous le talon vers le fascia plantaire.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Fasciite plantaire ou tendinite d’Achille\u00A0: le tableau comparatif',
      paragraphs: [
        'Le tableau résume le profil typique. Beaucoup de personnes ne rentrent pas parfaitement dans une colonne, et seul l’examen d’un professionnel de santé peut dire laquelle vous avez.',
      ],
      table: {
        caption: 'Fasciite plantaire et tendinopathie d’Achille en un coup d’œil',
        head: ['', 'Fasciite plantaire', 'Tendinopathie d’Achille'],
        rows: [
          ['Où', 'Sous le talon, côté interne', 'Arrière du talon ou de 2 à 6\u00A0cm au-dessus'],
          ['Pire', 'Premiers pas après le repos', 'Poussée, course, montées'],
          ['Douloureux à la pression', 'Sous le talon', 'Tendon pincé à l’arrière'],
          ['Lié à', 'Cheville raide, poids, station debout', 'Sport dans 35\u00A0% des cas'],
          ['Exercice le mieux noté', 'Étirements, note A', 'Mise en charge du tendon, note A'],
          ['Étirer le mollet\u00A0?', 'Oui, note A', 'Facultatif, note C'],
          ['Recommandation', 'Koc 2023', 'Chimenti 2024'],
        ],
      },
      after: [
        'Les facteurs de risque viennent d’études différentes. Pour la fasciite plantaire, les personnes dont la cheville ne se pliait pas au-delà de 0\u00A0degré avaient une cote (odds) 23,3\u00A0fois plus élevée de fasciite plantaire, et un indice de masse corporelle supérieur à 30 ainsi que le fait de rester debout la plus grande partie de la journée de travail augmentaient aussi cette cote (Riddle et coll., 2003). Dans une étude néerlandaise portant sur 57\u00A0725\u00A0personnes inscrites chez un médecin généraliste, une tendinopathie d’Achille du corps du tendon a été diagnostiquée en un an chez 2,35 adultes de 21 à 60\u00A0ans sur 1\u00A0000, et 35\u00A0% des cas étaient liés au sport (de Jonge et coll., 2011).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.riddle, CITE.deJongeIncidence],
    },
    {
      h2: 'Quels exercices pour la fasciite plantaire\u00A0?',
      keyFact: 'Dans un essai sur 101\u00A0personnes souffrant de douleur chronique au talon, un étirement du fascia plantaire a donné de meilleurs résultats à 8\u00A0semaines qu’un étirement du mollet seul (DiGiovanni et coll., 2003).',
      paragraphs: [
        '**Pour la fasciite plantaire, les étirements passent en premier.** La recommandation de 2023 donne la note **A**, sa meilleure note, aux étirements du fascia plantaire et du mollet, et la note **B** au renforcement (Koc et coll., 2023).',
        'L’étirement qui cible la voûte compte. Dans un essai sur 101\u00A0personnes, le groupe qui faisait l’étirement du fascia plantaire a rapporté de meilleurs résultats à 8\u00A0semaines que le groupe qui étirait seulement le mollet (DiGiovanni et coll., 2003). Pour le renforcement, un essai de 2015 sur 48\u00A0personnes utilisait des montées sur pointes lentes avec une serviette sous les orteils\u00A0: la douleur diminuait plus vite qu’avec les étirements seuls à trois mois, mais à douze mois les deux groupes étaient à peu près à égalité (Rathleff et coll., 2015).',
        'Voici les doses de départ du guide [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
      exercises: [
        {
          name: 'Étirement du fascia plantaire',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque pied',
          often: 'À la plupart des séances',
          feel: 'Un étirement le long de la voûte',
          how: 'Asseyez-vous et posez le pied sur le genou opposé. Tirez les orteils vers l’arrière jusqu’à sentir l’étirement dans la voûte, pas dans le mollet. Faites le premier au bord du lit, avant que votre pied ne touche le sol.',
          stop: 'Une douleur vive au talon qui ne passe pas quand vous relâchez',
          image: 'Exercice\u00A0: étirement du fascia plantaire',
          media: 'fascia_stretch',
          caption: 'Étirement du fascia plantaire\u00A0: tirez les orteils vers l’arrière jusqu’à le sentir dans la voûte',
          alt: 'Une silhouette tire vers l’arrière les orteils d’un pied, la plante du pied est mise en évidence',
        },
        {
          name: 'Étirement du mollet',
          evidence: { level: 'strong', why: 'La recommandation de 2023 sur la douleur au talon note les étirements A, sa meilleure note.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          often: 'À la plupart des séances',
          feel: 'Un étirement dans le mollet',
          how: 'Posez les mains contre un mur. Gardez la jambe arrière tendue, le talon arrière à plat au sol et les hanches vers l’avant. Un mollet raide tire sur le talon toute la journée, donc cet étirement compte même si vous le sentez plus haut.',
          stop: 'Une traction vive à l’arrière de l’os du talon',
          image: 'Exercice\u00A0: étirement du mollet',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: jambe arrière tendue, talon arrière à plat, hanches vers l’avant',
          alt: 'Une silhouette appuyée contre un mur, la jambe arrière tendue, le mollet mis en évidence',
        },
        {
          name: 'Montées sur pointes avec serviette',
          evidence: { level: 'moderate', why: 'C’est le programme d’un essai sur 48\u00A0personnes, et la recommandation de 2023 note le renforcement B.' },
          dose: '4\u00A0séries de 10, chaque jambe, avec une charge en plus',
          often: 'Jours de renforcement',
          feel: 'Un effort intense dans le mollet',
          how: 'Tenez-vous sur un pied sur une marche, avec une serviette roulée sous les orteils. Montez en trois secondes, tenez deux secondes en haut, puis descendez en trois secondes. À ce niveau, Walkito ajoute une charge, par exemple un sac à dos. C’est la serviette qui fait travailler le fascia plantaire et pas seulement le mollet.',
          stop: 'Une douleur au talon au-dessus de 6 sur 10, ou plus forte le lendemain matin',
          image: 'Exercice\u00A0: montées sur pointes avec serviette',
          media: 'heel_raise_towel',
          caption: 'Montées sur pointes avec serviette\u00A0: trois secondes pour monter, deux en haut, trois pour descendre',
          alt: 'Une silhouette monte sur la pointe des pieds sur une marche avec une serviette roulée, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Quels exercices pour la tendinite d’Achille\u00A0?',
      keyFact: 'Dans une étude pilote sur 27\u00A0personnes avec une douleur d’Achille d’insertion, des descentes du talon au niveau du sol ont donné de bons résultats dans 67\u00A0% des cas (Jonsson et coll., 2008).',
      paragraphs: [
        '**Pour l’Achille, la mise en charge passe en premier, pas les étirements.** La recommandation de 2024 donne la note **A** aux exercices de mise en charge du tendon\u00A0: montées sur pointes, maintiens et descentes lentes qui font travailler le tendon (Chimenti et coll., 2024). Elle donne une note plus basse, **C**, aux étirements du mollet, et seulement pour les personnes dont la cheville se plie mal (Chimenti et coll., 2024).',
        'Un peu de douleur est permise. Dans un essai sur 38\u00A0personnes, une douleur allant jusqu’à environ 5 sur 10 pendant la mise en charge était acceptable tant qu’elle se calmait le lendemain matin et n’augmentait pas d’une semaine à l’autre, et ce groupe s’en sortait aussi bien à douze mois que le groupe qui s’était d’abord mis au repos (Silbernagel et coll., 2007).',
        'Si la douleur est juste à l’os du talon (insertion), faites toutes les montées sur pointes et descentes du talon au niveau du sol, et allez-y doucement avec les étirements du mollet. Laisser descendre le talon sous la marche comprime le tendon contre l’os. Dans une étude pilote sur 27\u00A0personnes, les descentes du talon au niveau du sol ont donné de bons résultats dans 67\u00A0% des cas (Jonsson et coll., 2008). Plus de détails dans [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/).',
      ],
      exercises: [
        {
          name: 'Maintien sur pointes',
          evidence: { level: 'moderate', why: 'La recommandation de 2024 sur l’Achille inclut la mise en charge isométrique. Aucun essai randomisé n’a testé les maintiens seuls comme programme complet.' },
          dose: '3\u00A0maintiens de 20\u00A0secondes, deux pieds',
          often: 'Jours de renforcement, ou la plupart des jours tant que le tendon est irritable',
          feel: 'Les mollets travaillent pour rester immobiles',
          how: 'Montez sur la pointe des deux pieds, puis restez immobile en haut. Ne redescendez pas. Tenir en haut charge le tendon sans rebond.',
          stop: 'Une douleur au-dessus de 5 sur 10 qui ne s’est pas calmée le lendemain matin',
          image: 'Exercice\u00A0: maintien sur pointes',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez immobile en haut',
          alt: 'Une silhouette se tient sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Descentes excentriques du talon (genou tendu)',
          evidence: { level: 'strong', why: 'Basé sur le protocole d’Alfredson pour la douleur du corps du tendon (3 x 15, deux fois par jour)\u00A0; Walkito commence à 3 x 10. La recommandation de 2024 donne la note A à l’exercice.' },
          dose: '3\u00A0séries de 10, chaque jambe',
          often: 'Jours de renforcement',
          feel: 'Un effort intense dans le mollet pendant la descente, pas un étirement en bas',
          how: 'Tenez-vous au bord d’une marche. Montez sur les deux pieds, passez sur la jambe douloureuse et descendez lentement en trois secondes. Remontez avec les deux pieds. Pour une douleur juste à l’os du talon, faites l’exercice au sol et ne laissez pas le talon descendre sous la marche.',
          stop: 'Une douleur au-dessus de 5 sur 10 qui ne s’est pas calmée le lendemain matin, ou qui s’aggrave d’une semaine à l’autre',
          image: 'Exercice\u00A0: descentes excentriques du talon',
          media: 'heel_drop_straight',
          caption: 'Descente excentrique du talon\u00A0: montez sur les deux pieds, descendez lentement sur un seul',
          alt: 'Une silhouette sur une marche descend un talon sous le bord, genou tendu, le mollet et le tendon d’Achille mis en évidence',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Peut-on avoir une fasciite plantaire et une tendinite d’Achille en même temps\u00A0?',
      keyFact: 'Sur 52\u00A0IRM, le fascia plantaire mesurait 3,43\u00A0mm d’épaisseur chez les personnes avec des modifications de l’Achille, contre 2,09\u00A0mm chez les autres (Stecco et coll., 2013).',
      paragraphs: [
        '**Oui, et les deux sont liées.** Dans une étude de 52\u00A0IRM de personnes souffrant du pied ou de la cheville, les 27 qui avaient des modifications de l’Achille avaient un fascia plantaire plus épais, 3,43\u00A0mm en moyenne contre 2,09\u00A0mm. Chez 5 des 27, le fascia plantaire dépassait 4,5\u00A0mm, un seuil courant pour la fasciite plantaire. Aucune des 25 autres personnes ne dépassait 4\u00A0mm (Stecco et coll., 2013).',
        'La même étude a montré que le fascia plantaire est relié à la gaine qui entoure l’Achille par l’enveloppe de l’os du talon. Une étude sur des pieds de donneurs anatomiques a montré que tirer sur l’Achille met le fascia plantaire en tension, et davantage quand les orteils sont relevés (Carlson et coll., 2000). Un mollet raide ou surchargé peut donc tirer sur les deux.',
        'Aucune étude n’a compté combien de personnes ont les deux à la fois, il n’existe donc pas de chiffre fiable. Aucune recommandation ne traite le cas où l’on a les deux. Une approche compatible avec les deux recommandations\u00A0: un renforcement du mollet adapté au tendon, plus l’étirement du fascia plantaire, qui travaille la voûte et non l’Achille. Gardez les descentes du talon au niveau du sol si l’arrière de l’os du talon fait mal.',
      ],
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass, CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Quelles autres causes de douleur au talon ressemblent à ces deux-là\u00A0?',
      paragraphs: [
        'Plusieurs problèmes se situent tout près et peuvent donner des sensations proches (Choo et coll., 2020\u00A0; Tu, 2018)\u00A0:',
        {
          list: [
            'Une bosse osseuse à l’arrière du talon avec une zone douloureuse et gonflée au niveau du bord de la chaussure\u00A0: [maladie de Haglund](/fr/maladie-de-haglund/) ou bursite rétrocalcanéenne, souvent associée à une douleur d’Achille d’insertion.',
            'Une épine calcanéenne à la radio\u00A0: fréquente, et en général pas la cause de la douleur. Voir [fasciite plantaire ou épine calcanéenne](/fr/epine-calcaneenne-exercices/).',
            'Une douleur profonde, comme une contusion, au milieu du coussinet du talon, pire sur sol dur\u00A0: [syndrome du coussinet graisseux du talon](/fr/syndrome-coussinet-graisseux-talon/).',
            'Une douleur des deux côtés du talon quand on le serre, après une hausse brutale de la marche ou de la course\u00A0: possible fracture de fatigue, qui relève d’un professionnel de santé.',
            'Brûlure, picotements ou engourdissement\u00A0: peut-être un nerf comprimé.',
          ],
        },
      ],
      cites: [CITE.chooRearfoot, CITE.tuHeelPain],
    },
    {
      h2: 'Combien de temps faut-il pour aller mieux dans chaque cas\u00A0?',
      paragraphs: [
        'Pour la fasciite plantaire, environ 90\u00A0% des personnes vont mieux avec un traitement sans chirurgie, même si cela prend souvent des mois (Latt et coll., 2020). La page [combien de temps dure une fasciite plantaire](/fr/combien-de-temps-dure-fasciite-plantaire/) donne le détail.',
        'Pour la tendinopathie d’Achille, les principaux essais de mise en charge duraient environ trois mois et suivaient les participants jusqu’à douze mois. La recommandation de 2024 indique que la fonction peut commencer à s’améliorer en 2\u00A0semaines, mais qu’une récupération plus complète prend plus de temps (Chimenti et coll., 2024). La douleur d’insertion répondait moins bien aux descentes classiques du talon sous la marche\u00A0: seulement 32\u00A0% de bons résultats dans une étude antérieure, d’où l’usage de descentes au niveau du sol (Jonsson et coll., 2008).',
        'Aucune étude n’a comparé directement le temps de récupération des deux.',
      ],
      cites: [CITE.latt, CITE.achillesGuideline, CITE.jonsson],
    },
  ],
  faq: [
    {
      q: 'Comment savoir si ma douleur au talon est une fasciite plantaire ou une tendinite d’Achille\u00A0?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Commencez par l’endroit où ça fait mal. La fasciite plantaire fait mal sous le talon, vers le côté interne, et surtout aux premiers pas après le repos. La tendinite d’Achille fait mal à l’arrière du talon ou dans le tendon de 2 à 6\u00A0centimètres au-dessus, et s’aggrave avec la poussée, la course et les montées. Un professionnel de santé peut confirmer de quoi il s’agit.',
    },
    {
      q: 'La fasciite plantaire peut-elle causer une douleur d’Achille\u00A0?',
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass],
      a: 'Les deux sont liées, mais aucune étude ne montre que l’une cause l’autre. Sur 52\u00A0IRM, les personnes avec des modifications de l’Achille avaient un fascia plantaire plus épais, 3,43\u00A0mm contre 2,09\u00A0mm. Une étude sur des pieds de donneurs anatomiques a montré que la tension dans l’Achille met le fascia plantaire sous contrainte. Un mollet raide et surchargé peut charger les deux.',
    },
    {
      q: 'La tendinite d’Achille est-elle pire le matin, comme la fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'C’est possible. Les deux peuvent être raides et douloureuses aux premiers pas de la journée, c’est pourquoi on les confond. La fasciite plantaire est une douleur vive sous le talon qui s’atténue en marchant. La douleur d’Achille se situe à l’arrière de la cheville et augmente en général avec la course, les sauts, les montées et les escaliers.',
    },
    {
      q: 'Faut-il étirer le mollet en cas de tendinite d’Achille\u00A0?',
      cites: [CITE.achillesGuideline, CITE.jonsson],
      a: 'C’est facultatif. La recommandation de 2024 sur l’Achille met en premier les exercices de mise en charge du tendon, avec la note A, et donne la note C aux étirements du mollet, pour les personnes dont la cheville se plie mal. Si la douleur est juste à l’os du talon, les étirements profonds du mollet et les descentes du talon sous la marche compriment le tendon contre l’os\u00A0: restez doux et au niveau du sol.',
    },
    {
      q: 'Les exercices pour la fasciite plantaire et la tendinite d’Achille sont-ils les mêmes\u00A0?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Ils se recoupent mais ne sont pas les mêmes. Pour la fasciite plantaire, on commence par les étirements du fascia plantaire et du mollet, note A, plus les montées sur pointes, note B. Pour la tendinite d’Achille, on commence par la mise en charge\u00A0: maintiens sur pointes, montées sur pointes et descentes lentes du talon, note A. Le renforcement du mollet convient aux deux.',
    },
    {
      q: 'Peut-on avoir une fasciite plantaire et une tendinite d’Achille ensemble\u00A0?',
      cites: [CITE.steccoPfAchilles],
      a: 'Oui. Dans une étude IRM sur 52\u00A0personnes souffrant du pied ou de la cheville, 5 des 27 qui avaient des modifications de l’Achille avaient aussi un fascia plantaire assez épais pour atteindre un seuil courant de fasciite plantaire. Aucune étude n’a compté à quelle fréquence les deux surviennent ensemble dans la population générale.',
    },
    {
      q: 'Une douleur à l’arrière du talon, est-ce une fasciite plantaire\u00A0?',
      cites: [CITE.guideline, CITE.chooRearfoot],
      a: 'En général, non. La fasciite plantaire fait mal sous le talon. Une douleur à l’arrière du talon est plus souvent une tendinopathie d’Achille, une bursite rétrocalcanéenne ou une maladie de Haglund, une bosse osseuse là où le tendon s’attache. Un claquement soudain à l’arrière du talon doit être vu par un professionnel de santé le jour même.',
    },
    {
      q: 'Une épine calcanéenne signifie-t-elle fasciite plantaire ou tendinite d’Achille\u00A0?',
      cites: [CITE.chooRearfoot],
      a: 'Ni l’une ni l’autre à elle seule. Une épine sous le talon se trouve près du fascia plantaire, et une épine à l’arrière là où l’Achille s’attache, mais les épines sont fréquentes chez des personnes sans aucune douleur. C’est l’examen, et pas la radio seule, qui détermine la cause de la douleur.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez senti un claquement ou un craquement soudain à l’arrière de la cheville, ou l’impression d’avoir reçu un coup de pied à cet endroit, et la poussée est maintenant difficile',
      'vous ne pouvez pas monter sur la pointe du pied du côté douloureux, ou vous sentez un creux dans le tendon',
      'vous prenez ou avez pris récemment un antibiotique de la famille des fluoroquinolones, comme la ciprofloxacine, et avez une nouvelle douleur au tendon',
      'le talon est rouge, chaud et gonflé, ou vous avez de la fièvre',
      'le talon fait mal des deux côtés quand on le serre, ou fait mal la nuit ou au repos',
      'vous sentez une brûlure, des picotements ou un engourdissement dans le talon ou la plante du pied',
      'la douleur a commencé après une chute ou une blessure, ou vous ne pouvez pas mettre de poids sur le pied',
      'la douleur ne cesse de s’aggraver au fil des semaines malgré des exercices réguliers',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied. Vous lui indiquez où vous avez mal, sous le talon ou à l’arrière, et elle construit le plan à partir de votre réponse\u00A0: étirements du fascia plantaire et montées sur pointes avec serviette pour la douleur au talon, mise en charge du mollet, des maintiens jusqu’aux descentes lentes du talon, pour la douleur d’Achille.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez votre douleur au talon du matin, et le plan s’y adapte. Walkito ne pose pas de diagnostic\u00A0: si vous ne savez pas laquelle des deux vous avez, faites d’abord vérifier par un professionnel de santé.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['achilles', 'hubPlantarFasciitis', 'pfVsHeelSpur'],
  crumb: 'Fasciite plantaire ou Achille',
  campaign: 'guide-plantar-fasciitis-vs-achilles-tendonitis-fr',
};
