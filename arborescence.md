# Justebati — Arborescence SEO & on-page

| Champ | Valeur |
|-------|--------|
| Client | Justebati (placeholder / mode contrôle) |
| Domaine cible | **https://justebati.fr** |
| Brief | 2026-09-18 |
| Auteur | ORION (SEO Dédale Agency) |
| Type | Site vitrine — ~13 URLs utiles |
| Zone | France générique — **pas de pages geo** (Ville-Centre / dép. 00 = placeholder) |

---

## Hypothèses (explicites)

1. **1 page = 1 intention principale** ; une page par prestation.
2. Slugs FR clean, stables, sans date ni paramètres.
3. Meta title **≤ 60 caractères** ; meta description **≤ 155 caractères** (comptage espaces inclus, orthographe FR).
4. **Un seul H1** par page.
5. Conversion = appels + formulaires devis (CTA vers `/contact/`).
6. **FAQPage JSON-LD : non recommandé** pour l’instant (noter pour audit futur — risque de surfacing non contrôlé / mismatch contenu).
7. **noindex** tant que le site est servi sur `*.vercel.app` (ou preview) — retirer le noindex uniquement sur le domaine de production `justebati.fr`.
8. Volumes / difficulté : voir `mots-cles.md` — estimations qualitatives ORION, 2026-09-18, sans Keyword Planner.
9. Aucune modification de code/site dans ce livrable : **recommandations seulement**.

---

## Vue d’ensemble de l’arborescence

| # | URL proposée | H1 proposé | Rôle |
|---|--------------|------------|------|
| 1 | `/` | Expertise bâtiment indépendante — sans travaux à vendre | Home / hub |
| 2 | `/expertise-avant-achat/` | Expertise avant achat immobilier | Prestation |
| 3 | `/expertise-fissures/` | Expertise fissures maison | Prestation |
| 4 | `/expertise-humidite/` | Expertise humidité maison | Prestation |
| 5 | `/expertise-malfacons-reception/` | Expertise malfaçons et réception de travaux | Prestation |
| 6 | `/assistance-expertise-assurance/` | Assistance expertise d’assurance et sinistre | Prestation |
| 7 | `/litige-artisan/` | Litige avec un artisan : expert bâtiment | Prestation |
| 8 | `/lexpert/` | L’expert Justebati | Confiance / E-E-A-T |
| 9 | `/comment-ca-se-passe/` | Comment se déroule une expertise | Process / réassurance |
| 10 | `/faq/` | Questions fréquentes | Support SEO + conversion |
| 11 | `/contact/` | Demander un devis d’expertise | Conversion |
| 12 | `/mentions-legales/` | Mentions légales | Légal |
| 13 | `/politique-de-confidentialite/` | Politique de confidentialité | Légal |
| — | `/404` (template) | Page introuvable | UX |

**Total URLs utiles indexables en prod : 13** (hors 404). Périmètre brief respecté (~10–14).

---

## Règles transverses

| Règle | Détail |
|-------|--------|
| Indexation preview | `noindex, nofollow` sur **toute** URL `*.vercel.app` / preview Vercel |
| Indexation prod | Indexable dès bascule `justebati.fr` (sauf éventuelle page staging) |
| Schema | Organization + LocalBusiness **seulement si** zone réelle figée — sinon Organization seule. **Pas de FAQPage JSON-LD** recommandé à ce stade |
| H1 | Exactement un H1 ; ne pas répéter le title mot pour mot si redondant, mais rester aligné requête |
| CTA | Chaque page prestation → `/contact/` + téléphone |
| Différenciation | Bloc récurrent : *Justebati ne vend aucun travaux, ne réalise pas les diagnostics obligatoires (DPE, amiante…) ni d’estimation immobilière* |
| Maillage | Menu : Accueil · Prestations (6) · L’expert · Comment ça se passe · FAQ · Contact |

---

## 1. Accueil

