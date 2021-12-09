<template>
  <div ref="container" class="canvas-container">
    <canvas ref="canvas" />
  </div>
</template>

<script>
import { hello } from '~/helpers/test'
/* eslint-disable */
export default {
    mounted () {
      
      hello(this.$refs.canvas, this.$refs.container, );

  }
}
</script>

<style lang="scss">
  .canvas-container {
    background-color: #1263A1;
    width: 100%;
    height: 100vh;
  }
</style>