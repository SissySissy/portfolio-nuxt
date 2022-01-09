<template>
  <div class="two-images w-full">
    <div v-for="(item, index) in images" :key="index" :style="{ 'background-color': item.color }" class="image-wrap" :class="{ middle: item.centred }">
      <video-component v-if="item.image.mimeType === 'video/mp4'" :my-video="item.image" />
      <image-component v-else :image="item.image" :sizes="`(max-width: ${breakpoints.md}) 100vw, 50vw`" />
    </div>
  </div>
</template>

<script>
import ImageComponent from './ImageComponent.vue'
import VideoComponent from './VideoComponent.vue'
import tailwindConfig from '~/tailwind.config'

export default {
  components: { ImageComponent, VideoComponent },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    breakpoints () {
      return tailwindConfig.theme.screens
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .image-wrap {
    width: 100%;
    aspect-ratio: 5/4;
    max-height: 95vh;
    position: relative;
    @screen lg {
      width: 50%;
      aspect-ratio: 8/9;
    }
    &.middle{
      img, video {
        padding:0;
        width: 100%;
        margin: 0;
        @screen lg {
          padding: 15% 0;
          width: 70%;
          margin: auto;
        }
      }
    }
  }
  .two-images {
    width: 100%;
    height: 56.25%;
    display: flex;
    position: relative;
    height: auto;
    flex-wrap: wrap;
  }
</style>
