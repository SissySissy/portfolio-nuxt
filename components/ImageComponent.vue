<template>
  <!-- <div></div> -->
  <img
    class="w-full h-full absolute top-0 right-0 left-0 bottom-0 object-cover"
    :src="loaded ? image.sourceUrl : preview.sourceUrl"
    :alt="alt || image.altText"
    :srcset="loaded ? image.srcSet : ''"
    :sizes="loaded ? sizes : ''"
  >
</template>

<script>
export default {
  props: {
    image: { type: Object, required: true },
    alt: { type: String, default: '' },
    sizes: { type: String, default: '100vw' }
  },
  data () {
    return {
      loaded: false
    }
  },
  computed: {
    preview () {
      const sm = this.image.mediaDetails.sizes.find(size => size.name === 'medium')
      return sm
    }
  },
  mounted () {
    const img = document.createElement('img')
    img.addEventListener('load', () => {
      this.loaded = true
    })
    img.sizes = this.sizes
    img.src = this.image.sourceUrl
    img.srcset = this.image.srcSet
  }
}
</script>

<style>

</style>
