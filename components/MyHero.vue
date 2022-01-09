<template>
  <div class="hero w-full relative flex flex-column justify-center items-center">
    <h1 class="project-title w-full italic text-center">
      {{ project.title }}
    </h1>
    <div class="absolute left-10 bottom-10">
      <NuxtLink class="link overline text-white" to="/">
        ( back )
      </NuxtLink>
    </div>
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
    min-height: 60vh;
  }
  .project-title {
    font-size: clamp(4rem, 5vw , 8rem);
    letter-spacing: .05rem;
    font-family: Cardo, serif;
    line-height: 1.15;
  }
</style>
