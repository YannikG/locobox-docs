# Begriffe und Wortschatz (Locobox Nutzerdoku)

Diese **kontrollierte Wortschatzliste** gilt für neue und überarbeitete Seiten unter `docs/` (Nutzerperspektive, Schweizer Deutsch). Sie ergänzt [best-practices.md](best-practices.md).

**Anwenden**

- Wo die Oberfläche **keinen** feststehenden Ausdruck vorgibt, die Begriffe aus dieser Liste nutzen und Seiten untereinander abgleichen.
- Steht ein Begriff **wortgleich** in der App (Menüpunkt, Schaltflächentitel, Tooltip, Registerkarte), hat die **UI** Vorrang, auch wenn die erste Spalte einen anderen Arbeitstitel empfiehlt.

**Ausrichtung**

- Nutzer können Text und Layout am Gerät wiederfinden; umgangssprachliche Varianten («oben im Fenster», «auf dem Handy», «Masken», «read-only») vermeiden, wo sie mit sichtbarer Navigation kollidieren.

**Ton**

- Keine leeren Füllwörter («wie gewohnt», «gewohnterweise», «selbstverständlich», vage «in der Regel», «üblicherweise»). Lieber **konkret** schreiben, was wo passiert, oder den **UI-Wortlaut** übernehmen.

---

## Oberflächenaufbau und Gerät

| Verwenden | Vermeiden / nicht mischen | Erläuterung |
|-----------|---------------------------|-------------|
| **Toolbar** (Erklärwort in der Doku; kommt **nicht** als festes UI-Label vor) | «Kopfzeile», «obere Leiste», «aktions-Leiste», frei erfundene Metallabels ohne UI-Bezug | Gemeint ist die Leiste mit typischen Aktionen wie **Zurück**, **Neu** oder **Neuer …**, **Bearbeiten**, **Speichern**, **Abbrechen**, **Globale Suche** oder Menüzugriff auf **Einstellungen**. Die Übersetzungsdatei spricht diese Einzelaktionen über `common.*` und Navigation aus; das Wort «Toolbar» nur dort verwenden, wo die Doku bereits so strukturiert ist und Leserinnen und Leser die Gleichsetzung kennen. |
| **Desktop** und **Mobile** (oder Kontext wie «auf grossen Bildschirmen», «auf schmalen Bildschirmen») | Nur «mittlere Bildschirmbreite», «kleine Geräte», «Breakpoints» ohne Nutzerbezug | Technische Breakpoint-Formulierungen höchstens in Klammern oder wenn die App genau so kommuniziert. Für Aufgaben reicht die Unterscheidung gross / schmal. |
| **Hauptmenü** oder **über … im Menü** | «Navbar», «Sidebar» als Fachwort, Routing-Pfade wie `/settings`, URL-Parameter wie `?tab=…`, Formulierungen wie «Direktlink in der Adresszeile» in Fliesstext (Ausnahmen nur wo ausdrücklich vereinbart) | Navigation aus Nutzersicht. Technische Routen und Abfrageketten interessieren Endnutzerinnen und Endnutzer in der Bedienhilfe nicht; Registerkarten **benennen** statt verlinkbar zu technisieren. |

---

## Navigation und Kopfzeilen (Auszug UI-Wortlaut)

Die Menübezeichnungen folgen `navigation.*` in der Übersetzungsdatei (Schweizer Variante **de-CH**): **Übersicht**, **Sammlung**, **Stammdaten**, **Artikel**, **Artikelliste**, **Artikel Massenbearbeitung**, **Züge**, **Decoder**, **Kategorien**, **Drucken**, **Globale Suche**, **Einstellungen**, **Papierkorb**.

| Kontext | Verwenden (wie in der UI) | Vermeiden / Hinweis |
|---------|---------------------------|---------------------|
| Listenkopf Artikel | **Artikel Liste** (`articles.listTitle`) | Das alleingeschriebene «Artikelliste» nur dort, wo der **Menüpunkt** gemeint ist (`navigation.articlesList`). Beides nicht beliebig vertauschen. |
| Bereich Drucken | **Drucken** als Menüpunkt; Unterseiten **Adressliste**, **QR Code Raster** | «Reports», «Ausdruck-Hub», frei gewählte PDF-Titel statt App-Kartenüberschrift |
| Decoder-Detailtitel | **Decoder Details** (`decoders.details`) | Nur «Decoder», wenn die Kopfzeile oder der Kontext das Detail nicht meint |

---

## Häufige Schaltflächen und Aktionen (`common`)

