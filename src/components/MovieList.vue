<template>
  <div class="mt-[70px] w-5/6 flex flex-wrap justify-center gap-2">
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
</script>
