# Tailwind CSS — Guide Complet, Pédagogique et Illustré

## Table des matières

1. [Qu’est-ce que Tailwind CSS ?](#quest-ce-que-tailwind-css-)
2. [Installation et configuration](#installation-et-configuration)
3. [Principe des classes utilitaires](#principe-des-classes-utilitaires)
4. [Base du design avec Tailwind](#base-du-design-avec-tailwind)
   - [Couleurs](#couleurs)
   - [Espacement (marge, padding)](#espacement-marge-padding)
   - [Taille](#taille)
   - [Typographie](#typographie)
   - [Bordures et coins arrondis](#bordures-et-coins-arrondis)
   - [Ombres et effets](#ombres-et-effets)
   - [Affichage et positionnement](#affichage-et-positionnement)
   - [Flexbox et Grid](#flexbox-et-grid)
   - [Backgrounds](#backgrounds)
   - [Transitions et animations](#transitions-et-animations)
   - [Filtres et effets visuels](#filtres-et-effets-visuels)
5. [Responsive Design](#responsive-design)
6. [États et variantes (hover, focus, active, etc.)](#etats-et-variantes-hover-focus-active-etc)
7. [Personnalisation avancée](#personnalisation-avancée)
   - [Le fichier tailwind.config.js](#le-fichier-tailwindconfigjs)
   - [Ajouter ses propres couleurs, tailles, etc.](#ajouter-ses-propres-couleurs-tailles-etc)
   - [@apply et extraction de composants](#apply-et-extraction-de-composants)
8. [Optimisation et purge CSS](#optimisation-et-purge-css)
9. [Exemples concrets de composants](#exemples-concrets-de-composants)
10. [FAQ et astuces](#faq-et-astuces)

---

## 1. Qu’est-ce que Tailwind CSS ?

Tailwind CSS est un framework CSS basé sur des **classes utilitaires**.  
Au lieu d’écrire du CSS personnalisé, tu utilises des classes toutes faites dans ton HTML pour appliquer des styles rapidement et précisément.

**Exemple :**
```html
<button class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
  Mon bouton
</button>
```
Ici, chaque classe applique un style précis (couleur, padding, coins arrondis, ombre, effet au survol).

---

## 2. Installation et configuration

### a) Utilisation rapide (CDN)

Pour tester rapidement, ajoute dans le `<head>` de ton HTML :
```html
<script src="https://cdn.tailwindcss.com"></script>
```
**Limite :** Tu ne peux pas personnaliser Tailwind avec cette méthode.

### b) Installation dans un vrai projet

1. **Initialise ton projet :**
   ```bash
   npm init -y
   ```
2. **Installe Tailwind CSS :**
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```
3. **Crée un fichier CSS principal (ex: styles.css) :**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. **Génère le CSS Tailwind :**
   ```bash
   npx tailwindcss -i ./styles.css -o ./dist/output.css --watch
   ```
5. **Inclue le CSS généré dans ton HTML :**
   ```html
   <link href="dist/output.css" rel="stylesheet">
   ```

---

## 3. Principe des classes utilitaires

Chaque classe Tailwind applique **un seul style**.  
Tu composes tes éléments en empilant les classes.

**Exemple :**
```html
<div class="bg-gray-100 p-6 rounded-lg shadow-lg">
  <h2 class="text-2xl font-bold mb-2">Titre</h2>
  <p class="text-gray-700">Contenu du bloc</p>
</div>
```

---

## 4. Base du design avec Tailwind

### Couleurs

- **Fond** : `bg-blue-500`, `bg-red-200`, `bg-green-700`, etc.
- **Texte** : `text-white`, `text-gray-800`, `text-yellow-400`, etc.
- **Bordure** : `border-blue-500`, `border-gray-300`, etc.

**Exemple :**
```html
<p class="bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 p-4">
  Attention : ceci est un message important !
</p>
```

### Espacement (marge, padding)

- **Marge** : `m-4` (marge sur tous les côtés), `mt-2` (marge en haut), `mx-8` (marge horizontale)
- **Padding** : `p-6` (padding sur tous les côtés), `py-2` (padding vertical), `pl-4` (padding à gauche)

**Exemple :**
```html
<div class="m-4 p-4 bg-gray-200">
  Bloc avec marge et padding
</div>
```

### Taille

- **Largeur** : `w-1/2` (50%), `w-full` (100%), `w-64` (16rem)
- **Hauteur** : `h-10` (2.5rem), `h-screen` (hauteur de l’écran)

**Exemple :**
```html
<img class="w-32 h-32" src="avatar.jpg" alt="Avatar">
```

### Typographie

- **Taille** : `text-sm`, `text-lg`, `text-2xl`
- **Poids** : `font-bold`, `font-light`
- **Style** : `italic`, `uppercase`, `tracking-wide` (espacement des lettres)
- **Alignement** : `text-center`, `text-right`

**Exemple :**
```html
<h1 class="text-3xl font-extrabold text-center uppercase">Bienvenue !</h1>
```

### Bordures et coins arrondis

- **Bordure** : `border`, `border-2`, `border-red-500`
- **Coins arrondis** : `rounded`, `rounded-lg`, `rounded-full`

**Exemple :**
```html
<div class="border-2 border-blue-400 rounded-lg p-4">
  Bloc avec bordure et coins arrondis
</div>
```

### Ombres et effets

- **Ombre** : `shadow`, `shadow-md`, `shadow-lg`
- **Opacité** : `opacity-50`, `opacity-100`

**Exemple :**
```html
<button class="bg-green-500 text-white px-4 py-2 rounded shadow-lg hover:opacity-80">
  Valider
</button>
```

### Affichage et positionnement

- **Display** : `block`, `inline-block`, `hidden`
- **Position** : `relative`, `absolute`, `fixed`, `top-0`, `left-4`
- **Z-index** : `z-10`, `z-50`

**Exemple :**
```html
<div class="relative">
  <span class="absolute top-0 right-0 bg-red-500 text-white px-2 rounded-full">Nouveau</span>
  <img src="produit.jpg" class="w-32 h-32">
</div>
```

### Flexbox et Grid

- **Flex** : `flex`, `flex-row`, `flex-col`, `items-center`, `justify-between`
- **Grid** : `grid`, `grid-cols-2`, `gap-4`

**Exemple Flex :**
```html
<div class="flex items-center justify-between">
  <span>Gauche</span>
  <span>Droite</span>
</div>
```

**Exemple Grid :**
```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-100">1</div>
  <div class="bg-blue-200">2</div>
  <div class="bg-blue-300">3</div>
</div>
```

### Backgrounds

- **Couleur** : `bg-indigo-500`
- **Image** : `bg-cover`, `bg-center`
- **Dégradé** : `bg-gradient-to-r from-blue-400 to-green-400`

**Exemple :**
```html
<div class="bg-gradient-to-r from-purple-400 to-pink-400 p-8 rounded-lg text-white">
  Dégradé magnifique !
</div>
```

### Transitions et animations

- **Transition** : `transition`, `duration-300`, `ease-in-out`
- **Animation** : `animate-bounce`, `animate-spin`

**Exemple :**
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
  Bouton animé
</button>
```

### Filtres et effets visuels

- **Blur** : `blur`, `blur-sm`, `blur-lg`
- **Grayscale** : `grayscale`
- **Brightness** : `brightness-50`, `brightness-100`

**Exemple :**
```html
<img class="w-32 h-32 rounded-full filter grayscale hover:grayscale-0 transition" src="avatar.jpg">
```

---

## 5. Responsive Design

Avec Tailwind, tu ajoutes un préfixe pour chaque taille d’écran :
- `sm:` (≥ 640px)
- `md:` (≥ 768px)
- `lg:` (≥ 1024px)
- `xl:` (≥ 1280px)
- `2xl:` (≥ 1536px)

**Exemple :**
```html
<div class="bg-red-500 md:bg-green-500 lg:bg-blue-500">
  Couleur change selon la taille d'écran !
</div>
```
Ici, le fond est rouge sur mobile, vert sur tablette, bleu sur ordinateur.

---

## 6. États et variantes (hover, focus, active, etc.)

Tu peux appliquer des styles selon l’état de l’élément :
- `hover:` : au survol
- `focus:` : quand l’élément est sélectionné
- `active:` : quand il est cliqué
- `disabled:` : quand il est désactivé

**Exemple :**
```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded">
  Bouton interactif
</button>
```

---

## 7. Personnalisation avancée

### Le fichier tailwind.config.js

C’est ici que tu ajoutes tes propres couleurs, tailles, polices, etc.

**Exemple :**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'ma-couleur': '#123456',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        'custom': ['"Comic Sans MS"', 'cursive'],
      }
    },
  },
}
```

### Ajouter ses propres couleurs, tailles, etc.

Après modification, relance la commande de build Tailwind pour prendre en compte les changements.

### @apply et extraction de composants

Tu peux créer des classes personnalisées dans ton CSS avec `@apply` :

**Exemple :**
```css
/* styles.css */
.btn-primaire {
  @apply bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700;
}
```
**Utilisation :**
```html
<button class="btn-primaire">Bouton personnalisé</button>
```

---

## 8. Optimisation et purge CSS

Pour que ton fichier CSS final soit léger, Tailwind supprime automatiquement les classes non utilisées (purge) en production.

**Exemple de config dans tailwind.config.js :**
```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  // ...
}
```
Cela indique à Tailwind où chercher les classes utilisées.

---

## 9. Exemples concrets de composants

### Carte utilisateur

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
  <img class="w-24 h-24 rounded-full mx-auto" src="avatar.jpg" alt="Avatar">
  <div class="text-center mt-4">
    <h2 class="text-xl font-bold">Jean Dupont</h2>
    <p class="text-gray-600">Développeur Web</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Contacter
    </button>
  </div>
</div>
```

### Barre de navigation responsive

```html
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">MonSite</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Accueil
      </a>
      <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        À propos
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Se connecter</a>
    </div>
  </div>
</nav>
```

### Formulaire stylé

```html
<form class="max-w-md mx-auto bg-white p-8 rounded shadow">
  <div class="mb-4">
    <label class="block text-gray-700 mb-2" for="email">Email</label>
    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Votre email">
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 mb-2" for="password">Mot de passe</label>
    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" placeholder="********">
  </div>
  <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Se connecter</button>
</form>
```

---

## 10. FAQ et astuces

**Q : Est-ce que Tailwind CSS remplace complètement le CSS classique ?**  
R : Non, tu peux toujours écrire du CSS personnalisé pour des cas particuliers.

**Q : Puis-je utiliser Tailwind avec React, Vue, Angular, etc. ?**  
R : Oui, Tailwind fonctionne avec tous les frameworks modernes.

**Q : Comment faire un design responsive ?**  
R : Utilise les préfixes `sm:`, `md:`, `lg:`, etc. devant tes classes utilitaires.

**Q : Comment ajouter mes propres couleurs ou tailles ?**  
R : Modifie le fichier `tailwind.config.js` dans la section `extend`.

**Q : Comment optimiser la taille du fichier CSS final ?**  
R : Utilise la fonctionnalité de purge de Tailwind pour supprimer les classes inutilisées lors de la production.

---

**Bravo !**  
Avec ce guide, tu as toutes les bases et les outils pour créer des interfaces modernes, responsives et élégantes avec Tailwind CSS.  
Teste, expérimente, et amuse-toi à styliser tes projets !