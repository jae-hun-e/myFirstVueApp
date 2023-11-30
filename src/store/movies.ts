import { defineStore } from 'pinia'
import axios from 'axios'
import { IMovies, IMovieSearchResponseQuery } from '@/type/movieType.ts'
import { ERROR_MESSAGE } from '@/constants/errorMsg.ts'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: null as IMovies | null
  }),
  getters: {},
  actions: {
    async searchMovies({ title, y, page }: IMovieSearchResponseQuery) {
      const query = [`title=${title}`]
      y && query.push(`y=${y}`)
      page && query.push(`page=${page}`)

      try {
        const { data } = await axios.get(`/api/getMovieList?${query.join('&')}`)
        this.movies = data
      } catch (e) {
        console.error(ERROR_MESSAGE.GET_MOVIE_LIST)
      }
    }
  }
})
