<template>
  <div class="wrapper" :style="{ 'background': backgroundColor }">
    <div ref="container" class="slice-slider" :style="containerCss">
      <div :style="{ 'background-image': `url(${responsiveImage})` }" class="slice" />
      <div :style="{ 'background-image': `url(${responsiveImage})` }" class="slice" />
      <div :style="{ 'background-image': `url(${responsiveImage})` }" class="slice" />
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
    containerCss () {
      const width = this.image.mediaDetails.width / this.image.mediaDetails.height * this.sliceHeight

      return {
        opacity: this.sliceHeight <= 1 ? 0 : 1,
        '--width': `${width}px`,
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

    &:nth-child(1) {
      animation: slide-right 60s linear infinite;
    }
    &:nth-child(2) {
      animation: slide-left 100s linear infinite;
    }
    &:nth-child(3) {
      animation: slide-right 50s -10s linear infinite;
    }

    @media (max-width: theme('screens.md')), (prefers-reduced-motion) {
      &:nth-child(1) {
        background-position: calc(var(--width) / 3) 0;
        animation: none;
      }
      &:nth-child(2) {
        background-position: 0 0;
        animation: none;
      }
      &:nth-child(3) {
        background-position: calc(var(--width) / 3 * -1 ) 0;
        animation: none;
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
