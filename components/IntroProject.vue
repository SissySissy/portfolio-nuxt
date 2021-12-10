<template>
  <div class="row w-full">
    <div class="main col-8of24 offset-4of24 col-md-10of24 offset-md-2 col-sm-12of12 offset-sm-0 pl-0 lg:pl-10">
      <div class="headline font-serif italic mb-3">
        {{ project.acf.subtitle }}
      </div>
      <div class="overline mb-10">
        {{ project.acf.client }}
      </div>
      <p class="font-serif mb-10 lg:mb-0" v-html="project.content" />
    </div>
    <div class="side col-4of24 offset-2of24 col-md-8of24 col-sm-12of12 offset-sm-0">
      <div v-for="item of project.acf.techList" :key="item.techItem" class="overline mb-4 md:mb-6">
        {{ item.techItem }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
  .headline {
    font-size: clamp(1.75rem, 4vw, 3rem);
    line-height: 1.06;
  }
</style>
