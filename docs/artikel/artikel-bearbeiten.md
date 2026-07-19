---
sidebar_position: 3
id: artikel-bearbeiten
title: Artikel bearbeiten
description: Neues Artikel-Formular und Bearbeitung, Abschnitte Allgemein bis Bilder, Speichern, Abbrechen, typische Prüfmeldungen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel bearbeiten

Das Artikelformular nutzen Sie zum Erfassen neuer Artikel und zum Bearbeiten bestehender. Eine bestehende Bearbeitung öffnen Sie aus der [Liste](artikel-liste.md) über **Bearbeiten** oder aus der [Detailansicht](artikel-detailansicht.md) ebenfalls über **Bearbeiten**. Neu starten Sie über **Neu** auf der Artikelliste (**Sammlung** → **Artikelliste**).

Grundlagen und Verknüpfungen: [Artikel](artikel.md).

<LimitsPlanNote />


## Titelzeile

- Beim neuen Artikel lautet die Überschrift **Neu**, beim Bearbeiten **Bearbeiten**.

## Nur beim neuen Artikel

- Schalter **Nach dem Speichern auf diesem Formular bleiben**: Bleibt er aktiv, bleiben nach dem Speichern dieselben Artikelangaben und Bilder für den nächsten Datensatz erhalten; **Decoder**-Verknüpfungen werden dabei jeweils zurückgesetzt. Der Hinweis dazu lautet: «Nach dem Speichern bleiben dieselben Artikelangaben und Bilder erhalten, um einen weiteren Artikel zu erfassen. Decoder-Verknüpfungen werden jeweils zurückgesetzt.»
- Ist der Schalter aus, gelangen Sie nach dem Speichern zur Detailansicht des neuen Artikels.

Kann die Seite aus einem externen Import oder der Community vorbefüllt worden sein, erscheint ein Info-Hinweis mit dem Wortlaut zur Quelle, zum Beispiel «Quelle: Community. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.» oder «Quelle: Externer Import. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.»

## Toolbar

- **Zurück** verlässt die Seite (bei ungespeicherten Änderungen erscheint die Sicherheitsabfrage «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?»).
- **Abbrechen** verlässt die Seite ebenfalls (gleiche Sicherheitsabfrage bei Änderungen).
- **Speichern** übernimmt die Eingaben, wenn das Formular gültig ist. Der Speichern-Button bleibt deaktiviert, solange Pflichtregeln verletzt sind. Nach dem Speichern erscheint eine Erfolgsmeldung; bei Problemen eine Fehlermeldung.

## Abschnitte des Formulars (Reihenfolge)

{/* SCREENSHOT_TODO /img/handbuch/artikel/artikel-formular.png : Artikelformular mit den Abschnitten Allgemein, Kategorien, Decoder, Finanzen, Lager und Bilder */}

Die Bereiche entsprechen den Panel-Überschriften in der Anwendung:

1. **Allgemein**  
   **Hersteller** und **Artikelnummer** sind Pflicht.  
   Optional weisen Sie den Artikel einem [**Artikelset**](artikel-sets.md) zu (Bereichstitel **Artikelset**), über **Bestehendes Set verknüpfen** oder **Set erstellen**. Weitere Aktionen am verknüpften Set: **Set wechseln**, **Set-Verknüpfung lösen**, sowie **Finanzen vom Set übernehmen** und **Lager vom Set übernehmen**.  
   Hier liegt auch das Feld **Verpackung**.

2. **Kategorien**  
   Zuordnung zu [Kategorien](../kategorien/kategorien.md) über die Mehrfachauswahl (Platzhalter **Kategorien auswählen**). Ohne Zuordnung erscheint «Keine Kategorien verknüpft.»  
   Im selben Panel weisen Sie unter **Labels** über **Labels auswählen** farbige [Labels](artikel-labels.md) zu (höchstens 5 pro Artikel; Hinweis «Maximal 5 Labels pro Artikel.»). Mit Premium legen Sie über **Erstellen** direkt ein neues Label an (Dialog **Neues Label erstellen**).

