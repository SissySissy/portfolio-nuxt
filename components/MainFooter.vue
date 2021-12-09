<template>
  <footer class="flex w-full justify-between padded">
    <p class="overline">
      © {{ copyright() }} Silvia Monti, All Rights Reserved.
    </p>
  </footer>
</template>

<script>
export default {
  methods: {
    copyright () {
      const year = new Date().getFullYear()
      return year
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
