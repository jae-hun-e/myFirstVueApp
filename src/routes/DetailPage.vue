<template>
  <section v-if="!isLoading">
    <p>로딩중...</p>
  </section>
  <section
    v-if="isLoading"
    class="flex flex-col-reverse justify-center p-20 md:flex-row gap-4">
    <article class="flex flex-col gap-4 w-full md:w-2/3">
      <h1 class="text-3xl md:text-5xl font-bold">{{ movieInfo.Title }}</h1>
      <div class="flex flex-wrap gap-3">
        <p>감독 :</p>
        <div class="flex flex-wrap gap-2">
          <p
            v-for="(director, idx) of peopleList(movieInfo.Director)"
            :key="idx"
            class="bg-lime-500 rounded-xl px-1 text-white">
            {{ director }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <p>배우 :</p>
        <div class="flex flex-wrap gap-2">
          <p
            v-for="(actor, idx) of peopleList(movieInfo.Actors)"
            :key="idx"
            class="bg-amber-400 rounded-xl px-1 text-white">
            {{ actor }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <p>작가 :</p>
        <div class="flex flex-wrap gap-2">
          <p
            v-for="(writer, idx) of peopleList(movieInfo.Writer)"
            :key="idx"
            class="bg-fuchsia-400 rounded-xl px-1 text-white">
            {{ writer }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-wrap justify-center gap-3 cursor-pointer bg-blue-400 rounded-xl p-2"
        @click="openPlot">
        <p class="text-2xl">줄거리</p>
        <p class="text-black text-xl line-clamp-2">
          {{ movieInfo.Plot }}
        </p>
      </div>
    </article>

    <img
      :src="
        movieInfo.Poster !== 'N/A'
          ? highResolutionImage(movieInfo.Poster)
          : noImage
      "
      class="w-full md:w-1/3" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { IMovieDetail } from '@/type/movieType.ts'
import imgURL from '@/assets/none.jpg'

const { id } = defineProps(['id'])
const movieInfo = ref<IMovieDetail>(null)
const isLoading = ref<boolean>(false)
const noImage = imgURL

async function dataFetch() {
  const { data }: { data: IMovieDetail } = await axios.get(
    `/api/getMovieDetail?id=${id}`
  )
  movieInfo.value = data
  isLoading.value = true
}
dataFetch()

function highResolutionImage(url: string) {
  return url.replace('SX300', 'SX700')
}

function peopleList(peoples: string) {
  return peoples.split(', ')
}

function openPlot(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement

  const plot = target.lastElementChild
  console.log(plot)
  plot.classList.toggle('line-clamp-2')
}
</script>
