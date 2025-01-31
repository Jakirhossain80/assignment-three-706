/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '892px',
      lg: '1186px',
      xl: '1480px',

    },
    container:{
      center: true,
      padding: {
        DEFAULT: '7vw',
        sm: '8vw',
        md: '7vw',
        lg: '6vw',
        xl: '6vw',
      },    
    
    },


    extend: {
      fontFamily:{
        sora: ["Sora", "serif"],
        poppins: ["Poppins", "serif"],
      },

      colors: {
        'primary': '#111111',
        'secondary': '#EFEBE3',
        'accent': '#179800',
        'white': '#ffffff',
      },


    },
  },
  plugins: [require('daisyui'),],
}

