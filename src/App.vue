<template>
  <!--Sección del header-->
  <HeaderCard></HeaderCard>
  <!--Sección nav de la parte-->
  <NavBarCard></NavBarCard>
  <!--Sección para el carrusel-->
  <CarouselCard></CarouselCard>
  <!--Etiqueta para el enrutador-->
  
  <router-view />
</template>

<script>
import NavBarCard from './components/NavBarCard.vue'
import HeaderCard from './components/HeaderCard.vue'
import CarouselCard from './components/CarouselCard.vue'

export default {
  name: 'App',
  components: {
    NavBarCard,
    HeaderCard,
    CarouselCard
  }
}
</script>