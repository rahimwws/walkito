import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/can-plantar-fasciitis-cause-knee-pain.ts
 * (2026-10-19), written around «fascite plantare dolore al ginocchio»,
 * «la fascite plantare può dare mal di schiena». Informal «tu». Figures,
 * grades, doses, hedges and CITE keys are identical to the English page
 * after its fact-check. Same media ids. Exercise names follow it.ts.
 * "Clinician" is «professionista sanitario».
 */

export const PF_KNEE_HIP_BACK_IT: Guide = {
  lang: 'it',
  page: 'pfKneeHipBack',
  mainSource: CITE.kamonseki,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fascite plantare e dolore a ginocchio, anca e schiena',
  description:
    'La fascite plantare può causare dolore a ginocchio, anca o schiena? Cosa mostrano gli studi sul passo, cosa non è dimostrato, esercizi con dosi e segnali.',
  h1: 'La fascite plantare può causare dolore al ginocchio, all’anca o alla schiena?',
  lede:
    'Può contribuire, ma nessuno l’ha dimostrato. Un tallone dolorante cambia il modo in cui cammini: gli studi sulla [fascite plantare](/it/fascite-plantare/) mostrano che le persone caricano meno il tallone e di più la parte anteriore del piede (Phillips e McClinton, 2017), e questo spostamento può caricare in modo diverso ginocchio, anca e schiena. Nessuno studio ha seguito nel tempo persone con dolore al tallone per vedere se in seguito compare dolore a ginocchio, anca o schiena, quindi le prove sono associazioni, non la dimostrazione di una causa.',
  intro: [
    'Questa pagina passa in rassegna ginocchio, anca, schiena, polpaccio e caviglia uno per uno, dice cosa hanno trovato gli studi e quanto erano grandi, spiega cosa significa l’unico studio clinico sul rinforzo dell’anca nella fascite plantare (Kamonseki e colleghi, 2016) e indica gli esercizi e le dosi adatti. Se il dolore al ginocchio o alla schiena è venuto prima, o hai il piede piatto, vedi invece [piede piatto e dolore al ginocchio](/it/piede-piatto-dolore-ginocchio/) e [piede piatto e mal di schiena](/it/piede-piatto-mal-di-schiena/).',
  ],
  takeaways: [
    'In una revisione di 19\u00A0studi sul cammino, le persone con dolore sotto il tallone caricavano meno il tallone e di più mesopiede e avampiede, mentre il tempo d’appoggio su ogni piede restava più o meno lo stesso (Phillips e McClinton, 2017).',
    'In 18\u00A0persone senza dolore ai piedi, una perlina dolorosa sotto il tallone bastava ad accorciare il tempo in cui stavano su quella gamba a ogni passo (Levins e colleghi, 1998).',
    'Tra 40\u00A0persone con artrosi del ginocchio, il 52% aveva dolore al tallone e il 62% una fascia plantare ispessita all’ecografia. Lo studio non aveva un gruppo di confronto, quindi non può mostrare cosa abbia causato cosa (Miladi e colleghi, 2023).',
    'In uno studio su 83\u00A0persone con fascite plantare, aggiungere il rinforzo di piede e anca agli allungamenti non ha ridotto il dolore al tallone più dei soli allungamenti in otto settimane. Tutti e tre i gruppi sono migliorati (Kamonseki e colleghi, 2016).',
    'Un polpaccio rigido è il legame più studiato: chi aveva una flessione della caviglia di 0\u00A0gradi o meno aveva una probabilità di fascite plantare 23,3\u00A0volte maggiore rispetto a chi superava i 10\u00A0gradi (Riddle e colleghi, 2003).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La fascite plantare può causare dolore in altre parti della gamba?',
      keyFact: 'Una revisione di 19\u00A0studi sul cammino ha trovato che le persone con dolore sotto il tallone spostano il carico dal tallone verso mesopiede e avampiede (Phillips e McClinton, 2017).',
      paragraphs: [
        '**Probabilmente a volte, attraverso il modo in cui cammini.** La fascite plantare non si diffonde lungo la gamba. Quello che cambia è il cammino. Quando il tallone fa male, lo appoggi con più delicatezza, spingi meno e ti affidi alla parte anteriore del piede. Una revisione del 2017 di 19\u00A0studi ha trovato proprio questo quadro: meno carico sul tallone al primo contatto, e più tempo e più carico su mesopiede e avampiede.',
        'Il cambiamento può essere così piccolo da non accorgertene. In quella revisione, il tempo totale che ogni piede passava a terra era più o meno lo stesso delle persone senza dolore al tallone. In uno studio di laboratorio, 18\u00A0persone senza dolore ai piedi hanno camminato con una perlina sotto il tallone, e con le perline più grandi stavano meno tempo su quella gamba (Levins e colleghi, 1998). È una lieve zoppia, almeno in un breve test di laboratorio con un dolore improvviso.',
        'Ecco a che punto sono le prove per ogni zona:',
      ],
      table: {
        caption: 'Fascite plantare e dolore in altre zone: cosa mostrano gli studi',
        head: ['Zona', 'Studi diretti', 'Forza'],
        rows: [
          ['Polpaccio', 'Polpaccio rigido legato alla fascite plantare', 'Moderata'],
          ['Caviglia e Achille', 'Fascia più spessa con alterazioni dell’Achille', 'Bassa'],
          ['Ginocchio', 'Dolore al tallone comune nell’artrosi del ginocchio', 'Bassa'],
          ['Anca', 'Controllo dell’anca diverso nei runner', 'Bassa'],
          ['Schiena', 'Nessuno studio sulla fascite plantare', 'Nessuna'],
        ],
      },
      after: [
        '«Bassa» vuol dire piccoli studi che hanno misurato le due cose nello stesso momento. Mostrano che i due problemi spesso vanno insieme. Non possono mostrare che il tallone abbia causato l’altro dolore, o il contrario.',
      ],
      cites: [CITE.phillipsGait, CITE.levinsGait],
    },
    {
      h2: 'La fascite plantare può causare dolore al ginocchio?',
      keyFact: 'Tra 40\u00A0persone con artrosi del ginocchio, il 52% aveva dolore al tallone e il 62% una fascia plantare ispessita all’ecografia (Miladi e colleghi, 2023).',
      paragraphs: [
        '**Le due cose compaiono spesso insieme, ma nessuno studio mostra che il tallone causi il dolore al ginocchio.** Lo studio più vicino ha esaminato 40\u00A0persone con artrosi del ginocchio. 21 di loro (il 52%) avevano dolore al tallone, e un’ecografia ha mostrato una fascia plantare ispessita in 25 (il 62%). Le persone con fascite plantare avevano più spesso una caviglia rigida che si piegava poco verso l’alto (Miladi e colleghi, 2023).',
        'Quello studio non aveva un gruppo di confronto di persone senza artrosi del ginocchio, quindi non può dire che il dolore al tallone sia più comune del solito. Gli autori fanno notare che i due problemi hanno fattori di rischio in comune: l’età che avanza, il peso, il tipo di lavoro e scarpe poco adatte. Il legame condiviso potrebbe essere una caviglia rigida, più che un’articolazione che causa il dolore dell’altra.',
        'Se il ginocchio ha iniziato a dolere dallo stesso lato dopo l’inizio del dolore al tallone, e migliora quando il tallone si calma, un cammino cambiato è un’ipotesi ragionevole. Se il ginocchio si gonfia, si blocca, si inceppa o cede, ha un problema suo e va controllato a parte.',
        'Per il dolore intorno alla rotula, la linea guida del 2019 sul dolore femoro-rotuleo raccomanda esercizi che combinano anca e ginocchio (Willy e colleghi, 2019). Se hai anche il piede piatto, il lato del piede in questa storia è spiegato in [piede piatto e dolore al ginocchio](/it/piede-piatto-dolore-ginocchio/).',
      ],
      cites: [CITE.miladiKneeOa, CITE.willyPfpGuideline],
    },
    {
      h2: 'La fascite plantare può causare dolore all’anca?',
      keyFact: 'I runner con fascite plantare avevano un’attività del medio gluteo più bassa e un abbassamento del bacino maggiore rispetto ai runner senza, in uno studio su 15 contro 15 (Kongtong e Khongprasert, 2025).',
      paragraphs: [
        '**Un legame con l’anca c’è, ma non si sa cosa venga prima.** Uno studio di laboratorio del 2025 ha confrontato 15 runner di lunga distanza con fascite plantare e 15 senza. I runner con dolore al tallone usavano meno il medio e il grande gluteo, i muscoli laterali e posteriori dell’anca, in alcuni momenti della falcata. Il loro bacino si abbassava di più dal lato opposto, e ginocchio e tallone si inclinavano di più verso l’interno (Kongtong e Khongprasert, 2025).',
        'Questo è compatibile con due spiegazioni, e lo studio non può scegliere tra le due. Un controllo debole dell’anca potrebbe far ruotare la gamba verso l’interno e caricare di più l’arco. Oppure il dolore al tallone potrebbe cambiare il modo in cui corri, e l’anca si adegua. Nessuno studio ha misurato il dolore all’anca nelle persone con fascite plantare.',
        'Uno studio del 2009 su 25 runner donne con una storia di fascite plantare e 25 runner abbinate ha trovato che il gruppo con fascite plantare atterrava con un aumento più rapido della forza e aveva archi più bassi, ma nessuna differenza nel movimento del retropiede e, al contrario degli studi sul polpaccio, una maggiore flessione della caviglia (Pohl e colleghi, 2009). Chi corre trova altro in [esercizi per i piedi per runner](/it/esercizi-piedi-runner/).',
      ],
      cites: [CITE.kongtongHip, CITE.pohlRunners],
    },
    {
      h2: 'La fascite plantare può causare mal di schiena?',
      keyFact: 'Nessuno studio ha misurato se la fascite plantare porti a mal di schiena lombare. Per il piede piatto, il Framingham Foot Study su 1.930\u00A0adulti non ha trovato un legame con la postura del piede in piedi (Menz e colleghi, 2013).',
      paragraphs: [
        '**Non abbiamo trovato studi che verifichino se la fascite plantare porti al mal di schiena.** Alcune pagine di ambulatori dicono che una zoppia da dolore al tallone causa «spesso» mal di schiena. È una catena possibile, non una catena misurata.',
        'Le prove più vicine riguardano la forma del piede, non il dolore al tallone. Nel Framingham Foot Study, la postura da piede piatto non era legata al mal di schiena lombare, e solo un piede che ruotava verso l’interno durante il cammino mostrava un piccolo legame, nelle donne (Menz e colleghi, 2013). I dettagli sono in [piede piatto e mal di schiena](/it/piede-piatto-mal-di-schiena/), quindi non li ripetiamo qui.',
        'Il mal di schiena lombare è molto comune, e per la maggior parte delle persone non si trova una causa unica (Hartvigsen e colleghi, 2018). Quindi se la schiena fa male, il tallone è un possibile fattore tra molti. L’esercizio è l’approccio con più prove per il mal di schiena di lunga durata: una revisione Cochrane del 2021 su 249\u00A0studi ha trovato che riduceva il dolore di circa 15\u00A0punti su una scala da 100 (Hayden e colleghi, 2021).',
      ],
      cites: [CITE.menz, CITE.hartvigsen, CITE.haydenExercise],
    },
    {
      h2: 'La fascite plantare può causare dolore al polpaccio o alla caviglia?',
      keyFact: 'In 254\u00A0persone con fascite plantare, dal 52 al 60% aveva una rigidità isolata del gastrocnemio, il muscolo più grande del polpaccio (Patel e DiGiovanni, 2011).',
      paragraphs: [
        '**Il polpaccio è il legame più studiato, e potrebbe andare dal polpaccio al tallone.** Un polpaccio rigido limita quanto si piega la caviglia. In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100 senza, chi aveva una flessione della caviglia di 0\u00A0gradi o meno aveva una probabilità di fascite plantare 23,3\u00A0volte maggiore rispetto a chi superava i 10\u00A0gradi (Riddle e colleghi, 2003). In 254\u00A0persone con fascite plantare, dal 52 al 60% aveva una rigidità isolata del gastrocnemio (Patel e DiGiovanni, 2011).',
        'Quindi un polpaccio rigido insieme al dolore al tallone è comune, e allungarlo fa parte del piano per il dolore al tallone. Altro in [polpacci rigidi](/it/polpacci-rigidi/).',
        'Anche la fascia plantare e il tendine d’Achille sono collegati. In 52\u00A0risonanze magnetiche, le persone con alterazioni dell’Achille avevano una fascia plantare più spessa, in media 3,43\u00A0mm contro 2,09\u00A0mm (Stecco e colleghi, 2013). Se il dolore sta dietro il tallone invece che sotto, leggi [fascite plantare o tendinite d’Achille](/it/fascite-plantare-o-tendinite-achille/).',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.steccoPfAchilles],
    },
    {
      h2: 'Il rinforzo dell’anca aiuta la fascite plantare?',
      keyFact: 'In 83\u00A0persone con fascite plantare, i soli allungamenti, gli allungamenti più il rinforzo del piede e gli allungamenti più il rinforzo di piede e anca hanno tutti migliorato dolore e funzione in otto settimane, senza differenze tra loro (Kamonseki e colleghi, 2016).',
      paragraphs: [
        '**Per il tallone in sé, aggiungere il lavoro sull’anca non ha fatto meglio degli allungamenti nell’unico studio che l’ha testato.** Nel 2016, Kamonseki e colleghi hanno diviso 83\u00A0persone con fascite plantare in tre gruppi per otto settimane:',
        {
          list: [
            'Solo allungamenti.',
            'Allungamenti più rinforzo del piede.',
            'Allungamenti più rinforzo del piede e dell’anca (i muscoli che sollevano la gamba di lato e la ruotano verso l’esterno).',
          ],
        },
        'Tutti e tre i gruppi sono migliorati nel dolore al tallone, nella funzione quotidiana e in un test di allungamento ed equilibrio, e nessun gruppo ha fatto meglio degli altri.',
        'Cosa significa in pratica:',
        {
          list: [
            'Gli allungamenti restano la base. La linea guida del 2023 sul dolore al tallone dà agli allungamenti della fascia plantare e del polpaccio un **grado A**, il suo più alto, e al lavoro di forza un **grado B** (Koc e colleghi, 2023).',
            'Il lavoro sull’anca non è una scorciatoia per il tallone. Uno studio, otto settimane e 83\u00A0persone non bastano per escludere un beneficio, ma non ne hanno mostrato uno.',
            'Lo studio non ha misurato il dolore a ginocchio, anca o schiena. Se fanno male, il rinforzo dell’anca resta un’aggiunta sensata, e per il dolore alla rotula la linea guida su quella condizione sostiene gli esercizi per anca e ginocchio (Willy e colleghi, 2019).',
          ],
        },
      ],
      cites: [CITE.kamonseki, CITE.guideline, CITE.willyPfpGuideline],
    },
    {
      h2: 'Quali esercizi aiutano quando il dolore al tallone sale lungo la gamba?',
      paragraphs: [
        'Parti dal tallone: gli allungamenti e il lavoro sul polpaccio della guida agli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/). Poi aggiungi il lavoro sull’anca e sull’equilibrio per la gamba sopra. Le dosi qui sotto sono quelle di partenza di Walkito, prese dalle guide sul dolore al tallone e sul piede piatto.',
        'Resta a un livello in cui il tallone non va peggio la mattina dopo. Se è proprio camminare a scatenare il dolore, [camminare con la fascite plantare](/it/camminare-con-fascite-plantare/) spiega come continuare a muoverti senza una riacutizzazione.',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Dolore acuto al tallone, o dolore al polpaccio che resta dopo che hai smesso',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore acuto al tallone, o dolore al polpaccio che resta dopo che hai smesso',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passo non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico mentre il polpaccio si risveglia.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Abduzione dell’anca',
          evidence: { level: 'early', why: 'Il rinforzo dell’anca faceva parte di uno studio sulla fascite plantare (Kamonseki 2016) ma non ha aggiunto nulla agli allungamenti per il dolore al tallone in otto settimane.' },
          dose: '3\u00A0serie da 10, ogni gamba',
          often: 'Giorni di forza',
          feel: 'Lavoro sul lato esterno dell’anca',
          how: 'Stai in piedi con un elastico e solleva una gamba di lato contro la sua resistenza. Spingi con il tallone, non con le dita. Tieni il busto dritto e non inclinarti dall’altra parte. Un’anca che cede scarica il peso sull’arco.',
          stop: 'Dolore acuto all’anca o all’inguine',
          image: 'Esercizio: abduzione dell’anca',
          media: 'hip_abduction',
          caption: 'Abduzione dell’anca: solleva una gamba di lato contro l’elastico',
          alt: 'Una figura in piedi con un elastico intorno alle gambe che solleva una gamba di lato, con la parte esterna dell’anca evidenziata',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. L’equilibrio è migliorato in tutti i gruppi dello studio del 2016, ma questa tenuta non è stata testata da sola.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, ogni gamba',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede, nella caviglia e nell’anca',
          how: 'Stai su un piede e guarda un punto davanti a te. Lascia che il piede oscilli. Deve farlo, perché quell’oscillazione è il piede che tiene l’equilibrio. Tieni il bacino in piano, così lavora anche l’anca della gamba d’appoggio. Se ti serve, sfiora un mobile o il muro con la punta delle dita. Altro su [equilibrio su una gamba](/it/esercizi/equilibrio-su-una-gamba/).',
          stop: 'Dolore acuto al piede o alla caviglia, non solo l’oscillazione',
          image: 'Esercizio: equilibrio su una gamba',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: stai su un piede e lascialo fare piccole correzioni',
          alt: 'Una figura in equilibrio su una gamba, con i muscoli della parte bassa della gamba evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.kamonseki],
    },
    {
      h2: 'Come capire se il dolore a ginocchio, anca o schiena non viene dal tallone?',
      keyFact: 'Le cause gravi di mal di schiena sono rare, e un quadro di riferimento internazionale elenca i segnali d’allarme che i professionisti controllano per primi (Finucane e colleghi, 2020).',
      paragraphs: [
        'Un cammino cambiato è solo una delle spiegazioni. Questi segnali indicano un problema a parte che va controllato per conto suo:',
        {
          list: [
            '**L’altro dolore è venuto prima,** o non ha niente a che fare con quanto cammini.',
            '**Il ginocchio si gonfia, si blocca, si inceppa o cede.** Sono segni di un problema dentro il ginocchio.',
            '**Il dolore è all’inguine,** o l’anca è rigida quando ti metti calze o scarpe.',
            '**Il dolore scende lungo la gamba sotto il ginocchio, con intorpidimento, formicolio o debolezza.** Può venire da un nervo della schiena, e anche un dolore al tallone con bruciore o formicolio può essere di origine nervosa.',
            '**Dolore di notte o a riposo** che non si attenua cambiando posizione. Vedi anche [dolore al tallone di notte](/it/dolore-tallone-di-notte/).',
          ],
        },
        'I professionisti usano un breve elenco di segnali d’allarme per escludere rari problemi gravi della colonna (Finucane e colleghi, 2020). Li trovi nell’elenco qui sotto.',
      ],
      cites: [CITE.finucaneRedFlags],
    },
  ],
  faq: [
    {
      q: 'La fascite plantare può causare dolore al ginocchio?',
      cites: [CITE.phillipsGait, CITE.miladiKneeOa],
      a: 'Può contribuire, ma non è dimostrato. Il dolore al tallone sposta il carico verso la parte anteriore del piede quando cammini, e questo cambia come viene caricato il ginocchio. Tra 40\u00A0persone con artrosi del ginocchio, il 52% aveva dolore al tallone, ma senza un gruppo di confronto lo studio non può mostrare che una cosa abbia causato l’altra.',
    },
    {
      q: 'La fascite plantare può causare dolore all’anca?',
      cites: [CITE.kongtongHip],
      a: 'Forse, ma nessuno studio ha misurato il dolore all’anca nelle persone con fascite plantare. Uno studio del 2025 su 15 runner con fascite plantare e 15 senza ha trovato un’attività più bassa dei muscoli laterali dell’anca e un abbassamento del bacino maggiore nel gruppo con dolore al tallone. Non poteva dire cosa fosse venuto prima.',
    },
    {
      q: 'La fascite plantare può causare mal di schiena lombare?',
      cites: [CITE.menz, CITE.hartvigsen],
      a: 'Non ci sono studi che lo verifichino. Una zoppia da dolore al tallone potrebbe aggiungere sforzo, ma questa catena non è stata misurata. Per la maggior parte delle persone con mal di schiena lombare non si trova una causa unica, e nel Framingham Foot Study la postura da piede piatto non era legata al mal di schiena.',
    },
    {
      q: 'La fascite plantare può causare dolore al polpaccio?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Un polpaccio rigido va spesso insieme alla fascite plantare, e il legame potrebbe andare dal polpaccio al tallone. Gli studi hanno misurato la rigidità, non il dolore al polpaccio. Chi aveva una flessione della caviglia di 0\u00A0gradi o meno aveva una probabilità di fascite plantare 23,3\u00A0volte maggiore, e dal 52 al 60% di 254\u00A0persone con fascite plantare aveva un gastrocnemio rigido.',
    },
    {
      q: 'Il dolore al tallone può causare dolore all’altra gamba?',
      cites: [CITE.levinsGait],
      a: 'In teoria sì. Quando un tallone fa male, potresti stare meno tempo su quella gamba, come ha mostrato un breve test di laboratorio su 18\u00A0persone con una perlina dolorosa sotto il tallone. Nessuno studio ha misurato il dolore all’altra gamba nelle persone con fascite plantare.',
    },
    {
      q: 'Gli esercizi per l’anca aiutano la mia fascite plantare?',
      cites: [CITE.kamonseki],
      a: 'Non per il tallone in sé, per quanto mostra l’unico studio. In 83\u00A0persone in otto settimane, aggiungere il rinforzo di piede e anca agli allungamenti non ha ridotto il dolore al tallone più dei soli allungamenti, e tutti i gruppi sono migliorati. Il lavoro sull’anca può comunque avere senso se fa male anche il ginocchio o l’anca.',
    },
    {
      q: 'Devo lavorare prima sul tallone o sul ginocchio?',
      cites: [CITE.guideline, CITE.willyPfpGuideline],
      a: 'Puoi lavorare su entrambi insieme. Gli allungamenti per il tallone e la forza del polpaccio hanno grado A e grado B nella linea guida del 2023 sul dolore al tallone, e gli esercizi per anca e ginocchio sono raccomandati per il dolore alla rotula. Se il ginocchio si gonfia, si blocca o cede, fallo controllare invece di aspettare che il tallone si calmi.',
    },
    {
      q: 'La fascite plantare può causare dolore alla caviglia?',
      cites: [CITE.steccoPfAchilles],
      a: 'Un dolore dietro il tallone o intorno al tendine d’Achille può andare insieme alla fascite plantare. In 52\u00A0risonanze magnetiche, le persone con alterazioni dell’Achille avevano una fascia plantare più spessa, in media 3,43\u00A0mm contro 2,09\u00A0mm. Un dolore ai lati della caviglia dopo una storta è un altro problema.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore a ginocchio, anca o schiena è venuto prima, o non cambia con quanto cammini',
      'il ginocchio si gonfia, si blocca, si inceppa o cede, o non riesci a piegarlo o distenderlo del tutto',
      'il dolore scende lungo la gamba sotto il ginocchio, o hai intorpidimento, formicolio, bruciore o debolezza alla gamba o al piede',
      'il dolore ti sveglia di notte o c’è a riposo e non si attenua cambiando posizione',
      'hai mal di schiena con febbre, perdita di peso senza motivo o una storia di tumore',
      'hai intorpidimento intorno all’inguine o ai glutei, o nuovi problemi a controllare vescica o intestino: vai al pronto soccorso',
      'il dolore è iniziato dopo una caduta, una storta o uno scrocchio, o non riesci a caricare il peso sulla gamba',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede con gli esercizi di questa pagina: allungamenti di polpaccio e soleo, sollevamenti sulle punte, abduzione dell’anca ed equilibrio su una gamba. Lavora sul tallone e sulla gamba sopra. Non valuta ginocchio, anca o schiena, quindi falli controllare se hanno i loro segnali d’allarme.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Un test ogni 14\u00A0giorni confronta il lato sinistro e il destro. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['heelPain', 'flatFeetKneePain', 'flatFeetBackPain'],
  crumb: 'Fascite plantare e dolore a ginocchio, anca o schiena',
  campaign: 'guide-can-plantar-fasciitis-cause-knee-pain-it',
};
