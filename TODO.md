# TODO — Steroids Website

---

## Corrections immédiates ✅ faites

- [x] `ArticleBody.astro` — `href="#contact"` → `href="/contact"`
- [x] `ContactInfo.astro` — LinkedIn → `https://www.linkedin.com/company/steroids-studio`
- [x] `ContactInfo.astro` — Twitter + GitHub → supprimés
- [x] `Footer.astro` — Twitter → supprimé
- [x] `Footer.astro` — LinkedIn → `https://www.linkedin.com/company/steroids-studio`
- [x] `Footer.astro` — Podcast → supprimé
- [x] `Footer.astro` — Blog → redirige vers `/insights`
- [x] `Footer.astro` — Analyses → redirige vers `/insights`
- [x] `Footer.astro` — À propos → `/a-propos`
- [x] `Footer.astro` — Leadership → `/a-propos#leadership`
- [x] `Footer.astro` — Valeurs → `/a-propos#valeurs`
- [ ] `strategic-resilience.astro` — Boutons partage LinkedIn / X / Email → supprimer
- [ ] `RelatedArticles.astro` — rendre dynamique (3 articles de la même catégorie)

---

## Pages manquantes

### `/insights` — Listing des articles
- [ ] Créer `src/pages/insights/index.astro`
- [ ] Afficher uniquement les articles publiés (fichiers sans `_`)
- [ ] Système de filtres par catégorie (Opérations, Finance, Stratégie, Croissance…)
- [ ] Hero de la page (titre + sous-titre)
- [ ] Grille de cards (image, tag catégorie, titre, date, temps de lecture)

### `/a-propos`
- [ ] Créer `src/pages/a-propos.astro`
- [ ] **Positionnement** : "partenaire de croissance nouvelle génération"
- [ ] **Histoire** :
  - Né d'un client qui coulait — tout était à refaire
  - Philosophie lean : aller vite, générer de la valeur immédiatement
  - Couper rapidement ce qui ne rapporte plus, ouvrir vite de nouvelles sources de revenus
  - Ne pas tomber dans le piège du dev traditionnel (trop long, trop d'itérations)
  - C'est une course contre le temps — un projet est rentable ou il ne l'est pas
  - Steroids bouscule, dérange, se trompe parfois — mais ajuste vite et avance toujours
- [ ] **Pas de section équipe / leadership**
- [ ] **Section valeurs** (`id="valeurs"`) :
  - Vitesse d'exécution — décider, faire, corriger. Dans cet ordre.
  - ROI comme boussole — un projet vaut ou ne vaut pas. C'est tout.
  - Courage de couper — savoir arrêter ce qui ne marche pas est une compétence rare.
  - Lean radical — chaque ressource doit générer de la valeur, immédiatement.
  - Ajustement continu — se tromper n'est pas un échec. Ne pas corriger en est un.
- [ ] **Logos clients** (`id="clients"`) : HSBC · Groupe Casino · Groupe VYV · Etam
  - [ ] Trouver les logos SVG/PNG fond transparent
- [ ] **Pas de chiffres clés**

### `/localites`
- [ ] Créer `src/pages/localites.astro`
- [ ] Contenu à définir (bureaux, zones d'intervention)

### `/industries`
- [ ] Créer `src/pages/industries.astro`
- [ ] Secteurs couverts + cards avec cas d'usage

### `/capacites`
- [ ] Créer `src/pages/capacites.astro`
- [ ] Clarifier périmètre vs `/services`

### `/tech-ia`
- [ ] Créer `src/pages/tech-ia.astro`
- [ ] Positionnement IA de Steroids, outils, méthodologies

### `/etudes-de-cas`
- [ ] Créer `src/pages/etudes-de-cas.astro`
- [ ] Grille de case studies + template page individuelle

---

## Articles à développer (19 drafts)

> Auteur unique : **Oswald BERNARD**
> Images hero : générées par IA

### Série "Douleurs dirigeants"
- [ ] `_clients-epuisants.astro` — Vos clients vous épuisent ?
- [ ] `_factures-impayees.astro` — Arrêtez de chasser vos factures
- [ ] `_equipes-processus.astro` — Vos équipes vous déçoivent ?
- [ ] `_peur-effondrement.astro` — La peur qui vous réveille la nuit
- [ ] `_resistance-changement.astro` — Vous en avez marre des "on a toujours fait comme ça"
- [ ] `_fidelisation-radicale.astro` — Les clients dépendants, c'est mieux
- [ ] `_clients-toxiques-licencier.astro` — Licencier vos pires clients
- [ ] `_fatigue-decisionnelle.astro` — La fatigue décisionnelle
- [ ] `_fournisseurs-negociation.astro` — Vos fournisseurs vous prennent pour un porte-monnaie
- [ ] `_liberte-dirigeant.astro` — Mon entreprise me volait ma vie

### Série "Croissance & stratégie"
- [ ] `_projet-qui-sort-pas.astro` — Votre projet n'est toujours pas sorti
- [ ] `_pme-vs-startup.astro` — PME vs startup : quelle différence ?
- [ ] `_pme-lever-fonds.astro` — Une PME peut-elle lever des fonds ?
- [ ] `_besoin-site-internet.astro` — Ai-je besoin d'un site internet ?
- [ ] `_seo-cest-quoi.astro` — Le SEO c'est quoi ?
- [ ] `_influence-reseaux-sociaux.astro` — Influence sur les réseaux sociaux
- [ ] `_pricing-complexe.astro` — Modèles de pricing plus complexes
- [ ] `_paiement-rapide.astro` — Se faire payer plus vite
- [ ] `_independance-banques.astro` — Ne plus dépendre des banques

### Checklist de publication (par article)
- [ ] Écrire le contenu complet
- [ ] Image hero générée par IA (`/images/insight-xxx.jpg`)
- [ ] Auteur : Oswald BERNARD
- [ ] Assigner une catégorie (pour les filtres)
- [ ] Configurer les 3 articles liés (même catégorie, dynamique)
- [ ] Renommer (retirer le `_`) pour publier
