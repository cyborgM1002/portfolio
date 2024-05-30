/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../react-mini-apps/src/**/*.{js,ts,jsx,tsx}",
    "../vue-mini-apps/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(0,223,192)",
      },
      width: {
        authCard: "26rem",
      },
      height: {
        modalCard: "22rem",
      },
    },
  },
  plugins: [],
};
