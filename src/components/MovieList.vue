<template>
  <article v-if="!moviesStore.movies">
    <TheLoader />
  </article>

  <article
    v-if="moviesStore.movies"
    class="w-full flex flex-wrap justify-center gap-2">
    <h1
      v-if="moviesStore.movies.Response === 'False'"
      class="text-3xl font-bold">
      해당 키워드의 영화가 없습니다 :(
    </h1>
    <MovieItem
      v-else
      v-for="movie in moviesStore.movies.Search"
      :key="movie.imdbID"
      :movie="movie" />
  </article>
</template>
<script setup lang="ts">
import MovieItem from '@/components/MovieItem.vue'
import { useMoviesStore } from '@/store/movies.ts'
import TheLoader from '@/components/TheLoader.vue'
const moviesStore = useMoviesStore()
</script>
