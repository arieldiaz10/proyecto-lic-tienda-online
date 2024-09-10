<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/productos">Productos</router-link>
  </nav>
  <router-view/>
</template>
<style scoped>
  nav {
    background-color: greenyellow;
  }
</style>

