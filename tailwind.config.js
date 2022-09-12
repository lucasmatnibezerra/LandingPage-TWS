/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        danger: ["Danger Neue Regular", "sans-serif"],
        hexi: ["Hexi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
