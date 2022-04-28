import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Countries.vue'

const routes = [
  {
    path: '/',
    name: 'Countries',
    component: Countries
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