3. **Rollmaterial**  
   Felder wie **Eigentümer**, **Typ**, **Betriebsnummer**, **Vollständige Fahrzeugnummer**, **Farbe**, **Land**, **Epoche** (alle optional).  
   Die **Vollständige Fahrzeugnummer** können Sie in drei Varianten führen:  
   - **UIC:** Sie geben die ersten 11 Ziffern ein; die 12. Prüfziffer wird automatisch berechnet. Unvollständig: «Geben Sie 11 Ziffern ein. Die Prüfziffer wird automatisch ergänzt.» Ungültige Prüfziffer: «Die UIC-Prüfziffer ist ungültig.»  
   - **Manuell:** Freitext für andere Nummernsysteme.  
   - **Keine:** entfernt die vollständige Fahrzeugnummer wieder.

4. **Modell Details**  
   **Stromsystem**, **Massstab**, **Mindestradius**, **Kupplung**, Masse (**Länge über Puffer**, **Breite**, **Höhe**, jeweils in **mm**).

5. **Decoder**  
   Verknüpfung mit bestehenden oder neu erfassten [Decodern](../decoder/decoder.md) (**Decoder verknüpfen**, **Decoder schnell erstellen**). Neue Decoder können in diesem Zusammenhang angelegt werden und werden beim Speichern mit dem Artikel verbunden.

6. **Dokumentlinks** (über die volle Breite auf grossen Bildschirmen)  
   Mehrere Einträge mit **Dokumenttyp**, **Bezeichnung** und **URL**. Mit **Dokument hinzufügen** öffnen Sie den Dialog **Dokumentlink hinzufügen**; bestehende Einträge lassen sich über **Dokumentlink bearbeiten** anpassen. Typen: **Anleitung**, **Garantie**, **Rechnung**, **Eigenes**. Leerzustand: «Noch keine Dokumentlinks erfasst.»

7. **Finanzen**  
   **Kaufdatum**, **Kaufpreis**, **Zustand**, **Gekauft bei**, **Verkauft** (**Ja** / **Nein**).  
   Wenn **Verkauft** auf **Ja** steht, sind **Verkaufspreis** und **Verkaufsdatum** erforderlich. Liegt das **Verkaufsdatum** vor dem **Kaufdatum**, erscheint die Meldung «Das Verkaufsdatum darf nicht vor dem Kaufdatum liegen.»  
   Ist der Artikel als verkauft markiert, aber noch Zügen zugeordnet, erscheint der Warnhinweis «Dieser Artikel ist noch mit einem Zug verknüpft. Sie können trotzdem speichern und die Verknüpfung später im Zug entfernen.»  
   **Kaufpreis** und **Verkaufspreis** dürfen nicht negativ sein.

8. **Lager**  
   **Lagerort**, **Regal**, **Box**.

9. **Bilder**  
   **Hauptbild** und **Gespiegeltes Bild**: Auswahl und Upload; Entfernen mit **Auswahl entfernen**. Neu gewählte Bilder werden laut Hinweis erst beim Speichern des Artikels hochgeladen: «Wählen Sie Bilder aus; sie werden beim Speichern des Artikels hochgeladen.»

## Typische Prüf- und Fehlermeldungen

- **Pflichtfelder**: Für leere Hersteller- oder Artikelnummer-Felder gilt der generische Hinweis «Dieses Feld ist erforderlich.» (markierte Felder).
- **Speichern trotz anderer Fehler**: Es erscheint eine Fehlerbenachrichtigung mit dem Text «Bitte prüfen Sie die markierten Felder vor dem Speichern.»
- **Dokument-URL**: Ungültige oder nicht mit `http://` oder `https://` beginnende Adressen: «Bitte geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.»
- **Bilder**: Fehler beim Hochladen oder bei der Bildverarbeitung werden mit den Meldungen der App beantwortet, zum Beispiel «Das Hochladen des Bildes ist fehlgeschlagen. Bitte erneut versuchen.» oder «Das Bild ist zu detailreich für das Limit von 6 KB. Bitte ein einfacheres oder zugeschnittenes Foto verwenden.»

## Datenimport und Massenänderung

- Viele Artikel aus einer Datei: [Artikel per CSV importieren](artikel-csv-import.md).
- Felder vieler Artikel gleichzeitig: [Artikel in Masse bearbeiten](artikel-massenbearbeitung.md).
- Daten aus einem externen Link: [Import aus externer Quelle](artikel-externer-import.md).
