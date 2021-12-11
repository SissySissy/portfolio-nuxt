<template>
  <div class="projects-grid mt-80">
    <NuxtLink v-for="project of projects" :key="project.id" class="grid-item cursor-pointer relative" :to="`/projects/${project.projectId}`">
      <div class="overflow-hidden">
        <img v-inview:class="['active']" :src="project.acf.featureImage.sourceUrl">
      </div>
      <div class="caption">
        {{ project.title }} <span> Interaction Design</span>
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

    .grid-item {
      position: relative;
      @for $i from 1 through 5 {
        &:nth-child(5n + #{$i}) img {
          transition-delay: #{$i*0.1}s;
        }
      }
      .caption {
        top: 100%;
        background: red;
      }
    }

    .grid-item img {
        opacity: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s ease-in-out;

        &.active {
          opacity: 1;
        }

        &:hover {
            opacity: .7;
            transform: scale(1.1);
            transition: 0.3s ease-in-out;
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
}

</style>
