<template>
    <nav class="nav justify-content-center">
      <a class="nav-link" href="#">{{title1}}</a>
      <a class="nav-link" href="#">{{title2}}</a>
      <a class="nav-link" href="#">{{title3}}</a>
    </nav>
</template>

<script>
export default {
    name: 'MenuNavegacion',
    props: {
      //Titulos
      title1:{
        type: String,
        required: true
      },
      title2:{
        type: String,
        required: true
      },
      title3:{
        type: String,
        required: true
      }
    },
  };
</script>