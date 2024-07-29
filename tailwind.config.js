/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    screens: {
      'tn': '350px',
      'sm': '640px',
      'md': '768px',
      'alg': '910px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily : {
        'lora': ['lora'],
        'inter': ['inter'],
      },
      boxShadow : {
        'card-1': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      },
      
    },
    colors: {
      'vblack': 'rgb(3 7 18)',
      'vwhite': 'rgb(243 244 246)',
      'vblue': 'rgb(3 105 161)',
      'vbrown': 'rgb(107, 47, 26)',
    },
    animation: {
      opac: 'opac 0.7s ease-in',
      left: 'left 0.7s ease-in',
      inf: 'inf 10s linear infinite'
    },
    keyframes: {
      opac: {
        '0%':{
          opacity: '0',
        },
        '100%':{
          opacity: '1',
        },
      },
      left :{
        '0%': {
          left: '-400px',
        },
        '100%': {
          left: '0%',
        },
      },
      inf : {
        '0%': {
          left: '0',
        },
        '100%': {
          left: 'calc(-100% + 56px)',
        },
      },
    },
    backgroundImage: {
      'hero-image': "url('https://ik.imagekit.io/zjcuhh7cp/pexels-jvdm-1457842%20(1).png?updatedAt=1719851306200')",
    },
    
  },
  plugins: [],
}


