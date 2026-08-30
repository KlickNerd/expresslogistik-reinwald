# Expresslogistik Reinwald — Website-Redesign

Komplettes Redesign von expresslogistik-reinwald.de im Design der Ratgeber-Serie (Navy `#162038` / Grün `#4FA832`). Umfang Phase 1 (DE): ~165 Seiten.

## Struktur

| Ordner | Inhalt |
|---|---|
| `pages/` | Fertige Seiten im neuen Design (Dateiname = Slug; `index.html` = Startseite) |
| `referenz/` | Freigegebene Design-Referenzen (Ratgeber-Artikel + Stadtseite Paderborn) — nicht verändern, Vorlage für alle neuen Seiten |
| `docs/` | Design-System, Ziel-Sitemap, Seiteninventar, Produktionsstatus |
| `tools/` | QA-Skripte (Playwright-Screenshots Desktop 1440 / Mobil 390) |

## Regeln für neue Seiten

1. Immer aus den Referenzen ableiten, nie frei nachbauen (`docs/design-system.md`).
2. Globaler Header (Mega-Menü) + Footer aus `pages/index.html` übernehmen.
3. Keine Gedankenstriche im sichtbaren Text; Preise als Richtwerte kennzeichnen.
4. JSON-LD je Seitentyp gemäß `docs/design-system.md` (Stadtseiten: Service + areaServed, kein LocalBusiness).
5. Vor jedem Commit: Screenshot-QA mit `tools/screenshot-qa.js`.

## Status

Siehe `docs/produktionsstatus.md`. Stand 28.08.2026: Startseite als Musterseite fertig; als Nächstes Leistungsseite Gefahrgut, Lexikon-Eintrag, Kontakt.
