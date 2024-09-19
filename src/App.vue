<template>
  <!--Sección del header-->
  <HeaderCard></HeaderCard>
  <!--Sección nav de la parte-->
  <NavBarCard></NavBarCard>
  <!--Etiqueta para el enrutador-->
  <router-view />
</template>

<script>
import NavBarCard from './components/NavBarCard.vue'
import HeaderCard from './components/HeaderCard.vue'
export default {
  name: 'App',
  components: {
    NavBarCard,
    HeaderCard
  }
}
</script>