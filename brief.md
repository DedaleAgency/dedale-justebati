# Brief — Justebati

*Client fictif (placeholder). Le vrai client sera branché ensuite.*
*Mode : contrôle*
*Date : 2026-09-18*

## Marque

| Champ | Valeur |
| --- | --- |
| Nom | **Justebati** |
| Baseline (hyp.) | Expertise bâtiment indépendante — sans travaux à vendre |
| Domaine cible | `justebati.fr` (libre d’après check Vercel / registre) |
| Domaine secours | `justebati.com` (libre) |
| Finalistes non retenus | Batiregard, Solidavis → voir `livraison.md` |

### Choix du nom (synthèse)

10 pistes → éliminations (conflits métier / domaines pris / trop génériques) → 3 finalistes → **Justebati**.

Justification :
1. « Juste » porte l’argument central : neutralité, pas de travaux à vendre.
2. Court (4 syllabes), clair au téléphone, mémorisable, sans ancrage géo.
3. `.fr` et `.com` libres ; aucun homonyme évident en expertise / pathologie du bâti.

## Activité

Expertise bâtiment indépendante pour particuliers. Inspection sur site, identification des désordres (fissures, humidité, malfaçons, toiture, structure), distinction cosmétique / grave, chiffrage des travaux à prévoir, rapport écrit avec photos.

**Ne fait pas :** estimation de valeur immobilière ; diagnostics obligatoires (DPE, amiante, etc.) — à formuler clairement sur le site.

**Argument central :** neutralité (ne vend aucun travaux).

## Cible

Particuliers propriétaires ou acquéreurs : avant achat, face à un désordre, en litige avec un artisan, ou en sinistre / expertise d’assurance.

## Zone

Non fournie. Config centralisée (`config/site.ts` prévu) :

- `villePrincipale`
- `departements[]`
- `villesCouvertes[]`

**Hypothèse provisoire (signalée dans livraison.md) :** ville principale « Ville-Centre », départements `["00"]`, villes couvertes `["Ville-Centre"]` — placeholders neutres, remplaçables en une ligne.

## Objectif de conversion

Appels téléphoniques + demandes de devis.

- Numéro cliquable permanent sur mobile
- Formulaire court : prénom, nom, téléphone, code postal, type de bien, description du problème

## Prestations (à valider / tranche ORION)

1. Expertise avant achat
2. Expertise fissures
3. Expertise humidité
4. Malfaçons et réception de travaux
5. Assistance expertise d’assurance / sinistre (dont sécheresse)
6. Litiges avec un artisan

## Pages structurelles

- Accueil
- Une page / prestation
- L’expert (démarche, indépendance, méthode)
- Comment ça se passe (contact → visite → analyse → chiffrage → rapport)
- FAQ
- Contact / devis
- Mentions légales, confidentialité, 404

## Ton

Sérieux, technique, rassurant, haut de gamme. Cabinet d’expertise indépendant — pas entreprise de travaux. Pas de BTP bleu/orange générique.

## Contenu & preuves

Aucun avis, chiffre, ancienneté, certification ou assurance inventé. Formuler sans ; lister les infos client dans `contenus/_a-fournir.md`.

## Coordonnées (placeholders, config)

- Téléphone : `01 00 00 00 00`
- E-mail : `contact@exemple.fr`

## Référence métier (contenu uniquement, pas design)

https://gdcexpertise.com/bilan-avant-achat — inspiration métier uniquement, jamais copie.

## Stack (Dédale)

Next.js App Router + TypeScript + Tailwind, SSG, next/image, next/font, Framer Motion, SEO / JSON-LD / Lighthouse mobile ≥ 95, noindex tant que sur `*.vercel.app`.

## Hors périmètre (Jesse)

Domaine personnalisé / DNS, Search Console, Google Business Profile, suppression de projets existants.
