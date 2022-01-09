<template>
  <div v-if="randomImage" aria-hidden="true" class="circle" :class="{ onProject: hoveringOnProject}" :style="transformStyle">
    <div class="container">
      <div class="overline">
        view case
      </div>
      <img v-if="type === 'image'" :src="randomImage.mediaItemUrl">
      <video v-if="type === 'video'" :src="randomImage.mediaItemUrl" autoplay loop muted />
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
  data: () => {
    return {
      randomImage: null,
      circle: null,
      pos: { x: 0, y: 0 },
      mouse: { x: 0, y: 0 },
      running: false,
      index: 0
    }
  },
  computed: {
    type () {
      if (this.randomImage.mimeType.includes('image')) {
        return 'image'
      } else {
        return 'video'
      }
    },
    transformStyle () {
      return { transform: `translate(${this.pos.x}px, ${this.pos.y}px)` }
    },
    hoveringOnProject () {
      return this.$store.state.hoveringOnProject
    }
  },
  mounted () {
    this.running = true
    this.pickOneImage()
    this.pos = { x: window.innerWidth / 2, y: 300 }
    this.mouse = { x: window.innerWidth / 2, y: 300 }
    this.animate()

    window.addEventListener('mousemove', this.setMousePos)
  },
  destroyed () {
    this.running = false
    this.$store.commit('toggleHoveringOnProject')
    window.removeEventListener('mousemove', this.setMousePos)
  },
  methods: {
    setMousePos (e) {
      this.mouse.x = e.pageX
      this.mouse.y = e.pageY
      if (!this.running) {
        this.running = true
        this.animate()
      }
    },
    pickOneImage () {
      if (!this.images || this.images.length === 0) {
        return null
      }
      if (this.index === this.images.length) {
        this.index = 0
      }
      // const randomIndex = Math.floor(Math.random() * this.images.length)
      this.randomImage = this.images[this.index].image
      this.index++

      setTimeout(() => {
        if (this.running) {
          this.pickOneImage()
        }
      }, Math.random() * 2000 + 2000)
    },
    animate () {
      const dist = Math.sqrt((this.mouse.x - this.pos.x) ** 2 + (this.mouse.y - this.pos.y) ** 2)
      if (dist < 45) {
        this.running = false
      }
      const mult = (dist - 40) / window.innerWidth * 0.4

      this.pos.x = this.pos.x + (this.mouse.x - this.pos.x) * mult
      this.pos.y = this.pos.y + (this.mouse.y - this.pos.y) * mult
      if (this.running) {
        requestAnimationFrame(() => {
          this.animate()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle {
    position: absolute;
    left: 0;
    top: 0;
    width: 0px;
    height: 0px;

    .container {
      width: 300px;
      height: 300px;
      background: black;
      border-radius: 50%;
      overflow: hidden;
      transform: translate(-50%, -50%) scale(0.2);
      transition: all 0.2s;
      animation: 2s startCircle;
    }
    .overline {
      display: none;
    }
    img, video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(2);
      transition: all 0.2s;
      pointer-events: none;
    }
    &:hover {
      .container {
        transform: translate(-50%, -50%) scale(1);
        img, video {
          transform: scale(1);
        }
      }
    }
    &.onProject{
      pointer-events: none;
      .container {
         transform: translate(-50%, -50%) scale(.8);
         background: white;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         .overline {
           position: absolute;
           display: block;
           color: black
         }
         img, video {
          opacity:0;
        }
      }
    }
  }

  @keyframes startCircle {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.2);
    }

    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.2);
    }
  }
</style>
