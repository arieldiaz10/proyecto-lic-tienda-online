<!-- src/components/ProductCard.vue -->
<template>
  
  <div class="card mb-4 product-card" style="width: 18rem;">
    <div class="image-wrapper">
    <img :src="getImagePath(imagePath)" class="card-img-top" alt="Imagen del producto">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <p class="card-text">{{ producto.descripcion }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-success fw-bold">${{ producto.precio }}</span>
        <button class="btn btn-primary" @click="agregarAlCarrito">Agregar a <i class="fa-solid fa-cart-shopping"></i> </button>
      </div>
    </div>
  </div>
  
</template>

<script>
import { useCarritoStore } from '@/stores/carrito';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: 'ProductCard',
    props: {
    imagePath: { //Ruta a la imagen del producto
      type: String,
      required: true
    },
    producto: {
      type: Object, //Objeto que contiene toda la información de cada producto
      required: true 
    },
    color:{
      type:String,
      default: 'bg-light' //Color de fondo por defecto
    }
  },
  methods: {
    //Función que obtiene la ruta correcta de la imagen
    getImagePath(imagen_path) {
      try{
        return require(`@/assets/products/${imagen_path}`);
      } catch(e) {
        //Si se genera un error y no se encuentra la imagen, se muestra una por defecto
        return require(`@/assets/products/product1.jpg`);
      }
    }
  },
  data() {
    return {
      hover: false, // Variable para controlar el estado hover,
    };
  },
  setup(props) {
  // Notificación Toast
  const mostrarNotificacion = () => {
    toast.success('¡Producto agregado con éxito!', {
      position: 'bottom-center',
      autoClose: 1000,
    });
  };

  // Carrito de compras
  const carritoStore = useCarritoStore();
  const agregarAlCarrito = () => {
    carritoStore.agregarProductoCarrito(props.producto);
    mostrarNotificacion();
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
    overflow: hidden;
    border: 1px solid #106cc8df;
    border-radius: 20px;
    padding: 16px;
    text-align: center;
    transition: transform 0.3s ease; /* ease-in-outox-shadow 0.3s ease;*/
  }

  .image-wrapper {
  padding: 10px;             /* Espaciado interno para que la imagen no esté pegada al borde */
  border-radius: 5px;        /* Esquinas redondeadas */
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-img-top {
  height: 200px; /* Ajustar la altura de la imagen */
  object-fit: cover;
  transition: transform 0.3s ease; /* Transición suave para la imagen */
}

/* Al pasar el mouse sobre la tarjeta, la imagen se agranda */
.product-card:hover .card-img-top {
  transform: scale(1.2); /* Escala la imagen al 120% */
}
</style>