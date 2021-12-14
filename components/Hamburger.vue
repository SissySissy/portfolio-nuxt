<template>
  <div class="hamburger-menu text-gray-50">
    <div class="base-layer layer bg-jade" />
    <div class="menu-layer bg-emerald layer">
      <div class="menu-background" />
      <garden class="fade" />
      <div v-if="pageData" class="container-menu">
        <div class="info">
          <div class="max-w-4xl fade md:text-center m-auto">
            <h3 class="line font-serif italic text-2xl lg:text-3xl mb-10">
              {{ pageData.acfAbout.titleMenu }}
            </h3>
            <div class="line lead-paragraph font-serif pb-10" v-html="pageData.content" />
            <div class="line interests">
              <h4 class="overline pb-10">
                My focus
              </h4>
              <div v-for="interest in pageData.acfAbout.interests" :key="interest.label" class="pill" @mouseover="showBackgroundImage(interest.background.sourceUrl)" @mouseleave="hideBackgroundImage()">
                {{ interest.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Garden from './Garden.vue'
import { client, MAIN_PAGE } from '~/api/main'
export default {
  // components: { Garden },
  props: {
    state: {
      type: Boolean
    }
  },
  data: () => {
    return {
      pageData: null
    }
  },
  watch: {
    state () {
      if (!this.state) {
      // hide menu
        this.$gsap.to('.layer', {
          duration: 0.8,
          height: 0,
          ease: 'power3.inOut',
          stagger: {
            amount: -0.07
          }
        })
        this.$gsap.to('.hamburger-menu', {
          duration: 1,
          css: { display: 'none' }
        })
      } else {
        // reveal TODO: menu on first render it jumps!
        this.$gsap.to('.hamburger-menu', {
          duration: 0,
          css: { display: 'block' }
        })
        this.$gsap.to('.layer', {
          duration: 0.8,
          height: '100%',
          ease: 'power3.inOut',
          stagger: {
            amount: 0.07
          }
        })
        // reveal content
        this.stagger('.line')
        this.fadeIn('.fade')
      }
    }
  },
  async mounted () {
    const pageReq = await client.query({
      query: MAIN_PAGE
    })

    this.pageData = pageReq.data?.page || null
  },
  methods: {
    fadeIn (node) {
      this.$gsap.from(node, {
        duration: 1,
        delay: 0.4,
        opacity: 0,
        ease: 'power3.inOut'
      })
    },
    stagger (array) {
      this.$gsap.from(array, {
        duration: 0.8,
        y: 50,
        delay: 0.1,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.3
        }
      })
    },
    showBackgroundImage (image) {
      this.$gsap.to('.menu-background', {
        duration: 0,
        backgroundImage: `url(${image})`
      })
      this.$gsap.to('.menu-background', {
        duration: 0.5,
        opacity: 0.8,
        ease: 'power3.inOut'
      })
      this.$gsap.from('.menu-background', {
        duration: 0.7,
        ease: 'power3.inOut'
      })
    },
    hideBackgroundImage () {
      this.$gsap.to('.menu-background', {
        duration: 0.4,
        opacity: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped >
  .lead-paragraph {
    font-size: clamp(1.25rem, 3.5vw, 1.5rem);
    font-weight: 300;
    letter-spacing: .05rem;
    line-height: 1.75;
    ::v-deep a {
      position: relative;
        padding-bottom: 4px;
        &:hover {
            &::before{
            transform: scaleX(0);
            }
        }
        &::before{
            content: "";
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background: currentColor;
            -webkit-transition: -webkit-transform .5s cubic-bezier(.4,.22,.21,1.04);
            transition: -webkit-transform .5s cubic-bezier(.4,.22,.21,1.04);
            -o-transition: -o-transform .5s cubic-bezier(.4,.22,.21,1.04);
            -moz-transition: transform .5s cubic-bezier(.4,.22,.21,1.04),-moz-transform .5s cubic-bezier(.4,.22,.21,1.04);
            transition: transform .5s cubic-bezier(.4,.22,.21,1.04);
            transition: transform .5s cubic-bezier(.4,.22,.21,1.04),-webkit-transform .5s cubic-bezier(.4,.22,.21,1.04),-moz-transform .5s cubic-bezier(.4,.22,.21,1.04),-o-transform .5s cubic-bezier(.4,.22,.21,1.04);
        }
      }
  }
  .container-menu{
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .info {
    padding-top: 150px ;
    position: relative;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    @media only screen and (max-width: 800px) {
      padding: 80px 24px 24px 24px;
    }
  }
  .interests {
    a {
        cursor: pointer;
        padding: 8px;
        margin: 0 16px;
        transition: 0.3s ease-in-out;
    }
  }
  .hamburger-menu {
      display: none;
      z-index: 8;
      top: 0;
      left:0;
      bottom: 0;
      right: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      .base-layer{
          z-index: -1;
          top: 0;
          left:0;
          bottom: 0;
          right: 0;
          position: fixed;
          height: 0;
          width: 100%;
      }
      .menu-layer {
          position: relative;
          width: 100%;
          height: 0;
          .menu-background {
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              position: absolute;
              height: 100%;
              width: 100%;
              opacity: 0;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
          }
      }
  }
</style>
