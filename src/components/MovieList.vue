<template>
  <div class="mt-[50px] w-5/6 flex flex-wrap gap-2 justify-start">
    <MovieItem
      v-for="movie in moviesStore.movies.Search"
      :key="movie.imdbID"
      :movie="movie" />
  </div>
</template>
<script setup lang="ts">
import MovieItem from '@/components/MovieItem.vue'
import { useMoviesStore } from '@/store/movies.ts'
const moviesStore = useMoviesStore()
console.log(moviesStore.movies.Search)
</script>
