module.exports = {
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Cardo', 'serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        background: '#f1f1f1',
        emerald: '#052329',
        jade: '#094F54'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
