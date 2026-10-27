---
sidebar_position: 9
id: artikel-labels
title: Labels verwalten
description: Farbige Arbeitsflow-Labels erstellen, Artikeln zuweisen und gezielt danach filtern.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Labels verwalten

**Labels** sind farbige Markierungen zur Abbildung betrieblicher Arbeitsabläufe, beispielsweise für Ausstellungsfahrzeuge, Verkaufsbestände oder Werkstattaufträge. Sie existieren unabhängig von den [Kategorien](../kategorien/kategorien.md): Während Kategorien die Modellart klassifizieren, dokumentieren Labels temporäre Zustände oder Vorgänge.

**Navigation:** Hauptmenü **Sammlung** → **Labels**.

<LimitsPlanNote />

## Funktionsumfang nach Tarif

- **Labels erstellen, anpassen und entfernen:** Erfordert ein aktives **Premium-Abonnement**. Ohne Premium erscheint ein entsprechender Hinweiskasten.
- **Bestehende Labels zuweisen und entfernen:** Ist uneingeschränkt im **Gratisplan** möglich.
- **Filtern nach Labels:** (in Listen, Kompositionen und Druckansichten) Ist als **Premium-Funktion** hinterlegt; der Hinweistext lautet «Labelfilter sind ein Premium-Feature.».

Nach einem Wechsel vom Premium-Tarif in den Gratisplan bleiben vorhandene Labels und Zuweisungen vollständig sichtbar und können Artikeln weiterhin zugeordnet werden. Das Neuerstellen, Löschen, Filtern sowie die Sammelzuweisung über die Massenbearbeitung sind dann deaktiviert.

## Label-Übersicht

![Labels-Seite mit den Spalten «Label» und «Artikel» sowie geöffnetem Dialog zum Anlegen eines Labels](/img/handbuch/artikel/labels-liste.webp)

Die Übersichtstabelle umfasst folgende Spalten:

- **Label:** Farbiger Indikatorpunkt mit dem Namen der Markierung.
- **Artikel:** Anzahl der aktuell verknüpften Datensätze.
- **Aktionen:** Optionen zum **Bearbeiten** und **Löschen** pro Zeile.

Über die Symbolleiste sind **Zurück** und **Neu** erreichbar. Liegen noch keine Einträge vor, erscheint der Hinweis **Keine Labels**.

## Neues Label erstellen

1. Auf der Seite **Labels** die Schaltfläche **Neu** betätigen.
2. Im Dialog **Label erstellen** einen eindeutigen **Namen** hinterlegen.
3. Eine **Farbe** aus der vorgegebenen Farbpalette auswählen.
4. Mit **Speichern** bestätigen.

Label-Namen müssen eindeutig sein. Einträge ohne Bezeichnung können nicht gespeichert werden.

## Label anpassen

In der jeweiligen Tabellenzeile **Bearbeiten** anwählen, im Fenster **Label bearbeiten** Bezeichnung oder Farbe modifizieren und mit **Speichern** sichern.

## Label löschen

Ein Label kann nur entfernt werden, wenn kein Artikel mehr damit verknüpft ist. Bei bestehenden Zuweisungen bleibt die Schaltfläche **Löschen** deaktiviert. Vor dem Löschen müssen sämtliche Artikelverknüpfungen gelöst werden.

## Zuweisung zu einem Artikel

Die Zuordnung erfolgt im [Artikelformular](artikel-bearbeiten.md) im Abschnitt **Kategorien** unter **Labels**:

1. Über **Labels auswählen** die Markierungen selektieren; die **Schnellauswahl** bietet häufig genutzte Optionen direkt an.
2. Pro Artikel sind maximal fünf Labels zulässig. Bei Erreichen der Höchstgrenze meldet das System «Maximal 5 Labels pro Artikel.».
3. Mit aktivem Premium-Status erlaubt **Erstellen** das direkte Anlegen neuer Markierungen aus der Erfassungsmaske heraus.

In der [Detailansicht](artikel-detailansicht.md) erscheinen die hinterlegten Labels als farbige Kennzeichnungen in der Karte **Allgemein**.

## Nach Labels filtern

In der [Artikelliste](artikel-liste.md) filtert die Option **Nach Labels filtern** (Premium):

- Werden mehrere Labels gewählt, zeigt die Trefferliste ausschliesslich Artikel an, die alle ausgewählten Kriterien erfüllen (UND-Logik).
- Die gebräuchlichsten Markierungen stehen in der **Schnellauswahl** zur Verfügung.

Die Filterung nach Labels steht ebenfalls in der [Zug-Zusammenstellung](../zuege/zuege-komposition.md) sowie in den [Druck- und Exportfunktionen](../drucken/drucken-uebersicht.md) bereit.

## Sammelzuweisung in der Massenbearbeitung

Unter [Artikel in Masse bearbeiten](artikel-massenbearbeitung.md) lässt sich das Feld **Labels** auswählen, um Markierungen für alle selektierten Datensätze gleichzeitig zu setzen oder zu entfernen (Premium). Der Systemhinweis lautet: «Wählen Sie Arbeitsflow-Labels für alle ausgewählten Artikel aus.».

## Systemgrenzen

- Maximal fünf Labels pro Artikel.
- Bezeichnungen müssen sammlungsweit eindeutig sein.
- Löschvorgang setzt null verknüpfte Artikel voraus.

## Verwandte Dokumente

- [Artikel bearbeiten](artikel-bearbeiten.md): Label-Verwaltung im Kategorie-Abschnitt
- [Artikelliste](artikel-liste.md): Filterfunktionen
- [Kategorien](../kategorien/kategorien.md): Strukturierung nach Modellgattungen
- [Premium und Gratisplan](../premium/premium.md): Tarifübersicht und Berechtigungen
