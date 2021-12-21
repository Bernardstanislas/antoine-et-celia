module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'body': ["'Playfair Display'", 'sans-serif', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'habilles-portrait': "url('/habilles-portrait.jpg')",
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
