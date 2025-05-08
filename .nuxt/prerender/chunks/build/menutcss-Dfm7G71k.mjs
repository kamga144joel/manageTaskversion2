import { mergeProps, ref, useSSRContext } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/devalue/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/throttle-debounce/esm/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/tslib/modules/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ts-invariant/lib/invariant.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/perfect-debounce/dist/index.mjs';

const totalPages = 6;
const _sfc_main$1 = {
  __name: "leconTaiwind",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen" }, _attrs))} data-v-6be72bd9><div class="flex justify-between items-center mb-6" data-v-6be72bd9><h1 class="text-3xl font-bold text-gray-900 dark:text-white" data-v-6be72bd9>Cours Complet sur Tailwind CSS</h1><button class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900" aria-label="Toggle Dark Mode" data-v-6be72bd9>`);
      if (!isDarkMode.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-6be72bd9><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-v-6be72bd9></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-6be72bd9><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-v-6be72bd9></path></svg>`);
      }
      _push(`</button></div><div class="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow" data-v-6be72bd9><h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Sommaire</h2> {/* Correction de dark:text-slate-700-200 */} <ul class="list-decimal list-inside space-y-2" data-v-6be72bd9><li data-v-6be72bd9><button class="${ssrRenderClass(["sommaire-link", { "font-bold text-indigo-700 dark:text-indigo-300": currentPage.value === 1 }])}" data-v-6be72bd9> Responsive Design avec Tailwind CSS </button></li><li data-v-6be72bd9><button class="${ssrRenderClass(["sommaire-link", { "font-bold text-indigo-700 dark:text-indigo-300": currentPage.value === 2 }])}" data-v-6be72bd9> Concepts Cl\xE9s (Classes Utilitaires, Dark Mode, Directives) </button></li><li data-v-6be72bd9><button class="${ssrRenderClass(["sommaire-link", { "font-bold text-indigo-700 dark:text-indigo-300": currentPage.value === 3 }])}" data-v-6be72bd9> Exemples d&#39;Utilisation </button></li><li data-v-6be72bd9><button class="${ssrRenderClass(["sommaire-link", { "font-bold text-indigo-700 dark:text-indigo-300": currentPage.value === 4 }])}" data-v-6be72bd9> Personnalisation Avanc\xE9e </button></li><li data-v-6be72bd9><button class="${ssrRenderClass(["sommaire-link", { "font-bold text-indigo-700 dark:text-indigo-300": currentPage.value === 5 }])}" data-v-6be72bd9> Tailwind UI (Exemples) </button></li><li data-v-6be72bd9><button class="${ssrRenderClass(["sommaire-link", { "font-bold text-indigo-700 dark:text-indigo-300": currentPage.value === 6 }])}" data-v-6be72bd9> Int\xE9gration de highlight.js </button></li></ul></div><div class="min-h-[60vh] mb-8 text-gray-800 dark:text-gray-200" data-v-6be72bd9>`);
      if (currentPage.value === 1) {
        _push(`<section data-page="1" class="mb-8" data-v-6be72bd9> {/* text-gray-800 dark:text-gray-200 h\xE9rit\xE9 */} <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-6be72bd9>1. Responsive Design avec Tailwind CSS</h2> {/* Titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9> Tailwind CSS facilite la cr\xE9ation de designs responsives gr\xE2ce \xE0 son syst\xE8me de pr\xE9fixes. Vous pouvez appliquer diff\xE9rents styles en fonction de la taille de l&#39;\xE9cran en utilisant les pr\xE9fixes suivants : </p><ul class="list-disc list-inside mb-2" data-v-6be72bd9><li data-v-6be72bd9><code data-v-6be72bd9>sm:</code> (small) : pour les \xE9crans de 640px et plus</li><li data-v-6be72bd9><code data-v-6be72bd9>md:</code> (medium) : pour les \xE9crans de 768px et plus</li><li data-v-6be72bd9><code data-v-6be72bd9>lg:</code> (large) : pour les \xE9crans de 1024px et plus</li><li data-v-6be72bd9><code data-v-6be72bd9>xl:</code> (extra large) : pour les \xE9crans de 1280px et plus</li><li data-v-6be72bd9><code data-v-6be72bd9>2xl:</code> (2x extra large) : pour les \xE9crans de 1536px et plus</li></ul><p class="mb-2" data-v-6be72bd9> Exemple : <code data-v-6be72bd9>&lt;div class=&quot;w-full md:w-1/2 lg:w-1/3&quot;&gt;&lt;/div&gt;</code>. Cet \xE9l\xE9ment prendra toute la largeur sur les petits \xE9crans, la moiti\xE9 de la largeur sur les \xE9crans moyens, et un tiers de la largeur sur les grands \xE9crans. </p><p class="mb-2" data-v-6be72bd9> Il est important d&#39;adopter une approche &quot;mobile-first&quot; en commen\xE7ant par styliser votre site pour les petits \xE9crans, puis en ajoutant des styles pour les \xE9crans plus grands. </p><p class="mb-2" data-v-6be72bd9> Exemple : <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;flex flex-col md:flex-row&quot;&gt;
  &lt;div class=&quot;w-full md:w-1/2 bg-blue-100 dark:bg-blue-900 p-4 text-blue-900 dark:text-blue-100&quot;&gt;Colonne 1&lt;/div&gt; {/* Couleurs ajust\xE9es */}
  &lt;div class=&quot;w-full md:w-1/2 bg-green-100 dark:bg-green-900 p-4 text-green-900 dark:text-green-100&quot;&gt;Colonne 2&lt;/div&gt; {/* Couleurs ajust\xE9es */}
&lt;/div&gt;</code></pre></p></section>`);
      } else {
        _push(`<!---->`);
      }
      if (currentPage.value === 2) {
        _push(`<section data-page="2" class="mb-8" data-v-6be72bd9> {/* text-gray-800 dark:text-gray-200 h\xE9rit\xE9 */} <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-6be72bd9>2. Concepts Cl\xE9s de Tailwind CSS (Approfondi)</h2> {/* Titre adapt\xE9 */} <div class="mb-6" data-v-6be72bd9><h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Classes Utilitaires (Utility Classes)</h3> {/* Sous-titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9> Le c\u0153ur de Tailwind. Au lieu d&#39;\xE9crire du CSS personnalis\xE9 comme <code data-v-6be72bd9>.card-title { font-size: 1.5rem; font-weight: bold; color: #333; }</code>, vous composez directement le style dans votre HTML en utilisant des classes pr\xE9-d\xE9finies : <code data-v-6be72bd9>&lt;h3 class=&quot;text-2xl font-bold text-gray-800 dark:text-white&quot;&gt;Titre&lt;/h3&gt;</code>. </p><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Avantages :</strong></p><ul class="list-disc list-inside mb-2 ml-4" data-v-6be72bd9><li data-v-6be72bd9><strong data-v-6be72bd9>Rapidit\xE9 de d\xE9veloppement :</strong> Pas besoin de jongler entre HTML et CSS ou d&#39;inventer des noms de classes.</li><li data-v-6be72bd9><strong data-v-6be72bd9>Coh\xE9rence :</strong> Utilise une \xE9chelle de design pr\xE9d\xE9finie (espacements, couleurs, tailles) configurable via <code data-v-6be72bd9>tailwind.config.js</code>.</li><li data-v-6be72bd9><strong data-v-6be72bd9>Maintenance facilit\xE9e :</strong> Les styles sont locaux \xE0 l&#39;\xE9l\xE9ment, r\xE9duisant les effets de bord inattendus.</li><li data-v-6be72bd9><strong data-v-6be72bd9>Performance :</strong> Avec le moteur JIT (Just-In-Time), seul le CSS r\xE9ellement utilis\xE9 est g\xE9n\xE9r\xE9, r\xE9sultant en des fichiers CSS tr\xE8s l\xE9gers en production.</li><li data-v-6be72bd9><strong data-v-6be72bd9>Pas de conflits de noms :</strong> \xC9limine les probl\xE8mes li\xE9s aux noms de classes CSS globaux.</li></ul><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Exemples vari\xE9s :</strong></p><ul class="list-disc list-inside mb-2 ml-4" data-v-6be72bd9><li data-v-6be72bd9>Espacement : <code data-v-6be72bd9>p-4</code> (padding), <code data-v-6be72bd9>m-2</code> (margin), <code data-v-6be72bd9>space-x-4</code> (espace horizontal entre enfants flex/grid)</li><li data-v-6be72bd9>Couleurs : <code data-v-6be72bd9>text-red-500</code>, <code data-v-6be72bd9>bg-yellow-200</code>, <code data-v-6be72bd9>border-green-600</code></li><li data-v-6be72bd9>Typographie : <code data-v-6be72bd9>text-lg</code>, <code data-v-6be72bd9>font-semibold</code>, <code data-v-6be72bd9>italic</code>, <code data-v-6be72bd9>text-center</code>, <code data-v-6be72bd9>leading-relaxed</code> (interligne)</li><li data-v-6be72bd9>Layout : <code data-v-6be72bd9>flex</code>, <code data-v-6be72bd9>grid</code>, <code data-v-6be72bd9>items-center</code>, <code data-v-6be72bd9>justify-between</code>, <code data-v-6be72bd9>col-span-2</code></li><li data-v-6be72bd9>Bordures : <code data-v-6be72bd9>border</code>, <code data-v-6be72bd9>border-2</code>, <code data-v-6be72bd9>rounded-lg</code>, <code data-v-6be72bd9>divide-y</code> (s\xE9parateurs)</li><li data-v-6be72bd9>\xC9tats : <code data-v-6be72bd9>hover:bg-blue-700</code>, <code data-v-6be72bd9>focus:ring-2</code>, <code data-v-6be72bd9>disabled:opacity-50</code>, <code data-v-6be72bd9>dark:text-white</code> (voir ci-dessous)</li></ul><p class="mb-2" data-v-6be72bd9> L&#39;inconv\xE9nient potentiel est un HTML plus verbeux, mais cela est souvent compens\xE9 par l&#39;utilisation de composants (Vue, React, etc.) ou de la directive <code data-v-6be72bd9>@apply</code> (voir ci-dessous). </p></div><div class="mb-6" data-v-6be72bd9><h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Dark Mode</h3> {/* Sous-titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9> Tailwind facilite grandement l&#39;impl\xE9mentation d&#39;un mode sombre. Il utilise le pr\xE9fixe <code data-v-6be72bd9>dark:</code> pour appliquer des styles conditionnels lorsque le mode sombre est actif. </p><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Configuration (<code data-v-6be72bd9>tailwind.config.js</code>) :</strong> Vous avez deux strat\xE9gies principales : </p><ul class="list-disc list-inside mb-2 ml-4" data-v-6be72bd9><li data-v-6be72bd9><code data-v-6be72bd9>darkMode: &#39;media&#39;</code> (par d\xE9faut) : Utilise la requ\xEAte m\xE9dia CSS <code data-v-6be72bd9>prefers-color-scheme: dark</code>. Le mode sombre s&#39;active/d\xE9sactive en fonction des pr\xE9f\xE9rences du syst\xE8me d&#39;exploitation de l&#39;utilisateur.</li><li data-v-6be72bd9><code data-v-6be72bd9>darkMode: &#39;class&#39;</code> : Permet un contr\xF4le manuel. Vous devez ajouter la classe <code data-v-6be72bd9>dark</code> \xE0 un \xE9l\xE9ment parent (g\xE9n\xE9ralement <code data-v-6be72bd9>&lt;html&gt;</code> ou <code data-v-6be72bd9>&lt;body&gt;</code>) via JavaScript pour activer le mode sombre. C&#39;est la m\xE9thode la plus flexible si vous voulez proposer un bouton de bascule.</li></ul><pre data-v-6be72bd9><code class="language-javascript" data-v-6be72bd9>// Exemple de configuration avec la strat\xE9gie &#39;class&#39;
module.exports = {
  darkMode: &#39;class&#39;, // ou &#39;media&#39;
  // ... autres configurations
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre><p class="mt-2 mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Utilisation :</strong> Pr\xE9fixez simplement n&#39;importe quelle classe utilitaire avec <code data-v-6be72bd9>dark:</code> pour qu&#39;elle ne s&#39;applique qu&#39;en mode sombre. </p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Change la couleur de fond et de texte en mode sombre --&gt;
&lt;div class=&quot;bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow&quot;&gt;
  Contenu qui s&#39;adapte au mode sombre.
&lt;/div&gt;

&lt;!-- Change la couleur de bordure au survol en mode sombre --&gt;
&lt;button class=&quot;border border-gray-300 hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400 px-4 py-2 rounded&quot;&gt;
  Bouton
&lt;/button&gt;

&lt;!-- Combinaison avec responsive --&gt;
&lt;p class=&quot;text-black dark:text-white md:text-lg md:dark:text-xl&quot;&gt;
  Texte adaptatif.
&lt;/p&gt;</code></pre><p class="mt-2 mb-2" data-v-6be72bd9> Pensez \xE0 choisir des couleurs contrast\xE9es pour assurer la lisibilit\xE9 en mode clair comme en mode sombre. </p></div><div class="mb-6" data-v-6be72bd9><h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Directives Tailwind</h3> {/* Sous-titre adapt\xE9 */} {/* ... (contenu des directives, d\xE9j\xE0 ok avec dark:) ... */} <p class="mb-2" data-v-6be72bd9> Tailwind fournit des directives sp\xE9ciales (commen\xE7ant par <code data-v-6be72bd9>@</code>) \xE0 utiliser dans vos fichiers CSS pour acc\xE9der \xE0 certaines fonctionnalit\xE9s ou organiser votre code. </p><ul class="list-disc list-inside mb-2 ml-4" data-v-6be72bd9><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>@tailwind</code> :</strong> Utilis\xE9e pour injecter les styles de base (<code data-v-6be72bd9>base</code>), les classes de composants pr\xE9-d\xE9finis (<code data-v-6be72bd9>components</code>), et les classes utilitaires (<code data-v-6be72bd9>utilities</code>) de Tailwind dans votre CSS. C&#39;est le point d&#39;entr\xE9e principal. <pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>/* Dans votre fichier CSS principal (ex: main.css) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Vos styles personnalis\xE9s peuvent venir apr\xE8s */</code></pre></li><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>@layer</code> :</strong> Permet d&#39;indiquer \xE0 Tailwind \xE0 quelle &quot;couche&quot; appartient un ensemble de styles personnalis\xE9s. Cela aide \xE0 contr\xF4ler l&#39;ordre des r\xE8gles CSS et \xE0 \xE9viter les probl\xE8mes de sp\xE9cificit\xE9. Les couches disponibles sont <code data-v-6be72bd9>base</code>, <code data-v-6be72bd9>components</code>, et <code data-v-6be72bd9>utilities</code>. Vous pouvez \xE9galement d\xE9finir vos propres couches. <pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>/* Ajouter des styles de base personnalis\xE9s */
@layer base {
  h1 {
    @apply text-3xl font-bold mb-4; /* Utilisation de @apply ici */
  }
  a {
    @apply text-blue-600 underline dark:text-blue-400;
  }
}

/* D\xE9finir des composants personnalis\xE9s */
@layer components {
  .card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow p-4;
  }
  /* Voir @apply ci-dessous */
}</code></pre></li><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>@apply</code> :</strong> Permet d&#39;extraire des combinaisons r\xE9p\xE9titives de classes utilitaires dans une nouvelle classe CSS personnalis\xE9e. C&#39;est utile pour cr\xE9er des composants r\xE9utilisables sans surcharger le HTML. <strong data-v-6be72bd9>Il est fortement recommand\xE9 d&#39;utiliser <code data-v-6be72bd9>@apply</code> \xE0 l&#39;int\xE9rieur de la directive <code data-v-6be72bd9>@layer components</code> ou <code data-v-6be72bd9>@layer utilities</code>.</strong><pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>@layer components {
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
}</code></pre><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Utilisation dans le HTML --&gt;
&lt;button class=&quot;btn-primary&quot;&gt;Action Principale&lt;/button&gt;
&lt;button class=&quot;btn-secondary&quot;&gt;Annuler&lt;/button&gt;
&lt;button class=&quot;btn-primary&quot; disabled&gt;D\xE9sactiv\xE9&lt;/button&gt;</code></pre></li><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>@config</code> :</strong> Permet de sp\xE9cifier un fichier de configuration Tailwind diff\xE9rent pour une section de votre CSS (usage moins courant). </li><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>theme()</code> (Fonction CSS) :</strong> Bien que ce ne soit pas une directive <code data-v-6be72bd9>@</code>, la fonction <code data-v-6be72bd9>theme()</code> est cruciale. Elle permet d&#39;acc\xE9der aux valeurs de votre configuration Tailwind (couleurs, espacements, polices, etc.) directement dans votre CSS personnalis\xE9. <pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>.custom-element {
  background-color: theme(&#39;colors.custom-blue&#39;); /* Utilise la couleur d\xE9finie dans tailwind.config.js */
  padding: theme(&#39;spacing.4&#39;); /* Utilise la valeur d&#39;espacement &#39;4&#39; */
  font-family: theme(&#39;fontFamily.custom-font&#39;);
}

@layer base {
  body {
    font-family: theme(&#39;fontFamily.sans&#39;); /* Appliquer la police sans-serif par d\xE9faut du th\xE8me */
  }
}</code></pre></li><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>@screen</code> :</strong> Permet d&#39;appliquer des styles en fonction des breakpoints d\xE9finis dans votre configuration Tailwind, similaire aux media queries CSS mais en utilisant les noms de breakpoints (<code data-v-6be72bd9>sm</code>, <code data-v-6be72bd9>md</code>, <code data-v-6be72bd9>lg</code>...). <pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>.element-responsive {
  width: 100%; /* Mobile first */

  @screen sm {
    width: 75%;
  }

  @screen lg {
    width: 50%;
  }
}</code></pre></li><li data-v-6be72bd9><strong data-v-6be72bd9><code data-v-6be72bd9>@variants</code> (Moins utilis\xE9 avec JIT) :</strong> Auparavant utilis\xE9 pour g\xE9n\xE9rer explicitement des variantes (hover, focus, etc.) pour vos classes personnalis\xE9es. Avec le moteur JIT, la plupart des variantes sont g\xE9n\xE9r\xE9es \xE0 la vol\xE9e, rendant <code data-v-6be72bd9>@variants</code> moins n\xE9cessaire pour les cas d&#39;usage courants. </li></ul></div><div class="mb-6" data-v-6be72bd9><h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Personnalisation du Th\xE8me</h3> {/* Sous-titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9> Comme mentionn\xE9, le fichier <code data-v-6be72bd9>tailwind.config.js</code> est central pour adapter Tailwind \xE0 votre design. Vous pouvez y \xE9tendre ou remplacer les couleurs, polices, espacements, breakpoints, etc. par d\xE9faut. </p><pre data-v-6be72bd9><code class="language-javascript" data-v-6be72bd9>module.exports = {
  darkMode: &#39;class&#39;,
  content: [ // Important pour que JIT sache o\xF9 chercher les classes
    &quot;./index.html&quot;,
    &quot;./src/**/*.{vue,js,ts,jsx,tsx}&quot;,
    &quot;./components/**/*.{vue,js,ts,jsx,tsx}&quot;, // Adaptez selon votre structure
  ],
  theme: {
    extend: { // &#39;extend&#39; ajoute aux valeurs par d\xE9faut, sans &#39;extend&#39; les remplace
      colors: {
        &#39;custom-blue&#39;: &#39;#1E3A8A&#39;,
        &#39;brand-primary&#39;: { // Nuances d&#39;une couleur
          light: &#39;#85d7ff&#39;,
          DEFAULT: &#39;#1fb6ff&#39;,
          dark: &#39;#009eeb&#39;,
        },
      },
      fontFamily: {
        &#39;custom-font&#39;: [&#39;&quot;Open Sans&quot;&#39;, &#39;sans-serif&#39;],
        &#39;serif&#39;: [&#39;Merriweather&#39;, &#39;serif&#39;], // Remplacer la police serif par d\xE9faut
      },
      spacing: {
        &#39;128&#39;: &#39;32rem&#39;, // Ajouter une nouvelle valeur d&#39;espacement
      }
    },
  },
  plugins: [
    // require(&#39;@tailwindcss/forms&#39;), // Exemple d&#39;ajout d&#39;un plugin officiel
  ],
}</code></pre></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (currentPage.value === 3) {
        _push(`<section data-page="3" class="mb-8" data-v-6be72bd9> {/* text-gray-800 dark:text-gray-200 h\xE9rit\xE9 */} <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-6be72bd9>3. Exemples d&#39;Utilisation de Tailwind CSS</h2> {/* Titre adapt\xE9 */} {/* ... (Contenu de la page 3, d\xE9j\xE0 ok avec dark:) ... */} <p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Texte :</strong> <code data-v-6be72bd9>&lt;p class=&quot;text-lg font-medium text-gray-800 dark:text-gray-200&quot;&gt;Ceci est un paragraphe&lt;/p&gt;</code>. Cet exemple utilise les classes <code data-v-6be72bd9>text-lg</code> pour la taille de la police, <code data-v-6be72bd9>font-medium</code> pour la graisse de la police, <code data-v-6be72bd9>text-gray-800</code> pour la couleur du texte en mode clair, et <code data-v-6be72bd9>dark:text-gray-200</code> pour la couleur du texte en mode sombre. </p><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Couleurs :</strong><code data-v-6be72bd9>&lt;button class=&quot;bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-700 dark:hover:bg-blue-900&quot;&gt;Bouton&lt;/button&gt;</code>. Cet exemple utilise les classes <code data-v-6be72bd9>bg-blue-500</code> pour la couleur de fond, <code data-v-6be72bd9>hover:bg-blue-700</code> pour la couleur de fond au survol, <code data-v-6be72bd9>text-white</code> pour la couleur du texte, <code data-v-6be72bd9>font-bold</code> pour la graisse de la police, <code data-v-6be72bd9>py-2</code> et <code data-v-6be72bd9>px-4</code> pour le padding, <code data-v-6be72bd9>rounded</code> pour arrondir les coins, <code data-v-6be72bd9>dark:bg-blue-700</code> pour la couleur de fond en mode sombre, et <code data-v-6be72bd9>dark:hover:bg-blue-900</code> pour la couleur de fond au survol en mode sombre. </p><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Espacements :</strong> <code data-v-6be72bd9>&lt;div class=&quot;p-4 m-2 bg-gray-100 dark:bg-gray-700 dark:text-white&quot;&gt;Contenu&lt;/div&gt;</code>. Cet exemple utilise les classes <code data-v-6be72bd9>p-4</code> pour le padding, <code data-v-6be72bd9>m-2</code> pour la marge, <code data-v-6be72bd9>bg-gray-100</code> pour la couleur de fond en mode clair, <code data-v-6be72bd9>dark:bg-gray-700</code> pour la couleur de fond en mode sombre, et <code data-v-6be72bd9>dark:text-white</code> pour la couleur du texte en mode sombre. </p><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Responsive Design :</strong> <code data-v-6be72bd9>&lt;div class=&quot;w-full md:w-1/2 lg:w-1/3&quot;&gt;Contenu&lt;/div&gt;</code>. Cet exemple utilise les classes <code data-v-6be72bd9>w-full</code> pour prendre toute la largeur sur les petits \xE9crans, <code data-v-6be72bd9>md:w-1/2</code> pour prendre la moiti\xE9 de la largeur sur les \xE9crans moyens, et <code data-v-6be72bd9>lg:w-1/3</code> pour prendre un tiers de la largeur sur les grands \xE9crans. </p><p class="mb-2" data-v-6be72bd9><strong data-v-6be72bd9>Flexbox et Grid :</strong><code data-v-6be72bd9>&lt;div class=&quot;flex justify-between items-center&quot;&gt;Contenu&lt;/div&gt;</code> pour utiliser Flexbox, et <code data-v-6be72bd9>&lt;div class=&quot;grid grid-cols-3 gap-4&quot;&gt;Contenu&lt;/div&gt;</code> pour utiliser Grid. </p><p class="mb-2" data-v-6be72bd9> Exemple de bouton centr\xE9 : <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;flex justify-center&quot;&gt;
  &lt;button class=&quot;bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded&quot;&gt;
    Cliquez ici
  &lt;/button&gt;
&lt;/div&gt;</code></pre></p></section>`);
      } else {
        _push(`<!---->`);
      }
      if (currentPage.value === 4) {
        _push(`<section data-page="4" class="mb-8" data-v-6be72bd9> {/* text-gray-800 dark:text-gray-200 h\xE9rit\xE9 */} <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-6be72bd9>4. Personnalisation Avanc\xE9e de Tailwind CSS</h2> {/* Titre adapt\xE9 */} {/* ... (Contenu de la page 4, d\xE9j\xE0 ok avec dark:) ... */} <p class="mb-2" data-v-6be72bd9> Vous pouvez personnaliser le th\xE8me de Tailwind CSS en modifiant le fichier <code data-v-6be72bd9>tailwind.config.js</code>. Cela vous permet de d\xE9finir vos propres couleurs, polices, espacements, breakpoints, etc. (Voir Page 2 pour un exemple de configuration). </p><p class="mb-2" data-v-6be72bd9> La directive <code data-v-6be72bd9>@apply</code> est un outil puissant pour cr\xE9er des abstractions et garder votre HTML propre, surtout pour des composants r\xE9utilisables. </p><p class="mb-2" data-v-6be72bd9> Exemple d&#39;utilisation de <code data-v-6be72bd9>@apply</code> pour un bouton personnalis\xE9 (rappel de la Page 2) : <pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>/* Dans votre fichier CSS, id\xE9alement dans @layer components */
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
}</code></pre><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Utilisation dans le HTML --&gt;
&lt;button class=&quot;btn-primary&quot;&gt;Bouton Primaire&lt;/button&gt;
&lt;button class=&quot;btn-secondary&quot;&gt;Bouton Secondaire&lt;/button&gt;</code></pre></p><p class="mb-2" data-v-6be72bd9> Utilisez la fonction <code data-v-6be72bd9>theme()</code> pour acc\xE9der aux valeurs de votre th\xE8me dans du CSS personnalis\xE9 qui n&#39;utilise pas <code data-v-6be72bd9>@apply</code>. <pre data-v-6be72bd9><code class="language-css" data-v-6be72bd9>.custom-gradient {
  background-image: linear-gradient(to right, theme(&#39;colors.blue.500&#39;), theme(&#39;colors.purple.600&#39;));
}</code></pre></p></section>`);
      } else {
        _push(`<!---->`);
      }
      if (currentPage.value === 5) {
        _push(`<section data-page="5" class="mb-8" data-v-6be72bd9> {/* text-gray-800 dark:text-gray-200 h\xE9rit\xE9 */} <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-6be72bd9>5. Tailwind UI (Exemples)</h2> {/* Titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9> Tailwind UI est une collection de composants d&#39;interface utilisateur pr\xE9-construits, con\xE7us avec Tailwind CSS. Il offre une vari\xE9t\xE9 de mod\xE8les et de composants que vous pouvez utiliser pour acc\xE9l\xE9rer le d\xE9veloppement de vos projets. Voici quelques exemples inspir\xE9s de Tailwind UI. </p> {/* --- Contenu complet de la Page 5 --- */} {/* Navigation */} <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Navigation (Exemple: Barre de navigation simple)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;nav class=&quot;bg-gray-800 dark:bg-gray-900&quot;&gt;
  &lt;div class=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;&gt;
    &lt;div class=&quot;flex items-center justify-between h-16&quot;&gt;
      &lt;div class=&quot;flex items-center&quot;&gt;
        &lt;div class=&quot;flex-shrink-0&quot;&gt;
          &lt;!-- Votre Logo --&gt;
          &lt;img class=&quot;h-8 w-auto&quot; src=&quot;https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg&quot; alt=&quot;Logo&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;hidden md:block&quot;&gt;
          &lt;div class=&quot;ml-10 flex items-baseline space-x-4&quot;&gt;
            &lt;a href=&quot;#&quot; class=&quot;bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium&quot; aria-current=&quot;page&quot;&gt;Dashboard&lt;/a&gt;
            &lt;a href=&quot;#&quot; class=&quot;text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium&quot;&gt;Team&lt;/a&gt;
            &lt;a href=&quot;#&quot; class=&quot;text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium&quot;&gt;Projects&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hidden md:block&quot;&gt;
        &lt;!-- \xC9l\xE9ments \xE0 droite (ex: profil utilisateur) --&gt;
      &lt;/div&gt;
      &lt;div class=&quot;-mr-2 flex md:hidden&quot;&gt;
        &lt;!-- Bouton menu mobile --&gt;
        &lt;button type=&quot;button&quot; class=&quot;bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white&quot; aria-controls=&quot;mobile-menu&quot; aria-expanded=&quot;false&quot;&gt;
          &lt;span class=&quot;sr-only&quot;&gt;Open main menu&lt;/span&gt;
          &lt;!-- Ic\xF4ne menu (ouvert/ferm\xE9) --&gt;
          &lt;svg class=&quot;block h-6 w-6&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot; aria-hidden=&quot;true&quot;&gt;
            &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M4 6h16M4 12h16m-7 6h7&quot; /&gt;
          &lt;/svg&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Menu Mobile (cach\xE9 par d\xE9faut) --&gt;
  &lt;div class=&quot;md:hidden&quot; id=&quot;mobile-menu&quot;&gt;
    &lt;div class=&quot;px-2 pt-2 pb-3 space-y-1 sm:px-3&quot;&gt;
      &lt;a href=&quot;#&quot; class=&quot;bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium&quot; aria-current=&quot;page&quot;&gt;Dashboard&lt;/a&gt;
      &lt;a href=&quot;#&quot; class=&quot;text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium&quot;&gt;Team&lt;/a&gt;
      &lt;a href=&quot;#&quot; class=&quot;text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium&quot;&gt;Projects&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Formulaires (Exemple: Champ de saisie simple)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div&gt;
  &lt;label for=&quot;email&quot; class=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300&quot;&gt;Email&lt;/label&gt;
  &lt;div class=&quot;mt-1&quot;&gt;
    &lt;input
      type=&quot;email&quot;
      name=&quot;email&quot;
      id=&quot;email&quot;
      class=&quot;shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400&quot;
      placeholder=&quot;you@example.com&quot;
    &gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Tableaux (Exemple: Tableau simple)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;flex flex-col&quot;&gt;
 &lt;div class=&quot;-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8&quot;&gt;
   &lt;div class=&quot;py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8&quot;&gt;
     &lt;div class=&quot;shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg&quot;&gt;
       &lt;table class=&quot;min-w-full divide-y divide-gray-200 dark:divide-gray-700&quot;&gt;
         &lt;thead class=&quot;bg-gray-50 dark:bg-gray-800&quot;&gt;
           &lt;tr&gt;
             &lt;th scope=&quot;col&quot; class=&quot;px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider&quot;&gt;Nom&lt;/th&gt;
             &lt;th scope=&quot;col&quot; class=&quot;px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider&quot;&gt;Titre&lt;/th&gt;
             &lt;th scope=&quot;col&quot; class=&quot;px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider&quot;&gt;Statut&lt;/th&gt;
             &lt;th scope=&quot;col&quot; class=&quot;relative px-6 py-3&quot;&gt;
               &lt;span class=&quot;sr-only&quot;&gt;Modifier&lt;/span&gt;
             &lt;/th&gt;
           &lt;/tr&gt;
         &lt;/thead&gt;
         &lt;tbody class=&quot;bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700&quot;&gt;
           &lt;tr&gt;
             &lt;td class=&quot;px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white&quot;&gt;Jane Cooper&lt;/td&gt;
             &lt;td class=&quot;px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400&quot;&gt;Regional Paradigm Technician&lt;/td&gt;
             &lt;td class=&quot;px-6 py-4 whitespace-nowrap&quot;&gt;
               &lt;span class=&quot;px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200&quot;&gt;Actif&lt;/span&gt;
             &lt;/td&gt;
             &lt;td class=&quot;px-6 py-4 whitespace-nowrap text-right text-sm font-medium&quot;&gt;
               &lt;a href=&quot;#&quot; class=&quot;text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300&quot;&gt;Modifier&lt;/a&gt;
             &lt;/td&gt;
           &lt;/tr&gt;
           &lt;!-- Autres lignes... --&gt;
         &lt;/tbody&gt;
       &lt;/table&gt;
     &lt;/div&gt;
   &lt;/div&gt;
 &lt;/div&gt;
&lt;/div&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Alertes (Exemple: Alerte de succ\xE8s)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;rounded-md bg-green-50 dark:bg-green-900 p-4&quot;&gt;
  &lt;div class=&quot;flex&quot;&gt;
    &lt;div class=&quot;flex-shrink-0&quot;&gt;
      &lt;!-- Heroicon name: solid/check-circle --&gt;
      &lt;svg class=&quot;h-5 w-5 text-green-400 dark:text-green-300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 20 20&quot; fill=&quot;currentColor&quot; aria-hidden=&quot;true&quot;&gt;
        &lt;path fill-rule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clip-rule=&quot;evenodd&quot; /&gt;
      &lt;/svg&gt;
    &lt;/div&gt;
    &lt;div class=&quot;ml-3&quot;&gt;
      &lt;p class=&quot;text-sm font-medium text-green-800 dark:text-green-200&quot;&gt;Op\xE9ration r\xE9ussie !&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Modales (Exemple: Structure de base - n\xE9cessite JS pour l&#39;affichage)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Conteneur de la modale (positionn\xE9 fixed) --&gt;
&lt;div class=&quot;fixed z-10 inset-0 overflow-y-auto&quot; aria-labelledby=&quot;modal-title&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot;&gt;
  &lt;div class=&quot;flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0&quot;&gt;
    &lt;!-- Fond overlay --&gt;
    &lt;div class=&quot;fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-900 dark:bg-opacity-75&quot; aria-hidden=&quot;true&quot;&gt;&lt;/div&gt;

    &lt;!-- Centre le contenu verticalement --&gt;
    &lt;span class=&quot;hidden sm:inline-block sm:align-middle sm:h-screen&quot; aria-hidden=&quot;true&quot;&gt;&amp;#8203;&lt;/span&gt;

    &lt;!-- Panneau de la modale --&gt;
    &lt;div class=&quot;inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full&quot;&gt;
      &lt;div class=&quot;bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4&quot;&gt;
        &lt;div class=&quot;sm:flex sm:items-start&quot;&gt;
          &lt;!-- Ic\xF4ne (optionnel) --&gt;
          &lt;div class=&quot;mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10&quot;&gt;
            &lt;svg class=&quot;h-6 w-6 text-red-600 dark:text-red-400&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 9v2m0 4h.01m-6.938-1.382L12 3m0 0l6.938 8.618M6.938 13.382L12 21m0 0l6.938-8.618&quot; /&gt;
            &lt;/svg&gt;
          &lt;/div&gt;
          &lt;div class=&quot;mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left&quot;&gt;
            &lt;h3 class=&quot;text-lg leading-6 font-medium text-gray-900 dark:text-white&quot; id=&quot;modal-title&quot;&gt;Titre de la Modale&lt;/h3&gt;
            &lt;div class=&quot;mt-2&quot;&gt;
              &lt;p class=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;Contenu de la modale. Vous pouvez mettre ici une description ou des \xE9l\xE9ments de formulaire.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;!-- Pied de page de la modale (boutons) --&gt;
      &lt;div class=&quot;bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-red-700 dark:hover:bg-red-800&quot;&gt;Action Principale&lt;/button&gt;
        &lt;button type=&quot;button&quot; class=&quot;mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-500&quot;&gt;Annuler&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Commerce \xE9lectronique (Exemple: Carte Produit)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;group relative bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden&quot;&gt;
  &lt;div class=&quot;w-full aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 lg:aspect-none group-hover:opacity-75&quot;&gt;
    &lt;img src=&quot;https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg&quot; alt=&quot;Description de l&#39;image du produit.&quot; class=&quot;w-full h-full object-center object-cover&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;p-4 flex justify-between&quot;&gt;
    &lt;div&gt;
      &lt;h3 class=&quot;text-sm text-gray-700 dark:text-gray-300&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;
          &lt;span aria-hidden=&quot;true&quot; class=&quot;absolute inset-0&quot;&gt;&lt;/span&gt;
          Nom du Produit
        &lt;/a&gt;
      &lt;/h3&gt;
      &lt;p class=&quot;mt-1 text-sm text-gray-500 dark:text-gray-400&quot;&gt;Cat\xE9gorie&lt;/p&gt;
    &lt;/div&gt;
    &lt;p class=&quot;text-sm font-medium text-gray-900 dark:text-white&quot;&gt;\u20AC48&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Marketing (Exemple: Section H\xE9ros Simple)</h3> {/* Sous-titre adapt\xE9 */} <pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;bg-white dark:bg-gray-900&quot;&gt;
  &lt;div class=&quot;max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8&quot;&gt;
    &lt;div class=&quot;text-center&quot;&gt;
      &lt;h2 class=&quot;text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase&quot;&gt;Fonctionnalit\xE9 Cl\xE9&lt;/h2&gt;
      &lt;p class=&quot;mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl&quot;&gt;Un titre accrocheur&lt;/p&gt;
      &lt;p class=&quot;max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400&quot;&gt;Une description concise expliquant la valeur ajout\xE9e de votre produit ou service.&lt;/p&gt;
      &lt;div class=&quot;mt-8 flex justify-center&quot;&gt;
        &lt;div class=&quot;inline-flex rounded-md shadow&quot;&gt;
          &lt;a href=&quot;#&quot; class=&quot;inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600&quot;&gt;
            Commencer
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&quot;ml-3 inline-flex rounded-md shadow&quot;&gt;
          &lt;a href=&quot;#&quot; class=&quot;inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 dark:bg-gray-700 dark:text-indigo-400 dark:hover:bg-gray-600&quot;&gt;
            En savoir plus
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Interface utilisateur de l&#39;application</h3> {/* Sous-titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9> Exemples de composants vari\xE9s pour construire des interfaces d&#39;applications web : </p> {/* Shells d&#39;application */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Shells d&#39;application</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Structure de base d&#39;une application avec barre lat\xE9rale et zone de contenu.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;flex h-screen bg-gray-100 dark:bg-gray-900&quot;&gt;
  &lt;!-- Barre lat\xE9rale (Sidebar) --&gt;
  &lt;div class=&quot;w-64 bg-white dark:bg-gray-800 shadow-md hidden md:block&quot;&gt;
    &lt;div class=&quot;p-4 text-lg font-bold text-gray-700 dark:text-white border-b dark:border-gray-700&quot;&gt;Logo App&lt;/div&gt;
    &lt;nav class=&quot;mt-4&quot;&gt;
      &lt;a href=&quot;#&quot; class=&quot;block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700&quot;&gt;Dashboard&lt;/a&gt;
      &lt;a href=&quot;#&quot; class=&quot;block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700&quot;&gt;Utilisateurs&lt;/a&gt;
      &lt;a href=&quot;#&quot; class=&quot;block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700&quot;&gt;Param\xE8tres&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/div&gt;

  &lt;!-- Zone de contenu principale --&gt;
  &lt;div class=&quot;flex-1 flex flex-col overflow-hidden&quot;&gt;
    &lt;!-- En-t\xEAte (Header) --&gt;
    &lt;header class=&quot;bg-white dark:bg-gray-800 shadow-sm&quot;&gt;
      &lt;div class=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;&gt;
        &lt;div class=&quot;flex justify-between h-16&quot;&gt;
          &lt;!-- Bouton menu mobile (si n\xE9cessaire) --&gt;
          &lt;div class=&quot;flex items-center md:hidden&quot;&gt;
             &lt;button class=&quot;text-gray-500 dark:text-gray-400 focus:outline-none&quot;&gt;
               &lt;svg class=&quot;h-6 w-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M4 6h16M4 12h16M4 18h16&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
             &lt;/button&gt;
          &lt;/div&gt;
          &lt;!-- Autres \xE9l\xE9ments d&#39;en-t\xEAte (recherche, profil...) --&gt;
          &lt;div class=&quot;flex items-center ml-auto&quot;&gt;
             &lt;span class=&quot;text-gray-700 dark:text-gray-300&quot;&gt;Profil Utilisateur&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;

    &lt;!-- Contenu principal --&gt;
    &lt;main class=&quot;flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6&quot;&gt;
      &lt;h1 class=&quot;text-2xl font-semibold text-gray-900 dark:text-white&quot;&gt;Titre de la Page&lt;/h1&gt;
      &lt;div class=&quot;mt-4 bg-white dark:bg-gray-800 p-4 rounded shadow&quot;&gt;
        &lt;!-- Contenu de la page ici --&gt;
        <p class="text-gray-700 dark:text-gray-300" data-v-6be72bd9>Votre contenu va ici...</p>
      &lt;/div&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* Titres */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Titres (Headings)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Exemples de titres de page ou de section.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Titre de Page Principal --&gt;
&lt;div class=&quot;border-b border-gray-200 dark:border-gray-700 pb-5 mb-5&quot;&gt;
  &lt;h1 class=&quot;text-3xl font-bold leading-tight text-gray-900 dark:text-white&quot;&gt;Titre Principal&lt;/h1&gt;
&lt;/div&gt;

&lt;!-- Titre de Section avec action --&gt;
&lt;div class=&quot;md:flex md:items-center md:justify-between mb-4&quot;&gt;
  &lt;div class=&quot;flex-1 min-w-0&quot;&gt;
    &lt;h2 class=&quot;text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate&quot;&gt;Titre de Section&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class=&quot;mt-4 flex md:mt-0 md:ml-4&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600&quot;&gt;Action Secondaire&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600&quot;&gt;Action Principale&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* Affichage des donn\xE9es */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Affichage des donn\xE9es (Data Display)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Pr\xE9sentation d&#39;informations sous forme de liste cl\xE9-valeur.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg&quot;&gt;
  &lt;div class=&quot;px-4 py-5 sm:px-6&quot;&gt;
    &lt;h3 class=&quot;text-lg leading-6 font-medium text-gray-900 dark:text-white&quot;&gt;Informations Utilisateur&lt;/h3&gt;
    &lt;p class=&quot;mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400&quot;&gt;D\xE9tails personnels.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;border-t border-gray-200 dark:border-gray-700&quot;&gt;
    &lt;dl&gt;
      &lt;div class=&quot;bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6&quot;&gt;
        &lt;dt class=&quot;text-sm font-medium text-gray-500 dark:text-gray-400&quot;&gt;Nom complet&lt;/dt&gt;
        &lt;dd class=&quot;mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2&quot;&gt;Margot Foster&lt;/dd&gt;
      &lt;/div&gt;
      &lt;div class=&quot;bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6&quot;&gt;
        &lt;dt class=&quot;text-sm font-medium text-gray-500 dark:text-gray-400&quot;&gt;Email&lt;/dt&gt;
        &lt;dd class=&quot;mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2&quot;&gt;margotfoster@example.com&lt;/dd&gt;
      &lt;/div&gt;
      &lt;div class=&quot;bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6&quot;&gt;
        &lt;dt class=&quot;text-sm font-medium text-gray-500 dark:text-gray-400&quot;&gt;R\xF4le&lt;/dt&gt;
        &lt;dd class=&quot;mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2&quot;&gt;Backend Developer&lt;/dd&gt;
      &lt;/div&gt;
    &lt;/dl&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* Listes */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Listes (Lists)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Exemple de liste simple avec s\xE9parateurs.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;ul role=&quot;list&quot; class=&quot;divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 shadow rounded-md&quot;&gt;
  &lt;li class=&quot;px-4 py-4 sm:px-6&quot;&gt;
    &lt;!-- Contenu de l&#39;\xE9l\xE9ment de liste 1 --&gt;
    <p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-v-6be72bd9>\xC9l\xE9ment 1</p>
    <p class="text-sm text-gray-500 dark:text-gray-400" data-v-6be72bd9>Description courte</p>
  &lt;/li&gt;
  &lt;li class=&quot;px-4 py-4 sm:px-6&quot;&gt;
    &lt;!-- Contenu de l&#39;\xE9l\xE9ment de liste 2 --&gt;
    <p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-v-6be72bd9>\xC9l\xE9ment 2</p>
    <p class="text-sm text-gray-500 dark:text-gray-400" data-v-6be72bd9>Autre description</p>
  &lt;/li&gt;
  &lt;!-- Autres \xE9l\xE9ments... --&gt;
&lt;/ul&gt;</code></pre> {/* Formulaires (avanc\xE9) */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Formulaires (Input Group)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Champ de saisie avec un pr\xE9fixe ou suffixe.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div&gt;
  &lt;label for=&quot;company-website&quot; class=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300&quot;&gt;Site Web&lt;/label&gt;
  &lt;div class=&quot;mt-1 flex rounded-md shadow-sm&quot;&gt;
    &lt;span class=&quot;inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400&quot;&gt;http://&lt;/span&gt;
    &lt;input type=&quot;text&quot; name=&quot;company-website&quot; id=&quot;company-website&quot; class=&quot;focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white&quot; placeholder=&quot;www.example.com&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* Retours (Feedback) */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Retours (Feedback - Notification)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Notification flottante simple (n\xE9cessite JS pour l&#39;affichage/masquage).</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Conteneur pour les notifications (souvent en position fixed) --&gt;
&lt;div class=&quot;fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end&quot;&gt;
  &lt;!-- Notification --&gt;
  &lt;div class=&quot;max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden&quot;&gt;
    &lt;div class=&quot;p-4&quot;&gt;
      &lt;div class=&quot;flex items-start&quot;&gt;
        &lt;div class=&quot;flex-shrink-0&quot;&gt;
          &lt;!-- Ic\xF4ne succ\xE8s --&gt;
          &lt;svg class=&quot;h-6 w-6 text-green-400&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot; aria-hidden=&quot;true&quot;&gt;
            &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&quot; /&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class=&quot;ml-3 w-0 flex-1 pt-0.5&quot;&gt;
          &lt;p class=&quot;text-sm font-medium text-gray-900 dark:text-white&quot;&gt;Notification envoy\xE9e !&lt;/p&gt;
          &lt;p class=&quot;mt-1 text-sm text-gray-500 dark:text-gray-400&quot;&gt;Le message a \xE9t\xE9 trait\xE9 avec succ\xE8s.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;ml-4 flex-shrink-0 flex&quot;&gt;
          &lt;button class=&quot;bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-500 dark:hover:text-gray-400&quot;&gt;
            &lt;span class=&quot;sr-only&quot;&gt;Fermer&lt;/span&gt;
            &lt;!-- Ic\xF4ne croix --&gt;
            &lt;svg class=&quot;h-5 w-5&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 20 20&quot; fill=&quot;currentColor&quot; aria-hidden=&quot;true&quot;&gt;
              &lt;path fill-rule=&quot;evenodd&quot; d=&quot;M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z&quot; clip-rule=&quot;evenodd&quot; /&gt;
            &lt;/svg&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* Navigation (avanc\xE9) */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Navigation (Onglets - Tabs)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Syst\xE8me d&#39;onglets simple.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div&gt;
  &lt;div class=&quot;sm:hidden&quot;&gt;
    &lt;label for=&quot;tabs&quot; class=&quot;sr-only&quot;&gt;Select a tab&lt;/label&gt;
    &lt;select id=&quot;tabs&quot; name=&quot;tabs&quot; class=&quot;block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white&quot;&gt;
      &lt;option selected&gt;Mon Compte&lt;/option&gt;
      &lt;option&gt;Profil&lt;/option&gt;
      &lt;option&gt;Facturation&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hidden sm:block&quot;&gt;
    &lt;div class=&quot;border-b border-gray-200 dark:border-gray-700&quot;&gt;
      &lt;nav class=&quot;-mb-px flex space-x-8&quot; aria-label=&quot;Tabs&quot;&gt;
        &lt;!-- Current: &quot;border-indigo-500 text-indigo-600&quot;, Default: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot; --&gt;
        &lt;a href=&quot;#&quot; class=&quot;border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm&quot; aria-current=&quot;page&quot;&gt;Mon Compte&lt;/a&gt;
        &lt;a href=&quot;#&quot; class=&quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm&quot;&gt;Profil&lt;/a&gt;
        &lt;a href=&quot;#&quot; class=&quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm&quot;&gt;Facturation&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- Contenu des onglets ici --&gt;
&lt;/div&gt;</code></pre> {/* Superpositions (Overlays) */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Superpositions (Slide-over Panel)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Panneau coulissant depuis le c\xF4t\xE9 (n\xE9cessite JS).</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Conteneur du slide-over --&gt;
&lt;div class=&quot;fixed inset-0 overflow-hidden z-10&quot; aria-labelledby=&quot;slide-over-title&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot;&gt;
  &lt;div class=&quot;absolute inset-0 overflow-hidden&quot;&gt;
    &lt;!-- Fond overlay --&gt;
    &lt;div class=&quot;absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-900 dark:bg-opacity-75&quot; aria-hidden=&quot;true&quot;&gt;&lt;/div&gt;

    &lt;div class=&quot;fixed inset-y-0 right-0 pl-10 max-w-full flex&quot;&gt;
      &lt;!-- Panneau coulissant --&gt;
      &lt;div class=&quot;w-screen max-w-md&quot;&gt;
        &lt;div class=&quot;h-full flex flex-col py-6 bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll&quot;&gt;
          &lt;div class=&quot;px-4 sm:px-6&quot;&gt;
            &lt;div class=&quot;flex items-start justify-between&quot;&gt;
              &lt;h2 class=&quot;text-lg font-medium text-gray-900 dark:text-white&quot; id=&quot;slide-over-title&quot;&gt;Titre du Panneau&lt;/h2&gt;
              &lt;div class=&quot;ml-3 h-7 flex items-center&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-500 dark:hover:text-gray-400&quot;&gt;
                  &lt;span class=&quot;sr-only&quot;&gt;Fermer panneau&lt;/span&gt;
                  &lt;!-- Ic\xF4ne croix --&gt;
                  &lt;svg class=&quot;h-6 w-6&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot; aria-hidden=&quot;true&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot; /&gt;
                  &lt;/svg&gt;
                &lt;/button&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;mt-6 relative flex-1 px-4 sm:px-6&quot;&gt;
            &lt;!-- Contenu du panneau --&gt;
            &lt;div class=&quot;absolute inset-0 px-4 sm:px-6&quot;&gt;
              &lt;div class=&quot;h-full border-2 border-dashed border-gray-200 dark:border-gray-700&quot; aria-hidden=&quot;true&quot;&gt;
                 <p class="p-4 text-gray-700 dark:text-gray-300" data-v-6be72bd9>Contenu du panneau coulissant...</p>
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;!-- Fin du contenu --&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* \xC9l\xE9ments */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>\xC9l\xE9ments (Avatar &amp; Badge)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Composants UI de base : Avatar et Badge.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;div class=&quot;flex items-center space-x-4&quot;&gt;
  &lt;!-- Avatar --&gt;
  &lt;span class=&quot;inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700&quot;&gt;
    &lt;!-- Image ou SVG placeholder --&gt;
    &lt;svg class=&quot;h-full w-full text-gray-300 dark:text-gray-500&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;
      &lt;path d=&quot;M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z&quot; /&gt;
    &lt;/svg&gt;
    &lt;!-- &lt;img class=&quot;h-12 w-12 rounded-full&quot; src=&quot;...&quot; alt=&quot;&quot;&gt; --&gt;
  &lt;/span&gt;

  &lt;!-- Badge --&gt;
  &lt;span class=&quot;inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200&quot;&gt;
    Actif
  &lt;/span&gt;
  &lt;span class=&quot;inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200&quot;&gt;
    Admin
  &lt;/span&gt;
&lt;/div&gt;</code></pre> {/* Mises en page */} <h4 class="text-lg font-medium mt-3 mb-1 text-gray-800 dark:text-gray-100" data-v-6be72bd9>Mises en page (Card &amp; Media Object)</h4> {/* Sous-titre adapt\xE9 */} <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-6be72bd9>Structures de layout courantes.</p><pre data-v-6be72bd9><code class="language-html" data-v-6be72bd9>&lt;!-- Card (Carte) --&gt;
&lt;div class=&quot;bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-6&quot;&gt;
  &lt;div class=&quot;px-4 py-5 sm:p-6&quot;&gt;
    &lt;h3 class=&quot;text-lg font-medium text-gray-900 dark:text-white&quot;&gt;Titre de la Carte&lt;/h3&gt;
    &lt;p class=&quot;mt-1 text-sm text-gray-500 dark:text-gray-400&quot;&gt;Contenu de la carte...&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bg-gray-50 dark:bg-gray-700 px-4 py-4 sm:px-6&quot;&gt;
    &lt;!-- Pied de carte (optionnel) --&gt;
    <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300" data-v-6be72bd9>Voir plus</a>
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Media Object --&gt;
&lt;div class=&quot;flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 shadow rounded-lg&quot;&gt;
  &lt;div class=&quot;flex-shrink-0&quot;&gt;
    &lt;!-- Image ou ic\xF4ne --&gt;
    &lt;img class=&quot;h-10 w-10 rounded-full&quot; src=&quot;https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot; alt=&quot;&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;min-w-0 flex-1&quot;&gt;
    &lt;p class=&quot;text-sm font-medium text-gray-900 dark:text-white&quot;&gt;Nom de l&#39;objet&lt;/p&gt;
    &lt;p class=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;Description associ\xE9e \xE0 l&#39;image ou l&#39;ic\xF4ne.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre> {/* --- Fin Contenu complet de la Page 5 --- */} <p class="mt-6 mb-2" data-v-6be72bd9><a href="https://tailwindui.com/components" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline dark:text-blue-400 dark:hover:underline" data-v-6be72bd9> Explorer tous les composants Tailwind UI (Site Officiel) </a></p></section>`);
      } else {
        _push(`<!---->`);
      }
      if (currentPage.value === 6) {
        _push(`<section data-page="6" class="mb-8" data-v-6be72bd9> {/* text-gray-800 dark:text-gray-200 h\xE9rit\xE9 */} <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white" data-v-6be72bd9>6. Int\xE9gration de highlight.js</h2> {/* Titre adapt\xE9 */} <p class="mb-2" data-v-6be72bd9><code data-v-6be72bd9>highlight.js</code> est une librairie JavaScript qui permet de mettre en \xE9vidence la syntaxe du code dans votre site web. Elle supporte un grand nombre de langages et de styles. </p><p class="mb-2" data-v-6be72bd9> Dans ce composant, <code data-v-6be72bd9>highlight.js</code> est utilis\xE9 pour mettre en \xE9vidence le code HTML, CSS et JavaScript dans les exemples. L&#39;initialisation se fait via le hook <code data-v-6be72bd9>onMounted</code> de Vue, et est r\xE9-appliqu\xE9e \xE0 chaque changement de page (via <code data-v-6be72bd9>applyHighlighting</code> appel\xE9e dans <code data-v-6be72bd9>prevPage</code>, <code data-v-6be72bd9>nextPage</code> et <code data-v-6be72bd9>goToPage</code>) pour s&#39;assurer que le nouveau contenu affich\xE9 est stylis\xE9. </p><p class="mb-2" data-v-6be72bd9> L&#39;utilisation de <code data-v-6be72bd9>nextTick</code> dans <code data-v-6be72bd9>applyHighlighting</code> est cruciale. Elle garantit que Vue a termin\xE9 la mise \xE0 jour du DOM (afficher la nouvelle section, masquer l&#39;ancienne) avant que <code data-v-6be72bd9>highlight.js</code> ne tente de trouver et de styliser les blocs de code. Sans <code data-v-6be72bd9>nextTick</code>, <code data-v-6be72bd9>highlight.js</code> pourrait s&#39;ex\xE9cuter trop t\xF4t et ne pas trouver les \xE9l\xE9ments corrects. </p><pre data-v-6be72bd9><code class="language-javascript" data-v-6be72bd9>
import { ref, onMounted, nextTick } from &#39;vue&#39;; // nextTick est important
import hljs from &#39;highlight.js&#39;;
import &#39;highlight.js/styles/github-dark.css&#39;; // Style github-dark (ou autre)

const currentPage = ref(1);
const totalPages = 6; // Nombre total de sections/pages

// Fonction pour appliquer le highlighting
const applyHighlighting = () =&gt; {
  nextTick(() =&gt; { // Attend que le DOM soit mis \xE0 jour par Vue
    try {
      // Cible uniquement les blocs de code de la page courante
      const visibleSection = document.querySelector(\`section[data-page=&quot;\${currentPage.value}&quot;]\`);
      if (visibleSection) {
        // S\xE9lectionne les blocs non encore trait\xE9s par highlight.js
        visibleSection.querySelectorAll(&#39;pre code:not(.hljs)&#39;).forEach((block) =&gt; {
           hljs.highlightElement(block);
        });
      }
    } catch (error) {
      console.error(&quot;Erreur lors de l&#39;application de highlight.js:&quot;, error);
    }
  });
};

onMounted(() =&gt; {
  // Initialisation du mode sombre (ajout\xE9)
  let preferredTheme = &#39;light&#39;; // D\xE9faut
  try {
      const savedTheme = localStorage.getItem(&#39;theme&#39;);
      if (savedTheme) {
          preferredTheme = savedTheme;
      } else if (window.matchMedia &amp;&amp; window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;).matches) {
          preferredTheme = &#39;dark&#39;;
      }
  } catch (e) {
      console.error(&quot;Failed to access theme preference:&quot;, e);
      if (window.matchMedia &amp;&amp; window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;).matches) {
          preferredTheme = &#39;dark&#39;;
      }
  }
  applyDarkModePreference(preferredTheme === &#39;dark&#39;); // Applique le th\xE8me initial

  // Application initiale de highlight.js
  applyHighlighting();
});

const prevPage = () =&gt; {
  if (currentPage.value &gt; 1) {
    currentPage.value--;
    window.scrollTo(0, 0); // Remonte en haut
    applyHighlighting(); // R\xE9-applique apr\xE8s changement de page
  }
};

const nextPage = () =&gt; {
  if (currentPage.value &lt; totalPages) {
    currentPage.value++;
    window.scrollTo(0, 0); // Remonte en haut
    applyHighlighting(); // R\xE9-applique apr\xE8s changement de page
  }
};

// Fonction pour la navigation via le sommaire
const goToPage = (page) =&gt; {
  if (page &gt;= 1 &amp;&amp; page &lt;= totalPages) {
    currentPage.value = page;
    window.scrollTo(0, 0); // Remonte en haut
    applyHighlighting(); // R\xE9-applique apr\xE8s changement de page
  }
};
</code></pre></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between items-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700" data-v-6be72bd9><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900" data-v-6be72bd9> Pr\xE9c\xE9dent </button><span class="text-sm text-gray-700 dark:text-gray-300" data-v-6be72bd9> Page ${ssrInterpolate(currentPage.value)} sur ${ssrInterpolate(totalPages)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages) ? " disabled" : ""} class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900" data-v-6be72bd9> Suivant </button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/leconTaiwind.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const leconTaiwind = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6be72bd9"]]);
const _sfc_main = {
  __name: "menutcss",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100" }, _attrs))}><main><div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(leconTaiwind, null, null, _parent));
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menutcss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=menutcss-Dfm7G71k.mjs.map