| Élément | Proposition |
|---------|-------------|
| **URL** | `/` |
| **H1** | Expertise bâtiment indépendante — sans travaux à vendre |
| **Meta title** (58 car.) | Expert bâtiment indépendant \| Justebati |
| **Meta description** (152 car.) | Justebati : expertise bâtiment pour particuliers. Avant achat, fissures, humidité, malfaçons, sinistres. Indépendant — aucun travaux à vendre. Devis. |
| **Requête principale** | expert bâtiment indépendant |
| **Secondaires** | expertise bâtiment particuliers · cabinet expert bâtiment · devis expert bâtiment |
| **Maillage vers** | Les 6 prestations · `/lexpert/` · `/comment-ca-se-passe/` · `/faq/` · `/contact/` |
| **Maillage depuis** | Toutes les pages (logo / menu) |

---

## 2. Expertise avant achat

| Élément | Proposition |
|---------|-------------|
| **URL** | `/expertise-avant-achat/` |
| **H1** | Expertise avant achat immobilier |
| **Meta title** (52 car.) | Expertise avant achat \| Expert bâtiment Justebati |
| **Meta description** (149 car.) | Sécurisez votre achat : bilan technique indépendant avant compromis. Fissures, humidité, structure. Rapport clair — sans travaux à vendre. Devis. |
| **Requête principale** | expertise avant achat |
| **Secondaires** | expert bâtiment avant achat · expertise préachat · bilan technique avant achat maison |
| **Maillage vers** | `/expertise-fissures/` · `/expertise-humidite/` · `/comment-ca-se-passe/` · `/contact/` · `/faq/` |
| **Maillage depuis** | Accueil · menu Prestations · FAQ (différenciation vs DPE) · Contact |

---

## 3. Expertise fissures

| Élément | Proposition |
|---------|-------------|
| **URL** | `/expertise-fissures/` |
| **H1** | Expertise fissures maison |
| **Meta title** (48 car.) | Expertise fissures maison \| Justebati |
| **Meta description** (151 car.) | Fissures sur murs ou façade ? Cause, gravité et préconisations par un expert indépendant. Rapport exploitable — aucun travaux vendus. Demandez un devis. |
| **Requête principale** | expertise fissures maison |
| **Secondaires** | expert fissures maison · fissures structurelles · fissures retrait gonflement argiles |
| **Maillage vers** | `/assistance-expertise-assurance/` · `/expertise-avant-achat/` · `/contact/` · `/faq/` |
| **Maillage depuis** | Accueil · sécheresse/assurance · avant-achat · FAQ |

---

## 4. Expertise humidité

| Élément | Proposition |
|---------|-------------|
| **URL** | `/expertise-humidite/` |
| **H1** | Expertise humidité maison |
| **Meta title** (46 car.) | Expertise humidité maison \| Justebati |
| **Meta description** (154 car.) | Humidité, moisissures, infiltrations : identification de la cause par un expert indépendant. Pas de vente de traitement. Rapport clair. Demandez un devis. |
| **Requête principale** | expertise humidité maison |
| **Secondaires** | expert humidité maison · diagnostic humidité indépendant · remontées capillaires expert |
| **Maillage vers** | `/expertise-avant-achat/` · `/expertise-fissures/` · `/contact/` · `/comment-ca-se-passe/` |
| **Maillage depuis** | Accueil · avant-achat · FAQ · menu |

---

## 5. Malfaçons et réception

| Élément | Proposition |
|---------|-------------|
| **URL** | `/expertise-malfacons-reception/` |
| **H1** | Expertise malfaçons et réception de travaux |
| **Meta title** (58 car.) | Expertise malfaçons & réception \| Justebati |
| **Meta description** (153 car.) | Malfaçons, non-conformités, assistance à la réception : constat indépendant, réserves exploitables. Rapport technique — sans travaux à vendre. Devis. |
| **Requête principale** | expertise malfaçon travaux |
| **Secondaires** | assistance réception travaux · expert malfaçon · réserves réception CCMI VEFA |
| **Maillage vers** | `/litige-artisan/` · `/comment-ca-se-passe/` · `/contact/` · `/faq/` |
| **Maillage depuis** | Accueil · litige artisan · FAQ · menu |

---

## 6. Assistance expertise d’assurance / sinistre

| Élément | Proposition |
|---------|-------------|
| **URL** | `/assistance-expertise-assurance/` |
| **H1** | Assistance expertise d’assurance et sinistre |
| **Meta title** (59 car.) | Expertise sinistre & sécheresse \| Justebati |
| **Meta description** (155 car.) | Sinistre, sécheresse, refus d’indemnisation : assistance technique indépendante face à l’assureur. Rapport clair pour défendre votre dossier. Devis. |
| **Requête principale** | expertise sécheresse assurance |
| **Secondaires** | assistance expertise sinistre · contre-expertise assurance habitation · expert d’assuré fissures |
| **Maillage vers** | `/expertise-fissures/` · `/litige-artisan/` · `/contact/` · `/faq/` |
| **Maillage depuis** | Accueil · fissures · FAQ · menu |

