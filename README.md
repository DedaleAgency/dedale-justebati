# Justebati

Site vitrine Next.js pour Justebati, cabinet d'expertise bâtiment indépendant.

## Vue d'ensemble

- **Marque :** Justebati
- **Baseline :** L'œil indépendant sur votre bâti.
- **Stack :** Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
- **Déploiement :** Vercel

## Scripts

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer le serveur de production
npm start

# Lint
npm run lint
```

## Configuration du site

Toute la configuration du site est centralisée dans `config/site.ts` :

```typescript
export const siteConfig = {
  name: "Justebati",
  baseline: "L'œil indépendant sur votre bâti.",
  url: "https://justebati.fr",
  phone: "0100000000",
  phoneDisplay: "01 00 00 00 00",
  email: "contact@exemple.fr",
  zone: {
    villePrincipale: "Ville-Centre",
    departements: ["00"],
    villesCouvertes: ["Ville-Centre"],
  },
  social: {},
  noIndex: true, // Passer à false en production
};
```

### Changer la zone d'intervention

Pour modifier la zone géographique, éditez `config/site.ts` :

```typescript
zone: {
  villePrincipale: "Lyon",
  departements: ["69", "01", "42"],
  villesCouvertes: ["Lyon", "Villeurbanne", "Vénissieux"],
}
```

### Activer l'indexation

En production, modifiez `config/site.ts` :

```typescript
noIndex: false; // Active l'indexation Google
```

### Coordonnées réelles

Remplacez les placeholders dans `config/site.ts` :

```typescript
phone: "0123456789",
phoneDisplay: "01 23 45 67 89",
email: "contact@justebati.fr",
url: "https://justebati.fr",
```

## Architecture

```
/
├── app/                              # Pages Next.js App Router
│   ├── layout.tsx                    # Layout principal
│   ├── page.tsx                      # Page d'accueil
│   ├── expertise-avant-achat/        # Pages expertises
│   ├── expertise-fissures/
│   ├── expertise-humidite/
│   ├── expertise-malfacons-reception/
│   ├── assistance-expertise-assurance/
│   ├── litige-artisan/
│   ├── lexpert/                      # L'expert
│   ├── comment-ca-se-passe/          # Process
│   ├── faq/                          # FAQ
│   ├── contact/                      # Contact/devis
│   ├── mentions-legales/             # Mentions légales
│   ├── politique-de-confidentialite/ # RGPD
│   ├── not-found.tsx                 # 404
│   ├── sitemap.ts                    # Sitemap XML
│   ├── robots.ts                     # Robots.txt
│   ├── icon.tsx                      # Favicon
│   ├── apple-icon.tsx                # Apple touch icon
│   ├── opengraph-image.tsx           # OG image
│   └── api/contact/route.ts          # API formulaire
│
├── components/                       # Composants React
│   ├── Header.tsx                    # En-tête + navigation
│   ├── Footer.tsx                    # Pied de page
│   ├── Logo.tsx                      # Logo SVG
│   ├── StickyMobileCta.tsx          # CTA mobile sticky
│   ├── Button.tsx                    # Bouton réutilisable
│   ├── Section.tsx                   # Section wrapper
│   ├── ExpertiseCard.tsx            # Card prestation
│   ├── ProcessSteps.tsx             # Timeline 5 étapes
│   ├── FaqAccordion.tsx             # Accordéon FAQ
│   ├── ContactForm.tsx              # Formulaire contact
│   └── JsonLd.tsx                   # Schema.org Organization
│
├── config/
│   └── site.ts                       # Configuration centralisée
│
├── public/                           # Assets statiques
│
└── specs/                            # Spécifications projet
    ├── brief.md
    ├── da.md
    ├── brief-technique.md
    ├── arborescence.md
    ├── mots-cles.md
    └── contenus/                     # Contenus source
