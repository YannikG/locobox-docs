---
id: artikel-csv-import
title: CSV-Import
description: Artikel aus einer CSV-Datei importieren mit Dateiauswahl, Spaltenzuordnung und Vorschau.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# CSV-Import

Über den **CSV-Import** erstellen Sie viele neue Artikel auf einmal aus einer CSV-Datei.

**Wo:** Hauptmenü **Artikel** → **CSV importieren**.

Die Oberfläche führt Sie in vier Schritten: **Datei**, **Zuordnung**, **Vorschau** und **Ausführen**. Unten können Sie das Fenster über **Schliessen** beenden oder mit **Vorschau erstellen** und **Import starten** fortfahren.

<LimitsPlanNote />


## 1\. Datei

- Wählen Sie eine gültige **CSV**-Datei über **CSV auswählen** (nur eine Datei gleichzeitig).
- Die erste Zeile muss die **Spaltenüberschriften** enthalten. Leere Datenzeilen werden ignoriert.
- Nach erfolgreicher Auswertung erscheint der Name der gewählten Datei («Ausgewählte Datei»).

Unter **CSV-Format Hilfe** sind die gültigen Eingaben zusammengefasst (Sie gelten entsprechend in der CSV):

- **Pflicht:** In jeder importierten Zeile müssen **Hersteller** und **Artikelnummer** befüllt sein.
- **Ja/Nein:** z.&nbsp;B. `ja` / `nein`, ebenfalls gültig: `true` / `false`, `1` / `0`, `yes` / `no`.
- **Zahlen:** Punkt oder Komma als Dezimaltrenner (z.&nbsp;B. `329.90` oder `329,90`).
- **Daten:** bevorzugt **TT.MM.JJJJ** (Schweizer Schreibweise).
- **Land:** zweistelliger ISO-Code (z.&nbsp;B. CH, DE, FR). Für historische Fälle gilt z.&nbsp;B. DDR&nbsp;=`DD`, Sowjetunion&nbsp;=`SU`, Jugoslawien&nbsp;=`YU`.
- **Stromsystem:** Text oder Zahlen-Codes wie in der Hilfe («Andere», «DC», «AC» usw.).
- **Massstab:** nur **Textcodes** wie `H0`, `N`, `Z` usw.; keine reinen Zahlen-IDs. Leer lassen, wenn unbekannt.
- **Verpackung** und **Zustand**: erlaubte Texte oder Codes gemäss Hilfeliste (OVP, Gebraucht usw.).

Konnte die Datei nicht gelesen oder verstanden werden, erscheint die Meldung **Die CSV-Datei konnte nicht verarbeitet werden.**

## 2\. Zuordnung

Hier entscheiden Sie, welche CSV-Spalte zu welchem Artikel-Feld gehört, wo ein **Konstantwert** für alle Zeilen gilt, und welche Spalten ignoriert werden.

- **Automatik:** Bekannte englische und deutsche Überschriften (z.&nbsp;B. «Hersteller», «Manufacturer») werden bei Bedarf bereits beim Hochladen vorgeschlagen.
- Register **CSV-Spalten**: Pro Spaltenüberschrift wählen Sie das **Zielfeld** oder **Diese Spalte ignorieren**.
- Register **Verbleibende Felder**: Felder ohne verknüpfte CSV-Spalte können auf **Konstante** (fester Text für alle Zeilen) oder **Ignorieren** gestellt werden. Wo **Konstante** gewählt ist, gehört ein Wert in die Spalte **Konstante**.

Die Pflichtfelder **Hersteller** und **Artikelnummer** müssen sinnvoll befüllt sein (über eine Spalte oder einen Konstantwert).

Hinweise in der Zuordnung:

- **In der Zuordnung fehlen Pflichtfelder**, wenn Hersteller oder Artikelnummer noch nicht korrekt zugewiesen sind.
- **Pflicht-CSV-Spalten enthalten … leere Werte**, wenn für eine Zuordnung vorkommende Zeilen dort leer wären. In diesem Fall ist **Vorschau erstellen** bis zur Korrektur nicht möglich.

## 3\. Vorschau

Nach **Vorschau erstellen** sehen Sie jede Datenzeile mit **Hersteller**, **Artikelnummer**, **Validierung** (gültig oder ungültig) und **Zeilenfehler**.

Ungültige Zeilen (z.&nbsp;B. unzulässige Zahlen, Daten oder Auswahlcodes) blockieren den Start: Es erscheint ein Hinweis, wie viele Zeilen betroffen sind (**… Zeilen enthalten Validierungsfehler**). Korrigieren Sie die CSV oder die Zuordnung und erzeugen Sie die Vorschau erneut.

## 4\. Ausführen

**Import starten** legt die gültigen Vorschauzeilen nacheinander als **neue Artikel** an.

- Während des Laufs sehen Sie den Fortschritt (verarbeitete und aktuelle Zeile).
- Schlägt eine Zeile endgültig fehl, stoppt der Import (**Import bei Zeile … fehlgeschlagen**) mit Angabe der betroffenen Zeile und der Ursache. Bereits verarbeitete Zeilen bleiben gespeichert.
- Nach Erfolg bestätigt die Meldung, **wie viele Zeilen importiert** wurden; zusätzlich erscheint eine kurze Erfolgsmeldung in der App.

Bilder, Decoder und Kategorien werden durch den CSV-Import **nicht** gesetzt; diese pflegen Sie bei Bedarf anschliessend am einzelnen Artikel.

Importierte Artikel zählen gegen dieselben Grenzen wie manuell erfasste Einträge; Einzelheiten stehen unter [Nutzung](../einstellungen/nutzung.md).

Weitere Bedienungshilfen: [Artikel](artikel.md), [Artikelseite zum Bearbeiten](artikel-bearbeiten.md).
