/* eslint-disable no-undef */
const flowbite = require('flowbite-react/tailwind')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    screens: {
      // Các breakpoints mặc định
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // Thêm breakpoint xxl
      xxl: '1600px',
    },
    extend: {
      backgroundImage: {
        'radial-gradient-custom': 'radial-gradient(circle at 0% 0%, #cdffd8, #94b9ff)',
      },
    },
  },
  plugins: [flowbite.plugin()],
}
