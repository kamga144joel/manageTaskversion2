<template>
  <!-- Ajout des couleurs de fond de base et min-h-screen -->
  <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">

    <!-- En-tête avec titre et sélecteur de mode -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Cours Complet sur Tailwind CSS</h1>
      <button
        @click="toggleDarkMode"
        class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
        aria-label="Toggle Dark Mode"
      >
        <!-- Icône Soleil (Mode Clair) -->
        <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <!-- Icône Lune (Mode Sombre) -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>

    <!-- Section Sommaire (Table of Contents) -->
    <!-- Fond et texte ajustés pour les deux modes -->
    <div class="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Sommaire</h2> {/* Correction de dark:text-slate-700-200 */}
      <ul class="list-decimal list-inside space-y-2">
        <li>
          <button @click="goToPage(1)" :class="['sommaire-link', { 'font-bold text-indigo-700 dark:text-indigo-300': currentPage === 1 }]">
            Responsive Design avec Tailwind CSS
          </button>
        </li>
        <li>
          <button @click="goToPage(2)" :class="['sommaire-link', { 'font-bold text-indigo-700 dark:text-indigo-300': currentPage === 2 }]">
            Concepts Clés (Classes Utilitaires, Dark Mode, Directives)
          </button>
        </li>
        <li>
          <button @click="goToPage(3)" :class="['sommaire-link', { 'font-bold text-indigo-700 dark:text-indigo-300': currentPage === 3 }]">
            Exemples d'Utilisation
          </button>
        </li>
        <li>
          <button @click="goToPage(4)" :class="['sommaire-link', { 'font-bold text-indigo-700 dark:text-indigo-300': currentPage === 4 }]">
            Personnalisation Avancée
          </button>
        </li>
        <li>
          <button @click="goToPage(5)" :class="['sommaire-link', { 'font-bold text-indigo-700 dark:text-indigo-300': currentPage === 5 }]">
            Tailwind UI (Exemples)
          </button>
        </li>
        <li>
          <button @click="goToPage(6)" :class="['sommaire-link', { 'font-bold text-indigo-700 dark:text-indigo-300': currentPage === 6 }]">
            Intégration de highlight.js
          </button>
        </li>
      </ul>
    </div>
    <!-- Fin Section Sommaire -->


    <!-- Page Content Area -->
    <!-- Ajout des couleurs de texte par défaut pour le contenu -->
    <div class="min-h-[60vh] mb-8 text-gray-800 dark:text-gray-200">

      <!-- Section: Responsive Design (Page 1) -->
      <section v-if="currentPage === 1" data-page="1" class="mb-8"> {/* text-gray-800 dark:text-gray-200 hérité */}
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">1. Responsive Design avec Tailwind CSS</h2> {/* Titre adapté */}
        <p class="mb-2">
          Tailwind CSS facilite la création de designs responsives grâce à son système de préfixes. Vous pouvez appliquer différents styles en fonction de la taille de l'écran en utilisant les préfixes suivants :
        </p>
        <ul class="list-disc list-inside mb-2">
          <li><code>sm:</code> (small) : pour les écrans de 640px et plus</li>
          <li><code>md:</code> (medium) : pour les écrans de 768px et plus</li>
          <li><code>lg:</code> (large) : pour les écrans de 1024px et plus</li>
          <li><code>xl:</code> (extra large) : pour les écrans de 1280px et plus</li>
          <li><code>2xl:</code> (2x extra large) : pour les écrans de 1536px et plus</li>
        </ul>
        <p class="mb-2">
          Exemple : <code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;&lt;/div&gt;</code>. Cet élément prendra toute la largeur sur les petits écrans, la moitié de la largeur sur les écrans moyens, et un tiers de la largeur sur les grands écrans.
        </p>
        <p class="mb-2">
          Il est important d'adopter une approche "mobile-first" en commençant par styliser votre site pour les petits écrans, puis en ajoutant des styles pour les écrans plus grands.
        </p>
        <p class="mb-2">
          Exemple :
          <pre><code class="language-html">&lt;div class="flex flex-col md:flex-row"&gt;
  &lt;div class="w-full md:w-1/2 bg-blue-100 dark:bg-blue-900 p-4 text-blue-900 dark:text-blue-100"&gt;Colonne 1&lt;/div&gt; {/* Couleurs ajustées */}
  &lt;div class="w-full md:w-1/2 bg-green-100 dark:bg-green-900 p-4 text-green-900 dark:text-green-100"&gt;Colonne 2&lt;/div&gt; {/* Couleurs ajustées */}
