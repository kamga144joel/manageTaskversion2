/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- IMPORTANT: Change this from 'media' (or add it if missing)
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  modules: {
    affichage : ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'focus'],

  },
}
