import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dolore al tallone di notte (IT) ────────────────────────────────────
 *
 * Translated from `articles/heel-pain-at-night.ts` (2026-10-08), written
 * around the Italian queries «dolore al tallone di notte», «male al
 * tallone a letto», «dolore tallone a riposo». Informal «tu». Figures,
 * grades and qualifiers are identical to the English page; exercise names
 * follow `lib/guides/it.ts`. Same CITE keys as the English file (incl.
 * tedeschiBaxter). No new citations.
 */

export const HEEL_PAIN_AT_NIGHT_IT: Guide = {
  lang: 'it',
  page: 'heelPainAtNight',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dolore al tallone di notte: cause e quando è grave',
  description:
    'Il dolore al tallone di notte o a riposo può indicare una frattura da stress, un nervo compresso o un’artrite. I segnali da non ignorare e cosa fare.',
  h1: 'Dolore al tallone di notte: da cosa dipende e quando è un campanello d’allarme',
  lede:
    'Il dolore al tallone che arriva di notte, a letto o a riposo è uno schema diverso dalla classica fitta ai primi passi del mattino tipica della fascite plantare. Il dolore notturno e a riposo può indicare una frattura da stress del calcagno, un nervo compresso, un’artrite infiammatoria o un altro problema che deve valutare un professionista sanitario. Questa pagina passa in rassegna le cause comuni e quelle da non lasciar correre.',
  intro: [
    'Se il tallone fa male soprattutto ai primi passi del mattino e poi si calma, il punto di partenza più probabile è [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/). Questa pagina è per il dolore che resta a riposo, ti sveglia, o arriva dopo che sei stato un po’ senza caricare il piede e non corrisponde allo schema tipico della fascite plantare.',
  ],
  takeaways: [
    'Il dolore della fascite plantare è peggiore ai primi passi dopo il riposo e di solito passa quando ti muovi. Un dolore che resta a riposo, ti sveglia o peggiora durante la notte è uno schema d’allarme che va approfondito (Tu, 2018).',
    'Le fratture da stress del calcagno possono dare un dolore sordo o pulsante di notte e di solito peggiorano continuando a caricare il peso, invece di calmarsi quando ti scaldi (Patel e colleghi, 2011).',
    'La sindrome del tunnel tarsale e la compressione del nervo di Baxter, cioè la compressione di rami del nervo tibiale, danno un dolore al tallone con bruciore o formicolio, di natura diversa da quello della fascite (Tu, 2018). La compressione del nervo di Baxter in particolare potrebbe spiegare fino al 20% del dolore cronico al tallone e può comparire a riposo (Tedeschi, 2025).',
    'Un dolore a entrambi i talloni con una rigidità del mattino prolungata può far pensare a un’artrite infiammatoria come una spondiloartropatia. In una coorte di 174\u00A0persone con fascite plantare, il dolore a entrambi i talloni era un predittore significativo di una durata più lunga dei sintomi (Hansen e colleghi, 2018).',
    'La linea guida del 2023 sul dolore al tallone dà ai tutori notturni una **A** per la fascite plantare persistente, ma il loro scopo è evitare che la fascia si accorci durante la notte, non affrontare i tipi di dolore notturno descritti in questa pagina (Koc e colleghi, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Perché il tallone fa male di notte o a riposo?',
      paragraphs: [
        'La fascite plantare fa male perché la fascia si irrigidisce mentre dormi e poi si allunga di colpo quando ti alzi. Quel dolore raggiunge il picco al primo passo e migliora quando ti muovi. **Se il tallone fa male mentre sei sdraiato a letto e non carichi affatto il peso, di solito c’entra un meccanismo diverso.**',
        'Una revisione del 2018 su American Family Physician elenca diverse cause di dolore al tallone che si comportano in modo diverso dalla fascite plantare. La distinzione chiave: il dolore della fascite plantare migliora con l’attività, mentre il dolore da fratture da stress, nervi compressi, tumori e problemi infiammatori non segue questo schema.',
        'Durante il sonno il piede punta anche verso il basso (flessione plantare). Questa posizione può accorciare il tendine d’Achille e il polpaccio, e a volte contribuisce al fastidio al tallone. I tutori notturni intervengono tenendo la caviglia ad angolo neutro. Ma un tutore notturno è uno strumento per la fascite plantare, e non sostituisce gli accertamenti per un dolore che peggiora davvero a riposo.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Potrebbe essere una frattura da stress del calcagno?',
      paragraphs: [
        'Una frattura da stress del calcagno, una piccola incrinatura dell’osso del tallone dovuta a un carico ripetuto, può dare un dolore profondo che pulsa di notte. A differenza della fascite plantare, il dolore di solito peggiora con l’attività e non si calma quando ti scaldi. Spesso arriva dopo un aumento improvviso di corsa, camminata o tempo in piedi su superfici dure.',
        'Il «test della compressione», cioè stringere insieme i due lati dell’osso del tallone, è il segno clinico classico. **Un dolore alla compressione è insolito nella fascite plantare e comune nelle fratture da stress.** Le radiografie semplici spesso non vedono le fratture da stress all’inizio. Di solito per confermarne una serve una risonanza magnetica o una scintigrafia ossea.',
        'Una revisione del 2011 su American Family Physician ha notato che le fratture da stress del calcagno danno un dolore che peggiora progressivamente dopo un aumento dell’attività o un passaggio a superfici più dure. Il dolore notturno e a riposo era tra le caratteristiche che distinguono le fratture da stress dalla fascite.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
    },
    {
      h2: 'E un nervo compresso: sindrome del tunnel tarsale e nervo di Baxter?',
      keyFact: 'Una revisione narrativa del 2025 ha trovato che la compressione del nervo di Baxter potrebbe spiegare fino al 20% dei casi di dolore cronico al tallone (Tedeschi, 2025).',
      paragraphs: [
        'Il nervo tibiale passa in uno spazio dietro la caviglia, sul lato interno, chiamato tunnel tarsale. Una compressione lì, la sindrome del tunnel tarsale, dà bruciore, formicolio o intorpidimento lungo la pianta e il tallone. Tu (2018) descrive il dolore del tunnel tarsale come di solito peggiore stando in piedi, camminando o correndo, e alleviato da riposo e piede sollevato. Questo schema è diverso dalla fascite plantare, ma non è un vero dolore a riposo, quindi il tunnel tarsale non sempre rientra nello schema di cui parla questa pagina.',
        'Il nervo di Baxter è il primo ramo del nervo plantare laterale, un nervo più piccolo vicino alla parte interna del tallone. Quando è compresso dà un dolore acuto o bruciante nella parte interna del tallone. Il dolore spesso peggiora con l’attività nel corso della giornata, ma può comparire anche a riposo. Una revisione del 2025 afferma che la compressione del nervo di Baxter potrebbe spiegare fino al 20% dei casi di dolore cronico al tallone (Tedeschi, 2025).',
        'Un nervo compresso viene spesso scambiato per fascite plantare, perché entrambi danno dolore nella parte interna del tallone. La differenza sta nel tipo di dolore: **bruciore, formicolio o intorpidimento sono segni da nervo.** Gli esami di imaging e gli studi di conduzione nervosa possono aiutare un professionista sanitario a confermare la diagnosi.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
    },
    {
      h2: 'L’artrite infiammatoria può causare dolore al tallone di notte?',
      keyFact: 'In un follow-up da 5 a 15\u00A0anni su 174\u00A0persone con fascite plantare, il dolore a entrambi i talloni era un predittore significativo di una durata più lunga dei sintomi (Hansen e colleghi, 2018).',
      paragraphs: [
        'Le spondiloartropatie, un gruppo di problemi infiammatori che comprende la spondilite anchilosante e l’artrite psoriasica, possono causare entesite, un’infiammazione nel punto in cui un tendine o un legamento si attacca all’osso. Il tallone è una sede comune. Il dolore è spesso su entrambi i lati, può trovarsi all’inserzione dell’Achille o sotto il tallone, e si accompagna a una rigidità del mattino prolungata (più di 30\u00A0minuti) che migliora con il movimento.',
        'In un follow-up da 5 a 15\u00A0anni su 174\u00A0persone con fascite plantare, il dolore a entrambi i talloni era un predittore significativo di una durata più lunga dei sintomi. Gli autori hanno notato che una malattia infiammatoria sistemica non riconosciuta potrebbe spiegare in parte questo risultato.',
        'Anche l’artrite reumatoide e la gotta possono dare dolore al tallone. **Se il dolore è su entrambi i talloni, se la rigidità dura più di 30\u00A0minuti ogni mattina o se sono coinvolte altre articolazioni, un professionista sanitario dovrebbe valutare una possibile causa infiammatoria.**',
      ],
      cites: [CITE.hansen, CITE.tuHeelPain],
    },
    {
      h2: 'La fascite plantare può essere peggio di notte?',
      paragraphs: [
        'La fascite plantare a volte dà fastidio la sera, dopo una lunga giornata in piedi. È un dolore legato all’attività, dovuto al carico accumulato, e non è la stessa cosa di un dolore che ti sveglia o arriva quando sei sdraiato senza peso sul piede.',
        'Alcune persone notano anche un fastidio al tallone quando durante il sonno il piede scende a punta e tira la fascia plantare. È proprio questo che i tutori notturni affrontano. La linea guida del 2023 dà ai tutori notturni il grado **A**, il suo grado di evidenza più alto, per la fascite plantare persistente. Tengono la caviglia ad angolo neutro così la fascia non si accorcia durante la notte.',
        'Se il dolore è davvero al massimo di notte e a riposo, invece di migliorare con il movimento la mattina dopo, quello schema si allontana dalla fascite plantare e va verso i problemi descritti sopra. Non dare per scontato che sia fascite e non stringere i denti andando avanti.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'I tutori notturni aiutano il dolore al tallone?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà ai tutori notturni una A, il suo grado di evidenza più alto, per la fascite plantare, di solito usati da uno a tre mesi (Koc e colleghi, 2023).',
      paragraphs: [
        'Un tutore notturno è un supporto che tiene la caviglia a 90\u00A0gradi mentre dormi. L’idea è evitare che polpaccio e fascia plantare si accorcino durante la notte, così il primo passo del mattino fa meno male.',
        'La linea guida del 2023 sul dolore al tallone dà ai tutori notturni una **A** per la fascite plantare. Di solito sono raccomandati per 1-3\u00A0mesi quando il dolore ai primi passi non è migliorato con il solo stretching e gli esercizi di carico. Non affrontano il dolore da nervo, le fratture da stress o i problemi infiammatori.',
        'Per la maggior parte delle persone i tutori notturni non sono un dispositivo da usare a lungo. Sono scomodi per dormire e il beneficio riguarda solo lo schema della rigidità del mattino. Se il tuo dolore notturno non è di quel tipo, da accorciamento e allungamento, è improbabile che un tutore aiuti, e potrebbe ritardare la diagnosi giusta.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quali allungamenti ed esercizi puoi fare prima di dormire?',
      paragraphs: [
        'Se il tuo dolore corrisponde allo schema della fascite plantare, un allungamento leggero di polpaccio e fascia plantare prima di dormire potrebbe ridurre la rigidità della mattina dopo. Lo stesso allungamento specifico della fascia plantare a cui la linea guida dà una **A** per il dolore ai primi passi si può fare prima di dormire: tira indietro le dita con la mano finché senti l’arco, tieni 10\u00A0secondi, ripeti 10\u00A0volte.',
        'Gli esercizi di carico come i sollevamenti sulle punte sono più adatti a un momento precedente della giornata. L’elenco completo degli esercizi è nella pagina degli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
        'Se il tuo dolore non è fascite plantare o non ne sei sicuro, lo stretching serale non è il primo passo. Il primo passo è avere la diagnosi giusta.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare (da seduto)',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. Lo studio randomizzato di DiGiovanni del 2003 su 101\u00A0persone (82 hanno completato il follow-up) ha trovato l’allungamento specifico della fascia migliore dell’allungamento del polpaccio per il dolore ai primi passi.' },
          dose: '10\u00A0tenute da 10\u00A0secondi, ogni piede',
          how: 'Siediti sul bordo del letto. Accavalla il piede dolorante sul ginocchio opposto. Tira le dita indietro verso lo stinco finché senti un allungamento lungo l’arco. Tieni 10\u00A0secondi. È anche l’allungamento del mattino che la linea guida raccomanda di fare prima che il piede tocchi terra.',
          often: 'Prima di dormire e prima di alzarti al mattino',
          feel: 'Un allungamento deciso lungo l’arco, non un dolore acuto',
          stop: 'Dolore acuto al tallone, o qualsiasi bruciore o formicolio',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché senti l’arco',
          alt: 'Una figura seduta che tira le dita di un piede indietro verso lo stinco, con la fascia plantare evidenziata lungo l’arco',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'Grado A nella linea guida per la fascite plantare, come parte di un programma di allungamento del polpaccio.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Porta un piede indietro, gamba dietro tesa, tallone a terra. Sporgiti in avanti finché senti un allungamento nella parte alta del polpaccio. Tieni 30\u00A0secondi. Cambia lato.',
          often: 'Prima di dormire, se il polpaccio rigido contribuisce al dolore del mattino',
          feel: 'Un allungamento nella parte alta del polpaccio, non al tallone',
          stop: 'Dolore al tallone o all’Achille che non passa in pochi secondi',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, sporgiti in avanti',
          alt: 'Una figura appoggiata al muro con una gamba tesa dietro, con i muscoli del polpaccio evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003],
    },
    {
      h2: 'In cosa il dolore al tallone di notte è diverso da quello del mattino?',
      paragraphs: [
        'Il dolore al tallone al mattino e quello notturno sembrano simili, ma indicano direzioni diverse. Il dolore del mattino, la fitta acuta ai primi passi che passa dopo qualche minuto di cammino, è la presentazione da manuale della fascite plantare. Il tessuto si è irrigidito durante la notte e si allunga di colpo sotto carico.',
        'Il dolore notturno, cioè un dolore che arriva o peggiora quando sei a letto e non carichi il peso, fa pensare a qualcosa che va oltre una semplice rigidità della fascia. I problemi più legati al vero dolore a riposo sono:',
        {
          list: [
            'Le fratture da stress.',
            'I nervi compressi.',
            'L’artrite infiammatoria.',
            'Raramente, tumori ossei o infezioni.',
          ],
        },
        'Se non sei sicuro di quale schema hai, c’è una prova semplice: **il dolore migliora dopo 5-10\u00A0minuti di cammino?** Se sì, lo schema della fascite plantare è più probabile, e la pagina sul [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) è un punto di partenza migliore. Se no, continua a leggere qui e valuta di rivolgerti a un professionista sanitario.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain],
    },
  ],
  faq: [
    {
      q: 'Il dolore al tallone di notte è segno di qualcosa di grave?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Può esserlo. Un dolore a riposo o che ti sveglia è uno schema d’allarme. Le fratture da stress del calcagno, i nervi compressi (tunnel tarsale o nervo di Baxter) e l’artrite infiammatoria possono tutti dare dolore al tallone di notte. Questi problemi vanno diagnosticati e gestiti da un professionista sanitario. Non dare per scontato che sia fascite plantare se non segue lo schema tipico dei primi passi.',
    },
    {
      q: 'Perché mi fa male il tallone quando sono sdraiato?',
      cites: [CITE.tuHeelPain],
      a: 'Un dolore al tallone da sdraiato, senza peso sul piede, può dipendere da un nervo compresso, da una frattura da stress o da un’infiammazione. La fascite plantare a volte dà fastidio quando a letto il piede punta verso il basso, ma quella è rigidità legata alla posizione, non vero dolore a riposo. Bruciore o formicolio a riposo fanno pensare a un problema ai nervi.',
    },
    {
      q: 'I tutori notturni aiutano il dolore al tallone di notte?',
      cites: [CITE.guideline],
      a: 'I tutori notturni tengono la caviglia a 90\u00A0gradi per evitare che polpaccio e fascia si accorcino. La linea guida del 2023 sul dolore al tallone dà loro una **A** per la fascite plantare persistente. Aiutano lo schema della rigidità del mattino. Non affrontano il dolore da nervo, le fratture da stress o i problemi infiammatori.',
    },
    {
      q: 'Come capisco se è fascite plantare o una frattura da stress?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Il dolore della fascite plantare è più acuto al primo passo e migliora camminando. Una frattura da stress del calcagno di solito peggiora continuando l’attività e non si calma quando ti scaldi. Il test della compressione, stringere i due lati dell’osso del tallone, fa pensare più a una frattura che a una fascite. Spesso serve una risonanza magnetica, perché le radiografie semplici possono non vedere le fratture all’inizio.',
    },
    {
      q: 'La fascite plantare può far male di notte?',
      cites: [CITE.guideline],
      a: 'La fascite plantare può dare un dolore sordo la sera dopo una lunga giornata in piedi o a camminare. È carico accumulato, non dolore a riposo. Durante il sonno il piede scende anche a punta, cosa che accorcia la fascia e può dare fastidio. Se il dolore ti sveglia davvero, quello schema non è tipico della fascite e va controllato.',
    },
    {
      q: 'Cos’è la compressione del nervo di Baxter?',
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
      a: 'Il nervo di Baxter è il primo ramo del nervo plantare laterale. Quando è compresso vicino alla parte interna del tallone dà un dolore acuto o bruciante, a volte con intorpidimento. Una revisione del 2025 afferma che potrebbe spiegare fino al 20% del dolore cronico al tallone (Tedeschi, 2025). A differenza della fascite plantare, il dolore spesso peggiora più tardi nella giornata o a riposo e non passa con il movimento.',
    },
    {
      q: 'Devo andare dal medico per il dolore al tallone di notte?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Sì. Un dolore al tallone notturno che ti sveglia, non migliora con il movimento, si accompagna a bruciore o formicolio, o colpisce entrambi i talloni con una rigidità prolungata va valutato da un professionista sanitario. Questi schemi possono indicare una frattura da stress, un nervo compresso o una malattia infiammatoria, che i soli esercizi non affrontano.',
    },
    {
      q: 'Cosa mettere sul tallone per il dolore di notte?',
      a: 'Il ghiaccio è il primo passo più comune: una borsa del ghiaccio o una bottiglia d’acqua congelata sul punto dolente può alleviare il dolore superficiale. Niente di tutto questo affronta una frattura da stress, un nervo compresso o un’artrite infiammatoria, i problemi più legati al vero dolore notturno, quindi una borsa fredda non sostituisce il trovare la causa.',
    },
    {
      q: 'Cosa non fare se il tallone fa male di notte?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Non dare per scontato che sia fascite plantare e non continuare l’attività stringendo i denti se il dolore non segue lo schema «fa male ai primi passi e poi migliora». Non ignorare un dolore che ti sveglia, peggiora continuando a camminare o si accompagna a bruciore, formicolio o gonfiore. Gestire da solo il dolore a riposo con allungamenti o tutori notturni può ritardare la diagnosi di una frattura da stress, di un nervo compresso o di un’artrite infiammatoria.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore ti sveglia o c’è a riposo senza peso sul piede',
      'il dolore peggiora continuando a camminare e non si calma dopo qualche minuto',
      'senti bruciore, formicolio o intorpidimento nel tallone o nella pianta',
      'il «test della compressione» (stringere insieme i due lati dell’osso del tallone) riproduce il dolore',
      'ti fanno male entrambi i talloni, soprattutto con una rigidità del mattino prolungata (più di 30\u00A0minuti) o dolore in altre articolazioni',
      'il dolore è arrivato dopo un aumento improvviso dei chilometri di corsa, un passaggio a superfici più dure o un trauma',
      'il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'il dolore dura da più di sei settimane e non migliora',
    ],
  },
  program: {
    h2: 'Quando l’esercizio è il passo giusto',
    text: 'Se un professionista sanitario ha confermato la fascite plantare ed escluso i problemi descritti sopra, l’esercizio è l’approccio con il grado più alto nella linea guida. Walkito costruisce un piano quotidiano intorno al carico di polpaccio e fascia, partendo dagli allungamenti e arrivando agli esercizi di forza al tuo ritmo.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni un test controlla resistenza del polpaccio ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi. Se il dolore al tallone è peggio di notte o a riposo, rivolgiti a un professionista sanitario prima di iniziare a caricare il piede.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore al tallone di notte',
  campaign: 'guide-heel-night-it',
};
