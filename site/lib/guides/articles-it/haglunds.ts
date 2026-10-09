import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Morbo di Haglund (IT) ──────────────────────────────────────────────
 *
 * Translated from `articles/haglunds.ts` (2026-10-08), written around the
 * Italian queries «morbo di Haglund», «deformità di Haglund», «esostosi
 * di Haglund», «borsite retrocalcaneare». Informal «tu». Figures, doses,
 * grades and qualifiers are identical to the English page; exercise names
 * follow `lib/guides/it.ts` and `articles-it/achilles.ts`. No new
 * citations.
 */

export const HAGLUNDS_IT: Guide = {
  lang: 'it',
  page: 'haglunds',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Morbo di Haglund: cos’è e cosa fare per il dolore',
  description:
    'Il morbo di Haglund è una sporgenza ossea dietro il tallone legata a borsite e dolore all’Achille. Cause, esercizi, scarpe e quando si opera.',
  h1: 'Morbo di Haglund: la sporgenza dietro il tallone, da cosa dipende e cosa aiuta',
  lede:
    'Il morbo di Haglund (o deformità di Haglund) è un ingrossamento osseo nella parte alta e posteriore dell’osso del tallone. Si trova proprio dove si attacca il tendine d’Achille, e quando le scarpe ci premono sopra, la borsa tra l’osso e il tendine si irrita. Il risultato è dolore dietro il tallone, gonfiore e a volte una sporgenza visibile, che in inglese viene chiamata «pump bump». La gestione conservativa è il primo approccio, ma le prove alla base sono soprattutto opinioni di esperti, non studi clinici.',
  intro: [
    'Questa pagina spiega l’anatomia, il legame con la tendinopatia achillea inserzionale e la borsite retrocalcaneare, quali misure conservative esistono e quando entra in gioco la chirurgia. Se il tuo dolore è più in alto sul tendine invece che sull’osso, la pagina degli [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/) è un punto di partenza migliore. Se il dolore è sotto il tallone, vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) o [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/).',
  ],
  takeaways: [
    'Il morbo di Haglund è una sporgenza ossea anomala nella parte posterosuperiore del calcagno, descritta per la prima volta da Patrick Haglund nel 1927. Può portare a borsite retrocalcaneare e a tendinopatia achillea inserzionale (Yuen e colleghi, 2022).',
    'La gestione conservativa comprende il cambio di scarpe (evitare contrafforti del tallone rigidi), rialzi per il tallone, stretching e rinforzo del polpaccio. Nessuno studio randomizzato ha testato le cure conservative proprio per il morbo di Haglund (Choo e colleghi, 2020).',
    'Per il dolore inserzionale all’Achille legato al morbo di Haglund, le discese eccentriche del tallone vanno fatte a terra in piano. Una dorsiflessione profonda schiaccia il tendine contro la sporgenza (Jonsson e colleghi, 2008).',
    'La chirurgia si valuta dopo almeno sei mesi di gestione conservativa senza risultati. Una revisione sistematica del 2022 ha trovato che sia la chirurgia aperta sia quella endoscopica miglioravano i punteggi di funzionalità, con un recupero più breve per le tecniche endoscopiche (Yuen e colleghi, 2022).',
    'La linea guida del 2024 sulla tendinopatia achillea dà all’esercizio una **A** per la tendinopatia della porzione media, ma i casi inserzionali, che comprendono il morbo di Haglund, richiedono modifiche per evitare una dorsiflessione che irrita (Chimenti e colleghi, 2024).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è il morbo di Haglund?',
      figure: { id: 'haglund', caption: 'Il morbo di Haglund è una sporgenza ossea nell’angolo alto e posteriore dell’osso del tallone. La borsa tra la sporgenza e il tendine d’Achille può restare schiacciata.', alt: 'Vista laterale di una caviglia e di un tallone che mostra il tendine d’Achille, una sporgenza ossea nell’angolo alto e posteriore dell’osso del tallone e una piccola sacca di liquido tra i due.' },
      paragraphs: [
        'Il morbo di Haglund è una sporgenza ossea nella parte posterosuperiore del calcagno, l’angolo alto e posteriore dell’osso del tallone. Tra questa sporgenza e il tendine d’Achille c’è una piccola sacca piena di liquido chiamata borsa retrocalcaneare. Quando la sporgenza è pronunciata, la borsa resta schiacciata tra l’osso e il tendine, e questo causa infiammazione (borsite retrocalcaneare) e dolore dietro il tallone.',
        'La sporgenza in sé è una variazione della struttura. Alcune persone hanno un calcagno più pronunciato di altre. Diventa un problema quando la pressione della scarpa, il carico sul tendine o entrambi irritano la borsa e l’inserzione del tendine. L’insieme di sporgenza ossea, borsite e tendinopatia achillea inserzionale a volte viene chiamato sindrome di Haglund.',
        'Il termine inglese «pump bump» nasce dal legame con le scarpe con il retro rigido, come le décolleté o le scarpe eleganti, che premono direttamente sulla sporgenza. Ma non sono solo le scarpe a causarla. Anche la meccanica del piede, un polpaccio rigido e il carico sul tendine hanno un ruolo.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Che legame c’è tra il morbo di Haglund e la tendinopatia achillea inserzionale?',
      paragraphs: [
        'Il morbo di Haglund e la tendinopatia achillea inserzionale compaiono spesso insieme, ma non sono lo stesso problema. La tendinopatia inserzionale è un dolore nel punto in cui il tendine d’Achille si attacca all’osso del tallone, di solito da sovraccarico. Il morbo di Haglund è una forma particolare dell’osso. La sporgenza può irritare il tendine da dietro, e l’inserzione del tendine può risentire della stessa compressione che infiamma la borsa.',
        'Il legame pratico: se hai una sporgenza di Haglund e dolore dietro il tallone, il dolore può venire dalla borsa, dall’inserzione del tendine o da entrambe. Un professionista sanitario può distinguerle controllando dove il punto dolente è più forte e se lo stretching o il carico riproducono il dolore.',
        'La linea guida del 2024 sulla tendinopatia achillea separa chiaramente la forma della porzione media da quella inserzionale. Per i problemi inserzionali, che comprendono i casi legati al morbo di Haglund, il protocollo standard delle discese eccentriche del tallone va modificato. Una dorsiflessione profonda, cioè lasciar scendere il tallone sotto il bordo del gradino, schiaccia il tendine contro l’osso e può riaccendere i sintomi.',
      ],
      cites: [CITE.achillesGuideline, CITE.jonsson],
    },
    {
      h2: 'Cos’è la borsite retrocalcaneare?',
      paragraphs: [
        'La borsa retrocalcaneare si trova nello spazio tra il calcagno e il tendine d’Achille. Il suo compito è ridurre l’attrito. Quando la sporgenza di Haglund è pronunciata, la borsa viene schiacciata durante la dorsiflessione (quando pieghi la caviglia e il piede sale). Il risultato è gonfiore, dolore e a volte arrossamento dietro il tallone.',
        'La borsite retrocalcaneare può esserci anche senza morbo di Haglund, per esempio dopo un aumento improvviso della corsa o del lavoro in salita. Ma la sporgenza ossea la rende più probabile. Le scarpe con un contrafforte del tallone rigido che preme sulla sporgenza sono un irritante meccanico diretto.',
        'Il dolore della borsite retrocalcaneare è dietro il tallone, in profondità tra tendine e osso. È diverso dalla borsite superficiale (un gonfiore morbido e dolente sulla pelle) e dal dolore nella parte interna del tallone tipico della fascite plantare.',
      ],
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
    },
    {
      h2: 'Quali sono le opzioni conservative per il morbo di Haglund?',
      paragraphs: [
        'Una revisione narrativa del 2020 elenca i primi passi conservativi: cambiare scarpe (evitare quelle con contrafforte del tallone rigido, usare scarpe aperte dietro o imbottire la zona del tallone), rialzi per il tallone per ridurre la tensione sull’Achille, allungare gastrocnemio e soleo, rinforzare il polpaccio e modificare l’attività.',
        'Nessuno studio randomizzato controllato ha testato uno di questi interventi proprio per il morbo di Haglund. Le prove sono opinioni di esperti e serie di casi. La revisione chirurgica del 2022 ha notato che la maggior parte degli autori raccomanda almeno sei mesi di cure conservative prima di valutare la chirurgia.',
        'Il cambiamento più immediato spesso riguarda la scarpa. Se un contrafforte rigido preme sulla sporgenza, togliere quella pressione può ridurre in fretta i sintomi. Scarpe aperte dietro, scarpe con un contrafforte morbido o flessibile, o un’imbottitura messa dentro la scarpa intorno (non sopra) alla sporgenza sono opzioni pratiche.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
    {
      h2: 'Quali esercizi aiutano con il morbo di Haglund?',
      keyFact: 'In uno studio pilota su 27\u00A0persone con dolore inserzionale all’Achille, un carico eccentrico a terra in piano che evitava la dorsiflessione profonda ha dato buoni risultati nel 67% dei casi (Jonsson e colleghi, 2008).',
      paragraphs: [
        'L’esercizio per il morbo di Haglund ha due obiettivi: ridurre la rigidità del polpaccio che tira sul tallone e costruire la forza del polpaccio che aiuta il tendine a reggere il carico. Entrambi vengono dagli studi sulla tendinopatia achillea. Nessuno studio li ha testati proprio per il morbo di Haglund.',
        'La modifica chiave è: solo a terra in piano. Per il dolore inserzionale all’Achille, uno studio pilota del 2008 su 27\u00A0persone ha testato un carico eccentrico senza dorsiflessione oltre la posizione neutra, cioè il tallone non scendeva mai sotto il livello del pavimento. Sono stati riportati buoni risultati nel 67% dei casi. Le discese del tallone standard dal bordo di un gradino, che lasciano scendere il tallone sotto il bordo e portano la caviglia in dorsiflessione profonda, possono schiacciare il tendine contro la sporgenza e peggiorare i sintomi.',
        'La pagina sulle [discese eccentriche del tallone](/it/esercizi/discese-eccentriche-tallone/) spiega il movimento nel dettaglio. Con il morbo di Haglund e il dolore inserzionale, fai ogni sollevamento e ogni discesa a terra in piano. Non scendere sotto il bordo del gradino. Anche lo stretching del polpaccio deve essere delicato, fermandoti prima che la dorsiflessione profonda irriti la parte posteriore del tallone.',
      ],
      exercises: [
        {
          name: 'Discese eccentriche del tallone (a terra in piano)',
          evidence: { level: 'early', why: 'Jonsson 2008 era un piccolo studio pilota non controllato (27\u00A0pazienti, nessun gruppo di confronto): un carico eccentrico solo a terra in piano, senza dorsiflessione oltre la posizione neutra, ha riportato buoni risultati nel 67% dei pazienti con dolore inserzionale all’Achille. Nessuno studio controllato lo ha testato per il morbo di Haglund, quindi le prove restano iniziali e non moderate.' },
          dose: 'Walkito parte da 3 x 10, ogni gamba. Protocollo di Jonsson: 3 x 15, due volte al giorno, tre mesi',
          how: 'Stai su un pavimento piano (non sul bordo di un gradino). Sali su entrambi i piedi, sposta il peso sulla gamba dolorante, scendi piano in tre secondi. Il tallone torna al livello del pavimento, non sotto. Usa entrambi i piedi per risalire. Prima a ginocchio teso; aggiungi le serie a ginocchio piegato quando quelle a ginocchio teso risultano gestibili.',
          often: 'Giorni di forza. Protocollo di Jonsson: due volte al giorno.',
          feel: 'Lavoro nel polpaccio durante la discesa. Un po’ di fastidio al tendine è accettabile se passa entro la mattina dopo.',
          stop: 'Dolore dietro il tallone sopra 5/10, o un dolore che non passa durante la notte',
          media: 'heel_drop_straight',
          caption: 'Discesa eccentrica del tallone a terra in piano: su con entrambi i piedi, giù piano su uno, il tallone resta al livello del pavimento',
          alt: 'Una figura che abbassa piano un tallone dalle punte fino al livello del pavimento, con il tendine d’Achille evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'Supportati dalla linea guida come parte della progressione di carico per l’Achille. Non testati direttamente per il morbo di Haglund.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi su un pavimento piano. Sali dritto sopra gli alluci, scendi piano in tre secondi. I due piedi si dividono il carico. È il punto di partenza a carico più basso prima del lavoro eccentrico su una gamba.',
          often: 'Quasi tutti i giorni della settimana, finché questo livello è ancora impegnativo',
          feel: 'I polpacci che lavorano insieme, una leggera tensione al tendine',
          stop: 'Dolore dietro il tallone sopra 5/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi a terra in piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso, delicato)',
          evidence: { level: 'early', why: 'Fa parte della gestione conservativa del morbo di Haglund secondo le raccomandazioni degli esperti. Nessuno studio randomizzato per questo problema. Evita la dorsiflessione profonda.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Porta un piede indietro, gamba dietro tesa, tallone a terra. Sporgiti in avanti finché senti un allungamento nella parte alta del polpaccio. Fermati prima che l’allungamento arrivi alla parte posteriore dell’osso del tallone. Non spingere la caviglia in una piega profonda.',
          often: 'Ogni giorno, dopo il lavoro di forza',
          feel: 'Un allungamento nel polpaccio, non dolore all’attaccatura dell’Achille',
          stop: 'Qualsiasi irritazione dietro l’osso del tallone',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: resta delicato, fermati prima di irritare la parte posteriore del tallone',
          alt: 'Una figura appoggiata al muro con una gamba tesa dietro, con i muscoli del polpaccio evidenziati',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato, delicato)',
          evidence: { level: 'early', why: 'Lavora sul muscolo più profondo del polpaccio. Stessa cautela: evita la dorsiflessione profonda con il dolore inserzionale.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro, piega il ginocchio dietro finché l’allungamento scende. Fermati prima del punto in cui la parte posteriore del tallone viene schiacciata. Il soleo si allunga solo con il ginocchio piegato.',
          often: 'Ogni giorno, dopo l’allungamento del polpaccio',
          feel: 'Un allungamento nella parte bassa del polpaccio, non sull’osso del tallone',
          stop: 'Dolore all’attaccatura dell’Achille o sulla sporgenza',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro, resta delicato sul tallone',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline, CITE.chooRearfoot],
    },
    {
      h2: 'Quanto dolore va bene durante gli esercizi?',
      keyFact: 'Il modello di controllo del dolore permette un dolore fino a circa 5 su 10 durante il carico, purché torni al livello di base entro la mattina dopo e non peggiori di settimana in settimana (Silbernagel e colleghi, 2007).',
      paragraphs: [
        'Il modello di controllo del dolore di Silbernagel 2007 per la tendinopatia achillea permetteva un dolore fino a circa 5 su 10 durante il carico, purché tornasse al livello di base entro la mattina dopo e non peggiorasse di settimana in settimana. Questo modello è stato testato per il dolore all’Achille nella porzione media, non proprio per il morbo di Haglund o i casi inserzionali, ma è la soglia di dolore più citata negli studi sull’Achille.',
        'Per i problemi inserzionali legati al morbo di Haglund, sii più prudente. La sporgenza aggiunge un elemento meccanico che la tendinopatia della porzione media non ha: la compressione di borsa e tendine contro l’osso. Se gli esercizi provocano un dolore acuto dietro il tallone che non passa in fretta, riduci il carico o passa a tenute isometriche prima di riprovare il lavoro eccentrico.',
      ],
      cites: [CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Quando si valuta la chirurgia per il morbo di Haglund?',
      keyFact: 'Una revisione sistematica del 2022 su 20\u00A0studi ha trovato che sia la chirurgia aperta sia quella endoscopica miglioravano i punteggi di funzionalità AOFAS, con un recupero più breve per le tecniche endoscopiche (Yuen e colleghi, 2022).',
      paragraphs: [
        'Della chirurgia si parla dopo che almeno sei mesi di gestione conservativa non hanno dato un sollievo sufficiente. La revisione sistematica del 2022 di Yuen e colleghi ha incluso 20\u00A0studi e ha trovato che sia le tecniche aperte sia quelle endoscopiche miglioravano i punteggi AOFAS (American Orthopaedic Foot and Ankle Society). Gli approcci endoscopici mostravano tempi di recupero più brevi.',
        'L’intervento di solito consiste nel rimuovere la sporgenza ossea (calcaneoplastica), asportare la borsa infiammata e in alcuni casi pulire o riattaccare il tendine d’Achille. Le complicazioni possono includere problemi di guarigione della ferita, lesioni ai nervi e indebolimento del tendine. La decisione spetta a te e al tuo chirurgo.',
        'Questa pagina non consiglia né sconsiglia la chirurgia. Le misure conservative descritte sopra sono il punto da cui parte la maggior parte delle persone, e molte rispondono abbastanza bene da evitare l’operazione. Se sei mesi di cambio di scarpe, esercizi e modifiche dell’attività non hanno aiutato, uno specialista di piede e caviglia può parlarti delle opzioni chirurgiche.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Le scarpe possono causare il morbo di Haglund?',
      paragraphs: [
        'Le scarpe non creano la sporgenza ossea. La forma del calcagno dipende in parte dalla genetica. Ma le scarpe con un contrafforte del tallone rigido e duro possono irritare una sporgenza che altrimenti non farebbe male. Da qui viene il nome inglese «pump bump», per il retro rigido delle scarpe tipo décolleté.',
        'Scarpe da evitare: qualsiasi scarpa con un contrafforte del tallone duro e stretto che preme dietro il tallone. Scarpe da cercare: bordi del tallone morbidi o imbottiti, retro leggermente aperto o flessibile e abbastanza spazio perché il contrafforte non affondi. Anche i rialzi per il tallone dentro la scarpa possono spostare leggermente il tendine d’Achille lontano dalla sporgenza.',
        'Cambiare scarpe è il passo più immediato da mettere in pratica e quello raccomandato in modo più costante dalle opinioni degli esperti. Se riesci a togliere la pressione, spesso riesci a ridurre il dolore.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
  ],
  faq: [
    {
      q: 'Cos’è il «pump bump»?',
      cites: [CITE.yuenHaglund],
      a: '«Pump bump» è il nome colloquiale inglese del morbo di Haglund, un ingrossamento osseo nella parte alta e posteriore dell’osso del tallone. Il nome viene dalle scarpe con il tallone rigido (le «pumps», cioè le décolleté) che premono sulla sporgenza e irritano il tessuto tra l’osso e il tendine d’Achille, causando dolore e gonfiore.',
    },
    {
      q: 'Il morbo di Haglund è la stessa cosa della tendinite d’Achille?',
      cites: [CITE.achillesGuideline, CITE.yuenHaglund],
      a: 'No. Il morbo di Haglund è una sporgenza ossea sull’osso del tallone. La tendinite d’Achille è un dolore nel tendine stesso, di solito da sovraccarico. Compaiono spesso insieme perché la sporgenza può irritare il tendine nel punto in cui si attacca. La linea guida del 2024 considera la tendinopatia achillea inserzionale, che può coinvolgere il morbo di Haglund, distinta dalla forma della porzione media.',
    },
    {
      q: 'Il morbo di Haglund può passare senza operazione?',
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
      a: 'La sporgenza ossea non sparisce senza chirurgia. Ma il dolore sì. Molte persone gestiscono i sintomi con cambio di scarpe, rialzi per il tallone, allungamento e rinforzo del polpaccio e modifiche dell’attività. Della chirurgia si parla dopo che almeno sei mesi di gestione conservativa non hanno dato sollievo.',
    },
    {
      q: 'Quali esercizi evitare con il morbo di Haglund?',
      cites: [CITE.jonsson],
      a: 'Evita gli esercizi che portano la caviglia in dorsiflessione profonda, cioè il piede che si piega verso lo stinco oltre la posizione neutra. Le discese eccentriche del tallone standard dal bordo di un gradino, in cui il tallone scende sotto il gradino, schiacciano il tendine contro la sporgenza. Fai sollevamenti e discese del tallone solo a terra in piano. Evita allungamenti del polpaccio aggressivi che irritano la parte posteriore del tallone.',
    },
    {
      q: 'Il morbo di Haglund va operato?',
      cites: [CITE.yuenHaglund],
      a: 'Non sempre. La cura conservativa è il primo approccio. Una revisione sistematica del 2022 ha notato che la maggior parte degli autori raccomanda almeno sei mesi di gestione conservativa prima di valutare la chirurgia. L’intervento consiste nel rimuovere la sporgenza ossea, la borsa infiammata e a volte nel pulire il tendine. Sia l’approccio aperto sia quello endoscopico migliorano i risultati.',
    },
    {
      q: 'Quali sono le scarpe migliori per il morbo di Haglund?',
      cites: [CITE.chooRearfoot],
      a: 'Scarpe con un contrafforte del tallone morbido, imbottito o flessibile. Evita le scarpe con il retro rigido che premono sulla sporgenza. Scarpe aperte dietro, zoccoli o scarpe con il bordo del tallone sagomato possono ridurre la pressione diretta. I rialzi per il tallone dentro la scarpa possono spostare leggermente il tendine lontano dalla sporgenza.',
    },
    {
      q: 'Cos’è la borsite retrocalcaneare?',
      cites: [CITE.yuenHaglund],
      a: 'La borsite retrocalcaneare è l’infiammazione della sacca piena di liquido (borsa) tra il tendine d’Achille e l’osso del tallone. Il morbo di Haglund la rende più probabile perché l’osso sporgente schiaccia la borsa durante i movimenti della caviglia. Il dolore è profondo, dietro il tallone, e spesso peggiora con le scarpe e la dorsiflessione.',
    },
    {
      q: 'Cosa succede se non curi il morbo di Haglund?',
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
      a: 'Senza cambiamenti, la sporgenza non si riduce e lo sfregamento della scarpa che l’ha causata di solito continua, quindi dolore e borsite retrocalcaneare possono continuare ad aumentare. Un’irritazione che dura a lungo aumenta anche il rischio di tendinopatia achillea inserzionale. La crescita ossea in sé non regredisce con le cure conservative, anche se i sintomi spesso si calmano quando si cambiano scarpe e carico.',
    },
    {
      q: 'Camminare fa male con il morbo di Haglund?',
      cites: [CITE.chooRearfoot],
      a: 'Camminare in sé non è dannoso, e restare attivi di solito va bene. Quello che conta è la scarpa: un contrafforte del tallone rigido o basso che sfrega sulla sporgenza può peggiorare dolore e borsite a ogni passo. Passare a scarpe con il tallone morbido o aperto di solito è più utile del riposo assoluto.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai sentito uno schiocco improvviso, uno strappo o la sensazione di aver ricevuto un calcio dietro la gamba. Può indicare una rottura del tendine d’Achille',
      'c’è un gonfiore importante, arrossamento o calore dietro il tallone, soprattutto con la febbre',
      'il dolore peggiora sempre di più nonostante il cambio di scarpe e le misure conservative per diverse settimane',
      'non riesci a spingerti sulle punte o a camminare normalmente',
      'il dolore c’è a riposo o ti sveglia di notte, il che può indicare una frattura da stress o un altro problema oltre alla borsite',
      'il dolore al tallone si accompagna a intorpidimento o formicolio',
      'hai preso di recente antibiotici fluorochinolonici (come la ciprofloxacina) e hai un nuovo dolore al tendine',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'La progressione di carico del polpaccio di Walkito va dai sollevamenti da seduto ai sollevamenti su due piedi, a una tenuta, alle discese eccentriche del tallone e oltre. Con il morbo di Haglund e il dolore inserzionale all’Achille, ogni passaggio resta a terra in piano invece di scendere sotto il bordo di un gradino. Walkito ti fa salire di livello quando due sessioni a quel livello sono risultate facili, non secondo un calendario fisso.',
    more: [
      'Le sessioni durano 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni un test controlla resistenza del polpaccio ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi. Se hai una sporgenza visibile dietro il tallone e non sei sicuro di cosa causi il dolore, fatti controllare da un professionista sanitario prima di iniziare a caricare.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Morbo di Haglund',
  campaign: 'guide-haglunds-it',
};
