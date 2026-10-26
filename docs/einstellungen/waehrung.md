---
sidebar_position: 5
id: waehrung
title: Anzeigewährung wählen
description: Konfiguration des Währungsformats für die Ausgabe von Geldbeträgen.
---

# Anzeigewährung wählen

Unter **Einstellungen** → Gruppe **Sammlung** → **Anzeigewährung** wird festgelegt, in welchem Format Geldbeträge in der Benutzeroberfläche formatiert werden (beispielsweise **Schweizer Franken (CHF)**).

## Auswirkungen auf die Datenbestände

Die Anwendung weist mit folgendem Text darauf hin: «Dies betrifft nur die Anzeige von Beträgen. Beim Wechsel der Währung werden gespeicherte Werte nicht umgerechnet oder geändert.».

Die Umstellung betrifft ausschliesslich die optische Darstellung: Listen, Artikeldetails, Finanzkarten, Suchtreffer und Druckberichte formatieren Zahlenwerte mit dem gewählten Währungssymbol. Gespeicherte Beträge an den Artikeln bleiben numerisch unverändert; eine automatische Währungsumrechnung findet nicht statt.

## Speicherung im Konto

Die Anzeigewährung wird serverseitig im Benutzerkonto hinterlegt und bleibt über Sitzungen und Seitenaktualisierungen hinweg dauerhaft aktiv.

## Trennung von Abrechnung und Sammlungsdaten

Die gewählte Sammlungsanzeige hat keinen Einfluss auf Abonnementgebühren. Die Abrechnung von Premium-Tarifen erfolgt separat über die Zahlungsplattform Stripe.

## Ersteinrichtung

Im Assistenten **Ersteinrichtung** lässt sich die Währung bereits beim ersten Login festlegen (siehe [Konto → Ersteinrichtung](./konto.md#ersteinrichtung)).
