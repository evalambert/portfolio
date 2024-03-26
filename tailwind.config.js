/* @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: "#111111"
      }, 
      fontFamily: {
        AgrandirGrandBold: ['AgrandirGrandBold', 'Helvetica', 'sans-serif'],
        AgrandirMedium: ['AgrandirMedium', 'Helvetica', 'sans-serif'],
        CartaNueva: ['CartaNueva', 'Times New Roman', 'serif'],
        FK: ['FK', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        200: '200px',
        160: '160px',
        150: '150px',
        20: '20px'
      }
    },
  },
  plugins: [],
};
