---
sidebar_position: 2
id: artikel-detailansicht
title: Artikeldetails ansehen
description: Artikelansicht im Lesemodus mit Bildern, Stammdaten, Rollmaterial, Modell, Decodern, Finanzen, Lager, Zügen und Metadaten.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikeldetails ansehen

Die Detailansicht eines Artikels ist eine reine Leseansicht zur Überprüfung aller gespeicherten Angaben ohne direkte Bearbeitung.
Der Aufruf erfolgt über die [Artikelliste](artikel-liste.md) (Schaltfläche **Ansehen** oder Klick auf die Artikelkarte) oder über Querverweise aus anderen Modulen.

Überblick: [Artikel](artikel.md). Anpassungen erfolgen in der [Bearbeitungsansicht](artikel-bearbeiten.md).

<LimitsPlanNote />

## Symbolleiste

Die Überschrift setzt sich aus **Hersteller** und **Artikelnummer** zusammen.

Schaltflächen:

- **Zurück** führt zur vorherigen Ansicht zurück.
- **Duplizieren** öffnet die Sicherheitsabfrage «Sind Sie sicher, dass Sie diesen Artikel duplizieren möchten?». Nach der Bestätigung im Dialog öffnet sich direkt die Detailansicht des neu erzeugten Artikels.
- **Bearbeiten** öffnet die Eingabemaske.
- **Löschen** blendet die Bestätigung «Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?» ein. Ist der Artikel noch Bestandteil eines Zuges, wird das direkte Löschen verwehrt: Die Systemmeldung lautet «Dieser Artikel ist noch mit einem Zug verknüpft und kann nicht gelöscht werden.»

Gelöschte Artikel werden in den [Papierkorb](../papierkorb/papierkorb.md) verschoben und lassen sich von dort wiederherstellen.

## Aufbau der Detailansicht

![Artikel-Detailansicht mit Bildern, Allgemein, Rollmaterial und Decoder-Bereich](/img/handbuch/artikel/artikel-detailansicht.webp)

1. **Bilder**: **Hauptbild** und optional **Gespiegeltes Bild**, sofern vorhanden.
2. Informationskarten im zweispaltigen Raster:
   - **Allgemein**: **Hersteller**, **Artikelnummer**, allfällige **Set-Artikelnummer** mit Verlinkung zum [Artikelset](artikel-sets.md), **Kategorien**, zugewiesene [Labels](artikel-labels.md) als farbige Chips (oder **Keine**), **Verpackung** sowie **Massstab**.
   - **Rollmaterial**: **Eigentümer**, **Typ**, **Betriebsnummer**, **Vollständige Fahrzeugnummer** (**UIC** oder **Manuell**), **Farbe**, **Land** und **Epoche**.
   - **Modell Details**: **Stromsystem**, **Mindestradius**, **Kupplung**, **Länge über Puffer**, **Breite**, **Höhe** (Masse in **mm**) sowie allfällige Dokumentlinks.
   - **Decoder**: Übersicht der verknüpften Decoder mit Direktsprung in die jeweilige Decoder-Ansicht (siehe [Decoder](../decoder/decoder.md)).
   - **Finanzen**: **Kaufdatum**, **Kaufpreis**, **Zustand**, **Gekauft bei**, Verkaufsstatus **Verkauft** (**Ja** / **Nein**), allfälliger **Verkaufspreis**, **Verkaufsdatum** und **Verkauft an**. Ist ein verkaufter Artikel noch einem Zug zugeordnet, weist das System mit dem Text «Dieser Artikel ist noch mit einem Zug verknüpft» darauf hin.
   - **Lager**: **Lagerort**, **Regal** und **Box**.
3. **Verknüpfte Züge**: Auflistung aller Züge, in denen das Modell eingereiht ist, mit Verlinkung zur [Zug-Ansicht](../zuege/zuege.md).
4. **Metadaten**: Technische Zusatzinformationen zum Datensatz (Erstellungsdatum, Änderungsstand).

## Besonderheiten

- Gelöschte [Kategorien](../kategorien/kategorien.md) bleiben am Artikel sichtbar, werden aber mit dem Hinweis «Diese Kategorie ist gelöscht und wird in den Kategorien nicht mehr aufgelistet.» markiert.
- Zur Duplizierfunktion siehe [Artikel duplizieren](artikel-duplizieren.md).
