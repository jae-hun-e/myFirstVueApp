<template>
  <section class="flex flex-col relative">
    <article
      v-if="moviesStore.isLoading"
      class="flex justify-center items-center fixed top-1/2 left-1/2">
      <TheLoader />
    </article>
    <article v-if="moviesStore.movies">
      <h1
        v-if="moviesStore.movies.Response === 'False'"
        class="text-3xl font-bold">
        해당 키워드의 영화가 없습니다 :(
      </h1>
      <div
        v-else
        class="flex flex-col">
        <div class="w-full flex flex-wrap justify-center gap-2">
          <MovieItem
            v-for="movie in moviesStore.movies.Search"
            :key="movie.imdbID"
            :movie="movie" />
        </div>
        <Observer @show="handleShowMore" />
      </div>
    </article>
  </section>
</template>
<script setup lang="ts">
import MovieItem from '@/components/MovieItem.vue'
import { useMoviesStore } from '@/store/movies.ts'
import TheLoader from '@/components/TheLoader.vue'
import Observer from '@/components/Observer.vue'

const moviesStore = useMoviesStore()

const handleShowMore = () => {
  const { title, page } = moviesStore
  moviesStore.searchMovies({ title, page: page + 1 })
}
</script>
