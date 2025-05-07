<template>
  <div class="relative w-16 h-16" :class="{ 'dark:bg-gray-800': darkMode }">
    <img
      src="~/assets/logo.svg"
      alt="MANAGETASKS Logo"
      class="w-full h-full"
      :class="{
        'filter drop-shadow-lg': shadow,
        'animate-spin': spin,
        'grayscale': grayscale,
        'invert': invert
      }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: false
  },
  spin: {
    type: Boolean,
    default: false
  },
  grayscale: {
    type: Boolean,
    default: false
  },
  invert: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 2s linear infinite;
}
</style>