*Note copy : ne pas promettre d’indemnisation ni de « gain » chiffré face à l’assureur.*

---

## 7. Litige artisan

| Élément | Proposition |
|---------|-------------|
| **URL** | `/litige-artisan/` |
| **H1** | Litige avec un artisan : expert bâtiment |
| **Meta title** (55 car.) | Litige artisan \| Expert bâtiment Justebati |
| **Meta description** (150 car.) | Conflit avec un artisan ou une entreprise ? Constat technique indépendant pour négocier ou constituer un dossier. Aucun travaux à vendre. Devis. |
| **Requête principale** | litige artisan expert bâtiment |
| **Secondaires** | expert bâtiment litige travaux · constat malfaçon artisan · expertise contradictoire |
| **Maillage vers** | `/expertise-malfacons-reception/` · `/assistance-expertise-assurance/` · `/contact/` · `/faq/` |
| **Maillage depuis** | Accueil · malfaçons · FAQ · menu |

---

## 8. L’expert

| Élément | Proposition |
|---------|-------------|
| **URL** | `/lexpert/` |
| **H1** | L’expert Justebati |
| **Meta title** (42 car.) | L’expert bâtiment \| Justebati |
| **Meta description** (148 car.) | Parcours, indépendance et méthode de l’expert Justebati. Une expertise au service des particuliers — sans aucun travaux à vendre. Contactez-nous. |
| **Requête principale** | expert Justebati (marque) + E-E-A-T |
| **Secondaires** | expert bâtiment indépendant particuliers · cabinet expertise neutre |
| **Maillage vers** | `/comment-ca-se-passe/` · 2–3 prestations phares · `/contact/` |
| **Maillage depuis** | Accueil · footer · toutes CTA « qui intervient » |

---

## 9. Comment ça se passe

| Élément | Proposition |
|---------|-------------|
| **URL** | `/comment-ca-se-passe/` |
| **H1** | Comment se déroule une expertise |
| **Meta title** (54 car.) | Déroulement d’une expertise \| Justebati |
| **Meta description** (147 car.) | Prise de contact, visite, analyses, rapport : le déroulé d’une mission Justebati, étape par étape. Transparent, technique, indépendant. Demandez un devis. |
| **Requête principale** | déroulement expertise bâtiment (process) |
| **Secondaires** | comment se passe une expertise maison · délai rapport expertise |
| **Maillage vers** | Toutes les prestations (ancre « selon votre besoin ») · `/contact/` · `/faq/` |
| **Maillage depuis** | Accueil · pages prestations · L’expert |

---

## 10. FAQ

| Élément | Proposition |
|---------|-------------|
| **URL** | `/faq/` |
| **H1** | Questions fréquentes |
| **Meta title** (40 car.) | FAQ expertise bâtiment \| Justebati |
| **Meta description** (144 car.) | Indépendance, tarifs, délais, différence avec un diagnostiqueur, sinistres : réponses claires aux questions sur l’expertise Justebati. Contact & devis. |
| **Requête principale** | longue traîne FAQ (agrégée) |
| **Secondaires** | différence expert bâtiment diagnostiqueur · expert bâtiment vend-il des travaux · prix expertise bâtiment |
| **Maillage vers** | Chaque prestation citée · `/contact/` · `/lexpert/` |
| **Maillage depuis** | Accueil · footer · process |

### Note technique (audit futur)
- **Ne pas** déployer `FAQPage` JSON-LD tant que les réponses ne sont pas figées et validées juridiquement / métier.
- Prévoir audit ultérieur : éligibilité rich results vs risque de contenu extrait hors contexte.

---

## 11. Contact / devis

