---
sidebar_position: 3
id: artikel-bearbeiten
title: Artikel bearbeiten
description: Erfassungsmaske und Bearbeitung von Artikeln von Allgemein bis Bilder, Validierung und typische Systemmeldungen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel bearbeiten

Das Artikelformular dient der Neuerfassung sowie der Pflege bestehender Datensätze. Der Aufruf erfolgt aus der [Artikelliste](artikel-liste.md) oder aus der [Detailansicht](artikel-detailansicht.md) über die Schaltfläche **Bearbeiten**. Die Neuerfassung startet über **Neu** in der Artikelliste (**Sammlung** → **Artikelliste**).

Grundlagen und Verknüpfungen: [Artikel](artikel.md).

<LimitsPlanNote />

## Kopfbereich

- Bei der Neuerfassung lautet die Überschrift **Neu**, bei bestehenden Datensätzen **Bearbeiten**.

## Optionen bei der Neuerfassung

- Schalter **Nach dem Speichern auf diesem Formular bleiben**: Bei aktivem Schalter bleiben nach dem Speichern Artikelangaben und Bilder für die Erfassung eines Folgeartikels vorausgefüllt. Bestehende **Decoder**-Verknüpfungen werden dabei zurückgesetzt. Der Hinweistext lautet: «Nach dem Speichern bleiben dieselben Artikelangaben und Bilder erhalten, um einen weiteren Artikel zu erfassen. Decoder-Verknüpfungen werden jeweils zurückgesetzt.» Bei inaktivem Schalter öffnet sich nach dem Speichern direkt die Detailansicht des neu angelegten Artikels.
- Wurde das Formular über einen externen Import oder aus der Community vorbefüllt, weist eine Hinweismeldung auf die Datenquelle hin, beispielsweise «Quelle: Community. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.» oder «Quelle: Externer Import. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.».

## Symbolleiste

- **Zurück** und **Abbrechen** verlassen das Formular. Liegen ungespeicherte Eingaben vor, erscheint die Sicherheitsabfrage «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?».
- **Speichern** sichert die Daten, sobald alle Pflichtfelder korrekt befüllt sind. Die Schaltfläche bleibt deaktiviert, solange Validierungsfehler vorliegen. Nach erfolgreicher Sicherung erscheint eine Bestätigungsmeldung.

## Abschnitte des Formulars

![Artikelformular mit den Abschnitten Allgemein, Kategorien, Decoder, Finanzen, Lager und Bilder](/img/handbuch/artikel/artikel-formular.webp)

Die Abschnitte entsprechen den Bereichen in der Anwendung:

1. **Allgemein**  
   **Hersteller** und **Artikelnummer** sind Pflichtangaben.  
   Über den Bereich **Artikelset** lässt sich der Artikel über **Bestehendes Set verknüpfen** oder **Set erstellen** einem [Artikelset](artikel-sets.md) zuordnen. Bei bestehender Verknüpfung stehen **Set wechseln**, **Set-Verknüpfung lösen** sowie **Finanzen vom Set übernehmen** und **Lager vom Set übernehmen** bereit.  
   Ebenfalls in diesem Abschnitt befindet sich das Feld **Verpackung**.

2. **Kategorien**  
   Zuordnung zu [Kategorien](../kategorien/kategorien.md) über das Mehrfachauswahlfeld (Platzhalter **Kategorien auswählen**). Ohne Zuordnung erscheint «Keine Kategorien verknüpft.».  
   Im selben Abschnitt lassen sich unter **Labels** über **Labels auswählen** farbige [Labels](artikel-labels.md) hinterlegen (maximal fünf Labels pro Artikel; Hinweis «Maximal 5 Labels pro Artikel.»). Mit Premium erlaubt **Erstellen** das direkte Anlegen eines neuen Labels im Dialog **Neues Label erstellen**.

