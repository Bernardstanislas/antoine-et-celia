module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'title': ["'Playfair Display'", 'sans-serif', 'system-ui'],
      'body': ["'Slabo 27px'", 'sans-serif', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'habilles-portrait': "url('/habilles-portrait.jpg')",
      },
      colors: {
        'robe-green': '#b2c2ba'
      }
    }
  },
  mode: 'jit',
  purge: {
    options: {
      safelist: []
    }
  },
  darkMode: 'media',
  plugins: [],
}
