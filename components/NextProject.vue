<template>
  <div v-if="nextProject" v-inview:class="['active']" class="next-content relative">
    <div class="mb-10 overline">
      ( Next )
    </div>
    <NuxtLink class="medium-title italic" :to="`/projects/${nextProject.projectId}`" @mouseover="animateImage">
      {{ nextProject.title }}
    </NuxtLink>
    <div class="cursor">
      <div class="cursor-media">
        <img class="preview" :src="nextProject.acf.featureImage.sourceUrl" :alt="nextProject.title">
      </div>
    </div>
  </div>
</template>

<script>
import { client, NEXT_PROJECT, FIRST_PROJECT } from '~/api/main'
export default {
  props: {
    cursor: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      nextProject: null
    }
  },
  async mounted () {
    const cursor = this.cursor
    const nextPageReq = await client.query({
      query: NEXT_PROJECT,
      variables: {
        cursor
      }
    })
    this.nextProject = nextPageReq.data?.projects?.edges?.[0]?.node || null
    if (!this.nextProject) {
      const firstProject = await client.query({
        query: FIRST_PROJECT
      })
      this.nextProject = firstProject.data?.projects?.edges[0]?.node
    }
  },
  methods: {
    animateImage () {
      console.log('he')
      this.$gsap.from('.preview', { scale: 1.6, duration: 1.4, ease: 'Power2.easeInOut', delay: -1.6 })
    }
  }
}
</script>

<style lang="scss" scoped>
  .next-content {
    padding: 350px 0;
    text-align: center;
    .medium-title {
      font-size: clamp(4rem, 5vw , 8rem);
      letter-spacing: .05rem;
      font-family: Cardo, serif;
      line-height: 1.15;
    }
    .preview {
      width: 0px;
      height: 250px;
      object-fit: cover;
      z-index: -1;
      transition: 0.5s ease-in-out;
    }
    &.active .preview{
      width: 250px;
    }
    @media only screen and (max-width: 1250px) {
        padding: 170px 0;
    }
  }

  .cursor {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  contain: layout style size;
  pointer-events: none;
  &.media-blend {
    z-index: 100;
    mix-blend-mode: exclusion;
    .cursor-media {
      filter: invert(1);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: -24px;
    left: -24px;
    display: block;
    width: 48px;
    height: 48px;
    transform: scale(0.2);
    background: black;
    border-radius: 50%;
  }
  .cursor-media {
    display: block;
    height: 350px;
    width: 350px;
    overflow: hidden;
    border-radius: 100%;
    transform: scale(0);
    margin: -175px 0 0 -175px;
    position: relative;
    img {
      height: 350px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
}
</style>
