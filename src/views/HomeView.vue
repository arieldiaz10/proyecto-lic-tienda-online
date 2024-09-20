<!--
    Vista de "Inicio": es la página principal, lo primero que se renderiza en el navegador
    al cargar el sitio web
-->
<template>
    <!--Componente que contiene el carrusel de imagenes-->
    <CarouselCard></CarouselCard>
</template>

<script>
import CarouselCard from '../components/CarouselCard.vue';

export default {
    name: 'HomeView.vue',
    components: {
        CarouselCard
    }
}
</script>