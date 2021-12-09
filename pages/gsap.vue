<template>
  <div class="page-index">
    <iframe style="width:640px;height:480px;border:0px;" src="https://cables.gl/view/6182e6ada69e9d02762f566d?s=xt7CnrgjDdyq468s" />
    <p>
      <NuxtLink to="about">ABOUT</NuxtLink>
    </p>
    <div class="content">
      <div class="box">
        d
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll () {
      this.$gsap.to('.box', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      })
    }
  }
}
</script>

<style>
.page-index {
  color: #e2e8f0;
  background-color: #2f495e;
  min-height: 100vh;
}
.content {
  width: 100%;
  min-height: 300vh;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #00c58e;
}
</style>
