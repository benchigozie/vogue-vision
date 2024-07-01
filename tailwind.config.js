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
      }
    },
    colors: {
      'vblack': 'rgb(3 7 18)',
      'vred': 'red',
      'vwhite': 'rgb(243 244 246)',
      'vblue': 'rgb(3 105 161)',
    },
  },
  plugins: [],
}

