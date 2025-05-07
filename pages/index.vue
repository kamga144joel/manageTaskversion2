<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-8">
    <Logo class="w-32 h-32" />
    <h1 class="text-4xl font-bold text-center">Bienvenue sur MANAGETASKS</h1>
    <p class="text-gray-600 text-center">Votre outil de gestion de tâches collaboratif</p>
    <profil/>
  </div>
</template>

<script setup>
import Logo from '~/components/Logo.vue'
import profil from '../components/profil.vue'
</script>
