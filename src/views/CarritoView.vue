<!--
  Vista de "Carrito de compras"
-->
<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Productos en el carrito</h2>

    <div v-if="productosEnCarrito.length">
    <div  v-for="item in productosEnCarrito" :key="item.id" class="card mb-3 shadow-sm">
      <div class="row g-0">
        <div class="col-md-4">
          <p>Imagen</p>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-tittle">{{ item.nombre }}</h5>
            <p class="card-text">Cantidad: {{ item.cantidad }}</p>
            <p class="card-text"><small class="text-muted">Precio: ${{ item.precio }}</small></p>
            <button class="btn btn-danger btn-sm"><i class="bi bi-trash-fill"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3 p-3">
      <h4>Total: {{ formatPrice(totalCosto) }}</h4>
      <button class="btn btn-success btn-lg w-100">Realizar pago <i class="bi bi-currency-dollar"></i></button>
    </div>
  </div>
  <div v-else>
    <div class="alert alert-warning d-flex align-items-center" role="alert">
      Aún no has agregado ningún producto al carrito 
    </div>
  </div>
  </div>
</template>

<script>
import { useCarritoStore } from '@/stores/carrito.js';

export default {
  setup() {
    const carritoStore = useCarritoStore();

    return {
      productosEnCarrito: carritoStore.productosEnCarrito, // Los productos en el carrito
      totalCosto: carritoStore.totalCosto, // Precio total
    };
  },
  methods: {
    // Método para formatear el precio con un símbolo de moneda
    formatPrice(value) {
      return `$${value.toFixed(2)}`;
    }
}
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
}

.btn-sucess {
  background-color: #28a745;
}

@media (max-width: 768px){
  .card-body {
    text-align: center;
  }

  .card img {
    max-width: 100%;
  }
}
</style>