import { createRouter, createWebHistory } from 'vue-router'
import Lullabylist from '../views/Lullabylist.vue'
import Lullaby from '../views/Lullaby.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Lullaby',
    component: Lullaby
  },
  {
    path: '/About',
    name:'About',
    component:About
  },
  {
    path: '/Lullabylist',
    name:'Lullabylist',
    component:Lullabylist
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */'../views/Lullabylist.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
