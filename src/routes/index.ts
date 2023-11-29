import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue'
import DetailPage from './DetailPage.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/detail/:id',
      component: DetailPage,
      props: true
    }
  ]
})
