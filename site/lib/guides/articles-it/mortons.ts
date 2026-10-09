import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/mortons.ts`, written around the queries
 * «neuroma di Morton», «neuroma di Morton esercizi» and «neuroma di Morton
 * scarpe e plantare». Informal «tu». Exercise names as in `it.ts`; the
 * bent-knee calf stretch uses the site's «allungamento del soleo». Figures,
 * grades and qualifiers are identical to the English page. Citations as in
 * English.
 */

export const MORTONS_IT: Guide = {
  lang: 'it',
  page: 'mortons',
  mainSource: CITE.matthewsCochrane,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Neuroma di Morton: cause, scarpe, plantari e cosa aiuta',
  description:
    'Il neuroma di Morton dà bruciore tra le dita. Cuscinetti metatarsali, scarpe, infiltrazioni, esercizi per il comfort e differenza con la metatarsalgia.',
  h1: 'Neuroma di Morton: cos’è, cosa aiuta e cosa dicono gli studi',
  lede:
    'Il neuroma di Morton è un ispessimento del nervo tra le teste metatarsali, più spesso tra il terzo e il quarto dito. Dà bruciore, formicolio o la sensazione di camminare su un sassolino. Non è un vero tumore. Cambiare scarpe e usare cuscinetti metatarsali sono i primi passi abituali, e una revisione Cochrane del 2024 ha trovato che le prove complessive per qualsiasi singolo intervento sono ancora limitate. Questa pagina spiega cosa funziona, cosa no e che ruolo ha l’esercizio.',
  intro: [
    'Il nervo corre tra le ossa metatarsali, sulla pianta del piede. Quando le teste metatarsali si stringono tra loro, il nervo può irritarsi, gonfiarsi e alla fine ispessirsi. Scarpe strette, tacchi alti e attività ad alto impatto aumentano tutti la compressione. Il termine clinico è nevralgia interdigitale o neuroma intermetatarsale. Neuroma di Morton è il nome che cerca la maggior parte delle persone.',
  ],
  toc: true,
  takeaways: [
    'Una revisione Cochrane del 2024 su sei studi randomizzati con 373\u00A0partecipanti ha trovato prove di certezza da bassa a moderata per la maggior parte degli interventi per il neuroma di Morton. Nessun singolo trattamento aveva un sostegno forte e ad alta certezza (Matthews e colleghi, 2024).',
    'Scarpe più larghe con tacco basso e un cuscinetto metatarsale messo appena dietro le teste metatarsali sono il primo passo conservativo consigliato più spesso. Circa il 32% delle persone gestite così riferisce un miglioramento significativo.',
    'L’infiltrazione di cortisone dà sollievo dal dolore nel breve periodo, ma la revisione Cochrane del 2024 ha trovato prove di bassa certezza che aggiungere un cortisonico a un anestetico locale possa portare a poca o nessuna differenza su dolore o funzione rispetto al solo anestetico locale.',
    'L’esercizio non lavora direttamente sul nervo. Gli esercizi per dita e piede possono aiutare il comfort generale dell’avampiede e la distribuzione del carico, ma nessuno studio ha testato l’esercizio specificamente per il neuroma di Morton.',
  ],
  sections: [
    {
      h2: 'Cos’è il neuroma di Morton?',
      figure: { id: 'mortons', caption: 'Il neuroma di Morton è un nervo ispessito tra le teste metatarsali, più spesso tra il terzo e il quarto dito.', alt: 'Vista dall’alto delle ossa del piede, con nervi gialli che corrono verso le dita e un ovale gonfio sul nervo tra il terzo e il quarto dito.' },
      paragraphs: [
        'Il neuroma di Morton è un ispessimento benigno del nervo digitale plantare comune, di solito nel terzo spazio intermetatarsale (tra il terzo e il quarto dito). Meno spesso si trova nel secondo spazio. Non è un cancro e non è una crescita sull’osso.',
        'Il nervo passa sotto il legamento metatarsale trasverso, una fascia di tessuto che tiene unite le teste metatarsali. Quando le teste si stringono, il nervo viene pizzicato. Col tempo la guaina del nervo si ispessisce, e il nervo stesso può ingrossarsi. Il risultato è dolore, bruciore, formicolio o intorpidimento nello spazio tra le dita, che si irradia verso le dita interessate.',
        'È più frequente nelle donne, in parte per la scelta delle scarpe. Le scarpe a punta stretta e i tacchi alti spingono le teste metatarsali l’una contro l’altra e aumentano la pressione sul nervo. Anche la corsa, gli sport su campo e i lavori che richiedono di stare a lungo in piedi con scarpe strette sono fattori di rischio.',
      ],
    },
    {
      h2: 'Che differenza c’è tra neuroma di Morton e metatarsalgia?',
      paragraphs: [
        'Metatarsalgia è un termine più ampio che indica dolore intorno alle teste metatarsali, le nocche ossee nella [parte anteriore della pianta del piede](/it/metatarsalgia-dolore-pianta-piede/). Il neuroma di Morton è una causa specifica di dolore all’avampiede, e rientra nel grande contenitore della metatarsalgia.',
        'La differenza chiave è cosa fa male e come. La metatarsalgia di solito è un dolore da sordo ad acuto sotto la parte anteriore della pianta, spesso sotto la seconda e la terza testa metatarsale. Il neuroma di Morton dà bruciore, formicolio o intorpidimento tra le dita, più spesso il terzo e il quarto. Stringere l’avampiede di lato, il cosiddetto test del click di Mulder, può riprodurre i sintomi del neuroma e a volte provoca un click udibile quando il nervo scatta tra i metatarsi.',
        'La distinzione conta perché gli approcci sono diversi. La metatarsalgia risponde allo scarico delle teste metatarsali e al rinforzo delle dita. Il neuroma di Morton risponde alla decompressione del nervo, cioè scarpe più larghe, cuscinetti e a volte infiltrazioni o chirurgia. Gli esercizi aiutano il comfort dell’avampiede in entrambi i casi, ma nessuno dei due problemi ha prove forti da studi specifici sull’esercizio. Vedi [metatarsalgia e dolore alla pianta del piede](/it/metatarsalgia-dolore-pianta-piede/) per il quadro più ampio della metatarsalgia.',
      ],
    },
    {
      h2: 'Cuscinetti metatarsali e cambio di scarpe aiutano?',
      keyFact: 'Mettendo insieme due studi in una revisione del 2019, scarpe più larghe e un cuscinetto metatarsale hanno aiutato circa il 32% delle persone a un controllo medio dopo quattro mesi e mezzo (Matthews e colleghi, 2019).',
      paragraphs: [
        'Scarpe più larghe con tacco basso e un cuscinetto metatarsale sono il primo passo consigliato più spesso per il neuroma di Morton. Il cuscinetto va messo appena dietro le teste metatarsali, non direttamente sotto, per sollevare il corpo dei metatarsi e allargarli, riducendo la compressione sul nervo.',
        'Scarpe ben calzanti con una punta larga, un tacco basso e un cuscinetto metatarsale sono state valutate in due studi inclusi in una revisione sistematica del 2019. Mettendo insieme quei due studi, scarpe e cuscinetti hanno funzionato in circa il 32% delle persone a un controllo dopo quattro mesi e mezzo in media. Però uno studio randomizzato che confrontava scarpe e cuscinetti con l’infiltrazione di cortisone ha trovato che il gruppo con l’infiltrazione aveva probabilità di successo sei volte più alte a sei mesi.',
        'In pratica: cambiare scarpe e usare cuscinetti è a basso rischio e vale la pena provarlo per primo. Funziona per alcune persone e per altre no. Se non ha aiutato dopo quattro-sei settimane, il passo successivo di solito è una visita per parlare di infiltrazioni o di altri esami di imaging.',
        'La posizione conta. Un cuscinetto troppo avanti, direttamente sotto la testa metatarsale, può aumentare la pressione invece di ridurla. I cuscinetti metatarsali adesivi della farmacia costano abbastanza poco da provarli, ma per trovare la posizione giusta serve qualche tentativo. Un podologo può realizzare un plantare su misura se quelli già pronti non funzionano.',
      ],
      cites: [CITE.matthewsSR],
    },
    {
      h2: 'Cosa dicono gli studi sulle infiltrazioni?',
      keyFact: 'Nella revisione Cochrane del 2024, l’infiltrazione di cortisone ecoguidata probabilmente migliorava il dolore più di quella non guidata, con prove di certezza moderata a 2, 6 e 12\u00A0mesi (Matthews e colleghi, 2024).',
      paragraphs: [
        'L’infiltrazione di cortisone è l’approccio invasivo non chirurgico più studiato per il neuroma di Morton. La revisione Cochrane del 2024 includeva sei studi randomizzati con 373\u00A0partecipanti. Ha trovato prove di bassa certezza che aggiungere un cortisonico a un anestetico locale possa portare a poca o nessuna differenza su dolore o funzione a tre-sei mesi rispetto alla sola infiltrazione di anestetico locale. Gli autori Cochrane hanno notato che aggiungere un cortisonico può aumentare gli effetti avversi, tra cui atrofia del cuscinetto adiposo e alterazioni della pelle.',
        'L’infiltrazione ecoguidata probabilmente migliora il dolore rispetto a quella non guidata, con differenze clinicamente rilevanti a 2, 6 e 12\u00A0mesi negli studi inclusi. Le prove sono state classificate di certezza moderata.',
        'Sono stati studiati anche altri tipi di infiltrazione, tra cui infiltrazioni sclerosanti con alcol, ablazione con radiofrequenza e crioterapia. La revisione sistematica del 2019 ha trovato che infiltrazione di cortisone e manipolazione avevano le prove più forti per la riduzione del dolore nel breve periodo, ma ha chiesto più studi randomizzati di alta qualità. La revisione Cochrane del 2024 è arrivata alla stessa conclusione: dopo altri 20\u00A0anni di ricerca dalla prima revisione Cochrane del 2004, non ci sono ancora abbastanza prove di alta qualità per trarre conclusioni solide su qualsiasi singolo intervento.',
        'Questo non vuol dire che le infiltrazioni siano inutili. Vuol dire che le prove non sono abbastanza forti per dichiarare un approccio chiaramente migliore di un altro. Un clinico può parlarti delle opzioni, dei rischi e di cosa aspettarti. L’infiltrazione di cortisone dà un buon sollievo nel breve periodo a molte persone, ma le infiltrazioni ripetute comportano rischi per i tessuti intorno.',
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
    {
      h2: 'Quando si parla di chirurgia?',
      paragraphs: [
        'Di solito si considera la chirurgia quando la gestione conservativa, cioè cambio di scarpe, cuscinetti e uno o due cicli di infiltrazioni, non ha dato un sollievo duraturo. L’intervento più comune è la neurectomia, la rimozione chirurgica del tratto di nervo ispessito. Funziona per molte persone ma lascia un intorpidimento permanente tra le dita interessate, perché il nervo che portava la sensibilità lì non c’è più.',
        'Altre opzioni chirurgiche sono la decompressione del nervo (liberare il legamento metatarsale trasverso senza togliere il nervo) e l’osteotomia metatarsale (rimodellare l’osso per dare più spazio al nervo). La revisione Cochrane del 2024 ha trovato prove di bassa certezza per i confronti chirurgici, senza un vincitore chiaro tra neurectomia con incisione plantare e dorsale per soddisfazione dei pazienti o effetti avversi.',
        'La chirurgia non è un approccio di prima linea. La maggior parte dei clinici consiglia di provare in modo strutturato la gestione conservativa per diversi mesi prima di prenderla in considerazione. Se sei a quel punto, uno specialista di piede e caviglia può spiegarti le opzioni chirurgiche e cosa aspettarti per il recupero.',
      ],
      cites: [CITE.matthewsCochrane],
    },
    {
      h2: 'Gli esercizi aiutano il neuroma di Morton?',
      paragraphs: [
        'La risposta onesta è che nessuno studio ha testato l’esercizio per il neuroma di Morton. L’esercizio non lavora direttamente sul nervo. Non può ridurre un neuroma né decomprimere lo spazio intermetatarsale come fanno una scarpa più larga o un cuscinetto metatarsale.',
        'Quello che l’esercizio può fare è migliorare il comfort generale dell’avampiede e la distribuzione del carico. Rinforzare i muscoli intrinseci del piede, i piccoli muscoli tra e sotto i metatarsi, può aiutare le teste metatarsali a stare più aperte mentre cammini. L’allungamento del polpaccio riduce il sovraccarico dell’avampiede migliorando la dorsiflessione della caviglia. Sono esercizi per il comfort e la gestione del carico, non interventi specifici per il neuroma. Lo diciamo chiaramente perché esagerare il ruolo dell’esercizio qui non sarebbe onesto.',
        'Se il tuo dolore all’avampiede va oltre il neuroma, cioè hai anche una metatarsalgia generale o un polpaccio rigido, sono utili gli esercizi della pagina su [metatarsalgia e dolore alla pianta del piede](/it/metatarsalgia-dolore-pianta-piede/). Gli esercizi qui sotto vengono dallo stesso gruppo, ma sono elencati qui per comodità.',
      ],
      exercises: [
        {
          name: 'Apertura delle dita',
          dose: '3\u00A0serie da 10\u00A0aperture',
          how: 'Siediti o stai in piedi con il piede appoggiato. Apri tutte e cinque le dita più che puoi, tieni per 2-3\u00A0secondi, poi rilassa. Così lavori i piccoli muscoli tra i metatarsi, e può aiutare le teste metatarsali a stare più aperte.',
          feel: 'Un allungamento tra le dita e un lieve sforzo sul dorso del piede',
          stop: 'Dolore acuto o bruciore tra le dita durante l’esercizio',
          evidence: { level: 'early', why: 'Nessuno studio sul neuroma di Morton. L’esercizio lavora sui muscoli intrinseci che aiutano ad aprire le teste metatarsali.' },
          media: 'toe_spread',
          caption: 'Apertura delle dita: allarga tutte e cinque le dita, tieni, rilassa',
          alt: 'Un piede con tutte e cinque le dita ben aperte, con i muscoli tra i metatarsi evidenziati',
        },
        {
          name: 'Raccolta dell’asciugamano',
          dose: '3\u00A0serie da 10\u00A0raccolte, ogni piede',
          how: 'Siediti con il piede appoggiato su un asciugamano. Arriccia le dita per raccogliere l’asciugamano verso di te. Rilascia e ripeti. Così rinforzi i flessori delle dita, che aiutano a distribuire il carico sull’avampiede nella spinta.',
          feel: 'I muscoli sotto l’arco e le dita che lavorano',
          stop: 'Dolore tra le dita o nella parte anteriore della pianta',
          evidence: { level: 'early', why: 'Nessuno studio sul neuroma. In uno studio su 41\u00A0persone con metatarsalgia, un programma simile di esercizi per le dita ha migliorato il dolore (Amaha, 2020), ma non c’era un gruppo di controllo.' },
          media: 'towel_scrunch',
          caption: 'Raccolta dell’asciugamano: arriccia le dita per tirare l’asciugamano verso di te',
          alt: 'Un piede su un asciugamano con le dita arricciate per raccoglierlo, con i muscoli intrinseci del piede evidenziati',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Un polpaccio rigido sposta il peso in avanti sull’avampiede, e questo aumenta la compressione sul nervo.',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Dolore al tendine d’Achille',
          evidence: { level: 'strong', why: 'L’allungamento del polpaccio ha un sostegno di grado A nelle linee guida per problemi collegati. Non testato specificamente per il neuroma, ma il meccanismo del sovraccarico dell’avampiede è riconosciuto.' },
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione dell’allungamento a ginocchio teso, poi piega il ginocchio dietro finché l’allungamento scende più in basso, vicino al tendine d’Achille. Così lavori sul soleo, il muscolo più profondo del polpaccio.',
          feel: 'Un allungamento più in basso nel polpaccio, vicino al tallone',
          stop: 'Dolore al tendine d’Achille',
          evidence: { level: 'strong', why: 'Stesso grado A delle linee guida per l’allungamento del polpaccio. Lavora sul soleo, che contribuisce anche alla rigidità della caviglia e al carico sull’avampiede.' },
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura a gambe divaricate avanti e dietro con le ginocchia piegate, con il soleo evidenziato',
        },
      ],
      cites: [CITE.amaha, CITE.guideline],
    },
    {
      h2: 'Cosa ci dicono gli studi, e cosa no',
      paragraphs: [
        'La revisione Cochrane del 2024 è la sintesi più rigorosa disponibile. Includeva sei studi randomizzati con 373\u00A0partecipanti. Le sue conclusioni: ci sono prove di certezza da bassa a moderata per la maggior parte degli interventi per il neuroma di Morton, e nessun singolo trattamento ha un sostegno forte e ad alta certezza. Dopo altri 20\u00A0anni di ricerca dalla revisione Cochrane originale del 2004, gli autori sono arrivati alla stessa conclusione di fondo.',
        'Questo non vuol dire che non funzioni niente. Cambio di scarpe e cuscinetti metatarsali aiutano circa 3\u00A0persone su 10. L’infiltrazione di cortisone ecoguidata probabilmente migliora il dolore rispetto a quella non guidata. La neurectomia toglie il dolore a molte persone, ma al prezzo di un intorpidimento permanente. Quello che manca è un chiaro trattamento di prima linea sostenuto da prove forti.',
        'Per l’esercizio la lacuna è ancora più grande. Nessuno studio ha testato l’esercizio per il neuroma di Morton. Gli esercizi di questa pagina sono misure per il comfort e la gestione del carico, non interventi specifici per il neuroma. Se l’esercizio fa parte del tuo piano, deve stare accanto al cambio di scarpe e ai consigli del clinico, non sostituirli.',
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
  ],
  faq: [
    {
      q: 'Come si sente il neuroma di Morton?',
      a: 'Il neuroma di Morton di solito dà bruciore, formicolio o intorpidimento tra il terzo e il quarto dito, o la sensazione di camminare su un sassolino o su una calza arrotolata. Il dolore peggiora con le scarpe strette e quando cammini. Togliere la scarpa e massaggiare l’avampiede spesso dà un sollievo temporaneo. A differenza della metatarsalgia generale, il dolore è di tipo nervoso, non un dolore sordo.',
    },
    {
      q: 'Che differenza c’è tra neuroma di Morton e metatarsalgia?',
      a: 'Metatarsalgia è un termine ampio per il dolore sotto la parte anteriore della pianta del piede. Il neuroma di Morton è una causa specifica dentro quel contenitore. La metatarsalgia tende a essere un dolore da sordo ad acuto sotto le teste metatarsali. Il neuroma di Morton dà bruciore o formicolio tra le dita, di solito il terzo e il quarto, e può dare intorpidimento. Un clinico può distinguerli con un esame fisico.',
    },
    {
      q: 'I cuscinetti metatarsali funzionano per il neuroma di Morton?',
      cites: [CITE.matthewsSR],
      a: 'I cuscinetti metatarsali messi appena dietro le teste metatarsali allargano le ossa e riducono la compressione sul nervo. Circa il 32% delle persone trattate in modo conservativo con scarpe più larghe e cuscinetti riferisce un miglioramento significativo (Matthews, 2019). Il cuscinetto deve stare dietro le teste metatarsali, non sotto. Se è troppo avanti, può aumentare il dolore.',
    },
    {
      q: 'Gli esercizi aiutano il neuroma di Morton?',
      a: 'Nessuno studio ha testato l’esercizio per il neuroma di Morton. L’esercizio non lavora direttamente sul nervo. L’apertura delle dita e il rinforzo dei muscoli intrinseci del piede possono aiutare a distribuire il carico sull’avampiede in modo più uniforme, e l’allungamento del polpaccio riduce il sovraccarico dell’avampiede dovuto a un polpaccio rigido. Sono misure per il comfort, non interventi specifici per il neuroma. Prima vengono scarpe e cuscinetti.',
    },
    {
      q: 'Il neuroma di Morton passa da solo?',
      a: 'Alcune persone trovano che passare a scarpe più larghe con tacco basso basti perché i sintomi si calmino in settimane o mesi. In altre l’ispessimento del nervo resta e i sintomi tornano ogni volta che l’avampiede viene compresso. Il problema in sé non regredisce, ma i sintomi si possono gestire. Se i passi conservativi non hanno aiutato dopo diverse settimane, un clinico può parlarti di infiltrazioni o di altre opzioni.',
    },
    {
      q: 'Le infiltrazioni di cortisone funzionano per il neuroma di Morton?',
      cites: [CITE.matthewsCochrane],
      a: 'Una revisione Cochrane del 2024 su sei studi randomizzati ha trovato prove di bassa certezza che aggiungere un cortisonico a un anestetico locale possa non migliorare dolore o funzione rispetto al solo anestetico locale (Matthews, 2024). L’infiltrazione ecoguidata probabilmente funziona meglio di quella non guidata. Il cortisone dà sollievo nel breve periodo a molte persone, ma le infiltrazioni ripetute comportano rischi, tra cui l’atrofia del cuscinetto adiposo.',
    },
    {
      q: 'Quando il neuroma di Morton va operato?',
      cites: [CITE.matthewsCochrane],
      a: 'Di solito si considera la chirurgia quando diversi mesi di gestione conservativa, con cambio di scarpe, cuscinetti e uno o due cicli di infiltrazioni, non hanno dato un sollievo duraturo. La neurectomia, la rimozione del tratto di nervo ispessito, è l’intervento più comune. Toglie il dolore a molte persone ma lascia un intorpidimento permanente tra le dita interessate.',
    },
    {
      q: 'Cosa scatena il neuroma di Morton?',
      a: 'Il neuroma di Morton è scatenato da tutto ciò che comprime il nervo tra le ossa metatarsali. I fattori scatenanti comuni sono scarpe strette o a punta, tacchi alti, attività con impatti ripetuti come la corsa e forme del piede come piede piatto o piede cavo che spostano più pressione in avanti. È più frequente nelle donne e nella mezza età.',
    },
    {
      q: 'Cos’è il test della compressione per il neuroma di Morton?',
      a: 'Il test della compressione, a volte chiamato click di Mulder, è una manovra dell’esame fisico che un clinico usa per aiutare la diagnosi del neuroma di Morton. Stringe l’avampiede da un lato all’altro mentre preme tra le teste metatarsali. Un click o uno scatto percepibile, insieme alla ricomparsa del bruciore, sostiene la diagnosi, anche se il clinico deve comunque escludere altre cause.',
    },
    {
      q: 'Camminare fa bene con il neuroma al piede?',
      a: 'Camminare in sé non danneggia il nervo, ma scarpe strette o con la suola sottile possono aumentare la compressione dell’avampiede e peggiorare i sintomi. Brevi camminate con scarpe larghe e ammortizzate di solito vanno bene. Camminate più lunghe su superfici dure o con scarpe strette spesso aumentano bruciore o formicolio tra le dita. Se camminare scatena sempre i sintomi, cambiare scarpe prima di ridurre l’attività di solito aiuta di più.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è costante e c’è anche a riposo, non solo quando cammini o con le scarpe',
      'c’è un intorpidimento che non passa tra un episodio e l’altro',
      'il dolore si è esteso oltre il terzo e il quarto dito e coinvolge una parte più grande dell’avampiede',
      'c’è un gonfiore visibile sul dorso del piede, il che fa pensare a qualcosa di diverso da un neuroma',
      'i sintomi non sono migliorati dopo due-tre settimane di scarpe più larghe e cuscinetti metatarsali',
      'hai anche bruciore o formicolio in entrambi i piedi o più su lungo la gamba, il che può far pensare a una neuropatia periferica invece che a un neuroma localizzato',
      'hai il diabete, una sensibilità ridotta ai piedi o una cattiva circolazione',
      'il dolore è comparso dopo un trauma o un colpo improvviso all’avampiede',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito è pensato per fascite plantare e piede piatto, non per il neuroma di Morton. Ma gli esercizi per l’avampiede dell’app, tra cui apertura delle dita e allungamento del polpaccio, lavorano sulla stessa distribuzione del carico sull’avampiede che contribuisce ai sintomi del neuroma. Se nel check-in segni la parte anteriore della pianta sulla mappa del dolore, l’app include apertura delle dita e allungamento della fascia plantare nella tua sessione.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito non fa diagnosi di neuroma di Morton. Gli esercizi che include sono misure per il comfort e il carico. Prima vengono scarpe più larghe, cuscinetti metatarsali e una valutazione clinica.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Neuroma di Morton',
  campaign: 'guide-mortons-it',
};
