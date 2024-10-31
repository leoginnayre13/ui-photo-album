/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480 px',
      sm: '640 px',
      md: '768 px',
      lg: '1024 px',
      xl: '1280 px',
    },
    extend: {
      colors: {
        'custom-maroon': '#872434',
      }
    },
  },
  plugins: [],
}

