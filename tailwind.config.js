/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      animation: {
        glows: 'glow 1.5s infinite',
        slide:'slide 1.5s infinite alternate',
        text:'text 3s infinite loop',
      },
      keyframes: {
        glows: {
             '0%, 100%': {
               textShadow: '0 0 10px blue', // Example: Pink glow
             },
             '50%': {
               textShadow: '0 0 20px blue', // Example: Stronger pink glow
             },


      },
      slide:{
         '0%': {
            transform: 'translateX(0)', // Start position
          },
          '100%': {
            transform: 'translateX(20px)', // End position (adjust as needed)
          },


      },
      text:{
        '0%':{
          transition:'transition(0%)',
        },
        '100%':{
          transition: 'transition(100%)',
        }

        },


      }


    },
  },
  }

