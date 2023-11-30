<template>
  <main class="flex flex-col justify-center items-center">
    <SearchBar :on-search="setInit" />
    <section
      class="mt-[70px] w-5/6 h-[calc(100vh-70px)] flex justify-center items-center">
      <h1
        v-if="isInit"
        class="text-3xl font-bold">
        영화를 검색해 주세요
      </h1>
      <MovieList v-if="!isInit" />
    </section>
  </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
import { ref } from 'vue'

const isInit = ref<boolean>(true)
function setInit() {
  isInit.value = false
}
</script>
