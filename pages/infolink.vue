<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-900">
    <div class="bg-slate-600 shadow rounded-lg p-50-50-50-50 m-50-50-50">
      <div class="flex items-center">
        <img class="h-12 w-12 rounded-full mr-4" src="/assets/avatar.png" alt="Avatar">
           <h2 class="text-lg font-semibold">⚔️🔥🤺 𝒟𝑒𝓋-𝒦𝒶ï𝓈𝑒𝓇 🤺 🔥</h2>
      </div>
           <div>
          <p class="text-gray-500">Software Engineer</p>
           </div>
           <div class="rounded-md bg-green-50 dark:bg-green-900 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <!-- Heroicon name: solid/check-circle -->
                <svg class="h-5 w-5 text-green-400 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800 dark:text-green-200">Vous etez actuelement connecter !</p>
              </div>
            </div>
          </div>
  <div class="flex flex-col md:flex-row">
         <nav class="justify-center space-x-4 flex flex-col md:flex-row">
        <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://www.economie-gestion.com/wp-content/uploads/2021/02/2-principaux-qualites-dun-bon-manager-768x512.png" alt=""/>
        <div>
          <a href="/courcss" class="font-bold px-3 py-2 text-green-500 rounded-lg hover:bg-slate-100 hover:text-slate-900">apprendreLecss</a>
        <a href="/infolink" class="font-bold px-3 py-2 text-red-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Infolink</a>
        <a href="/tache" class="font-bold px-3 py-2 text-yellow-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Taches</a>
        <a href="/taiwind" class="font-bold px-3 py-2 text-green-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">taiwindDsahcboard</a>
        <a href="/menutcss" class="font-bold px-3 py-2 text-red-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">apprendreTaiwindcss</a>
        <a href="/login" class="font-bold px-3 py-2 text-yellow-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</a>
        </div>
      </nav>
     </div>
         <!-- Lien vers la page "tache" -->
  <div>
    <nuxt-link to="tache" class="text-green-500 underline text-center">clique ici pour gerer tes taches</nuxt-link>
  </div>
    </div>
  </div>
  <div class="bg-gray-900 py-50 w-50 right-50 ">
        <!-- Bouton pour se déconnecter -->
        <button @click="logout" class="text-red-600">Se déconnecter</button>
  </div>
</template>

<script setup>
// Imports utiles
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

// On récupère la route actuelle et le router pour les redirections
const route = useRoute()
const router = useRouter()

// Fonction pour se déconnecter
const logout = () => {
  // On vérifie qu'on est bien côté client (navigateur)
  if (process.client) {
    localStorage.removeItem('auth_token') // Supprime le token
    router.push('/') // Redirige vers la page d'accueil
  }
}

// Au moment où le composant est monté (côté client)
onMounted(() => {
  // Vérifie qu'on est bien dans le navigateur
  if (process.client) {
    // On récupère le token existant s'il y en a un
    const token = localStorage.getItem('auth_token')

    // Si aucun token trouvé mais un token est passé dans l'URL (?token=XXX)
    if (!token && route.query.token) {
      localStorage.setItem('auth_token', route.query.token) // Enregistre le token
      router.push('/tache') // Redirige vers la page "tache"
    } else if (!token) {
      // Si aucun token du tout, on redirige vers l'accueil
      router.push('/')
    }
  }
})
</script>
