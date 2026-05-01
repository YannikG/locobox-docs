# Phase 3: Struktur (SaaS, Docusaurus)

Inhalte für **Markdown unter `docs/`** und **`sidebars.ts`**. Nur **Funktionalität und Bedienung** (was man in der App tut und sieht). **Keine** technische Implementierung, keine Anbieter- oder Framework-Namen, keine Installations- oder Entwickler-Kapitel.

## Seitentypen (vereinfacht)

| Typ | Inhalt |
|-----|--------|
| **Feature** | Wozu es dient, was sichtbar ist, welche Aktionen möglich sind (`templates/feature-seite.md`) |
| **Schnellstart** | Erster Erfolg im Browser nach Login oder Einladung (`templates/quick-start.md`) |
| **How-to** | Eine konkrete Aufgabe, Klickfolge in der Oberfläche (`templates/how-to-guide.md`) |

Mehrere How-tos oder mehrere Feature-Seiten pro Produktbereich sind üblich. **Kein** eigener Bereich «Installation», «API-Referenz» oder «Troubleshooting» planen, ausser der Nutzer fordert ausdrücklich etwas davon.

## Ordner

An bestehende `docs/…`-Struktur und Sidebars anbinden (z. B. pro Modul eine Kategorie). Doc-IDs ohne Dateiendung `.md` (Docusaurus-Standard).

## Nächste Phase

`.cursor/skills/user-manual-generator/phases/04-content-generation.md`
