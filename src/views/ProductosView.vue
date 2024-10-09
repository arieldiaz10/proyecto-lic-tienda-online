<!--
  Vista de "Productos"
-->
<template>
  <div class="container mt-4">
    <h1 class="mb-4">Productos disponibles</h1>
    <div class="row">
      <!-- Recorrer la lista de productos y mostrar cada uno en una tarjeta -->
      <div class="col-md-4" v-for="producto in productos" :key="producto.id">
        <ProductCard
          :image="require('../assets/products/product1.jpg')" 
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
        console.log(productosRespuesta);
        
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

