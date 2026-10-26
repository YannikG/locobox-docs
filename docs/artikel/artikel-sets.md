---
sidebar_position: 8
id: artikel-sets
title: Artikelsets verwalten
description: Artikelsets als Handelseinheiten mit mehreren Artikeln anlegen, verknüpfen und Finanz- sowie Lagerwerte synchronisieren.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikelsets verwalten

Ein **Artikelset** repräsentiert eine kommerzielle Handelseinheit mit mehreren Teilmodellen, beispielsweise eine Startpackung oder eine Zugpackung. Jeder enthaltene **Artikel** bildet darin ein eigenständiges physisches Modell mit eigener Hersteller- und Artikelnummer.

**Navigation:** Hauptmenü **Sammlung** → **Artikelsets**.

<LimitsPlanNote />

## Grundlagen zu Sets und Artikeln

Ein Artikelset fasst mehrere Einzelartikel unter einer gemeinsamen Produktbezeichnung zusammen. Ein Artikel kann jeweils **höchstens zu einem Set** gehören. Liegen zwei identische Packungen vor (beispielsweise zwei gleiche Startsets), werden zwei separate Artikelsets erfasst, die jeweils ihre eigenen Modelle aufnehmen.

## Set-Übersicht

Die Übersichtstabelle listet alle aktiven Artikelsets auf. Über die Zeilenaktionen stehen **Ansehen** und **Bearbeiten** bereit. Zur Filterung und Sortierung dienen Kriterien wie Hersteller, Artikelnummer, Beschreibung, Artikelanzahl und Kaufpreis.

## Neues Set erfassen

1. In der Listenansicht die Schaltfläche **Artikelset erstellen** betätigen.
2. Im Register **Allgemein** die Pflichtangaben **Hersteller** und **Artikelnummer** eingeben sowie optional eine **Beschreibung** hinterlegen.
3. In den Registern **Finanzen** und **Lager** allfällige Stammdaten ergänzen.
4. Mit **Speichern** abschliessen.

![Set-Formular mit den Registern «Allgemein», «Finanzen» und «Lager»; bei Bedarf der Neuberechnungs-Dialog](/img/handbuch/artikel/artikelset-formular.webp)

Das Erfassungsformular gliedert sich in die Register **Allgemein**, **Finanzen** und **Lager**. Enthält ein Register fehlerhafte Werte, wird die Registerkarte mit einem Warnsymbol markiert. Ein Klick auf **Speichern** fokussiert automatisch das erste Register mit Validierungsfehlern.

Die Zuweisung von Einzelartikeln erfolgt anschliessend in der **Bearbeitung**.

## Set bearbeiten

In der Bearbeitungsansicht lassen sich Stammdaten, Finanzen, Lager und die Zusammensetzung der zugehörigen Artikel pflegen.

### Finanzen und Lager

Im Set können **Kaufpreis**, **Kaufdatum**, **Verkaufsstatus** und **Lagerort** wie bei Einzelartikeln hinterlegt werden.

### Artikel zuweisen

- **Artikel hinzufügen** öffnet den Auswahldialog **Artikel zum Set hinzufügen**. Es erscheinen ausschliesslich Artikel ohne bestehende Set-Zuordnung.
- Nach Auswahl der gewünschten Datensätze erfolgt die Zuweisung über **Auswahl verknüpfen**.
- Die verknüpften Artikel werden in die Tabelle der Set-Artikel übernommen.

Hinzugefügte oder entfernte Artikel gelten zunächst als vorgemerkt. Die dauerhafte Speicherung erfolgt erst beim Betätigen von **Speichern** im Set-Formular (Hinweismeldung: «Speichern, um die Änderungen an den Set-Artikeln zu übernehmen.»). Beim Verlassen des Formulars mit ungespeicherten Anpassungen erscheint eine Sicherheitsabfrage.

### Artikel aus dem Set entfernen

Über das Zeilensymbol in der Artikeltabelle des Sets lässt sich die Verknüpfung lösen. Der Artikel verbleibt als eigenständiger Datensatz in der Sammlung.

## Set-Detailansicht

![Artikelset-Detailansicht mit Finanzen, Lager und Tabelle der Set-Artikel](/img/handbuch/artikel/artikelset-detailansicht.webp)

Die Detailansicht eines Artikelsets ist eine Leseansicht mit Stammdatenkopf (Hersteller, Artikelnummer, Beschreibung), Informationskarten für Finanzen und Lager sowie der Tabelle der enthaltenen Modelle mit Absprung in die Artikeldetails.

### Migrationsprüfung bei automatisch erstellten Sets

