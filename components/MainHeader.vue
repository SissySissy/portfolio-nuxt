<template>
  <header class="main-header">
    <div class="main-header-container">
      <div class="wrapper">
        <div class="inner-header">
          <div class="logo">
            <NuxtLink to="/">
              <span class="overline">Silvia Monti</span>
            </NuxtLink>
          </div>
          <div class="menu">
            <button class="overline" :disabled="menuDisabled" @click="toggleMenu">
              {{ menuIsActive? 'Close' : 'About' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <hamburger :state="menuIsActive" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from '~/components/Hamburger.vue'
export default {
  components: { Hamburger },
  data: () => {
    return {
      menuIsActive: false,
      menuDisabled: false
    }
  },
  computed: mapState([
    'headerContent'
  ]),
  mounted () {
    console.log(this.headerContent)
  },
  methods: {
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
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
    position: fixed;
    height: 100px;
    z-index: 100;
    width: 100vw;
    .main-header-container {
        max-width: 1280px;
        margin: 0 auto;
    }
    .inner-header {
      position: relative;
      z-index: 10;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo a {
      }
      .menu {
        button {
          mix-blend-mode: difference;
        }
      }
    }
  }
</style>
