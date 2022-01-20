<template>
  <div
    class="wrapper"
    :style="{
      'background': pageBackgroundColor,
      '--highlight-color': highlightColor
    }"
    @mousedown="changeParagraphColor"
  >
    <main-header :color="pageBackgroundColor" />
    <nuxt :aria-hidden="menuIsExpanded" />
    <main-footer :aria-hidden="menuIsExpanded" />
  </div>
</template>

<script>
import MainFooter from '~/components/MainFooter.vue'
import MainHeader from '~/components/MainHeader.vue'
export default {
  components: { MainHeader, MainFooter },
  data: () => {
    return {
      changeParagraphColorIndex: 0,
      ParagraphPalette: ['#003F34', '#566F72', '#FF5F5F', '#3F5996', '#8CC2AF', '#DDB4EC'],
      highlightColor: '#FF5F5F'
    }
  },
  computed: {
    pageBackgroundColor () {
      return this.$store.state.pageBackgroundColor
    },
    pageNoScroll () {
      return this.$store.state.pageNoScroll
    },
    menuIsExpanded () {
      return this.$store.state.menuIsExpanded
    }
  },
  watch: {
    pageNoScroll (value) {
      if (value) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  },
  mounted () {
    this.changeParagraphColor()
  },
  methods: {
    changeParagraphColor () {
      if (this.changeParagraphColorIndex === this.ParagraphPalette.length) {
        this.changeParagraphColorIndex = 0
      }
      // for each click on the page change color of the highlight
      this.highlightColor = this.ParagraphPalette[this.changeParagraphColorIndex]
      this.changeParagraphColorIndex++
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    transition: all 0.3s;
    color: white;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.25s;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
  }

  ::selection {
    background: var(--highlight-color);
  }

</style>
