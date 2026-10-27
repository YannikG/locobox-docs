---
id: decoder
title: Decoder
description: Decoder ansehen und bearbeiten, mit Artikeln verknüpfen, Funktionsmatrix und CV-Konfiguration pflegen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Decoder

Im Bereich **Decoder** werden alle aktiven Decoder der Sammlung verwaltet.
Der Einstieg erfolgt über die Übersichtsseite [Decoder finden und filtern](./decoder-liste.md); ein Klick öffnet die Detail- oder Bearbeitungsansicht.
In allen Ansichten ist unmittelbar ersichtlich, ob ein Decoder bereits mit einem [Artikel](../artikel/artikel.md) verbunden ist.

Die Anwendung unterscheidet zwei Arbeitsmodi: Eine **Detailansicht** zum reinen Prüfen der Werte sowie eine **Bearbeitungsansicht** zur Anpassung von Attributen.
Beide Modi gliedern sich in dieselben drei Register: **Übersicht**, **Funktionsmatrix** und **Konfiguration**.

<LimitsPlanNote />

## Detailansicht

![Decoder-Detailansicht Register «Übersicht» mit Stammdaten und verknüpften Artikeln](/img/handbuch/decoder/decoder-detailansicht.webp)

Die Detailansicht stellt alle gespeicherten Werte schreibgeschützt dar. Das Register **Übersicht** führt Hersteller, Modell, Protokoll, Adresse, den Status **Nur Funktion**, Beschreibung sowie **Verknüpfte Artikel** auf. Die Register **Funktionsmatrix** und **Konfiguration** zeigen hinterlegte Tastenbelegungen und Konfigurationsparameter an.

Im Kopfbereich stehen **Zurück**, **Bearbeiten** und **Löschen** bereit. Ohne expliziten Wechsel in den Bearbeitungs- oder Löschmodus erfolgen keine Datenänderungen.

## Bearbeitungsansicht

![Bearbeitungsansicht mit den Registern «Übersicht», «Funktionsmatrix» und «Konfiguration», Fehlersymbol am Register hervorheben](/img/handbuch/decoder/decoder-bearbeitung.webp)

Die Bearbeitungsansicht dient als Eingabemaske für Datenänderungen. Die Symbolleiste umfasst **Zurück**, **Abbrechen** und **Speichern**.

- **Abbrechen** führt zur Detailansicht zurück und verwirft alle nicht gesicherten Eingaben.
- **Speichern** sichert die Daten aller drei Register parallel in der Datenbank.
- Beim Verlassen der Maske mit ungespeicherten Eingaben blendet das System die Sicherheitsabfrage «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?» ein.

Die drei Register im Überblick:

- **Übersicht:** Stammdaten wie Hersteller, Modell, Protokoll, Adresse, **Nur Funktion**, Beschreibung sowie die Artikelverknüpfung. Adressprüfungen und Mehrfachbelegungen werden direkt am Adressfeld ausgewiesen (siehe [Decoder-Adressen verwalten](./decoder-adressen.md)).
- **Funktionsmatrix:** Zuordnung logischer Funktionstasten (F0, F1...) zu Funktionsarten und Tastenbeschriftungen (siehe [Funktionsmatrix bearbeiten](./decoder-funktionsmatrix.md)).
- **Konfiguration:** Verwaltung von CV-Parametern mit Schlüssel und Wert (siehe [Konfiguration](./decoder-konfiguration.md)).

Validierungsprüfungen für Pflichtfelder erfolgen auf dem Register **Übersicht**. Ungültige Werte werden mit einem Fehlersymbol an der Registerkarte markiert. Wird **Speichern** bei bestehenden Validierungsfehlern betätigt, wechselt die Ansicht automatisch zum ersten fehlerhaften Register.

## Neuen Decoder anlegen

Auf der Seite [Decoder finden und filtern](./decoder-liste.md):

- Die Schaltfläche **Neu** öffnet den Dialog **Neuer Decoder** zur Anlage eines Standard-Decoders.
- Das Zusatzmenü daneben bietet **Neuer Funktions-Decoder** zur Erfassung von Decodern ohne Fahrantrieb (siehe [Nur Funktion](#nur-funktion)).

## Nur Funktion {#nur-funktion}

Die Kennzeichnung **Nur Funktion** kennzeichnet Decoder für reine Zusatzverbraucher (beispielsweise Innenbeleuchtung, Steuerwagen oder Soundmodule) ohne eigenen Antriebsmotor. Das Kennzeichen ist in Listen- und Detailansichten ersichtlich. Bei der Neuerfassung über **Neuer Funktions-Decoder** ist die Option standardmässig aktiv.

## Mit Artikel verknüpfen

Ein Decoder lässt sich direkt mit einem [Artikel](../artikel/artikel.md) verknüpfen:

- Bei der Erfassung oder unter **Bearbeiten** steht das Auswahlfeld **Artikel verknüpfen** bereit. Besteht bereits eine Zuordnung, muss diese vor einer Neuzuordnung zunächst gelöst werden.
- In der Detailansicht führt der Abschnitt **Verknüpfte Artikel** aktive Zuordnungen auf, die sich dort ansteuern oder trennen lassen.
- In der Artikel-Detailansicht ist die Verbindung spiegelbildlich hinterlegt.

## Adressen

Gleiche Adressen dürfen innerhalb der Sammlung mehrfach vergeben werden; das System weist informativ darauf hin, ohne die Speicherung zu blockieren. Einzelheiten zu Adressbereichen, Vergabevorschlägen und Warnhinweisen finden sich unter [Decoder-Adressen verwalten](./decoder-adressen.md).

## Löschen

Ein gelöschter Decoder wird aus der aktiven Übersicht entfernt und in den [Papierkorb](../papierkorb/papierkorb.md) verschoben. Innerhalb der Aufbewahrungsfrist kann der Datensatz reaktiviert werden. Solange ein Decoder im Papierkorb liegt, sind keine Artikelzuordnungen oder Bearbeitungen möglich.
