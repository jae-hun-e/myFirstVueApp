<template>
  <main class="flex flex-col justify-center items-center">
    <SearchBar />
    <section
      class="mt-[70px] w-5/6 min-h-[calc(100vh-70px)] flex justify-center items-center">
      <MovieList
        :data="moviesStore.movies"
        :is-loading="moviesStore.isLoading"
        :on-scroll="handleShowMore" />
    </section>
  </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
import { useMoviesStore } from '@/store/movies.ts'
import { onMounted } from 'vue'

const { title } = defineProps(['title'])
const moviesStore = useMoviesStore()

async function getMovieList() {
  await moviesStore.searchMovies({ title, page: 1 })
}
const handleShowMore = () => {
  const { title, page } = moviesStore
  moviesStore.searchMovies({ title, page: page + 1 })
}

onMounted(() => {
  getMovieList()
})
</script>
