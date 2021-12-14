<template>
  <header class="main-header w-full fixed top-0 left-0 right-0 z-50" :class="{ 'text-white' : menuIsActive, 'hidden': !showNavbar }">
    <div class="main-header-container z-50 relative max-width-16of24 mx-auto flex items-baseline md:my-10 justify-between">
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
      menuDisabled: false,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
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
  .main-header {
    transition: transform 200ms ease-in-out;
    &.hidden {
    transform: translateY(-100px);
  }
  }
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
