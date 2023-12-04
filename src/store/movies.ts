import { defineStore } from 'pinia'
import axios from 'axios'
import { IMovies, IMovieSearchResponseQuery } from '@/type/movieType.ts'
import { ERROR_MESSAGE } from '@/constants/errorMsg.ts'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    isLoading: false,
    title: '',
    page: 0,
    movies: null as IMovies | null
  }),
  getters: {},
  actions: {
    async searchMovies({ title, y, page }: IMovieSearchResponseQuery) {
      this.isLoading = true
      this.title = title

      const query = [`title=${title}`]
      y && query.push(`y=${y}`)

      if (page) {
        query.push(`page=${page}`)
        this.page = page
      }

      try {
        const { data } = await axios.get(`/api/getMovieList?${query.join('&')}`)

        if (this.movies === null || this.movies.Response === 'False')
          this.movies = data
        else {
          this.movies = {
            ...this.movies,
            Search: [...this.movies.Search, ...data.Search]
          }
        }

        this.isLoading = false
      } catch (e) {
        console.error(ERROR_MESSAGE.GET_MOVIE_LIST)
      }
    }
  }
})
