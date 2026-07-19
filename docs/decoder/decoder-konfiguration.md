---
sidebar_position: 4
id: decoder-konfiguration
title: Decoder konfigurieren
description: Schlüssel-Wert-Einträge am Decoder ergänzen, bearbeiten, löschen und speichern; Bit-Ansicht aus Nutzersicht.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Decoder konfigurieren

Liste von Konfigurationseinträgen (oft CV-bezogen). In der Tabelle heissen die Spalten **CV** und **Wert**. Beim Erfassen heissen die Felder **Schlüssel** und **CV-Wert**.

Zuordnung der Funktionstasten (F0, F1 und so weiter): [Funktionsmatrix](./decoder-funktionsmatrix.md).

<LimitsPlanNote />


## Wo und Speichern

Die Konfiguration bearbeiten Sie im Decoder unter **Bearbeiten**, Register **Konfiguration**. Neue und geänderte Einträge werden erst beim **Speichern** in der Bearbeitungsansicht übernommen ([Decoder-Bearbeitung](./decoder.md#bearbeitungsansicht)).

## Eintrag hinzufügen

**Eintrag hinzufügen** öffnet den Dialog **Konfigurationseintrag hinzufügen**. **Schlüssel** und **CV-Wert** eintragen (Wert als ganze Zahl von 0 bis 255) und mit **Speichern** bestätigen.

Im Dialog erscheint der Wert zugleich als Bitfolge (**Dualzahl (Bitfolge)**). Einzelne Bits lassen sich dort anpassen; der Zahlenwert folgt mit.

## Eintrag ändern

In der Liste für die Zeile **Bearbeiten** wählen. Es öffnet sich **Konfigurationseintrag bearbeiten**. Anpassen und mit **Speichern** bestätigen. Der **Schlüssel** lässt sich beim Bearbeiten nicht mehr ändern.

## Eintrag löschen

Für die Zeile **Löschen** wählen. Die App fragt mit **Eintrag entfernen** nach.

- Doppelte Schlüssel sind nicht erlaubt (**Dieser Schlüssel existiert bereits.**).
- Fehlender Schlüssel: **Bitte einen Schlüssel eingeben.** Speichern ist bis zur Korrektur nicht möglich.

## Bit-Ansicht in der Detailansicht

In der Detailansicht, Register **Konfiguration**, können Sie pro Eintrag die Bitansicht öffnen (Hinweis **CV-Wert als Bits anzeigen.**). Die Ansicht zeigt den gespeicherten Wert als einzelne Bits.

Die Bitansicht in der Detailansicht ist eine Premium-Funktion. Ohne Premium erscheint der Hinweis, dass die Bitansicht Premium ist.

Zurück zur Übersicht [Decoder](./decoder.md).
