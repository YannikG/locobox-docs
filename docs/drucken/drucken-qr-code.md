---
sidebar_position: 2
id: drucken-qr-code
title: QR Codes drucken
description: PDF mit QR-Codes für Artikel erstellen; Etikette und Grösse.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# QR Codes drucken

Unter **QR Code Raster** entsteht ein druckfertiges PDF mit einem Raster aus QR-Codes für ausgewählte Artikel. So bereiten Sie Etiketten oder Aushänge vor, um einen Artikel per Scan mit dem Mobilgerät zu öffnen.

In der App lautet die Kartenbeschreibung: Druckbares PDF mit QR-Codes für ausgewählte Artikel in einem Raster.

Der Einstieg erfolgt über den Bereich **[Berichte drucken](drucken-uebersicht.md)**. **QR Code Raster** ist eine Premium-Funktion. Ohne Premium zeigt die Karte **Premium erforderlich** und öffnet die Paywall.

<LimitsPlanNote />


## Artikel auswählen

Die Seite öffnen Sie über **Drucken** → **QR Code Raster**. Dort wählen Sie Artikel wie bei der **Adressliste** aus: Filter, eine oder mehrere Zeilen markieren. Standardmässig sind nur noch nicht verkaufte Artikel sichtbar; über die Filter grenzen Sie die Treffer weiter ein, mit Premium auch über [Labels](../artikel/artikel-labels.md). Ohne mindestens einen ausgewählten Eintrag lässt sich kein PDF erzeugen; die App weist mit **Wählen Sie mindestens einen Artikel aus.** hin. Oben steht, wie viele passende Einträge es insgesamt gibt und wie viele Sie gewählt haben.

## PDF-Einstellungen

Unter **Einstellungen** legen Sie fest:

- **Inhalt auf dem Etikett**: wählen Sie, ob nur der QR Code oder zusätzlich Hersteller und Artikelnummer gedruckt werden:
  - **Nur QR Code**
  - **QR Code mit Artikeltitel**
- **QR Code Grösse**: Kantenlänge des Symbols in Zentimeter (Bereich und Schrittweite sind auf der Seite beschriftet). Damit lässt sich zwischen kompakterem Raster oder besserer Lesbarkeit beim Scannen wählen.

## PDF erzeugen und nutzen

Die Schaltfläche **PDF erzeugen** erstellt die Datei aus der aktuellen Auswahl und den eingestellten Optionen; anschliessend wird die Datei auf das Gerät heruntergeladen. Der Vorgang lässt sich bei Bedarf nach geänderter Auswahl oder Grösse wiederholen. Jeder QR-Code verknüpft den jeweiligen Artikel dieser Sammlung, sodass beim Scannen mit einem geeigneten Gerät der passende Eintrag geöffnet werden kann.

Siehe auch [Artikel](../artikel/artikel.md) und bei allgemeinem PDF-Überblick [Berichte drucken](drucken-uebersicht.md).
