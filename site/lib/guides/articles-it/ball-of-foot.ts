import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ball-of-foot.ts`, written around the queries
 * «metatarsalgia», «dolore pianta del piede sotto le dita» and «dolore
 * avampiede esercizi». Informal «tu». Exercise names as in `it.ts`. Figures,
 * doses, grades and qualifiers are identical to the English page.
 */

export const BALL_OF_FOOT_IT: Guide = {
  lang: 'it',
  page: 'ballOfFoot',
  mainSource: CITE.amaha,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Metatarsalgia, dolore all’avampiede: cause, esercizi',
  description:
    'Dolore sotto l’avampiede: cause, metatarsalgia o neuroma di Morton, esercizi per le dita, polpaccio, cuscinetti metatarsali e quando farsi vedere.',
  h1: 'Dolore sotto l’avampiede: cosa lo causa e cosa aiuta',
  lede:
    'Spingi per fare il passo ed eccolo: un dolore acuto proprio dietro le dita, come camminare su un sassolino. L’avampiede regge tutto il peso del corpo a ogni passo, e diversi problemi possono renderlo doloroso. Questa pagina spiega quali sono, cosa dicono le prove su esercizi e scarpe, e dove la ricerca, onestamente, ha ancora dei vuoti.',
  intro: [
    'Il termine clinico generale è metatarsalgia, cioè dolore intorno alle teste metatarsali, le nocche ossee dietro le dita. Ma metatarsalgia descrive dove fa male, non è una diagnosi. Sotto quel nome rientrano diversi problemi, e non rispondono tutti alla stessa cosa.',
  ],
  toc: true,
  takeaways: [
    'In uno studio su 41\u00A0persone con metatarsalgia primaria, un programma di esercizi per le dita di 8\u00A0settimane ha migliorato il dolore in media di 2,7\u00A0punti su una scala da 10. Lo studio non aveva un gruppo di controllo (Amaha e colleghi, 2020).',
    'Un gastrocnemio rigido, il muscolo più grande e superficiale del polpaccio, sposta il peso in avanti sull’avampiede. In una serie di 254\u00A0persone con fascite plantare, tra il 52 e il 60% aveva una contrattura isolata del gastrocnemio (Patel e DiGiovanni, 2011).',
    'I cuscinetti metatarsali messi subito dietro le teste metatarsali sono l’approccio conservativo più studiato per il dolore all’avampiede.',
    'Il neuroma di Morton e la metatarsalgia si somigliano nei sintomi ma differiscono per la posizione: il dolore del neuroma è di solito tra il terzo e il quarto dito, con formicolio, mentre la metatarsalgia è più diffusa.',
  ],
  sections: [
    {
      h2: 'Cos’è l’avampiede?',
      figure: { id: 'ball', caption: 'L’avampiede sta sotto le estremità delle ossa metatarsali. Il dolore della metatarsalgia è spesso sotto il secondo e il terzo.', alt: 'Vista dall’alto delle ossa del piede con le estremità del secondo, terzo e quarto metatarso evidenziate in rosso.' },
      paragraphs: [
        'L’avampiede è la zona imbottita della pianta proprio dietro le dita. Sotto ci sono le teste delle cinque ossa metatarsali, ossa lunghe che vanno dal mesopiede alla base di ogni dito. Quando cammini, nella fase di spinta l’avampiede regge circa il doppio del peso del corpo.',
        'I muscoli che piegano e aprono le dita si chiamano muscoli intrinseci del piede. Aiutano a dividere quel carico durante la spinta. Quando si indeboliscono, o quando la struttura del piede cambia, più forza arriva sulle teste metatarsali, ed è spesso lì che inizia il dolore.',
      ],
    },
    {
      h2: 'Cosa causa il dolore sotto l’avampiede?',
      paragraphs: [
        '**Metatarsalgia** è l’etichetta più comune. Descrive dolore e infiammazione intorno a una o più teste metatarsali, di solito la seconda e la terza. Sovraccarico, un secondo metatarso lungo, il piede cavo e polpacci rigidi possono contribuire tutti.',
        '**Neuroma di Morton** è un ispessimento del nervo tra le teste metatarsali, il più delle volte tra il terzo e il quarto dito. Dà bruciore, formicolio o intorpidimento più che un semplice dolore. Scarpe strette o con il tacco alto schiacciano il nervo e lo peggiorano.',
        '**Sesamoidite** è l’infiammazione dei due piccoli ossicini dentro il tendine sotto l’articolazione dell’alluce. Il dolore è proprio sotto l’alluce, non sotto il centro dell’avampiede.',
        '**Frattura da stress del metatarso** è una piccola crepa in una delle ossa metatarsali, di solito la seconda o la terza. Il dolore è localizzato, spesso peggiora durante la giornata e può far male di notte. Un gonfiore sul dorso del piede è comune. Questa richiede esami di imaging e riposo.',
        '**Dita ad artiglio e dita a martello** piegano verso il basso le articolazioni delle dita, il che solleva il dito da terra e rimanda il suo carico di spinta sulla testa metatarsale dietro.',
        '**Tacchi alti e scarpe strette** spostano il peso in avanti sull’avampiede e stringono insieme le teste metatarsali, ed è per questo che il neuroma di Morton è più comune in chi li porta.',
        '**Piede cavo** (un piede con un arco alto e rigido) riduce la superficie d’appoggio della pianta e concentra la pressione su tallone e avampiede. All’opposto, anche il [piede piatto](/it/esercizi-piede-piatto/) può contribuire al dolore all’avampiede, perché cambia il modo in cui il piede rulla durante la spinta.',
        '**Polpacci rigidi** sono una causa sottovalutata. Quando il gastrocnemio, il muscolo più grande e superficiale del polpaccio, è rigido, la caviglia non riesce a piegarsi abbastanza camminando. Il corpo compensa alzando il tallone prima, e così sposta più carico sull’avampiede. È lo stesso meccanismo dietro la [fascite plantare](/it/esercizi-fascite-plantare/) e la [tendinite d’Achille](/it/tendinite-achille-esercizi/).',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Come distinguere questi problemi?',
      paragraphs: [
        'La posizione è il primo indizio:',
        {
          list: [
            'Un dolore diffuso sotto la seconda e la terza testa metatarsale fa pensare alla metatarsalgia.',
            'Un dolore tra il terzo e il quarto dito, con formicolio, fa pensare al neuroma di Morton.',
            'Un dolore proprio sotto l’articolazione dell’alluce è più compatibile con la sesamoidite.',
            'Un punto preciso sul dorso del piede con gonfiore fa sorgere il dubbio di una frattura da stress.',
          ],
        },
        'Le fratture da stress spesso non si vedono in una radiografia normale nelle prime due o tre settimane e possono richiedere una risonanza magnetica. **Vale la pena farsi vedere da un professionista sanitario** quando il dolore dura oltre due settimane nonostante riposo e cambio di scarpe, o quando ci sono formicolio, dolore notturno o gonfiore visibile.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Gli esercizi aiutano il dolore sotto l’avampiede?',
      keyFact: 'In uno studio pre-post del 2020 su 41\u00A0persone con metatarsalgia primaria, un programma di esercizi per le dita di 8\u00A0settimane ha abbassato il dolore in media di 2,7\u00A0punti su una scala da 10, senza gruppo di controllo (Amaha e colleghi, 2020).',
      paragraphs: [
        'La risposta onesta è che **le prove sugli esercizi per la metatarsalgia sono iniziali e limitate.** Sono molto più scarse di quelle per la [fascite plantare](/it/esercizi-fascite-plantare/) o la tendinite d’Achille, dove esistono studi randomizzati.',
        'Lo studio migliore finora è uno studio pre-post del 2020 su 41\u00A0persone (56\u00A0piedi) con metatarsalgia primaria. Un programma di esercizi per le dita di 8\u00A0settimane, soprattutto raccolta dell’asciugamano e raccolta di biglie, ha abbassato il punteggio del dolore in media di 2,7\u00A0punti su una scala da 10 e ha migliorato la forza di presa delle dita. Ma non c’era un gruppo di controllo, quindi il miglioramento potrebbe in parte riflettere un recupero naturale. Gli autori hanno chiesto studi randomizzati.',
        'La logica è semplice: durante la spinta, le dita aiutano a dividere il carico con le teste metatarsali. Quando i muscoli flessori delle dita sono deboli, più forza arriva sui metatarsi. Lo studio del 2020 sostiene questa idea, ma un solo studio senza controllo non è una prova. Chi aveva sintomi da più di un anno è migliorato meno, e così chi aveva un IMC più alto.',
      ],
      sourceNote:
        'Amaha 2020: 41\u00A0pazienti, 56\u00A0piedi, età media 63,4. Disegno pre-post. VAS migliorata da 5,2 a 2,5 (p < 0,01). Migliorati AOFAS, test di raccolta delle biglie e tempo in appoggio su una gamba (tutti p < 0,01). Nessun gruppo di controllo.',
      cites: [CITE.amaha],
    },
    {
      h2: 'Un polpaccio rigido peggiora il dolore all’avampiede?',
      keyFact: 'Su 254\u00A0persone con fascite plantare, tra il 52 e il 60% aveva una contrattura isolata del gastrocnemio, un polpaccio rigido legato anche al sovraccarico dell’avampiede (Patel e DiGiovanni, 2011).',
      paragraphs: [
        'Molto probabilmente sì. Quando il gastrocnemio è rigido, la caviglia non si piega abbastanza camminando. Il corpo alza il tallone prima, e questo butta più peso sull’avampiede. Il termine clinico è equino funzionale, ed è una causa riconosciuta di metatarsalgia.',
        'I numeri vengono dalla ricerca sulla fascite plantare, ma il meccanismo è lo stesso. Su 254\u00A0persone con fascite plantare, tra il 52 e il 60% aveva una contrattura isolata del gastrocnemio. Uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli ha trovato che una dorsiflessione della caviglia ridotta (quanto il piede si piega verso lo stinco) era il fattore di rischio indipendente più forte, con una probabilità 23,3\u00A0volte più alta.',
        'Nessuno studio ha testato l’allungamento del polpaccio proprio per la metatarsalgia, ma il legame è riconosciuto in clinica. Vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) per saperne di più sul legame tra polpaccio e caviglia.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'E cuscinetti metatarsali, plantari e scarpe?',
      paragraphs: [
        'I cuscinetti metatarsali sono l’approccio conservativo più usato. Un cuscinetto messo subito dietro le teste metatarsali solleva un po’ il corpo dell’osso e distribuisce la pressione su una superficie più ampia. La posizione conta. Troppo avanti, proprio sotto la testa, può peggiorare il dolore.',
        'Le scarpe con suola a dondolo riducono la pressione sull’avampiede perché fanno rullare il piede nella spinta senza piegarsi alle articolazioni metatarsali. Una punta larga evita che le teste vengano schiacciate insieme. **Lasciare le scarpe strette o con il tacco è spesso il primo passo più semplice.**',
        'Cuscinetti e scarpe cambiano come si distribuisce il carico. Gli esercizi costruiscono la forza e la flessibilità per reggerlo. Quando c’entra anche lo [stare in piedi tutto il giorno](/it/dolore-piedi-stare-in-piedi/), contano entrambe le cose.',
      ],
    },
    {
      h2: 'Quali esercizi aiutano il dolore sotto l’avampiede?',
      paragraphs: [
        'Questi esercizi lavorano su due lati del problema: la forza delle dita e dei muscoli intrinseci del piede (per dividere il carico nella spinta) e la flessibilità del polpaccio (per non sovraccaricare l’avampiede). Nessuno è stato testato in uno studio randomizzato proprio per la metatarsalgia.',
        'Quando tocchi la zona dell’avampiede sulla mappa del dolore di Walkito durante un check-in, la sessione di sollievo ti dà apertura delle dita e allungamento della fascia plantare. La zona delle dita ti dà apertura delle dita e piede corto da seduto.',
      ],
      exercises: [
        {
          name: 'Apertura delle dita',
          dose: '3\u00A0serie da 10\u00A0aperture',
          how: 'Siediti o stai in piedi con il piede appoggiato. Apri tutte e cinque le dita il più possibile, tieni 2-3\u00A0secondi, poi rilassa. Lavora sui piccoli muscoli tra i metatarsi.',
          feel: 'Un allungamento tra le dita e un leggero sforzo sul dorso del piede',
          stop: 'Dolore all’avampiede durante l’esercizio',
          evidence: { level: 'early', why: 'Nessuno studio sulla metatarsalgia. L’esercizio lavora sui muscoli intrinseci del piede che aiutano a distribuire il carico sull’avampiede.' },
          media: 'toe_spread',
          caption: 'Apertura delle dita: apri tutte e cinque le dita, tieni, rilassa',
          alt: 'Un piede con tutte e cinque le dita ben aperte, con i muscoli tra i metatarsi evidenziati',
        },
        {
          name: 'Raccolta dell’asciugamano',
          dose: '3\u00A0serie da 10\u00A0raccolte, ogni piede',
          how: 'Siediti con il piede appoggiato su un asciugamano. Piega le dita per raccogliere l’asciugamano verso di te. Rilascia e ripeti. È l’esercizio più vicino a quello usato nello studio del 2020.',
          feel: 'I muscoli sotto l’arco e le dita che lavorano',
          stop: 'Dolore all’avampiede durante l’esercizio',
          evidence: { level: 'early', why: 'Lo studio di Amaha 2020 ha usato un programma simile di esercizi per le dita e ha trovato un miglioramento del dolore in 41\u00A0persone, ma non aveva un gruppo di controllo.' },
          media: 'towel_scrunch',
          caption: 'Raccolta dell’asciugamano: piega le dita per tirare l’asciugamano verso di te',
          alt: 'Un piede su un asciugamano, con le dita piegate a raccoglierlo e i muscoli intrinseci del piede evidenziati',
        },
        {
          name: 'Piede corto, da seduto',
          dose: '3\u00A0serie da 10, tieni ognuna 5\u00A0secondi',
          how: 'Siediti con il piede appoggiato a terra. Senza arricciare le dita, prova ad accorciare il piede tirando l’avampiede verso il tallone. L’arco dovrebbe sollevarsi un po’. Lavora sui muscoli intrinseci del piede che sostengono da sotto l’arco e l’avampiede.',
          feel: 'Una tensione sotto l’arco',
          stop: 'Dolore all’avampiede durante l’esercizio',
          evidence: { level: 'moderate', why: 'Una meta-analisi del 2024 sull’allenamento del piede corto ha trovato miglioramenti nella postura del piede. Non testato proprio per la metatarsalgia.' },
          media: 'short_foot_seated',
          caption: 'Piede corto: solleva l’arco senza arricciare le dita',
          alt: 'Una figura seduta con un piede a terra, l’arco che si solleva un po’ e i muscoli intrinseci del piede evidenziati',
        },
        {
          name: 'Sollevamento dell’alluce',
          dose: '3\u00A0serie da 10, ogni piede',
          how: 'Stai in piedi o seduto con il piede appoggiato. Solleva solo l’alluce tenendo le altre quattro dita a terra. Poi al contrario: premi giù l’alluce e solleva le altre quattro. Quando l’alluce non riesce a estendersi bene, più carico passa sulle teste metatarsali vicine.',
          feel: 'Difficoltà all’inizio, poi un controllo che arriva piano piano',
          stop: 'Dolore sotto l’articolazione dell’alluce che fa pensare a una sesamoidite',
          evidence: { level: 'early', why: 'Nessuno studio diretto sulla metatarsalgia. Si basa sul ruolo biomeccanico dell’alluce nel distribuire il carico sull’avampiede.' },
          media: 'big_toe_lift',
          caption: 'Sollevamento dell’alluce: solleva l’alluce tenendo giù le altre dita',
          alt: 'Un piede a terra con l’alluce sollevato e le altre quattro dita appoggiate, con il muscolo estensore evidenziato',
        },
        {
          name: 'Allungamento della fascia plantare',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla il piede dolorante sul ginocchio opposto. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. La fascia plantare va dal tallone alla base delle dita e passa proprio sotto l’avampiede.',
          feel: 'Un allungamento lungo l’arco e sotto il piede',
          stop: 'Un dolore acuto, non una sensazione di allungamento',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare il suo grado più alto, A. Non testato proprio per la metatarsalgia, ma la fascia fa parte della stessa struttura che regge il carico.' },
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita con delicatezza',
          alt: 'Una figura che tira indietro le dita del piede accavallato, con la fascia plantare evidenziata',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio.',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Dolore nel tendine d’Achille',
          evidence: { level: 'strong', why: 'Grado A nella linea guida del 2023 sul dolore al tallone per l’allungamento del polpaccio. La rigidità del polpaccio è un fattore riconosciuto del sovraccarico dell’avampiede.' },
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa e il gastrocnemio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione dell’allungamento a ginocchio teso, poi piega il ginocchio dietro finché l’allungamento scende più in basso, vicino al tendine d’Achille. Lavora sul soleo, il muscolo più profondo del polpaccio, che si allunga solo con il ginocchio piegato.',
          feel: 'Un allungamento più in basso nel polpaccio, vicino al tallone',
          stop: 'Dolore nel tendine d’Achille',
          evidence: { level: 'strong', why: 'Stesso grado A nella linea guida. Lavora sul soleo, che contribuisce anch’esso alla rigidità della caviglia.' },
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con il soleo evidenziato',
        },
      ],
      cites: [CITE.amaha, CITE.guideline, CITE.cheng],
    },
    {
      h2: 'Cosa dicono le prove, e cosa non dicono',
      paragraphs: [
        'Le prove sugli esercizi per il dolore all’avampiede sono più scarse di quelle per la [fascite plantare](/it/esercizi-fascite-plantare/) o la tendinite d’Achille, dove esistono studi randomizzati. Per la metatarsalgia c’è un solo studio pre-post con 41\u00A0persone e nessun gruppo di controllo. Il ragionamento biomeccanico regge, e il rischio legato a esercizi delicati per le dita e allungamenti del polpaccio è basso, ma manca una prova diretta da uno studio controllato.',
        '**Gli esercizi da soli potrebbero non bastare.** Cuscinetti metatarsali, scarpe con la punta larga e meno tempo sui tacchi hanno un consenso clinico più ampio.',
        'Per il neuroma di Morton, cambiare scarpe e usare imbottiture spesso funziona meglio degli esercizi. Per una frattura da stress del metatarso, gli esercizi sono la strada sbagliata finché l’osso non è guarito. Se il dolore dura da più di qualche settimana, o si accompagna a intorpidimento o gonfiore, fallo controllare prima. [Dolore al tallone nella corsa](/heel-pain-runners/) (in inglese) spiega come gestire il carico per chi corre.',
      ],
      cites: [CITE.amaha, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Cos’è la metatarsalgia?',
      cites: [CITE.amaha],
      a: 'La metatarsalgia è dolore e infiammazione intorno alle teste metatarsali, le nocche ossee sotto l’avampiede. Descrive dove fa male, non è una singola diagnosi. Tra le cause comuni ci sono sovraccarico, piede cavo, polpacci rigidi e flessori delle dita indeboliti. In uno studio su 41\u00A0persone, gli esercizi per le dita hanno migliorato il dolore in media di 2,7\u00A0punti su una scala da 10 (Amaha 2020).',
    },
    {
      q: 'Come capire se è metatarsalgia o neuroma di Morton?',
      a: 'La metatarsalgia è un dolore da sordo ad acuto, diffuso sotto l’avampiede. Il neuroma di Morton è più specifico: bruciore, formicolio o intorpidimento tra il terzo e il quarto dito, a volte con uno scatto quando si stringe l’avampiede. Un professionista sanitario può distinguerli con una visita e un’ecografia.',
    },
    {
      q: 'Gli esercizi per le dita aiutano il dolore alla pianta del piede?',
      cites: [CITE.amaha],
      a: 'Le prove sono iniziali. Uno studio su 41\u00A0persone ha trovato che 8\u00A0settimane di esercizi per le dita miglioravano dolore e forza di presa, ma non aveva un gruppo di controllo e gli autori hanno chiesto studi randomizzati (Amaha 2020). L’idea ha senso: dita più forti dovrebbero prendersi più carico nella spinta. Ma manca una prova diretta da uno studio controllato.',
    },
    {
      q: 'Perché un polpaccio rigido causa dolore all’avampiede?',
      cites: [CITE.patelGastrocnemius, CITE.riddle],
      a: 'Quando il gastrocnemio, il muscolo più grande e superficiale del polpaccio, è rigido, la caviglia non si piega abbastanza camminando. Il corpo compensa alzando il tallone prima, e questo sposta più peso sull’avampiede. Nelle persone con fascite plantare, tra il 52 e il 60% aveva una contrattura isolata del gastrocnemio (Patel e DiGiovanni, 2011). Lo stesso meccanismo contribuisce al sovraccarico dell’avampiede.',
    },
    {
      q: 'I cuscinetti metatarsali funzionano per il dolore all’avampiede?',
      a: 'I cuscinetti metatarsali sono l’approccio conservativo più usato per il dolore all’avampiede. Sollevano il corpo del metatarso subito dietro la zona dolorante e distribuiscono la pressione su una superficie più ampia. La posizione conta: il cuscinetto va subito dietro le teste metatarsali, non proprio sotto, altrimenti può aumentare il dolore.',
    },
    {
      q: 'Il dolore sotto l’avampiede può essere una frattura da stress?',
      cites: [CITE.patelStressFracture],
      a: 'Sì. Le fratture da stress del metatarso, di solito il secondo o il terzo, danno un dolore localizzato che peggiora durante la giornata e può far male di notte. Un gonfiore sul dorso del piede è comune. Una frattura da stress spesso non si vede in una radiografia normale nelle prime due o tre settimane e può richiedere una risonanza magnetica. È uno dei motivi per farsi vedere se il dolore all’avampiede non passa.',
    },
    {
      q: 'Quali scarpe sono migliori per il dolore all’avampiede?',
      a: 'Scarpe con la punta larga, la suola ammortizzata e il tacco basso. Le scarpe con suola a dondolo aiutano perché fanno rullare il piede nella spinta senza piegarsi alle articolazioni metatarsali. Scarpe strette e tacchi alti fanno il contrario. Soprattutto per il neuroma di Morton, cambiare scarpe è spesso il singolo passo più efficace.',
    },
    {
      q: 'Quanto dura una riacutizzazione di metatarsalgia?',
      a: 'Non c’è una durata fissa. Una riacutizzazione leggera spesso si calma quando riduci l’attività che la scatena, passi a scarpe più larghe e ammortizzate e aggiungi un cuscinetto metatarsale. Le riacutizzazioni legate a una causa che continua, come tacchi alti, dita ad artiglio o un polpaccio rigido, possono durare mesi, perché nessuna durata unica va bene per ogni causa.',
    },
    {
      q: 'Cosa succede se trascuri la metatarsalgia?',
      a: 'Se la lasci stare, la metatarsalgia può cambiare il modo in cui cammini, perché viene naturale spostare il peso dal punto dolorante ad altre parti del piede, e questo può creare nuove zone di dolore. Una pressione continua sulle teste metatarsali può anche favorire calli o, più di rado, deformità delle dita come le dita a martello. Cambiare scarpe presto e usare cuscinetti metatarsali riduce questo rischio.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai formicolio, bruciore o intorpidimento alle dita, che può indicare un problema al nervo come il neuroma di Morton',
      'il dolore è in un solo punto e peggiora durante la giornata, che può far pensare a una frattura da stress',
      'c’è un gonfiore visibile sul dorso del piede',
      'il dolore è arrivato dopo un aumento improvviso di attività, una caduta o un colpo',
      'l’articolazione dell’alluce è rigida, bloccata o non si piega indietro',
      'il dolore non migliora dopo due settimane di riposo, cambio di scarpe e imbottiture',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
      'ti fanno male entrambi i piedi e altre articolazioni sono gonfie o rigide',
      'ti sveglia di notte o c’è anche a riposo',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Puoi fare da solo gli esercizi di questa pagina, oppure lasciare che sia Walkito a programmarli per te. L’app costruisce un piano una settimana alla volta. Quando segni l’avampiede sulla mappa del dolore, la sessione di check-in si concentra su apertura delle dita e allungamento della fascia plantare. Il programma più ampio aggiunge allungamento e rinforzo del polpaccio con il passare delle settimane.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto quell’obiettivo), un breve test controlla i progressi, così vedi cosa sta cambiando. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore all’avampiede si accompagna a intorpidimento, gonfiore o un nodulo, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore sotto l’avampiede',
  campaign: 'guide-ball-of-foot-it',
};
