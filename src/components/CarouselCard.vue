<template>
  <!--Elemento contenedor de todos los elementos del carrusel: indicadores, imagenes y botones-->
  <div id="carruselPortada" class="carousel slide" data-bs-ride="carousel">
    <!--Lineas horizontales que sirven al pie de la imagen del carrusel-->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carruselPortada" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carruselPortada" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carruselPortada" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <!--Elemento contenedor de las imágenes"-->
    <div class="carousel-inner">
      <div class="carousel-item active slide1" data-bs-intervall="5000">
        <img src="../assets/persona_comprando.svg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item slide2" data-bs-intervall="5000">
        <img src="../assets/agregando_a_carrito.svg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item slide3" data-bs-intervall="5000">
        <img src="../assets/app_compras_online.svg" class="d-block w-100" alt="...">
      </div>
    </div>
    <!--Botones "Adelante y atrás"-->
    <button class="carousel-control-prev" type="button" data-bs-target="#carruselPortada" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carruselPortada" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>
export default {
    name:'CarouselCard',
}
</script>

<style scoped>
/*Estilos para el elemento contenedor del carrusel*/
.slide1{
  background-color: #a3e4d7;
}

.slide2 {
 background-color: #dcffff;
}

.slide3 {
  background-color: #d8dfec;
}

.carousel-item img{
  padding: 2rem;
  height: 70vh;
}

.carousel-slide {
    text-align: center;
}

/*Diseño responsive para las imagenes*/
@media (max-width: 767px) { 
  .carousel-item img {
    height: 35vh;
  }
}
</style>