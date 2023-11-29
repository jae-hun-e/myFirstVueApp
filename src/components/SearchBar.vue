<template>
  <div class="h-[40px] w-5/6 fixed top-5">
    <input
      class="pl-2 pr-8 px-0 border-none outline-none rounded-l-xl rounded-r-xl bg-white absolute top-0 bottom-0 left-0 right-0 shadow-xl"
      placeholder="영화를 검색해 주세요."
      :value="title"
      @input="title = ($event.target as HTMLInputElement).value"
      @keydown.enter="search" />
    <TheIcon
      class="absolute right-0 top-0 bottom-0 m-auto cursor-pointer"
      @click="search">
      search
    </TheIcon>
  </div>
</template>

<script setup lang="ts">
import TheIcon from '@/components/TheIcon.vue'
import { ref } from 'vue'
import { useMoviesStore } from '@/store/movies.ts'

const moviesStore = useMoviesStore()
const title = ref('')

async function search(event: KeyboardEvent | MouseEvent) {
  if (event instanceof KeyboardEvent && event.isComposing) return
  if (!title.value.trim()) return
  try {
    await moviesStore.searchMovies({ title: title.value })
    title.value = ''
  } catch (e) {
    console.error('movie list search fail', e)
  }
}
</script>
