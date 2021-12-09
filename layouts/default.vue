<template>
  <div>
    <main-header />
    <nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
export default {
  components: { MainHeader }

}
</script>

<style lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.25s, transform 0.25s;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
