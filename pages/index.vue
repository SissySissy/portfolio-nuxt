<template>
  <div>
    <project-grid :projects="projects" />
  </div>
</template>

<script>
import { ALL_PROJECTS, client } from '~/api/main'
import ProjectGrid from '~/components/ProjectGrid.vue'
export default {
  components: { ProjectGrid },
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
