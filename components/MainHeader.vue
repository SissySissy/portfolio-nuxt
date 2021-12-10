<template>
  <header class="main-header w-full fixed top-0 left-0 right-0 z-50 px-5">
    <div class="main-header-container z-50 relative h-24 max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <span class="overline">Silvia Monti</span>
      </NuxtLink>
      <button class="overline" :disabled="menuDisabled" @click="toggleMenu">
        {{ menuIsActive? 'Close' : 'About' }}
      </button>
    </div>
    <hamburger :state="menuIsActive" />
  </header>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
export default {
  components: { Hamburger },
  data: () => {
    return {
      menuIsActive: false,
      menuDisabled: false
    }
  },
  mounted () {},
  methods: {
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
      this.$store.commit('setPageNoScroll', this.menuIsActive)
      this.disableMenu()
    },
    disableMenu () {
      this.menuDisabled = !this.menuDisabled
      setTimeout(() => {
        this.menuDisabled = !this.menuDisabled
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped >
</style>
