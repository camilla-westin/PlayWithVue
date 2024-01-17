/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "vue-green": "#3BB98F",
        "vue-dark-grey": "#252529",
      },
    },
  },
  plugins: [],
};
