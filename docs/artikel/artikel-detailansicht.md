---
sidebar_position: 2
id: artikel-detailansicht
title: Artikeldetails ansehen
description: Artikel nur lesen, mit Bildern, Karten zu Allgemein, Rollmaterial, Modell, Decoder, Finanzen, Lager, verknüpften Zügen und Metadaten.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikeldetails ansehen

Die Detailansicht eines Artikels ist eine reine Leseansicht: Hier prüfen Sie alle gespeicherten Angaben, ohne sie direkt auf dieser Seite zu bearbeiten.
Sie öffnen sie über die [Artikelliste](artikel-liste.md) (**Ansehen** oder Kartenklick) oder über Verweise aus anderen Bereichen.

Überblick: [Artikel](artikel.md). Änderungen nehmen Sie in der [Bearbeitungsansicht](artikel-bearbeiten.md) vor.

<LimitsPlanNote />


## Toolbar

Die Überschrift setzt sich aus **Hersteller** und **Artikelnummer** zusammen.

Schaltflächen:

- **Zurück**
- **Duplizieren** (Sicherheitsabfrage «Sind Sie sicher, dass Sie diesen Artikel duplizieren möchten?»; Dialogtitel **Duplizieren**. Nach dem Bestätigen öffnet sich die Detailansicht des neuen Artikels.)
- **Bearbeiten** öffnet das Formular.
- **Löschen** öffnet die Bestätigung «Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?» Ist der Artikel noch mit einem Zug verknüpft, ist das direkte Löschen nicht möglich: Die Meldung lautet «Dieser Artikel ist noch mit einem Zug verknüpft und kann nicht gelöscht werden.»

Nach dem Löschen finden Sie den Eintrag bei Bedarf im [Papierkorb](../papierkorb/papierkorb.md).

## Inhalt von oben nach unten

1. **Bilder**: **Hauptbild** und ggf. **Gespiegeltes Bild**, soweit vorhanden.
2. Karten im Raster (auf grösseren Bildschirmen zwei Spalten):
   - **Allgemein**: **Hersteller**, **Artikelnummer**, ggf. **Set-Artikelnummer** mit Sprung zum [Artikelset](artikel-sets.md), **Kategorien**, zugewiesene [Labels](artikel-labels.md) als farbige Chips (oder **Keine**), **Verpackung**, **Massstab**.
   - **Rollmaterial**: **Eigentümer**, **Typ**, **Betriebsnummer**, **Vollständige Fahrzeugnummer** (**UIC** oder **Manuell**), **Farbe**, **Land**, **Epoche**.
   - **Modell Details**: **Stromsystem**, **Mindestradius**, **Kupplung**, **Länge über Puffer**, **Breite**, **Höhe** (Masse in **mm**), sowie **Dokumentlinks**, falls erfasst.
   - **Decoder**: Tabelle der verknüpften Decoder mit der Möglichkeit, in die Decoder-Ansicht zu wechseln (siehe [Decoder](../decoder/decoder.md)).
   - **Finanzen**: **Kaufdatum**, **Kaufpreis**, **Zustand**, **Gekauft bei**, Verkaufsstatus **Verkauft** (**Ja** / **Nein**), ggf. **Verkaufspreis**, **Verkaufsdatum**, **Verkauft an**. Ist der Artikel verkauft und noch einem Zug zugeordnet, erscheint der Hinweis «Dieser Artikel ist noch mit einem Zug verknüpft».
   - **Lager**: **Lagerort**, **Regal**, **Box**.
3. **Verknüpfte Züge**: Liste der Züge, in denen der Artikel vorkommt, mit Sprung zur [Zug-Ansicht](../zuege/zuege.md).
4. **Metadaten**: Begleitinformationen zum Datensatz (Lesen).

## Grenzen und Querverweise

- Gelöschte [Kategorien](../kategorien/kategorien.md) können weiterhin am Artikel sichtbar sein; die Oberfläche weist mit dem Hinweis «Diese Kategorie ist gelöscht und wird in den Kategorien nicht mehr aufgelistet.» darauf hin.
- Zum Duplizieren siehe [Artikel duplizieren](artikel-duplizieren.md).
