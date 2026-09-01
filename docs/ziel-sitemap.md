# Ziel-Sitemap Redesign expresslogistik-reinwald.de (beschlossen 28.08.2026)

Datenbasis: DataForSEO Labs (Ranked Keywords: 423 KW, ETV ~495/Monat; nur 32 von ~133 Seiten haben Rankings), Google Ads Suchvolumen (DE), Konkurrenz-Gap vs. zipmend.com (ETV 9.280) und dagoexpress.com (ETV 12.897). Fast der gesamte Traffic kam aus Lexikon + Ratgeber; kommerzielle Seiten und Stadtseiten ranken kaum. WICHTIG (01.09.2026): Das Lexikon wird gestrichen (siehe D) -- der informationale Nicht-Kunden-Traffic ist nicht das Ziel; Fokus auf Money-Pages. Traffic wird per 301 in die kommerziellen Seiten geleitet.

ENTSCHEIDUNGEN (Dominik, 28.08.2026): EN-Version -> Phase 2. Neue Stadtseiten -> Top 16. Duenne Blogposts -> streichen + 301. NEU (28.08.): /kurierdienst-deutschland/ wird Standorte-Uebersichtsseite (statt 301) - Nav + Footer verlinken darauf.

## A. Behalten + Redesign (Kern, ~26 Seiten)
Startseite | /kurierdienst/ Hub + 13 Unterseiten (24h, direktfahrt-kurier, dokumentenkurier, eilkurier, ersatzteil, europaweit, expresskurier [720/Monat], deutschlandweit, kurierservice, notfalllogistik, overnight, same-day, sonderfahrten) | Standalone: palettenversand [1.600], eiltransporte, transport-mit-hebebuehne [590], fuhrpark | direktanfrage-kurier | NEU: /kontakt/ (aktuell 404) | ueber-uns, karriere (Jobs integrieren), faq, downloads, impressum, datenschutz, barrierefreiheit | /kurierdienst-deutschland/ als Standorte-Uebersicht.

## B. Neue Leistungsseiten (6 fix + 2 optional)
1. Gefahrguttransport [2.400/Monat, LOW - groesste Chance; Ratgeber 5 als Hub]
2. Sperrguttransport [4.400 "sperrgut versenden"; Ratgeber 20 + Lexikon]
3. Maschinentransport [390; Ratgeber 13]
4. Sondertransporte [140; Blogpost wird upgegradet]
5. Messelogistik [110; Ratgeber 19]
6. Pharma-/Labor-/Medikamententransport [90+40, LOW]
7. Optional: Kurierdienst Schweiz [Ratgeber 17] | 8. Optional: Branchenseiten (Phase 3)

## C. Stadtseiten (27 Bestand + 16 neu = 43)
- Tier 1: Berlin 880, Muenchen 590, Hamburg 390, Koeln 320, Frankfurt 210, Duesseldorf 210
- Tier 2: Stuttgart 140, Hannover 140, Bremen 110, Dresden 110, Nuernberg 110, Leipzig 90, Essen 90, Dortmund 70
- Tier 3 (Bestand): Duisburg, Darmstadt, Wiesbaden, Konstanz, Bamberg, Erding, Plauen, Pinneberg, Siegen, Oldenburg, Rosenheim, Bayreuth, Bad Oeynhausen, Paderborn
- NEU (Top 16): Bonn 70, Ulm 70, Augsburg, Muenster, Bochum, Wuppertal, Kiel, Chemnitz, Mannheim, Freiburg, Kassel, Bielefeld (je 50), Karlsruhe, Aachen, Regensburg, Magdeburg (je 40)
- zipmend-Learning: Stadtseiten decken auch "spedition <stadt>" / "kurier <stadt>" ab.

## D. Logistik-Lexikon -- GESTRICHEN (Entscheidung Dominik + Daten, 01.09.2026)
Das Logistik-Lexikon wird NICHT ins neue Design uebernommen und beim Relaunch komplett abgebaut. Begruendung (Dominik, von Daten gestuetzt):
- Der aktuelle Lexikon-Traffic ist NICHT der Traffic, den wir wollen: rein informational, 0 Kaufabsicht. Er verwaessert das Themen-Signal der Domain (Google sieht uns fuer Begriffe, die nichts bringen), waehrend die Money-Keywords auf der Strecke bleiben. Fuer eine kleine Firmen-Domain ist Themenschaerfe (Kurierdienst + Leistungen + Staedte) wertvoller als Encyclopaedie-Breite.
- Risiko-Profil asymmetrisch: Cutten (mit 301) kostet fast nichts, Behalten ist bestenfalls neutral, schlimmstenfalls schaedlich.

Struktur live (Stand 01.09.2026, aus Sitemap/Crawl):
- Hub-Seite /logistik-lexikon/ + ~46 Unterseiten /logistik-lexikon/<slug>/.
- Inhalt = ultra-nischige, programmatische Insider-Q&As ohne Kaufabsicht, z.B. "wie-planen-kurierdienste-relaisfahrten-unter-einhaltung-gesetzlicher-ruhezeiten", "wie-treffen-kurierdienst-disponenten-echtzeit-entscheidungen-bei-laufenden-touren", "kurier-und-expresslogistik-kpis", "dynamisches-routing", "white-label-kurierauftrag", "professionelles-auftragsmonitoring", "kalkulierung-zuschlaege", "planensprinter".
- Sauber vom /ratgeber/-Pillar getrennt -> Abbau beruehrt die Ratgeber NICHT.

