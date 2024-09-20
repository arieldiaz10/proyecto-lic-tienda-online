<template>
  <!--Menú de navegación principal (Componente que contiene el enrutamiento)-->
  <NavBarCard></NavBarCard>
  <!--Etiqueta para habilitar el enrumiento-->
  <router-view />
</template>

<script>
import NavBarCard from './components/NavBarCard.vue'

export default {
  name: 'App',
  components: {
    NavBarCard
  }
}
</script>