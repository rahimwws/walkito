import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/calf-raises.ts`, written around the queries
 * «sollevamenti sulle punte fascite plantare», «esercizi polpacci fascite
 * plantare» and «protocollo Rathleff». Informal «tu». Exercise names as in
 * `it.ts`. Figures, doses, grades and qualifiers are identical to the
 * English page.
 */

export const CALF_RAISES_IT: Guide = {
  lang: 'it',
  page: 'calfRaises',
  mainSource: CITE.rathleff,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Sollevamenti sulle punte per fascite plantare: quanti farne',
  description:
    'Sollevamenti sulle punte per la fascite plantare: la dose del protocollo Rathleff, la tecnica con asciugamano, quante ripetizioni e quando progredire.',
  h1: 'Sollevamenti sulle punte per la fascite plantare: come farli e quanti',
  lede:
    'I sollevamenti sulle punte sono uno degli [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/), e sono l’esercizio dietro l’unico studio randomizzato pensato apposta per confrontare il lavoro di forza con lo stretching nella fascite plantare. In uno studio su 48\u00A0persone, sollevamenti sulle punte pesanti hanno ridotto il dolore più in fretta del solo stretching nell’arco di tre mesi. Questa pagina approfondisce quell’esercizio: il protocollo esatto, l’asciugamano, la progressione e il suo posto accanto allo stretching.',
  intro: [
    'La linea guida del 2023 sul dolore al tallone dà al lavoro di forza una **B**, un gradino sotto lo stretching con la **A**. Sono consigliati entrambi. Il sollevamento sulle punte è il lato della forza di quella coppia. Se il dolore è recente e cerchi l’elenco completo degli esercizi, parti da [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/). Questa pagina dà per scontato che tu voglia i dettagli sul sollevamento in sé.',
  ],
  takeaways: [
    'In uno studio su 48\u00A0persone, sollevamenti sulle punte con carico e un asciugamano sotto le dita hanno ridotto il dolore da fascite plantare più in fretta del solo stretching a tre mesi, anche se a dodici mesi i due gruppi erano pari (Rathleff e colleghi, 2015).',
    'La linea guida del 2023 sul dolore al tallone dà al lavoro di forza una B, il suo secondo grado più alto, e allo stretching una A (Koc e colleghi, 2023).',
    'Una dorsiflessione della caviglia ridotta, cioè quanto il piede si piega verso lo stinco, spesso dovuta a un gastrocnemio rigido, il muscolo esterno e più grande del polpaccio, è un fattore di rischio indipendente per la fascite plantare (Riddle e colleghi, 2003).',
    'L’asciugamano sotto le dita attiva il meccanismo a verricello, e così carica la fascia plantare insieme al polpaccio.',
    'Un numero di sollevamenti su una gamba intorno ai 20-25, in media circa 23-24, è un riferimento comune per gli adulti, utile per seguire i progressi nel giro di settimane (Hebert-Losier e colleghi, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'I sollevamenti sulle punte aiutano davvero la fascite plantare?',
      keyFact: 'In uno studio su 48\u00A0persone, il gruppo dei sollevamenti sulle punte aveva 29\u00A0punti in più nel Foot Function Index a tre mesi, anche se a dodici mesi i due gruppi si erano allineati (Rathleff e colleghi, 2015).',
      paragraphs: [
        'I sollevamenti sulle punte aiutano la fascite plantare perché rinforzano la catena polpaccio-Achille-fascia che assorbe il carico ogni volta che il tallone tocca terra.',
        'L’unico studio randomizzato che ha testato direttamente questo esercizio per la fascite plantare è Rathleff 2015. In quello studio, 48\u00A0persone con fascite plantare confermata da ecografia sono state divise in due gruppi. Tutti portavano plantari. Un gruppo faceva un sollevamento sulle punte lento e con carico, con un asciugamano arrotolato sotto le dita. L’altro allungava la fascia plantare. A tre mesi, il gruppo dei sollevamenti aveva 29\u00A0punti in più nel Foot Function Index. A dodici mesi, i due gruppi si erano allineati.',
        'Quindi i sollevamenti sulle punte hanno anticipato il miglioramento. Non hanno dato un miglioramento più grande nel lungo periodo. La linea guida clinica del 2023 dà al lavoro di forza una B e allo stretching una A. Li consiglia entrambi. Niente nelle prove suggerisce di sceglierne uno e saltare l’altro.',
      ],
      sourceNote:
        'Rathleff 2015: Foot Function Index più basso di 29\u00A0punti nel gruppo dei sollevamenti a 3\u00A0mesi (IC al 95%: 6-52, p = 0,016). A 12\u00A0mesi, 22 contro 16, nessuna differenza significativa.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Come si fa il sollevamento sulle punte con asciugamano per la fascite plantare?',
      paragraphs: [
        'Il sollevamento sulle punte con asciugamano è l’esercizio dello studio di Rathleff. È un sollevamento su una gamba su un gradino, con un asciugamano arrotolato sotto le dita. L’asciugamano tira le dita verso l’alto quando sei in cima, e questo attiva il meccanismo a verricello: il modo in cui la fascia plantare si tende quando l’alluce si piega indietro. Senza asciugamano alleni il polpaccio, ma carichi molto meno la fascia.',
        'Stai su un piede sul bordo di un gradino, con un asciugamano da mani arrotolato sotto tutte e cinque le dita. L’avampiede resta sul gradino. Tieniti a un muro o a un corrimano per l’equilibrio. Sali in tre secondi, tieni due secondi in alto e scendi in tre secondi. Lascia il tallone un po’ sotto il livello del gradino mentre scendi. Nello studio, i partecipanti aggiungevano peso con uno zaino quando il peso del corpo diventava troppo facile.',
        'Parti su due piedi se per ora i sollevamenti su una gamba sono troppo duri. I sollevamenti su due piedi a terra, senza gradino, sono l’inizio della catena del polpaccio. L’asciugamano e il gradino arrivano dopo, quando i sollevamenti in piedi ti sono sembrati facili per due sessioni di fila.',
      ],
      exercises: [
        {
          name: 'Sollevamenti sulle punte con asciugamano (su una gamba)',
          evidence: { level: 'strong', why: 'È l’esercizio dell’unico studio randomizzato sui sollevamenti sulle punte per la fascite plantare (Rathleff 2015). Grado B nella linea guida.' },
          dose: 'Protocollo dello studio: 12RM (il carico più pesante con cui riesci a fare 12\u00A0ripetizioni controllate) x 3\u00A0serie, fino a 8RM x 5\u00A0serie. Dose di partenza: 3\u00A0serie da 12, ogni gamba',
          how: 'Stai su un piede su un gradino, con un asciugamano arrotolato sotto le dita. Tre secondi su, due secondi in alto, tre secondi giù. Aggiungi peso con uno zaino quando l’ultima ripetizione smette di essere dura.',
          often: 'A giorni alterni nello studio. Walkito lo mette nei giorni di forza, mai due di fila.',
          feel: 'Lavoro intenso nel polpaccio e una tensione sotto l’arco',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_towel',
          caption: 'Sollevamento sulle punte con asciugamano: tre secondi su, tieni in alto, tre secondi giù',
          alt: 'Una figura su un gradino che sale sulle punte con un asciugamano arrotolato sotto il piede, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 dà all’allungamento della fascia plantare e del polpaccio una A, il suo grado più alto.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa e il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'strong', why: 'Stesso grado A nella linea guida. Lavora sul soleo, il muscolo più profondo del polpaccio.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione dell’allungamento del polpaccio, poi piega il ginocchio dietro finché lo senti più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'Il grado B della linea guida riguarda il lavoro di forza in generale. Questo gradino più leggero non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Siediti con i piedi appoggiati a terra. Spingi verso l’alto sugli avampiedi di entrambi i piedi. Le mani sulle ginocchia aggiungono resistenza. È un modo con poco carico per iniziare a caricare il polpaccio quando i sollevamenti in piedi sono troppo.',
          often: 'Giorni di forza, finché è il tuo livello',
          feel: 'Lavoro facile nei polpacci, quasi senza carico sul tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta che solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida. Un passaggio verso il lavoro con carico su una gamba.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico.',
          often: 'Giorni di forza, quando quelli da seduto ti sono sembrati facili per due sessioni',
          feel: 'I polpacci che lavorano insieme',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Tenuta sulle punte',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida. Tenuta isometrica a fine movimento; non testata in uno studio specifico sulla fascite plantare.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          how: 'Sali sulle punte con entrambi i piedi, poi resta fermo in alto. Non riabbassarti. Restare fermo carica il tendine senza il rimbalzo di una ripetizione completa.',
          often: 'Giorni di forza, il gradino dopo i sollevamenti su due piedi',
          feel: 'I polpacci che lavorano per restare fermi',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che resta ferma sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Quanti sollevamenti sulle punte fare, e come aggiungere carico?',
      paragraphs: [
        'Il protocollo di Rathleff usa un sistema a ripetizione massima (RM) invece di un numero fisso di ripetizioni. «12RM» vuol dire il carico più pesante con cui riesci a fare esattamente 12\u00A0ripetizioni controllate. La dodicesima ripetizione deve essere l’ultima che riesci a fare con una buona tecnica. Per la maggior parte delle persone all’inizio, il peso del corpo su una gamba basta. Quando non basta più, uno zaino con libri o bottiglie d’acqua aggiunge peso.',
      ],
      table: {
        caption: 'La progressione dei sollevamenti sulle punte di Rathleff 2015',
        head: ['Settimane', 'Serie x ripetizioni', 'Ritmo', 'Frequenza'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s su / 2\u00A0s in alto / 3\u00A0s giù', 'A giorni alterni'],
          ['3-4', '4 x 10RM', '3\u00A0s su / 2\u00A0s in alto / 3\u00A0s giù', 'A giorni alterni'],
          ['5-12', '5 x 8RM', '3\u00A0s su / 2\u00A0s in alto / 3\u00A0s giù', 'A giorni alterni'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'Da cosa ti fa partire Walkito?',
      paragraphs: [
        'Walkito non ti butta nel protocollo di Rathleff dal primo giorno. L’app parte dai sollevamenti sulle punte da seduto (3\u00A0serie da 10, entrambi i piedi), poi passa ai sollevamenti in piedi su due piedi, poi alla tenuta sulle punte, e solo dopo al sollevamento su una gamba con asciugamano e carico. Ogni gradino si apre quando due sessioni al livello attuale ti sono sembrate facili. Questa scala è il ritmo scelto dall’app, non un protocollo pubblicato, ed esiste perché la maggior parte di chi inizia un piano di esercizi per il dolore al tallone non è pronto per un sollevamento su una gamba con peso alla prima sessione.',
        'La catena del polpaccio nell’app è: sollevamenti sulle punte da seduto, sollevamenti sulle punte su due piedi, tenuta sulle punte, sollevamenti sulle punte con asciugamano, discese del tallone (una discesa eccentrica dal bordo di un gradino) e saltelli sulle punte. Il sollevamento con asciugamano è il livello 4 di 6. Raggiungere l’obiettivo del polpaccio, 25\u00A0sollevamenti su una gamba, non chiude il lavoro sul polpaccio. Passa al mantenimento, e un nuovo obiettivo prende il suo posto.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Perché un polpaccio rigido conta per il dolore al tallone?',
      figure: { id: 'calf', caption: 'I due muscoli del polpaccio, il gastrocnemio e il soleo, si uniscono nel tendine d’Achille, che si attacca all’osso del tallone.', alt: 'Viste laterale e posteriore di una gamba con i muscoli gastrocnemio e soleo che si assottigliano nel tendine d’Achille, sopra il tallone.' },
      keyFact: 'In una serie di 254\u00A0persone con fascite plantare, tra il 52 e il 60% aveva una contrattura limitata al gastrocnemio, e un altro 23-30% una contrattura combinata di gastrocnemio e soleo (Patel e colleghi, 2011).',
      paragraphs: [
        'Un polpaccio rigido tira il tallone attraverso il tendine d’Achille, e la fascia plantare si divide il carico dall’altra parte. Quando la caviglia non riesce a piegarsi abbastanza, ogni passo mette più tensione sulla fascia.',
        'In una serie di 254\u00A0persone con fascite plantare, tra il 52 e il 60% aveva una contrattura limitata al gastrocnemio, il muscolo esterno del polpaccio, e un altro 23-30% una contrattura combinata di gastrocnemio e soleo. A parte, uno studio caso-controllo appaiato con 50\u00A0casi e 100\u00A0controlli ha trovato che una dorsiflessione della caviglia ridotta, cioè quanto il piede si piega verso lo stinco, era il fattore di rischio indipendente più forte per la fascite plantare.',
        'Per questo nell’elenco ci sono sia l’allungamento sia il rinforzo del polpaccio. L’allungamento dà più movimento alla caviglia. Il rinforzo dà al polpaccio abbastanza capacità da non irrigidirsi sotto il normale carico quotidiano. La linea guida consiglia entrambi. Lo stesso meccanismo del polpaccio rigido compare anche in altri dolori della gamba: vedi [esercizi per la periostite tibiale](/it/periostite-tibiale-esercizi/) e [piedi doloranti dopo una giornata in piedi](/feet-hurt-standing-all-day/) (in inglese) se il tuo dolore somiglia più a uno di questi.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Che differenza c’è tra i sollevamenti sulle punte per la fascite plantare e per la tendinite d’Achille?',
      paragraphs: [
        'Il movimento è quasi lo stesso, ma cambiano lo scopo, l’asciugamano e la regola sul dolore. Per la fascite plantare, l’asciugamano sotto le dita carica la fascia attraverso il meccanismo a verricello. Il ritmo è 3\u00A0secondi su, 2 in alto, 3 giù, a giorni alterni. La regola sul dolore di questa pagina è: fermati se il dolore arriva a 6/10 o più.',
        'Per la tendinite d’Achille, il protocollo classico è la discesa eccentrica del tallone (solo la discesa, con la salita fatta su due piedi), in origine due volte al giorno, sette giorni su sette, e anche con dolore fino a circa 5/10 purché passi entro la mattina dopo. L’asciugamano non si usa perché caricare la fascia non è lo scopo. E per il dolore all’inserzione dell’Achille, proprio dietro l’osso del tallone, le discese del tallone vanno fatte a terra in piano invece di scendere sotto il bordo del gradino, perché una dorsiflessione profonda schiaccia il tendine contro l’osso.',
        'I due esercizi sono parenti stretti. Se il dolore è dietro il tallone o nel tendine sopra, e non sotto il piede, vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
    {
      h2: 'Quanti sollevamenti sulle punte su una gamba dovresti riuscire a fare?',
      keyFact: 'Uno studio con dati di riferimento su 566\u00A0adulti sani ha trovato un numero di sollevamenti su una gamba intorno ai 20-25, in media circa 23-24\u00A0ripetizioni (Hebert-Losier e colleghi, 2017).',
      paragraphs: [
        'Un riferimento comune per gli adulti nel test di resistenza dei sollevamenti su una gamba è intorno ai 20-25, in media circa 23-24\u00A0ripetizioni, secondo i dati di riferimento di 566\u00A0adulti sani. Quel numero cambia con età, sesso, IMC e livello di attività, quindi è un punto di riferimento, non una soglia da superare. Per seguire i progressi nella fascite plantare conta di più che il numero salga di settimana in settimana, e che i due lati siano più o meno pari.',
        'L’obiettivo del polpaccio nell’app è 25\u00A0sollevamenti sulle punte su una gamba. Il test si ripete ogni 14\u00A0giorni finché l’obiettivo del polpaccio è attivo, poi ogni 28\u00A0giorni dopo averlo raggiunto, così vedi l’andamento senza tirare a indovinare.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Cosa dovresti sentire, e quando fermarti?',
      paragraphs: [
        'Un sollevamento sulle punte per la fascite plantare deve dare la sensazione di un lavoro intenso nel polpaccio. La versione con asciugamano dà anche una tensione sotto l’arco. È la fascia che prende carico, ed è lo scopo dell’esercizio.',
        'Fermati per oggi se il dolore arriva a **6/10 o più** durante l’esercizio, o se i primi passi della mattina dopo sono chiaramente peggiori del solito. È la stessa soglia che l’app usa per chiudere una sessione. Non è un modello del dolore specifico per l’Achille (che usa 5/10, da un altro studio). Questa è la regola di stop per la fascite plantare.',
        'Un leggero indolenzimento che passa entro un giorno è normale, soprattutto nelle prime due settimane. Un dolore che resta alto per giorni o peggiora di settimana in settimana è un motivo per scendere di un livello o rivolgerti a un professionista sanitario.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Prima stretching o rinforzo per la fascite plantare?',
      paragraphs: [
        'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio una **A** e al lavoro di forza una **B**. Vuol dire che sono consigliati entrambi, e che le prove sullo stretching sono un po’ più ampie. Nello studio di Rathleff, il gruppo della forza è migliorato più in fretta nei primi tre mesi, ma a dodici mesi i due gruppi erano pari.',
        'Niente nelle prove dice che devi finire uno prima di iniziare l’altro. L’app inizia gli allungamenti dal primo giorno e aggiunge il primo esercizio di forza per il polpaccio quando l’obiettivo passa dal calmare il dolore al costruire capacità. Fare l’allungamento della fascia plantare prima dei primi passi ogni mattina è il consiglio più ripetuto della linea guida.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Quanti sollevamenti sulle punte fare per la fascite plantare?',
      cites: [CITE.rathleff],
      a: 'L’unico studio che ha testato un protocollo specifico di sollevamenti sulle punte per la fascite plantare partiva da 12\u00A0ripetizioni massime per 3\u00A0serie, passava a 10RM per 4\u00A0serie alla settimana 2 e a 8RM per 5\u00A0serie alla settimana 4, a giorni alterni per un massimo di 3\u00A0mesi (Rathleff 2015). «12RM» vuol dire il carico più pesante con cui riesci a fare 12\u00A0ripetizioni controllate, non un numero fisso uguale per tutti.',
    },
    {
      q: 'I sollevamenti sulle punte peggiorano la fascite plantare?',
      cites: [CITE.rathleff],
      a: 'Nello studio di Rathleff del 2015, il gruppo che faceva sollevamenti sulle punte con carico è migliorato più in fretta del gruppo che faceva solo stretching. In quello studio il carico ha migliorato le cose, non le ha peggiorate. Se un esercizio porta il dolore a 6/10 o più, alleggerisci per quel giorno, ma con la dose giusta l’esercizio in sé non è il problema.',
    },
    {
      q: 'A cosa serve l’asciugamano nel sollevamento sulle punte?',
      cites: [CITE.rathleff],
      a: 'L’asciugamano arrotolato va sotto le dita, così si piegano verso l’alto quando sei in cima. Questo attiva il meccanismo a verricello, il collegamento tra il tendine d’Achille e la fascia plantare. Senza asciugamano, l’esercizio allena soprattutto il polpaccio. Con l’asciugamano, la fascia prende una parte del carico, ed è per questo che lo studio lo ha usato.',
    },
    {
      q: 'Meglio prima lo stretching o il rinforzo per la fascite plantare?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'La linea guida del 2023 sul dolore al tallone dà allo stretching il grado più alto, A, e al lavoro di forza una B, quindi sono consigliati entrambi. Nello studio di Rathleff, il rinforzo ha fatto scendere il dolore più in fretta nei primi 3\u00A0mesi, ma a 12\u00A0mesi i due gruppi erano pari. Niente nelle prove dice che devi finire uno prima di iniziare l’altro.',
    },
    {
      q: 'Dopo quanto i sollevamenti sulle punte aiutano il dolore da fascite plantare?',
      cites: [CITE.rathleff],
      a: 'Nello studio di Rathleff del 2015 su 48\u00A0persone, il gruppo dei sollevamenti con carico era nettamente avanti rispetto al gruppo del solo stretching a 3\u00A0mesi. A 12\u00A0mesi i due gruppi si erano allineati. Nessuno studio ha mostrato un numero garantito di settimane per una singola persona. Il recupero si misura in mesi.',
    },
    {
      q: 'Quanti sollevamenti sulle punte su una gamba sono normali?',
      cites: [CITE.hebertLosier],
      a: 'Uno studio con dati di riferimento su 566\u00A0adulti sani ha trovato una mediana di circa 23-24\u00A0ripetizioni come valore tipico per un adulto, che cambia con età, sesso e livello di attività (Hebert-Losier 2017). Il numero è utile per confrontare una gamba con l’altra o per seguire i cambiamenti nel giro di settimane, non come una soglia rigida.',
    },
    {
      q: 'È normale sentire l’esercizio nel polpaccio e non nel tallone?',
      a: 'Sì. I sollevamenti sulle punte da seduto e su due piedi sono pensati per far lavorare il polpaccio con poco carico sul tallone, ed è per questo che vengono prima della versione su una gamba con asciugamano. Il sollevamento con asciugamano e carico è la versione che carica anche l’arco, quindi a quel punto una tensione vicino al tallone è normale, purché resti sotto 6/10.',
    },
    {
      q: 'I polpacci deboli causano la fascite plantare?',
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.rathleff],
      a: 'Le prove più forti legano alla fascite plantare un polpaccio rigido, non polpacci deboli. Uno studio caso-controllo ha trovato che una flessibilità della caviglia ridotta era il primo fattore di rischio, e più della metà dei pazienti di una serie aveva una contrattura del polpaccio. Il lavoro di forza aiuta comunque: in uno studio su 48\u00A0persone, i sollevamenti sulle punte hanno ridotto il dolore più in fretta del solo stretching nei primi tre mesi.',
    },
    {
      q: 'Qual è il miglior esercizio in assoluto per la fascite plantare?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Non esiste un unico esercizio migliore; la linea guida del 2023 valuta lo stretching (A) e il lavoro di forza (B) come approcci separati e complementari. L’allungamento della fascia plantare lavora direttamente sul dolore dei primi passi, mentre i sollevamenti sulle punte costruiscono la capacità del polpaccio nel lungo periodo. In uno studio su 48\u00A0persone, il gruppo dei sollevamenti è migliorato più in fretta del gruppo dello stretching a tre mesi, anche se a dodici mesi erano simili.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta, che può indicare una rottura della fascia plantare più che una fascite',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'si accompagna a intorpidimento, formicolio o bruciore, che possono indicare un nervo compresso più che una fascite plantare',
      'il tallone è arrossato, o hai la febbre o non ti senti bene',
      'ti sveglia di notte o c’è anche a riposo, cosa che può far pensare più a una frattura da stress',
      'stringere i lati del tallone fa male, o il dolore aumenta durante la corsa dopo che hai aumentato i chilometri',
      'ti fanno male entrambi i talloni e altre articolazioni sono gonfie o rigide, che può far pensare a un’artrite infiammatoria',
      'non è migliorato dopo diverse settimane di esercizi e meno carico',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi capire da solo le serie, il peso o quando passare al gradino successivo. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è una mattina migliore: dolore a 1/10 o meno per 14\u00A0giorni di fila. La scala dei sollevamenti sulle punte (da seduto, su due piedi, tenuta, con asciugamano, discese del tallone) va al tuo ritmo, non secondo un calendario fisso.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto quell’obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi cosa sta cambiando. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Sollevamenti sulle punte per la fascite plantare',
  campaign: 'guide-calf-raises-it',
};