| Verwenden | Vermeiden / nicht mischen | Erläuterung |
|-----------|---------------------------|-------------|
| **Abbrechen**, **Speichern**, **Bearbeiten**, **Löschen**, **Erstellen**, **Duplizieren**, **Zurück**, **Schliessen**, **Bestätigung** | Englische Pendant-Titel im Handbuch, wenn die Schaltfläche deutsch ist | Direkt aus `common.*`; gleicher Wortlaut in Schrittfolgen und Screenshots-Beschriftungen. |
| **Neu** / **Neuer …** | Überall nur «Neu», wenn die UI geschlechtsspezifisch **Neuer Decoder** usw. zeigt | `common.new` bzw. `common.newMale` (z. B. Decoder-Erstellung). Kontext aus UI übernehmen. |
| **Suchen** | Navigation oder Feature mit **Globale Suche** verwechseln | **Suchen** (`common.search`) ist oft die Schaltfläche oder Feldkontext in Listen; der Menüpunkt und das Dialogfeld heissen **Globale Suche** (`navigation.search`, `globalSearch.title`). |
| **Filter**, **Kein Filter**, **Anwenden**, **Zurücksetzen** | Listenfilter als «Suche» bezeichnen | `common.filter`, `common.noFilter`, `common.apply`, `common.clear`. |

---

## Listen, Detail und Bearbeiten

| Verwenden | Vermeiden / nicht mischen | Erläuterung |
|-----------|---------------------------|-------------|
| **Artikelliste** (Menü) / **Artikel Liste** (Seitenkopf) | Verwechslung mit einer beliebigen «Artikel-Tabelle», «Sammlungsliste» ohne Namen der App | Kontext für den Bereich **Artikel** mit filterbarer Tabelle oder Karten. Siehe auch `docs/artikel/artikel-liste.md`. |
| **Detailansicht** | Gleichberechtigt nebeneinander: «read-only view», «Lesemodus», «nur Ansicht», «Datenblatt», «View» | Hauptbegriff für die Ansicht ohne direktes Bearbeiten auf dieser Seite. Zusätzlich «reine **Leseansicht**» sparsam, wenn das Leseverhalten betont werden soll. Ein Satz genügt. |
| **Bearbeiten** (Schaltfläche / Aktionsname) und **Formular** (Maske beim Erfassen oder Ändern) | Unklares «Editor», «Bearbeitungsmodus» ohne Bezug zur Schaltfläche; Englisch **Edit** im Fliesstext | Bei **Artikeln**, **Zügen** und vergleichbaren Datensatzseiten: **Bearbeiten** öffnet das **Formular** (wie in bestehenden Artikeldokumenten). Analogie für neue Module übernehmen. |
| **Bearbeitungsansicht** | Vermischung mit **Formular**, wenn das Modul in der App und Doku bereits **Bearbeitungsansicht** heisst (**Decoder**) | Bei **Decodern** ist **Bearbeitungsansicht** etabliert (`decoder.md`); dort nicht durch «Formular» ersetzen, ausser die UI benennt sich um. |
| **Bearbeitungsansicht** vs **Bearbeitungsscreen** | Beide synonym nebeneinander in einem Absatz ohne Grund | Innerhalb Decoder-Dokus **Bearbeitungsansicht** durchgängig; «Bearbeitungsscreen» in älteren Abschnitten schrittweise angleichen (gleicher Sachverhalt: Speichern dort). |
| **Zug erstellen** / **Zug bearbeiten** | «Neuen Zug» ohne Verb wie in der UI | Formulartitel aus `trains.form.*`. |

---

## Suche und Filter

| Verwenden | Vermeiden / nicht mischen | Erläuterung |
|-----------|---------------------------|-------------|
| **Globale Suche** (grossgeschrieben als Feature); im Satz auch «die globale Suche» | Produkt- oder Projekt-Codenames als Leserwort («Spotlight»), interne Arbeitstitel («Smart Search») | Zentraler Dialog für Artikel, Kategorien, Decoder, Züge (Placeholder in der UI: «Suche über Artikel, Kategorien, Decoder und Züge…»). Kurzbezug möglich: **die Suche** im Kontext, wenn klar ist, dass nicht die Listenfilter gemeint sind. |
| **Filter** (ein-/ausklappbarer Bereich **Filter**) | «Suche» oder «Suchfilter», wenn keine Suche gemeint ist, oder beides synonym verwenden | Filter **begrenzt** Einträge in der aktuellen Liste; die globale Suche **sucht quer** durch mehrere Bereiche. Beides klar unterscheiden. |
| **Trefferliste** / **Liste** im Kontext | «Result set», «Query-Ergebnisse» | Nutzersprache für Suchausgaben und gefilterte Tabelleninhalte. |

---

## Weitere häufige Paare im Repo

