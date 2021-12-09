<template>
  <div>
    {{ project.title }}{{ project.acf.backgroundColor }}
  </div>
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
  },
  mounted () {
    this.$store.commit('changePageColor', this.project.acf.backgroundColor)
  },
  methods: {
    changeColor (color) {
      this.$store.commit('changePageColor', color)
    }
  }
}
</script>

<style>

</style>
