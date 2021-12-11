<template>
  <div class="wrapper" :style="{ 'background': pageBackgroundColor }">
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainFooter from '~/components/MainFooter.vue'
import MainHeader from '~/components/MainHeader.vue'
export default {
  components: { MainHeader, MainFooter },
  computed: {
    pageBackgroundColor () {
      return this.$store.state.pageBackgroundColor
    },
    pageNoScroll () {
      return this.$store.state.pageNoScroll
    }
  },
  watch: {
    pageNoScroll (value) {
      if (value) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    transition: all 0.3s;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.25s;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
</style>
