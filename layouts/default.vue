<template>
  <div :style="{ 'background-color': pageBackgroundColor }">
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainFooter from '~/components/MainFooter.vue'
import MainHeader from '~/components/MainHeader.vue'
export default {
  components: { MainHeader, MainFooter },
  computed: mapState([
    'pageBackgroundColor'
  ])
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
