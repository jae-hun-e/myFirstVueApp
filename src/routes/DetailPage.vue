<template>
  <section
    v-if="!isLoading"
    class="w-full h-[100vh] flex justify-center items-center">
    <TheLoader />
  </section>
  <section
    v-if="isLoading && movieInfo"
    class="flex flex-col-reverse justify-center p-20 md:flex-row gap-4">
    <article class="flex flex-col gap-4 w-full md:w-2/3">
      <h1 class="text-3xl md:text-5xl font-bold">
        {{ filterNullValue(movieInfo.Title) }}
      </h1>
      <div class="flex flex-wrap gap-3">
        <p>감독 :</p>
        <div class="flex flex-wrap gap-2">
          <p
            v-for="(director, idx) of splitPeopleList(
              filterNullValue(movieInfo.Director)
            )"
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
            v-for="(actor, idx) of splitPeopleList(
              filterNullValue(movieInfo.Actors)
            )"
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
            v-for="(writer, idx) of splitPeopleList(
              filterNullValue(movieInfo.Writer)
            )"
            :key="idx"
            class="bg-fuchsia-400 rounded-xl px-1 text-white">
            {{ writer }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-wrap justify-center gap-3 cursor-pointer bg-blue-400 rounded-xl p-2"
        @click="togglePlot">
        <p class="text-2xl w-full text-center">줄거리</p>
        <p class="text-black text-xl line-clamp-2">
          {{ filterNullValue(movieInfo.Plot) }}
        </p>
      </div>
    </article>

    <img
      :src="
        movieInfo.Poster !== 'N/A'
          ? highResolutionImage(movieInfo.Poster)
          : '/noneImg.jpg'
      "
      class="md:w-1/3 aspect-3/4" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { IMovieDetail } from '@/type/movieType.ts'
import TheLoader from '@/components/TheLoader.vue'
import { filterNullValue } from '@/utils/validatedValue.ts'
import { splitPeopleList } from '@/utils/handleString.ts'
import { ERROR_MESSAGE } from '@/constants/errorMsg.ts'

const { id } = defineProps(['id'])
const movieInfo = ref<IMovieDetail | null>(null)
const isLoading = ref<boolean>(false)

async function dataFetch() {
  try {
    const { data }: { data: IMovieDetail } = await axios.get(
      `/api/getMovieDetail?id=${id}`
    )
    movieInfo.value = data
    isLoading.value = true
  } catch (e) {
    console.error(ERROR_MESSAGE.GET_MOVIE_DETAIL)
  }
}
dataFetch()

function highResolutionImage(url: string) {
  return url.replace('SX300', 'SX700')
}

function togglePlot(e: MouseEvent) {
  const target = e.currentTarget

  if (!(target instanceof HTMLElement)) return
  const plot = target.lastElementChild

  if (!(plot instanceof HTMLElement)) return
  plot.classList.toggle('line-clamp-2')
}
</script>
