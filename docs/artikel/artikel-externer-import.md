---
sidebar_position: 10
id: artikel-externer-import
title: Artikel aus externer Quelle importieren
description: Artikel-Daten aus einem externen Link übernehmen und als neuen Artikel speichern, mit Vorschau und manueller Freigabe.
---

# Artikel aus externer Quelle importieren

Über einen speziellen Link (z. B. von einer Datenbank oder einem Shop) können Sie Artikel-Daten direkt in Locobox übernehmen, ohne alles neu einzutippen.

**So erkennen Sie den Link:** Er enthält Daten zu Hersteller und Artikelnummer sowie optional weitere Angaben wie Typ oder Modellbezeichnung.

## Ablauf

1. Klicken Sie auf den Import-Link von der externen Quelle.
2. Falls Sie noch nicht angemeldet sind, werden Sie zum Login weitergeleitet. Nach der Anmeldung gelangen Sie automatisch zurück zum Import.
3. Auf der **Übersicht** erscheint ein Dialog mit den übermittelten Angaben.
4. Prüfen Sie die Angaben. Mit **Weiter zum Formular** gelangen Sie zum neuen Artikel-Formular, das mit den Daten vorausgefüllt ist.
5. Ergänzen oder korrigieren Sie die Angaben nach Bedarf und speichern Sie den Artikel manuell.

**Wichtig:** Erst wenn Sie im Artikel-Formular **Speichern** wählen, wird ein neuer Eintrag in Ihrer Sammlung angelegt. Im Vorschau-Dialog passiert noch nichts. Der Hinweis im Dialog lautet: «Sie können den Artikel danach im Formular prüfen und bearbeiten. Es wird nichts automatisch gespeichert.»

## Vorschau-Dialog

Der Dialog trägt den Titel **Übermittelte Angaben** und zeigt die aus dem Link gelesenen Felder:

| Feld | Beschreibung |
| ---- | ------------ |
| **Hersteller** | Wird ins Formular übernommen (Pflicht) |
| **Artikelnummer** | Wird ins Formular übernommen (Pflicht) |
| **Setnummer** | Optional |
| **Typ** | Optional |
| **Betriebsnummer** | Optional (im Link als Modellnummer) |
| **Eigentümer** | Optional (im Link als Betreiber) |
| **Land** | Optional |
| **Mindestradius** | Optional, in **mm** |
| **Länge über Puffer** | Optional, in **mm** |

Fehlen **Hersteller** oder **Artikelnummer**, erscheint die Fehlermeldung «Der Importlink ist unvollständig. Hersteller und Artikelnummer sind erforderlich.» und der Import wird nicht fortgesetzt.

Mit **Abbrechen** schliessen Sie den Dialog, ohne etwas anzulegen. Es erscheint der Hinweis «Import wurde abgebrochen. Es wurde kein Artikel erstellt.»

## Nach dem Import

Der neue Artikel verhält sich wie jeder andere manuell erfasste Artikel. Sie können ihn bearbeiten, Bilder hinzufügen, mit Decodern oder Zügen verknüpfen. Siehe [Artikel bearbeiten](artikel-bearbeiten.md).

## Grenzen

- Der Import übernimmt nur vorausgefüllte Werte. Alle weiteren Angaben (Bilder, Decoder, Kategorien, Finanzen) pflegen Sie wie gewohnt im Artikel-Formular.
- Die Quelle wird im Formular als Hinweis angezeigt, zum Beispiel «Quelle: Community. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.» oder «Quelle: Externer Import. Bitte prüfen Sie die Angaben sorgfältig vor dem Speichern.»

## Verwandte Themen

- [Artikel](artikel.md): Übersicht
- [Artikel bearbeiten](artikel-bearbeiten.md): Formular nach Import anpassen
- [Artikel per CSV importieren](artikel-csv-import.md): mehrere Artikel auf einmal importieren
