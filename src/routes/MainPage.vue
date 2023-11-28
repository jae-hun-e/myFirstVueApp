<template>
  <main class="flex flex-col justify-center items-center">
    <SearchBar />
    <MovieList />
  </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
</script>