3. **Rollmaterial**  
   Optionale Angaben wie **Eigentümer**, **Typ**, **Betriebsnummer**, **Vollständige Fahrzeugnummer**, **Farbe**, **Land** und **Epoche**.  
   Für die **Vollständige Fahrzeugnummer** stehen drei Betriebsarten zur Auswahl:  
   - **UIC:** Eingabe der ersten elf Ziffern; die zwölfte Prüfziffer berechnet das System automatisch. Hinweistexte: «Geben Sie 11 Ziffern ein. Die Prüfziffer wird automatisch ergänzt.» sowie «Die UIC-Prüfziffer ist ungültig.».  
   - **Manuell:** Freitextfeld für abweichende Nummernsysteme.  
   - **Keine:** Entfernt die vollständige Fahrzeugnummer.

4. **Modell Details**  
   Technische Parameter wie **Stromsystem**, **Massstab**, **Mindestradius**, **Kupplung** sowie Abmessungen (**Länge über Puffer**, **Breite**, **Höhe**, jeweils in **mm**).

5. **Decoder**  
   Verknüpfung mit vorhandenen oder neuen [Decodern](../decoder/decoder.md) über **Decoder verknüpfen** oder **Decoder schnell erstellen**. Neu angelegte Decoder werden beim Speichern des Artikels fest verknüpft.

6. **Dokumentlinks**  
   Verwaltung externer Links mit Angabe von **Dokumenttyp**, **Bezeichnung** und **URL**. Die Schaltfläche **Dokument hinzufügen** öffnet den Erfassungsdialog; bestehende Einträge lassen sich über **Dokumentlink bearbeiten** anpassen. Unterstützte Typen: **Anleitung**, **Garantie**, **Rechnung**, **Eigenes**. Standardhinweis bei leerer Liste: «Noch keine Dokumentlinks erfasst.».

7. **Finanzen**  
   Erfassung von **Kaufdatum**, **Kaufpreis**, **Zustand**, **Gekauft bei** und **Verkauft** (**Ja** / **Nein**).  
   Steht **Verkauft** auf **Ja**, werden **Verkaufspreis** und **Verkaufsdatum** zu Pflichtfeldern. Liegt das Verkaufsdatum zeitlich vor dem Kaufdatum, meldet das System «Das Verkaufsdatum darf nicht vor dem Kaufdatum liegen.».  
   Ist ein als verkauft markierter Artikel noch einem Zug zugeordnet, erscheint die Warnung «Dieser Artikel ist noch mit einem Zug verknüpft. Sie können trotzdem speichern und die Verknüpfung später im Zug entfernen.».  
   Negative Beträge sind für Kauf- und Verkaufspreise unzulässig.

8. **Lager**  
   Standortangaben über **Lagerort**, **Regal** und **Box**.

9. **Bilder**  
   Auswahl und Upload von **Hauptbild** und **Gespiegeltes Bild**. Eine vorgenommene Auswahl lässt sich über **Auswahl entfernen** zurücksetzen. Neu ausgewählte Bilddateien werden gemäss Systemhinweis erst beim Speichern des Artikels übertragen: «Wählen Sie Bilder aus; sie werden beim Speichern des Artikels hochgeladen.».

## Validierungs- und Fehlermeldungen

- **Pflichtfelder**: Leere Pflichtangaben werden mit dem Text «Dieses Feld ist erforderlich.» markiert.
- **Formularfehler beim Speichern**: Bei offenen Validierungsfehlern erscheint die Benachrichtigung «Bitte prüfen Sie die markierten Felder vor dem Speichern.».
- **Dokument-URL**: Ungültige Webadressen quittiert die App mit «Bitte geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.».
- **Bilder-Upload**: Fehler bei Dateigrösse oder Formatierung erzeugen entsprechende Systemmeldungen, beispielsweise «Das Hochladen des Bildes ist fehlgeschlagen. Bitte erneut versuchen.» oder «Das Bild ist zu detailreich für das Limit von 6 KB. Bitte ein einfacheres oder zugeschnittenes Foto verwenden.».

## Datenimport und Sammelbearbeitung

- Import mehrerer Datensätze aus einer Datei: [Artikel per CSV importieren](artikel-csv-import.md).
- Parallele Anpassung mehrerer Artikel: [Artikel in Masse bearbeiten](artikel-massenbearbeitung.md).
- Übernahme externer Webdaten: [Import aus externer Quelle](artikel-externer-import.md).
