<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Profil Component with Navigation -->
        <profil />

        <!-- Main Content - Features -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-center mb-8">Pourquoi MANAGETASKS ?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-3">Collaboratif</h3>
              <p class="text-gray-600">Gérez vos tâches en équipe avec nos outils de collaboration en temps réel.</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-3">Organisé</h3>
              <p class="text-gray-600">Suivez l'avancement de vos projets grâce à nos tableaux et filtres avancés.</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-3">Simple</h3>
              <p class="text-gray-600">Interface intuitive et facile à utiliser, accessible à tous.</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-16 text-center text-gray-500 text-sm">
          © 2025 MANAGETASKS. Tous droits réservés.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import profil from '~/components/profil.vue'
</script>
