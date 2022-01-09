<template>
  <div class="intro row w-full">
    <div class="main col-8of24 offset-4of24 col-md-10of24 offset-md-2 col-sm-12of12 offset-sm-0">
      <div class="headline font-serif italic mb-3">
        {{ project.acf.subtitle }}
      </div>
      <div v-if="project.acf.client" class="overline mb-10">
        {{ project.acf.client }}
      </div>
      <div class="font-serif mb-10 lg:mb-0" v-html="project.content" />
      <div v-if="project.acf.links" class="mt-0 mb-14 w-fit lg:mt-10 lg:mb-0">
        <a
          v-for="item of project.acf.links"
          :key="item.link.title"
          :href="item.link.url"
          :target="item.link.target"
          rel="noopener noreferrer"
          class="link mr-6 overline block mb-6 lg:inline "
        >
          {{ item.link.title }}
          <my-icon v-if="item.link.target === '_blank'" name="outside-link" />
        </a>
      </div>
    </div>
    <div class="side col-4of24 offset-2of24 col-md-8of24 col-sm-12of12 offset-sm-0">
      <div v-for="item of project.acf.techList" :key="item.techItem" class="pill">
        {{ item.techItem }}
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '~/components/MyIcon.vue'
export default {
  components: { MyIcon },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    console.log(this.project.acf.links)
  }
}
</script>

<style lang="scss">
  .link {
    font-size: 0.75rem;
    width: fit-content;

    svg {
      transition: transform 300ms ease;
      margin-bottom: 2px;
    }
    &:hover{
      svg {
        transform: translate(2px, -2px);
      }
    }
  }
  .headline {
    font-size: clamp(1.75rem, 4vw, 3rem);
    line-height: 1.25;
    letter-spacing: 0.025rem;
  }
  .intro{
     @media only screen and (min-width: 767px) {
        padding: 150px 0 250px;
    }
  }
</style>
