import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Dolore ai piedi per chi lavora in magazzino e nei negozi (IT).
 * Translated from `articles/retail-warehouse-foot-pain.ts` (2026-10-18),
 * written around «dolore ai piedi lavoro in magazzino», «male ai piedi
 * commessa», «scarpe antinfortunistiche male ai piedi». Informal «tu».
 * Figures, grades, doses and hedges identical to the English page; exercise
 * names follow `lib/guides/it.ts`. Same CITE keys as the English file.
 * Links with no Italian version (/program/, best insoles) removed, words kept.
 */

export const RETAIL_WAREHOUSE_IT: Guide = {
  lang: 'it',
  page: 'retailWarehouse',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolore ai piedi in magazzino: pavimenti duri ed esercizi',
  description:
    'Dolore ai piedi in magazzino e in negozio: cosa dicono gli studi su cemento, scarpe antinfortunistiche, tappetini e plantari, più esercizi da 3 minuti.',
  h1: 'Dolore ai piedi per chi lavora in negozio o in magazzino: cosa aiuta sui pavimenti duri',
  lede:
    'In magazzino e in negozio i piedi fanno male perché le ore passate in piedi e a camminare su pavimenti duri caricano tallone, arco e polpaccio con poco ammortizzamento sotto. Stare in piedi per gran parte della giornata di lavoro ha aumentato di 3,6\u00A0volte la probabilità di [fascite plantare](/it/fascite-plantare/) in uno studio (Riddle e colleghi, 2003). Gli allungamenti del polpaccio e della fascia plantare hanno il grado più alto, **A**, nella linea guida del 2023 sul dolore al tallone, e una versione breve si fa in circa 3\u00A0minuti di pausa. Tappetini e plantari ammortizzati aiutano il comfort, ma le prove a loro favore sono più deboli (Speed e colleghi, 2018).',
  intro: [
    'Questa pagina parla del lavoro in sé: pavimenti in cemento e piastrelle, scarpe antinfortunistiche, turni lunghi e pause brevi. Per il dolore da stazione eretta in generale, vedi [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/). Se lavori in corsia d’ospedale, [dolore ai piedi per infermieri](/it/dolore-piedi-infermieri/) parla dei turni di 12\u00A0ore e dei turni a rotazione.',
  ],
  toc: true,
  takeaways: [
    'Passare gran parte della giornata di lavoro in piedi ha aumentato di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli. Una flessibilità della caviglia molto ridotta, di solito per un polpaccio rigido, l’ha aumentata di 23,3\u00A0volte (Riddle e colleghi, 2003).',
    'La linea guida del 2023 sul dolore al tallone mantiene una raccomandazione di **grado B**: i professionisti sanitari dovrebbero valutare il carico sui piedi legato al lavoro, soprattutto su superfici che ammortizzano poco, come fattore di rischio per il dolore al tallone (Koc e colleghi, 2023).',
    'Una revisione di 10\u00A0studi ha trovato prove moderate che tappetini e plantari ammortizzati riducono fastidio e stanchezza in chi lavora in piedi, e solo prove limitate che i plantari funzionino meglio dei tappetini (Speed e colleghi, 2018).',
    'In una revisione di 7\u00A0studi su lavoratori con calzature antinfortunistiche, i 4 che hanno misurato il dolore hanno trovato dolore ai piedi in una quota tra il 42,3% e il 60,8% dei lavoratori, con caldo, sudore, peso e rigidità come lamentele principali (Arceri e colleghi, 2024).',
    'Gli allungamenti del polpaccio e della fascia plantare hanno il grado più alto della linea guida, **A**, e il lavoro di forza una **B**. I plantari da soli hanno una **B a sfavore** per il dolore al tallone (Koc e colleghi, 2023).',
  ],
  sections: [
    {
      h2: 'Perché ti fanno male i piedi dopo un turno in magazzino o in negozio?',
      keyFact: 'Passare gran parte della giornata di lavoro con il peso sui piedi ha aumentato di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo appaiato (Riddle e colleghi, 2003).',
      paragraphs: [
        'Il lavoro in negozio e in magazzino mescola due tipi di carico. Alla cassa o a una postazione di imballaggio stai fermo in piedi a lungo. In reparto o mentre prepari gli ordini cammini, porti pesi, spingi carrelli e ti giri. In entrambi i casi il peso resta su tallone e arco per gran parte del turno, e le pause le decide il turno, non i tuoi piedi.',
        'Uno studio caso-controllo del 2003 su 50\u00A0persone con fascite plantare e 100\u00A0controlli appaiati ha trovato che passare gran parte della giornata di lavoro con il peso sui piedi aumentava di 3,6\u00A0volte la probabilità di fascite plantare. La flessibilità della caviglia ridotta, cioè un [polpaccio rigido](/it/polpacci-rigidi/), era il fattore più forte, con una probabilità 23,3\u00A0volte più alta. **Sul polpaccio rigido puoi lavorare. Sul lavoro di solito no.**',
        'Una revisione sistematica di 16\u00A0studi sul dolore cronico al tallone ha trovato qualche prova di un legame con lo stare a lungo in piedi, insieme a peso corporeo più alto, età e flessibilità della caviglia ridotta. Gli autori chiedevano studi che seguano le persone nel tempo, quindi questo indica un’associazione, non la prova che stare in piedi causi il dolore al tallone (Irving e colleghi, 2006).',
        'Quanto cammini? Non abbiamo trovato studi pubblicati che contino i passi per turno di chi lavora in magazzino o in negozio. Cifre come «19\u00A0km (12\u00A0miglia) a turno» compaiono su blog di settore senza uno studio dietro. Il dato misurato più vicino viene dagli infermieri: in media 9.360\u00A0passi per turno in uno studio con contapassi (Chang e Cho, 2022).',
      ],
      cites: [CITE.riddle, CITE.irvingHeelPain, CITE.changCho],
    },
    {
      h2: 'Il cemento fa davvero più male ai piedi?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone indica il carico sui piedi legato al lavoro, soprattutto in condizioni di scarso ammortizzamento, come fattore di rischio (grado B, Koc e colleghi, 2023).',
      paragraphs: [
        'Probabilmente sì, ma nessuno ha misurato il cemento da solo. La linea guida del 2023 sul dolore al tallone mantiene una raccomandazione del 2014, di **grado B**: i professionisti sanitari dovrebbero valutare le attività lavorative con il peso sui piedi, soprattutto in condizioni di scarso ammortizzamento, come fattore di rischio per il dolore al tallone e la fascite plantare. Un pavimento di cemento nudo è tra le superfici di lavoro che ammortizzano meno.',
        'Quello che è stato testato è il contrario: aggiungere qualcosa di morbido. In studi di laboratorio e sul posto di lavoro, stare in piedi su un tappetino o usare plantari ammortizzati ha ridotto il fastidio rispetto a un pavimento duro (Speed e colleghi, 2018). Questo è coerente con l’idea che la superficie dura aumenti il carico, senza dimostrare che il cemento causi una condizione specifica.',
        'Alcuni dolori al tallone peggiorano sui pavimenti duri per un altro motivo. Se il dolore è in profondità al centro del tallone ed è chiaramente peggiore a piedi nudi su piastrelle o cemento, vale la pena leggere della [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning],
    },
    {
      h2: 'Aiutano di più i tappetini antifatica o i plantari?',
      keyFact: 'Una revisione di 10\u00A0studi ha trovato prove moderate che l’ammortizzamento riduce il fastidio in chi lavora in piedi, e prove limitate che i plantari funzionino meglio dei tappetini (Speed e colleghi, 2018).',
      paragraphs: [
        '**Entrambi aiutano il comfort, senza un vincitore chiaro, e nessuno dei due ha prove forti.** Una revisione sistematica del 2018 ha trovato 10\u00A0studi su tappetini e plantari ammortizzati in persone che lavorano in piedi. Ha giudicato moderate le prove che l’ammortizzamento riduca fastidio e stanchezza, e limitate quelle che i plantari funzionino meglio dei tappetini. Gli studi erano molto diversi tra loro, e gli autori chiedevano studi più grandi in veri luoghi di lavoro.',
        'In uno studio sul posto di lavoro, alcuni addetti al montaggio hanno passato una settimana di giornate da 8\u00A0ore in ciascuna di quattro condizioni: pavimento duro, tappetino, plantari, e plantari sopra il tappetino. Tappetino, plantari e la combinazione erano tutti più comodi del pavimento duro, senza una differenza chiara tra loro (King, 2002).',
        'In un test di laboratorio di 4\u00A0ore, tre tappetini antifatica commerciali su quattro hanno ridotto il fastidio rispetto a un pavimento duro, ma nessun tappetino ha fatto meglio degli altri (Wiggermann e Keyserling, 2013). Quindi nessun tappetino si è dimostrato migliore degli altri.',
        'La divisione pratica: **un tappetino aiuta solo dove stai fermo**, per esempio alla cassa, al banco di imballaggio o a una postazione di lavoro. Se giri per il reparto o prepari ordini, l’ammortizzamento deve viaggiare con te, nella scarpa. Per il dolore al tallone in particolare, la linea guida del 2023 dà ai plantari da soli una **B a sfavore**, quindi non affidarti solo a loro. [Plantari o esercizi](/it/plantari-o-esercizi/) mette a confronto le due strade.',
      ],
      cites: [CITE.speedCushioning, CITE.kingMats, CITE.wiggermannMats, CITE.guideline],
    },
    {
      h2: 'Le scarpe antinfortunistiche causano dolore ai piedi?',
      keyFact: 'In una revisione di 7\u00A0studi su lavoratori con calzature antinfortunistiche, i 4 che hanno misurato il dolore hanno trovato dolore ai piedi in una quota tra il 42,3% e il 60,8% dei lavoratori (Arceri e colleghi, 2024).',
      paragraphs: [
        'Le scarpe antinfortunistiche proteggono i piedi, ma non sono esenti da lamentele. Una revisione sistematica del 2024 ha trovato 7\u00A0studi su lavoratori con calzature antinfortunistiche. Tutti gli studi riportavano fastidio e dolore, e i 4 che hanno misurato il dolore hanno trovato dolore ai piedi in una quota tra il 42,3% e il 60,8% dei lavoratori. Le lamentele principali erano caldo, sudore, peso e suola rigida, soprattutto intorno alle dita e al puntale.',
        'In uno studio su 509\u00A0lavoratori di 12\u00A0aziende metalmeccaniche, tutti con calzature antinfortunistiche ogni giorno, l’81% aveva almeno un problema ai piedi. Le lamentele più comuni sulle scarpe erano caldo e umidità all’interno (42%), peso (27,5%) e calzata (22,9%) (Mancuso e colleghi, 2017).',
        'Sono indagini, quindi non possono dire che siano le scarpe a causare il dolore: ore su pavimenti duri farebbero male con qualsiasi scarpa. I suggerimenti della revisione sono pratici:',
        {
          list: [
            'Prendi la misura e la larghezza giuste, e controlla se i modelli approvati dal tuo datore di lavoro esistono in calzata larga.',
            'Scegli la scarpa più leggera che rispetta il livello di sicurezza richiesto nel tuo posto di lavoro.',
            'Cerca materiali traspiranti se i piedi ti diventano caldi e sudati.',
            'Quasi tutte le scarpe antinfortunistiche hanno una soletta estraibile, quindi puoi inserire un plantare ammortizzato se non rende la scarpa troppo stretta.',
          ],
        },
        'Non sostituire mai una scarpa antinfortunistica obbligatoria con una scarpa da ginnastica perché ti fanno male i piedi. Parla con il tuo responsabile o con il responsabile della sicurezza di altri modelli approvati.',
      ],
      cites: [CITE.arceriSafety, CITE.mancusoSafety],
    },
    {
      h2: 'Quali esercizi puoi fare in pausa?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti del polpaccio e della fascia plantare una A, il suo grado più alto, e al lavoro di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Gli esercizi qui sotto non richiedono attrezzi né spazio a terra: basta un muro, un montante della scaffalatura o il bordo di un bancone. I primi tre si fanno in piedi, in sala pausa o in una corsia del magazzino. Gli altri sono per dopo il turno, da seduto.',
        'La linea guida dà agli allungamenti del polpaccio e della fascia plantare una **A** e al lavoro di forza una **B**. Questi gradi riguardano la fascite plantare, ma sono gli stessi tessuti che un turno su pavimenti duri mette sotto carico. Fermati per quel giorno se un esercizio porta il dolore a 6 su 10 o più.',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto. Un polpaccio rigido era il fattore di rischio più forte in uno studio caso-controllo del 2003.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'In pausa o dopo il turno',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani a un muro, a un montante della scaffalatura o a un bancone. Tieni la gamba dietro tesa, il tallone dietro a terra e il bacino in avanti. Funziona anche con le scarpe antinfortunistiche.',
          stop: 'Dolore acuto al tallone o al polpaccio',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone dietro a terra, bacino in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'In pausa o dopo il turno',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro a terra, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore acuto al tallone o al polpaccio',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Oscillazioni della caviglia',
          evidence: { level: 'early', why: 'Lavora sulla flessibilità della caviglia, il fattore di rischio più forte in uno studio caso-controllo del 2003. Non è stato testato da solo in uno studio sul dolore al tallone.' },
          dose: '2\u00A0serie da 15, ogni gamba',
          often: 'In pausa',
          feel: 'Un allungamento sulla parte anteriore della caviglia e una tensione nella parte bassa del polpaccio',
          how: 'Un piede avanti e uno indietro, mani al muro. Porta il ginocchio davanti in avanti oltre le dita mentre il tallone resta a terra. Lentamente, circa due secondi per direzione. Altro in [oscillazioni della caviglia](/it/esercizi/mobilita-caviglia/).',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: oscillazioni della caviglia',
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: il ginocchio va avanti oltre le dita, il tallone resta a terra',
          alt: 'Una figura con un piede avanti e uno indietro che porta il ginocchio davanti oltre le dita, con la caviglia evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Dopo il turno, e prima dei primi passi al mattino',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti, togli le scarpe e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Se ti fanno male i primi passi appena alzato, fanne uno sul bordo del letto prima che il piede tocchi terra.',
          stop: 'Dolore acuto al tallone',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché lo senti nell’arco',
          alt: 'Una figura che tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo esercizio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Nei giorni liberi, o dopo un turno più leggero',
          feel: 'I polpacci che lavorano insieme',
          how: 'In piedi su entrambi i piedi, tieniti al muro, sali dritto sopra gli alluci, poi scendi lentamente. Il lavoro di forza va meglio nei giorni liberi, così il polpaccio ha tempo di recuperare prima del turno successivo. Altro in [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
          stop: 'Dolore al tallone sopra 6 su 10, o peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi lentamente',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: { level: 'early', why: 'Non testato negli studi di questa pagina. È qui per il comfort dopo il turno.' },
          dose: '1\u00A0minuto',
          often: 'Dopo il turno',
          feel: 'Una pressione decisa sotto il piede',
          how: 'Da seduto, fai rotolare lentamente la pianta del piede su una pallina da massaggio, con una pressione decisa. Se fai smorfie, alleggerisci.',
          stop: 'Dolore che resta dopo che hai smesso',
          image: 'Esercizio: massaggio con la pallina',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare lentamente la pianta su una pallina, con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina, con la pianta evidenziata',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Come inserirli in un turno: 3, 5 o 10\u00A0minuti?',
      paragraphs: [
        'Quasi tutte le pause in negozio e in magazzino sono brevi e decise dai turni. Una revisione di studi di laboratorio ha trovato che i sintomi dello stare in piedi senza interruzioni diventavano clinicamente rilevanti dopo circa 42\u00A0minuti nelle persone inclini al dolore da stazione eretta, e gli autori suggerivano di non stare fermi in piedi per più di circa 40\u00A0minuti (Coenen e colleghi, 2017). Spesso non puoi scegliere quando sederti, ma puoi cambiare posizione: cammina fino in fondo alla corsia, sposta il peso, o fai un allungamento del polpaccio a una scaffalatura.',
        {
          list: [
            '**3\u00A0minuti, in pausa:** l’allungamento del polpaccio, 2\u00A0tenute da 30\u00A0secondi per gamba, più una tenuta da 30\u00A0secondi per il soleo per gamba. Lavora sul polpaccio rigido, il fattore di rischio più forte nello studio del 2003.',
            '**5\u00A0minuti, in una pausa più lunga o a fine turno:** aggiungi le oscillazioni della caviglia, o l’allungamento della fascia plantare una volta tolte le scarpe.',
            '**10\u00A0minuti, in un giorno libero:** aggiungi i sollevamenti sulle punte (3\u00A0serie da 10) e il massaggio con la pallina. Così copri anche la parte di forza, con una **B**.',
          ],
        },
        '**Fare una routine breve nella maggior parte dei turni conta più di una lunga che salti.** Legala a qualcosa che fai già, come la prima pausa o il momento in cui ti togli le scarpe.',
      ],
      cites: [CITE.coenen, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Cosa dicono le prove su ogni opzione',
      paragraphs: [
        'Molti consigli sul lavoro mescolano prove forti e deboli. Questa tabella mette a confronto le opzioni principali, con lo studio migliore che abbiamo trovato per ciascuna.',
      ],
      table: {
        caption: 'Opzioni per il dolore ai piedi nei lavori in piedi e in movimento',
        head: ['Opzione', 'Prova migliore', 'Risultato', 'Forza delle prove'],
        rows: [
          ['Allungamenti di polpaccio e fascia', 'Linea guida 2023', 'Grado A per il dolore al tallone', 'Forte'],
          ['Lavoro di forza per il polpaccio', 'Linea guida 2023', 'Grado B per il dolore al tallone', 'Moderata'],
          ['Tappetino antifatica', 'Revisione di 10\u00A0studi', 'Meno fastidio', 'Moderata, solo comfort'],
          ['Plantari ammortizzati', 'Stessa revisione', 'Meno fastidio, simile al tappetino', 'Moderata, solo comfort'],
          ['Plantari da soli per il dolore al tallone', 'Linea guida 2023', 'B a sfavore', 'Tende a sfavore'],
          ['Calze a compressione', 'Studio su 40\u00A0guardie giurate', 'Nessun aumento del fastidio', 'Un solo piccolo studio'],
          ['Scarpe antinfortunistiche che calzano meglio', 'Revisione di 7\u00A0studi', 'Contano calzata, peso, caldo', 'Solo indagini'],
        ],
      },
      after: [
        'Le calze a compressione sono trattate in dettaglio in [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/). Lo studio riguardava guardie giurate uomini con lunghi turni in piedi, non lavoratori di magazzino (Garcia e colleghi, 2023).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning, CITE.garcia, CITE.arceriSafety],
    },
    {
      h2: 'Potrebbe essere fascite plantare o qualcos’altro?',
      paragraphs: [
        'Un dolore generico e i piedi stanchi dopo un turno lungo di solito passano con una notte di riposo. La fascite plantare ha un andamento più chiaro: dolore acuto vicino alla parte interna del tallone, peggiore ai primi passi del mattino o dopo essere stato seduto. Se ti ci ritrovi, vedi [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) ed [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/). Circa il 90% delle persone con fascite plantare migliora con un trattamento non chirurgico, anche se possono servire da tre a sei mesi (Latt e colleghi, 2020).',
        'Altri quadri indicano altro. Un dolore bruciante sotto l’avampiede fa pensare alla [metatarsalgia](/it/metatarsalgia-dolore-pianta-piede/). Un dolore lungo l’arco che peggiora durante il turno è trattato in [dolore all’arco plantare](/it/dolore-arco-plantare/). Il dolore sul dorso del piede può venire da scarpe allacciate troppo strette o che premono; vedi [dolore al dorso del piede](/it/dolore-dorso-piede/).',
        'Un dolore in un piccolo punto preciso di un osso, che peggiora più cammini, può essere una frattura da stress, soprattutto dopo un aumento delle ore o un nuovo lavoro con più cammino. **In quel caso serve un professionista sanitario, non altri esercizi.**',
      ],
      cites: [CITE.latt, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Perché mi fanno così male i piedi lavorando in magazzino?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'Le ore passate in piedi e a camminare su pavimenti duri tengono il carico su tallone, arco e polpaccio per gran parte del turno. Passare gran parte della giornata di lavoro in piedi ha aumentato di 3,6\u00A0volte la probabilità di fascite plantare in uno studio, e la linea guida del 2023 sul dolore al tallone indica il carico sui piedi legato al lavoro su superfici poco ammortizzate come fattore di rischio.',
    },
    {
      q: 'Quanti passi fa un magazziniere in un turno?',
      cites: [CITE.changCho],
      a: 'Non abbiamo trovato studi pubblicati che contino i passi nei turni in magazzino o in negozio. Cifre come 19\u00A0km (12\u00A0miglia) a turno vengono da blog di settore senza uno studio dietro. Il dato misurato più vicino viene dagli infermieri d’ospedale, che hanno fatto in media 9.360\u00A0passi per turno in uno studio con contapassi. Il tuo telefono o il tuo orologio sono la guida migliore per il tuo lavoro.',
    },
    {
      q: 'I tappetini antifatica funzionano davvero?',
      cites: [CITE.speedCushioning, CITE.wiggermannMats],
      a: 'Riducono il fastidio di chi sta in piedi in un punto fisso, ma le prove sono moderate, non forti. Una revisione di 10\u00A0studi ha trovato che l’ammortizzamento aiuta chi lavora in piedi. In un test di laboratorio di 4\u00A0ore, tre tappetini su quattro hanno fatto meglio di un pavimento duro, e nessun tappetino ha fatto meglio degli altri. Un tappetino aiuta solo dove stai fermo.',
    },
    {
      q: 'Meglio plantari o tappetino per stare in piedi sul cemento?',
      cites: [CITE.kingMats, CITE.speedCushioning],
      a: 'Più o meno uguali per il comfort. In uno studio sul posto di lavoro, gli addetti al montaggio hanno trovato tappetino, plantari ed entrambi insieme più comodi di un pavimento duro, senza una differenza chiara tra loro. Una revisione ha giudicato limitate le prove che i plantari funzionino meglio dei tappetini. Se ti muovi, i plantari vengono con te e il tappetino no.',
    },
    {
      q: 'Le scarpe antinfortunistiche possono causare la fascite plantare?',
      cites: [CITE.arceriSafety, CITE.guideline],
      a: 'Nessuno studio dimostra che le scarpe antinfortunistiche causino la fascite plantare. Una revisione di 7\u00A0studi su lavoratori con calzature antinfortunistiche ha trovato dolore ai piedi in una quota tra il 42,3% e il 60,8% dei lavoratori nei 4 studi che l’hanno misurato, con caldo, peso e rigidità come lamentele principali. Contano anche le ore su pavimenti duri, qualunque sia la scarpa. Una buona calzata e la scarpa approvata più leggera sono primi passi ragionevoli.',
    },
    {
      q: 'Quali allungamenti posso fare in pausa al lavoro?',
      cites: [CITE.guideline],
      a: 'L’allungamento del polpaccio e quello del soleo si fanno in piedi contro un muro o una scaffalatura, con le scarpe da lavoro: due tenute da 30\u00A0secondi ciascuna, per gamba, circa 4\u00A0minuti per entrambi gli allungamenti. La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio una A. Tieni l’allungamento della fascia plantare e i sollevamenti sulle punte per dopo il turno o per i giorni liberi.',
    },
    {
      q: 'È normale che mi facciano male i piedi dopo un turno in negozio?',
      cites: [CITE.waters],
      a: 'Piedi stanchi e doloranti dopo un lungo turno in piedi sono comuni, e una revisione del 2015 ha legato lo stare a lungo in piedi al lavoro a fastidio, stanchezza e dolore alle gambe in molti lavori. Comune non vuol dire che vada ignorato. Un dolore acuto, che dura anche nei giorni liberi o che è peggiore ai primi passi del mattino merita che tu faccia qualcosa.',
    },
    {
      q: 'Posso continuare a lavorare in piedi con la fascite plantare?',
      cites: [CITE.latt, CITE.guideline],
      a: 'Molte persone lo fanno, con qualche cambiamento. Brevi allungamenti in pausa, scarpe che calzano meglio e ammortizzamento dove stai in piedi riducono il carico, e circa il 90% delle persone con fascite plantare migliora con un trattamento non chirurgico, anche se possono servire da tre a sei mesi. Se il dolore peggiora nonostante questo, rivolgiti a un professionista sanitario.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato con una caduta, un carico caduto sul piede o una storta al lavoro',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'il dolore è in un piccolo punto preciso di un osso e peggiora camminando, il che può indicare una frattura da stress',
      'il piede è intorpidito, formicola o brucia, oppure è freddo',
      'il piede o il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'un polpaccio o una gamba diventa all’improvviso dolorante e gonfio',
      'hai il diabete o meno sensibilità ai piedi, e una scarpa ti ha fatto una piaga o una vescica',
      'il dolore ti sveglia di notte o continua a peggiorare dopo diverse settimane con i cambiamenti di questa pagina',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Non devi capire da solo l’ordine, le dosi o quando passare a una versione più difficile. Walkito costruisce il piano dalle tue risposte e lo adatta a come stanno i tuoi piedi ogni giorno, così una brutta mattina dopo un turno lungo vuol dire una sessione più leggera.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti, così si adatta ai turni e ai giorni liberi. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['standing', 'nurses', 'heelPainAfterWalking'],
  crumb: 'Dolore ai piedi in negozio e in magazzino',
  campaign: 'guide-retail-warehouse-foot-pain-it',
};
