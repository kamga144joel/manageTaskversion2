<script setup lang="ts">
import { ref } from 'vue';

const locale = ref('fr');

const changeLocale = (newLocale: string) => {
  locale.value = newLocale;
};
</script>

<template>
  <div>
    <UApp :locale="locale">
      <NuxtPage />
    </UApp>
  </div>
</template>
