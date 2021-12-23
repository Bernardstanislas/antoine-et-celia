module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'body': ["Lato", 'sans-serif', 'system-ui'],
    },
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
