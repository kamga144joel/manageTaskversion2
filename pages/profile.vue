<template>
     <div class=" justify-start md:flex-row, sm:w-100%, lg:w-100%, 2xl:w-100% min-h-screen flex flex-col md:flex-row dark:bg-gray-900 bg-white-600">
    <h1 class="dark:caret-stone-950 font-semibold-medium-serif-bold text-fuchsia-950 text-left-10">MANAGETASKS</h1>
    <buton @click="toggleDarkMode "
    class="p-2 rounded-md text-gray-500 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
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
     </buton>
      <nav>
        <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://www.economie-gestion.com/wp-content/uploads/2021/02/2-principaux-qualites-dun-bon-manager-768x512.png" alt=""/>
        <div>
      <a href="/detailWeb" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">detailWeb</a>
      <a href="/menutcss" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">courGratuit(tailwindcss)</a>
      <a href="/courcss" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">courGratuit(basecss)</a>
      <a href="/login" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Connectez-vous</a>
        </div>
      </nav>
      </div>
      </template>
   
  <script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { onMounted } from 'vue';
  const route = useRoute();
  const router = useRouter();
  const isDarkMode = ref(false);
  const applyDarkModePreference = (darkModeEnabled) => {
    isDarkMode.value = darkModeEnabled;
    if(darkModeEnabled){
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
  }
  const toggleDarkMode = () => {
    const newState =  !isDarkMode.value;
    applyDarkModePreference(newState);
    try {
      localStorage.setItem('theme', newState ? 'dark': 'light');
    }
    catch(error){
      console.error("echec de la sauvegade de la preference de theme", e)
    }
  }
  onMounted(()=>{
  let preferredTheme = localStorage.getItem('theme');
   try {
    const savedTheme = 'light';
    if (savedTheme) {
      preferredTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches){
      preferredTheme ='dark';
    }
  }
    catch(e){
      console.error("Échec de l'accès à la préférence de thème:", e);
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        preferredTheme = 'dark'
      }
    }
   applyDarkModePreference(preferredTheme === 'dark');
  })
  </script>
  