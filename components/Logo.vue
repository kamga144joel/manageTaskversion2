<template>
  <div class="relative" :class="{ 'dark:bg-gray-800': darkMode }">
    <img
      src="/logo.jpg"
      alt="MANAGETASKS Logo"
      :class="{
        'w-16 h-16': size === 'small',
        'w-24 h-24': size === 'medium',
        'w-32 h-32': size === 'large',
        'filter drop-shadow-lg': shadow,
        'animate-spin': spin,
        'grayscale': grayscale,
        'invert': invert,
        'rounded-full': rounded
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
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
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
  },
  rounded: {
    type: Boolean,
    default: true
  }
})
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
