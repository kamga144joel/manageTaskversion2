<template>
  <div class="w-fuull md:w-1/2">
    <h1 class="text-2xl font-bold text-red-600 underline text-center">Gestion des tâches</h1>
    <!-- <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" /> -->
    </div>
   <!-- creation des taches -->
  <div>
    <h2>Ajouter une tâche</h2>
  <form>
    <div>
    <label> Titre:</label>
    </div>
    <input class=" px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
     v-model="title" type="text" placeholder="Titre"/>
     <div>
    <label>description:</label>
    </div>
    <input class=" px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
     v-model="description" type="text" placeholder="Description"/>
    <div>
    <label>Proprietaire</label>
    </div>
     <input   class=" px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"         
    v-model="owner" type="text" placeholder="Proprietaire"/>
      <div>
    <button @click="addTache">Ajouter</button>
    </div>
  </form>

    <p v-if="addTacheLoading">Ajout en cours...</p>
    <p v-if="addTacheError">Une erreur s'est produite : {{ addTacheError.message }}</p>
  </div>
  <div>
  <h1 class="italic underline text-center text-neutral-950 font-medium">informations des taches des utilisateurs</h1>
  </div>

   <div>
    <p v-if="loading" class="bg-yellow text-yellow  rounded">Chargement en cours...</p>
    <p v-if="error">Une erreur s'est produite : {{ error.message }}</p>
    <ul v-if="taches.length">
      <li v-for="tache in taches" :key="tache.id">
        <table class="border text-center">
          <thead>
            <tr>
              <label for="owner">Nom du propriétaire  </label>

              <th>{{ tache.owner.name}} {{ tache.owner.username}}</th>
            </tr>
          </thead>
          <tbody>
          <tr class="border border-x border-y">
            <th>ID</th>
            <td>{{ tache.id }}</td>
          </tr>
          <hr>
          <tr class="border ">
            <th>Tache</th>
            <td>{{ tache.title }}</td>
          </tr>
          <tr class="border">
            <th>Statut</th>
            <td>{{ tache.completed ? 'Terminée' : 'En cours' }}</td>
          </tr>
          <tr class="border">
            <th>Description</th>
            <td>{{ tache.description}}</td>
          </tr>

          <tr class="border">
            <th>Prenom</th>
            <td>{{ tache.owner.username }}</td>
          </tr>
          <tr class="border">
            <th>Nom</th>
            <td>{{ tache.owner.name }}</td>
          </tr>
          <tr class="border">
            <th>Email de utilisateur</th>
            <td>{{ tache.owner.email }}</td>
          </tr>
          </tbody>
        </table>
      </li>
    </ul>
    <p v-if="!loading && !error && taches.length === 0">
      Aucune tâche trouvée.
    </p>
  </div>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
          <ul v-if="taches.length">
             <li v-for="tache in taches" :key="tache.id">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <nav>
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom du Proprietaire</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">tache</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">id</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Statut</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">prenom</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">nom</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
              </tr>
              </nav>
            </thead>
            <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.owner.name}} {{ tache.owner.username}}</td>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.title }}</td>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.description}}</td>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.id}}</td>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.owner.name }}</td>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.owner.username }}</td>
                <td scope="col" class="px-6 py-4 whitespace-nowrap">{{ tache.owner.email }}</td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{{ tache.completed ? 'Terminée' : 'En cours' }}</span>
                </td>
              </tr>
              <!-- Autres lignes... -->
            </tbody>
          </table>
          </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
</template>

<script setup>
import { computed } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import {onMounted} from 'vue'
import {gql} from 'graphql-tag'

// Définition de la requête GraphQL
const GET_TACHES_QUERY = gql`
  query {
    taches {
      collection {
        id
        title
        completed
        description
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
   mutation AddTache($title: String!, $description: String!, $ownerId: ID!) {
     addTache(input: { title: $title, description: $description, owner: $owner, completed: $completed }) {
       title
       description
       completed
       owner  
     }
   }
`
// Utilisation de la mutation
const { mutate: addTache, loading: addTacheLoading, error: addTacheError } = useMutation(ADD_TACHE_MUTATION)
// Exécuter la requête
const { result, loading, error } = useQuery(GET_TACHES_QUERY, null, {
  fetchPolicy: 'cache-and-network'
})

// Calculer les tâches à partir du résultat  
const taches = computed(() => result.value?.taches?.collection || [])

</script>


