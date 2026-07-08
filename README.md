# Musik & Code — Strudel-Kurs

Ein Lernmodul, das **Programmiergrundlagen spielerisch über Live-Coding-Musik** vermittelt.
Zielgruppe: Migrantinnen und Migranten / Einsteiger ohne Vorwissen. Sprache: **einfaches
Deutsch (A2/B1)**.

Jedes der 9 Kapitel koppelt ein hörbares Musik-Erlebnis an genau **ein** Programmierkonzept:

| # | Kapitel | Konzept |
|---|---------|---------|
| 1 | Dein erster Beat | Ein Befehl |
| 2 | Text in Anführungszeichen | String (Text) |
| 3 | Die Liste | Sequenz / Liste |
| 4 | Funktionen aufrufen | Funktion + Argument |
| 5 | Namen geben | Variable |
| 6 | Zahlen als Werte | Zahl + Parameter |
| 7 | Reihenfolge zählt | Methoden-Kette |
| 8 | Gleichzeitig spielen | Parallelität |
| 9 | Hall und Echo | Effekte |
| 10 | Andere Sounds | Auswahl aus einer Bibliothek |
| 11 | Abwechslung | Veränderung über Zeit |
| 12 | Dein eigenes Stück | Freies Projekt |

## Technik

- **Vite + React 18**, Hash-Router, kein Backend. Statisches SPA.
- Der Live-Editor ist das Web-Component **`<strudel-editor>`** aus
  [`@strudel/repl@1.3.0`](https://codeberg.org/uzu/strudel) (via unpkg, Version gepinnt).
- Der React-Wrapper (`src/components/StrudelEditor.jsx`) erzeugt das Element imperativ und
  übergibt den Startcode per `code`-Attribut. Wichtig: die Web-Component rendert ihren
  Editor als **Geschwister-Element** in `parentElement` – deshalb kapselt sie ein
  Host-`<div>`, das beim Unmount komplett geleert wird.
- Strudels globales Visualizer-Canvas (`#test-canvas`) ist per CSS ausgeblendet, damit es
  das Layout nicht überlagert.
- Inhalte liegen in `src/data/chapters.js` (leicht erweiterbar / später übersetzbar).

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3030/strudel-kurs/
```

Der Editor lädt Strudel + Klang-Samples von einem CDN – es braucht also **Internet** und
einen ersten **Klick auf ▶** (Browser erlaubt Audio erst nach einer Nutzer-Aktion).

## Standalone starten (Docker Hub)

Das Image läuft **eigenständig an der Web-Wurzel** – kein Traefik, kein Sub-Pfad nötig:

```bash
docker run -p 8080:80 dadalama/strudel-kurs:latest
# -> http://localhost:8080/
```

Oder mit dem beiliegenden Compose:

```bash
docker compose up -d      # baut lokal, http://localhost:8080/
```

Der Editor lädt Strudel + Samples zur Laufzeit von öffentlichen CDNs (unpkg, GitHub) –
im Betrieb ist also **Internet** nötig. Das Image selbst ist nur die statische App (~150 kB).

### Base-Pfad (wichtig fürs Verteilen)

`base` ist über das Build-Argument `BASE` steuerbar:

| Ziel | Build | Ergebnis |
|------|-------|----------|
| Standalone / Docker Hub | `docker build .` (Default `BASE=/`) | läuft an `/` |
| Hinter einem Reverse-Proxy im Unterpfad | `docker build --build-arg BASE=/strudel-kurs/ .` | läuft an `/strudel-kurs/` |

## Deploy auf lernmodule.dirk-schulenburg.net

Eigener Container hinter Traefik (Muster wie `bos-mathe`). Vom Repo-Root des Docker-Monorepos:

```bash
./deploy-strudel-kurs.sh
```

Das Skript packt den Quellcode, lädt `docker-compose-strudel-kurs.yml` hoch (setzt
`BASE=/strudel-kurs/`), baut das Image auf dem Server und prüft die URL. Danach erreichbar
unter `lernmodule.dirk-schulenburg.net/strudel-kurs/`.

## Erweitern

- **Neues Kapitel:** einen Eintrag in `src/data/chapters.js` ergänzen (id, emoji, title,
  concept, intro[], bridge{music,code}, editors[{code}], tasks[], tip).
- **Mehrsprachig:** die Texte in `chapters.js` sind zentral – für DE/EN/UA/AR später eine
  Sprach-Ebene analog zu `bos-mathe/src/i18n/strings.js` einziehen.
