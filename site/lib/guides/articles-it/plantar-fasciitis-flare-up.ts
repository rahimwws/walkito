import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/plantar-fasciitis-flare-up.ts (2026-10-19),
 * written around «riacutizzazione fascite plantare», «fascite plantare
 * peggiorata all’improvviso». Informal «tu». Figures, grades, doses, hedges
 * and CITE keys are identical to the English page after its fact-check.
 * Same media ids. Exercise names and the calf ladder («tenuta sulle punte»)
 * follow it.ts. "Clinician" is «professionista sanitario». Links to
 * heel-pain-runners and the foot pain identifier removed (no Italian page),
 * words kept.
 */

export const PF_FLARE_UP_IT: Guide = {
  lang: 'it',
  page: 'pfFlareUp',
  mainSource: CITE.guideline,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Riacutizzazione della fascite plantare: le prime 48 ore',
  description:
    'Fascite plantare riacutizzata? Le cause più comuni, cosa fare nelle prime 48 ore, come riprendere gli esercizi e i segnali che non è una ricaduta.',
  h1: 'Riacutizzazione della fascite plantare: cosa la scatena e cosa fare nelle prime 48 ore',
  lede:
    'Una riacutizzazione della [fascite plantare](/it/fascite-plantare/) di solito arriva dopo un aumento di quanto deve reggere il tallone: una camminata lunga, una giornata in piedi su pavimenti duri o una nuova abitudine. La linea guida del 2023 sul dolore al tallone indica il dolore dopo un recente aumento dell’attività in piedi come una caratteristica tipica, e raccomanda consigli su come adattare il carico senza dire di fermarsi, un consiglio a cui dà un grado **E** perché si basa sulla teoria e non su studi clinici (Koc e colleghi, 2023). Nelle prime 48\u00A0ore riduci il carico che l’ha scatenata, continua con gli allungamenti leggeri e lascia che sia la mattina dopo a dirti come va.',
  intro: [
    'Nessuno studio ha definito una riacutizzazione della fascite plantare o testato cosa fare nei primi due giorni, quindi questa pagina usa le regole testate più vicine e dice da dove vengono. Parla delle cause più comuni, di un breve piano per le prime 48\u00A0ore, di come fare un passo indietro con gli esercizi e poi risalire, e dei segnali che il dolore è qualcosa di diverso da una riacutizzazione. Se il tallone ti fa più male ai primi passi della giornata, [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) spiega quel quadro nel dettaglio.',
  ],
  takeaways: [
    'La linea guida del 2023 sul dolore al tallone indica il dolore dopo un recente aumento dell’attività in piedi come una caratteristica tipica della fascite plantare, e raccomanda consigli su come cambiare il carico, con grado **E**, senza consigliare il riposo assoluto (Koc e colleghi, 2023).',
    'In uno studio su 50\u00A0persone con fascite plantare e 100 senza, una caviglia rigida (probabilità 23,3\u00A0volte maggiore), un BMI sopra 30 (5,6\u00A0volte) e stare in piedi per la maggior parte della giornata di lavoro (3,6\u00A0volte) erano fattori di rischio. Quello studio riguardava il comparire della fascite plantare, non le riacutizzazioni (Riddle e colleghi, 2003).',
    'Una regola di monitoraggio del dolore permette un dolore fino a circa 5 su 10 durante l’attività, purché si calmi entro la mattina dopo. È stata testata su 38\u00A0persone con dolore all’Achille, non con fascite plantare (Silbernagel e colleghi, 2007).',
    'La linea guida non dà raccomandazioni su ghiaccio o caldo, quindi il ghiaccio è al massimo uno strumento di sollievo, e nessuno studio mostra che calmi una riacutizzazione (Koc e colleghi, 2023).',
    'In uno studio su 180\u00A0adulti, il consiglio di ridurre le attività che causano le riacutizzazioni e poi tornare gradualmente, più una talloniera, si è accompagnato a un miglioramento clinicamente rilevante a circa tre mesi (Riel e colleghi, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è una riacutizzazione della fascite plantare?',
      paragraphs: [
        '**Una riacutizzazione è un periodo di giorni in cui il tuo solito dolore al tallone è chiaramente peggiore del normale.** I primi passi del mattino fanno più male, il tallone inizia a dolere prima quando sei in piedi, oppure un dolore che si era attenuato ritorna. Non esiste una definizione medica condivisa, e non abbiamo trovato studi che contino quanto spesso capitano le riacutizzazioni o quanto durano.',
        'Il tessuto sotto il tallone non ama i cambiamenti improvvisi di carico. La linea guida del 2023 descrive il dolore della fascite plantare come più evidente ai primi passi dopo il riposo, e indica un recente aumento dell’attività in piedi come una parte tipica della storia (Koc e colleghi, 2023). Una riacutizzazione è probabilmente la stessa cosa in piccolo: al tallone è stato chiesto più di quanto fosse pronto a reggere.',
        'Per questo una riacutizzazione non vuol dire per forza ricominciare da zero. Circa il 90% delle persone con fascite plantare migliora con le cure non chirurgiche, anche se spesso servono mesi (Latt e colleghi, 2020). Vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/) per cosa mostrano i follow-up lunghi.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Cosa scatena una riacutizzazione della fascite plantare?',
      keyFact: 'Stare in piedi per la maggior parte della giornata di lavoro si accompagnava a una probabilità di fascite plantare 3,6\u00A0volte maggiore, e una caviglia rigida a una probabilità 23,3\u00A0volte maggiore, in uno studio su 50\u00A0casi e 100\u00A0controlli (Riddle e colleghi, 2003).',
      paragraphs: [
        '**Il filo comune è un cambiamento improvviso del carico.** Nessuno studio ha seguito cosa scatena le riacutizzazioni in chi ha già la fascite plantare. Esistono invece ricerche su cosa la fa comparire, e vanno nella stessa direzione:',
        {
          list: [
            '**Un aumento improvviso dell’attività.** Una vacanza con lunghe giornate a piedi, un nuovo programma di corsa, un’escursione o una settimana intensa al lavoro. La linea guida indica come tipico un recente aumento dell’attività in piedi (Koc e colleghi, 2023). Se corri, anche i cambiamenti di chilometraggio contano.',
            '**Molte ore in piedi.** In uno studio su 50\u00A0persone con fascite plantare e 100 senza, stare in piedi per la maggior parte della giornata di lavoro si accompagnava a una probabilità 3,6\u00A0volte maggiore (Riddle e colleghi, 2003). In un altro, le persone con dolore al tallone erano attive quanto quelle senza, ma stavano in piedi 3,4\u00A0ore al giorno in più (Landorf e colleghi, 2023). Vedi [dolore ai piedi a stare in piedi tutto il giorno](/it/dolore-piedi-stare-in-piedi/).',
            '**Piedi nudi su pavimenti duri.** La linea guida indica il lavoro in piedi su superfici poco ammortizzanti come fattore di rischio (Koc e colleghi, 2023), anche se uno studio ha trovato che chi ha dolore al tallone non stava su pavimenti duri più spesso di chi non ce l’ha (Landorf e colleghi, 2023). Una guida di buona pratica del 2021 consiglia di evitare di camminare scalzi e le scarpe piatte e poco sostenitive finché i sintomi non sono passati (Morrissey e colleghi, 2021).',
            '**Scarpe nuove o diverse.** Non abbiamo trovato studi che abbiano testato le scarpe nuove come fattore scatenante. Quello che si sa: le persone con dolore al tallone portavano scarpe con il tacco più duro rispetto a chi non ce l’aveva (Landorf e colleghi, 2023), e la guida di buona pratica preferisce scarpe sostenitive con il tallone un po’ più alto delle dita (Morrissey e colleghi, 2021). Passare a scarpe piatte, sottili o molto flessibili, o a [scarpe barefoot](/it/scarpe-barefoot/), è un cambiamento che il tallone sentirà.',
            '**Un polpaccio rigido.** Nello stesso studio del 2003, chi aveva una caviglia che si piegava verso l’alto di 0\u00A0gradi o meno aveva una probabilità 23,3\u00A0volte maggiore rispetto a chi superava i 10\u00A0gradi (Riddle e colleghi, 2003). Saltare gli allungamenti per un po’ può far tornare quella rigidità. Vedi [polpacci rigidi](/it/polpacci-rigidi/).',
          ],
        },
        'Anche il peso corporeo è un fattore di rischio: un BMI sopra 30 si accompagnava a una probabilità 5,6\u00A0volte maggiore nello studio del 2003. Il peso cambia lentamente, quindi è più un fattore di sfondo che il motivo di una riacutizzazione di questa settimana. Altro in [peso e fascite plantare](/it/peso-e-fascite-plantare/).',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.landorfFootwear, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Cosa fare nelle prime 48 ore di una riacutizzazione?',
      keyFact: 'In uno studio su 180\u00A0adulti, il gruppo che ha ricevuto solo il consiglio di ridurre le attività che causano le riacutizzazioni e tornare gradualmente, più una talloniera, è migliorato in modo clinicamente rilevante a circa tre mesi (Riel e colleghi, 2023).',
      paragraphs: [
        '**Riduci il carico, continua a muoverti con delicatezza e giudica dalla mattina dopo.** Nessuno studio ha testato un piano di 48\u00A0ore per la fascite plantare. I passi qui sotto mettono in pratica la linea guida e il consiglio testato più vicino:',
        {
          list: [
            '**Trova cosa l’ha scatenata e riducilo.** Camminate più brevi, più pause da seduto, una pausa dalla corsa o dalle salite. Il consiglio testato in uno studio danese era di ridurre le attività che causano le riacutizzazioni, poi tornare piano piano ai livelli di attività di prima, guidati dai sintomi (Riel e colleghi, 2020).',
            '**Non smettere del tutto di muoverti.** La linea guida raccomanda di adattare il carico e non consiglia il riposo assoluto (Koc e colleghi, 2023). Il cammino che ti serve nella vita di tutti i giorni va bene, entro la regola del dolore qui sotto.',
            '**Continua con gli allungamenti leggeri.** Gli allungamenti della fascia plantare e del polpaccio hanno **grado A** (Koc e colleghi, 2023). Fai il primo prima che il piede tocchi il pavimento al mattino.',
            '**Porta le scarpe anche in casa.** Scarpe sostenitive o pantofole rigide dal primo passo della giornata, invece dei piedi nudi su piastrelle o parquet (Morrissey e colleghi, 2021).',
            '**Spezza i periodi in piedi.** La guida di buona pratica consiglia di interrompere i lunghi periodi in piedi da fermo (Morrissey e colleghi, 2021).',
          ],
        },
        'In quello studio, tutti i 180\u00A0adulti hanno ricevuto questo tipo di consiglio più una talloniera, e due dei tre gruppi hanno avuto anche l’allenamento con sollevamenti sulle punte, o sollevamenti più un’infiltrazione di cortisone. Tutti e tre i gruppi sono migliorati in modo clinicamente rilevante a circa tre mesi, compreso quello che aveva solo il consiglio e la talloniera (Riel e colleghi, 2023). Il consiglio era la base, non un dettaglio aggiunto alla fine.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.rielHeelRaiseAdd, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quanto dolore va bene durante una riacutizzazione?',
      keyFact: 'In uno studio su 38\u00A0persone con dolore all’Achille, chi è rimasto attivo con un dolore fino a circa 5 su 10, che si calmava entro la mattina dopo, è andato bene a dodici mesi quanto chi ha sospeso corsa e salti (Silbernagel e colleghi, 2007).',
      paragraphs: [
        '**Usa la stessa regola del dolore che vale per camminare: al massimo moderato durante l’attività, e di nuovo al tuo livello normale entro la mattina dopo.** La regola viene da uno studio del 2007 su 38\u00A0persone con dolore al tendine d’Achille. Durante l’attività era permesso un dolore fino a circa 5 su 10, purché si calmasse entro la mattina dopo e non crescesse di settimana in settimana. Restare attivi in questo modo non ha portato a risultati peggiori a dodici mesi rispetto a sospendere corsa e salti per sei settimane (Silbernagel e colleghi, 2007). Non è stata testata nella fascite plantare, quindi usala come una guida presa in prestito.',
        'Per il dolore al tallone, la guida di buona pratica del 2021 raccomanda con forza il monitoraggio del dolore e di insegnare alle persone a leggere come il dolore risponde all’attività, senza dare un numero (Morrissey e colleghi, 2021). Durante gli esercizi, Walkito termina la sessione se il dolore arriva a 6 su 10.',
      ],
      table: {
        caption: 'Come leggere il tallone durante una riacutizzazione (scala del dolore da 0 a 10)',
        head: ['Cosa noti', 'Cosa fare'],
        rows: [
          ['Da 0 a 5 durante, mattina dopo normale', 'Mantieni quel carico'],
          ['Sopra 5 durante l’attività', 'Fermati o accorcia per oggi'],
          ['Mattina dopo peggiore del solito', 'Riduci di nuovo per un giorno o due'],
          ['Meglio ogni mattina', 'Inizia a riprendere'],
          ['Peggio ogni giorno anche riducendo', 'Professionista sanitario'],
        ],
      },
      after: [
        'La versione completa di questa regola, con una colonna per la camminata successiva, è in [camminare con la fascite plantare](/it/camminare-con-fascite-plantare/). Il controllo del mattino è quello che conta di più, perché il dolore ai primi passi mostra come il piede ha retto il giorno prima.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0persone per gruppo, tendinopatia achillea, non fascite plantare.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Devi mettere il ghiaccio su una riacutizzazione della fascite plantare?',
      paragraphs: [
        '**Il ghiaccio va bene se ti fa sentire meglio il tallone, ma nessuno studio mostra che calmi una riacutizzazione.** La linea guida del 2023 ha trovato prove troppo scarse per raccomandare il caldo o il freddo superficiale per la fascite plantare (Koc e colleghi, 2023).',
        'Anche per i traumi sportivi recenti, dove il ghiaccio si usa di più, una revisione di 22\u00A0studi non ha trovato prove su un modo migliore o una durata migliore per applicarlo (Bleakley e colleghi, 2004). Quindi non esiste una regola testata del tipo «ghiaccio per X minuti» per un tallone dolorante. Se lo usi, metti un panno tra il ghiaccio e la pelle, smetti se la pelle diventa insensibile e lascia perdere se hai il diabete o una sensibilità ridotta ai piedi.',
        'Usalo accanto agli allungamenti, non al loro posto. [Ghiaccio o caldo per la fascite plantare](/it/ghiaccio-o-caldo-fascite-plantare/) spiega cosa hanno trovato i pochi studi e come proteggere la pelle.',
      ],
      cites: [CITE.guideline, CITE.bleakleyIce],
    },
    {
      h2: 'Come riprendere dopo una riacutizzazione?',
      keyFact: 'In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico hanno ridotto il dolore e migliorato la funzione quotidiana più in fretta degli allungamenti, e a dodici mesi i due gruppi erano più o meno pari (Rathleff e colleghi, 2015).',
      paragraphs: [
        '**Fai un passo indietro di un livello con il lavoro di forza, poi risali quando le mattine si calmano.** Nessuno studio ha testato come riprendere dopo una riacutizzazione. La linea guida del 2023 dà al lavoro di forza sul polpaccio un **grado B** (Koc e colleghi, 2023), e in uno studio su 48\u00A0persone i sollevamenti sulle punte con carico e un asciugamano sotto le dita hanno aiutato più in fretta degli allungamenti (Rathleff e colleghi, 2015). Il lavoro di forza vale la pena di mantenerlo, solo a un livello che il tallone riesce a reggere questa settimana.',
        'Il lavoro sul polpaccio di Walkito sale a gradini: sollevamenti sulle punte da seduto, poi sollevamenti su due piedi, poi la tenuta sulle punte, e solo più avanti il sollevamento con asciugamano, quello che carica di più la fascia plantare. Durante una riacutizzazione:',
        {
          list: [
            'Scendi di un gradino. Se eri ai sollevamenti con asciugamano, torna alla tenuta sulle punte o ai sollevamenti su due piedi. Se eri su due piedi, torna a quelli da seduto.',
            'Continua con gli allungamenti come al solito.',
            'Risali di un gradino quando le ultime due sessioni al livello più basso ti sono sembrate facili e le mattine sono tornate normali.',
            'Reintroduci l’attività che ha scatenato la riacutizzazione a piccoli pezzi, cambiando una cosa alla volta: distanza, ritmo, salite o superficie.',
          ],
        },
        'Queste sono le dosi di partenza di Walkito, non una prescrizione. La serie completa e la tabella sono in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/), e la scala della forza è spiegata in [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
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
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Dolore al polpaccio che resta dopo che hai smesso',
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
          stop: 'Dolore al polpaccio che resta dopo che hai smesso',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passo non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza, il gradino a cui tornare durante una riacutizzazione',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, il muscolo più profondo del polpaccio, quasi senza carico sul tallone.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o una mattina dopo peggiore',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passo non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza, quando quelli da seduto tornano a sembrarti facili',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico. Tieniti al muro per l’equilibrio.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o una mattina dopo peggiore',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Qual è la cosa peggiore da fare durante una riacutizzazione?',
      paragraphs: [
        '**Nessuno studio stila una classifica, ma due errori opposti sono i più comuni: stringere i denti e andare avanti, e fermare tutto.** Ecco cosa dicono le prove su ciascuno:',
        {
          list: [
            '**Andare avanti con un dolore che cresce.** Mantenere le stesse camminate o corse lunghe mentre il tallone peggiora ogni mattina ignora proprio il segnale su cui si basa la regola del dolore testata (Silbernagel e colleghi, 2007). Gli esperti della guida di buona pratica del 2021 hanno indicato un cambiamento del carico complessivo come fattore di rischio per le riacutizzazioni, quindi più carico è la direzione sbagliata (Morrissey e colleghi, 2021).',
            '**Smettere con tutta l’attività e con gli esercizi.** La linea guida raccomanda di adattare il carico e non consiglia il riposo assoluto (Koc e colleghi, 2023), e nello studio sull’Achille restare attivi entro un limite di dolore è andato bene quanto sospendere corsa e salti per sei settimane (Silbernagel e colleghi, 2007). Abbandonare gli allungamenti e il lavoro sul polpaccio vuol dire anche rinunciare alle opzioni con **grado A** e **grado B**.',
            '**Camminare scalzi su pavimenti duri,** soprattutto ai primi passi della giornata (Morrissey e colleghi, 2021).',
            '**Affidarsi solo a un plantare.** I plantari usati da soli per un sollievo a breve termine hanno dalla linea guida un **grado B contrario**, anche se possono aiutare insieme agli esercizi (Koc e colleghi, 2023). Vedi [plantari o esercizi](/it/plantari-o-esercizi/).',
          ],
        },
        'Una riacutizzazione non è la prova che il tuo piano non ha funzionato. Se le riacutizzazioni continuano a tornare o ognuna è peggiore della precedente, è il momento di rivolgerti a un professionista sanitario, non di sforzarti di più.',
      ],
      cites: [CITE.silbernagel, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quando non è una riacutizzazione?',
      keyFact: 'Le radiografie semplici spesso non vedono le fratture da stress all’inizio: una revisione ha stimato la loro sensibilità alla prima visita intorno al 10%, che sale a valori dal 30 al 70% dopo tre settimane (Patel e colleghi, 2011).',
      paragraphs: [
        '**Se il dolore si comporta in modo diverso dalla tua solita fascite plantare, non dare per scontato che sia una riacutizzazione.** Il dolore della fascite plantare è peggiore ai primi passi dopo il riposo, spesso si attenua quando ti metti in moto e può tornare dopo molto tempo in piedi (Koc e colleghi, 2023). Altri quadri fanno pensare ad altro:',
        {
          list: [
            '**Un dolore che cresce quanto più cammini,** spesso dopo un aumento brusco dell’attività, o un dolore quando stringi i lati del tallone, può essere una frattura da stress (Tu, 2018). Vedi [fascite plantare o frattura da stress](/it/fascite-plantare-o-frattura-da-stress/).',
            '**Un dolore di notte o a riposo,** oppure bruciore, formicolio e intorpidimento, fanno pensare a qualcosa di diverso dalla fascia plantare. Vedi [dolore al tallone di notte](/it/dolore-tallone-di-notte/).',
            '**Uno schiocco improvviso o un dolore acuto** sotto il piede durante l’attività, o un nuovo livido o gonfiore, richiedono un professionista sanitario, non un piano per la riacutizzazione.',
            '**Un dolore profondo al centro del tallone** che peggiora su terreno duro può venire dal cuscinetto adiposo del tallone. Vedi [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
          ],
        },
        'Non sai bene in quale quadro rientra il tuo dolore? Lo strumento per identificare il dolore al piede passa in rassegna i quadri più comuni, anche se non fa diagnosi.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Cosa fa riacutizzare la fascite plantare?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Di solito un aumento improvviso del carico sul tallone: più cammino o corsa del solito, molte ore in piedi o piedi nudi su pavimenti duri. La linea guida del 2023 indica come tipico un recente aumento dell’attività in piedi. In uno studio, stare in piedi per la maggior parte della giornata di lavoro si accompagnava a una probabilità 3,6\u00A0volte maggiore di avere la fascite plantare.',
    },
    {
      q: 'Quanto dura una riacutizzazione della fascite plantare?',
      cites: [CITE.latt],
      a: 'Nessuno studio ha misurato quanto dura una riacutizzazione, quindi qualsiasi numero fisso di giorni è un’ipotesi. Usa le mattine come guida: se il dolore ai primi passi si attenua nel giro di qualche giorno dopo che hai ridotto il carico, sei sulla strada giusta. La fascite plantare in sé spesso richiede mesi, e circa il 90% delle persone migliora con le cure non chirurgiche.',
    },
    {
      q: 'Cosa devo fare quando la fascite plantare si riacutizza?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Riduci l’attività che l’ha scatenata, continua con allungamenti leggeri della fascia plantare e del polpaccio, porta scarpe sostenitive anche in casa e giudica dal dolore della mattina dopo. La linea guida del 2023 raccomanda di adattare il carico e non consiglia il riposo assoluto. In uno studio su 180\u00A0adulti, questo tipo di consiglio più una talloniera si è accompagnato a un miglioramento rilevante a circa tre mesi.',
    },
    {
      q: 'Devo stare a riposo assoluto durante una riacutizzazione?',
      cites: [CITE.guideline, CITE.silbernagel],
      a: 'Nessuno studio mostra che serva il riposo assoluto. La linea guida del 2023 raccomanda di adattare il carico e non dice di fermarsi. In uno studio sul dolore all’Achille, chi è rimasto attivo con un dolore fino a circa 5 su 10, che si calmava entro il mattino, è andato bene a dodici mesi quanto chi ha sospeso corsa e salti per sei settimane. Se anche camminate brevi fanno molto male o ti fanno zoppicare, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Qual è la cosa peggiore da fare con la fascite plantare?',
      cites: [CITE.guideline, CITE.morrisseyBestPractice],
      a: 'Nessuno studio stila una classifica, ma andare avanti con un dolore che peggiora ogni mattina è l’errore più chiaro, visto che gli esperti di una guida di buona pratica del 2021 hanno indicato i cambiamenti di carico come fattore di rischio per le riacutizzazioni. Fermare tutta l’attività e gli esercizi è l’errore opposto. Anche camminare scalzi su pavimenti duri è meglio evitarlo finché i sintomi non si calmano.',
    },
    {
      q: 'Devo continuare gli esercizi durante una riacutizzazione?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Sì, a un livello più leggero. Continua con gli allungamenti della fascia plantare e del polpaccio, che la linea guida del 2023 classifica con grado A, e scendi di un gradino con il lavoro di forza sul polpaccio, per esempio dai sollevamenti in piedi a quelli da seduto. Il lavoro di forza ha grado B, e i sollevamenti sulle punte con carico hanno aiutato più in fretta degli allungamenti in uno studio su 48\u00A0persone. Fermati se il dolore arriva a 6 su 10.',
    },
    {
      q: 'Il ghiaccio aiuta in una riacutizzazione della fascite plantare?',
      cites: [CITE.guideline, CITE.bleakleyIce],
      a: 'Il ghiaccio va bene per il sollievo, ma non ci sono prove che calmi una riacutizzazione. La linea guida del 2023 sul dolore al tallone non dà raccomandazioni su ghiaccio o caldo, e una revisione di 22\u00A0studi sui traumi recenti non ha trovato un modo o una durata migliori per applicarlo. Proteggi la pelle, e lascia perdere se hai una sensibilità ridotta ai piedi.',
    },
    {
      q: 'Le scarpe nuove possono far riacutizzare la fascite plantare?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Possono, anche se nessuno studio ha testato le scarpe nuove come fattore scatenante. Le persone con dolore al tallone portavano scarpe con il tacco più duro di chi non ce l’aveva, e una guida di buona pratica consiglia scarpe sostenitive con il tallone un po’ più alto delle dita. Passare a scarpe piatte, sottili o molto flessibili è un cambiamento che il tallone può sentire.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo una caduta, un salto o una storta, o non riesci a caricare il peso sul piede',
      'hai sentito uno schiocco o un dolore acuto improvviso sotto il piede, o c’è un nuovo livido o gonfiore',
      'il dolore cresce quanto più cammini, o stringere i lati del tallone fa male (possibile frattura da stress)',
      'il tallone fa male di notte o a riposo, non solo ai primi passi',
      'hai intorpidimento, formicolio o bruciore al piede',
      'il tallone è arrossato, caldo o gonfio, o non ti senti bene o hai la febbre',
      'hai il diabete o una cattiva circolazione e il piede fa male o ha un aspetto diverso',
      'il dolore continua a peggiorare per più di qualche giorno anche riducendo il carico, o le riacutizzazioni continuano a tornare',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede. Legge una riacutizzazione come fa questa pagina: da come senti il tallone al mattino.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta: una mattina difficile rende la sessione più leggera, e il lavoro sul polpaccio risale di un gradino man mano che le mattine migliorano. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['walkingPf', 'heelPain', 'pfDuration'],
  crumb: 'Riacutizzazione della fascite plantare',
  campaign: 'guide-plantar-fasciitis-flare-up-it',
};
