<template>
  <video
    ref="video"
    v-inview:enter="playVideo"
    v-inview:leave="pauseVideo"
    class="w-full h-full absolute top-0 right-0 left-0 bottom-0 object-cover"
    preload="auto"
    loop
    muted
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
  },
  methods: {
    playVideo () {
      if (this.$refs.video) {
        this.$refs.video.play()
      }
    },
    pauseVideo () {
      if (this.$refs.video) {
        this.$refs.video.pause()
      }
    }
  }
}
</script>

<style>

</style>
