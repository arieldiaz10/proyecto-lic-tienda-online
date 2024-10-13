<!--
    Vista de "Inicio": es la página principal, lo primero que se renderiza en el navegador
    al cargar el sitio web
-->
<template>
    <!--Componente que contiene el carrusel de imagenes-->
    <CarouselCard></CarouselCard>

    <!--Componente que contiene el carrusel de testimonios-->
    <TestimoniosCard></TestimoniosCard>
</template>

<script>
import CarouselCard from '../components/CarouselCard.vue';
import TestimoniosCard from '../components/TestimoniosCard.vue';

export default {
    name: 'HomeView.vue',
    components: {
        CarouselCard, 
        TestimoniosCard
    }
}
</script>

