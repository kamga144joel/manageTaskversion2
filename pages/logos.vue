<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Gestion des logos</h1>

    <!-- Formulaire d'ajout de logo -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">Ajouter un logo</h2>
      <form @submit.prevent="handleAddLogo">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nom:</label>
            <input 
              v-model="logoName" 
              type="text" 
              placeholder="Nom du logo"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">URL:</label>
            <input 
              v-model="logoUrl" 
              type="text" 
              placeholder="URL de l'image"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description:</label>
            <input 
              v-model="logoDescription" 
              type="text" 
              placeholder="Description"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Catégorie:</label>
            <input 
              v-model="logoCategory" 
              type="text" 
              placeholder="Catégorie"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
          </div>
          <div class="flex justify-end">
            <button 
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>

      <p v-if="addLogoLoading" class="mt-4 text-blue-500">Ajout en cours...</p>
      <p v-if="addLogoError" class="mt-4 text-red-500">Une erreur s'est produite : {{ addLogoError.message }}</p>
    </div>

    <!-- Liste des logos -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4">Liste des logos</h2>
      
      <div v-if="loading" class="text-center py-4">
        <p class="text-yellow-600">Chargement en cours...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-4">
        <p class="text-red-600">Une erreur s'est produite : {{ error.message }}</p>
      </div>
      
      <div v-if="logos.length === 0" class="text-center py-4">
        <p>Aucun logo trouvé.</p>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="logo in logos" :key="logo.id" class="bg-gray-50 rounded-lg p-4">
          <div class="flex items-center gap-4">
            <img :src="logo.url" :alt="logo.name" class="w-16 h-16 object-contain">
            <div>
              <h3 class="font-semibold">{{ logo.name }}</h3>
              <p class="text-sm text-gray-600">{{ logo.description }}</p>
              <p class="text-sm text-gray-500">Catégorie: {{ logo.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

// États du formulaire
const logoName = ref('')
const logoUrl = ref('')
const logoDescription = ref('')
const logoCategory = ref('')

// Requêtes GraphQL
const GET_LOGOS_QUERY = gql`
  query GetLogos {
    logos {
      id
      name
      url
      description
      category
    }
  }
`

const CREATE_LOGO_MUTATION = gql`
  mutation CreateLogo($name: String!, $url: String!, $description: String!, $category: String!) {
    createLogo(
      name: $name,
      url: $url,
      description: $description,
      category: $category
    ) {
      id
      name
      url
      description
      category
    }
  }
`

// Utilisation des mutations et requêtes
const { mutate: createLogo, loading: addLogoLoading, error: addLogoError } = useMutation(CREATE_LOGO_MUTATION)
const logos = ref([])
const { result, loading, error } = useQuery(GET_LOGOS_QUERY)

// Mettre à jour la liste des logos quand les données changent
watch(result, (newValue) => {
  if (newValue?.logos) {
    logos.value = newValue.logos
  }
})

// Fonction pour gérer l'ajout de logo
const handleAddLogo = async () => {
  if (!logoName.value || !logoUrl.value || !logoDescription.value || !logoCategory.value) return

  try {
    await createLogo({
      name: logoName.value,
      url: logoUrl.value,
      description: logoDescription.value,
      category: logoCategory.value
    })
    
    // Réinitialiser le formulaire
    logoName.value = ''
    logoUrl.value = ''
    logoDescription.value = ''
    logoCategory.value = ''
  } catch (err) {
    console.error('Erreur lors de l\'ajout du logo:', err)
    addLogoError.value = err
  }
}
</script>
