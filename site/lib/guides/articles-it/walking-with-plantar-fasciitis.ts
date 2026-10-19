import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/walking-with-plantar-fasciitis.ts (2026-10-18),
 * written around «camminare con la fascite plantare», «fascite plantare si
 * può camminare», «quanti passi al giorno fascite plantare». Informal «tu».
 * Figures, grades, doses and qualifiers are identical to the English page
 * after its fact-check. Same CITE keys and media ids. Exercise names follow
 * lib/guides/it.ts. No Italian page exists for heel pain in runners or best
 * insoles, so those links were removed and the words kept.
 */

export const WALKING_PF_IT: Guide = {
  lang: 'it',
  page: 'walkingPf',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Camminare con la fascite plantare: quanto si può?',
  description:
    'Camminare con la fascite plantare: una regola semplice sul dolore durante e la mattina dopo, la verità sui passi, scarpe, superfici e come riprendere.',
  h1: 'Quanto puoi camminare con la fascite plantare?',
  lede:
    'Di solito puoi continuare a camminare con la [fascite plantare](/it/fascite-plantare/), purché il dolore resti moderato mentre cammini e si calmi entro la mattina dopo. La linea guida del 2023 sul dolore al tallone raccomanda consigli su come regolare il carico in piedi e non dice di smettere di camminare, anche se dà a quel consiglio un **E**, cioè si basa sulla teoria e non su studi clinici (Koc e colleghi, 2023). Nessuno studio indica un numero di passi sicuro, quindi il controllo della mattina dopo è una guida migliore di un obiettivo di passi.',
  intro: [
    'Questa pagina parla di quanto camminare mentre il tallone fa male e di come riprendere a poco a poco. Se la tua domanda principale è perché il tallone fa male dopo una camminata, vedi [dolore al tallone dopo aver camminato](/it/dolore-tallone-dopo-camminata/). Se i piedi ti fanno male dopo ore in piedi fermo nello stesso posto, vedi [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/).',
  ],
  takeaways: [
    'La linea guida del 2023 sul dolore al tallone dà un grado **E** ai consigli su come cambiare il carico in piedi al lavoro, nel tempo libero e nella vita di tutti i giorni, oltre ai consigli sulle scarpe: si basano sulla teoria, non su studi clinici (Koc e colleghi, 2023).',
    'In uno studio su 180\u00A0adulti con fasciopatia plantare, il gruppo che ha ricevuto solo il consiglio di restare attivo, ridurre le attività che peggiorano il dolore e usare una talloniera è migliorato in modo clinicamente rilevante a circa tre mesi (Riel e colleghi, 2023).',
    'Una regola di monitoraggio del dolore ammette un dolore fino a circa 5 su 10 durante l’attività, purché si calmi entro la mattina dopo e non aumenti di settimana in settimana. È stata testata su 38\u00A0persone con dolore all’Achille, non con fascite plantare (Silbernagel e colleghi, 2007).',
    'Nessuno studio indica un numero di passi al giorno per la fascite plantare. In 50\u00A0persone con dolore al tallone e 25 senza, i livelli di attività non erano diversi, ma il gruppo con dolore al tallone stava in piedi 3,4\u00A0ore al giorno in più (Landorf e colleghi, 2023).',
    'Una guida di buona pratica del 2021 sul dolore al tallone consiglia scarpe con un piccolo dislivello tra tallone e punta e di evitare di camminare scalzi e le scarpe piatte che sostengono poco il piede finché i sintomi non sono spariti (Morrissey e colleghi, 2021).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Camminare fa bene o male alla fascite plantare?',
      keyFact: 'In uno studio su 180\u00A0adulti, il gruppo che ha ricevuto il consiglio di restare attivo ma ridurre le attività che peggiorano il dolore, più una talloniera, è migliorato in modo clinicamente rilevante a circa tre mesi (Riel e colleghi, 2023).',
      paragraphs: [
        '**Camminare non è il nemico, ma troppo tutto insieme può far riacutizzare il tallone.** La linea guida del 2023 sul dolore al tallone non dice di smettere di camminare. Nella sua sintesi elenca l’educazione su come cambiare il carico in piedi al lavoro, nel tempo libero e nella vita di tutti i giorni, e sulle scarpe. A quel consiglio dà un grado **E**, cioè è sostenuto dalla teoria e dalla scienza di base, ma nessuno studio clinico lo ha testato (Koc e colleghi, 2023).',
        'La linea guida indica anche il dolore al tallone comparso dopo un recente aumento dell’attività in piedi come una caratteristica tipica della fascite plantare. Quindi la domanda raramente è se camminare. È quanto, e con che velocità aggiungere di più.',
        'Uno studio danese ha confrontato semplici consigli con trattamenti aggiuntivi. 180\u00A0adulti con fasciopatia plantare (un altro nome della fascite plantare) sono stati divisi in tre gruppi. Uno ha ricevuto solo consigli e una talloniera; gli altri due hanno aggiunto sollevamenti sulle punte, e uno di questi anche un’infiltrazione di cortisone. Il consiglio era di ridurre le attività che causano le riacutizzazioni e poi tornare piano piano ai livelli di attività di prima, guidati dai sintomi. Tutti e tre i gruppi sono migliorati in modo clinicamente rilevante a circa tre mesi (Riel e colleghi, 2023).',
        'Forse non è il camminare in sé a essere legato al dolore al tallone. In uno studio del 2023, 50\u00A0persone con dolore al tallone e 25\u00A0persone simili senza dolore riferivano un’attività fisica simile. La differenza era lo stare in piedi: il gruppo con dolore al tallone stava in piedi 3,4\u00A0ore al giorno in più (Landorf e colleghi, 2023). Quello studio mostra un legame, non una causa. Se la tua giornata è soprattutto in piedi, [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) copre quel lato.',
      ],
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.rielFixHeelProtocol, CITE.landorfFootwear],
    },
    {
      h2: 'Quanto camminare va bene? Una regola semplice sul dolore',
      keyFact: 'In uno studio su 38\u00A0persone con dolore all’Achille, chi ha continuato l’attività con un dolore entro circa 5 su 10, passato entro la mattina dopo, è andato bene a dodici mesi quanto chi ha sospeso corsa e salti per sei settimane (Silbernagel e colleghi, 2007).',
      paragraphs: [
        '**Usa il dolore come misuratore della dose, e controllalo due volte: durante la camminata e la mattina dopo.** Nessuno studio ha testato una regola sulla camminata per la fascite plantare. La regola testata più vicina viene dalla riabilitazione dei tendini, quindi usala come una guida presa in prestito, non come un limite dimostrato per il tallone.',
        'In uno studio del 2007, 38\u00A0persone con dolore al tendine d’Achille sono state divise in due gruppi. Un gruppo ha continuato a correre e saltare, usando un modello di monitoraggio del dolore: durante l’attività era ammesso un dolore fino a circa 5 su 10, purché si calmasse entro la mattina dopo e non aumentasse di settimana in settimana. L’altro gruppo ha sospeso quelle attività per le prime sei settimane. Entrambi i gruppi sono migliorati, e restare attivi non ha portato a risultati peggiori a dodici mesi (Silbernagel e colleghi, 2007). Altro su quello studio in [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
        'Per il dolore al tallone, una guida di buona pratica del 2021, costruita su una revisione di 51\u00A0studi, interviste a 14\u00A0esperti e un sondaggio tra i pazienti, afferma che il monitoraggio del dolore era fortemente raccomandato e che bisognerebbe insegnare alle persone a leggere la risposta del dolore all’attività (Morrissey e colleghi, 2021). Non indica un numero. La tabella qui sotto applica la regola testata alla camminata, con un punteggio da 0 (nessun dolore) a 10 (il dolore peggiore). La colonna sulla camminata successiva è una lettura pratica di quella regola, non un protocollo testato.',
      ],
      table: {
        caption: 'Come leggere il tallone dopo una camminata (scala del dolore da 0 a 10)',
        head: ['Cosa noti', 'Cosa significa', 'Prossima camminata'],
        rows: [
          ['Da 0 a 2 durante, mattina dopo normale', 'Ben dentro i limiti', 'Tienila così, o aggiungi un po’'],
          ['Da 3 a 5 durante, passato entro la mattina dopo', 'Carico accettabile', 'Ripeti la stessa camminata'],
          ['Sopra 5 durante la camminata', 'Troppo per oggi', 'Accorciala o rallenta'],
          ['Primi passi della mattina dopo peggiori del solito', 'Troppo ieri', 'Riduci, poi riprendi a salire'],
          ['Peggio ogni settimana', 'Il carico sta salendo piano piano', 'Fai un passo indietro e rivolgiti a un professionista sanitario se continua'],
        ],
      },
      after: [
        'Il controllo del mattino è quello che conta di più. Il dolore ai primi passi è il sintomo classico della fascite plantare, ed è il segnale più chiaro di come il piede ha retto il giorno prima. [Dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) spiega questo quadro e gli allungamenti da fare prima di alzarti in piedi.',
        'Un dolore acuto che ti fa zoppicare, un dolore che cresce a ogni camminata e non migliora con il riposo, o un dolore di notte sono fuori da questa regola. Zoppicare può anche caricare in modo diverso ginocchio, anca e schiena: vedi [fascite plantare e dolore a ginocchio, anca o schiena](/it/fascite-plantare-dolore-ginocchio/). Controlla l’elenco alla fine di questa pagina.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0persone per gruppo; a dodici mesi il punteggio VISA-A-S è passato da 57 a 85 nel gruppo attivo e da 57 a 91 nel gruppo a riposo, senza differenze significative nel ritmo di miglioramento.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quanti passi al giorno vanno bene con la fascite plantare?',
      keyFact: 'Nessuno studio indica un numero di passi al giorno per la fascite plantare. In un’analisi combinata di 47.471\u00A0adulti, la riduzione del rischio di morte si stabilizzava tra 6.000 e 8.000\u00A0passi al giorno nelle persone dai 60\u00A0anni in su (Paluch e colleghi, 2022).',
      paragraphs: [
        '**Non esiste un numero di passi basato sulle prove per la fascite plantare.** Non abbiamo trovato studi che abbiano fissato un numero di passi o una distanza di camminata per le persone con dolore al tallone e ne abbiano misurato il risultato. Qualsiasi pagina che ti dia una cifra fissa per il dolore al tallone sta tirando a indovinare.',
        'I famosi 10.000\u00A0passi sono un obiettivo di salute generale, non un dato della ricerca sul piede, e anche lì le prove sono deboli. Un’analisi del 2022 su 15\u00A0studi e 47.471\u00A0adulti ha trovato che più passi al giorno andavano insieme a un rischio di morte più basso, ma il beneficio si stabilizzava tra 6.000 e 8.000\u00A0passi al giorno negli adulti dai 60\u00A0anni in su, e tra 8.000 e 10.000 negli adulti più giovani (Paluch e colleghi, 2022). Riguarda la salute a lungo termine, non quello che un tallone irritato può reggere questa settimana.',
        'Un numero più utile è il tuo. Quasi tutti i telefoni contano i passi. Guarda una settimana normale prima che il tallone si infiammasse e una settimana normale di adesso. Così hai un punto di partenza, e la regola sul dolore qui sopra ti dice se mantenere, aggiungere o ridurre.',
        'Spezzare la camminata può contare più del totale. La guida di buona pratica del 2021 consiglia di interrompere i lunghi periodi di carico statico, come lo stare in piedi (Morrissey e colleghi, 2021). Diverse camminate brevi distribuite nella giornata danno al tallone un carico meno continuo di una sola lunga, anche se nessuno studio ha confrontato le due cose per la fascite plantare.',
      ],
      cites: [CITE.paluchSteps, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Come riprendere a camminare di più?',
      paragraphs: [
        'Il consiglio testato nello studio danese era di ridurre le attività che causano le riacutizzazioni, poi tornare piano piano ai livelli di attività di prima, guidati dai sintomi (Riel e colleghi, 2020). Non fissava una percentuale settimanale, e nessuno studio ne ha testata una per la fascite plantare. Ecco un modo per mettere in pratica quel consiglio:',
        {
          list: [
            'Trova una camminata che rispetta la regola sul dolore: al massimo un dolore moderato durante, e una mattina dopo normale. Se anche una camminata breve non la rispetta, parti da meno.',
            'Ripeti quella camminata per qualche giorno. Una sola giornata buona non basta per giudicare.',
            'Aggiungi poco, per esempio cinque minuti in più, e lascia tutto il resto uguale. Cambia una cosa alla volta: distanza, ritmo, salite o superficie.',
            'Se la mattina dopo va peggio, torna all’ultima camminata che andava bene e restaci più a lungo.',
          ],
        },
        'I cinque minuti sono un suggerimento pratico, non una cifra testata. Quello che conta è che ogni aumento sia abbastanza piccolo perché la mattina dopo ti dica chiaramente se ha funzionato.',
        'Il recupero dalla fascite plantare di solito è lento. Circa il 90% delle persone migliora con cure non chirurgiche come stretching, lavoro sul polpaccio e gestione del carico (Latt e colleghi, 2020), ma possono servire mesi. Vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/). Se corri anche, per la corsa valgono gli stessi principi su chilometri e cambi di carico.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.latt],
    },
    {
      h2: 'Quali scarpe aiutano a camminare con la fascite plantare?',
      keyFact: 'La linea guida del 2023 dà ai plantari usati da soli per il sollievo dal dolore a breve termine una **B a sfavore**, e una **C** se combinati con altre cure, comprese le imbottiture per il tallone (Koc e colleghi, 2023).',
      paragraphs: [
        '**Scarpe comode e ammortizzate con un piccolo dislivello tra tallone e punta sono il consiglio degli esperti, ma nessuno studio ha testato una scarpa specifica per camminare.** La guida di buona pratica del 2021 dice che le scarpe dovrebbero sostenere bene il piede ed essere comode, avere un piccolo dislivello tra retropiede e avampiede (il tallone sta un po’ più in alto delle dita) ed essere scarpe che porterai davvero. Consiglia anche di evitare di camminare scalzi e le scarpe piatte che sostengono poco il piede finché i sintomi non sono spariti del tutto (Morrissey e colleghi, 2021).',
        'La linea guida del 2023 include i consigli sulle scarpe nella sua raccomandazione di educazione con grado **E**. Sui plantari è più precisa: non usarli come unico approccio (**B a sfavore**), ma possono aiutare insieme ad altre cure (**C**). Questo comprende una talloniera già pronta, che si trova in commercio, o scarpe che ammortizzano il tallone (Koc e colleghi, 2023).',
        'La durezza della scarpa potrebbe contare. Nello studio del 2023 su 50\u00A0persone con dolore al tallone e 25 senza, il gruppo con dolore al tallone portava scarpe con il tallone più duro e riferiva più difficoltà a trovare scarpe adatte (Landorf e colleghi, 2023). Anche qui, un legame, non la prova che le scarpe morbide aiutino.',
        'Per sapere cosa mostrano gli studi sui plantari, vedi [plantari o esercizi](/it/plantari-o-esercizi/). Stai pensando alle scarpe minimaliste? [Scarpe barefoot](/it/scarpe-barefoot/) spiega perché non sono adatte finché il tallone fa male.',
      ],
      cites: [CITE.morrisseyBestPractice, CITE.guideline, CITE.landorfFootwear],
    },
    {
      h2: 'Conta la superficie su cui cammini?',
      paragraphs: [
        '**Probabilmente sì, ma le prove sono indirette.** La linea guida indica l’attività in piedi legata al lavoro, soprattutto in condizioni di scarso assorbimento degli urti, come un fattore di rischio per la fascite plantare (Koc e colleghi, 2023). Questo fa pensare a pavimenti duri e scarpe dure come un carico per il tallone.',
        'Le prove dirette sono scarse. Nello studio appaiato del 2023, le persone con e senza dolore al tallone non erano diverse per il fatto di stare in piedi su pavimenti duri (Landorf e colleghi, 2023). Una serie di casi su 20\u00A0podisti ha riferito meno dolore dopo circa un mese e mezzo di corsa a piedi nudi sull’erba, ma non aveva un gruppo di confronto (MacGabhann e colleghi, 2022). Nessuno studio ha confrontato le superfici di camminata per la fascite plantare.',
        'Opzioni pratiche finché il tallone fa male:',
        {
          list: [
            'Per le camminate più lunghe scegli erba, un sentiero nel parco o una pista invece del cemento, se ti trovi meglio.',
            'In casa tieni le scarpe su piastrelle o parquet, soprattutto per i primi passi della giornata.',
            'Vai piano con le discese lunghe e le salite ripide finché la camminata in piano non rispetta la regola sul dolore. Altro su discese, zaini e bastoncini in [dolore ai piedi dopo un’escursione](/it/dolore-piedi-escursionismo/).',
          ],
        },
        'Un dolore profondo proprio al centro del tallone, chiaramente peggiore sui pavimenti duri, può venire dal cuscinetto adiposo del tallone invece che dalla fascia plantare. Vedi [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
      ],
      cites: [CITE.guideline, CITE.landorfFootwear, CITE.macgabhannGrass],
    },
    {
      h2: 'Quali esercizi rendono più facile camminare?',
      keyFact: 'La linea guida del 2023 dà agli allungamenti della fascia plantare e del polpaccio una A e al lavoro di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Gli esercizi possono aiutare il tallone a reggere più carico, così che con il tempo la stessa camminata rispetti più facilmente la regola sul dolore, anche se nessuno studio lo ha testato per la camminata. La linea guida del 2023 dà agli allungamenti della fascia plantare e del polpaccio una **A**, il suo grado più alto, e al lavoro di forza una **B**.',
        'Un polpaccio rigido fa parte del quadro. In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100 senza, una ridotta flessione della caviglia era il fattore di rischio più forte, e anche stare in piedi per gran parte della giornata lavorativa aumentava il rischio (Riddle e colleghi, 2003). Vedi [polpacci rigidi](/it/polpacci-rigidi/).',
        'In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico hanno ridotto il dolore e migliorato la funzione quotidiana più in fretta degli allungamenti, e a dodici mesi i due gruppi erano più o meno alla pari (Rathleff e colleghi, 2015). Le schede qui sotto sono le dosi di partenza di Walkito, non una prescrizione. La serie completa è in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni, e prima dei primi passi della giornata',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Dolore acuto al tallone',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni, e prima di una camminata più lunga',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Dolore al polpaccio che resta dopo che ti sei fermato',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore al polpaccio che resta dopo che ti sei fermato',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, quasi senza carico sul tallone, ed è adatto ai giorni in cui la camminata è già vicina al tuo limite.',
          stop: 'Dolore al tallone che supera 6 su 10, o una mattina dopo peggiore',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai in piedi su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico. Tieniti a un muro per l’equilibrio.',
          stop: 'Dolore al tallone che supera 6 su 10, o una mattina dopo peggiore',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano',
          evidence: { level: 'moderate', why: 'È il programma di uno studio su 48\u00A0persone, e la linea guida del 2023 dà al lavoro di forza una B.' },
          dose: '4\u00A0serie da 10, ogni gamba, con peso aggiunto',
          often: 'Giorni di forza, quando il dolore del mattino è sceso',
          feel: 'Lavoro intenso nel polpaccio',
          how: 'Stai su un piede solo su un gradino, con un asciugamano arrotolato sotto le dita. Prenditi tre secondi per salire, tieni due secondi in alto e prenditi tre secondi per scendere. A questo livello Walkito aggiunge peso, per esempio uno zaino. È l’asciugamano che fa lavorare la fascia plantare e non solo il polpaccio. Altro sul [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/).',
          stop: 'Dolore al tallone che supera 6 su 10, o una mattina dopo peggiore',
          image: 'Esercizio: sollevamenti sulle punte con asciugamano',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: tre secondi su, due in alto, tre giù',
          alt: 'Una figura sale sulle punte su un gradino con un asciugamano arrotolato, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Devo camminare con la fascite plantare?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Di solito sì, nella misura che il tallone riesce a reggere. La linea guida del 2023 sul dolore al tallone raccomanda di regolare il carico in piedi e non consiglia di smettere, anche se quel consiglio si basa sulla teoria (grado E). In uno studio su 180\u00A0adulti, il consiglio di restare attivi ma ridurre le attività che peggiorano il dolore, più una talloniera, è andato insieme a un miglioramento rilevante a circa tre mesi.',
    },
    {
      q: 'Camminare fa bene alla fascite plantare?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Camminare in quantità moderate in genere va bene, anche se nessuno studio ha testato quanta camminata sia la migliore. In uno studio, le persone con dolore al tallone erano attive quanto quelle senza, ma stavano in piedi 3,4\u00A0ore al giorno in più. Una guida di buona pratica consiglia di imparare a monitorare la risposta del dolore all’attività.',
    },
    {
      q: 'Quanti passi al giorno vanno bene con la fascite plantare?',
      cites: [CITE.paluchSteps],
      a: 'Nessuno studio indica un numero di passi per la fascite plantare. I 10.000 sono un obiettivo di salute generale, e negli studi sulla mortalità il beneficio si stabilizzava tra 6.000 e 8.000\u00A0passi al giorno negli adulti dai 60\u00A0anni in su. Per un tallone irritato, parti dal tuo numero abituale e lascia che il dolore della mattina dopo decida se aggiungere o ridurre.',
    },
    {
      q: 'Quanto dolore va bene quando cammini con la fascite plantare?',
      cites: [CITE.silbernagel],
      a: 'Una regola testata ammette un dolore fino a circa 5 su 10 durante l’attività, purché si calmi entro la mattina dopo e non aumenti di settimana in settimana. Viene da uno studio su 38\u00A0persone con dolore all’Achille, non con fascite plantare, quindi usala come guida. Un dolore più forte, o una mattina peggiore, vuol dire ridurre.',
    },
    {
      q: 'Camminare può peggiorare la fascite plantare?',
      cites: [CITE.guideline],
      a: 'Sì, se fai molto più di quanto il tallone è abituato a fare. La linea guida del 2023 indica il dolore al tallone dopo un recente aumento dell’attività in piedi come una caratteristica tipica della fascite plantare. Una camminata lunga all’improvviso, un nuovo percorso in salita o una giornata su pavimenti duri possono [farla riacutizzare](/it/riacutizzazione-fascite-plantare/). Aumenti più piccoli e costanti sono più leggeri per il tallone.',
    },
    {
      q: 'Devo smettere del tutto di camminare perché la fascite plantare si calmi?',
      cites: [CITE.silbernagel, CITE.guideline],
      a: 'Nessuno studio mostra che serva il riposo completo. La linea guida del 2023 raccomanda di regolare il carico e non consiglia di smettere. In uno studio sul dolore all’Achille, chi è rimasto attivo entro un limite di dolore è andato bene a dodici mesi quanto chi ha sospeso corsa e salti per sei settimane. Se anche le camminate brevi fanno molto male o ti fanno zoppicare, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Quali sono le scarpe migliori per camminare con la fascite plantare?',
      cites: [CITE.morrisseyBestPractice, CITE.guideline],
      a: 'Scarpe comode e ammortizzate, con il tallone un po’ più alto delle dita, sono il consiglio degli esperti. Una guida di buona pratica del 2021 consiglia di evitare di camminare scalzi e le scarpe piatte che sostengono poco il piede finché i sintomi non sono spariti. La linea guida del 2023 dice che plantari o talloniere possono aiutare insieme ad altre cure, ma non da soli.',
    },
    {
      q: 'Con la fascite plantare è meglio camminare sull’erba o sul cemento?',
      cites: [CITE.guideline, CITE.macgabhannGrass],
      a: 'Un terreno più morbido può essere più facile, ma nessuno studio ha confrontato le superfici per camminare con la fascite plantare. La linea guida del 2023 collega il lavoro in piedi su superfici che assorbono poco gli urti al rischio di fascite plantare. Una piccola serie di casi su podisti che correvano sull’erba ha riferito meno dolore, ma non aveva un gruppo di confronto. Regolati su come sta il tallone la mattina dopo.',
    },
    {
      q: 'Va bene camminare scalzi in casa con la fascite plantare?',
      cites: [CITE.morrisseyBestPractice],
      a: 'Meglio evitarlo finché il tallone fa male, soprattutto la mattina appena alzato, su piastrelle o parquet. Una guida di buona pratica del 2021 sul dolore al tallone sconsiglia di camminare scalzi e le calzature piatte che sostengono poco il piede finché i sintomi non sono spariti del tutto. Il consiglio abituale è usare scarpe che sostengono bene il piede o pantofole rigide per i primi passi della giornata.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore al tallone è iniziato dopo una caduta, un salto o una storta, o non riesci a caricare il peso sul piede',
      'il dolore cresce a ogni camminata e non migliora con il riposo, o stringere i lati del tallone fa male (possibile frattura da stress)',
      'il tallone fa male di notte o a riposo, non solo quando cammini',
      'senti intorpidimento, formicolio o bruciore nel piede',
      'il tallone è rosso, caldo o gonfio, o non ti senti bene o hai la febbre',
      'ti fanno male entrambi i talloni insieme ad altre articolazioni, o hai rigidità al mattino anche altrove',
      'hai il diabete o una cattiva circolazione e il piede fa male o ha un aspetto diverso',
      'il dolore peggiora di settimana in settimana anche se hai ridotto',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede. Non fissa un obiettivo di passi e non pianifica le tue camminate, ma legge il tallone nello stesso modo di questa pagina: da come sta il piede la mattina dopo.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta: dopo una giornata lunga in piedi, la sessione di forza successiva diventa più leggera. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['heelPainAfterWalking', 'heelPain', 'standing'],
  crumb: 'Camminare con la fascite plantare',
  campaign: 'guide-walking-with-plantar-fasciitis-it',
};
