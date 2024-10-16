<!--
  Vista de "Preguntas Frecuentes"
-->
<template>
    <div>
      <h1>Página de "Preguntas Frecuentes"</h1>
      <FAQsCard></FAQsCard>
    </div>
  </template>
  
  <script>
  import FAQsCard from "@/components/FAQsCard.vue"
  export default {
    name: 'FAQsView',
    components: {
      FAQsCard
    }
  };
  </script>