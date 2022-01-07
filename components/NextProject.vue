<template>
  <div v-if="nextProject" v-inview:class="['active']" class="next-content z-10" @mouseover="isHovering = true" @mouseout="isHovering = false">
    <div
      class="circle"
      :class="{hovering: isHovering}"
    >
      <video-component v-if="nextProject.acf.featureImage.mimeType === 'video/mp4'" class="full-image" :my-video="nextProject.acf.featureImage" />
      <image-component v-else :image="nextProject.acf.featureImage" />
    </div>
    <div class="z-10">
      <div class="mb-10 overline">
        ( Next )
      </div>
      <NuxtLink class="medium-title italic" :to="`/projects/${nextProject.projectId}`">
        {{ nextProject.title }}
      </NuxtLink>
      <div class="mt-10 overline">
        {{ nextProject.acf.subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from './ImageComponent.vue'
import VideoComponent from './VideoComponent.vue'
import { NEXT_PROJECT, FIRST_PROJECT } from '~/api/main'
export default {
  components: { ImageComponent, VideoComponent },
  props: {
    cursor: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      nextProject: null,
      isHovering: false
    }
  },
  async mounted () {
    const cursor = this.cursor
    const nextPageRes = await this.$graphql.default.request(NEXT_PROJECT, { cursor })
    this.nextProject = nextPageRes?.projects?.edges?.[0]?.node || null

    if (!this.nextProject) {
      const firstProjectRes = await this.$graphql.default.request(FIRST_PROJECT)
      this.nextProject = firstProjectRes?.projects?.edges[0]?.node
    }
  }
}
</script>

<style lang="scss" scoped>
  .next-content {
    padding: 350px 0;
    text-align: center;
    position: relative;
    .medium-title {
      z-index: 10;
      font-size: clamp(4rem, 5vw , 8rem);
      letter-spacing: .05rem;
      font-family: Cardo, serif;
      line-height: 1.15;
    }
    .circle {
      pointer-events: none;
      position: absolute;
      left: calc(50% - 125px);
      top: calc(50% - 125px);
      width: 250px;
      height: 250px;
      overflow: hidden;
      object-fit: cover;
      overflow: hidden;
      transition: 0.5s ease-in-out;
      border-radius: 250px;
      transform: scale(.3);
      z-index: -1;
      opacity: .5;
    }
    &.active {
      .circle {
        transform: scale(1);
        &.hovering {
          opacity: .8;
          transform: scale(1.25);
        }
      }
    }

    @media only screen and (max-width: 1250px) {
        padding: 170px 0;
    }
  }
</style>
