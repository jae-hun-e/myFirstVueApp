<template>
  <section class="flex flex-col relative">
    <div
      v-if="isLoading"
      class="flex justify-center items-center fixed top-1/2 left-1/2">
      <TheLoader />
    </div>
    <article v-if="data">
      <p
        v-if="data.Response === 'False'"
        class="text-3xl font-bold">
        해당 키워드의 영화가 없습니다 :(
      </p>
      <div
        v-else
        class="flex flex-col">
        <div class="w-full flex flex-wrap justify-center gap-2">
          <MovieItem
            v-for="movie in data.Search"
            :key="movie.imdbID"
            :movie="movie" />
        </div>
        <Observer @show="onScroll" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import MovieItem from '@/components/MovieItem.vue'
import TheLoader from '@/components/YellowSpinnerLoader.vue'
import Observer from '@/components/Observer.vue'
import { IMovies } from '@/type/movieType.ts'

const { data, isLoading, onScroll } = defineProps<{
  data: IMovies | null
  isLoading: boolean
  onScroll: () => void
}>()
</script>
