<!--
  Vista "Acerca de"
-->
<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <!-- Cuadro Acerca de -->
      <div class="col-lg-12 mb-4">
        <div class="card shadow-lg border-0 p-3 bg-primary text-white rounded">
          <div class="card-body text-center">
            <h1 class="mb-4">Acerca de <span>TotalMarket <i class="bi bi-bag-heart-fill"></i></span></h1>
            <p class="lead">
              Bienvenidos a <strong>TotalMarket</strong>, tu tienda en línea de confianza. 
              Aquí encontrarás una amplia variedad de productos de alta calidad, 
              con los mejores precios y entregas rápidas.
            </p>
            <p>
              Nuestro objetivo es brindarte una experiencia de compra fácil, 
              segura y satisfactoria. Gracias a nuestra plataforma innovadora y 
              el servicio al cliente de primera categoría, trabajamos para convertirnos 
              en tu primera opción cuando piensas en comprar en línea.
            </p>
            <p>
              Desde la electrónica hasta productos del hogar, en <strong>TotalMarket</strong> 
              estamos comprometidos a ofrecer lo mejor a nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <!-- Sección Misión y Visión -->
      <div class="col-lg-6 mb-4 d-flex align-items-stretch">
        <div class="card shadow-lg border-info p-3 rounded">
          <div class="card-body text-center">
            <h2 class="mb-3 text-info">Nuestra Misión <i class="fa-solid fa-hand-holding-heart"></i></h2>
            <p>
              En <strong>TotalMarket</strong>, nuestra misión es proporcionar a nuestros clientes
              productos de calidad superior a precios accesibles, garantizando siempre 
              una experiencia de compra sencilla, confiable y eficiente.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4 d-flex align-items-stretch">
        <div class="card shadow-lg border-success p-3 rounded">
          <div class="card-body text-center">
            <h2 class="mb-3 text-success">Nuestra Visión <i class="fa-solid fa-trophy"></i></h2>
            <p>
              Aspiramos a ser la tienda en línea líder en el mercado global, conocida por 
              su diversidad de productos y su compromiso con la satisfacción del cliente. 
              Queremos ser reconocidos por la calidad de nuestros productos y la innovación tecnológica.
            </p>
          </div>
        </div>
      </div>

      <!-- Botón para explorar productos -->
      <div class="col-lg-12 text-center mt-4">
        <router-link to="/productos" class="btn btn-lg btn-buscar-productos text-dark">Explora nuestros productos <i class="fa-solid fa-magnifying-glass"></i></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-family: 'Nunito';
}

h1 span {
  font-family: 'Montserrat';
  font-weight: 800;
  letter-spacing: 1.5px;
}

p {
  font-family: 'Poppins';
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
}

.lead {
  font-size: 1.3rem;
}

.card {
  border-radius: 20px;
}

.bg-primary {
  background-color: #007bff !important;
}

.text-info {
  color: #17a2b8 !important;
}

.text-success {
  color: #28a745 !important;
}

.btn-buscar-productos {
  background-color: #5983E0;
  padding: 0.75rem 2rem;
  border: none;
  font-weight: bold;
}

.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
<script>
export default {
  name: 'AboutView'
}
</script>