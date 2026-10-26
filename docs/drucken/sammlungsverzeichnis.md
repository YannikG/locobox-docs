---
sidebar_position: 3
id: sammlungsverzeichnis
title: Bestandsliste drucken
description: PDF-Inventar aller unverkaufte Artikel mit Deckblatt für Versicherungen oder Zollbehörden.
---

# Bestandsliste drucken

In der Anwendung heisst dieser Bericht **Bestandsliste**. Er erzeugt ein vollständiges PDF-Inventar aller unverkaufte Modelle mitsamt offiziellem Deckblatt für Versicherungs- oder Zollnachweise.

Die Beschreibung in der App lautet: «PDF-Inventar aller nicht verkauften Artikel mit Deckblatt für Versicherung oder Zoll.».

## Voraussetzungen

Die Bestandsliste erfordert ein aktives Premium-Abonnement. Im Gratisplan verweist die Funktionskarte auf die Upgrade-Möglichkeiten (siehe [Premium und Gratisplan](../premium/premium.md)).

## Berichtskonfiguration

Über **Drucken** → **Bestandsliste** öffnet sich die Konfigurationsseite. Dort lassen sich Deckblatt- und Tabelleneinstellungen definieren. Die Schaltfläche **PDF erzeugen** startet die Erstellung (Dateiname `bestandsliste.pdf`).

Eine manuelle Artikelauswahl entfällt: Alle unverkaufte Artikel werden vollständig in das Dokument übernommen, sortiert nach **Hersteller** und **Artikelnummer**. Optional lässt sich der Umfang über Labels eingrenzen.

Der Hinweistext auf der Konfigurationsseite lautet: «Alle nicht verkauften Artikel werden in das PDF aufgenommen. Optional können Sie Deckblatt-Felder anpassen.».

## Optionen

### Deckblatt

Unter **Optionen** stehen folgende Deckblattfelder zur Verfügung:

- **Name auf dem Deckblatt** (im Dokument als **Sammler** ausgewiesen)
- **Referenz auf dem Deckblatt anzeigen:** Mit **Referenzfeld (Bezeichnung)** (Standard: **Fallnummer**) und **Referenzfeld (Wert)**, beispielsweise für Aktenzeichen von Versicherungen oder Zollstellen
- **Ort für Unterschrift** und **Datum für Unterschrift** (Tagesdatum voreingestellt)

Das Deckblatt umfasst Logo, Dokumenttitel, den Untertitel **Sammlungsinventar für Versicherung oder Zoll**, eine statistische Zusammenfassung (**Anzahl Artikel**, **Gesamtwert der Sammlung**) sowie ein Unterschriftenfeld.

### Tabellenspalten

Standardmässig ausgegebene Spalten:

- **Hersteller**
- **Artikelnummer**
- **Fahrzeug**
- **Kaufpreis**

Zusatzoption: **Kaufdatum-Spalte einschliessen** (standardmässig inaktiv).

Alle Währungswerte richten sich nach der hinterlegten [Anzeigewährung](../einstellungen/waehrung.md).

## Weiterführend

Übersicht aller Berichtsarten: [Berichte drucken](drucken-uebersicht.md).
