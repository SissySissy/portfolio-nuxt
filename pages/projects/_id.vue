<template>
  <div>
    {{ project.title }}{{ project.acf.backgroundColor }}
    <my-hero :project="project" />
    <full-image :my-image="project.acf.featureImage" :slider-color="project.acf.backgroundColor" />
    <intro-project :project="project" />

    <!-- <full-image v-if="type === 'Project_Acf_FlexibleContent_FullImage'" :my-image="project.acf.featureImage" :slider-color="project.acf.backgroundColor" />
    <centered-image v-else-if="type === 'Project_Acf_FlexibleContent_CenteredImage'" :my-image="project.acf.featureImage" :background-color="'yellow'" />
    <text-block v-else-if="type === 'Project_Acf_FlexibleContent_TextBlock'" />
    <two-images v-else-if="type === 'Project_Acf_FlexibleContent_DoubleImage'" />
    <div v-else>
      ""
    </div> -->
    <next-project :cursor="cursor" />
  </div>
</template>

<script>
import { client, SINGLE_PROJECT } from '~/api/main'
import CenteredImage from '~/components/CenteredImage.vue'
import FullImage from '~/components/FullImage.vue'
import IntroProject from '~/components/IntroProject.vue'
import MyHero from '~/components/MyHero.vue'
import NextProject from '~/components/NextProject.vue'
import TextBlock from '~/components/TextBlock.vue'
import TwoImages from '~/components/TwoImages.vue'

export default {
  components: { MyHero, FullImage, IntroProject, CenteredImage, TextBlock, TwoImages, NextProject },
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
