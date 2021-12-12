<template>
  <div>
    <div class="w-full relative flex justify-center items-center top-48 z-20">
      <h1 class="xl:text-9xl md:text-8xl text-5xl w-full text-center italic font-serif mb-10">
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