&lt;/div&gt;</code></pre>
        </p>
      </section>

      <!-- Section: Concepts Clés (Page 2) -->
      <section v-if="currentPage === 2" data-page="2" class="mb-8"> {/* text-gray-800 dark:text-gray-200 hérité */}
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">2. Concepts Clés de Tailwind CSS (Approfondi)</h2> {/* Titre adapté */}

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Classes Utilitaires (Utility Classes)</h3> {/* Sous-titre adapté */}
          <p class="mb-2">
            Le cœur de Tailwind. Au lieu d'écrire du CSS personnalisé comme <code>.card-title { font-size: 1.5rem; font-weight: bold; color: #333; }</code>, vous composez directement le style dans votre HTML en utilisant des classes pré-définies :
            <code>&lt;h3 class="text-2xl font-bold text-gray-800 dark:text-white"&gt;Titre&lt;/h3&gt;</code>.
          </p>
          <p class="mb-2">
            <strong>Avantages :</strong>
          </p>
          <ul class="list-disc list-inside mb-2 ml-4">
            <li><strong>Rapidité de développement :</strong> Pas besoin de jongler entre HTML et CSS ou d'inventer des noms de classes.</li>
            <li><strong>Cohérence :</strong> Utilise une échelle de design prédéfinie (espacements, couleurs, tailles) configurable via <code>tailwind.config.js</code>.</li>
            <li><strong>Maintenance facilitée :</strong> Les styles sont locaux à l'élément, réduisant les effets de bord inattendus.</li>
            <li><strong>Performance :</strong> Avec le moteur JIT (Just-In-Time), seul le CSS réellement utilisé est généré, résultant en des fichiers CSS très légers en production.</li>
            <li><strong>Pas de conflits de noms :</strong> Élimine les problèmes liés aux noms de classes CSS globaux.</li>
          </ul>
          <p class="mb-2">
            <strong>Exemples variés :</strong>
          </p>
          <ul class="list-disc list-inside mb-2 ml-4">
            <li>Espacement : <code>p-4</code> (padding), <code>m-2</code> (margin), <code>space-x-4</code> (espace horizontal entre enfants flex/grid)</li>
            <li>Couleurs : <code>text-red-500</code>, <code>bg-yellow-200</code>, <code>border-green-600</code></li>
            <li>Typographie : <code>text-lg</code>, <code>font-semibold</code>, <code>italic</code>, <code>text-center</code>, <code>leading-relaxed</code> (interligne)</li>
            <li>Layout : <code>flex</code>, <code>grid</code>, <code>items-center</code>, <code>justify-between</code>, <code>col-span-2</code></li>
            <li>Bordures : <code>border</code>, <code>border-2</code>, <code>rounded-lg</code>, <code>divide-y</code> (séparateurs)</li>
            <li>États : <code>hover:bg-blue-700</code>, <code>focus:ring-2</code>, <code>disabled:opacity-50</code>, <code>dark:text-white</code> (voir ci-dessous)</li>
          </ul>
          <p class="mb-2">
            L'inconvénient potentiel est un HTML plus verbeux, mais cela est souvent compensé par l'utilisation de composants (Vue, React, etc.) ou de la directive <code>@apply</code> (voir ci-dessous).
          </p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Dark Mode</h3> {/* Sous-titre adapté */}
          <p class="mb-2">
            Tailwind facilite grandement l'implémentation d'un mode sombre. Il utilise le préfixe <code>dark:</code> pour appliquer des styles conditionnels lorsque le mode sombre est actif.
          </p>
          <p class="mb-2">
            <strong>Configuration (<code>tailwind.config.js</code>) :</strong>
            Vous avez deux stratégies principales :
          </p>
          <ul class="list-disc list-inside mb-2 ml-4">
            <li><code>darkMode: 'media'</code> (par défaut) : Utilise la requête média CSS <code>prefers-color-scheme: dark</code>. Le mode sombre s'active/désactive en fonction des préférences du système d'exploitation de l'utilisateur.</li>
            <li><code>darkMode: 'class'</code> : Permet un contrôle manuel. Vous devez ajouter la classe <code>dark</code> à un élément parent (généralement <code>&lt;html&gt;</code> ou <code>&lt;body&gt;</code>) via JavaScript pour activer le mode sombre. C'est la méthode la plus flexible si vous voulez proposer un bouton de bascule.</li>
          </ul>
          <pre><code class="language-javascript">// Exemple de configuration avec la stratégie 'class'
module.exports = {
  darkMode: 'class', // ou 'media'
  // ... autres configurations
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
          <p class="mt-2 mb-2">
            <strong>Utilisation :</strong>
            Préfixez simplement n'importe quelle classe utilitaire avec <code>dark:</code> pour qu'elle ne s'applique qu'en mode sombre.
          </p>
          <pre><code class="language-html">&lt;!-- Change la couleur de fond et de texte en mode sombre --&gt;
&lt;div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow"&gt;
  Contenu qui s'adapte au mode sombre.
&lt;/div&gt;

&lt;!-- Change la couleur de bordure au survol en mode sombre --&gt;
&lt;button class="border border-gray-300 hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400 px-4 py-2 rounded"&gt;
  Bouton
&lt;/button&gt;

&lt;!-- Combinaison avec responsive --&gt;
&lt;p class="text-black dark:text-white md:text-lg md:dark:text-xl"&gt;
  Texte adaptatif.
&lt;/p&gt;</code></pre>
          <p class="mt-2 mb-2">
            Pensez à choisir des couleurs contrastées pour assurer la lisibilité en mode clair comme en mode sombre.
          </p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Directives Tailwind</h3> {/* Sous-titre adapté */}
          {/* ... (contenu des directives, déjà ok avec dark:) ... */}
           <p class="mb-2">
            Tailwind fournit des directives spéciales (commençant par <code>@</code>) à utiliser dans vos fichiers CSS pour accéder à certaines fonctionnalités ou organiser votre code.
          </p>
          <ul class="list-disc list-inside mb-2 ml-4">
            <li>
              <strong><code>@tailwind</code> :</strong> Utilisée pour injecter les styles de base (<code>base</code>), les classes de composants pré-définis (<code>components</code>), et les classes utilitaires (<code>utilities</code>) de Tailwind dans votre CSS. C'est le point d'entrée principal.
              <pre><code class="language-css">/* Dans votre fichier CSS principal (ex: main.css) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Vos styles personnalisés peuvent venir après */</code></pre>
            </li>
            <li>
              <strong><code>@layer</code> :</strong> Permet d'indiquer à Tailwind à quelle "couche" appartient un ensemble de styles personnalisés. Cela aide à contrôler l'ordre des règles CSS et à éviter les problèmes de spécificité. Les couches disponibles sont <code>base</code>, <code>components</code>, et <code>utilities</code>. Vous pouvez également définir vos propres couches.
              <pre><code class="language-css">/* Ajouter des styles de base personnalisés */
@layer base {
  h1 {
    @apply text-3xl font-bold mb-4; /* Utilisation de @apply ici */
  }
  a {
    @apply text-blue-600 underline dark:text-blue-400;
  }
}

/* Définir des composants personnalisés */
@layer components {
  .card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow p-4;
  }
  /* Voir @apply ci-dessous */
}</code></pre>
            </li>
            <li>
              <strong><code>@apply</code> :</strong> Permet d'extraire des combinaisons répétitives de classes utilitaires dans une nouvelle classe CSS personnalisée. C'est utile pour créer des composants réutilisables sans surcharger le HTML. <strong>Il est fortement recommandé d'utiliser <code>@apply</code> à l'intérieur de la directive <code>@layer components</code> ou <code>@layer utilities</code>.</strong>
              <pre><code class="language-css">@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm font-medium;
    @apply hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    @apply dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
  .btn-secondary {
    @apply px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm font-medium;
    @apply hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    @apply dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600;
  }
}</code></pre>
              <pre><code class="language-html">&lt;!-- Utilisation dans le HTML --&gt;
