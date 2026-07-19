---
sidebar_position: 2
id: decoder-funktionsmatrix
title: Funktionsmatrix bearbeiten
description: Funktionstasten im Decoder zuordnen, Vorlagen nutzen und Zeilen bearbeiten.
---

# Funktionsmatrix bearbeiten

Hier legen Sie fest, welche **Funktionsart** jede logische Funktionstaste hat (zum Beispiel **Zeitgesteuert**, **Ein/Aus** oder **Taster**) und optional, wie die **Beschriftung** der Taste lautet.

Wo: Decoder öffnen, **Bearbeiten** wählen, Register **Funktionsmatrix**.

Speichern: Änderungen gelten erst nach **Speichern** in der Bearbeitungsansicht, siehe [Decoder-Bearbeitung](./decoder.md#bearbeitungsansicht).

Ist die Matrix leer, öffnet die App beim ersten Wechsel auf dieses Register automatisch den Dialog **Funktionsvorlage wählen** (einmal pro Decoder und Sitzung). Sie können den Dialog schliessen und später erneut **Vorlage wählen** nutzen.

## Vorlage aus dem Dialog übernehmen

1. Auf dem Register **Funktionsmatrix** **Vorlage wählen** anklicken.
2. Im Dialog **Funktionsvorlage wählen** nach Namen suchen oder die Liste durchblättern.
3. Genau eine Vorlage markieren.
4. **Vorlage übernehmen** anklicken.

Im Dialog stehen die Register **Systemvorlagen** und **Meine Voreinstellungen** zur Verfügung.

Ist die Matrix schon befüllt, fragt die App mit **Vorlage ersetzen?**, weil die bestehende Zuordnung ersetzt wird.
Ist die Matrix leer, kann das Übernehmen ohne Zwischenfrage erfolgen.

## Vorlage vor dem Übernehmen prüfen

Im Dialog wählen Sie in der Zeile der gewünschten Vorlage das Vorschau-Symbol (Auge).

So prüfen Sie die Funktionszuordnung, bevor Sie die Vorlage übernehmen.
Anschliessend wieder in die Liste wechseln, die Vorlage markieren und **Vorlage übernehmen** wie oben beschrieben.

## Funktionstaste ergänzen

Auf dem Register **Funktionsmatrix** wählen Sie **Weitere Taste**. Es wird die nächste freie Taste am Ende der Liste angelegt, mit der Funktionsart **Ein/Aus**.

Über das Menü neben **Weitere Taste** können Sie mit **Position wählen…** eine Taste an einer bestimmten Position einfügen und mit **Hinzufügen** bestätigen.

## Zeilen anpassen oder entfernen

In jeder Zeile die **Funktionsart** aus der Liste wählen und bei Bedarf eine eigene **Beschriftung** eintragen (Platzhalter: **Optionale Beschriftung**).

Eine Zeile entfernen: Aktion **Löschen** in der Zeile wählen. Die App fragt mit **Taste entfernen** nach.

## CSV importieren und exportieren

Auf dem Register **Funktionsmatrix** in der Bearbeitung finden Sie **CSV**:

- **CSV exportieren** lädt die aktuelle Matrix als Datei (Spalten **Funktion**, **Funktionsart**, optional **Beschriftung**). Für Gratis und Premium.
- **CSV importieren** Datei wählen, Spalten zuordnen, Vorschau prüfen, bestätigen. Ersetzt die gesamte Matrix im Entwurf; bei bereits befüllter Matrix fragt die App nach.

Importierte Zeilen gelten erst nach **Speichern** in der Bearbeitungsansicht.

## Eigene Voreinstellungen (Premium)

**Als Voreinstellung speichern** gibt es in der Detailansicht (nicht während der Bearbeitung), Register **Funktionsmatrix**, für die zuletzt gespeicherte Matrix. Sie vergeben einen **Name**; Locobox legt eine persönliche Vorlage an.

**Premium** nötig für:

- Eigene Voreinstellungen speichern, umbenennen und löschen
- Register **Meine Voreinstellungen** im Dialog **Funktionsvorlage wählen**

Gratis: Systemvorlagen und CSV; **Meine Voreinstellungen** führt zur Premium-Paywall.

### Voreinstellungen verwalten

Ihre gespeicherten Vorlagen verwalten Sie auf der eigenen Seite [Funktionsmatrix-Voreinstellungen](./decoder-voreinstellungen.md) (Menü **Sammlung** → **Decoder** → **Funktionsmatrix-Voreinstellungen**): ansehen, **Vorschau** und mit Premium **Umbenennen** / **Löschen**. Gratis-Nutzer sehen die Liste, Änderungen erfordern Premium.

## Systemvorlagen vs. eigene Vorlagen

Im Dialog **Funktionsvorlage wählen**:

- **Systemvorlagen**: von Locobox mitgeliefert, für alle Nutzer.
- **Meine Voreinstellungen**: Ihre gespeicherten Matrizen (Premium zum Anwenden und Verwalten).

Zurück zur Übersicht [Decoder](./decoder.md).
