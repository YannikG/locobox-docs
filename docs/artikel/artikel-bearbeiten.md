---
id: artikel-bearbeiten
title: Artikel bearbeiten
description: Neues Artikel-Formular und Bearbeitung, Abschnitte Allgemein bis Bilder, Speichern, Abbrechen, typische Prüfmeldungen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel bearbeiten

Das **Artikelformular** nutzen Sie zum **Erfassen** neuer Artikel und zum **Bearbeiten** bestehender. Eine bestehende Bearbeitung öffnen Sie aus der [Liste](artikel-liste.md) über **Bearbeiten** oder aus der [Detailansicht](artikel-detailansicht.md) ebenfalls über **Bearbeiten**. Neu starten Sie über **Neu** auf der Artikelliste.

Grundlagen und Verknüpfungen: [Artikel](artikel.md).

<LimitsPlanNote />


## Titelzeile

- Beim **neuen** Artikel lautet die Überschrift **Neu**, beim Bearbeiten **Bearbeiten**.

## Nur beim neuen Artikel

- Schalter **Nach dem Speichern auf diesem Formular bleiben**: Bleibt er aktiv, bleiben nach dem Speichern die meisten Artikelangaben und Bilder für den nächsten Datensatz erhalten; **Decoder-Verknüpfungen** werden dabei jeweils zurückgesetzt (laut Hinweistext in der App).

Kann die Seite aus einem **externen Import** oder der **Community** vorbefüllt worden sein, erscheint ein **Info-Hinweis** mit dem Wortlaut zur Quelle (z.&nbsp;B. «Quelle: Community …» oder «Quelle: Externer Import …»), damit Sie die Angaben vor dem Speichern prüfen.

## Toolbar

- **Abbrechen** verlässt die Seite (ohne Speichern; bei Änderungen kann eine **Sicherheitsabfrage** erscheinen: «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?»).
- **Speichern** übernimmt die Eingaben, wenn das Formular **gültig** ist. Der Speichern-Button bleibt deaktiviert, solange Pflichtregeln verletzt sind. Nach dem Speichern erscheint eine **Erfolgsmeldung**; bei Problemen eine **Fehlermeldung**.

## Abschnitte des Formulars (Reihenfolge)

Die Bereiche entsprechen den Panel-Überschriften in der Anwendung:

1. **Allgemein**  
   **Hersteller** und **Artikelnummer** sind **Pflicht**. Optional: **Setnummer**. Hersteller wählen oder eingeben Sie wie in der Oberfläche beschrieben (Platzhalter «Hersteller auswählen oder eingeben», «Artikelnummer eingeben»).

2. **Kategorien**  
   Zuordnung zu [Kategorien](../kategorien/kategorien.md) über die Verwaltung in diesem Abschnitt.

3. **Rollmaterial**  
   Felder wie Eigentümer, Typ, Betriebsnummer, Farbe, Land, Epoche (alle optional).

4. **Modell Details**  
   Stromsystem, Massstab, Verpackung, Mindestradius, Kupplung, Masse (Länge über Puffer, Breite, Höhe), **Dokumentlinks** (mehrere Einträge mit Typ, Bezeichnung, URL möglich).

5. **Decoder**  
   Verknüpfung mit bestehenden oder neu erfassten [Decodern](../decoder/decoder.md). Neue Decoder können in diesem Zusammenhang angelegt werden und werden beim Speichern mit dem Artikel verbunden.

6. **Dokumentlinks** (über die volle Breite auf grossen Bildschirmen)  
   Dieselben Einträge wie unter Modell Details lassen sich bearbeiten.

7. **Finanzen**  
   Kaufdatum, Kaufpreis, Zustand, «Gekauft bei», **Verkauft** (Ja/Nein).  
   Wenn **Verkauft** auf Ja steht, sind **Verkaufspreis** und **Verkaufsdatum** erforderlich; fehlt eines, zählt das Formular als ungültig. Liegt das **Verkaufsdatum vor dem Kaufdatum**, erscheint die Meldung «Das Verkaufsdatum darf nicht vor dem Kaufdatum liegen.»  
   Ist der Artikel als verkauft markiert aber noch **Zügen zugeordnet**, weist ein **Warnhinweis** darauf hin, dass Sie trotzdem speichern können.  
   **Kaufpreis** und **Verkaufspreis** dürfen nicht negativ sein.

8. **Lager**  
   Lagerort, Regal, Box.

9. **Bilder**  
   Hauptbild und gespiegeltes Bild: Auswahl und Upload; Entfernen möglich. Neu angekündigte Bilder werden laut Hinweis **erst beim Speichern des Artikels** hochgeladen.

## Typische Prüf- und Fehlermeldungen

- **Pflichtfelder**: Für leere Hersteller- oder Artikelnummer-Felder gilt der generische Hinweis «Dieses Feld ist erforderlich.» (markierte Felder).
- **Speichern trotz anderer Fehler**: Es erscheint eine **Fehlerbenachrichtigung** mit dem Text «Bitte prüfen Sie die markierten Felder vor dem Speichern.»
- **Dokument-URL**: Ungültige oder nicht mit `http://` oder `https://` beginnende Adressen: «Bitte geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.»
- **Bilder**: Fehler beim Hochladen oder bei der Bildverarbeitung werden mit den Meldungen der App beantwortet (z.&nbsp;B. erneuter Upload-Versuch oder einfacheres Bild).

## Datenimport und Massenänderung

- Viele Artikel aus einer Datei: [CSV-Import](artikel-csv-import.md).
- Felder vieler Artikel gleichzeitig: [Artikel Massenbearbeitung](artikel-massenbearbeitung.md).