&lt;button class="btn-primary"&gt;Action Principale&lt;/button&gt;
&lt;button class="btn-secondary"&gt;Annuler&lt;/button&gt;
&lt;button class="btn-primary" disabled&gt;Désactivé&lt;/button&gt;</code></pre>
            </li>
            <li>
              <strong><code>@config</code> :</strong> Permet de spécifier un fichier de configuration Tailwind différent pour une section de votre CSS (usage moins courant).
            </li>
             <li>
              <strong><code>theme()</code> (Fonction CSS) :</strong> Bien que ce ne soit pas une directive <code>@</code>, la fonction <code>theme()</code> est cruciale. Elle permet d'accéder aux valeurs de votre configuration Tailwind (couleurs, espacements, polices, etc.) directement dans votre CSS personnalisé.
              <pre><code class="language-css">.custom-element {
  background-color: theme('colors.custom-blue'); /* Utilise la couleur définie dans tailwind.config.js */
  padding: theme('spacing.4'); /* Utilise la valeur d'espacement '4' */
  font-family: theme('fontFamily.custom-font');
}

@layer base {
  body {
    font-family: theme('fontFamily.sans'); /* Appliquer la police sans-serif par défaut du thème */
  }
}</code></pre>
            </li>
             <li>
              <strong><code>@screen</code> :</strong> Permet d'appliquer des styles en fonction des breakpoints définis dans votre configuration Tailwind, similaire aux media queries CSS mais en utilisant les noms de breakpoints (<code>sm</code>, <code>md</code>, <code>lg</code>...).
              <pre><code class="language-css">.element-responsive {
  width: 100%; /* Mobile first */

  @screen sm {
    width: 75%;
  }

  @screen lg {
    width: 50%;
  }
}</code></pre>
            </li>
             <li>
              <strong><code>@variants</code> (Moins utilisé avec JIT) :</strong> Auparavant utilisé pour générer explicitement des variantes (hover, focus, etc.) pour vos classes personnalisées. Avec le moteur JIT, la plupart des variantes sont générées à la volée, rendant <code>@variants</code> moins nécessaire pour les cas d'usage courants.
            </li>
          </ul>
        </div>

        <div class="mb-6">
           <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Personnalisation du Thème</h3> {/* Sous-titre adapté */}
           <p class="mb-2">
             Comme mentionné, le fichier <code>tailwind.config.js</code> est central pour adapter Tailwind à votre design. Vous pouvez y étendre ou remplacer les couleurs, polices, espacements, breakpoints, etc. par défaut.
           </p>
           <pre><code class="language-javascript">module.exports = {
  darkMode: 'class',
  content: [ // Important pour que JIT sache où chercher les classes
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}", // Adaptez selon votre structure
  ],
  theme: {
    extend: { // 'extend' ajoute aux valeurs par défaut, sans 'extend' les remplace
      colors: {
        'custom-blue': '#1E3A8A',
        'brand-primary': { // Nuances d'une couleur
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
      },
      fontFamily: {
        'custom-font': ['"Open Sans"', 'sans-serif'],
        'serif': ['Merriweather', 'serif'], // Remplacer la police serif par défaut
      },
      spacing: {
        '128': '32rem', // Ajouter une nouvelle valeur d'espacement
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Exemple d'ajout d'un plugin officiel
  ],
}</code></pre>
        </div>
      </section>

      <!-- Section: Exemples d'Utilisation (Page 3) -->
      <section v-if="currentPage === 3" data-page="3" class="mb-8"> {/* text-gray-800 dark:text-gray-200 hérité */}
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">3. Exemples d'Utilisation de Tailwind CSS</h2> {/* Titre adapté */}
        {/* ... (Contenu de la page 3, déjà ok avec dark:) ... */}
         <p class="mb-2">
          <strong>Texte :</strong> <code>&lt;p class="text-lg font-medium text-gray-800 dark:text-gray-200"&gt;Ceci est un paragraphe&lt;/p&gt;</code>. Cet exemple utilise les classes <code>text-lg</code> pour la taille de la police, <code>font-medium</code> pour la graisse de la police, <code>text-gray-800</code> pour la couleur du texte en mode clair, et <code>dark:text-gray-200</code> pour la couleur du texte en mode sombre.
        </p>
        <p class="mb-2">
          <strong>Couleurs :</strong>
          <code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-700 dark:hover:bg-blue-900"&gt;Bouton&lt;/button&gt;</code>. Cet exemple utilise les classes <code>bg-blue-500</code> pour la couleur de fond, <code>hover:bg-blue-700</code> pour la couleur de fond au survol, <code>text-white</code> pour la couleur du texte, <code>font-bold</code> pour la graisse de la police, <code>py-2</code> et <code>px-4</code> pour le padding, <code>rounded</code> pour arrondir les coins, <code>dark:bg-blue-700</code> pour la couleur de fond en mode sombre, et <code>dark:hover:bg-blue-900</code> pour la couleur de fond au survol en mode sombre.
        </p>
        <p class="mb-2">
          <strong>Espacements :</strong> <code>&lt;div class="p-4 m-2 bg-gray-100 dark:bg-gray-700 dark:text-white"&gt;Contenu&lt;/div&gt;</code>. Cet exemple utilise les classes <code>p-4</code> pour le padding, <code>m-2</code> pour la marge, <code>bg-gray-100</code> pour la couleur de fond en mode clair, <code>dark:bg-gray-700</code> pour la couleur de fond en mode sombre, et <code>dark:text-white</code> pour la couleur du texte en mode sombre.
        </p>
        <p class="mb-2">
          <strong>Responsive Design :</strong> <code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;Contenu&lt;/div&gt;</code>. Cet exemple utilise les classes <code>w-full</code> pour prendre toute la largeur sur les petits écrans, <code>md:w-1/2</code> pour prendre la moitié de la largeur sur les écrans moyens, et <code>lg:w-1/3</code> pour prendre un tiers de la largeur sur les grands écrans.
        </p>
        <p class="mb-2">
          <strong>Flexbox et Grid :</strong>
          <code>&lt;div class="flex justify-between items-center"&gt;Contenu&lt;/div&gt;</code> pour utiliser Flexbox, et
          <code>&lt;div class="grid grid-cols-3 gap-4"&gt;Contenu&lt;/div&gt;</code> pour utiliser Grid.
        </p>
        <p class="mb-2">
          Exemple de bouton centré :
          <pre><code class="language-html">&lt;div class="flex justify-center"&gt;
  &lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
    Cliquez ici
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
        </p>
      </section>

      <!-- Section: Personnalisation Avancée (Page 4) -->
      <section v-if="currentPage === 4" data-page="4" class="mb-8"> {/* text-gray-800 dark:text-gray-200 hérité */}
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">4. Personnalisation Avancée de Tailwind CSS</h2> {/* Titre adapté */}
        {/* ... (Contenu de la page 4, déjà ok avec dark:) ... */}
         <p class="mb-2">
          Vous pouvez personnaliser le thème de Tailwind CSS en modifiant le fichier <code>tailwind.config.js</code>. Cela vous permet de définir vos propres couleurs, polices, espacements, breakpoints, etc. (Voir Page 2 pour un exemple de configuration).
        </p>
        <p class="mb-2">
          La directive <code>@apply</code> est un outil puissant pour créer des abstractions et garder votre HTML propre, surtout pour des composants réutilisables.
        </p>
        <p class="mb-2">
          Exemple d'utilisation de <code>@apply</code> pour un bouton personnalisé (rappel de la Page 2) :
          <pre><code class="language-css">/* Dans votre fichier CSS, idéalement dans @layer components */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm font-medium;
    @apply hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    @apply dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
  .btn-secondary {
    @apply px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm font-medium;
    @apply hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    @apply dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600;
  }
}</code></pre>
          <pre><code class="language-html">&lt;!-- Utilisation dans le HTML --&gt;
&lt;button class="btn-primary"&gt;Bouton Primaire&lt;/button&gt;
&lt;button class="btn-secondary"&gt;Bouton Secondaire&lt;/button&gt;</code></pre>
        </p>
        <p class="mb-2">
          Utilisez la fonction <code>theme()</code> pour accéder aux valeurs de votre thème dans du CSS personnalisé qui n'utilise pas <code>@apply</code>.
           <pre><code class="language-css">.custom-gradient {
  background-image: linear-gradient(to right, theme('colors.blue.500'), theme('colors.purple.600'));
}</code></pre>
        </p>
      </section>

      <!-- Section: Tailwind UI (Page 5) -->
      <section v-if="currentPage === 5" data-page="5" class="mb-8"> {/* text-gray-800 dark:text-gray-200 hérité */}
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">5. Tailwind UI (Exemples)</h2> {/* Titre adapté */}
        <p class="mb-2">
          Tailwind UI est une collection de composants d'interface utilisateur pré-construits, conçus avec Tailwind CSS. Il offre une variété de modèles et de composants que vous pouvez utiliser pour accélérer le développement de vos projets. Voici quelques exemples inspirés de Tailwind UI.
        </p>

        {/* --- Contenu complet de la Page 5 --- */}
        {/* Navigation */}
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Navigation (Exemple: Barre de navigation simple)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;nav class="bg-gray-800 dark:bg-gray-900"&gt;
  &lt;div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
    &lt;div class="flex items-center justify-between h-16"&gt;
      &lt;div class="flex items-center"&gt;
        &lt;div class="flex-shrink-0"&gt;
          &lt;!-- Votre Logo --&gt;
          &lt;img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo"&gt;
        &lt;/div&gt;
        &lt;div class="hidden md:block"&gt;
          &lt;div class="ml-10 flex items-baseline space-x-4"&gt;
            &lt;a href="#" class="bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"&gt;Dashboard&lt;/a&gt;
            &lt;a href="#" class="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"&gt;Team&lt;/a&gt;
            &lt;a href="#" class="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"&gt;Projects&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="hidden md:block"&gt;
        &lt;!-- Éléments à droite (ex: profil utilisateur) --&gt;
      &lt;/div&gt;
      &lt;div class="-mr-2 flex md:hidden"&gt;
        &lt;!-- Bouton menu mobile --&gt;
        &lt;button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"&gt;
          &lt;span class="sr-only"&gt;Open main menu&lt;/span&gt;
          &lt;!-- Icône menu (ouvert/fermé) --&gt;
          &lt;svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
            &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /&gt;
          &lt;/svg&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Menu Mobile (caché par défaut) --&gt;
  &lt;div class="md:hidden" id="mobile-menu"&gt;
    &lt;div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"&gt;
      &lt;a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"&gt;Dashboard&lt;/a&gt;
      &lt;a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"&gt;Team&lt;/a&gt;
      &lt;a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"&gt;Projects&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

        <!-- Formulaires -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Formulaires (Exemple: Champ de saisie simple)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;div&gt;
  &lt;label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"&gt;Email&lt;/label&gt;
  &lt;div class="mt-1"&gt;
    &lt;input
      type="email"
      name="email"
      id="email"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
      placeholder="you@example.com"
    &gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <!-- Tableaux -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Tableaux (Exemple: Tableau simple)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;div class="flex flex-col"&gt;
 &lt;div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"&gt;
   &lt;div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"&gt;
     &lt;div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg"&gt;
       &lt;table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"&gt;
         &lt;thead class="bg-gray-50 dark:bg-gray-800"&gt;
           &lt;tr&gt;
             &lt;th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"&gt;Nom&lt;/th&gt;
             &lt;th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"&gt;Titre&lt;/th&gt;
             &lt;th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"&gt;Statut&lt;/th&gt;
             &lt;th scope="col" class="relative px-6 py-3"&gt;
               &lt;span class="sr-only"&gt;Modifier&lt;/span&gt;
             &lt;/th&gt;
           &lt;/tr&gt;
         &lt;/thead&gt;
         &lt;tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"&gt;
           &lt;tr&gt;
             &lt;td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"&gt;Jane Cooper&lt;/td&gt;
             &lt;td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"&gt;Regional Paradigm Technician&lt;/td&gt;
             &lt;td class="px-6 py-4 whitespace-nowrap"&gt;
               &lt;span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"&gt;Actif&lt;/span&gt;
             &lt;/td&gt;
             &lt;td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"&gt;
               &lt;a href="#" class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"&gt;Modifier&lt;/a&gt;
             &lt;/td&gt;
           &lt;/tr&gt;
           &lt;!-- Autres lignes... --&gt;
         &lt;/tbody&gt;
       &lt;/table&gt;
     &lt;/div&gt;
   &lt;/div&gt;
 &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <!-- Alertes -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Alertes (Exemple: Alerte de succès)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;div class="rounded-md bg-green-50 dark:bg-green-900 p-4"&gt;
  &lt;div class="flex"&gt;
    &lt;div class="flex-shrink-0"&gt;
      &lt;!-- Heroicon name: solid/check-circle --&gt;
      &lt;svg class="h-5 w-5 text-green-400 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"&gt;
        &lt;path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /&gt;
      &lt;/svg&gt;
    &lt;/div&gt;
    &lt;div class="ml-3"&gt;
      &lt;p class="text-sm font-medium text-green-800 dark:text-green-200"&gt;Opération réussie !&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <!-- Modales -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Modales (Exemple: Structure de base - nécessite JS pour l'affichage)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;!-- Conteneur de la modale (positionné fixed) --&gt;
&lt;div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"&gt;
  &lt;div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"&gt;
    &lt;!-- Fond overlay --&gt;
    &lt;div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-900 dark:bg-opacity-75" aria-hidden="true"&gt;&lt;/div&gt;

    &lt;!-- Centre le contenu verticalement --&gt;
    &lt;span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"&gt;&amp;#8203;&lt;/span&gt;

    &lt;!-- Panneau de la modale --&gt;
    &lt;div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"&gt;
      &lt;div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"&gt;
        &lt;div class="sm:flex sm:items-start"&gt;
          &lt;!-- Icône (optionnel) --&gt;
          &lt;div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10"&gt;
            &lt;svg class="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
              &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938-1.382L12 3m0 0l6.938 8.618M6.938 13.382L12 21m0 0l6.938-8.618" /&gt;
            &lt;/svg&gt;
          &lt;/div&gt;
          &lt;div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"&gt;
            &lt;h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title"&gt;Titre de la Modale&lt;/h3&gt;
            &lt;div class="mt-2"&gt;
              &lt;p class="text-sm text-gray-500 dark:text-gray-400"&gt;Contenu de la modale. Vous pouvez mettre ici une description ou des éléments de formulaire.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;!-- Pied de page de la modale (boutons) --&gt;
      &lt;div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"&gt;
        &lt;button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-red-700 dark:hover:bg-red-800"&gt;Action Principale&lt;/button&gt;
        &lt;button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-500"&gt;Annuler&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <!-- Commerce électronique -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Commerce électronique (Exemple: Carte Produit)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;div class="group relative bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"&gt;
  &lt;div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 lg:aspect-none group-hover:opacity-75"&gt;
    &lt;img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Description de l'image du produit." class="w-full h-full object-center object-cover"&gt;
  &lt;/div&gt;
  &lt;div class="p-4 flex justify-between"&gt;
    &lt;div&gt;
      &lt;h3 class="text-sm text-gray-700 dark:text-gray-300"&gt;
        &lt;a href="#"&gt;
          &lt;span aria-hidden="true" class="absolute inset-0"&gt;&lt;/span&gt;
          Nom du Produit
        &lt;/a&gt;
      &lt;/h3&gt;
      &lt;p class="mt-1 text-sm text-gray-500 dark:text-gray-400"&gt;Catégorie&lt;/p&gt;
    &lt;/div&gt;
    &lt;p class="text-sm font-medium text-gray-900 dark:text-white"&gt;€48&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <!-- Marketing -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Marketing (Exemple: Section Héros Simple)</h3> {/* Sous-titre adapté */}
        <pre><code class="language-html">&lt;div class="bg-white dark:bg-gray-900"&gt;
  &lt;div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"&gt;
    &lt;div class="text-center"&gt;
      &lt;h2 class="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase"&gt;Fonctionnalité Clé&lt;/h2&gt;
      &lt;p class="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl"&gt;Un titre accrocheur&lt;/p&gt;
      &lt;p class="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400"&gt;Une description concise expliquant la valeur ajoutée de votre produit ou service.&lt;/p&gt;
      &lt;div class="mt-8 flex justify-center"&gt;
        &lt;div class="inline-flex rounded-md shadow"&gt;
          &lt;a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"&gt;
            Commencer
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="ml-3 inline-flex rounded-md shadow"&gt;
          &lt;a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 dark:bg-gray-700 dark:text-indigo-400 dark:hover:bg-gray-600"&gt;
            En savoir plus
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <!-- Interface utilisateur de l'application -->
        <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Interface utilisateur de l'application</h3> {/* Sous-titre adapté */}
        <p class="mb-2">
          Exemples de composants variés pour construire des interfaces d'applications web :
        </p>

        {/* Shells d'application */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Shells d'application</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Structure de base d'une application avec barre latérale et zone de contenu.</p>
        <pre><code class="language-html">&lt;div class="flex h-screen bg-gray-100 dark:bg-gray-900"&gt;
  &lt;!-- Barre latérale (Sidebar) --&gt;
  &lt;div class="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:block"&gt;
    &lt;div class="p-4 text-lg font-bold text-gray-700 dark:text-white border-b dark:border-gray-700"&gt;Logo App&lt;/div&gt;
    &lt;nav class="mt-4"&gt;
      &lt;a href="#" class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"&gt;Dashboard&lt;/a&gt;
      &lt;a href="#" class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"&gt;Utilisateurs&lt;/a&gt;
      &lt;a href="#" class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"&gt;Paramètres&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/div&gt;

  &lt;!-- Zone de contenu principale --&gt;
  &lt;div class="flex-1 flex flex-col overflow-hidden"&gt;
    &lt;!-- En-tête (Header) --&gt;
    &lt;header class="bg-white dark:bg-gray-800 shadow-sm"&gt;
      &lt;div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
        &lt;div class="flex justify-between h-16"&gt;
          &lt;!-- Bouton menu mobile (si nécessaire) --&gt;
          &lt;div class="flex items-center md:hidden"&gt;
             &lt;button class="text-gray-500 dark:text-gray-400 focus:outline-none"&gt;
               &lt;svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"&gt;&lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"&gt;&lt;/path&gt;&lt;/svg&gt;
             &lt;/button&gt;
          &lt;/div&gt;
          &lt;!-- Autres éléments d'en-tête (recherche, profil...) --&gt;
          &lt;div class="flex items-center ml-auto"&gt;
             &lt;span class="text-gray-700 dark:text-gray-300"&gt;Profil Utilisateur&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;

    &lt;!-- Contenu principal --&gt;
    &lt;main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6"&gt;
      &lt;h1 class="text-2xl font-semibold text-gray-900 dark:text-white"&gt;Titre de la Page&lt;/h1&gt;
      &lt;div class="mt-4 bg-white dark:bg-gray-800 p-4 rounded shadow"&gt;
        &lt;!-- Contenu de la page ici --&gt;
        <p class="text-gray-700 dark:text-gray-300">Votre contenu va ici...</p>
      &lt;/div&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        {/* Titres */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Titres (Headings)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Exemples de titres de page ou de section.</p>
        <pre><code class="language-html">&lt;!-- Titre de Page Principal --&gt;
&lt;div class="border-b border-gray-200 dark:border-gray-700 pb-5 mb-5"&gt;
  &lt;h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white"&gt;Titre Principal&lt;/h1&gt;
&lt;/div&gt;

&lt;!-- Titre de Section avec action --&gt;
&lt;div class="md:flex md:items-center md:justify-between mb-4"&gt;
  &lt;div class="flex-1 min-w-0"&gt;
    &lt;h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate"&gt;Titre de Section&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="mt-4 flex md:mt-0 md:ml-4"&gt;
    &lt;button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"&gt;Action Secondaire&lt;/button&gt;
    &lt;button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"&gt;Action Principale&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        {/* Affichage des données */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Affichage des données (Data Display)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Présentation d'informations sous forme de liste clé-valeur.</p>
        <pre><code class="language-html">&lt;div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"&gt;
  &lt;div class="px-4 py-5 sm:px-6"&gt;
    &lt;h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white"&gt;Informations Utilisateur&lt;/h3&gt;
    &lt;p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400"&gt;Détails personnels.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="border-t border-gray-200 dark:border-gray-700"&gt;
    &lt;dl&gt;
      &lt;div class="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"&gt;
        &lt;dt class="text-sm font-medium text-gray-500 dark:text-gray-400"&gt;Nom complet&lt;/dt&gt;
        &lt;dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"&gt;Margot Foster&lt;/dd&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"&gt;
        &lt;dt class="text-sm font-medium text-gray-500 dark:text-gray-400"&gt;Email&lt;/dt&gt;
        &lt;dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"&gt;margotfoster@example.com&lt;/dd&gt;
      &lt;/div&gt;
      &lt;div class="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"&gt;
        &lt;dt class="text-sm font-medium text-gray-500 dark:text-gray-400"&gt;Rôle&lt;/dt&gt;
        &lt;dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"&gt;Backend Developer&lt;/dd&gt;
      &lt;/div&gt;
    &lt;/dl&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        {/* Listes */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Listes (Lists)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Exemple de liste simple avec séparateurs.</p>
        <pre><code class="language-html">&lt;ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 shadow rounded-md"&gt;
  &lt;li class="px-4 py-4 sm:px-6"&gt;
    &lt;!-- Contenu de l'élément de liste 1 --&gt;
    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">Élément 1</p>
    <p class="text-sm text-gray-500 dark:text-gray-400">Description courte</p>
  &lt;/li&gt;
  &lt;li class="px-4 py-4 sm:px-6"&gt;
    &lt;!-- Contenu de l'élément de liste 2 --&gt;
    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">Élément 2</p>
    <p class="text-sm text-gray-500 dark:text-gray-400">Autre description</p>
  &lt;/li&gt;
  &lt;!-- Autres éléments... --&gt;
&lt;/ul&gt;</code></pre>

        {/* Formulaires (avancé) */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Formulaires (Input Group)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Champ de saisie avec un préfixe ou suffixe.</p>
        <pre><code class="language-html">&lt;div&gt;
  &lt;label for="company-website" class="block text-sm font-medium text-gray-700 dark:text-gray-300"&gt;Site Web&lt;/label&gt;
  &lt;div class="mt-1 flex rounded-md shadow-sm"&gt;
    &lt;span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"&gt;http://&lt;/span&gt;
    &lt;input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white" placeholder="www.example.com"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        {/* Retours (Feedback) */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Retours (Feedback - Notification)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Notification flottante simple (nécessite JS pour l'affichage/masquage).</p>
        <pre><code class="language-html">&lt;!-- Conteneur pour les notifications (souvent en position fixed) --&gt;
&lt;div class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"&gt;
  &lt;!-- Notification --&gt;
  &lt;div class="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"&gt;
    &lt;div class="p-4"&gt;
      &lt;div class="flex items-start"&gt;
        &lt;div class="flex-shrink-0"&gt;
          &lt;!-- Icône succès --&gt;
          &lt;svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
            &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class="ml-3 w-0 flex-1 pt-0.5"&gt;
          &lt;p class="text-sm font-medium text-gray-900 dark:text-white"&gt;Notification envoyée !&lt;/p&gt;
          &lt;p class="mt-1 text-sm text-gray-500 dark:text-gray-400"&gt;Le message a été traité avec succès.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="ml-4 flex-shrink-0 flex"&gt;
          &lt;button class="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-500 dark:hover:text-gray-400"&gt;
            &lt;span class="sr-only"&gt;Fermer&lt;/span&gt;
            &lt;!-- Icône croix --&gt;
            &lt;svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"&gt;
              &lt;path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /&gt;
            &lt;/svg&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        {/* Navigation (avancé) */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Navigation (Onglets - Tabs)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Système d'onglets simple.</p>
        <pre><code class="language-html">&lt;div&gt;
  &lt;div class="sm:hidden"&gt;
    &lt;label for="tabs" class="sr-only"&gt;Select a tab&lt;/label&gt;
    &lt;select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"&gt;
      &lt;option selected&gt;Mon Compte&lt;/option&gt;
      &lt;option&gt;Profil&lt;/option&gt;
      &lt;option&gt;Facturation&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="hidden sm:block"&gt;
    &lt;div class="border-b border-gray-200 dark:border-gray-700"&gt;
      &lt;nav class="-mb-px flex space-x-8" aria-label="Tabs"&gt;
        &lt;!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --&gt;
        &lt;a href="#" class="border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"&gt;Mon Compte&lt;/a&gt;
        &lt;a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"&gt;Profil&lt;/a&gt;
        &lt;a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"&gt;Facturation&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- Contenu des onglets ici --&gt;
&lt;/div&gt;</code></pre>

        {/* Superpositions (Overlays) */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Superpositions (Slide-over Panel)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Panneau coulissant depuis le côté (nécessite JS).</p>
        <pre><code class="language-html">&lt;!-- Conteneur du slide-over --&gt;
&lt;div class="fixed inset-0 overflow-hidden z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true"&gt;
  &lt;div class="absolute inset-0 overflow-hidden"&gt;
    &lt;!-- Fond overlay --&gt;
    &lt;div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-900 dark:bg-opacity-75" aria-hidden="true"&gt;&lt;/div&gt;

    &lt;div class="fixed inset-y-0 right-0 pl-10 max-w-full flex"&gt;
      &lt;!-- Panneau coulissant --&gt;
      &lt;div class="w-screen max-w-md"&gt;
        &lt;div class="h-full flex flex-col py-6 bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll"&gt;
          &lt;div class="px-4 sm:px-6"&gt;
            &lt;div class="flex items-start justify-between"&gt;
              &lt;h2 class="text-lg font-medium text-gray-900 dark:text-white" id="slide-over-title"&gt;Titre du Panneau&lt;/h2&gt;
              &lt;div class="ml-3 h-7 flex items-center"&gt;
                &lt;button type="button" class="bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-500 dark:hover:text-gray-400"&gt;
                  &lt;span class="sr-only"&gt;Fermer panneau&lt;/span&gt;
                  &lt;!-- Icône croix --&gt;
                  &lt;svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
                    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /&gt;
                  &lt;/svg&gt;
                &lt;/button&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="mt-6 relative flex-1 px-4 sm:px-6"&gt;
            &lt;!-- Contenu du panneau --&gt;
            &lt;div class="absolute inset-0 px-4 sm:px-6"&gt;
              &lt;div class="h-full border-2 border-dashed border-gray-200 dark:border-gray-700" aria-hidden="true"&gt;
                 <p class="p-4 text-gray-700 dark:text-gray-300">Contenu du panneau coulissant...</p>
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;!-- Fin du contenu --&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        {/* Éléments */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Éléments (Avatar & Badge)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Composants UI de base : Avatar et Badge.</p>
        <pre><code class="language-html">&lt;div class="flex items-center space-x-4"&gt;
  &lt;!-- Avatar --&gt;
  &lt;span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700"&gt;
    &lt;!-- Image ou SVG placeholder --&gt;
    &lt;svg class="h-full w-full text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24"&gt;
      &lt;path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /&gt;
    &lt;/svg&gt;
    &lt;!-- &lt;img class="h-12 w-12 rounded-full" src="..." alt=""&gt; --&gt;
  &lt;/span&gt;

  &lt;!-- Badge --&gt;
  &lt;span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"&gt;
    Actif
  &lt;/span&gt;
  &lt;span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"&gt;
    Admin
  &lt;/span&gt;
&lt;/div&gt;</code></pre>

        {/* Mises en page */}
        <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100">Mises en page (Card & Media Object)</h4> {/* Sous-titre adapté */}
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Structures de layout courantes.</p>
        <pre><code class="language-html">&lt;!-- Card (Carte) --&gt;
&lt;div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-6"&gt;
  &lt;div class="px-4 py-5 sm:p-6"&gt;
    &lt;h3 class="text-lg font-medium text-gray-900 dark:text-white"&gt;Titre de la Carte&lt;/h3&gt;
    &lt;p class="mt-1 text-sm text-gray-500 dark:text-gray-400"&gt;Contenu de la carte...&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="bg-gray-50 dark:bg-gray-700 px-4 py-4 sm:px-6"&gt;
    &lt;!-- Pied de carte (optionnel) --&gt;
    <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Voir plus</a>
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Media Object --&gt;
&lt;div class="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 shadow rounded-lg"&gt;
  &lt;div class="flex-shrink-0"&gt;
    &lt;!-- Image ou icône --&gt;
    &lt;img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""&gt;
  &lt;/div&gt;
  &lt;div class="min-w-0 flex-1"&gt;
    &lt;p class="text-sm font-medium text-gray-900 dark:text-white"&gt;Nom de l'objet&lt;/p&gt;
    &lt;p class="text-sm text-gray-500 dark:text-gray-400"&gt;Description associée à l'image ou l'icône.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        {/* --- Fin Contenu complet de la Page 5 --- */}

        <p class="mt-6 mb-2">
          <a
            href="https://tailwindui.com/components"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:underline dark:text-blue-400 dark:hover:underline"
          >
            Explorer tous les composants Tailwind UI (Site Officiel)
          </a>
        </p>
      </section>

      <!-- Section: highlight.js (Page 6) -->
      <section v-if="currentPage === 6" data-page="6" class="mb-8"> {/* text-gray-800 dark:text-gray-200 hérité */}
        <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">6. Intégration de highlight.js</h2> {/* Titre adapté */}
        <p class="mb-2">
          <code>highlight.js</code> est une librairie JavaScript qui permet de mettre en évidence la syntaxe du code dans votre site web. Elle supporte un grand nombre de langages et de styles.
        </p>
        <p class="mb-2">
          Dans ce composant, <code>highlight.js</code> est utilisé pour mettre en évidence le code HTML, CSS et JavaScript dans les exemples. L'initialisation se fait via le hook <code>onMounted</code> de Vue, et est ré-appliquée à chaque changement de page (via <code>applyHighlighting</code> appelée dans <code>prevPage</code>, <code>nextPage</code> et <code>goToPage</code>) pour s'assurer que le nouveau contenu affiché est stylisé.
        </p>
        <p class="mb-2">
          L'utilisation de <code>nextTick</code> dans <code>applyHighlighting</code> est cruciale. Elle garantit que Vue a terminé la mise à jour du DOM (afficher la nouvelle section, masquer l'ancienne) avant que <code>highlight.js</code> ne tente de trouver et de styliser les blocs de code. Sans <code>nextTick</code>, <code>highlight.js</code> pourrait s'exécuter trop tôt et ne pas trouver les éléments corrects.
        </p>
         <pre><code class="language-javascript">
import { ref, onMounted, nextTick } from 'vue'; // nextTick est important
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // Style github-dark (ou autre)

const currentPage = ref(1);
const totalPages = 6; // Nombre total de sections/pages

// Fonction pour appliquer le highlighting
const applyHighlighting = () => {
  nextTick(() => { // Attend que le DOM soit mis à jour par Vue
    try {
      // Cible uniquement les blocs de code de la page courante
      const visibleSection = document.querySelector(`section[data-page="${currentPage.value}"]`);
      if (visibleSection) {
        // Sélectionne les blocs non encore traités par highlight.js
        visibleSection.querySelectorAll('pre code:not(.hljs)').forEach((block) => {
           hljs.highlightElement(block);
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'application de highlight.js:", error);
    }
  });
};

onMounted(() => {
  // Initialisation du mode sombre (ajouté)
  let preferredTheme = 'light'; // Défaut
  try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
          preferredTheme = savedTheme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          preferredTheme = 'dark';
      }
  } catch (e) {
      console.error("Failed to access theme preference:", e);
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          preferredTheme = 'dark';
      }
  }
  applyDarkModePreference(preferredTheme === 'dark'); // Applique le thème initial

  // Application initiale de highlight.js
  applyHighlighting();
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo(0, 0); // Remonte en haut
    applyHighlighting(); // Ré-applique après changement de page
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    window.scrollTo(0, 0); // Remonte en haut
    applyHighlighting(); // Ré-applique après changement de page
  }
};

// Fonction pour la navigation via le sommaire
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    currentPage.value = page;
    window.scrollTo(0, 0); // Remonte en haut
    applyHighlighting(); // Ré-applique après changement de page
  }
};
</code></pre>
      </section>

    </div> <!-- End Page Content Area -->

    <!-- Pagination Controls -->
    <!-- Bordure et boutons adaptés -->
    <div class="flex justify-between items-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900"
      >
        Précédent
      </button>
      <span class="text-sm text-gray-700 dark:text-gray-300">
        Page {{ currentPage }} sur {{ totalPages }}
      </span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900"
      >
        Suivant
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import hljs from 'highlight.js';
// Style sombre pour highlight.js (fonctionne bien dans les deux modes)
import 'highlight.js/styles/github-dark.css';

// --- État et Logique du Mode Sombre ---
const isDarkMode = ref(false);

const applyDarkModePreference = (darkModeEnabled) => {
  isDarkMode.value = darkModeEnabled;
  if (darkModeEnabled) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  // Optionnel: Réappliquer hljs si le changement de thème affecte les styles de code
  // applyHighlighting();
};

const toggleDarkMode = () => {
  const newState = !isDarkMode.value;
  applyDarkModePreference(newState);
  // Sauvegarde de la préférence
  try {
    localStorage.setItem('theme', newState ? 'dark' : 'light');
  } catch (e) {
    console.error("Échec de la sauvegarde de la préférence de thème:", e);
  }
};

// --- État de la Pagination ---
const totalPages = 6;
const currentPage = ref(1);

// --- Logique Highlight.js ---
const applyHighlighting = () => {
  nextTick(() => {
    try {
      const visibleSection = document.querySelector(`section[data-page="${currentPage.value}"]`);
      if (visibleSection) {
        visibleSection.querySelectorAll('pre code:not(.hljs)').forEach((block) => {
           hljs.highlightElement(block);
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'application de highlight.js:", error);
    }
  });
};

// --- Hook de Cycle de Vie ---
onMounted(() => {
  // Initialisation du mode sombre basé sur localStorage ou préférence système
  let preferredTheme = 'light'; // Défaut
  try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
          preferredTheme = savedTheme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          preferredTheme = 'dark';
      }
  } catch (e) {
      console.error("Échec de l'accès à la préférence de thème:", e);
      // Repli sur la préférence système si localStorage échoue
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          preferredTheme = 'dark';
      }
  }
  applyDarkModePreference(preferredTheme === 'dark'); // Applique le thème initial

  // Application initiale de highlight.js
  applyHighlighting();
});


// --- Fonctions de Pagination ---
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    applyHighlighting();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    applyHighlighting();
  }
};

// --- Navigation via Sommaire ---
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    applyHighlighting();
  } else {
    console.warn(`Tentative de naviguer vers une page invalide: ${page}`);
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */

/* Style pour les blocs de code highlight.js */
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
  border-radius: 0.375rem; /* rounded-md */
  /* Le thème github-dark.css définit le fond et les couleurs */
}

/* Transitions douces pour le changement de thème */
div.container, div.bg-gray-100, section, h1, h2, h3, h4, p, li, button, span, a, pre code.hljs /* Soyez plus spécifique si nécessaire */ {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

/* Animation de fondu pour les sections */
section {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Indentation pour les listes dans le contenu */
section ul:not(.list-decimal) {
  margin-left: 1.5rem;
}
section li {
  margin-bottom: 0.5rem;
}

/* Style pour les boutons du sommaire */
.sommaire-link {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  text-align: left;
  width: 100%;
  @apply text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 rounded;
  transition: color 0.2s ease-in-out;
}

/* Le style actif du sommaire est géré par :class binding */
</style>
