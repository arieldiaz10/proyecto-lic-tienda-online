<!--
  Vista de "Productos"
-->
<template>

  <div class="container mt-4">
    <div class="franja-bienvenida text-center">
      <h1>Explora nuestros productos</h1>
      <p>¡Aquí encontrarás todo lo que buscas al mejor precio posible!</p>
    </div>

    <div class="row">
      <!-- Recorrer la lista de productos y mostrar cada uno en una tarjeta -->
      <div class="col-12 col-sm-6 col-md-3 mb-4" v-for="producto in productos" :key="producto.id">
        <ProductCard
          :imagePath="producto.imagen_path" 
          :producto = "producto"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { useCarritoStore } from '@/stores/carrito';
import ProductCard from '../components/ProductCard.vue';


export default {
  name: 'ProductosView',
  components: {
    ProductCard,
  },
  data() {
    return {
      productos: [], //Arreglo que almacenará la información de los empleados proveniente de la base de datos,
    };
  },
  setup(){
    const carritoStore = useCarritoStore();
    return { carritoStore };
  },
  created: function() {
    //Función que carga los productos existentes
    this.consultarProductos();
  },
  methods: {
    //Método que consulta a la base de datos los productos existentes
    consultarProductos() {
      fetch('https://total-market.onrender.com/productos')
      .then(respuesta => respuesta.json())
      .then((productosRespuesta) => {
        console.log(productosRespuesta[productosRespuesta.length -1].imagen_path);
        
        //Si se han obtenido productos en la petición a la base de datos
        if(productosRespuesta.length > 0) {
          this.productos = productosRespuesta; //Agregar productos que se recibieron al arreglo productos
        }   
      })
      .catch(console.log)
    }
  }
};
</script>


<style scoped>
.franja-bienvenida {
  background-color: #455E9C;
  /*background: linear-gradient(135deg, #f0f8ff, #103356); /* Degradado diagonal */
  padding: 10px 0; /* Espaciado vertical */
  border-bottom: 2px solid #106cc8;
  border-radius: 15px; /* Redondea las esquinas */
  margin-bottom: 20px; /* Separación debajo de la franja */
}

.franja-bienvenida h1, .franja-bienvenida p {
  color: #ffffff; /* Color del texto */
  margin: 0;
}
.franja-bienvenida h1 {
  font-family: 'Hind Madurai';
  font-size: 2rem;
}

.franja-bienvenida p{
  font-family: 'Poppins';
  font-size: 1.3rem;
}

</style>
