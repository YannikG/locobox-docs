---
sidebar_position: 8
id: artikel-sets
title: Artikelsets verwalten
description: Ein Artikelset als kommerzielle Produkteinheit mit mehreren Artikeln verwalten, anlegen, verknüpfen, Finanzen und Lager vom Set übernehmen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikelsets verwalten

Ein **Artikelset** ist das kommerzielle Produkt, wie Sie es gekauft haben, zum Beispiel eine Startpackung oder eine Zusammenstellung mit mehreren Fahrzeugen.
Jeder **Artikel** darin ist ein einzelnes physisches Stück mit eigener Hersteller- und Artikelnummer.

**Wo:** Hauptmenü **Sammlung** → **Artikelsets**.

<LimitsPlanNote />


## Sets und Artikel verstehen

Ein Artikelset fasst mehrere Artikel unter einer gemeinsamen Produktbezeichnung zusammen. Ein Artikel kann **höchstens zu einem Set** gehören. Besitzen Sie zwei gleiche Sets (z. B. zweimal dieselbe Startpackung), legen Sie zwei separate Artikelsets an, die jeweils ihre eigenen Artikel enthalten.

## Set-Liste

Die Liste zeigt alle Ihre aktiven Artikelsets. Über die Zeilenaktionen wählen Sie **Ansehen** oder **Bearbeiten**. Zum Filtern und Sortieren stehen Kriterien wie Identität, Beschreibung, Artikelanzahl und Kaufpreis bereit.

## Set erfassen

1. In der Liste **Artikelset erstellen** wählen.
2. Auf dem Register **Allgemein** **Hersteller** und **Artikelnummer** eingeben (Pflichtfelder) sowie optional eine **Beschreibung**.
3. Auf den Registern **Finanzen** und **Lager** bei Bedarf Werte ergänzen.
4. **Speichern**.

Das Erfassungsformular ist in die Register **Allgemein**, **Finanzen** und **Lager** gegliedert. Enthält ein Register ungültige Eingaben, kennzeichnet die App das betroffene Register mit einem Fehlersymbol; beim Klick auf **Speichern** wechselt die Ansicht automatisch zum ersten Register mit Fehlern.

Anschliessend weisen Sie dem Set über die **Bearbeitung** Artikel zu.

## Set bearbeiten

In der Bearbeitung passen Sie Hersteller, Artikelnummer, Beschreibung, Finanzen und Lager an und verwalten die zugehörigen Artikel.

### Finanzen und Lager

Im Set können Sie **Kaufpreis**, **Kaufdatum**, **Verkaufsstatus** und **Lagerort** hinterlegen, genau wie bei einem einzelnen Artikel.

### Artikel zuweisen

- **Artikel hinzufügen** öffnet den Dialog **Artikel zum Set hinzufügen** mit der Artikelliste. Es werden nur Artikel ohne bestehende Set-Zugehörigkeit angezeigt.
- Einen oder mehrere Artikel auswählen und **Auswahl verknüpfen** wählen.
- Die verknüpften Artikel erscheinen in der Tabelle der Set-Artikel.

Zugefügte und entfernte Artikel sind zunächst nur **vorgemerkt** und werden erst beim **Speichern** des Set-Formulars übernommen (Hinweis in der App: «Speichern, um die Änderungen an den Set-Artikeln zu übernehmen.»). Verlassen Sie die Bearbeitung mit vorgemerkten Änderungen, fragt die App, ob Sie diese verwerfen möchten.

### Artikel entfernen

In der Tabelle der Set-Artikel entfernen Sie eine Zeile. Der Artikel bleibt in Ihrer Sammlung; nur die Set-Verknüpfung wird gelöst.

## Set-Detailansicht

Die Detailansicht eines Artikelsets ist eine reine Leseansicht mit Kopfbereich (Identität, Beschreibung), einer Finanzen- und einer Lager-Karte sowie der Tabelle der Set-Artikel mit Navigation zur Artikel-Detailansicht.

### Migrationsprüfung bei automatisch erstellten Sets

Wurden Sets aus früheren Setnummern **automatisch** erstellt, zeigt die Detailansicht (nicht die Liste) das Badge **Migrationsprüfung**. Öffnen Sie das Set, prüfen Sie die Angaben und wählen Sie **Migration als geprüft markieren**. Der Nachfragedialog weist darauf hin, dass das Badge dauerhaft verschwindet und dies nicht rückgängig gemacht werden kann; mit **Weiter** bestätigen Sie.

