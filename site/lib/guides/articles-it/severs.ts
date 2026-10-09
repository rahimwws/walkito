import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Malattia di Sever (IT) ─────────────────────────────────────────────
 *
 * Translated from `articles/severs.ts` (2026-10-08), written around the
 * Italian queries «malattia di Sever», «morbo di Sever», «apofisite
 * calcaneare», «dolore al tallone nei bambini». Written for parents,
 * informal «tu». Figures and qualifiers are identical to the English page.
 * Uses the same CITE keys as the English file. No new citations.
 */

export const SEVERS_IT: Guide = {
  lang: 'it',
  page: 'severs',
  mainSource: CITE.wiegerinck,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Malattia di Sever: dolore al tallone nei bambini',
  description:
    'La malattia di Sever (apofisite calcaneare) dà dolore al tallone nei bambini tra 8 e 15\u00A0anni. Talloniere, stretching, carico e quando preoccuparsi.',
  h1: 'Malattia di Sever: cos’è, cosa aiuta e quando rivolgersi a un professionista sanitario',
  lede:
    'La malattia di Sever, chiamata anche apofisite calcaneare, è la causa più comune di dolore al tallone nei bambini. Succede quando la cartilagine di accrescimento nella parte posteriore dell’osso del tallone viene irritata dalla trazione ripetuta del tendine d’Achille, di solito durante uno scatto di crescita e in uno sport con corsa o salti. Non è una malattia nel senso comune del termine. Si risolve da sola quando la cartilagine di accrescimento si chiude.',
  intro: [
    'Questa pagina è scritta per i genitori. Spiega cosa succede nel tallone, cosa dicono gli studi su talloniere, stretching e gestione del carico, e quando il dolore richiede un professionista sanitario invece del riposo. Walkito è un’app di esercizi pensata per adulti con dolore al tallone e all’arco. Non è pensata per i bambini, e niente in questa pagina è un invito a usarla con un bambino. Se il dolore al tallone di tuo figlio non migliora con i passi descritti qui sotto, il passo successivo giusto è un medico dello sport pediatrico o un podologo.',
  ],
  takeaways: [
    'La malattia di Sever colpisce i bambini tra 8 e 15\u00A0anni, più spesso durante uno scatto di crescita, e si risolve quando la cartilagine di accrescimento del calcagno si chiude, di solito tra i 12 e i 17\u00A0anni (revisione StatPearls, 2024).',
    'In uno studio su 101\u00A0bambini, attesa vigile, un rialzo per il tallone ed esercizi eccentrici supervisionati hanno ridotto ciascuno in modo significativo il dolore al tallone in tre mesi, senza differenze tra i tre all’ultimo controllo (Wiegerinck e colleghi, 2016).',
    'In uno studio crossover su 51\u00A0ragazzi, una coppetta per il tallone ha ridotto il dolore di circa l’80% rispetto a un cuneo per il tallone, misurato sulla scala Borg CR-10 (Perhamre e colleghi, 2011).',
    'Uno studio fattoriale di 12\u00A0mesi su 124\u00A0bambini ha trovato un vantaggio relativo dei rialzi per il tallone rispetto ai plantari prefabbricati a 2\u00A0mesi, ma nessun vantaggio per nessuna opzione a 12\u00A0mesi (James e colleghi, 2016).',
    'La cartilagine di accrescimento di solito compare tra i 7 e i 9\u00A0anni e si salda tra i 15 e i 17. Finché non si chiude, le ricadute sono comuni, soprattutto durante gli scatti di crescita e le stagioni sportive.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è la malattia di Sever?',
      paragraphs: [
        'La malattia di Sever è un’infiammazione dell’apofisi calcaneare, la cartilagine di accrescimento nella parte posteriore dell’osso del tallone, dove si attacca il tendine d’Achille. In un bambino che cresce, questa zona è fatta di cartilagine, più morbida e più vulnerabile allo stress rispetto all’osso intorno. Il tendine d’Achille e la fascia plantare tirano entrambi su questa zona. Quando un bambino corre, salta o fa sport su superfici dure, queste forze si ripetono centinaia di volte in ogni sessione.',
        'Durante uno scatto di crescita, l’osso del tallone può crescere più in fretta dei muscoli del polpaccio e del tendine d’Achille, e questo aumenta la tensione sulla cartilagine di accrescimento. È questa combinazione di crescita ossea rapida e urti ripetuti a causare l’irritazione.',
        'La malattia di Sever non è una frattura e non danneggia in modo permanente la cartilagine di accrescimento. È classificata come apofisite da trazione: la cartilagine di accrescimento viene tirata, non rotta. Quando si chiude e diventa osso solido, il problema non può tornare.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'A che età compare e chi colpisce?',
      paragraphs: [
        'La malattia di Sever colpisce i bambini tra circa 8 e 15\u00A0anni. L’apofisi calcaneare compare intorno ai 7-9\u00A0anni e di solito si salda tra i 15 e i 17. I maschi sono colpiti da due a tre volte più spesso delle femmine, con un esordio tipico intorno ai 12\u00A0anni nei maschi e agli 11 nelle femmine. Circa il 60% dei casi interessa entrambi i talloni.',
        'Rappresenta dal 2 al 16% delle visite dei bambini negli ambulatori di medicina dello sport. Gli sport più associati sono calcio, basket, atletica su pista, corsa campestre, ginnastica e tennis. Lo schema è prevedibile: tende a comparire all’inizio di una stagione sportiva o durante uno scatto di crescita, quando il carico sul tallone aumenta all’improvviso.',
        'I fattori di rischio comprendono molta attività di corsa e salti, polpacci rigidi, una caviglia poco flessibile, un IMC alto, superfici di gioco dure e scarpe normali o con i tacchetti poco ammortizzate.',
      ],
      cites: [CITE.nietoGilSever, CITE.micheliSever, CITE.wiegerinck, CITE.jamesSever],
    },
    {
      h2: 'Che sensazione dà la malattia di Sever?',
      paragraphs: [
        'Il sintomo principale è un dolore nella parte posteriore o ai lati del tallone, di solito durante o dopo l’attività e soprattutto dopo corse o salti. Il dolore viene spesso descritto come un livido. Raramente c’è gonfiore o un livido visibile. Premere o stringere i lati del tallone di solito riproduce il dolore. Questo test della compressione è il controllo clinico standard.',
        'A differenza della fascite plantare negli adulti, che è peggiore ai primi passi dopo il riposo, il dolore della malattia di Sever tende a peggiorare con l’attività e non migliora camminando. Alcuni bambini iniziano a zoppicare o a camminare sulle punte per non caricare il peso sul tallone.',
        'Il dolore può andare da lieve, che si nota solo durante lo sport, a così forte da impedire del tutto al bambino di giocare.',
      ],
    },
    {
      h2: 'Cosa aiuta la malattia di Sever? Le prove',
      keyFact: 'In uno studio su 101\u00A0bambini, tutti e tre gli approcci hanno migliorato il dolore, e il gruppo con il rialzo per il tallone era più soddisfatto a sei settimane, anche se la differenza è sparita a tre mesi (Wiegerinck e colleghi, 2016).',
      paragraphs: [
        'Gli studi sulla malattia di Sever sono pochi ma in crescita. Le tre opzioni principali studiate sono la gestione del carico (ridurre l’attività che fa male), coppette o solette per il tallone, ed esercizi di allungamento o rinforzo. Tutte e tre hanno mostrato un beneficio, e nessuna si è dimostrata chiaramente migliore delle altre all’ultimo controllo.',
        'In uno studio del 2016 su 101\u00A0bambini tra 8 e 15\u00A0anni, Wiegerinck e colleghi hanno confrontato tre approcci: attesa vigile con il consiglio di interrompere l’attività che fa male, un rialzo per il tallone ed esercizi eccentrici supervisionati. Tutti e tre i gruppi sono migliorati in modo significativo. A sei settimane il gruppo con il rialzo per il tallone era più soddisfatto degli altri due. A tre mesi non restava nessuna differenza clinicamente rilevante tra i tre.',
        'In un altro studio fattoriale del 2016 su 124\u00A0bambini, James e colleghi hanno confrontato i rialzi per il tallone con i plantari prefabbricati, e il cambio di scarpe con nessun cambio. I rialzi per il tallone hanno avuto un piccolo vantaggio sui plantari prefabbricati a 2\u00A0mesi nel dominio fisico dell’Oxford Ankle Foot Questionnaire. A 6 e 12\u00A0mesi non restava nessuna differenza tra nessuna combinazione.',
        'In uno studio crossover su 51\u00A0ragazzi, Perhamre e colleghi hanno confrontato una coppetta per il tallone da 3\u00A0mm con un cuneo per il tallone da 5\u00A0mm. La coppetta ha ridotto il dolore di circa l’80% sulla scala Borg CR-10, il che fa pensare che ammortizzare e assorbire l’urto possa contare più del semplice sollevare il tallone.',
      ],
      sourceNote:
        'Wiegerinck 2016: 101\u00A0bambini, il dolore VAS è migliorato in modo significativo in tutti e 3 i gruppi (p<0,005), nessuna differenza tra i gruppi a 3\u00A0mesi. James 2016: 124\u00A0bambini, effetto principale del rialzo per il tallone p=0,04 a 1-2\u00A0mesi (solo dominio fisico), nessun effetto a 6 o 12\u00A0mesi. Perhamre 2011: 51\u00A0ragazzi, crossover, Borg CR-10 con la coppetta sceso da 7 a 2.',
      cites: [CITE.wiegerinck, CITE.jamesSever, CITE.perhamreHeelCup],
    },
    {
      h2: 'Gestione del carico e modifica dell’attività',
      paragraphs: [
        'La gestione del carico è la base della cura della malattia di Sever. Non significa interrompere tutto lo sport. Significa ridurre le attività che fanno male, soprattutto corsa e salti su superfici dure, finché il dolore si calma. La maggior parte dei bambini può tornare allo sport entro due-otto settimane se il carico viene gestito presto.',
        'I passi pratici comprendono ridurre gli allenamenti invece di smettere del tutto, evitare le scarpe con i tacchetti su terreno duro quando possibile, passare a scarpe ben ammortizzate e saltare le parti dell’allenamento con più corsa e salti. Alcuni allenatori fanno partecipare i bambini agli esercizi tecnici e li tengono fuori da scatti e preparazione atletica.',
        'La parte più difficile della gestione del carico è che la malattia di Sever tende a ripresentarsi. Un bambino può stare meglio dopo due settimane di riposo, tornare all’attività piena e ritrovarsi con il dolore. Non significa che il primo periodo di riposo non abbia funzionato. Significa che la cartilagine di accrescimento è ancora aperta e ancora vulnerabile. Le ricadute sono comuni fino alla maturità scheletrica.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Coppette e solette per il tallone aiutano la malattia di Sever?',
      keyFact: 'Uno studio crossover su 51\u00A0ragazzi ha trovato che una coppetta per il tallone riduceva il dolore di circa l’80% rispetto a un cuneo per il tallone, il che fa pensare che assorbire l’urto conti più dell’angolo del rialzo (Perhamre e colleghi, 2011).',
      paragraphs: [
        'Le coppette per il tallone sono tra gli interventi più pratici per la malattia di Sever. Ammortizzano il tallone, assorbono l’urto e riducono i picchi di forza che arrivano alla cartilagine di accrescimento. Lo studio crossover di Perhamre ha trovato che una coppetta per il tallone riduceva il dolore di circa l’80% rispetto a un cuneo per il tallone in 51\u00A0ragazzi, il che fa pensare che assorbire l’urto al tallone conti più del semplice cambiare l’angolo del tallone.',
        'Nello studio fattoriale di James, i rialzi per il tallone (un tipo di inserto che solleva il tallone) hanno mostrato un piccolo vantaggio a breve termine sui plantari prefabbricati a 2\u00A0mesi, ma nessun vantaggio a 12\u00A0mesi. I plantari su misura non sono stati testati in nessuno di questi studi.',
        'Un punto di partenza ragionevole è una coppetta per il tallone economica da banco, da portare in entrambe le scarpe e durante lo sport. Se non aiuta, un professionista sanitario può valutare se valga la pena spendere per un plantare su misura.',
      ],
      cites: [CITE.perhamreHeelCup, CITE.jamesSever],
    },
    {
      h2: 'Lo stretching del polpaccio aiuta la malattia di Sever?',
      paragraphs: [
        'Polpacci rigidi aumentano la trazione sulla cartilagine di accrescimento, e la rigidità del polpaccio è uno dei fattori di rischio riconosciuti per l’apofisite calcaneare. Allungare il gastrocnemio (il muscolo del polpaccio più superficiale, allungato a ginocchio teso) e il soleo (il muscolo più profondo, allungato a ginocchio piegato) è una raccomandazione standard.',
        'Nello studio di Wiegerinck, il gruppo degli esercizi ha seguito un programma di rinforzo eccentrico del polpaccio con la supervisione di un fisioterapista. Questo gruppo è migliorato quanto i gruppi del rialzo per il tallone e dell’attesa vigile. Stretching e rinforzo leggero sono sicuri e possono aiutare riducendo la trazione sulla cartilagine di accrescimento, ma le prove non li mostrano superiori alle coppette per il tallone o alla sola gestione del carico.',
        'Gli esercizi per i bambini con apofisite calcaneare vanno supervisionati o insegnati da un professionista sanitario o da un fisioterapista. Dose e progressione dipendono dall’età del bambino, dal livello di dolore e dalle richieste del suo sport. Un bambino con dolore acuto che zoppica ha bisogno prima di riposo, non di esercizi.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Walkito è adatto a un bambino con la malattia di Sever?',
      paragraphs: [
        'No. Walkito è un’app di esercizi pensata per adulti con dolore sotto il tallone e dolore all’arco. Le dosi degli esercizi, le soglie di dolore e le regole di progressione sono costruite per corpi adulti. La cartilagine di accrescimento di un bambino è una struttura profondamente diversa dall’osso del tallone già saldato di un adulto, e le regole di carico sono diverse.',
        'Se tuo figlio ha avuto il via libera da un professionista sanitario e cerchi indicazioni sugli esercizi, un medico dello sport pediatrico o un podologo può proporre un programma adatto alla sua età e al suo sport. Le guide per adulti di questo sito, come [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) ed [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/), riguardano gli stessi muscoli ma con dosi e soglie da adulti.',
      ],
    },
    {
      h2: 'Quanto dura e torna?',
      paragraphs: [
        'La malattia di Sever di solito si risolve nel giro di settimane o mesi con gestione del carico e cure di supporto. La maggior parte dei bambini può tornare allo sport entro due-otto settimane. Il dolore di solito si calma per sempre quando la cartilagine di accrescimento si salda in osso solido, in genere tra i 12 e i 17\u00A0anni a seconda del sesso e del ritmo di maturazione del bambino (revisione StatPearls, 2024).',
        'Le ricadute sono comuni e prevedibili. Ogni scatto di crescita e ogni nuova stagione sportiva possono riportare il dolore. Una ricaduta non è segno di cure fallite. È segno che la cartilagine di accrescimento è ancora aperta. Continuare con coppette per il tallone, buone scarpe e stretching del polpaccio durante le stagioni sportive può ridurre l’intensità e la frequenza delle riacutizzazioni.',
        'Alla malattia di Sever non sono stati associati problemi a lungo termine. Non danneggia la cartilagine di accrescimento e non cambia la forma finale dell’osso.',
      ],
      cites: [CITE.wiegerinck, CITE.jamesSever],
    },
  ],
  faq: [
    {
      q: 'Cos’è la malattia di Sever?',
      a: 'La malattia di Sever, chiamata anche apofisite calcaneare, è un’infiammazione della cartilagine di accrescimento nella parte posteriore dell’osso del tallone. È la causa più comune di dolore al tallone nei bambini tra 8 e 15\u00A0anni ed è dovuta alla trazione ripetuta del tendine d’Achille durante corse, salti e scatti di crescita. Non è una vera malattia e si risolve quando la cartilagine di accrescimento si chiude.',
    },
    {
      q: 'Le coppette per il tallone aiutano la malattia di Sever?',
      cites: [CITE.perhamreHeelCup],
      a: 'In uno studio crossover su 51\u00A0ragazzi, una coppetta per il tallone ha ridotto il dolore al tallone di circa l’80% rispetto a un cuneo per il tallone, misurato sulla scala Borg CR-10 (Perhamre 2011). Le coppette ammortizzano la cartilagine di accrescimento e assorbono l’urto. Una coppetta economica da banco, da portare in entrambe le scarpe e durante lo sport, è un primo passo ragionevole.',
    },
    {
      q: 'Un bambino con la malattia di Sever deve smettere di fare sport?',
      cites: [CITE.wiegerinck],
      a: 'Non per forza. In uno studio su 101\u00A0bambini, ridurre l’attività che fa male è stato efficace quanto i rialzi per il tallone o gli esercizi supervisionati a tre mesi (Wiegerinck 2016). La maggior parte dei professionisti consiglia di ridurre corsa e salti invece di interrompere tutto lo sport. Gli esercizi tecnici che evitano urti ripetuti sul tallone di solito sono sicuri. Il ritorno allo sport pieno è previsto entro due-otto settimane.',
    },
    {
      q: 'La malattia di Sever è permanente?',
      a: 'No. La malattia di Sever si risolve completamente quando la cartilagine di accrescimento del calcagno si chiude, cosa che succede tra i 12 e i 17\u00A0anni a seconda del sesso e della maturazione. Non sono state riportate complicazioni a lungo termine. Le ricadute sono comuni finché la cartilagine di accrescimento è aperta, ma anche ogni episodio si risolve.',
    },
    {
      q: 'Lo stretching aiuta la malattia di Sever?',
      cites: [CITE.wiegerinck],
      a: 'Lo stretching del polpaccio è una raccomandazione standard, perché polpacci rigidi aumentano la trazione sulla cartilagine di accrescimento. Nello studio di Wiegerinck del 2016, gli esercizi eccentrici supervisionati hanno migliorato il dolore quanto un rialzo per il tallone o l’attesa vigile. Lo stretching aiuta, ma non è dimostrato che sia più rapido della sola gestione del carico o delle coppette per il tallone.',
    },
    {
      q: 'In cosa la malattia di Sever è diversa dalla fascite plantare?',
      a: 'La malattia di Sever colpisce la cartilagine di accrescimento nella parte posteriore del tallone nei bambini, mentre la fascite plantare è un’irritazione della fascia plantare sotto il piede, soprattutto negli adulti. Il dolore della malattia di Sever di solito è dietro e ai lati del tallone e peggiora con l’attività. Il dolore della fascite plantare di solito è sotto il tallone ed è peggiore ai primi passi dopo il riposo. I due problemi hanno cause diverse e percorsi di cura diversi.',
    },
    {
      q: 'Walkito può aiutare mio figlio con la malattia di Sever?',
      a: 'Walkito è pensato per adulti con dolore al tallone e all’arco. Le dosi degli esercizi, le soglie di dolore e le regole di progressione sono costruite per corpi adulti, non per la cartilagine di accrescimento aperta di un bambino. Per il programma di esercizi di un bambino, la fonte giusta è un medico dello sport pediatrico o un podologo.',
    },
    {
      q: 'Con cosa si può confondere la malattia di Sever?',
      cites: [CITE.wiegerinck],
      a: 'Un’irritazione del tendine d’Achille, una frattura da stress del calcagno e una borsite retrocalcaneare possono sembrare simili in un bambino che cresce. Un test della compressione positivo (dolore quando si stringono insieme i lati del tallone), un’età tra 8 e 15\u00A0anni e un aumento recente degli allenamenti fanno invece pensare alla malattia di Sever. Un singolo infortunio, un gonfiore o un dolore che peggiora in un punto preciso richiedono un professionista sanitario per escludere una frattura.',
    },
    {
      q: 'Come si mette il kinesio tape per la malattia di Sever?',
      a: 'Non ci sono studi che abbiano testato il kinesio tape per la malattia di Sever, quindi nessuno schema è dimostrato migliore delle coppette per il tallone o della gestione del carico. Alcuni professionisti applicano il tape lungo l’Achille e sotto il tallone per ridurre la trazione sulla cartilagine di accrescimento. Se vuoi provarlo, fallo applicare da un fisioterapista o da un preparatore atletico e fatti mostrare lo schema.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti a un professionista sanitario se',
    bullets: [
      'il dolore è così forte che il bambino zoppica o si rifiuta di caricare il peso sul tallone',
      'il dolore è arrivato dopo un singolo infortunio o una caduta, il che può indicare una frattura invece di un’apofisite',
      'c’è gonfiore visibile, arrossamento o calore intorno al tallone',
      'il bambino ha la febbre o non sta bene oltre al dolore al tallone',
      'il dolore non migliora dopo diverse settimane di gestione del carico, coppette per il tallone e riposo',
      'il dolore c’è a riposo o sveglia il bambino di notte, il che può indicare qualcosa di diverso da un’apofisite',
      'il dolore è in un punto preciso e sta peggiorando, il che può far pensare a una frattura da stress invece che a un’irritazione della cartilagine di accrescimento',
      'il dolore al tallone si accompagna a gonfiore o rigidità in altre articolazioni',
    ],
  },
  program: {
    h2: 'Una nota per i genitori che cercano un’app',
    text: 'Walkito è un programma di esercizi per adulti con dolore al tallone e all’arco. Non è pensato per i bambini, e le sue dosi e regole di progressione presuppongono un osso del tallone già completamente saldato. Se sei un adulto e leggi questa pagina perché ti fa male il tallone, le guide per adulti possono aiutarti: [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/), [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) o [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/). Per un bambino, il punto di partenza giusto è un professionista sanitario.',
  },
  crumb: 'Malattia di Sever',
  campaign: 'guide-severs-it',
};
