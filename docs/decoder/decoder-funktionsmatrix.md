---
sidebar_position: 2
id: decoder-funktionsmatrix
title: Funktionsmatrix bearbeiten
description: Funktionstasten im Decoder definieren, Vorlagen einsetzen und Belegungen per CSV verwalten.
---

# Funktionsmatrix bearbeiten

In der Funktionsmatrix wird festgelegt, welche **Funktionsart** den logischen Funktionstasten zugewiesen ist (beispielsweise **Zeitgesteuert**, **Ein/Aus** oder **Taster**), ergänzt um eine optionale **Beschriftung**.

**Navigation:** Decoder öffnen → **Bearbeiten** wählen → Register **Funktionsmatrix**.

**Speicherung:** Anpassungen werden erst mit dem Betätigen von **Speichern** in der Bearbeitungsmaske wirksam ([Decoder-Bearbeitung](./decoder.md#bearbeitungsansicht)).

Ist die Matrix noch unbesetzt, öffnet das System beim ersten Aufruf dieses Registers automatisch den Dialog **Funktionsvorlage wählen** (einmalig pro Decoder und Sitzung). Das Fenster lässt sich schliessen; die Auswahl bleibt über die Schaltfläche **Vorlage wählen** jederzeit erreichbar.

![Funktionsmatrix-Tabelle mit Funktionstasten (F0, F1 ...), Funktionsart und Beschriftung](/img/handbuch/decoder/funktionsmatrix.webp)

## Vorlage aus dem Dialog übernehmen

1. Im Register **Funktionsmatrix** auf **Vorlage wählen** klicken.
2. Im Fenster **Funktionsvorlage wählen** nach Bezeichnungen suchen oder die Liste durchblättern.
3. Genau eine Vorlage markieren.
4. Mit **Vorlage übernehmen** bestätigen.

Der Auswahldialog stellt zwei Register bereit: **Systemvorlagen** und **Meine Voreinstellungen**.

Enthält die Matrix bereits Einträge, blendet das System die Sicherheitsabfrage **Vorlage ersetzen?** ein, da bestehende Belegungen überschrieben werden. Bei einer leeren Matrix erfolgt die Übernahme direkt.

## Vorlage vor dem Übernehmen prüfen

Über das Augensymbol in der jeweiligen Zeile des Dialogs lässt sich eine Vorschau der Vorlage einblenden. Dies erlaubt die Kontrolle der Funktionsbelegungen vor der Zuweisung. Anschliessend erfolgt die Übernahme über **Vorlage übernehmen**.

## Funktionstaste ergänzen

Im Register **Funktionsmatrix** legt **Weitere Taste** die nächste unbesetzte Taste am Listenende an (Standardeinstellung: **Ein/Aus**).

Über das Menü neben der Schaltfläche erlaubt **Position wählen…** das Einfügen einer Taste an einer definierten Position innerhalb der Reihe.

## Zeilen anpassen oder entfernen

In jeder Tabellenzeile lässt sich die **Funktionsart** aus der Liste wählen und bei Bedarf eine **Beschriftung** hinterlegen (Platzhalter: **Optionale Beschriftung**).

Über die Zeilenaktion **Löschen** wird eine Funktionstaste nach Bestätigung der Abfrage **Taste entfernen** aus der Matrix gelöscht.

## CSV-Export und CSV-Import

Im Register **Funktionsmatrix** der Bearbeitungsmaske steht die Option **CSV** bereit:

- **CSV exportieren:** Lädt die aktuelle Matrix als CSV-Datei herunter (Spalten **Funktion**, **Funktionsart** und optional **Beschriftung**). Für alle Tarife nutzbar.
- **CSV importieren:** Ermöglicht das Hochladen einer Datei inklusive Spaltenzuordnung und Voransicht. Der Import überschreibt den bestehenden Entwurf nach Bestätigung einer Rückfrage.

Importierte Belegungen werden erst nach Betätigung von **Speichern** in der Bearbeitungsansicht fest gesichert.

## Eigene Voreinstellungen (Premium)

Die Aktion **Als Voreinstellung speichern** steht in der Detailansicht (nicht während der Bearbeitung) im Register **Funktionsmatrix** für den zuletzt gesicherten Zustand bereit. Nach Eingabe einer Bezeichnung speichert Locobox die Vorlage im Benutzerkonto.

Abonnenten vorbehalten:

- Eigene Voreinstellungen sichern, umbenennen und löschen
- Nutzung des Registers **Meine Voreinstellungen** im Auswahldialog

Im Gratisplan stehen die Systemvorlagen sowie der CSV-Austausch bereit; der Zugriff auf eigene Voreinstellungen verweist auf die Tarifoptionen.

### Voreinstellungen verwalten

Gespeicherte Vorlagen werden auf der Seite [Funktionsmatrix-Voreinstellungen](./decoder-voreinstellungen.md) verwaltet (Menü **Sammlung** → **Decoder** → **Funktionsmatrix-Voreinstellungen**): Ansicht, **Vorschau** sowie bei aktivem Premium **Umbenennen** und **Löschen**.

## Systemvorlagen und eigene Vorlagen

Im Dialog **Funktionsvorlage wählen**:

- **Systemvorlagen:** Werksseitig hinterlegte Standardvorlagen für alle Konten.
- **Meine Voreinstellungen:** Individuell gespeicherte Matrizen (Auswahl und Bearbeitung erfordern Premium).

Zurück zur Übersicht: [Decoder](./decoder.md).
