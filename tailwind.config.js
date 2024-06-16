/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'teamwork' : 'url("src/Assets/teamwork.jpg")',
      }
    },
  },
  plugins: ['tailwindcss-animated'],
});


