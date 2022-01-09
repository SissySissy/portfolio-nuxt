<template>
  <div v-if="image" class="wrapper">
    <div class="image-container" :style="{ 'background': sliderColor }">
      <video-component v-if="image.mimeType === 'video/mp4'" class="full-image" :my-video="image" />
      <image-component v-else class="full-image" :image="image" :sizes="sizes" />
      <div class="slider" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    },
    sizes: {
      type: String,
      default: '100vw'
    },
    sliderColor: {
      type: String,
      default: () => ''
    }
  },
  data: () => {
    return {
      imageAnimation: null
    }
  },
  mounted () {
    this.imageAnimation = this.$gsap.timeline()
      .to('.image-container', { duration: 0, visibility: 'visible' })
      .to('.slider', { width: '0%', duration: 1.4, ease: 'Power2.easeInOut' })
      .from('.full-image', { scale: 1.6, duration: 1.4, ease: 'Power2.easeInOut', delay: -1.6 })
      .from('.slider', { background: this.sliderColor })
  },
  beforeDestroy () {
    this.imageAnimation.kill()
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-height: 95vh;
    overflow: hidden;
  }
  .image-container {
    width: 100%;
    position: relative;
    aspect-ratio: 16/9;
    @media only screen and (max-width: 800px) {
      aspect-ratio: 1/1;
    }
  }
</style>
