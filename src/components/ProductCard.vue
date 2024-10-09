<!-- src/components/ProductCard.vue -->
<template>
  <div class="card mb-4" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="Imagen del producto">
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <p class="card-text">{{ producto.descripcion }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-success fw-bold">${{ producto.precio }}</span>
        <button class="btn btn-primary" @click="agregarAlCarrito"><i class="fa-solid fa-cart-shopping"></i> </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCarritoStore } from '@/stores/carrito';
export default {
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true
    },
    color:{
      type:String,
      default: 'bg-light' //Color de fondo por defecto
    },
    producto: {
      type: Object, //Objeto que contiene toda la información de cada producto
      required: true 
    }
  },
  data() {
    return {
      hover: false, // Variable para controlar el estado hover,
    };
  },
  setup(props){
    const carritoStore = useCarritoStore();
    const agregarAlCarrito = () => {
      console.log(props.producto);
      console.log(carritoStore.totalProductos);
      carritoStore.agregarProductoCarrito(props.producto);
    };

    return {
      agregarAlCarrito
    };
    
  },
  computed: {
    cardColor() {
      return this.hover ? 'bg-warning' : this.color; // Cambiar el color cuando el mouse está encima
    }
  }
};
</script>
  
  <style scoped>
  .product-card {
    border: 1px solid #106cc8df;
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    text-align: center;
  }
  .product-image {
    width: 90%;
    height: auto;
    border-radius: 4px;
  }

  .default-card {
  background-color: rgb(144, 177, 218); /* Fondo gris claro */
  transition: background-color 0.3s ease; /* Transición suave */
}

.hover-card {
  background-color: rgb(115, 147, 221); /* Fondo gris oscuro al pasar el mouse */
}

.card-img-top {
  height: 200px; /* Ajustar la altura de la imagen */
  object-fit: cover;
}
</style>