import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/achilles.ts`, written around the queries
 * «tendinite d’Achille esercizi», «esercizi eccentrici tendine d’Achille» and
 * «tendinopatia achillea». Informal «tu». Exercise names as in `it.ts`.
 * Figures, doses, grades and qualifiers are identical to the English page.
 */

export const ACHILLES_IT: Guide = {
  lang: 'it',
  page: 'achilles',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Esercizi per la tendinite d’Achille: discese eccentriche',
  description:
    'Esercizi per la tendinite d’Achille con le dosi: discese eccentriche, carico pesante e lento, dolore inserzionale o medio e quando fermarsi.',
  h1: 'Esercizi per la tendinite d’Achille: discese eccentriche del tallone, dosi e cosa dicono gli studi',
  lede:
    'Gli esercizi per la tendinite d’Achille funzionano meglio quando la discesa del tallone è intesa come lavoro di forza, non come allungamento. La linea guida clinica del 2024 dà all’esercizio il grado più alto, **A**, e una meta-analisi a rete del 2021 su 29\u00A0studi non ha trovato un protocollo chiaramente migliore di un altro. Quello che conta è caricare il tendine con costanza per settimane.',
  intro: [
    'Questa pagina approfondisce quegli esercizi. Se il dolore è sotto il piede e non dietro il tallone, ti servono invece gli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/). La pagina sul [dolore al tallone per chi corre](/heel-pain-runners/) (in inglese) riassume entrambi. Se il dolore è lungo lo stinco invece che al tallone, vedi [esercizi per la periostite tibiale](/it/periostite-tibiale-esercizi/); se compare solo dopo una lunga giornata in piedi e non quando corri, vedi [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/). La maggior parte delle persone usa «tendinite» e «tendinopatia» come sinonimi. Le linee guida attuali usano «tendinopatia» perché di solito il problema è di carico, non un’infiammazione pura. Questa pagina usa «tendinite» nei titoli e «tendinopatia» dove la usa la linea guida.',
  ],
  takeaways: [
    'La linea guida clinica del 2024 dà all’esercizio (qualsiasi tipo che carichi il tendine) una **A**, il suo grado più alto, per la tendinopatia achillea della porzione media (Chimenti e colleghi, 2024).',
    'Una meta-analisi a rete di 29\u00A0studi randomizzati non ha trovato differenze clinicamente rilevanti tra i diversi tipi di esercizio a 3 o 12\u00A0mesi (van der Vlist e colleghi, 2021).',
    'In uno studio su 58\u00A0persone, il carico pesante e lento 3\u00A0giorni a settimana ha dato risultati altrettanto buoni degli esercizi eccentrici due volte al giorno (Beyer e colleghi, 2015).',
    'Per il dolore all’inserzione dell’Achille (proprio sull’osso del tallone), le discese del tallone vanno fatte a terra in piano invece di scendere sotto il bordo del gradino, perché una dorsiflessione profonda, cioè piegare la caviglia portando le dita verso lo stinco, schiaccia il tendine contro l’osso (Jonsson e colleghi, 2008).',
    'Un dolore durante il carico fino a circa 5/10, che passa entro la mattina dopo e non peggiora di settimana in settimana, era la regola testata in uno studio randomizzato che permetteva di continuare lo sport durante la riabilitazione (Silbernagel e colleghi, 2007).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Tendinite o tendinopatia, e cambia qualcosa negli esercizi?',
      paragraphs: [
        '«Tendinite» fa pensare a un’infiammazione. «Tendinopatia» descrive un tendine che è cambiato sotto carico, spesso ispessito, senza che l’infiammazione sia la causa principale. La linea guida del 2024 usa «tendinopatia». Per gli esercizi, il nome non cambia quello che fai. Entrambi descrivono lo stesso problema: un tendine che fa male quando viene caricato, di solito qualche centimetro sopra l’osso del tallone (porzione media) o proprio dove si attacca (inserzionale).',
        'Il punto del tendine in cui fa male invece cambia gli esercizi. Questa differenza è spiegata più sotto.',
      ],
      cites: [CITE.achillesGuideline],
    },
    {
      h2: 'Cos’è la discesa eccentrica del tallone, e perché non è un allungamento?',
      paragraphs: [
        'La discesa eccentrica del tallone è un esercizio di forza, non un allungamento per la flessibilità. Sali su entrambi i piedi, sposti il peso sul lato dolorante e scendi piano su un piede solo, lasciando il tallone scendere sotto il bordo del gradino. La fase di discesa è la contrazione eccentrica: il muscolo del polpaccio che si allunga sotto carico. È quella discesa controllata che costruisce la capacità del tendine nel giro di settimane.',
        'L’errore più comune è restare fermi in basso come in un allungamento del polpaccio. Così diventa un allungamento statico, che è uno stimolo diverso. Il punto è la discesa lenta e con carico. Tre secondi giù, con il muscolo che lavora per tutto il tempo.',
        'Nello studio di Alfredson del 1998, 15\u00A0atleti con dolore di lunga data nella parte media del tendine d’Achille hanno fatto discese eccentriche del tallone due volte al giorno, 7\u00A0giorni su 7, per tre mesi, a ginocchio teso e piegato. Tutti e 15 sono tornati al livello di corsa di prima. Era uno studio piccolo, senza gruppo di controllo, ma ha dato il via a un intero filone di ricerca.',
      ],
      exercises: [
        {
          name: 'Discese eccentriche del tallone (ginocchio teso)',
          evidence: { level: 'strong', why: 'Il protocollo originale di Alfredson; sostenuto dalla linea guida del 2024, che dà all’esercizio una A.' },
          dose: 'Alfredson: 3 x 15, due volte al giorno, tre mesi. Walkito: 3 x 10, ogni gamba',
          how: 'Stai sul bordo di un gradino. Sali su entrambi i piedi, sposta il peso sulla gamba dolorante, scendi piano in tre secondi. Il tallone scende sotto il gradino. Usa entrambi i piedi per risalire. Il ginocchio teso lavora sul gastrocnemio, il muscolo più grande e superficiale del polpaccio.',
          often: 'Due volte al giorno nel protocollo di Alfredson. Walkito: giorni di forza.',
          feel: 'Lavoro intenso nel polpaccio durante la discesa, non un allungamento in basso',
          stop: 'Dolore oltre 5/10 che non passa entro la mattina dopo, o dolore che peggiora di settimana in settimana',
          media: 'heel_drop_straight',
          caption: 'Discesa eccentrica del tallone: su con entrambi i piedi, giù piano con uno, tallone sotto il gradino',
          alt: 'Una figura su un gradino che abbassa un tallone sotto il bordo con il ginocchio teso, con il polpaccio e l’Achille evidenziati',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'Il carico pesante e lento funziona come le discese eccentriche?',
      keyFact: 'Uno studio del 2015 su 58\u00A0persone ha trovato che il carico pesante e lento tre giorni a settimana dava risultati duraturi buoni quanto il classico protocollo eccentrico due volte al giorno (Beyer e colleghi, 2015).',
      paragraphs: [
        'Sì, secondo le prove attuali. Uno studio del 2015 su 58\u00A0persone ha confrontato il carico pesante e lento (heavy slow resistance, HSR), fatto 3\u00A0giorni a settimana, con il classico protocollo eccentrico due volte al giorno. La conclusione: «Sia l’ECC tradizionale sia l’HSR danno risultati clinici positivi, ugualmente buoni e duraturi nei pazienti con tendinopatia achillea».',
        'Una meta-analisi a rete del 2021 su 29\u00A0studi non ha trovato differenze clinicamente rilevanti tra nessuno degli approcci di esercizio attivo a 3 o 12\u00A0mesi. Erano tutti meglio del non fare nulla. Nessuno studio aveva un basso rischio di bias. Gli autori consigliavano di iniziare con un programma di esercizi per il polpaccio perché costa poco e ha pochi effetti negativi.',
        'La forma del protocollo conta meno del caricare il tendine con costanza. Le discese eccentriche sono le più studiate, l’HSR è altrettanto efficace e richiede meno sessioni a settimana, ed entrambi sono punti di partenza validi. Per la versione per la fascite plantare della stessa logica di rinforzo del polpaccio, vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
    {
      h2: 'Quali esercizi aiutano la tendinite d’Achille, e quanto farne?',
      paragraphs: [
        'Gli esercizi qui sotto vanno dal carico basso al carico alto, partendo dai sollevamenti sulle punte da seduto e salendo lungo la scala. Sono le dosi di partenza di Walkito accanto ai protocolli degli studi. [Come scriviamo queste guide](/it/chi-siamo/).',
        'Per il dolore all’inserzione dell’Achille, ogni esercizio che usa un gradino va fatto invece a terra in piano. Questa modifica è spiegata nella sezione sul dolore inserzionale più sotto.',
      ],
      table: {
        caption: 'Esercizi per la tendinite d’Achille: dosi degli studi e dosi di partenza di Walkito',
        head: ['Esercizio', 'Dose del protocollo di studio', 'Dose di partenza di Walkito', 'Prove'],
        rows: [
          ['Sollevamenti sulle punte da seduto', 'Silbernagel fase 1: 3 x 10, da seduto', '3 x 10, entrambi i piedi', '**Forti**: corrisponde al protocollo pubblicato della fase 1'],
          ['Sollevamenti sulle punte su due piedi', 'Silbernagel fase 1: 3 x 10-15, in piedi', '3 x 10, entrambi i piedi', '**Forti**: corrispondenza diretta con la fase 1'],
          ['Tenuta sulle punte (isometrica)', 'La linea guida del 2024 indica l’isometria come efficace; nella pratica si suggeriscono 3-5 x 30-45\u00A0s', '3 x 20\u00A0s, entrambi i piedi', '**Moderate**: la linea guida include il carico isometrico; nessuno studio randomizzato solo isometrico sull’Achille'],
          ['Discese eccentriche del tallone (ginocchio teso)', 'Alfredson: 3 x 15, 2 volte al giorno, 7\u00A0giorni su 7, tre mesi', '3 x 10, ogni gamba', '**Forti**: il protocollo originale; grado A nella linea guida'],
          ['Allungamento del polpaccio (ginocchio teso)', 'Non fa parte degli studi sul carico; un complemento per la mobilità', '3 tenute da 30\u00A0s, ogni gamba', '**Iniziali**: inteso come mobilità, non come esercizio di carico per l’Achille'],
          ['Allungamento del soleo (ginocchio piegato)', 'Non fa parte degli studi sul carico; un complemento per la mobilità', '3 tenute da 30\u00A0s, ogni gamba', '**Iniziali**: stessa avvertenza; evita allungamenti profondi con il dolore inserzionale'],
        ],
      },
      exercises: [
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'strong', why: 'Corrisponde alla dose della fase 1 di Silbernagel 2007. Il grado A della linea guida copre tutti i tipi di carico del tendine.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Siediti con i piedi appoggiati. Spingi verso l’alto sugli avampiedi di entrambi i piedi. Le mani sulle ginocchia aggiungono resistenza. Un modo con poco carico per iniziare quando il lavoro in piedi fa troppo male.',
          often: 'Giorni di forza, finché è il tuo livello',
          feel: 'Lavoro nei polpacci, quasi nessun allungamento sul tendine',
          stop: 'Dolore oltre 5/10 che non passa entro la mattina dopo',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi sugli avampiedi, le mani aggiungono carico',
          alt: 'Una figura seduta che solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'strong', why: 'Corrispondenza diretta con la fase 1 di Silbernagel 2007. Grado A nella linea guida.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, scendi piano in tre secondi. I due piedi si dividono il carico.',
          often: 'Giorni di forza, quando quelli da seduto ti sembrano facili',
          feel: 'I polpacci che lavorano insieme, con una leggera tensione sul tendine',
          stop: 'Dolore oltre 5/10 che non passa entro la mattina dopo',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Tenuta sulle punte (isometrica)',
          evidence: { level: 'moderate', why: 'La linea guida del 2024 indica l’isometria come uno dei tipi di carico del tendine efficaci. Nessuno studio randomizzato isometrico specifico sull’Achille.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi (studi: 3-5 x 30-45\u00A0secondi)',
          how: 'Sali sulle punte con entrambi i piedi e resta fermo in alto. Non riabbassarti. È una tenuta isometrica, cioè il muscolo lavora senza muoversi, e carica il tendine senza il movimento su e giù che nelle fasi iniziali del dolore all’Achille può dare fastidio.',
          often: 'Si può fare ogni giorno nelle fasi iniziali e irritabili, prima di passare al lavoro eccentrico completo',
          feel: 'I polpacci che lavorano per restare fermi; un dolore sordo nel tendine è accettabile',
          stop: 'Dolore oltre 5/10 che non passa entro la mattina dopo',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che resta ferma sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Discese eccentriche del tallone (ginocchio teso)',
          evidence: { level: 'strong', why: 'Il protocollo originale di Alfredson del 1998. Grado A nella linea guida del 2024.' },
          dose: 'Alfredson: 3 x 15, due volte al giorno. Walkito: 3 x 10, ogni gamba',
          how: 'Stai sul bordo di un gradino. Sali su entrambi i piedi, sposta il peso sulla gamba dolorante, scendi piano con il ginocchio teso. Il tallone scende sotto il gradino. Usa entrambi i piedi per tornare in alto.',
          often: 'Due volte al giorno nel protocollo originale. Walkito: giorni di forza.',
          feel: 'Lavoro intenso nel polpaccio durante la fase di discesa',
          stop: 'Dolore oltre 5/10 che non passa entro la mattina dopo',
          media: 'heel_drop_straight',
          caption: 'Discesa eccentrica del tallone: su con entrambi, giù piano con uno, ginocchio teso',
          alt: 'Una figura su un gradino che abbassa un tallone sotto il bordo con il ginocchio teso, con il tendine d’Achille evidenziato',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'early', why: 'Non fa parte degli studi sul carico dell’Achille. Un complemento per la mobilità. Evita allungamenti profondi con il dolore inserzionale.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Non molleggiare. Con il dolore inserzionale, fallo con delicatezza e fermati se irrita l’attaccatura.',
          often: 'Dopo le sessioni con carico',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Qualsiasi tirata acuta all’attaccatura sull’osso del tallone',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa e il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'early', why: 'Non fa parte degli studi sul carico dell’Achille. Un complemento per la mobilità. Evita una dorsiflessione profonda con il dolore inserzionale.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro, piega il ginocchio dietro finché l’allungamento scende, vicino al tallone. Il soleo si allunga solo con il ginocchio piegato.',
          often: 'Dopo le sessioni con carico',
          feel: 'Un allungamento vicino al tallone',
          stop: 'Qualsiasi tirata acuta all’attaccatura dell’Achille',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
      ],
      cites: [CITE.alfredson, CITE.silbernagel, CITE.achillesGuideline],
    },
    {
      h2: 'Quanto dolore va bene durante gli esercizi per l’Achille?',
      keyFact: 'In uno studio su 38\u00A0persone, chi ha continuato a correre con un dolore tenuto intorno a 5 su 10 e passato entro la mattina è migliorato a dodici mesi quanto chi si era prima fermato a riposo (Silbernagel e colleghi, 2007).',
      paragraphs: [
        'In Silbernagel 2007, 38\u00A0persone con dolore all’Achille sono state divise in due gruppi. Un gruppo ha continuato a correre e saltare durante la riabilitazione, con la regola che il dolore durante e dopo il carico poteva arrivare a circa **5 su 10**, purché tornasse al suo livello abituale entro la mattina dopo e non peggiorasse di settimana in settimana. L’altro gruppo si è prima fermato a riposo. Entrambi sono migliorati in modo significativo a 12\u00A0mesi, senza differenze tra loro.',
        'È una soglia diversa dalla regola di stop a 6/10 della pagina sulla [fascite plantare](/it/esercizi-fascite-plantare/), che è il limite che Walkito usa per il dolore al tallone. Il valore di 5/10 viene da un solo studio, non da uno standard universale, ma è il modello del dolore più citato nella riabilitazione dell’Achille.',
        'Un po’ di fastidio durante il carico è normale ed era accettato nello studio. Un dolore che non passa durante la notte, peggiora di settimana in settimana o arriva come una fitta acuta improvvisa non lo è.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Il dolore è nella parte media del tendine o sull’osso del tallone, e perché cambia l’esercizio?',
      figure: { id: 'achilles', caption: 'Il dolore al tendine d’Achille di solito è in uno di due punti: nella parte media del tendine o dove si attacca all’osso del tallone.', alt: 'Vista laterale di un piede e una caviglia con il tendine d’Achille dal polpaccio alla parte posteriore dell’osso del tallone, e una zona rossa nella parte media del tendine.' },
      keyFact: 'In uno studio pilota su 27\u00A0persone con dolore inserzionale all’Achille, un carico eccentrico solo a terra in piano, senza dorsiflessione profonda, ha dato buoni risultati nel 67% dei casi (Jonsson e colleghi, 2008).',
      paragraphs: [
        'La tendinopatia achillea della porzione media si trova nel corpo del tendine, di solito da 2 a 6\u00A0centimetri sopra l’osso del tallone. Le discese eccentriche standard e il carico pesante e lento hanno qui le prove migliori. Le discese del tallone oltre il bordo del gradino vanno bene per il dolore nella porzione media.',
        'La tendinopatia achillea inserzionale è un dolore proprio nel punto in cui il tendine si attacca all’osso. In uno studio pilota del 2008 su 27\u00A0persone (34\u00A0tendini) con dolore inserzionale cronico, un protocollo modificato con carico eccentrico solo a terra in piano, senza dorsiflessione oltre la posizione neutra, ha riportato buoni risultati nel 67% dei casi. Una dorsiflessione profonda schiaccia il tendine contro l’osso del tallone, e questo irrita l’inserzione.',
        'Se il dolore è dietro l’osso del tallone e non più in alto nel tendine, fai tutti i sollevamenti sulle punte e le discese del tallone a terra in piano. Non scendere sotto il bordo del gradino. Evita allungamenti aggressivi per lo stesso motivo. È la modifica più importante nei programmi per l’Achille, e quella che si dimentica più spesso.',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Quanti sollevamenti sulle punte su una gamba dovresti riuscire a fare?',
      paragraphs: [
        'La linea guida del 2024 indica il test di resistenza dei sollevamenti del tallone su una gamba come parte del modo consigliato per misurare la forza del polpaccio e seguire il recupero. Uno studio con dati di riferimento su 566\u00A0adulti sani indica un valore tipico tra 23 e 24\u00A0ripetizioni, da adattare a età, sesso e livello di attività. Quello che conta è l’andamento nel tempo e la differenza tra i due lati.',
        'L’obiettivo del polpaccio nell’app è 25\u00A0sollevamenti sulle punte su una gamba. Il test si fa ogni 14\u00A0giorni finché l’obiettivo del polpaccio è attivo, poi ogni 28\u00A0giorni. Viene seguita anche la differenza tra le gambe, perché una differenza tra i lati che non se ne va può indicare un recupero incompleto.',
      ],
      cites: [CITE.hebertLosier, CITE.achillesGuideline],
    },
    {
      h2: 'Si può continuare a correre durante la riabilitazione dell’Achille?',
      paragraphs: [
        'In Silbernagel 2007, i pazienti che hanno continuato a correre durante la riabilitazione seguendo il modello di controllo del dolore non sono andati peggio di quelli che si erano prima fermati a riposo. Entrambi i gruppi sono migliorati a 12\u00A0mesi. Lo studio concludeva che un’attività continuata e guidata dal dolore «potrebbe quindi rappresentare un’opzione valida» durante la riabilitazione.',
        'Questo non vuol dire che correre sia innocuo in ogni caso. Se il dolore non passa durante la notte, o se ogni settimana va peggio, riduci. Il dolore all’attaccatura sull’osso del tallone richiede più cautela di quello nella parte media del tendine. Qualsiasi schiocco o scatto improvviso è un motivo per fermarti e rivolgerti a un professionista sanitario.',
        'La pagina sul [dolore al tallone per chi corre](/heel-pain-runners/) (in inglese) spiega più nel dettaglio come gestire il carico nella corsa.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Quanto ci vuole perché gli esercizi per l’Achille aiutino?',
      paragraphs: [
        'Il recupero dalla tendinopatia achillea si misura in mesi. I principali studi sul carico hanno seguito programmi di circa tre mesi e misurato i risultati fino a 12\u00A0mesi. La linea guida del 2024 nota che un miglioramento della funzionalità può comparire già a 2\u00A0settimane, ma un recupero più completo va ben oltre.',
        'Nessuno studio promette tempi fissi. Alcune persone rispondono più in fretta, altre più lentamente, e i casi inserzionali tendono a richiedere più tempo di quelli nella porzione media. Il filo comune è un carico costante nel tempo.',
      ],
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer, CITE.silbernagel],
    },
  ],
  faq: [
    {
      q: 'Che differenza c’è tra tendinite d’Achille e tendinopatia?',
      cites: [CITE.achillesGuideline],
      a: '«Tendinite» fa pensare a un’infiammazione, mentre la maggior parte del dolore cronico all’Achille è un problema di carico più che di infiammazione. La linea guida del 2024 usa «tendinopatia». Per gli esercizi, il nome non cambia quello che fai. Gli esercizi di questa pagina valgono per entrambi i termini.',
    },
    {
      q: 'Cosa sono le discese eccentriche del tallone per la tendinite d’Achille?',
      cites: [CITE.alfredson],
      a: 'Le discese eccentriche del tallone sono un esercizio di forza: sali su entrambi i piedi, scendi piano su uno, con il tallone che scende sotto il bordo di un gradino. Il punto è la fase di discesa. In uno studio del 1998, 15\u00A0atleti che lo facevano due volte al giorno per tre mesi sono tornati tutti al livello di corsa di prima. Ricerche successive mostrano che altri tipi di carico funzionano altrettanto bene.',
    },
    {
      q: 'Il carico pesante e lento è buono quanto le discese eccentriche?',
      cites: [CITE.beyer, CITE.vanDerVlist],
      a: 'Uno studio del 2015 su 58\u00A0persone concludeva che entrambi danno «risultati clinici positivi, ugualmente buoni e duraturi». Una meta-analisi del 2021 su 29\u00A0studi non ha trovato differenze clinicamente rilevanti tra i tipi di esercizio attivo a 3 o 12\u00A0mesi. Quello che conta è un carico costante, non il protocollo specifico.',
    },
    {
      q: 'Quanto dolore va bene durante gli esercizi per l’Achille?',
      cites: [CITE.silbernagel],
      a: 'Uno studio permetteva un dolore fino a circa 5/10 durante il carico, purché passasse entro la mattina dopo e non peggiorasse di settimana in settimana. I pazienti con quel modello sono andati bene quanto quelli che si erano prima fermati a riposo (Silbernagel 2007). Un dolore che resta alto durante la notte o peggiora ogni settimana è il segnale per ridurre.',
    },
    {
      q: 'Gli esercizi per la tendinite d’Achille inserzionale sono diversi?',
      cites: [CITE.jonsson],
      a: 'Sì. Il protocollo standard con discese profonde del tallone dava risultati scarsi per il dolore all’attaccatura sull’osso del tallone. Uno studio pilota del 2008 ha testato un carico eccentrico solo a terra in piano, senza dorsiflessione oltre la posizione neutra, e ha riportato buoni risultati nel 67% di 27\u00A0pazienti. Con il dolore inserzionale vanno evitate le discese profonde e gli allungamenti aggressivi.',
    },
    {
      q: 'Bisogna allungare un tendine d’Achille dolorante?',
      cites: [CITE.alfredson, CITE.silbernagel, CITE.beyer],
      a: 'L’allungamento non è l’esercizio principale per la tendinopatia achillea. Gli studi di questa pagina sono tutti protocolli di carico (sollevamenti e discese del tallone), non programmi di stretching. Un lavoro delicato di mobilità del polpaccio può seguire le sessioni con carico, ma gli allungamenti aggressivi possono riaccendere i sintomi, soprattutto con il dolore inserzionale, dove la dorsiflessione schiaccia l’attaccatura.',
    },
    {
      q: 'Quanto ci mettono a funzionare gli esercizi per la tendinite d’Achille?',
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer],
      a: 'Il recupero si misura in mesi. I principali studi hanno seguito programmi di carico di circa tre mesi, misurando i risultati fino a 12\u00A0mesi. La linea guida del 2024 nota che un miglioramento della funzionalità può iniziare già a 2\u00A0settimane, ma un recupero più completo va ben oltre. Nessuno studio promette tempi fissi.',
    },
    {
      q: 'Cosa non fare con la tendinite d’Achille?',
      cites: [CITE.jonsson, CITE.silbernagel],
      a: 'Evita aumenti improvvisi dei chilometri di corsa o dell’intensità degli scatti, gli allungamenti profondi del polpaccio se il dolore è all’attaccatura sull’osso del tallone, e di forzare con un dolore che resta alto la mattina dopo o peggiora di settimana in settimana. Uno schiocco o uno scatto improvviso richiede subito un professionista sanitario. Non serve nemmeno il riposo completo; un’attività guidata dal dolore di solito è un’opzione migliore che fermarsi del tutto.',
    },
    {
      q: 'Camminare peggiora la tendinite d’Achille?',
      cites: [CITE.silbernagel],
      a: 'Di solito no. Camminare ha meno impatto che correre, e molte persone con tendinopatia achillea possono continuare a camminare senza riacutizzazioni. Fai attenzione a un dolore che resta alto la mattina dopo o peggiora di settimana in settimana; è il segnale per ridurre distanza o ritmo, non per smettere del tutto di muoverti. Salite ripide e camminate veloci su superfici dure la irritano più facilmente.',
    },
    {
      q: 'Cosa si può scambiare per tendinite d’Achille?',
      cites: [CITE.chooRearfoot],
      a: 'La borsite retrocalcaneare, la deformità di Haglund e una rottura parziale dell’Achille possono dare tutte un dolore simile dietro il tallone. Una sporgenza ossea visibile fa pensare alla deformità di Haglund, mentre un gonfiore proprio all’altezza del bordo posteriore della scarpa fa pensare a una borsite. Un dolore acuto improvviso con uno schiocco, o non riuscire a salire sulle punte, richiede una valutazione urgente per una rottura del tendine.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai sentito uno schiocco o uno scatto improvviso, o la sensazione di un calcio dietro la gamba, soprattutto con difficoltà immediata a spingere o a camminare sulle punte. Può indicare una rottura del tendine d’Achille',
      'stai prendendo o hai preso di recente un antibiotico fluorochinolonico (come ciprofloxacina o levofloxacina) e hai un dolore al tendine nuovo o in peggioramento. Questi farmaci hanno un’avvertenza in riquadro nero della FDA per tendinite e rottura del tendine',
      'dolore e gonfiore sono comparsi all’improvviso con febbre, arrossamento o calore sopra il tendine',
      'c’è un gonfiore importante, un livido o un vuoto che si sente al tatto nel tendine',
      'il dolore è proprio all’attaccatura sull’osso del tallone e peggiora con gli allungamenti o le discese profonde del tallone, invece di migliorare. Fa pensare a una tendinopatia inserzionale che richiede un approccio modificato o il parere di un professionista',
      'il dolore o la rigidità peggiorano costantemente nel giro di settimane nonostante un carico costante',
      'il dolore c’è anche a riposo o ti sveglia di notte',
      'non riesci a caricare il peso sul piede o zoppichi',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi indovinare l’ordine, le dosi o quando aggiungere carico. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. La catena del polpaccio va dai sollevamenti sulle punte da seduto ai sollevamenti su due piedi, una tenuta, i sollevamenti con asciugamano, le discese eccentriche del tallone e i saltelli sulle punte. Ogni gradino si apre quando due sessioni al livello attuale ti sono sembrate facili.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto l’obiettivo del polpaccio), un test controlla resistenza del polpaccio ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi. Se il dolore è proprio all’attaccatura sull’osso del tallone, fallo controllare da un professionista sanitario prima di caricarlo forte.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Esercizi per la tendinite d’Achille',
  campaign: 'guide-achilles-it',
};
