<template>
  <div class="wrapper" :style="{ 'background': backgroundColor }">
    <div ref="container" class="slice-slider" :style="containerCss">
      <div :style="{ 'background-image': `url(${image.sourceUrl})` }" class="slice" />
      <div :style="{ 'background-image': `url(${image.sourceUrl})` }" class="slice" />
      <div :style="{ 'background-image': `url(${image.sourceUrl})` }" class="slice" />
    </div>
  </div>
</template>

<script>
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
        '--height': `${this.sliceHeight}px`,
        '--width': `${width}px`,
        transform: `rotate(${this.direction ? 15 : -15}deg)`
      }
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
      this.sliceHeight = this.$refs.container.clientHeight / 3
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-height: 95vh;
    overflow: hidden;
    position: relative;
    aspect-ratio: 16 / 9;
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
    background-size: var(--width) var(--height);
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
