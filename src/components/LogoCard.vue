<template>
    <div class="logo" :style="{color: fontColor}">
        <span>TotalMarket</span> <i class="bi bi-bag-heart-fill"></i>
    </div>
</template>

<script>
export default{
    name: 'LogoCard',
    props: {
      fontColor: {
        type: String,
        default: '#00000'
      }
    }
}

</script>

<style scoped>
.logo {
  font-size: 1.5rem;
}

.logo span {
  font-family: 'Montserrat';
  font-weight: 800;
  letter-spacing: 1.5px;
}
</style>