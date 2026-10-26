---
sidebar_position: 7
id: artikel-massenbearbeitung
title: Artikel in Masse bearbeiten
description: Mehrere Artikel in einem geführten Ablauf selektieren, Feldwerte gesammelt anpassen oder leeren und in der Vorschau prüfen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel in Masse bearbeiten

Unter **Artikel Massenbearbeitung** lassen sich identische Feldanpassungen auf eine Vielzahl von Artikeln gleichzeitig anwenden, ohne jeden Datensatz einzeln öffnen zu müssen.

**Navigation:** Hauptmenü **Sammlung** → unter **Artikel** der Menüpunkt **Massenbearbeitung**.

Voraussetzung für die Durchführung ist die Auswahl mindestens eines Artikels sowie mindestens eines bearbeitbaren Feldes.
Der Assistent gliedert den Ablauf in vier aufeinanderfolgende Phasen: **Artikel auswählen**, **Felder auswählen**, **Werte setzen** und **Vorschau**.

<LimitsPlanNote />

## Schritt 1: Artikel auswählen

Die Ansicht stellt eine filterbare Artikeltabelle bereit, analog zur [Artikelliste](artikel-liste.md).

- Einzelne Zeilen lassen sich über Checkboxen für die Bearbeitung selektieren.
- Das Kontrollkästchen in der Kopfzeile markiert alle zur aktuellen Filterung passenden Datensätze sammlungsweit, nicht nur die sichtbare Tabellenseite.
- Eine Zusammenfassung im oberen Bereich gibt Auskunft über die Gesamtzahl passender Artikel sowie die Anzahl der ausgewählten Exemplare.

Die Fortsetzung über **Weiter** setzt mindestens einen ausgewählten Datensatz voraus.

**Hinweis:** Eine Anpassung der Filterkriterien setzt die bisherige Artikelauswahl zurück.

## Schritt 2: Felder auswählen

In dieser Phase wird bestimmt, welche Attribute bei den selektierten Datensätzen modifiziert werden sollen.

- Über das Dropdown **Felder auswählen** werden die Zielfelder definiert.
- Nicht sämtliche Datenfelder sind für Sammeländerungen freigegeben. Komplexe Relationen, reine Anzeigespalten sowie interne Identifikatoren sind davon ausgenommen.
- Ohne aktives Premium-Abonnement gilt die Beschränkung: «Nicht-Premium: Nur Felder aus Modell Details sind für Massenbearbeitung verfügbar.».
- Das Feld **Labels** ist Abonnenten vorbehalten und dient dem Zuweisen oder Entfernen von [Labels](artikel-labels.md) (Hinweistext: «Wählen Sie Arbeitsflow-Labels für alle ausgewählten Artikel aus.»).

Die Freigabe für den nächsten Schritt erfolgt, sobald mindestens ein Zielfeld gewählt ist.

## Schritt 3: Werte setzen

Für jedes ausgewählte Feld wird die gewünschte Operation festgelegt:

| Modus in der Anwendung | Auswirkung |
|---|---|
| **Wert setzen** | Der hinterlegte Wert wird in alle ausgewählten Artikel geschrieben. |
| **Wert löschen** | Der bestehende Feldinhalt wird bei allen ausgewählten Artikeln entfernt (auf leer gesetzt). |

Beim Modus **Wert löschen** blendet das System folgenden Hinweis ein: «Aktueller Wert wird bei allen ausgewählten Artikeln gelöscht.».

**Einschränkung:** Für die Pflichtfelder **Hersteller** und **Artikelnummer** steht ausschliesslich **Wert setzen** zur Verfügung; **Wert löschen** ist deaktiviert.

Abhängig vom Feldtyp erfordert die Eingabe Zahlen, Datumsangaben, Ja/Nein-Werte, Auswahllisten oder Freitext. Bei ausgewählten Textfeldern bietet die Maske Vorschlagswerte aus vorhandenen Beständen an.

## Schritt 4: Vorschau

Die Vorschau visualisiert die geplanten Änderungen vor der endgültigen Ausführung.

- Die Tabelle führt exemplarisch die ersten zehn selektierten Artikel mitsamt den geplanten Anpassungen auf (Spalten **Artikel** und **Änderungen**). Die Gesamtanzahl bleibt eingeblendet.
- Bei stimmigen Parametern wird die Ausführung freigegeben.

## Ausführung und Protokoll

Die Schaltfläche **Massenbearbeitung anwenden** initiiert die Übernahme. Vor dem Start erfolgt die Sicherheitsabfrage «Möchten Sie die Massenbearbeitung wirklich anwenden?».

Während des Prozesses visualisiert eine Fortschrittsanzeige die Anzahl der bereits abgearbeiteten Datensätze.

Nach Abschluss meldet das System eine Erfolgsstatistik mit Anzahl aktualisierter, verarbeiteter sowie allfällig fehlgeschlagener Datensätze.

- Bei fehlerfreiem Durchlauf entspricht die Anzahl aktualisierter Artikel der getroffenen Gesamtauswahl.
- Allfällige Einzelfehler werden separat ausgewiesen; erfolgreiche Aktualisierungen bleiben dennoch erhalten.

Tritt ein technischer Abbruch auf, erscheint ein Hinweisdialog mit dem Inhalt «Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.».

Nach erfolgreichem Abschluss springt der Assistent auf den ersten Schritt zurück; die getroffene Artikel- und Feldauswahl wird geleert.

Beim vorzeitigen Verlassen des Vorgangs weist eine Sicherheitsabfrage auf ungespeicherte Daten hin.

## Grenzen und Abgrenzung

Die Massenbearbeitung konzentriert sich rein auf Basisdaten von Artikeln. Sie ersetzt nicht die Einzelpflege für Bildmaterial, [Decoder-Zuweisungen](../decoder/decoder.md), [Zusammenstellungen von Zügen](../zuege/zuege.md) oder Dokumentverknüpfungen.

Zentrale Übersicht: [Artikel](artikel.md).
