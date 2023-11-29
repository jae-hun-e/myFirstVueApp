<template>
  <router-link
    :to="`/detail/${movie.imdbID}`"
    class="w-4/5 sm:w-[calc(100%/2-0.5rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1.5rem)] xl:w-[calc(100%/5-2rem)] flex flex-col items-center">
    <img
      :src="movie.Poster !== 'N/A' ? movie.Poster : noImage"
      :alt="movie.Title"
      class="aspect-[3/4]" />
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { IMovie } from '@/type/movieType.ts'
import imgURL from '@/assets/none.jpg'
defineProps<{ movie: IMovie }>()
const noImage = imgURL
</script>
