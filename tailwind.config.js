module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Cardo', 'serif'],
    },
    extend: {
      colors: {
        background: '#f1f1f1'
      }
      //adding instead of substituting
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  