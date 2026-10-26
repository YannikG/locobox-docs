---
id: todo
title: Manuelle Nacharbeit (Doku)
description: Offene Punkte für Menschen, keine automatische Generierung.
unlisted: true
---

# Manuelle Nacharbeit

Diese Liste ergänzt die Qualitätssicherung aus dem Nutzerhandbuch-Workflow. Einträge nach Bedarf abhaken oder streichen.

**Abgleichsbasis:** locobox2 **v2.1.0** (`4ea3cfa4`). Nicht den Feature-Branch-Tip verwenden.

- [ ] **UI-Wortlaut:** Schaltflächen- und Menübezeichnungen gegen die App am Tag `v2.1.0` prüfen (ohne technische Details zu dokumentieren).
- [ ] **Neue Features:** Nach Produktreleases kurz prüfen, ob `docs/` und `sidebars.ts` noch zur Bedienung passen.

### Nachzug Release v2.1.0 (Priorität)

- [ ] `zuege/zuege.md` + `zuege-komposition.md`: Kartenraster, Zugangaben, Bezeichnung sperren/freigeben, Lean-Filter (Name / LüP / Artikelanzahl).
- [ ] `papierkorb/papierkorb.md` + `zuege/zuege.md`: Züge soft-delete, Register **Züge**, Wiederherstellen (alte «endgültig gelöscht»-Aussage entfernen).
- [ ] `premium/abonnement.md` (+ ggf. `nutzung.md` / `premium.md`): Planwahl **monatlich** / **jährlich**, Intervallwechsel, Kundenportal.
- [ ] `artikel/artikel-massenbearbeitung.md`: Kategorien gratis wählbar; Labels Premium; Premium-Hinweis an App-Text anpassen.
- [ ] `artikel/artikel-liste.md`: Filter-Autocomplete Lager **Standort**, **Regal**, **Schachtel** (Anzeigespalten oft aus).
- [ ] Eingebettete Artikeltabellen: Kategorienamen erwähnen (Zug-Komposition, Neueste Artikel, Decoder verknüpft).

## Screenshots

Ablage einheitlich unter `static/img/handbuch/<bereich>/`, im Markdown mit `![Beschreibender Alt-Text](/img/handbuch/<bereich>/<name>.webp)` einbinden. Immer eine Leerzeile vor dem Bild. Alt-Text auf Deutsch, beschreibt den Bildschirm (Barrierefreiheit). Konsistent aufnehmen: Sprache de-CH, helles Design, sensible Daten anonymisieren, einheitliche Annotationen (Kästchen/Nummern).

### Tier 1: Kernflüsse (zuerst)

- [ ] `uebersicht/uebersicht.md`: Dashboard Register **Übersicht** (drei Kennzahlenkarten inkl. Monatsaktivität + «Neueste Artikel»), Register **Finanzen** und Register **Datenqualität** (Problemtypen + Detailtabelle).
- [ ] `artikel/artikel-liste.md`: Artikelliste mit Toolbar; Filterbereich hervorheben, Tabelle/Karten-Umschalter zeigen.
- [ ] `artikel/artikel-bearbeiten.md`: Bearbeitungsformular; je ein Bild der relevanten Abschnitte (Allgemein, Kategorien, Decoder, Finanzen, Lager, Bilder).
- [ ] `decoder/decoder.md`: Bearbeitungsansicht mit den drei Registern **Übersicht/Funktionsmatrix/Konfiguration**; Fehlersymbol am Register hervorheben.
- [ ] `generelles/globale-suche.md`: Suchdialog offen (Platzhalter im Eingabefeld, gemischte Trefferliste).
- [ ] `papierkorb/papierkorb.md`: vier Register + Badge mit Gesamtzahl, Spalten «Gelöscht am» / «Tage bis zur endgültigen Löschung».

### Tier 2: Funktionen mit Optionen

- [ ] `drucken/adressliste.md`: Auswahlseite (Tabelle mit Auswahl) + Beispiel-PDF.
- [ ] `drucken/verkaufsliste.md`: die vier Assistenten-Schritte (Schrittleiste sichtbar).
- [ ] `drucken/sammlungsverzeichnis.md`: Optionsseite (Deckblatt-Felder) + Beispiel-Deckblatt-PDF.
- [ ] `drucken/drucken-qr-code.md`: Einstellungen («Inhalt auf dem Etikett», «QR Code Grösse») + QR-Raster-PDF.
- [ ] `artikel/artikel-detailansicht.md`: Artikel-Detailansicht mit Bildern, Kartenraster und verknüpften Zügen.
- [ ] `artikel/artikel-labels.md`: Labels-Seite (Tabelle Label/Artikel) + farbige Chips am Artikel.
- [ ] `artikel/artikel-sets.md`: Set-Formular mit Registern Allgemein/Finanzen/Lager + Neuberechnungs-Dialog sowie Set-Detailansicht.
- [ ] `decoder/decoder.md`: Decoder-Detailansicht mit Stammdaten und verknüpften Artikeln.
- [ ] `decoder/decoder-liste.md`: Decoder-Liste mit Filterpanel und hervorgehobener mehrfach verwendeter Adresse.
- [ ] `decoder/decoder-adressen.md`: Protokoll, freie Adressvorschläge und Verfügbarkeits- oder Warnhinweis.
- [ ] `decoder/decoder-konfiguration.md`: CV-Tabelle + Dialog zum Erfassen eines Konfigurationseintrags sowie separate Bit-Ansicht.
- [ ] `decoder/decoder-funktionsmatrix.md`: Funktionsmatrix-Tabelle (F0/F1…, Funktionsart, Vorlagen-Auswahl).
- [ ] `decoder/decoder-voreinstellungen.md`: Liste der Voreinstellungen mit Zeilenaktionen.
- [ ] `zuege/zuege-komposition.md`: Zug-Detailansicht mit Komposition, Vorschau und Zuglänge über Puffer.
- [ ] `einstellungen/einstellungen.md`: Einstellungs-Seitenleiste (Gruppen Konto/Sprache und Design/Premium/Sammlung/Über).

### Tier 3: Onboarding und Premium

- [ ] `generelles/generelles-anmelden.md`: Anmeldebildschirm (Karte **Anmelden**, Wege E-Mail/Passwort + Google, «Passwort vergessen»).
- [ ] `generelles/generelles-erste-schritte.md`: Karte **Locobox anpassen** + Assistent (Schritte Sprache/Währung/Artikeltabelle/App installieren/Premium).
- [ ] `generelles/app-installieren.md`: Assistent-Schritt **App installieren** (Chromium mit **Jetzt installieren**) und Benutzermenü-Eintrag **App installieren**.
- [ ] `drucken/drucken-uebersicht.md`: Hub mit vier Karten und Schaltfläche **Erstellen**.
- [ ] `einstellungen/nutzung.md`: Premium-Seite (**Aktueller Plan**, **Nutzung nach Bereich** mit Balken).
- [ ] `kategorien/kategorien.md`: Kategorien-Liste + Dialog «Neu Kategorien».
- [ ] `artikel/artikel-csv-import.md`: Assistent-Screens (Datei, Zuordnung mit beiden Registern, Vorschau-Tabelle, Ausführen).
