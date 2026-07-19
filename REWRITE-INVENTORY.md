# Doku-Rewrite — Journey-Inventar

Stand: 2026-07-19 · Epic [locobox-docs#2](https://github.com/YannikG/locobox-docs/issues/2)  
Quelle: `locobox2/docs/journeys/` + `public/i18n/de-CH.json` (Verhalten und Wortlaut), **nicht** für Endleser zitieren.

Legende: **ok** = Seite vorhanden und gegen App geprüft · **stub** = Platzhalter angelegt · **fehlt** = noch anlegen

> Abgeglichen mit locobox2 bis Commit `d0fead26` (2026-07-18), plus laufende Labels-Arbeit.  
> Durchlauf 19.07.: flächendeckender i18n-/Journey-Abgleich (Menüpfade unter **Sammlung**, exakte UI-Strings, fehlende Flows).

## 1 Einstieg (`generelles/`)

| Journey (locobox2) | Nutzerseite | Status |
| ------------------ | ----------- | ------ |
| platform/sign-in | `generelles-anmelden.md` | ok (Auth0, Apple ergänzt) |
| platform/initial-setup | `generelles-erste-schritte.md` + `konto.md` | ok |
| platform/global-nav, user-menu-external-links, dirty-guard, keyboard-skip-navigation | `generelles.md` | ok |
| search/global-search | `globale-suche.md` | ok |
| — | `generelles-browser-kompatibilitaet.md` | ok |

## 2 Übersicht

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| platform/dashboard | `uebersicht/uebersicht.md` | ok |

## 3 Artikel & Kategorien

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| articles/list-filtering | `artikel-liste.md` | ok |
| articles/article-detail | `artikel-detailansicht.md` | ok |
| articles/create-article, edit-article, edit-validation, create-with-decoder, document-links | `artikel-bearbeiten.md` | ok |
| articles/csv-import | `artikel-csv-import.md` | ok |
| articles/bulk-edit | `artikel-massenbearbeitung.md` | ok (+ Labels, Premium-Feldgrenze) |
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
| trains/list-and-search | `zuege/zuege.md` | ok |
| trains/create-composition | `zuege/zuege-komposition.md` | ok |
| decoders/* (Liste, Detail, Bearbeitung, Adressen, Konfiguration) | `decoder/*.md` | ok |
| decoders/function-map-preset-list, function-map-csv-and-presets | `decoder/decoder-voreinstellungen.md` + `decoder-funktionsmatrix.md` | ok (neue Seite) |

## 5 Berichte & Drucken (`drucken/`)

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| reporting/reports-hub | `drucken.md` + `drucken-uebersicht.md` | ok |
| reporting/address-list | `adressliste.md` | ok (Gratis) |
| reporting/qr-code-grid | `drucken-qr-code.md` | ok (Premium) |
| reporting/sales-list | `verkaufsliste.md` | ok (Premium) |
| reporting/collection-inventory-list | `sammlungsverzeichnis.md` | ok (Premium, App: Bestandsliste) |

## 6 Premium & Abrechnung (`premium/`)

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| settings/premium-usage | `premium/abonnement.md` + `einstellungen/nutzung.md` | ok |
| settings/credits | `premium/gratis-und-limits.md` | ok (+ Artikelsets) |
| — | `premium/premium.md` | ok |

## 7 Einstellungen (`einstellungen/`)

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| settings/settings-navigation | `einstellungen.md` | ok |
| settings/account | `konto.md` | ok |
| settings/display-preferences | `anzeigeeinstellungen.md` | ok |
| settings/display-language | `sprache.md` | ok |
| settings/display-currency | `waehrung.md` | ok |

## 8 Papierkorb

| Journey | Nutzerseite | Status |
| ------- | ----------- | ------ |
| platform/soft-delete-and-recycling | `papierkorb/papierkorb.md` | ok (4 Register inkl. Artikelsets) |
| platform/recycling-bin-menu-badge | in `papierkorb.md` + `generelles.md` | ok |
