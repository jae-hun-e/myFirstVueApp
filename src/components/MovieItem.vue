<template>
  <div class="w-[200px] h-[350px]">
    <img
      :src="movie.Poster !== 'N/A' ? movie.Poster : noImage"
      :alt="movie.Title"
      class="w-[200px] h-[250px]" />
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
  </div>
</template>

<script setup lang="ts">
import { IMovie } from '@/type/movieType.ts'
import imgURL from '@/assets/none.jpg'
defineProps<{ movie: IMovie }>()
const noImage = imgURL
</script>
