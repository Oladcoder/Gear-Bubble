/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       "Homecol": "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)", 
       "home": "#282828",
       "pritext":"black",
       "rest":"#eaeaea"
      },
      screens:{
        'sm': {'max': '480px'}
      },
      translate:{
        'translate-x-nav':'--tw-translate-x: 110%;'
      }, 
      spacing:{
        '9h': '92vh', 
        '9p': '91%', 
        '8p' : '86%',
        "10h": '100vh',
        '6h' : '60vh', 
        '45h' : '55vh',
        '8h' :'80vh', 
        '89h' : '89vh',
        '82' : '22rem'
      },
      transitionDuration:{
        '5': '500ms'
      }
    },
  },
  plugins: [],
}

// #bfbfbf