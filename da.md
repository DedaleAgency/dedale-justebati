# Direction artistique — Justebati

*Mode contrôle — à valider avec l’arborescence*

## Direction en 10 lignes

1. Justebati se positionne comme un **cabinet d’expertise**, pas comme une entreprise de travaux : silence, précision, matière.
2. Esthétique « quiet technical » : fond pierre chaude, encre quasi noire, un seul accent cuivré (mesure / outil).
3. Typo éditoriale forte en titres (serif display) + grotesk technique en corps et UI.
4. Photos de **matière et de détail** (fissure, joint, toiture, niveau laser, main qui mesure) — jamais de visage présenté comme « l’expert ».
5. Grille rigoureuse 12 colonnes, beaucoup d’air, blocs courts : on lit comme un rapport, pas comme une pub BTP.
6. CTA unique et répété : appeler / demander un devis — sticky mobile avec numéro cliquable.
7. Motion discret (fade + léger translate), respect `prefers-reduced-motion` ; pas de parallax tape-à-l’œil.
8. Pas de bleu/orange chantier, pas de jaune casque, pas d’illustrations clipart.
9. Logo : symbole simple (équerre / trait de niveau) + wordmark ; lisible 32 px, mono et dark.
10. Sensation recherchée : « Je suis entre de bonnes mains techniques, sans qu’on me vende un chantier. »

## Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `--ink` | `#1A1814` | Texte, logo mono |
| `--paper` | `#F4F0E7` | Fond page |
| `--paper-2` | `#E8E2D6` | Bandes / cards |
| `--stone` | `#8A8478` | Texte secondaire, filets |
| `--copper` | `#9C6B3C` | Accent CTA, focus, soulignements |
| `--line` | `#D4CEC2` | Bordures |
| `--ok-dark` | `#0F0E0C` | Fond sombre (footer, hero inverse) |
| `--on-dark` | `#F4F0E7` | Texte sur sombre |

Contraste texte/fond ≥ WCAG AA. Accent cuivre uniquement sur actions et repères — jamais en aplats massifs.

## Typographies

- **Display / H1–H2 :** Fraunces ou Source Serif 4 (Google Fonts) — caractère cabinet, pas luxe bling.
- **UI / corps / nav :** Instrument Sans ou DM Sans — neutre, lisible mobile.
- **Mono technique (labels, étapes, meta) :** IBM Plex Mono ou JetBrains Mono — chiffres de chiffrage, « Étape 03 ».
- Échelle fluide : `clamp()` de 14 px corps → ~40–56 px H1 mobile/desktop.
- Interligne corps 1.55 ; titres plus serrés (1.15–1.25).

## Grille & layout

- Max width contenu : 1120–1200 px ; gouttière 24 px mobile / 32 px desktop.
- Hero : split 60/40 texte / image matière, ou full-bleed image avec overlay `ink/40` + titre paper.
- Sections prestations : cards en grille 1 → 2 → 3, filet léger, pas d’ombre portée lourde.
- « Comment ça se passe » : timeline verticale mobile, horizontale desktop (5 étapes).
- Formulaire : une colonne, champs larges, labels visibles (pas placeholder-only).

## Motion

- Entrée sections : opacity 0→1 + `y: 12px`, 400–600 ms, easing `[0.22, 1, 0.36, 1]`.
- Hover cards : filet copper 1→1.5 px ou translateY −2 px, pas de scale agressif.
- Sticky CTA mobile : slide-up une fois après 40 % de scroll.
- `prefers-reduced-motion: reduce` → pas de translate, fades courts ou coupures nettes.

## Principes repris par référence

| Référence | Principe retenu | Ce qu’on n’emprunte pas |
| --- | --- | --- |
| MERSI Architecture (Awwwards / FLOT NOIR) | Quiet luxury, air, rythme lent, dual paper/ink | Slider horizontal complexe, hospitality vibe |
| Telha Clarke (Codrops) | Rigueur éditoriale, motion au service du fond | Identité archi intérieure australienne |
| NOIR NOIR | Matérialité, focus détail, présence minimaliste | Chambre noire expérimentale / portfolio art |
| Martin Emmerer (Godly) | Typo claire, N&B technique, portfolio sobre | Portfolio perso auteur |
| 1100 Architect / Technē (Siteinspire) | Grille cabinet, hiérarchie sèche | Esthétique US office |
| Portfolio Dédale (Aix Infirmières, GFC, Instant Aurélie) | CTA téléphone omniprésent, clarté conversion, mobile-first | Codes santé / clim / beauté |
| GDC Expertise (métier only) | Structure d’offre « bilan avant achat » | Design, textes, logo — **aucune copie** |

## Logo & déclinaisons (à produire au build)

- `logo.svg` — symbole (équerre fine ou niveau à bulle stylisé en 1 trait) + « Justebati »
- `logo-mono.svg` — ink sur transparent
- Favicon 32 / 180 — symbole seul
- OG 1200×630 — fond paper ou ink, wordmark + baseline

## Baseline (hyp.)

**« L’œil indépendant sur votre bâti. »**  
Alt. : « Expertise bâtiment — sans travaux à vendre. »

## Moodboard mots-clés

Pierre · trait d’équerre · rapport relié · lumière rasante sur un mur · cuivre oxydé · silence

## Hors DA

Photos Unsplash/Pexels cohérentes (bati, matériaux, fissures, toitures, mesure) + crédits. Illustrations SVG pour schémas d’étapes si besoin.
