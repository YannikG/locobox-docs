---
id: todo
title: Manuelle Nacharbeit (Doku)
description: Offene Punkte für Menschen, keine automatische Generierung.
unlisted: true
---

# Manuelle Nacharbeit

Diese Liste ergänzt die Qualitätssicherung aus dem Nutzerhandbuch-Workflow. Einträge nach Bedarf abhaken oder streichen.

- [ ] **UI-Wortlaut:** Schaltflächen- und Menübezeichnungen gegen die aktuelle App prüfen (ohne technische Details zu dokumentieren).
- [ ] **Neue Features:** Nach Produktreleases kurz prüfen, ob `docs/` und `sidebars.ts` noch zur Bedienung passen.

## Screenshots

Ablage einheitlich unter `static/img/handbuch/<bereich>/`, im Markdown mit `![Beschreibender Alt-Text](/img/handbuch/<bereich>/<name>.webp)` einbinden. Immer eine Leerzeile vor dem Bild. Alt-Text auf Deutsch, beschreibt den Bildschirm (Barrierefreiheit). Konsistent aufnehmen: Sprache de-CH, helles Design, sensible Daten anonymisieren, einheitliche Annotationen (Kästchen/Nummern).

### Tier 1: Kernflüsse (zuerst)

- [ ] `uebersicht/uebersicht.md`: Dashboard Register **Übersicht** (drei Kennzahlenkarten + «Neueste Artikel») und ein Bild vom Register **Finanzen**.
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
- [ ] `artikel/artikel-labels.md`: Labels-Seite (Tabelle Label/Artikel) + farbige Chips am Artikel.
- [ ] `artikel/artikel-sets.md`: Set-Formular mit Registern Allgemein/Finanzen/Lager + Neuberechnungs-Dialog.
- [ ] `decoder/decoder-liste.md`: Decoder-Liste mit Filterpanel und hervorgehobener mehrfach verwendeter Adresse.
- [ ] `decoder/decoder-adressen.md`: Protokoll, freie Adressvorschläge und Verfügbarkeits- oder Warnhinweis.
- [ ] `decoder/decoder-konfiguration.md`: CV-Tabelle + Dialog zum Erfassen eines Konfigurationseintrags sowie separate Bit-Ansicht.
- [ ] `decoder/decoder-funktionsmatrix.md`: Funktionsmatrix-Tabelle (F0/F1…, Funktionsart, Vorlagen-Auswahl).
- [ ] `decoder/decoder-voreinstellungen.md`: Liste der Voreinstellungen mit Zeilenaktionen.
- [ ] `einstellungen/einstellungen.md`: Einstellungs-Seitenleiste (Gruppen Konto/Sprache und Design/Premium/Sammlung/Über).

### Tier 3: Onboarding und Premium

- [ ] `generelles/generelles-anmelden.md`: Anmeldebildschirm (Karte **Anmelden**, Wege E-Mail/Passwort + Google, «Passwort vergessen»).
- [ ] `generelles/generelles-erste-schritte.md`: Karte **Locobox anpassen** + Assistent (Schritte Sprache/Währung/Artikeltabelle/Premium).
- [ ] `einstellungen/nutzung.md`: Premium-Seite (**Aktueller Plan**, **Nutzung nach Bereich** mit Balken).
- [ ] `kategorien/kategorien.md`: Kategorien-Liste + Dialog «Neu Kategorien».
- [ ] `artikel/artikel-csv-import.md`: Assistent-Screens (Datei, Zuordnung mit beiden Registern, Vorschau-Tabelle, Ausführen).
