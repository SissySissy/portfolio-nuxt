<template>
  <div class="two-images">
    <div v-for="(item, index) in images" :key="index" :style="{ 'background-color': item.color }" class="image-wrap" :class="{ middle: item.centred }">
      <div v-if="item.image.mimeType === 'video/mp4'" class="video-container">
        <video class="video" preload="auto" loop muted autoPlay>
          <source :src="item.image.mediaItemUrl" type="video/mp4">
        </video>
      </div>
      <template v-else>
        <img class="full-image w-full h-full absolute top-0 right-0 left-0 bottom-0" :src="item.image.sourceUrl" alt="te">
        <div class="slider" />
      </template>
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
