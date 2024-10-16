<!--
  IMPORTANTE:
  Este componente define la navegación (entre Vistas) dentro de la página web
-->
<template>
  <!--Contenedor principal del menú de navegación principal-->
  <nav class="navbar navbar-expand-lg m-0 p-0">
    <div class="container-fluid p-2">
      <!--Logo-->
      <router-link class="navbar-brand" to="/">
        <LogoCard fontColor="white"></LogoCard>
      </router-link>

      <!--Botón para desplegar menú en pantallas pequeñas-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
        aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <!--Contenedor de los botones (opciones) del menú de navegación-->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!--Link a la vista (página) "Productos"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <!--Link a la vista (página) "Acerca de"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Acerca de</router-link>
          </li>
          <!--Link a la vista (página) "Preguntas Frecuentas"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/preguntasfrecuentes">FAQs</router-link>
          </li>
          <!--Link a la vista (página) "Carrito de compras"-->
          <li class="carrito nav-item">
            <router-link class="nav-link" to="/carrito">
              <i class="bi bi-cart"></i> <span> {{ totalProductos }}</span>
            </router-link>
          </li>
        </ul>

        <!--Formulario de Búsqueda-->
        <div class="nav-item d-none d-sm-block">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Busca un producto" aria-label="Search">
            <button class="btn btn-primary" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </div>

    </div> <!--Fin del div-container-fluid-->
  </nav>
</template>

<script>
import { useCarritoStore } from '@/stores/carrito';
import LogoCard from './LogoCard.vue';
import { computed } from 'vue';

export default {
  name: 'NavBarCard',
  components: {
    LogoCard
  },
  setup(){
    const carritoStore = useCarritoStore();

    const totalProductos = computed(() => carritoStore.totalProductos);

    return { 
      totalProductos
     };
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: #23345E;
}

.nav-link {
  color: #f5f5f5;
  font-weight: 400;
  font-size: 1.1rem;

}

.carrito {
  background-color:#eaecee;
  border-radius: 10px;
}

.carrito i, span {
  color: #23345E;
  font-weight: bold;
}

@media (max-width: 1023px){
  .carrito{
    width: 50px;
    text-align: center;
  }
}
</style>