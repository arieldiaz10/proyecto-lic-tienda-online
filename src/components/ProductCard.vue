<!-- src/components/ProductCard.vue -->
<template>
  <div class="card mb-4" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="Imagen del producto">
    <div class="card-body">
      <h5 class="card-title">{{ nombre }}</h5>
      <p class="card-text">{{ descripcion }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-success fw-bold">${{ precio }}</span>
        <button class="btn btn-primary">Agregar a carrito </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    precio:{
      type:String,
      Required: true
    },
    color:{
      type:String,
      default: 'bg-light' //Color de fondo por defecto
    }

  },

  data() {
    return {
      hover: false // Variable para controlar el estado hover
    };
  },
  computed: {
    cardColor() {
      return this.hover ? 'bg-warning' : this.color; // Cambiar el color cuando el mouse está encima
    }
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