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

        'accent' : "#4f9fed",
        'secondary' : "#79cff1",
        'primary' : "#23e9c7",
        'background' : "#fafffe",
        'background2' : "FBF7F7",
        'text' : "#031f1a",
        'text2' : "828282",
        
      },
      backgroundImage: {
        'teamwork' : 'url("src/Assets/teamwork.jpg")',

      }
    },
  },
  plugins: ['tailwindcss-animated'],
});


