import colors from './src/utils/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as necessary for file types
  ],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}

