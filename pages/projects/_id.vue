<template>
  <main>
    <my-hero :project="project" />
    <full-image :image="project.acf.featureImage" :slider-color="project.acf.backgroundColor" />
    <intro-project :project="project" />
    <div v-for="(item, index) in project.acf.flexibleContent" :key="index" class="w-full">
      <full-image v-if="item.fieldGroupName === 'Project_Acf_FlexibleContent_FullImage'" :image="item.image" :slider-color="project.acf.backgroundColor" />
      <centered-image v-else-if="item.fieldGroupName === 'Project_Acf_FlexibleContent_CenteredImage'" :image="item.image" :background-color="item.color" />
      <text-block v-else-if="item.fieldGroupName === 'Project_Acf_FlexibleContent_TextBlock'" :columns="item.columns" />
      <two-images v-else-if="item.fieldGroupName === 'Project_Acf_FlexibleContent_DoubleImage'" :images="item.images" />
      <tiled-block v-else-if="item.fieldGroupName === 'Project_Acf_FlexibleContent_TiledMockups'" :image="item.image" :direction="item.direction" :background-color="item.color" />
    </div>
    <next-project :cursor="cursor" />
  </main>
</template>

<script>
import { SINGLE_PROJECT } from '~/api/main'
import CenteredImage from '~/components/CenteredImage.vue'
import FullImage from '~/components/FullImage.vue'
import IntroProject from '~/components/IntroProject.vue'
import MyHero from '~/components/MyHero.vue'
import NextProject from '~/components/NextProject.vue'
import TextBlock from '~/components/TextBlock.vue'
import TiledBlock from '~/components/TiledBlock.vue'
import TwoImages from '~/components/TwoImages.vue'

export default {
  components: { MyHero, FullImage, IntroProject, CenteredImage, TextBlock, TwoImages, NextProject, TiledBlock },
  async asyncData ({ $graphql, params, app }) {
    const id = parseInt(params.id)

    const res = await $graphql.default.request(SINGLE_PROJECT, { id })

    const project = res?.projects?.edges?.[0]?.node || null
    const cursor = res?.projects?.edges?.[0]?.cursor || null

    console.log(project.excerpt)

    const meta = {
      title: project.title,
      meta: [
        { hid: 'description', name: 'description', content: project?.excerpt || '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `${project.title}` }
      ]
    }

    return {
      project,
      cursor,
      meta
    }
  },
  head () {
    return this.meta
  },
  mounted () {
    // console.log(this.project)
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
