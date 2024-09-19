<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Página de Inicio <i class="fa-solid fa-house"></i></h1>
      <!-- Aquí usamos el componente Producto -->
      <ProductoCard title="Bienvenido" content="Esta es la página de inicio de la tienda online." />
      <ProductoCard title="Ofertas" content="¡Revisa nuestras últimas ofertas!" />
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
      <ProductoCard title="Contacto" content="¡Síguenos en nuestras redes sociales para no perderte de las últimas novedades"></ProductoCard>
    </div>
  </template>
  
  <script>
  import ProductoCard from '../components/ProductoCard.vue';  
  
  export default {
    name: 'ProductosView',
    components: {
      ProductoCard,  // Registramos el componente para usarlo
    },
  };
  </script>
  