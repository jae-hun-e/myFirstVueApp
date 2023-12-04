<template>
  <div ref="observerElement" />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const observerElement = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
const emit = defineEmits(['show'])

const createObserver = () => {
  observer = new IntersectionObserver(
    (entries) => entries[0].isIntersecting && emit('show'),
    {
      rootMargin: '5px',
      threshold: 1.0
    }
  )

  observerElement.value && observer.observe(observerElement.value)
}
const deleteObserver = () => {
  observer && observer.disconnect()
}

onMounted(() => {
  createObserver()
})
onUnmounted(() => {
  deleteObserver()
})
</script>
