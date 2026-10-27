---
id: kategorien
title: Kategorien
description: Kategorien zur thematischen Strukturierung und gezielten Filterung von Artikeln.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Kategorien

Mit **Kategorien** lassen sich [Artikel](../artikel/artikel.md) thematisch nach Modellarten oder Sachgebieten strukturieren.

**Navigation:** Hauptmenü **Sammlung** → **Kategorien**.

<LimitsPlanNote />

## Übersichtstabelle

![Kategorien-Liste mit den Spalten und dem Dialog «Neu Kategorien»](/img/handbuch/kategorien/kategorien-liste.webp)

Die Übersichtstabelle führt alle aktiven Kategorien auf:

- **Name** (sortierbar)
- **Beschreibung**
- **Verknüpfte Artikel** (Anzahl aktiver Artikel)
- **Zuletzt aktualisiert** (sortierbar)
- **Aktionen**

Die Symbolleiste enthält **Zurück** und **Neu**. Sind noch keine Kategorien vorhanden, erscheint die Meldung «Keine Kategorien gefunden.».

## Kategorie anlegen oder bearbeiten

1. **Neu** öffnet das Erfassungsfenster mit dem Titel **Neu Kategorien**.
2. **Name** ist ein Pflichtfeld (Hinweis «Name ist erforderlich.»). **Beschreibung** ist optional.
3. Die Schaltfläche **Speichern** legt die Kategorie an; **Abbrechen** verwirft die Eingaben.

Zur Anpassung einer bestehenden Kategorie dient die Zeilenaktion **Bearbeiten** (Fenstertitel **Bearbeiten Kategorien**). Nach Eingabe der Anpassungen erfolgt die Sicherung über **Speichern**.

Neue sowie modifizierte Kategorien stehen unmittelbar in den Auswahllisten der Artikelmaske sowie in den Filtern der [Artikelliste](../artikel/artikel-liste.md) bereit.

## Verknüpfte Artikel anzeigen

Weist eine Kategorie mindestens ein verknüpftes Modell auf, leitet die Aktion **Verknüpfte Artikel anzeigen** direkt zur Artikelliste mit aktivem Filter auf diese Kategorie weiter.

## Löschen und Papierkorb

Solange aktive Artikel mit der Kategorie verknüpft sind, bleibt die Aktion **Löschen** deaktiviert. Der Hinweistext lautet: «Diese Kategorie ist noch einem oder mehreren Artikeln zugeordnet. Entfernen Sie die Zuordnung bei allen Artikeln, bevor Sie die Kategorie löschen.».

Sobald keine Artikelverknüpfungen mehr vorliegen, lässt sich die Kategorie löschen. Sie wird in den [Papierkorb](../papierkorb/papierkorb.md) überführt und kann von dort wiederhergestellt werden.
