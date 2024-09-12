import { createRouter, createWebHistory } from 'vue-router'
//Importando vistas
import Productos from '../views/ProductosView.vue'

/*Se definen las rutas de las vistas para la navegación del sitio web*/
const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'productos',
    component: Productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
