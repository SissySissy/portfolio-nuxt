<template>
  <div class="two-images w-full">
    <div v-for="(item, index) in images" :key="index" :style="{ 'background-color': item.color }" class="image-wrap" :class="{ middle: item.centred }">
      <video-component v-if="item.image.mimeType === 'video/mp4'" :my-video="item.image" />
      <image-component v-else :image="item.image" />
    </div>
  </div>
</template>

<script>
import ImageComponent from './ImageComponent.vue'
import VideoComponent from './VideoComponent.vue'
export default {
  components: { ImageComponent, VideoComponent },
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
  .image-wrap {
    aspect-ratio: 8/9;
    max-height: 95vh;
    width: 50%;
    position: relative;
    @media only screen and (max-width: 800px) {
      width: 100%;
      aspect-ratio: 1/1;
    }
    &.middle{
      img, video {
        padding: 15% 0;
        width: 70%;
        margin: auto;
        @media only screen and (max-width: 800px) {
          padding:0;
          width: 100%;
          margin: 0;
        }
      }
    }
  }
</style>
