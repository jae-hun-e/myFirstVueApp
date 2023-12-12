<template>
  <main class="flex flex-col justify-center items-center">
    <SearchBar />
    <section
      class="mt-[70px] w-5/6 min-h-[calc(100vh-70px)] flex justify-center items-center">
      <MovieList />
    </section>
  </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
</script>
