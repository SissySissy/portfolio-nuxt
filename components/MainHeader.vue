<template>
  <header
    class="main-header w-full fixed top-0 left-0 right-0 z-50"
    :class="{ 'text-white' : menuIsActive, 'menu-hidden': !showNavbar }"
    :style="lastScrollPosition > 30 && showNavbar? {'background': color} : {'background': 'transparent'}"
    role="navigation"
  >
    <div class="main-header-container z-50 relative max-width-16of24 mx-auto flex items-baseline md:my-10 justify-between">
      <NuxtLink to="/" class="logo">
        <span @click="closeMenu"> Silvia Monti </span>
      </NuxtLink>
      <button class="overline" :disabled="menuDisabled" :aria-expanded="menuIsActive" @click="toggleMenu">
        {{ menuIsActive? '( Close )' : 'About' }}
      </button>
    </div>
    <hamburger :state="menuIsActive" :aria-hidden="!menuIsActive" />
  </header>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
export default {
  components: { Hamburger },
  props: {
    color: {
      type: String,
      default: () => ''
    }
  },
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
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
      this.$store.commit('setPageNoScroll', this.menuIsActive)
      this.$store.commit('toggleMenuIsExpanded')
      this.disableMenu()
    },
    closeMenu () {
      if (this.menuIsActive) {
        this.menuIsActive = !this.menuIsActive
        this.$store.commit('setPageNoScroll', this.menuIsActive)
        this.disableMenu()
        this.$store.commit('toggleMenuIsExpanded')
      }
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
    color: currentColor;
    transition: transform 200ms ease-in-out;
    &.menu-hidden {
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
