/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme_primary:"#0eb6f0",
        theme_orange:"#fb6514",
        theme_black:"#344054",
      }
    },
  },
 
  plugins: [
    require('daisyui'),
  ],
}

