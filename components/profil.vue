<template>
  <div class="bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest rounded-lg px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1"><svg class="fill-current h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <div>
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </div>
  </div>
  <!--icone, animations, transitions, graphisme, upload-->
  <!-- 1. Conteneur Principal -->
  <div class=" responsive-container max-h-full border-green-light justify-center xl:justify-around items-center sm:justify-center w-full min-h-screen flex flex-col dark:bg-gray-900 bg-white rounded-lg max-w-full">

    <!-- 2. Barre de Navigation -->
    <nav class="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 cursor-pointer p-4 flex items-center max-h-full justify-between w-full max-w-full sticky top-0 z-10 shadow-lg rounded-lg">
      <!-- Section Gauche -->
      <div class="flex items-center space-x-8">
        <img class="inline-block h-16 w-16 rounded-full ring-4 ring-white flex-shrink-0" src="/logo.jpg" alt="MANAGETASKS Logo" loading="lazy"/>
        <h1 class="text-3xl flex font-bold text-white select-text bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">MANAGETASKS</h1>
      </div>

      <!-- Section Droite: Liens et Bouton Dark Mode -->
      <div class="items-center space-x-4">

        <!-- Lien detailWeb avec détails au survol -->
        <div
          class="relative items-center"
          @mouseenter="showDetail('detailWeb')"
          @mouseleave="hideDetail"
        > 
          <a
            href="/detailWeb"
            @click="hideDetail"
            @mouseenter="showDetail('detailWeb')"
            class="text-lg font-semibold px-4 py-3 text-lime-400 rounded-lg hover:bg-lime-900 hover:text-lime-300 transition-all duration-200 flex"
          >
            detailWeb
          </a>
          <!-- Le contenu des détails (initialement caché) -->
          <div
            v-show="activeDetail === 'detailWeb'"
            class="absolute z-20 flex mt-2 w-48 p-2 bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600"
          >
            Description rapide de la page detailWeb.
          </div>
        </div>

        <!-- Lien courGratuit(tailwindcss) avec détails au survol -->
        <div
          class="relative"
          @mouseenter="showDetail('tailwind')"
          @mouseleave="hideDetail"
        >
          <a
            href="/menutcss"
            @click="hideDetail"
            class="text-lg font-semibold px-4 py-3 text-red-400 rounded-lg hover:bg-red-900 hover:text-red-300 transition-all duration-200"
          >
            courGratuit(tailwindcss)
          </a>
          <div
            v-show="activeDetail === 'tailwind'"
            class="absolute z-20 mt-2 w-48 p-2 flex bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600"
          >
            Accédez au cours complet sur Tailwind CSS.
          </div>
        </div>

        <!-- Lien courGratuit(basecss) avec détails au survol -->
        <div
          class="relative"
          @mouseenter="showDetail('basecss')"
          @mouseleave="hideDetail"
        >
          <a
            href="/courcss"
            @click="hideDetail"
            class="text-lg font-semibold px-4 py-3 text-yellow-400 rounded-lg hover:bg-yellow-900 hover:text-yellow-300 transition-all duration-200"
          >
            courGratuit(basecss)
          </a>
          <div
            v-show="activeDetail === 'basecss'"
            class="absolute z-20 mt-2 w-48 p-2  bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600"
          >
            Apprenez les bases fondamentales du CSS.
          </div>
        </div>

        <!-- Lien Connectez-vous avec détails au survol -->
        <div
          class="relative"
          @mouseenter="showDetail('login')"
          @mouqseleave="hideDetail"
        >
          <a
            href="/login"
            @click="hideDetail"
            class="text-lg font-semibold px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-all duration-200 flex"
          >
            Connectez-vous
          </a>
          <div
            v-show="activeDetail === 'login'"
            class="absolute z-20 mt-2 w-48 p-2 flex bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600 right-0"
          >
            Accédez à votre compte ou créez-en un.
          </div>
        </div>

        <!-- Bouton Dark Mode (inchangé) -->
        <button @click="toggleDarkMode"
           class="p-2 rounded-md text-gray-500 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           aria-label="Toggle Dark Mode"
        >
           <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
           </svg>
           <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
           </svg>
        </button>
      </div>
    </nav>

    <!-- 3. Zone de Contenu Principal (inchangée) -->
    <div class="flex-grow flex items-center justify-center p-6">
      <div class="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 class="underline font-bold text-center mb-4 text-green-600">
          Bienvenue sur notre site Web
        </h1>
        <h2 class="text-center text-gray-700 mb-6">
          Connectez-vous pour bénéficier de nos services
        </h2>
        <h2 class="bg-red-700">vous n'avez pas de conte MANAGETASKS??? c'est pas grave!!!<a
          href="/inscription" class="underline">créez-en</a></h2>

        <p v-if="loading" class="text-center text-gray-500">Connexion en cours...</p>
        <form v-else @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700 mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              placeholder="dev-kaiser@gmail.com"
              autocomplete="email"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label for="password" class="block text-gray-700 mb-1">Mot de passe</label>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              autocomplete="current-password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition disabled:opacity-50"
          >
            Se connecter
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Mot de passe oublier?
          </a>
          <button
            type="button"
            class="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center mt-2 hover:bg-gray-50"
            @click="loginWithGoogle"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              class="w-5 h-5 mr-2 hover:text-yellow-500"
            />
            Se connecter avec Google
          </button>
          <p v-if="mutationError || localError" class="text-red-600 text-center mt-2">
            {{ mutationError ? mutationError.message : localError }}
          </p>
        </form>
      </div>
    </div>
    <div class="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
      <p class="font-bold">Message d'information</p>
      <p class="text-sm"> Quelques textes supplémentaires pour expliquer ledit message..</p>
    </div>
    <p class="text-center text-yellow-900 text-xs">
      ©2020 Acme Corp. All rights reserved.
    </p>
  </div>
  
 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMutation, useApolloClient } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// --- State pour les détails au survol ---
