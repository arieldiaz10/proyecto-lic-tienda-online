<template>
    <header class="d-flex justify-content-center py-2">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link"><LogoCard></LogoCard></a></li>
      </ul>
    </header>
</template>

<script>
import LogoCard from './LogoCard.vue';
export default {
    name:'HeaderCard',
    components: {
        LogoCard
    }
}
</script>

<style scoped>
header {
    background-color:#d5dbdb;
}
</style>