Wurden Sets im Zuge früherer Softwareversionen automatisch aus Setnummern generiert, weist die Detailansicht das Kennzeichen **Migrationsprüfung** auf. Nach Kontrolle der Angaben lässt sich der Status über **Migration als geprüft markieren** bestätigen. Ein Dialogfenster weist darauf hin, dass das Kennzeichen dauerhaft entfernt wird. Die Bestätigung erfolgt über **Weiter**.

## Artikel einem Set zuweisen (aus der Artikelmaske)

Ein Artikel lässt sich direkt in der [Artikel-Bearbeitung](artikel-bearbeiten.md) einem Set zuordnen. Im Bereich **Allgemein** stehen dazu **Bestehendes Set verknüpfen** und **Set erstellen** bereit. Bei bestehender Verknüpfung erlaubt **Set wechseln** eine Neuzuordnung.

Wird ein neues Set direkt im Artikelformular angelegt, erfolgt dessen Erstellung erst beim Speichern des Artikels (Hinweis: «Das Set wird erst erstellt, wenn Sie diesen Artikel speichern.»). Ist beim Erfassen die Option **Nach dem Speichern auf diesem Formular bleiben** aktiv, bleibt die Set-Zuordnung für den Folgeartikel vorausgewählt.

### Set-Verknüpfung im Artikel lösen

Über **Set-Verknüpfung lösen** im Abschnitt **Allgemein** wird die Bindung aufgehoben und durch **Speichern** übernommen. Der Artikel bleibt in der Sammlung erhalten.

## Finanz- und Lagerwerte synchronisieren

Sind im Set Finanz- oder Lagerwerte hinterlegt, lässt sich beim Verknüpfen eine automatische Übernahme aktivieren:

- **Finanzen vom Set übernehmen:** Überträgt anteiligen Kaufpreis, Kaufdatum und Verkaufsstatus vom Set auf den Artikel.
- **Lager vom Set übernehmen:** Überträgt Lagerort, Regal und Box vom Set auf den Artikel.

Die Übernahme lässt sich pro Artikel steuern. Bei aktiver Finanzübernahme wird der Gesamtkaufpreis des Sets gleichmässig auf alle übernehmenden Artikel umgelegt.

Ändern sich der Kaufpreis des Sets oder die Anzahl übernehmender Modelle, blendet die Anwendung einen Dialog zur Neuberechnung der Anteile ein. Der Vorgang lässt sich wahlweise anwenden oder abbrechen.

## Verkauf von Sets

Ein Artikelset lässt sich als geschlossene Einheit als verkauft kennzeichnen: In der Set-Bearbeitung wird **Verkauft** aktiviert und die Verkaufsangaben werden ausgefüllt. Beim Speichern erfolgt eine Abfrage, ob die Verkaufsdaten auf alle noch unverkaufte, übernehmende Einzelartikel übertragen werden sollen. Bereits zuvor einzeln verkaufte Artikel bleiben davon unberührt.

Wurden lediglich Teilmengen der enthaltenen Artikel verkauft, weist die Listenansicht das Kennzeichen **Teilweise verkauft** aus.

Wird ein einzelner, mit einem Set verknüpfter Artikel in der [Artikel-Bearbeitung](artikel-bearbeiten.md) als verkauft deklariert, erkundigt sich das System, ob sich der Vorgang nur auf dieses Exemplar oder auf das gesamte Set bezieht.

## Set löschen

Beim Löschen wird das Artikelset in den [Papierkorb](../papierkorb/papierkorb.md) überführt. Die zugehörigen Artikel bleiben unverändert im Sammlungsbestand. Die Zuordnungen bleiben im Hintergrund gespeichert: Bei einer Wiederherstellung des Sets sind alle vorherigen Modelle wieder verknüpft.

:::note
Ein gleichzeitiges Löschen des Sets mitsamt allen enthaltenen Artikeln in einer Aktion wird nicht unterstützt. Einzelne Artikel sind bei Bedarf über die Artikelverwaltung zu entfernen.
:::

## Set aus dem Papierkorb wiederherstellen

Ein gelöschtes Set lässt sich im [Papierkorb](../papierkorb/papierkorb.md) unter dem Register **Artikelsets** reaktivieren. Die Verknüpfungen zu den Artikeln werden dabei vollständig wiederhergestellt.

## Obergrenzen

- Im Gratisplan können maximal **fünf aktive Artikelsets** verwaltet werden.
- Ein Artikel kann jeweils nur zu **einem Set** gehören.

## Verwandte Dokumente

- [Artikel](artikel.md): Zentrale Artikelverwaltung
- [Artikel bearbeiten](artikel-bearbeiten.md): Set-Zuweisung im Artikelformular
- [Papierkorb](../papierkorb/papierkorb.md): Wiederherstellung gelöschter Artikelsets
