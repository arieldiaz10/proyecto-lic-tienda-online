<template>
  <div class="container mt-5">
    <div v-if="productosEnCarrito.length">
      <h2 class="text-center mb-4">Productos en el carrito</h2>
      <transition-group name="fade" tag="div" class="cart-items">
        <div v-for="item in productosEnCarrito" :key="item.id" class="card mb-3 shadow-sm">
          <div class="row g-0 producto-contenedor">
            <div class="img-container col-12 col-md-4">
              <img :src="getImagePath(item.imagen_path)" class="img-fluid producto-imagen" alt="Imagen de producto">
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.nombre }}</h5>
                <p class="card-text"><span>Cantidad:</span> {{ item.cantidad }}</p>
                <p class="card-text"><span>Precio:</span> ${{ item.precio }}</p>
                <button class="btn btn-danger btn-md btn-eliminar" @click="eliminarProducto(item.id)">
                  <i class="fa-solid fa-trash"></i> Eliminar
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
      <div class="alert alert-warning d-flex align-items-center justify-content-center" role="alert">
        <p>
          Aún no has agregado ningún producto en el carrito
          <i class="fa-solid fa-face-frown"></i><i class="fa-solid fa-heart-crack"></i>
        </p>
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
    }
  }
};
</script>

<style scoped>
/* Clases de animación para la transición */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter {
  opacity: 0;
  transform: scale(1.05);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/*Titulo de la página*/
h2 {
  font-family: 'Hind Madurai';
  font-size: 2.5rem;
  font-weight: 600;
}

/* Estilos de las tarjetas */
.producto-contenedor {
  border: 3px solid #f5f5f5;
  border-radius: 10px;
}

.card {
  border: none;
  border-radius: 10px;
}

.card-title {
  font-size: 1.6rem;
  font-family: 'Hind Madurai';
  font-weight: 600;
  color: #242424;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-text {
  font-family: 'Nunito';
  color: #494949;
  font-size: 1.1rem;
  font-weight: bold;
}

.card-text span {
  color: #106cc8df;
}


.producto-imagen {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.card h4 {
  color: #353535;
  font-family: 'Nunito';
  font-weight: 700;
}

.btn-eliminar {
  width: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.btn-comprar {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

/*Efectos hover para los botones*/
.btn-success {
  font-family: 'Nunito';
  font-weight: 700;
  background-color: #198754;
  font-size: 1.1rem;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, font-size 0.3s ease, transform 0.3s ease;
}

.btn-success:hover {
  background-color: #157347;
  font-size: 1.2rem;
  transform: scale(1.05);
}

.btn-danger {
  font-family: 'Nunito';
  font-weight: 700;
  background-color: #dc3545;
  font-size: 1.1rem;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, font-size 0.3s ease, transform 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
  font-size: 1.2rem;
  transform: scale(1.05);
}

/* Alerta cuando no se ha agregado ningún elemento al carrito*/
.alert {
  font-family: 'Poppins';
  font-size: 2rem;
  text-align: center;
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

  .alert {
    font-size: 2rem;
  }
}
</style>
