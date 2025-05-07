<template>
  <transition
    :name="transitionName"
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  transitionName: {
    type: String,
    default: 'fade'
  }
})

const beforeEnter = (el) => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(20px)'
}

const enter = (el, done) => {
  setTimeout(() => {
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
    done()
  }, 100)
}

const afterEnter = (el) => {
  el.style.transition = 'all 0.3s ease'
}

const beforeLeave = (el) => {
  el.style.opacity = '1'
  el.style.transform = 'translateY(0)'
}

const leave = (el, done) => {
  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(-20px)'
    done()
  }, 100)
}

const afterLeave = (el) => {
  el.style.transition = 'all 0.3s ease'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
