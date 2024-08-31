const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // container:{
      //   center:true,
      //   padding:'2rem'
      // },
      // inset:{
      //   '18':'4.5rem'
      // },
      // width:{
      //   '22':'5.5rem'
      // }
      boxShadow:{
        glass:'inset 0 2px 22px 0 rgba(255,255,255,0.6)'
        //white color with opacity 0.6👆
      },
      colors:{
        'gray':colors.gray
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}

