/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '892px',
      lg: '1186px',
      xl: '1480px',
      xxl: '1620px',

    },
    container:{
      center: true,
      padding: {
        DEFAULT: '7vw',
        sm: '5vw',
        md: '4vw',
        lg: '4vw',
        xl: '4vw',
        xxl: '2vw',
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
  plugins: [],
}

