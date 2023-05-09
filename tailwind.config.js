/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    screens:{
      'mini': '350px',
      'x-short':'370px',
      'short':"394px",
      'xs': '450px',
      "md":'768px',
      "lg":"1024px",
      'xl':'1280px',
      '2xl':'1560px'
  
    },
    fontFamily:{
      "mont":['Montserrat', 'sans-serif'],
      "lora":['Lora', 'serif'],
      "crimson":['Crimson Pro', 'serif']
    },
    keyframes:{
      myAnimation:{
        '0%':{
          transform:'translateX(100rem)',
          opacity:'0',
        },
        '50%':{
          transform:'scale(1.5)',
        },
        '100%':{
          transform:'translateX(0)',
          opacity:'1'
        }
      },
   
    },
    animation:{
      myAnimation:'myAnimation 2s ease-in-out',
      secAnimation:'myAnimation 2s ease-in-out 1s forwards'
      // {
      //   'animation-timing-function':'ease-in-out',
      //   'animation-duration':'2s',
      //   'animation-name':'myAnimation',
      //   'animation-delay':'1s'

      // }
    }
  },
  plugins: [],
}

