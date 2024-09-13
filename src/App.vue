<template>
  <header class="container-fluid">
    <nav class="row d-flex">
      <div class="logo col col-sm-4">
        <router-link to="/">
          <i class="fa-solid fa-shop"></i> MarketPlus
        </router-link>
      </div>
      <ul class="menu col col-sm-8">
        <li><router-link to="/productos">Productos</router-link></li>
        <li><router-link to="/">Categorias</router-link></li>
        <li><router-link to="/">Ofertas</router-link></li>
        <li><router-link to="/about"><i class="fa-solid fa-cart-shopping"></i> Carrito</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<style scoped>

header{
  padding: 1.2rem;
  background-color: #141B41;
}

.row{
  align-items: center;
}

.logo a{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
}

.menu{
  list-style: none;
  font-family: 'Cabin';
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  gap: 50px;
}

.menu a {
  color: #fff;
  text-decoration: none;
}

/* Diseño responsivo */
@media (min-width: 768px) and (max-width: 991px) {
    .logo a{
      font-size: 1.5rem;
    }

   .menu {
    font-size: 1.2rem;
   }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .col {
        padding: 3.5rem;
    }

    .hero-text h1 {
        font-size: 2.7rem;
    }

    .hero-texto p {
        font-size: 1.2rem;
    }

    button {
        padding: 1em;
    }
}
</style>
