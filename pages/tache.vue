<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Gestion des tâches</h1>

    <!-- Formulaire d'ajout de tâche -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">Ajouter une tâche</h2>
      <form @submit.prevent="handleAddTache">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Titre:</label>
            <input 
              v-model="title" 
              type="text" 
              placeholder="Titre"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description:</label>
            <input 
              v-model="description" 
              type="text" 
              placeholder="Description"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Propriétaire:</label>
            <input 
              v-model="owner" 
              type="text" 
              placeholder="Propriétaire"
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

      <p v-if="addTacheLoading" class="mt-4 text-blue-500">Ajout en cours...</p>
      <p v-if="addTacheError" class="mt-4 text-red-500">Une erreur s'est produite : {{ addTacheError.message }}</p>
    </div>

    <!-- Liste des tâches -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4">Liste des tâches</h2>
      
      <div v-if="loading" class="text-center py-4">
        <p class="text-yellow-600">Chargement en cours...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-4">
        <p class="text-red-600">Une erreur s'est produite : {{ error.message }}</p>
      </div>
      
      <div v-if="taches.length === 0" class="text-center py-4">
        <p>Aucune tâche trouvée.</p>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriétaire</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tâche</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="tache in taches" :key="tache.id">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ tache.owner.name }} {{ tache.owner.username }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ tache.title }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ tache.description }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ tache.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  tache.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                ]">
                  {{ tache.completed ? 'Terminée' : 'En cours' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ tache.owner.email }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

// États du formulaire
const title = ref('')
const description = ref('')
const owner = ref('')

// Requêtes GraphQL
const GET_TACHES_QUERY = gql`
  query GetTaches {
    taches {
      id
      title
      description
      completed
      owner {
        id
        name
        username
        email
      }
    }
  }
`

const ADD_TACHE_MUTATION = gql`
  mutation AddTache($title: String!, $description: String!, $owner: String!) {
    addTache(
      title: $title,
      description: $description,
      owner: $owner,
      completed: false
    ) {
      id
      title
      description
      completed
      owner {
        id
        name
        username
        email
      }
    }
  }
`

// Utilisation des mutations et requêtes
const { mutate: addTache, loading: addTacheLoading, error: addTacheError } = useMutation(ADD_TACHE_MUTATION)
const taches = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const { data } = await useFetch('/api/taches')
    taches.value = data.value.taches || []
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})

// Fonction pour gérer l'ajout de tâche
const handleAddTache = async () => {
  if (!title.value || !description.value || !owner.value) return

  try {
    await addTache({
      title: title.value,
      description: description.value,
      owner: owner.value
    })
    
    // Réinitialiser le formulaire
    title.value = ''
    description.value = ''
    owner.value = ''
  } catch (err) {
    console.error('Erreur lors de l\'ajout de la tâche:', err)
    addTacheError.value = err
  }
}
</script>


