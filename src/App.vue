<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <i class="fa-solid fa-shop"></i> Mall Lic
        </router-link>
      </div>
      <ul class="menu">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/">Productos</router-link></li>
        <li><router-link to="/">Categorias</router-link></li>
        <li><router-link to="/">Ofertars</router-link></li>
        <li><router-link to="/">Contacto</router-link></li>
        <li><router-link to="/about">Acerda De</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<style scoped>

header{
  padding: 1.5rem;
  background-color: #141B41;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 1.2rem;
  display: flex;
  gap: 40px;
}

.menu a {
  color: #fff;
  text-decoration: none;
}
</style>
