<template>
  <div>
    <test-canvas />
    <div v-for="project of projects" :key="project.id">
      <NuxtLink :to="`/projects/${project.projectId}`">
        {{ project.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { ALL_PROJECTS, client } from '~/api/main'
import TestCanvas from '~/components/TestCanvas.vue'
export default {
  components: { TestCanvas },
  async asyncData () {
    const res = await client.query({
      query: ALL_PROJECTS
    })

    const projects = res.data?.projects?.nodes || []

    return {
      projects
    }
  }
}
</script>
