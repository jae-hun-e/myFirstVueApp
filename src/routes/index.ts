import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue'
import DetailPage from './DetailPage.vue'
import MovieListPage from '@/routes/MovieListPage.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/:title',
      component: MovieListPage,
      props: true
    },
    {
      path: '/detail/:id',
      component: DetailPage,
      props: true
    }
  ]
})
