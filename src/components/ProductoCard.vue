<template>
    <div class="card">
      <h2>{{ title }} </h2>
      <p>{{ content }}</p>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductoCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  }
  </style>