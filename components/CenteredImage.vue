<template>
  <div :style="{ 'background-color': backgroundColor }" class="centred-image w-full">
    <div class="container">
      <video-component v-if="image.mimeType === 'video/mp4'" :my-video="image" />
      <image-component v-else :image="image" :sizes="`(max-width: ${breakpoints.md}) 100vw, min(80vw, 1440px)`" />
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
    image: {
      type: Object,
      default: () => {}
    },
    backgroundColor: {
      type: String,
      default: () => 'red'
    }
  },
  data: () => {
    return {
      imageAnimation: null
    }
  },
  computed: {
    breakpoints () {
      return tailwindConfig.theme.screens
    }
  }
}
</script>

<style lang="scss" scoped>
  .centred-image {
    @screen md {
      padding: 10% 0;
    }
    .container {
      position: relative;
      aspect-ratio: 1/1;
      width: 100%;
      margin: 0;
      @screen md {
        max-width: 1440px;
        width: 80%;
        margin: auto;
        aspect-ratio: 16/9;
      }
      img, video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

  }
</style>
