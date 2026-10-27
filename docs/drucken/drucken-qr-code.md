---
sidebar_position: 2
id: drucken-qr-code
title: QR Codes drucken
description: PDF-Raster mit QR-Codes zur Kennzeichnung von Verpackungen oder Vitrinen generieren.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# QR Codes drucken

Unter **QR Code Raster** entsteht ein druckfertiges Dokument mit einem Raster aus QR-Codes für ausgewählte Modelle. Dies dient der Vorbereitung von Etiketten oder Vitrinenbeschriftungen, um Modelle per Smartphone-Scan direkt in Locobox aufzurufen.

In der Anwendung lautet der Hinweistext: «Druckbares PDF mit QR-Codes für ausgewählte Artikel in einem Raster.».

Der Zugang erfolgt über [Berichte drucken](drucken-uebersicht.md). Das **QR Code Raster** ist eine Premium-Funktion. Ohne aktiven Tarif verweist die Schaltfläche auf die Optionen für ein Upgrade.

<LimitsPlanNote />

## Artikel auswählen

Der Aufruf erfolgt über **Drucken** → **QR Code Raster**. Die Auswahl der Artikel entspricht dem Vorgehen bei der [Adressliste](adressliste.md): Filter anwenden, Zeilen selektieren. Standardmässig sind unverkaufte Bestände vorausgewählt; mit Premium steht die Einschränkung nach [Labels](../artikel/artikel-labels.md) bereit. Ohne ausgewählten Datensatz unterbindet das System den Export mit dem Hinweis **Wählen Sie mindestens einen Artikel aus.**. Die Zählerzeile informiert über Gesamt- und Auswahltreffer.

## Konfigurationsoptionen

![Einstellungen mit «Inhalt auf dem Etikett» und «QR Code Grösse»](/img/handbuch/drucken/qr-einstellungen.webp)

Unter **Einstellungen** stehen folgende Parameter bereit:

- **Inhalt auf dem Etikett:** Steuert, ob ausschliesslich der QR-Code oder zusätzlich Hersteller und Artikelnummer ausgegeben werden:
  - **Nur QR Code**
  - **QR Code mit Artikeltitel**
- **QR Code Grösse:** Kantenlänge des Codes in Zentimetern. Dies erlaubt die Abstimmung zwischen kompakter Bogenaufteilung und optimaler Scan-Distanz.

## Dokumenterzeugung

Die Schaltfläche **PDF erzeugen** generiert das Dokument und startet den Download. Jeder QR-Code referenziert den jeweiligen Sammlungsartikel, sodass ein Scan mit einem Mobilgerät direkt zur Detailansicht führt.

Ergänzende Abschnitte: [Artikel](../artikel/artikel.md), [Berichte drucken](drucken-uebersicht.md).
