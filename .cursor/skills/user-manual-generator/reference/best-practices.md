# Best Practices (Kurzreferenz, SaaS)

**Schreibweise:** Deutsch in **Schweizer Orthographie** (ä, ö, ü; **ss** statt scharfes S). Oberflächenbegriffe wie in der App.

## Empfohlen

### Inhalt

- **Feature zuerst klären:** wozu es der Nutzerin oder dem Nutzer dient, bevor du formulierst
- **Gleicher Wortschatz** wie in der App (Menüs, Schaltflächen, Fehlermeldungen)
- **Querverweise** zwischen Feature-Seiten und passenden How-tos
- **Unsicherheit markieren** («zu prüfen»), statt zu raten
- **`npm run build`** in locobox-docs vor Abschluss grün haben

### Schreibstil

- **du** oder **Sie** durchgängig
- **Aktiv und Präsens:** «Du öffnest …», «Du siehst …»
- **Kurz:** lieber zwei klare Absätze als lange Theorie
- Fachbegriffe nur, wenn sie in der UI vorkommen, sonst umschreiben

### Struktur

- **Gemeinsamer Limits-Hinweis:** Wenn eine Seite zu einem Feature mit Plan-/Nutzungsgrenzen gehört, nicht den `:::note`-Text duplizieren, sondern in der Markdown-Datei nach dem Frontmatter `import LimitsPlanNote from '@site/src/components/LimitsPlanNote';` setzen und im passenden Abschnitt `<LimitsPlanNote />` einfügen (Komponente: `src/components/LimitsPlanNote.tsx`).
- **Nutzen oben** (warum das Feature da ist)
- **Dann** sichtbare Oberfläche und Aktionen
- **Nummerierte Schritte** nur in How-tos, in der Reihenfolge der Klicks
- **Screenshots** als Platzhalter markieren, wo Orientierung fehlt

### Beispiele

- **Szenen aus dem echten Produkt** (Rollen, typische Datenmengen)
- **Erwartetes Ergebnis** nach einer Aktion («die Liste ist leer», «Speichern-Hinweis erscheint»)
- **Keine** Terminal-Sessions oder JSON-APIs für Endnutzer

### Prüfung

- Nachvollziehbarkeit: könnte jemand, der die App nicht kennt, den Schritten folgen?
- Keine Secrets, keine internen URLs mit Token

## Vermeiden

- **Füllwörter und vage Floskeln**, die nichts zur Bedienung beitragen: «wie gewohnt», «gewohnterweise», «selbstverständlich», «im Grunde», «natürlich» als Einleitung, «in der Regel» oder «üblicherweise», wenn eine **konkrete** Aussage (ja/nein, welcher Fall, welche Schaltfläche) möglich ist
- Installations- oder Serverkapitel (SaaS im Browser)
- **Technische Implementierung:** keine Namen wie Auth0, Stripe, Supabase, Angular, keine APIs, DBs, Libraries, Architekturdiagramme für Endnutzer
- Technisches Troubleshooting oder Stacktraces
- «API-Referenz» oder Entwickler-Konfiguration als Nutzerkapitel
- Passiv und vage Formulierungen («kann konfiguriert werden» ohne wo)

## Qualitätsziele (Richtwerte)

| Bereich | Idee |
|---------|--------|
| Schnellstart | optional, wenn neue Nutzerinnen und Nutzer häufig |
| Feature-Seiten | alle wesentlichen sichtbaren Module oder Bereiche |
| How-tos | für wiederkehrende Aufgaben, die mehrere Schritte brauchen |

## Zeitanteile (Richtwert)

| Tätigkeit | Anteil |
|-----------|--------|
| Discovery / Priorität | 15 % |
| Code / UI in `../locobox2` lesen | 25 % |
| Texte und Struktur | 45 % |
| Docusaurus / Sidebar | 10 % |
| QS / Übergabe | 5 % |

## Erfolg

Endnutzerinnen und Endnutzer finden **schnell**, was ein Feature tut und **wie** sie es in der Oberfläche nutzen; Build ohne Fehler.
