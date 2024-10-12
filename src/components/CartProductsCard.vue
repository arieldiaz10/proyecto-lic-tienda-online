<template>
    <div class="card">
        <div class="card-header">
            Productos agregados al carrito
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{producto.nombre}}</td>
                        <td>1</td>
                        <td>$20</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartProductsCard',
    props: {
        producto: {
            type: Object,
            required: true
        }
    }
}
</script>