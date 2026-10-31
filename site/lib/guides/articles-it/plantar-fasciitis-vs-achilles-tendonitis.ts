import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/plantar-fasciitis-vs-achilles-tendonitis.ts (2026-10-18),
 * written around «fascite plantare o tendinite d’Achille», «dolore tallone o achille».
 * Informal «tu». Figures, grades, doses and qualifiers are identical to the English
 * page after its fact-check. Same CITE keys and media ids. Exercise names follow
 * lib/guides/it.ts and articles-it/achilles.ts.
 */

export const PF_VS_ACHILLES_IT: Guide = {
  lang: 'it',
  page: 'pfVsAchilles',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascite plantare o tendinite d’Achille: come distinguerle',
  description:
    'Fascite plantare o tendinite d’Achille? Dove fa male, quando fa male, una tabella a confronto, gli esercizi adatti a ciascuna e cosa fare se hai entrambe.',
  h1: 'Fascite plantare o tendinite d’Achille: come riconoscere la differenza',
  lede:
    'Il modo più rapido per distinguerle è il punto in cui fa male. La [fascite plantare](/it/fascite-plantare/) fa male sotto il tallone, soprattutto ai primi passi del mattino (Koc e colleghi, 2023). La tendinite d’Achille fa male dietro il tallone o nel tendine appena sopra, di solito da 2 a 6\u00A0centimetri sopra l’osso del tallone (Chimenti e colleghi, 2024). Entrambe rispondono all’esercizio, ma gli esercizi non sono gli stessi.',
  intro: [
    'Questa pagina è il confronto fianco a fianco. Non è una diagnosi, e alcuni dolori al tallone non sono né l’una né l’altra. Per i programmi completi di esercizi vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) ed [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/). Se fa parte del quadro anche una sporgenza ossea dietro il tallone, vedi [morbo di Haglund](/it/morbo-di-haglund/).',
  ],
  takeaways: [
    'Il dolore della fascite plantare si trova sotto il tallone, sul lato interno, ed è di solito peggiore ai primi passi dopo il sonno o dopo essere stato seduto (Koc e colleghi, 2023).',
    'La tendinopatia d’Achille della porzione media fa male nel tendine stesso, di solito da 2 a 6\u00A0centimetri sopra l’osso del tallone. Il dolore proprio dove il tendine si attacca all’osso è il tipo inserzionale (Chimenti e colleghi, 2024).',
    'La linea guida del 2023 sul dolore al tallone dà agli allungamenti della fascia plantare e del polpaccio il grado **A** e al lavoro di forza il grado **B**. La linea guida del 2024 sull’Achille dà agli esercizi di carico del tendine il grado **A** (Koc e colleghi, 2023; Chimenti e colleghi, 2024).',
    'In uno studio su 101\u00A0persone con dolore cronico al tallone, l’allungamento della fascia plantare ha dato risultati migliori del solo allungamento del polpaccio a 8\u00A0settimane (DiGiovanni e colleghi, 2003). Per l’Achille, il grado più alto della linea guida va al carico del tendine, non all’allungamento (Chimenti e colleghi, 2024).',
    'Le due cose sono collegate: in 52\u00A0risonanze magnetiche, chi aveva alterazioni all’Achille aveva una fascia plantare più spessa, e 5 su 27 superavano la soglia usata di solito per la fascite plantare (Stecco e colleghi, 2013).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Dove fa male: sotto il tallone o dietro?',
      figure: { id: 'heel-side', caption: 'La fascite plantare fa male sotto il tallone. Il dolore all’Achille si trova dietro il tallone o nel tendine appena sopra.', alt: 'Vista dal lato interno di un piede con l’osso del tallone, la fascia plantare sotto l’arco e il tendine d’Achille dietro, con una zona rossa sotto il tallone.' },
      keyFact: 'Il dolore all’Achille della porzione media si sente di solito da 2 a 6\u00A0centimetri sopra l’osso del tallone, mentre quello della fascite plantare si trova sotto il lato interno del tallone (Chimenti e colleghi, 2024; Koc e colleghi, 2023).',
      paragraphs: [
        '**Il punto del dolore è la differenza più chiara.** La fascia plantare è la fascia spessa sotto il piede che va dall’osso del tallone alle dita. La fascite plantare fa male dove questa fascia si attacca, sotto il tallone e verso il lato interno. Di solito fa male se premi lì con il pollice (Koc e colleghi, 2023).',
        'Il tendine d’Achille collega i muscoli del polpaccio alla parte posteriore dell’osso del tallone. Ci sono due tipi di dolore all’Achille, e il punto esatto li distingue (Chimenti e colleghi, 2024; Jonsson e colleghi, 2008):',
        {
          list: [
            '**Porzione media:** dolore e spesso un tendine più spesso e dolente da 2 a 6\u00A0centimetri sopra l’osso del tallone. Di solito riesci a pizzicare il punto dolente tra pollice e indice.',
            '**Inserzionale:** dolore proprio dove il tendine si attacca alla parte posteriore dell’osso del tallone, spesso peggiore quando la scarpa preme lì.',
          ],
        },
        'Un dolore sotto il tallone che fa male quando stringi i lati del tallone, che brucia o formicola, o che arriva con intorpidimento fa pensare ad altre cause, come un nervo, una frattura da stress o il cuscinetto adiposo del tallone (Tu, 2018). Le trovi in [dolore al tallone di notte](/it/dolore-tallone-di-notte/).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.jonsson, CITE.tuHeelPain],
    },
    {
      h2: 'Quando fa male: ai primi passi o durante l’attività?',
      paragraphs: [
        '**La fascite plantare è un dolore da primi passi.** La linea guida descrive un dolore al tallone che si nota di più ai primi passi del mattino o dopo essere stato seduto, che spesso si attenua mentre cammini e torna dopo molto tempo in piedi (Koc e colleghi, 2023). [Dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) spiega questo andamento.',
        '**La tendinopatia d’Achille è un dolore da carico.** Anche il tendine può essere rigido al mattino, ed è per questo che le due si confondono. La differenza è cosa lo fa peggiorare durante la giornata: le attività di carico come corsa e salti, e il dolore tende a seguire quanto hai fatto (Chimenti e colleghi, 2024). Salite e spinte veloci caricano il tendine ancora di più.',
        'Quindi entrambe possono fare male al mattino. Chiediti dove, non solo quando: un cordone rigido e dolente dietro la caviglia fa pensare all’Achille, una fitta sotto il tallone fa pensare alla fascia plantare.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Fascite plantare o tendinite d’Achille: la tabella a confronto',
      paragraphs: [
        'La tabella riassume il quadro tipico. Molte persone non rientrano bene in una sola colonna, e solo la visita di un medico può dirti quale delle due hai.',
      ],
      table: {
        caption: 'Fascite plantare e tendinopatia d’Achille a confronto',
        head: ['', 'Fascite plantare', 'Tendinopatia d’Achille'],
        rows: [
          ['Dove', 'Sotto il tallone, lato interno', 'Dietro il tallone o da 2 a 6\u00A0cm sopra'],
          ['Quando peggiora', 'Primi passi dopo il riposo', 'Spinta, corsa, salite'],
          ['Fa male alla pressione', 'Sotto il tallone', 'Tendine pizzicato dietro'],
          ['Legata a', 'Caviglia rigida, peso, stare in piedi', 'Sport nel 35% dei casi'],
          ['Esercizio con il grado più alto', 'Allungamenti, grado A', 'Carico del tendine, grado A'],
          ['Allungare il polpaccio?', 'Sì, grado A', 'Facoltativo, grado C'],
          ['Linea guida', 'Koc 2023', 'Chimenti 2024'],
        ],
      },
      after: [
        'I fattori di rischio vengono da studi diversi. Nella fascite plantare, chi aveva una flessione dorsale della caviglia di 0\u00A0gradi o meno aveva una probabilità 23,3\u00A0volte più alta di avere il problema, e anche un indice di massa corporea sopra 30 e lo stare in piedi per gran parte della giornata di lavoro aumentavano la probabilità (Riddle e colleghi, 2003). In uno studio olandese su 57.725\u00A0persone iscritte presso un medico di famiglia, la tendinopatia d’Achille della porzione media è stata diagnosticata in 2,35 adulti su 1.000 tra i 21 e i 60\u00A0anni in un anno, e il 35% dei casi era legato allo sport (de Jonge e colleghi, 2011).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.riddle, CITE.deJongeIncidence],
    },
    {
      h2: 'Quali esercizi sono adatti alla fascite plantare?',
      keyFact: 'In uno studio su 101\u00A0persone con dolore cronico al tallone, l’allungamento della fascia plantare ha dato risultati migliori a 8\u00A0settimane rispetto al solo allungamento del polpaccio (DiGiovanni e colleghi, 2003).',
      paragraphs: [
        '**Per la fascite plantare si parte dagli allungamenti.** La linea guida del 2023 dà agli allungamenti della fascia plantare e del polpaccio il grado **A**, il suo più alto, e al lavoro di forza il grado **B** (Koc e colleghi, 2023).',
        'Conta l’allungamento che lavora sull’arco. In uno studio su 101\u00A0persone, il gruppo che faceva l’allungamento della fascia plantare ha riferito risultati migliori a 8\u00A0settimane rispetto al gruppo che faceva solo l’allungamento del polpaccio (DiGiovanni e colleghi, 2003). Per la forza, uno studio del 2015 su 48\u00A0persone ha usato sollevamenti sulle punte lenti con un asciugamano sotto le dita, che hanno ridotto il dolore più in fretta dei soli allungamenti a tre mesi, anche se a dodici mesi i due gruppi erano più o meno pari (Rathleff e colleghi, 2015).',
        'Queste sono le dosi di partenza della guida [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Un dolore acuto al tallone che non si attenua quando molli',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Una forte tensione improvvisa dietro l’osso del tallone',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano',
          evidence: { level: 'moderate', why: 'È il programma di uno studio su 48\u00A0persone, e la linea guida del 2023 dà al lavoro di forza una B.' },
          dose: '4\u00A0serie da 10, ogni gamba, con peso aggiunto',
          often: 'Giorni di forza',
          feel: 'Lavoro intenso nel polpaccio',
          how: 'Mettiti su un piede solo su un gradino, con un asciugamano arrotolato sotto le dita. Sali in tre secondi, tieni due secondi in alto e scendi in tre secondi. A questo livello Walkito aggiunge peso, per esempio uno zaino. È l’asciugamano che fa lavorare la fascia plantare e non solo il polpaccio.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte con asciugamano',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: tre secondi su, due in alto, tre giù',
          alt: 'Una figura sale sulle punte su un gradino con un asciugamano arrotolato, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Quali esercizi sono adatti alla tendinite d’Achille?',
      keyFact: 'In uno studio pilota su 27\u00A0persone con dolore inserzionale all’Achille, le discese del tallone fatte a livello del pavimento hanno dato buoni risultati nel 67% (Jonsson e colleghi, 2008).',
      paragraphs: [
        '**Per l’Achille si parte dal carico, non dagli allungamenti.** La linea guida del 2024 dà agli esercizi di carico del tendine il grado **A**: sollevamenti sulle punte, tenute e discese lente che fanno lavorare il tendine (Chimenti e colleghi, 2024). La linea guida dà all’allungamento del polpaccio un grado più basso, **C**, e solo per chi ha una caviglia che si piega poco (Chimenti e colleghi, 2024).',
        'Un po’ di dolore è ammesso. In uno studio su 38\u00A0persone, un dolore fino a circa 5 su 10 durante il carico andava bene, purché si calmasse entro la mattina dopo e non aumentasse di settimana in settimana, e a dodici mesi quel gruppo stava bene quanto quello che aveva prima fatto riposo (Silbernagel e colleghi, 2007).',
        'Se il dolore è proprio sull’osso del tallone (inserzionale), fai tutti i sollevamenti sulle punte e le discese del tallone a livello del pavimento, e vacci piano con gli allungamenti del polpaccio. Far scendere il tallone sotto il gradino schiaccia il tendine contro l’osso. In uno studio pilota su 27\u00A0persone, le discese a livello del pavimento hanno dato buoni risultati nel 67% (Jonsson e colleghi, 2008). Più dettagli in [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
      ],
      exercises: [
        {
          name: 'Tenuta sulle punte (isometrica)',
          evidence: { level: 'moderate', why: 'La linea guida del 2024 sull’Achille include il carico isometrico. Nessuno studio randomizzato ha testato le tenute da sole come programma completo.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          often: 'Giorni di forza, o quasi tutti i giorni quando il tendine è irritato',
          feel: 'I polpacci che lavorano per restare fermi',
          how: 'Sali sulle punte su entrambi i piedi, poi resta fermo in alto. Non riscendere. Tenere la posizione in alto carica il tendine senza il rimbalzo.',
          stop: 'Dolore sopra 5 su 10 che non si calma entro la mattina dopo',
          image: 'Esercizio: tenuta sulle punte',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura resta sollevata sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Discese eccentriche del tallone (ginocchio teso)',
          evidence: { level: 'strong', why: 'Basato sul protocollo di Alfredson per il dolore della porzione media (3 x 15, due volte al giorno); Walkito parte da 3 x 10. La linea guida del 2024 dà all’esercizio una A.' },
          dose: '3\u00A0serie da 10, ogni gamba',
          often: 'Giorni di forza',
          feel: 'Lavoro intenso nel polpaccio durante la discesa, non un allungamento in fondo',
          how: 'Mettiti sul bordo di un gradino. Sali su entrambi i piedi, sposta il peso sulla gamba dolorante e scendi lentamente in tre secondi. Usa entrambi i piedi per risalire. Se il dolore è proprio sull’osso del tallone, fallo sul pavimento in piano e non lasciare che il tallone scenda sotto il gradino.',
          stop: 'Dolore sopra 5 su 10 che non si calma entro la mattina dopo, o che peggiora di settimana in settimana',
          image: 'Esercizio: discese eccentriche del tallone',
          media: 'heel_drop_straight',
          caption: 'Discesa eccentrica del tallone: su con entrambi i piedi, giù lentamente su uno',
          alt: 'Una figura su un gradino abbassa un tallone sotto il bordo con il ginocchio teso, con polpaccio e Achille evidenziati',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Si possono avere fascite plantare e tendinite d’Achille insieme?',
      keyFact: 'In 52\u00A0risonanze magnetiche, la fascia plantare era spessa 3,43\u00A0mm in chi aveva alterazioni all’Achille, contro 2,09\u00A0mm in chi non le aveva (Stecco e colleghi, 2013).',
      paragraphs: [
        '**Sì, e le due cose sono collegate.** In uno studio su 52\u00A0risonanze magnetiche di persone con dolore al piede o alla caviglia, i 27 con alterazioni all’Achille avevano una fascia plantare più spessa, 3,43\u00A0mm in media contro 2,09\u00A0mm. Cinque dei 27 avevano una fascia plantare sopra i 4,5\u00A0mm, una soglia comune per la fascite plantare. Nessuno degli altri 25 superava i 4\u00A0mm (Stecco e colleghi, 2013).',
        'Lo stesso studio ha trovato che la fascia plantare si collega alla guaina intorno all’Achille attraverso il rivestimento dell’osso del tallone. Uno studio su cadavere ha mostrato che tirare l’Achille mette in tensione la fascia plantare, e di più quando le dita sono piegate verso l’alto (Carlson e colleghi, 2000). Un polpaccio rigido o sovraccarico può quindi mettere in tensione entrambe le strutture.',
        'Nessuno studio ha contato quanto spesso si abbiano le due condizioni insieme, quindi non esiste un dato affidabile. Nessuna linea guida tratta il caso di entrambe. Un approccio che rispetta tutte e due le linee guida: lavoro di forza per il polpaccio adatto al tendine, più l’allungamento della fascia plantare, che lavora sull’arco e non sull’Achille. Fai le discese del tallone a livello del pavimento se ti fa male la parte posteriore dell’osso del tallone.',
      ],
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass, CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Cos’altro dà un dolore al tallone simile a questi due?',
      paragraphs: [
        'Diversi problemi si trovano lì vicino e possono dare sensazioni simili (Choo e colleghi, 2020; Tu, 2018):',
        {
          list: [
            'Una sporgenza ossea dietro il tallone con una zona dolente e gonfia dove arriva la scarpa: [morbo di Haglund](/it/morbo-di-haglund/) o borsite retrocalcaneare, spesso insieme a un dolore inserzionale all’Achille.',
            'Uno sperone calcaneare in radiografia: è comune, e di solito non è la causa del dolore. Vedi [fascite plantare o sperone calcaneare](/it/spina-calcaneare-esercizi/).',
            'Un dolore profondo, come un livido, al centro del cuscinetto del tallone, peggiore sui pavimenti duri: [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
            'Dolore su entrambi i lati del tallone quando lo stringi, dopo un aumento improvviso di camminata o corsa: possibile frattura da stress, che va valutata da un medico.',
            'Bruciore, formicolio o intorpidimento: forse un nervo compresso.',
          ],
        },
      ],
      cites: [CITE.chooRearfoot, CITE.tuHeelPain],
    },
    {
      h2: 'Quanto ci vuole a migliorare per ciascuna?',
      paragraphs: [
        'Per la fascite plantare, circa il 90% delle persone migliora con un trattamento non chirurgico, anche se spesso servono mesi (Latt e colleghi, 2020). [Quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/) ha i dettagli.',
        'Per la tendinopatia d’Achille, i principali studi sul carico sono durati circa tre mesi e hanno seguito le persone fino a dodici mesi. La linea guida del 2024 nota che la funzione può iniziare a migliorare entro 2\u00A0settimane, ma un recupero più completo richiede più tempo (Chimenti e colleghi, 2024). Il dolore inserzionale è stato più difficile da aiutare con le classiche discese del tallone sotto il gradino: in uno studio precedente solo il 32% aveva avuto buoni risultati, ed è per questo che si usano le discese a livello del pavimento (Jonsson e colleghi, 2008).',
        'Nessuno studio ha confrontato direttamente i tempi di recupero delle due.',
      ],
      cites: [CITE.latt, CITE.achillesGuideline, CITE.jonsson],
    },
  ],
  faq: [
    {
      q: 'Come faccio a capire se il mio dolore al tallone è fascite plantare o tendinite d’Achille?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Parti dal punto in cui fa male. La fascite plantare fa male sotto il tallone, verso il lato interno, ed è peggiore ai primi passi dopo il riposo. La tendinite d’Achille fa male dietro il tallone o nel tendine da 2 a 6\u00A0centimetri sopra, e peggiora con la spinta, la corsa e le salite. Un medico può confermare quale delle due è.',
    },
    {
      q: 'La fascite plantare può causare dolore all’Achille?',
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass],
      a: 'Sono collegate, ma nessuno studio mostra che una causi l’altra. In 52\u00A0risonanze magnetiche, chi aveva alterazioni all’Achille aveva una fascia plantare più spessa, 3,43\u00A0mm contro 2,09\u00A0mm. Uno studio su cadavere ha mostrato che la tensione nell’Achille mette in tensione la fascia plantare. Un polpaccio rigido e sovraccarico può caricare entrambe.',
    },
    {
      q: 'La tendinite d’Achille è peggio al mattino come la fascite plantare?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Può esserlo. Entrambe possono dare rigidità e dolore ai primi passi della giornata, ed è per questo che si confondono. La fascite plantare è una fitta sotto il tallone che si attenua mentre cammini. Il dolore all’Achille è dietro la caviglia e tende ad aumentare con corsa, salti, salite e scale.',
    },
    {
      q: 'Devo allungare il polpaccio per la tendinite d’Achille?',
      cites: [CITE.achillesGuideline, CITE.jonsson],
      a: 'È facoltativo. La linea guida del 2024 sull’Achille mette al primo posto gli esercizi di carico del tendine, con grado A, e dà all’allungamento del polpaccio una C, per chi ha una caviglia che si piega poco. Se il dolore è proprio sull’osso del tallone, gli allungamenti profondi del polpaccio e le discese del tallone sotto il gradino schiacciano il tendine contro l’osso, quindi tienili leggeri e a livello del pavimento.',
    },
    {
      q: 'Gli esercizi per la fascite plantare e per la tendinite d’Achille sono gli stessi?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Si sovrappongono, ma non sono gli stessi. Per la fascite plantare si parte dagli allungamenti della fascia plantare e del polpaccio, con grado A, più i sollevamenti sulle punte, con grado B. Per la tendinite d’Achille si parte dal carico: tenute sulle punte, sollevamenti sulle punte e discese lente del tallone, con grado A. Il lavoro di forza per il polpaccio va bene per entrambe.',
    },
    {
      q: 'Si possono avere fascite plantare e tendinite d’Achille insieme?',
      cites: [CITE.steccoPfAchilles],
      a: 'Sì. In uno studio con risonanza magnetica su 52\u00A0persone con dolore al piede o alla caviglia, 5 dei 27 con alterazioni all’Achille avevano anche una fascia plantare abbastanza spessa da raggiungere una soglia comune per la fascite plantare. Nessuno studio ha contato quanto spesso le due compaiano insieme nella popolazione generale.',
    },
    {
      q: 'Il dolore dietro il tallone è fascite plantare?',
      cites: [CITE.guideline, CITE.chooRearfoot],
      a: 'Di solito no. La fascite plantare fa male sotto il tallone. Il dolore dietro il tallone è più spesso una tendinopatia d’Achille, una borsite retrocalcaneare o il morbo di Haglund, una sporgenza ossea dove si attacca il tendine. Uno schiocco improvviso dietro il tallone richiede un medico in giornata.',
    },
    {
      q: 'Uno sperone calcaneare vuol dire fascite plantare o tendinite d’Achille?',
      cites: [CITE.chooRearfoot],
      a: 'Da solo, nessuna delle due. Uno sperone sotto il tallone si trova vicino alla fascia plantare, e uno sperone dietro si trova dove si attacca l’Achille, ma gli speroni sono comuni anche in chi non ha dolore. È la visita, non la sola radiografia, a stabilire cosa causa il dolore.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai sentito uno schiocco o uno strappo improvviso dietro la caviglia, o come un calcio in quel punto, e ora spingere con il piede è difficile',
      'non riesci a salire sulle punte dal lato dolorante, o senti un vuoto nel tendine',
      'stai prendendo o hai preso di recente un antibiotico fluorochinolonico, come la ciprofloxacina, e hai un dolore al tendine nuovo',
      'il tallone è rosso, caldo e gonfio, o hai la febbre',
      'il tallone fa male su entrambi i lati quando lo stringi, o fa male di notte o a riposo',
      'senti bruciore, formicolio o intorpidimento nel tallone o nella pianta del piede',
      'il dolore è iniziato dopo una caduta o un trauma, o non riesci a caricare il peso sul piede',
      'il dolore continua a peggiorare per settimane nonostante l’esercizio costante',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede. Gli dici dove fa male, sotto il tallone o dietro, e costruisce il piano dalla tua risposta: allungamenti della fascia plantare e sollevamenti sulle punte con asciugamano per il dolore al tallone, carico del polpaccio dalle tenute alle discese lente del tallone per il dolore all’Achille.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Walkito non fa diagnosi, quindi se non sei sicuro di quale delle due hai, fatti visitare prima da un medico.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['achilles', 'hubPlantarFasciitis', 'pfVsHeelSpur'],
  crumb: 'Fascite plantare o Achille',
  campaign: 'guide-plantar-fasciitis-vs-achilles-tendonitis-it',
};
