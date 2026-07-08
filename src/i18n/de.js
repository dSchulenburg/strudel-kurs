// German bundle — the canonical source. Every other language file mirrors this
// exact shape (same keys, same chapter ids). Text is simple German (A2/B1):
// short sentences, little jargon.
//
// Placeholders: {done}/{total}, {n}, {a}/{b} are filled in at render time — keep
// them verbatim in every translation.

export default {
  ui: {
    brandBadge: 'Musik & Code',
    homeTitle: 'Programmieren lernen – mit Musik',
    homeSub:
      'Mach im Browser deine eigene Musik. Nebenbei lernst du, wie Programmieren funktioniert. Kein Vorwissen nötig. In einfacher Sprache, Schritt für Schritt.',
    start: 'Los geht’s',
    progress: 'Du hast {done} von {total} Kapiteln geöffnet.',
    howtoLabel: 'So funktioniert es:',
    howto:
      'In jedem Kapitel steht ein kleiner Code. Klicke auf ▶ Abspielen und höre zu. Dann ändere den Code und höre, was passiert. Du kannst nichts kaputt machen.',
    chaptersHeading: 'Kapitel',
    cheatsheetHeading: 'Spickzettel',
    cheatsheetSub: 'Die wichtigsten Bausteine auf einen Blick:',
    chapterLabel: 'Kapitel {n}',
    visited: 'besucht',
    footerPre: 'Gebaut mit',
    footerLink: 'Strudel',
    footerPost: '· Ein Lernmodul von Dirk Schulenburg',
    overview: 'Übersicht',
    chapterOf: 'Kapitel {a} / {b}',
    musicLabel: 'In der Musik',
    codeLabel: 'Beim Programmieren',
    tryThis: 'Probier das',
    finish: 'Fertig! Zur Übersicht',
    play: 'Abspielen',
    stop: 'Stopp',
    kbdHintPre: 'Tipp:',
    ctrlKey: 'Strg',
    kbdPlays: 'spielt',
    kbdStops: 'stoppt',
    editorLoading: 'Editor lädt …',
    editorError: 'Der Editor konnte nicht laden. Bist du online? Lade die Seite neu.',
    langLabel: 'Sprache',
  },

  chapters: {
    'erster-beat': {
      title: 'Dein erster Beat',
      concept: 'Ein Befehl',
      intro: [
        'Willkommen! Hier machst du Musik – mit Code.',
        'Code ist ein Befehl. Du sagst dem Computer, was er tun soll.',
        'Klicke unten auf ▶ Abspielen. Du hörst einen Beat. Mit ■ Stopp hältst du an.',
      ],
      bridge: {
        music: 'Du gibst einen Rhythmus vor.',
        code: 'Eine Code-Zeile ist ein Befehl an den Computer.',
      },
      tasks: [
        'Klicke ▶ Abspielen und höre zu.',
        'Ändere sd zu cp. Klicke wieder ▶. Was ist anders?',
        'Die kurzen Wörter sind Trommeln: bd = Bassdrum, hh = Hi-Hat, sd = Snare, cp = Klatschen.',
      ],
      tip: 'Der Ton startet erst nach dem ersten Klick auf ▶. Mit Kopfhörern macht es mehr Spaß.',
    },
    'text-string': {
      title: 'Text in Anführungszeichen',
      concept: 'Text (String)',
      intro: [
        'Schau genau hin: Zwischen den Zeichen " " steht Text.',
        'In fast jeder Programmiersprache heißt Text ein „String".',
        'Der Computer spielt genau die Wörter, die im Text stehen – nicht mehr, nicht weniger.',
      ],
      bridge: {
        music: 'Die Wörter sind deine Noten für die Trommeln.',
        code: 'Text zwischen "…" ist ein String – eine wichtige Sorte von Daten.',
      },
      tasks: [
        'Ändere die Wörter im Text. Zum Beispiel: bd hh hh sd',
        'Schreibe ein Wort falsch, z. B. "bx". Was passiert? Manche Wörter kennt der Computer nicht.',
        'Nur was zwischen "…" steht, wird gespielt.',
      ],
      tip: 'Vergiss die Anführungszeichen nicht. Ohne sie versteht der Computer den Text nicht.',
    },
    'liste-sequenz': {
      title: 'Die Liste',
      concept: 'Sequenz (Liste)',
      intro: [
        'Im Text stehen mehrere Wörter mit Leerzeichen dazwischen.',
        'Das ist eine Liste. Der Computer spielt sie von links nach rechts, eins nach dem anderen.',
        'Mit einem Stern * wiederholst du etwas. bd*4 heißt: die Bassdrum viermal.',
      ],
      bridge: {
        music: 'Eine Reihe von Schlägen, einer nach dem anderen.',
        code: 'Eine Liste (Sequenz): Dinge in einer festen Reihenfolge.',
      },
      tasks: [
        'Mach die Liste länger. Füge mehr Wörter hinzu.',
        'Probier hh*8. Höre den Unterschied zu hh*2.',
        'Mehr Wörter in der gleichen Zeit = jedes Wort wird schneller.',
      ],
      tip: 'Die ganze Liste passt immer in einen Takt. Mehr Dinge = jedes wird kürzer.',
    },
    funktion: {
      title: 'Funktionen aufrufen',
      concept: 'Funktion + Argument',
      intro: [
        's(…) ist eine Funktion. Die Klammern bedeuten: „Mach etwas!"',
        'Was in den Klammern steht, ist das Argument. Es sagt der Funktion, womit sie arbeiten soll.',
        'note(…) ist eine andere Funktion. Sie spielt Töne (eine Melodie) statt Trommeln.',
      ],
      bridge: {
        music: 'Ein Werkzeug, dem du etwas gibst: Trommeln oder Töne.',
        code: 'Eine Funktion mit Klammern (…) ruft eine Aktion auf. Der Inhalt ist das Argument.',
      },
      tasks: [
        'Ändere die Töne. Die Buchstaben c d e f g a b sind Töne.',
        'Probier eine Zahl dahinter: c3 klingt tiefer, c5 klingt höher.',
        'Vergleiche: s("…") macht Trommeln, note("…") macht Melodie.',
      ],
      tip: 'c d e f g a b sind Töne wie die weißen Tasten auf einem Klavier.',
    },
    variable: {
      title: 'Namen geben',
      concept: 'Variable',
      intro: [
        'Manchmal willst du dasselbe mehrmals benutzen.',
        'Dann gibst du ihm einen Namen. Das nennt man Variable.',
        'let beat = "bd hh sd hh" heißt: Merke dir dieses Muster unter dem Namen beat.',
        'Danach benutzt du einfach beat. Änderst du es oben, ändert sich alles.',
      ],
      bridge: {
        music: 'Du gibst deinem Lieblings-Rhythmus einen Namen.',
        code: 'Eine Variable speichert einen Wert unter einem Namen: let name = wert',
      },
      tasks: [
        'Ändere den Text bei beat. Klicke ▶. Der ganze Beat ändert sich.',
        'Der Name darf fast alles sein. Nenne ihn zum Beispiel trommeln.',
        'Wichtig: Erst den Namen erklären (let …), dann benutzen.',
      ],
      tip: 'Ein guter Name sagt, was drin ist – zum Beispiel bass oder rhythmus.',
    },
    zahlen: {
      title: 'Zahlen als Werte',
      concept: 'Zahl + Parameter',
      intro: [
        'Nicht nur Text ist ein Wert. Zahlen auch.',
        '.gain(0.7) macht leiser. 1 ist normal, 0.5 ist halb so laut.',
        '.fast(2) spielt doppelt so schnell, .slow(2) halb so schnell.',
        'Die Zahl in den Klammern steuert, wie stark etwas wirkt.',
      ],
      bridge: {
        music: 'Regler: Lautstärke und Tempo.',
        code: 'Zahlen sind Werte. Als Argument in (…) steuern sie eine Funktion.',
      },
      tasks: [
        'Ändere 0.7 zu 0.3. Höre den Unterschied.',
        'Häng .fast(2) an: s("bd*4").gain(0.7).fast(2)',
        'Text steht in "…". Zahlen NICHT – also 0.7, nicht "0.7".',
      ],
      tip: 'Achtung: Punkt statt Komma. Schreibe 0.5, nicht 0,5.',
    },
    kette: {
      title: 'Reihenfolge zählt',
      concept: 'Methoden-Kette',
      intro: [
        'Du kannst mehrere Befehle aneinanderhängen. Das nennt man eine Kette.',
        'Jeder Punkt . fügt einen Schritt hinzu.',
        '.fast(2).rev() heißt: erst schneller, dann rückwärts (rev = reverse).',
        'Die Reihenfolge ist wichtig – wie ein Rezept: erst dies, dann das.',
      ],
      bridge: {
        music: 'Effekte hintereinander: schneller, dann rückwärts.',
        code: 'Methoden-Kette: Schritte laufen der Reihe nach. Die Reihenfolge zählt.',
      },
      tasks: [
        'Lass .rev() weg. Höre den Unterschied.',
        'Tausche die Reihenfolge: .rev().fast(2).',
        'Häng noch .gain(0.6) an das Ende.',
      ],
      tip: 'Jeder Schritt beginnt mit einem Punkt . und arbeitet mit dem Ergebnis davor.',
    },
    gleichzeitig: {
      title: 'Gleichzeitig spielen',
      concept: 'Parallelität',
      intro: [
        'Bis jetzt lief eine Spur. Jetzt spielen mehrere zusammen.',
        'stack(…) stapelt Spuren übereinander. Alle laufen gleichzeitig.',
        'Trenne die Spuren mit einem Komma , – jede Spur in eine eigene Zeile.',
        'Das Zeichen ~ ist eine Pause (Stille).',
      ],
      bridge: {
        music: 'Eine Band: Bassdrum, Hi-Hat und Clap gleichzeitig.',
        code: 'stack(a, b, c) lässt mehrere Muster parallel laufen.',
      },
      tasks: [
        'Setze mehr ~ ein. Höre, wie Pausen den Rhythmus verändern.',
        'Füge eine Melodie als neue Zeile hinzu: note("c e g").s("sine"),',
        'Nimm eine Spur weg. Höre, was fehlt.',
      ],
      tip: 'Am Ende jeder Zeile ein Komma – nur nach der letzten Spur nicht.',
    },
    effekte: {
      title: 'Hall und Echo',
      concept: 'Effekte',
      intro: [
        'Du kannst Klängen Effekte geben – wie in einem Tonstudio.',
        '.room(0.6) macht Hall. Der Klang wirkt wie in einem großen Raum.',
        '.delay(0.5) macht ein Echo. Der Klang kommt noch einmal zurück.',
        'Auch das sind Funktionen mit einer Zahl: größere Zahl = mehr Effekt.',
      ],
      bridge: {
        music: 'Hall und Echo wie im Tonstudio.',
        code: 'Effekt-Funktionen verändern das Ergebnis, ohne den Kern zu ändern.',
      },
      tasks: [
        'Ändere die Zahl bei .room(). Probier 0.2 und 0.9.',
        'Tausche .room() gegen .delay(0.5). Hörst du das Echo?',
        'Häng beide an: s("bd sd").room(0.4).delay(0.4)',
      ],
      tip: 'Weniger ist oft besser. Zu viel Hall macht alles matschig.',
    },
    sounds: {
      title: 'Andere Sounds',
      concept: 'Auswahl aus einer Bibliothek',
      intro: [
        'Strudel hat viele verschiedene Klänge – nicht nur eine Trommel.',
        '.bank("RolandTR909") wählt eine andere Trommel-Maschine.',
        'Dieselben Wörter (bd, hh, sd) klingen dann ganz anders.',
        'Du wählst also aus einer großen Bibliothek von Sounds aus.',
      ],
      bridge: {
        music: 'Eine andere Trommel-Maschine einstecken.',
        code: 'Aus vielen fertigen Bausteinen einen auswählen.',
      },
      tasks: [
        'Ändere "RolandTR909" zu "RolandTR808". Hörst du den Unterschied?',
        'Lass .bank(…) weg. Wie klingt die Standard-Trommel?',
        'Probier auch "AkaiLinn" oder "CasioRZ1".',
      ],
      tip: 'Groß- und Kleinschreibung ist wichtig: RolandTR909, nicht rolandtr909.',
    },
    abwechslung: {
      title: 'Abwechslung',
      concept: 'Veränderung über Zeit',
      intro: [
        'Bis jetzt hat sich alles jede Runde gleich wiederholt.',
        'Mit spitzen Klammern < > wechselt der Computer ab.',
        's("bd <hh sd>") spielt erst bd + hh, in der nächsten Runde bd + sd.',
        'So wird deine Musik lebendig und langweilt nicht.',
      ],
      bridge: {
        music: 'Jede Runde klingt ein bisschen anders.',
        code: 'Ein Wert, der sich mit der Zeit ändert – Runde für Runde.',
      },
      tasks: [
        'Höre genau hin: Was ändert sich bei jeder Wiederholung?',
        'Setze mehr Sounds in die Klammern: <hh sd cp oh>',
        'Auch Töne gehen: note("c <e g>")',
      ],
      tip: 'Spitze Klammern < > bedeuten: nacheinander, eine pro Runde.',
    },
    'eigenes-stueck': {
      title: 'Dein eigenes Stück',
      concept: 'Freies Projekt',
      intro: [
        'Jetzt kennst du viele Bausteine: Befehl, Text, Liste, Funktion, Variable, Zahl, Kette, gleichzeitig, Effekte, Sounds und Abwechslung.',
        'Hier ist ein kleines, fertiges Stück. Verändere alles, was du willst.',
        'Es gibt kein Falsch. Probier, höre, ändere – so arbeiten Programmierer wirklich.',
      ],
      bridge: {
        music: 'Dein Song.',
        code: 'Dein Programm – gebaut aus vielen kleinen Bausteinen.',
      },
      tasks: [
        'Ändere den bass, z. B. zu "bd ~ bd bd".',
        'Ändere die Melodie in note(…).',
        'Spiel mit .gain(), .fast(), .slow() und .rev().',
        'Wenn dir etwas gefällt: Schreib den Code auf oder mach ein Foto vom Bildschirm.',
      ],
      tip: 'Auf strudel.cc findest du noch viel mehr Sounds und Beispiele.',
    },
  },

  cheatsheet: {
    drums: 'Trommeln spielen',
    melody: 'Melodie (Töne) spielen',
    repeat: 'viermal wiederholen',
    rest: 'Pause (Stille)',
    gain: 'leiser / lauter',
    tempo: 'schneller / langsamer',
    reverse: 'rückwärts',
    stack: 'mehrere gleichzeitig',
    room: 'Hall (Raum-Effekt)',
    delay: 'Echo',
    bank: 'andere Trommel-Maschine',
    alternate: 'abwechseln – eine pro Runde',
  },
};
