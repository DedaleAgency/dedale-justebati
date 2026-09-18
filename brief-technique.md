# Brief technique — Justebati

## Stack
- Next.js 15 App Router + TypeScript + Tailwind CSS
- SSG (static) pour toutes les pages marketing
- `next/font` : Fraunces (display) + DM Sans (UI) + IBM Plex Mono (meta/étapes)
- `next/image` pour Unsplash/Pexels
- Framer Motion (respect `prefers-reduced-motion`)
- Formulaires : server action ou route handler → mailto / log ; pas d’envoi réel obligatoire en preview (stub OK avec message succès UI)
- Déploiement Vercel, projet neuf lié au repo

## Config centralisée — `src/config/site.ts`
```ts
export const siteConfig = {
  name: "Justebati",
  baseline: "L’œil indépendant sur votre bâti.",
  url: "https://justebati.fr", // canonique futur
  phone: "0100000000",
  phoneDisplay: "01 00 00 00 00",
  email: "contact@exemple.fr",
  zone: {
    villePrincipale: "Ville-Centre",
    departements: ["00"],
    villesCouvertes: ["Ville-Centre"],
  },
  social: {},
  noIndex: true, // true tant que *.vercel.app
};
```

## Design tokens (Tailwind / CSS vars)
Voir `da.md` :
- ink `#1A1814`, paper `#F4F0E7`, paper-2 `#E8E2D6`, stone `#8A8478`, copper `#9C6B3C`, line `#D4CEC2`, ok-dark `#0F0E0C`

## Arborescence App Router
| Route | Fichier contenu source |
| --- | --- |
| `/` | `contenus/accueil.md` |
| `/expertise-avant-achat` | `contenus/expertises/avant-achat.md` |
| `/expertise-fissures` | `contenus/expertises/fissures.md` |
| `/expertise-humidite` | `contenus/expertises/humidite.md` |
| `/expertise-malfacons-reception` | `contenus/expertises/malfacons.md` |
| `/assistance-expertise-assurance` | `contenus/expertises/assurance-sinistre.md` |
| `/litige-artisan` | `contenus/expertises/litige-artisan.md` |
| `/lexpert` | `contenus/lexpert.md` |
| `/comment-ca-se-passe` | `contenus/deroulement.md` |
| `/faq` | `contenus/faq.md` |
| `/contact` | `contenus/contact.md` |
| `/mentions-legales` | `contenus/mentions-legales.md` |
| `/politique-de-confidentialite` | `contenus/politique-de-confidentialite.md` |
| `not-found` | `contenus/404.md` |

Trailing slash : suivre convention Next (sans slash forcé, redirects OK). Contenu SEO ORION fait référence avec trailing slash — meta canoniques sans slash ou cohérentes.

## Composants
- `Header` : logo, nav (Expertises dropdown), CTA tel + Devis
- `Footer` : nav, disclaimer indépendance, légales, placeholders
- `StickyMobileCta` : appel `tel:` permanent
- `Button`, `Section`, `Prose`
- `ExpertiseCard`, `ProcessSteps` (5 étapes)
- `ContactForm` : prénom, nom, téléphone, code postal, type de bien, description
- `FaqAccordion` (pas de FAQPage JSON-LD)
- Logo SVG + favicon + OG image générés

## SEO
- Metadata API par page (title, description, openGraph, robots noindex si `siteConfig.noIndex`)
- `sitemap.ts`, `robots.ts`
- JSON-LD `Organization` seulement (pas LocalBusiness tant que zone placeholder ; pas FAQPage)
- Un H1 / page ; canonical
- Images : alt depuis contenus ; formats webp via next/image

## Accessibilité & perf
- WCAG AA contrastes palette
- Lighthouse mobile ≥ 95 objectif
- LCP < 2.5s, CLS < 0.1
- Pas de bandeau cookies si aucun traceur non exempté

## Visuels
- Unsplash/Pexels : bâti, matériaux, fissures, toitures, mesure — **pas de visage « l’expert »**
- Crédits en footer ou data-attribute
- Schémas étapes en SVG si besoin

## Critères d’acceptation
1. Toutes les URLs ORION répondent 200 en preview
2. Numéro cliquable sticky visible mobile
3. Formulaire contact soumis → feedback UI
4. Contenu fidèle aux md (pas d’invention)
5. Config zone/coords unique fichier
6. noindex actif sur vercel.app
7. Logo lisible favicon 32px + mono + fond sombre
8. Mentions : pas de faux avis / chiffres / certifs

## Hors scope build
- Domaine custom / DNS
- Analytics réel
- CMS
