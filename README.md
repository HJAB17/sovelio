# Sovelio - L'indépendance numérique européenne

![Sovelio Banner](https://img.shields.io/badge/Sovelio-L'indépendance%20numérique%20européenne-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-38B2AC)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222)

**Zéro dépendance US. 100% Protection RGPD.** Une plateforme moderne pour découvrir et comparer les solutions numériques souveraines européennes et françaises.

## ✨ Fonctionnalités

### 🎨 Interface « Glassmorphism & Gradients »
- **Mesh Gradient animé** : arrière-plan vivant composé de voiles de dégradés floutés (bleu cobalt, violet tech, vert émeraude « souveraineté ») qui dérivent lentement
- **Cartes en verre dépoli** : effet glassmorphism (`backdrop-filter: blur`, bordures semi-transparentes lumineuses) pour un rendu spatial moderne
- **Palette « Souveraineté & Confiance »** :
  - Bleu cobalt `#2563EB` (primaire)
  - Émeraude `#10B981` (validation / souveraineté)
  - Violet subtil `#8B5CF6` (innovation / IA)
  - Indigo nuit `#0B1120` en mode sombre
- **Badges néon discrets** pour les labels de confiance (SecNumCloud, Open Source, RGPD…)
- **Mode sombre / clair natif** avec transitions douces sur toutes les couleurs et ombres

### ⌨️ Command Palette (façon Raycast / Spotlight)
- Recherche instantanée ouverte via **Ctrl+K** / **Cmd+K** ou le bouton du header
- Filtre temps réel sur le nom, la description, les labels, les certifications et l'hébergement
- **Surbrillance des mots-clés** dans les résultats
- Navigation clavier complète : `↑` `↓` pour naviguer, `Entrée` pour ouvrir, `Échap` pour fermer
- Sélection = scroll fluide vers la carte correspondante

### 🔍 Filtres interactifs dynamiques
- **Chips multi-sélection** par catégorie avec compteurs dynamiques mis à jour en direct
- **Filtres « Confiance »** : SecNumCloud, Open Source, RGPD/GDPR, Chiffrement E2E, Hors CLOUD Act
- Compteur animé (« 80 solutions trouvées » → « 12 solutions trouvées ») avec transition numérique fluide
- **Animations FLIP** : les cartes apparaissent, disparaissent et se réorganisent sans saccade lors du filtrage

### 💫 Micro-interactions & feedback visuel
- **Effet spotlight** : halo lumineux suivant le curseur sur chaque carte
- **Lévitation au survol** + bordure en dégradé lumineux (cobalt → violet → émeraude)
- **Feedback de pression** (`active:scale`) sur tous les éléments cliquables
- **Boutons magnétiques** : le bouton d'action attire légèrement le curseur et son fond s'illumine
- **Infobulles élégantes** au survol des badges de conformité expliquant pourquoi la solution est souveraine
- **Typographie animée** : titre en dégradé textuel animé + mot rotatif en fondu (« européenne / souveraine / ouverte »)
- Support `prefers-reduced-motion` pour l'accessibilité

### 🛡️ Sections Éducatives
- **« Le Mur de Protection »** : comparaison interactive RGPD vs CLOUD Act
- **Parcours de Migration** : packs pré-configurés (Google Workspace, Microsoft 365, Cloud US)
- **Zoom IA Souveraine 2026** : Mistral AI, LightOn, Aleph Alpha, Le Chat

## 🏗️ Structure Technique

```
sovelio/
├── app/
│   ├── layout.tsx           # Layout + mesh gradient animé + ThemeProvider
│   ├── page.tsx             # Page d'accueil : filtres, grille FLIP, command palette
│   └── globals.css          # Design system : palette, glassmorphism, animations
├── components/
│   ├── Header.tsx           # Header sticky + hero + déclencheur Ctrl+K
│   ├── CategoryNav.tsx      # Chips de filtres multi-sélection avec compteurs
│   ├── SolutionCard.tsx     # Carte solution glassmorphism + tooltips conformité
│   ├── CommandPalette.tsx   # Recherche rapide façon Raycast (Ctrl+K)
│   ├── SpotlightCard.tsx    # Carte réutilisable avec halo suivant le curseur
│   ├── MagneticButton.tsx   # Bouton magnétique réutilisable
│   ├── AnimatedWord.tsx     # Mot rotatif animé en fondu
│   ├── ProtectionWall.tsx   # Section éducative RGPD vs CLOUD Act
│   ├── MigrationPath.tsx    # Parcours de migration pré-configurés
│   ├── ThemeContext.tsx     # Gestion du thème clair/sombre
│   └── ThemeToggle.tsx      # Bouton de bascule du thème
├── lib/
│   └── data.ts              # Données structurées et typées des solutions
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD : build + déploiement GitHub Pages
└── public/                  # Assets statiques
```

## 📦 Installation et Démarrage

```bash
# Cloner le projet
git clone https://github.com/HJAB17/sovelio.git
cd sovelio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🚀 Déploiement sur GitHub Pages

Le site est déployé automatiquement sur **https://hjab17.github.io/sovelio/** à chaque push sur `main`.

### Configuration requise (une seule fois)
1. Aller dans **Settings → Pages** du repository
2. **Source** : sélectionner **« GitHub Actions »**

### Déploiement automatique
À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` :
1. Installe les dépendances (`npm ci`)
2. Compile le site statique (`npm run build` → dossier `out/`)
3. Déploie le résultat sur GitHub Pages

Suivre l'avancement dans l'onglet **Actions** du repository (~1-2 min).

### Déclenchement manuel
Onglet **Actions** → *Deploy to GitHub Pages* → **Run workflow**.

### Pousser le code avec un Personal Access Token
Si git demande une authentification HTTPS :

1. Créer un token sur https://github.com/settings/tokens (*Generate new token (classic)*, scope **`repo`**)
2. Configurer le remote :
   ```bash
   git remote set-url origin https://<VOTRE_TOKEN>@github.com/HJAB17/sovelio.git
   ```
3. Pousser :
   ```bash
   git add .
   git commit -m "Votre message"
   git push origin main
   ```

> ⚠️ **Sécurité** : ne jamais commiter un token dans le code. Révoquez et régénérez vos tokens régulièrement sur https://github.com/settings/tokens.

### Build local
```bash
# Générer le site statique dans out/
npm run build
```

## 📱 Responsive Design
- **Mobile-first** avec breakpoints Tailwind
- **Command palette** accessible au clavier sur tous les écrans
- **Grille adaptative** : 1 → 2 colonnes selon l'écran
- Chips de filtres repliées intelligemment sur mobile

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
- **Navigateurs** : Vivaldi, Mullvad Browser, LibreWolf, Ecosia Browser…
- **OS** : EU OS, openSUSE, Linux Mint, Zorin OS, NixOS, Qubes OS…

## 📄 Licence

Projet créé dans le cadre d'une démonstration technique. Les logos et noms de marques sont la propriété de leurs détenteurs respectifs.

---

**Sovelio** - Parce que vos données méritent d'être protégées par le droit européen, pas par le CLOUD Act américain.