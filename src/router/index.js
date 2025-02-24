import ListaDeTareas from '@/components/ListaDeTareas.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lista-de-tareas',
      name: 'Lista de tareas',
      component: () => import ('@/components/ListaDeTareas.vue'),
    },
    {
      path: '/contador',
      name: 'Contador',
      
      component: () => import('../components/Contador.vue'),
    },
  ],
})

export default router
