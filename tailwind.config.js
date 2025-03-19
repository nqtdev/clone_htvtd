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
      colors: {
        'main-colors': '#2582BD',
        'main-bgcolors': '#182441',
        'main-table': '#adb7c2',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        soro: ['Soro', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient-custom': 'radial-gradient(circle at 0% 0%, #cdffd8, #94b9ff)',
        'bg-img': "url('/src/assets/page_RarEkyc/section_content_b/background_section.png')",
        'bg-img-product': " url('/src/assets/image_products/background_products.png')",
      },
    },
  },
  plugins: [flowbite.plugin(), require('tailwindcss-animated')],
}
