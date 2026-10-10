import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/top-of-foot.ts`, written around the queries
 * «dolore al dorso del piede», «dolore al collo del piede» and «tendinite
 * degli estensori del piede». Informal «tu». Exercise names as in `it.ts`
 * and `articles-it/shin-splints.ts`. Figures, doses, grades and qualifiers
 * are identical to the English page. Citations as in English.
 */

export const TOP_OF_FOOT_IT: Guide = {
  lang: 'it',
  page: 'topOfFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dolore al dorso del piede: cause e cosa aiuta',
  description:
    'Dolore al dorso del piede: tendinite degli estensori da lacci stretti, fratture da stress, osteofiti, gotta e nervi irritati. Quando andare dal medico.',
  h1: 'Dolore al dorso del piede: da cosa dipende e quando farsi visitare',
  lede:
    'Il dolore sopra il piede è meno comune del dolore al tallone o all’arco, ma può rendere scomodo ogni passo, soprattutto con le scarpe. La causa più comune è la tendinite degli estensori, un’irritazione dei tendini che sollevano le dita, spesso per lacci troppo stretti o un aumento improvviso dell’attività. Altre cause sono fratture da stress, osteofiti, gotta e compressione dei nervi. La maggior parte risponde a cambiamenti semplici, ma alcune richiedono esami di imaging o una visita per chiarire la causa.',
  intro: [
    'La parte superiore del piede si chiama dorso. Lì, appena sotto la pelle, ci sono diversi tendini, nervi e piccole ossa, ed è per questo che la zona è sensibile alla pressione delle scarpe e al sovraccarico. Questa pagina spiega le cause più comuni, cosa puoi fare a casa, cosa dicono gli studi sull’esercizio per questa zona e dove ci sono lacune reali.',
  ],
  toc: true,
  takeaways: [
    'La tendinite degli estensori, un’infiammazione dei tendini che sollevano le dita, è la causa più comune di dolore al dorso del piede. Lacci stretti e un aumento improvviso dell’attività sono i fattori scatenanti abituali.',
    'La frattura da stress di un metatarso è la causa più importante da escludere. Il dolore è localizzato, peggiora nel corso della giornata e può non vedersi in radiografia per due-tre settimane.',
    'Cambiare il modo di allacciare le scarpe, saltando l’occhiello sopra il punto dolente, è spesso il primo passo più rapido per la tendinite degli estensori.',
    'Nessuno studio randomizzato ha testato l’esercizio specificamente per il dolore al dorso del piede. L’esercizio lavora su fattori che contribuiscono, come un polpaccio rigido e un tibiale anteriore debole, non direttamente sul dolore al dorso.',
  ],
  sections: [
    {
      h2: 'Cosa causa il dolore al dorso del piede?',
      keyFact: 'Una frattura da stress di un metatarso può non vedersi in una radiografia semplice per due-tre settimane dall’inizio dei sintomi, quindi una risonanza magnetica può confermarla prima (Patel e colleghi, 2011).',
      paragraphs: [
        '**La tendinite degli estensori** è la causa più comune. I tendini estensori corrono lungo il dorso del piede, dalla tibia alle dita. Sollevano le dita e il piede quando cammini. Quando si irritano, senti un dolore sordo lungo il dorso del piede che peggiora con l’attività e spesso fa male quando tiri le dita verso l’alto contro resistenza. I fattori scatenanti abituali sono:',
        {
          list: [
            'Lacci stretti che premono direttamente sui tendini.',
            'Un aumento improvviso della distanza di camminata o di corsa.',
            'Scarpe con una linguetta rigida.',
          ],
        },
        '**La frattura da stress di un metatarso** è una piccola crepa in una delle ossa lunghe del piede, di solito il secondo o il terzo metatarso. Il dolore è più localizzato rispetto alla tendinite, sta sopra un punto preciso e tende a peggiorare nel corso della giornata. Un gonfiore sul dorso del piede è frequente. Le fratture da stress possono metterci due-tre settimane a vedersi in una radiografia semplice, quindi per una diagnosi precoce può servire una risonanza magnetica. Questa richiede riposo, non esercizio.',
        '**L’osteofita dorsale** (detto anche esostosi metatarsale) è una sporgenza ossea che si forma sopra le articolazioni del mesopiede, di solito dove i metatarsi incontrano le ossa cuneiformi. Si sviluppa piano piano, in anni di compressione su quelle articolazioni. L’osteofita in sé può non fare male, ma può premere contro la linguetta della scarpa o irritare un nervo che ci passa sopra.',
        '**La gotta** può dare un dolore improvviso e forte sul dorso del piede, più spesso all’articolazione dell’alluce. L’articolazione diventa rossa, gonfia, calda ed estremamente dolente al tatto. La gotta è causata da depositi di cristalli di acido urico e va gestita dal medico. L’esercizio non aiuta durante un attacco di gotta.',
        '**L’irritazione di un nervo** può venire dalla compressione del nervo peroneo profondo o del nervo peroneo superficiale da parte di scarpe strette, gonfiore o un osteofita. Il dolore tende a essere un bruciore o un formicolio più che un dolore sordo e profondo, e può irradiarsi verso le dita o su verso la caviglia.',
        '**L’artrosi del mesopiede** riguarda le piccole articolazioni sul dorso del piede, di solito per usura o per un vecchio trauma. Il dolore è sordo, con rigidità, peggiora dopo tanto tempo in piedi o a camminare, e può accompagnarsi a un ispessimento visibile sopra le articolazioni.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Come si distinguono queste cause?',
      paragraphs: [
        'Posizione e andamento sono i primi indizi:',
        {
          list: [
            '**La tendinite degli estensori** dà un dolore sordo e diffuso lungo i tendini che peggiora quando tiri su le dita.',
            '**Una frattura da stress** fa male in un punto preciso e peggiora nel corso della giornata.',
            '**La gotta** arriva all’improvviso, di solito all’articolazione dell’alluce, con arrossamento e calore.',
            '**Il dolore da nervo** tende a essere un bruciore o un formicolio, non un dolore sordo e profondo.',
          ],
        },
        'Spesso un professionista sanitario riesce a distinguerle con un esame fisico. L’estensione delle dita contro resistenza (tirare su le dita mentre qualcuno spinge in giù) riproduce il dolore della tendinite. Una dolorabilità puntiforme sopra un osso con gonfiore localizzato fa pensare a una frattura da stress. Se si sospetta una frattura da stress, gli esami di imaging sono importanti, perché continuare a caricare un osso fratturato può peggiorarlo.',
        'Se il dolore c’è solo con le scarpe e sparisce a piedi nudi, **la pressione della scarpa è il fattore più probabile.** Se continua a riposo o ti sveglia di notte, vale la pena indagare su qualcosa di più di una semplice tendinite.',
      ],
    },
    {
      h2: 'Cosa aiuta la tendinite degli estensori?',
      paragraphs: [
        '**Il primo passo più rapido di solito è cambiare l’allacciatura.** Salta l’occhiello proprio sopra il punto dolente. Molte scarpe sportive hanno abbastanza occhielli da poter far girare il laccio intorno alla zona sensibile senza perdere sostegno altrove. Così togli la pressione diretta che ha fatto partire il problema.',
        'Le scarpe con una linguetta imbottita o flessibile comprimono meno i tendini. Se porti stivali, scarpe con tacchetti o scarpe eleganti con una tomaia rigida, spesso la pressione dalla parte alta della scarpa spiega tutto.',
        'Ridurre per un po’ l’attività che ha scatenato il dolore aiuta. Se il dolore è iniziato quando hai aumentato la distanza di camminata o di corsa, torna al livello precedente per una o due settimane, poi risali piano.',
        'Il ghiaccio sui tendini dolenti per 10-15\u00A0minuti dopo l’attività può aiutare a calmare l’irritazione nei primi giorni. Gli antinfiammatori sono un’opzione di breve durata se il dolore ti disturba nella vita di tutti i giorni, ma non accelerano il recupero di fondo.',
      ],
    },
    {
      h2: 'Gli esercizi aiutano il dolore al dorso del piede?',
      paragraphs: [
        'Nessuno studio randomizzato ha testato l’esercizio specificamente per il dolore al dorso del piede o per la tendinite degli estensori. Su questo siamo onesti: **non sappiamo se l’esercizio acceleri il recupero dalla tendinite degli estensori** rispetto al solo cambio di allacciatura più riposo.',
        'Quello su cui l’esercizio può lavorare sono i fattori che contribuiscono. Anche il tibiale anteriore, il muscolo sul davanti della tibia che solleva il piede, è un estensore. Quando è debole rispetto al polpaccio, i tendini estensori più piccoli sul dorso del piede prendono più carico mentre cammini.',
        'Rinforzare il tibiale anteriore con i sollevamenti dell’avampiede (sollevare la parte anteriore del piede stando in piedi contro un muro) è un modo per ridurre questo squilibrio. Vedi [esercizi per la periostite tibiale](/it/periostite-tibiale-esercizi/) per saperne di più sul tibiale anteriore.',
        'L’allungamento del polpaccio conta se la dorsiflessione della caviglia è limitata. Quando la caviglia non riesce a piegarsi abbastanza, il piede compensa in modi che possono aumentare lo stress sulle strutture del dorso. Un polpaccio rigido è anche un fattore di rischio comune alla [fascite plantare](/it/esercizi-fascite-plantare/) e al sovraccarico dell’avampiede.',
        'Per osteofiti dorsali e artrosi del mesopiede, l’esercizio non cambia l’anatomia dell’osso. Il lavoro sulla mobilità della caviglia può aiutare a mantenere l’ampiezza di movimento, e il rinforzo può ridurre i sintomi, ma l’osteofita o la degenerazione dell’articolazione restano. Per le fratture da stress, l’esercizio è l’approccio sbagliato finché l’osso non si è ripreso.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'Esercizi per i fattori che contribuiscono',
      paragraphs: [
        'Questi esercizi non lavorano direttamente sul dorso del piede. Lavorano su un polpaccio rigido e su muscoli deboli nella parte anteriore della gamba, che contribuiscono al sovraccarico dei tendini estensori. Se il tuo dolore al dorso del piede viene da una frattura da stress, dalla gotta o da un problema attivo a un nervo, saltali e rivolgiti prima a un professionista sanitario.',
      ],
      exercises: [
        {
          name: 'Sollevamenti dell’avampiede',
          dose: '3\u00A0serie da 15',
          how: 'Stai con la schiena appoggiata al muro e i piedi circa una lunghezza di piede davanti a te. Solleva da terra la parte anteriore di entrambi i piedi, tirando le dita verso le tibie. Riabbassa piano. Così rinforzi il tibiale anteriore, il muscolo principale che solleva il piede.',
          often: 'Giorni di forza',
          feel: 'Lavoro lungo il davanti della tibia',
          stop: 'Dolore sul dorso del piede sopra 4/10',
          evidence: { level: 'early', why: 'Nessuno studio sulla tendinite degli estensori. L’esercizio rinforza il tibiale anteriore, che si divide il carico della dorsiflessione con i tendini estensori.' },
          media: 'tibialis_raise',
          caption: 'Sollevamenti dell’avampiede: tira le dita verso le tibie, schiena al muro',
          alt: 'Una figura in piedi contro il muro che solleva le dita, con il tibiale anteriore evidenziato',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio. Un polpaccio rigido limita la dorsiflessione della caviglia, e questo può spostare lo stress sul dorso del piede.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Dolore al tendine d’Achille',
          evidence: { level: 'strong', why: 'L’allungamento del polpaccio ha un sostegno di grado A nelle linee guida per problemi collegati della parte bassa della gamba. Non testato specificamente per la tendinite degli estensori.' },
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Oscillazioni della caviglia',
          dose: '10\u00A0oscillazioni lente, ogni piede',
          how: 'Stai di fronte a un muro con un piede avanti e le mani al muro. Porta il ginocchio in avanti sopra le dita tenendo il tallone a terra. Torna indietro e ripeti. Così migliori con delicatezza l’ampiezza della dorsiflessione.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento sul davanti della caviglia',
          stop: 'Dolore sul dorso del piede durante l’oscillazione',
          evidence: { level: 'early', why: 'Il lavoro sulla mobilità della caviglia fa parte della riabilitazione generale della parte bassa della gamba. Nessuno studio specifico sul dolore al dorso del piede.' },
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: il ginocchio va sopra le dita, il tallone resta giù',
          alt: 'Una figura al muro che porta il ginocchio in avanti sopra le dita, con la caviglia evidenziata',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quando il dolore al dorso del piede è una frattura da stress?',
      paragraphs: [
        'La frattura da stress di un metatarso è la causa che più ti serve escludere, perché continuare a caricare un osso fratturato può trasformare una piccola crepa in una frattura completa.',
        'Le fratture da stress di solito si sviluppano piano piano per impatti ripetuti. Sono più frequenti:',
        {
          list: [
            'Nei runner.',
            'Nelle reclute militari.',
            'In chi ha aumentato all’improvviso la propria attività.',
          ],
        },
        'Il dolore è localizzato in un punto, peggiora con le attività sotto carico e può fare male di notte. Un gonfiore sul dorso del piede sopra l’osso dolente è frequente.',
        'Una radiografia semplice può non mostrare una frattura da stress nelle prime due-tre settimane. Se un medico la sospetta, una risonanza magnetica o una scintigrafia ossea possono confermarla prima. L’approccio è riposo e carico protetto, non esercizio. Tornare all’attività troppo presto rischia una frattura completa.',
        'Se il dolore è comparso dopo un aumento del volume di allenamento, sta in un solo punto e peggiora nel corso della giornata, **rivolgiti a un professionista sanitario prima di fare qualsiasi esercizio di questa pagina.**',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'E la gotta sul dorso del piede?',
      paragraphs: [
        'La gotta è una malattia infiammatoria causata da cristalli di acido urico che si depositano in un’articolazione. Classicamente colpisce l’articolazione dell’alluce (la prima articolazione metatarso-falangea), ma può colpire qualsiasi articolazione del piede, compreso il mesopiede.',
        'Un attacco di gotta arriva in fretta, spesso nel giro di una notte. L’articolazione diventa molto dolorosa, rossa, calda e gonfia. Ha un aspetto e dà sensazioni diverse da una tendinite o da una frattura da stress. Se hai un dolore improvviso e forte in una sola articolazione con arrossamento e calore, è un motivo per farti visitare presto. Gli esami del sangue e a volte l’analisi del liquido articolare confermano la diagnosi.',
        '**La gotta va gestita dal medico.** Esercizi, cambi di scarpe e stretching non aiutano durante un attacco. Tra un attacco e l’altro è ragionevole mantenere la mobilità di piede e caviglia, ma il problema di fondo dell’acido urico si gestisce con farmaci e cambiamenti nell’alimentazione.',
      ],
    },
  ],
  faq: [
    {
      q: 'Perché mi fa male il dorso del piede quando cammino?',
      a: 'La causa più comune è la tendinite degli estensori, in cui i tendini che sollevano le dita si irritano per scarpe strette, lacci che premono sui tendini o un aumento improvviso della distanza di camminata. Altre cause sono fratture da stress, osteofiti e compressione dei nervi. Se il dolore c’è solo con le scarpe e sparisce a piedi nudi, la pressione della scarpa è il fattore più probabile.',
    },
    {
      q: 'I lacci stretti possono far male al collo del piede?',
      a: 'Sì. I tendini estensori corrono appena sotto la pelle sul dorso del piede, e i lacci stretti ci premono sopra direttamente. Saltare l’occhiello sopra il punto dolente o passare a scarpe con una linguetta più morbida spesso risolve il dolore in pochi giorni. È una delle cause più comuni e più facili da sistemare del dolore al dorso del piede.',
    },
    {
      q: 'Come capisco se il dolore al dorso del piede è una frattura da stress?',
      cites: [CITE.patelStressFracture],
      a: 'Una frattura da stress tende a far male in un punto preciso, peggiora nel corso della giornata e con l’attività, e può gonfiare il dorso del piede. Spesso arriva dopo un aumento improvviso del volume di allenamento. Le fratture da stress iniziali possono non vedersi in radiografia per due-tre settimane. Se il dolore è localizzato, in aumento e legato all’attività, fatti visitare per gli esami invece di continuare con gli esercizi.',
    },
    {
      q: 'Gli esercizi aiutano il dolore al dorso del piede?',
      a: 'Nessuno studio ha testato l’esercizio specificamente per il dolore al dorso del piede. L’esercizio può lavorare sui fattori che contribuiscono: rinforzare il tibiale anteriore riduce il carico sui tendini estensori più piccoli, e l’allungamento del polpaccio migliora la mobilità della caviglia. Ma per fratture da stress, gotta o problemi ai nervi, l’esercizio è inutile o controproducente. È la causa a decidere se l’esercizio ha senso.',
    },
    {
      q: 'Che sensazione dà la tendinite degli estensori del piede?',
      a: 'La tendinite degli estensori dà un dolore sordo e diffuso lungo il dorso del piede, dalla caviglia verso le dita. Peggiora quando tiri le dita verso l’alto, quando cammini o corri, o quando porti scarpe strette. A differenza di una frattura da stress, il dolore è distribuito lungo i tendini invece che concentrato su un punto dell’osso.',
    },
    {
      q: 'La gotta può dare dolore sul dorso del piede?',
      a: 'Sì. La gotta colpisce classicamente l’articolazione dell’alluce, ma può interessare anche le articolazioni del mesopiede. Un attacco di gotta arriva all’improvviso, spesso nel giro di una notte, con dolore intenso, arrossamento, calore e gonfiore in una sola articolazione. Ha un aspetto diverso da una tendinite o da una frattura da stress. Richiede cure mediche, non esercizi.',
    },
    {
      q: 'Devo andare dal medico per il dolore al dorso del piede?',
      a: 'Fatti visitare se il dolore è localizzato in un punto e sta peggiorando, se c’è arrossamento o calore sopra la zona dolente, se il dolore continua dopo una settimana di riposo e cambio di scarpe, se è comparso all’improvviso dopo un trauma, o se c’è intorpidimento o formicolio. Fratture da stress, gotta e problemi ai nervi traggono tutti vantaggio da una valutazione precoce.',
    },
    {
      q: 'Posso camminare con la tendinite degli estensori?',
      a: 'Sì, di solito camminare con la tendinite degli estensori va bene se il dolore resta lieve e non peggiora. Scegli scarpe con una linguetta morbida e flessibile, e allenta o riallaccia i lacci per togliere pressione dai tendini dolenti. Se camminare aumenta molto il dolore o il fastidio resta per ore dopo, riduci la distanza finché cambio di allacciatura e riposo non lo fanno scendere.',
    },
    {
      q: 'Quanto ci mette a passare la tendinite degli estensori del piede?',
      a: 'Nessuno studio ha seguito i tempi di recupero specificamente per la tendinite degli estensori, quindi non c’è una tempistica testata. I casi lievi scatenati da lacci stretti spesso si calmano quando si toglie la pressione. I casi legati a un aumento dell’allenamento, o a una pressione della scarpa che continua, possono richiedere più tempo, a volte diverse settimane, soprattutto se la causa non viene eliminata del tutto.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è localizzato in un punto sul dorso del piede e peggiora nel corso della giornata, il che può far pensare a una frattura da stress',
      'c’è gonfiore, arrossamento o calore sopra una sola articolazione, il che può far pensare a gotta o a un’infezione',
      'il dolore è comparso all’improvviso dopo un trauma, una caduta o una storta',
      'c’è intorpidimento, formicolio o bruciore, il che può far pensare a una compressione di un nervo',
      'il dolore non migliora dopo una o due settimane di riposo e cambio di scarpe',
      'non riesci a caricare il peso sul piede o zoppichi',
      'c’è un nodulo visibile sul dorso del piede che sta crescendo',
      'hai il diabete, una sensibilità ridotta ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito è pensato per il dolore al tallone e il piede piatto, non specificamente per il dolore al dorso del piede. Ma se il sovraccarico dei tendini estensori fa parte del tuo quadro, il rinforzo del tibiale anteriore (sollevamenti dell’avampiede) e l’allungamento del polpaccio dell’app lavorano sugli squilibri muscolari che contribuiscono. Se nel check-in segni il dorso del piede sulla mappa del dolore, l’app può seguire se il dolore cambia insieme ai tuoi esercizi.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito non fa diagnosi del dolore al dorso del piede. Se sospetti una frattura da stress, la gotta o un problema a un nervo, rivolgiti a un professionista sanitario prima di iniziare qualsiasi programma di esercizi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore al dorso del piede',
  campaign: 'guide-top-of-foot-it',
};
