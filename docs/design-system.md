# Reinwald Design-System (Stand 28.08.2026)

Quellen: referenz/ratgeber-messelogistik.html (Artikel-Layout) und referenz/stadtseite-paderborn.html (Landingpage-Layout). Bei neuen Seiten IMMER als Vorlage verwenden, nicht frei nachbauen. Globale Komponenten (Header/Footer): pages/index.html.

## Farb-Tokens
- Navy #162038 (Primaer), Abstufungen #1e2a47 / #1f2c4d / #2c3a5e
- Gruen #4FA832 (CTA/Akzent), Dunkelgruen #3f8a27 bzw. #3d8526, Gruen-Tint #eaf6e4 bzw. #eef7e9
- Text #2b3346 bzw. #374050, Soft #5a6478 bzw. #6b7385, Linien #e3e8ef, BG #f5f7fa
- Font "Segoe UI" Stack, Radius 14-16px, Schatten 0 6px 24px rgba(22,32,56,.10), theme-color #162038

## Zwei Basis-Layouts
1. ARTIKEL (Ratgeber/Lexikon/Blog): maxw 820px, dunkler Hero mit Schraegkante, weisse Artikel-Karte mit negativem margin-top, H2 mit gruenem Balken, Meta-Row.
2. LANDINGPAGE (Stadt/Leistung/Startseite): maxw 1200px, Sektionen 64-76px im Wechsel weiss/#f5f7fa, Hero mit Gruen-Glow, cards-Grid, why-Sektion auf Navy, cta-strip, cta-box, mobile Callbar. "Kurz erklaert"-Box NUR auf SEO-Landingpages, NICHT Startseite.

## Globale Komponenten: Header + Footer (pages/index.html)
- Sticky-Header .siteheader: Logo, Nav (Leistungen-Mega-Menue 3 Spalten, Standorte, Wissen, Ueber uns, Karriere), Telefon + Direktanfrage-Button
- CSS-only: Dropdowns hover/focus-within, mobil (<1120px) Checkbox-Burger mit Fullscreen-Panel
- Footer .sitefooter: f-top (Logo+Claim | Callbox), f-grid 4 Linkspalten, f-bottom (Rechtliches + Badges)
- Telefon-Icon als Inline-SVG .ic-ph, KEINE Emojis in Buttons
- Startseiten-Extras wiederverwendbar: statband, float-cards, steps, industry-grid, benefit-grid, know-Karten, seotext-Box, photo.deco/.tag

## Gemeinsame Komponenten
ul.checks (gruene Checkmarks) | Tabellen in .table-scroll, thead Navy, Highlight-Spalte td.hl gruen | FAQ details/summary +/- | SVG-Infografiken inline (.infobox, Palette Navy/Gruen/#a9d59a/#e3e8ef, role=img+title) | CTA: btn-green Pille, Badges (5,0 Google/ISO 9001/24-7/20+ Jahre/500+ Kunden), Tel 09834 / 79220-33 (tel:+4998347922033), Direktanfrage /direktanfrage-kurier/ | Autor-/GF-Box Tobias Reinwald + Xing/LinkedIn

## Bilder-Pool (wp-content/uploads)
Logo_vorlaufig_weis-1.png | Group-920 (Fuhrpark, freigestellt) | AdobeStock_955495261 (Sprinter) | Reinwald-260623-385_komp-2.jpg (Dispo) | Reinwald-260623-465.png (GF+Kollege) | Reinwald-260623-625.png (GF Portrait). Material knapp - Fotoshooting beim Kunden anregen.

## SEO-/Schema-Konventionen
- Ratgeber: @graph Organization + WebSite + WebPage + Article (author Tobias Reinwald + sameAs) + FAQPage (== sichtbar) + ggf. HowTo + BreadcrumbList
- Stadtseiten: Organization + Service mit areaServed City (KEIN LocalBusiness - abmahnsicher; Ehrlichkeits-FAQ "Standort in X?") + WebPage + BreadcrumbList + FAQPage + hasOfferCatalog 6 Leistungen
- Canonical + OG + Twitter vollstaendig; H1 immer mit Kern-Keyword

## Redaktions-Regeln
- KEINE Gedankenstriche im sichtbaren Text; Richtwerte "unverbindlich, Stand <Monat Jahr>"
- CTA-Winkel pro Seite einzigartig (Vergabeliste: produktionsstatus-ratgeber.md)
- Google-Rezensionen aus Pool, Zweitverwendung tracken (Albrecht + Eber laufen auf Paderborn UND Startseite)
- Stadtseiten: echte lokale Substanz (Gewerbegebiete, Autobahnen, Ankerfirmen, Branchen, Fahrzeiten-Tabelle, Stadtteil-Liste)
- Interne Links auf finale Slugs pruefen (keine Umlaut-URLs)

## QA-Workflow
Vor jedem Commit: tools/screenshot-qa.js (Playwright, Desktop 1440 + Mobil 390; Live-Bilder in Sandbox durch SVG-Platzhalter ersetzen, lazy-Images durchscrollen). Gedankenstrich-Check: grep auf Gedankenstrich/Halbgeviertstrich.