## Artikel einem Set zuweisen (vom Artikel aus)

Sie können einen Artikel auch direkt aus der [Artikel-Bearbeitung](artikel-bearbeiten.md) einem Set zuweisen. Im Abschnitt **Allgemein** stehen dafür **Bestehendes Set verknüpfen** und **Set erstellen** zur Verfügung; ist bereits ein Set verknüpft, können Sie es über **Set wechseln** ändern.

Legen Sie ein neues Set direkt im Artikelformular an, wird es erst **beim Speichern des Artikels** erstellt (Hinweis: «Das Set wird erst erstellt, wenn Sie diesen Artikel speichern.»). Aktivieren Sie beim Erfassen zusätzlich **Nach dem Speichern auf diesem Formular bleiben**, bleibt die Set-Auswahl für den nächsten Artikel erhalten, sodass Sie mehrere Stücke desselben Sets nacheinander erfassen können.

### Set-Verknüpfung lösen

Über **Set-Verknüpfung lösen** im Abschnitt **Allgemein** trennen Sie den Artikel vom Set und **speichern** anschliessend. Der Artikel bleibt in Ihrer Sammlung; nur die Zugehörigkeit zum Set entfällt.

## Finanzen und Lager vom Set übernehmen

Hat ein Set bereits Finanz- oder Lagerwerte, können Sie beim Verknüpfen eines Artikels die Übernahme aktivieren:

- **Finanzen vom Set übernehmen:** übernimmt Kaufpreis (anteilig), Kaufdatum und Verkaufsstatus vom Set auf den Artikel.
- **Lager vom Set übernehmen:** übernimmt Lagerort, Regal und Box vom Set auf den Artikel.

Die Übernahme lässt sich pro Artikel ein- und ausschalten. Bei aktivierter Finanz-Übernahme wird der Kaufpreis des Sets **gleichmässig** auf die übernehmenden Artikel aufgeteilt.

Ändern sich der Kaufpreis des Sets oder die Anzahl der übernehmenden Artikel, fragt die App nach, in welchem Umfang der Anteil neu berechnet werden soll (nur die übernehmenden Artikel oder alle, auch zuvor manuell angepasste). Sie können die Neuberechnung auch abbrechen.

## Set und Verkauf

Ein Artikelset können Sie **als Ganzes** als verkauft markieren: in der Set-Bearbeitung **Verkauft** setzen und die Verkaufsangaben ergänzen. Beim Speichern fragt die App, ob die Verkaufsinformationen auf die noch nicht verkauften, übernehmenden Artikel übertragen werden sollen; bereits verkaufte Artikel werden dabei standardmässig nicht überschrieben.

Ist nur ein Teil der Artikel verkauft, zeigt die Liste das Badge **Teilweise verkauft**.

Markieren Sie stattdessen ein einzelnes, mit einem Set verknüpftes Stück in der [Artikel-Bearbeitung](artikel-bearbeiten.md) als verkauft, fragt die App nach, ob sich der Verkauf nur auf dieses Stück oder auf das ganze Set bezieht.

## Set löschen

Beim Löschen wird das Artikelset in den [Papierkorb](../papierkorb/papierkorb.md) verschoben. Die zugehörigen Artikel bleiben unverändert bestehen. Die Verknüpfungen zwischen Set und Artikeln bleiben erhalten: Stellen Sie das Set später wieder her, sind die vorherigen Artikel erneut damit verbunden.

:::note
Das gleichzeitige Löschen des Sets **und aller enthaltenen Artikel** ist aktuell noch nicht verfügbar. Möchten Sie einzelne Artikel entfernen, löschen Sie diese direkt über den Artikel.
:::

## Set aus dem Papierkorb wiederherstellen

1. **Papierkorb** öffnen und das Register **Artikelsets** wählen.
2. Das gewünschte Set auswählen und **Wiederherstellen** wählen.
3. Das Set erscheint wieder in der Liste; die zuvor verknüpften Artikel sind erneut zugeordnet.

## Grenzen

- Gratis-Nutzer können maximal **5 aktive Artikelsets** verwalten.
- Ein Artikel kann nur zu **einem Set** gleichzeitig gehören.

## Verwandte Themen

- [Artikel](artikel.md): Übersicht zu Artikeln
- [Artikel bearbeiten](artikel-bearbeiten.md): Set-Zuweisung im Artikelformular
- [Papierkorb](../papierkorb/papierkorb.md): gelöschte Artikelsets wiederherstellen
