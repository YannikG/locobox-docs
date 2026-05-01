---
name: user-manual-generator
description: >-
  SaaS-Nutzerdokumentation für Locobox: nur Funktionalität und Bedienung in der
  Weboberfläche, aus ../locobox2 abgeleitet, in locobox-docs (Docusaurus,
  docs/, sidebars.ts). Intern Angular, Auth0, Stripe, Supabase; in der Doku
  keine technischen Details oder Anbieternamen. Schweizer Deutsch; keine
  Secrets oder internen URLs in Nutzerseiten.
disable-model-invocation: true
---

# Nutzerhandbuch-Generator (Locobox)

**Schreibregel:** Deutsch in **Schweizer Orthographie** (ä, ö, ü; **ss** statt scharfes S).

**Ton:** Knapp und sachlich. Keine leeren Füllfloskeln («wie gewohnt», «gewohnterweise», «selbstverständlich», «im Grunde», vage «in der Regel» oder «üblicherweise»), wenn die Aussage ohne sie klarer ist. Siehe [best-practices.md](reference/best-practices.md) unter *Vermeiden*.

**Begriffe:** Bei wiederkehrenden Oberflächenbegriffen (Toolbar, Detailansicht, Filter, Globale Suche usw.) die kontrollierte Wortschatzliste [.cursor/skills/user-manual-generator/reference/begriffs-woerterliste.md](reference/begriffs-woerterliste.md) nutzen und mit sichtbarem UI-Text abgleichen; zur Pflege der Begriffe dient bei der Schweizer Lokalisierung die Datei `../locobox2/public/i18n/de-CH.json`.

**Nutzerdoku (`docs/`):** ausschliesslich **Funktionalität**: was man in der App erreichen kann, wie man es in der Oberfläche tut, was man sieht. **Keine** technische Implementierung: keine Namen von Frameworks, Auth-, Zahlungs- oder Daten-Anbietern, keine APIs, Datenbanken, Code, Architektur, «unter der Haube», keine Entwickler-URLs.

**Ausnahme:** Wortlaut, der **direkt in der UI** steht (z. B. Schaltflächentext), darf übernommen werden.

## Kontext

| Was | Wo |
|-----|-----|
| **Doku-Site** | Dieses Repo: Docusaurus, `docs/`, `sidebars.ts`, `docusaurus.config.ts` |
| **App (intern)** | `../locobox2`: u. a. Angular-UI, **Auth0** (Auth), **Stripe** (Zahlungen), **Supabase** (Daten). Nur zur **Analyse**, nicht als Thema für Endnutzer-Texte. |

Neue Inhalte: **nur** in `docs/` und `sidebars.ts`. Code lesen, um Verhalten zu verstehen, **nicht**, um Technik zu dokumentieren. Wiederkehrender Hinweis zu Limits und Plan: React-Komponente `src/components/LimitsPlanNote.tsx` in Markdown per Import und `<LimitsPlanNote />` (siehe Best Practices → Struktur).

## Nutzung in Cursor

Phasen- und Vorlagenpfade mit Repo-Pfad öffnen, z. B. `.cursor/skills/user-manual-generator/phases/01-discovery.md`.

## Ablauf

1. `.cursor/skills/user-manual-generator/phases/01-discovery.md`  
2. `.cursor/skills/user-manual-generator/phases/02-feature-extraction.md`  
3. `.cursor/skills/user-manual-generator/phases/03-structure-planning.md`  
4. `.cursor/skills/user-manual-generator/phases/04-content-generation.md`  
5. `.cursor/skills/user-manual-generator/phases/05-static-site-setup.md` und bei Bedarf `.cursor/skills/user-manual-generator/ssg/docusaurus.md`  
6. `.cursor/skills/user-manual-generator/phases/06-quality-assurance.md`  
7. `.cursor/skills/user-manual-generator/phases/07-handoff.md`  

## Referenz (optional)

| Thema | Datei |
|------|--------|
| Interner Stack → Nutzersprache | `.cursor/skills/user-manual-generator/reference/stack-hinweise.md` |
| Qualität | `.cursor/skills/user-manual-generator/reference/best-practices.md` |
| Begriffe / Wortschatz | `.cursor/skills/user-manual-generator/reference/begriffs-woerterliste.md` (kontrollierter Nutzerwortlaut für `docs/`, UI hat Vorrang) |
| Skill hakt | `.cursor/skills/user-manual-generator/reference/skill-troubleshooting.md` |

## Vorlagen

| Datei | Zweck |
|-------|--------|
| `.cursor/skills/user-manual-generator/templates/feature-seite.md` | Feature aus Nutzersicht |
| `.cursor/skills/user-manual-generator/templates/quick-start.md` | Einstieg im Browser |
| `.cursor/skills/user-manual-generator/templates/how-to-guide.md` | Aufgabe Schritt für Schritt |

## Erfolg

- Nutzer verstehen **Funktionen** und **Bedienung**, ohne technische Details
- `npm run build` in locobox-docs ohne Fehler
- keine Secrets, keine internen Implementierungs- oder Anbieter-Details in Nutzerseiten

## Typische Lücken (Agent prüfen)

- **Workspace:** `../locobox2` nur, wenn `locobox-docs`-Wurzel geöffnet ist.  
- **Mehrere Sidebars:** passende Sidebar in `sidebars.ts` wählen.  
- **Rollen und Abos:** nur beschreiben, was Nutzer **erleben** (Zugriff, Limits), ohne Zahlungs- oder Auth-Technik zu benennen.  
- **Code:** nur intern lesen; in `docs/` nie Framework- oder Anbieter-Logik erklären.  
- **Bilder und Frontmatter:** an bestehende `docs/`-Konventionen halten.  
- **Rechtliches / Support:** Verweise wie im Produkt (Skill ersetzt keine Policies).  
- **Abdeckung:** optional Menüpunkt → Doc-Seite.
