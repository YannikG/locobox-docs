---
sidebar_position: 10
id: artikel-externer-import
title: Artikel aus externer Quelle importieren
description: Artikeldaten über externe Weblinks übernehmen und nach Prüfung als neue Artikel speichern.
---

# Artikel aus externer Quelle importieren

Über spezifische Weblinks (beispielsweise aus Modellbahnkatalogen, Community-Datenbanken oder Fachhandelsseiten) lassen sich Artikelstammdaten direkt in Locobox übernehmen.

**Merkmale des Links:** Die URL enthält strukturierte Parameter zu Hersteller und Artikelnummer sowie optionale Detailinformationen wie Typ oder Modellbezeichnung.

## Ablauf des Imports

1. Den Importlink der externen Quelle aufrufen.
2. Liegt keine aktive Anmeldung vor, leitet das System zum Login weiter und führt nach erfolgreicher Authentifizierung automatisch zum Import zurück.
3. Auf der **Übersicht** öffnet sich ein Dialogfenster mit den ausgelesenen Daten.
4. Nach Durchsicht der Attribute leitet die Schaltfläche **Weiter zum Formular** in die vorausgefüllte Erfassungsmaske weiter.
5. Allfällige Angaben im Formular ergänzen und den Datensatz über **Speichern** sichern.

**Wichtig:** Ein neuer Sammlungsartikel entsteht erst durch das finale **Speichern** im Formular. Der Vorschau-Dialog führt keine Schreiboperationen durch. Der Hinweis im Dialog lautet: «Sie können den Artikel danach im Formular prüfen und bearbeiten. Es wird nichts automatisch gespeichert.».

## Vorschau-Dialog

Das Fenster trägt den Titel **Übermittelte Angaben** und führt die übergebenen Felder auf:

| Feld | Verarbeitung |
| ---- | ------------ |
| **Hersteller** | Wird in das Formular übernommen (Pflichtfeld) |
| **Artikelnummer** | Wird in das Formular übernommen (Pflichtfeld) |
| **Setnummer** | Optional |
| **Typ** | Optional |
| **Betriebsnummer** | Optional (im Link als Modellnummer) |
| **Eigentümer** | Optional (im Link als Betreiber) |
| **Land** | Optional |
| **Mindestradius** | Optional, Massangabe in **mm** |
| **Länge über Puffer** | Optional, Massangabe in **mm** |

Fehlen **Hersteller** oder **Artikelnummer**, bricht der Ablauf mit der Fehlermeldung «Der Importlink ist unvollständig. Hersteller und Artikelnummer sind erforderlich.» ab.

Die Schaltfläche **Abbrechen** schliesst das Fenster ohne Datenübernahme. Die Anwendung bestätigt den Abbruch mit «Import wurde abgebrochen. Es wurde kein Artikel erstellt.».

## Nachbereitung

Ein über diesen Weg angelegter Artikel unterliegt denselben Funktionen wie manuell erfasste Bestände: Bearbeitung von Stammdaten, Hochladen von Bildern sowie Verknüpfung mit Decodern oder Zügen (siehe [Artikel bearbeiten](artikel-bearbeiten.md)).

## Systemgrenzen

- Der Import beschränkt sich auf tabellarische Stammdaten. Medien, Decoder, Kategorien und Finanzdaten werden im Formular nachgepflegt.
- Die Erfassungsmaske weist auf externe Quellen hin, beispielsweise über Meldungen wie «Quelle: Community. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.» oder «Quelle: Externer Import. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.».

## Verwandte Dokumente

- [Artikel](artikel.md): Zentrale Artikelübersicht
- [Artikel bearbeiten](artikel-bearbeiten.md): Maske zur Artikelbearbeitung
- [Artikel per CSV importieren](artikel-csv-import.md): Sammelimport via CSV-Datei
