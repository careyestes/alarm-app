const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      'blue-light': '#0E476C',
      'blue': '#052E49',
      'green': '#008935',
      'grey-light': '#EEEEEE',
      'grey': '#5C5C5C',
      'orange': '#F0551B',
      'white': '#fff',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
