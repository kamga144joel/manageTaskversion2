/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#64748B',
        dark: '#1E293B',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [
    require('tailwindcss-forms'),
    require('tailwindcss-typography'),
  ],
}
