<template>
  <div>
    <div class="w-full hero relative flex justify-center items-center top-48 z-20">
      <h1 class="project-title w-full italic text-center">
        Hi, It's Silvia, <br> Interaction Design is <br>my Passion
      </h1>
    </div>
    <project-grid :projects="projects" />
    <main-page-hero :images="images" />
  </div>
</template>

<script>
import { ALL_PROJECTS, IMAGES_ARRAY, client } from '~/api/main'
import MainPageHero from '~/components/MainPageHero.vue'
import ProjectGrid from '~/components/ProjectGrid.vue'
export default {
  components: { ProjectGrid, MainPageHero },
  async asyncData () {
    const res = await client.query({
      query: ALL_PROJECTS
    })
    const imagesArrayReq = await client.query({
      query: IMAGES_ARRAY
    })

    const projects = res.data?.projects?.nodes || []

    const images = imagesArrayReq.data?.page?.acfAbout?.heroFiles || []

    return {
      projects,
      images
    }
  },
  mounted () {
    this.$store.commit('changePageColor', '#F1F1F1')
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