301-Plan beim Relaunch:
- Vollstaendige Slug-Liste aus WP-Export/Crawl ziehen (die 46 Unterseiten stehen nicht komplett in der XML-Sitemap).
- Default: /logistik-lexikon/ und /logistik-lexikon/* -> 301 auf /kurierdienst/ (faengt Link-Equity ab, keine 404, keine Traffic-Klippe).
- Thematische Ausnahmen, wo eindeutig: routing/disposition/fahrzeuggroesse-Themen -> /kurierdienst/ bzw. passende Leistungsseite; sprinter/planensprinter -> /transport-mit-hebebuehne/ bzw. /eiltransporte/.
- Nach Relaunch in der Search Console gegenpruefen, ob die Money-Pages besser ranken (Validierung der Fokus-These).

Die wenigen wirklich nuetzlichen Definitionen als FAQ auf Leistungsseiten retten (Direktfahrt, Same-Day, Avisierung, Ablieferbeleg, Gefahrgutklassen) -- siehe Abschnitt E. Kein Lexikon-Neuausbau (die frueher geplanten ~15 Neu-Eintraege wie Empfaenger [8.100]/Ladungssicherung [4.400]/Frachtbrief entfallen ersatzlos).

## E. Content-Bereiche
- Ratgeber: 21 Artikel behalten. Artikel 8 ist live als /ratgeber/was-kostet-ein-kurierdienst/ (rankt Top10 "kurierdienst kosten").
- Blog + News zusammenlegen. Behalten: teilladung, kurierfahrt-preise, just-in-time (Top10!), was-ist-ein-kurierdienst, vorteile-kurierdienst, nachhaltiger-transport (pruefen). Streichen + 301: logistik-trends-2024, lkw-maut, ki-und-big-data, e-commerce; sondertransporte-Post geht in Leistungsseite auf.

### Ratgeber-Neuthemen statt Lexikon-Ausbau (DataForSEO 01.09.2026, nach Volumen x Winnability x Kaufabsicht)
Freies Content-Budget vom gestrichenen Lexikon-Ausbau hierhin. Jeder Ratgeber verlinkt in die genannte Leistungsseite. (Dubletten zu Bestand-Blog wie just-in-time/kurierfahrt-preise NICHT neu bauen, nur optimieren.)
Tier 1 (bauen):
1. Nachtexpress erklaert: Ablauf, Kosten, Einsatzfaelle -- 1.600/Mo, KD 12 -> /kurierdienst/overnight-kurierdienst/
2. Gefahrgutklassen 1-9 einfach erklaert -- 1.600/Mo (+ "gefahrgutklasse 3" 260), KD niedrig, Snippet -> /gefahrguttransport/
3. Kuehltransport & temperaturgefuehrte Sendungen -- 210/Mo, commercial -> /pharmatransporte/
4. Internationaler/europaweiter Kurierdienst -- 210/Mo, commercial (+55% Trend) -> /kurierdienst/europaweiter-kurierdienst/
5. Tresor transportieren lassen -- 140/Mo, commercial, sehr winnable (Konkurrenz ~0 Backlinks) -> /sondertransporte/
6. Gefahrgut versenden: Pflichten fuer Versender -- 140/Mo, commercial -> /gefahrguttransport/
7. Palette versenden: Kosten & Wege -- 140/Mo ("palette versenden kosten") + 1.000 Head -> /palettenversand/
8. Maschine transportieren lassen / Maschinenumzug -- 90/Mo, CPC 18,65, commercial -> /maschinentransport/
9. Ersatzteillogistik & Express-Ersatzteile (AOG/Maschinenstillstand) -- 90/Mo, CPC 25, reine B2B-Kaufabsicht -> /kurierdienst/ersatzteil-kurierdienst/
10. Schwertransport: Kosten & Genehmigung -- 50/Mo, sehr winnable -> /sondertransporte/
Tier 2 (optional/spaeter): Beschaffungslogistik [480, informational B2B], Pharma/Medikamente GDP-konform [40, KD 45 schwer].

### Lexikon-Definitionen, die als FAQ auf Leistungsseiten wandern (statt Neu-Eintrag)
- Direktfahrt -> FAQ auf /kurierdienst/direktfahrt-kurier/ + /eiltransporte/
- Same-Day-Lieferung -> FAQ auf /kurierdienst/same-day-kurierdienst/
- Avisierung / Sendungsavisierung -> FAQ auf /kurierdienst/
- Ablieferbeleg / Proof of Delivery -> FAQ auf /kurierdienst/ (stuetzt "digitale Empfangsbestaetigung", kein Live-Tracking)

## F. Konsolidieren
- /kurierdienst-leistungen/ -> 301 auf /kurierdienst/
- EN-Version (~112 Seiten): Phase 2.

### 301-Redirect-Plan beim Livegang (beschlossen 31.08.2026, Dominik)
Diese Live-Seiten sind inhaltliche Dubletten zu neuen Seiten und werden per 301 umgeleitet
(Keywords bereits durch die Zielseite abgedeckt, sonst Kannibalisierung):
- /expressversand/      -> /kurierdienst/expresskurier/      (Keyword expressversand 1.600/Mo dort abgedeckt)
- /expresstransport/    -> /eiltransporte/                   (Keyword expresstransport 320/Mo dort als H2)
- /direkttransporte/    -> /kurierdienst/direktfahrt-kurier/ (Keyword direkttransport dort abgedeckt)
- /maschinentransporte/ -> /maschinentransport/              (Singular hat mehr Volumen, ist die neue Seite)
- /logistik-lexikon/ + /logistik-lexikon/* -> /kurierdienst/  (Lexikon gestrichen, siehe D; thematische Ausnahmen dort)
Umsetzung erfolgt in WordPress/Server beim Deploy, nicht im statischen Repo.

## Gesamtumfang Phase 1 (DE): ~105 Seiten (ohne Lexikon; frueher ~165 inkl. ~60 Lexikon)
