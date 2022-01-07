<template>
  <div class=" text-white">
    <div class="hero z-20 px-10">
      <h1 class="project-title italic">
        Portfolio 2022
      </h1>
    </div>
    <project-grid :projects="projects" />
    <circle-cursor :images="images" />
  </div>
</template>

<script>
import { ALL_PROJECTS, IMAGES_ARRAY } from '~/api/main'
import CircleCursor from '~/components/CircleCursor.vue'
import ProjectGrid from '~/components/ProjectGrid.vue'
export default {
  components: { ProjectGrid, CircleCursor },
  async asyncData ({ $graphql }) {
    const projectsRes = await $graphql.default.request(ALL_PROJECTS)
    const projects = projectsRes?.projects?.nodes || []

    const imagesRes = await $graphql.default.request(IMAGES_ARRAY)
    const images = imagesRes?.page?.acfAbout?.heroFiles || []

    return {
      projects,
      images
    }
  },
  mounted () {
    this.$store.commit('changePageColor', '#222222')
  }
}
</script>
<style lang="scss" scoped>
  .hero {
    width: 100%;
    min-height: 60vh;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    }
  .project-title {
    font-size: clamp(5rem, 10vw , 14rem);
    letter-spacing: .05rem;
    font-family: Cardo, serif;
    line-height: 1.15;
    text-align: center;
  }
</style>
