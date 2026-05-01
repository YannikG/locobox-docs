---
id: decoder-konfiguration
title: Konfiguration
description: Schlüssel-Wert-Einträge am Decoder ergänzen, bearbeiten, löschen und speichern; Bit-Ansicht aus Nutzersicht.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Konfiguration

Liste von **Schlüssel-Wert**-Einträgen (oft CV-bezogen): Schlüssel als Identifier, Wert als Zahl oder Text.

Zuordnung der Funktionstasten (F0, F1 und so weiter): [Funktionsmatrix](./decoder-funktionsmatrix.md).

<LimitsPlanNote />


## Wo und Speichern

1. Decoder öffnen.
2. **Bearbeiten** wählen.
3. Tab **Konfiguration** öffnen.

Neue und geänderte Einträge werden erst beim **Speichern** in der **Bearbeitungsansicht** übernommen ([Decoder-Bearbeitung](./decoder.md#bearbeitungsansicht)).

## Eintrag hinzufügen

**Eintrag hinzufügen** → Schlüssel und Wert eintragen → Dialog bestätigen.

## Eintrag ändern

In der Liste für die Zeile **Bearbeiten** wählen → anpassen → Dialog bestätigen.

## Eintrag löschen

Für die Zeile **Entfernen** wählen und eine allenfalls angezeigte Sicherheitsabfrage bestätigen.

- Doppelte Schlüssel sind nicht erlaubt.
- Fehlender oder ungültiger Schlüssel: Speichern ist bis zur Korrektur nicht möglich.

## Bit-Ansicht

In der Bit-Ansicht wird der **Wert** eines Eintrags als **einzelne Bits** dargestellt. Pro Bit können Beschriftungen oder Bedeutungen sichtbar sein, je nach Eintrag und Datenhaltung.

Die Bits lassen sich dort auslesen; Anpassungen können in dieser Darstellung auf der Ebene einzelner Bits erfolgen, soweit die Oberfläche das zulässt.

Zurück zur Übersicht [Decoder](./decoder.md).
