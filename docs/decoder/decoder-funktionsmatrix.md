---
id: decoder-funktionsmatrix
title: Funktionsmatrix
description: Funktionstasten im Decoder zuordnen, Vorlagen nutzen und Zeilen bearbeiten.
---

# Funktionsmatrix

Hier legen Sie fest, welches Verhalten jede logische Funktionstaste hat (zum Beispiel zeitgesteuert, Ein/Aus oder tastend) und optional, wie die Bezeichnung der Taste lautet, die dann auf dem Fahrregler oder in der App erscheint.

**Wo:** Decoder öffnen, **Bearbeiten** wählen, Tab **Funktionsmatrix**.

**Speichern:** Änderungen gelten erst nach **Speichern** in der **Bearbeitungsansicht**, siehe [Decoder-Bearbeitung](./decoder.md#bearbeitungsansicht).

## Vorlage aus dem Dialog übernehmen

1. Auf dem Tab **Funktionsmatrix** **Vorlage wählen** anklicken.
2. Im Dialog nach Namen suchen oder die Liste durchblättern (Seitengrösse wechseln, falls angeboten).
3. Genau eine Vorlage markieren.
4. **Vorlage anwenden** anklicken.

Ist die Matrix schon befüllt, fragt die App nach einer Bestätigung, weil die bestehende Zuordnung ersetzt wird.
Ist die Matrix leer, kann das Anwenden ohne Zwischenfrage erfolgen.

## Vorlage vor dem Übernehmen prüfen

Im Dialog **Vorlage wählen** wählen Sie in der Zeile der gewünschten Vorlage **Vorschau**.

So prüfen Sie die Funktionszuordnung, bevor Sie die Vorlage übernehmen.
Anschliessend wieder in die Liste wechseln, die Vorlage markieren und **Vorlage anwenden** wie oben beschrieben.

## Funktionstaste ergänzen

Auf dem Tab **Funktionsmatrix** die Aktion zum Hinzufügen einer weiteren Taste wählen (Beschriftung entspricht der App).
Es wird der nächste freie Slot angelegt, mit einem Standardtyp (meist **Ein/Aus**).

## Zeilen anpassen oder entfernen

In jeder Zeile den Funktionstyp aus der Liste wählen und bei Bedarf ein eigenes Label eintragen.

Eine Zeile entfernen: dafür vorgesehene Aktion in der Zeile wählen und die Bestätigung in der App bestätigen, falls sie erscheint.

## CSV importieren und exportieren

Auf dem Tab **Funktionsmatrix** in der **Bearbeitung** finden Sie **CSV**:

- **CSV exportieren** — lädt die aktuelle Matrix als Datei (Spalten: Funktionstaste, Funktionsart, optional Beschriftung). Für Gratis und Premium.
- **CSV importieren** — Datei wählen, Spalten zuordnen, Vorschau prüfen, bestätigen. Ersetzt die **gesamte** Matrix im Entwurf; bei bereits befüllter Matrix fragt die App nach.

Importierte Zeilen gelten erst nach **Speichern** in der Bearbeitungsansicht.

## Eigene Voreinstellungen (Premium)

**Als Voreinstellung speichern** gibt es in der **Detailansicht** (nicht während der Bearbeitung), Tab **Funktionsmatrix** — für die **zuletzt gespeicherte** Matrix. Sie vergeben einen Namen; Locobox legt eine persönliche Vorlage an.

**Premium** nötig für:

- Eigene Voreinstellungen speichern, umbenennen und löschen
- Tab **Meine Voreinstellungen** im Dialog **Vorlage wählen**

**Gratis:** Systemvorlagen und CSV; **Meine Voreinstellungen** führt zur Premium-Paywall.

### Voreinstellungen verwalten

Unter **Decoder** → **Funktionsmatrix-Voreinstellungen** (Menü) sehen Sie Ihre gespeicherten Vorlagen, Vorschau und — mit Premium — Umbenennen/Löschen. Gratis-Nutzer sehen die Liste, Änderungen erfordern Premium.

## Systemvorlagen vs. eigene Vorlagen

Im Dialog **Vorlage wählen**:

- **Systemvorlagen** — von Locobox mitgeliefert, für alle Nutzer.
- **Meine Voreinstellungen** — Ihre gespeicherten Matrizen (Premium zum Anwenden und Verwalten).

Zurück zur Übersicht [Decoder](./decoder.md).
