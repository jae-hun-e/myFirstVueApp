<template>
  <router-link
    :to="`/detail/${movie.imdbID}`"
    class="w-4/5 sm:w-[calc(100%/2-0.5rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1.5rem)] xl:w-[calc(100%/5-2rem)] flex flex-col items-center">
    <img
      :src="filterNullValue(movie.Poster, '/noneImg.jpg')"
      :alt="filterNullValue(movie.Title)"
      class="aspect-[3/4]" />
    <h2>{{ filterNullValue(movie.Title) }}</h2>
    <p>{{ filterNullValue(movie.Year) }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { IMovie } from '@/type/movieType.ts'
import { filterNullValue } from '@/utils/validatedValue.ts'
defineProps<{ movie: IMovie }>()
</script>
