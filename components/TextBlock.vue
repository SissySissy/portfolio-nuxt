<template>
  <div class="row spacer">
    <div class="col-16of24 offset-4of24 col-md-20of24 offset-md-2 col-sm-12of12 offset-sm-0 flex flex-wrap justify-between">
      <template v-if="columns.length == 1 ">
        <h2 class="title-section col-6of24 col-sm-12of12 mb-10 md:mb-0">
          {{ columns[0].titleSection }}
        </h2>
        <p class="col-16of24 col-sm-12of12">
          {{ columns[0].textSection }}
        </p>
      </template>
      <div v-for="column in columns" v-else :key="column.titleSection" class="col-10of24 col-md-11of24 col-sm-12of12">
        <h2 class="title-section mb-10 md:mb-14">
          {{ column.titleSection }}
        </h2>
        <p class="mb-10 md:mb-0">
          {{ column.textSection }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .title-section {
    font-size: clamp(1.75rem, 4vw, 2rem);
    line-height: 1.06;
    font-style: italic;
    font-family: Cardo, serif;
    letter-spacing: 0.025rem;
  }
</style>
