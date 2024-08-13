module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#add8e6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}