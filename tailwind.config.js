/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/portfolio-container/src/**/*.{js,ts,ejs,html}",
    "./packages/portfolio-main/src/**/*.{js,ts,jsx,tsx}",
    "./packages/react-mini-apps/src/**/*.{js,ts,jsx,tsx}",
    "./packages/vue-mini-apps/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