const activeDetail = ref(null); // Stocke l'ID du détail à afficher (ou null)

const showDetail = (detailId) => {
  activeDetail.value = detailId;
};

const hideDetail = () => {
  activeDetail.value = null;
};

// --- Logique de Connexion (inchangée) ---
const route = useRoute();
const router = useRouter();
const email = ref('');
const password = ref('');
const localError = ref(null);
const mutationError = ref(null);

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      user {
        id
        token
      }
    }
  }
`;

const {
  mutate: executeLogin,
  loading,
  error: apolloLoginError
} = useMutation(LOGIN_MUTATION);

const loginWithGoogle = () => {
  window.location.href = 'https://localhost:8000/auth/google';
};

const handleLogin = async () => {
  localError.value = null;
  mutationError.value = null;

  if (!email.value || !password.value) {
    localError.value = 'Veuillez remplir tous les champs.';
    return;
  }

  try {
    const result = await executeLogin({
      email: email.value,
      password: password.value,
    });

    const token = result?.data?.loginUser?.user?.token;
    const userId = result?.data?.loginUser?.user?.id;

    if (!token) throw new Error('Token non reçu depuis le serveur.');
    if (!userId) throw new Error('User ID non reçu depuis le serveur après la connexion.');

    localStorage.setItem('auth_token', token);

    await router.push('/infolink');

  } catch (err) {
    console.error('Erreur de connexion :', err);
    mutationError.value = apolloLoginError.value?.message || err.message || 'Une erreur inconnue est survenue.';
  }
};

// --- Logique du Mode Sombre (inchangée) ---
const isDarkMode = ref(false);

const applyDarkModePreference = (darkModeEnabled) => {
  isDarkMode.value = darkModeEnabled;
  if (darkModeEnabled) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const toggleDarkMode = () => {
  const newState = !isDarkMode.value;
  applyDarkModePreference(newState);
  try {
    localStorage.setItem('theme', newState ? 'dark' : 'light');
  } catch (error) {
    console.error("Echec de la sauvegarde de la préférence de thème:", error);
  }
};

// --- onMounted (inchangé) ---
onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const tokenFromGoogle = params.get('token');
  if (tokenFromGoogle) {
    localStorage.setItem('auth_token', tokenFromGoogle);
    router.push('/infolink');
    return;
  }

  let preferredTheme = 'light';
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      preferredTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      preferredTheme = 'dark';
    }
  } catch (e) {
    console.error("Échec de l'accès à la préférence de thème:", e);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      preferredTheme = 'dark';
    }
  }
  applyDarkModePreference(preferredTheme === 'dark');
});

</script>

<style scoped>
/* Styles spécifiques au composant si nécessaire */
</style>
