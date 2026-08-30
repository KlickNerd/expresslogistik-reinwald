# CLAUDE.md — Übergabe Website-Redesign Expresslogistik Reinwald

Stand: 30.08.2026, übergeben aus Cowork-Session. Diese Datei gehört ins Repo-Root, damit Claude Code sie automatisch liest.

## Projekt

Kompletter Neubau von expresslogistik-reinwald.de im Design der Ratgeber-Serie (Kunde ist vom Design begeistert und will die ganze Site so). Auftraggeber: Dominik (Agentur KlickNerd). Phase 1 = deutsche Seiten, **~165 Stück**. Englische Version (~112 Seiten) ist bewusst Phase 2.

Repo: `github.com/KlickNerd/expresslogistik-reinwald` (Konto KlickNerd, Claude-GitHub-App hat „All repositories").
Zusätzlich existiert das Claude-Projekt „Expresslogistik Reinwald" mit denselben Docs + Referenzen — bei Diskrepanz gilt das Repo.

```
pages/      fertige Seiten im neuen Design; Dateiname = Slug (index.html = Startseite, kurierdienst-berlin.html = /kurierdienst-berlin/ usw.)
referenz/   FREIGEGEBENE Design-Referenzen: ratgeber-messelogistik.html (Artikel-Layout) + stadtseite-paderborn.html (Landingpage-Layout). NICHT verändern.
docs/       design-system.md (PFLICHTLEKTÜRE vor jeder Seite), ziel-sitemap.md, seiteninventar.md, produktionsstatus-ratgeber.md
tools/      screenshot-qa.js (Playwright-QA, Desktop 1440 + Mobil 390)
```

## Arbeitsstand

- **Fertig:** Startseite (`pages/index.html`), von Dominik iterativ abgenommen. Sie enthält die **globalen Komponenten Header (Sticky, Mega-Menü, CSS-only, Checkbox-Burger mobil) und Footer (4 Linkspalten)** — diese 1:1 in jede neue Seite übernehmen.
- **Fertig (ältere Serie, live):** 20 Ratgeber-Artikel + 1 Stadtseite Paderborn — bereits im neuen Design, nicht neu bauen.
- **Als Nächstes (Musterseiten zur Freigabe, VOR der Massenproduktion):**
  1. Leistungsseite **Gefahrguttransport** (`pages/gefahrguttransport.html`) — größte SEO-Chance: 2.400 Suchen/Monat, Wettbewerb LOW; Ratgeber Nr. 5 als Content-Fundament verlinken
  2. **Lexikon-Eintrag** als Template, Vorschlag „Empfänger" (8.100/Monat) — Artikel-Layout (820px) der Messelogistik-Referenz adaptieren, kürzer (Definition, kein Ratgeber)
  3. **Kontaktseite** (`pages/kontakt.html`) — /kontakt/ ist auf der Live-Seite 404!
- **Danach Massenproduktion** in dieser Reihenfolge: 6 neue Leistungsseiten → Kurierdienst-Hub + 13 Unterseiten → Standorte-Übersicht + 43 Stadtseiten → ~60 Lexikon-Einträge → Unternehmensseiten → Blog-Konsolidierung. Details + Suchvolumina: `docs/ziel-sitemap.md`.

## Nicht verhandelbare Regeln (Langfassung: docs/design-system.md)

1. Neue Seiten IMMER aus den Referenzen ableiten, nie frei nachbauen. Landingpage-Layout (1200px) für Stadt/Leistung/Übersichten, Artikel-Layout (820px) für Ratgeber/Lexikon/Blog.
2. Header + Footer aus `pages/index.html` übernehmen (Farbtokens: Navy #162038, Grün #4FA832).
3. **Keine Gedankenstriche im sichtbaren Text** (– und —); vor Abgabe greppen. Zahlen/Preise als „Richtwert, unverbindlich, Stand <Monat Jahr>".
4. Telefon-Icons als Inline-SVG (.ic-ph), keine Emojis in Buttons.
5. JSON-LD je Seitentyp: Stadtseiten = Service + areaServed (KEIN LocalBusiness — abmahnsicher, Reinwald hat dort keinen Standort; „Ehrlichkeits-FAQ" einbauen). Ratgeber/Lexikon = Article + FAQPage (FAQ-Schema == sichtbare FAQ, wörtlich). Immer Organization + BreadcrumbList.
6. CTA-Winkel pro Seite einzigartig — Vergabeliste in `docs/produktionsstatus-ratgeber.md` fortschreiben. Stadtseiten-Angle: „Ein Ansprechpartner statt Callcenter" + Netzwerk-Ehrlichkeit.
7. Google-Rezensionen aus dem Pool rotieren und Zweitverwendung tracken (Albrecht + Eber laufen schon auf Paderborn UND Startseite).
8. Stadtseiten brauchen echte lokale Substanz (Gewerbegebiete, Autobahnen, Ankerfirmen, Fahrzeiten-Tabelle, Stadtteile) — Muster: `referenz/stadtseite-paderborn.html`.
9. Interne Links nur auf Slugs aus `docs/ziel-sitemap.md` (keine Umlaut-URLs, kein /maschinentransporte/ — richtig ist /maschinentransport/ als Ratgeber bzw. neue Leistungsseite laut Sitemap).
10. QA vor jeder Abgabe: `node tools/screenshot-qa.js` (lazy-Images durchscrollen; Reinwald-Server blockt Nicht-Browser-Fetcher, in Sandboxen Bilder per route() durch Platzhalter ersetzen), Desktop + Mobil ansehen.

## Kontext-Fakten

Firma: Expresslogistik Reinwald GmbH, Gewerbegebiet 1, 91741 Theilenhofen, seit 2005. Tel 09834 / 79220-33 (tel:+4998347922033), info@expresslogistik-reinwald.de. GF Tobias Reinwald (Xing + LinkedIn in Referenzen). Claims: Abholung 60–120 Min., Angebot in 10 Min., Direktfahrt ohne Umladung, 24/7/365, ISO 9001, ★ 5,0 bei Google (49 Bewertungen), 500+ aktive Kunden, 20+ Jahre. Bilder-Pool: 6 Motive unter wp-content/uploads (Liste in docs/design-system.md).

## Offene Punkte / Entscheidungen von Dominik bzw. Kunde

- Repo: `expresslogistikreinwaldwebsite.zip` im Root löschen; Repo auf **Private** stellen (steht auf Public!)
- OG-Bilder /assets/og/<slug>.jpg existieren nicht (überall referenziert)
- Kunde soll echte Zahlen für Startseiten-Zähler liefern (Sendungen/Monat, Fahrzeuge) + Fotoshooting angeregt
- Beim Livegang: 301-Plan (4 dünne Blogposts, /kurierdienst-leistungen/), Ratgeber-Publikationsdaten staffeln
- /kurierdienst-deutschland/ wird Standorte-Übersicht (Nav/Footer verlinken schon darauf) — Seite muss gebaut werden
- Artikel 8 der Ratgeber-Serie ist live unter /ratgeber/was-kostet-ein-kurierdienst/ (nicht /kurierdienst-kosten/) — interne Links entsprechend

## Arbeitsweise mit Dominik

Direkt, pragmatisch, duzt. Will Musterseiten sehen und gibt schnelles, ehrliches Feedback (Startseite v1 wurde verworfen: „Kurz erklärt" gehört nicht auf die Homepage, Bilder fehlten, wirkte nicht hochwertig — v2–v4 dann abgenommen). Erst Muster zeigen, dann skalieren. Commits klein und thematisch, Seiten einzeln committen.
