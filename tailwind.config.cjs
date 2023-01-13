/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'main': '#FF6D00',
      'test': '#00FFFF',
      'secondary': '#3F3D56',
      'white': '#ffffff'
    },
    fontFamily: {
      herofont: ['Zilla Slab', "serif"]
  },
    extend: {}
  },
  plugins: []
};