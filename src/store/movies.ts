import { defineStore } from 'pinia'
import axios from 'axios'
import {
  IMovieDetail,
  IMovies,
  IMovieSearchResponseQuery
} from '@/type/movieType.ts'

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

// todo 전역으로 바꿀 시 캐싱처리랑 같이 하자
// export const useMovieDetailStore = defineStore('movieDetail', {
//   state: () => ({
//     movieDetail: {} as IMovieDetail
//   }),
//   getters: {},
//   actions: {
//     async searchMovieDetail(id: string) {
//       const { data } = await axios.get(`/api/getMovieDetail?id=${id}`)
//       this.movieDetail = data
//     }
//   }
// })