```

## Design

### Direction artistique v2

Design éditorial premium (principes Awwwards / MERSI) + qualité craft Dédale.  
Sensation : rapport d'architecte + magazine matériel. Calme, précis, cher — sans bling.

### Palette de couleurs

Palette "paper chaud + encre profonde + accent oxyde" définie dans `tailwind.config.ts` :

- **ink** `#12100E` — Texte principal
- **paper** `#F7F3EB` — Fond page
- **sand** `#E6DFD2` — Bandes alternées
- **oxide** `#A85A3A` — Accent CTA, focus
- **mist** `#6F6A63` — Texte secondaire
- **line** `#D9D2C5` — Filets
- **night** `#0C0B0A` — Footer / inversé
- **on-night** `#F7F3EB` — Texte sur night

### Typographies (Google Fonts)

- **Display (Newsreader)** — Titres, hero, citations — caractère éditorial
- **UI (Outfit)** — Navigation, corps, interface — moderne et lisible
- **Mono (JetBrains Mono)** — Labels étapes, meta — chiffres techniques

### Images

Photos matière cohérentes (Unsplash) : façade pierre, fissures, toiture, détails chantier.  
Voir crédits complets dans **`VISUELS.md`**.

### Motion

Animations discrètes avec Framer Motion, respect de `prefers-reduced-motion`.

## Fonctionnalités

### SEO

- ✅ Metadata API par page (title, description, OG)
- ✅ Sitemap XML dynamique
- ✅ Robots.txt avec condition noIndex
- ✅ JSON-LD Organization (pas LocalBusiness tant que zone placeholder)
- ✅ Un H1 par page, URLs propres
- ✅ Images next/image optimisées

### Formulaire de contact

Le formulaire (`/contact`) collecte :

- Prénom, nom
- Téléphone, code postal
- Type de bien (maison/appartement/autre)
- Type de mission (6 choix)
- Description libre

**Backend :** API route `/api/contact/route.ts` (stub OK pour preview). En production, intégrer un service d'envoi d'email.

### Navigation

- Header : logo, dropdown Expertises, liens principaux, CTA Devis + téléphone
- Footer : navigation complète, disclaimer, légales
- Sticky mobile : CTA téléphone apparaît après 40% de scroll

### Accessibilité

- Contraste WCAG AA
- Navigation clavier
- Labels ARIA
- Respect `prefers-reduced-motion`

## Contenus

Tous les contenus sont issus des fichiers markdown dans `contenus/` (specs). **Ne pas inventer de faits, chiffres, avis ou certifications.**

Les pages suivent strictement les textes fournis par PLUME (rédaction) et les metas SEO définies par ORION.

## Mentions légales

Les mentions légales contiennent des placeholders `[à fournir]` pour :

- Raison sociale / forme juridique
- SIRET / RCS
- Adresse du siège
- Directeur de publication

Ces éléments doivent être complétés avec les informations réelles du client avant mise en production.

## Déploiement

Le projet est prêt pour Vercel :

1. Connecter le repo GitHub à Vercel
2. Configurer les variables d'environnement si nécessaire
3. Build automatique sur push
4. Preview URLs pour chaque branche

**Important :** Tant que `noIndex: true` dans `config/site.ts`, le site ne sera pas indexé par Google (adapté pour `*.vercel.app`).

## Next.js 15

Ce projet utilise Next.js 15 avec App Router, React 19, et Turbopack pour le développement rapide.

### App Router

Toutes les pages utilisent le nouveau système de routage (`app/`).

### Server Components

Par défaut, tous les composants sont Server Components sauf ceux marqués `"use client"` (Header, formulaire, animations).

## Support navigateurs

Le site est optimisé pour :

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Mobile Safari / Chrome Mobile

## Lighthouse

Objectifs de performance :

- **Performance :** ≥ 95
- **Accessibility :** ≥ 95
- **Best Practices :** ≥ 95
- **SEO :** ≥ 95

## Licence

Tous droits réservés — Justebati © 2026  
Réalisation : Dédale Agency

---

**Contact technique :** Dédale Agency  
**Version :** 2.0.0 (refonte visuelle complète)  
**Dernière mise à jour :** 18 septembre 2026
