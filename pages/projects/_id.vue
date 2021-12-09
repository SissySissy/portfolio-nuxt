<template>
  <span>
    {{ project.title }}
  </span>
</template>

<script>
import { client, SINGLE_PROJECT } from '~/api/main'

export default {
  async asyncData ({ params, app }) {
    const id = parseInt(params.id)

    const res = await client.query({
      query: SINGLE_PROJECT,
      variables: {
        id
      }
    })
    const project = res.data?.projects?.edges?.[0]?.node || null
    const cursor = res.data?.projects?.edges?.[0]?.cursor || null

    return {
      project,
      cursor
    }
  }
}
</script>

<style>

</style>
