import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Maladie de Haglund (FR) ───────────────────────────────────────────
 *
 * Translated from `articles/haglunds.ts`, written around the French queries
 * «maladie de Haglund», «déformation de Haglund», «bosse derrière le talon»,
 * «exostose talon». French (France) with «vous». Figures, doses, grades and
 * qualifiers are identical to the English page. No new citations.
 */

export const HAGLUNDS_FR: Guide = {
  lang: 'fr',
  page: 'haglunds',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Maladie de Haglund\u00A0: bosse derrière le talon',
  description:
    'Maladie de Haglund\u00A0: bosse osseuse derrière le talon, bursite et douleur d’Achille. Causes, exercices et quand la chirurgie est discutée.',
  h1: 'Maladie de Haglund\u00A0: la bosse derrière le talon, ses causes et ce qui aide',
  lede:
    'La maladie de Haglund, ou déformation de Haglund, est une saillie osseuse sur le haut de l’arrière de l’os du talon. Elle se trouve juste là où le tendon d’Achille s’attache, et quand les chaussures appuient dessus, la bourse située entre l’os et le tendon s’irrite. Résultat\u00A0: une douleur à l’arrière du talon, un gonflement et parfois une bosse visible. La prise en charge conservatrice est l’approche de première intention, mais les preuves derrière elle relèvent surtout de l’avis d’experts, pas d’essais.',
  intro: [
    'Cette page présente l’anatomie, le lien avec la tendinopathie d’Achille d’insertion et la bursite rétrocalcanéenne, les mesures conservatrices existantes et le moment où la chirurgie entre dans la discussion. Si votre douleur se situe plus haut sur le tendon plutôt qu’à l’os, la page [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/) est un meilleur point de départ. Si votre douleur est sous le talon, voir [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) ou [douleur au talon au réveil](/fr/douleur-talon-au-reveil/).',
  ],
  takeaways: [
    'La déformation de Haglund est une saillie osseuse anormale de la partie postéro-supérieure du calcanéum, décrite pour la première fois par Patrick Haglund en 1927. Elle peut entraîner une bursite rétrocalcanéenne et une tendinopathie d’Achille d’insertion (Yuen et coll., 2022).',
    'La prise en charge conservatrice comprend l’adaptation des chaussures (éviter les contreforts rigides), les talonnettes, les étirements et le renforcement du mollet. Aucun essai randomisé n’a testé le traitement conservateur pour la maladie de Haglund en particulier (Choo et coll., 2020).',
    'Pour une douleur d’Achille d’insertion associée à une maladie de Haglund, les descentes excentriques du talon doivent rester au niveau du sol. Une flexion dorsale profonde comprime le tendon contre la bosse (Jonsson et coll., 2008).',
    'La chirurgie est envisagée après au moins six mois d’échec de la prise en charge conservatrice. Une revue systématique de 2022 a trouvé que les approches ouvertes comme endoscopiques amélioraient les scores de fonction, avec une récupération plus courte pour les techniques endoscopiques (Yuen et coll., 2022).',
    'La recommandation de 2024 sur la tendinopathie d’Achille note l’exercice **A** pour la tendinopathie du corps du tendon, mais les cas d’insertion, dont la maladie de Haglund, demandent des adaptations pour éviter une flexion dorsale provocante (Chimenti et coll., 2024).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce que la maladie de Haglund\u00A0?',
      figure: { id: 'haglund', caption: 'La déformation de Haglund est une bosse osseuse au coin supérieur arrière de l’os du talon. La bourse entre elle et le tendon d’Achille peut se retrouver pincée.', alt: 'Vue de côté d’une cheville et d’un talon montrant le tendon d’Achille, une bosse osseuse au coin supérieur arrière de l’os du talon et une petite poche de liquide entre les deux.' },
      paragraphs: [
        'La déformation de Haglund est une bosse osseuse sur la partie postéro-supérieure du calcanéum, le coin supérieur arrière de l’os du talon. Entre cette bosse et le tendon d’Achille se trouve une petite poche remplie de liquide appelée bourse rétrocalcanéenne. Quand la bosse est saillante, la bourse est pincée entre l’os et le tendon, ce qui provoque une inflammation (bursite rétrocalcanéenne) et une douleur à l’arrière du talon.',
        'La bosse elle-même est une variation de structure. Certaines personnes ont un calcanéum plus saillant que d’autres. Elle devient un problème quand la pression de la chaussure, la charge du tendon, ou les deux, irritent la bourse et l’insertion du tendon. L’association de la saillie osseuse, de la bursite et de la tendinopathie d’Achille d’insertion est parfois appelée syndrome de Haglund.',
        'En anglais, on parle de «\u00A0pump bump\u00A0», à cause du lien avec les chaussures à contrefort rigide, comme les escarpins ou les chaussures de ville, qui appuient directement sur la saillie. Mais elle n’est pas seulement causée par les chaussures. La mécanique du pied, la raideur du mollet et la charge du tendon jouent toutes un rôle.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Quel lien entre la maladie de Haglund et la tendinopathie d’Achille d’insertion\u00A0?',
      paragraphs: [
        'La déformation de Haglund et la tendinopathie d’Achille d’insertion apparaissent souvent ensemble, mais **ce n’est pas le même problème.** La tendinopathie d’insertion est une douleur à l’endroit où le tendon d’Achille s’attache à l’os du talon, en général due à une surcharge. La déformation de Haglund est une forme osseuse. La bosse peut irriter le tendon par l’arrière, et l’insertion du tendon peut subir la même compression que celle qui enflamme la bourse.',
        'Le lien pratique\u00A0: si vous avez une bosse de Haglund et une douleur à l’arrière du talon, la douleur peut venir de la bourse, de l’insertion du tendon, ou des deux. Un professionnel de santé peut faire la différence en cherchant où la sensibilité est la plus forte et si l’étirement ou la mise en charge reproduit la douleur.',
        'La recommandation de 2024 sur la tendinopathie d’Achille sépare nettement l’atteinte du corps du tendon et l’atteinte d’insertion. Pour les problèmes d’insertion, dont les cas associés à une maladie de Haglund, le protocole classique de descentes excentriques du talon doit être adapté. Une flexion dorsale profonde, où l’on laisse le talon descendre sous le bord de la marche, comprime le tendon contre l’os et peut réveiller les symptômes.',
      ],
      cites: [CITE.achillesGuideline, CITE.jonsson],
    },
    {
      h2: 'Qu’est-ce que la bursite rétrocalcanéenne\u00A0?',
      paragraphs: [
        'La bourse rétrocalcanéenne se trouve dans l’espace entre le calcanéum et le tendon d’Achille. Son rôle est de réduire les frottements. Quand la bosse de Haglund est saillante, la bourse est comprimée pendant la flexion dorsale (quand la cheville plie pour remonter le pied). Résultat\u00A0: un gonflement, une douleur et parfois une rougeur à l’arrière du talon.',
        'La bursite rétrocalcanéenne peut survenir sans déformation de Haglund, par exemple après une hausse brusque de la course ou du travail en montée. Mais la saillie osseuse la rend plus probable. Les chaussures à contrefort rigide qui appuient sur la bosse sont un irritant mécanique direct.',
        'La douleur de la bursite rétrocalcanéenne se situe à l’arrière du talon, en profondeur entre le tendon et l’os. Elle diffère de la bursite superficielle (un gonflement mou et sensible sous la peau) et de la douleur à l’intérieur du talon de la fasciite plantaire.',
      ],
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
    },
    {
      h2: 'Quelles options conservatrices pour la maladie de Haglund\u00A0?',
      paragraphs: [
        'Une revue narrative de 2020 cite les premières mesures conservatrices\u00A0:',
        {
          list: [
            '**Adapter les chaussures\u00A0:** éviter les contreforts rigides, porter des chaussures ouvertes à l’arrière ou rembourrer la zone du talon.',
            '**Des talonnettes\u00A0:** pour réduire la tension sur le tendon d’Achille.',
            '**L’étirement\u00A0:** du gastrocnémien et du soléaire.',
            '**Le renforcement\u00A0:** du mollet.',
            '**L’adaptation de l’activité.**',
          ],
        },
        'Aucun essai contrôlé randomisé n’a testé l’une de ces mesures spécifiquement pour la déformation de Haglund. Les preuves reposent sur l’avis d’experts et des séries de cas. La revue chirurgicale de 2022 a noté que la plupart des auteurs conseillent au moins six mois de traitement conservateur avant d’envisager la chirurgie.',
        '**Le changement le plus immédiat est souvent la chaussure.** Si un contrefort rigide appuie sur la bosse, supprimer cette pression peut réduire vite les symptômes. Des chaussures ouvertes à l’arrière, des chaussures au contrefort souple, ou un rembourrage placé dans la chaussure autour de la bosse (pas dessus) sont des options pratiques.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
    {
      h2: 'Quels exercices pour la maladie de Haglund\u00A0?',
      keyFact: 'Dans une étude pilote sur 27\u00A0personnes avec une douleur d’Achille d’insertion, une charge excentrique au niveau du sol, sans flexion dorsale profonde, a donné de bons résultats dans 67\u00A0% des cas (Jonsson et coll., 2008).',
      paragraphs: [
        'L’exercice a deux buts dans la maladie de Haglund\u00A0: réduire la raideur du mollet qui tire sur le talon, et développer la force du mollet qui aide le tendon à tolérer la charge. Les deux sont empruntés à la littérature sur la tendinopathie d’Achille. Aucun essai ne les a testés pour la maladie de Haglund en particulier.',
        'L’adaptation clé\u00A0: uniquement au niveau du sol. Pour une douleur d’Achille d’insertion, une étude pilote de 2008 sur 27\u00A0personnes a testé une charge excentrique sans flexion dorsale au-delà de la position neutre, c’est-à-dire que le talon ne descendait jamais sous le niveau du sol. De bons résultats ont été rapportés dans 67\u00A0% des cas. Les descentes classiques au bord d’une marche, qui laissent le talon passer sous le bord et poussent la cheville en flexion dorsale profonde, peuvent comprimer le tendon contre la bosse et aggraver les symptômes.',
        'La page [descentes excentriques du talon](/fr/exercices/descentes-excentriques-talon/) détaille le mouvement. Pour la maladie de Haglund et la douleur d’insertion, faites chaque montée et chaque descente au niveau du sol. Ne descendez pas sous le bord d’une marche. Les étirements du mollet doivent aussi rester doux, et s’arrêter avant qu’une flexion dorsale profonde ne réveille l’arrière du talon.',
      ],
      exercises: [
        {
          name: 'Descentes excentriques du talon (au niveau du sol)',
          evidence: { level: 'early', why: 'Jonsson 2008 était une petite étude pilote sans groupe témoin (27\u00A0patients, aucun groupe de comparaison)\u00A0: une charge excentrique uniquement au niveau du sol, sans flexion dorsale au-delà de la position neutre, a donné de bons résultats chez 67\u00A0% des patients avec une douleur d’Achille d’insertion. Aucun essai contrôlé ne l’a testée pour la maladie de Haglund, donc les preuves restent préliminaires plutôt que modérées.' },
          dose: 'Walkito commence à 3 x 10, chaque jambe. Protocole de Jonsson\u00A0: 3 x 15, deux fois par jour, pendant trois mois',
          how: 'Tenez-vous sur un sol plat (pas au bord d’une marche). Montez sur les deux pieds, passez sur la jambe douloureuse, redescendez lentement en trois secondes. Le talon revient au niveau du sol, pas en dessous. Remontez sur les deux pieds. Genou tendu d’abord\u00A0; ajoutez des séries genou plié une fois les séries genou tendu bien maîtrisées.',
          often: 'Jours de renforcement. Protocole de Jonsson\u00A0: deux fois par jour.',
          feel: 'Du travail dans le mollet pendant la descente. Une petite gêne au tendon est acceptable si elle se calme avant le lendemain matin.',
          stop: 'Une douleur à l’arrière du talon au-dessus de 5/10, ou une douleur qui ne se calme pas pendant la nuit',
          media: 'heel_drop_straight',
          caption: 'Descente excentrique au niveau du sol\u00A0: montez sur les deux pieds, redescendez lentement sur un seul, le talon reste au niveau du sol',
          alt: 'Une personne qui redescend lentement un talon de la pointe du pied jusqu’au niveau du sol, le tendon d’Achille mis en évidence',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'moderate', why: 'Soutenues par la recommandation dans la progression de mise en charge de l’Achille. Pas testées directement pour la maladie de Haglund.' },
          dose: '3\u00A0séries de 10, deux pieds',
          how: 'Debout sur les deux pieds sur un sol plat. Montez bien droit au-dessus des gros orteils, redescendez lentement en trois secondes. Les deux pieds se partagent la charge. C’est le point de départ à faible charge avant le travail excentrique sur une jambe.',
          often: 'La plupart des jours de la semaine, tant que ce niveau reste exigeant',
          feel: 'Les mollets qui travaillent ensemble, une légère traction au tendon',
          stop: 'Une douleur à l’arrière du talon au-dessus de 5/10',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds, au niveau du sol',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
        {
          name: 'Étirement du mollet (genou tendu, en douceur)',
          evidence: { level: 'early', why: 'Fait partie de la prise en charge conservatrice de la maladie de Haglund selon l’avis d’experts. Aucun essai randomisé pour ce problème. Évitez la flexion dorsale profonde.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Mains contre un mur. Reculez un pied, jambe arrière tendue, talon au sol. Penchez-vous en avant jusqu’à sentir un étirement dans le haut du mollet. Arrêtez-vous avant que l’étirement n’atteigne l’arrière de l’os du talon. Ne forcez pas la cheville en flexion profonde.',
          often: 'Chaque jour, après le renforcement',
          feel: 'Un étirement dans le mollet, pas une douleur à l’attache du tendon d’Achille',
          stop: 'Toute réaction à l’arrière de l’os du talon',
          media: 'calf_stretch_straight',
          caption: 'Étirement du mollet\u00A0: restez en douceur, arrêtez-vous avant de réveiller l’arrière du talon',
          alt: 'Une personne appuyée contre un mur, une jambe tendue derrière, les muscles du mollet mis en évidence',
        },
        {
          name: 'Étirement du soléaire (genou plié, en douceur)',
          evidence: { level: 'early', why: 'Vise le muscle profond du mollet. Même précaution\u00A0: évitez la flexion dorsale profonde en cas de douleur d’insertion.' },
          dose: '2\u00A0maintiens de 30\u00A0secondes, chaque jambe',
          how: 'Même position contre le mur, pliez le genou arrière jusqu’à ce que l’étirement descende. Arrêtez-vous avant le point où l’arrière du talon est comprimé. Le soléaire ne se relâche que genou plié.',
          often: 'Chaque jour, après l’étirement du mollet',
          feel: 'Un étirement dans le bas du mollet, pas à l’os du talon',
          stop: 'Une douleur à l’attache du tendon d’Achille ou sur la bosse',
          media: 'calf_stretch_bent',
          caption: 'Étirement du soléaire\u00A0: pliez le genou arrière, restez en douceur au talon',
          alt: 'Une personne en fente, genoux pliés, le bas du mollet mis en évidence',
        },
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline, CITE.chooRearfoot],
    },
    {
      h2: 'Quelle douleur est acceptable pendant les exercices\u00A0?',
      keyFact: 'Le modèle de surveillance de la douleur autorise une douleur jusqu’à environ 5 sur 10 pendant la mise en charge, à condition qu’elle revienne à son niveau habituel avant le lendemain matin et ne s’aggrave pas d’une semaine à l’autre (Silbernagel et coll., 2007).',
      paragraphs: [
        'Le modèle de surveillance de la douleur de Silbernagel 2007 pour la tendinopathie d’Achille autorisait une douleur jusqu’à environ 5 sur 10 pendant la mise en charge, à condition qu’elle revienne à son niveau habituel avant le lendemain matin et ne s’aggrave pas d’une semaine à l’autre. Ce modèle a été testé pour la douleur du corps du tendon d’Achille, pas spécifiquement pour la maladie de Haglund ou les cas d’insertion, mais c’est le seuil de douleur le plus cité dans la littérature sur l’Achille.',
        'Pour les problèmes d’insertion associés à une maladie de Haglund, soyez plus prudent. La bosse ajoute un élément mécanique que la tendinopathie du corps du tendon n’a pas\u00A0: la compression de la bourse et du tendon contre l’os. Si les exercices provoquent une douleur vive à l’arrière du talon qui ne se calme pas vite, réduisez la charge ou passez à des maintiens isométriques avant de réessayer le travail excentrique.',
      ],
      cites: [CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Quand la chirurgie est-elle envisagée pour la maladie de Haglund\u00A0?',
      keyFact: 'Une revue systématique de 2022 portant sur 20\u00A0études a trouvé que la chirurgie ouverte comme endoscopique améliorait les scores de fonction AOFAS, avec une récupération plus courte pour les techniques endoscopiques (Yuen et coll., 2022).',
      paragraphs: [
        'La chirurgie est discutée quand au moins six mois de prise en charge conservatrice n’ont pas apporté de soulagement suffisant. La revue systématique de 2022 de Yuen et coll. a inclus 20\u00A0études et a trouvé que les techniques ouvertes comme endoscopiques amélioraient les scores AOFAS (American Orthopaedic Foot and Ankle Society). Les approches endoscopiques montraient des temps de récupération plus courts.',
        'L’opération consiste en général à\u00A0:',
        {
          list: [
            'Retirer la saillie osseuse (calcanéoplastie).',
            'Enlever la bourse enflammée.',
            'Dans certains cas, nettoyer ou réinsérer le tendon d’Achille.',
          ],
        },
        'Les complications peuvent comprendre des problèmes de cicatrisation, une lésion nerveuse et un affaiblissement du tendon. La décision se prend entre vous et votre chirurgien.',
        'Cette page ne conseille ni ne déconseille la chirurgie. Les mesures conservatrices ci-dessus sont le point de départ de la plupart des gens, et beaucoup y répondent assez bien pour éviter une opération. Si six mois d’adaptation des chaussures, d’exercices et de changements d’activité n’ont pas aidé, un spécialiste du pied et de la cheville peut discuter des options chirurgicales.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Les chaussures peuvent-elles causer la maladie de Haglund\u00A0?',
      paragraphs: [
        'Les chaussures ne créent pas la saillie osseuse. La forme du calcanéum est en partie génétique. Mais des chaussures au contrefort rigide et inflexible peuvent irriter une bosse qui serait sinon indolore. C’est l’origine du nom anglais «\u00A0pump bump\u00A0», d’après l’arrière rigide des escarpins.',
        'Les chaussures à éviter\u00A0: tout ce qui a un contrefort raide et étroit qui appuie sur l’arrière du talon. Les chaussures à rechercher\u00A0: un col de talon souple ou rembourré, un arrière légèrement ouvert ou souple, et assez de place pour que le contrefort ne s’enfonce pas. Des talonnettes dans la chaussure peuvent aussi éloigner légèrement le tendon d’Achille de la bosse.',
        'L’adaptation des chaussures est la mesure la plus immédiatement applicable et la plus régulièrement conseillée dans la littérature fondée sur l’avis d’experts. **Si vous pouvez supprimer la pression, vous pouvez souvent réduire la douleur.**',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
  ],
  faq: [
    {
      q: 'C’est quoi une bosse de Haglund\u00A0?',
      cites: [CITE.yuenHaglund],
      a: 'Une bosse de Haglund, appelée «\u00A0pump bump\u00A0» en anglais, est le nom courant de la déformation de Haglund, une saillie osseuse sur le haut de l’arrière de l’os du talon. Le nom anglais vient des chaussures à talon rigide (les escarpins) qui appuient sur la bosse et irritent le tissu entre l’os et le tendon d’Achille, ce qui provoque douleur et gonflement.',
    },
    {
      q: 'La maladie de Haglund, c’est la même chose qu’une tendinite d’Achille\u00A0?',
      cites: [CITE.achillesGuideline, CITE.yuenHaglund],
      a: 'Non. La déformation de Haglund est une saillie sur l’os du talon. La tendinite d’Achille est une douleur dans le tendon lui-même, en général due à une surcharge. Elles apparaissent souvent ensemble, car la bosse peut irriter le tendon là où il s’attache. La recommandation de 2024 traite la tendinopathie d’Achille d’insertion, qui peut impliquer une maladie de Haglund, à part de l’atteinte du corps du tendon.',
    },
    {
      q: 'La maladie de Haglund peut-elle partir sans opération\u00A0?',
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
      a: 'La bosse osseuse ne disparaît pas sans chirurgie. Mais la douleur, si. Beaucoup de gens gèrent leurs symptômes avec un changement de chaussures, des talonnettes, l’étirement et le renforcement du mollet, et l’adaptation de l’activité. La chirurgie est discutée quand au moins six mois de prise en charge conservatrice n’ont pas apporté de soulagement.',
    },
    {
      q: 'Quels exercices éviter avec une maladie de Haglund\u00A0?',
      cites: [CITE.jonsson],
      a: 'Évitez les exercices qui poussent la cheville en flexion dorsale profonde, c’est-à-dire le pied qui remonte vers le tibia au-delà de la position neutre. Les descentes excentriques classiques au bord d’une marche, où le talon passe sous la marche, compriment le tendon contre la bosse. Faites les montées et les descentes uniquement au niveau du sol. Évitez les étirements du mollet trop appuyés qui réveillent l’arrière du talon.',
    },
    {
      q: 'Faut-il opérer une maladie de Haglund\u00A0?',
      cites: [CITE.yuenHaglund],
      a: 'Pas toujours. Le traitement conservateur est l’approche de première intention. Une revue systématique de 2022 a noté que la plupart des auteurs conseillent au moins six mois de prise en charge conservatrice avant d’envisager la chirurgie. L’opération consiste à retirer la bosse osseuse, la bourse enflammée et parfois à nettoyer le tendon. Les approches ouvertes comme endoscopiques améliorent les résultats.',
    },
    {
      q: 'Quelles chaussures pour une maladie de Haglund\u00A0?',
      cites: [CITE.chooRearfoot],
      a: 'Des chaussures au contrefort souple, rembourré ou flexible. Évitez les chaussures à arrière rigide qui appuient sur la bosse. Les chaussures ouvertes à l’arrière, les sabots ou les chaussures au col de talon échancré peuvent réduire la pression directe. Des talonnettes dans la chaussure peuvent éloigner légèrement le tendon de la saillie.',
    },
    {
      q: 'C’est quoi une bursite rétrocalcanéenne\u00A0?',
      cites: [CITE.yuenHaglund],
      a: 'La bursite rétrocalcanéenne est une inflammation de la poche remplie de liquide (bourse) située entre le tendon d’Achille et l’os du talon. La déformation de Haglund la rend plus probable, car l’os saillant pince la bourse pendant les mouvements de la cheville. La douleur est profonde, à l’arrière du talon, et souvent aggravée par les chaussures et la flexion dorsale.',
    },
    {
      q: 'Que se passe-t-il si on ne soigne pas une maladie de Haglund\u00A0?',
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
      a: 'Sans changement, la bosse ne diminue pas et le frottement de la chaussure qui l’a causée continue en général, donc la douleur et la bursite rétrocalcanéenne peuvent continuer à augmenter. Une irritation de longue durée augmente aussi le risque de tendinopathie d’Achille d’insertion. La croissance osseuse ne régresse pas avec les soins conservateurs, mais les symptômes se calment souvent une fois les chaussures et la charge modifiées.',
    },
    {
      q: 'La marche est-elle mauvaise pour la maladie de Haglund\u00A0?',
      cites: [CITE.chooRearfoot],
      a: 'La marche en elle-même n’est pas nocive, et rester actif ne pose en général pas de problème. Ce qui compte, c’est la chaussure\u00A0: un contrefort rigide ou bas qui frotte sur la bosse peut aggraver la douleur et la bursite à chaque pas. Passer à des chaussures au talon souple ou ouvert est en général plus utile qu’un repos complet.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez ressenti un claquement soudain, ou l’impression d’avoir reçu un coup de pied à l’arrière de la jambe. Cela peut signaler une rupture du tendon d’Achille',
      'il y a un gonflement, une rougeur ou une chaleur importants à l’arrière du talon, surtout avec de la fièvre',
      'la douleur s’aggrave régulièrement malgré le changement de chaussures et les mesures conservatrices depuis plusieurs semaines',
      'vous ne pouvez pas pousser sur la pointe des pieds ou marcher normalement',
      'la douleur est présente au repos ou vous réveille la nuit, ce qui peut évoquer une fracture de fatigue ou un autre problème qu’une bursite',
      'un engourdissement ou des fourmillements accompagnent la douleur au talon',
      'vous avez pris récemment un antibiotique de la famille des fluoroquinolones (comme la ciprofloxacine) et avez une douleur de tendon nouvelle',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'La progression de mise en charge du mollet de Walkito va des montées sur pointes assis aux montées sur deux pieds, puis à un maintien, aux descentes excentriques du talon et au-delà. Pour la maladie de Haglund et la douleur d’Achille d’insertion, chaque étape reste au niveau du sol au lieu de descendre sous le bord d’une marche. Walkito vous fait passer au niveau supérieur une fois que deux séances à un niveau vous ont paru faciles, et non selon un calendrier fixe.',
    more: [
      'Les séances durent 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un test vérifie l’endurance du mollet et l’équilibre. Walkito est un programme d’exercices. Il ne pose pas de diagnostic. Si vous avez une bosse visible à l’arrière du talon et ne savez pas ce qui cause la douleur, faites-la examiner par un professionnel de santé avant de commencer la mise en charge.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Maladie de Haglund',
  campaign: 'guide-haglunds-fr',
};
