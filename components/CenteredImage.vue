<template>
  <div :style="{ 'background-color': backgroundColor }" class="centred-image w-full">
    <div class="container">
      <img v-if="type === 'image'" :src="myImage.mediaItemUrl">
      <video v-if="type === 'video'" :src="myImage.mediaItemUrl" autoplay loop muted />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myImage: {
      type: Object,
      default: () => {}
    },
    backgroundColor: {
      type: String,
      default: () => 'red'
    }
  },
  data: () => {
    return {
      imageAnimation: null
    }
  },
  computed: {
    type () {
      if (this.myImage.mimeType.includes('image')) {
        return 'image'
      } else {
        return 'video'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .centred-image {
    padding: 10% 0;
    .container {
      position: relative;
      max-width: 1440px;
      width: 80%;
      margin: auto;
      aspect-ratio: 16/9;
      @media only screen and (max-width: 800px) {
       aspect-ratio: 1/1;
       width: 100%;
       margin: 0;
     }
      img, video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @media only screen and (max-width: 800px) {
      padding: 0;
     }
  }
</style>
