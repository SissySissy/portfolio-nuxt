<template>
  <div :style="{ 'background-color': backgroundColor }" class="w-full">
    <div v-if="myImage.mimeType === 'video/mp4'" class="video-container">
      <video class="video" preload="auto" loop muted autoPlay>
        <source :src="myImage.mediaItemUrl" type="video/mp4">
      </video>
    </div>
    <div class="aspect-ratio--16-9 lg col-12of24 image-container ">
      <img class="full-image w-full h-full absolute top-0 right-0 left-0 bottom-0" :src="myImage.sourceUrl" alt="te">
      <div class="slider" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myImage: {
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
    animateImage () {
      const tl = this.$gsap.timeline()
      tl.to('.image-container', { duration: 0, visibility: 'visible' })
        .to('.slider', { width: '0%', duration: 1.4, ease: 'Power2.easeInOut' })
        .from('.full-image', { scale: 1.6, duration: 1.4, ease: 'Power2.easeInOut', delay: -1.6 })
        .from('.slider', { background: this.pageBackgroundColor })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
