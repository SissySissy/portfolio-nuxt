<template>
  <div class="projects-grid mt-80">
    <div v-for="project of projects" :key="project.id" class="overflow-hidden grid-item cursor-pointer relative">
      <NuxtLink :to="`/projects/${project.projectId}`">
        <img :src="project.acf.featureImage.sourceUrl">
        <div class="absolute caption font-serif">
          {{ project.title }}
        </div>
        <span> Interaction Design</span>
      </NuxtLink>
    </div>
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
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll () {
      this.$gsap.to('.grid-item', {
        opacity: 1,
        ease: 'Power1.easeInOut',
        stagger: {
          amount: 0.07
        },
        scrollTrigger: {
          trigger: '.projects-grid'
        }
      })
    }
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
      opacity: 0;
    }

    .grid-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s ease-in-out;

        &:hover {
            opacity: .7;
            transform: scale(1.1);
            transition: 0.3s ease-in-out;
        }
    }

    .grid-item .caption {
        bottom: -20px;
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
