<template>
  <div class="hero w-full relative flex flex-column justify-center items-center">
    <h1 class="xl:text-9xl md:text-8xl text-5xl w-full text-center italic font-serif mb-10">
      {{ project.title }}
    </h1>
    <NuxtLink class="link overline absolute left-10 bottom-10 cursor-pointer" to="/">
      back
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    // console.log(this.project.acf.featureImage)
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    height: 60vh;
  }
</style>
