# Phase 4: Inhaltserzeugung (SaaS)

## Schreibregeln

- **Schweizer Deutsch** (ä, ö, ü; ss statt scharfes S).
- **du** oder **Sie** wie im bestehenden Handbuch.
- Nur **Oberfläche und Nutzerhandlungen**; keine CLI, keine APIs, keine Datenbank-, Auth- oder Zahlungs-Technik, keine Anbieternamen (Auth0, Stripe, Supabase, Angular usw.), keine Keys oder internen URLs.

## Vorlagen

| Vorlage | Wann |
|---------|------|
| `.cursor/skills/user-manual-generator/templates/feature-seite.md` | neues oder überarbeitetes Feature erklären |
| `.cursor/skills/user-manual-generator/templates/quick-start.md` | Einstieg für neue Nutzerinnen und Nutzer |
| `.cursor/skills/user-manual-generator/templates/how-to-guide.md` | eine klar umrissene Aufgabe |

## Ablauf pro Seite

1. Typ wählen: Feature, Schnellstart oder How-to.
2. Inhalt aus `../locobox2` (Routen, Texte in Templates, sichtbare Abläufe) ableiten.
3. `docs/…` anlegen, `sidebars.ts` ergänzen.
4. Querverweise zu verwandten Feature- oder How-to-Seiten setzen.
5. Screenshot-Platzhalter setzen, wo die Oberfläche gezeigt werden muss.

## Nächste Phase

`.cursor/skills/user-manual-generator/phases/05-static-site-setup.md`
