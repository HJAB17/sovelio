# Sovelio - L'indépendance numérique européenne

![Sovelio Banner](https://img.shields.io/badge/Sovelio-L'indépendance%20numérique%20européenne-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-38B2AC)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222)

**Zéro dépendance US. 100% Protection RGPD.** Une plateforme moderne pour découvrir et comparer les solutions numériques souveraines européennes et françaises.

## ✨ Fonctionnalités

### 🏛️ Architecture du site
- **Interface "Apple-esque"** : Design minimaliste avec coins arrondis, typographie épurée, couleurs Blanc pur, Gris perle, Bleu de France
- **Header interactif** : Toggle pour filtrer "France Uniquement" / "Europe Globale"
- **Section Hero** : Message d'accroche fort avec statistiques clés
- **Navigation par catégories** : 6 grandes tuiles interactives avec icônes modernes

### 📊 Composants Solution
Pour chaque solution, la fiche complète comprend :
- **Nom et logo** de la solution avec drapeau 🇫🇷 ou 🇪🇺
- **Labels** : SecNumCloud, France Cybersecurity, etc.
- **Catégorie visuelle** : Icône colorée représentant la catégorie (Email, Bureautique, IA, Drive, Cloud, Sécurité)
 - **Badge de Souveraineté** : "Souveraineté garantie — Aucun lien avec les USA"
 - **Score de Souveraineté (Indice S)** : Calculé sur 3 piliers (hébergement, juridiction, qualité logicielle)
 - **Mention Juridiction** : "Hors juridiction US — Protection maximale contre le CLOUD Act"

### 🛡️ Sections Éducatives
- **"Le Mur de Protection"** : Comparaison interactive RGPD vs CLOUD Act
- **Dictionnaire simplifié** : Explication des termes clés
- **Cas d'étude** : Nicolas Guillou et les risques géopolitiques

### 🚀 Parcours de Migration
- **Pack Google Workspace** : Mailo + Wimi + Leviia + Mistral AI
- **Pack Microsoft 365** : BlueMind + Nextcloud + OnlyOffice + Aleph Alpha
- **Pack Cloud US** : OVHcloud + 3DS Outscale + IONOS + Nextcloud
- **Zoom IA Souveraine 2026** : Focus sur Mistral AI, LightOn, Aleph Alpha

## 🏗️ Structure Technique

```
sovelio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal avec metadata
│   ├── page.tsx           # Page d'accueil avec tous les composants
│   └── globals.css        # Design system et styles Tailwind
├── components/            # Composants React réutilisables
│   ├── Header.tsx         # Header avec toggle de filtrage
│   ├── CategoryNav.tsx    # Navigation par catégories avec icônes
│   ├── SolutionCard.tsx   # Fiche solution complète
│   ├── ProtectionWall.tsx # Section éducative RGPD vs CLOUD Act
│   └── MigrationPath.tsx  # Parcours de migration pré-configurés
├── lib/
│   └── data.ts           # Données structurées des 25+ solutions
└── public/               # Assets statiques
    └── logos/            # Logos des solutions
```

## 🎨 Design System

### Couleurs
- **Blanc pur** : `#FFFFFF`
- **Gris perle** : `#F5F5F7`
- **Bleu de France** : `#0055A4` (accent principal)
- **Vert de validation** : `#34C759` (badges, succès)
- **Rouge alerte** : `#FF3B30` (risques, CLOUD Act)

### Typographie
- **Police principale** : Inter (Google Fonts) - moderne et lisible
- **Hiérarchie** :
  - Titres : `text-4xl` à `text-6xl` (responsive)
  - Sous-titres : `text-xl` à `text-3xl`
  - Corps : `text-base` à `text-lg`

### Composants UI
- **Coins arrondis** : `rounded-2xl`, `rounded-xl`, `rounded-lg`
- **Ombres** : `shadow-subtle`, `shadow-card` (variables CSS)
- **Transitions** : `transition-all duration-300`
- **Effets** : `backdrop-blur-md`, `gradient-to-br`

## 📦 Installation et Démarrage

```bash
# Cloner le projet
git clone <repository-url>
cd sovelio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🚀 Déploiement sur GitHub Pages

Ce projet est configuré pour un déploiement automatique sur GitHub Pages.

### Déploiement automatique (recommandé)

1. **Créer le repository** `sovelio` sur GitHub
2. **Pousser le code** :
   ```bash
   git remote add origin https://github.com/<votre-username>/sovelio.git
   git branch -M main
   git push -u origin main
   ```
3. **Activer GitHub Pages** :
   - Aller dans `Settings > Pages`
   - Source : `GitHub Actions`
4. **Le déploiement est automatique** à chaque push sur `main` !

### Build local

```bash
# Générer le site statique
npm run build

# Le dossier out/ contient le site prêt à être déployé
```

## 📱 Responsive Design
- **Mobile-first** avec breakpoints Tailwind
- **Navigation catégories** : Scroll horizontal sur mobile
- **Grille adaptative** : 1 → 2 → 3 colonnes selon l'écran

## 🏆 Solutions Incluses

### 🇫🇷 Champions Français
- **Email** : Mailo, BlueMind, Mail in France (Cheops)
- **Bureautique** : Wimi, Jamespot, Talkspirit, Skuria, Whaller
- **IA** : Mistral AI, LightOn, IA-souveraine.fr
- **Drive** : Leviia, Shadow Drive, Oodrive
- **Cloud** : OVHcloud, 3DS Outscale, Scaleway, NumSpot, Clever Cloud, Cloud Temple
- **Sécurité** : Tehtris, Pradeo

### 🇪🇺 Champions Européens
- **Email** : Proton Mail (CH), Tuta (DE), Posteo (DE), Mailfence (BE), Wire (CH)
- **Bureautique** : Nextcloud (DE), OnlyOffice (LV)
- **IA** : Aleph Alpha (DE), Euria (CH - Infomaniak), Lumo (CH - Proton)
- **Drive** : kDrive (Infomaniak - CH)
- **Cloud** : IONOS (DE), Hetzner (DE), Exoscale (CH), Aruba Cloud (IT), UpCloud (FI), Open Telekom Cloud (DE)

## 🎯 Objectifs Atteints

### ✅ Exigences Fonctionnelles Complètes
- [x] Design "Apple-esque" avec couleurs spécifiées
- [x] Header avec toggle France/Europe
- [x] Section Hero avec slogan
- [x] Navigation par 6 catégories avec icônes
- [x] Fiche solution complète avec carte catégorie visuelle
 - [x] Badge "Souveraineté garantie"
- [x] Score de Souveraineté (Indice S)
- [x] Section "Mur de Protection" RGPD vs CLOUD Act
- [x] Parcours de migration pré-configurés
- [x] Focus IA Souveraine 2026

### ✅ Exigences Techniques
- [x] Next.js 16 (App Router) avec TypeScript
- [x] Tailwind CSS pour le styling
- [x] Heroicons pour les icônes
- [x] Export statique pour GitHub Pages
- [x] Filtrage et état React
- [x] Design responsive mobile/desktop
- [x] Données structurées et typées
- [x] CI/CD avec GitHub Actions

## 📄 Licence

Projet créé dans le cadre d'une démonstration technique. Les logos et noms de marques sont la propriété de leurs détenteurs respectifs.

---

**Sovelio** - Parce que vos données méritent d'être protégées par le droit européen, pas par le CLOUD Act américain.