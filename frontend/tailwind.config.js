/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'gray-main': '#465A69',
        'blue-main': '#1877F2',
      },
      spacing: {
        '290px': '290px',
        '980px': '980px'
      }
    },
  },
  plugins: [],
};
