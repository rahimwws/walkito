import { PAIN_GOAL_MAX, PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** `3, 5 o 7`: the plan's options as an Italian list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} o ${options[options.length - 1]}`;
}

/*
 * Translated from `en.ts` (2026-10-08). Informal «tu». Nothing here is
 * invented: no reviewer is named because none has reviewed the guides yet.
 * When one does, their name, credentials and what they checked replace that
 * paragraph in every language. Section ids are anchors and stay English.
 */
export const ABOUT_IT: About = {
  lang: 'it',
  title: 'Chi siamo: come scriviamo le guide di Walkito',
  description:
    'Cos’è Walkito, come scriviamo e documentiamo le guide su dolore al tallone e piede piatto, cosa Walkito non fa e come segnalarci un errore.',
  h1: 'Chi siamo',
  lede: 'Walkito è un piano di esercizi personalizzato per il dolore a tallone, piede e gamba, che si adatta ogni giorno a come stanno i tuoi piedi. Questa pagina spiega come sono scritte le guide di questo sito e da dove vengono i loro numeri. Dice anche cosa Walkito non fa, e come avvisarci quando qualcosa è sbagliato.',
  sections: [
    {
      h2: 'Cos’è Walkito?',
      paragraphs: [
        `Walkito è un’app per iPhone che costruisce il tuo piano di esercizi una settimana alla volta intorno a obiettivi che puoi misurare. Gli obiettivi sono cinque: mattine senza dolore (dolore del mattino a ${PAIN_GOAL_MAX}/10 o meno per ${PROGRAM.painFreeDays}\u00A0giorni di fila), tenere l’arco per ${PROGRAM.goals.archHoldSeconds}\u00A0secondi, ${PROGRAM.goals.calfRaises} sollevamenti sulle punte su una gamba, ${PROGRAM.goals.balanceSeconds}\u00A0secondi di equilibrio su una gamba, e una differenza di meno del ${PROGRAM.goals.gapPercent}% tra lato sinistro e destro. Inizi con al massimo tre. Se qualcosa fa male, prima viene il dolore.`,
        `Scegli ${either(PROGRAM.daysPerWeek)} giorni di allenamento a settimana e sessioni da ${either(PROGRAM.sessionMinutes)}\u00A0minuti. La sessione di ogni giorno si adatta a com’è andata la tua mattina. Ogni ${PROGRAM.testEveryDays}\u00A0giorni, un breve test mostra se i tuoi numeri cambiano. Quando raggiungi il primo obiettivo, il test arriva ogni ${PROGRAM.testEveryDaysAfterGoal}\u00A0giorni.`,
        'Il piano non ha una durata fissa. Quando raggiungi un obiettivo, quell’obiettivo passa al mantenimento con una dose più bassa e il successivo prende il suo posto. E va avanti così finché usi Walkito. [Come funziona il piano](/program/) (in inglese).',
        'Walkito è disponibile in inglese, russo e spagnolo.',
      ],
    },
    {
      h2: 'Come facciamo ricerca',
      id: 'how-we-research',
      paragraphs: [
        'Le guide di questo sito le scrivono Rahim Hudaykylyyev e Rahman Bazarov, i due cofondatori di Walkito: [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/), [esercizi per il piede piatto](/it/esercizi-piede-piatto/), [dolore al tallone nella corsa](/heel-pain-runners/) (in inglese) e [la pagina delle evidenze](/science/) (in inglese). Le costruiamo a partire da linee guida di pratica clinica, studi randomizzati e revisioni sistematiche. Non usiamo come fonte articoli di blog, forum o riassunti di altri siti. Quando un riassunto cita uno studio, andiamo allo studio.',
        'Leggiamo l’articolo completo, non solo l’abstract, prima che un suo numero finisca su una pagina. Ogni dose, grado e cifra rimanda allo studio da cui viene, così puoi aprirlo e controllare.',
        'Esercizi e affermazioni hanno una di tre etichette di evidenza. **Solida** vuol dire che una linea guida clinica gli dà un grado alto, o che diversi buoni studi sono d’accordo. **Moderata** vuol dire che almeno uno studio ben fatto lo sostiene. **Preliminare** vuol dire che la ricerca è piccola o appena iniziata: vale la pena provare, e l’etichetta può cambiare quando escono nuovi studi. Una regola popolare che uno studio ha testato senza trovarle conferma è segnata **Non supportato**.',
        'Walkito non ha sponsor, link di affiliazione o contenuti a pagamento. Niente è su una pagina perché qualcuno ha pagato. Ricontrolliamo una pagina quando esce nuova ricerca sul suo argomento. Ogni guida segue cinque regole:',
      ],
      bullets: [
        '**Ogni cifra risale a una fonte primaria.** Cioè uno studio randomizzato, una meta-analisi o una linea guida clinica. La fonte è indicata e linkata sulla pagina che la usa. Se non riusciamo a far risalire un numero a una fonte del genere, non va sul sito. Abbiamo tolto frasi per questo motivo.',
        '**Il riferimento è la linea guida di pratica clinica del 2023 sul dolore al tallone.** Viene dal Journal of Orthopaedic & Sports Physical Therapy. Dà a ogni intervento un grado in base alla forza delle sue prove, compresi quelli che sconsiglia.',
        '**Le precisazioni viaggiano con le cifre.** Un risultato a tre mesi è sempre riportato insieme a quello che è successo a dodici mesi. Ogni affermazione sulla forma dell’arco dice su quali piedi è stata misurata.',
        '**Le dosi sono le dosi di partenza di Walkito.** Mostrano da dove partono gli esercizi di Walkito. Non sono una prescrizione per te.',
        '**Nessuna promessa di guarigione.** Le pagine dicono cosa ha trovato la ricerca e fin dove arrivano le prove.',
      ],
    },
    {
      h2: 'Cosa non fa Walkito?',
      paragraphs: [
        'Walkito non fa diagnosi, non cura e non sostituisce un professionista sanitario. Walkito non può dirti cosa causa il tuo dolore. Rivolgiti prima a un professionista sanitario se:',
      ],
      // The guides' list (`lib/guides/it.ts`), word for word, plus the arch.
      bullets: [
        'il dolore è iniziato dopo un infortunio o una caduta',
        'non riesci a caricare il peso sul piede, o zoppichi',
        'si accompagna a intorpidimento, formicolio, bruciore, gonfiore o calore',
        'il tallone è arrossato, o hai la febbre o non ti senti bene',
        'ti sveglia di notte',
        'è un dolore acuto, o peggiora anche se hai ridotto il carico',
        'stringere i lati del tallone fa male, o il dolore aumenta durante la corsa dopo che hai aumentato i chilometri; entrambi possono essere segni di una frattura da stress',
        'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
        'ti fanno male entrambi i talloni e altre articolazioni sono gonfie o rigide',
        'non è migliorato dopo diverse settimane di esercizi e meno carico',
        'da adulto un arco si è abbassato all’improvviso',
        'l’arco resta piatto anche quando il piede è sollevato da terra',
      ],
    },
    {
      h2: 'Un professionista sanitario ha rivisto le guide di Walkito?',
      id: 'clinician',
      paragraphs: [
        'Nessun professionista sanitario abilitato ha ancora rivisto le guide di Walkito. Le scrivono Rahim e Rahman a partire dalla ricerca pubblicata citata in ogni pagina.',
        'Quando un professionista le rivedrà, questa pagina riporterà il suo nome, le sue qualifiche e cosa ha controllato. Fino ad allora, nessuna pagina di questo sito dichiara una revisione medica.',
      ],
    },
    {
      h2: 'Come segnalo un errore?',
      paragraphs: [
        `Per segnalare un errore su questo sito, scrivi a ${SUPPORT_EMAIL}. Può essere una cifra che non corrisponde alla sua fonte, una dose che sembra sbagliata o un link che non funziona. Correggiamo direttamente la pagina.`,
        'Ogni pagina mostra la data in cui il suo contenuto è cambiato l’ultima volta. Quella data cambia solo quando il contenuto cambia davvero.',
      ],
    },
    {
      h2: 'Come tratta Walkito i miei dati?',
      paragraphs: [
        'L’[informativa sulla privacy](/it/privacy/) di Walkito spiega cosa salva Walkito, cosa esce dal tuo telefono e come cancellarlo. In breve, il tuo piano e i tuoi check-in sono salvati nel tuo account, e i dati di Apple Salute restano sul tuo telefono.',
      ],
    },
  ],
};
