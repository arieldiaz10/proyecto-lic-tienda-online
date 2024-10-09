<template>
  <!--Menú de navegación principal (Componente que contiene el enrutamiento)-->
  <NavBarCard></NavBarCard>
  
  <transition name="fade" mode="out-in">
    <router-view /> <!--Etiqueta para habilitar el enrutamiento-->
  </transition>

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

<style scoped>
.fade-enter-to, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
  transition: all .3s ease;
}
</style>