<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Productos en el carrito</h2>

    <div v-if="productosEnCarrito.length">
      <transition-group name="fade" tag="div" class="cart-items">
        <div v-for="item in productosEnCarrito" :key="item.id" class="card mb-3 shadow-sm animate__animated">
          <div class="row g-0">
            <div class="img-container col-12 col-md-4">
              <img :src="getImagePath(item.imagen_path)" class="img-fluid producto-imagen" alt="Imagen de producto">
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.nombre }}</h5>
                <p class="card-text">Cantidad: {{ item.cantidad }}</p>
                <p class="card-text"><small class="text-muted">Precio: ${{ item.precio }}</small></p>
                <button class="btn btn-danger btn-sm btn-eliminar" @click="eliminarProducto(item.id)">
                  <i class="bi bi-trash-fill"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="card mt-3 p-3">
        <h4>Total: {{ formatPrice(totalCosto) }}</h4>
        <button class="btn btn-success btn-lg btn-comprar">Realizar pago <i class="bi bi-currency-dollar"></i></button>
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
import { computed } from 'vue';
import { useCarritoStore } from '@/stores/carrito.js';

export default {
  setup() {
    const carritoStore = useCarritoStore();

    const productosEnCarrito = computed(() => carritoStore.productosEnCarrito);
    const totalCosto = computed(() => carritoStore.totalCosto);
    const eliminarProducto = carritoStore.eliminarProductoCarrito;

    return {
      productosEnCarrito,
      totalCosto,
      eliminarProducto
    };
  },
  methods: {
    formatPrice(value) {
      return `$${value.toFixed(2)}`;
    },
    getImagePath(imagen_path) {
      try {
        return require(`@/assets/products/${imagen_path}`);
      } catch (e) {
        return require(`@/assets/products/product1.jpg`);
      }
    },
    
  }
};
</script>

<style scoped>
/* Clases de animación para la transición */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease; /* Tiempo reducido para más fluidez */
}

.fade-enter {
  opacity: 0;
  transform: scale(1.05); /* Comienza un poco más grande */
}

.fade-leave-to { 
  opacity: 0;
  transform: scale(1.05); /* Termina un poco más grande */
}


/* Estilos de las tarjetas */
.card {
  border: none;
  border-radius: 10px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.producto-imagen {
  width: 200px;
  height: 200px;
  object-fit: cover; /* Asegura que la imagen se ajuste al contenedor sin deformarse */
  border-radius: 10px;
}

.btn-eliminar {
  width: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto; /* Centra el botón horizontalmente */
  display: block;
}

.btn-comprar {
  width: 100%; /* Cambia esto si deseas que el botón no ocupe todo el ancho */
  max-width: 300px; /* Limita el tamaño máximo del botón */
  margin: 0 auto; /* Centra el botón de pago */
}

/* Evitar que el botón se estire en pantallas pequeñas */
@media (max-width: 768px) {
  .btn-eliminar,
  .btn-comprar {
    width: 100%; 
    max-width: none;
  }
  .img-container {
    display: flex;
    justify-content: center;
  }
}
</style>
