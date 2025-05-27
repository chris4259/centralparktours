/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F4F4F', // forest green
        'secondary': '#D4AF37', // muted gold
        'light-beige': '#F5F5DC', // beige
      },
      fontFamily: {
        'sans': ['Inter', 'Satoshi', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
