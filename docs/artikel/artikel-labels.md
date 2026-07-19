---
sidebar_position: 9
id: artikel-labels
title: Labels verwalten
description: Farbige Arbeitsflow-Labels anlegen, Artikeln zuweisen und danach filtern.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Labels verwalten

**Labels** sind farbige Markierungen für Ihren Arbeitsablauf, zum Beispiel für Fahrzeuge an einer Ausstellung, für den Verkauf oder für die Werkstatt. Sie sind unabhängig von den [Kategorien](../kategorien/kategorien.md): Kategorien beschreiben, **was** ein Artikel ist, Labels halten fest, in **welchem Zustand** oder Vorgang er sich befindet.

**Wo:** Hauptmenü **Sammlung** → **Labels**.

<LimitsPlanNote />


## Was Sie mit und ohne Premium tun können

- **Labels anlegen, bearbeiten und löschen** ist ein **Premium-Feature**. Ohne aktives Premium erscheint beim Versuch der Premium-Hinweis.
- **Bestehende Labels zuweisen und wieder entfernen** ist auch im **Gratisplan** möglich.
- **Nach Labels filtern** (in Liste, Zug-Zusammenstellung und Berichten) ist ebenfalls ein **Premium-Feature**; der Hinweis lautet «Labelfilter sind ein Premium-Feature.»

Nach einem Wechsel von Premium zurück in den Gratisplan bleiben Ihre Labels und Zuweisungen sichtbar. Vorhandene Labels können Sie weiterhin zuweisen; Anlegen, Filtern und die Zuweisung per Massenbearbeitung sind dann wieder gesperrt.

## Label-Liste

Die Seite **Labels** zeigt alle Ihre Labels in einer Tabelle:

- **Label** mit einem farbigen Punkt in der Label-Farbe.
- **Artikel**: wie viele Artikel das Label tragen.
- **Aktionen**: **Bearbeiten** und **Löschen** pro Zeile.

Über die Toolbar erreichen Sie **Zurück** und **Neu**. Sind noch keine Labels vorhanden, erscheint der Hinweis **Keine Labels**.

## Label anlegen

1. Auf der Seite **Labels** **Neu** wählen.
2. Im Dialog **Label erstellen** einen **Namen** eingeben.
3. Eine **Farbe** aus der vorgegebenen Farbpalette wählen (ein freier Farbwähler ist bewusst nicht vorgesehen).
4. **Speichern**.

Label-Namen müssen eindeutig sein. Ein neues Label ohne Namen lässt sich nicht speichern.

## Label bearbeiten

In der Zeile **Bearbeiten** wählen, im Dialog **Label bearbeiten** Name oder Farbe anpassen und **Speichern**.

## Label löschen

Ein Label lässt sich nur löschen, wenn ihm **kein Artikel** mehr zugewiesen ist. Solange Artikel verknüpft sind, ist die Schaltfläche **Löschen** deaktiviert und ein Hinweis erklärt den Grund. Entfernen Sie das Label zuerst von allen Artikeln.

## Labels einem Artikel zuweisen

Labels weisen Sie im [Artikelformular](artikel-bearbeiten.md) im Abschnitt **Kategorien** über den Bereich **Labels** zu:

1. Über **Labels auswählen** ein oder mehrere Labels als Chips wählen; die **Schnellauswahl** bietet häufig genutzte Labels direkt an.
2. Pro Artikel sind **höchstens 5 Labels** möglich. Ist die Grenze erreicht, erscheint «Maximal 5 Labels pro Artikel.»
3. Mit Premium können Sie über **Erstellen** direkt ein **neues Label** anlegen; es wird anschliessend für den Artikel ausgewählt.

In der [Detailansicht](artikel-detailansicht.md) erscheinen die zugewiesenen Labels als farbige Chips in der Karte **Allgemein**.

## Nach Labels filtern

In der [Artikelliste](artikel-liste.md) filtern Sie über **Nach Labels filtern** (Premium):

- Wählen Sie mehrere Labels, zeigt die Liste nur Artikel, die **alle** gewählten Labels tragen (UND-Verknüpfung). Das unterscheidet sich vom Kategorienfilter, der bereits bei einer Übereinstimmung greift.
- Die häufigsten Labels stehen als **Schnellauswahl** bereit.

Derselbe Labelfilter steht auch bei der [Zug-Zusammenstellung](../zuege/zuege-komposition.md) und in den [Berichten](../drucken/drucken-uebersicht.md) zur Verfügung (jeweils Premium).

## Labels in der Massenbearbeitung

In der [Artikel in Masse bearbeiten](artikel-massenbearbeitung.md) können Sie das Feld **Labels** wählen und für alle ausgewählten Artikel setzen oder leeren (Premium). Der Hinweis lautet «Wählen Sie Arbeitsflow-Labels für alle ausgewählten Artikel aus.»

## Grenzen

- Pro Artikel höchstens **5 Labels**.
- Label-Namen sind **eindeutig**.
- Löschen nur bei **0 zugewiesenen Artikeln**.

## Verwandte Themen

- [Artikel bearbeiten](artikel-bearbeiten.md): Labels im Abschnitt Kategorien
- [Artikelliste](artikel-liste.md): nach Labels filtern
- [Kategorien](../kategorien/kategorien.md): thematische Einordnung statt Arbeitsflow
- [Premium und Gratisplan](../premium/premium.md): Limits und Premium-Funktionen
