/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet' : "#03045e",
        'blue' : "#0077b6",
        'skyblue' : "#00b4d8",
        'lightsky' : "#90e0ef",
        // 'gray' : "#caf0f8"
      },
      backgroundImage: {
        'teamwork' : 'url("src/Assets/teamwork.jpg")',
        'frontpage' : 'url(src/Assets/frontpage.jpg)',
      }
    },
  },
  plugins: ['tailwindcss-animated'],
});


