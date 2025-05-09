import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseLight() {
  const mouseLight = ref({
    x: 0,
    y: 0,
    size: 200,
    opacity: 0.9975
  })

  const updatePosition = (e) => {
    mouseLight.value.x = e.clientX
    mouseLight.value.y = e.clientY
  }

  onMounted(() => {
    document.addEventListener('mousemove', updatePosition)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', updatePosition)
  })

  return {
    mouseLight
  }
}
