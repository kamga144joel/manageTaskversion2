<template>
  <div class="min-h-screen flex flex-col md:flex-row items-center justify-center dark:bg-yellow-900 bg-gray-900 rounded-lg">
    <div class="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="underline font-bold text-center mb-4 text-green-900">
        Bienvenue sur le  de Gestion des Tâches
      </h1>

      <h2 class="text-center text-gray-700 mb-6">
        Connectez-vous pour bénéficier de nos services
      </h2>
      <h2 class="bg-red-700">je n'est pas de conte MANAGETASKS<a></a></h2>

      <!-- Message de chargement -->
      <p v-if="loading" class="text-center text-gray-500">Connexion en cours...</p>

      <!-- Formulaire de connexion -->
      <form v-else @submit.prevent="handleLogin" class="space-y-4">
        <!-- Champ Email -->
        <div>
          <label for="email" class="block text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@mail.com"
            autocomplete="email"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <!-- Champ Mot de passe -->
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

        <!-- Bouton de connexion -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition disabled:opacity-50"
        >
          Se connecter
        </button>

        <!-- Bouton Google -->
        <button
          type="button"
          class="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center mt-2 hover:bg-gray-50"
          @click="loginWithGoogle"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            class="w-5 h-5 mr-2"
          />
          Se connecter avec Google
        </button>

        <!-- Affichage des erreurs -->
        <p v-if="mutationError || localError" class="text-red-600 text-center mt-2">
          {{ mutationError ? mutationError.message : localError }}
        </p>
      </form>
    </div>
  </div>
</template>
<script setup>
// Importation des composables Vue & Apollo
 import { ref } from 'vue'
// Correction: Importer useRoute explicitement si ce n'est pas global
import { useRoute, useRouter } from 'vue-router'
import { useMutation, useApolloClient } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { onMounted } from 'vue'
 
const route = useRoute();
const router = useRouter();

onMounted(() => {
  // Vérifie si un token est présent dans l'URL (après redirection Google)
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token')
  if (token) {
    localStorage.setItem('auth_token', token)
    // Rediriger vers une page appropriée après connexion Google
    router.push('/infolink') // ou '/tache' si c'est plus pertinent
  }
})
// Champs réactifs du formulaire
const email = ref('')
const password = ref('')
const localError = ref(null)        // Erreurs de validation côté client
const mutationError = ref(null)     // Erreurs renvoyées par le backend

// Définition de la mutation GraphQL pour le login
const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: {
      email: $email,
      password: $password
    }) {
      user {
        id      # Assurez-vous que l'ID est bien retourné par la mutation
        token
      }
    }
  }
`

// Utilisation de la mutation
const {
  mutate: executeLogin,
  loading,
  error: apolloError // Renommé pour éviter conflit avec l'erreur générale
} = useMutation(LOGIN_MUTATION)

//Fonction pour la connexion avec Google
const loginWithGoogle = () => {
  // Redirige vers l'endpoint backend qui initie l'OAuth2 Google
  // Assurez-vous que l'URL est correcte (http ou https, port)
  window.location.href = 'https://managtask.netlify.app/.netlify/functions/backend/auth/google';
}

// Fonction appelée lors de la soumission du formulaire
const handleLogin = async () => {
  localError.value = null
  mutationError.value = null // Réinitialise l'erreur de mutation

  // Validation simple
  if (!email.value || !password.value) {
    localError.value = 'Veuillez remplir tous les champs.'
    return
  }

  try {
    // Exécution de la mutation avec les données du formulaire
    const result = await executeLogin({
      email: email.value,
      password: password.value,
    })

    // Récupération du token JWT et userId
    // Le chaînage optionnel (?.) est une bonne pratique ici
    const token = result?.data?.loginUser?.user?.token
    const userId = result?.data?.loginUser?.user?.id

    // Vérifie si le token ou userId manquent après la connexion
    if (!token) {
      // Si la mutation réussit mais ne renvoie pas de token (cas étrange)
      throw new Error('Token non reçu depuis le serveur.')
    }
    if (!userId) {
        // Il est possible que la connexion ait réussi mais n'ait pas retourné d'ID
        throw new Error('User ID non reçu depuis le serveur après la connexion.');
    }

    // Stockage du token en local (localStorage ou cookies)
    // Utilise la variable token directement, c'est plus propre que route.query.token ici
    localStorage.setItem('auth_token', token)

    // Utilisation du token pour requêter les infos de l'utilisateur
    const apolloClient = useApolloClient().client
    const meResult = await apolloClient.query({
      // --- REQUÊTE CORRIGÉE ---
      query: gql`
        query GetUserById($id: ID!) { # 1. Déclare la variable $id de type ID! (requis)
          user(id: $id) {            # 2. Utilise la variable $id comme argument 'id'
            id
            email
            username
            name
            # Ajoutez d'autres champs si nécessaire
          }
        }
      `,
      // --- FIN DE LA REQUÊTE CORRIGÉE ---
      variables: {
        id: userId // Ceci correspond maintenant correctement à la variable $id dans la requête
      },
      fetchPolicy: 'network-only', // Pour éviter d'utiliser un cache obsolète
    })

    // Vérifiez si meResult.data.user existe avant de l'utiliser
    if (meResult?.data?.user) {
        console.log("Utilisateur connecté :", meResult.data.user)
        // Vous pouvez stocker les infos utilisateur si nécessaire (Pinia, Vuex, etc.)
    } else {
        // Gérer le cas où l'utilisateur n'est pas trouvé même avec l'ID
        console.warn("Impossible de récupérer les détails de l'utilisateur avec l'ID:", userId);
        // Peut-être afficher un message à l'utilisateur ou juste continuer
    }


    // Redirection après connexion réussie
    await router.push('/infolink') // Ou une autre page appropriée

  } catch (err) {
    console.error('Erreur de connexion :', err)
    // Assurez-vous de gérer également les erreurs potentielles de la deuxième requête
    // apolloError concerne uniquement le hook useMutation
    // err attrapera les erreurs des deux appels await (executeLogin et apolloClient.query)
    // Utilisez err.message pour obtenir un message d'erreur plus clair si disponible
    mutationError.value = apolloError.value?.message || err.message || 'Une erreur inconnue est survenue.'
  }
}

</script>
