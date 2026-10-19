import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/weight-and-plantar-fasciitis.ts (2026-10-18),
 * written around «fascite plantare peso», «fascite plantare sovrappeso».
 * Informal «tu», neutral and non-blaming about body weight. Figures, grades,
 * doses and qualifiers are identical to the English page after its
 * fact-check. Same CITE keys and media ids. Exercise names follow
 * lib/guides/it.ts. Odds ratios rendered as «odds ... volte più alte», as on
 * the other /it/ pages. The English link to heel pain in runners has no
 * Italian version, so the words stay without a link.
 */

export const WEIGHT_PF_IT: Guide = {
  lang: 'it',
  page: 'weightPf',
  mainSource: CITE.vanLeeuwenBmi,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascite plantare e peso: cosa dicono gli studi',
  description:
    'Il peso causa la fascite plantare? Dimagrire aiuta? Cosa mostrano gli studi, perché conta il carico ed esercizi da seduto adatti a un peso più alto.',
  h1: 'Peso e fascite plantare: cosa mostra la ricerca e cosa aiuta adesso',
  lede:
    'Un peso corporeo più alto è uno dei fattori di rischio più chiari per la [fascite plantare](/it/fascite-plantare/) in chi non è uno sportivo. In una revisione di 51\u00A0studi, un indice di massa corporea (IMC) sopra 27 si accompagnava a odds di fascite plantare 3,7\u00A0volte più alte (van Leeuwen e colleghi, 2016). Se perdere peso allevi il dolore al tallone è meno chiaro: nessuno studio randomizzato lo ha verificato in persone con dolore al tallone, quindi gli allungamenti e il lavoro di forza a cui la linea guida del 2023 dà i gradi più alti sono il punto da cui partire, con qualsiasi peso.',
  intro: [
    'Il peso è un fattore tra tanti, non una sentenza. Nello stesso studio caso-controllo che collegava un IMC sopra 30 alla fascite plantare, una caviglia rigida era un fattore molto più forte (Riddle e colleghi, 2003). Il dolore al tallone arriva a persone di ogni corporatura, e persone di ogni corporatura migliorano. Questa pagina riassume cosa hanno trovato gli studi, cosa si sa sulla perdita di peso, perché il carico conta ed esercizi che puoi fare da seduto o con un appoggio.',
  ],
  takeaways: [
    'In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100 senza, un IMC sopra 30 si accompagnava a odds di fascite plantare 5,6\u00A0volte più alte rispetto a un IMC di 25 o meno. Una caviglia rigida era il fattore più forte, con odds 23,3\u00A0volte più alte (Riddle e colleghi, 2003).',
    'Una revisione di 51\u00A0studi ha trovato che un IMC sopra 27 era l’unico fattore clinico, tra quelli che si potevano combinare, chiaramente collegato alla fascite plantare, con odds 3,7\u00A0volte più alte, e il legame era più forte in chi non è uno sportivo (van Leeuwen e colleghi, 2016).',
    'Nessuno studio randomizzato ha verificato la perdita di peso per il dolore al tallone. Una revisione del 2012 ha trovato solo due studi su perdita di peso e dolore al piede, entrambi dopo un intervento di chirurgia bariatrica, e ha definito le prove limitate (Butterworth e colleghi, 2012).',
    'La linea guida del 2023 sul dolore al tallone dà agli allungamenti della fascia plantare e del polpaccio una **A** e al lavoro di forza una **B**. Il consiglio di mantenere una massa magra sana ha una **E**, cioè si basa sulla teoria, non su studi clinici (Koc e colleghi, 2023).',
    'In un follow-up su 174\u00A0persone, l’IMC non prevedeva chi avesse ancora dolore al tallone anni dopo. Lo prevedevano l’essere donna e avere dolore a entrambi i talloni (Hansen e colleghi, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Il peso influisce sulla fascite plantare?',
      keyFact: 'In una revisione di 51\u00A0studi, un IMC sopra 27 si accompagnava a odds di fascite plantare 3,7\u00A0volte più alte, e il legame era più forte in chi non è uno sportivo (van Leeuwen e colleghi, 2016).',
      paragraphs: [
        '**Sì: in chi non è uno sportivo, un IMC più alto è collegato alla fascite plantare in uno studio dopo l’altro.** L’IMC è il peso diviso per l’altezza al quadrato. È una misura approssimativa, ma è quella usata da questi studi.',
        'Lo studio più noto ha confrontato 50\u00A0persone con fascite plantare a un tallone con 100\u00A0persone della stessa età e dello stesso sesso che non ce l’avevano. Un IMC sopra 30 si accompagnava a odds di fascite plantare 5,6\u00A0volte più alte rispetto a un IMC di 25 o meno (Riddle e colleghi, 2003).',
        'Una revisione del 2016 ha combinato 51\u00A0studi. Tra tutti i fattori clinici che gli autori potevano mettere insieme, un IMC sopra 27 era l’unico chiaramente collegato alla fascite plantare, con odds 3,7\u00A0volte più alte, e il legame era più forte in chi non è uno sportivo (van Leeuwen e colleghi, 2016). Due revisioni precedenti erano arrivate alla stessa conclusione, ed entrambe non avevano trovato alcun legame tra IMC e dolore al tallone negli sportivi (Irving e colleghi, 2006; Butterworth e colleghi, 2012).',
        'La linea guida del 2023 sul dolore al tallone indica un IMC alto in chi non è uno sportivo come fattore di rischio, accanto a una caviglia rigida, alla corsa e alle molte ore in piedi, soprattutto su superfici dure (Koc e colleghi, 2023).',
      ],
      sourceNote:
        'Riddle 2003: IMC > 30 contro <= 25, odds ratio 5,6 (IC 95% da 1,9 a 16,6). van Leeuwen 2016: IMC > 27, odds ratio 3,7 (IC 95% da 2,93 a 5,62); 46 dei 51\u00A0studi erano studi caso-controllo.',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi, CITE.irvingHeelPain, CITE.butterworthBmi, CITE.guideline],
    },
    {
      h2: 'Il peso è la causa o solo un fattore?',
      keyFact: 'Nello stesso studio, una caviglia rigida si accompagnava a odds di fascite plantare 23,3\u00A0volte più alte e passare in piedi gran parte della giornata di lavoro a odds 3,6\u00A0volte più alte, contro 5,6\u00A0volte per un IMC sopra 30 (Riddle e colleghi, 2003).',
      paragraphs: [
        '**Un fattore tra tanti, e non il più forte.** Nello studio caso-controllo del 2003, tre fattori contavano ciascuno per conto proprio:',
        {
          list: [
            'Una caviglia rigida (il piede che si piega a fatica verso lo stinco): odds 23,3\u00A0volte più alte.',
            'Un IMC sopra 30: odds 5,6\u00A0volte più alte.',
            'Passare in piedi gran parte della giornata di lavoro: odds 3,6\u00A0volte più alte.',
          ],
        },
        'Gli autori hanno indicato la caviglia rigida come il più importante dei tre (Riddle e colleghi, 2003). È un punto che conta, perché la rigidità della caviglia spesso dipende da [polpacci rigidi](/it/polpacci-rigidi/), e l’allungamento del polpaccio è qualcosa che puoi iniziare oggi.',
        'La maggior parte di questi studi è di tipo caso-controllo o trasversale: confrontano persone che hanno già dolore al tallone con persone che non ce l’hanno. Mostrano un legame, non la prova che il peso causi la fascite plantare (van Leeuwen e colleghi, 2016). Se lavori anche in piedi, [dolore ai piedi a stare in piedi tutto il giorno](/it/dolore-piedi-stare-in-piedi/) tratta quella parte del carico.',
      ],
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
    },
    {
      h2: 'Perché il carico conta per il tallone?',
      paragraphs: [
        '**La fascia plantare è la banda di tessuto sotto il piede che sostiene l’arco, e riceve carico a ogni passo.** Più peso corporeo significa più carico a ogni passo, quindi la stessa camminata o lo stesso turno chiedono di più al tessuto. Il consiglio della linea guida per il dolore al tallone parte proprio da questa idea: regolare il carico sui piedi al lavoro, nel tempo libero e nella vita di tutti i giorni. La linea guida dà a questo consiglio una **E**, perché si basa sulla teoria, non su studi clinici (Koc e colleghi, 2023).',
        'Perdere peso riduce davvero la pressione sotto il piede. In uno studio su 41\u00A0adulti con un IMC medio vicino a 36, il gruppo con un piano alimentare ha perso 5,9\u00A0kg in tre mesi contro 1,9\u00A0kg del gruppo di confronto, e aveva una pressione di picco più bassa sotto alcune zone del piede. La forma del piede e il modo di camminare non sono cambiati (Song e colleghi, 2015). Quello studio non ha misurato il dolore al tallone.',
        'Ma la pressione non spiega tutto. In uno studio su persone con dolore al piede in attesa di un intervento di chirurgia bariatrica, il dolore è diminuito dopo l’intervento, ma il calo della pressione sotto il piede non era collegato al calo del dolore. Lo era l’umore: chi aveva più sintomi depressivi riferiva più dolore al piede, prima e dopo (Walsh e colleghi, 2018). Il dolore non dipende solo dalla meccanica, ed è un motivo in più per non dartene la colpa.',
      ],
      cites: [CITE.guideline, CITE.songWeightLoss, CITE.walshBariatric],
    },
    {
      h2: 'Perdere peso aiuta la fascite plantare?',
      keyFact: 'Una revisione del 2012 ha trovato solo due studi prospettici su perdita di peso e sintomi al piede, entrambi dopo un intervento chirurgico, e ha concluso che le prove sulla perdita di peso per ridurre il dolore al piede erano limitate (Butterworth e colleghi, 2012).',
      paragraphs: [
        '**Può darsi, ma nessuno studio randomizzato lo ha verificato in persone con dolore al tallone.** Questa è la risposta onesta. Tutto quello che abbiamo viene da studi senza un vero gruppo di confronto, per lo più dopo un intervento di chirurgia bariatrica. Ecco cosa esiste:',
      ],
      table: {
        caption: 'Studi su perdita di peso e dolore al piede o al tallone',
        head: ['Studio', 'Chi', 'Cosa ha trovato'],
        rows: [
          ['Boules, 2018', '163\u00A0persone con fascite plantare, dopo un intervento di chirurgia bariatrica', 'Nel 90% i sintomi al tallone si sono risolti, secondo le cartelle cliniche'],
          ['Walsh, 2018', '45\u00A0persone con dolore al piede: 29 operate, 16 in attesa', 'Il dolore al piede è diminuito dopo l’intervento'],
          ['Song, 2015', '41\u00A0adulti, piano alimentare o attesa', 'Pressione più bassa sotto il piede; dolore non misurato'],
          ['Yang, 2025', '92\u00A0persone in terapia con semaglutide, su 2.902 con dolore al tallone', 'Miglioramento del dolore maggiore rispetto a chi non lo prendeva; studio non randomizzato'],
        ],
      },
      after: [
        'Lo studio più grande ha riesaminato le cartelle cliniche di 163\u00A0persone con fascite plantare sottoposte a chirurgia bariatrica. Il loro IMC medio è sceso da 45 a circa 35, e in 146 di loro (90%) i sintomi al tallone si sono risolti (Boules e colleghi, 2018). Non c’era un gruppo di confronto, e circa il 90% delle persone con fascite plantare migliora comunque con un trattamento non chirurgico (Latt e colleghi, 2020), quindi questo studio non può mostrare quanto abbia aggiunto la perdita di peso in sé.',
        'Lo studio sulla semaglutide ha seguito persone con dolore al tallone di lunga durata. Le 92 che prendevano il farmaco per il diabete o per perdere peso hanno riferito un miglioramento maggiore rispetto a chi non lo prendeva, ma non erano state scelte a caso, e gli autori chiedono uno studio randomizzato (Yang e colleghi, 2025). I farmaci per perdere peso e la chirurgia sono decisioni da prendere con il tuo medico, non qualcosa da iniziare solo per il dolore al tallone.',
        'La linea guida non dice ai professionisti di prescrivere la perdita di peso per il dolore al tallone. Dice che possono dare consigli sull’esercizio per costruire o mantenere una massa magra sana e indirizzarti a qualcuno per l’alimentazione, con una **E** (Koc e colleghi, 2023).',
      ],
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.walshBariatric, CITE.songWeightLoss, CITE.yangSemaglutide, CITE.latt, CITE.guideline],
    },
    {
      h2: 'Quali esercizi sono adatti a un peso corporeo più alto?',
      paragraphs: [
        'Gli esercizi con i gradi migliori nella linea guida del 2023, gli allungamenti (**A**) e il lavoro di forza per il polpaccio (**B**), non dipendono dal tuo peso (Koc e colleghi, 2023). Quello che cambia è come inizi. Le versioni da seduto e con appoggio mettono meno carico sul tallone e sono più leggere per ginocchia ed equilibrio, quindi qui vengono per prime.',
        'Le dosi di partenza sono le stesse della guida principale agli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/). Fai il primo allungamento della fascia plantare seduto sul bordo del letto, prima di alzarti: in uno studio su 82\u00A0persone, un allungamento della fascia plantare fatto prima di alzarsi ha alleviato il dolore dei primi passi del mattino più del solo allungamento del polpaccio (DiGiovanni e colleghi, 2003). Se un esercizio porta il dolore al tallone a 6 su 10, per oggi fermati.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutti i giorni in cui fai esercizio',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Se accavallare la gamba è difficile, tieni il piede a terra, passa un asciugamano sotto l’avampiede e tira con delicatezza.',
          stop: 'Dolore acuto al tallone, o dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutti i giorni in cui fai esercizio',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro o al piano della cucina. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Il muro regge una parte del tuo peso, quindi puoi inclinarti solo fin dove ti senti stabile.',
          stop: 'Dolore al polpaccio che resta dopo che ti sei fermato',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone dietro a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutti i giorni in cui fai esercizio',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione al muro, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
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
          often: '3\u00A0giorni a settimana, mai due di fila',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, il muscolo più profondo del polpaccio, con un carico quasi nullo sul tallone. È il primo passaggio del lavoro sul polpaccio, qualunque sia il tuo peso.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi, con le mani in appoggio',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Nei giorni di forza, quando i sollevamenti da seduto ti vengono facili',
          feel: 'I polpacci che lavorano insieme',
          how: 'Mettiti in piedi davanti al piano della cucina o allo schienale di una sedia robusta, con le mani appoggiate sopra. Sali dritto sopra gli alluci, poi scendi piano. Nei giorni in cui il tallone fa male le mani possono reggere un po’ di peso, e sempre meno man mano che diventi più forte. I due piedi si dividono il carico.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'moderate', why: 'Fa parte del programma che in uno studio del 2023 ha migliorato la forma dell’arco. Da solo, il piede corto ha risultati più deboli. Non è stato testato per il dolore al tallone.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Quasi tutti i giorni in cui fai esercizio',
          feel: 'L’arco che si solleva',
          how: 'Siediti con il piede appoggiato a terra. Avvicina l’avampiede al tallone in modo che l’arco si sollevi, e tieni. Il bordo esterno del piede resta a terra. Non arricciare le dita: arricciarle è l’errore più comune in questo esercizio.',
          stop: 'Un crampo al piede che non passa quando ti fermi',
          image: 'Esercizio: piede corto, da seduto',
          media: 'short_foot_seated',
          caption: 'Piede corto, da seduto: solleva l’arco senza arricciare le dita',
          alt: 'Una figura seduta solleva l’arco di un piede, con l’arco evidenziato',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Quali attività sono più leggere per il tallone?',
      paragraphs: [
        '**Le attività in cui i piedi non reggono tutto il tuo peso a ogni passo.** La linea guida consiglia di cambiare il carico sui piedi invece di smettere di muoverti (Koc e colleghi, 2023). Nessuno studio ha confrontato le attività per persone con dolore al tallone e un peso più alto, quindi queste sono opzioni pratiche, non testate:',
        {
          list: [
            '**Cyclette o bici reclinata.** Continui a muoverti mentre il sellino regge il tuo peso.',
            '**Nuoto o camminata in acqua.** L’acqua toglie ai piedi gran parte del tuo peso.',
            '**Esercizi da seduto o per la parte alta del corpo.** Ergometro per le braccia, elastici o allenamenti sulla sedia ti tengono attivo nei giorni in cui il tallone fa male.',
            '**Camminate più brevi, più spesso.** Diverse camminate brevi possono pesare meno su un tallone dolorante di una sola camminata lunga.',
          ],
        },
        'Un controllo semplice vale per qualsiasi attività: se i primi passi della mattina dopo sono chiaramente peggiori, quella giornata è stata più di quanto il tallone potesse reggere, quindi la volta dopo fai un po’ meno. [Camminare con la fascite plantare](/it/camminare-con-fascite-plantare/) spiega come riprendere a camminare un passo alla volta.',
        'Se stai iniziando a fare esercizio per sentirti meglio o per perdere peso, partire da attività a basso impatto ti permette di continuare mentre il tallone si calma. La linea guida indica la corsa e le molte ore in piedi, soprattutto su superfici dure, come fattori di rischio per il dolore al tallone (Koc e colleghi, 2023).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Scarpe e plantari contano di più con un peso più alto?',
      paragraphs: [
        'Nessuno studio ha testato scarpe o plantari per il dolore al tallone in modo specifico in persone con un peso più alto. Per il dolore al tallone in generale, la linea guida del 2023 dà ai plantari da soli un grado **B a sfavore**: le prove dicono di non affidarsi solo a loro. Insieme agli allungamenti e al lavoro di forza hanno una **C** (Koc e colleghi, 2023). [Plantari o esercizi](/it/plantari-o-esercizi/) mette a confronto le due strade.',
        'La linea guida raccomanda invece i consigli sulle calzature come parte della gestione del carico, e indica il lavoro sotto carico su superfici dure che assorbono poco gli urti come fattore di rischio (Koc e colleghi, 2023). Un’opzione pratica, non testata negli studi, sono scarpe che sostengono e ammortizzano sui pavimenti duri, anche in casa.',
        'Dopo una grande perdita di peso, i piedi possono cambiare. Nello studio sulla chirurgia, gli autori hanno ipotizzato che la perdita di grasso sotto il mesopiede possa cambiare la calzata di scarpe e plantari, e che valga la pena controllarla dopo un calo di peso importante (Walsh e colleghi, 2018).',
      ],
      cites: [CITE.guideline, CITE.walshBariatric],
    },
    {
      h2: 'La fascite plantare passa anche se non perdo peso?',
      paragraphs: [
        '**Per la maggior parte delle persone sì, si attenua con il tempo e con un trattamento non chirurgico.** Circa il 90% delle persone con fascite plantare migliora con un trattamento non chirurgico come allungamenti e plantari, spesso in tempi da 3 a 6\u00A0mesi (Latt e colleghi, 2020).',
        'In un lungo follow-up su 174\u00A0persone, i ricercatori hanno verificato se IMC, età, fumo, lavoro fisico e altri fattori prevedessero chi avrebbe avuto ancora dolore al tallone anni dopo. Lo prevedevano solo l’essere donna e avere dolore a entrambi i talloni. L’IMC no (Hansen e colleghi, 2018). Perché colpisca di più le donne intorno ai 50\u00A0anni è spiegato in [fascite plantare e menopausa](/it/fascite-plantare-menopausa/).',
        'Quindi un peso più alto può rendere più probabile che la fascite plantare inizi, ma non significa che ti resterà per sempre. Gli allungamenti e il lavoro sul polpaccio descritti sopra sono gli stessi che aiutano persone di ogni corporatura. [Quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/) riporta i tempi completi.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
  ],
  faq: [
    {
      q: 'Il sovrappeso può causare la fascite plantare?',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
      a: 'Un peso più alto è collegato alla fascite plantare, ma nessuno studio dimostra che ne sia la causa. In uno studio un IMC sopra 30 si accompagnava a odds 5,6\u00A0volte più alte, e una revisione di 51\u00A0studi ha trovato odds 3,7\u00A0volte più alte sopra un IMC di 27, con il legame più forte in chi non è uno sportivo. Una caviglia rigida era un fattore ancora più forte.',
    },
    {
      q: 'Perdere peso aiuta la fascite plantare?',
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.latt],
      a: 'Può darsi, ma nessuno studio randomizzato lo ha verificato in persone con dolore al tallone. In uno studio sulle cartelle cliniche di 163\u00A0persone con fascite plantare sottoposte a chirurgia bariatrica, nel 90% i sintomi al tallone si sono risolti, ma non c’era un gruppo di confronto, e la maggior parte delle persone con fascite plantare migliora comunque con un trattamento non chirurgico (Latt e colleghi, 2020). Una revisione del 2012 ha definito le prove limitate.',
    },
    {
      q: 'Quanto peso devo perdere per aiutare la fascite plantare?',
      cites: [CITE.butterworthBmi],
      a: 'Nessuno studio ha stabilito una quantità. Non esiste uno studio sulla perdita di peso per il dolore al tallone, quindi qualsiasi numero tu legga è un’ipotesi. Se vuoi perdere peso per la tua salute, parlane con il tuo medico. Per il tallone in sé, gli allungamenti e il lavoro di forza per il polpaccio hanno le prove più solide, con qualsiasi peso.',
    },
    {
      q: 'L’IMC è un fattore di rischio per la fascite plantare nei runner?',
      cites: [CITE.irvingHeelPain, CITE.butterworthBmi],
      a: 'Per lo più no. Due revisioni sistematiche hanno trovato che l’IMC era collegato al dolore cronico al tallone in chi non è uno sportivo, ma non negli sportivi. Nel dolore al tallone dei runner contano di più altri fattori.',
    },
    {
      q: 'Che esercizio posso fare con la fascite plantare se sono in sovrappeso?',
      cites: [CITE.guideline],
      a: 'Gli esercizi da seduto e con appoggio sono un buon inizio: un allungamento della fascia plantare da seduto, allungamenti del polpaccio al muro e sollevamenti sulle punte da seduto. Per la forma fisica, cyclette, nuoto o camminata in acqua ti tengono in movimento con meno carico sul tallone. La linea guida del 2023 consiglia di cambiare il carico sui piedi invece di smettere di muoverti.',
    },
    {
      q: 'I farmaci per perdere peso aiutano la fascite plantare?',
      cites: [CITE.yangSemaglutide],
      a: 'Esiste un solo studio osservazionale. Le persone con dolore al tallone di lunga durata che prendevano la semaglutide hanno riferito un miglioramento maggiore rispetto a chi non la prendeva, ma non erano state assegnate a caso, e gli autori chiedono uno studio randomizzato. È una decisione da prendere con il tuo medico, non qualcosa da iniziare solo per il dolore al tallone.',
    },
    {
      q: 'Perché i talloni mi fanno più male da quando ho preso peso?',
      cites: [CITE.guideline, CITE.songWeightLoss],
      a: 'Più peso corporeo significa più carico sulla fascia plantare a ogni passo, e il dolore al tallone spesso inizia dopo che il carico sui piedi è aumentato. In uno studio su 41\u00A0adulti, perdere peso ha ridotto la pressione sotto alcune zone del piede. Quello studio non ha misurato il dolore al tallone, quindi il legame con il dolore è probabile ma non dimostrato.',
    },
    {
      q: 'La fascite plantare passa senza perdere peso?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Per la maggior parte delle persone sì. Circa il 90% migliora con un trattamento non chirurgico come allungamenti e plantari, spesso in tempi da 3 a 6\u00A0mesi. In un lungo follow-up su 174\u00A0persone, l’IMC non prevedeva chi avesse ancora dolore al tallone anni dopo. Lo prevedevano l’essere donna e avere dolore a entrambi i talloni.',
    },
    {
      q: 'I plantari sono più importanti se peso di più?',
      cites: [CITE.guideline],
      a: 'Nessuno studio lo ha verificato. Per il dolore al tallone in generale, la linea guida del 2023 sconsiglia di affidarsi solo ai plantari (grado B a sfavore) e dà loro una C insieme ad allungamenti e lavoro di forza. Scarpe ammortizzate sui pavimenti duri sono un’opzione pratica, anche se gli studi non le hanno testate. Vedi [plantari o esercizi](/it/plantari-o-esercizi/).',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai il diabete e noti intorpidimento, formicolio, una ferita o cambiamenti nella pelle o nella forma del piede',
      'il dolore è iniziato dopo una caduta, un salto o una storta, o non riesci a caricare il peso sul piede',
      'il tallone è gonfio, arrossato o caldo, o hai la febbre',
      'il dolore peggiora di notte o a riposo, o si accompagna a bruciore o intorpidimento',
      'fa male quando stringi i lati del tallone, o il dolore continua ad aumentare con l’attività (possibile frattura da stress)',
      'un polpaccio è dolorante e gonfio (possibile coagulo di sangue): chiedi aiuto in giornata',
      'ti fanno male entrambi i talloni insieme a dolore o rigidità in altre articolazioni',
      'stai pensando a farmaci per perdere peso o alla chirurgia: è un discorso da fare con il tuo medico',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede. Non tiene traccia del tuo peso e non dà consigli sulla dieta. Costruisce un piano con gli allungamenti e il lavoro di forza per il polpaccio di questa pagina e parte dalle versioni da seduto e con appoggio.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['heelPain', 'walkingPf', 'standing'],
  crumb: 'Peso e fascite plantare',
  campaign: 'guide-weight-and-plantar-fasciitis-it',
};
