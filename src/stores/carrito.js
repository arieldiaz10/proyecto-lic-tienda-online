import { defineStore } from 'pinia';


export const useCarritoStore = defineStore('carrito', {
    state: () => ({
        productosEnCarrito: [] //Arreglo que almacena los productos que se agregan en el carrito
    }),
    getters: {
        totalProductos: (state)=> {
            return state.productosEnCarrito.reduce((total, item) => total + item.cantidad, 0);
        },
        totalCosto: (state) => {
            return state.productosEnCarrito.reduce((total, item) => total + (item.cantidad * item.precio), 0);
        }
    },
    actions: {
        agregarProductoCarrito(producto) {
            //Verificamos si ya existe el producto
            const productoExistente = this.productosEnCarrito.find(item => item.id === producto.id);
            if(productoExistente) {
                productoExistente.cantidad += 1; //Aumentar la cantidad si ya está en el carrito
            }
            else {
                this.productosEnCarrito.push({ ...producto, cantidad: 1}); //Agregar un  nuevo producto
            }
        },
        eliminarProductoCarrito(idProducto) {
            // Busca el índice del producto que se desea eliminar
            const index = this.productosEnCarrito.findIndex(item => item.id === idProducto);
            if (index !== -1) {
                this.productosEnCarrito.splice(index, 1); // Elimina el producto en el índice encontrado
            }
        },
        limpiarCarrito(){
            this.productosEnCarrito = [];
        }
    }
});