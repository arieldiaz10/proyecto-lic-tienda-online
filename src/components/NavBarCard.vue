<template>
    <div class="container-fluid">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Productos</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Categorías</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Nosotros</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
      </ul>
    </header>
  </div>
</template>

<script>

export default {
    name: 'NavBarCard'
};
</script>

<style scoped>
.container-fluid {
  background-color: #129e9e;
}
.nav-link {
  color: black;
}
</style>