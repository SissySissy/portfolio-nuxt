<template>
  <footer class="w-full md:pb-10">
    <div class="max-width-16of24 mx-auto">
      <p class="overline">
        © {{ copyright() }} Silvia Monti, All Rights Reserved.
      </p>
    </div>
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
