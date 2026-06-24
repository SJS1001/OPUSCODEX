/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        teal: '#14B8A6',
        sand: '#D4C6AA'
      },
      fontFamily: {
        sans: ['"Poppins Variable"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(15, 23, 42, 0.15)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
};
