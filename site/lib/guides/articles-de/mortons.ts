import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/mortons.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const MORTONS_DE: Guide = {
  lang: 'de',
  page: 'mortons',
  mainSource: CITE.matthewsCochrane,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Morton-Neurom: Schuhe, Pelotten und was hilft',
  description:
    'Morton-Neurom: Brennen zwischen den Zehen. Pelotten, andere Schuhe, Spritzen, Übungen für mehr Komfort und der Unterschied zur Metatarsalgie.',
  h1: 'Morton-Neurom: was es ist, was hilft und was die Forschung sagt',
  lede:
    'Ein Morton-Neurom ist eine Verdickung des Nervs zwischen den Mittelfußköpfchen, am häufigsten zwischen der dritten und vierten Zehe. Es verursacht Brennen, Kribbeln oder das Gefühl, auf einem Kieselstein zu laufen. Es ist kein echter Tumor. Andere Schuhe und Mittelfußpelotten sind die üblichen ersten Schritte, und ein Cochrane-Review von 2024 fand, dass die Belege für jede einzelne Maßnahme insgesamt noch begrenzt sind. Diese Seite zeigt, was wirkt, was nicht und wo Übungen ihren Platz haben.',
  intro: [
    'Der Nerv läuft an der Fußsohle zwischen den Mittelfußknochen. Wenn die Mittelfußköpfchen zusammengedrückt werden, kann der Nerv gereizt werden, anschwellen und sich mit der Zeit verdicken. Schmale Schuhe, hohe Absätze und Sport mit vielen Stößen verstärken den Druck. Der Fachbegriff ist interdigitale Neuralgie oder intermetatarsales Neurom. Die meisten suchen nach Morton-Neurom.',
  ],
  toc: true,
  takeaways: [
    'Ein Cochrane-Review von 2024 mit sechs randomisierten Studien und 373\u00A0Teilnehmenden fand für die meisten Maßnahmen beim Morton-Neurom Belege mit niedriger bis mittlerer Vertrauenswürdigkeit. Keine einzelne Behandlung hatte starke Belege mit hoher Vertrauenswürdigkeit (Matthews und Kollegen, 2024).',
    'Breitere Schuhe mit niedrigem Absatz und eine Mittelfußpelotte direkt hinter den Mittelfußköpfchen sind der am häufigsten empfohlene erste konservative Schritt. Etwa 32\u00A0% der so behandelten Menschen berichten von einer deutlichen Besserung.',
    'Eine Kortisonspritze lindert den Schmerz kurzfristig, aber das Cochrane-Review von 2024 fand Belege mit niedriger Vertrauenswürdigkeit, dass Kortison zusätzlich zu einem örtlichen Betäubungsmittel bei Schmerz oder Funktion kaum oder keinen Unterschied macht im Vergleich zum Betäubungsmittel allein.',
    'Übungen wirken nicht direkt auf den Nerv. Zehen- und Fußübungen können beim allgemeinen Komfort im Vorfuß und bei der Lastverteilung helfen, aber keine Studie hat Übungen speziell beim Morton-Neurom getestet.',
  ],
  sections: [
    {
      h2: 'Was ist ein Morton-Neurom?',
      figure: { id: 'mortons', caption: 'Ein Morton-Neurom ist ein verdickter Nerv zwischen den Mittelfußköpfchen, am häufigsten zwischen der dritten und vierten Zehe.', alt: 'Die Fußknochen von oben, gelbe Nerven laufen zu den Zehen, ein geschwollenes Oval sitzt auf dem Nerv zwischen der dritten und vierten Zehe.' },
      paragraphs: [
        'Ein Morton-Neurom ist eine gutartige Verdickung des gemeinsamen Zehennervs an der Fußsohle, meist im dritten Zwischenraum der Mittelfußknochen (zwischen der dritten und vierten Zehe). Seltener tritt es im zweiten Zwischenraum auf. **Es ist kein Krebs und keine Wucherung am Knochen.**',
        'Der Nerv läuft unter dem queren Mittelfußband hindurch, einem Gewebeband, das die Mittelfußköpfchen zusammenhält. Wenn die Köpfchen zusammengedrückt werden, wird der Nerv eingeklemmt. Mit der Zeit verdickt sich die Nervenscheide, und der Nerv selbst kann sich vergrößern. Die Folge sind Schmerz, Brennen, Kribbeln oder Taubheit im Zehenzwischenraum, die in die betroffenen Zehen ausstrahlen.',
        'Es ist bei Frauen häufiger, zum Teil wegen der Schuhwahl. Schuhe mit schmaler Spitze und hohe Absätze drücken die Mittelfußköpfchen zusammen und erhöhen den Druck auf den Nerv. Laufen, Sportarten wie Tennis oder Squash und Berufe mit langem Stehen in engen Schuhen sind ebenfalls Risikofaktoren.',
      ],
    },
    {
      h2: 'Was ist der Unterschied zwischen Morton-Neurom und Metatarsalgie?',
      paragraphs: [
        'Metatarsalgie ist ein weiter gefasster Begriff für Schmerzen rund um die Mittelfußköpfchen, die knöchernen Knubbel am [Fußballen](/de/metatarsalgie-vorfussschmerzen/). Das Morton-Neurom ist eine bestimmte Ursache für Vorfußschmerzen und fällt unter den Oberbegriff Metatarsalgie.',
        'Der wichtigste Unterschied ist, was wehtut und wie:',
        {
          list: [
            '**Metatarsalgie** ist typischerweise ein dumpfer bis stechender Schmerz unter dem Fußballen, oft unter dem zweiten und dritten Mittelfußköpfchen.',
            'Ein **Morton-Neurom** verursacht Brennen, Kribbeln oder Taubheit zwischen den Zehen, am häufigsten zwischen der dritten und vierten. Den Vorfuß seitlich zusammenzudrücken, der sogenannte Mulder-Test, kann die Beschwerden des Neuroms auslösen und manchmal ein hörbares Klicken erzeugen, wenn der Nerv zwischen den Mittelfußknochen durchschnappt.',
          ],
        },
        'Die Unterscheidung ist wichtig, weil sich die Ansätze unterscheiden. Metatarsalgie spricht darauf an, die Mittelfußköpfchen zu entlasten und die Zehen zu kräftigen. Ein Morton-Neurom spricht darauf an, den Nerv zu entlasten, also auf breitere Schuhe, Pelotten und manchmal Spritzen oder eine Operation.',
        'Übungen helfen bei beiden für den Komfort im Vorfuß, aber für keine der beiden gibt es starke Studien speziell zu Übungen. Mehr zum größeren Bild der Metatarsalgie findest du unter [Schmerzen im Fußballen](/de/metatarsalgie-vorfussschmerzen/).',
      ],
    },
    {
      h2: 'Helfen Mittelfußpelotten und andere Schuhe?',
      keyFact: 'Zwei Studien in einer Übersichtsarbeit von 2019 zusammengenommen halfen breitere Schuhe und eine Mittelfußpelotte etwa 32\u00A0% der Menschen, bei einer Nachbeobachtung von durchschnittlich viereinhalb Monaten (Matthews und Kollegen, 2019).',
      paragraphs: [
        'Breitere Schuhe mit niedrigem Absatz und eine Mittelfußpelotte sind der am häufigsten empfohlene erste Schritt beim Morton-Neurom. Die Pelotte sitzt direkt hinter den Mittelfußköpfchen, nicht direkt darunter, damit sie die Schäfte der Mittelfußknochen anhebt und spreizt und so den Druck auf den Nerv senkt.',
        'Gut sitzende Schuhe mit breiter Zehenbox, niedrigem Absatz und Mittelfußpelotte wurden in zwei Studien einer systematischen Übersichtsarbeit von 2019 untersucht. Beide Studien zusammengenommen waren Schuhe und Pelotte bei etwa 32\u00A0% der Menschen erfolgreich, bei einer Nachbeobachtung von durchschnittlich viereinhalb Monaten. Eine randomisierte Studie, die Schuhe und Pelotte mit einer Kortisonspritze verglich, fand aber, dass die Gruppe mit Spritze nach sechs Monaten eine sechsmal höhere Erfolgschance hatte.',
        'Für die Praxis heißt das: **Andere Schuhe und Pelotten haben wenig Risiko und sind einen ersten Versuch wert.** Bei manchen wirken sie, bei anderen nicht. Wenn sie nach vier bis sechs Wochen nicht geholfen haben, ist der nächste Schritt meist ein Termin bei einer Fachperson, um über Spritzen oder weitere Bildgebung zu sprechen.',
        'Die Position zählt. Eine Pelotte, die zu weit vorn sitzt, direkt unter dem Mittelfußköpfchen, kann den Druck erhöhen statt senken. Selbstklebende Mittelfußpelotten aus der Apotheke sind günstig genug zum Ausprobieren, aber die richtige Position braucht etwas Herumprobieren. Eine Podologin oder ein Podologe kann eine Maßeinlage anpassen, wenn Pelotten von der Stange nicht helfen.',
      ],
      cites: [CITE.matthewsSR],
    },
    {
      h2: 'Was sagt die Forschung zu Spritzen?',
      keyFact: 'Im Cochrane-Review von 2024 verbesserte eine ultraschallgesteuerte Kortisonspritze den Schmerz wahrscheinlich stärker als eine Spritze ohne Ultraschall, mit Belegen mittlerer Vertrauenswürdigkeit nach 2, 6 und 12\u00A0Monaten (Matthews und Kollegen, 2024).',
      paragraphs: [
        'Die Kortisonspritze ist der am besten untersuchte nicht operative, invasive Ansatz beim Morton-Neurom.',
        'Das Cochrane-Review von 2024 schloss sechs randomisierte Studien mit 373\u00A0Teilnehmenden ein. Es fand Belege mit niedriger Vertrauenswürdigkeit, dass Kortison zusätzlich zu einem örtlichen Betäubungsmittel nach drei bis sechs Monaten bei Schmerz oder Funktion kaum oder keinen Unterschied macht im Vergleich zu einer Spritze nur mit Betäubungsmittel. Die Cochrane-Autoren wiesen darauf hin, dass zusätzliches Kortison Nebenwirkungen erhöhen kann, darunter einen Schwund des Fettpolsters und Hautveränderungen.',
        'Eine ultraschallgesteuerte Spritze verbessert den Schmerz wahrscheinlich im Vergleich zu einer Spritze ohne Ultraschall, mit klinisch relevanten Unterschieden nach 2, 6 und 12\u00A0Monaten in den eingeschlossenen Studien. Die Vertrauenswürdigkeit der Belege wurde als mittel bewertet.',
        'Andere Arten von Spritzen wurden ebenfalls untersucht, darunter:',
        {
          list: [
            'Alkoholsklerosierung.',
            'Radiofrequenzablation.',
            'Kryotherapie.',
          ],
        },
        'Die systematische Übersichtsarbeit von 2019 fand für Kortisonspritzen und Manipulation die stärksten Belege für eine kurzfristige Schmerzlinderung, forderte aber mehr hochwertige randomisierte Studien. Das Cochrane-Review von 2024 kam zum selben Schluss: Nach 20\u00A0weiteren Jahren Forschung seit dem ersten Cochrane-Review von 2004 **gibt es immer noch nicht genug hochwertige Belege für feste Schlussfolgerungen zu irgendeiner einzelnen Maßnahme.**',
        'Das heißt nicht, dass Spritzen nutzlos sind. Es heißt, dass die Belege nicht stark genug sind, um einen Ansatz klar über einen anderen zu stellen. Eine Fachperson kann mit dir über die Möglichkeiten, die Risiken und die Erwartungen sprechen. Eine Kortisonspritze bringt vielen Menschen eine gute kurzfristige Linderung, aber wiederholte Spritzen bergen Risiken für das umliegende Gewebe.',
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
    {
      h2: 'Wann wird über eine Operation gesprochen?',
      paragraphs: [
        'Über eine Operation wird meist nachgedacht, wenn konservative Behandlung, also andere Schuhe, Pelotten und ein oder zwei Spritzen, keine dauerhafte Linderung gebracht hat. Der häufigste Eingriff ist die Neurektomie, die operative Entfernung des verdickten Nervenabschnitts. Sie hilft vielen, hinterlässt aber eine dauerhafte Taubheit zwischen den betroffenen Zehen, weil der Nerv, der dort für das Gefühl zuständig war, fehlt.',
        'Andere Möglichkeiten sind eine Nervendekompression (das quere Mittelfußband wird durchtrennt, ohne den Nerv zu entfernen) und eine Umstellungsosteotomie des Mittelfußknochens (der Knochen wird umgeformt, um dem Nerv mehr Platz zu geben). Das Cochrane-Review von 2024 fand für Vergleiche zwischen Operationen Belege mit niedriger Vertrauenswürdigkeit, ohne klaren Sieger zwischen einer Neurektomie über einen Schnitt an der Fußsohle oder am Fußrücken bei Zufriedenheit oder Nebenwirkungen.',
        '**Eine Operation ist kein erster Schritt.** Die meisten Fachleute empfehlen zuerst einen geplanten Versuch mit konservativer Behandlung über mehrere Monate. Wenn du an diesem Punkt bist, kann dir eine Fachperson für Fuß und Sprunggelenk die Möglichkeiten erklären und was dich bei der Erholung erwartet.',
      ],
      cites: [CITE.matthewsCochrane],
    },
    {
      h2: 'Helfen Übungen beim Morton-Neurom?',
      paragraphs: [
        'Die ehrliche Antwort: **Keine Studie hat Übungen beim Morton-Neurom getestet.** Übungen wirken nicht direkt auf den Nerv. Sie können ein Neurom nicht schrumpfen lassen und den Zwischenraum zwischen den Mittelfußknochen nicht so entlasten, wie es ein breiterer Schuh oder eine Mittelfußpelotte kann.',
        'Was Übungen tun können, ist den allgemeinen Komfort im Vorfuß und die Lastverteilung zu verbessern. Die Kräftigung der inneren Fußmuskeln, der kleinen Muskeln zwischen und unter den Mittelfußknochen, kann helfen, dass die Mittelfußköpfchen beim Gehen weiter gespreizt bleiben. Wadendehnung senkt die Überlastung des Vorfußes, weil sie die Dorsalflexion des Sprunggelenks verbessert.',
        'Das sind Übungen für Komfort und Lastverteilung, keine Maßnahmen speziell gegen das Neurom. Wir sagen das klar, weil es nicht ehrlich wäre, die Rolle von Übungen hier zu übertreiben.',
        'Wenn dein Vorfußschmerz über das Neurom hinausgeht, du also auch eine allgemeine Metatarsalgie oder eine verkürzte Wade hast, sind die Übungen auf der Seite zu [Schmerzen im Fußballen](/de/metatarsalgie-vorfussschmerzen/) passend. Die Übungen unten stammen aus derselben Auswahl und stehen hier nur der Einfachheit halber.',
      ],
      exercises: [
        {
          name: 'Zehenspreizen',
          dose: '3\u00A0Sätze à 10',
          how: 'Setz oder stell dich hin, der Fuß steht flach. Spreiz alle fünf Zehen so weit auseinander, wie du kannst, halte 2 bis 3\u00A0Sekunden, dann lass locker. Das trainiert die kleinen Muskeln zwischen den Mittelfußknochen und kann helfen, dass die Mittelfußköpfchen weiter auseinander sitzen.',
          feel: 'Eine Dehnung zwischen den Zehen und leichte Arbeit oben im Fuß',
          stop: 'Stechender Schmerz oder Brennen zwischen den Zehen während der Übung',
          evidence: { level: 'early', why: 'Keine Studie zum Morton-Neurom. Die Übung zielt auf die inneren Fußmuskeln, die helfen, die Mittelfußköpfchen zu spreizen.' },
          media: 'toe_spread',
          caption: 'Zehenspreizen: alle fünf Zehen auseinander, halten, locker lassen',
          alt: 'Ein Fuß mit weit gespreizten Zehen, die Muskeln zwischen den Mittelfußknochen sind hervorgehoben',
        },
        {
          name: 'Handtuchgreifen',
          dose: '3\u00A0Sätze à 10, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf einem Handtuch. Krall die Zehen ein, um das Handtuch zu dir heranzuziehen. Loslassen und wiederholen. Das kräftigt die Zehenbeuger, die beim Abdrücken helfen, die Last im Vorfuß zu verteilen.',
          feel: 'Die Muskeln unter dem Gewölbe und den Zehen arbeiten',
          stop: 'Schmerz zwischen den Zehen oder im Fußballen',
          evidence: { level: 'early', why: 'Keine Studie zum Neurom. In einer Studie mit 41\u00A0Personen mit Metatarsalgie verbesserte ein ähnliches Zehenprogramm den Schmerz (Amaha 2020), aber es gab keine Kontrollgruppe.' },
          media: 'towel_scrunch',
          caption: 'Handtuchgreifen: Krall die Zehen ein, um das Handtuch heranzuziehen',
          alt: 'Ein Fuß auf einem Handtuch, die Zehen krallen das Handtuch zusammen, die inneren Fußmuskeln sind hervorgehoben',
        },
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Das hintere Bein bleibt gestreckt, die Ferse unten und die Hüfte nach vorn. Eine verkürzte Wade verlagert das Gewicht nach vorn auf den Vorfuß, was den Druck auf den Nerv erhöht.',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Schmerz in der Achillessehne',
          evidence: { level: 'strong', why: 'Wadendehnung hat bei verwandten Beschwerden die Leitlinienbewertung A. Nicht speziell beim Neurom getestet, aber der Mechanismus der Vorfußüberlastung ist anerkannt.' },
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (gebeugtes Knie)',
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position wie bei der Dehnung mit gestrecktem Knie, dann beug das hintere Knie, bis die Dehnung tiefer wandert, nahe der Achillessehne. Das zielt auf den Soleus, den tieferen Wadenmuskel.',
          feel: 'Eine Dehnung tiefer in der Wade, nahe der Ferse',
          stop: 'Schmerz in der Achillessehne',
          evidence: { level: 'strong', why: 'Dieselbe Leitlinienbewertung A für Wadendehnung. Zielt auf den Soleus, der ebenfalls zu einem steifen Sprunggelenk und zur Belastung des Vorfußes beiträgt.' },
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis die Dehnung tiefer wandert',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, der Soleus ist hervorgehoben',
        },
      ],
      cites: [CITE.amaha, CITE.guideline],
    },
    {
      h2: 'Was die Forschung uns sagt und was nicht',
      paragraphs: [
        'Das Cochrane-Review von 2024 ist die gründlichste verfügbare Zusammenfassung. Es schloss sechs randomisierte Studien mit 373\u00A0Teilnehmenden ein. Seine Schlussfolgerungen: Für die meisten Maßnahmen beim Morton-Neurom gibt es Belege mit niedriger bis mittlerer Vertrauenswürdigkeit, und keine einzelne Behandlung hat starke Belege mit hoher Vertrauenswürdigkeit. Nach 20\u00A0weiteren Jahren Forschung seit dem ursprünglichen Cochrane-Review von 2004 kamen die Autoren im Kern zum selben Schluss.',
        'Das heißt nicht, dass nichts wirkt:',
        {
          list: [
            'Andere Schuhe und Mittelfußpelotten helfen etwa 3 von 10\u00A0Menschen.',
            'Eine ultraschallgesteuerte Kortisonspritze verbessert den Schmerz wahrscheinlich im Vergleich zu einer Spritze ohne Ultraschall.',
            'Eine Neurektomie lindert bei vielen den Schmerz, bringt aber eine dauerhafte Taubheit mit sich.',
          ],
        },
        '**Was fehlt, ist eine klare erste Behandlung mit starken Belegen.**',
        'Bei Übungen ist die Lücke noch größer. Keine Studie hat Übungen beim Morton-Neurom getestet. Die Übungen auf dieser Seite sind Maßnahmen für Komfort und Lastverteilung, keine Maßnahmen speziell gegen das Neurom. Wenn Übungen Teil deines Plans sind, sollten sie neben anderen Schuhen und fachlichem Rat stehen, nicht an deren Stelle.',
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
  ],
  faq: [
    {
      q: 'Wie fühlt sich ein Morton-Neurom an?',
      a: 'Ein Morton-Neurom verursacht typischerweise Brennen, Kribbeln oder Taubheit zwischen der dritten und vierten Zehe oder das Gefühl, auf einem Kieselstein oder einer zusammengeknüllten Socke zu laufen. Der Schmerz wird in engen Schuhen und beim Gehen schlimmer. Den Schuh auszuziehen und den Vorfuß zu reiben, bringt oft eine vorübergehende Linderung. Anders als bei einer allgemeinen Metatarsalgie ist der Schmerz nervenartig, kein dumpfer Schmerz.',
    },
    {
      q: 'Was ist der Unterschied zwischen Morton-Neurom und Metatarsalgie?',
      a: 'Metatarsalgie ist ein weiter Begriff für Schmerzen unter dem Fußballen. Das Morton-Neurom ist eine bestimmte Ursache unter diesem Oberbegriff. Metatarsalgie ist eher ein dumpfer bis stechender Schmerz unter den Mittelfußköpfchen. Ein Morton-Neurom verursacht Brennen oder Kribbeln zwischen den Zehen, meist zwischen der dritten und vierten, und kann Taubheit auslösen. Eine Fachperson kann beides mit einer körperlichen Untersuchung unterscheiden.',
    },
    {
      q: 'Helfen Mittelfußpelotten beim Morton-Neurom?',
      cites: [CITE.matthewsSR],
      a: 'Mittelfußpelotten direkt hinter den Mittelfußköpfchen spreizen die Knochen und senken den Druck auf den Nerv. Etwa 32\u00A0% der Menschen, die konservativ mit breiteren Schuhen und Pelotte behandelt werden, berichten von einer deutlichen Besserung (Matthews 2019). Die Pelotte muss hinter den Mittelfußköpfchen sitzen, nicht darunter. Sitzt sie zu weit vorn, kann der Schmerz zunehmen.',
    },
    {
      q: 'Helfen Übungen beim Morton-Neurom?',
      a: 'Keine Studie hat Übungen beim Morton-Neurom getestet. Übungen wirken nicht direkt auf den Nerv. Zehenspreizen und die Kräftigung der inneren Fußmuskeln können helfen, die Last im Vorfuß gleichmäßiger zu verteilen, und Wadendehnung senkt die Überlastung des Vorfußes durch eine verkürzte Wade. Das sind Maßnahmen für den Komfort, keine Maßnahmen speziell gegen das Neurom. Andere Schuhe und Pelotten sollten zuerst kommen.',
    },
    {
      q: 'Geht ein Morton-Neurom von allein weg?',
      a: 'Manche merken, dass der Wechsel zu breiteren Schuhen mit niedrigem Absatz reicht, damit die Beschwerden über Wochen bis Monate abklingen. Bei anderen bleibt die Verdickung des Nervs, und die Beschwerden kommen zurück, sobald der Vorfuß zusammengedrückt wird. Die Veränderung selbst bildet sich nicht zurück, aber die Beschwerden lassen sich in den Griff bekommen. Wenn konservative Schritte nach einigen Wochen nicht geholfen haben, kann eine Fachperson mit dir über eine Spritze oder andere Möglichkeiten sprechen.',
    },
    {
      q: 'Helfen Kortisonspritzen beim Morton-Neurom?',
      cites: [CITE.matthewsCochrane],
      a: 'Ein Cochrane-Review von 2024 mit sechs randomisierten Studien fand Belege mit niedriger Vertrauenswürdigkeit, dass Kortison zusätzlich zu einem örtlichen Betäubungsmittel Schmerz oder Funktion im Vergleich zum Betäubungsmittel allein vielleicht nicht verbessert (Matthews 2024). Eine ultraschallgesteuerte Spritze wirkt wahrscheinlich besser als eine ohne Ultraschall. Kortison bringt vielen eine kurzfristige Linderung, aber wiederholte Spritzen bergen Risiken, darunter einen Schwund des Fettpolsters.',
    },
    {
      q: 'Wann muss ein Morton-Neurom operiert werden?',
      cites: [CITE.matthewsCochrane],
      a: 'Über eine Operation wird meist nachgedacht, wenn mehrere Monate konservative Behandlung, also andere Schuhe, Pelotten und ein oder zwei Spritzen, keine dauerhafte Linderung gebracht haben. Der häufigste Eingriff ist die Neurektomie, die Entfernung des verdickten Nervenabschnitts. Sie lindert bei vielen den Schmerz, hinterlässt aber eine dauerhafte Taubheit zwischen den betroffenen Zehen.',
    },
    {
      q: 'Was löst ein Morton-Neurom aus?',
      a: 'Ein Morton-Neurom wird durch alles ausgelöst, was den Nerv zwischen den Mittelfußknochen zusammendrückt. Häufige Auslöser sind schmale oder spitze Schuhe, hohe Absätze, Sport mit vielen Stößen wie Laufen und Fußformen wie Plattfüße oder Hohlfüße, die mehr Druck nach vorn verlagern. Es ist bei Frauen und im mittleren Alter häufiger.',
    },
    {
      q: 'Was ist der Mulder-Test beim Morton-Neurom?',
      a: 'Der Mulder-Test, manchmal auch Mulder-Klick genannt, ist eine körperliche Untersuchung, mit der eine Fachperson die Diagnose Morton-Neurom stützt. Dabei wird der Vorfuß seitlich zusammengedrückt, während zwischen den Mittelfußköpfchen Druck ausgeübt wird. Ein tastbares Klicken oder Schnappen zusammen mit dem bekannten brennenden Schmerz spricht für die Diagnose, aber andere Ursachen müssen trotzdem ausgeschlossen werden.',
    },
    {
      q: 'Ist Gehen gut bei einem Neurom am Fuß?',
      a: 'Gehen selbst schadet dem Nerv nicht, aber enge Schuhe oder dünne Sohlen beim Gehen können den Druck im Vorfuß erhöhen und die Beschwerden verstärken. Kurze Spaziergänge in breiten, gedämpften Schuhen sind meist in Ordnung. Längere Strecken auf hartem Boden oder in schmalen Schuhen verstärken oft das Brennen oder Kribbeln zwischen den Zehen. Wenn Gehen immer wieder Beschwerden auslöst, hilft ein Schuhwechsel meist mehr als weniger Bewegung.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz ständig da ist, auch in Ruhe, und nicht nur beim Gehen oder in Schuhen',
      'eine Taubheit auch zwischen den Schmerzphasen nicht weggeht',
      'der Schmerz sich über die dritte und vierte Zehe hinaus auf einen größeren Teil des Vorfußes ausgebreitet hat',
      'oben auf dem Fuß eine sichtbare Schwellung ist, was eher auf etwas anderes als ein Neurom hindeutet',
      'die Beschwerden nach zwei bis drei Wochen mit breiteren Schuhen und Mittelfußpelotte nicht besser geworden sind',
      'du auch in beiden Füßen oder weiter oben am Bein Brennen oder Kribbeln hast, was eher auf eine periphere Neuropathie als auf ein örtlich begrenztes Neurom hindeuten kann',
      'du Diabetes, ein vermindertes Gefühl in den Füßen oder eine schlechte Durchblutung hast',
      'der Schmerz nach einer plötzlichen Verletzung oder einem Schlag auf den Vorfuß angefangen hat',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist für Plantarfasziitis und Plattfüße gebaut, nicht für das Morton-Neurom. Aber die Vorfußübungen in der App, darunter Zehenspreizen und Wadendehnung, setzen an derselben Lastverteilung im Vorfuß an, die zu den Beschwerden eines Neuroms beiträgt. Wenn du beim Check-in den Fußballen als schmerzend markierst, nimmt die App Zehenspreizen und die Plantarfaszien-Dehnung in deine Einheit auf.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito stellt keine Diagnose beim Morton-Neurom. Die Übungen darin sind Maßnahmen für Komfort und Lastverteilung. Breitere Schuhe, Mittelfußpelotten und eine fachliche Einschätzung sollten zuerst kommen.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Morton-Neurom',
  campaign: 'guide-mortons-de',
};
