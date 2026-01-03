# Mon Portfolio

Ce projet est un portfolio minimaliste et élégant construit avec Next.js, Tailwind CSS et Framer Motion.

## Fonctionnalités

- **Design Responsive** : Adapté à tous les écrans (mobile, tablette, desktop).
- **Mode Sombre/Clair** : Toggle accessible avec transitions fluides.
- **Animations** : Interactions discrètes et apparitions fluides avec Framer Motion.
- **Performance** : Optimisé pour le SEO et la vitesse (Next.js App Router).
- **Accessibilité** : Respect des bonnes pratiques (balises sémantiques, contrastes).

## Structure du Projet

- `src/app` : Pages de l'application (Home, Projects, About, Contact).
- `src/components` : Composants réutilisables (Navbar, Footer, ProjectCard, etc.).
- `src/lib` : Utilitaires (ex: gestion des classes CSS).

## Installation

1. Cloner le dépôt :
   ```bash
   git clone <votre-url-repo>
   cd my-portfolio
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## Déploiement

### Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com).
2. Installez Vercel CLI ou connectez votre dépôt GitHub.
3. Importez le projet dans Vercel.
4. Les paramètres par défaut de Next.js fonctionnent automatiquement.
5. Cliquez sur **Deploy**.

### Netlify

1. Créez un compte sur [Netlify](https://netlify.com).
2. Glissez-déposez le dossier du projet ou connectez GitHub.
3. Paramètres de build :
   - Build command : `npm run build`
   - Publish directory : `.next` (ou via le plugin Netlify Next.js Runtime).

## Personnalisation

- **Couleurs** : Modifiez `src/app/globals.css` pour changer la palette (variable `--primary` pour la couleur d'accent).
- **Contenu** : Mettez à jour les fichiers dans `src/app` et les listes de données (projets, compétences).
