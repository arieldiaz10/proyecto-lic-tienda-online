<!--
  Vista de "Productos"
-->

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Productos disponibles</h1>
    <div class="row">
      <!-- Recorrer la lista de productos y mostrar cada uno en una tarjeta -->
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <ProductCard
          :image="product.image"
          :name="product.name"
          :description="product.description"
          :price="product.price"
        />

      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'ProductosView',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: require('../assets/products/product1.jpg'),
          name: 'Suero Facial',
          description: 'Serum que ayuda a la disminucion de expresiones en la piel',
          price: 19.99
        },
       
      ]
    };
  }
};
</script>

<style scoped>
/* Estilo adicional para el contenedor de productos */
</style>
