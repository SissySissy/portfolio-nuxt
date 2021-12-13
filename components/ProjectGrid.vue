<template>
  <div class="projects-grid mt-80">
    <NuxtLink v-for="project of projects" :key="project.id" class="grid-item cursor-pointer relative" :to="`/projects/${project.projectId}`">
      <p class="caption overline">
        {{ project.title }}
      </p>
      <div class="wrapper-grid-item">
        <img v-if="project.acf.featureImage.mimeType.includes('image')" v-inview:class="['active']" :src="project.acf.featureImage.sourceUrl">
        <video
          v-if="project.acf.featureImage.mimeType.includes('video')"
          v-inview:class="['active']"
          :src="project.acf.featureImage.mediaItemUrl"
          autoplay
          loop
          muted
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$row: 5vw;

.projects-grid {
    display: grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: $row;

    @media only screen and (max-width: 800px) {
      padding: 0;
    }

    .grid-item img, .grid-item video {
        width: 0%;
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
          width: 100%;
        }
    }

    .grid-item:nth-child(5n + 1) {
    grid-column: 1 / span 3;
    grid-row: span 10;
    margin-bottom: $row * 3;
        @media only screen and (max-width: 800px) {
            grid-column: span 6;
            margin-bottom: 0;
            grid-row: span 10;
        }
    }

    .grid-item:nth-child(5n + 2) {
    grid-column: 4 / span 3;
    grid-row: span 10;
    margin-top: $row * 2;
    margin-bottom: $row * 3;
        @media only screen and (max-width: 800px) {
            grid-column: span 6;
            margin-bottom: 0;
            grid-row: span 10;
            margin-top: 0;
        }
    }

    .grid-item:nth-child(5n + 3) {
    grid-column: 1 / span 2;
    grid-row: span 8;
    margin-bottom: $row * 2;
        @media only screen and (max-width: 800px) {
            grid-column: span 6;
            margin-bottom: 0;
            grid-row: span 10;
            margin-top: 0;
        }
    }

    .grid-item:nth-child(5n + 4) {
    grid-column: 3 / span 2;
    grid-row: span 8;
    margin-top: $row * 1;
    margin-bottom: $row * 2;
        @media only screen and (max-width: 800px) {
            grid-column: span 6;
            margin-bottom: 0;
            grid-row: span 10;
            margin-top: 0;
        }
    }

    .grid-item:nth-child(5n + 5) {
    grid-column: 5 / span 2;
    grid-row: span 8;
    margin-top: $row * 2;
    margin-bottom: $row * 2;
        @media only screen and (max-width: 800px) {
            grid-column: span 6;
            margin-bottom: 0;
            margin-top: 0;
            grid-row: span 10;
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
      top: -30px;
    }

    .wrapper-grid-item {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    @media only screen and (max-width: 800px) {
      margin-bottom: 50px !important;
    }
  }

}

</style>
