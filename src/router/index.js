import { createRouter, createWebHistory } from 'vue-router'


/*Se definen las rutas de las vistas para la navegación del sitio web*/
const routes = [
  {
    path: '/', //Ruta por defecto: la página principal que se muestra en el navegador al cargar el sitio web
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('../views/CategoriasView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/preguntasfrecuentes',
    name: 'preguntasfrecuentes',
    component: () => import('../views/FAQsView.vue')
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import('../views/CarritoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
