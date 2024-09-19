<template>
  <nav class="navbar navbar-expand-lg m-0 p-0">
    <div class="container-fluid p-2">
      <!--Logo-->
      <router-link class="navbar-brand" to="/">
        <LogoCard></LogoCard>
      </router-link>

      <!--Botón para desplegar menú en pantallas pequeñas-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" data-bs-intervall="5000"
        aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!--Contenedor de los botones (opciones) del menú de navegación-->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!--Link a la vista (página) "Productos"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <!--Link a la vista (página) "Categorías"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/">Categorías</router-link>
          </li>
          <!--Link a la vista (página) "Acerca de"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Acerca de</router-link>
          </li>
          <!--Link a la vista (página) "Preguntas Frecuentas"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/">FAQs</router-link>
          </li>
          <!--Link a la vista (página) "Carrito de compras"-->
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="bi bi-cart"></i> <!--Ícono del carrito de compras-->
            </router-link>
          </li>
        </ul>

        <!--Formulario de Búsqueda-->
        <div class="nav-item d-none d-sm-block">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Busca un producto" aria-label="Search">
            <button class="btn btn-success" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </div>

    </div> <!--Fin del div-container-fluid-->
  </nav>




  <!--Fin del navbar de Bootstrap-->

</template>

<script>
import LogoCard from './LogoCard.vue';
export default {
  name: 'NavBarCard',
  components: {
    LogoCard
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: #f5f5f5;
}

.nav-link {
  color: black;
}

</style>