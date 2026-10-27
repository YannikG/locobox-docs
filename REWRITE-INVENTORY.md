# Doku-Rewrite — Journey-Inventar

Stand: 2026-10-26 · Epic [locobox-docs#2](https://github.com/YannikG/locobox-docs/issues/2)  
Quelle: `locobox2/docs/journeys/` + `public/i18n/de-CH.json` (Verhalten und Wortlaut), **nicht** für Endleser zitieren.

Legende: **ok** = Seite vorhanden und gegen App geprüft · **nachziehen** = Seite existiert, Inhalt hinter Release · **stub** = Platzhalter angelegt · **fehlt** = noch anlegen

> Abgleichsbasis: locobox2 **v2.1.0** (`4ea3cfa4`, Tag 2026-10-18). Früher: v2.0.0 (`f142f096`).  
> Nur Release-Tags als Quelle. Commits auf Feature-Branches **nach** `v2.1.0` (z. B. aktuelle Such-Fixes) sind fürs Handbuch **out of scope**, bis sie in einem Tag landen.  
> Nachzug 09.09. (noch v2.0.0): Dashboard **Datenqualität**, Monatsaktivität, PWA **App installieren**, Drucken-Hub **Erstellen**.  
> Gap-Scan 26.10. gegen `v2.1.0..v2.0.0`: Züge-Overhaul, Züge im Papierkorb, Premium monatlich/jährlich, Massenbearbeitung Kategorien, Lager-Filter-Autocomplete.

## 1 Einstieg (`generelles/`)

| Journey (locobox2) | Nutzerseite | Status |
| ------------------ | ----------- | ------ |
| platform/sign-in | `generelles-anmelden.md` | ok (Auth0, Apple ergänzt) |
| platform/initial-setup | `generelles-erste-schritte.md` + `konto.md` | ok (+ Install-Schritt) |
| platform/pwa-install | `app-installieren.md` | ok (neu) |
| platform/global-nav, user-menu-external-links, dirty-guard, keyboard-skip-navigation | `generelles.md` | ok (+ Menü **App installieren**) |
| search/global-search | `globale-suche.md` | ok |
| — | `generelles-browser-kompatibilitaet.md` | ok |

## 2 Übersicht

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| platform/dashboard | `uebersicht/uebersicht.md` | ok (3 Register) |
| platform/dashboard-overview-monthly-deltas | in `uebersicht.md` | ok |
| platform/data-health-tab | in `uebersicht.md` | ok |
| platform/dashboard-collection-charts | — | ausstehend (UI Phase 2+, noch nicht in Overview) |

## 3 Artikel & Kategorien

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| articles/list-filtering | `artikel-liste.md` | nachziehen (Lager Standort/Regal/Schachtel-Autocomplete, Anzeigespalten) |
| articles/lager-autocomplete-filters | in `artikel-liste.md` | nachziehen (neu in v2.1.0) |
| articles/article-detail | `artikel-detailansicht.md` | ok |
| articles/create-article, edit-article, edit-validation, create-with-decoder, document-links | `artikel-bearbeiten.md` | ok |
| articles/csv-import | `artikel-csv-import.md` | ok |
| articles/bulk-edit | `artikel-massenbearbeitung.md` | nachziehen (Kategorien gratis; Labels Premium; alter Premium-Hinweistext) |
| articles/embedded-article-table-categories | Detail-/Kompositions-/Decoder-Tabellen | nachziehen (Kategorienamen in eingebetteten Tabellen) |
| articles/clone-article | `artikel-duplizieren.md` | ok |
| articles/image-upload | `artikel-bilder.md` | ok |
| articles/soft-delete-restore, delete-guards | Papierkorb + Artikel-Abschnitt | ok |
| articles/article-sets | `artikel-sets.md` | ok |
| articles/article-labels | `artikel-labels.md` | ok |
| articles/import-link-prefill | `artikel-externer-import.md` | ok |
| articles/full-vehicle-number | in `artikel-bearbeiten.md` + `artikel-detailansicht.md` | ok |
| platform/multi-tab-form-validation | in `artikel-sets.md` + `decoder/decoder.md` | ok |
| categories/* | `kategorien/kategorien.md` | ok |

## 4 Züge & Decoder

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| trains/module-overhaul | `zuege/*.md` + Papierkorb | ok (v2.1.0 Nachzug; Screenshots offen) |
| trains/list-and-search | `zuege/zuege.md` | ok (Kartenraster, Lean-Filter, LüP/Anzahl) |
| trains/create-composition | `zuege/zuege-komposition.md` | ok (Zugangaben, Bezeichnung sperren/freigeben) |
| decoders/* (Liste, Detail, Bearbeitung, Adressen, Konfiguration) | `decoder/*.md` | ok |
| decoders/function-map-preset-list, function-map-csv-and-presets | `decoder/decoder-voreinstellungen.md` + `decoder-funktionsmatrix.md` | ok (neue Seite) |

## 5 Berichte & Drucken (`drucken/`)

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| reporting/reports-hub | `drucken-uebersicht.md` | ok (**Erstellen**, Hub-Texte) |
| reporting/address-list | `adressliste.md` | ok (Gratis) |
| reporting/qr-code-grid | `drucken-qr-code.md` | ok (Premium) |
| reporting/sales-list | `verkaufsliste.md` | ok (Premium) |
| reporting/collection-inventory-list | `sammlungsverzeichnis.md` | ok (Premium, App: Bestandsliste) |

## 6 Premium & Abrechnung (`premium/`)

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| settings/premium-usage | `premium/abonnement.md` + `einstellungen/nutzung.md` | nachziehen (Premium monatlich/jährlich, Intervallwahl, Portal-Wechsel) |
| settings/credits | `premium/gratis-und-limits.md` | nachziehen (Limits inkl. Züge prüfen) |
| — | `premium/premium.md` | nachziehen (Verweis Übersicht + Intervall) |

## 7 Einstellungen (`einstellungen/`)

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| settings/settings-navigation | `einstellungen.md` | ok |
| settings/account | `konto.md` | ok (+ Install-Schritt, **Einrichtung abschliessen**) |
| settings/display-preferences | `anzeigeeinstellungen.md` | ok |
| settings/display-language | `sprache.md` | ok |
| settings/display-currency | `waehrung.md` | ok |

## 8 Papierkorb

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| platform/soft-delete-and-recycling | `papierkorb/papierkorb.md` | ok (5 Register inkl. **Züge**; Screenshot nachziehen) |
| platform/recycling-bin-menu-badge | in `papierkorb.md` + `generelles.md` | ok (Badge zählt Züge mit) |
