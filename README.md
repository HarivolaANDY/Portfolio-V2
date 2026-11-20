# Mon Portfolio

Ce projet est un portfolio minimaliste et élégant construit avec Vite, React, TypeScript, Tailwind CSS et Framer Motion.

## Fonctionnalités

- **Design Responsive** : Adapté à tous les écrans (mobile, tablette, desktop).
- **Mode Sombre/Clair** : Toggle accessible avec transitions fluides.
- **Animations** : Interactions discrètes et apparitions fluides avec Framer Motion.
- **Performance** : Optimisé pour le SEO et la vitesse (Vite, découpage du code par route).
- **Accessibilité** : Respect des bonnes pratiques (balises sémantiques, contrastes).

## Structure du Projet

- `src/pages` : Pages de l'application (Home, Projects, About, Contact).
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
4. Vercel détecte Vite automatiquement (le fichier `vercel.json` gère les routes de la SPA).
5. Cliquez sur **Deploy**.

### Netlify

1. Créez un compte sur [Netlify](https://netlify.com).
2. Glissez-déposez le dossier du projet ou connectez GitHub.
3. Paramètres de build :
   - Build command : `npm run build`
   - Publish directory : `dist` (le fichier `public/_redirects` gère les routes de la SPA).

## Personnalisation

- **Couleurs** : Modifiez `src/index.css` pour changer la palette (variable `--primary` pour la couleur d'accent).
- **Contenu** : Mettez à jour les fichiers dans `src/pages` et les listes de données (projets, compétences).

## Scripts

- `npm run dev` : serveur de développement Vite.
- `npm run build` : vérification des types (`tsc -b`) puis build de production dans `dist/`.
- `npm run preview` : prévisualise le build de production.
- `npm run lint` : ESLint.
- `npm test` : tests unitaires (`node --test`).
