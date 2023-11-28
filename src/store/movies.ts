import { defineStore } from 'pinia'
import axios from 'axios'
import { IMovieSearch } from '@/type/movie.ts'

export const useMoviesStore = defineStore('movies', {
  state: () => ({}),
  getters: {},
  actions: {
    async searchMovies({ s, y, page }: IMovieSearch) {
      const query = [`s=${s}`]
      y && query.push(`y=${y}`)
      page && query.push(`page=${page}`)
      const { data } = await axios.get(`/api/getMovieList?${query.join('&')}`)
      return data
    }
  }
})
