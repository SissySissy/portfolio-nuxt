<template>
  <div class="hamburger-menu">
    <div class="base-layer layer" />
    <div class="menu-layer layer">
      <div class="menu-background" />
      <div class="container">
        <div class="wrapper">
          <div class="info">
            <h3 class="headline font-serif italic text-2xl lg:text-3xl mb-3">
              About me
            </h3>
            <p class="line text-xl font-serif mb-10">
              test
            </p>
            <div class="menu-links">
              <nav>
                <ul>
                  <li class="line">
                    Linkedin
                  </li>
                  <li class="line">
                    Artstation
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div ref="interests" class="interests">
            <h3 class="headline font-serif italic text-2xl lg:text-3xl mb-10">
              Interests
            </h3>
            <a v-for="interest in interestsArray" :key="interest.name" class="overline" @mouseover="showBackgroundImage(interest.image)" @mouseleave="hideBackgroundImage()">
              {{ interest.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Boolean
    }
  },
  data: () => {
    return {
      interestsArray: [
        // TODO
        { name: 'interest1', image: '../assets/image1.jpeg' },
        { name: 'interest2', image: 'https://picsum.photos/200/300' },
        { name: 'interest3', image: 'https://picsum.photos/200/300' }
      ]
    }
  },
  watch: {
    state () {
      if (!this.state) {
      // hide menu
        this.$gsap.to(['.layer'], {
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
        this.fadeIn('.info')
        this.fadeIn('.interests')
      }
    }
  },
  mounted () {
  },
  methods: {
    fadeIn (node) {
      this.$gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
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

  $blue: #3f5996;
  $darkBlue : #273f78;

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
          height: 100%;
          width: 100%;
          background: $darkBlue;
      }

      .menu-layer {
          position: relative;
          background: $blue;
          width: 100%;
          height: 100%;
          overflow: hidden;

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
          }

          .container {
              height: 100%;
          }

          .wrapper {
              position: relative;
              height: 100%;
              .info {
                  position: relative;
                  top: 200px;
              }
              .menu-links {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  position: relative;
                  bottom: 0;
                  nav {
                      display: block;
                      ul {
                          margin: 0;
                          padding: 0;
                          li {
                              list-style: none;
                              font-size: 6rem;
                              font-weight: 700;
                              cursor: pointer;
                              height: 135px;
                              overflow: hidden;
                              position: relative;
                          }
                      }
                  }
              }
              .interests {
                  position: absolute;
                  bottom: 80px;
                  margin-top: 16px;

                  a {
                      cursor: pointer;
                      padding: 8px;
                      margin: 0 32px;
                      transition: 0.3s ease-in-out;

                      &:first-of-type {
                        margin-left: 0;
                      }
                  }
              }
          }
      }

  }

</style>
