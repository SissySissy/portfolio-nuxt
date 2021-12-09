<template>
  <div>
    <test-canvas />
    <project-grid :projects="projects" />
  </div>
</template>

<script>
import { ALL_PROJECTS, client } from '~/api/main'
import ProjectGrid from '~/components/ProjectGrid.vue'
import TestCanvas from '~/components/TestCanvas.vue'
export default {
  components: { TestCanvas, ProjectGrid },
  async asyncData () {
    const res = await client.query({
      query: ALL_PROJECTS
    })

    const projects = res.data?.projects?.nodes || []

    return {
      projects
    }
  },
  mounted () {
    this.$store.commit('changePageColor', '#F1F1F1')
  }
}
</script>
