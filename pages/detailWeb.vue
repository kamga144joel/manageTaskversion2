<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Détails Web</h1>

    <!-- Formulaire de détails -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Titre:</label>
          <input 
            v-model="title" 
            type="text" 
            placeholder="Titre"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description:</label>
          <textarea 
            v-model="description" 
            rows="4"
            placeholder="Description"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
          ></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Contenu:</label>
          <textarea 
            v-model="content" 
            rows="6"
            placeholder="Contenu détaillé"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button 
            @click="saveDetails"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// États du formulaire
const title = ref('')
const description = ref('')
const content = ref('')

// Fonction pour sauvegarder les détails
const saveDetails = async () => {
  try {
    // Ici, vous pouvez ajouter la logique pour sauvegarder les détails
    console.log('Détails sauvegardés:', {
      title: title.value,
      description: description.value,
      content: content.value
    })
    
    // Réinitialiser le formulaire
    title.value = ''
    description.value = ''
    content.value = ''
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error)
  }
}
</script>
