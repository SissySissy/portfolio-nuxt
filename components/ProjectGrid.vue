<template>
  <div class="projects-grid">
    <NuxtLink v-for="project of projects" :key="project.id" class="grid-item cursor-pointer relative" :to="`/projects/${project.projectId}`">
      <div class="caption ml-4">
        <span class="font-serif italic text-lg">
          {{ project.title }}
        </span>
        <span class="p-1"> — </span>
        <span v-for="(category, index) in project.acf.category" :key="index" class="overline">
          {{ category }}<span v-if="index + 1 < project.acf.category.length">, </span>
        </span>
      </div>
      <div class="wrapper-grid-item" @mouseover="$store.commit('toggleHoveringOnProject')" @mouseout="$store.commit('toggleHoveringOnProject')">
        <video-component v-if="project.acf.featureImage.mimeType === 'video/mp4'" v-inview:class="['active']" :my-video="project.acf.featureImage" />
        <image-component v-else v-inview:class="['active']" :image="project.acf.featureImage" :sizes="`(max-width: ${bp['lg']}) 100vw, (max-width: ${bp['2xl']}) 65vw, min(50vw, 1200px)`" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import twConfig from '~/tailwind.config'

export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    bp () {
      return twConfig.theme.screens
    }
  },
  mounted () {
    console.log(this.projects)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$row: 5vw;

.projects-grid {
    padding: 0;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: $row;

    @screen md {
      padding: 20px;
    }

    .grid-item img, .grid-item video {
        width: 100%;
        height: 100%;
        object-fit: cover;
         -webkit-transition: -webkit-transform .5s cubic-bezier(.4,.22,.21,1.04);
        transition: -webkit-transform .5s cubic-bezier(.4,.22,.21,1.04);
        -o-transition: -o-transform .5s cubic-bezier(.4,.22,.21,1.04);
        -moz-transition: transform .5s cubic-bezier(.4,.22,.21,1.04),-moz-transform .5s cubic-bezier(.4,.22,.21,1.04);
        transition: transform .5s cubic-bezier(.4,.22,.21,1.04);
        transition: transform .5s cubic-bezier(.4,.22,.21,1.04),-webkit-transform .5s cubic-bezier(.4,.22,.21,1.04),-moz-transform .5s cubic-bezier(.4,.22,.21,1.04),-o-transform .5s cubic-bezier(.4,.22,.21,1.04);

        &:hover {
          transform: scale(1.055);
        }

        &.active {
          // opacity: .7;
          // transition: transform .5s cubic-bezier(.4,.22,.21,1.04);
        }
    }

    .grid-item:nth-child(5n + 1) {
      grid-column: span 6;
      margin-bottom: 52px;
      grid-row: span 10;

      @screen md {
        grid-column: 1 / span 3;
        grid-row: span 10;
        margin-bottom: $row * 3;
      }
    }

    .grid-item:nth-child(5n + 2) {
      grid-column: span 6;
      margin-bottom: 52px;
      grid-row: span 10;
      margin-top: 0;

      @screen md {
        grid-column: 4 / span 3;
        grid-row: span 10;
        margin-top: $row * 2;
        margin-bottom: $row * 3;
      }
    }

    .grid-item:nth-child(5n + 3) {
      grid-column: span 6;
      margin-bottom: 52px;
      grid-row: span 10;
      margin-top: 0;

      @screen md {
        grid-column: 1 / span 2;
        grid-row: span 8;
        margin-bottom: $row * 2;
      }
    }

    .grid-item:nth-child(5n + 4) {
      grid-column: span 6;
      margin-bottom: 52px;
      grid-row: span 10;
      margin-top: 0;

      @screen md {
        grid-column: 3 / span 2;
        grid-row: span 8;
        margin-top: $row * 1;
        margin-bottom: $row * 2;
      }
    }

    .grid-item:nth-child(5n + 5) {
      grid-column: span 6;
      margin-bottom: 52px;
      margin-top: 0;
      grid-row: span 10;

      @screen md {
        grid-column: 5 / span 2;
        grid-row: span 8;
        margin-top: $row * 2;
        margin-bottom: $row * 2;
      }
    }

  .grid-item {
    position: relative;
    // @for $i from 1 through 5 {
    //   &:nth-child(5n + #{$i}) img {
    //     transition-delay: #{$i*0.1}s;
    //   }
    // }
    .caption {
      position: absolute;
      top: -35px;

      .overline {
        font-size: .8rem;
        letter-spacing: .12;
      }
    }

    .wrapper-grid-item {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

  }

}

</style>
