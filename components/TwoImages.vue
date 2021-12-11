<template>
  <div class="two-images">
    <div v-for="(item, index) in images" :key="index" :style="{ 'background-color': item.color }" class="image-wrap" :class="{ middle: item.centred }">
      <img :src="item.image.sourceUrl">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .middle {
    img {
      padding:10%;
    }
  }
  img {
    object-fit: cover;
  }
</style>
