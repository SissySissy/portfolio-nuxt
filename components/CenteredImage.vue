<template>
  <div :style="{ 'background-color': backgroundColor }" class="centred-image w-full">
    <div class="image-container">
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
    max-height: 95vh;
    overflow: hidden;
    display: flex;
    .image-container {
      width: 100%;
      position: relative;
      aspect-ratio: 5/4;
      @screen lg {
        aspect-ratio: 16/9;
      }
    }
    img, video {
      object-fit: cover;
      @screen md {
        width: 80%;
        margin: auto;
        max-width: 1440px;
        object-fit: contain;
      }
       @screen lg {
        width: 60%;
      }
    }
  }
</style>
