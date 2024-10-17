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
        <img src="../assets/slide1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item slide2" data-bs-intervall="5000">
        <img src="../assets/slide2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item slide3" data-bs-intervall="5000">
        <img src="../assets/slide3.jpg" class="d-block w-100" alt="...">
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
.carousel-inner {
  width: 90%;
  margin: 0 auto;
}


/*Diseño responsive para las imagenes del carrusel*/
@media (max-width: 767px) { 
  .carousel-inner {
  width: 100%;
}
.carousel-item img{
  width: 100%;
  height: auto;
  object-fit: contain; /* Ajusta a las dimensiones del contenedor sin deformarse */
}
}
</style>