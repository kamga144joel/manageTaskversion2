<template>

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
  