| Verwenden | Vermeiden / nicht mischen | Erläuterung |
|-----------|---------------------------|-------------|
| **Papierkorb** | «Soft delete», «Recycle Bin», «Archiv», oder so tun, als lägen **alle** Objekttypen dort | Nur Inhalte, die die App im Papierkorb führt (**Artikel**, **Kategorien**, **Decoder**). **Züge** dort **nicht**; das explizit festhalten wie in `docs/papierkorb/papierkorb.md`. |
| **Ansehen** vs **anzeigen** | Alles auf eine Form erzwingen | Die Standardschaltfläche heisst **Ansehen** (`common.view`). Verknüpfungstexte nutzen eingebettetes «anzeigen» (z. B. **Verknüpfte Artikel anzeigen**). Hilfstexte sprechen von «… werden angezeigt». Im Handbuch dieselbe Rolle wie die Oberfläche wählen (Schaltfläche vs Fliesstext). |
| **Übersicht** (Startseite, Menüpunkt) | Jedes Auflistungsdiagramm ohne Kontext ebenfalls «Übersicht» ohne Zusatz | **Übersicht** ist auch der **Dashboard**-Menübereich (`uebersicht.md`). Bei Zuglisten «Übersicht» nur nutzen, wenn es mit dem sichtbaren Wortlaut übereinstimmt und keine Verwechslung mit dem Start‑Dashboard droht. |
| **Massenbearbeitung** vs «über die Liste» | «Batch API», oder Massenbearbeitung als Synonym zum Formular eines einzelnen Datensatzes | Menü und Dialogtitel **Artikel Massenbearbeitung**; Bestätigung **Massenbearbeitung anwenden**. Änderungen an einem Datensatz laufen über Liste → **Bearbeiten** / **Formular**. |
| **Decoder**‑**Liste** oder **Zugliste** | Generisches «die Liste», wenn mehrere Kontexte möglich sind | Bei Querverweisen den Bereich mit benennen, damit klar bleibt, welche Toolbar und Zeilenaktionen gelten. |
| **Registerkarte** / **Tab** | «Pane», «Rubrik» ohne UI-Parallel | Decoder: **Übersicht**, **Funktionsmatrix**, **Konfiguration** (`decoders.tabs`). Dashboard: **Übersicht**, **Finanzen** (`dashboard.tabs`). |
| **Komposition** | Nur «Übersicht», wenn die UI den Zugbereich **Komposition** meint | Feld- und Abschnittslabel bei **Zügen** (`trains.fields.articles`, `trains.sections.composition`). |
| **Neu anordnen** | «Sortieren», wenn die Schaltfläche **Neu anordnen** zeigt | Zug-Komposition (`trains.actions.reorder`). |
| **Einstellungen** | «Settings-Seite» mit Slug oder technischem Pfad als Standardformulierung | Menüpunkt **Einstellungen**; Unterbereiche **Konto**, **Nutzung**, **Anzeigeeinstellungen**. Unter «Anzeige» u. a. **Artikel Anzeige Einstellungen** und **Globale Suche Anzeige Einstellungen** (Schreibweise wie in der Übersetzungsdatei). |
| **E-Mail und Passwort** sowie **Google** als Anmeldewege | **Apple**, weitere Social- oder Firmen-Login-Namen, «unterstützte Anbieter» pauschal | Stand Produkt: nur diese **zwei** Wege; in `docs/` nicht so tun, als lägen weitere Optionen bereit. UI kann **Sign in with Google** wörtlich übernehmen. |
| **PDF erzeugen** | «PDF generieren», «Export», wenn die UI «erzeugen» nutzt | Druckdialoge Adressliste und QR-Raster (`reports.addressList.generatePdf`, `reports.qrCodeGrid.generatePdf`). |
| **Wiederherstellen** (im Kontext Papierkorb) | «Undelete», «Revert» | Aktionswort wie in Nutzerinnen-Workflows beschrieben. |

---

## Pflege

- Bei UI-Umbauten diese Datei zusammen mit betroffenen `docs/`-Seiten aktualisieren.
- Bei Widersprüchen zwischen Liste und Produkt gilt die Oberfläche; die Liste dokumentiert dann die **Ausnahme** («zu prüfen» in Arbeitsnotizen wie in Best Practices beschrieben).

### Abgleich mit Übersetzungsdateien

- **Gelesen:** `../locobox2/public/i18n/de-CH.json` (einziges deutschsprachiges UI-Bundle im App-Repo; kein separates `de.json`).
- **Stand:** Abgleich mit dem Dateiinhalt per manuelle Auswertung am **1. Mai 2026** (bei grösseren UI-Änderungen erneut stichprobenartig prüfen).
