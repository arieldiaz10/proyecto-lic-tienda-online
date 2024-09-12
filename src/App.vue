<template>
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/">Productos</router-link>
  </nav>
  <router-view/>
</template>
<style scoped>
  nav {
    background-color: greenyellow;
  }
</style>

