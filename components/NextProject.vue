<template>
  <div class="nextcase-content relative">
    <div class="mb-5 overline">
      Get Next Project
    </div>
    <NuxtLink class="italic font-serif" :to="`/projects/${project.projectId}`">
      {{ project.title }}
    </NuxtLink>
    <!-- <img :src="h" :alt="h"> -->
  </div>
</template>

<script>
import { client, NEXT_PROJECT, FIRST_PROJECT } from '~/api/main'
export default {
  props: {
    cursor: {
      type: String,
      default: () => '1'
    }
  },
  async asyncData () {
    const cursor = parseInt('44')

    const res = await client.query({
      query: NEXT_PROJECT,
      variables: {
        cursor
      }
    })
    let project = res.data?.projects?.edges?.[0]?.node || null
    if (!project) {
      const firstProject = await client.query({
        query: FIRST_PROJECT
      })
      project = firstProject.data?.projects?.edges[0]?.node
    }

    return {
      project
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
