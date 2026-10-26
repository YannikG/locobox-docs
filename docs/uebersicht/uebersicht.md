---
id: uebersicht
title: Übersicht
description: Startseite mit Kennzahlen, neuesten Artikeln, Finanzen und Datenqualität.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Übersicht

Nach dem [Anmelden](../generelles/generelles-anmelden.md) erscheint die **Übersicht**. Die Seite fasst den aktuellen Stand der Sammlung zusammen.

<LimitsPlanNote />

Die Seite umfasst drei Register: **Übersicht**, **Finanzen** und **Datenqualität**. Beim Wechsel zu einem Artikel oder in einen anderen Bereich und anschliessendem Zurückkehren im Browser bleibt das zuletzt gewählte Register aktiv.

## Registerkarte «Übersicht»

![Register «Übersicht» mit den drei Kennzahlenkarten und der Liste «Neueste Artikel»](/img/handbuch/uebersicht/dashboard-uebersicht.webp)

- Drei Kennzahlenkarten: **Artikel im Bestand**, **Bahngesellschaften** und **Länder**.
- Unter **Artikel im Bestand** steht die Monatsaktivität im Format **+N / −N diesen Monat**: plus für neu angelegte Artikel, minus für in den Papierkorb verschobene Artikel. Verkäufe fliessen nicht in den Minuswert ein.
- Darunter befindet sich die Liste **Neueste Artikel** (Tabelle am Desktop, Karten auf dem Smartphone). Ein Klick oder Antippen öffnet den jeweiligen Eintrag.
- Beim Aufrufen lädt die Seite aktuelle Kennzahlen und die neuesten Artikel.

## Registerkarte «Finanzen»

![Register «Finanzen» mit den Karten «Gesamtausgaben», «Durch Verkäufe erhalten» und «Gesamtwert»](/img/handbuch/uebersicht/dashboard-finanzen.webp)

Die zweite Registerkarte **Finanzen** stellt Auswertungen zu Einkauf, Verkauf und Gesamtwert bereit. Beim ersten Laden erscheint kurz der Status **Laden...**.

Im oberen Bereich stehen die Karten **Gesamtausgaben**, **Durch Verkäufe erhalten** und **Gesamtwert**. Detaillierte Diagramme und erweiterte Finanzanalysen setzen ein aktives Premium-Abonnement voraus. Ohne Premium erscheint der Hinweis **Erweiterte Finanzstatistiken**.

## Registerkarte «Datenqualität»

![Register «Datenqualität» mit Problemtypen-Liste und Detailtabelle](/img/handbuch/uebersicht/dashboard-datenqualitaet.webp)

Die dritte Registerkarte **Datenqualität** dient der Prüfung auf Lücken und Unstimmigkeiten im Sammlungsbestand. Auf der linken Seite (auf Mobilgeräten als Auswahlliste) sind die **Problemtypen** mit Mengenangaben aufgeführt. Ein grüner Status signalisiert fehlerfreie Daten, Gelb weist auf offene Fälle hin.

Für alle Konten zugänglich und mit Detailtabelle nutzbar:

- **Doppelte Decoder-Adressen**
- **Verkaufte Artikel noch in einem Zug**
- **Artikel ohne Kategorie**
- **Artikel ohne Hauptbild**
- **Artikel ohne Kaufdatum oder Kaufpreis**

Zwei weitere Typen setzen ein bezahltes Premium-Abonnement oder die laufende Kulanzfrist voraus (die Testphase reicht hierfür nicht aus). Die Trefferanzahl ist dennoch ersichtlich; die Detailtabelle zeigt in diesem Fall die Hinweiskarte **Datenqualität Details**:

- **Decoder ohne Artikel-Verknüpfung**
- **Züge mit unvollständiger LÜP**

Über die Schaltflächen **Details** oder **Bearbeiten** in der Detailtabelle lässt sich ein Eintrag direkt ansteuern. Liegen für den ausgewählten Typ keine Beanstandungen vor, erscheint der Text **Keine Probleme für diesen Typ.**

![Register «Datenqualität» ohne Treffer: «Keine Probleme für diesen Typ.»](/img/handbuch/uebersicht/dashboard-datenqualitaet-leer.webp)

## Hinweise auf der Startseite

- **Locobox anpassen:** Beim ersten Aufruf kann eine Karte mit dieser Bezeichnung erscheinen. Über **Einrichtung starten** lässt sich die Ersteinrichtung inklusive optionaler App-Installation aufrufen, mit **Später** wird der Hinweis ausgeblendet. Weitere Erläuterungen dazu unter [Erste Schritte](../generelles/generelles-erste-schritte.md) und [App installieren](../generelles/app-installieren.md).
- **Premium-Kulanzfrist:** Während einer aktiven Kulanzfrist nach Ablauf eines Abonnements erscheint am oberen Seitenrand der Systemhinweis «Ihre Premium-Kulanzfrist hat begonnen» mit einer Option zur Erneuerung.
- **Artikel aus Link übernehmen:** Bei der Übernahme von Artikeldaten über das Web kann der Bestätigungsdialog **Angaben prüfen** erscheinen. Ein Klick auf **Weiter zum Formular** leitet zur Erfassungsmaske weiter; die dauerhafte Speicherung erfolgt erst dort.

## Weiterführend

- Artikelverwaltung: [Artikel](../artikel/artikel.md)
- Zugkompositionen: [Züge](../zuege/zuege.md)
- Installation auf dem Gerät: [App installieren](../generelles/app-installieren.md)
