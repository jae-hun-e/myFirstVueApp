import { defineStore } from 'pinia'
import axios from 'axios'
import { IMovies, IMovieSearchResponseQuery } from '@/type/movieType.ts'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: {} as IMovies
  }),
  getters: {},
  actions: {
    async searchMovies({ title, y, page }: IMovieSearchResponseQuery) {
      const query = [`title=${title}`]
      y && query.push(`y=${y}`)
      page && query.push(`page=${page}`)

      const { data } = await axios.get(`/api/getMovieList?${query.join('&')}`)
      this.movies = data
    }
  }
})
