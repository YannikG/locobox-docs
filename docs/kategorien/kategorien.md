---
id: kategorien
title: Kategorien
description: Kategorien helfen, Artikel schneller zu finden und gezielt zu filtern.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Kategorien

Mit **Kategorien** lassen sich [Artikel](../artikel/artikel.md) nach Themen ordnen.

**Wo:** Hauptmenü **Sammlung** → **Kategorien**.

<LimitsPlanNote />


## Liste

{/* SCREENSHOT_TODO /img/handbuch/kategorien/kategorien-liste.png : Kategorien-Liste mit den Spalten und der Dialog «Neu Kategorien» */}

Die Seite zeigt alle aktiven Kategorien in einer Tabelle mit den Spalten:

- **Name** (sortierbar)
- **Beschreibung**
- **Verknüpfte Artikel** (Anzahl aktiver Artikel)
- **Zuletzt aktualisiert** (sortierbar)
- **Aktionen**

Über die Toolbar erreichen Sie **Zurück** und **Neu**. Sind noch keine Kategorien vorhanden, erscheint «Keine Kategorien gefunden.»

## Kategorie anlegen oder bearbeiten

1. **Neu** öffnet den Dialog mit dem Titel **Neu Kategorien**.
2. **Name** ist Pflicht (Hinweis «Name ist erforderlich.»). **Beschreibung** ist optional.
3. Mit **Speichern** legen Sie die Kategorie an, mit **Abbrechen** verwerfen Sie den Dialog.

Zum Anpassen einer bestehenden Zeile wählen Sie **Bearbeiten** (Dialogtitel **Bearbeiten Kategorien**), ändern **Name** oder **Beschreibung** und speichern.

Neue und geänderte Kategorien stehen anschliessend in den Kategorie-Auswahlen am Artikel und in den Filtern der [Artikelliste](../artikel/artikel-liste.md) zur Verfügung.

## Verknüpfte Artikel anzeigen

Bei einer Kategorie mit mindestens einem verknüpften Artikel öffnet **Verknüpfte Artikel anzeigen** die Artikelliste, gefiltert auf diese Kategorie.

## Löschen und Papierkorb

Solange noch aktive Artikel mit der Kategorie verknüpft sind, bleibt **Löschen** deaktiviert. Der Hinweis lautet: «Diese Kategorie ist noch einem oder mehreren Artikeln zugeordnet. Entfernen Sie die Zuordnung bei allen Artikeln, bevor Sie die Kategorie löschen.»

Sind keine aktiven Artikel mehr verknüpft, können Sie die Kategorie löschen. Sie wird zuerst in den [Papierkorb](../papierkorb/papierkorb.md) verschoben und kann dort wiederhergestellt werden.
