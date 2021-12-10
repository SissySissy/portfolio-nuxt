<template>
  <div>
    <test-canvas />
    <project-grid :projects="projects" />
  </div>
</template>

<script>
import { ALL_PROJECTS, MAIN_PAGE, client } from '~/api/main'
import ProjectGrid from '~/components/ProjectGrid.vue'
import TestCanvas from '~/components/TestCanvas.vue'
export default {
  components: { TestCanvas, ProjectGrid },
  async asyncData () {
    const res = await client.query({
      query: ALL_PROJECTS
    })
    const pageReq = await client.query({
      query: MAIN_PAGE
    })

    const projects = res.data?.projects?.nodes || []
    const pageData = pageReq.data?.page || {}
    console.log(pageData)
    return {
      projects,
      pageData
    }
  },
  mounted () {
    this.$store.commit('changePageColor', '#F1F1F1')
    this.$store.commit('saveDataHeader', this.pageData)
  }
}
</script>
