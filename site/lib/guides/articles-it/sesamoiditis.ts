import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/sesamoiditis.ts`, written around the queries
 * «sesamoidite», «sesamoidite alluce» and «dolore sotto l’alluce».
 * Informal «tu». «Dancer’s pad» is given as «cuscinetto da ballerino», with
 * the English name once in brackets. Figures and qualifiers are identical
 * to the English page. Citations as in English.
 */

export const SESAMOIDITIS_IT: Guide = {
  lang: 'it',
  page: 'sesamoiditis',
  mainSource: CITE.bizSesamoiditis,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Sesamoidite: cause, scarico e quando fare gli esami',
  description:
    'La sesamoidite dà dolore sotto l’alluce. Cuscinetto da ballerino, scarico, scarpe, come distinguerla da una frattura e quando gli esami di imaging aiutano.',
  h1: 'Sesamoidite: cos’è, cosa aiuta e quando fare gli esami',
  lede:
    'La sesamoidite è un’infiammazione delle due piccole ossa inserite nel tendine sotto l’articolazione dell’alluce. Il dolore di solito sta proprio sotto la parte anteriore della pianta, sotto l’alluce, e peggiora nella spinta quando cammini o corri. Questa pagina spiega da cosa dipende, cosa possono fare lo scarico e il cambio di scarpe, e quando vale la pena fare esami di imaging.',
  intro: [
    'Le ossa sesamoidi sono grandi più o meno come un chicco di mais. Stanno dentro il tendine del flessore breve dell’alluce e fanno da puleggia, aiutando l’alluce a spingere da terra. Quando si irritano, per sovraccarico, per un aumento improvviso dell’attività o per una pressione ripetuta, il risultato è un dolore sordo sotto la testa del primo metatarso che può rendere scomodo ogni passo.',
  ],
  toc: true,
  takeaways: [
    'Una revisione sistematica del 2025 ha trovato che gli approcci conservativi per la sesamoidite, tra cui plantari e scarico, miglioravano i punteggi del dolore in circa il 66% dei casi, ma le ricadute erano frequenti e mancano ancora studi di alta qualità (Biz e colleghi, 2025).',
    'Il cuscinetto da ballerino, un cuscinetto piatto con un incavo sotto la testa del primo metatarso, è il metodo di scarico usato più spesso. Ridistribuisce la pressione lontano dalle ossa sesamoidi.',
    'La radiografia può aiutare a distinguere una frattura di un sesamoide da un sesamoide bipartito, una normale variante anatomica in cui l’osso è in due pezzi. I bordi di una frattura sembrano frastagliati; quelli di un sesamoide bipartito sono lisci.',
    'L’esercizio ha un ruolo limitato nella sesamoidite in sé. Scarico, modifica delle attività e scarpe sono le strategie conservative principali.',
  ],
  sections: [
    {
      h2: 'Cosa sono le ossa sesamoidi e perché fanno male?',
      paragraphs: [
        'Le due ossa sesamoidi stanno sotto la testa del primo metatarso, l’osso lungo dietro l’alluce. Il sesamoide mediale, più vicino al centro del piede, è quello che si lesiona più spesso. Insieme aiutano l’alluce a spingere da terra e assorbono la forza nella fase di spinta del passo.',
        'La sesamoidite compare quando queste ossa o i tessuti intorno si infiammano. Le attività che caricano ripetutamente l’avampiede, come corsa, danza o salti, sono fattori scatenanti comuni. Lo è anche un aumento improvviso del volume di allenamento. Chi ha un piede cavo o una testa del primo metatarso prominente è più predisposto, perché più pressione cade proprio su quel punto.',
        'Nella pratica il termine sesamoidite si usa in senso ampio e non ha una definizione rigida. Può indicare un’infiammazione delle ossa stesse, dei tessuti molli intorno, o di entrambi. Una revisione sistematica del 2025 ha notato che non ci sono ancora linee guida standard per la sua gestione conservativa.',
      ],
      cites: [CITE.bizSesamoiditis],
    },
    {
      h2: 'Che differenza c’è tra sesamoidite e frattura di un sesamoide?',
      keyFact: 'Circa 1\u00A0persona su 10 ha un sesamoide bipartito, una variante normale che in radiografia può sembrare una frattura ma ha bordi lisci e arrotondati invece che frastagliati (Yammine, 2015).',
      paragraphs: [
        'La sesamoidite è un problema da sovraccarico. Il dolore arriva piano piano e si fa sentire durante l’attività. Una frattura di un sesamoide è una crepa nell’osso, di solito per un singolo evento acuto o per uno stress cronico. Il dolore da frattura tende a essere più acuto e può esserci anche a riposo.',
        'Una complicazione è che circa 1\u00A0persona su 10 ha un sesamoide bipartito, cioè il sesamoide mediale è naturalmente in due pezzi. In radiografia un sesamoide bipartito sembra una frattura. La differenza sta nei bordi: quelli di un sesamoide bipartito sono lisci e arrotondati, quelli di una frattura sono frastagliati e irregolari. Il medico può anche chiedere una radiografia dell’altro piede per confronto.',
        'Se la radiografia non è chiara, una scintigrafia ossea o una risonanza magnetica possono confermare la diagnosi. La risonanza mostra l’edema osseo, un gonfiore dentro l’osso, presente nella maggior parte dei casi di sesamoidite. Di solito la risonanza si riserva ai casi in cui i sintomi continuano nonostante la gestione iniziale.',
      ],
      cites: [CITE.yammineSesamoid],
    },
    {
      h2: 'Com’è la gestione conservativa?',
      keyFact: 'Una revisione del 2025 che ha riunito 11\u00A0studi e 59\u00A0pazienti ha trovato che i punteggi del dolore miglioravano in circa il 66% dei casi trattati in modo conservativo, anche se le ricadute erano frequenti (Biz e colleghi, 2025).',
      paragraphs: [
        'La revisione sistematica del 2025 di Biz e colleghi ha riunito i dati dei singoli pazienti di 11\u00A0studi, per un totale di 59\u00A0pazienti. I trattamenti più comuni erano plantari, modifica delle attività e infiltrazioni di cortisone. I punteggi del dolore miglioravano in circa il 66% dei casi, ma le ricadute erano frequenti e alcuni pazienti restavano sintomatici.',
        'La revisione ha trovato che plantari e scarico erano usati in quasi tutti i casi. Le infiltrazioni di cortisone davano sollievo nel breve periodo ma comportavano un rischio di ricaduta. Nessun trattamento è stato confrontato direttamente con un altro in uno studio randomizzato. Gli autori hanno concluso che servono protocolli standard e studi di qualità più alta.',
        'La chirurgia, di solito una sesamoidectomia parziale o totale (rimozione dell’osso), si considera solo quando diversi mesi di cure conservative non hanno aiutato. La maggior parte dei professionisti sanitari prova prima almeno tre-sei mesi di gestione non chirurgica.',
      ],
      sourceNote:
        'Biz 2025: 11\u00A0studi, 59\u00A0pazienti (29\u00A0donne), solo case report e serie di casi. VAS migliorata nel 66% dei casi. Il 45,4% è tornato allo sport senza dolore in una serie di casi. Nessuno studio randomizzato individuato.',
      cites: [CITE.bizSesamoiditis],
    },
    {
      h2: 'Cos’è il cuscinetto da ballerino e come funziona?',
      paragraphs: [
        'Il cuscinetto da ballerino (in inglese «dancer’s pad») è un cuscinetto piatto di feltro o di schiuma con un incavo a U sotto la testa del primo metatarso. L’incavo sta proprio sopra la zona dei sesamoidi, così il cuscinetto solleva l’avampiede intorno e toglie la pressione diretta dal punto dolente. Il nome viene dalla danza classica, dove il carico sull’avampiede è estremo.',
        'Puoi comprare cuscinetti da ballerino già tagliati o farne tagliare uno su misura da un professionista sanitario. La posizione conta: l’incavo deve stare direttamente sotto le ossa sesamoidi, né troppo avanti né troppo indietro. Alcune persone usano il cuscinetto dentro la scarpa; altre lo fanno integrare in un plantare su misura.',
        'Una scarpa con suola rigida o a dondolo riduce quanto si piega l’articolazione dell’alluce nella spinta, e questo limita il carico sui sesamoidi. Evitare scarpe flessibili con suola sottile e tacchi alti nel periodo con sintomi aiuta per lo stesso motivo.',
      ],
    },
    {
      h2: 'Le scarpe contano?',
      paragraphs: [
        'Le scarpe hanno un ruolo di supporto. Una scarpa con la suola rigida limita il movimento della prima articolazione metatarso-falangea (l’articolazione dell’alluce), e questo riduce direttamente lo stress sui sesamoidi. Le suole a dondolo fanno la stessa cosa facendo rotolare il piede nella spinta senza che l’alluce debba piegarsi.',
        'Evita scarpe flessibili sull’avampiede, molto piatte o con la suola sottile. I tacchi alti spostano il peso in avanti sulla parte anteriore della pianta, aumentando il carico sui sesamoidi. Se il problema è partito con la corsa, passare per un periodo a una scarpa con più ammortizzazione sull’avampiede e una suola più alta può aiutare mentre i sintomi si calmano.',
        'Questi cambiamenti da soli non risolvono il problema se l’irritazione di fondo è importante, ma riducono il carico che l’ha causato.',
      ],
    },
    {
      h2: 'Che ruolo ha l’esercizio?',
      paragraphs: [
        'La risposta onesta è che l’esercizio ha un ruolo limitato nella gestione della sesamoidite in sé. A differenza della [fascite plantare](/it/esercizi-fascite-plantare/) o della [tendinite d’Achille](/it/tendinite-achille-esercizi/), dove i programmi di carico hanno un buon sostegno dagli studi, per la sesamoidite non ci sono studi sull’esercizio. La revisione sistematica del 2025 non ha individuato nessuno studio che testasse un protocollo di esercizi specifico.',
        'Quello su cui l’esercizio può aiutare è il quadro intorno. Un polpaccio rigido sposta il peso sull’avampiede mentre cammini. Allungare gastrocnemio e soleo può ridurre quel carico in avanti. Anche dei muscoli intrinseci del piede deboli possono contribuire a una distribuzione irregolare della pressione sull’avampiede. Apertura delle dita e piede corto possono aiutare a dividere il carico in modo più uniforme tra le teste metatarsali, anche se non è stato testato specificamente per la sesamoidite.',
        'Se stai recuperando da una sesamoidite e nel periodo di riposo hai perso forza nelle dita o flessibilità nel polpaccio, esercizi delicati per la [parte anteriore della pianta del piede](/it/metatarsalgia-dolore-pianta-piede/) possono far parte di un piano di ritorno all’attività. Ma gli strumenti principali sono lo scarico e la modifica delle attività, non l’esercizio.',
      ],
    },
    {
      h2: 'Che legame c’è tra la sesamoidite e altri problemi dell’avampiede?',
      paragraphs: [
        'Il dolore da sesamoidite sta sotto l’alluce, e questo lo separa dal più ampio [dolore alla pianta del piede](/it/metatarsalgia-dolore-pianta-piede/) (metatarsalgia), dove il dolore di solito è sotto la seconda e la terza testa metatarsale. Il [neuroma di Morton](/it/neuroma-di-morton/) dà formicolio o bruciore tra il terzo e il quarto dito, non sotto l’alluce.',
        'Anche la gotta può colpire l’articolazione dell’alluce e all’inizio dà sensazioni simili, ma la gotta arriva all’improvviso, spesso nel giro di una notte, con arrossamento, gonfiore e calore. La sesamoidite compare piano piano. Se l’inizio è stato improvviso e l’articolazione è rossa e calda, rivolgiti a un professionista sanitario per escludere gotta o infezione.',
        'Anche l’alluce rigido, rigidità e artrosi dell’articolazione dell’alluce, può dare dolore in un punto simile, ma riguarda l’articolazione stessa invece delle ossa sesamoidi sotto.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quanto ci mette a passare la sesamoidite?',
      a: 'Il recupero dalla sesamoidite varia molto. I casi lievi possono calmarsi in poche settimane con scarico e cambiamenti nelle attività. I casi più persistenti possono richiedere tre-sei mesi. Nella revisione sistematica del 2025, alcuni pazienti sono tornati allo sport senza dolore, mentre altri restavano sintomatici nonostante le cure conservative.',
      cites: [CITE.bizSesamoiditis],
    },
    {
      q: 'Si può camminare con la sesamoidite?',
      a: 'La maggior parte delle persone riesce ancora a camminare, ma la spinta fa male. Un cuscinetto da ballerino nella scarpa e una scarpa con suola rigida possono ridurre il carico quanto basta per rendere la camminata più comoda. Nel periodo con sintomi aiuta evitare di camminare scalzi su superfici dure.',
    },
    {
      q: 'Serve la risonanza magnetica per la sesamoidite?',
      a: 'Non sempre. Di solito il primo passo è la radiografia, che può distinguere una frattura da un sesamoide bipartito. La risonanza magnetica è utile quando la radiografia è normale ma i sintomi continuano, o quando il medico vuole controllare se c’è edema osseo o un danno ai tessuti molli.',
      cites: [CITE.yammineSesamoid],
    },
    {
      q: 'Cos’è un sesamoide bipartito?',
      a: 'Un sesamoide bipartito è una normale variante anatomica in cui il sesamoide mediale è naturalmente in due pezzi. Ce l’ha circa 1\u00A0persona su 10. In radiografia può sembrare una frattura, ma i bordi sono lisci e arrotondati, non frastagliati.',
      cites: [CITE.yammineSesamoid],
    },
    {
      q: 'La sesamoidite è la stessa cosa del turf toe?',
      a: 'No. Il turf toe è una distorsione dei legamenti intorno all’articolazione dell’alluce, di solito per un singolo trauma in iperestensione. La sesamoidite è un’infiammazione cronica delle ossa sesamoidi dovuta a un carico ripetuto. Entrambi fanno male sotto l’alluce, ma il turf toe ha un trauma chiaro all’origine e può comportare un danno ai legamenti.',
    },
    {
      q: 'Gli esercizi possono evitare che la sesamoidite torni?',
      a: 'Nessun esercizio è stato testato per prevenire la sesamoidite. Allungare il polpaccio per ridurre il carico sull’avampiede e rinforzare i muscoli intrinseci del piede per dividere la pressione in modo più uniforme sono idee ragionevoli, ma non sono dimostrate specificamente per questo problema. Continuare a usare un cuscinetto da ballerino e scarpe adatte è la strategia più consolidata.',
    },
    {
      q: 'Cosa succede se la sesamoidite non viene trattata?',
      cites: [CITE.bizSesamoiditis],
      a: 'Senza cambiare il carico, la sesamoidite spesso si trascina o si riacutizza con l’attività. Una revisione del 2025 sulle cure conservative ha trovato che il dolore migliorava in circa due terzi dei casi, ma le ricadute erano frequenti anche con il trattamento. Senza scarico o un cambiamento delle attività, aspettati che il dolore continui e limiti quanto puoi correre o spingere.',
    },
    {
      q: 'Fa bene massaggiare la sesamoidite?',
      a: 'Un massaggio delicato intorno alla zona può alleviare un po’ di indolenzimento, ma una pressione decisa proprio sulle ossa sesamoidi di solito peggiora il dolore invece di migliorarlo, perché è proprio lì che sta il tessuto irritato. Se vuoi lavorare sull’avampiede, allunga piuttosto il polpaccio, che toglie un po’ di carico dai sesamoidi, invece di premere sul punto dolente.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'Il dolore è iniziato all’improvviso dopo una caduta, un salto o un colpo diretto all’avampiede, il che può indicare una frattura',
      'L’articolazione dell’alluce è rossa, calda e gonfia, soprattutto se è successo nel giro di una notte, il che potrebbe essere gotta o un’infezione',
      'Il dolore non migliora dopo due-tre settimane di scarico e modifica delle attività',
      'Noti intorpidimento o formicolio all’alluce',
      'Non riesci per niente a caricare il peso sull’avampiede',
      'Hai la febbre insieme al dolore al piede',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text:
      'La sesamoidite si gestisce soprattutto con scarico e scarpe, non con un programma di esercizi. Walkito è pensato per problemi come fascite plantare e piede piatto, dove i programmi di carico strutturati hanno il sostegno degli studi. Se la tua sesamoidite passa e vuoi ricostruire la forza di piede e polpaccio per tornare all’attività, il lavoro sui muscoli intrinseci del piede e gli allungamenti del polpaccio dell’app possono essere un’aggiunta utile.',
    more: [
      'Se il dolore all’avampiede è più ampio e coinvolge la seconda o la terza testa metatarsale, vedi la pagina su [metatarsalgia e dolore alla pianta del piede](/it/metatarsalgia-dolore-pianta-piede/) per esercizi con più prove alle spalle.',
    ],
  },
  crumb: 'Sesamoidite',
  campaign: 'guide-sesamoiditis-it',
};
