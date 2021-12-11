<template>
  <header class="main-header w-full fixed top-0 left-0 right-0 z-50" :class="{ 'text-white' : menuIsActive }">
    <div class="main-header-container z-50 relative h-24 max-width-16of24 mx-auto flex items-baseline md:mt-10 justify-between">
      <NuxtLink to="/" class="logo">
        Silvia Monti
      </NuxtLink>
      <button class="overline" :disabled="menuDisabled" @click="toggleMenu">
        {{ menuIsActive? '( Close )' : 'About' }}
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
.logo {
  font-style: italic;
  font-family: Cardo, Serif;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;

  &::before  {
    display:none;
  }
}
</style>