| Élément | Proposition |
|---------|-------------|
| **URL** | `/contact/` |
| **H1** | Demander un devis d’expertise |
| **Meta title** (44 car.) | Devis expertise bâtiment \| Justebati |
| **Meta description** (142 car.) | Décrivez votre besoin : avant achat, fissures, humidité, malfaçons, sinistre ou litige. Réponse soignée. Expertise indépendante — sans travaux à vendre. |
| **Requête principale** | devis expert bâtiment |
| **Secondaires** | contact expert bâtiment · demande devis expertise maison |
| **Maillage vers** | `/comment-ca-se-passe/` · `/faq/` · `/lexpert/` (réassurance) |
| **Maillage depuis** | **Toutes** les pages (CTA principal) |

Formulaire : type de mission (6 choix) + téléphone + message. Pas de geo obligatoire tant que zone placeholder.

---

## 12. Mentions légales

| Élément | Proposition |
|---------|-------------|
| **URL** | `/mentions-legales/` |
| **H1** | Mentions légales |
| **Meta title** (36 car.) | Mentions légales \| Justebati |
| **Meta description** (98 car.) | Mentions légales du site justebati.fr — éditeur, hébergeur, propriété intellectuelle, contact. |
| **Intention** | Conformité (pas de SEO primaire) |
| **Maillage** | Footer ↔ confidentialité |

---

## 13. Politique de confidentialité

| Élément | Proposition |
|---------|-------------|
| **URL** | `/politique-de-confidentialite/` |
| **H1** | Politique de confidentialité |
| **Meta title** (48 car.) | Confidentialité \| Justebati |
| **Meta description** (120 car.) | Traitement des données personnelles, formulaires et cookies sur justebati.fr — transparence RGPD. |
| **Intention** | Conformité RGPD |
| **Maillage** | Footer ↔ mentions · lien depuis formulaire `/contact/` |

---

## 14. 404 (template)

| Élément | Proposition |
|---------|-------------|
| **URL** | template système `/404` (non destinée au crawl utile) |
| **H1** | Page introuvable |
| **Contenu** | Message court + liens Accueil · Prestations · Contact |
| **Indexation** | noindex |

---

## Schéma de maillage (synthèse)

```
Accueil
├── Avant achat ←→ Fissures ←→ Humidité
├── Malfaçons/réception ←→ Litige artisan
├── Assurance/sinistre/sécheresse ←→ Fissures
├── L’expert → Process → FAQ
└── Contact ← (CTA global)
```

Priorité de liens internes (juice) :
1. `/contact/`
2. Les 6 prestations
3. `/lexpert/` + `/comment-ca-se-passe/`

---

## Checklist indexation & technique (recommandations)

| Point | Recommandation ORION |
|-------|----------------------|
| Preview Vercel | **noindex, nofollow** tant que `*.vercel.app` |
| Production `justebati.fr` | Indexable ; canonical self ; HTTPS |
| Sitemap | 13 URLs utiles (hors 404, hors légales optionnel mais OK) |
| robots.txt | Autoriser prod ; bloquer previews si possible |
| FAQPage JSON-LD | **Non recommandé** pour l’instant — noter audit futur |
| Geo pages | **Aucune** tant que zone = placeholder |
| Contenu dupliqué | Ne pas créer de pages « diagnostic DPE » / « estimation » |

---

## Alignement mots-clés ↔ URLs

| Cluster (`mots-cles.md`) | URL |
|--------------------------|-----|
| Home / indépendant | `/` |
| Avant achat | `/expertise-avant-achat/` |
| Fissures | `/expertise-fissures/` |
| Humidité | `/expertise-humidite/` |
| Malfaçons / réception | `/expertise-malfacons-reception/` |
| Assurance / sinistre / sécheresse | `/assistance-expertise-assurance/` |
| Litige artisan | `/litige-artisan/` |
| Structurelles | `/lexpert/` · `/comment-ca-se-passe/` · `/faq/` · `/contact/` |

---

## FAITS vs ESTIMATIONS

| Élément | Statut |
|---------|--------|
| Structure 1 intention / page, slugs, H1, metas proposés | **Recommandation** ORION (pas un fait de trafic) |
| Longueurs meta (≤60 / ≤155) | **FAIT** de comptage sur les chaînes proposées (2026-09-18) |
| Volumes associés aux requêtes | **ESTIMATIONS** — voir `mots-cles.md` |
| Impact ranking | **Non promis** |

---

*Document ORION — analyse & recommandations SEO uniquement. Aucune modification de site. 2026-09-18.*
