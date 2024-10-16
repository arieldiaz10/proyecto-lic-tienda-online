<!--
  Vista de "Preguntas Frecuentes"
-->
<template>
    <div>
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