<template>
  <div class="two-images">
    <div v-for="(image, index) in images" :key="index" class="image-wrap">
      <img :src="image.sourceUrl" :alt="image.alt">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  img {
    object-fit: cover;
  }
</style>
