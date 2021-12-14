<template>
  <img class="w-full h-full absolute top-0 right-0 left-0 bottom-0 object-cover" :src="myImage.sourceUrl" alt="te">
</template>

<script>
export default {
  props: {
    myImage: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
