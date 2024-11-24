/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#fab387",
        base: "#1e1e2e",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        sans: ["Satoshi", "sans-serif"]
      }
    },
  },
  plugins: [],
}

