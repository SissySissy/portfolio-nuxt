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
      sans: ['Poppins', 'sans-serif'],
      serif: ['Cardo', 'serif'],
    },
    extend: {
      colors: {
        background: '#f1f1f1',
        emerald : '#052329',
        jade :'#094F54'
      }
      //adding instead of substituting
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  