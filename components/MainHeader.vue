<template>
  <header class="main-header">
    <div class="container">
      <div class="wrapper">
        <div class="inner-header">
          <div class="logo">
            <NuxtLink to="/">
              <span class="overline z-10 text-2xl font-sans">Silvia Monti</span>
            </NuxtLink>
          </div>
          <div class="menu">
            <button class="overline z-10 text-2xl font-sans" @click="toggleMenu">
              {{ menuIsActive? 'Close' : 'About' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      menuIsActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
