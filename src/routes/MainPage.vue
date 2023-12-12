<template>
  <main class="flex flex-col justify-center items-center">
    <div
      v-if="moviesStore.isLoading"
      class="flex justify-center items-center fixed top-1/2 left-1/2">
      <TheLoader />
    </div>
    <SearchBar />
    <section
      class="mt-[70px] w-5/6 min-h-[calc(100vh-70px)] flex justify-center items-center">
      <p class="text-3xl font-bold">영화를 검색해 주세요</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import TheLoader from '@/components/YellowSpinnerLoader.vue'
import { useMoviesStore } from '@/store/movies.ts'

const moviesStore = useMoviesStore()
</script>
