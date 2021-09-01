import { createRouter, createWebHistory } from 'vue-router' //import VueRouter from 'vue-router' 대체
import Menu from '../Menu'

const routerHistory = createWebHistory()

const routes = [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/RoomList',
      name: 'RoomList',
      component: () => import('../views/RoomList.vue')
    },
    {
      path: '/Transition',
      name: 'Transition',
      component: () => import('../views/Transition.vue')
    },
]

const router = createRouter({ //new VueRouter 대체
    history: routerHistory,
    routes
  })
  
export default router