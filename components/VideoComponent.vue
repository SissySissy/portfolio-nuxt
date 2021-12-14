<template>
  <video
    class="w-full h-full absolute top-0 right-0 left-0 bottom-0 object-cover"
    preload="auto"
    loop
    muted
    autoplay
  >
    <source :src="myVideo.mediaItemUrl" type="video/mp4">
  </video>
</template>

<script>
export default {
  props: {
    myVideo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
