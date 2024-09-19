<template>
  <!--Menú de navegación principal-->
  <NavBarCard></NavBarCard>
  <!--Etiqueta para el enrutador-->
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