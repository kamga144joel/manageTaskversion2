<template>
  <div class="container mx-auto px-4 py-8">
    <AnimatedTransition transitionName="fade">
      <h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Gestion des tâches</h1>
    </AnimatedTransition>

    <!-- Formulaire d'ajout de tâche -->
    <AnimatedTransition transitionName="slide">
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
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description:</label>
              <input 
                v-model="description" 
                type="text" 
                placeholder="Description"
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Propriétaire:</label>
              <input 
                v-model="owner" 
                type="text" 
                placeholder="Propriétaire"
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200"
                required
              />
            </div>
            <div class="flex justify-end">
              <button 
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Ajouter
              </button>
            </div>
          </div>
        </form>

        <AnimatedTransition transitionName="fade">
          <p v-if="addTacheLoading" class="mt-4 text-blue-500">Ajout en cours...</p>
        </AnimatedTransition>
        <AnimatedTransition transitionName="fade">
          <p v-if="addTacheError" class="mt-4 text-red-500">Une erreur s'est produite : {{ addTacheError.message }}</p>
        </AnimatedTransition>
      </div>
    </AnimatedTransition>

    <!-- Liste des tâches -->
    <AnimatedTransition transitionName="slide">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Liste des tâches</h2>
        
        <AnimatedTransition transitionName="fade">
          <div v-if="loading" class="text-center py-4">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        </AnimatedTransition>
        
        <AnimatedTransition transitionName="fade">
          <div v-else-if="error" class="text-center py-4">
            <p class="text-red-500">Une erreur s'est produite : {{ error.message }}</p>
          </div>
        </AnimatedTransition>
        
        <AnimatedTransition transitionName="fade">
          <div v-if="taches.length === 0" class="text-center py-4">
            <p class="text-gray-500">Aucune tâche trouvée.</p>
          </div>
        </AnimatedTransition>
        
        <AnimatedTransition transitionName="slide">
          <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriétaire</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tâche</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <AnimatedTransition transitionName="slide" v-for="tache in taches" :key="tache.title">
                  <tr class="transition-all duration-200 hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <AnimatedTransition transitionName="fade">
                        <span>{{ tache.owner.name }} {{ tache.owner.username }}</span>
                      </AnimatedTransition>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <AnimatedTransition transitionName="fade">
                        <span>{{ tache.title }}</span>
                      </AnimatedTransition>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <AnimatedTransition transitionName="fade">
                        <span>{{ tache.description }}</span>
                      </AnimatedTransition>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <AnimatedTransition transitionName="fade">
                        <span :class="[
                          'px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200',
                          tache.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        ]">
                          {{ tache.completed ? 'Terminée' : 'En cours' }}
                        </span>
                      </AnimatedTransition>
                    </td>
                  </tr>
                </AnimatedTransition>
              </tbody>
            </table>
          </div>
        </AnimatedTransition>
      </div>
    </AnimatedTransition>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimatedTransition from '~/components/AnimatedTransition.vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

// États du formulaire
const title = ref('')
const description = ref('')
const owner = ref('')
const loading = ref(false)
const error = ref(null)
const addTacheLoading = ref(false)
const addTacheError = ref(null)
const taches = ref([])

// Requêtes GraphQL
const GET_TACHES_QUERY = gql`
  query GetTaches {
    taches {
      collection {
        title
        description
        completed
        owner {
          name
          username
          email
        }
      }
    }
  }
`

const ADD_TACHE_MUTATION = gql`
  mutation CreateTache($title: String!, $description: String!, $owner: String!) {
    createTache(
      title: $title,
      description: $description,
      owner: $owner,
      completed: false
    ) {
      title
      description
      completed
      owner {
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
const { result, loading, error } = useQuery(GET_TACHES_QUERY)

watch(result, (newValue) => {
  if (newValue?.taches?.collection) {
    taches.value = newValue.taches.collection
  }
})

onMounted(() => {
  loading.value = true
  error.value = null
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


