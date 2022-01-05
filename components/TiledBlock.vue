<template>
  <div class="wrapper" :style="{ 'background': backgroundColor }">
    <div ref="container" class="slice-slider" :style="containerCss">
      <div :style="{ 'background-image': `url(${responsiveImage})`, 'background-position': `${sliceWidth / 3}px 0` }" class="slice" />
      <div :style="{ 'background-image': `url(${responsiveImage})`, 'background-position': `0 0` }" class="slice" />
      <div :style="{ 'background-image': `url(${responsiveImage})`, 'background-position': `${-sliceWidth / 3}px 0` }" class="slice" />
    </div>
  </div>
</template>

<script>
let resetTimeout = null

export default {
  props: {
    image: { type: Object, required: true },
    backgroundColor: { type: String, default: '' },
    direction: { type: Boolean, default: true }
  },
  data () {
    return {
      sliceHeight: 1
    }
  },
  computed: {
    sliceWidth () {
      return this.image.mediaDetails.width / this.image.mediaDetails.height * this.sliceHeight
    },
    containerCss () {
      return {
        opacity: this.sliceHeight <= 1 ? 0 : 1,
        '--width': `${this.sliceWidth}px`,
        transform: `rotate(${this.direction ? 15 : -15}deg)`
      }
    },
    responsiveImage () {
      const sortedSizes = [...this.image.mediaDetails.sizes].filter(size => size.name !== 'thumbnail').sort((a, b) => a.height - b.height)
      const responsiveImageUrl = sortedSizes.find(size => size.height > this.sliceHeight * (process.client ? window.devicePixelRatio : 1))
      return responsiveImageUrl?.sourceUrl || this.image.sourceUrl
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      if (resetTimeout) {
        clearTimeout(resetTimeout)
      }
      resetTimeout = setTimeout(() => {
        this.sliceHeight = this.$refs.container.clientHeight / 3
        resetTimeout = null
      }, 150)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-height: 95vh;
    overflow: hidden;
    position: relative;
    aspect-ratio: 5 / 4;
    min-width: 100%;
  }
  .slice-slider {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 140%;
    height: 140%;
    left: -20%;
    top: -20%;
    transform: rotate(15deg);
    opacity: 0;
    transition: opacity 1s;
  }

  .slice {
    width: 100%;
    height: 100%;
    background-size: var(--width) 100%;
    background-repeat: repeat;

    @screen md {
      &:nth-child(1) {
        animation: slide-right 60s linear infinite;
      }
      &:nth-child(2) {
        animation: slide-left 100s linear infinite;
      }
      &:nth-child(3) {
        animation: slide-right 50s -10s linear infinite;
      }
    }
  }

  @keyframes slide-left {
    from {
      background-position: 0 0;
    }
    to {
      background-position: var(--width) 0;
    }
  }

  @keyframes slide-right {
    from {
      background-position: var(--width) 0;
    }
    to {
      background-position: 0 0;
    }
  }
</style>
