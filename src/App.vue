<template>
    <!--Menú de navegación principal (Componente que contiene el enrutamiento)-->
    <div class="contenido">
      <NavBarCard></NavBarCard>

      <main>
        <transition name="fade" mode="out-in">
          <router-view /> <!--Etiqueta para habilitar el enrutamiento-->
        </transition>
      </main>

      <FooterCard></FooterCard>
    </div>
</template>

<script>
import NavBarCard from './components/NavBarCard.vue';
import FooterCard from './components/FooterCard.vue';

export default {
  name: 'App',
  components: {
    NavBarCard,
    FooterCard
  }
}
</script>
<style scoped>

.fade-enter-to, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
  transition: all .3s ease;
}

template{
  background-color: #D8DFEC;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.container{
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Altura mínima de toda la pantalla */
}

main {
    flex: 1;
}

</style>