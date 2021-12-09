<template>
  <div class="row">
    <div class="col-16of24 offset-4of24 col-md-20of24 offset-md-2 col-sm-12of12 offset-sm-0 flex flex-wrap justify-between">
      <div v-for="column in columns" :key="column.titleSection" class="col-10of24 col-md-11of24 col-sm-12of12">
        <p class="overline uppercase font-sans mb-10 md:mb-16">
          {{ column.titleSection }}
        </p>
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
      type: Object,
      default: () => {}
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
