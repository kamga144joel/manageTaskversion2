<template>
  <div class="min-h-screen flex items-center justify-center dark:bg-gray-900 bg-gray-100">
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
        Créer un compte
      </h1>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="name"
            placeholder="Jean Dupont"
            required
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label for="username" class="block text-gray-700 dark:text-gray-300 mb-1">Nom d'utilisateur</label>
          <input
            v-model="username"
            type="text"
            id="username"
            name="username"
            placeholder="jeandupont"
            required
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="jean.dupont@email.com"
            required
            autocomplete="email"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label for="plainPassword" class="block text-gray-700 dark:text-gray-300 mb-1">Mot de passe</label>
          <input
            v-model="plainPassword"
            type="plainPassword"
            id="plainPassword"
            name="plainPassword"
            placeholder="********"
            required
            autocomplete="new-plainPassword"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
         <div>
          <label for="plainPasswordConfirmation" class="block text-gray-700 dark:text-gray-300 mb-1">Confirmer le mot de passe</label>
          <input
            v-model="plainPasswordConfirmation"
            type="plainPassword"
            id="plainPasswordConfirmation"
            name="plainPasswordConfirmation"
            placeholder="********"
            required
            autocomplete="new-plainPassword"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <p v-if="localError" class="text-red-500 text-sm text-center">{{ localError }}</p>
        <p v-if="mutationError" class="text-red-500 text-sm text-center">
            Erreur d'inscription: {{ mutationError.message }}
        </p>
         <p v-if="successMessage" class="text-green-500 text-sm text-center">
            {{ successMessage }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition disabled:opacity-50 flex items-center justify-center"
        >
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ loading ? 'Inscription en cours...' : 'S\'inscrire' }}
        </button>
      </form>

       <p class="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
         Déjà un compte ?
         <router-link to="/login" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
           Connectez-vous ici
         </router-link>
       </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// --- State ---
const name = ref('');
const username = ref('');
const email = ref('');
const plainPassword = ref('');
const plainPasswordConfirmation = ref('');
const localError = ref(null); // Pour les erreurs de validation côté client
const successMessage = ref(null); // Pour afficher un message de succès

const router = useRouter();

// --- GraphQL Mutation ---
// IMPORTANT: Adaptez cette mutation à votre schéma GraphQL backend !
// Les noms des champs (name, username, email, password) et le nom de la mutation (registerUser)
// doivent correspondre exactement à ce que votre API attend.
const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $username: String!, $email: String!, $plainPassword: String!) {
    createUser(input: { name: $name, username: $username, email: $email, plainPassword: $plainPassword }) {
      # Demandez les champs dont vous avez besoin après l'inscription
      # Par exemple, juste un message de succès ou l'ID de l'utilisateur
      # Si votre mutation renvoie l'utilisateur, vous pouvez demander :
       user {
          id
         email
         name
         username
    }
  }
  }
`;

const {
  mutate: executeCreate,
  loading,
  error: mutationError, // Erreurs venant d'Apollo / du serveur
  onDone, // Callback en cas de succès de la mutation
  onError // Callback en cas d'erreur de la mutation
} = useMutation(CREATE_USER_MUTATION);

// --- Methods ---
const handleRegister = async () => {
  localError.value = null; // Réinitialiser les erreurs locales
  successMessage.value = null; // Réinitialiser le message de succès

  // 1. Validation côté client (simple)
  if (!name.value || !username.value || !email.value || !plainPassword.value || !plainPasswordConfirmation.value) {
    localError.value = 'Veuillez remplir tous les champs.';
    return;
  }
  if (plainPassword.value !== plainPasswordConfirmation.value) {
    localError.value = 'Les mots de passe ne correspondent pas.';
    return;
  }
  if (plainPassword.value.length < 8) { // Exemple de règle de mot de passe
     localError.value = 'Le mot de passe doit contenir au moins 8 caractères.';
     return;
  }

  // 2. Exécuter la mutation
  try {
    await executeCreate({
      name: name.value,
      username: username.value,
      email: email.value,
      plainPassword: plainPassword.value,
      // Ne pas envoyer passwordConfirmation au backend sauf si l'API le demande explicitement
    });

    // Le callback onDone sera appelé si la mutation réussit (pas d'erreur réseau ou GraphQL)

  } catch (e) {
     // Les erreurs réseau ou de configuration sont attrapées ici
     // Les erreurs GraphQL sont gérées par onError ou disponibles dans `mutationError`
     console.error("Erreur lors de l'appel de la mutation:", e);
     // On peut définir une erreur locale générique si mutationError n'est pas déjà défini par onError
     if (!mutationError.value) {
         localError.value = "Une erreur inattendue s'est produite.";
     }
  }
};

// 3. Gérer le succès de la mutation
onDone(result => {
  console.log('Inscription réussie:', result.data);
  const user = result.data?.createUser?.user;
  if (user) {
    successMessage.value = `Bienvenue ${user.name} ! Ton compte a été créé avec succès.`;
  } else {
    successMessage.value = 'Inscription réussie.';
  }

  // Vider le formulaire
  name.value = '';
  username.value = '';
  email.value = '';
  plainPassword.value = '';
  plainPasswordConfirmation.value = '';

  // Redirection après 3 secondes
  setTimeout(() => {
    router.push('/login');
  }, 3000);
});


// 4. Gérer les erreurs GraphQL spécifiques (optionnel mais recommandé)
onError(error => {
  console.error("Erreur GraphQL lors de l'inscription:", error);
  // mutationError est automatiquement mis à jour, mais vous pouvez ajouter une logique ici si nécessaire
  // Par exemple, si l'email existe déjà, le backend pourrait renvoyer une erreur spécifique
  // que vous pourriez afficher de manière plus conviviale que le message brut.
  localError.value = null; // Efface les erreurs locales précédentes si une erreur serveur survient
});

</script>

<style scoped>
/* Styles spécifiques si nécessaire */
</style>
